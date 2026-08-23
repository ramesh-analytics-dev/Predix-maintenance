// Real-Time System Activity Feed & Logs

export const activityLogs = [
  {
    id: "act-1",
    timestamp: "8 MINS AGO",
    type: "critical",
    icon: "notifications_active",
    title: "Spindle temperature anomaly detected",
    detail: "Lathe-Station-12 exceeded 85°C critical threshold. Risk factor increased +14%."
  },
  {
    id: "act-2",
    timestamp: "24 MINS AGO",
    type: "warning",
    icon: "warning",
    title: "Vibration harmonic resonance surge",
    detail: "CNC-Milling-Unit-04 vibration reached 42.8 mm/s on cutting axis Z."
  },
  {
    id: "act-3",
    timestamp: "1 HR AGO",
    type: "success",
    icon: "build_circle",
    title: "Preventative Maintenance Completed",
    detail: "Robotic-Arm-Assembly-B fluid flush and joint recalibration verified by Sarah Connor."
  },
  {
    id: "act-4",
    timestamp: "3 HRS AGO",
    type: "warning",
    icon: "sensors",
    title: "Sensor Calibration Drift",
    detail: "Pump-Unit-03 vibration sensor requiring recalibration before next continuous cycle."
  },
  {
    id: "act-5",
    timestamp: "5 HRS AGO",
    type: "info",
    icon: "model_training",
    title: "XGBoost Production Model Retrained",
    detail: "Version 2.4.1 deployed with 0.984 ROC-AUC across 10,000 telemetry batches."
  },
  {
    id: "act-6",
    timestamp: "7 HRS AGO",
    type: "success",
    icon: "verified",
    title: "Turbine Alpha Combustion Sweep Passed",
    detail: "Generator Gamma M045 thermal certification signed off with 92/100 health score."
  }
];
