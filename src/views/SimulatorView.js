// PREDIX Industrial Intelligence — What-If Predictive Scenario Lab View
import { fleetAssets } from '../data/fleetData.js';
import { calculateSimulatedRisk } from '../utils/riskModel.js';
import { showToast } from '../components/Toast.js';

let selectedMachine = fleetAssets[0]; // Default to CNC-04
let currentTemp = 94.2;
let currentTorque = 542.0;
let currentRpm = 3820;
let currentWear = 0.88;
let scenarioStatus = 'baseline'; // 'baseline' | 'dirty' | 'analyzed'
let savedScenarios = []; // In-memory session scenario comparison list [{ id, name, temp, torque, rpm, wear, risk, delta, driver }]

export function renderSimulatorView(machineIdParam = null) {
  if (machineIdParam) {
    const found = fleetAssets.find(m => m.id === machineIdParam);
    if (found) {
      selectedMachine = found;
      currentTemp = found.telemetry.temp;
      currentTorque = found.telemetry.torque;
      currentRpm = found.telemetry.rpm;
      currentWear = found.telemetry.toolWear;
      scenarioStatus = 'baseline';
    }
  }

  const baseline = selectedMachine.telemetry;
  const baseRisk = selectedMachine.failureProbability;

  // Calculate simulated outcome
  const simResult = calculateSimulatedRisk(currentTemp, currentTorque, currentRpm, currentWear, {
    temp: baseline.temp,
    torque: baseline.torque,
    rpm: baseline.rpm,
    toolWear: baseline.toolWear,
    failureProbability: baseRisk
  });

  const riskDelta = +(simResult.simulatedRisk - baseRisk).toFixed(1);
  const isReduction = riskDelta < 0;

  // Check if modified from baseline
  const isDirty = currentTemp !== baseline.temp || 
                  currentTorque !== baseline.torque || 
                  currentRpm !== baseline.rpm || 
                  currentWear !== baseline.toolWear;

  const statusLabel = isDirty 
    ? (scenarioStatus === 'analyzed' ? '● SCENARIO ANALYZED' : '● UNSAVED SCENARIO')
    : '● BASELINE';

  const statusColor = isDirty 
    ? (scenarioStatus === 'analyzed' ? 'text-secondary bg-secondary/15 border-secondary/30' : 'text-amber-400 bg-amber-500/15 border-amber-500/30')
    : 'text-status-healthy bg-status-healthy/15 border-status-healthy/30';

  return `
    <div class="px-3 sm:px-6 py-4 sm:py-6 max-w-[1440px] mx-auto space-y-4 sm:space-y-6">
      
      <!-- 01 / TOP SCENARIO LAB HEADER & PIPELINE -->
      <div class="predix-panel p-3.5 sm:p-4 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 sm:gap-4 border-l-4 border-l-secondary bg-surface-container-low/60">
        <div class="space-y-1 w-full lg:w-auto">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="text-[10px] font-mono text-secondary font-bold uppercase tracking-wider">PREDICTIVE SCENARIO LAB</span>
            <span class="text-on-surface-variant font-mono text-xs hidden xs:inline">•</span>
            <span class="text-xs font-bold text-on-surface font-mono tracking-wide uppercase">WHAT IF WE CHANGE THE MACHINE CONDITIONS?</span>
          </div>
          <!-- Signal Pipeline -->
          <div class="flex items-center gap-2 text-[10px] sm:text-[10.5px] font-mono font-semibold text-on-surface-variant pt-0.5 overflow-x-auto whitespace-nowrap hide-scrollbar flex-nowrap pb-1 lg:pb-0">
            <span class="text-secondary font-bold">CURRENT MACHINE</span>
            <span class="text-slate-600">→</span>
            <span class="text-sky-400 font-bold">CHANGE CONDITIONS</span>
            <span class="text-slate-600">→</span>
            <span class="text-amber-400 font-bold">RUN PREDICTION</span>
            <span class="text-slate-600">→</span>
            <span class="text-status-critical font-bold">COMPARE RISK</span>
            <span class="text-slate-600">→</span>
            <span class="text-status-healthy font-bold">CHOOSE ACTION</span>
          </div>
        </div>

        <!-- Engine & Scenario Status Badges -->
        <div class="flex flex-wrap items-center gap-2.5 font-mono text-[10.5px]">
          <span id="scenario-status-badge" class="px-3 py-1.5 rounded-lg border font-bold uppercase ${statusColor}">
            ${statusLabel}
          </span>
          <div class="px-3 py-1.5 rounded-lg bg-surface-container border border-border-subtle text-on-surface-variant">
            <span class="text-on-surface font-semibold">XGBoost v2.4.1</span> • <span class="text-secondary">Nonlinear Multi-variable Classifier</span>
          </div>
        </div>
      </div>

      <!-- MAIN LAB GRID: CONTROLS (LEFT) VS SIMULATION OUTCOMES (RIGHT) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        <!-- LEFT COLUMN: TARGET ASSET & SCENARIO ENGINEERING CONTROLS -->
        <div class="col-span-1 lg:col-span-5 flex flex-col gap-5">
          
          <!-- Target Machine Selector Card -->
          <div class="predix-panel p-5 space-y-3">
            <div class="flex items-center justify-between font-mono">
              <span class="font-label-md text-on-surface-variant uppercase text-[10px]">Target Asset Baseline</span>
              <span class="material-symbols-outlined text-secondary text-[18px]">precision_manufacturing</span>
            </div>
            
            <div>
              <select id="sim-machine-select" class="w-full bg-surface-container-low border border-border-subtle rounded-xl px-3.5 py-2 text-xs font-bold text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary cursor-pointer font-mono">
                ${fleetAssets.map(m => `
                  <option value="${m.id}" ${m.id === selectedMachine.id ? 'selected' : ''}>
                    ${m.id} - ${m.name} (${m.riskLevel} - ${m.failureProbability}%)
                  </option>
                `).join('')}
              </select>
            </div>

            <!-- Baseline Metrics Overview Strip -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-border-subtle text-xs font-mono">
              <div class="p-2 rounded bg-surface-container-low border border-border-subtle/50">
                <span class="text-[9px] text-on-surface-variant uppercase block">Temp</span>
                <span class="font-bold text-on-surface">${baseline.temp}°C</span>
              </div>
              <div class="p-2 rounded bg-surface-container-low border border-border-subtle/50">
                <span class="text-[9px] text-on-surface-variant uppercase block">Torque</span>
                <span class="font-bold text-on-surface">${baseline.torque} Nm</span>
              </div>
              <div class="p-2 rounded bg-surface-container-low border border-border-subtle/50">
                <span class="text-[9px] text-on-surface-variant uppercase block">RPM</span>
                <span class="font-bold text-on-surface">${baseline.rpm}</span>
              </div>
              <div class="p-2 rounded bg-surface-container-low border border-border-subtle/50">
                <span class="text-[9px] text-on-surface-variant uppercase block">Wear</span>
                <span class="font-bold text-on-surface">${baseline.toolWear} mm</span>
              </div>
            </div>
          </div>

          <!-- Scenario Engineering Sliders -->
          <div class="predix-panel p-5 flex flex-col gap-4 flex-1">
            <div class="flex items-center justify-between pb-2 border-b border-border-subtle font-mono">
              <div>
                <h3 class="text-xs font-bold text-on-surface uppercase tracking-wider">Scenario Parameter Sandbox</h3>
                <span class="text-[10px] text-on-surface-variant">Adjust stress variables to forecast non-linear risk</span>
              </div>
              <span class="material-symbols-outlined text-secondary text-[18px]">tune</span>
            </div>

            <div class="space-y-4 font-mono">
              
              <!-- Slider 1: Temperature -->
              <div>
                <div class="flex justify-between items-baseline mb-1 text-xs">
                  <label for="slider-temp" class="font-bold text-on-surface uppercase text-[11px]">Operating Temp</label>
                  <div class="flex items-center gap-2">
                    <span class="text-[10.5px] text-on-surface-variant">Baseline: <strong class="text-on-surface">${baseline.temp}°C</strong></span>
                    <span class="font-data-number text-sm font-bold text-secondary"><span id="val-temp">${currentTemp}</span>°C</span>
                  </div>
                </div>
                <input id="slider-temp" type="range" min="50" max="120" step="0.5" value="${currentTemp}" 
                       class="w-full h-1.5 bg-surface-container rounded-lg cursor-pointer accent-cyan-400"
                       aria-label="Operating Temperature Slider">
                <div class="flex justify-between text-[9.5px] text-on-surface-variant mt-1">
                  <span>Min: 50°C</span>
                  <span class="text-secondary font-semibold">Current Baseline: ${baseline.temp}°C</span>
                  <span>Max: 120°C</span>
                </div>
              </div>

              <!-- Slider 2: Torque Load -->
              <div>
                <div class="flex justify-between items-baseline mb-1 text-xs">
                  <label for="slider-torque" class="font-bold text-on-surface uppercase text-[11px]">Torque Load</label>
                  <div class="flex items-center gap-2">
                    <span class="text-[10.5px] text-on-surface-variant">Baseline: <strong class="text-on-surface">${baseline.torque} Nm</strong></span>
                    <span class="font-data-number text-sm font-bold text-secondary"><span id="val-torque">${currentTorque}</span> Nm</span>
                  </div>
                </div>
                <input id="slider-torque" type="range" min="300" max="600" step="5" value="${currentTorque}" 
                       class="w-full h-1.5 bg-surface-container rounded-lg cursor-pointer accent-cyan-400"
                       aria-label="Torque Load Slider">
                <div class="flex justify-between text-[9.5px] text-on-surface-variant mt-1">
                  <span>Min: 300 Nm</span>
                  <span class="text-secondary font-semibold">Current Baseline: ${baseline.torque} Nm</span>
                  <span>Max: 600 Nm</span>
                </div>
              </div>

              <!-- Slider 3: Rotational Speed (RPM) -->
              <div>
                <div class="flex justify-between items-baseline mb-1 text-xs">
                  <label for="slider-rpm" class="font-bold text-on-surface uppercase text-[11px]">Spindle / Rotor RPM</label>
                  <div class="flex items-center gap-2">
                    <span class="text-[10.5px] text-on-surface-variant">Baseline: <strong class="text-on-surface">${baseline.rpm} RPM</strong></span>
                    <span class="font-data-number text-sm font-bold text-secondary"><span id="val-rpm">${currentRpm}</span> RPM</span>
                  </div>
                </div>
                <input id="slider-rpm" type="range" min="2000" max="5000" step="50" value="${currentRpm}" 
                       class="w-full h-1.5 bg-surface-container rounded-lg cursor-pointer accent-cyan-400"
                       aria-label="Rotor Spindle Speed Slider">
                <div class="flex justify-between text-[9.5px] text-on-surface-variant mt-1">
                  <span>Min: 2000 RPM</span>
                  <span class="text-secondary font-semibold">Current Baseline: ${baseline.rpm} RPM</span>
                  <span>Max: 5000 RPM</span>
                </div>
              </div>

              <!-- Slider 4: Tool Wear Index -->
              <div>
                <div class="flex justify-between items-baseline mb-1 text-xs">
                  <label for="slider-wear" class="font-bold text-on-surface uppercase text-[11px]">Tool Wear / Sleeve Flank</label>
                  <div class="flex items-center gap-2">
                    <span class="text-[10.5px] text-on-surface-variant">Baseline: <strong class="text-on-surface">${baseline.toolWear} mm</strong></span>
                    <span class="font-data-number text-sm font-bold text-secondary"><span id="val-wear">${currentWear.toFixed(2)}</span> mm</span>
                  </div>
                </div>
                <input id="slider-wear" type="range" min="0" max="100" step="1" value="${Math.round(currentWear * 100)}" 
                       class="w-full h-1.5 bg-surface-container rounded-lg cursor-pointer accent-cyan-400"
                       aria-label="Tool Wear Index Slider">
                <div class="flex justify-between text-[9.5px] text-on-surface-variant mt-1">
                  <span>0.00 mm (New)</span>
                  <span class="text-secondary font-semibold">Current Baseline: ${baseline.toolWear} mm</span>
                  <span>1.00 mm (Worn)</span>
                </div>
              </div>

            </div>

            <!-- Quick Engineering Presets -->
            <div class="pt-3 border-t border-border-subtle font-mono">
              <span class="font-label-md text-on-surface-variant uppercase text-[10px] block mb-2">Scenario Engineering Presets</span>
              <div class="grid grid-cols-2 gap-2 text-xs">
                <button id="btn-preset-cooling" class="p-2 rounded-lg bg-surface-container-low hover:bg-surface-container border border-border-subtle text-left transition-all">
                  <div class="font-bold text-on-surface flex items-center gap-1 text-[11px]">
                    <span class="material-symbols-outlined text-[14px] text-secondary">ac_unit</span>
                    <span>Coolant Flush</span>
                  </div>
                  <div class="text-[9.5px] text-on-surface-variant mt-0.5">Temp 62°C • Torque 380</div>
                </button>

                <button id="btn-preset-fresh-tool" class="p-2 rounded-lg bg-surface-container-low hover:bg-surface-container border border-border-subtle text-left transition-all">
                  <div class="font-bold text-on-surface flex items-center gap-1 text-[11px]">
                    <span class="material-symbols-outlined text-[14px] text-status-healthy">build</span>
                    <span>New Tool Insert</span>
                  </div>
                  <div class="text-[9.5px] text-on-surface-variant mt-0.5">Wear 0.10 mm (Sharp)</div>
                </button>

                <button id="btn-preset-derating" class="p-2 rounded-lg bg-surface-container-low hover:bg-surface-container border border-border-subtle text-left transition-all">
                  <div class="font-bold text-on-surface flex items-center gap-1 text-[11px]">
                    <span class="material-symbols-outlined text-[14px] text-amber-400">speed</span>
                    <span>Load Derate 20%</span>
                  </div>
                  <div class="text-[9.5px] text-on-surface-variant mt-0.5">Torque 360 • 2800 RPM</div>
                </button>

                <button id="btn-preset-stress" class="p-2 rounded-lg bg-surface-container-low hover:bg-surface-container border border-border-subtle text-left transition-all">
                  <div class="font-bold text-on-surface flex items-center gap-1 text-[11px]">
                    <span class="material-symbols-outlined text-[14px] text-status-critical">warning</span>
                    <span>Stress Envelope</span>
                  </div>
                  <div class="text-[9.5px] text-on-surface-variant mt-0.5">Temp 98°C • Wear 0.88</div>
                </button>
              </div>
            </div>

            <!-- Action Controls Row -->
            <div class="pt-3 border-t border-border-subtle flex items-center gap-2 font-mono mt-auto">
              <button id="btn-reset-sim" class="py-2 px-3 bg-surface-container hover:bg-surface-container-high text-on-surface font-semibold text-xs rounded-xl border border-border-subtle transition-all flex items-center gap-1.5" title="Reset all parameters to machine baseline">
                <span class="material-symbols-outlined text-[15px] text-secondary">restart_alt</span>
                <span>Reset</span>
              </button>
              <button id="btn-save-scenario" class="flex-1 py-2 px-3 bg-secondary/20 hover:bg-secondary/30 text-secondary border border-secondary/30 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-sm" title="Save this scenario in session comparison list">
                <span class="material-symbols-outlined text-[16px]">bookmark_add</span>
                <span>Save Scenario</span>
              </button>
            </div>

          </div>
        </div>

        <!-- RIGHT COLUMN: DUAL COMPARISON GAUGES, SHAP ATTRIBUTION & COMPARISON TABLE -->
        <div class="col-span-1 lg:col-span-7 flex flex-col gap-5">
          
          <!-- Dual Comparison Gauge Card -->
          <div class="predix-panel p-6 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
            
            <!-- Baseline State Gauge -->
            <div class="flex-1 flex flex-col items-center text-center font-mono">
              <span class="font-label-md text-on-surface-variant uppercase text-[10px] mb-2">Current Baseline State</span>
              <div class="relative w-32 h-32 flex items-center justify-center my-1">
                <svg class="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="42" fill="none" stroke="#161F33" stroke-width="8"></circle>
                  <circle cx="50" cy="50" r="42" fill="none" stroke="#EF4444" stroke-width="8" 
                          stroke-dasharray="263.9" stroke-dashoffset="${263.9 * (1 - baseRisk / 100)}"></circle>
                </svg>
                <div class="flex flex-col items-center">
                  <span class="text-2xl font-data-number font-bold text-on-surface">${baseRisk}<span class="text-sm font-normal">%</span></span>
                </div>
              </div>
              <div class="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase bg-status-critical/15 text-status-critical border border-status-critical/30 mt-1">
                ${selectedMachine.riskLevel}
              </div>
            </div>

            <!-- Transition Arrow with Delta Shift -->
            <div class="hidden md:flex flex-col items-center justify-center text-on-surface-variant font-mono">
              <div class="w-10 h-10 rounded-full bg-surface-container border border-border-subtle flex items-center justify-center shadow-sm">
                <span class="material-symbols-outlined text-[22px] text-secondary">trending_flat</span>
              </div>
              <span id="sim-delta-badge" class="text-[10px] font-bold mt-1.5 px-2 py-0.5 rounded ${isReduction ? 'text-status-healthy bg-status-healthy/15 border border-status-healthy/30' : 'text-status-critical bg-status-critical/15 border border-status-critical/30'}">
                ${isReduction ? '' : '+'}${riskDelta}% Shift
              </span>
            </div>

            <!-- Simulated State Gauge (Reactive) -->
            <div class="flex-1 flex flex-col items-center text-center font-mono">
              <span class="font-label-md text-secondary uppercase text-[10px] mb-2">Simulated Outcome</span>
              <div class="relative w-36 h-36 flex items-center justify-center my-1">
                <svg class="absolute inset-0 w-full h-full -rotate-90 drop-shadow-[0_0_12px_rgba(0,0,0,0.5)]" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="42" fill="none" stroke="#161F33" stroke-width="8"></circle>
                  <circle id="sim-gauge-circle" cx="50" cy="50" r="42" fill="none" 
                          class="gauge-circle ${simResult.simulatedRisk >= 80 ? 'stroke-status-critical' : simResult.simulatedRisk >= 50 ? 'stroke-status-warning' : 'stroke-status-healthy'}" 
                          stroke-width="9" 
                          stroke-dasharray="263.9" 
                          stroke-dashoffset="${263.9 * (1 - simResult.simulatedRisk / 100)}"></circle>
                </svg>
                <div class="flex flex-col items-center">
                  <span id="sim-risk-display" class="text-3xl font-data-number font-bold text-on-surface">${simResult.simulatedRisk}<span class="text-base font-normal">%</span></span>
                </div>
              </div>
              <div id="sim-risk-badge" class="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase border-l-2 ${simResult.statusClass} mt-1">
                ${simResult.badgeText}
              </div>
            </div>

          </div>

          <!-- Before / After Risk Bar Comparison -->
          <div class="predix-panel p-4 space-y-2 font-mono text-xs">
            <div class="flex items-center justify-between">
              <span class="font-label-md text-on-surface-variant uppercase text-[10px]">Before / After Risk Transformation</span>
              <span class="text-[10px] text-on-surface-variant">NONLINEAR RISK MAPPING</span>
            </div>
            
            <div class="space-y-1.5">
              <div class="flex items-center gap-3">
                <span class="w-20 text-[10px] text-on-surface-variant">BASELINE:</span>
                <div class="flex-1 bg-surface-container h-2 rounded-full overflow-hidden">
                  <div class="bg-status-critical h-full rounded-full" style="width: ${baseRisk}%"></div>
                </div>
                <span class="w-12 text-right font-bold text-status-critical">${baseRisk}%</span>
              </div>

              <div class="flex items-center gap-3">
                <span class="w-20 text-[10px] text-secondary font-bold">SCENARIO:</span>
                <div class="flex-1 bg-surface-container h-2 rounded-full overflow-hidden">
                  <div id="sim-comparison-bar" class="h-full rounded-full ${simResult.simulatedRisk >= 80 ? 'bg-status-critical' : simResult.simulatedRisk >= 50 ? 'bg-status-warning' : 'bg-status-healthy'}" style="width: ${simResult.simulatedRisk}%"></div>
                </div>
                <span id="sim-comparison-val" class="w-12 text-right font-bold ${simResult.simulatedRisk >= 80 ? 'text-status-critical' : simResult.simulatedRisk >= 50 ? 'text-status-warning' : 'text-status-healthy'}">${simResult.simulatedRisk}%</span>
              </div>
            </div>
          </div>

          <!-- SHAP Explainer & Prescriptive Actions Card -->
          <div class="predix-panel p-5 space-y-4">
            <div class="flex items-center justify-between pb-2 border-b border-border-subtle font-mono">
              <div>
                <h3 class="text-xs font-bold text-on-surface uppercase tracking-wider">Why Did The Risk Change?</h3>
                <span class="text-[10px] text-on-surface-variant">TreeSHAP feature contributions relative to current baseline</span>
              </div>
              <span class="material-symbols-outlined text-secondary text-[18px]">psychology</span>
            </div>

            <!-- Dynamic Deterministic Explanation Summary -->
            <div id="sim-explanation-summary" class="p-3 rounded-xl bg-surface-container-low border border-border-subtle text-xs font-mono text-on-surface-variant">
              ${renderDeterministicExplanation(baseline, currentTemp, currentTorque, currentRpm, currentWear, riskDelta)}
            </div>

            <div class="grid grid-cols-1 md:grid-cols-12 gap-5">
              <!-- Prescriptive Actions List -->
              <div class="col-span-1 md:col-span-7 space-y-2.5">
                <h4 class="text-[10px] font-bold text-on-surface uppercase tracking-wider font-mono">Prescriptive Recommendations</h4>
                <div id="sim-actions-container" class="space-y-2 text-xs font-mono">
                  ${renderPrescriptiveActions(simResult.actions)}
                </div>
              </div>

              <!-- Feature SHAP Contribution Bars -->
              <div class="col-span-1 md:col-span-5 space-y-2.5">
                <h4 class="text-[10px] font-bold text-on-surface uppercase tracking-wider font-mono">Feature Risk Attribution</h4>
                <div id="sim-shap-container" class="space-y-2.5 text-xs font-mono">
                  ${renderShapBars(simResult.shap)}
                </div>
              </div>
            </div>
          </div>

          <!-- Session Saved Scenarios Comparison Table -->
          <div class="predix-panel overflow-hidden flex flex-col font-mono text-xs">
            <div class="p-4 bg-surface-container-low/60 border-b border-border-subtle flex items-center justify-between">
              <div>
                <h3 class="text-xs font-bold text-on-surface uppercase tracking-wider">Scenario Session Comparison</h3>
                <span class="text-[10px] text-on-surface-variant">Compare up to 3 saved sandbox iterations against baseline</span>
              </div>
              <span class="text-[10px] text-secondary font-semibold" id="saved-count-label">${savedScenarios.length} / 3 SAVED</span>
            </div>

            <div class="overflow-x-auto w-full">
              <table class="w-full text-left border-collapse min-w-[500px]">
                <thead>
                  <tr class="bg-surface-container-low/80 font-label-md text-on-surface-variant uppercase text-[9.5px] border-b border-border-subtle">
                    <th class="py-2.5 px-4">Scenario</th>
                    <th class="py-2.5 px-4">Conditions</th>
                    <th class="py-2.5 px-4">Risk</th>
                    <th class="py-2.5 px-4">Delta</th>
                    <th class="py-2.5 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody id="saved-scenarios-body" class="divide-y divide-border-subtle text-[11px]">
                  <tr class="bg-surface-container-low/40">
                    <td class="py-2.5 px-4 font-bold text-on-surface">Baseline (${selectedMachine.id})</td>
                    <td class="py-2.5 px-4 text-on-surface-variant">${baseline.temp}°C • ${baseline.torque}Nm • ${baseline.toolWear}mm</td>
                    <td class="py-2.5 px-4 font-bold text-status-critical">${baseRisk}%</td>
                    <td class="py-2.5 px-4 text-on-surface-variant">—</td>
                    <td class="py-2.5 px-4 text-right text-slate-500 font-semibold">Active</td>
                  </tr>
                  ${savedScenarios.map((sc, i) => `
                    <tr class="hover:bg-surface-container-low transition-colors">
                      <td class="py-2.5 px-4 font-bold text-secondary">${sc.name}</td>
                      <td class="py-2.5 px-4 text-on-surface-variant">${sc.temp}°C • ${sc.torque}Nm • ${sc.wear}mm</td>
                      <td class="py-2.5 px-4 font-bold ${sc.risk >= 80 ? 'text-status-critical' : sc.risk >= 50 ? 'text-status-warning' : 'text-status-healthy'}">${sc.risk}%</td>
                      <td class="py-2.5 px-4 font-bold ${sc.delta < 0 ? 'text-status-healthy' : 'text-status-critical'}">${sc.delta > 0 ? '+' : ''}${sc.delta}%</td>
                      <td class="py-2.5 px-4 text-right">
                        <button data-apply-scenario="${i}" class="btn-apply-sc px-2 py-0.5 rounded bg-secondary/15 hover:bg-secondary/30 text-secondary text-[10px] mr-1">Apply</button>
                        <button data-delete-scenario="${i}" class="btn-delete-sc px-2 py-0.5 rounded bg-status-critical/15 hover:bg-status-critical/30 text-status-critical text-[10px]">✕</button>
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </div>
  `;
}

function renderDeterministicExplanation(baseline, temp, torque, rpm, wear, delta) {
  const isReduction = delta < 0;
  const tempDiff = +(temp - baseline.temp).toFixed(1);
  const wearDiff = +(wear - baseline.toolWear).toFixed(2);
  const torqueDiff = +(torque - baseline.torque).toFixed(0);

  const drivers = [];
  if (Math.abs(tempDiff) > 2) {
    drivers.push(tempDiff < 0 ? `operating temperature reduced by ${Math.abs(tempDiff)}°C` : `operating temperature increased by ${tempDiff}°C`);
  }
  if (Math.abs(wearDiff) > 0.05) {
    drivers.push(wearDiff < 0 ? `tool wear reset with fresh cutting edge (-${Math.abs(wearDiff)} mm)` : `excessive tool wear accumulation (+${wearDiff} mm)`);
  }
  if (Math.abs(torqueDiff) > 20) {
    drivers.push(torqueDiff < 0 ? `motor torque load derated by ${Math.abs(torqueDiff)} Nm` : `torque demand elevated by ${torqueDiff} Nm`);
  }

  if (drivers.length === 0) {
    return `<strong>Baseline Envelope:</strong> Parameters are currently matching recorded asset operating baseline (${baseline.temp}°C, ${baseline.torque} Nm, ${baseline.toolWear} mm).`;
  }

  return `<strong>Risk ${isReduction ? 'Reduction' : 'Escalation'} Driver:</strong> Risk changed by <strong class="${isReduction ? 'text-status-healthy' : 'text-status-critical'}">${delta > 0 ? '+' : ''}${delta}%</strong> primarily because ${drivers.join(', and ')}.`;
}

function renderPrescriptiveActions(actions) {
  return actions.map(act => `
    <div class="p-2.5 rounded-lg bg-surface-container-low/60 border border-border-subtle flex items-start gap-2.5 hover:bg-surface-container-low transition-colors">
      <div class="w-6 h-6 rounded-md bg-secondary/15 text-secondary border border-secondary/30 flex items-center justify-center shrink-0 mt-0.5">
        <span class="material-symbols-outlined text-[15px]">${act.icon}</span>
      </div>
      <div>
        <h5 class="font-bold text-[11px] text-on-surface">${act.title}</h5>
        <p class="text-[10.5px] text-on-surface-variant mt-0.5 leading-relaxed font-sans">${act.desc}</p>
      </div>
    </div>
  `).join('');
}

function renderShapBars(shap) {
  const formatShap = (val, name) => {
    const isReduction = val < 0;
    const colorClass = isReduction ? 'text-status-healthy' : val === 0 ? 'text-on-surface-variant' : 'text-status-critical';
    const barBg = isReduction ? 'bg-status-healthy shadow-[0_0_6px_#10B981]' : 'bg-status-critical shadow-[0_0_6px_#EF4444]';
    const textSign = val > 0 ? `+${val}%` : `${val}%`;

    return `
      <div>
        <div class="flex justify-between font-mono text-[10.5px] mb-1">
          <span class="text-on-surface">${name}</span>
          <span class="${colorClass} font-bold">${textSign} Impact</span>
        </div>
        <div class="w-full h-1.5 bg-surface-container rounded-full overflow-hidden flex ${isReduction ? 'justify-end' : 'justify-start'}">
          <div class="shap-bar-fill h-full ${barBg} rounded-full" style="width: ${Math.min(100, Math.abs(val) * 2)}%"></div>
        </div>
      </div>
    `;
  };

  return `
    ${formatShap(shap.temp, 'Temperature')}
    ${formatShap(shap.toolWear, 'Tool Wear')}
    ${formatShap(shap.torque, 'Torque Load')}
    ${formatShap(shap.rpm, 'Rotor Speed')}
  `;
}

export function initSimulatorListeners() {
  const updateSimUI = () => {
    const baseline = selectedMachine.telemetry;
    const baseRisk = selectedMachine.failureProbability;

    const simResult = calculateSimulatedRisk(currentTemp, currentTorque, currentRpm, currentWear, {
      temp: baseline.temp,
      torque: baseline.torque,
      rpm: baseline.rpm,
      toolWear: baseline.toolWear,
      failureProbability: baseRisk
    });

    const riskDelta = +(simResult.simulatedRisk - baseRisk).toFixed(1);
    const isReduction = riskDelta < 0;

    // Update Numerical Readouts
    const riskDisplay = document.getElementById('sim-risk-display');
    if (riskDisplay) riskDisplay.innerHTML = `${simResult.simulatedRisk}<span class="text-base font-normal">%</span>`;

    const riskBadge = document.getElementById('sim-risk-badge');
    if (riskBadge) {
      riskBadge.className = `px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase border-l-2 ${simResult.statusClass} mt-1`;
      riskBadge.innerText = simResult.badgeText;
    }

    const deltaBadge = document.getElementById('sim-delta-badge');
    if (deltaBadge) {
      deltaBadge.className = `text-[10px] font-mono font-bold mt-1.5 px-2 py-0.5 rounded ${isReduction ? 'text-status-healthy bg-status-healthy/15 border border-status-healthy/30' : 'text-status-critical bg-status-critical/15 border border-status-critical/30'}`;
      deltaBadge.innerText = `${isReduction ? '' : '+'}${riskDelta}% Shift`;
    }

    // Update Comparison Bar
    const compBar = document.getElementById('sim-comparison-bar');
    const compVal = document.getElementById('sim-comparison-val');
    if (compBar && compVal) {
      compBar.style.width = `${simResult.simulatedRisk}%`;
      compBar.className = `h-full rounded-full ${simResult.simulatedRisk >= 80 ? 'bg-status-critical' : simResult.simulatedRisk >= 50 ? 'bg-status-warning' : 'bg-status-healthy'}`;
      compVal.innerText = `${simResult.simulatedRisk}%`;
      compVal.className = `w-12 text-right font-bold ${simResult.simulatedRisk >= 80 ? 'text-status-critical' : simResult.simulatedRisk >= 50 ? 'text-status-warning' : 'text-status-healthy'}`;
    }

    // Update Radial Gauge
    const gaugeCircle = document.getElementById('sim-gauge-circle');
    if (gaugeCircle) {
      const strokeColor = simResult.simulatedRisk >= 80 ? '#EF4444' : simResult.simulatedRisk >= 50 ? '#F59E0B' : '#10B981';
      gaugeCircle.setAttribute('stroke', strokeColor);
      gaugeCircle.setAttribute('stroke-dashoffset', `${263.9 * (1 - simResult.simulatedRisk / 100)}`);
    }

    // Update Explanation Summary
    const expEl = document.getElementById('sim-explanation-summary');
    if (expEl) {
      expEl.innerHTML = renderDeterministicExplanation(baseline, currentTemp, currentTorque, currentRpm, currentWear, riskDelta);
    }

    // Update Prescriptive Actions & SHAP
    const actionsEl = document.getElementById('sim-actions-container');
    if (actionsEl) actionsEl.innerHTML = renderPrescriptiveActions(simResult.actions);

    const shapEl = document.getElementById('sim-shap-container');
    if (shapEl) shapEl.innerHTML = renderShapBars(simResult.shap);

    // Update Dirty / Analyzed Badge
    const isDirty = currentTemp !== baseline.temp || 
                    currentTorque !== baseline.torque || 
                    currentRpm !== baseline.rpm || 
                    currentWear !== baseline.toolWear;
    
    scenarioStatus = isDirty ? 'analyzed' : 'baseline';
    const statusBadge = document.getElementById('scenario-status-badge');
    if (statusBadge) {
      statusBadge.innerText = isDirty ? '● SCENARIO ANALYZED' : '● BASELINE';
      statusBadge.className = `px-3 py-1.5 rounded-lg border font-bold uppercase ${isDirty ? 'text-secondary bg-secondary/15 border-secondary/30' : 'text-status-healthy bg-status-healthy/15 border-status-healthy/30'}`;
    }
  };

  // Target Machine Dropdown
  document.getElementById('sim-machine-select')?.addEventListener('change', (e) => {
    const machine = fleetAssets.find(m => m.id === e.target.value);
    if (machine) {
      selectedMachine = machine;
      currentTemp = machine.telemetry.temp;
      currentTorque = machine.telemetry.torque;
      currentRpm = machine.telemetry.rpm;
      currentWear = machine.telemetry.toolWear;
      
      const tempSlider = document.getElementById('slider-temp');
      const torqueSlider = document.getElementById('slider-torque');
      const rpmSlider = document.getElementById('slider-rpm');
      const wearSlider = document.getElementById('slider-wear');
      
      if (tempSlider) tempSlider.value = currentTemp;
      if (torqueSlider) torqueSlider.value = currentTorque;
      if (rpmSlider) rpmSlider.value = currentRpm;
      if (wearSlider) wearSlider.value = Math.round(currentWear * 100);

      document.getElementById('val-temp').innerText = currentTemp;
      document.getElementById('val-torque').innerText = currentTorque;
      document.getElementById('val-rpm').innerText = currentRpm;
      document.getElementById('val-wear').innerText = currentWear.toFixed(2);

      updateSimUI();
    }
  });

  // Slider Inputs with Direct Feedback
  document.getElementById('slider-temp')?.addEventListener('input', (e) => {
    currentTemp = parseFloat(e.target.value);
    document.getElementById('val-temp').innerText = currentTemp;
    updateSimUI();
  });

  document.getElementById('slider-torque')?.addEventListener('input', (e) => {
    currentTorque = parseFloat(e.target.value);
    document.getElementById('val-torque').innerText = currentTorque;
    updateSimUI();
  });

  document.getElementById('slider-rpm')?.addEventListener('input', (e) => {
    currentRpm = parseFloat(e.target.value);
    document.getElementById('val-rpm').innerText = currentRpm;
    updateSimUI();
  });

  document.getElementById('slider-wear')?.addEventListener('input', (e) => {
    currentWear = parseFloat(e.target.value) / 100;
    document.getElementById('val-wear').innerText = currentWear.toFixed(2);
    updateSimUI();
  });

  // Engineering Presets
  document.getElementById('btn-preset-cooling')?.addEventListener('click', () => {
    currentTemp = 62;
    currentTorque = 380;
    document.getElementById('slider-temp').value = currentTemp;
    document.getElementById('slider-torque').value = currentTorque;
    document.getElementById('val-temp').innerText = currentTemp;
    document.getElementById('val-torque').innerText = currentTorque;
    updateSimUI();
    showToast('Applied Coolant Flush Preset (Temp: 62°C, Torque: 380 Nm)', 'info');
  });

  document.getElementById('btn-preset-fresh-tool')?.addEventListener('click', () => {
    currentWear = 0.10;
    document.getElementById('slider-wear').value = 10;
    document.getElementById('val-wear').innerText = '0.10';
    updateSimUI();
    showToast('Applied Fresh Tool Insert Preset (Wear: 0.10 mm)', 'info');
  });

  document.getElementById('btn-preset-derating')?.addEventListener('click', () => {
    currentTorque = 360;
    currentRpm = 2800;
    document.getElementById('slider-torque').value = currentTorque;
    document.getElementById('slider-rpm').value = currentRpm;
    document.getElementById('val-torque').innerText = currentTorque;
    document.getElementById('val-rpm').innerText = currentRpm;
    updateSimUI();
    showToast('Applied 20% Load Derating Preset (Torque: 360 Nm, RPM: 2800)', 'info');
  });

  document.getElementById('btn-preset-stress')?.addEventListener('click', () => {
    currentTemp = 98;
    currentTorque = 560;
    currentWear = 0.88;
    document.getElementById('slider-temp').value = currentTemp;
    document.getElementById('slider-torque').value = currentTorque;
    document.getElementById('slider-wear').value = 88;
    document.getElementById('val-temp').innerText = currentTemp;
    document.getElementById('val-torque').innerText = currentTorque;
    document.getElementById('val-wear').innerText = '0.88';
    updateSimUI();
    showToast('Applied Maximum Stress Envelope Preset', 'warning');
  });

  // Reset to Baseline
  document.getElementById('btn-reset-sim')?.addEventListener('click', () => {
    currentTemp = selectedMachine.telemetry.temp;
    currentTorque = selectedMachine.telemetry.torque;
    currentRpm = selectedMachine.telemetry.rpm;
    currentWear = selectedMachine.telemetry.toolWear;

    document.getElementById('slider-temp').value = currentTemp;
    document.getElementById('slider-torque').value = currentTorque;
    document.getElementById('slider-rpm').value = currentRpm;
    document.getElementById('slider-wear').value = Math.round(currentWear * 100);

    document.getElementById('val-temp').innerText = currentTemp;
    document.getElementById('val-torque').innerText = currentTorque;
    document.getElementById('val-rpm').innerText = currentRpm;
    document.getElementById('val-wear').innerText = currentWear.toFixed(2);

    updateSimUI();
    showToast(`Parameters reset to ${selectedMachine.id} baseline`, 'info');
  });

  // Save Scenario (Up to 3 in-memory)
  document.getElementById('btn-save-scenario')?.addEventListener('click', () => {
    if (savedScenarios.length >= 3) {
      savedScenarios.shift(); // Keep latest 3
    }

    const baseline = selectedMachine.telemetry;
    const baseRisk = selectedMachine.failureProbability;
    const simResult = calculateSimulatedRisk(currentTemp, currentTorque, currentRpm, currentWear, {
      temp: baseline.temp,
      torque: baseline.torque,
      rpm: baseline.rpm,
      toolWear: baseline.toolWear,
      failureProbability: baseRisk
    });

    const delta = +(simResult.simulatedRisk - baseRisk).toFixed(1);
    const scenarioName = `Scenario ${String.fromCharCode(65 + savedScenarios.length)}`;

    savedScenarios.push({
      name: scenarioName,
      temp: currentTemp,
      torque: currentTorque,
      rpm: currentRpm,
      wear: currentWear.toFixed(2),
      risk: simResult.simulatedRisk,
      delta
    });

    showToast(`Saved ${scenarioName} to comparison list!`, 'success');
    renderSavedScenariosTable();
  });

  const renderSavedScenariosTable = () => {
    const body = document.getElementById('saved-scenarios-body');
    const countLabel = document.getElementById('saved-count-label');
    if (countLabel) countLabel.innerText = `${savedScenarios.length} / 3 SAVED`;

    if (!body) return;

    const baseRisk = selectedMachine.failureProbability;
    const baseline = selectedMachine.telemetry;

    body.innerHTML = `
      <tr class="bg-surface-container-low/40">
        <td class="py-2.5 px-4 font-bold text-on-surface">Baseline (${selectedMachine.id})</td>
        <td class="py-2.5 px-4 text-on-surface-variant">${baseline.temp}°C • ${baseline.torque}Nm • ${baseline.toolWear}mm</td>
        <td class="py-2.5 px-4 font-bold text-status-critical">${baseRisk}%</td>
        <td class="py-2.5 px-4 text-on-surface-variant">—</td>
        <td class="py-2.5 px-4 text-right text-slate-500 font-semibold">Active</td>
      </tr>
      ${savedScenarios.map((sc, i) => `
        <tr class="hover:bg-surface-container-low transition-colors">
          <td class="py-2.5 px-4 font-bold text-secondary">${sc.name}</td>
          <td class="py-2.5 px-4 text-on-surface-variant">${sc.temp}°C • ${sc.torque}Nm • ${sc.wear}mm</td>
          <td class="py-2.5 px-4 font-bold ${sc.risk >= 80 ? 'text-status-critical' : sc.risk >= 50 ? 'text-status-warning' : 'text-status-healthy'}">${sc.risk}%</td>
          <td class="py-2.5 px-4 font-bold ${sc.delta < 0 ? 'text-status-healthy' : 'text-status-critical'}">${sc.delta > 0 ? '+' : ''}${sc.delta}%</td>
          <td class="py-2.5 px-4 text-right">
            <button data-apply-scenario="${i}" class="btn-apply-sc px-2 py-0.5 rounded bg-secondary/15 hover:bg-secondary/30 text-secondary text-[10px] mr-1">Apply</button>
            <button data-delete-scenario="${i}" class="btn-delete-sc px-2 py-0.5 rounded bg-status-critical/15 hover:bg-status-critical/30 text-status-critical text-[10px]">✕</button>
          </td>
        </tr>
      `).join('')}
    `;

    attachScenarioTableListeners();
  };

  const attachScenarioTableListeners = () => {
    document.querySelectorAll('.btn-apply-sc').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-apply-scenario'), 10);
        const sc = savedScenarios[idx];
        if (sc) {
          currentTemp = sc.temp;
          currentTorque = sc.torque;
          currentRpm = sc.rpm;
          currentWear = parseFloat(sc.wear);

          document.getElementById('slider-temp').value = currentTemp;
          document.getElementById('slider-torque').value = currentTorque;
          document.getElementById('slider-rpm').value = currentRpm;
          document.getElementById('slider-wear').value = Math.round(currentWear * 100);

          document.getElementById('val-temp').innerText = currentTemp;
          document.getElementById('val-torque').innerText = currentTorque;
          document.getElementById('val-rpm').innerText = currentRpm;
          document.getElementById('val-wear').innerText = currentWear.toFixed(2);

          updateSimUI();
          showToast(`Applied parameters from ${sc.name}`, 'info');
        }
      });
    });

    document.querySelectorAll('.btn-delete-sc').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-delete-scenario'), 10);
        savedScenarios.splice(idx, 1);
        renderSavedScenariosTable();
        showToast('Scenario removed from comparison list', 'info');
      });
    });
  };

  attachScenarioTableListeners();
}
