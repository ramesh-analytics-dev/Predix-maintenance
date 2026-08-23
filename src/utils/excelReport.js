// Executive Excel Report & Diagnostic Dossier Generator (.xls / .csv)
// Formats high-level briefings for Plant Managers, Directors, and Higher Officials

import { getDiagnosticGuideForAsset } from '../data/diagnosticGuides.js';
import { maintenanceTeams } from '../data/teamsData.js';

/**
 * Generates and downloads a formatted, multi-section Executive Diagnostic & Resolution Report (.xls)
 * Compatible with Microsoft Excel, Google Sheets, and LibreOffice.
 */
export function generateExecutiveExcelReport(machine, workOrder = null) {
  if (!machine) return;

  const guide = getDiagnosticGuideForAsset(machine);
  const team = maintenanceTeams.find(t => t.id === guide.recommendedTeamId) || maintenanceTeams[0];
  const now = new Date();
  const dateStr = now.toLocaleDateString() + ' ' + now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const reportId = `REP-${machine.id}-${Math.floor(1000 + Math.random() * 9000)}`;

  const isCritical = machine.riskLevel === 'Critical';
  const statusColor = isCritical ? '#dc2626' : machine.riskLevel === 'High' ? '#d97706' : '#059669';

  const xlsContent = `
    <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
    <head>
      <meta charset="utf-8">
      <!--[if gte mso 9]>
      <xml>
        <x:ExcelWorkbook>
          <x:ExcelWorksheets>
            <x:ExcelWorksheet>
              <x:Name>Executive Diagnostic Dossier</x:Name>
              <x:WorksheetOptions>
                <x:DisplayGridlines/>
              </x:WorksheetOptions>
            </x:ExcelWorksheet>
          </x:ExcelWorksheets>
        </x:ExcelWorkbook>
      </xml>
      <![endif]-->
      <style>
        body { font-family: 'Segoe UI', Arial, sans-serif; font-size: 11pt; color: #1e293b; }
        .header-table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
        .header-title { font-size: 16pt; font-weight: bold; color: #091426; background-color: #f1f5f9; padding: 12px; border-bottom: 2px solid #091426; }
        .meta-label { font-weight: bold; color: #475569; font-size: 9.5pt; width: 220px; background-color: #f8fafc; border: 1px solid #e2e8f0; padding: 6px 10px; }
        .meta-val { color: #0f172a; border: 1px solid #e2e8f0; padding: 6px 10px; }
        .section-title { font-size: 13pt; font-weight: bold; color: #ffffff; background-color: #091426; padding: 8px 12px; margin-top: 25px; margin-bottom: 8px; }
        .sub-table { width: 100%; border-collapse: collapse; margin-bottom: 15px; }
        .sub-table th { background-color: #1e293b; color: #ffffff; font-weight: bold; text-align: left; padding: 8px; border: 1px solid #cbd5e1; font-size: 10pt; }
        .sub-table td { padding: 7px 10px; border: 1px solid #cbd5e1; font-size: 10pt; }
        .highlight-critical { background-color: #fee2e2; color: #991b1b; font-weight: bold; }
        .highlight-warning { background-color: #fef3c7; color: #92400e; font-weight: bold; }
        .highlight-healthy { background-color: #d1fae5; color: #065f46; font-weight: bold; }
        .signoff-box { border: 2px dashed #94a3b8; background-color: #f8fafc; padding: 15px; margin-top: 25px; }
      </style>
    </head>
    <body>
      <!-- Document Header -->
      <table class="header-table">
        <tr>
          <td colspan="4" class="header-title">
            PREDIX INDUSTRIAL INTELLIGENCE ENGINE — EXECUTIVE DIAGNOSTIC & RESOLUTION DOSSIER
          </td>
        </tr>
        <tr>
          <td class="meta-label">Document Report ID:</td>
          <td class="meta-val"><strong>${reportId}</strong></td>
          <td class="meta-label">Generated Timestamp:</td>
          <td class="meta-val">${dateStr}</td>
        </tr>
        <tr>
          <td class="meta-label">Industrial Facility:</td>
          <td class="meta-val">Heavy Machining & Advanced Turbomachinery Facility</td>
          <td class="meta-label">Prepared By:</td>
          <td class="meta-val">Ops Command (Lead Reliability Metrology)</td>
        </tr>
        <tr>
          <td class="meta-label">Target Asset ID & Name:</td>
          <td class="meta-val"><strong>${machine.id}</strong> — ${machine.name}</td>
          <td class="meta-label">Operational Sector:</td>
          <td class="meta-val">${machine.sector}</td>
        </tr>
      </table>

      <!-- Section 1: Executive Issue Summary & Urgency -->
      <div class="section-title">1. EXECUTIVE ISSUE SUMMARY & RISK CLASSIFICATION</div>
      <table class="sub-table">
        <tr>
          <th>Priority Rank</th>
          <th>Risk Tier</th>
          <th>Failure Probability (24h)</th>
          <th>Health Score</th>
          <th>Remaining Useful Life (RUL)</th>
          <th>Primary Failure Mechanism</th>
        </tr>
        <tr>
          <td style="font-weight: bold; font-size: 12pt;">Priority #${machine.priority}</td>
          <td style="font-weight: bold; color: ${statusColor}; font-size: 12pt;">${machine.riskLevel}</td>
          <td class="${isCritical ? 'highlight-critical' : 'highlight-warning'}">${machine.failureProbability}%</td>
          <td style="font-weight: bold;">${machine.healthScore} / 100</td>
          <td style="font-weight: bold;">${machine.rulCycles} Cycles (~${machine.rulDays} Days)</td>
          <td style="font-weight: bold;">${machine.failureType}</td>
        </tr>
        <tr>
          <td colspan="6" style="padding: 10px; background-color: #f8fafc;">
            <strong>Executive Summary for Higher Officials:</strong><br>
            ${guide.summary} The asset has triggered a critical telemetry alarm on <strong>${machine.keyIndicator}</strong>. Failure probability is calculated at ${machine.failureProbability}% with estimated continuous operational endurance remaining of ${machine.timeToFailure || (machine.rulDays + ' days')}. Immediate intervention is recommended to prevent catastrophic failure, unintended plant downtime, and collateral spindle assembly damage.
          </td>
        </tr>
      </table>

      <!-- Section 2: Sensor Telemetry Anomaly Readings -->
      <div class="section-title">2. LIVE TELEMETRY MATRIX & ALARM THRESHOLDS</div>
      <table class="sub-table">
        <tr>
          <th>Sensor Variable</th>
          <th>Current Reading</th>
          <th>Nominal Baseline</th>
          <th>Safety Threshold Limit</th>
          <th>Variance Status</th>
        </tr>
        <tr>
          <td>Spindle / Process Temperature</td>
          <td style="font-weight: bold;">${machine.telemetry.temp} °C</td>
          <td>60.0 °C</td>
          <td>80.0 °C</td>
          <td class="${machine.telemetry.temp > 80 ? 'highlight-critical' : 'highlight-healthy'}">${machine.telemetry.temp > 80 ? 'HIGH THERMAL ALERT (+ ' + (machine.telemetry.temp - 60).toFixed(1) + '°C)' : 'NOMINAL'}</td>
        </tr>
        <tr>
          <td>Vibration Amplitude (RMS)</td>
          <td style="font-weight: bold;">${machine.telemetry.vibration} mm/s</td>
          <td>8.0 mm/s</td>
          <td>18.0 mm/s (ISO 10816 Limit)</td>
          <td class="${machine.telemetry.vibration > 18 ? 'highlight-critical' : 'highlight-healthy'}">${machine.telemetry.vibration > 18 ? 'EXCESSIVE HARMONIC STRESS (+ ' + (machine.telemetry.vibration - 8).toFixed(1) + ' mm/s)' : 'NOMINAL'}</td>
        </tr>
        <tr>
          <td>Torque Load</td>
          <td style="font-weight: bold;">${machine.telemetry.torque} Nm</td>
          <td>380 Nm</td>
          <td>500 Nm</td>
          <td class="${machine.telemetry.torque > 480 ? 'highlight-warning' : 'highlight-healthy'}">${machine.telemetry.torque > 480 ? 'HIGH MOTOR STRAIN' : 'NOMINAL'}</td>
        </tr>
        <tr>
          <td>Tool Wear Index</td>
          <td style="font-weight: bold;">${machine.telemetry.toolWear} mm</td>
          <td>0.15 mm</td>
          <td>0.80 mm</td>
          <td class="${machine.telemetry.toolWear > 0.65 ? 'highlight-critical' : 'highlight-healthy'}">${machine.telemetry.toolWear > 0.65 ? 'CRITICAL FLANK WEAR' : 'NOMINAL'}</td>
        </tr>
        <tr>
          <td>Rotational Speed</td>
          <td>${machine.telemetry.rpm} RPM</td>
          <td>3200 RPM</td>
          <td>2000 - 5000 RPM</td>
          <td>Within Operating Envelope</td>
        </tr>
        <tr>
          <td>Hydraulic / Fluid Pressure</td>
          <td>${machine.telemetry.pressure} bar</td>
          <td>6.0 bar</td>
          <td>3.5 bar Min</td>
          <td class="${machine.telemetry.pressure < 3.5 ? 'highlight-critical' : 'highlight-healthy'}">${machine.telemetry.pressure < 3.5 ? 'PRESSURE DROP ALERT' : 'OPTIMAL'}</td>
        </tr>
      </table>

      <!-- Section 3: Diagnostic Investigation Findings ("What to Investigate") -->
      <div class="section-title">3. DIAGNOSTIC INVESTIGATION PROTOCOL (WHAT TO INVESTIGATE)</div>
      <table class="sub-table">
        <tr>
          <th style="width: 30px;">#</th>
          <th>Inspection Task</th>
          <th>Physical Location</th>
          <th>Precision Test Method</th>
          <th>Detailed Inspection Protocol</th>
        </tr>
        ${guide.investigation.checklist.map((item, idx) => `
          <tr>
            <td style="text-align: center; font-weight: bold;">${idx + 1}</td>
            <td style="font-weight: bold;">${item.task}</td>
            <td>${item.location}</td>
            <td style="font-mono;">${item.method}</td>
            <td>${item.detail}</td>
          </tr>
        `).join('')}
      </table>

      <!-- Section 4: Standard Operating Procedure ("How to Resolve") -->
      <div class="section-title">4. RESOLUTION STANDARD OPERATING PROCEDURE (HOW TO RESOLVE)</div>
      <table class="sub-table">
        <tr>
          <td colspan="3" style="background-color: #fffbeb; padding: 10px; border-left: 4px solid #f59e0b;">
            <strong>MANDATORY SAFETY & LOTO REQUIREMENT:</strong><br>
            ${guide.resolution.safety}<br>
            <strong>Calibrated Fastener Torque Spec:</strong> ${guide.resolution.torqueSpecs}<br>
            <strong>Estimated Mean Time to Repair (MTTR):</strong> ${guide.resolution.mttr}
          </td>
        </tr>
        <tr>
          <th style="width: 60px;">Phase</th>
          <th>Action Step</th>
          <th>Procedure Description</th>
        </tr>
        ${guide.resolution.steps.map(s => `
          <tr>
            <td style="text-align: center; font-weight: bold;">Phase ${s.step}</td>
            <td style="font-weight: bold;">${s.title}</td>
            <td>${s.desc}</td>
          </tr>
        `).join('')}
        <tr>
          <td colspan="3" style="background-color: #ecfdf5; padding: 8px; font-weight: bold; color: #065f46;">
            POST-SERVICE VALIDATION PROTOCOL: ${guide.resolution.validationProtocol}
          </td>
        </tr>
      </table>

      <!-- Section 5: Requisitioned Replacement Parts Matrix -->
      <div class="section-title">5. REQUIRED SPARE PARTS & REQUISITION MATRIX</div>
      <table class="sub-table">
        <tr>
          <th>Part SKU Number</th>
          <th>Component Description</th>
          <th>Required Qty</th>
          <th>Inventory Availability Status</th>
        </tr>
        ${guide.resolution.parts.map(p => `
          <tr>
            <td style="font-weight: bold; font-family: monospace;">${p.sku}</td>
            <td>${p.name}</td>
            <td style="text-align: center; font-weight: bold;">${p.qty}</td>
            <td style="font-weight: bold; color: #059669;">${p.stock}</td>
          </tr>
        `).join('')}
      </table>

      <!-- Section 6: Smart Team Assignment & SLA -->
      <div class="section-title">6. ENGINEERING TEAM ASSIGNMENT & SLA COMMITMENT</div>
      <table class="sub-table">
        <tr>
          <th>Assigned Engineering Team</th>
          <th>Lead Reliability Engineer</th>
          <th>Work Order ID</th>
          <th>SLA Urgency Tier</th>
          <th>Target Completion Horizon</th>
        </tr>
        <tr>
          <td style="font-weight: bold; font-size: 11pt;">${team.name}</td>
          <td style="font-weight: bold;">${team.lead} (${team.leadTitle})</td>
          <td style="font-weight: bold; font-family: monospace;">${workOrder ? workOrder.id : 'WO-' + Math.floor(1000 + Math.random() * 9000)}</td>
          <td class="${isCritical ? 'highlight-critical' : 'highlight-warning'}">${workOrder ? workOrder.urgency : 'Immediate SLA (< 1 Hour)'}</td>
          <td style="font-weight: bold;">${workOrder ? workOrder.targetCompletion : 'In ' + guide.resolution.mttr}</td>
        </tr>
      </table>

      <!-- Section 7: Management Sign-off Block -->
      <div class="signoff-box">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td colspan="2" style="font-weight: bold; font-size: 12pt; padding-bottom: 15px; color: #091426;">
              7. EXECUTIVE AUTHORIZATION & SIGN-OFF (HIGHER OFFICIALS)
            </td>
          </tr>
          <tr>
            <td style="width: 50%; padding: 10px; border-right: 1px solid #cbd5e1; vertical-align: top;">
              <strong>Maintenance Operations Lead:</strong><br><br>
              Name: ___________________________<br><br>
              Signature: ______________________ Date: ___________
            </td>
            <td style="width: 50%; padding: 10px; vertical-align: top;">
              <strong>Plant Operations Director / General Manager:</strong><br><br>
              Name: ___________________________<br><br>
              Signature: ______________________ Date: ___________
            </td>
          </tr>
        </table>
      </div>
    </body>
    </html>
  `;

  const blob = new Blob([xlsContent], { type: 'application/vnd.ms-excel;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `Executive_Report_${machine.id}_${now.toISOString().slice(0, 10)}.xls`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Generates a comprehensive Multi-Asset Executive Briefing (.xls) for all machines
 */
export function generateFleetExecutiveBriefing(fleetAssetsList, activeWorkOrdersList) {
  const now = new Date();
  const dateStr = now.toLocaleDateString() + ' ' + now.toLocaleTimeString();

  const xlsContent = `
    <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: 'Segoe UI', Arial, sans-serif; font-size: 10.5pt; color: #1e293b; }
        .title { font-size: 16pt; font-weight: bold; background-color: #091426; color: #ffffff; padding: 12px; }
        th { background-color: #1e293b; color: #ffffff; font-weight: bold; padding: 8px; border: 1px solid #cbd5e1; font-size: 9.5pt; }
        td { padding: 6px 8px; border: 1px solid #cbd5e1; font-size: 9.5pt; }
        .crit { background-color: #fee2e2; color: #991b1b; font-weight: bold; }
        .warn { background-color: #fef3c7; color: #92400e; font-weight: bold; }
        .norm { background-color: #d1fae5; color: #065f46; font-weight: bold; }
      </style>
    </head>
    <body>
      <table>
        <tr>
          <td colspan="11" class="title">PREDIX ENGINE — COMPLETE FLEET EXECUTIVE RELIABILITY BRIEFING</td>
        </tr>
        <tr>
          <td colspan="4"><strong>Facility:</strong> Heavy Machining & Power Generation</td>
          <td colspan="4"><strong>Report Date:</strong> ${dateStr}</td>
          <td colspan="3"><strong>Total Assets Monitored:</strong> ${fleetAssetsList.length} (Global: 1,248)</td>
        </tr>
      </table>
      <br>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <th>Priority</th>
          <th>Machine ID</th>
          <th>Machine Name</th>
          <th>Sector</th>
          <th>Equipment Type</th>
          <th>Risk Tier</th>
          <th>Failure Prob (24h)</th>
          <th>Health Score</th>
          <th>RUL (Cycles)</th>
          <th>Key Diagnostic Trigger</th>
          <th>Primary Failure Mode</th>
        </tr>
        ${fleetAssetsList.map(item => `
          <tr>
            <td style="text-align: center; font-weight: bold;">#${item.priority}</td>
            <td style="font-weight: bold; font-family: monospace;">${item.id}</td>
            <td style="font-weight: bold;">${item.name}</td>
            <td>${item.sector}</td>
            <td>${item.type}</td>
            <td class="${item.riskLevel === 'Critical' ? 'crit' : item.riskLevel === 'High' ? 'warn' : 'norm'}">${item.riskLevel}</td>
            <td style="font-weight: bold; text-align: right;">${item.failureProbability}%</td>
            <td style="text-align: center;">${item.healthScore}/100</td>
            <td style="text-align: center;">${item.rulCycles} (~${item.rulDays}d)</td>
            <td>${item.keyIndicator}</td>
            <td>${item.failureType}</td>
          </tr>
        `).join('')}
      </table>
      <br>
      <h3>ACTIVE DISPATCHED WORK ORDERS</h3>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <th>Order ID</th>
          <th>Target Machine</th>
          <th>Assigned Team</th>
          <th>Lead Technician</th>
          <th>Urgency / SLA</th>
          <th>Status</th>
          <th>Target Completion</th>
          <th>Parts Requisitioned</th>
        </tr>
        ${activeWorkOrdersList.map(wo => `
          <tr>
            <td style="font-weight: bold; font-family: monospace;">${wo.id}</td>
            <td>${wo.machineName} (${wo.machineId})</td>
            <td>${wo.teamName}</td>
            <td style="font-weight: bold;">${wo.assignedTech}</td>
            <td style="font-weight: bold;">${wo.urgency}</td>
            <td>${wo.status} (${wo.progressPct}%)</td>
            <td>${wo.targetCompletion}</td>
            <td>${(wo.parts || []).join(', ')}</td>
          </tr>
        `).join('')}
      </table>
      <br>
      <div style="border: 2px dashed #94a3b8; padding: 12px; background-color: #f8fafc;">
        <strong>Operations Director Authorization Signature:</strong> ____________________________ &nbsp;&nbsp;&nbsp;&nbsp; <strong>Date:</strong> _______________
      </div>
    </body>
    </html>
  `;

  const blob = new Blob([xlsContent], { type: 'application/vnd.ms-excel;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `Fleet_Executive_Briefing_${now.toISOString().slice(0, 10)}.xls`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
