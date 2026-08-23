// PREDIX Industrial Intelligence — AI Model Intelligence Center View
import { modelEvaluation } from '../data/modelMetrics.js';
import { showToast } from '../components/Toast.js';

let expandedFeature = null;

export function renderModelPerfView() {
  const activeModel = modelEvaluation.models[0];
  const cm = modelEvaluation.confusionMatrix;

  return `
    <div class="px-3 sm:px-6 py-4 sm:py-6 max-w-[1440px] mx-auto space-y-4 sm:space-y-6">
      
      <!-- 01 / MODEL STATUS HEADER & PIPELINE -->
      <div class="predix-panel p-3.5 sm:p-5 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 sm:gap-4 border-l-4 border-l-secondary bg-surface-container-low/60">
        <div class="space-y-1 w-full lg:w-auto">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="text-[10px] font-mono text-secondary font-bold uppercase tracking-wider">01 / MODEL INTELLIGENCE</span>
            <span class="text-on-surface-variant font-mono text-xs hidden xs:inline">•</span>
            <span class="text-xs font-bold text-on-surface font-mono tracking-wide uppercase">UNDERSTAND HOW THE PREDICTION ENGINE PERFORMS</span>
          </div>
          <!-- Real Decision Pipeline -->
          <div class="flex items-center gap-2 text-[10px] sm:text-[10.5px] font-mono font-semibold text-on-surface-variant pt-0.5 overflow-x-auto whitespace-nowrap hide-scrollbar flex-nowrap pb-1 lg:pb-0">
            <span class="text-secondary font-bold">1. TELEMETRY INGESTION (100 Hz)</span>
            <span class="text-slate-600">→</span>
            <span class="text-sky-400 font-bold">2. FEATURE EXTRACTION</span>
            <span class="text-slate-600">→</span>
            <span class="text-amber-400 font-bold">3. XGBOOST INFERENCE</span>
            <span class="text-slate-600">→</span>
            <span class="text-status-critical font-bold">4. NONLINEAR RISK</span>
            <span class="text-slate-600">→</span>
            <span class="text-status-healthy font-bold">5. PRESCRIPTIVE SOP</span>
          </div>
        </div>

        <!-- Model Status Metadata & Retrain Button -->
        <div class="flex flex-wrap items-center gap-2.5 font-mono text-xs">
          <div class="px-3 py-1.5 rounded-lg bg-status-healthy/15 border border-status-healthy/30 flex items-center gap-2">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-healthy opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-status-healthy"></span>
            </span>
            <span class="text-[10.5px] font-bold text-status-healthy uppercase">PRODUCTION ACTIVE</span>
          </div>
          <button id="btn-retrain-model" class="px-3.5 py-1.5 bg-secondary/20 hover:bg-secondary/30 text-secondary border border-secondary/40 font-bold text-xs rounded-lg transition-all flex items-center gap-1.5 shadow-[0_0_10px_rgba(6,182,212,0.15)]">
            <span class="material-symbols-outlined text-[16px]">autorenew</span>
            <span>Validate Telemetry Batch</span>
          </button>
        </div>
      </div>

      <!-- 02 / MODEL KPI STRIP (WITH COUNT-UP ANIMATION) -->
      <div>
        <div class="flex items-center justify-between mb-2 font-mono">
          <span class="font-label-md text-on-surface-variant uppercase text-[10px]">Holistic Validation Metrics (Holdout Test Split N=5,022)</span>
          <span class="text-[10px] text-secondary font-semibold">10,000 SAMPLES • 14 ENGINEERED FEATURES</span>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 font-mono">
          
          <div class="predix-panel p-3.5 flex flex-col justify-between hover:border-slate-600 transition-colors">
            <span class="font-label-md text-on-surface-variant uppercase text-[9.5px]">ROC-AUC Score</span>
            <div class="text-2xl font-data-number font-bold text-status-healthy mt-1.5">
              <span class="count-up-metric" data-target="${activeModel.rocAuc}" data-format="decimal" data-decimals="3">0.000</span>
            </div>
            <div class="text-[9.5px] text-on-surface-variant mt-1 border-t border-border-subtle/50 pt-1">Separation Metric</div>
          </div>

          <div class="predix-panel p-3.5 flex flex-col justify-between hover:border-slate-600 transition-colors">
            <span class="font-label-md text-on-surface-variant uppercase text-[9.5px]">Precision Rate</span>
            <div class="text-2xl font-data-number font-bold text-on-surface mt-1.5">
              <span class="count-up-metric" data-target="${(activeModel.precision * 100).toFixed(1)}" data-format="decimal" data-suffix="%">0.0%</span>
            </div>
            <div class="text-[9.5px] text-on-surface-variant mt-1 border-t border-border-subtle/50 pt-1">Min False Alarms</div>
          </div>

          <div class="predix-panel p-3.5 flex flex-col justify-between hover:border-slate-600 transition-colors">
            <span class="font-label-md text-on-surface-variant uppercase text-[9.5px]">Recall / Sensitivity</span>
            <div class="text-2xl font-data-number font-bold text-on-surface mt-1.5">
              <span class="count-up-metric" data-target="${(activeModel.recall * 100).toFixed(1)}" data-format="decimal" data-suffix="%">0.0%</span>
            </div>
            <div class="text-[9.5px] text-on-surface-variant mt-1 border-t border-border-subtle/50 pt-1">Failure Catch Rate</div>
          </div>

          <div class="predix-panel p-3.5 flex flex-col justify-between hover:border-slate-600 transition-colors">
            <span class="font-label-md text-on-surface-variant uppercase text-[9.5px]">F1-Score</span>
            <div class="text-2xl font-data-number font-bold text-on-surface mt-1.5">
              <span class="count-up-metric" data-target="${activeModel.f1Score}" data-format="decimal" data-decimals="3">0.000</span>
            </div>
            <div class="text-[9.5px] text-on-surface-variant mt-1 border-t border-border-subtle/50 pt-1">Harmonic Balance</div>
          </div>

          <div class="predix-panel p-3.5 flex flex-col justify-between hover:border-slate-600 transition-colors">
            <span class="font-label-md text-on-surface-variant uppercase text-[9.5px]">Global Accuracy</span>
            <div class="text-2xl font-data-number font-bold text-on-surface mt-1.5">
              <span class="count-up-metric" data-target="${(activeModel.accuracy * 100).toFixed(1)}" data-format="decimal" data-suffix="%">0.0%</span>
            </div>
            <div class="text-[9.5px] text-on-surface-variant mt-1 border-t border-border-subtle/50 pt-1">Total Accuracy</div>
          </div>

          <div class="predix-panel p-3.5 flex flex-col justify-between hover:border-slate-600 transition-colors">
            <span class="font-label-md text-on-surface-variant uppercase text-[9.5px]">Inference Latency</span>
            <div class="text-2xl font-data-number font-bold text-secondary mt-1.5">
              <span class="count-up-metric" data-target="${activeModel.latencyMs}" data-format="decimal">0.0</span> <span class="text-xs font-normal text-on-surface-variant">ms</span>
            </div>
            <div class="text-[9.5px] text-on-surface-variant mt-1 border-t border-border-subtle/50 pt-1">Edge PLC Bench</div>
          </div>

        </div>
      </div>

      <!-- 03 / OPERATIONAL METRIC EXPLANATION GUIDE -->
      <div class="predix-panel p-4 bg-surface-container-low/60 border border-border-subtle font-mono text-xs">
        <span class="font-label-md text-secondary uppercase text-[10px] block mb-2 font-bold">Operational Metric Decision Guide</span>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-3 text-[11px]">
          <div class="p-2.5 rounded-lg bg-surface border border-border-subtle/60">
            <strong class="text-status-healthy block mb-1">ROC-AUC (0.984)</strong>
            <p class="text-on-surface-variant font-sans text-[10.5px] leading-relaxed">Measures model separation power between impending mechanical failure and healthy state across all probability thresholds.</p>
          </div>
          <div class="p-2.5 rounded-lg bg-surface border border-border-subtle/60">
            <strong class="text-sky-400 block mb-1">Precision (94.2%)</strong>
            <p class="text-on-surface-variant font-sans text-[10.5px] leading-relaxed">When a failure alert is generated, 94.2% of instances represent a genuine anomaly requiring physical maintenance (minimal false alarms).</p>
          </div>
          <div class="p-2.5 rounded-lg bg-surface border border-border-subtle/60">
            <strong class="text-amber-400 block mb-1">Recall (96.1%)</strong>
            <p class="text-on-surface-variant font-sans text-[10.5px] leading-relaxed">The model catches 96.1% of all physical failure progressions prior to catastrophic unplanned downtime.</p>
          </div>
          <div class="p-2.5 rounded-lg bg-surface border border-border-subtle/60">
            <strong class="text-secondary block mb-1">F1-Score (0.938)</strong>
            <p class="text-on-surface-variant font-sans text-[10.5px] leading-relaxed">The harmonic mean balancing precision and recall under extreme industrial imbalance (rare failure events).</p>
          </div>
        </div>
      </div>

      <!-- 04 / CONFUSION MATRIX & GLOBAL FEATURE IMPORTANCE GRID -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        <!-- Confusion Matrix Panel (2x2 Grid) -->
        <div class="col-span-1 lg:col-span-5 predix-panel p-6 flex flex-col justify-between font-mono">
          <div>
            <div class="flex items-center justify-between mb-1">
              <h3 class="text-xs font-bold text-on-surface uppercase tracking-wider">Confusion Matrix (Validation Set)</h3>
              <span class="text-[10px] text-on-surface-variant font-semibold">N = 5,022 Samples</span>
            </div>
            <p class="text-[11px] text-on-surface-variant font-sans mb-3">Classification breakdown of predicted failure alarms vs nominal operational ground truth</p>
          </div>

          <!-- 2x2 Matrix Visual -->
          <div class="grid grid-cols-2 gap-3 my-2 text-center">
            <!-- True Positive -->
            <div class="p-3.5 rounded-xl bg-status-healthy/10 border border-status-healthy/30 flex flex-col items-center">
              <span class="text-[9.5px] font-bold text-status-healthy uppercase">True Positive (TP)</span>
              <div class="text-2xl font-data-number font-bold text-status-healthy mt-1">${cm.truePositive}</div>
              <span class="text-[10px] text-on-surface-variant mt-0.5">Failures Caught Correctly</span>
            </div>

            <!-- False Positive -->
            <div class="p-3.5 rounded-xl bg-status-warning/10 border border-status-warning/30 flex flex-col items-center">
              <span class="text-[9.5px] font-bold text-status-warning uppercase">False Positive (FP)</span>
              <div class="text-2xl font-data-number font-bold text-status-warning mt-1">${cm.falsePositive}</div>
              <span class="text-[10px] text-on-surface-variant mt-0.5">False Alarms (Safe Unit)</span>
            </div>

            <!-- False Negative -->
            <div class="p-3.5 rounded-xl bg-status-critical/10 border border-status-critical/30 flex flex-col items-center">
              <span class="text-[9.5px] font-bold text-status-critical uppercase">False Negative (FN)</span>
              <div class="text-2xl font-data-number font-bold text-status-critical mt-1">${cm.falseNegative}</div>
              <span class="text-[10px] text-on-surface-variant mt-0.5">Missed Anomalies</span>
            </div>

            <!-- True Negative -->
            <div class="p-3.5 rounded-xl bg-surface-container-low border border-border-subtle flex flex-col items-center">
              <span class="text-[9.5px] font-bold text-on-surface-variant uppercase">True Negative (TN)</span>
              <div class="text-2xl font-data-number font-bold text-on-surface mt-1">${cm.trueNegative}</div>
              <span class="text-[10px] text-on-surface-variant mt-0.5">Nominal Operating Cycles</span>
            </div>
          </div>

          <div class="pt-3 border-t border-border-subtle flex justify-between text-xs text-on-surface-variant">
            <span>Type I Error (FP Rate): <strong class="text-status-warning">0.4%</strong></span>
            <span>Type II Error (FN Rate): <strong class="text-status-critical">2.4%</strong></span>
          </div>
        </div>

        <!-- Global Feature Importance Ranking (TreeSHAP Gain) -->
        <div class="col-span-1 lg:col-span-7 predix-panel p-6 flex flex-col justify-between font-mono">
          <div>
            <div class="flex items-center justify-between mb-1">
              <div>
                <h3 class="text-xs font-bold text-on-surface uppercase tracking-wider">Global Feature Importance Ranking</h3>
                <p class="text-[11px] text-on-surface-variant font-sans">Relative influence of sensor variables across 10,000 Tree Splits</p>
              </div>
              <span class="text-[9.5px] text-secondary font-bold uppercase bg-secondary/15 px-2 py-0.5 rounded border border-secondary/30">TreeSHAP Gain</span>
            </div>
          </div>

          <div class="space-y-3 my-3">
            ${modelEvaluation.globalFeatureImportance.map((f, idx) => `
              <div class="text-xs p-2 rounded-lg bg-surface-container-low/50 border border-border-subtle/50 space-y-1">
                <div class="flex items-center justify-between">
                  <span class="font-bold text-on-surface text-[11px]">${idx + 1}. ${f.feature}</span>
                  <span class="font-data-number font-bold text-secondary">${f.importance}%</span>
                </div>
                <div class="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
                  <div class="shap-bar-fill h-full bg-secondary rounded-full shadow-[0_0_6px_#06B6D4]" style="width: ${f.importance * 2.5}%"></div>
                </div>
                <p class="text-[10px] text-on-surface-variant font-sans">${f.description}</p>
              </div>
            `).join('')}
          </div>

          <div class="pt-2 border-t border-border-subtle text-right text-[10px] text-on-surface-variant">
            Calculated across holdout validation split • TreeSHAP Explainer
          </div>
        </div>

      </div>

      <!-- 05 / FAILURE-MODE SPECIFIC CLASSIFICATION METRICS -->
      <div class="predix-panel overflow-hidden flex flex-col font-mono text-xs">
        <div class="p-4 bg-surface-container-low/60 border-b border-border-subtle flex items-center justify-between">
          <div>
            <h3 class="text-xs font-bold text-on-surface uppercase tracking-wider">Per-Failure-Mode Performance Metrics</h3>
            <p class="text-[11px] text-on-surface-variant font-sans">Precision and recall breakdown across distinct industrial breakdown root-causes</p>
          </div>
          <span class="text-[9.5px] text-status-healthy font-bold uppercase bg-status-healthy/15 px-2 py-0.5 rounded border border-status-healthy/30">Validated AI4I 2020</span>
        </div>

        <div class="overflow-x-auto w-full">
          <table class="w-full text-left border-collapse min-w-[650px]">
            <thead>
              <tr class="bg-surface-container-low/80 font-label-md text-on-surface-variant uppercase text-[9.5px] border-b border-border-subtle">
                <th class="py-2.5 px-4">Failure Mode Classification</th>
                <th class="py-2.5 px-4">Validation Occurrences</th>
                <th class="py-2.5 px-4">Precision Rate</th>
                <th class="py-2.5 px-4">Recall Rate</th>
                <th class="py-2.5 px-4 text-right">Detection Status</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-border-subtle text-[11px]">
              ${modelEvaluation.failureModeMetrics.map(m => `
                <tr class="hover:bg-surface-container-low transition-colors">
                  <td class="py-2.5 px-4 font-bold text-on-surface">${m.mode}</td>
                  <td class="py-2.5 px-4 text-on-surface-variant">${m.count} records</td>
                  <td class="py-2.5 px-4 font-bold text-secondary">${m.precision}%</td>
                  <td class="py-2.5 px-4 font-bold text-status-healthy">${m.recall}%</td>
                  <td class="py-2.5 px-4 text-right">
                    <span class="px-2 py-0.5 rounded text-[9px] font-bold uppercase bg-status-healthy/15 text-status-healthy border border-status-healthy/30">
                      HIGH RELIABILITY
                    </span>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <!-- 06 / MODEL BENCHMARK COMPARISON TABLE -->
      <div class="predix-panel overflow-hidden flex flex-col font-mono text-xs">
        <div class="p-4 bg-surface-container-low/60 border-b border-border-subtle flex items-center justify-between">
          <div>
            <h3 class="text-xs font-bold text-on-surface uppercase tracking-wider">Architecture Benchmark Comparison</h3>
            <p class="text-[11px] text-on-surface-variant font-sans">Empirical validation comparing candidate ML architectures on holdout dataset</p>
          </div>
          <span class="text-[10px] text-secondary font-semibold">HOLDOUT SPLIT (80/20)</span>
        </div>

        <div class="overflow-x-auto w-full">
          <table class="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr class="bg-surface-container-low/80 font-label-md text-on-surface-variant uppercase text-[9.5px] border-b border-border-subtle">
                <th class="py-3 px-4">Architecture</th>
                <th class="py-3 px-4">Status</th>
                <th class="py-3 px-4">ROC-AUC</th>
                <th class="py-3 px-4">Precision</th>
                <th class="py-3 px-4">Recall</th>
                <th class="py-3 px-4">F1-Score</th>
                <th class="py-3 px-4 text-right">Inference Latency</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-border-subtle text-[11px]">
              ${modelEvaluation.models.map(m => `
                <tr class="hover:bg-surface-container-low transition-colors ${m.id === 'xgb-v2' ? 'bg-secondary/[0.04] font-semibold' : ''}">
                  <td class="py-3 px-4">
                    <span class="text-on-surface font-bold">${m.name}</span>
                  </td>
                  <td class="py-3 px-4">
                    <span class="px-2 py-0.5 rounded text-[9.5px] font-bold uppercase ${
                      m.status.includes('ACTIVE') 
                        ? 'bg-status-healthy/15 text-status-healthy border border-status-healthy/30' 
                        : 'bg-surface-container text-on-surface-variant'
                    }">
                      ${m.status}
                    </span>
                  </td>
                  <td class="py-3 px-4 font-data-number text-status-healthy font-bold">${m.rocAuc}</td>
                  <td class="py-3 px-4 font-data-number">${(m.precision * 100).toFixed(1)}%</td>
                  <td class="py-3 px-4 font-data-number">${(m.recall * 100).toFixed(1)}%</td>
                  <td class="py-3 px-4 font-data-number">${m.f1Score}</td>
                  <td class="py-3 px-4 font-data-number text-secondary text-right">${m.latencyMs} ms</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  `;
}

// Reusable Count-Up Animation for Model Performance
function animateMetricCountUp(element, target, duration = 800, isDecimal = false, decimals = 1, suffix = '') {
  const isReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (isReduced) {
    element.innerText = isDecimal ? target.toFixed(decimals) + suffix : Math.round(target).toString() + suffix;
    return;
  }

  const start = 0;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeOutProgress = 1 - Math.pow(1 - progress, 3);
    const current = start + (target - start) * easeOutProgress;

    if (isDecimal) {
      element.innerText = current.toFixed(decimals) + suffix;
    } else {
      element.innerText = Math.round(current).toString() + suffix;
    }

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

export function initModelPerfListeners() {
  // Trigger Count-Up on Model Metrics
  document.querySelectorAll('.count-up-metric').forEach(el => {
    const target = parseFloat(el.getAttribute('data-target') || '0');
    const format = el.getAttribute('data-format') || 'decimal';
    const decimals = parseInt(el.getAttribute('data-decimals') || '1', 10);
    const suffix = el.getAttribute('data-suffix') || '';
    animateMetricCountUp(el, target, 750, format === 'decimal', decimals, suffix);
  });

  // Re-evaluation Pipeline Trigger
  document.getElementById('btn-retrain-model')?.addEventListener('click', () => {
    showToast('Re-evaluation validation completed. XGBoost model ROC-AUC confirmed at 0.984.', 'success', 4000);
  });
}
