// Time-Series Historical Telemetry Data for Sensors and Predictive Analytics

export function generateTelemetrySeries(hours = 24, machineId = "CNC-04") {
  const timestamps = [];
  const tempSeries = [];
  const vibrationSeries = [];
  const torqueSeries = [];
  const pressureSeries = [];
  const riskSeries = [];
  
  const now = new Date();
  const stepMinutes = hours <= 24 ? 60 : hours <= 168 ? 360 : 1440;
  const count = Math.floor((hours * 60) / stepMinutes);

  let baseTemp = machineId === "CNC-04" ? 72 : machineId === "M103" ? 78 : 60;
  let baseVib = machineId === "CNC-04" ? 14 : machineId === "M103" ? 18 : 8;
  let baseTorque = machineId === "CNC-04" ? 380 : machineId === "M103" ? 420 : 310;
  let basePressure = 5.2;

  for (let i = count; i >= 0; i--) {
    const time = new Date(now.getTime() - i * stepMinutes * 60 * 1000);
    const timeLabel = hours <= 24 
      ? time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      : `${time.getMonth() + 1}/${time.getDate()} ${time.getHours()}:00`;
    
    timestamps.push(timeLabel);

    // Gradual escalation towards failure for high-risk assets
    const progress = 1 - (i / count);
    const multiplier = progress * progress * 1.8;

    const noise = (Math.random() - 0.48) * 2;
    const currentTemp = +(baseTemp + multiplier * 22 + noise).toFixed(1);
    const currentVib = +(baseVib + multiplier * 28 + noise * 1.5).toFixed(1);
    const currentTorque = +(baseTorque + multiplier * 150 + noise * 10).toFixed(0);
    const currentPressure = +(basePressure - multiplier * 1.8 + noise * 0.2).toFixed(1);
    
    // Risk score calculation
    const currentRisk = Math.min(98, Math.max(8, Math.round(20 + progress * 70 + (noise * 3))));

    tempSeries.push(currentTemp);
    vibrationSeries.push(currentVib);
    torqueSeries.push(currentTorque);
    pressureSeries.push(currentPressure);
    riskSeries.push(currentRisk);
  }

  return {
    timestamps,
    tempSeries,
    vibrationSeries,
    torqueSeries,
    pressureSeries,
    riskSeries
  };
}

export const failureParetoData = [
  { reason: "Tool Wear Failure (TWF)", count: 145, percentage: 31.5, cumulative: 31.5 },
  { reason: "Heat Dissipation Failure (HDF)", count: 112, percentage: 24.3, cumulative: 55.8 },
  { reason: "Overstrain Failure (OSF)", count: 98, percentage: 21.3, cumulative: 77.1 },
  { reason: "Power Failure (PWF)", count: 86, percentage: 18.7, cumulative: 95.8 },
  { reason: "Random Failure (RNF)", count: 19, percentage: 4.2, cumulative: 100.0 }
];
