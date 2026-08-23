// PREDIX Industrial Intelligence — Fleet Health Diagnostics View
import { fleetAssets, uploadedDatasetsList } from '../data/fleetData.js';
import { activeWorkOrders } from '../data/teamsData.js';
import { openMachineModal } from '../components/MachineModal.js';
import { openDispatchModal } from '../components/DispatchModal.js';
import { openUploadModal } from '../components/UploadModal.js';
import { generateExecutiveExcelReport, generateFleetExecutiveBriefing } from '../utils/excelReport.js';
import { exportToCSV } from '../utils/export.js';
import { showToast } from '../components/Toast.js';

let currentDatasetFilter = 'All';
let currentRiskFilter = 'All';
let currentSearchQuery = '';
let currentSortField = 'priority';
let currentSortAsc = true;
let currentPage = 1;
const pageSize = 8;

export function renderFleetHealthView() {
  const totalCount = fleetAssets.length;
  const criticalCount = fleetAssets.filter(a => a.riskLevel === 'Critical').length;
  const highRiskCount = fleetAssets.filter(a => a.riskLevel === 'High').length;
  const warningCount = fleetAssets.filter(a => a.riskLevel === 'Medium').length;
  const healthyCount = fleetAssets.filter(a => a.riskLevel === 'Healthy').length;

  const criticalPct = +((criticalCount / totalCount) * 100).toFixed(1);
  const highRiskPct = +((highRiskCount / totalCount) * 100).toFixed(1);
  const warningPct = +((warningCount / totalCount) * 100).toFixed(1);
  const healthyPct = +((healthyCount / totalCount) * 100).toFixed(1);

  return `
    <div class="px-3 sm:px-6 py-4 sm:py-6 max-w-[1440px] mx-auto space-y-4 sm:space-y-6">
      
      <!-- 01 / FLEET HEALTH COMMAND HEADER & PIPELINE -->
      <div class="predix-panel p-3.5 sm:p-5 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 sm:gap-4 border-l-4 border-l-secondary bg-surface-container-low/60">
        <div class="space-y-1 w-full lg:w-auto">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="text-[10px] font-mono text-secondary font-bold uppercase tracking-wider">01 / FLEET INTELLIGENCE</span>
            <span class="text-on-surface-variant font-mono text-xs hidden xs:inline">•</span>
            <span class="text-xs font-bold text-on-surface font-mono tracking-wide uppercase">FLEET HEALTH & TELEMETRY MATRIX</span>
          </div>
          <!-- Signal Decision Flow -->
          <div class="flex items-center gap-2 text-[10px] sm:text-[10.5px] font-mono font-semibold text-on-surface-variant pt-0.5 overflow-x-auto whitespace-nowrap hide-scrollbar flex-nowrap pb-1 lg:pb-0">
            <span class="text-secondary font-bold">WHAT IS HAPPENING?</span>
            <span class="text-slate-600">→</span>
            <span class="text-sky-400 font-bold">WHICH NEED ATTENTION?</span>
            <span class="text-slate-600">→</span>
            <span class="text-amber-400 font-bold">WHY?</span>
            <span class="text-slate-600">→</span>
            <span class="text-status-healthy font-bold">WHAT SHOULD WE DO?</span>
          </div>
        </div>

        <!-- Header Actions: Upload & Reports -->
        <div class="flex flex-wrap items-center gap-2 font-mono text-xs">
          <button id="btn-fleet-upload-dataset" class="px-3 py-1.5 rounded-lg bg-secondary/20 hover:bg-secondary/30 text-secondary border border-secondary/40 font-bold flex items-center gap-1.5 transition-all shadow-[0_0_12px_rgba(6,182,212,0.15)]">
            <span class="material-symbols-outlined text-[16px]">cloud_upload</span>
            <span>Upload Dataset</span>
          </button>
          <button id="btn-fleet-export-excel" class="px-3 py-1.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 font-bold flex items-center gap-1.5 transition-all shadow-sm">
            <span class="material-symbols-outlined text-[16px]">table_chart</span>
            <span>Executive Briefing (.xls)</span>
          </button>
          <button id="btn-fleet-export-csv" class="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-semibold border border-border-subtle flex items-center gap-1.5 transition-all shadow-sm">
            <span class="material-symbols-outlined text-[16px]">download</span>
            <span>CSV</span>
          </button>
        </div>
      </div>

      <!-- 02 / FLEET OVERVIEW SIGNAL & RISK DISTRIBUTION BAR -->
      <div class="predix-panel p-3.5 sm:p-5 space-y-4">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono">
          <div>
            <span class="font-label-md text-on-surface-variant uppercase text-[10px]">Fleet Risk Distribution Overview</span>
            <h3 class="text-xs font-bold text-on-surface uppercase tracking-wider mt-0.5">Real-Time Risk Categorization (${totalCount} Scored Nodes)</h3>
          </div>
          <span class="text-[10.5px] text-secondary font-semibold">SYNCED WITH XGBOOST INFERENCE ENGINE</span>
        </div>

        <!-- Proportional Multi-Segment Risk Progress Bar -->
        <div class="w-full bg-surface-container h-3.5 rounded-xl overflow-hidden flex shadow-inner p-0.5 border border-border-subtle/60">
          <div class="bg-status-healthy h-full rounded-l-lg transition-all duration-700 shadow-[0_0_8px_#10B981]" style="width: ${healthyPct}%" title="Healthy: ${healthyPct}% (${healthyCount} units)"></div>
          <div class="bg-sky-400 h-full transition-all duration-700" style="width: ${warningPct}%" title="Warning/Medium: ${warningPct}% (${warningCount} units)"></div>
          <div class="bg-status-warning h-full transition-all duration-700 shadow-[0_0_8px_#F59E0B]" style="width: ${highRiskPct}%" title="High Risk: ${highRiskPct}% (${highRiskCount} units)"></div>
          <div class="bg-status-critical h-full rounded-r-lg transition-all duration-700 shadow-[0_0_8px_#EF4444]" style="width: ${criticalPct}%" title="Critical: ${criticalPct}% (${criticalCount} units)"></div>
        </div>

        <!-- 4-Tier Categorization Stat Cards -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 font-mono text-xs">
          
          <div class="p-3 rounded-xl bg-surface-container-low border border-border-subtle flex flex-col justify-between">
            <div class="flex items-center justify-between text-on-surface-variant">
              <span class="text-[10px] uppercase font-bold text-status-healthy flex items-center gap-1">
                <span class="w-2 h-2 rounded-full bg-status-healthy"></span>
                <span>Healthy</span>
              </span>
              <span class="text-[11px] font-bold text-status-healthy">${healthyPct}%</span>
            </div>
            <div class="text-lg font-data-number font-bold text-on-surface mt-1">${healthyCount} <span class="text-[10px] text-on-surface-variant font-normal">nodes</span></div>
          </div>

          <div class="p-3 rounded-xl bg-surface-container-low border border-border-subtle flex flex-col justify-between">
            <div class="flex items-center justify-between text-on-surface-variant">
              <span class="text-[10px] uppercase font-bold text-sky-400 flex items-center gap-1">
                <span class="w-2 h-2 rounded-full bg-sky-400"></span>
                <span>Monitor</span>
              </span>
              <span class="text-[11px] font-bold text-sky-400">${warningPct}%</span>
            </div>
            <div class="text-lg font-data-number font-bold text-on-surface mt-1">${warningCount} <span class="text-[10px] text-on-surface-variant font-normal">nodes</span></div>
          </div>

          <div class="p-3 rounded-xl bg-surface-container-low border border-border-subtle flex flex-col justify-between">
            <div class="flex items-center justify-between text-on-surface-variant">
              <span class="text-[10px] uppercase font-bold text-status-warning flex items-center gap-1">
                <span class="w-2 h-2 rounded-full bg-status-warning"></span>
                <span>High Risk</span>
              </span>
              <span class="text-[11px] font-bold text-status-warning">${highRiskPct}%</span>
            </div>
            <div class="text-lg font-data-number font-bold text-on-surface mt-1">${highRiskCount} <span class="text-[10px] text-on-surface-variant font-normal">nodes</span></div>
          </div>

          <div class="p-3 rounded-xl bg-status-critical/10 border border-status-critical/30 flex flex-col justify-between">
            <div class="flex items-center justify-between">
              <span class="text-[10px] uppercase font-bold text-status-critical flex items-center gap-1">
                <span class="w-2 h-2 rounded-full bg-status-critical animate-ping"></span>
                <span>Critical</span>
              </span>
              <span class="text-[11px] font-bold text-status-critical">${criticalPct}%</span>
            </div>
            <div class="text-lg font-data-number font-bold text-status-critical mt-1">${criticalCount} <span class="text-[10px] text-on-surface-variant font-normal">nodes</span></div>
          </div>

        </div>
      </div>

      <!-- 03 / SEARCH & FILTER CONTROLS BAR -->
      <div class="predix-panel p-3 sm:p-3.5 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 font-mono text-xs">
        
        <!-- Search Input -->
        <div class="relative flex-1 max-w-full lg:max-w-md">
          <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[16px]">search</span>
          <input id="fleet-search" 
                 type="text" 
                 placeholder="Search Machine ID, name, sector, failure mode..." 
                 value="${currentSearchQuery}"
                 class="w-full h-9 pl-9 pr-8 bg-surface-container-low rounded-lg border border-border-subtle text-xs text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary font-mono"
                 aria-label="Search Fleet Diagnostics">
          ${currentSearchQuery ? `
            <button id="btn-clear-search" class="absolute right-2.5 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface p-0.5" title="Clear Search">
              <span class="material-symbols-outlined text-[14px]">close</span>
            </button>
          ` : ''}
        </div>

        <!-- Dataset Filter Pills -->
        <div class="flex items-center gap-1.5 overflow-x-auto whitespace-nowrap hide-scrollbar flex-nowrap pb-1 lg:pb-0">
          <span class="text-[10.5px] text-on-surface-variant mr-1 uppercase shrink-0">Dataset:</span>
          ${['All', ...uploadedDatasetsList].map(ds => `
            <button data-dataset-filter="${ds}" class="btn-dataset-filter px-2.5 py-1 rounded-md text-xs font-mono font-medium transition-all shrink-0 ${
              currentDatasetFilter === ds 
                ? 'bg-secondary/20 text-secondary border border-secondary/40 font-bold shadow-sm' 
                : 'bg-surface-container-low text-on-surface-variant hover:text-on-surface border border-transparent'
            }">
              ${ds}
            </button>
          `).join('')}
        </div>

        <!-- Risk Filter Pills & Quick "Critical First" Mode -->
        <div class="flex items-center gap-1.5 overflow-x-auto whitespace-nowrap hide-scrollbar flex-nowrap pb-1 lg:pb-0">
          <span class="text-[10.5px] text-on-surface-variant mr-1 uppercase shrink-0">Risk:</span>
          ${['All', 'Critical', 'High', 'Medium', 'Healthy'].map(risk => {
            const isActive = currentRiskFilter === risk;
            return `
              <button data-risk-filter="${risk}" class="btn-risk-filter px-2.5 py-1 rounded-md text-xs font-mono transition-all shrink-0 ${
                isActive 
                  ? 'bg-secondary/20 text-secondary border border-secondary/40 font-bold shadow-sm' 
                  : 'bg-surface-container-low text-on-surface-variant hover:text-on-surface border border-transparent'
              }">
                ${isActive && risk !== 'All' ? '● ' : ''}${risk}
              </button>
            `;
          }).join('')}
          <button id="btn-critical-first" class="ml-1 px-2.5 py-1 rounded-md bg-status-critical/15 hover:bg-status-critical/25 text-status-critical border border-status-critical/30 font-bold text-xs transition-all flex items-center gap-1 shrink-0" title="Sort by Critical Failure Probability first">
            <span class="material-symbols-outlined text-[13px]">emergency</span>
            <span>Critical First</span>
          </button>
        </div>

      </div>

      <!-- 04 / MAIN FLEET DIAGNOSTICS TABLE CONTAINER -->
      <div class="predix-panel overflow-hidden flex flex-col">
        <div class="overflow-x-auto w-full">
          <table class="w-full text-left border-collapse min-w-[960px] text-xs">
            <thead class="bg-surface-container-low/80 border-b border-border-subtle text-[10.5px] font-label-md text-on-surface-variant uppercase tracking-wider font-mono">
              <tr>
                <th class="py-3 px-4 w-16 cursor-pointer hover:text-on-surface sort-header" data-sort="priority">
                  <div class="flex items-center gap-1">
                    <span>Pri</span>
                    <span class="material-symbols-outlined text-[14px]">${currentSortField === 'priority' ? (currentSortAsc ? 'arrow_upward' : 'arrow_downward') : 'swap_vert'}</span>
                  </div>
                </th>
                <th class="py-3 px-4 cursor-pointer hover:text-on-surface sort-header" data-sort="id">
                  <div class="flex items-center gap-1">
                    <span>Machine ID & Name</span>
                    <span class="material-symbols-outlined text-[14px]">${currentSortField === 'id' ? (currentSortAsc ? 'arrow_upward' : 'arrow_downward') : 'swap_vert'}</span>
                  </div>
                </th>
                <th class="py-3 px-4">Dataset / Sector</th>
                <th class="py-3 px-4 cursor-pointer hover:text-on-surface sort-header" data-sort="riskLevel">
                  <div class="flex items-center gap-1">
                    <span>Risk Level</span>
                    <span class="material-symbols-outlined text-[14px]">${currentSortField === 'riskLevel' ? (currentSortAsc ? 'arrow_upward' : 'arrow_downward') : 'swap_vert'}</span>
                  </div>
                </th>
                <th class="py-3 px-4 cursor-pointer hover:text-on-surface sort-header" data-sort="failureProbability">
                  <div class="flex items-center gap-1">
                    <span>Failure Prob</span>
                    <span class="material-symbols-outlined text-[14px]">${currentSortField === 'failureProbability' ? (currentSortAsc ? 'arrow_upward' : 'arrow_downward') : 'swap_vert'}</span>
                  </div>
                </th>
                <th class="py-3 px-4 cursor-pointer hover:text-on-surface sort-header" data-sort="healthScore">
                  <div class="flex items-center gap-1">
                    <span>Health Score</span>
                    <span class="material-symbols-outlined text-[14px]">${currentSortField === 'healthScore' ? (currentSortAsc ? 'arrow_upward' : 'arrow_downward') : 'swap_vert'}</span>
                  </div>
                </th>
                <th class="py-3 px-4 cursor-pointer hover:text-on-surface sort-header" data-sort="rulCycles">
                  <div class="flex items-center gap-1">
                    <span>Remaining Useful Life (RUL)</span>
                    <span class="material-symbols-outlined text-[14px]">${currentSortField === 'rulCycles' ? (currentSortAsc ? 'arrow_upward' : 'arrow_downward') : 'swap_vert'}</span>
                  </div>
                </th>
                <th class="py-3 px-4">Key Diagnostic Trigger</th>
                <th class="py-3 px-4 text-right w-28">Quick Actions</th>
              </tr>
            </thead>
            <tbody id="fleet-table-body" class="divide-y divide-border-subtle table-filter-fade">
              ${renderTableRows()}
            </tbody>
          </table>
        </div>

        <!-- Table Pagination Footer -->
        <div class="px-5 py-3.5 bg-surface-container-low/60 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
          <span id="pagination-info" class="text-on-surface-variant text-[11px]"></span>
          <div class="flex items-center gap-2">
            <button id="btn-prev-page" class="px-2.5 py-1 rounded-md border border-border-subtle bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-[11px]">
              Previous
            </button>
            <div id="page-numbers" class="flex items-center gap-1"></div>
            <button id="btn-next-page" class="px-2.5 py-1 rounded-md border border-border-subtle bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-[11px]">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function getFilteredAssets() {
  return fleetAssets.filter(item => {
    const matchesDataset = currentDatasetFilter === 'All' || item.dataset === currentDatasetFilter;
    const matchesRisk = currentRiskFilter === 'All' || item.riskLevel === currentRiskFilter;
    const q = currentSearchQuery.toLowerCase().trim();
    const matchesSearch = !q || 
      item.id.toLowerCase().includes(q) || 
      item.name.toLowerCase().includes(q) || 
      item.sector.toLowerCase().includes(q) ||
      item.type.toLowerCase().includes(q) ||
      item.dataset.toLowerCase().includes(q) ||
      (item.keyIndicator && item.keyIndicator.toLowerCase().includes(q)) ||
      (item.failureType && item.failureType.toLowerCase().includes(q));

    return matchesDataset && matchesRisk && matchesSearch;
  }).sort((a, b) => {
    let valA = a[currentSortField];
    let valB = b[currentSortField];

    if (typeof valA === 'string') {
      return currentSortAsc ? valA.localeCompare(valB) : valB.localeCompare(valA);
    }
    return currentSortAsc ? valA - valB : valB - valA;
  });
}

function renderTableRows() {
  const filtered = getFilteredAssets();
  const startIdx = (currentPage - 1) * pageSize;
  const pageItems = filtered.slice(startIdx, startIdx + pageSize);

  if (pageItems.length === 0) {
    return `
      <tr>
        <td colspan="9" class="text-center py-12 text-on-surface-variant font-mono space-y-2">
          <span class="material-symbols-outlined text-[36px] text-slate-500">search_off</span>
          <div class="text-sm font-bold text-on-surface">No industrial telemetry nodes match current filters</div>
          <div class="text-xs text-on-surface-variant">Try refining your search terms or resetting filters</div>
          <button id="btn-clear-filters" class="mt-2 px-3 py-1 rounded-lg bg-secondary/20 hover:bg-secondary/30 text-secondary border border-secondary/30 font-bold text-xs">
            Clear Filters
          </button>
        </td>
      </tr>
    `;
  }

  return pageItems.map((item, idx) => {
    const isCritical = item.riskLevel === 'Critical';
    const isHigh = item.riskLevel === 'High';
    const isMedium = item.riskLevel === 'Medium';

    const riskBadgeClass = isCritical 
      ? 'bg-status-critical/15 text-status-critical border-status-critical/40 font-bold'
      : isHigh 
      ? 'bg-status-warning/15 text-status-warning border-status-warning/40 font-bold'
      : isMedium 
      ? 'bg-sky-500/15 text-sky-400 border-sky-500/40'
      : 'bg-status-healthy/15 text-status-healthy border-status-healthy/40';

    const probColor = isCritical 
      ? 'text-status-critical font-bold' 
      : isHigh 
      ? 'text-status-warning font-semibold' 
      : 'text-on-surface font-medium';

    const barColor = isCritical 
      ? 'bg-status-critical shadow-[0_0_6px_#EF4444]' 
      : isHigh 
      ? 'bg-status-warning shadow-[0_0_6px_#F59E0B]' 
      : isMedium 
      ? 'bg-sky-400' 
      : 'bg-status-healthy shadow-[0_0_6px_#10B981]';

    const priDisplay = item.priority < 10 ? `0${item.priority}` : `${item.priority}`;

    return `
      <tr data-machine-id="${item.id}" class="fleet-row-stagger predix-table-row hover:bg-surface-container-low transition-colors group cursor-pointer ${isCritical ? 'critical-row bg-status-critical/[0.03]' : ''}" style="animation-delay: ${idx * 35}ms">
        
        <!-- Priority Indicator -->
        <td class="py-3 px-4 font-mono font-bold text-on-surface-variant">
          ${priDisplay}
        </td>

        <!-- Machine ID & Asset Name -->
        <td class="py-3 px-4">
          <div class="flex items-center gap-2.5">
            <div class="w-2 h-2 rounded-full ${barColor} ${isCritical ? 'animate-pulse' : ''}"></div>
            <div>
              <span class="font-bold text-on-surface font-mono text-[11.5px] group-hover:text-secondary transition-colors">${item.id}</span>
              <div class="text-[11px] text-on-surface-variant">${item.name}</div>
            </div>
          </div>
        </td>

        <!-- Dataset & Sector Location -->
        <td class="py-3 px-4 font-mono text-[11px] text-on-surface-variant">
          <span class="px-1.5 py-0.2 rounded bg-surface-container border border-border-subtle/50 text-[10px] text-on-surface font-semibold mr-1">${item.dataset}</span>
          <span>${item.sector}</span>
        </td>

        <!-- Risk Tier Badge -->
        <td class="py-3 px-4">
          <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded border ${riskBadgeClass} font-mono text-[9.5px] uppercase">
            ${isCritical ? '● ' : ''}${item.riskLevel}
          </span>
        </td>

        <!-- Failure Probability with Progress Bar -->
        <td class="py-3 px-4">
          <div class="flex items-center gap-2.5 font-mono">
            <span class="font-data-number ${probColor} text-[11.5px] w-12">${item.failureProbability}%</span>
            <div class="w-16 bg-surface-container h-1.5 rounded-full overflow-hidden">
              <div class="${barColor} h-full" style="width: ${item.failureProbability}%"></div>
            </div>
          </div>
        </td>

        <!-- Health Score -->
        <td class="py-3 px-4">
          <div class="flex items-center gap-2 font-mono">
            <div class="w-14 bg-surface-container h-1.5 rounded-full overflow-hidden">
              <div class="${barColor} h-full" style="width: ${item.healthScore}%"></div>
            </div>
            <span class="font-data-number font-bold text-on-surface">${item.healthScore}</span>
            <span class="text-on-surface-variant text-[9.5px]">/100</span>
          </div>
        </td>

        <!-- Remaining Useful Life (RUL) -->
        <td class="py-3 px-4">
          <div class="flex flex-col font-mono text-xs">
            <span class="font-data-number font-bold text-on-surface">${item.rulCycles} Cycles</span>
            <span class="text-[9.5px] text-on-surface-variant">~${item.rulDays} Days Horizon</span>
          </div>
        </td>

        <!-- Key Diagnostic Trigger -->
        <td class="py-3 px-4">
          <span class="px-2 py-0.5 rounded bg-surface-container-low border border-border-subtle font-mono text-[10px] text-on-surface">
            ${item.keyIndicator}
          </span>
        </td>

        <!-- Quick Actions (.xls & Diagnostics Modal trigger) -->
        <td class="py-3 px-4 text-right font-mono">
          <div class="flex items-center justify-end gap-1.5">
            <button data-report-id="${item.id}" class="btn-fleet-row-report px-2 py-1 rounded bg-emerald-950/40 text-emerald-400 hover:bg-emerald-600 hover:text-on-primary text-[10.5px] font-bold transition-all border border-emerald-500/30 shadow-sm" title="Export Executive Dossier (.xls)">
              .xls
            </button>
            <button data-row-action="${item.id}" class="btn-inspect-machine px-2.5 py-1 rounded bg-secondary/15 hover:bg-secondary/30 text-secondary border border-secondary/40 text-[10.5px] font-semibold transition-all shadow-sm">
              Inspect
            </button>
          </div>
        </td>

      </tr>
    `;
  }).join('');
}

function updatePaginationUI() {
  const filtered = getFilteredAssets();
  const totalPages = Math.ceil(filtered.length / pageSize) || 1;
  if (currentPage > totalPages) currentPage = totalPages;

  const startIdx = filtered.length > 0 ? (currentPage - 1) * pageSize + 1 : 0;
  const endIdx = Math.min(currentPage * pageSize, filtered.length);

  const infoEl = document.getElementById('pagination-info');
  if (infoEl) {
    infoEl.innerText = filtered.length > 0 
      ? `Displaying ${startIdx} to ${endIdx} of ${filtered.length} nodes`
      : `No matching nodes`;
  }

  const prevBtn = document.getElementById('btn-prev-page');
  const nextBtn = document.getElementById('btn-next-page');
  if (prevBtn) prevBtn.disabled = currentPage <= 1;
  if (nextBtn) nextBtn.disabled = currentPage >= totalPages;

  const numbersEl = document.getElementById('page-numbers');
  if (numbersEl) {
    numbersEl.innerHTML = Array.from({ length: totalPages }, (_, i) => i + 1).map(p => `
      <button data-page="${p}" class="btn-page-num w-6 h-6 rounded-md text-[11px] font-medium transition-colors ${
        p === currentPage 
          ? 'bg-secondary/20 text-secondary border border-secondary/40 font-bold shadow-sm' 
          : 'bg-surface-container border border-border-subtle text-on-surface hover:bg-surface-container-high'
      }">
        ${p}
      </button>
    `).join('');
  }
}

export function initFleetHealthListeners() {
  const refreshTable = () => {
    const tbody = document.getElementById('fleet-table-body');
    if (tbody) {
      tbody.classList.remove('table-filter-fade');
      void tbody.offsetWidth; // Trigger reflow for smooth transition
      tbody.classList.add('table-filter-fade');
      tbody.innerHTML = renderTableRows();
    }
    updatePaginationUI();
    attachRowListeners();
  };

  // Upload Dataset Button
  document.getElementById('btn-fleet-upload-dataset')?.addEventListener('click', () => {
    openUploadModal(() => {
      refreshTable();
    });
  });

  // Global Export Excel Dossier Briefing
  document.getElementById('btn-fleet-export-excel')?.addEventListener('click', () => {
    generateFleetExecutiveBriefing(fleetAssets, activeWorkOrders);
    showToast('Fleet Management Executive Briefing exported (.xls)!', 'success', 4500);
  });

  // Global Export CSV
  document.getElementById('btn-fleet-export-csv')?.addEventListener('click', () => {
    exportToCSV(fleetAssets);
    showToast('Raw fleet diagnostic data exported to CSV!', 'success');
  });

  // Search input
  const searchInput = document.getElementById('fleet-search');
  searchInput?.addEventListener('input', (e) => {
    currentSearchQuery = e.target.value;
    currentPage = 1;
    refreshTable();
  });

  // Clear search button
  document.getElementById('btn-clear-search')?.addEventListener('click', () => {
    currentSearchQuery = '';
    if (searchInput) searchInput.value = '';
    currentPage = 1;
    refreshTable();
  });

  // Dataset filter buttons
  document.querySelectorAll('.btn-dataset-filter').forEach(btn => {
    btn.addEventListener('click', () => {
      currentDatasetFilter = btn.getAttribute('data-dataset-filter');
      currentPage = 1;
      document.querySelectorAll('.btn-dataset-filter').forEach(b => {
        const active = b.getAttribute('data-dataset-filter') === currentDatasetFilter;
        b.className = `btn-dataset-filter px-2.5 py-1 rounded-md text-xs font-mono font-medium transition-all ${
          active ? 'bg-secondary/20 text-secondary border border-secondary/40 font-bold shadow-sm' : 'bg-surface-container-low text-on-surface-variant hover:text-on-surface border border-transparent'
        }`;
      });
      refreshTable();
    });
  });

  // Risk filter buttons
  document.querySelectorAll('.btn-risk-filter').forEach(btn => {
    btn.addEventListener('click', () => {
      currentRiskFilter = btn.getAttribute('data-risk-filter');
      currentPage = 1;
      document.querySelectorAll('.btn-risk-filter').forEach(b => {
        const active = b.getAttribute('data-risk-filter') === currentRiskFilter;
        b.className = `btn-risk-filter px-2.5 py-1 rounded-md text-xs font-mono transition-all ${
          active ? 'bg-secondary/20 text-secondary border border-secondary/40 font-bold shadow-sm' : 'bg-surface-container-low text-on-surface-variant hover:text-on-surface border border-transparent'
        }`;
      });
      refreshTable();
    });
  });

  // Quick "Critical First" Mode
  document.getElementById('btn-critical-first')?.addEventListener('click', () => {
    currentSortField = 'failureProbability';
    currentSortAsc = false;
    currentRiskFilter = 'All';
    currentPage = 1;
    refreshTable();
    showToast('Sorted fleet: Critical & High Probability assets prioritized first', 'info');
  });

  // Sort header clicks
  document.querySelectorAll('.sort-header').forEach(th => {
    th.addEventListener('click', () => {
      const field = th.getAttribute('data-sort');
      if (currentSortField === field) {
        currentSortAsc = !currentSortAsc;
      } else {
        currentSortField = field;
        currentSortAsc = true;
      }
      refreshTable();
    });
  });

  // Pagination buttons
  document.getElementById('btn-prev-page')?.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      refreshTable();
    }
  });

  document.getElementById('btn-next-page')?.addEventListener('click', () => {
    const filtered = getFilteredAssets();
    const totalPages = Math.ceil(filtered.length / pageSize) || 1;
    if (currentPage < totalPages) {
      currentPage++;
      refreshTable();
    }
  });

  const attachRowListeners = () => {
    // Clear filters button in empty state
    document.getElementById('btn-clear-filters')?.addEventListener('click', () => {
      currentSearchQuery = '';
      currentRiskFilter = 'All';
      currentDatasetFilter = 'All';
      currentPage = 1;
      if (searchInput) searchInput.value = '';
      refreshTable();
    });

    document.querySelectorAll('.btn-page-num').forEach(btn => {
      btn.addEventListener('click', () => {
        currentPage = parseInt(btn.getAttribute('data-page'), 10);
        refreshTable();
      });
    });

    // Quick row report (.xls) buttons
    document.querySelectorAll('.btn-fleet-row-report').forEach(btn => {
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

    // Row clicks to open MachineModal
    document.querySelectorAll('tr[data-machine-id]').forEach(row => {
      row.addEventListener('click', (e) => {
        if (e.target.closest('.btn-fleet-row-report')) return;
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

  updatePaginationUI();
  attachRowListeners();
}
