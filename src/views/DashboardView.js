// PREDIX Industrial Intelligence — Command Center Dashboard View
import { fleetAssets, getFleetKPIs } from '../data/fleetData.js';
import { activityLogs } from '../data/activityLogs.js';
import { activeWorkOrders } from '../data/teamsData.js';
import { openMachineModal } from '../components/MachineModal.js';
import { openDispatchModal } from '../components/DispatchModal.js';
import { generateExecutiveExcelReport, generateFleetExecutiveBriefing } from '../utils/excelReport.js';
import { exportToCSV } from '../utils/export.js';
import { showToast } from '../components/Toast.js';

export function renderDashboardView() {
  const kpis = getFleetKPIs();
  const criticalAsset = fleetAssets[0]; // CNC-Milling-Unit-04
  const priorityList = fleetAssets.slice(0, 6);

  return `
    <div class="px-3 sm:px-6 py-4 sm:py-6 max-w-[1440px] mx-auto space-y-4 sm:space-y-6">
      
      <!-- 01 / TOP COMMAND STATUS & DECISION PIPELINE -->
      <div class="predix-panel p-3.5 sm:p-4 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 sm:gap-4 border-l-4 border-l-secondary bg-surface-container-low/60">
        <div class="space-y-1 w-full lg:w-auto">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="text-[10px] font-mono text-secondary font-bold uppercase tracking-wider">01 / COMMAND STATUS</span>
            <span class="text-on-surface-variant font-mono text-xs hidden xs:inline">•</span>
            <span class="text-xs font-bold text-on-surface font-mono tracking-wide uppercase">PREDICTIVE MAINTENANCE DECISION INTELLIGENCE</span>
          </div>
          <!-- Workflow Signal Pipeline -->
          <div class="flex items-center gap-2 text-[10px] sm:text-[10.5px] font-mono font-semibold text-on-surface-variant pt-0.5 overflow-x-auto whitespace-nowrap hide-scrollbar flex-nowrap pb-1 lg:pb-0">
            <span class="text-secondary font-bold">PREDICT</span>
            <span class="text-slate-600">→</span>
            <span class="text-sky-400 font-bold">DETECT</span>
            <span class="text-slate-600">→</span>
            <span class="text-amber-400 font-bold">EXPLAIN</span>
            <span class="text-slate-600">→</span>
            <span class="text-status-critical font-bold">PRIORITIZE</span>
            <span class="text-slate-600">→</span>
            <span class="text-status-healthy font-bold">ACT</span>
          </div>
        </div>

        <!-- Telemetry State & Edge Engine Metrics -->
        <div class="flex flex-wrap items-center gap-2.5">
          <div class="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-status-healthy/15 border border-status-healthy/30">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-healthy opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-status-healthy"></span>
            </span>
            <span class="text-[10.5px] font-mono font-bold text-status-healthy tracking-wider uppercase">STREAM: ONLINE</span>
          </div>
          <div class="px-3 py-1.5 rounded-lg bg-surface-container border border-border-subtle text-[10.5px] font-mono text-on-surface-variant">
            <span class="text-on-surface font-semibold">XGBoost v2.4.1</span> • <span class="text-secondary">1.2ms Latency</span>
          </div>
        </div>
      </div>

      <!-- KPI COMMAND STRIP (With Count-Up Animation) -->
      <div>
        <div class="flex items-center justify-between mb-2">
          <span class="font-label-md text-on-surface-variant uppercase">Fleet Health Telemetry Strip</span>
          <span class="text-[10px] font-mono text-secondary">SYNCED REAL-TIME</span>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
          
          <!-- Total Fleet -->
          <div class="predix-panel p-4 flex flex-col justify-between hover:border-slate-600 transition-colors">
            <div class="flex items-center justify-between text-on-surface-variant">
              <span class="font-label-md text-[10px]">Total Assets</span>
              <span class="material-symbols-outlined text-[18px] text-secondary">precision_manufacturing</span>
            </div>
            <div class="mt-2.5">
              <div class="text-2xl font-data-number font-bold text-on-surface">
                <span class="count-up-number" data-target="${kpis.total}" data-format="integer">0</span>
              </div>
              <div class="text-[11px] text-on-surface-variant flex items-center gap-1 mt-1 font-mono">
                <span class="material-symbols-outlined text-[14px] text-status-healthy">trending_up</span>
                <span class="text-status-healthy font-semibold">+12</span>
                <span>monitored</span>
              </div>
            </div>
          </div>

          <!-- Nominal (Healthy) Assets -->
          <div class="predix-panel p-4 flex flex-col justify-between hover:border-slate-600 transition-colors">
            <div class="flex items-center justify-between text-on-surface-variant">
              <span class="font-label-md text-[10px]">Nominal (Healthy)</span>
              <div class="w-6 h-6 rounded-md bg-status-healthy/15 flex items-center justify-center text-status-healthy border border-status-healthy/30">
                <span class="material-symbols-outlined text-[15px]">check_circle</span>
              </div>
            </div>
            <div class="mt-2.5">
              <div class="text-2xl font-data-number font-bold text-status-healthy">
                <span class="count-up-number" data-target="${kpis.healthy}" data-format="integer">0</span>
              </div>
              <div class="text-[11px] font-mono text-on-surface-variant mt-1">
                <span class="count-up-number" data-target="${kpis.healthyPct}" data-format="decimal" data-suffix="%">0</span> of fleet
              </div>
            </div>
          </div>

          <!-- Warning Assets -->
          <div class="predix-panel p-4 flex flex-col justify-between hover:border-slate-600 transition-colors">
            <div class="flex items-center justify-between text-on-surface-variant">
              <span class="font-label-md text-[10px]">Warning State</span>
              <div class="w-6 h-6 rounded-md bg-status-warning/15 flex items-center justify-center text-status-warning border border-status-warning/30">
                <span class="material-symbols-outlined text-[15px]">warning</span>
              </div>
            </div>
            <div class="mt-2.5">
              <div class="text-2xl font-data-number font-bold text-status-warning">
                <span class="count-up-number" data-target="${kpis.warning}" data-format="integer">0</span>
              </div>
              <div class="text-[11px] font-mono text-on-surface-variant mt-1">
                <span class="count-up-number" data-target="${kpis.warningPct}" data-format="decimal" data-suffix="%">0</span> observation
              </div>
            </div>
          </div>

          <!-- High Risk Assets -->
          <div class="predix-panel p-4 flex flex-col justify-between hover:border-slate-600 transition-colors">
            <div class="flex items-center justify-between text-on-surface-variant">
              <span class="font-label-md text-[10px]">High Risk (48h)</span>
              <div class="w-6 h-6 rounded-md bg-status-critical/15 flex items-center justify-center text-status-critical border border-status-critical/30">
                <span class="material-symbols-outlined text-[15px]">error</span>
              </div>
            </div>
            <div class="mt-2.5">
              <div class="text-2xl font-data-number font-bold text-[#F87171]">
                <span class="count-up-number" data-target="${kpis.highRisk}" data-format="integer">0</span>
              </div>
              <div class="text-[11px] text-[#F87171] flex items-center gap-1 mt-1 font-mono font-medium">
                <span class="material-symbols-outlined text-[14px]">trending_up</span>
                <span>+8 this shift</span>
              </div>
            </div>
          </div>

          <!-- Critical Action Required -->
          <div class="predix-panel-critical p-4 flex flex-col justify-between">
            <div class="flex items-center justify-between text-on-surface-variant">
              <span class="font-label-md text-[10px] text-status-critical">Critical Imminent</span>
              <div class="w-6 h-6 rounded-md bg-status-critical/20 flex items-center justify-center text-status-critical border border-status-critical/40">
                <span class="material-symbols-outlined text-[15px]">emergency</span>
              </div>
            </div>
            <div class="mt-2.5">
              <div class="text-2xl font-data-number font-bold text-status-critical">
                <span class="count-up-number" data-target="${kpis.critical}" data-format="integer">0</span>
              </div>
              <div class="text-[10px] text-status-critical font-mono font-bold flex items-center gap-1.5 mt-1 uppercase">
                <span class="w-1.5 h-1.5 rounded-full bg-status-critical animate-ping"></span>
                <span>Immediate Action Req.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- MAIN INTELLIGENCE GRID: HERO CARD / RISK DISTRIBUTION / EVENT STREAM -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        <!-- 02 / CRITICAL ASSET HERO CARD (DOMINANT VISUAL WEIGHT) -->
        <div class="col-span-1 lg:col-span-4 predix-panel-critical p-6 flex flex-col justify-between relative overflow-hidden group">
          <div class="absolute -right-16 -top-16 w-64 h-64 bg-status-critical/10 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
          
          <div class="relative z-10">
            <!-- Header Tag -->
            <div class="flex items-start justify-between mb-4">
              <div>
                <div class="flex items-center gap-1.5">
                  <span class="text-[10px] font-mono text-status-critical font-bold uppercase tracking-wider">02 / CRITICAL INTELLIGENCE</span>
                  <span class="w-1.5 h-1.5 rounded-full bg-status-critical animate-ping"></span>
                </div>
                <h2 class="text-lg font-bold text-on-surface mt-1 font-mono">${criticalAsset.name}</h2>
                <p class="text-xs text-on-surface-variant font-mono">${criticalAsset.sector}</p>
              </div>
              
              <!-- Radial Risk Indicator -->
              <div class="relative w-16 h-16 flex items-center justify-center shrink-0">
                <svg class="w-16 h-16 -rotate-90 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#161F33" stroke-width="10"></circle>
                  <circle id="hero-risk-gauge" cx="50" cy="50" r="40" fill="none" stroke="#EF4444" stroke-width="10" 
                          stroke-linecap="round"
                          stroke-dasharray="251.2" 
                          stroke-dashoffset="251.2"
                          class="gauge-circle"></circle>
                </svg>
                <div class="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span class="text-xs font-data-number font-bold text-status-critical">${criticalAsset.failureProbability}%</span>
                  <span class="text-[7.5px] font-mono text-on-surface-variant font-semibold uppercase">PROB</span>
                </div>
              </div>
            </div>

            <!-- Predicted Failure Horizon Banner -->
            <div class="bg-surface-container-lowest/80 rounded-xl p-3.5 mb-3.5 border border-border-subtle backdrop-blur-sm">
              <div class="flex items-center justify-between text-xs mb-1.5">
                <span class="text-on-surface-variant font-mono text-[10.5px]">Predicted Failure Horizon</span>
                <span class="font-data-number text-status-critical font-bold text-sm tracking-wide">${criticalAsset.timeToFailure}</span>
              </div>
              <div class="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                <div class="bg-status-critical h-full w-[88%] shadow-[0_0_8px_#EF4444]"></div>
              </div>
              <div class="flex justify-between text-[10px] font-mono text-on-surface-variant/80 mt-1.5">
                <span>RUL: ${criticalAsset.rulCycles} Cycles (~${criticalAsset.rulDays}d)</span>
                <span class="text-status-critical font-semibold">Risk Tier: CRITICAL</span>
              </div>
            </div>

            <!-- Live Sensor Alarms -->
            <div class="grid grid-cols-2 gap-2.5 mb-3.5">
              <div class="bg-surface-container-lowest/60 p-3 rounded-xl border border-border-subtle">
                <span class="block text-[9.5px] font-mono text-on-surface-variant uppercase">Vibration Peak</span>
                <div class="text-base font-data-number text-on-surface mt-0.5 flex items-center justify-between">
                  <span class="text-status-critical font-bold">${criticalAsset.telemetry.vibration} mm/s</span>
                  <span class="material-symbols-outlined text-status-critical text-[15px]">arrow_upward</span>
                </div>
              </div>
              <div class="bg-surface-container-lowest/60 p-3 rounded-xl border border-border-subtle">
                <span class="block text-[9.5px] font-mono text-on-surface-variant uppercase">Spindle Temp</span>
                <div class="text-base font-data-number text-on-surface mt-0.5 flex items-center justify-between">
                  <span class="text-status-critical font-bold">${criticalAsset.telemetry.temp}°C</span>
                  <span class="material-symbols-outlined text-status-critical text-[15px]">arrow_upward</span>
                </div>
              </div>
            </div>

            <!-- "WHAT CHANGED?" SHAP Insight Summary -->
            <div class="p-2.5 rounded-lg bg-surface-container-lowest/70 border border-border-subtle text-[11px] mb-4">
              <div class="flex items-center justify-between font-mono text-[10px] mb-1">
                <span class="text-secondary font-bold flex items-center gap-1">
                  <span class="material-symbols-outlined text-[13px]">analytics</span>
                  <span>ROOT CAUSE ATTRIBUTION</span>
                </span>
                <button id="btn-critical-what-changed" class="text-secondary hover:underline font-semibold flex items-center gap-0.5">
                  <span>WHAT CHANGED?</span>
                  <span class="material-symbols-outlined text-[12px]">open_in_new</span>
                </button>
              </div>
              <div class="text-on-surface-variant font-mono text-[10.5px] space-y-0.5">
                <div>• Vibration Harmonic: <strong class="text-status-critical">+38%</strong> Risk Shift</div>
                <div>• Tool Insert Degradation: <strong class="text-status-critical">+28%</strong> Risk Shift</div>
              </div>
            </div>
          </div>

          <!-- Dispatch & Report Action Buttons -->
          <div class="relative z-10 pt-3 border-t border-border-subtle flex items-center gap-2">
            <button id="btn-critical-report" class="py-2 px-3 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 font-bold text-xs rounded-lg transition-all flex items-center justify-center gap-1.5 shadow-sm font-mono" title="Export Executive Dossier (.xls) for CNC-04">
              <span class="material-symbols-outlined text-[16px]">description</span>
              <span>Report (.xls)</span>
            </button>
            <button id="btn-dispatch-critical" class="flex-1 py-2 bg-secondary/20 hover:bg-secondary/30 text-secondary border border-secondary/40 font-bold text-xs rounded-lg transition-all flex items-center justify-center gap-1.5 shadow-[0_0_12px_rgba(6,182,212,0.2)] font-mono">
              <span class="material-symbols-outlined text-[17px]">engineering</span>
              <span>Dispatch Team</span>
            </button>
          </div>
        </div>

        <!-- 03 / FLEET RISK DISTRIBUTION -->
        <div class="col-span-1 lg:col-span-4 predix-panel p-6 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-1">
              <span class="text-[10px] font-mono text-secondary font-bold uppercase tracking-wider">03 / RISK DISTRIBUTION</span>
              <span class="text-[10px] font-mono text-secondary font-bold">1,248 Nodes</span>
            </div>
            <h3 class="text-sm font-bold text-on-surface font-mono">Fleet Risk Categorization</h3>
            <p class="text-xs text-on-surface-variant">Real-time classification based on ML failure probabilities</p>
          </div>

          <!-- Animated SVG Donut Chart -->
          <div class="flex-1 flex items-center justify-center relative my-4">
            <svg class="w-44 h-44 transform -rotate-90 drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]" viewBox="0 0 100 100">
              <!-- Background Ring -->
              <circle cx="50" cy="50" r="40" fill="none" stroke="#161F33" stroke-width="12"></circle>
              <!-- Healthy (78.6%) -->
              <circle id="donut-healthy" cx="50" cy="50" r="40" fill="none" stroke="#10B981" stroke-width="12" stroke-dasharray="251.2" stroke-dashoffset="251.2" class="gauge-circle"></circle>
              <!-- Warning (14.7%) -->
              <circle id="donut-warning" cx="50" cy="50" r="40" fill="none" stroke="#F59E0B" stroke-width="12" stroke-dasharray="251.2" stroke-dashoffset="251.2" style="transform-origin: center; transform: rotate(283deg)" class="gauge-circle"></circle>
              <!-- High Risk (5.2%) -->
              <circle id="donut-high" cx="50" cy="50" r="40" fill="none" stroke="#EF4444" stroke-width="12" stroke-dasharray="251.2" stroke-dashoffset="251.2" style="transform-origin: center; transform: rotate(336deg)" class="gauge-circle"></circle>
              <!-- Critical (1.4%) -->
              <circle id="donut-critical" cx="50" cy="50" r="40" fill="none" stroke="#991B1B" stroke-width="12" stroke-dasharray="251.2" stroke-dashoffset="251.2" style="transform-origin: center; transform: rotate(355deg)" class="gauge-circle"></circle>
            </svg>
            <div class="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span class="text-3xl font-data-number font-bold text-on-surface">
                <span class="count-up-number" data-target="${kpis.avgHealth}" data-format="integer">0</span>
              </span>
              <span class="text-[10px] font-mono text-on-surface-variant uppercase font-semibold">Avg Health</span>
            </div>
          </div>

          <!-- Donut Legend Grid -->
          <div class="grid grid-cols-2 gap-2 text-xs pt-3 border-t border-border-subtle">
            <div class="flex items-center gap-2">
              <div class="w-2.5 h-2.5 rounded-full bg-status-healthy shadow-[0_0_5px_#10B981]"></div>
              <span class="text-on-surface-variant font-mono text-[11px]">Healthy (78.6%)</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-2.5 h-2.5 rounded-full bg-status-warning shadow-[0_0_5px_#F59E0B]"></div>
              <span class="text-on-surface-variant font-mono text-[11px]">Warning (14.7%)</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-2.5 h-2.5 rounded-full bg-status-critical shadow-[0_0_5px_#EF4444]"></div>
              <span class="text-on-surface-variant font-mono text-[11px]">High Risk (5.2%)</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-2.5 h-2.5 rounded-full bg-[#991B1B]"></div>
              <span class="text-on-surface-variant font-mono text-[11px]">Critical (1.4%)</span>
            </div>
          </div>
        </div>

        <!-- 04 / LIVE EVENT & TELEMETRY STREAM (STAGGERED ENTRANCE) -->
        <div class="col-span-1 lg:col-span-4 predix-panel p-6 flex flex-col justify-between">
          <div class="flex items-center justify-between mb-3 pb-2 border-b border-border-subtle">
            <div class="flex items-center gap-2">
              <span class="text-[10px] font-mono text-secondary font-bold uppercase tracking-wider">04 / ACTIVITY STREAM</span>
            </div>
            <span class="text-[9.5px] font-mono text-status-healthy font-bold tracking-wider uppercase bg-status-healthy/10 px-1.5 py-0.5 rounded border border-status-healthy/20 flex items-center gap-1">
              <span class="w-1.5 h-1.5 rounded-full bg-status-healthy animate-pulse"></span>
              <span>LIVE</span>
            </span>
          </div>

          <div class="flex-1 overflow-y-auto space-y-2.5 pr-1 max-h-[310px]">
            ${activityLogs.map((log, index) => {
              const iconColor = log.type === 'critical' 
                ? 'text-status-critical bg-status-critical/15 border-status-critical/30' 
                : log.type === 'warning' 
                ? 'text-status-warning bg-status-warning/15 border-status-warning/30' 
                : log.type === 'success' 
                ? 'text-status-healthy bg-status-healthy/15 border-status-healthy/30' 
                : 'text-secondary bg-secondary/15 border-secondary/30';

              const severityTag = log.type === 'critical'
                ? '<span class="text-[9px] font-mono font-bold text-status-critical bg-status-critical/10 px-1.5 py-0.2 rounded border border-status-critical/20 uppercase">CRIT</span>'
                : log.type === 'warning'
                ? '<span class="text-[9px] font-mono font-bold text-status-warning bg-status-warning/10 px-1.5 py-0.2 rounded border border-status-warning/20 uppercase">WARN</span>'
                : log.type === 'success'
                ? '<span class="text-[9px] font-mono font-bold text-status-healthy bg-status-healthy/10 px-1.5 py-0.2 rounded border border-status-healthy/20 uppercase">RESOLVED</span>'
                : '<span class="text-[9px] font-mono font-bold text-secondary bg-secondary/10 px-1.5 py-0.2 rounded border border-secondary/20 uppercase">INFO</span>';

              return `
                <div class="event-stream-row flex items-start gap-2.5 p-2.5 rounded-lg bg-surface-container-low/60 hover:bg-surface-container-low transition-colors text-xs border border-border-subtle/50" style="animation-delay: ${index * 50}ms">
                  <div class="w-6 h-6 rounded-md ${iconColor} flex items-center justify-center shrink-0 mt-0.5 border">
                    <span class="material-symbols-outlined text-[14px]">${log.icon}</span>
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="flex items-center justify-between gap-1">
                      <span class="font-bold text-on-surface truncate font-mono text-[11px]">${log.title}</span>
                      <span class="text-[9px] font-mono text-on-surface-variant/80 shrink-0">${log.timestamp}</span>
                    </div>
                    <p class="text-[11px] text-on-surface-variant mt-0.5 line-clamp-2">${log.detail}</p>
                    <div class="mt-1 flex items-center gap-1.5">
                      ${severityTag}
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>

          <div class="pt-3 border-t border-border-subtle text-center">
            <a href="#work-orders" class="text-xs font-semibold text-secondary hover:underline inline-flex items-center gap-1 font-mono">
              <span>Open Maintenance Work Orders</span>
              <span class="material-symbols-outlined text-[14px]">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>

      <!-- 05 / PRIORITY ASSET QUEUE TABLE (ENHANCED HOVER & MONOSPACE ALIGNMENT) -->
      <div class="predix-panel overflow-hidden flex flex-col">
        <div class="p-3.5 sm:p-5 bg-surface-container-low/60 border-b border-border-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <div class="flex items-center gap-2 flex-wrap">
              <span class="text-[10px] font-mono text-secondary font-bold uppercase tracking-wider">05 / PRIORITY QUEUE</span>
              <h3 class="text-sm font-bold text-on-surface font-mono">Top Maintenance Priorities</h3>
              <span class="px-2 py-0.2 rounded text-[9.5px] font-mono bg-status-critical/15 text-status-critical border border-status-critical/30 font-bold uppercase">24h–48h Horizon</span>
            </div>
            <p class="text-xs text-on-surface-variant mt-0.5">Asset queue ranked by predicted failure risk & Remaining Useful Life (RUL)</p>
          </div>
          <div class="flex flex-wrap items-center gap-2 font-mono">
            <button id="btn-export-priority-excel" class="px-3 py-1.5 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 font-bold text-xs rounded-lg border border-emerald-500/30 transition-all flex items-center gap-1.5 shadow-sm">
              <span class="material-symbols-outlined text-[16px]">table_chart</span>
              <span>Executive Briefing (.xls)</span>
            </button>
            <button id="btn-export-priority-report" class="px-3 py-1.5 bg-surface-container hover:bg-surface-container-high text-on-surface font-semibold text-xs rounded-lg border border-border-subtle transition-all flex items-center gap-1.5 shadow-sm">
              <span class="material-symbols-outlined text-[16px]">download</span>
              <span>Export CSV</span>
            </button>
          </div>
        </div>

        <div class="overflow-x-auto w-full">
          <table class="w-full text-left border-collapse min-w-[800px] text-xs">
            <thead>
              <tr class="bg-surface-container-low/80 font-label-md text-on-surface-variant uppercase tracking-wider text-[10.5px] border-b border-border-subtle">
                <th class="py-3 px-4 w-14">Pri</th>
                <th class="py-3 px-4">Machine ID & Name</th>
                <th class="py-3 px-4">Location / Sector</th>
                <th class="py-3 px-4">Health Score</th>
                <th class="py-3 px-4">Failure Prob (24h)</th>
                <th class="py-3 px-4">Key Diagnostic Trigger</th>
                <th class="py-3 px-4 text-right">Quick Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-border-subtle">
              ${priorityList.map(item => {
                const isCritical = item.riskLevel === 'Critical';
                const isWarning = item.riskLevel === 'High';
                
                const probColor = isCritical 
                  ? 'text-status-critical font-bold' 
                  : isWarning 
                  ? 'text-status-warning font-semibold' 
                  : 'text-on-surface font-medium';

                const barColor = isCritical 
                  ? 'bg-status-critical shadow-[0_0_6px_#EF4444]' 
                  : isWarning 
                  ? 'bg-status-warning shadow-[0_0_6px_#F59E0B]' 
                  : 'bg-status-healthy shadow-[0_0_6px_#10B981]';

                return `
                  <tr data-machine-id="${item.id}" class="predix-table-row hover:bg-surface-container-low transition-colors group cursor-pointer ${isCritical ? 'critical-row bg-status-critical/[0.03]' : ''}">
                    <td class="py-3.5 px-4 font-mono font-bold text-on-surface-variant">#${item.priority}</td>
                    <td class="py-3.5 px-4">
                      <div class="flex items-center gap-2.5">
                        <div class="w-2 h-2 rounded-full ${barColor} ${isCritical ? 'animate-pulse' : ''}"></div>
                        <div>
                          <span class="font-bold text-on-surface font-mono">${item.id}</span>
                          <div class="text-[11px] text-on-surface-variant">${item.name}</div>
                        </div>
                      </div>
                    </td>
                    <td class="py-3.5 px-4 text-on-surface-variant font-mono text-[11px]">${item.sector}</td>
                    <td class="py-3.5 px-4">
                      <div class="flex items-center gap-2">
                        <div class="w-16 bg-surface-container h-1.5 rounded-full overflow-hidden">
                          <div class="${barColor} h-full" style="width: ${item.healthScore}%"></div>
                        </div>
                        <span class="font-mono text-on-surface font-semibold">${item.healthScore}</span>
                      </div>
                    </td>
                    <td class="py-3.5 px-4 font-mono ${probColor}">${item.failureProbability}%</td>
                    <td class="py-3.5 px-4">
                      <span class="px-2 py-0.5 bg-surface-container-low rounded border border-border-subtle text-on-surface font-mono text-[10px]">
                        ${item.keyIndicator}
                      </span>
                    </td>
                    <td class="py-3.5 px-4 text-right font-mono">
                      <div class="flex items-center justify-end gap-1.5">
                        <button data-report-id="${item.id}" class="btn-quick-report px-2 py-1 rounded bg-emerald-950/40 text-emerald-400 hover:bg-emerald-600 hover:text-on-primary text-[10.5px] font-bold transition-all border border-emerald-500/30" title="Export Executive Report (.xls)">
                          .xls
                        </button>
                        <button data-dispatch-id="${item.id}" class="btn-quick-dispatch px-2.5 py-1 rounded bg-secondary/15 hover:bg-secondary/30 text-secondary text-[10.5px] font-semibold transition-all border border-secondary/30">
                          Dispatch
                        </button>
                      </div>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

// Reusable Count-Up Animation
function animateCountUp(element, target, duration = 800, isDecimal = false, suffix = '') {
  const isReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (isReduced) {
    element.innerText = isDecimal ? target.toFixed(1) + suffix : Math.round(target).toLocaleString() + suffix;
    return;
  }

  const start = 0;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Ease-out cubic curve
    const easeOutProgress = 1 - Math.pow(1 - progress, 3);
    const current = start + (target - start) * easeOutProgress;

    if (isDecimal) {
      element.innerText = current.toFixed(1) + suffix;
    } else {
      element.innerText = Math.round(current).toLocaleString() + suffix;
    }

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

export function initDashboardListeners(router) {
  // Trigger Number Count-Up Animations
  document.querySelectorAll('.count-up-number').forEach(el => {
    const target = parseFloat(el.getAttribute('data-target') || '0');
    const format = el.getAttribute('data-format') || 'integer';
    const suffix = el.getAttribute('data-suffix') || '';
    animateCountUp(el, target, 800, format === 'decimal', suffix);
  });

  // Animate Hero Risk Gauge Radial Stroke
  const heroGauge = document.getElementById('hero-risk-gauge');
  if (heroGauge) {
    const circumference = 251.2; // 2 * Math.PI * 40
    const targetProb = fleetAssets[0]?.failureProbability || 89.4;
    const targetOffset = circumference * (1 - targetProb / 100);
    setTimeout(() => {
      heroGauge.style.strokeDashoffset = targetOffset.toString();
    }, 100);
  }

  // Animate Donut Chart Segments on Initial Load
  const donutHealthy = document.getElementById('donut-healthy');
  const donutWarning = document.getElementById('donut-warning');
  const donutHigh = document.getElementById('donut-high');
  const donutCritical = document.getElementById('donut-critical');

  setTimeout(() => {
    if (donutHealthy) donutHealthy.style.strokeDashoffset = "53.7";
    if (donutWarning) donutWarning.style.strokeDashoffset = "214.2";
    if (donutHigh) donutHigh.style.strokeDashoffset = "238.0";
    if (donutCritical) donutCritical.style.strokeDashoffset = "247.6";
  }, 120);

  // Critical hero dispatch trigger
  document.getElementById('btn-dispatch-critical')?.addEventListener('click', () => {
    openDispatchModal(fleetAssets[0]);
  });

  // Critical hero report trigger
  document.getElementById('btn-critical-report')?.addEventListener('click', () => {
    generateExecutiveExcelReport(fleetAssets[0]);
    showToast('Executive Diagnostic Dossier for CNC-04 generated (.xls)!', 'success', 4500);
  });

  // "WHAT CHANGED?" Quick Entry Point trigger
  document.getElementById('btn-critical-what-changed')?.addEventListener('click', () => {
    openMachineModal(
      fleetAssets[0],
      (m, teamId) => openDispatchModal(m, teamId),
      (m) => { window.location.hash = `#what-if-simulator?machine=${m.id}`; },
      'investigate'
    );
  });

  // Export Executive Briefing Excel
  document.getElementById('btn-export-priority-excel')?.addEventListener('click', () => {
    generateFleetExecutiveBriefing(fleetAssets, activeWorkOrders);
    showToast('Fleet Management Executive Briefing exported (.xls)!', 'success', 4500);
  });

  // Export CSV button
  document.getElementById('btn-export-priority-report')?.addEventListener('click', () => {
    exportToCSV(fleetAssets);
    showToast('Fleet maintenance priorities exported to CSV!', 'success');
  });

  // Quick report buttons inside table
  document.querySelectorAll('.btn-quick-report').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const machineId = btn.getAttribute('data-report-id');
      const machine = fleetAssets.find(m => m.id === machineId);
      if (machine) {
        generateExecutiveExcelReport(machine);
        showToast(`Executive Report for ${machine.id} exported (.xls)!`, 'success', 4500);
      }
    });
  });

  // Row clicks to open machine modal
  document.querySelectorAll('tr[data-machine-id]').forEach(row => {
    row.addEventListener('click', (e) => {
      if (e.target.closest('.btn-quick-dispatch') || e.target.closest('.btn-quick-report')) return;
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

  // Quick dispatch button handlers
  document.querySelectorAll('.btn-quick-dispatch').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const machineId = btn.getAttribute('data-dispatch-id');
      const machine = fleetAssets.find(m => m.id === machineId);
      if (machine) {
        openDispatchModal(machine);
      }
    });
  });
}
