// PREDIX Industrial Intelligence — Machine Diagnostic Console & AI Explainability Experience
import { getDiagnosticGuideForAsset } from '../data/diagnosticGuides.js';
import { maintenanceTeams } from '../data/teamsData.js';
import { generateExecutiveExcelReport } from '../utils/excelReport.js';
import { generateTelemetrySeries } from '../data/telemetryData.js';
import { showToast } from './Toast.js';
import Chart from 'chart.js/auto';

let activeTab = 'telemetry'; // 'telemetry' | 'why' | 'investigate' | 'resolve' | 'assign' | 'report'
let modalChartInstance = null;
let inspectionStates = {}; // In-memory checklist state tracker { [itemId]: 0 | 1 | 2 }
let expandedDrilldown = null; // Currently expanded SHAP factor drilldown

export function openMachineModal(machine, onDispatch, onSimulate, initialTab = 'telemetry') {
  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot || !machine) return;

  // Map legacy initialTab names if any
  const tabMapping = {
    'team': 'assign',
    'investigate': 'investigate',
    'resolve': 'resolve',
    'report': 'report',
    'telemetry': 'telemetry',
    'why': 'why'
  };
  activeTab = tabMapping[initialTab] || 'telemetry';

  const guide = getDiagnosticGuideForAsset(machine);
  const matchedTeam = maintenanceTeams.find(t => t.id === guide.recommendedTeamId) || maintenanceTeams[0];

  // Initialize inspection checklist states if not set
  guide.investigation.checklist.forEach(item => {
    if (inspectionStates[item.id] === undefined) {
      inspectionStates[item.id] = 0; // 0: Pending, 1: In Progress, 2: Verified
    }
  });

  const isCritical = machine.riskLevel === 'Critical';
  const isHigh = machine.riskLevel === 'High';
  const isMedium = machine.riskLevel === 'Medium';

  const statusBadge = isCritical 
    ? 'bg-status-critical/15 text-status-critical border-status-critical/40' 
    : isHigh 
    ? 'bg-status-warning/15 text-status-warning border-status-warning/40' 
    : isMedium 
    ? 'bg-sky-500/15 text-sky-400 border-sky-500/40' 
    : 'bg-status-healthy/15 text-status-healthy border-status-healthy/40';

  const gaugeStroke = isCritical ? '#EF4444' : isHigh ? '#F59E0B' : isMedium ? '#38BDF8' : '#10B981';

  const renderModalContent = () => `
    <div id="machine-modal-backdrop" class="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto animate-modal-backdrop">
      <div class="bg-surface w-full max-w-5xl rounded-xl sm:rounded-2xl shadow-[0_0_60px_rgba(0,0,0,0.85)] border border-border-subtle overflow-hidden flex flex-col max-h-[96vh] sm:max-h-[94vh] animate-modal-dialog my-auto">
        
        <!-- HEADER: INDUSTRIAL AI DIAGNOSTIC CONSOLE -->
        <div class="px-3.5 py-3 sm:px-6 sm:py-4 bg-surface-container-low/90 border-b border-border-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
          
          <!-- Machine Identity & Sector -->
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-secondary/15 border border-secondary/30 text-secondary flex flex-col items-center justify-center font-mono font-bold shadow-[0_0_12px_rgba(6,182,212,0.15)] shrink-0">
              <span class="text-xs">${machine.id}</span>
              <span class="text-[8px] text-on-surface-variant font-normal uppercase">ASSET</span>
            </div>
            <div class="min-w-0">
              <div class="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                <h2 class="font-bold text-sm sm:text-base text-on-surface font-mono tracking-wide truncate">${machine.name}</h2>
                <span class="px-2 py-0.5 rounded text-[9px] sm:text-[9.5px] font-mono font-bold uppercase border ${statusBadge}">
                  ● ${machine.riskLevel}
                </span>
                <span class="px-2 py-0.5 rounded text-[9px] sm:text-[9.5px] font-mono font-semibold bg-surface-container border border-border-subtle text-on-surface-variant">
                  ${machine.dataset}
                </span>
              </div>
              <p class="text-[11px] sm:text-xs text-on-surface-variant font-mono mt-0.5 truncate">${machine.sector} • Key Trigger: <strong class="text-on-surface">${machine.keyIndicator}</strong></p>
            </div>
          </div>

          <!-- Animated Radial Risk Gauge & Failure Horizon -->
          <div class="flex items-center justify-between sm:justify-end gap-3 sm:gap-4 border-t sm:border-t-0 border-border-subtle/40 pt-2 sm:pt-0">
            
            <!-- Failure Horizon Box -->
            <div class="flex flex-col text-left sm:text-right font-mono">
              <span class="text-[9.5px] sm:text-[10px] text-on-surface-variant uppercase">Failure Horizon</span>
              <span class="text-xs sm:text-sm font-data-number font-bold text-status-critical">${machine.timeToFailure}</span>
              <span class="text-[9px] sm:text-[9.5px] text-on-surface-variant">RUL: ${machine.rulCycles} Cycles (~${machine.rulDays}d)</span>
            </div>

            <!-- Enhanced Radial SVG Gauge -->
            <div class="relative w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center shrink-0">
              <svg class="w-12 h-12 sm:w-16 sm:h-16 -rotate-90 drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#161F33" stroke-width="10"></circle>
                <circle id="modal-risk-gauge-circle" cx="50" cy="50" r="40" fill="none" stroke="${gaugeStroke}" stroke-width="10" 
                        stroke-linecap="round"
                        stroke-dasharray="251.2" 
                        stroke-dashoffset="251.2"
                        class="gauge-circle"></circle>
              </svg>
              <div class="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span class="text-[11px] sm:text-xs font-data-number font-bold text-on-surface">${machine.failureProbability}%</span>
                <span class="text-[7px] sm:text-[7.5px] font-mono text-on-surface-variant font-semibold uppercase">PROB</span>
              </div>
            </div>

            <!-- Header Quick Actions -->
            <div class="flex items-center gap-1.5 pl-2 border-l border-border-subtle font-mono">
              <button id="btn-export-excel-header" class="px-2.5 py-1.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 text-xs font-semibold flex items-center gap-1 transition-all shadow-sm" title="Export Executive Excel Dossier (.xls)">
                <span class="material-symbols-outlined text-[15px]">table_view</span>
                <span class="hidden sm:inline">.xls</span>
              </button>
              <button id="btn-close-machine-modal" class="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" title="Close Modal (Esc)">
                <span class="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>
          </div>
        </div>

        <!-- NAVIGATION TABS (01/TELEMETRY, 02/WHY, 03/INVESTIGATE, 04/RESOLVE, 05/ASSIGN, 06/REPORT) -->
        <div class="px-3 sm:px-6 bg-surface-container-low/50 border-b border-border-subtle flex items-center gap-1 overflow-x-auto whitespace-nowrap hide-scrollbar flex-nowrap text-xs font-semibold font-mono">
          ${[
            { id: 'telemetry', label: '01 / TELEMETRY', icon: 'query_stats' },
            { id: 'why', label: '02 / WHY', icon: 'psychology', badge: 'SHAP' },
            { id: 'investigate', label: '03 / INVESTIGATE', icon: 'manage_search', badge: isCritical ? 'ALERT' : null },
            { id: 'resolve', label: '04 / RESOLVE', icon: 'build_circle' },
            { id: 'assign', label: '05 / ASSIGN', icon: 'groups', badge: 'MATCH' },
            { id: 'report', label: '06 / REPORT', icon: 'description' }
          ].map(t => {
            const isActive = activeTab === t.id;
            return `
              <button data-tab="${t.id}" class="modal-tab-btn px-3 sm:px-3.5 py-2.5 sm:py-3 border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                isActive 
                  ? 'border-secondary text-secondary font-bold bg-secondary/5' 
                  : 'border-transparent text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low/60'
              }">
                <span class="material-symbols-outlined text-[16px]">${t.icon}</span>
                <span>${t.label}</span>
                ${t.badge ? `
                  <span class="px-1.5 py-0.2 rounded text-[8.5px] font-mono font-bold ${
                    t.badge === 'ALERT' ? 'bg-status-critical text-on-primary animate-pulse' : 'bg-secondary/20 text-secondary border border-secondary/30'
                  }">${t.badge}</span>
                ` : ''}
              </button>
            `;
          }).join('')}
        </div>

        <!-- TAB BODY CONTENT CONTAINER -->
        <div id="modal-tab-body" class="p-3.5 sm:p-6 overflow-y-auto space-y-4 sm:space-y-6 flex-1 animate-tab-in">
          ${renderActiveTabContent(activeTab, machine, guide, matchedTeam)}
        </div>

        <!-- MODAL FOOTER ACTIONS -->
        <div class="px-3.5 sm:px-6 py-3 sm:py-3.5 bg-surface-container-low/90 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-3 font-mono">
          <div class="flex items-center gap-2 text-xs text-on-surface-variant w-full sm:w-auto">
            <span class="material-symbols-outlined text-[16px] text-status-healthy">verified</span>
            <span class="truncate">Recommended Route: <strong class="text-on-surface">${matchedTeam.name}</strong> (${matchedTeam.lead})</span>
          </div>

          <div class="flex flex-wrap sm:flex-nowrap items-center gap-2 w-full sm:w-auto justify-end">
            <button id="btn-export-excel-footer" class="flex-1 sm:flex-initial px-3 py-1.5 text-xs font-semibold rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 transition-all flex items-center justify-center gap-1.5 shadow-sm" title="Utility: Export Complete Excel Dossier">
              <span class="material-symbols-outlined text-[15px]">file_download</span>
              <span>Export Dossier (.xls)</span>
            </button>
            <button id="btn-simulate-from-modal" class="flex-1 sm:flex-initial px-3 py-1.5 text-xs font-semibold rounded-lg border border-border-subtle bg-surface-container hover:bg-surface-container-high text-on-surface transition-all flex items-center justify-center gap-1.5 shadow-sm" title="Secondary: Launch What-If Parameter Sandbox">
              <span class="material-symbols-outlined text-[15px] text-secondary">science</span>
              <span>Simulate Sandbox</span>
            </button>
            <button id="btn-dispatch-from-modal" class="w-full sm:w-auto px-4 py-1.5 text-xs font-bold rounded-lg bg-secondary/20 hover:bg-secondary/30 text-secondary border border-secondary/40 transition-all flex items-center justify-center gap-1.5 shadow-[0_0_12px_rgba(6,182,212,0.2)]" title="Primary: Dispatch Maintenance Team">
              <span class="material-symbols-outlined text-[16px]">engineering</span>
              <span>Assign & Dispatch</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  `;

  modalRoot.innerHTML = renderModalContent();
  attachModalListeners(machine, onDispatch, onSimulate, guide, matchedTeam);

  // Trigger Gauge Animation
  animateModalGauge(machine.failureProbability);

  // If initial tab is telemetry, initialize chart
  if (activeTab === 'telemetry') {
    setTimeout(() => initModalTelemetryChart(machine), 80);
  }
}

