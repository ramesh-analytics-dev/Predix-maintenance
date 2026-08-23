// PREDIX Industrial Intelligence — Telemetry & Predictive Analytics View
import { fleetAssets } from '../data/fleetData.js';
import { generateTelemetrySeries, failureParetoData } from '../data/telemetryData.js';
import { showToast } from '../components/Toast.js';
import Chart from 'chart.js/auto';

let activeSensorHours = 24;
let activeTelemetryMachine = 'CNC-04';
let telemetryChartInstance = null;
let paretoChartInstance = null;

export function renderAnalyticsView() {
  return `
    <div class="px-3 sm:px-6 py-4 sm:py-6 max-w-[1440px] mx-auto space-y-4 sm:space-y-6">
      
      <!-- 01 / ANALYTICS HEADER & RELIABILITY METRICS -->
      <div class="predix-panel p-3.5 sm:p-5 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 sm:gap-4 border-l-4 border-l-secondary bg-surface-container-low/60">
        <div class="space-y-1 w-full lg:w-auto">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="text-[10px] font-mono text-secondary font-bold uppercase tracking-wider">01 / PREDICTIVE ANALYTICS</span>
            <span class="text-on-surface-variant font-mono text-xs hidden xs:inline">•</span>
            <span class="text-xs font-bold text-on-surface font-mono tracking-wide uppercase">TELEMETRY WAVEFORMS & RELIABILITY ENGINEERING</span>
          </div>
          <p class="text-xs text-on-surface-variant max-w-2xl mt-1 font-sans">
            Continuous multi-signal time-series telemetry analysis, 80/20 failure mode Pareto breakdown, and MTBF reliability tracking across plant operations.
          </p>
        </div>

        <!-- Reliability KPI Badges -->
        <div class="flex flex-wrap items-center gap-2 sm:gap-3 font-mono w-full sm:w-auto">
          <div class="px-3.5 py-2 rounded-lg bg-surface-container-low border border-border-subtle flex flex-col flex-1 sm:flex-initial min-w-[120px]">
            <span class="text-[9.5px] text-on-surface-variant uppercase">Mean Time Between Failures</span>
            <div class="text-lg sm:text-xl font-data-number font-bold text-on-surface mt-0.5">
              1,420 <span class="text-xs font-normal text-on-surface-variant">Hours</span>
            </div>
          </div>
          <div class="px-3.5 py-2 rounded-lg bg-status-healthy/15 border border-status-healthy/30 flex flex-col flex-1 sm:flex-initial min-w-[120px]">
            <span class="text-[9.5px] text-status-healthy uppercase font-bold">Avoided Downtime Cost</span>
            <div class="text-lg sm:text-xl font-data-number font-bold text-status-healthy mt-0.5">
              $142,500 <span class="text-xs font-normal text-on-surface-variant">YTD</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 02 / TIME-SERIES SENSOR TELEMETRY WAVEFORM CARD -->
      <div class="predix-panel p-6 flex flex-col gap-4">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border-subtle font-mono">
          <div>
            <h3 class="text-xs font-bold text-on-surface uppercase tracking-wider">Multi-Sensor Telemetry Time-Series Waveform</h3>
            <span class="text-[10px] text-on-surface-variant">Spindle Temperature, Vibration Amplitude, and Predicted Failure Risk Trajectory</span>
          </div>

          <div class="flex flex-wrap items-center gap-2 text-xs">
            <!-- Machine Selector -->
            <select id="analytics-machine-select" class="bg-surface-container-low border border-border-subtle rounded-lg px-3 py-1.5 text-xs font-bold text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary cursor-pointer font-mono">
              ${fleetAssets.map(m => `
                <option value="${m.id}" ${m.id === activeTelemetryMachine ? 'selected' : ''}>
                  ${m.id} (${m.name})
                </option>
              `).join('')}
            </select>

            <!-- Time Horizon Toggle -->
            <div class="flex items-center gap-1 bg-surface-container-low p-1 rounded-lg border border-border-subtle">
              ${[
                { hours: 24, label: '24H' },
                { hours: 168, label: '7D' },
                { hours: 720, label: '30D' }
              ].map(h => `
                <button data-hours="${h.hours}" class="btn-time-toggle px-2.5 py-1 rounded text-xs font-semibold transition-all ${
                  activeSensorHours === h.hours ? 'bg-secondary/20 text-secondary border border-secondary/40 shadow-sm' : 'text-on-surface-variant hover:text-on-surface'
                }">
                  ${h.label}
                </button>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Waveform Distinction Legend -->
        <div class="flex flex-wrap items-center justify-between gap-3 text-[10px] font-mono border-b border-border-subtle/50 pb-2">
          <div class="flex items-center gap-4">
            <span class="flex items-center gap-1.5"><span class="w-3 h-0.5 bg-[#EF4444]"></span> Observed Temperature (°C)</span>
            <span class="flex items-center gap-1.5"><span class="w-3 h-0.5 bg-[#06B6D4]"></span> Observed Vibration (mm/s)</span>
            <span class="flex items-center gap-1.5 text-amber-400 font-semibold"><span class="w-3 h-0.5 border-t-2 border-dashed border-amber-400"></span> Predicted Risk (%)</span>
          </div>
          <span class="text-status-healthy font-semibold">● 100 Hz Continuous Polling</span>
        </div>

        <!-- Chart Container -->
        <div class="relative h-[320px] w-full">
          <canvas id="telemetry-chart"></canvas>
        </div>
      </div>

      <!-- 03 / PARETO FAILURE MODE ROOT-CAUSE BREAKDOWN GRID -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 font-mono">
        
        <!-- Pareto Failure Mode Chart -->
        <div class="col-span-1 lg:col-span-7 predix-panel p-6 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-1">
              <h3 class="text-xs font-bold text-on-surface uppercase tracking-wider">Failure Mode Pareto Analysis</h3>
              <span class="text-[10px] text-secondary font-semibold uppercase bg-secondary/15 px-2 py-0.5 rounded border border-secondary/30">Total Occurrences: 460</span>
            </div>
            <p class="text-[11px] text-on-surface-variant font-sans mb-3">80/20 Cumulative Distribution identifying highest-yield preventive interventions</p>
          </div>

          <div class="relative h-[240px] w-full my-2">
            <canvas id="pareto-chart"></canvas>
          </div>

          <div class="pt-3 border-t border-border-subtle text-xs text-on-surface-variant flex justify-between">
            <span>Primary Driver: <strong class="text-on-surface">Tool Wear Failure (31.5%)</strong></span>
            <span>Secondary: <strong class="text-on-surface">Heat Dissipation (24.3%)</strong></span>
          </div>
        </div>

        <!-- Pareto Data Breakdown Table -->
        <div class="col-span-1 lg:col-span-5 predix-panel p-6 flex flex-col justify-between">
          <div class="flex items-center justify-between mb-3 pb-2 border-b border-border-subtle">
            <h3 class="text-xs font-bold text-on-surface uppercase tracking-wider">Failure Mode Breakdown</h3>
            <span class="text-[9.5px] text-secondary font-bold uppercase bg-secondary/15 px-2 py-0.5 rounded border border-secondary/30">Cumulative %</span>
          </div>

          <div class="divide-y divide-border-subtle text-xs flex-1">
            ${failureParetoData.map(item => `
              <div class="py-2.5 flex items-center justify-between">
                <div>
                  <div class="font-bold text-on-surface text-[11px]">${item.reason}</div>
                  <div class="text-[10px] text-on-surface-variant">Recorded Incidents: ${item.count}</div>
                </div>
                <div class="text-right">
                  <div class="font-data-number font-bold text-secondary text-sm">${item.percentage}%</div>
                  <div class="text-[10px] text-on-surface-variant">Cumulative: ${item.cumulative}%</div>
                </div>
              </div>
            `).join('')}
          </div>

          <div class="pt-3 border-t border-border-subtle text-[11px] text-on-surface-variant font-sans">
            Targeting TWF and HDF eliminates <strong class="text-secondary font-mono">55.8%</strong> of unexpected factory downtime.
          </div>
        </div>

      </div>

    </div>
  `;
}

export function initAnalyticsListeners() {
  const initCharts = () => {
    // 1. Telemetry Chart
    const ctx = document.getElementById('telemetry-chart')?.getContext('2d');
    if (ctx) {
      if (telemetryChartInstance) telemetryChartInstance.destroy();

      const data = generateTelemetrySeries(activeSensorHours, activeTelemetryMachine);

      telemetryChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
          labels: data.timestamps,
          datasets: [
            {
              label: 'Observed Temp (°C)',
              data: data.tempSeries,
              borderColor: '#EF4444',
              backgroundColor: 'rgba(239, 68, 68, 0.08)',
              borderWidth: 2,
              pointRadius: 2,
              pointHoverRadius: 5,
              tension: 0.35,
              yAxisID: 'y'
            },
            {
              label: 'Observed Vibration (mm/s)',
              data: data.vibrationSeries,
              borderColor: '#06B6D4',
              backgroundColor: 'rgba(6, 182, 212, 0.08)',
              borderWidth: 2,
              pointRadius: 2,
              pointHoverRadius: 5,
              tension: 0.35,
              yAxisID: 'y1'
            },
            {
              label: 'Predicted Failure Risk (%)',
              data: data.riskSeries,
              borderColor: '#F59E0B',
              borderDash: [5, 5],
              borderWidth: 2,
              pointRadius: 0,
              tension: 0.2,
              yAxisID: 'y2'
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          animation: {
            duration: window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 800,
            easing: 'easeOutQuart'
          },
          interaction: {
            mode: 'index',
            intersect: false
          },
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              backgroundColor: '#080C14',
              borderColor: 'rgba(148, 163, 184, 0.25)',
              borderWidth: 1,
              titleFont: { family: 'JetBrains Mono', size: 12 },
              bodyFont: { family: 'JetBrains Mono', size: 11 },
              titleColor: '#F8FAFC',
              bodyColor: '#94A3B8'
            }
          },
          scales: {
            x: {
              grid: { color: 'rgba(148, 163, 184, 0.06)' },
              ticks: { color: '#64748B', font: { family: 'JetBrains Mono', size: 9 } }
            },
            y: {
              type: 'linear',
              position: 'left',
              title: { display: true, text: 'Temp (°C)', color: '#EF4444', font: { size: 9, family: 'JetBrains Mono' } },
              grid: { color: 'rgba(148, 163, 184, 0.06)' },
              ticks: { color: '#64748B', font: { family: 'JetBrains Mono', size: 9 } }
            },
            y1: {
              type: 'linear',
              position: 'right',
              title: { display: true, text: 'Vibration (mm/s)', color: '#06B6D4', font: { size: 9, family: 'JetBrains Mono' } },
              grid: { drawOnChartArea: false },
              ticks: { color: '#64748B', font: { family: 'JetBrains Mono', size: 9 } }
            },
            y2: {
              type: 'linear',
              position: 'right',
              min: 0,
              max: 100,
              display: false,
              grid: { drawOnChartArea: false }
            }
          }
        }
      });
    }

    // 2. Pareto Chart
    const pCtx = document.getElementById('pareto-chart')?.getContext('2d');
    if (pCtx) {
      if (paretoChartInstance) paretoChartInstance.destroy();

      paretoChartInstance = new Chart(pCtx, {
        type: 'bar',
        data: {
          labels: ['TWF', 'HDF', 'OSF', 'PWF', 'RNF'],
          datasets: [
            {
              type: 'bar',
              label: 'Occurrences',
              data: failureParetoData.map(d => d.count),
              backgroundColor: '#1E293B',
              borderColor: 'rgba(148, 163, 184, 0.3)',
              borderWidth: 1,
              borderRadius: 6,
              yAxisID: 'y'
            },
            {
              type: 'line',
              label: 'Cumulative %',
              data: failureParetoData.map(d => d.cumulative),
              borderColor: '#06B6D4',
              backgroundColor: '#06B6D4',
              borderWidth: 2,
              pointRadius: 4,
              yAxisID: 'y1'
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          animation: {
            duration: window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 800,
            easing: 'easeOutQuart'
          },
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              backgroundColor: '#080C14',
              borderColor: 'rgba(148, 163, 184, 0.25)',
              borderWidth: 1,
              titleFont: { family: 'JetBrains Mono', size: 12 },
              bodyFont: { family: 'JetBrains Mono', size: 11 },
              titleColor: '#F8FAFC',
              bodyColor: '#94A3B8'
            }
          },
          scales: {
            x: {
              grid: { color: 'rgba(148, 163, 184, 0.06)' },
              ticks: { color: '#94A3B8', font: { family: 'JetBrains Mono', size: 10 } }
            },
            y: {
              title: { display: true, text: 'Failure Count', color: '#94A3B8', font: { size: 9, family: 'JetBrains Mono' } },
              grid: { color: 'rgba(148, 163, 184, 0.06)' },
              ticks: { color: '#64748B', font: { family: 'JetBrains Mono', size: 9 } }
            },
            y1: {
              position: 'right',
              min: 0,
              max: 100,
              title: { display: true, text: 'Cumulative %', color: '#06B6D4', font: { size: 9, family: 'JetBrains Mono' } },
              grid: { drawOnChartArea: false },
              ticks: { color: '#64748B', font: { family: 'JetBrains Mono', size: 9 } }
            }
          }
        }
      });
    }
  };

  initCharts();

  // Machine selector handler
  document.getElementById('analytics-machine-select')?.addEventListener('change', (e) => {
    activeTelemetryMachine = e.target.value;
    initCharts();
  });

  // Time toggle handler
  document.querySelectorAll('.btn-time-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      activeSensorHours = parseInt(btn.getAttribute('data-hours'), 10);
      document.querySelectorAll('.btn-time-toggle').forEach(b => {
        const active = parseInt(b.getAttribute('data-hours'), 10) === activeSensorHours;
        b.className = `btn-time-toggle px-2.5 py-1 rounded text-xs font-semibold transition-all ${
          active ? 'bg-secondary/20 text-secondary border border-secondary/40 shadow-sm' : 'text-on-surface-variant hover:text-on-surface'
        }`;
      });
      initCharts();
    });
  });
}
