// Dynamic Risk Simulation Engine & SHAP Explainer

export function calculateSimulatedRisk(temp, torque, rpm, toolWear, baseline = {}) {
  // Baseline defaults if not provided
  const baseTemp = baseline.temp || 98;
  const baseTorque = baseline.torque || 540;
  const baseRpm = baseline.rpm || 3600;
  const baseWear = baseline.toolWear || 0.82;
  const baseRisk = baseline.failureProbability || 91;

  // Normalized parameter deviations
  // Temp: 50°C - 120°C (Safe < 70, Warning 70-85, Critical > 85)
  const tempFactor = (temp - 60) / 40; // 0 at 60C, 1 at 100C
  
  // Torque: 300 - 600 Nm (Safe < 400, Warning 400-500, Critical > 500)
  const torqueFactor = (torque - 350) / 200; // 0 at 350, 1 at 550

  // RPM: 2000 - 5000 RPM (Optimal ~ 3000-3500)
  const rpmDeviation = Math.abs(rpm - 3200) / 1500;

  // Tool Wear: 0.0 - 1.0 mm (Safe < 0.35, Warning 0.35-0.70, Critical > 0.70)
  const wearFactor = (toolWear - 0.2) / 0.6; // 0 at 0.2, 1 at 0.8

  // Multi-variable non-linear failure risk calculation
  let rawScore = (
    0.35 * Math.max(0, tempFactor) * 100 +
    0.28 * Math.max(0, wearFactor) * 100 +
    0.22 * Math.max(0, torqueFactor) * 100 +
    0.15 * Math.max(0, rpmDeviation) * 100
  );

  // Nonlinear interaction term (high temp + high torque + worn tool creates exponential risk)
  if (temp > 85 && torque > 480 && toolWear > 0.6) {
    rawScore += 18;
  }

  // Bound to realistic percentages
  const simulatedRisk = Math.min(99, Math.max(5, Math.round(rawScore)));

  // Calculate dynamic SHAP contributions relative to baseline
  // Negative means it reduced risk, positive means it added risk
  const tempDeltaPct = Math.round(((temp - baseTemp) / baseTemp) * 45);
  const wearDeltaPct = Math.round(((toolWear - baseWear) / (baseWear || 0.5)) * 38);
  const torqueDeltaPct = Math.round(((torque - baseTorque) / baseTorque) * 25);
  const rpmDeltaPct = Math.round(((rpm - baseRpm) / baseRpm) * 15);

  // Status tier determination
  let status = "Healthy";
  let statusClass = "text-status-healthy bg-status-healthy/10 border-status-healthy";
  let badgeText = "OPTIMAL";

  if (simulatedRisk >= 80) {
    status = "Critical";
    statusClass = "text-status-critical bg-status-critical/10 border-status-critical";
    badgeText = "CRITICAL";
  } else if (simulatedRisk >= 50) {
    status = "High";
    statusClass = "text-status-warning bg-status-warning/10 border-status-warning";
    badgeText = "HIGH RISK";
  } else if (simulatedRisk >= 25) {
    status = "Medium";
    statusClass = "text-[#3b82f6] bg-[#3b82f6]/10 border-[#3b82f6]";
    badgeText = "WARNING";
  } else {
    status = "Healthy";
    statusClass = "text-status-healthy bg-status-healthy/10 border-status-healthy";
    badgeText = "HEALTHY";
  }

  // Prescriptive actions based on values
  const actions = [];
  if (temp > 80) {
    actions.push({
      icon: "thermostat",
      title: "Cooling Loop & Heat Sink Inspection",
      desc: `Process temp is ${temp}°C. Verify heat exchanger flow rate, clean radiator fin buildup, and check thermal compound.`
    });
  } else if (temp <= 75 && baseTemp > 80) {
    actions.push({
      icon: "ac_unit",
      title: "Thermal Relief Achieved",
      desc: `Simulated cooling to ${temp}°C drops heat-induced stress by ${Math.abs(tempDeltaPct)}%. Continuous operational duty cycle is sustainable.`
    });
  }

  if (toolWear > 0.60) {
    actions.push({
      icon: "build",
      title: "Immediate Tool / Bearing Replacement",
      desc: `Tool wear is at ${toolWear} mm (> 0.60 mm threshold). Schedule cutting insert or spindle sleeve replacement before resuming batch.`
    });
  } else if (toolWear <= 0.45 && baseWear > 0.60) {
    actions.push({
      icon: "check_circle",
      title: "Fresh Tool Head Life Extension",
      desc: `Operating with sharp cutter / new bearing reduces frictional cutting resistance by ${Math.abs(wearDeltaPct)}%.`
    });
  }

  if (torque > 480) {
    actions.push({
      icon: "speed",
      title: "Load Derating & Feed Rate Adjustment",
      desc: `Torque load of ${torque} Nm approaches magnetic saturation and mechanical strain limit. Derate feed velocity by 15-20%.`
    });
  }

  if (actions.length === 0) {
    actions.push({
      icon: "verified",
      title: "Asset Operating In Nominal Envelope",
      desc: "All simulated process parameters lie well within manufacturer safety margins. No immediate intervention required."
    });
  }

  return {
    simulatedRisk,
    baseRisk,
    status,
    statusClass,
    badgeText,
    shap: {
      temp: tempDeltaPct,
      toolWear: wearDeltaPct,
      torque: torqueDeltaPct,
      rpm: rpmDeltaPct
    },
    actions
  };
}
