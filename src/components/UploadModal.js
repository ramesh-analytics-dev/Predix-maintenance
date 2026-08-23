// PREDIX Industrial Intelligence — Custom Dataset Upload & Real-Time Processing Modal Component
import { parseCSVText, processAndScoreDataset, getSampleAI4ICSV, getSampleCMAPSSCSV } from '../utils/datasetParser.js';
import { addCustomDataset } from '../data/fleetData.js';
import { showToast } from './Toast.js';

export function openUploadModal(onSuccess = null) {
  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) return;

  const modalHtml = `
    <div id="upload-modal-backdrop" class="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-2 sm:p-4 animate-modal-backdrop">
      <div class="bg-surface w-full max-w-xl rounded-xl sm:rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-border-subtle overflow-hidden flex flex-col max-h-[96vh] sm:max-h-[90vh] animate-modal my-auto">
        <!-- Header -->
        <div class="px-4 py-3 sm:px-6 sm:py-4 bg-surface-container-low/90 border-b border-border-subtle text-on-surface flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-secondary/15 border border-secondary/30 text-secondary flex items-center justify-center shadow-[0_0_10px_rgba(6,182,212,0.15)] shrink-0">
              <span class="material-symbols-outlined text-[20px] sm:text-[22px]">upload_file</span>
            </div>
            <div class="min-w-0">
              <h3 class="font-bold text-xs sm:text-sm text-on-surface font-mono leading-tight truncate">Ingest Custom Telemetry Dataset</h3>
              <p class="text-[10px] sm:text-[11px] text-on-surface-variant font-mono mt-0.5 truncate">Upload CSV/JSON for Real-Time AI Inference Scoring</p>
            </div>
          </div>
          <button id="btn-close-upload-modal" class="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors shrink-0">
            <span class="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <!-- Body Content -->
        <div class="p-4 sm:p-6 space-y-3.5 sm:space-y-4 text-xs overflow-y-auto">
          <!-- Drag & Drop Upload Zone -->
          <div id="drop-zone" class="border-2 border-dashed border-border-subtle rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center gap-2 text-center bg-surface-container-low/40 hover:bg-surface-container-low hover:border-secondary transition-all cursor-pointer group">
            <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-secondary/15 text-secondary border border-secondary/30 flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_10px_rgba(6,182,212,0.15)]">
              <span class="material-symbols-outlined text-[24px] sm:text-[28px]">cloud_upload</span>
            </div>
            <div>
              <span class="font-bold text-xs sm:text-sm text-on-surface font-mono">Click to upload or drag & drop</span>
              <p class="text-[10px] sm:text-[11px] text-on-surface-variant font-mono mt-0.5">Supports industrial CSV or JSON files (up to 50MB)</p>
            </div>
            <input type="file" id="file-input" accept=".csv,.json" class="hidden">
            <div class="text-[9.5px] sm:text-[10px] font-mono px-2.5 py-1 rounded bg-surface border border-border-subtle text-on-surface-variant mt-2">
              Auto-maps: Machine ID, Temp, Torque, RPM, Tool Wear, Vibration, Pressure
            </div>
          </div>

          <!-- Processing Progress (Hidden by default) -->
          <div id="upload-progress-container" class="hidden p-4 rounded-xl bg-surface-container-low border border-border-subtle space-y-2 font-mono">
            <div class="flex items-center justify-between text-xs">
              <span id="upload-progress-status" class="font-bold text-secondary flex items-center gap-1.5">
                <span class="material-symbols-outlined text-[16px] animate-spin">sync</span>
                <span>Running Predictive Scoring Pipeline...</span>
              </span>
              <span id="upload-progress-pct" class="font-bold text-secondary">0%</span>
            </div>
            <div class="w-full bg-surface-container h-2 rounded-full overflow-hidden">
              <div id="upload-progress-bar" class="h-full bg-secondary shadow-[0_0_8px_#06B6D4] transition-all duration-300 w-0"></div>
            </div>
          </div>

          <!-- 1-Click Sample Preloads -->
          <div class="pt-2 border-t border-border-subtle font-mono">
            <span class="font-label-md text-on-surface-variant uppercase text-[10px] block mb-2">Or test instantly with pre-packaged telemetry:</span>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <button id="btn-load-sample-ai4i" class="p-2.5 rounded-xl bg-surface-container-low hover:bg-surface-container border border-border-subtle text-left transition-all flex items-center gap-2 group">
                <span class="material-symbols-outlined text-[18px] text-secondary group-hover:scale-110 transition-transform">precision_manufacturing</span>
                <div>
                  <div class="font-bold text-on-surface text-xs">AI4I 2020 Sample</div>
                  <div class="text-[10px] text-on-surface-variant font-mono">10 CNC & Lathe records</div>
                </div>
              </button>
              <button id="btn-load-sample-cmapss" class="p-2.5 rounded-xl bg-surface-container-low hover:bg-surface-container border border-border-subtle text-left transition-all flex items-center gap-2 group">
                <span class="material-symbols-outlined text-[18px] text-secondary group-hover:scale-110 transition-transform">rocket_launch</span>
                <div>
                  <div class="font-bold text-on-surface text-xs">NASA C-MAPSS Sample</div>
                  <div class="text-[10px] text-on-surface-variant font-mono">7 Turbofan Degradation rows</div>
                </div>
              </button>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="px-6 py-3 bg-surface-container-low/90 border-t border-border-subtle flex items-center justify-between text-xs font-mono">
          <span class="text-on-surface-variant">Instant in-browser edge AI processing</span>
          <button id="btn-cancel-upload" class="px-3 py-1.5 rounded-lg border border-border-subtle bg-surface-container hover:bg-surface-container-high text-on-surface font-semibold transition-all">
            Cancel
          </button>
        </div>
      </div>
    </div>
  `;

  modalRoot.innerHTML = modalHtml;

  const closeModal = () => {
    modalRoot.innerHTML = '';
  };

  document.getElementById('btn-close-upload-modal')?.addEventListener('click', closeModal);
  document.getElementById('btn-cancel-upload')?.addEventListener('click', closeModal);
  document.getElementById('upload-modal-backdrop')?.addEventListener('click', (e) => {
    if (e.target.id === 'upload-modal-backdrop') closeModal();
  });

  const dropZone = document.getElementById('drop-zone');
  const fileInput = document.getElementById('file-input');

  dropZone?.addEventListener('click', () => fileInput?.click());
  dropZone?.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('border-secondary', 'bg-secondary/10');
  });
  dropZone?.addEventListener('dragleave', () => {
    dropZone.classList.remove('border-secondary', 'bg-secondary/10');
  });
  dropZone?.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('border-secondary', 'bg-secondary/10');
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  });

  fileInput?.addEventListener('change', (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  });

  // Sample preload handlers
  document.getElementById('btn-load-sample-ai4i')?.addEventListener('click', () => {
    processRawText(getSampleAI4ICSV(), "Sample AI4I 2020 Dataset");
  });

  document.getElementById('btn-load-sample-cmapss')?.addEventListener('click', () => {
    processRawText(getSampleCMAPSSCSV(), "Sample NASA C-MAPSS Dataset");
  });

  const handleFile = (file) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      processRawText(event.target.result, file.name.replace(/\.[^/.]+$/, ""));
    };
    reader.readAsText(file);
  };

  const processRawText = (rawText, datasetName) => {
    const progContainer = document.getElementById('upload-progress-container');
    const progBar = document.getElementById('upload-progress-bar');
    const progPct = document.getElementById('upload-progress-pct');

    if (progContainer) progContainer.classList.remove('hidden');
    if (progBar) progBar.style.width = '35%';
    if (progPct) progPct.innerText = '35%';

    setTimeout(() => {
      try {
        if (progBar) progBar.style.width = '75%';
        if (progPct) progPct.innerText = '75%';

        let headers, rows;
        if (rawText.trim().startsWith('[') || rawText.trim().startsWith('{')) {
          // JSON
          const jsonData = JSON.parse(rawText);
          const array = Array.isArray(jsonData) ? jsonData : [jsonData];
          headers = Object.keys(array[0] || {});
          rows = array.map(item => headers.map(k => String(item[k] ?? '')));
        } else {
          // CSV
          const parsed = parseCSVText(rawText);
          headers = parsed.headers;
          rows = parsed.rows;
        }

        const scoredAssets = processAndScoreDataset(headers, rows, datasetName);
        addCustomDataset(datasetName, scoredAssets);

        if (progBar) progBar.style.width = '100%';
        if (progPct) progPct.innerText = '100%';

        setTimeout(() => {
          closeModal();
          showToast(`Successfully ingested and scored ${scoredAssets.length} machines from "${datasetName}"!`, 'success', 5000);
          if (onSuccess) {
            onSuccess(datasetName, scoredAssets);
          } else {
            window.location.hash = '#fleet-health';
          }
        }, 400);

      } catch (err) {
        showToast(`Failed to parse dataset: ${err.message}`, 'error', 5000);
        if (progContainer) progContainer.classList.add('hidden');
      }
    }, 400);
  };
}
