// Diagnostic Investigation Guides, Resolution Standard Operating Procedures (SOP), and Recommendations

export const failureDiagnosticGuides = {
  "Tool Wear Failure (TWF)": {
    failureMode: "Tool Wear Failure (TWF)",
    recommendedTeamId: "team-tooling",
    summary: "Cutting tool insert degradation or spindle bearing friction exceeding allowable dimensional tolerance, causing harmonic chatter and severe thermal spikes.",
    investigation: {
      primaryCues: [
        "Vibration amplitude exceeding 35 mm/s on cutting axis Z.",
        "Tool wear counter above 180 min (or > 0.65 mm optical flank wear).",
        "Spindle drive motor torque fluctuating by > 20% under steady feed."
      ],
      checklist: [
        { id: "twf-1", task: "Optical Flank Wear Inspection", detail: "Examine carbide insert edge under 20x optical magnifier for micro-chipping and crater wear (> 0.40 mm threshold).", location: "Spindle Tool Holder / Turret", method: "Digital Optical Micrometer" },
        { id: "twf-2", task: "Spindle Runout & Taper Check", detail: "Mount dial test indicator on spindle nose. Rotate spindle manually to measure radial runout (Tolerance < 0.003 mm).", location: "Spindle Collet & Chuck", method: "Dial Indicator (0.001 mm)" },
        { id: "twf-3", task: "Drawbar Clamping Force Test", detail: "Verify retention knob pull-force using hydraulic drawbar force gauge (Min spec: 8.5 kN).", location: "Tool Clamping Mechanism", method: "Force Gauge" },
        { id: "twf-4", task: "Coolant Concentration & Flow", detail: "Check water-soluble coolant refractometer reading (Optimal 8-10% Brix) and nozzle pressure.", location: "Delivery Nozzles", method: "Optical Refractometer" }
      ],
      ndtMethods: [
        "Acoustic Emission (AE) sensor frequency analysis (100 kHz - 300 kHz band)",
        "Spindle dynamic balance FFT spectrum capture"
      ]
    },
    resolution: {
      safety: "Mandatory LOTO on Main Disconnect Breaker 400V. Engage mechanical spindle brake lock. Wear cut-resistant Kevlar gloves.",
      mttr: "45 mins - 1h 15m",
      parts: [
        { sku: "CNMG-120408-PR", name: "Carbide Cutting Inserts (PVD TiAlN)", qty: 4, stock: "In Stock (38 units)" },
        { sku: "BT40-ER32-70", name: "Precision Collet Chuck Tool Holder", qty: 1, stock: "In Stock (6 units)" },
        { sku: "SKF-6204-2RSH", name: "High-Speed Spindle Bearing Assembly", qty: 1, stock: "In Stock (12 units)" }
      ],
      torqueSpecs: "Tool clamp retaining screw: 4.8 Nm • Toolholder pull stud: 45 Nm cross-pattern.",
      steps: [
        { step: 1, title: "Isolate & De-energize", desc: "Perform LOTO procedure, verify zero spindle rotational kinetic energy, and drain pressurized coolant lines." },
        { step: 2, title: "Extract Worn Tooling", desc: "Release hydraulic drawbar clamp and extract worn tool holder. Clean taper socket with lint-free solvent wipe." },
        { step: 3, title: "Install Replacement Insert/Collet", desc: "Fit new TiAlN coated insert using calibrated torque wrench to 4.8 Nm. Ensure seating surfaces are free of debris." },
        { step: 4, title: "Calibrate Tool Offset", desc: "Execute automated laser tool presetter cycle to register X/Y/Z length and radius offsets into CNC controller." },
        { step: 5, title: "Post-Service Validation Run", desc: "Run a 10-minute dry test cycle at 3,000 RPM. Confirm vibration RMS drops below 4.5 mm/s before releasing to production." }
      ],
      validationProtocol: "Verify surface roughness Ra < 0.8 µm on test workpiece cut and log sign-off in MES."
    }
  },
  "Heat Dissipation Failure (HDF)": {
    failureMode: "Heat Dissipation Failure (HDF)",
    recommendedTeamId: "team-thermal",
    summary: "Thermal equilibrium loss where machine heat generation exceeds cooling subsystem rejection capacity, leading to thermal expansion seizing and insulation breakdown.",
    investigation: {
      primaryCues: [
        "Process / Spindle temperature exceeding 85°C (Baseline 60°C).",
        "Temperature differential (Process Temp - Air Temp) < 8.6 K at rotational speeds > 2,800 RPM.",
        "Heat exchanger coolant return flow rate dropping below 14.5 L/min."
      ],
      checklist: [
        { id: "hdf-1", task: "Coolant Flow Meter & Delta-T Measurement", detail: "Measure temperature delta across heat exchanger inlet/outlet (Expected ΔT ≥ 12°C).", location: "Primary Chiller Loop", method: "Calibrated Dual Thermocouples" },
        { id: "hdf-2", task: "Radiator & Condenser Fin Buildup", detail: "Inspect heat exchanger fins for particulate clogs, oily sludge, or airflow restriction.", location: "External Heat Sink Assembly", method: "Visual & Airflow Anemometer" },
        { id: "hdf-3", task: "Recirculation Pump Pressure", detail: "Verify coolant delivery pressure at manifold (Nominal 3.8 - 4.5 bar).", location: "Coolant Substation Manifold", method: "Digital Pressure Gauge" },
        { id: "hdf-4", task: "Thermal Paste & Heat Pipe Integrity", detail: "Check thermal interface compound for drying, cracking, or thermal pump-out.", location: "Bearing Housing Heat Pipe", method: "Infrared Thermal Imaging" }
      ],
      ndtMethods: [
        "FLIR Infrared Thermographic thermal gradient survey",
        "Ultrasonic Doppler flow measurement on coolant supply pipes"
      ]
    },
    resolution: {
      safety: "Allow thermal cooldown below 40°C before opening pressurized cooling lines. Depressurize expansion tank. Wear safety goggles and heat-resistant gloves.",
      mttr: "1h 30m - 2h 30m",
      parts: [
        { sku: "HEX-CORE-400", name: "High-Efficiency Plate Heat Exchanger Core", qty: 1, stock: "In Stock (4 units)" },
        { sku: "COOL-SYN-50L", name: "Synthetic Bio-Stable Coolant Concentrate", qty: 2, stock: "In Stock (18 units)" },
        { sku: "VALVE-SOL-24V", name: "Proportional Coolant Flow Regulating Valve", qty: 1, stock: "In Stock (7 units)" }
      ],
      torqueSpecs: "Heat exchanger manifold flange bolts: 32 Nm in star pattern • Sensor thermowell: 18 Nm.",
      steps: [
        { step: 1, title: "Depressurize & Cool Down", desc: "Isolate electrical power, allow machine thermal equilibrium to drop < 40°C, and depressurize coolant circuit." },
        { step: 2, title: "Chemical Coolant Flush", desc: "Flush cooling lines with descaling chemical neutralizer to remove mineral scale and microbial biofilm." },
        { step: 3, title: "Replace / Clean Heat Exchanger", desc: "Clean radiator fin bank with high-pressure dry nitrogen; replace blocked proportional bypass valve." },
        { step: 4, title: "Refill & Bleed System", desc: "Refill with fresh 10% bio-stable synthetic coolant mixture. Purge all entrapped air pockets via high-point bleeder." },
        { step: 5, title: "Continuous Load Thermal Stress Test", desc: "Run machine at 85% rated load for 30 minutes. Verify steady-state temp stabilizes between 58°C - 64°C." }
      ],
      validationProtocol: "Continuous steady-state temperature logging < 65°C under full 100% operational duty cycle."
    }
  },
  "Overstrain Failure (OSF)": {
    failureMode: "Overstrain Failure (OSF)",
    recommendedTeamId: "team-mech",
    summary: "Mechanical structural overload caused by tool wear multiplied by high torque, exceeding fatigue limits on drive gears, bearings, and shaft couplings.",
    investigation: {
      primaryCues: [
        "Torque load exceeding 520 Nm continuously (Nominal < 400 Nm).",
        "High mechanical strain combined with tool wear (Product of Tool Wear × Torque > 11,000 min·Nm).",
        "Acoustic gear-mesh harmonics elevated above 82 dBA."
      ],
      checklist: [
        { id: "osf-1", task: "Shaft & Coupling Alignment Inspection", detail: "Perform laser shaft alignment between drive motor and spindle shaft (Angular < 0.05°, Parallel < 0.03 mm).", location: "Drive Motor Coupling", method: "Laser Alignment Tool" },
        { id: "osf-2", task: "Gearbox Backlash & Tooth Mesh", detail: "Inspect gear teeth for pitting, scuffing, and measure backlash tolerance.", location: "Planetary Reduction Gearbox", method: "Feeler Gauges & Borescope" },
        { id: "osf-3", task: "Structural Fastener Pre-load", detail: "Check torque on machine bed anchor bolts and motor mounting plates for loosening.", location: "Machine Bed Mounts", method: "Calibrated Torque Wrench" }
      ],
      ndtMethods: [
        "Vibration Spectral FFT analysis (1x, 2x, 3x harmonic order tracking)",
        "Magnetic particle inspection (MPI) for shaft fatigue micro-cracks"
      ]
    },
    resolution: {
      safety: "Lockout drive motor circuit. Install mechanical shaft rotation lock. Relieve all stored torsional spring energy.",
      mttr: "2h 00m - 3h 30m",
      parts: [
        { sku: "COUP-ELAS-70", name: "Elastomeric Flexible Jaw Coupling Element", qty: 1, stock: "In Stock (9 units)" },
        { sku: "BRG-TIMK-32208", name: "Tapered Roller Bearing Pair", qty: 2, stock: "In Stock (6 units)" },
        { sku: "SYN-GEAR-75W90", name: "Heavy-Duty Synthetic Gear Lubricant", qty: 4, stock: "In Stock (22 units)" }
      ],
      torqueSpecs: "Motor mounting bolts: 85 Nm • Coupling clamp screws: 24 Nm.",
      steps: [
        { step: 1, title: "Lockout & Disassemble Coupling", desc: "Isolate power, remove protective guard, and disassemble mechanical drive coupling." },
        { step: 2, title: "Inspect & Replace Bearings", desc: "Extract fatigued drive bearings using hydraulic puller. Press in new Timken precision roller bearings." },
        { step: 3, title: "Laser Precision Alignment", desc: "Reinstall coupling with new elastomeric spider element and perform dual-plane laser alignment." },
        { step: 4, title: "Lubricant Replenishment", desc: "Drain contaminated gearbox oil, flush housing, and refill with ISO VG 220 synthetic gear lubricant." },
        { step: 5, title: "Vibration FFT Order Verification", desc: "Ramp motor speed in 500 RPM increments; verify harmonic 1x unbalance vibration < 2.0 mm/s." }
      ],
      validationProtocol: "Harmonic vibration baseline < 2.5 mm/s and no abnormal acoustic spikes across operational RPM range."
    }
  },
  "Power Failure (PWF)": {
    failureMode: "Power Failure (PWF)",
    recommendedTeamId: "team-electrical",
    summary: "Electrical drive or power subsystem failure where electrical power (Torque × Rotational Speed) drops below 3,500 W or exceeds 9,000 W threshold.",
    investigation: {
      primaryCues: [
        "Instantaneous mechanical power calculation outside allowable 3.5 kW - 9.0 kW window.",
        "Phase current imbalance exceeding 5% on drive inverter output.",
        "DC bus voltage ripple > 8% on VFD drive module."
      ],
      checklist: [
        { id: "pwf-1", task: "VFD Drive Bus Voltage & Current Balance", detail: "Measure 3-phase currents U/V/W with true-RMS clamp meter under load.", location: "Main Electrical Control Cabinet", method: "Fluke 376 True-RMS Clamp" },
        { id: "pwf-2", task: "Motor Insulation Resistance (Megger Test)", detail: "Test winding-to-ground insulation resistance at 1000V DC (Spec > 100 MΩ).", location: "Drive Motor Terminal Box", method: "Insulation Resistance Tester" },
        { id: "pwf-3", task: "DC Bus Smoothing Capacitors", detail: "Check VFD capacitor bank for bulging, venting, or ESR degradation.", location: "Inverter Power Stage", method: "LCR Meter / Thermal Camera" }
      ],
      ndtMethods: [
        "Power Quality Analyzer harmonic distortion (THD) logging",
        "Motor current signature analysis (MCSA)"
      ]
    },
    resolution: {
      safety: "Verify zero voltage with certified multimeter! Wait 10 minutes for DC bus capacitors to fully discharge (< 50V DC). Lockout main feeder.",
      mttr: "1h 15m - 2h 00m",
      parts: [
        { sku: "VFD-MOD-15KW", name: "ABB / Siemens 15kW Drive Inverter Module", qty: 1, stock: "In Stock (3 units)" },
        { sku: "FUSE-ULTRA-50A", name: "Semiconductor High-Speed Fuse 50A", qty: 3, stock: "In Stock (25 units)" },
        { sku: "CONTACTOR-24V", name: "Heavy-Duty 3-Pole Contactor 65A", qty: 1, stock: "In Stock (11 units)" }
      ],
      torqueSpecs: "Terminal power bus lugs: 12 Nm • Inverter module chassis grounding: 6 Nm.",
      steps: [
        { step: 1, title: "LOTO & DC Discharge Verification", desc: "Isolate 480V feeder, verify zero energy state on DC bus with multimeter." },
        { step: 2, title: "Replace Blown Fuses / VFD Module", desc: "Swap degraded inverter power stage or blown semiconductor high-speed protection fuses." },
        { step: 3, title: "Terminal Retorquing", desc: "Torque all power cable termination lugs to 12 Nm to eliminate high-resistance thermal hotspots." },
        { step: 4, title: "VFD Parameter Auto-Tuning", desc: "Execute VFD motor parameter identification routine (stationary motor ID run)." },
        { step: 5, title: "Full-Load Step Response Test", desc: "Step motor load from 0% to 100% in 10-second increments while monitoring phase current balance." }
      ],
      validationProtocol: "Phase current imbalance < 2.0% and DC voltage ripple < 3.0% under full rated torque."
    }
  },
  "Normal": {
    failureMode: "Normal (Preventative Routine)",
    recommendedTeamId: "team-mech",
    summary: "Asset telemetry operates within nominal boundaries. Standard preventative inspection recommended to maintain high reliability.",
    investigation: {
      primaryCues: [
        "All telemetry signals within ISO nominal bounds.",
        "Routine operational runtime accumulator reached service interval."
      ],
      checklist: [
        { id: "norm-1", task: "Routine Visual & Acoustic Sweep", detail: "Perform 360-degree walkaround for fluid leaks, unusual hums, or vibration.", location: "Entire Unit", method: "Visual & Listening Probe" },
        { id: "norm-2", task: "Lubricant Level & Contamination", detail: "Verify sight-glass oil level and check for water emulsification.", location: "Reservoirs", method: "Visual Inspection" }
      ],
      ndtMethods: ["Periodic vibration FFT baseline snapshot"]
    },
    resolution: {
      safety: "Standard PPE required: Safety glasses, steel-toe boots.",
      mttr: "20 mins - 30 mins",
      parts: [
        { sku: "LUB-SYN-1L", name: "ISO VG 46 Multi-Purpose Synthetic Lubricant", qty: 1, stock: "In Stock (45 units)" }
      ],
      torqueSpecs: "Sight glass plug: 15 Nm.",
      steps: [
        { step: 1, title: "Top off fluids", desc: "Replenish lubricant reservoirs with approved synthetic oil." },
        { step: 2, title: "Wipe down sensors", desc: "Clean optical and vibration sensor faces." },
        { step: 3, title: "Log routine sign-off", desc: "Record completed preventative checklist in system." }
      ],
      validationProtocol: "Sensor telemetry verified stable in dashboard."
    }
  }
};

// Helper to get diagnostic guide for any asset
export function getDiagnosticGuideForAsset(asset) {
  const modeKey = asset.failureType || "Normal";
  
  // Look up by matching failure type string
  for (const key of Object.keys(failureDiagnosticGuides)) {
    if (modeKey.includes(key) || key.includes(modeKey)) {
      return failureDiagnosticGuides[key];
    }
  }
  return failureDiagnosticGuides["Tool Wear Failure (TWF)"]; // Fallback to TWF
}
