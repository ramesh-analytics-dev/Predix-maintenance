// Data Export Utilities for Industrial Fleet Diagnostics

export function exportToCSV(data, filename = "fleet_maintenance_report.csv") {
  if (!data || !data.length) return;

  const headers = [
    "Priority",
    "Machine ID",
    "Name",
    "Sector",
    "Type",
    "Dataset",
    "Risk Level",
    "Failure Probability (%)",
    "Health Score",
    "RUL (Cycles)",
    "RUL (Est. Days)",
    "Key Indicator",
    "Failure Type",
    "Temp (C)",
    "Torque (Nm)",
    "RPM",
    "Tool Wear (mm)",
    "Vibration (mm/s)"
  ];

  const rows = data.map(item => [
    item.priority,
    `"${item.id}"`,
    `"${item.name}"`,
    `"${item.sector}"`,
    `"${item.type}"`,
    `"${item.dataset}"`,
    `"${item.riskLevel}"`,
    item.failureProbability,
    item.healthScore,
    item.rulCycles,
    item.rulDays,
    `"${item.keyIndicator}"`,
    `"${item.failureType}"`,
    item.telemetry.temp,
    item.telemetry.torque,
    item.telemetry.rpm,
    item.telemetry.toolWear,
    item.telemetry.vibration
  ]);

  const csvContent = [
    headers.join(","),
    ...rows.map(e => e.join(","))
  ].join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function exportToJSON(data, filename = "fleet_telemetry_export.json") {
  const jsonString = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonString], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
