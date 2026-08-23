// ML Model Performance Evaluation Data & Explainability Metrics

export const modelEvaluation = {
  models: [
    {
      id: "xgb-v2",
      name: "XGBoost Gradient Boosted Classifier (v2.4.1)",
      status: "PRODUCTION ACTIVE",
      rocAuc: 0.984,
      prAuc: 0.952,
      f1Score: 0.938,
      precision: 0.942,
      recall: 0.961,
      accuracy: 0.976,
      latencyMs: 6.8,
      datasetSize: "10,000 Samples",
      featuresCount: 14,
      lastTrained: "2026-08-20 03:00 UTC"
    },
    {
      id: "rf-ensemble",
      name: "Random Forest Ensemble (v1.9.0)",
      status: "BENCHMARK STANDBY",
      rocAuc: 0.962,
      prAuc: 0.918,
      f1Score: 0.904,
      precision: 0.910,
      recall: 0.925,
      accuracy: 0.954,
      latencyMs: 14.2,
      datasetSize: "10,000 Samples",
      featuresCount: 14,
      lastTrained: "2026-08-15 02:30 UTC"
    },
    {
      id: "lstm-rul",
      name: "Deep Temporal LSTM RUL Network (v3.0.2)",
      status: "TIME-SERIES RUL ONLY",
      rocAuc: 0.971,
      prAuc: 0.940,
      f1Score: 0.922,
      precision: 0.931,
      recall: 0.948,
      accuracy: 0.968,
      latencyMs: 22.4,
      datasetSize: "45,000 Sequence Windows",
      featuresCount: 21,
      lastTrained: "2026-08-18 12:00 UTC"
    }
  ],
  confusionMatrix: {
    truePositive: 482,
    falsePositive: 18,
    falseNegative: 12,
    trueNegative: 4510,
    total: 5022
  },
  globalFeatureImportance: [
    { feature: "Vibration Amplitude (mm/s)", importance: 34.2, description: "Mechanical harmonic imbalance and bearing raceway faults" },
    { feature: "Process Temperature (°C)", importance: 26.5, description: "Thermodynamic heat dissipation efficiency" },
    { feature: "Tool Wear Index (mm)", importance: 19.1, description: "Micro-cutting edge degradation and friction factor" },
    { feature: "Torque Load (Nm)", importance: 12.8, description: "Drive motor strain and mechanical overload resistance" },
    { feature: "Air / Environmental Temp (°C)", importance: 4.6, description: "Ambient thermal baseline variations" },
    { feature: "Rotational Speed (RPM)", importance: 2.8, description: "Spindle speed variation stability" }
  ],
  failureModeMetrics: [
    { mode: "Heat Dissipation Failure (HDF)", count: 112, precision: 95.8, recall: 97.2 },
    { mode: "Tool Wear Failure (TWF)", count: 145, precision: 94.1, recall: 95.5 },
    { mode: "Overstrain Failure (OSF)", count: 98, precision: 96.0, recall: 94.8 },
    { mode: "Power Failure (PWF)", count: 86, precision: 97.4, recall: 98.1 },
    { mode: "Random Failure (RNF)", count: 19, precision: 82.5, recall: 81.0 }
  ]
};
