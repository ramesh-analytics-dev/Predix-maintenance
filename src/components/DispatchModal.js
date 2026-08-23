// PREDIX Industrial Intelligence — Maintenance Work Order Dispatch & Smart Team Assignment Modal
import { getDiagnosticGuideForAsset } from '../data/diagnosticGuides.js';
import { maintenanceTeams, createWorkOrder } from '../data/teamsData.js';
import { showToast } from './Toast.js';

export function openDispatchModal(machine, defaultTeamId = null, onDispatched = null) {
  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot || !machine) return;

  const guide = getDiagnosticGuideForAsset(machine);
  const selectedTeamId = defaultTeamId || guide.recommendedTeamId;
  const targetTeam = maintenanceTeams.find(t => t.id === selectedTeamId) || maintenanceTeams[0];

  const modalHtml = `
    <div id="dispatch-modal-backdrop" class="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-2 sm:p-4 animate-modal-backdrop">
      <div class="bg-surface w-full max-w-xl rounded-xl sm:rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-border-subtle overflow-hidden flex flex-col max-h-[96vh] sm:max-h-[90vh] animate-modal my-auto">
        <!-- Header -->
        <div class="px-4 py-3 sm:px-6 sm:py-4 bg-surface-container-low/90 border-b border-border-subtle text-on-surface flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-secondary/15 border border-secondary/30 text-secondary flex items-center justify-center shadow-[0_0_10px_rgba(6,182,212,0.15)] shrink-0">
              <span class="material-symbols-outlined text-[20px] sm:text-[22px]">engineering</span>
            </div>
            <div class="min-w-0">
              <h3 class="font-bold text-xs sm:text-sm text-on-surface font-mono leading-tight truncate">Dispatch Maintenance Work Order</h3>
              <p class="text-[10px] sm:text-[11px] text-on-surface-variant font-mono mt-0.5 truncate">Target: ${machine.id} • ${machine.name}</p>
            </div>
          </div>
          <button id="btn-close-dispatch-modal" class="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors shrink-0">
            <span class="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <!-- Form Content -->
        <form id="dispatch-form" class="p-4 sm:p-6 space-y-3.5 sm:space-y-4 text-xs overflow-y-auto">
          <!-- AI Match Highlight Banner -->
          <div class="p-3 sm:p-3.5 rounded-xl bg-secondary/10 border-l-4 border-secondary flex items-start gap-2.5 sm:gap-3">
            <span class="material-symbols-outlined text-secondary text-[18px] sm:text-[20px] shrink-0 mt-0.5">psychology</span>
            <div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-secondary text-[11px] sm:text-xs uppercase font-mono">Smart Routing Recommendation</span>
                <span class="px-1.5 py-0.2 rounded bg-secondary/20 border border-secondary/40 text-secondary font-mono text-[8.5px] sm:text-[9px] font-bold">98% MATCH</span>
              </div>
              <p class="text-on-surface text-[10.5px] sm:text-[11px] mt-0.5 leading-relaxed">
                Failure signature classified as <strong class="text-secondary">${guide.failureMode}</strong>. Auto-routing to <strong class="text-on-surface">${targetTeam.name}</strong>.
              </p>
            </div>
          </div>

          <!-- Team & Technician Assignment -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label class="block font-label-md text-on-surface-variant uppercase mb-1.5">Assigned Engineering Team</label>
              <select id="dispatch-team-select" class="w-full bg-surface-container-low border border-border-subtle rounded-xl px-3 py-2 text-xs text-on-surface font-semibold focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary cursor-pointer font-mono">
                ${maintenanceTeams.map(t => `
                  <option value="${t.id}" ${t.id === targetTeam.id ? 'selected' : ''}>
                    ${t.name} (${t.capacityPct}% Loaded)
                  </option>
                `).join('')}
              </select>
            </div>

            <div>
              <label class="block font-label-md text-on-surface-variant uppercase mb-1.5">Lead Technician</label>
              <select id="dispatch-tech-select" class="w-full bg-surface-container-low border border-border-subtle rounded-xl px-3 py-2 text-xs text-on-surface font-semibold focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary cursor-pointer font-mono">
                ${targetTeam.members.map(m => `
                  <option value="${m}">${m}</option>
                `).join('')}
              </select>
            </div>
          </div>

          <!-- Urgency Level -->
          <div>
            <label class="block font-label-md text-on-surface-variant uppercase mb-1.5">Dispatch Urgency & SLA</label>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <label class="flex items-center gap-2 p-2 sm:p-2.5 rounded-xl border border-border-subtle cursor-pointer hover:bg-surface-container-low bg-surface">
                <input type="radio" name="urgency" value="Immediate" checked class="accent-sky-400">
                <div>
                  <div class="font-bold text-status-critical font-mono">Immediate</div>
                  <div class="text-[10px] text-on-surface-variant font-mono">&lt; 1 Hour SLA</div>
                </div>
              </label>
              <label class="flex items-center gap-2 p-2 sm:p-2.5 rounded-xl border border-border-subtle cursor-pointer hover:bg-surface-container-low bg-surface">
                <input type="radio" name="urgency" value="4-Hour" class="accent-sky-400">
                <div>
                  <div class="font-bold text-status-warning font-mono">4-Hour</div>
                  <div class="text-[10px] text-on-surface-variant font-mono">Same Shift</div>
                </div>
              </label>
              <label class="flex items-center gap-2 p-2 sm:p-2.5 rounded-xl border border-border-subtle cursor-pointer hover:bg-surface-container-low bg-surface">
                <input type="radio" name="urgency" value="Scheduled" class="accent-sky-400">
                <div>
                  <div class="font-bold text-on-surface font-mono">Scheduled</div>
                  <div class="text-[10px] text-on-surface-variant font-mono">Next Window</div>
                </div>
              </label>
            </div>
          </div>

          <!-- Auto-Attached SOP & Parts Kit Checklist -->
          <div class="p-3.5 rounded-xl bg-surface-container-low border border-border-subtle space-y-2">
            <div class="flex items-center justify-between">
              <span class="font-bold text-on-surface text-xs flex items-center gap-1.5 font-mono">
                <span class="material-symbols-outlined text-[16px] text-status-healthy">inventory_2</span>
                <span>Auto-Requisitioned Parts Kit</span>
              </span>
              <span class="text-[10px] font-mono text-status-healthy font-bold bg-status-healthy/15 px-1.5 py-0.5 rounded border border-status-healthy/30">ALL IN STOCK</span>
            </div>
            <div class="space-y-1 text-[11px] text-on-surface">
              ${guide.resolution.parts.map(p => `
                <div class="flex items-center justify-between font-mono bg-surface p-1.5 rounded border border-border-subtle">
                  <span>${p.name} (${p.sku})</span>
                  <span class="text-on-surface-variant">Qty: ${p.qty}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Operational Dispatch Instructions -->
          <div>
            <label class="block font-label-md text-on-surface-variant uppercase mb-1.5">Operational Safety & Work Instructions</label>
            <textarea id="dispatch-notes" rows="2" class="w-full bg-surface-container-low border border-border-subtle rounded-xl px-3 py-2 text-xs text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary font-mono">${guide.resolution.safety} Follow ${guide.failureMode} SOP.</textarea>
          </div>

          <!-- Submit Buttons -->
          <div class="pt-3 flex items-center justify-end gap-2 border-t border-border-subtle font-mono">
            <button type="button" id="btn-cancel-dispatch" class="px-4 py-2 text-xs font-semibold rounded-lg text-on-surface-variant hover:text-on-surface transition-colors">
              Cancel
            </button>
            <button type="submit" class="px-4 py-2 text-xs font-semibold rounded-lg bg-secondary/20 hover:bg-secondary/30 text-secondary border border-secondary/40 transition-all flex items-center gap-1.5 shadow-[0_0_10px_rgba(6,182,212,0.15)] font-bold">
              <span class="material-symbols-outlined text-[16px]">send</span>
              <span>Confirm & Dispatch Ticket</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  `;

  modalRoot.innerHTML = modalHtml;

  const closeModal = () => {
    modalRoot.innerHTML = '';
  };

  document.getElementById('btn-close-dispatch-modal')?.addEventListener('click', closeModal);
  document.getElementById('btn-cancel-dispatch')?.addEventListener('click', closeModal);
  document.getElementById('dispatch-modal-backdrop')?.addEventListener('click', (e) => {
    if (e.target.id === 'dispatch-modal-backdrop') closeModal();
  });

  // Handle Team change to update technician list
  const teamSelect = document.getElementById('dispatch-team-select');
  const techSelect = document.getElementById('dispatch-tech-select');
  teamSelect?.addEventListener('change', (e) => {
    const selected = maintenanceTeams.find(t => t.id === e.target.value);
    if (selected && techSelect) {
      techSelect.innerHTML = selected.members.map(m => `<option value="${m}">${m}</option>`).join('');
    }
  });

  // Handle Form Submission
  document.getElementById('dispatch-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const teamId = document.getElementById('dispatch-team-select')?.value;
    const assignedTech = document.getElementById('dispatch-tech-select')?.value;
    const urgency = document.querySelector('input[name="urgency"]:checked')?.value || "Immediate";
    const notes = document.getElementById('dispatch-notes')?.value;

    const team = maintenanceTeams.find(t => t.id === teamId) || targetTeam;

    const newOrder = createWorkOrder({
      machineId: machine.id,
      machineName: machine.name,
      sector: machine.sector,
      teamId: team.id,
      teamName: team.name,
      assignedTech: assignedTech,
      urgency: urgency,
      priorityRank: machine.priority,
      failureType: machine.failureType,
      keyIndicator: machine.keyIndicator,
      targetCompletion: urgency === 'Immediate' ? 'In 45 mins' : urgency === '4-Hour' ? 'In 3h 30m' : 'In 12h 00m',
      parts: guide.resolution.parts.map(p => p.name),
      notes: notes
    });

    closeModal();
    showToast(`Work Order #${newOrder.id} dispatched to ${assignedTech} (${team.name})!`, 'success', 4500);

    if (onDispatched) onDispatched(newOrder);
  });
}
