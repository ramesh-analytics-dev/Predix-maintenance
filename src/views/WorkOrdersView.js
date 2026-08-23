// PREDIX Industrial Intelligence — Teams & Active Work Orders Dispatch Management View
import { maintenanceTeams, activeWorkOrders, completeWorkOrder } from '../data/teamsData.js';
import { fleetAssets } from '../data/fleetData.js';
import { openMachineModal } from '../components/MachineModal.js';
import { openDispatchModal } from '../components/DispatchModal.js';
import { generateExecutiveExcelReport, generateFleetExecutiveBriefing } from '../utils/excelReport.js';
import { showToast } from '../components/Toast.js';

let currentWorkOrderStatusFilter = 'All';

export function renderWorkOrdersView() {
  const activeCount = activeWorkOrders.filter(w => w.status !== 'Completed').length;
  const criticalUrgentCount = activeWorkOrders.filter(w => w.urgency === 'Immediate' && w.status !== 'Completed').length;

  return `
    <div class="px-3 sm:px-6 py-4 sm:py-6 max-w-[1440px] mx-auto space-y-4 sm:space-y-6">
      <!-- Header Section -->
      <div class="predix-panel p-4 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div class="flex items-center gap-2 flex-wrap">
            <h1 class="text-base sm:text-lg font-bold text-on-surface font-mono">Maintenance Teams & Work Order Routing</h1>
            <span class="px-2 py-0.2 rounded text-[9.5px] font-mono font-bold bg-secondary/15 text-secondary border border-secondary/30 uppercase">
              SMART ROUTING ACTIVE
            </span>
          </div>
          <p class="text-xs text-on-surface-variant max-w-2xl mt-1">
            Skill-matched task routing across 5 specialized reliability teams. Generate executive reports for plant management prior to resolution sign-off.
          </p>
        </div>

        <!-- Global Report Download Trigger -->
        <div class="flex items-center gap-3">
          <button id="btn-export-fleet-briefing" class="px-3.5 py-2 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 text-xs font-bold flex items-center gap-2 transition-all shadow-sm font-mono">
            <span class="material-symbols-outlined text-[17px]">table_chart</span>
            <span>Export Management Briefing (.xls)</span>
          </button>
        </div>
      </div>

      <!-- 5 Specialized Engineering Teams Workload Grid -->
      <div>
        <div class="flex items-center justify-between mb-3">
          <h3 class="text-sm font-bold text-on-surface font-mono">Specialized Engineering Teams & Bandwidth</h3>
          <span class="text-[10px] font-mono text-on-surface-variant">Floor Capacity & Active Roster</span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
          ${maintenanceTeams.map(team => {
            const isHighLoad = team.capacityPct > 75;
            const barColor = isHighLoad ? 'bg-status-critical shadow-[0_0_6px_#EF4444]' : 'bg-status-healthy shadow-[0_0_6px_#10B981]';

            return `
              <div class="predix-panel p-4 flex flex-col justify-between hover:border-slate-600 transition-colors">
                <div>
                  <div class="flex items-center justify-between mb-1.5">
                    <span class="font-bold text-xs text-on-surface truncate font-mono" title="${team.name}">${team.name}</span>
                    <span class="text-[10px] font-mono font-bold text-secondary">${team.rating} ★</span>
                  </div>
                  <div class="text-[11px] text-on-surface-variant font-mono">Lead: <strong class="text-on-surface">${team.lead}</strong></div>
                  
                  <div class="flex flex-wrap gap-1 mt-2">
                    ${team.specialties.slice(0, 2).map(s => `
                      <span class="px-1.5 py-0.5 rounded bg-surface-container-low text-[9px] font-mono text-on-surface-variant border border-border-subtle/40 truncate">${s}</span>
                    `).join('')}
                  </div>
                </div>

                <div class="mt-4 pt-3 border-t border-border-subtle">
                  <div class="flex items-center justify-between text-[10px] font-mono text-on-surface-variant mb-1">
                    <span>Workload (${team.capacityPct}%)</span>
                    <span class="font-bold text-on-surface">${team.activeTicketsCount} Tickets</span>
                  </div>
                  <div class="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
                    <div class="${barColor} h-full transition-all duration-500" style="width: ${team.capacityPct}%"></div>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Active Work Orders Stream Table -->
      <div class="predix-panel overflow-hidden flex flex-col">
        <div class="p-3.5 sm:p-5 bg-surface-container-low/60 border-b border-border-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <h3 class="text-sm font-bold text-on-surface font-mono">Active Maintenance Work Orders</h3>
            <p class="text-xs text-on-surface-variant">Generate pre-resolution dossiers and mark dispatched work orders as resolved</p>
          </div>

          <!-- Status Filter Tabs -->
          <div class="flex items-center gap-1 bg-surface-container-low p-1 rounded-lg border border-border-subtle overflow-x-auto whitespace-nowrap hide-scrollbar flex-nowrap font-mono text-xs max-w-full">
            ${['All', 'Immediate', 'In Progress', 'Pending Parts', 'Completed'].map(status => `
              <button data-wo-status="${status}" class="btn-wo-status-filter px-2.5 py-1 rounded text-xs font-medium transition-all shrink-0 ${
                currentWorkOrderStatusFilter === status 
                  ? 'bg-secondary/20 text-secondary border border-secondary/40 font-bold shadow-sm' 
                  : 'text-on-surface-variant hover:text-on-surface'
              }">
                ${status}
              </button>
            `).join('')}
          </div>
        </div>

        <div class="overflow-x-auto w-full">
          <table class="w-full text-left border-collapse min-w-[900px] text-xs">
            <thead class="bg-surface-container-low/80 border-b border-border-subtle text-[10.5px] font-label-md text-on-surface-variant uppercase tracking-wider">
              <tr>
                <th class="py-3 px-4">Order ID</th>
                <th class="py-3 px-4">Target Machine</th>
                <th class="py-3 px-4">Assigned Team & Lead</th>
                <th class="py-3 px-4">Urgency / SLA</th>
                <th class="py-3 px-4">Diagnostic Trigger</th>
                <th class="py-3 px-4">Status & Progress</th>
                <th class="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody id="work-orders-tbody" class="divide-y divide-border-subtle">
              ${renderWorkOrderRows()}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

function getFilteredWorkOrders() {
  return activeWorkOrders.filter(order => {
    if (currentWorkOrderStatusFilter === 'All') return true;
    if (currentWorkOrderStatusFilter === 'Immediate') return order.urgency === 'Immediate' && order.status !== 'Completed';
    return order.status === currentWorkOrderStatusFilter;
  });
}

function renderWorkOrderRows() {
  const filtered = getFilteredWorkOrders();

  if (filtered.length === 0) {
    return `
      <tr>
        <td colspan="7" class="text-center py-12 text-on-surface-variant font-mono">
          <span class="material-symbols-outlined text-[36px] text-slate-500 mb-2">assignment_turned_in</span>
          <div>No active work orders match the selected filter.</div>
        </td>
      </tr>
    `;
  }

  return filtered.map(order => {
    const isCompleted = order.status === 'Completed';
    const isImmediate = order.urgency === 'Immediate';

    const statusBadge = isCompleted 
      ? 'bg-status-healthy/15 text-status-healthy border-status-healthy/30'
      : order.status === 'In Progress' 
      ? 'bg-secondary/15 text-secondary border-secondary/30'
      : order.status === 'Pending Parts' 
      ? 'bg-status-warning/15 text-status-warning border-status-warning/30'
      : 'bg-primary/20 text-sky-400 border-primary/30';

    const urgencyBadge = isImmediate 
      ? 'bg-status-critical/15 text-status-critical border border-status-critical/30 font-bold' 
      : 'bg-surface-container text-on-surface-variant border border-border-subtle/40';

    return `
      <tr class="hover:bg-surface-container-low transition-colors ${isCompleted ? 'opacity-50' : ''}">
        <td class="py-3 px-4 font-mono font-bold text-on-surface">
          ${order.id}
          <div class="text-[10px] text-on-surface-variant font-normal font-mono">${order.createdTime}</div>
        </td>
        <td class="py-3 px-4">
          <div class="font-bold text-on-surface font-mono">${order.machineName}</div>
          <div class="text-[11px] text-on-surface-variant font-mono">${order.machineId} • ${order.sector}</div>
        </td>
        <td class="py-3 px-4">
          <div class="font-semibold text-on-surface">${order.teamName}</div>
          <div class="text-[11px] text-secondary font-mono flex items-center gap-1">
            <span class="material-symbols-outlined text-[14px]">person</span>
            <span>${order.assignedTech}</span>
          </div>
        </td>
        <td class="py-3 px-4">
          <span class="px-2 py-0.5 rounded text-[9.5px] font-mono uppercase ${urgencyBadge}">
            ${order.urgency}
          </span>
          <div class="text-[10px] font-mono text-on-surface-variant mt-0.5">${order.targetCompletion}</div>
        </td>
        <td class="py-3 px-4">
          <div class="font-semibold text-on-surface">${order.failureType}</div>
          <div class="text-[11px] text-status-critical font-mono">${order.keyIndicator}</div>
        </td>
        <td class="py-3 px-4">
          <div class="flex items-center gap-2 mb-1">
            <span class="px-2 py-0.5 rounded text-[9.5px] font-mono uppercase font-bold border-l-2 ${statusBadge}">
              ${order.status}
            </span>
            <span class="font-mono text-[10px] text-on-surface-variant">${order.progressPct}%</span>
          </div>
          <div class="w-24 bg-surface-container h-1.5 rounded-full overflow-hidden">
            <div class="${isCompleted ? 'bg-status-healthy' : 'bg-secondary'} h-full transition-all duration-300" style="width: ${order.progressPct}%"></div>
          </div>
        </td>
        <td class="py-3 px-4 text-right">
          <div class="flex items-center justify-end gap-1.5">
            <!-- 1-Click Executive Excel Report Button -->
            <button data-report-machine="${order.machineId}" data-report-wo="${order.id}" class="btn-gen-wo-report px-2 py-1 rounded bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-600 hover:text-on-primary text-[10.5px] font-bold transition-all flex items-center gap-1 shadow-sm font-mono" title="Generate Executive Excel Report (.xls) for Higher Officials">
              <span class="material-symbols-outlined text-[14px]">description</span>
              <span>.xls</span>
            </button>

            <!-- SOP View Button -->
            <button data-view-sop="${order.machineId}" class="btn-open-sop px-2 py-1 rounded border border-border-subtle bg-surface-container hover:bg-surface-container-high text-[10.5px] font-semibold transition-all flex items-center gap-1 font-mono" title="View Investigation Checklist & SOP">
              <span class="material-symbols-outlined text-[14px] text-secondary">menu_book</span>
              <span>SOP</span>
            </button>

            ${!isCompleted ? `
              <button data-complete-wo="${order.id}" data-complete-machine="${order.machineId}" class="btn-complete-wo px-2.5 py-1 rounded bg-status-healthy/20 border border-status-healthy/40 text-status-healthy text-[10.5px] font-bold hover:bg-status-healthy hover:text-on-primary transition-all flex items-center gap-1 shadow-sm font-mono" title="Download report and mark work order as completed">
                <span class="material-symbols-outlined text-[14px]">task_alt</span>
                <span>Resolve</span>
              </button>
            ` : `
              <span class="material-symbols-outlined text-status-healthy text-[18px]" title="Resolved & Documented">check_circle</span>
            `}
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

export function initWorkOrdersListeners() {
  const refreshTable = () => {
    const tbody = document.getElementById('work-orders-tbody');
    if (tbody) tbody.innerHTML = renderWorkOrderRows();
    attachRowActions();
  };

  // Status Filter Buttons
  document.querySelectorAll('.btn-wo-status-filter').forEach(btn => {
    btn.addEventListener('click', () => {
      currentWorkOrderStatusFilter = btn.getAttribute('data-wo-status');
      document.querySelectorAll('.btn-wo-status-filter').forEach(b => {
        const active = b.getAttribute('data-wo-status') === currentWorkOrderStatusFilter;
        b.className = `btn-wo-status-filter px-2.5 py-1 rounded text-xs font-medium transition-all ${
          active ? 'bg-secondary/20 text-secondary border border-secondary/40 font-bold shadow-sm' : 'text-on-surface-variant hover:text-on-surface'
        }`;
      });
      refreshTable();
    });
  });

  // Global Briefing Export
  document.getElementById('btn-export-fleet-briefing')?.addEventListener('click', () => {
    generateFleetExecutiveBriefing(fleetAssets, activeWorkOrders);
    showToast('Fleet Management Executive Briefing exported (.xls)!', 'success', 4500);
  });

  const attachRowActions = () => {
    // Generate Report (.xls)
    document.querySelectorAll('.btn-gen-wo-report').forEach(btn => {
      btn.addEventListener('click', () => {
        const machineId = btn.getAttribute('data-report-machine');
        const woId = btn.getAttribute('data-report-wo');
        const machine = fleetAssets.find(m => m.id === machineId);
        const order = activeWorkOrders.find(o => o.id === woId);
        if (machine) {
          generateExecutiveExcelReport(machine, order);
          showToast(`Executive Report for ${machine.id} generated (.xls)!`, 'success', 4500);
        }
      });
    });

    // Open SOP
    document.querySelectorAll('.btn-open-sop').forEach(btn => {
      btn.addEventListener('click', () => {
        const machineId = btn.getAttribute('data-view-sop');
        const machine = fleetAssets.find(m => m.id === machineId);
        if (machine) {
          openMachineModal(
            machine,
            (m, teamId) => openDispatchModal(m, teamId),
            (m) => { window.location.hash = `#what-if-simulator?machine=${m.id}`; },
            'resolve'
          );
        }
      });
    });

    // Complete & Resolve Work Order (Auto-exports report for higher officials before finalizing)
    document.querySelectorAll('.btn-complete-wo').forEach(btn => {
      btn.addEventListener('click', () => {
        const orderId = btn.getAttribute('data-complete-wo');
        const machineId = btn.getAttribute('data-complete-machine');
        const machine = fleetAssets.find(m => m.id === machineId);
        const order = activeWorkOrders.find(o => o.id === orderId);

        // Export executive resolution report for higher officials
        if (machine) {
          generateExecutiveExcelReport(machine, order);
        }

        completeWorkOrder(orderId);
        showToast(`Work Order #${orderId} marked completed & Executive Dossier exported for management!`, 'success', 5000);
        refreshTable();
      });
    });
  };

  attachRowActions();
}
