// PREDIX Industrial Intelligence — Header Component
import { fleetAssets } from '../data/fleetData.js';
import { activeWorkOrders } from '../data/teamsData.js';
import { generateFleetExecutiveBriefing } from '../utils/excelReport.js';
import { exportToCSV } from '../utils/export.js';
import { openUploadModal } from './UploadModal.js';
import { showToast } from './Toast.js';

export function renderHeader(currentRoute = 'dashboard') {
  const titles = {
    'dashboard': { title: 'Predictive Maintenance Priority Engine', sub: 'PREDICT → EXPLAIN → PRIORITIZE → RESOLVE' },
    'fleet-health': { title: 'Fleet Health Diagnostics', sub: 'ASSET RUL, FAILURE PROBABILITY & PRIORITY QUEUE' },
    'dataset-profiler': { title: 'Dataset Ingestion & Profiler', sub: 'CUSTOM TELEMETRY CSV/JSON & REAL-TIME EDGE INFERENCE SCORING' },
    'work-orders': { title: 'Maintenance Teams & Work Order Routing', sub: 'SOP EXECUTION, SKILL-MATCHED TEAMS & SLA TIMERS' },
    'what-if-simulator': { title: 'What-If Risk Simulator', sub: 'INTERACTIVE OPERATING PARAMETER SANDBOX & SHAP EXPLAINER' },
    'model-performance': { title: 'Model Performance & Benchmark', sub: 'ROC-AUC, CONFUSION MATRIX & GLOBAL FEATURE IMPORTANCE' },
    'analytics': { title: 'Telemetry & Failure Analytics', sub: 'MULTI-SENSOR TIME-SERIES TRENDS & FAILURE MODE PARETO' }
  };

  const current = titles[currentRoute] || titles['dashboard'];

  return `
    <header class="fixed top-0 left-0 md:left-72 right-0 h-16 glass-header z-30 px-3 sm:px-6 flex items-center justify-between gap-2">
      <!-- Left: Mobile Toggle + Breadcrumb / Page Title -->
      <div class="flex items-center gap-2.5 min-w-0 flex-1">
        <!-- Mobile Sidebar Hamburger Toggle Button -->
        <button id="btn-toggle-sidebar" class="md:hidden p-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors shrink-0" aria-label="Open Navigation Menu">
          <span class="material-symbols-outlined text-[22px]">menu</span>
        </button>

        <div class="flex flex-col min-w-0">
          <div class="flex items-center gap-1.5 min-w-0">
            <span class="text-[10px] font-mono text-secondary font-bold uppercase tracking-wider shrink-0 hidden xs:inline">PREDIX /</span>
            <h1 class="text-xs sm:text-sm font-bold text-on-surface leading-tight tracking-wide truncate">${current.title}</h1>
          </div>
          <span class="text-[9px] sm:text-[10px] font-mono text-on-surface-variant font-medium mt-0.5 tracking-wider truncate">${current.sub}</span>
        </div>
      </div>

      <!-- Right Action Items -->
      <div class="flex items-center gap-1.5 sm:gap-3 shrink-0">
        <!-- Quick Upload Dataset Trigger Button -->
        <button id="btn-header-upload-dataset" class="hidden md:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-secondary/15 hover:bg-secondary/25 text-secondary border border-secondary/30 transition-all shadow-[0_0_10px_rgba(6,182,212,0.15)]" title="Upload Custom CSV / JSON Telemetry Dataset">
          <span class="material-symbols-outlined text-[16px]">upload_file</span>
          <span>Upload Dataset</span>
        </button>

        <!-- Live System Status Badge -->
        <div class="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-md bg-status-healthy/10 border border-status-healthy/25">
          <div class="w-1.5 h-1.5 rounded-full bg-status-healthy animate-pulse"></div>
          <span class="text-[10px] font-mono font-bold text-status-healthy tracking-wider uppercase">TELEMETRY: STABLE</span>
        </div>

        <!-- Quick Notifications Dropdown Trigger -->
        <div class="relative">
          <button id="btn-notifications" class="p-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors relative border border-transparent hover:border-border-subtle" title="Active Alarms">
            <span class="material-symbols-outlined text-[19px]">notifications</span>
            <span class="absolute top-1.5 right-1.5 w-2 h-2 bg-status-critical rounded-full ring-2 ring-surface shadow-[0_0_6px_#EF4444]"></span>
          </button>
          
          <!-- Dropdown panel -->
          <div id="notifications-panel" class="hidden absolute right-0 mt-2 w-[calc(100vw-24px)] max-w-xs sm:w-80 bg-surface rounded-xl shadow-2xl border border-border-subtle p-3.5 z-50 animate-modal">
            <div class="flex items-center justify-between pb-2 border-b border-border-subtle">
              <span class="text-xs font-bold text-on-surface uppercase tracking-wider font-mono">Active Critical Alarms</span>
              <span class="text-[9.5px] font-mono bg-status-critical/15 text-status-critical px-1.5 py-0.5 rounded font-bold border border-status-critical/30">2 Critical</span>
            </div>
            <div class="py-2.5 space-y-2 max-h-64 overflow-y-auto">
              <div class="p-2.5 rounded-lg bg-status-critical/10 border-l-2 border-status-critical text-xs">
                <div class="font-bold text-status-critical flex items-center justify-between">
                  <span>CNC-Milling-Unit-04</span>
                  <span class="text-[9px] font-mono text-on-surface-variant">4h 12m RUL</span>
                </div>
                <div class="text-[11px] text-on-surface-variant mt-0.5">Vibration reached 42.8 mm/s on cutting axis Z.</div>
              </div>
              <div class="p-2.5 rounded-lg bg-status-critical/10 border-l-2 border-status-critical text-xs">
                <div class="font-bold text-status-critical flex items-center justify-between">
                  <span>Turbine Alpha M103</span>
                  <span class="text-[9px] font-mono text-on-surface-variant">2h 45m RUL</span>
                </div>
                <div class="text-[11px] text-on-surface-variant mt-0.5">Combustor temp exceeded 98.6°C. RUL: 12 cycles.</div>
              </div>
            </div>
            <div class="pt-2 border-t border-border-subtle text-center">
              <a href="#work-orders" class="text-xs text-secondary font-semibold hover:underline flex items-center justify-center gap-1">
                <span>View Active Work Orders</span>
                <span class="material-symbols-outlined text-[14px]">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Global Export Dropdown Button -->
        <div class="relative group">
          <button class="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 transition-all shadow-sm">
            <span class="material-symbols-outlined text-[16px]">file_download</span>
            <span>Reports</span>
            <span class="material-symbols-outlined text-[14px]">expand_more</span>
          </button>
          
          <div class="hidden group-hover:block absolute right-0 mt-1 w-[calc(100vw-24px)] max-w-xs sm:w-64 bg-surface rounded-xl shadow-2xl border border-border-subtle p-2 z-50 animate-modal">
            <button id="btn-export-excel-global" class="w-full text-left p-2 rounded-lg hover:bg-surface-container-low transition-colors text-xs flex items-center gap-2">
              <span class="material-symbols-outlined text-[18px] text-emerald-400">table_chart</span>
              <div>
                <div class="font-bold text-on-surface">Executive Briefing (.xls)</div>
                <div class="text-[10px] text-on-surface-variant">Multi-Asset Report for Higher Officials</div>
              </div>
            </button>
            <button id="btn-export-csv-global" class="w-full text-left p-2 rounded-lg hover:bg-surface-container-low transition-colors text-xs flex items-center gap-2 border-t border-border-subtle mt-1 pt-1.5">
              <span class="material-symbols-outlined text-[18px] text-secondary">grid_on</span>
              <div>
                <div class="font-bold text-on-surface">Raw Diagnostic Data (.csv)</div>
                <div class="text-[10px] text-on-surface-variant">All Telemetry Sensor Records</div>
              </div>
            </button>
          </div>
        </div>

        <!-- User Avatar -->
        <div class="w-8 h-8 rounded-lg bg-surface-container text-secondary border border-secondary/30 flex items-center justify-center font-semibold text-xs cursor-pointer hover:border-secondary transition-all shrink-0">
          <span class="material-symbols-outlined text-[18px]">person</span>
        </div>
      </div>
    </header>
  `;
}
