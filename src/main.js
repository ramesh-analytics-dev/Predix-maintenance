// Main Application Orchestrator & Client-Side Router
import { renderSidebar } from './components/Sidebar.js';
import { renderHeader } from './components/Header.js';
import { renderDashboardView, initDashboardListeners } from './views/DashboardView.js';
import { renderFleetHealthView, initFleetHealthListeners } from './views/FleetHealthView.js';
import { renderDatasetProfilerView, initDatasetProfilerListeners } from './views/DatasetProfilerView.js';
import { renderWorkOrdersView, initWorkOrdersListeners } from './views/WorkOrdersView.js';
import { renderSimulatorView, initSimulatorListeners } from './views/SimulatorView.js';
import { renderModelPerfView, initModelPerfListeners } from './views/ModelPerfView.js';
import { renderAnalyticsView, initAnalyticsListeners } from './views/AnalyticsView.js';
import { fleetAssets } from './data/fleetData.js';
import { activeWorkOrders } from './data/teamsData.js';
import { generateFleetExecutiveBriefing } from './utils/excelReport.js';
import { exportToCSV } from './utils/export.js';
import { openUploadModal } from './components/UploadModal.js';
import { showToast } from './components/Toast.js';

function parseHashRoute() {
  const hash = window.location.hash.slice(1) || 'dashboard';
  const [route, queryString] = hash.split('?');
  const params = new URLSearchParams(queryString || '');
  return { route: route || 'dashboard', params };
}

function router() {
  const { route, params } = parseHashRoute();

  // Render Shell Components
  const sidebarRoot = document.getElementById('sidebar-root');
  if (sidebarRoot) sidebarRoot.innerHTML = renderSidebar(route);

  const headerRoot = document.getElementById('header-root');
  if (headerRoot) headerRoot.innerHTML = renderHeader(route);

  // Render Active View
  const viewContainer = document.getElementById('view-container');
  if (!viewContainer) return;

  switch (route) {
    case 'fleet-health':
      viewContainer.innerHTML = renderFleetHealthView();
      initFleetHealthListeners();
      break;
    case 'dataset-profiler':
      viewContainer.innerHTML = renderDatasetProfilerView();
      initDatasetProfilerListeners();
      break;
    case 'work-orders':
      viewContainer.innerHTML = renderWorkOrdersView();
      initWorkOrdersListeners();
      break;
    case 'what-if-simulator':
      const machineParam = params.get('machine');
      viewContainer.innerHTML = renderSimulatorView(machineParam);
      initSimulatorListeners();
      break;
    case 'model-performance':
      viewContainer.innerHTML = renderModelPerfView();
      initModelPerfListeners();
      break;
    case 'analytics':
      viewContainer.innerHTML = renderAnalyticsView();
      initAnalyticsListeners();
      break;
    case 'dashboard':
    default:
      viewContainer.innerHTML = renderDashboardView();
      initDashboardListeners(router);
      break;
  }

  // Setup Global Shell Listeners
  setupShellListeners();

  // Trigger smooth global page transition
  viewContainer.classList.remove('page-transition-enter');
  void viewContainer.offsetWidth; // Trigger DOM reflow
  viewContainer.classList.add('page-transition-enter');

  // Initialize Scroll Reveal Observer
  initScrollReveal();

  // Scroll to top
  window.scrollTo(0, 0);
}

function initScrollReveal() {
  const isReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealElements = document.querySelectorAll('.predix-reveal:not(.is-revealed)');

  if (isReduced) {
    revealElements.forEach(el => el.classList.add('is-revealed'));
    return;
  }

  if (!('IntersectionObserver' in window)) {
    revealElements.forEach(el => el.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => observer.observe(el));
}

function closeMobileSidebar() {
  const sidebar = document.getElementById('sidebar');
  const backdrop = document.getElementById('sidebar-backdrop');
  if (sidebar) {
    sidebar.classList.add('-translate-x-full');
  }
  if (backdrop) {
    backdrop.classList.add('hidden');
  }
}

function openMobileSidebar() {
  const sidebar = document.getElementById('sidebar');
  const backdrop = document.getElementById('sidebar-backdrop');
  if (sidebar) {
    sidebar.classList.remove('-translate-x-full');
  }
  if (backdrop) {
    backdrop.classList.remove('hidden');
  }
}

function toggleMobileSidebar() {
  const sidebar = document.getElementById('sidebar');
  if (sidebar && sidebar.classList.contains('-translate-x-full')) {
    openMobileSidebar();
  } else {
    closeMobileSidebar();
  }
}

function setupShellListeners() {
  // Mobile Sidebar Toggle and Close Handlers
  document.getElementById('btn-toggle-sidebar')?.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMobileSidebar();
  });

  document.getElementById('btn-close-sidebar')?.addEventListener('click', () => {
    closeMobileSidebar();
  });

  document.getElementById('sidebar-backdrop')?.addEventListener('click', () => {
    closeMobileSidebar();
  });

  // Automatically close sidebar when clicking any navigation link on mobile
  document.querySelectorAll('#sidebar a[data-nav], #sidebar a[href]').forEach(link => {
    link.addEventListener('click', () => {
      closeMobileSidebar();
    });
  });

  // Global Header Quick Upload Dataset Button
  document.getElementById('btn-header-upload-dataset')?.addEventListener('click', () => {
    openUploadModal((datasetName) => {
      router();
    });
  });

  // Global Notifications panel toggle
  const notifBtn = document.getElementById('btn-notifications');
  const notifPanel = document.getElementById('notifications-panel');
  if (notifBtn && notifPanel) {
    notifBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      notifPanel.classList.toggle('hidden');
    });

    document.addEventListener('click', (e) => {
      if (!notifPanel.contains(e.target) && e.target !== notifBtn) {
        notifPanel.classList.add('hidden');
      }
    });
  }

  // Global Header Excel Briefing Button
  document.getElementById('btn-export-excel-global')?.addEventListener('click', () => {
    generateFleetExecutiveBriefing(fleetAssets, activeWorkOrders);
    showToast('Fleet Management Executive Briefing exported (.xls)!', 'success', 4500);
  });

  // Global Header CSV Button
  document.getElementById('btn-export-csv-global')?.addEventListener('click', () => {
    exportToCSV(fleetAssets);
    showToast('Raw Fleet Diagnostic Data exported successfully to CSV!', 'success');
  });

  // Close modals & sidebar on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const modalRoot = document.getElementById('modal-root');
      if (modalRoot) modalRoot.innerHTML = '';
      if (notifPanel) notifPanel.classList.add('hidden');
      closeMobileSidebar();
    }
  });
}

// Initial App Startup
window.addEventListener('DOMContentLoaded', () => {
  router();
  window.addEventListener('hashchange', router);

  // Welcome Toast Notification
  setTimeout(() => {
    showToast('Predix Engine active: All telemetry streams & ML models online.', 'info', 4000);
  }, 800);
});
