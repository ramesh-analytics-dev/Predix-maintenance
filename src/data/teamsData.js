// Maintenance & Reliability Engineering Teams, Workload Balancing & Work Orders State

export const maintenanceTeams = [
  {
    id: "team-tooling",
    name: "Tooling & Precision Cutting Team",
    lead: "Marcus Chen",
    leadTitle: "Senior Tooling Specialist & Spindle Metrologist",
    specialties: ["Tool Wear Failure (TWF)", "Collet Runout", "Carbide Inset Geometry", "Spindle Dynamic Balancing"],
    capacityPct: 65,
    activeTicketsCount: 3,
    avgResponseTime: "18 mins",
    rating: "4.95 / 5.0",
    color: "#4648d4",
    members: ["Marcus Chen (Lead)", "Liam Patel", "Chloe Bennett"]
  },
  {
    id: "team-thermal",
    name: "Thermal & Heat Exchanger Team",
    lead: "Sarah Connor",
    leadTitle: "Combustion & Thermodynamic Specialist",
    specialties: ["Heat Dissipation Failure (HDF)", "Chiller Loops", "Coolant Flow Dynamics", "Plate Heat Exchangers"],
    capacityPct: 80,
    activeTicketsCount: 4,
    avgResponseTime: "12 mins",
    rating: "4.98 / 5.0",
    color: "#dc2626",
    members: ["Sarah Connor (Lead)", "Vikram Malhotra", "Zoe Vance"]
  },
  {
    id: "team-mech",
    name: "Mechanical & High-Speed Dynamics Team",
    lead: "Elena Rostova",
    leadTitle: "Principal Vibration Metrologist & Tribologist",
    specialties: ["Overstrain Failure (OSF)", "Vibration Analysis", "Bearing Raceways", "Gearbox Mesh Fatigue"],
    capacityPct: 75,
    activeTicketsCount: 4,
    avgResponseTime: "15 mins",
    rating: "5.0 / 5.0",
    color: "#f59e0b",
    members: ["Elena Rostova (Lead)", "Anton Weber", "Dmitri Volkov"]
  },
  {
    id: "team-electrical",
    name: "Electrical & Motor Drives Team",
    lead: "David Vance",
    leadTitle: "Power Electronics & VFD Inverter Lead",
    specialties: ["Power Failure (PWF)", "VFD Inverters", "Phase Imbalance", "Motor Stator Insulation"],
    capacityPct: 45,
    activeTicketsCount: 2,
    avgResponseTime: "24 mins",
    rating: "4.90 / 5.0",
    color: "#3b82f6",
    members: ["David Vance (Lead)", "Kiran Rao"]
  },
  {
    id: "team-hydraulic",
    name: "Fluid Power & Hydraulics Team",
    lead: "Lucas Meyer",
    leadTitle: "Hydraulics & High-Pressure Fluid Specialist",
    specialties: ["Hydraulic Seal Failure", "Pump Cavitation", "Proportional Valves", "Fluid Filtration"],
    capacityPct: 55,
    activeTicketsCount: 2,
    avgResponseTime: "20 mins",
    rating: "4.92 / 5.0",
    color: "#10b981",
    members: ["Lucas Meyer (Lead)", "Gabriel Santos"]
  }
];