function renderActiveTabContent(tab, machine, guide, matchedTeam) {
  switch (tab) {
    
    // 01 / TELEMETRY TAB: SENSOR MATRIX & TIME-SERIES SIGNAL GRAPH
    case 'telemetry':
      const telemetryCards = [
        {
          label: 'Process Temp',
          val: `${machine.telemetry.temp}°C`,
          thresh: 'Threshold: >80°C',
          isCrit: machine.telemetry.temp > 80,
          isWarn: machine.telemetry.temp > 70 && machine.telemetry.temp <= 80,
          trend: machine.telemetry.temp > 80 ? '↑ Rapid Rise' : '→ Nominal'
        },
        {
          label: 'Torque Load',
          val: `${machine.telemetry.torque} Nm`,
          thresh: 'Threshold: >500 Nm',
          isCrit: machine.telemetry.torque > 520,
          isWarn: machine.telemetry.torque > 480 && machine.telemetry.torque <= 520,
          trend: machine.telemetry.torque > 500 ? '↑ High Load' : '→ Steady'
        },
        {
          label: 'Spindle RPM',
          val: `${machine.telemetry.rpm}`,
          thresh: 'Nominal: 2800–3600',
          isCrit: false,
          isWarn: machine.telemetry.rpm > 3600 || machine.telemetry.rpm < 2800,
          trend: '→ Stabilized'
        },
        {
          label: 'Tool Wear',
          val: `${machine.telemetry.toolWear} mm`,
          thresh: 'Limit: 0.80 mm',
          isCrit: machine.telemetry.toolWear > 0.65,
          isWarn: machine.telemetry.toolWear > 0.50 && machine.telemetry.toolWear <= 0.65,
          trend: machine.telemetry.toolWear > 0.65 ? '↑ Critical Wear' : '→ Nominal'
        },
        {
          label: 'Vibration',
          val: `${machine.telemetry.vibration} mm/s`,
          thresh: 'ISO Limit: 18 mm/s',
          isCrit: machine.telemetry.vibration > 25,
          isWarn: machine.telemetry.vibration > 18 && machine.telemetry.vibration <= 25,
          trend: machine.telemetry.vibration > 25 ? '↑ Harmonic Spike' : '→ Smooth'
        },
        {
          label: 'Line Pressure',
          val: `${machine.telemetry.pressure} bar`,
          thresh: 'Nominal: 5.5–7.0 bar',
          isCrit: false,
          isWarn: machine.telemetry.pressure < 5.0,
          trend: '→ Nominal Flow'
        }
      ];

      return `
        <!-- Live Telemetry KPI Cards with Staggered Entrance -->
        <div>
          <div class="flex items-center justify-between mb-2 font-mono">
            <span class="font-label-md text-on-surface-variant uppercase">Current Telemetry Signal Readouts</span>
            <span class="text-[10px] text-status-healthy font-semibold">● 100 Hz SAMPLE RATE • AI4I 2020 MODEL</span>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 font-mono">
            ${telemetryCards.map((c, idx) => {
              const borderClass = c.isCrit 
                ? 'border-status-critical/40 bg-status-critical/5 text-status-critical' 
                : c.isWarn 
                ? 'border-status-warning/40 bg-status-warning/5 text-status-warning' 
                : 'border-border-subtle bg-surface-container-low/80 text-on-surface';

              const trendColor = c.isCrit ? 'text-status-critical font-bold' : c.isWarn ? 'text-status-warning font-semibold' : 'text-status-healthy';

              return `
                <div class="telemetry-card-stagger p-3 rounded-lg border ${borderClass} flex flex-col justify-between" style="animation-delay: ${idx * 50}ms">
                  <div>
                    <span class="text-[9.5px] text-on-surface-variant uppercase block">${c.label}</span>
                    <div class="text-base font-data-number font-bold mt-0.5">${c.val}</div>
                  </div>
                  <div class="mt-2 pt-1 border-t border-border-subtle/50 text-[9px] flex items-center justify-between text-on-surface-variant">
                    <span>${c.thresh}</span>
                    <span class="${trendColor}">${c.trend}</span>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Interactive Time-Series Telemetry Chart with Anomaly Detection & Crosshair -->
        <div class="predix-panel p-4 flex flex-col gap-3">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono">
            <div>
              <div class="flex items-center gap-2">
                <h3 class="text-xs font-bold text-on-surface">Telemetry Multi-Signal Waveform (24h Window)</h3>
                <span class="px-1.5 py-0.2 rounded text-[8.5px] font-bold bg-status-critical/15 text-status-critical border border-status-critical/30 uppercase">ANOMALY DETECTED</span>
              </div>
              <p class="text-[10px] text-on-surface-variant mt-0.5">Observed sensor signals with real-time anomaly tracking</p>
            </div>
            
            <!-- Clear Distinction Legend: Observed (Solid) vs Predicted (Dashed) -->
            <div class="flex flex-wrap items-center gap-3 text-[10px]">
              <span class="flex items-center gap-1.5"><span class="w-3 h-0.5 bg-[#EF4444]"></span> Observed Temp</span>
              <span class="flex items-center gap-1.5"><span class="w-3 h-0.5 bg-[#06B6D4]"></span> Observed Vibration</span>
              <span class="flex items-center gap-1.5 text-amber-400 font-semibold"><span class="w-3 h-0.5 border-t-2 border-dashed border-amber-400"></span> Predicted Risk (%)</span>
            </div>
          </div>
          <div class="relative h-[240px] w-full">
            <canvas id="modal-telemetry-chart"></canvas>
          </div>
        </div>
      `;

    // 02 / WHY TAB: EXPLAINABLE AI, SHAP ATTRIBUTION & "WHAT CHANGED?"
    case 'why':
      const shapFactors = [
        { 
          id: 'vib', 
          name: 'Vibration Harmonic Stress', 
          val: 38, 
          isDanger: true, 
          note: 'Resonance on Axis Z (>25 mm/s limit)',
          baseline: '8.4 mm/s',
          current: `${machine.telemetry.vibration} mm/s`,
          deviation: `+${(machine.telemetry.vibration - 8.4).toFixed(1)} mm/s`,
          contribution: '+38% Risk Escalation',
          trend: 'High frequency harmonic resonance at 3.2 kHz'
        },
        { 
          id: 'tool', 
          name: 'Tool Insert Degradation', 
          val: 28, 
          isDanger: true, 
          note: 'Flank wear exceeded 0.80mm threshold',
          baseline: '0.12 mm',
          current: `${machine.telemetry.toolWear} mm`,
          deviation: `+${(machine.telemetry.toolWear - 0.12).toFixed(2)} mm`,
          contribution: '+28% Risk Escalation',
          trend: 'Carbide flank crater micro-fracture progression'
        },
        { 
          id: 'temp', 
          name: 'Thermal Dissipation Deficit', 
          val: 22, 
          isDanger: true, 
          note: 'Process-Air differential < 8.6K threshold',
          baseline: '58.0°C',
          current: `${machine.telemetry.temp}°C`,
          deviation: `+${(machine.telemetry.temp - 58.0).toFixed(1)}°C`,
          contribution: '+22% Risk Escalation',
          trend: 'Thermal accumulation in primary spindle housing'
        },
        { 
          id: 'torque', 
          name: 'Spindle Drive Torque Load', 
          val: 12, 
          isDanger: false, 
          note: 'Fluctuation under heavy continuous feed',
          baseline: '360 Nm',
          current: `${machine.telemetry.torque} Nm`,
          deviation: `+${(machine.telemetry.torque - 360).toFixed(0)} Nm`,
          contribution: '+12% Risk Escalation',
          trend: 'Moderate torque resistance variation'
        },
        { 
          id: 'rpm', 
          name: 'Rotational Speed Stability', 
          val: -2, 
          isDanger: false, 
          note: 'Normal spindle rotational velocity',
          baseline: '3200 RPM',
          current: `${machine.telemetry.rpm} RPM`,
          deviation: `+${(machine.telemetry.rpm - 3200).toFixed(0)} RPM`,
          contribution: '-2% (Stabilizing Factor)',
          trend: 'Spindle velocity within nominal control loop'
        }
      ];

      return `
        <!-- Top Summary Banner -->
        <div class="p-4 rounded-xl bg-surface-container-low border border-border-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div class="flex items-center gap-2">
              <h3 class="text-xs font-bold text-on-surface font-mono uppercase">WHY IS THIS MACHINE AT RISK?</h3>
              <span class="px-2 py-0.2 rounded text-[9px] font-mono bg-secondary/15 text-secondary border border-secondary/30 font-bold">XGBoost TreeSHAP</span>
            </div>
            <p class="text-xs text-on-surface-variant mt-0.5 leading-relaxed">
              Global feature attribution values explain specific physical sensor deviations driving failure prediction score to <strong>${machine.failureProbability}%</strong>.
            </p>
          </div>
          <div class="px-3 py-1.5 rounded-lg bg-status-critical/15 border border-status-critical/30 font-mono text-right shrink-0">
            <span class="text-[9.5px] text-status-critical font-bold uppercase block">Primary Threat</span>
            <span class="text-xs font-bold text-on-surface">${machine.failureType}</span>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-5">
          
          <!-- Ranked SHAP Feature Contribution Bars (Interactive Drill-Down) -->
          <div class="col-span-1 lg:col-span-7 predix-panel p-5 space-y-4">
            <div class="flex items-center justify-between font-mono pb-2 border-b border-border-subtle">
              <span class="font-label-md text-on-surface-variant uppercase text-[10px]">Ranked Feature Attribution</span>
              <span class="text-[10px] text-secondary font-semibold">CLICK FACTOR FOR DETAILS</span>
            </div>

            <div class="space-y-3 font-mono text-xs">
              ${shapFactors.map(f => {
                const isExpanded = expandedDrilldown === f.id;
                return `
                  <div data-shap-id="${f.id}" class="btn-toggle-shap-drilldown p-2.5 rounded-xl border ${isExpanded ? 'border-secondary/60 bg-secondary/10' : 'border-border-subtle/60 bg-surface-container-low/50 hover:bg-surface-container-low'} transition-all cursor-pointer space-y-1.5">
                    <div class="flex items-center justify-between text-[11px]">
                      <span class="font-bold text-on-surface flex items-center gap-1.5">
                        <span class="material-symbols-outlined text-[14px] text-secondary">${isExpanded ? 'expand_less' : 'expand_more'}</span>
                        <span>${f.name}</span>
                      </span>
                      <span class="${f.val > 0 ? (f.isDanger ? 'text-status-critical' : 'text-status-warning') : 'text-status-healthy'} font-bold">
                        ${f.val > 0 ? '+' : ''}${f.val}% Risk Shift
                      </span>
                    </div>
                    
                    <div class="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                      <div class="shap-bar-fill h-full rounded-full ${f.val > 0 ? (f.isDanger ? 'bg-status-critical shadow-[0_0_6px_#EF4444]' : 'bg-status-warning') : 'bg-status-healthy'}" style="width: ${Math.abs(f.val) * 2}%"></div>
                    </div>
                    <span class="text-[9.5px] text-on-surface-variant block">${f.note}</span>

                    <!-- Expanded Detail Drill-Down Panel -->
                    ${isExpanded ? `
                      <div class="mt-2 pt-2 border-t border-border-subtle/60 grid grid-cols-2 gap-2 text-[10.5px] text-on-surface-variant bg-surface/60 p-2 rounded-lg">
                        <div>Baseline Nominal: <strong class="text-on-surface">${f.baseline}</strong></div>
                        <div>Current Measured: <strong class="text-status-critical">${f.current}</strong></div>
                        <div>Physical Deviation: <strong class="text-status-critical">${f.deviation}</strong></div>
                        <div>Risk Contribution: <strong class="text-secondary">${f.contribution}</strong></div>
                        <div class="col-span-2 text-[10px] text-slate-400 mt-1">Diagnostic Trend: ${f.trend}</div>
                      </div>
                    ` : ''}
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <!-- "WHAT CHANGED?" Comparison Module -->
          <div class="col-span-1 lg:col-span-5 predix-panel p-5 flex flex-col justify-between space-y-4">
            <div>
              <div class="flex items-center justify-between font-mono pb-2 border-b border-border-subtle">
                <span class="font-label-md text-secondary uppercase text-[10px]">WHAT CHANGED?</span>
                <span class="text-[9.5px] text-on-surface-variant font-mono">VS LAST NOMINAL SHIFT</span>
              </div>

              <!-- Risk Elevation Delta -->
              <div class="my-3 p-3 rounded-xl bg-surface-container-low border border-border-subtle flex items-center justify-between font-mono">
                <div class="text-center">
                  <span class="text-[9px] text-on-surface-variant uppercase block">Nominal Baseline</span>
                  <span class="text-sm font-data-number font-bold text-status-healthy">18.0%</span>
                </div>
                <div class="flex items-center gap-1 text-secondary">
                  <span class="material-symbols-outlined text-[18px]">trending_flat</span>
                </div>
                <div class="text-center">
                  <span class="text-[9px] text-status-critical uppercase block font-bold">Current Risk</span>
                  <span class="text-base font-data-number font-bold text-status-critical">${machine.failureProbability}%</span>
                </div>
              </div>

              <!-- Key Escalation Drivers -->
              <div class="space-y-2 text-xs font-mono">
                <span class="text-[10px] text-on-surface-variant uppercase block font-semibold">Primary Risk Increase Drivers:</span>
                <div class="p-2 rounded bg-surface-container-low text-[11px] flex items-center justify-between border border-border-subtle/50">
                  <span class="text-on-surface">Vibration Harmonic Drift</span>
                  <span class="text-status-critical font-bold">+28.8 mm/s ↑</span>
                </div>
                <div class="p-2 rounded bg-surface-container-low text-[11px] flex items-center justify-between border border-border-subtle/50">
                  <span class="text-on-surface">Spindle Thermal Deficit</span>
                  <span class="text-status-critical font-bold">+22.2°C ↑</span>
                </div>
                <div class="p-2 rounded bg-surface-container-low text-[11px] flex items-center justify-between border border-border-subtle/50">
                  <span class="text-on-surface">Carbide Insert Flank Wear</span>
                  <span class="text-status-critical font-bold">+0.43 mm ↑</span>
                </div>
              </div>
            </div>

            <div class="pt-2 border-t border-border-subtle text-center">
              <span class="text-[10px] font-mono text-on-surface-variant">Validated via 10,000 Tree Splits • TreeSHAP Explainer</span>
            </div>
          </div>

        </div>
      `;

    // 03 / INVESTIGATE TAB: 3-STATE INTERACTIVE CHECKLIST & NDT METHODS
    case 'investigate':
      const verifiedCount = Object.values(inspectionStates).filter(v => v === 2).length;
      const totalChecks = guide.investigation.checklist.length;

      return `
        <!-- Diagnostic Summary Banner -->
        <div class="p-4 rounded-xl bg-status-critical/15 border-l-4 border-status-critical flex items-start gap-3">
          <span class="material-symbols-outlined text-status-critical text-[22px] shrink-0 mt-0.5">warning</span>
          <div>
            <h4 class="font-bold text-xs text-status-critical font-mono uppercase tracking-wider">Root Cause: ${guide.failureMode}</h4>
            <p class="text-xs text-on-surface mt-0.5 leading-relaxed">${guide.summary}</p>
          </div>
        </div>

        <!-- Telemetry Indicators Cue Box -->
        <div class="predix-panel p-4 space-y-2 font-mono text-xs">
          <span class="font-label-md text-on-surface-variant uppercase text-[10px]">Key Diagnostic Telemetry Cues</span>
          <ul class="space-y-1.5 text-on-surface">
            ${guide.investigation.primaryCues.map(cue => `
              <li class="flex items-start gap-2">
                <span class="material-symbols-outlined text-secondary text-[15px] shrink-0 mt-0.5">arrow_forward</span>
                <span class="text-[11px]">${cue}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <!-- 3-State Physical Inspection Checklist -->
        <div>
          <div class="flex items-center justify-between mb-2.5 font-mono">
            <div class="flex items-center gap-2">
              <span class="font-label-md text-on-surface uppercase">Physical Inspection Checklist</span>
              <span class="text-[10px] font-mono text-secondary font-bold bg-secondary/15 px-2 py-0.5 rounded border border-secondary/30">
                ${verifiedCount} / ${totalChecks} VERIFIED
              </span>
            </div>
            <span class="text-[10px] text-on-surface-variant">Click row to toggle state (○ PENDING → ◐ IN PROGRESS → ✓ VERIFIED)</span>
          </div>

          <div class="space-y-2 font-mono">
            ${guide.investigation.checklist.map((item, idx) => {
              const state = inspectionStates[item.id] || 0;
              const stateClass = state === 2 
                ? 'border-status-healthy/50 bg-status-healthy/5' 
                : state === 1 
                ? 'border-status-warning/50 bg-status-warning/5' 
                : 'border-border-subtle bg-surface-container-low/70';

              const stateIcon = state === 2 
                ? '<span class="material-symbols-outlined text-status-healthy text-[18px]">check_circle</span>' 
                : state === 1 
                ? '<span class="material-symbols-outlined text-status-warning text-[18px]">timelapse</span>' 
                : '<span class="material-symbols-outlined text-slate-500 text-[18px]">radio_button_unchecked</span>';

              const stateBadge = state === 2 
                ? '<span class="px-2 py-0.5 rounded bg-status-healthy/20 text-status-healthy text-[9.5px] font-bold border border-status-healthy/30">✓ VERIFIED</span>' 
                : state === 1 
                ? '<span class="px-2 py-0.5 rounded bg-status-warning/20 text-status-warning text-[9.5px] font-bold border border-status-warning/30">◐ IN PROGRESS</span>' 
                : '<span class="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant text-[9.5px] font-bold border border-border-subtle">○ PENDING</span>';

              return `
                <div data-checklist-id="${item.id}" class="btn-toggle-checklist p-3.5 rounded-xl border ${stateClass} flex items-start gap-3 cursor-pointer hover:border-slate-500 transition-all group">
                  <div class="mt-0.5 shrink-0">${stateIcon}</div>
                  <div class="flex-1 text-xs">
                    <div class="flex items-center justify-between">
                      <span class="font-bold text-on-surface group-hover:text-secondary transition-colors text-[11.5px]">${idx + 1}. ${item.task}</span>
                      <div class="flex items-center gap-2">
                        <span class="text-[9.5px] text-on-surface-variant font-mono">${item.location}</span>
                        ${stateBadge}
                      </div>
                    </div>
                    <p class="text-[11px] text-on-surface-variant mt-1 leading-relaxed font-sans">${item.detail}</p>
                    <div class="mt-1.5 flex items-center gap-1 text-[10px] text-secondary font-semibold">
                      <span class="material-symbols-outlined text-[13px]">tune</span>
                      <span>Test Method: ${item.method}</span>
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- NDT Methods -->
        <div class="predix-panel p-4 font-mono text-xs">
          <span class="font-label-md text-on-surface-variant uppercase text-[10px] block mb-2">Recommended Non-Destructive Testing (NDT)</span>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
            ${guide.investigation.ndtMethods.map(m => `
              <div class="p-2.5 rounded-lg bg-surface-container-low border border-border-subtle flex items-center gap-2">
                <span class="material-symbols-outlined text-[16px] text-secondary">sensors</span>
                <span class="text-[11px] text-on-surface">${m}</span>
              </div>
            `).join('')}
          </div>
        </div>
      `;

    // 04 / RESOLVE TAB: WORKFLOW, SOP & PARTS REQUISITION MATRIX
    case 'resolve':
      return `
        <!-- Visual Maintenance Workflow Signal Pipeline -->
        <div class="p-3 rounded-xl bg-surface-container-low border border-border-subtle flex items-center justify-between text-[11px] font-mono font-bold overflow-x-auto">
          <div class="flex items-center gap-2 text-secondary">
            <span class="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center text-[10px]">1</span>
            <span>DETECT</span>
          </div>
          <span class="text-slate-600">→</span>
          <div class="flex items-center gap-2 text-sky-400">
            <span class="w-5 h-5 rounded-full bg-sky-400/20 flex items-center justify-center text-[10px]">2</span>
            <span>DIAGNOSE</span>
          </div>
          <span class="text-slate-600">→</span>
          <div class="flex items-center gap-2 text-amber-400">
            <span class="w-5 h-5 rounded-full bg-amber-400/20 flex items-center justify-center text-[10px]">3</span>
            <span>ACTION</span>
          </div>
          <span class="text-slate-600">→</span>
          <div class="flex items-center gap-2 text-status-healthy">
            <span class="w-5 h-5 rounded-full bg-status-healthy/20 flex items-center justify-center text-[10px]">4</span>
            <span>VERIFY</span>
          </div>
        </div>

        <!-- AI Recommendation Panel -->
        <div class="p-4 rounded-xl bg-secondary/10 border border-secondary/30 font-mono text-xs space-y-2">
          <div class="flex items-center justify-between">
            <span class="text-[10px] text-secondary font-bold uppercase tracking-wider flex items-center gap-1">
              <span class="material-symbols-outlined text-[14px]">psychology</span>
              <span>AI RECOMMENDATION</span>
            </span>
            <span class="px-2 py-0.2 rounded bg-status-critical/20 text-status-critical border border-status-critical/30 font-bold uppercase text-[9px]">Priority: CRITICAL</span>
          </div>
          <div>
            <div class="font-bold text-on-surface text-[12px]">${guide.failureMode} Corrective Procedure</div>
            <p class="text-on-surface-variant font-sans text-[11px] mt-0.5 leading-relaxed">${guide.summary}</p>
          </div>
        </div>

        <!-- Safety & LOTO Protocol Banner -->
        <div class="p-4 rounded-xl bg-status-warning/15 border-l-4 border-status-warning flex items-start gap-3">
          <span class="material-symbols-outlined text-status-warning text-[22px] shrink-0 mt-0.5">lock_person</span>
          <div>
            <h4 class="font-bold text-xs text-status-warning uppercase tracking-wider font-mono">Mandatory Safety & LOTO Procedure</h4>
            <p class="text-xs text-on-surface mt-0.5 leading-relaxed font-sans">${guide.resolution.safety}</p>
            <div class="flex items-center gap-4 mt-2 text-[10.5px] font-mono text-on-surface-variant">
              <span>Estimated MTTR: <strong class="text-on-surface">${guide.resolution.mttr}</strong></span>
              <span>Fastener Torque Spec: <strong class="text-on-surface">${guide.resolution.torqueSpecs}</strong></span>
            </div>
          </div>
        </div>

        <!-- Required Spare Parts Matrix -->
        <div>
          <span class="font-label-md text-on-surface-variant uppercase font-mono text-[10px] block mb-2">Required Spare Parts & Replacement Kit</span>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
            ${guide.resolution.parts.map(p => `
              <div class="p-3 rounded-xl border border-border-subtle bg-surface-container-low flex flex-col justify-between">
                <div>
                  <span class="text-[9.5px] text-on-surface-variant uppercase">${p.sku}</span>
                  <div class="font-bold text-on-surface mt-0.5 text-[11.5px]">${p.name}</div>
                </div>
                <div class="mt-2 pt-2 border-t border-border-subtle flex items-center justify-between text-[10.5px]">
                  <span class="text-on-surface-variant">Req: ${p.qty}</span>
                  <span class="text-status-healthy font-bold">${p.stock}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Standard Operating Procedure (SOP) Step Workflow -->
        <div>
          <span class="font-label-md text-on-surface-variant uppercase font-mono text-[10px] block mb-2.5">Standard Operating Procedure (SOP)</span>
          <div class="space-y-2.5 font-mono">
            ${guide.resolution.steps.map(s => `
              <div class="p-3.5 rounded-xl border border-border-subtle bg-surface-container-low flex items-start gap-3">
                <div class="w-6 h-6 rounded-lg bg-secondary/15 border border-secondary/30 text-secondary flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  ${s.step}
                </div>
                <div class="flex-1 text-xs">
                  <span class="font-bold text-on-surface">${s.title}</span>
                  <p class="text-[11px] text-on-surface-variant mt-0.5 leading-relaxed font-sans">${s.desc}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Post-Service Validation Sign-off -->
        <div class="p-4 rounded-xl bg-status-healthy/15 border border-status-healthy/30 flex items-start gap-3 text-xs font-mono">
          <span class="material-symbols-outlined text-status-healthy text-[20px] shrink-0 mt-0.5">task_alt</span>
          <div>
            <span class="font-bold text-status-healthy uppercase">Post-Service Validation Sign-off</span>
            <p class="text-on-surface mt-0.5 leading-relaxed font-sans">${guide.resolution.validationProtocol}</p>
          </div>
        </div>
      `;

    // 05 / ASSIGN TAB: SPECIALIZED ENGINEERING TEAMS & SMART ROUTING
    case 'assign':
      return `
        <!-- AI Recommendation Highlight Card -->
        <div class="p-5 rounded-xl bg-surface-container-low border border-border-subtle text-on-surface shadow-md relative overflow-hidden font-mono">
          <div class="flex items-start justify-between">
            <div>
              <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-secondary/20 text-secondary border border-secondary/40 text-[10px] font-bold uppercase tracking-wider mb-2">
                <span class="material-symbols-outlined text-[14px]">bolt</span>
                <span>RECOMMENDED TEAM • 98% AI MATCH</span>
              </div>
              <h3 class="text-base font-bold text-on-surface">${matchedTeam.name}</h3>
              <p class="text-xs text-on-surface-variant mt-0.5">Lead: ${matchedTeam.lead} (${matchedTeam.leadTitle})</p>
            </div>
            <div class="text-right">
              <span class="text-2xl font-data-number font-bold text-secondary">${matchedTeam.rating}</span>
              <div class="text-[9.5px] text-on-surface-variant">Expertise Rating</div>
            </div>
          </div>

          <!-- Team Metrics Bar -->
          <div class="grid grid-cols-3 gap-3 mt-4 pt-4 border-t border-border-subtle text-xs">
            <div>
              <span class="text-[9.5px] text-on-surface-variant uppercase">Active Capacity</span>
              <div class="font-data-number font-bold text-on-surface mt-0.5">${matchedTeam.capacityPct}% Loaded</div>
            </div>
            <div>
              <span class="text-[9.5px] text-on-surface-variant uppercase">Avg Response</span>
              <div class="font-data-number font-bold text-on-surface mt-0.5">${matchedTeam.avgResponseTime}</div>
            </div>
            <div>
              <span class="text-[9.5px] text-on-surface-variant uppercase">Active Tickets</span>
              <div class="font-data-number font-bold text-on-surface mt-0.5">${matchedTeam.activeTicketsCount} Units</div>
            </div>
          </div>
        </div>

        <!-- All Engineering Teams Selector Matrix -->
        <div>
          <span class="font-label-md text-on-surface-variant uppercase font-mono text-[10px] block mb-2.5">All Available Maintenance Teams</span>
          <div class="space-y-2.5 font-mono">
            ${maintenanceTeams.map(t => {
              const isRecommended = t.id === matchedTeam.id;
              return `
                <div class="p-3.5 rounded-xl border ${isRecommended ? 'border-secondary/50 bg-secondary/10' : 'border-border-subtle bg-surface-container-low'} flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div>
                    <div class="flex items-center gap-2">
                      <span class="font-bold text-on-surface">${t.name}</span>
                      ${isRecommended ? '<span class="px-2 py-0.2 rounded bg-secondary text-background text-[9px] font-bold uppercase">Best Match</span>' : ''}
                    </div>
                    <div class="text-[11px] text-on-surface-variant mt-0.5">Lead: ${t.lead} • Active Queue: ${t.activeTicketsCount} tickets</div>
                    <div class="flex flex-wrap gap-1 mt-2">
                      ${t.specialties.map(s => `
                        <span class="px-2 py-0.5 rounded bg-surface border border-border-subtle/50 text-[10px] text-on-surface-variant">${s}</span>
                      `).join('')}
                    </div>
                  </div>

                  <div class="flex items-center gap-3 shrink-0">
                    <div class="w-24 bg-surface-container h-2 rounded-full overflow-hidden">
                      <div class="${t.capacityPct > 80 ? 'bg-status-critical' : 'bg-status-healthy'} h-full" style="width: ${t.capacityPct}%"></div>
                    </div>
                    <button data-assign-team="${t.id}" class="btn-select-team px-3 py-1.5 rounded-lg bg-secondary/20 hover:bg-secondary/30 text-secondary border border-secondary/40 text-xs font-semibold transition-all">
                      Assign Team
                    </button>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;

    // 06 / REPORT TAB: OFFICIAL EXECUTIVE DOSSIER PREVIEW & EXCEL DOWNLOAD
    case 'report':
      return `
        <!-- Official Executive Dossier Preview -->
        <div class="p-6 rounded-xl bg-surface-container-low border border-border-subtle shadow-sm space-y-5 font-mono">
          <div class="p-4 rounded-xl bg-surface-container border border-border-subtle text-on-surface flex flex-col sm:flex-row sm:items-start justify-between gap-3">
            <div>
              <div class="text-[10px] text-secondary uppercase font-bold tracking-wider">OFFICIAL EXECUTIVE DOSSIER PREVIEW</div>
              <h3 class="text-base font-bold text-on-surface mt-1">Machine Diagnostic & Reliability Briefing</h3>
              <p class="text-xs text-on-surface-variant font-sans">Prepared for Plant Directors, Operations Executives & Maintenance Leadership</p>
            </div>
            <button id="btn-download-preview-report" class="px-3.5 py-2 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm shrink-0">
              <span class="material-symbols-outlined text-[17px]">download</span>
              <span>Download Excel (.xls)</span>
            </button>
          </div>

          <!-- Summary Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div class="p-4 rounded-xl bg-surface border border-border-subtle space-y-2">
              <div class="font-bold text-on-surface uppercase tracking-wider text-[10.5px]">1. Asset & Risk Summary</div>
              <div class="space-y-1 text-on-surface-variant">
                <div>Asset: <strong class="text-on-surface">${machine.name} (${machine.id})</strong></div>
                <div>Location: <strong class="text-on-surface">${machine.sector}</strong></div>
                <div>Risk Tier: <strong class="text-status-critical">${machine.riskLevel} (${machine.failureProbability}%)</strong></div>
                <div>Remaining Useful Life: <strong class="text-on-surface">${machine.rulCycles} Cycles (~${machine.rulDays}d)</strong></div>
                <div>Failure Mode: <strong class="text-on-surface">${machine.failureType}</strong></div>
              </div>
            </div>

            <div class="p-4 rounded-xl bg-surface border border-border-subtle space-y-2">
              <div class="font-bold text-on-surface uppercase tracking-wider text-[10.5px]">2. Engineering Assignment & SLA</div>
              <div class="space-y-1 text-on-surface-variant">
                <div>Assigned Unit: <strong class="text-on-surface">${matchedTeam.name}</strong></div>
                <div>Lead Technician: <strong class="text-on-surface">${matchedTeam.lead}</strong></div>
                <div>Target MTTR: <strong class="text-on-surface">${guide.resolution.mttr}</strong></div>
                <div>Fastener Torque: <strong class="text-on-surface">${guide.resolution.torqueSpecs}</strong></div>
                <div>Safety Protocol: <strong class="text-status-healthy font-semibold">LOTO Certified</strong></div>
              </div>
            </div>
          </div>

          <!-- Investigation & Resolution Synopsis -->
          <div class="p-4 rounded-xl bg-surface border border-border-subtle space-y-2 text-xs">
            <div class="font-bold text-on-surface uppercase tracking-wider text-[10.5px]">3. Prescriptive Resolution Synopsis (SOP)</div>
            <p class="text-on-surface-variant leading-relaxed font-sans">${guide.summary}</p>
            <div class="space-y-1 pt-2 border-t border-border-subtle">
              ${guide.resolution.steps.map(s => `
                <div class="flex items-start gap-2">
                  <span class="font-bold text-secondary shrink-0">Phase ${s.step}:</span>
                  <span class="text-on-surface">${s.title} — ${s.desc}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Requisition Matrix -->
          <div class="p-4 rounded-xl bg-surface border border-border-subtle space-y-2 text-xs">
            <div class="font-bold text-on-surface uppercase tracking-wider text-[10.5px]">4. Required Replacement Parts Matrix</div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
              ${guide.resolution.parts.map(p => `
                <div class="p-2.5 rounded-lg bg-surface-container-low border border-border-subtle">
                  <div class="font-bold text-on-surface">${p.name}</div>
                  <div class="text-[10px] text-on-surface-variant">${p.sku} • Qty: ${p.qty}</div>
                  <div class="text-[10px] text-status-healthy font-semibold mt-1">${p.stock}</div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Formal Authorization Signature Block -->
          <div class="p-4 rounded-xl bg-surface-container-low border border-dashed border-border-subtle grid grid-cols-2 gap-4 text-xs text-on-surface-variant">
            <div>
              <strong>Reliability Lead Signature:</strong><br>
              <span class="text-slate-500">_______________________________</span>
            </div>
            <div>
              <strong>Operations Director Authorization:</strong><br>
              <span class="text-slate-500">_______________________________</span>
            </div>
          </div>
        </div>
      `;

    default:
      return '';
  }
}

// Animate Modal Radial Gauge
function animateModalGauge(targetPercent) {
  const circle = document.getElementById('modal-risk-gauge-circle');
  if (!circle) return;

  const isReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const circumference = 251.2;
  const targetOffset = circumference * (1 - targetPercent / 100);

  if (isReduced) {
    circle.style.strokeDashoffset = targetOffset.toString();
    return;
  }

  setTimeout(() => {
    circle.style.strokeDashoffset = targetOffset.toString();
  }, 100);
}

// Initialize Chart.js for Modal Telemetry Tab with Anomaly Tracking & Crosshair
function initModalTelemetryChart(machine) {
  const canvas = document.getElementById('modal-telemetry-chart');
  if (!canvas) return;

  if (modalChartInstance) {
    modalChartInstance.destroy();
    modalChartInstance = null;
  }

  const data = generateTelemetrySeries(24, machine.id);

  // Mark anomaly peaks where temp > 80°C or vibration > 25 mm/s
  const pointRadiiTemp = data.tempSeries.map(val => val > 80 ? 5 : 1.5);
  const pointRadiiVib = data.vibrationSeries.map(val => val > 25 ? 5 : 1.5);

  const ctx = canvas.getContext('2d');
  modalChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.timestamps,
      datasets: [
        {
          label: 'Observed Temp (°C)',
          data: data.tempSeries,
          borderColor: '#EF4444',
          backgroundColor: 'rgba(239, 68, 68, 0.08)',
          borderWidth: 2,
          pointRadius: pointRadiiTemp,
          pointBackgroundColor: '#EF4444',
          tension: 0.35,
          yAxisID: 'y'
        },
        {
          label: 'Observed Vibration (mm/s)',
          data: data.vibrationSeries,
          borderColor: '#06B6D4',
          backgroundColor: 'rgba(6, 182, 212, 0.08)',
          borderWidth: 2,
          pointRadius: pointRadiiVib,
          pointBackgroundColor: '#06B6D4',
          tension: 0.35,
          yAxisID: 'y1'
        },
        {
          label: 'Predicted Risk (%)',
          data: data.riskSeries,
          borderColor: '#F59E0B',
          borderDash: [5, 5],
          borderWidth: 2,
          pointRadius: 0,
          tension: 0.2,
          yAxisID: 'y2'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 900,
        easing: 'easeOutQuart'
      },
      interaction: {
        mode: 'index',
        intersect: false
      },
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: '#080C14',
          borderColor: 'rgba(148, 163, 184, 0.25)',
          borderWidth: 1,
          padding: 10,
          titleFont: { family: 'JetBrains Mono', size: 11, weight: 'bold' },
          bodyFont: { family: 'JetBrains Mono', size: 10.5 },
          titleColor: '#F8FAFC',
          bodyColor: '#94A3B8',
          callbacks: {
            label: function(context) {
              const label = context.dataset.label || '';
              const value = context.parsed.y;
              return ` ${label}: ${value}`;
            }
          }
        }
      },
      scales: {
        x: {
          grid: { color: 'rgba(148, 163, 184, 0.06)' },
          ticks: { color: '#64748B', font: { family: 'JetBrains Mono', size: 9 } }
        },
        y: {
          type: 'linear',
          position: 'left',
          title: { display: true, text: 'Temp (°C)', color: '#EF4444', font: { size: 9, family: 'JetBrains Mono' } },
          grid: { color: 'rgba(148, 163, 184, 0.06)' },
          ticks: { color: '#64748B', font: { family: 'JetBrains Mono', size: 9 } }
        },
        y1: {
          type: 'linear',
          position: 'right',
          title: { display: true, text: 'Vib (mm/s)', color: '#06B6D4', font: { size: 9, family: 'JetBrains Mono' } },
          grid: { drawOnChartArea: false },
          ticks: { color: '#64748B', font: { family: 'JetBrains Mono', size: 9 } }
        },
        y2: {
          type: 'linear',
          position: 'right',
          min: 0,
          max: 100,
          display: false,
          grid: { drawOnChartArea: false }
        }
      }
    }
  });
}

function attachModalListeners(machine, onDispatch, onSimulate, guide, matchedTeam) {
  const modalRoot = document.getElementById('modal-root');
  
  const closeModal = () => {
    if (modalChartInstance) {
      modalChartInstance.destroy();
      modalChartInstance = null;
    }
    modalRoot.innerHTML = '';
  };

  const handleExcelExport = () => {
    generateExecutiveExcelReport(machine);
    showToast(`Executive Diagnostic Dossier for ${machine.id} exported (.xls)!`, 'success', 4500);
  };

  document.getElementById('btn-close-machine-modal')?.addEventListener('click', closeModal);
  document.getElementById('machine-modal-backdrop')?.addEventListener('click', (e) => {
    if (e.target.id === 'machine-modal-backdrop') closeModal();
  });

  // Excel Export Buttons
  document.getElementById('btn-export-excel-header')?.addEventListener('click', handleExcelExport);
  document.getElementById('btn-export-excel-footer')?.addEventListener('click', handleExcelExport);
  document.getElementById('btn-download-preview-report')?.addEventListener('click', handleExcelExport);

  // Tab Switching Handlers
  document.querySelectorAll('.modal-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      activeTab = btn.getAttribute('data-tab');
      
      // Update Tab Styles
      document.querySelectorAll('.modal-tab-btn').forEach(b => {
        const isCurrent = b.getAttribute('data-tab') === activeTab;
        b.className = `modal-tab-btn px-3.5 py-3 border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap ${
          isCurrent ? 'border-secondary text-secondary font-bold bg-secondary/5' : 'border-transparent text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low/60'
        }`;
      });

      // Update Body Content
      const bodyEl = document.getElementById('modal-tab-body');
      if (bodyEl) {
        bodyEl.innerHTML = renderActiveTabContent(activeTab, machine, guide, matchedTeam);
      }

      // If Telemetry tab, init Chart.js
      if (activeTab === 'telemetry') {
        setTimeout(() => initModalTelemetryChart(machine), 80);
      } else if (modalChartInstance) {
        modalChartInstance.destroy();
        modalChartInstance = null;
      }

      // Re-attach interactive controls inside active tab
      attachTabInternalListeners(machine, onDispatch, onSimulate, guide, matchedTeam, closeModal, handleExcelExport);
    });
  });

  // Footer Actions
  document.getElementById('btn-simulate-from-modal')?.addEventListener('click', () => {
    closeModal();
    if (onSimulate) onSimulate(machine);
  });

  document.getElementById('btn-dispatch-from-modal')?.addEventListener('click', () => {
    closeModal();
    if (onDispatch) onDispatch(machine, matchedTeam.id);
  });

  // Initial internal listeners
  attachTabInternalListeners(machine, onDispatch, onSimulate, guide, matchedTeam, closeModal, handleExcelExport);
}

function attachTabInternalListeners(machine, onDispatch, onSimulate, guide, matchedTeam, closeModal, handleExcelExport) {
  // Re-attach download button inside preview tab
  document.getElementById('btn-download-preview-report')?.addEventListener('click', handleExcelExport);

  // 3-State Checklist Toggles (Pending -> In Progress -> Verified)
  document.querySelectorAll('.btn-toggle-checklist').forEach(row => {
    row.addEventListener('click', () => {
      const checkId = row.getAttribute('data-checklist-id');
      const currentState = inspectionStates[checkId] || 0;
      inspectionStates[checkId] = (currentState + 1) % 3; // Toggle 0 -> 1 -> 2 -> 0

      // Re-render tab content
      const bodyEl = document.getElementById('modal-tab-body');
      if (bodyEl) {
        bodyEl.innerHTML = renderActiveTabContent(activeTab, machine, guide, matchedTeam);
        attachTabInternalListeners(machine, onDispatch, onSimulate, guide, matchedTeam, closeModal, handleExcelExport);
      }
    });
  });

  // SHAP Factor Drilldown Toggles
  document.querySelectorAll('.btn-toggle-shap-drilldown').forEach(card => {
    card.addEventListener('click', () => {
      const factorId = card.getAttribute('data-shap-id');
      expandedDrilldown = expandedDrilldown === factorId ? null : factorId;

      const bodyEl = document.getElementById('modal-tab-body');
      if (bodyEl) {
        bodyEl.innerHTML = renderActiveTabContent(activeTab, machine, guide, matchedTeam);
        attachTabInternalListeners(machine, onDispatch, onSimulate, guide, matchedTeam, closeModal, handleExcelExport);
      }
    });
  });

  // Team Selection Matrix Buttons
  document.querySelectorAll('.btn-select-team').forEach(teamBtn => {
    teamBtn.addEventListener('click', () => {
      const teamId = teamBtn.getAttribute('data-assign-team');
      closeModal();
      if (onDispatch) onDispatch(machine, teamId);
    });
  });
}
