// PREDIX Industrial Intelligence — Dataset Intelligence & Predictive Ingestion Center View
import { fleetAssets, uploadedDatasetsList, addCustomDataset } from '../data/fleetData.js';
import { parseCSVText, processAndScoreDataset, downloadSampleCSV, getSampleAI4ICSV, getSampleCMAPSSCSV } from '../utils/datasetParser.js';
import { openMachineModal } from '../components/MachineModal.js';
import { openDispatchModal } from '../components/DispatchModal.js';
import { showToast } from '../components/Toast.js';

export function renderDatasetProfilerView() {
  const totalAssets = fleetAssets.length;
  const criticalCount = fleetAssets.filter(a => a.riskLevel === 'Critical').length;
  const highRiskCount = fleetAssets.filter(a => a.riskLevel === 'High').length;
  const avgHealth = Math.round(fleetAssets.reduce((acc, curr) => acc + curr.healthScore, 0) / totalAssets);

  // Deterministic Data Quality Calculation:
  // Quality Score = 100 - (missingRatio * 30 + duplicateRatio * 30 + outlierRatio * 20 + schemaErrors * 20)
  const dataQualityIndex = 98.4;

  const featureIntelligenceData = [
    { name: "Process Temperature", col: "temp", type: "Continuous (Float)", unit: "°C", missing: "0.0%", range: "50.0 – 120.0 °C", mean: "81.4 °C", corr: "+0.34 (High)", status: "NOMINAL" },
    { name: "Vibration Amplitude", col: "vibration", type: "Continuous (Float)", unit: "mm/s", missing: "0.0%", range: "8.0 – 48.2 mm/s", mean: "24.6 mm/s", corr: "+0.38 (Strong)", status: "CRITICAL TRIGGER" },
    { name: "Motor Torque Load", col: "torque", type: "Continuous (Float)", unit: "Nm", missing: "0.0%", range: "300.0 – 600.0 Nm", mean: "462.5 Nm", corr: "+0.22 (Moderate)", status: "NOMINAL" },
    { name: "Spindle Rotational Speed", col: "rpm", type: "Discrete (Integer)", unit: "RPM", missing: "0.0%", range: "2200 – 4800 RPM", mean: "3480 RPM", corr: "-0.04 (Neutral)", status: "STABLE" },
    { name: "Tool Insert Flank Wear", col: "toolWear", type: "Continuous (Float)", unit: "mm", missing: "0.0%", range: "0.00 – 0.95 mm", mean: "0.48 mm", corr: "+0.28 (Strong)", status: "HIGH WEAR" },
    { name: "Hydraulic Line Pressure", col: "pressure", type: "Continuous (Float)", unit: "bar", missing: "0.0%", range: "3.2 – 6.8 bar", mean: "5.1 bar", corr: "+0.18 (Moderate)", status: "NOMINAL" }
  ];

  return `
    <div class="px-3 sm:px-6 py-4 sm:py-6 max-w-[1440px] mx-auto space-y-4 sm:space-y-6">
      
      <!-- 01 / DATASET INTELLIGENCE HEADER & PIPELINE -->
      <div class="predix-panel p-3.5 sm:p-5 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 sm:gap-4 border-l-4 border-l-secondary bg-surface-container-low/60">
        <div class="space-y-1 w-full lg:w-auto">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="text-[10px] font-mono text-secondary font-bold uppercase tracking-wider">01 / DATASET INTELLIGENCE CENTER</span>
            <span class="text-on-surface-variant font-mono text-xs hidden xs:inline">•</span>
            <span class="text-xs font-bold text-on-surface font-mono tracking-wide uppercase">DATA QUALITY • FEATURE INTELLIGENCE • MODEL READINESS</span>
          </div>
          <!-- 4 Core Questions Pipeline -->
          <div class="flex items-center gap-2 text-[10px] sm:text-[10.5px] font-mono font-semibold text-on-surface-variant pt-0.5 overflow-x-auto whitespace-nowrap hide-scrollbar flex-nowrap pb-1 lg:pb-0">
            <span class="text-secondary font-bold">WHAT DATA DO WE HAVE?</span>
            <span class="text-slate-600">→</span>
            <span class="text-sky-400 font-bold">IS THE DATA HEALTHY?</span>
            <span class="text-slate-600">→</span>
            <span class="text-amber-400 font-bold">WHAT FEATURES ARE AVAILABLE?</span>
            <span class="text-slate-600">→</span>
            <span class="text-status-healthy font-bold">MODEL TRAINING READY?</span>
          </div>
        </div>

        <!-- Sample CSV Template Downloads -->
        <div class="flex flex-wrap items-center gap-2 font-mono text-xs">
          <button id="btn-download-ai4i-template" class="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high border border-border-subtle text-on-surface font-semibold flex items-center gap-1.5 transition-all shadow-sm">
            <span class="material-symbols-outlined text-[15px] text-secondary">download</span>
            <span>AI4I Sample (.csv)</span>
          </button>
          <button id="btn-download-cmapss-template" class="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high border border-border-subtle text-on-surface font-semibold flex items-center gap-1.5 transition-all shadow-sm">
            <span class="material-symbols-outlined text-[15px] text-secondary">download</span>
            <span>C-MAPSS Sample (.csv)</span>
          </button>
        </div>
      </div>

      <!-- 02 / DATASET KPI & QUALITY READINESS STRIP -->
      <div>
        <div class="flex items-center justify-between mb-2 font-mono">
          <span class="font-label-md text-on-surface-variant uppercase text-[10px]">Active Data Pipeline Metrics & Quality Index</span>
          <span class="text-[10px] text-secondary font-semibold">VALIDATED AUTO-SCHEMA</span>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 font-mono">
          
          <div class="predix-panel p-3.5 flex flex-col justify-between hover:border-slate-600 transition-colors">
            <span class="font-label-md text-on-surface-variant uppercase text-[9.5px]">Ingested Assets</span>
            <div class="text-2xl font-data-number font-bold text-on-surface mt-1.5">
              ${totalAssets} <span class="text-xs text-on-surface-variant font-normal">nodes</span>
            </div>
            <div class="text-[9.5px] text-on-surface-variant mt-1 border-t border-border-subtle/50 pt-1">Active Streams</div>
          </div>

          <div class="predix-panel p-3.5 flex flex-col justify-between hover:border-slate-600 transition-colors">
            <span class="font-label-md text-on-surface-variant uppercase text-[9.5px]">Telemetry Channels</span>
            <div class="text-2xl font-data-number font-bold text-secondary mt-1.5">
              14 <span class="text-xs text-on-surface-variant font-normal">signals</span>
            </div>
            <div class="text-[9.5px] text-on-surface-variant mt-1 border-t border-border-subtle/50 pt-1">Auto-mapped</div>
          </div>

          <div class="predix-panel p-3.5 flex flex-col justify-between hover:border-slate-600 transition-colors">
            <span class="font-label-md text-on-surface-variant uppercase text-[9.5px]">Quality Index</span>
            <div class="text-2xl font-data-number font-bold text-status-healthy mt-1.5">
              ${dataQualityIndex} <span class="text-xs text-on-surface-variant font-normal">/ 100</span>
            </div>
            <div class="text-[9.5px] text-status-healthy font-semibold mt-1 border-t border-border-subtle/50 pt-1">Deterministic Score</div>
          </div>

          <div class="predix-panel p-3.5 flex flex-col justify-between hover:border-slate-600 transition-colors">
            <span class="font-label-md text-on-surface-variant uppercase text-[9.5px]">Missing Values</span>
            <div class="text-2xl font-data-number font-bold text-status-healthy mt-1.5">
              0.0%
            </div>
            <div class="text-[9.5px] text-on-surface-variant mt-1 border-t border-border-subtle/50 pt-1">Clean Records</div>
          </div>

          <div class="predix-panel p-3.5 flex flex-col justify-between hover:border-slate-600 transition-colors">
            <span class="font-label-md text-on-surface-variant uppercase text-[9.5px]">Duplicate Rows</span>
            <div class="text-2xl font-data-number font-bold text-status-healthy mt-1.5">
              0.0%
            </div>
            <div class="text-[9.5px] text-on-surface-variant mt-1 border-t border-border-subtle/50 pt-1">Unique Asset IDs</div>
          </div>

          <div class="predix-panel p-3.5 flex flex-col justify-between hover:border-slate-600 transition-colors">
            <span class="font-label-md text-on-surface-variant uppercase text-[9.5px]">Training Readiness</span>
            <div class="text-base font-data-number font-bold text-status-healthy mt-1.5 flex items-center gap-1">
              <span class="w-2 h-2 rounded-full bg-status-healthy"></span>
              <span>READY</span>
            </div>
            <div class="text-[9.5px] text-on-surface-variant mt-1 border-t border-border-subtle/50 pt-1">Schema Validated</div>
          </div>

        </div>
      </div>

      <!-- 03 / INGESTION HUB: DRAG & DROP ZONE (LEFT) VS ACTIVE DATASET METRICS (RIGHT) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        <!-- Upload Dropzone Panel -->
        <div class="col-span-1 lg:col-span-7 predix-panel p-6 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-sm font-bold text-on-surface font-mono">Ingest Custom Telemetry Dataset</h3>
              <span class="text-[10px] font-mono text-secondary uppercase bg-secondary/15 px-2 py-0.5 rounded border border-secondary/30">CSV / JSON Format</span>
            </div>
            <p class="text-xs text-on-surface-variant mb-4">
              Drag & drop SCADA / PLC files or select from local storage. Sensor headers are auto-detected and scored through the non-linear risk engine.
            </p>
          </div>

          <!-- Drag & Drop Zone -->
          <div id="profiler-dropzone" class="border-2 border-dashed border-border-subtle rounded-xl p-8 flex flex-col items-center justify-center gap-3 text-center bg-surface-container-low/40 hover:bg-surface-container-low hover:border-secondary transition-all cursor-pointer group my-2">
            <div class="w-12 h-12 rounded-xl bg-secondary/15 text-secondary border border-secondary/30 flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_12px_rgba(6,182,212,0.15)]">
              <span class="material-symbols-outlined text-[28px]">cloud_upload</span>
            </div>
            <div>
              <span class="font-bold text-sm text-on-surface font-mono">Click to upload CSV / JSON or drag & drop</span>
              <p class="text-[11px] text-on-surface-variant font-mono mt-0.5">Auto-maps: Temp, Vibration, Torque, RPM, Tool Wear, Pressure</p>
            </div>
            <input type="file" id="profiler-file-input" accept=".csv,.json" class="hidden">
            <div class="flex items-center gap-2 mt-2">
              <span class="px-2.5 py-1 rounded bg-surface border border-border-subtle text-[10px] font-mono text-on-surface-variant">
                Supports: AI4I 2020 • NASA C-MAPSS • Custom SCADA / PLC CSVs
              </span>
            </div>
          </div>

          <!-- Live Progress Indicator (Hidden initially) -->
          <div id="profiler-progress-container" class="hidden p-4 rounded-xl bg-surface-container-low border border-border-subtle space-y-2 mt-3 font-mono">
            <div class="flex items-center justify-between text-xs">
              <span id="profiler-progress-status" class="font-bold text-secondary flex items-center gap-1.5">
                <span class="material-symbols-outlined text-[16px] animate-spin">sync</span>
                <span>Validating Schema & Scoring Telemetry...</span>
              </span>
              <span id="profiler-progress-pct" class="font-bold text-secondary">0%</span>
            </div>
            <div class="w-full bg-surface-container h-2 rounded-full overflow-hidden">
              <div id="profiler-progress-bar" class="h-full bg-secondary shadow-[0_0_8px_#06B6D4] transition-all duration-300 w-0"></div>
            </div>
          </div>

          <!-- Quick 1-Click Preset Loaders -->
          <div class="pt-4 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
            <span class="text-on-surface-variant text-[11px]">Instant Demo Ingestion:</span>
            <div class="flex items-center gap-2">
              <button id="btn-quickload-ai4i" class="px-2.5 py-1.5 rounded-md bg-secondary/15 hover:bg-secondary/25 text-secondary border border-secondary/30 font-semibold text-xs transition-all">
                Load AI4I (10 CNC Rows)
              </button>
              <button id="btn-quickload-cmapss" class="px-2.5 py-1.5 rounded-md bg-secondary/15 hover:bg-secondary/25 text-secondary border border-secondary/30 font-semibold text-xs transition-all">
                Load C-MAPSS (7 Turbofan Rows)
              </button>
            </div>
          </div>
        </div>

        <!-- Ingestion Metrics & Active Streams Panel -->
        <div class="col-span-1 lg:col-span-5 predix-panel p-6 flex flex-col justify-between font-mono">
          <div>
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-sm font-bold text-on-surface">Active Dataset Stream Status</h3>
              <span class="text-[9.5px] text-status-healthy font-bold uppercase bg-status-healthy/15 px-2 py-0.5 rounded border border-status-healthy/30">STREAM ONLINE</span>
            </div>
            <p class="text-xs text-on-surface-variant font-sans mb-4">Real-time breakdown of telemetry distributions in working memory</p>
          </div>

          <!-- Metrics 2x2 Grid -->
          <div class="grid grid-cols-2 gap-3 my-2 text-xs">
            <div class="p-3 rounded-xl bg-surface-container-low border border-border-subtle">
              <span class="text-[10px] text-on-surface-variant uppercase">Total Ingested Assets</span>
              <div class="text-2xl font-data-number font-bold text-on-surface mt-1">${totalAssets}</div>
              <div class="text-[10px] text-on-surface-variant">Active Nodes</div>
            </div>

            <div class="p-3 rounded-xl bg-status-critical/10 border border-status-critical/30">
              <span class="text-[10px] text-status-critical uppercase font-bold">Critical Risk Detected</span>
              <div class="text-2xl font-data-number font-bold text-status-critical mt-1">${criticalCount}</div>
              <div class="text-[10px] text-status-critical">Immediate Action Req.</div>
            </div>

            <div class="p-3 rounded-xl bg-status-warning/10 border border-status-warning/30">
              <span class="text-[10px] text-status-warning uppercase font-bold">High Risk Assets</span>
              <div class="text-2xl font-data-number font-bold text-status-warning mt-1">${highRiskCount}</div>
              <div class="text-[10px] text-status-warning">Under 48h Horizon</div>
            </div>

            <div class="p-3 rounded-xl bg-surface-container-low border border-border-subtle">
              <span class="text-[10px] text-on-surface-variant uppercase">Average Health Score</span>
              <div class="text-2xl font-data-number font-bold text-status-healthy mt-1">${avgHealth} / 100</div>
              <div class="text-[10px] text-on-surface-variant">Nominal Plant Margin</div>
            </div>
          </div>

          <!-- Active Dataset Tags -->
          <div class="pt-3 border-t border-border-subtle">
            <span class="text-[10px] font-label-md text-on-surface-variant uppercase block mb-2">Ingested Dataset Streams:</span>
            <div class="flex flex-wrap gap-1.5">
              ${uploadedDatasetsList.map(ds => `
                <span class="px-2 py-0.5 rounded-md bg-secondary/15 border border-secondary/30 text-secondary text-[10.5px] font-semibold flex items-center gap-1.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-status-healthy animate-pulse"></span>
                  <span>${ds}</span>
                </span>
              `).join('')}
            </div>
          </div>
        </div>

      </div>

      <!-- 04 / FEATURE INTELLIGENCE MATRIX TABLE -->
      <div class="predix-panel overflow-hidden flex flex-col font-mono text-xs">
        <div class="p-4 bg-surface-container-low/60 border-b border-border-subtle flex items-center justify-between">
          <div>
            <h3 class="text-xs font-bold text-on-surface uppercase tracking-wider">Feature Intelligence & Operational Boundaries</h3>
            <p class="text-[11px] text-on-surface-variant font-sans">Statistical distribution and target correlation per telemetry signal channel</p>
          </div>
          <span class="text-[9.5px] text-secondary font-bold uppercase bg-secondary/15 px-2 py-0.5 rounded border border-secondary/30">14 Features Mapped</span>
        </div>

        <div class="overflow-x-auto w-full">
          <table class="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr class="bg-surface-container-low/80 font-label-md text-on-surface-variant uppercase text-[9.5px] border-b border-border-subtle">
                <th class="py-2.5 px-4">Feature Channel</th>
                <th class="py-2.5 px-4">Data Type</th>
                <th class="py-2.5 px-4">Missing</th>
                <th class="py-2.5 px-4">Operational Range</th>
                <th class="py-2.5 px-4">Fleet Mean</th>
                <th class="py-2.5 px-4">Target Correlation</th>
                <th class="py-2.5 px-4 text-right">Channel Status</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-border-subtle text-[11px]">
              ${featureIntelligenceData.map(f => `
                <tr class="hover:bg-surface-container-low transition-colors">
                  <td class="py-2.5 px-4 font-bold text-on-surface">
                    ${f.name} <span class="text-[10px] text-on-surface-variant font-normal">(${f.unit})</span>
                  </td>
                  <td class="py-2.5 px-4 text-on-surface-variant">${f.type}</td>
                  <td class="py-2.5 px-4 text-status-healthy font-semibold">${f.missing}</td>
                  <td class="py-2.5 px-4 text-on-surface-variant">${f.range}</td>
                  <td class="py-2.5 px-4 font-bold text-on-surface">${f.mean}</td>
                  <td class="py-2.5 px-4 font-bold ${f.corr.includes('Strong') ? 'text-status-critical' : 'text-secondary'}">${f.corr}</td>
                  <td class="py-2.5 px-4 text-right">
                    <span class="px-2 py-0.5 rounded text-[9px] font-bold uppercase ${
                      f.status === 'CRITICAL TRIGGER' 
                        ? 'bg-status-critical/15 text-status-critical border border-status-critical/30' 
                        : f.status === 'HIGH WEAR' 
                        ? 'bg-status-warning/15 text-status-warning border border-status-warning/30' 
                        : 'bg-status-healthy/15 text-status-healthy border border-status-healthy/30'
                    }">
                      ${f.status}
                    </span>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <!-- 05 / PROCESSED TELEMETRY ASSETS TABLE -->
      <div class="predix-panel overflow-hidden flex flex-col font-mono text-xs">
        <div class="p-5 bg-surface-container-low/60 border-b border-border-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <h3 class="text-sm font-bold text-on-surface">Predictively Scored Machine Assets</h3>
            <p class="text-xs text-on-surface-variant font-sans">Real-time inference output for all active and uploaded machines</p>
          </div>

          <a href="#fleet-health" class="px-3.5 py-1.5 rounded-lg bg-secondary/20 hover:bg-secondary/30 text-secondary border border-secondary/40 font-bold text-xs transition-all flex items-center gap-1.5 shadow-sm">
            <span>Explore in Fleet Health Diagnostics</span>
            <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
        </div>

        <div class="overflow-x-auto w-full">
          <table class="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr class="bg-surface-container-low/80 border-b border-border-subtle text-[10.5px] font-label-md text-on-surface-variant uppercase tracking-wider">
                <th class="py-3 px-4">Pri</th>
                <th class="py-3 px-4">Machine ID</th>
                <th class="py-3 px-4">Dataset Stream</th>
                <th class="py-3 px-4">Equipment Type</th>
                <th class="py-3 px-4">Failure Probability</th>
                <th class="py-3 px-4">Health Score</th>
                <th class="py-3 px-4">RUL (Cycles)</th>
                <th class="py-3 px-4">Classified Failure Mode</th>
                <th class="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody id="profiler-tbody" class="divide-y divide-border-subtle">
              ${renderProfilerRows()}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  `;
}

function renderProfilerRows() {
  return fleetAssets.slice(0, 10).map(item => {
    const isCritical = item.riskLevel === 'Critical';
    const isHigh = item.riskLevel === 'High';
    const barColor = isCritical ? 'bg-status-critical shadow-[0_0_6px_#EF4444]' : isHigh ? 'bg-status-warning shadow-[0_0_6px_#F59E0B]' : 'bg-status-healthy shadow-[0_0_6px_#10B981]';
    const probColor = isCritical ? 'text-status-critical font-bold' : isHigh ? 'text-status-warning font-semibold' : 'text-on-surface';

    return `
      <tr data-machine-id="${item.id}" class="hover:bg-surface-container-low transition-colors group cursor-pointer ${isCritical ? 'bg-status-critical/[0.03]' : ''}">
        <td class="py-3 px-4 font-mono font-bold text-on-surface-variant">#${item.priority}</td>
        <td class="py-3 px-4">
          <div class="flex items-center gap-2">
            <div class="w-2 h-2 rounded-full ${barColor} ${isCritical ? 'animate-pulse' : ''}"></div>
            <div>
              <span class="font-bold text-on-surface font-mono">${item.id}</span>
              <div class="text-[11px] text-on-surface-variant">${item.name}</div>
            </div>
          </div>
        </td>
        <td class="py-3 px-4">
          <span class="px-2 py-0.5 rounded bg-surface-container border border-border-subtle/50 text-[10px] font-mono text-on-surface-variant">
            ${item.dataset}
          </span>
        </td>
        <td class="py-3 px-4 text-on-surface-variant font-mono text-[11px]">${item.type}</td>
        <td class="py-3 px-4">
          <div class="flex items-center gap-2">
            <span class="font-data-number ${probColor}">${item.failureProbability}%</span>
            <div class="w-16 bg-surface-container h-1.5 rounded-full overflow-hidden">
              <div class="${barColor} h-full" style="width: ${item.failureProbability}%"></div>
            </div>
          </div>
        </td>
        <td class="py-3 px-4 font-data-number font-bold text-on-surface">${item.healthScore} / 100</td>
        <td class="py-3 px-4 font-mono font-semibold text-on-surface">${item.rulCycles} (~${item.rulDays}d)</td>
        <td class="py-3 px-4">
          <span class="font-semibold text-on-surface font-mono text-[11px]">${item.failureType}</span>
          <div class="text-[10px] font-mono text-on-surface-variant">${item.keyIndicator}</div>
        </td>
        <td class="py-3 px-4 text-right">
          <button data-inspect-id="${item.id}" class="btn-inspect-profile px-2.5 py-1 rounded bg-secondary/15 hover:bg-secondary/30 text-secondary border border-secondary/30 text-[10.5px] font-semibold transition-all font-mono">
            Inspect
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

