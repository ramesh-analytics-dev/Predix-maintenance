// PREDIX Industrial Intelligence — Global Toast Notification Manager

export function showToast(message, type = 'info', duration = 3500) {
  const container = document.getElementById('toast-root');
  if (!container) return;

  const icons = {
    success: 'check_circle',
    error: 'error',
    warning: 'warning',
    info: 'info'
  };

  const colors = {
    success: 'border-status-healthy/40 text-status-healthy shadow-[0_0_15px_rgba(16,185,129,0.15)]',
    error: 'border-status-critical/40 text-status-critical shadow-[0_0_15px_rgba(239,68,68,0.15)]',
    warning: 'border-status-warning/40 text-status-warning shadow-[0_0_15px_rgba(245,158,11,0.15)]',
    info: 'border-secondary/40 text-secondary shadow-[0_0_15px_rgba(6,182,212,0.15)]'
  };

  const toast = document.createElement('div');
  toast.className = `pointer-events-auto flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border bg-surface/95 backdrop-blur-md ${colors[type] || colors.info} w-full sm:w-auto min-w-[240px] max-w-full sm:max-w-md shadow-2xl animate-toast`;
  
  toast.innerHTML = `
    <span class="material-symbols-outlined text-[20px] shrink-0">${icons[type] || 'info'}</span>
    <div class="flex-1 text-xs font-medium text-on-surface leading-tight font-mono">${message}</div>
    <button class="toast-close text-on-surface-variant hover:text-on-surface p-1">
      <span class="material-symbols-outlined text-[16px]">close</span>
    </button>
  `;

  container.appendChild(toast);

  const closeBtn = toast.querySelector('.toast-close');
  const removeToast = () => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.2s ease';
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 200);
  };

  if (closeBtn) {
    closeBtn.addEventListener('click', removeToast);
  }

  setTimeout(removeToast, duration);
}
