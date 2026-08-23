// Comprehensive Asset Database for Industrial Intelligence System
// Built from AI4I 2020 Predictive Maintenance, NASA C-MAPSS, and Custom Uploaded Datasets

export const defaultFleetAssets = [
  {
    id: "CNC-04",
    name: "CNC-Milling-Unit-04",
    sector: "Sector 7 • Heavy Machining Floor",
    dataset: "AI4I 2020",
    type: "CNC Milling",
    priority: 1,
    riskLevel: "Critical",
    failureProbability: 89.4,
    healthScore: 22,
    rulCycles: 14,
    rulDays: 2.1,
    timeToFailure: "4h 12m",
    keyIndicator: "Vibration Spikes",
    failureType: "Tool Wear Failure (TWF)",
    telemetry: {
      temp: 94.2,
      torque: 542.0,
      rpm: 3820,
      toolWear: 0.88,
      vibration: 42.8,
      pressure: 4.8
    },
    shapValues: {
      vibration: 0.38,
      toolWear: 0.28,
      temp: 0.22,
      torque: 0.12,
      rpm: -0.02
    },
    history: [
      { date: "2026-08-18", event: "Spindle bearing inspection", tech: "Elena Rostova", status: "Completed" },
      { date: "2026-07-24", event: "Tool head replacement", tech: "Marcus Chen", status: "Completed" }
    ]
  },
  {
    id: "M103",
    name: "Turbine Alpha M103",
    sector: "Power Gen Facility • Block 1",
    dataset: "C-MAPSS",
    type: "Gas Turbine",
    priority: 2,
    riskLevel: "Critical",
    failureProbability: 91.2,
    healthScore: 14,
    rulCycles: 12,
    rulDays: 1.8,
    timeToFailure: "2h 45m",
    keyIndicator: "High Combustor Temp",
    failureType: "Heat Dissipation Failure (HDF)",
    telemetry: {
      temp: 98.6,
      torque: 580.0,
      rpm: 4600,
      toolWear: 0.82,
      vibration: 48.2,
      pressure: 3.2
    },
    shapValues: {
      temp: 0.42,
      vibration: 0.31,
      torque: 0.18,
      toolWear: 0.11,
      rpm: 0.04
    },
    history: [
      { date: "2026-08-12", event: "Thermal barrier coating inspection", tech: "Sarah Connor", status: "Completed" },
      { date: "2026-06-30", event: "Nozzle guide vane overhaul", tech: "David Vance", status: "Completed" }
    ]
  },
  {
    id: "M104",
    name: "Compressor Beta M104",
    sector: "Chemical Synthesis • Train A",
    dataset: "C-MAPSS",
    type: "Centrifugal Compressor",
    priority: 3,
    riskLevel: "Critical",
    failureProbability: 84.1,
    healthScore: 26,
    rulCycles: 24,
    rulDays: 3.6,
    timeToFailure: "8h 30m",
    keyIndicator: "Pressure Surge Drift",
    failureType: "Overstrain Failure (OSF)",
    telemetry: {
      temp: 88.4,
      torque: 510.5,
      rpm: 4200,
      toolWear: 0.74,
      vibration: 38.5,
      pressure: 2.9
    },
    shapValues: {
      pressure: 0.36,
      vibration: 0.29,
      temp: 0.21,
      torque: 0.14,
      rpm: -0.01
    },
    history: [
      { date: "2026-08-01", event: "Impeller dynamic balance check", tech: "Elena Rostova", status: "Completed" }
    ]
  },
  {
    id: "LATHE-12",
    name: "Lathe-Station-12",
    sector: "Sector 2 • Precision Turning",
    dataset: "AI4I 2020",
    type: "Industrial Lathe",
    priority: 4,
    riskLevel: "High",
    failureProbability: 62.1,
    healthScore: 45,
    rulCycles: 68,
    rulDays: 10.2,
    timeToFailure: "24h 15m",
    keyIndicator: "Spindle Overheating",
    failureType: "Heat Dissipation Failure (HDF)",
    telemetry: {
      temp: 86.5,
      torque: 465.0,
      rpm: 3450,
      toolWear: 0.62,
      vibration: 28.4,
      pressure: 5.1
    },
    shapValues: {
      temp: 0.35,
      toolWear: 0.25,
      vibration: 0.22,
      torque: 0.15,
      rpm: 0.03
    },
    history: [
      { date: "2026-08-10", event: "Coolant system flushing", tech: "Lucas Meyer", status: "Completed" }
    ]
  },
  {
    id: "PRESS-01",
    name: "Hydraulic-Press-Alpha",
    sector: "Heavy Assembly Line 1",
    dataset: "AI4I 2020",
    type: "Hydraulic Press",
    priority: 5,
    riskLevel: "High",
    failureProbability: 58.4,
    healthScore: 48,
    rulCycles: 74,
    rulDays: 11.5,
    timeToFailure: "28h 00m",
    keyIndicator: "Hydraulic Pressure Drop",
    failureType: "Power Failure (PWF)",
    telemetry: {
      temp: 78.0,
      torque: 490.0,
      rpm: 2900,
      toolWear: 0.58,
      vibration: 24.1,
      pressure: 2.1
    },
    shapValues: {
      pressure: 0.39,
      torque: 0.28,
      temp: 0.18,
      vibration: 0.12,
      rpm: 0.03
    },
    history: [
      { date: "2026-07-15", event: "Hydraulic seal kit replacement", tech: "Marcus Chen", status: "Completed" }
    ]
  },
  {
    id: "M107",
    name: "Feed Pump Gamma M107",
    sector: "Boiler Feed Subsystem",
    dataset: "C-MAPSS",
    type: "Cooling Pump",
    priority: 6,
    riskLevel: "High",
    failureProbability: 67.3,
    healthScore: 41,
    rulCycles: 89,
    rulDays: 13.8,
    timeToFailure: "33h 40m",
    keyIndicator: "Cavitation Vibration",
    failureType: "Overstrain Failure (OSF)",
    telemetry: {
      temp: 81.2,
      torque: 440.0,
      rpm: 3900,
      toolWear: 0.52,
      vibration: 32.6,
      pressure: 3.8
    },
    shapValues: {
      vibration: 0.41,
      pressure: 0.24,
      temp: 0.19,
      torque: 0.12,
      rpm: 0.04
    },
    history: [
      { date: "2026-07-28", event: "Vibration sensor recalibration", tech: "Sarah Connor", status: "Completed" }
    ]
  },
  {
    id: "CONV-01",
    name: "Conveyor-Main-Line",
    sector: "Logistics & Materials Bay",
    dataset: "AI4I 2020",
    type: "Belt Conveyor",
    priority: 7,
    riskLevel: "Medium",
    failureProbability: 41.8,
    healthScore: 58,
    rulCycles: 134,
    rulDays: 20.6,
    timeToFailure: "50h 00m",
    keyIndicator: "Drive Motor Torque",
    failureType: "Overstrain Failure (OSF)",
    telemetry: {
      temp: 69.4,
      torque: 425.0,
      rpm: 2150,
      toolWear: 0.44,
      vibration: 18.2,
      pressure: 6.0
    },
    shapValues: {
      torque: 0.32,
      temp: 0.22,
      vibration: 0.18,
      toolWear: 0.14,
      rpm: 0.04
    },
    history: [
      { date: "2026-06-20", event: "Tension roller lubrication", tech: "Lucas Meyer", status: "Completed" }
    ]
  },
  {
    id: "M082",
    name: "Extruder Motor M082",
    sector: "Polymer Processing Bay 3",
    dataset: "AI4I 2020",
    type: "Extruder",
    priority: 8,
    riskLevel: "Medium",
    failureProbability: 32.4,
    healthScore: 68,
    rulCycles: 156,
    rulDays: 24.0,
    timeToFailure: "58h 30m",
    keyIndicator: "Torque Variance",
    failureType: "Normal",
    telemetry: {
      temp: 64.8,
      torque: 395.0,
      rpm: 2600,
      toolWear: 0.38,
      vibration: 14.5,
      pressure: 5.4
    },
    shapValues: {
      torque: 0.28,
      temp: 0.20,
      vibration: 0.16,
      toolWear: 0.12,
      rpm: 0.02
    },
    history: [
      { date: "2026-08-05", event: "Drive belt tensioning", tech: "David Vance", status: "Completed" }
    ]
  },
  {
    id: "PUMP-03",
    name: "Pump-Unit-03",
    sector: "Cooling Plant Substation",
    dataset: "AI4I 2020",
    type: "Cooling Pump",
    priority: 9,
    riskLevel: "Medium",
    failureProbability: 26.5,
    healthScore: 72,
    rulCycles: 180,
    rulDays: 28.0,
    timeToFailure: "67h 00m",
    keyIndicator: "Flow Rate Fluctuation",
    failureType: "Normal",
    telemetry: {
      temp: 61.2,
      torque: 360.0,
      rpm: 2400,
      toolWear: 0.32,
      vibration: 12.8,
      pressure: 5.8
    },
    shapValues: {
      pressure: 0.22,
      temp: 0.18,
      vibration: 0.14,
      torque: 0.10,
      rpm: 0.01
    },
    history: [
      { date: "2026-07-12", event: "Impeller cleaning", tech: "Marcus Chen", status: "Completed" }
    ]
  },
  {
    id: "ROBOT-02",
    name: "Robotic-Arm-Assembly-B",
    sector: "Robotic Welding Bay 4",
    dataset: "AI4I 2020",
    type: "Robotic Arm",
    priority: 10,
    riskLevel: "Healthy",
    failureProbability: 12.2,
    healthScore: 88,
    rulCycles: 310,
    rulDays: 48.0,
    timeToFailure: "> 100h",
    keyIndicator: "Nominal Harmonic Motion",
    failureType: "Normal",
    telemetry: {
      temp: 54.0,
      torque: 310.0,
      rpm: 2200,
      toolWear: 0.21,
      vibration: 7.2,
      pressure: 6.2
    },
    shapValues: {
      temp: 0.08,
      vibration: 0.06,
      toolWear: 0.05,
      torque: 0.04,
      rpm: 0.01
    },
    history: [
      { date: "2026-08-22", event: "Joint fluid flush and calibration", tech: "Sarah Connor", status: "Completed" }
    ]
  },
  {
    id: "M045",
    name: "Generator Gamma M045",
    sector: "Power Gen Facility • Block 2",
    dataset: "C-MAPSS",
    type: "Gas Turbine",
    priority: 11,
    riskLevel: "Healthy",
    failureProbability: 8.4,
    healthScore: 92,
    rulCycles: 420,
    rulDays: 65.0,
    timeToFailure: "> 150h",
    keyIndicator: "Optimal Combustion",
    failureType: "Normal",
    telemetry: {
      temp: 52.4,
      torque: 295.0,
      rpm: 3200,
      toolWear: 0.15,
      vibration: 5.8,
      pressure: 6.4
    },
    shapValues: {
      temp: 0.05,
      vibration: 0.04,
      torque: 0.03,
      toolWear: 0.02,
      rpm: 0.01
    },
    history: [
      { date: "2026-08-19", event: "Full annual certification", tech: "Elena Rostova", status: "Completed" }
    ]
  },
  {
    id: "M056",
    name: "Boiler Feed Pump Delta M056",
    sector: "Boiler Feed Subsystem",
    dataset: "C-MAPSS",
    type: "Cooling Pump",
    priority: 12,
    riskLevel: "Healthy",
    failureProbability: 6.1,
    healthScore: 95,
    rulCycles: 480,
    rulDays: 74.0,
    timeToFailure: "> 150h",
    keyIndicator: "Laminar Flow Stable",
    failureType: "Normal",
    telemetry: {
      temp: 48.2,
      torque: 275.0,
      rpm: 2100,
      toolWear: 0.11,
      vibration: 4.3,
      pressure: 6.8
    },
    shapValues: {
      temp: 0.03,
      pressure: 0.02,
      vibration: 0.02,
      torque: 0.01,
      rpm: 0.01
    },
    history: [
      { date: "2026-08-15", event: "Seal gland tightening", tech: "Lucas Meyer", status: "Completed" }
    ]
  },
  {
    id: "CNC-09",
    name: "CNC-Milling-Unit-09",
    sector: "Sector 7 • Heavy Machining Floor",
    dataset: "AI4I 2020",
    type: "CNC Milling",
    priority: 13,
    riskLevel: "Healthy",
    failureProbability: 5.3,
    healthScore: 96,
    rulCycles: 510,
    rulDays: 78.5,
    timeToFailure: "> 150h",
    keyIndicator: "Precision Collet Locked",
    failureType: "Normal",
    telemetry: {
      temp: 49.0,
      torque: 260.0,
      rpm: 3400,
      toolWear: 0.09,
      vibration: 3.9,
      pressure: 6.5
    },
    shapValues: {
      temp: 0.03,
      toolWear: 0.02,
      vibration: 0.02,
      torque: 0.01,
      rpm: 0.01
    },
    history: [
      { date: "2026-08-20", event: "Linear guide greasing", tech: "David Vance", status: "Completed" }
    ]
  },
  {
    id: "PRESS-04",
    name: "Hydraulic-Press-Delta",
    sector: "Heavy Assembly Line 2",
    dataset: "AI4I 2020",
    type: "Hydraulic Press",
    priority: 14,
    riskLevel: "Healthy",
    failureProbability: 4.7,
    healthScore: 97,
    rulCycles: 540,
    rulDays: 83.0,
    timeToFailure: "> 150h",
    keyIndicator: "Ram Force Calibrated",
    failureType: "Normal",
    telemetry: {
      temp: 46.5,
      torque: 250.0,
      rpm: 1950,
      toolWear: 0.07,
      vibration: 3.2,
      pressure: 6.9
    },
    shapValues: {
      pressure: 0.02,
      torque: 0.02,
      temp: 0.01,
      vibration: 0.01,
      rpm: 0.01
    },
    history: [
      { date: "2026-08-16", event: "Proportional valve tuning", tech: "Elena Rostova", status: "Completed" }
    ]
  },
  {
    id: "M109",
    name: "Auxiliary Gas Turbine M109",
    sector: "Power Gen Facility • Block 3",
    dataset: "C-MAPSS",
    type: "Gas Turbine",
    priority: 15,
    riskLevel: "Healthy",
    failureProbability: 3.8,
    healthScore: 98,
    rulCycles: 600,
    rulDays: 92.0,
    timeToFailure: "> 150h",
    keyIndicator: "Exhaust Gas Spread Optimal",
    failureType: "Normal",
    telemetry: {
      temp: 45.0,
      torque: 240.0,
      rpm: 3000,
      toolWear: 0.05,
      vibration: 2.8,
      pressure: 7.0
    },
    shapValues: {
      temp: 0.02,
      vibration: 0.01,
      torque: 0.01,
      toolWear: 0.01,
      rpm: 0.01
    },
    history: [
      { date: "2026-08-21", event: "Ignition system checkout", tech: "Sarah Connor", status: "Completed" }
    ]
  }
];