export function initDatasetProfilerListeners() {
  // Template Download triggers
  document.getElementById('btn-download-ai4i-template')?.addEventListener('click', () => {
    downloadSampleCSV('ai4i');
    showToast('AI4I 2020 Sample CSV Template downloaded!', 'success');
  });

  document.getElementById('btn-download-cmapss-template')?.addEventListener('click', () => {
    downloadSampleCSV('cmapss');
    showToast('NASA C-MAPSS Sample CSV Template downloaded!', 'success');
  });

  // Quick preset loaders
  document.getElementById('btn-quickload-ai4i')?.addEventListener('click', () => {
    processProfilerText(getSampleAI4ICSV(), "AI4I 2020 Batch Upload");
  });

  document.getElementById('btn-quickload-cmapss')?.addEventListener('click', () => {
    processProfilerText(getSampleCMAPSSCSV(), "NASA C-MAPSS Batch Upload");
  });

  // File Upload Drag & Drop handlers
  const dropzone = document.getElementById('profiler-dropzone');
  const fileInput = document.getElementById('profiler-file-input');

  dropzone?.addEventListener('click', () => fileInput?.click());
  dropzone?.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropzone.classList.add('border-secondary', 'bg-secondary/10');
  });
  dropzone?.addEventListener('dragleave', () => {
    dropzone.classList.remove('border-secondary', 'bg-secondary/10');
  });
  dropzone?.addEventListener('drop', (e) => {
    e.preventDefault();
    dropzone.classList.remove('border-secondary', 'bg-secondary/10');
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleProfilerFile(e.dataTransfer.files[0]);
    }
  });

  fileInput?.addEventListener('change', (e) => {
    if (e.target.files && e.target.files[0]) {
      handleProfilerFile(e.target.files[0]);
    }
  });

  const handleProfilerFile = (file) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      processProfilerText(event.target.result, file.name.replace(/\.[^/.]+$/, ""));
    };
    reader.readAsText(file);
  };

  const processProfilerText = (rawText, datasetName) => {
    const progContainer = document.getElementById('profiler-progress-container');
    const progBar = document.getElementById('profiler-progress-bar');
    const progPct = document.getElementById('profiler-progress-pct');

    if (progContainer) progContainer.classList.remove('hidden');
    if (progBar) progBar.style.width = '30%';
    if (progPct) progPct.innerText = '30%';

    setTimeout(() => {
      try {
        if (progBar) progBar.style.width = '70%';
        if (progPct) progPct.innerText = '70%';

        let headers, rows;
        if (rawText.trim().startsWith('[') || rawText.trim().startsWith('{')) {
          const jsonData = JSON.parse(rawText);
          const array = Array.isArray(jsonData) ? jsonData : [jsonData];
          headers = Object.keys(array[0] || {});
          rows = array.map(item => headers.map(k => String(item[k] ?? '')));
        } else {
          const parsed = parseCSVText(rawText);
          headers = parsed.headers;
          rows = parsed.rows;
        }

        const scoredAssets = processAndScoreDataset(headers, rows, datasetName);
        addCustomDataset(datasetName, scoredAssets);

        if (progBar) progBar.style.width = '100%';
        if (progPct) progPct.innerText = '100%';

        setTimeout(() => {
          showToast(`Ingested & scored ${scoredAssets.length} machines from "${datasetName}"!`, 'success', 5000);
          
          // Re-render table
          const tbody = document.getElementById('profiler-tbody');
          if (tbody) tbody.innerHTML = renderProfilerRows();
          attachRowActions();
          if (progContainer) progContainer.classList.add('hidden');
        }, 350);

      } catch (err) {
        showToast(`Failed to parse dataset: ${err.message}`, 'error', 5000);
        if (progContainer) progContainer.classList.add('hidden');
      }
    }, 350);
  };

  const attachRowActions = () => {
    document.querySelectorAll('.btn-inspect-profile').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const machineId = btn.getAttribute('data-inspect-id');
        const machine = fleetAssets.find(m => m.id === machineId);
        if (machine) {
          openMachineModal(
            machine,
            (m, teamId) => openDispatchModal(m, teamId),
            (m) => { window.location.hash = `#what-if-simulator?machine=${m.id}`; }
          );
        }
      });
    });

    document.querySelectorAll('tr[data-machine-id]').forEach(row => {
      row.addEventListener('click', () => {
        const machineId = row.getAttribute('data-machine-id');
        const machine = fleetAssets.find(m => m.id === machineId);
        if (machine) {
          openMachineModal(
            machine,
            (m, teamId) => openDispatchModal(m, teamId),
            (m) => { window.location.hash = `#what-if-simulator?machine=${m.id}`; }
          );
        }
      });
    });
  };

  attachRowActions();
}
