// PREDIX Industrial Intelligence — Navigation Sidebar Component
import { activeWorkOrders } from '../data/teamsData.js';
import { uploadedDatasetsList } from '../data/fleetData.js';

export function renderSidebar(currentRoute = 'dashboard') {
  const activeOrdersCount = activeWorkOrders.filter(w => w.status !== 'Completed').length;

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'dashboard', href: '#dashboard' },
    { id: 'fleet-health', label: 'Fleet Health', icon: 'precision_manufacturing', href: '#fleet-health' },
    { id: 'dataset-profiler', label: 'Dataset Ingestion', icon: 'settings_input_component', href: '#dataset-profiler', badgeText: `${uploadedDatasetsList.length} Sets` },
    { id: 'work-orders', label: 'Teams & Work Orders', icon: 'assignment_turned_in', href: '#work-orders', badge: activeOrdersCount },
    { id: 'what-if-simulator', label: 'What-If Simulator', icon: 'science', href: '#what-if-simulator' },
    { id: 'model-performance', label: 'Model Performance', icon: 'query_stats', href: '#model-performance' },
    { id: 'analytics', label: 'Analytics', icon: 'analytics', href: '#analytics' }
  ];

  return `
    <!-- Mobile Backdrop -->
    <div id="sidebar-backdrop" class="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 md:hidden hidden transition-opacity"></div>

    <aside id="sidebar" class="fixed left-0 top-0 h-full w-72 bg-surface/95 backdrop-blur-md border-r border-border-subtle z-50 flex flex-col transition-transform duration-300 -translate-x-full md:translate-x-0 shadow-2xl md:shadow-none">
      <!-- Brand Header -->
      <div class="p-5 border-b border-border-subtle">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-surface-container border border-secondary/30 flex items-center justify-center text-secondary shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              <span class="material-symbols-outlined text-[22px]">precision_manufacturing</span>
            </div>
            <div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-base text-on-surface tracking-wider font-mono">PREDIX</span>
                <span class="px-1.5 py-0.2 rounded text-[9px] font-mono font-bold bg-secondary/15 text-secondary border border-secondary/30">V2.4</span>
              </div>
              <div class="text-[10px] font-mono text-on-surface-variant tracking-wider uppercase mt-0.5">Industrial Intelligence</div>
            </div>
          </div>
          <!-- Mobile Close Button -->
          <button id="btn-close-sidebar" class="md:hidden p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" aria-label="Close Navigation Menu">
            <span class="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>
        <div class="text-[10px] font-mono text-on-surface-variant/70 mt-2.5 px-0.5 flex items-center justify-between border-t border-border-subtle/50 pt-2">
          <span>MISSION CONTROL</span>
          <span class="text-status-healthy font-semibold">● ACTIVE</span>
        </div>
      </div>

      <!-- Navigation Links -->
      <nav class="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        <div class="text-[10px] font-label-md text-on-surface-variant uppercase tracking-wider px-3 mb-2">Operational Modules</div>
        ${navItems.map(item => {
          const isActive = currentRoute === item.id || (currentRoute === '' && item.id === 'dashboard');
          return `
            <a href="${item.href}" 
               data-nav="${item.id}"
               class="flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-xs font-medium transition-all group relative ${
                 isActive 
                   ? 'bg-secondary/15 text-on-surface border-l-2 border-secondary shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] font-semibold' 
                   : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low'
               }">
              <span class="material-symbols-outlined text-[19px] transition-transform group-hover:scale-105 ${
                isActive ? 'text-secondary' : 'text-on-surface-variant group-hover:text-on-surface'
              }">${item.icon}</span>
              <span class="tracking-wide">${item.label}</span>
              ${item.badgeText ? `
                <span class="ml-auto px-1.5 py-0.5 rounded text-[9px] font-mono font-bold ${
                  isActive ? 'bg-secondary/25 text-secondary border border-secondary/40' : 'bg-surface-container text-on-surface-variant'
                }">${item.badgeText}</span>
              ` : item.badge ? `
                <span class="ml-auto px-1.5 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                  isActive ? 'bg-status-critical text-on-primary' : 'bg-status-critical/20 text-status-critical border border-status-critical/30'
                }">${item.badge}</span>
              ` : (isActive ? '<span class="ml-auto w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_8px_#06B6D4]"></span>' : '')}
            </a>
          `;
        }).join('')}

        <!-- Telemetry Streams Direct Upload Ingestion -->
        <div class="pt-5 pb-2">
          <div class="text-[10px] font-label-md text-on-surface-variant uppercase tracking-wider px-3 mb-2">Telemetry Ingestion</div>
          <a href="#dataset-profiler" class="flex items-center gap-3 px-3.5 py-2 rounded-lg text-xs font-medium text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors border border-dashed border-border-subtle group">
            <span class="material-symbols-outlined text-[17px] text-secondary group-hover:scale-110 transition-transform">cloud_upload</span>
            <span class="font-mono text-[11px]">Upload Custom Data</span>
            <span class="ml-auto text-[9px] font-mono bg-secondary/15 text-secondary px-1.5 py-0.5 rounded font-bold border border-secondary/20">READY</span>
          </a>
        </div>
      </nav>

      <!-- Engine Status & Profile Footer -->
      <div class="p-3.5 border-t border-border-subtle bg-surface-container-lowest/60 space-y-2.5">
        <div class="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-surface-container-low border border-border-subtle">
          <div class="flex items-center gap-2">
            <div class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-healthy opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-status-healthy"></span>
            </div>
            <span class="text-[11px] font-mono font-medium text-on-surface">Predix Core v2.4.1</span>
          </div>
          <span class="text-[9px] font-mono text-status-healthy font-bold tracking-wider">ONLINE</span>
        </div>

        <div class="flex items-center gap-2.5 px-2 pt-0.5">
          <div class="w-7 h-7 rounded-lg bg-surface-container text-secondary border border-secondary/30 flex items-center justify-center font-bold text-[10px] font-mono">
            OP
          </div>
          <div class="flex flex-col min-w-0">
            <span class="text-xs font-semibold text-on-surface truncate">Ops Commander</span>
            <span class="text-[9.5px] font-mono text-on-surface-variant truncate">Fleet Reliability Lead</span>
          </div>
        </div>
      </div>
    </aside>
  `;
}