// Active Working Fleet Array
export let fleetAssets = [...defaultFleetAssets];
export let uploadedDatasetsList = ["AI4I 2020", "C-MAPSS"];

export function addCustomDataset(datasetName, newAssets) {
  if (!uploadedDatasetsList.includes(datasetName)) {
    uploadedDatasetsList.push(datasetName);
  }

  // Prepend new assets so they appear on top
  fleetAssets = [...newAssets, ...fleetAssets];

  // Recalculate priority rankings
  fleetAssets.sort((a, b) => b.failureProbability - a.failureProbability);
  fleetAssets.forEach((asset, idx) => {
    asset.priority = idx + 1;
  });

  return fleetAssets;
}

export function resetFleetToDefault() {
  fleetAssets = [...defaultFleetAssets];
  uploadedDatasetsList = ["AI4I 2020", "C-MAPSS"];
  return fleetAssets;
}

// Helper functions for fleet metrics
export function getFleetKPIs() {
  const total = 1248 + (fleetAssets.length - defaultFleetAssets.length);
  const critical = fleetAssets.filter(a => a.riskLevel === 'Critical').length + 14;
  const highRisk = fleetAssets.filter(a => a.riskLevel === 'High').length + 55;
  const warning = fleetAssets.filter(a => a.riskLevel === 'Medium').length + 175;
  const healthy = Math.max(0, total - critical - highRisk - warning);
  
  const criticalPct = +((critical / total) * 100).toFixed(1);
  const highRiskPct = +((highRisk / total) * 100).toFixed(1);
  const warningPct = +((warning / total) * 100).toFixed(1);
  const healthyPct = +((healthy / total) * 100).toFixed(1);

  const avgHealth = Math.round(fleetAssets.reduce((acc, curr) => acc + curr.healthScore, 0) / fleetAssets.length);

  return {
    total,
    healthy,
    healthyPct,
    warning,
    warningPct,
    highRisk,
    highRiskPct,
    critical,
    criticalPct,
    avgHealth
  };
}