// In-Memory Active Work Orders List
export let activeWorkOrders = [
  {
    id: "WO-9482",
    machineId: "CNC-04",
    machineName: "CNC-Milling-Unit-04",
    sector: "Sector 7 • Heavy Machining Floor",
    teamId: "team-tooling",
    teamName: "Tooling & Precision Cutting Team",
    assignedTech: "Marcus Chen",
    urgency: "Immediate",
    priorityRank: 1,
    failureType: "Tool Wear Failure (TWF)",
    keyIndicator: "Vibration Spikes (42.8 mm/s)",
    status: "In Progress",
    progressPct: 45,
    createdTime: "25 mins ago",
    targetCompletion: "In 45 mins",
    parts: ["Carbide Inserts (CNMG-120408-PR)", "Spindle Bearing SKF-6204"],
    notes: "Lockout performed. Taper cleaning in progress. Tool presetter ready for re-zeroing."
  },
  {
    id: "WO-9480",
    machineId: "M103",
    machineName: "Turbine Alpha M103",
    sector: "Power Gen Facility • Block 1",
    teamId: "team-thermal",
    teamName: "Thermal & Heat Exchanger Team",
    assignedTech: "Sarah Connor",
    urgency: "Immediate",
    priorityRank: 2,
    failureType: "Heat Dissipation Failure (HDF)",
    keyIndicator: "Combustor Temp 98.6°C",
    status: "Dispatched",
    progressPct: 20,
    createdTime: "40 mins ago",
    targetCompletion: "In 1h 15m",
    parts: ["Heat Exchanger Core", "Bio-Stable Coolant 50L"],
    notes: "Technician en route with cooling chemical flush kit and dual thermocouples."
  },
  {
    id: "WO-9475",
    machineId: "LATHE-12",
    machineName: "Lathe-Station-12",
    sector: "Sector 2 • Precision Turning",
    teamId: "team-thermal",
    teamName: "Thermal & Heat Exchanger Team",
    assignedTech: "Vikram Malhotra",
    urgency: "4-Hour",
    priorityRank: 4,
    failureType: "Heat Dissipation Failure (HDF)",
    keyIndicator: "Spindle Temp 86.5°C",
    status: "Pending Parts",
    progressPct: 60,
    createdTime: "1.5 hrs ago",
    targetCompletion: "In 2h 00m",
    parts: ["Proportional Flow Regulating Valve"],
    notes: "Part requisitioned from central tool crib. Expected on bay floor in 15 mins."
  },
  {
    id: "WO-9468",
    machineId: "PRESS-01",
    machineName: "Hydraulic-Press-Alpha",
    sector: "Heavy Assembly Line 1",
    teamId: "team-hydraulic",
    teamName: "Fluid Power & Hydraulics Team",
    assignedTech: "Lucas Meyer",
    urgency: "4-Hour",
    priorityRank: 5,
    failureType: "Power Failure (PWF)",
    keyIndicator: "Pressure Drop (2.1 bar)",
    status: "In Progress",
    progressPct: 75,
    createdTime: "2 hrs ago",
    targetCompletion: "In 30 mins",
    parts: ["Hydraulic Seal Rebuild Kit"],
    notes: "Ram cylinder disassembled. Replaced leaking secondary O-ring seals. Commencing pressure test."
  }
];

export function createWorkOrder(orderData) {
  const newOrder = {
    id: `WO-${Math.floor(1000 + Math.random() * 9000)}`,
    machineId: orderData.machineId,
    machineName: orderData.machineName,
    sector: orderData.sector,
    teamId: orderData.teamId,
    teamName: orderData.teamName,
    assignedTech: orderData.assignedTech,
    urgency: orderData.urgency || "Immediate",
    priorityRank: orderData.priorityRank || 1,
    failureType: orderData.failureType,
    keyIndicator: orderData.keyIndicator,
    status: "Dispatched",
    progressPct: 10,
    createdTime: "Just now",
    targetCompletion: orderData.targetCompletion || "In 1h 00m",
    parts: orderData.parts || [],
    notes: orderData.notes || "Standard SOP dispatched to field team tablet."
  };

  activeWorkOrders.unshift(newOrder);

  // Update team workload
  const team = maintenanceTeams.find(t => t.id === orderData.teamId);
  if (team) {
    team.activeTicketsCount += 1;
    team.capacityPct = Math.min(100, team.capacityPct + 10);
  }

  return newOrder;
}

export function completeWorkOrder(orderId) {
  const order = activeWorkOrders.find(o => o.id === orderId);
  if (order) {
    order.status = "Completed";
    order.progressPct = 100;

    const team = maintenanceTeams.find(t => t.id === order.teamId);
    if (team && team.activeTicketsCount > 0) {
      team.activeTicketsCount -= 1;
      team.capacityPct = Math.max(20, team.capacityPct - 10);
    }
  }
}
