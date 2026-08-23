var Eo=Object.defineProperty;var Mo=(s,t,e)=>t in s?Eo(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var T=(s,t,e)=>Mo(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=e(i);fetch(i.href,a)}})();const dt=[{id:"team-tooling",name:"Tooling & Precision Cutting Team",lead:"Marcus Chen",leadTitle:"Senior Tooling Specialist & Spindle Metrologist",specialties:["Tool Wear Failure (TWF)","Collet Runout","Carbide Inset Geometry","Spindle Dynamic Balancing"],capacityPct:65,activeTicketsCount:3,avgResponseTime:"18 mins",rating:"4.95 / 5.0",color:"#4648d4",members:["Marcus Chen (Lead)","Liam Patel","Chloe Bennett"]},{id:"team-thermal",name:"Thermal & Heat Exchanger Team",lead:"Sarah Connor",leadTitle:"Combustion & Thermodynamic Specialist",specialties:["Heat Dissipation Failure (HDF)","Chiller Loops","Coolant Flow Dynamics","Plate Heat Exchangers"],capacityPct:80,activeTicketsCount:4,avgResponseTime:"12 mins",rating:"4.98 / 5.0",color:"#dc2626",members:["Sarah Connor (Lead)","Vikram Malhotra","Zoe Vance"]},{id:"team-mech",name:"Mechanical & High-Speed Dynamics Team",lead:"Elena Rostova",leadTitle:"Principal Vibration Metrologist & Tribologist",specialties:["Overstrain Failure (OSF)","Vibration Analysis","Bearing Raceways","Gearbox Mesh Fatigue"],capacityPct:75,activeTicketsCount:4,avgResponseTime:"15 mins",rating:"5.0 / 5.0",color:"#f59e0b",members:["Elena Rostova (Lead)","Anton Weber","Dmitri Volkov"]},{id:"team-electrical",name:"Electrical & Motor Drives Team",lead:"David Vance",leadTitle:"Power Electronics & VFD Inverter Lead",specialties:["Power Failure (PWF)","VFD Inverters","Phase Imbalance","Motor Stator Insulation"],capacityPct:45,activeTicketsCount:2,avgResponseTime:"24 mins",rating:"4.90 / 5.0",color:"#3b82f6",members:["David Vance (Lead)","Kiran Rao"]},{id:"team-hydraulic",name:"Fluid Power & Hydraulics Team",lead:"Lucas Meyer",leadTitle:"Hydraulics & High-Pressure Fluid Specialist",specialties:["Hydraulic Seal Failure","Pump Cavitation","Proportional Valves","Fluid Filtration"],capacityPct:55,activeTicketsCount:2,avgResponseTime:"20 mins",rating:"4.92 / 5.0",color:"#10b981",members:["Lucas Meyer (Lead)","Gabriel Santos"]}];let ft=[{id:"WO-9482",machineId:"CNC-04",machineName:"CNC-Milling-Unit-04",sector:"Sector 7 • Heavy Machining Floor",teamId:"team-tooling",teamName:"Tooling & Precision Cutting Team",assignedTech:"Marcus Chen",urgency:"Immediate",priorityRank:1,failureType:"Tool Wear Failure (TWF)",keyIndicator:"Vibration Spikes (42.8 mm/s)",status:"In Progress",progressPct:45,createdTime:"25 mins ago",targetCompletion:"In 45 mins",parts:["Carbide Inserts (CNMG-120408-PR)","Spindle Bearing SKF-6204"],notes:"Lockout performed. Taper cleaning in progress. Tool presetter ready for re-zeroing."},{id:"WO-9480",machineId:"M103",machineName:"Turbine Alpha M103",sector:"Power Gen Facility • Block 1",teamId:"team-thermal",teamName:"Thermal & Heat Exchanger Team",assignedTech:"Sarah Connor",urgency:"Immediate",priorityRank:2,failureType:"Heat Dissipation Failure (HDF)",keyIndicator:"Combustor Temp 98.6°C",status:"Dispatched",progressPct:20,createdTime:"40 mins ago",targetCompletion:"In 1h 15m",parts:["Heat Exchanger Core","Bio-Stable Coolant 50L"],notes:"Technician en route with cooling chemical flush kit and dual thermocouples."},{id:"WO-9475",machineId:"LATHE-12",machineName:"Lathe-Station-12",sector:"Sector 2 • Precision Turning",teamId:"team-thermal",teamName:"Thermal & Heat Exchanger Team",assignedTech:"Vikram Malhotra",urgency:"4-Hour",priorityRank:4,failureType:"Heat Dissipation Failure (HDF)",keyIndicator:"Spindle Temp 86.5°C",status:"Pending Parts",progressPct:60,createdTime:"1.5 hrs ago",targetCompletion:"In 2h 00m",parts:["Proportional Flow Regulating Valve"],notes:"Part requisitioned from central tool crib. Expected on bay floor in 15 mins."},{id:"WO-9468",machineId:"PRESS-01",machineName:"Hydraulic-Press-Alpha",sector:"Heavy Assembly Line 1",teamId:"team-hydraulic",teamName:"Fluid Power & Hydraulics Team",assignedTech:"Lucas Meyer",urgency:"4-Hour",priorityRank:5,failureType:"Power Failure (PWF)",keyIndicator:"Pressure Drop (2.1 bar)",status:"In Progress",progressPct:75,createdTime:"2 hrs ago",targetCompletion:"In 30 mins",parts:["Hydraulic Seal Rebuild Kit"],notes:"Ram cylinder disassembled. Replaced leaking secondary O-ring seals. Commencing pressure test."}];function Co(s){const t={id:`WO-${Math.floor(1e3+Math.random()*9e3)}`,machineId:s.machineId,machineName:s.machineName,sector:s.sector,teamId:s.teamId,teamName:s.teamName,assignedTech:s.assignedTech,urgency:s.urgency||"Immediate",priorityRank:s.priorityRank||1,failureType:s.failureType,keyIndicator:s.keyIndicator,status:"Dispatched",progressPct:10,createdTime:"Just now",targetCompletion:s.targetCompletion||"In 1h 00m",parts:s.parts||[],notes:s.notes||"Standard SOP dispatched to field team tablet."};ft.unshift(t);const e=dt.find(n=>n.id===s.teamId);return e&&(e.activeTicketsCount+=1,e.capacityPct=Math.min(100,e.capacityPct+10)),t}function Io(s){const t=ft.find(e=>e.id===s);if(t){t.status="Completed",t.progressPct=100;const e=dt.find(n=>n.id===t.teamId);e&&e.activeTicketsCount>0&&(e.activeTicketsCount-=1,e.capacityPct=Math.max(20,e.capacityPct-10))}}const ma=[{id:"CNC-04",name:"CNC-Milling-Unit-04",sector:"Sector 7 • Heavy Machining Floor",dataset:"AI4I 2020",type:"CNC Milling",priority:1,riskLevel:"Critical",failureProbability:89.4,healthScore:22,rulCycles:14,rulDays:2.1,timeToFailure:"4h 12m",keyIndicator:"Vibration Spikes",failureType:"Tool Wear Failure (TWF)",telemetry:{temp:94.2,torque:542,rpm:3820,toolWear:.88,vibration:42.8,pressure:4.8},shapValues:{vibration:.38,toolWear:.28,temp:.22,torque:.12,rpm:-.02},history:[{date:"2026-08-18",event:"Spindle bearing inspection",tech:"Elena Rostova",status:"Completed"},{date:"2026-07-24",event:"Tool head replacement",tech:"Marcus Chen",status:"Completed"}]},{id:"M103",name:"Turbine Alpha M103",sector:"Power Gen Facility • Block 1",dataset:"C-MAPSS",type:"Gas Turbine",priority:2,riskLevel:"Critical",failureProbability:91.2,healthScore:14,rulCycles:12,rulDays:1.8,timeToFailure:"2h 45m",keyIndicator:"High Combustor Temp",failureType:"Heat Dissipation Failure (HDF)",telemetry:{temp:98.6,torque:580,rpm:4600,toolWear:.82,vibration:48.2,pressure:3.2},shapValues:{temp:.42,vibration:.31,torque:.18,toolWear:.11,rpm:.04},history:[{date:"2026-08-12",event:"Thermal barrier coating inspection",tech:"Sarah Connor",status:"Completed"},{date:"2026-06-30",event:"Nozzle guide vane overhaul",tech:"David Vance",status:"Completed"}]},{id:"M104",name:"Compressor Beta M104",sector:"Chemical Synthesis • Train A",dataset:"C-MAPSS",type:"Centrifugal Compressor",priority:3,riskLevel:"Critical",failureProbability:84.1,healthScore:26,rulCycles:24,rulDays:3.6,timeToFailure:"8h 30m",keyIndicator:"Pressure Surge Drift",failureType:"Overstrain Failure (OSF)",telemetry:{temp:88.4,torque:510.5,rpm:4200,toolWear:.74,vibration:38.5,pressure:2.9},shapValues:{pressure:.36,vibration:.29,temp:.21,torque:.14,rpm:-.01},history:[{date:"2026-08-01",event:"Impeller dynamic balance check",tech:"Elena Rostova",status:"Completed"}]},{id:"LATHE-12",name:"Lathe-Station-12",sector:"Sector 2 • Precision Turning",dataset:"AI4I 2020",type:"Industrial Lathe",priority:4,riskLevel:"High",failureProbability:62.1,healthScore:45,rulCycles:68,rulDays:10.2,timeToFailure:"24h 15m",keyIndicator:"Spindle Overheating",failureType:"Heat Dissipation Failure (HDF)",telemetry:{temp:86.5,torque:465,rpm:3450,toolWear:.62,vibration:28.4,pressure:5.1},shapValues:{temp:.35,toolWear:.25,vibration:.22,torque:.15,rpm:.03},history:[{date:"2026-08-10",event:"Coolant system flushing",tech:"Lucas Meyer",status:"Completed"}]},{id:"PRESS-01",name:"Hydraulic-Press-Alpha",sector:"Heavy Assembly Line 1",dataset:"AI4I 2020",type:"Hydraulic Press",priority:5,riskLevel:"High",failureProbability:58.4,healthScore:48,rulCycles:74,rulDays:11.5,timeToFailure:"28h 00m",keyIndicator:"Hydraulic Pressure Drop",failureType:"Power Failure (PWF)",telemetry:{temp:78,torque:490,rpm:2900,toolWear:.58,vibration:24.1,pressure:2.1},shapValues:{pressure:.39,torque:.28,temp:.18,vibration:.12,rpm:.03},history:[{date:"2026-07-15",event:"Hydraulic seal kit replacement",tech:"Marcus Chen",status:"Completed"}]},{id:"M107",name:"Feed Pump Gamma M107",sector:"Boiler Feed Subsystem",dataset:"C-MAPSS",type:"Cooling Pump",priority:6,riskLevel:"High",failureProbability:67.3,healthScore:41,rulCycles:89,rulDays:13.8,timeToFailure:"33h 40m",keyIndicator:"Cavitation Vibration",failureType:"Overstrain Failure (OSF)",telemetry:{temp:81.2,torque:440,rpm:3900,toolWear:.52,vibration:32.6,pressure:3.8},shapValues:{vibration:.41,pressure:.24,temp:.19,torque:.12,rpm:.04},history:[{date:"2026-07-28",event:"Vibration sensor recalibration",tech:"Sarah Connor",status:"Completed"}]},{id:"CONV-01",name:"Conveyor-Main-Line",sector:"Logistics & Materials Bay",dataset:"AI4I 2020",type:"Belt Conveyor",priority:7,riskLevel:"Medium",failureProbability:41.8,healthScore:58,rulCycles:134,rulDays:20.6,timeToFailure:"50h 00m",keyIndicator:"Drive Motor Torque",failureType:"Overstrain Failure (OSF)",telemetry:{temp:69.4,torque:425,rpm:2150,toolWear:.44,vibration:18.2,pressure:6},shapValues:{torque:.32,temp:.22,vibration:.18,toolWear:.14,rpm:.04},history:[{date:"2026-06-20",event:"Tension roller lubrication",tech:"Lucas Meyer",status:"Completed"}]},{id:"M082",name:"Extruder Motor M082",sector:"Polymer Processing Bay 3",dataset:"AI4I 2020",type:"Extruder",priority:8,riskLevel:"Medium",failureProbability:32.4,healthScore:68,rulCycles:156,rulDays:24,timeToFailure:"58h 30m",keyIndicator:"Torque Variance",failureType:"Normal",telemetry:{temp:64.8,torque:395,rpm:2600,toolWear:.38,vibration:14.5,pressure:5.4},shapValues:{torque:.28,temp:.2,vibration:.16,toolWear:.12,rpm:.02},history:[{date:"2026-08-05",event:"Drive belt tensioning",tech:"David Vance",status:"Completed"}]},{id:"PUMP-03",name:"Pump-Unit-03",sector:"Cooling Plant Substation",dataset:"AI4I 2020",type:"Cooling Pump",priority:9,riskLevel:"Medium",failureProbability:26.5,healthScore:72,rulCycles:180,rulDays:28,timeToFailure:"67h 00m",keyIndicator:"Flow Rate Fluctuation",failureType:"Normal",telemetry:{temp:61.2,torque:360,rpm:2400,toolWear:.32,vibration:12.8,pressure:5.8},shapValues:{pressure:.22,temp:.18,vibration:.14,torque:.1,rpm:.01},history:[{date:"2026-07-12",event:"Impeller cleaning",tech:"Marcus Chen",status:"Completed"}]},{id:"ROBOT-02",name:"Robotic-Arm-Assembly-B",sector:"Robotic Welding Bay 4",dataset:"AI4I 2020",type:"Robotic Arm",priority:10,riskLevel:"Healthy",failureProbability:12.2,healthScore:88,rulCycles:310,rulDays:48,timeToFailure:"> 100h",keyIndicator:"Nominal Harmonic Motion",failureType:"Normal",telemetry:{temp:54,torque:310,rpm:2200,toolWear:.21,vibration:7.2,pressure:6.2},shapValues:{temp:.08,vibration:.06,toolWear:.05,torque:.04,rpm:.01},history:[{date:"2026-08-22",event:"Joint fluid flush and calibration",tech:"Sarah Connor",status:"Completed"}]},{id:"M045",name:"Generator Gamma M045",sector:"Power Gen Facility • Block 2",dataset:"C-MAPSS",type:"Gas Turbine",priority:11,riskLevel:"Healthy",failureProbability:8.4,healthScore:92,rulCycles:420,rulDays:65,timeToFailure:"> 150h",keyIndicator:"Optimal Combustion",failureType:"Normal",telemetry:{temp:52.4,torque:295,rpm:3200,toolWear:.15,vibration:5.8,pressure:6.4},shapValues:{temp:.05,vibration:.04,torque:.03,toolWear:.02,rpm:.01},history:[{date:"2026-08-19",event:"Full annual certification",tech:"Elena Rostova",status:"Completed"}]},{id:"M056",name:"Boiler Feed Pump Delta M056",sector:"Boiler Feed Subsystem",dataset:"C-MAPSS",type:"Cooling Pump",priority:12,riskLevel:"Healthy",failureProbability:6.1,healthScore:95,rulCycles:480,rulDays:74,timeToFailure:"> 150h",keyIndicator:"Laminar Flow Stable",failureType:"Normal",telemetry:{temp:48.2,torque:275,rpm:2100,toolWear:.11,vibration:4.3,pressure:6.8},shapValues:{temp:.03,pressure:.02,vibration:.02,torque:.01,rpm:.01},history:[{date:"2026-08-15",event:"Seal gland tightening",tech:"Lucas Meyer",status:"Completed"}]},{id:"CNC-09",name:"CNC-Milling-Unit-09",sector:"Sector 7 • Heavy Machining Floor",dataset:"AI4I 2020",type:"CNC Milling",priority:13,riskLevel:"Healthy",failureProbability:5.3,healthScore:96,rulCycles:510,rulDays:78.5,timeToFailure:"> 150h",keyIndicator:"Precision Collet Locked",failureType:"Normal",telemetry:{temp:49,torque:260,rpm:3400,toolWear:.09,vibration:3.9,pressure:6.5},shapValues:{temp:.03,toolWear:.02,vibration:.02,torque:.01,rpm:.01},history:[{date:"2026-08-20",event:"Linear guide greasing",tech:"David Vance",status:"Completed"}]},{id:"PRESS-04",name:"Hydraulic-Press-Delta",sector:"Heavy Assembly Line 2",dataset:"AI4I 2020",type:"Hydraulic Press",priority:14,riskLevel:"Healthy",failureProbability:4.7,healthScore:97,rulCycles:540,rulDays:83,timeToFailure:"> 150h",keyIndicator:"Ram Force Calibrated",failureType:"Normal",telemetry:{temp:46.5,torque:250,rpm:1950,toolWear:.07,vibration:3.2,pressure:6.9},shapValues:{pressure:.02,torque:.02,temp:.01,vibration:.01,rpm:.01},history:[{date:"2026-08-16",event:"Proportional valve tuning",tech:"Elena Rostova",status:"Completed"}]},{id:"M109",name:"Auxiliary Gas Turbine M109",sector:"Power Gen Facility • Block 3",dataset:"C-MAPSS",type:"Gas Turbine",priority:15,riskLevel:"Healthy",failureProbability:3.8,healthScore:98,rulCycles:600,rulDays:92,timeToFailure:"> 150h",keyIndicator:"Exhaust Gas Spread Optimal",failureType:"Normal",telemetry:{temp:45,torque:240,rpm:3e3,toolWear:.05,vibration:2.8,pressure:7},shapValues:{temp:.02,vibration:.01,torque:.01,toolWear:.01,rpm:.01},history:[{date:"2026-08-21",event:"Ignition system checkout",tech:"Sarah Connor",status:"Completed"}]}];let C=[...ma],Ne=["AI4I 2020","C-MAPSS"];function ba(s,t){return Ne.includes(s)||Ne.push(s),C=[...t,...C],C.sort((e,n)=>n.failureProbability-e.failureProbability),C.forEach((e,n)=>{e.priority=n+1}),C}function Ao(){const s=1248+(C.length-ma.length),t=C.filter(d=>d.riskLevel==="Critical").length+14,e=C.filter(d=>d.riskLevel==="High").length+55,n=C.filter(d=>d.riskLevel==="Medium").length+175,i=Math.max(0,s-t-e-n),a=+(t/s*100).toFixed(1),o=+(e/s*100).toFixed(1),r=+(n/s*100).toFixed(1),l=+(i/s*100).toFixed(1),c=Math.round(C.reduce((d,u)=>d+u.healthScore,0)/C.length);return{total:s,healthy:i,healthyPct:l,warning:n,warningPct:r,highRisk:e,highRiskPct:o,critical:t,criticalPct:a,avgHealth:c}}function Po(s="dashboard"){const t=ft.filter(n=>n.status!=="Completed").length;return`
    <!-- Mobile Backdrop -->
    <div id="sidebar-backdrop" class="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 md:hidden hidden transition-opacity"></div>

    <aside id="sidebar" class="fixed left-0 top-0 h-full w-72 bg-surface/95 backdrop-blur-md border-r border-border-subtle z-50 flex flex-col transition-transform duration-300 -translate-x-full md:translate-x-0 shadow-2xl md:shadow-none">
      <!-- Brand Header -->
      <div class="p-5 border-b border-border-subtle">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-surface-container border border-secondary/30 flex items-center justify-center text-secondary shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              <span class="material-symbols-outlined text-[22px]">precision_manufacturing</span>
            </div>
            <div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-base text-on-surface tracking-wider font-mono">PREDIX</span>
                <span class="px-1.5 py-0.2 rounded text-[9px] font-mono font-bold bg-secondary/15 text-secondary border border-secondary/30">V2.4</span>
              </div>
              <div class="text-[10px] font-mono text-on-surface-variant tracking-wider uppercase mt-0.5">Industrial Intelligence</div>
            </div>
          </div>
          <!-- Mobile Close Button -->
          <button id="btn-close-sidebar" class="md:hidden p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" aria-label="Close Navigation Menu">
            <span class="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>
        <div class="text-[10px] font-mono text-on-surface-variant/70 mt-2.5 px-0.5 flex items-center justify-between border-t border-border-subtle/50 pt-2">
          <span>MISSION CONTROL</span>
          <span class="text-status-healthy font-semibold">● ACTIVE</span>
        </div>
      </div>

      <!-- Navigation Links -->
      <nav class="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        <div class="text-[10px] font-label-md text-on-surface-variant uppercase tracking-wider px-3 mb-2">Operational Modules</div>
        ${[{id:"dashboard",label:"Dashboard",icon:"dashboard",href:"#dashboard"},{id:"fleet-health",label:"Fleet Health",icon:"precision_manufacturing",href:"#fleet-health"},{id:"dataset-profiler",label:"Dataset Ingestion",icon:"settings_input_component",href:"#dataset-profiler",badgeText:`${Ne.length} Sets`},{id:"work-orders",label:"Teams & Work Orders",icon:"assignment_turned_in",href:"#work-orders",badge:t},{id:"what-if-simulator",label:"What-If Simulator",icon:"science",href:"#what-if-simulator"},{id:"model-performance",label:"Model Performance",icon:"query_stats",href:"#model-performance"},{id:"analytics",label:"Analytics",icon:"analytics",href:"#analytics"}].map(n=>{const i=s===n.id||s===""&&n.id==="dashboard";return`
            <a href="${n.href}" 
               data-nav="${n.id}"
               class="flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-xs font-medium transition-all group relative ${i?"bg-secondary/15 text-on-surface border-l-2 border-secondary shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] font-semibold":"text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low"}">
              <span class="material-symbols-outlined text-[19px] transition-transform group-hover:scale-105 ${i?"text-secondary":"text-on-surface-variant group-hover:text-on-surface"}">${n.icon}</span>
              <span class="tracking-wide">${n.label}</span>
              ${n.badgeText?`
                <span class="ml-auto px-1.5 py-0.5 rounded text-[9px] font-mono font-bold ${i?"bg-secondary/25 text-secondary border border-secondary/40":"bg-surface-container text-on-surface-variant"}">${n.badgeText}</span>
              `:n.badge?`
                <span class="ml-auto px-1.5 py-0.5 rounded-full text-[10px] font-mono font-bold ${i?"bg-status-critical text-on-primary":"bg-status-critical/20 text-status-critical border border-status-critical/30"}">${n.badge}</span>
              `:i?'<span class="ml-auto w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_8px_#06B6D4]"></span>':""}
            </a>
          `}).join("")}

        <!-- Telemetry Streams Direct Upload Ingestion -->
        <div class="pt-5 pb-2">
          <div class="text-[10px] font-label-md text-on-surface-variant uppercase tracking-wider px-3 mb-2">Telemetry Ingestion</div>
          <a href="#dataset-profiler" class="flex items-center gap-3 px-3.5 py-2 rounded-lg text-xs font-medium text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors border border-dashed border-border-subtle group">
            <span class="material-symbols-outlined text-[17px] text-secondary group-hover:scale-110 transition-transform">cloud_upload</span>
            <span class="font-mono text-[11px]">Upload Custom Data</span>
            <span class="ml-auto text-[9px] font-mono bg-secondary/15 text-secondary px-1.5 py-0.5 rounded font-bold border border-secondary/20">READY</span>
          </a>
        </div>
      </nav>

      <!-- Engine Status & Profile Footer -->
      <div class="p-3.5 border-t border-border-subtle bg-surface-container-lowest/60 space-y-2.5">
        <div class="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-surface-container-low border border-border-subtle">
          <div class="flex items-center gap-2">
            <div class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-healthy opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-status-healthy"></span>
            </div>
            <span class="text-[11px] font-mono font-medium text-on-surface">Predix Core v2.4.1</span>
          </div>
          <span class="text-[9px] font-mono text-status-healthy font-bold tracking-wider">ONLINE</span>
        </div>

        <div class="flex items-center gap-2.5 px-2 pt-0.5">
          <div class="w-7 h-7 rounded-lg bg-surface-container text-secondary border border-secondary/30 flex items-center justify-center font-bold text-[10px] font-mono">
            OP
          </div>
          <div class="flex flex-col min-w-0">
            <span class="text-xs font-semibold text-on-surface truncate">Ops Commander</span>
            <span class="text-[9.5px] font-mono text-on-surface-variant truncate">Fleet Reliability Lead</span>
          </div>
        </div>
      </div>
    </aside>
  `}const Ns={"Tool Wear Failure (TWF)":{failureMode:"Tool Wear Failure (TWF)",recommendedTeamId:"team-tooling",summary:"Cutting tool insert degradation or spindle bearing friction exceeding allowable dimensional tolerance, causing harmonic chatter and severe thermal spikes.",investigation:{primaryCues:["Vibration amplitude exceeding 35 mm/s on cutting axis Z.","Tool wear counter above 180 min (or > 0.65 mm optical flank wear).","Spindle drive motor torque fluctuating by > 20% under steady feed."],checklist:[{id:"twf-1",task:"Optical Flank Wear Inspection",detail:"Examine carbide insert edge under 20x optical magnifier for micro-chipping and crater wear (> 0.40 mm threshold).",location:"Spindle Tool Holder / Turret",method:"Digital Optical Micrometer"},{id:"twf-2",task:"Spindle Runout & Taper Check",detail:"Mount dial test indicator on spindle nose. Rotate spindle manually to measure radial runout (Tolerance < 0.003 mm).",location:"Spindle Collet & Chuck",method:"Dial Indicator (0.001 mm)"},{id:"twf-3",task:"Drawbar Clamping Force Test",detail:"Verify retention knob pull-force using hydraulic drawbar force gauge (Min spec: 8.5 kN).",location:"Tool Clamping Mechanism",method:"Force Gauge"},{id:"twf-4",task:"Coolant Concentration & Flow",detail:"Check water-soluble coolant refractometer reading (Optimal 8-10% Brix) and nozzle pressure.",location:"Delivery Nozzles",method:"Optical Refractometer"}],ndtMethods:["Acoustic Emission (AE) sensor frequency analysis (100 kHz - 300 kHz band)","Spindle dynamic balance FFT spectrum capture"]},resolution:{safety:"Mandatory LOTO on Main Disconnect Breaker 400V. Engage mechanical spindle brake lock. Wear cut-resistant Kevlar gloves.",mttr:"45 mins - 1h 15m",parts:[{sku:"CNMG-120408-PR",name:"Carbide Cutting Inserts (PVD TiAlN)",qty:4,stock:"In Stock (38 units)"},{sku:"BT40-ER32-70",name:"Precision Collet Chuck Tool Holder",qty:1,stock:"In Stock (6 units)"},{sku:"SKF-6204-2RSH",name:"High-Speed Spindle Bearing Assembly",qty:1,stock:"In Stock (12 units)"}],torqueSpecs:"Tool clamp retaining screw: 4.8 Nm • Toolholder pull stud: 45 Nm cross-pattern.",steps:[{step:1,title:"Isolate & De-energize",desc:"Perform LOTO procedure, verify zero spindle rotational kinetic energy, and drain pressurized coolant lines."},{step:2,title:"Extract Worn Tooling",desc:"Release hydraulic drawbar clamp and extract worn tool holder. Clean taper socket with lint-free solvent wipe."},{step:3,title:"Install Replacement Insert/Collet",desc:"Fit new TiAlN coated insert using calibrated torque wrench to 4.8 Nm. Ensure seating surfaces are free of debris."},{step:4,title:"Calibrate Tool Offset",desc:"Execute automated laser tool presetter cycle to register X/Y/Z length and radius offsets into CNC controller."},{step:5,title:"Post-Service Validation Run",desc:"Run a 10-minute dry test cycle at 3,000 RPM. Confirm vibration RMS drops below 4.5 mm/s before releasing to production."}],validationProtocol:"Verify surface roughness Ra < 0.8 µm on test workpiece cut and log sign-off in MES."}},"Heat Dissipation Failure (HDF)":{failureMode:"Heat Dissipation Failure (HDF)",recommendedTeamId:"team-thermal",summary:"Thermal equilibrium loss where machine heat generation exceeds cooling subsystem rejection capacity, leading to thermal expansion seizing and insulation breakdown.",investigation:{primaryCues:["Process / Spindle temperature exceeding 85°C (Baseline 60°C).","Temperature differential (Process Temp - Air Temp) < 8.6 K at rotational speeds > 2,800 RPM.","Heat exchanger coolant return flow rate dropping below 14.5 L/min."],checklist:[{id:"hdf-1",task:"Coolant Flow Meter & Delta-T Measurement",detail:"Measure temperature delta across heat exchanger inlet/outlet (Expected ΔT ≥ 12°C).",location:"Primary Chiller Loop",method:"Calibrated Dual Thermocouples"},{id:"hdf-2",task:"Radiator & Condenser Fin Buildup",detail:"Inspect heat exchanger fins for particulate clogs, oily sludge, or airflow restriction.",location:"External Heat Sink Assembly",method:"Visual & Airflow Anemometer"},{id:"hdf-3",task:"Recirculation Pump Pressure",detail:"Verify coolant delivery pressure at manifold (Nominal 3.8 - 4.5 bar).",location:"Coolant Substation Manifold",method:"Digital Pressure Gauge"},{id:"hdf-4",task:"Thermal Paste & Heat Pipe Integrity",detail:"Check thermal interface compound for drying, cracking, or thermal pump-out.",location:"Bearing Housing Heat Pipe",method:"Infrared Thermal Imaging"}],ndtMethods:["FLIR Infrared Thermographic thermal gradient survey","Ultrasonic Doppler flow measurement on coolant supply pipes"]},resolution:{safety:"Allow thermal cooldown below 40°C before opening pressurized cooling lines. Depressurize expansion tank. Wear safety goggles and heat-resistant gloves.",mttr:"1h 30m - 2h 30m",parts:[{sku:"HEX-CORE-400",name:"High-Efficiency Plate Heat Exchanger Core",qty:1,stock:"In Stock (4 units)"},{sku:"COOL-SYN-50L",name:"Synthetic Bio-Stable Coolant Concentrate",qty:2,stock:"In Stock (18 units)"},{sku:"VALVE-SOL-24V",name:"Proportional Coolant Flow Regulating Valve",qty:1,stock:"In Stock (7 units)"}],torqueSpecs:"Heat exchanger manifold flange bolts: 32 Nm in star pattern • Sensor thermowell: 18 Nm.",steps:[{step:1,title:"Depressurize & Cool Down",desc:"Isolate electrical power, allow machine thermal equilibrium to drop < 40°C, and depressurize coolant circuit."},{step:2,title:"Chemical Coolant Flush",desc:"Flush cooling lines with descaling chemical neutralizer to remove mineral scale and microbial biofilm."},{step:3,title:"Replace / Clean Heat Exchanger",desc:"Clean radiator fin bank with high-pressure dry nitrogen; replace blocked proportional bypass valve."},{step:4,title:"Refill & Bleed System",desc:"Refill with fresh 10% bio-stable synthetic coolant mixture. Purge all entrapped air pockets via high-point bleeder."},{step:5,title:"Continuous Load Thermal Stress Test",desc:"Run machine at 85% rated load for 30 minutes. Verify steady-state temp stabilizes between 58°C - 64°C."}],validationProtocol:"Continuous steady-state temperature logging < 65°C under full 100% operational duty cycle."}},"Overstrain Failure (OSF)":{failureMode:"Overstrain Failure (OSF)",recommendedTeamId:"team-mech",summary:"Mechanical structural overload caused by tool wear multiplied by high torque, exceeding fatigue limits on drive gears, bearings, and shaft couplings.",investigation:{primaryCues:["Torque load exceeding 520 Nm continuously (Nominal < 400 Nm).","High mechanical strain combined with tool wear (Product of Tool Wear × Torque > 11,000 min·Nm).","Acoustic gear-mesh harmonics elevated above 82 dBA."],checklist:[{id:"osf-1",task:"Shaft & Coupling Alignment Inspection",detail:"Perform laser shaft alignment between drive motor and spindle shaft (Angular < 0.05°, Parallel < 0.03 mm).",location:"Drive Motor Coupling",method:"Laser Alignment Tool"},{id:"osf-2",task:"Gearbox Backlash & Tooth Mesh",detail:"Inspect gear teeth for pitting, scuffing, and measure backlash tolerance.",location:"Planetary Reduction Gearbox",method:"Feeler Gauges & Borescope"},{id:"osf-3",task:"Structural Fastener Pre-load",detail:"Check torque on machine bed anchor bolts and motor mounting plates for loosening.",location:"Machine Bed Mounts",method:"Calibrated Torque Wrench"}],ndtMethods:["Vibration Spectral FFT analysis (1x, 2x, 3x harmonic order tracking)","Magnetic particle inspection (MPI) for shaft fatigue micro-cracks"]},resolution:{safety:"Lockout drive motor circuit. Install mechanical shaft rotation lock. Relieve all stored torsional spring energy.",mttr:"2h 00m - 3h 30m",parts:[{sku:"COUP-ELAS-70",name:"Elastomeric Flexible Jaw Coupling Element",qty:1,stock:"In Stock (9 units)"},{sku:"BRG-TIMK-32208",name:"Tapered Roller Bearing Pair",qty:2,stock:"In Stock (6 units)"},{sku:"SYN-GEAR-75W90",name:"Heavy-Duty Synthetic Gear Lubricant",qty:4,stock:"In Stock (22 units)"}],torqueSpecs:"Motor mounting bolts: 85 Nm • Coupling clamp screws: 24 Nm.",steps:[{step:1,title:"Lockout & Disassemble Coupling",desc:"Isolate power, remove protective guard, and disassemble mechanical drive coupling."},{step:2,title:"Inspect & Replace Bearings",desc:"Extract fatigued drive bearings using hydraulic puller. Press in new Timken precision roller bearings."},{step:3,title:"Laser Precision Alignment",desc:"Reinstall coupling with new elastomeric spider element and perform dual-plane laser alignment."},{step:4,title:"Lubricant Replenishment",desc:"Drain contaminated gearbox oil, flush housing, and refill with ISO VG 220 synthetic gear lubricant."},{step:5,title:"Vibration FFT Order Verification",desc:"Ramp motor speed in 500 RPM increments; verify harmonic 1x unbalance vibration < 2.0 mm/s."}],validationProtocol:"Harmonic vibration baseline < 2.5 mm/s and no abnormal acoustic spikes across operational RPM range."}},"Power Failure (PWF)":{failureMode:"Power Failure (PWF)",recommendedTeamId:"team-electrical",summary:"Electrical drive or power subsystem failure where electrical power (Torque × Rotational Speed) drops below 3,500 W or exceeds 9,000 W threshold.",investigation:{primaryCues:["Instantaneous mechanical power calculation outside allowable 3.5 kW - 9.0 kW window.","Phase current imbalance exceeding 5% on drive inverter output.","DC bus voltage ripple > 8% on VFD drive module."],checklist:[{id:"pwf-1",task:"VFD Drive Bus Voltage & Current Balance",detail:"Measure 3-phase currents U/V/W with true-RMS clamp meter under load.",location:"Main Electrical Control Cabinet",method:"Fluke 376 True-RMS Clamp"},{id:"pwf-2",task:"Motor Insulation Resistance (Megger Test)",detail:"Test winding-to-ground insulation resistance at 1000V DC (Spec > 100 MΩ).",location:"Drive Motor Terminal Box",method:"Insulation Resistance Tester"},{id:"pwf-3",task:"DC Bus Smoothing Capacitors",detail:"Check VFD capacitor bank for bulging, venting, or ESR degradation.",location:"Inverter Power Stage",method:"LCR Meter / Thermal Camera"}],ndtMethods:["Power Quality Analyzer harmonic distortion (THD) logging","Motor current signature analysis (MCSA)"]},resolution:{safety:"Verify zero voltage with certified multimeter! Wait 10 minutes for DC bus capacitors to fully discharge (< 50V DC). Lockout main feeder.",mttr:"1h 15m - 2h 00m",parts:[{sku:"VFD-MOD-15KW",name:"ABB / Siemens 15kW Drive Inverter Module",qty:1,stock:"In Stock (3 units)"},{sku:"FUSE-ULTRA-50A",name:"Semiconductor High-Speed Fuse 50A",qty:3,stock:"In Stock (25 units)"},{sku:"CONTACTOR-24V",name:"Heavy-Duty 3-Pole Contactor 65A",qty:1,stock:"In Stock (11 units)"}],torqueSpecs:"Terminal power bus lugs: 12 Nm • Inverter module chassis grounding: 6 Nm.",steps:[{step:1,title:"LOTO & DC Discharge Verification",desc:"Isolate 480V feeder, verify zero energy state on DC bus with multimeter."},{step:2,title:"Replace Blown Fuses / VFD Module",desc:"Swap degraded inverter power stage or blown semiconductor high-speed protection fuses."},{step:3,title:"Terminal Retorquing",desc:"Torque all power cable termination lugs to 12 Nm to eliminate high-resistance thermal hotspots."},{step:4,title:"VFD Parameter Auto-Tuning",desc:"Execute VFD motor parameter identification routine (stationary motor ID run)."},{step:5,title:"Full-Load Step Response Test",desc:"Step motor load from 0% to 100% in 10-second increments while monitoring phase current balance."}],validationProtocol:"Phase current imbalance < 2.0% and DC voltage ripple < 3.0% under full rated torque."}},Normal:{failureMode:"Normal (Preventative Routine)",recommendedTeamId:"team-mech",summary:"Asset telemetry operates within nominal boundaries. Standard preventative inspection recommended to maintain high reliability.",investigation:{primaryCues:["All telemetry signals within ISO nominal bounds.","Routine operational runtime accumulator reached service interval."],checklist:[{id:"norm-1",task:"Routine Visual & Acoustic Sweep",detail:"Perform 360-degree walkaround for fluid leaks, unusual hums, or vibration.",location:"Entire Unit",method:"Visual & Listening Probe"},{id:"norm-2",task:"Lubricant Level & Contamination",detail:"Verify sight-glass oil level and check for water emulsification.",location:"Reservoirs",method:"Visual Inspection"}],ndtMethods:["Periodic vibration FFT baseline snapshot"]},resolution:{safety:"Standard PPE required: Safety glasses, steel-toe boots.",mttr:"20 mins - 30 mins",parts:[{sku:"LUB-SYN-1L",name:"ISO VG 46 Multi-Purpose Synthetic Lubricant",qty:1,stock:"In Stock (45 units)"}],torqueSpecs:"Sight glass plug: 15 Nm.",steps:[{step:1,title:"Top off fluids",desc:"Replenish lubricant reservoirs with approved synthetic oil."},{step:2,title:"Wipe down sensors",desc:"Clean optical and vibration sensor faces."},{step:3,title:"Log routine sign-off",desc:"Record completed preventative checklist in system."}],validationProtocol:"Sensor telemetry verified stable in dashboard."}}};function Sn(s){const t=s.failureType||"Normal";for(const e of Object.keys(Ns))if(t.includes(e)||e.includes(t))return Ns[e];return Ns["Tool Wear Failure (TWF)"]}function fe(s,t=null){if(!s)return;const e=Sn(s),n=dt.find(f=>f.id===e.recommendedTeamId)||dt[0],i=new Date,a=i.toLocaleDateString()+" "+i.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),o=`REP-${s.id}-${Math.floor(1e3+Math.random()*9e3)}`,r=s.riskLevel==="Critical",l=r?"#dc2626":s.riskLevel==="High"?"#d97706":"#059669",c=`
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
          <td class="meta-val"><strong>${o}</strong></td>
          <td class="meta-label">Generated Timestamp:</td>
          <td class="meta-val">${a}</td>
        </tr>
        <tr>
          <td class="meta-label">Industrial Facility:</td>
          <td class="meta-val">Heavy Machining & Advanced Turbomachinery Facility</td>
          <td class="meta-label">Prepared By:</td>
          <td class="meta-val">Ops Command (Lead Reliability Metrology)</td>
        </tr>
        <tr>
          <td class="meta-label">Target Asset ID & Name:</td>
          <td class="meta-val"><strong>${s.id}</strong> — ${s.name}</td>
          <td class="meta-label">Operational Sector:</td>
          <td class="meta-val">${s.sector}</td>
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
          <td style="font-weight: bold; font-size: 12pt;">Priority #${s.priority}</td>
          <td style="font-weight: bold; color: ${l}; font-size: 12pt;">${s.riskLevel}</td>
          <td class="${r?"highlight-critical":"highlight-warning"}">${s.failureProbability}%</td>
          <td style="font-weight: bold;">${s.healthScore} / 100</td>
          <td style="font-weight: bold;">${s.rulCycles} Cycles (~${s.rulDays} Days)</td>
          <td style="font-weight: bold;">${s.failureType}</td>
        </tr>
        <tr>
          <td colspan="6" style="padding: 10px; background-color: #f8fafc;">
            <strong>Executive Summary for Higher Officials:</strong><br>
            ${e.summary} The asset has triggered a critical telemetry alarm on <strong>${s.keyIndicator}</strong>. Failure probability is calculated at ${s.failureProbability}% with estimated continuous operational endurance remaining of ${s.timeToFailure||s.rulDays+" days"}. Immediate intervention is recommended to prevent catastrophic failure, unintended plant downtime, and collateral spindle assembly damage.
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
          <td style="font-weight: bold;">${s.telemetry.temp} °C</td>
          <td>60.0 °C</td>
          <td>80.0 °C</td>
          <td class="${s.telemetry.temp>80?"highlight-critical":"highlight-healthy"}">${s.telemetry.temp>80?"HIGH THERMAL ALERT (+ "+(s.telemetry.temp-60).toFixed(1)+"°C)":"NOMINAL"}</td>
        </tr>
        <tr>
          <td>Vibration Amplitude (RMS)</td>
          <td style="font-weight: bold;">${s.telemetry.vibration} mm/s</td>
          <td>8.0 mm/s</td>
          <td>18.0 mm/s (ISO 10816 Limit)</td>
          <td class="${s.telemetry.vibration>18?"highlight-critical":"highlight-healthy"}">${s.telemetry.vibration>18?"EXCESSIVE HARMONIC STRESS (+ "+(s.telemetry.vibration-8).toFixed(1)+" mm/s)":"NOMINAL"}</td>
        </tr>
        <tr>
          <td>Torque Load</td>
          <td style="font-weight: bold;">${s.telemetry.torque} Nm</td>
          <td>380 Nm</td>
          <td>500 Nm</td>
          <td class="${s.telemetry.torque>480?"highlight-warning":"highlight-healthy"}">${s.telemetry.torque>480?"HIGH MOTOR STRAIN":"NOMINAL"}</td>
        </tr>
        <tr>
          <td>Tool Wear Index</td>
          <td style="font-weight: bold;">${s.telemetry.toolWear} mm</td>
          <td>0.15 mm</td>
          <td>0.80 mm</td>
          <td class="${s.telemetry.toolWear>.65?"highlight-critical":"highlight-healthy"}">${s.telemetry.toolWear>.65?"CRITICAL FLANK WEAR":"NOMINAL"}</td>
        </tr>
        <tr>
          <td>Rotational Speed</td>
          <td>${s.telemetry.rpm} RPM</td>
          <td>3200 RPM</td>
          <td>2000 - 5000 RPM</td>
          <td>Within Operating Envelope</td>
        </tr>
        <tr>
          <td>Hydraulic / Fluid Pressure</td>
          <td>${s.telemetry.pressure} bar</td>
          <td>6.0 bar</td>
          <td>3.5 bar Min</td>
          <td class="${s.telemetry.pressure<3.5?"highlight-critical":"highlight-healthy"}">${s.telemetry.pressure<3.5?"PRESSURE DROP ALERT":"OPTIMAL"}</td>
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
        ${e.investigation.checklist.map((f,h)=>`
          <tr>
            <td style="text-align: center; font-weight: bold;">${h+1}</td>
            <td style="font-weight: bold;">${f.task}</td>
            <td>${f.location}</td>
            <td style="font-mono;">${f.method}</td>
            <td>${f.detail}</td>
          </tr>
        `).join("")}
      </table>

      <!-- Section 4: Standard Operating Procedure ("How to Resolve") -->
      <div class="section-title">4. RESOLUTION STANDARD OPERATING PROCEDURE (HOW TO RESOLVE)</div>
      <table class="sub-table">
        <tr>
          <td colspan="3" style="background-color: #fffbeb; padding: 10px; border-left: 4px solid #f59e0b;">
            <strong>MANDATORY SAFETY & LOTO REQUIREMENT:</strong><br>
            ${e.resolution.safety}<br>
            <strong>Calibrated Fastener Torque Spec:</strong> ${e.resolution.torqueSpecs}<br>
            <strong>Estimated Mean Time to Repair (MTTR):</strong> ${e.resolution.mttr}
          </td>
        </tr>
        <tr>
          <th style="width: 60px;">Phase</th>
          <th>Action Step</th>
          <th>Procedure Description</th>
        </tr>
        ${e.resolution.steps.map(f=>`
          <tr>
            <td style="text-align: center; font-weight: bold;">Phase ${f.step}</td>
            <td style="font-weight: bold;">${f.title}</td>
            <td>${f.desc}</td>
          </tr>
        `).join("")}
        <tr>
          <td colspan="3" style="background-color: #ecfdf5; padding: 8px; font-weight: bold; color: #065f46;">
            POST-SERVICE VALIDATION PROTOCOL: ${e.resolution.validationProtocol}
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
        ${e.resolution.parts.map(f=>`
          <tr>
            <td style="font-weight: bold; font-family: monospace;">${f.sku}</td>
            <td>${f.name}</td>
            <td style="text-align: center; font-weight: bold;">${f.qty}</td>
            <td style="font-weight: bold; color: #059669;">${f.stock}</td>
          </tr>
        `).join("")}
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
          <td style="font-weight: bold; font-size: 11pt;">${n.name}</td>
          <td style="font-weight: bold;">${n.lead} (${n.leadTitle})</td>
          <td style="font-weight: bold; font-family: monospace;">${t?t.id:"WO-"+Math.floor(1e3+Math.random()*9e3)}</td>
          <td class="${r?"highlight-critical":"highlight-warning"}">${t?t.urgency:"Immediate SLA (< 1 Hour)"}</td>
          <td style="font-weight: bold;">${t?t.targetCompletion:"In "+e.resolution.mttr}</td>
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
  `,d=new Blob([c],{type:"application/vnd.ms-excel;charset=utf-8;"}),u=URL.createObjectURL(d),p=document.createElement("a");p.setAttribute("href",u),p.setAttribute("download",`Executive_Report_${s.id}_${i.toISOString().slice(0,10)}.xls`),document.body.appendChild(p),p.click(),document.body.removeChild(p),URL.revokeObjectURL(u)}function Ps(s,t){const e=new Date,i=`
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
          <td colspan="4"><strong>Report Date:</strong> ${e.toLocaleDateString()+" "+e.toLocaleTimeString()}</td>
          <td colspan="3"><strong>Total Assets Monitored:</strong> ${s.length} (Global: 1,248)</td>
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
        ${s.map(l=>`
          <tr>
            <td style="text-align: center; font-weight: bold;">#${l.priority}</td>
            <td style="font-weight: bold; font-family: monospace;">${l.id}</td>
            <td style="font-weight: bold;">${l.name}</td>
            <td>${l.sector}</td>
            <td>${l.type}</td>
            <td class="${l.riskLevel==="Critical"?"crit":l.riskLevel==="High"?"warn":"norm"}">${l.riskLevel}</td>
            <td style="font-weight: bold; text-align: right;">${l.failureProbability}%</td>
            <td style="text-align: center;">${l.healthScore}/100</td>
            <td style="text-align: center;">${l.rulCycles} (~${l.rulDays}d)</td>
            <td>${l.keyIndicator}</td>
            <td>${l.failureType}</td>
          </tr>
        `).join("")}
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
        ${t.map(l=>`
          <tr>
            <td style="font-weight: bold; font-family: monospace;">${l.id}</td>
            <td>${l.machineName} (${l.machineId})</td>
            <td>${l.teamName}</td>
            <td style="font-weight: bold;">${l.assignedTech}</td>
            <td style="font-weight: bold;">${l.urgency}</td>
            <td>${l.status} (${l.progressPct}%)</td>
            <td>${l.targetCompletion}</td>
            <td>${(l.parts||[]).join(", ")}</td>
          </tr>
        `).join("")}
      </table>
      <br>
      <div style="border: 2px dashed #94a3b8; padding: 12px; background-color: #f8fafc;">
        <strong>Operations Director Authorization Signature:</strong> ____________________________ &nbsp;&nbsp;&nbsp;&nbsp; <strong>Date:</strong> _______________
      </div>
    </body>
    </html>
  `,a=new Blob([i],{type:"application/vnd.ms-excel;charset=utf-8;"}),o=URL.createObjectURL(a),r=document.createElement("a");r.setAttribute("href",o),r.setAttribute("download",`Fleet_Executive_Briefing_${e.toISOString().slice(0,10)}.xls`),document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(o)}function Tn(s,t="fleet_maintenance_report.csv"){if(!s||!s.length)return;const e=["Priority","Machine ID","Name","Sector","Type","Dataset","Risk Level","Failure Probability (%)","Health Score","RUL (Cycles)","RUL (Est. Days)","Key Indicator","Failure Type","Temp (C)","Torque (Nm)","RPM","Tool Wear (mm)","Vibration (mm/s)"],n=s.map(l=>[l.priority,`"${l.id}"`,`"${l.name}"`,`"${l.sector}"`,`"${l.type}"`,`"${l.dataset}"`,`"${l.riskLevel}"`,l.failureProbability,l.healthScore,l.rulCycles,l.rulDays,`"${l.keyIndicator}"`,`"${l.failureType}"`,l.telemetry.temp,l.telemetry.torque,l.telemetry.rpm,l.telemetry.toolWear,l.telemetry.vibration]),i=[e.join(","),...n.map(l=>l.join(","))].join(`
`),a=new Blob([i],{type:"text/csv;charset=utf-8;"}),o=URL.createObjectURL(a),r=document.createElement("a");r.setAttribute("href",o),r.setAttribute("download",t),document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(o)}function Ro(s){const t={id:null,name:null,sector:null,type:null,temp:null,torque:null,rpm:null,toolWear:null,vibration:null,pressure:null,failureType:null};return s.forEach((e,n)=>{const i=e.trim().toLowerCase().replace(/[^a-z0-9_]/g,"");!t.id&&/^(id|machine_id|machineid|udi|product_id|asset_id|assetid)$/.test(i)?t.id=n:!t.name&&/^(name|machine_name|machinename|asset_name|title|equipment)$/.test(i)?t.name=n:!t.sector&&/^(sector|location|bay|area|facility|plant_area|line)$/.test(i)?t.sector=n:!t.type&&/^(type|machine_type|equipment_type|category)$/.test(i)?t.type=n:!t.temp&&/(temp|temperature|process_temp|spindle_temp|t_degc|air_temp)/.test(i)?t.temp=n:!t.torque&&/(torque|torque_nm|motor_torque|load|load_nm)/.test(i)?t.torque=n:!t.rpm&&/(rpm|rotational_speed|speed|spindle_speed|rot_speed|velocity)/.test(i)?t.rpm=n:!t.toolWear&&/(wear|tool_wear|tool_wear_min|wear_index|flank_wear|wear_mm)/.test(i)?t.toolWear=n:!t.vibration&&/(vibration|vib|vib_rms|vibration_amplitude|vibe|harmonic)/.test(i)?t.vibration=n:!t.pressure&&/(pressure|hydraulic_pressure|fluid_pressure|bar|press_bar)/.test(i)?t.pressure=n:!t.failureType&&/(failure|failure_type|failure_mode|target|alarm|issue)/.test(i)&&(t.failureType=n)}),t}function ga(s){const t=s.split(/\r?\n/).filter(a=>a.trim().length>0);if(t.length<2)throw new Error("CSV file must contain a header row and at least one data row.");const e=a=>{const o=[];let r="",l=!1;for(let c=0;c<a.length;c++){const d=a[c];d==='"'||d==="'"?l=!l:d===","&&!l?(o.push(r.trim()),r=""):r+=d}return o.push(r.trim()),o},n=e(t[0]),i=t.slice(1).map(a=>e(a));return{headers:n,rows:i}}function xa(s,t,e="Uploaded Dataset"){const n=Ro(s),i=t.map((a,o)=>{const r=n.id!==null&&a[n.id]?a[n.id].replace(/"/g,""):`ASSET-${String(o+101).padStart(3,"0")}`,l=n.name!==null&&a[n.name]?a[n.name].replace(/"/g,""):`Machine Unit ${r}`,c=n.sector!==null&&a[n.sector]?a[n.sector].replace(/"/g,""):`Sector ${o%5+1} • Production Bay`,d=n.type!==null&&a[n.type]?a[n.type].replace(/"/g,""):o%3===0?"CNC Milling":o%3===1?"Gas Turbine":"Hydraulic Press",u=n.temp!==null&&!isNaN(parseFloat(a[n.temp]))?parseFloat(a[n.temp]):+(55+Math.random()*35).toFixed(1),p=n.torque!==null&&!isNaN(parseFloat(a[n.torque]))?parseFloat(a[n.torque]):Math.round(320+Math.random()*220),f=n.rpm!==null&&!isNaN(parseFloat(a[n.rpm]))?parseFloat(a[n.rpm]):Math.round(2200+Math.random()*2400);let h=n.toolWear!==null&&!isNaN(parseFloat(a[n.toolWear]))?parseFloat(a[n.toolWear]):+(Math.random()*.9).toFixed(2);const m=h>5?+(h/250).toFixed(2):h,b=n.vibration!==null&&!isNaN(parseFloat(a[n.vibration]))?parseFloat(a[n.vibration]):+(4+Math.random()*38).toFixed(1),g=n.pressure!==null&&!isNaN(parseFloat(a[n.pressure]))?parseFloat(a[n.pressure]):+(2+Math.random()*5).toFixed(1),x=(u-60)/40,w=(m-.2)/.6,v=(p-350)/200,y=(b-10)/30,k=Math.abs(f-3200)/1500;let _=.32*Math.max(0,y)*100+.28*Math.max(0,x)*100+.22*Math.max(0,w)*100+.18*Math.max(0,v)*100;u>82&&b>30&&m>.6&&(_+=20);const S=Math.min(99.2,Math.max(3.5,+_.toFixed(1))),E=Math.max(8,Math.min(99,Math.round(100-S)));let M="Healthy";S>=80?M="Critical":S>=50?M="High":S>=25&&(M="Medium");const I=Math.max(8,Math.round(E/100*550+(Math.random()*20-10))),P=+(I/6.5).toFixed(1),G=S>80?`${Math.floor(P*2)}h ${Math.floor(Math.random()*45)}m`:`~${P} days`;let Y="Normal",D="Nominal Dynamics";if(m>.65||m>.5&&b>32?(Y="Tool Wear Failure (TWF)",D="Tool Flank Wear & Chatter"):u>82?(Y="Heat Dissipation Failure (HDF)",D="High Process Temp Gradient"):p>500&&m>.4?(Y="Overstrain Failure (OSF)",D="Torque Strain & Harmonics"):g<3.2||p<240?(Y="Power Failure (PWF)",D="Line Pressure Drop"):S>65&&(Y="Random Failure (RNF)",D="Vibration Anomaly"),n.failureType!==null&&a[n.failureType]){const O=a[n.failureType].trim();O&&O!=="0"&&O.toLowerCase()!=="none"&&(Y=O.includes("TWF")?"Tool Wear Failure (TWF)":O.includes("HDF")?"Heat Dissipation Failure (HDF)":O.includes("OSF")?"Overstrain Failure (OSF)":O.includes("PWF")?"Power Failure (PWF)":O)}return{id:r,name:l,sector:c,dataset:e,type:d,priority:1,riskLevel:M,failureProbability:S,healthScore:E,rulCycles:I,rulDays:P,timeToFailure:G,keyIndicator:D,failureType:Y,telemetry:{temp:u,torque:p,rpm:f,toolWear:m,vibration:b,pressure:g},shapValues:{vibration:+(y*.35).toFixed(2),temp:+(x*.28).toFixed(2),toolWear:+(w*.22).toFixed(2),torque:+(v*.15).toFixed(2),rpm:+(k*.05).toFixed(2)},history:[{date:"2026-08-20",event:"Automated Telemetry Ingestion",tech:"Predix AI Ingest Pipeline",status:"Ingested"}]}});return i.sort((a,o)=>o.failureProbability-a.failureProbability),i.forEach((a,o)=>{a.priority=o+1}),i}function En(){return`UDI,Product_ID,Type,Air_Temperature_K,Process_Temperature_C,Rotational_Speed_RPM,Torque_Nm,Tool_Wear_min,Vibration_mms,Hydraulic_Pressure_bar,Machine_Failure,Failure_Type
1,M14860,CNC Milling,298.1,88.4,1551,542.8,214,44.2,4.8,1,Tool Wear Failure (TWF)
2,L47181,Industrial Lathe,298.2,94.2,1408,465.0,180,38.5,5.1,1,Heat Dissipation Failure (HDF)
3,L47182,Hydraulic Press,298.1,78.0,1498,494.5,145,26.4,2.1,1,Power Failure (PWF)
4,M14863,Centrifugal Compressor,298.2,74.5,1433,480.0,120,31.2,3.4,1,Overstrain Failure (OSF)
5,L47184,Cooling Pump,298.2,62.1,1408,360.0,78,14.8,5.8,0,Normal
6,L47185,Belt Conveyor,298.1,58.4,1338,340.0,45,11.2,6.1,0,Normal
7,M14866,Robotic Arm,298.1,54.0,1527,310.0,32,7.5,6.4,0,Normal
8,L47187,Extruder Motor,298.3,64.8,1600,395.0,88,16.2,5.2,0,Normal
9,M14868,Gas Turbine,298.4,98.6,1820,580.0,195,48.2,3.2,1,Heat Dissipation Failure (HDF)
10,L47189,CNC Milling,298.4,49.0,1410,260.0,15,4.1,6.5,0,Normal`}function Mn(){return`Unit_ID,Equipment_Name,Sector,Operating_Temp_C,Torque_Nm,Rotor_Speed_RPM,Tool_Wear_Index,Vibration_Amplitude_mms,Fluid_Pressure_bar,Failure_Classification
CM-101,Turbofan Engine Core #1,Power Generation Bay 1,96.4,560,4800,0.85,46.8,3.1,Heat Dissipation Failure (HDF)
CM-102,Combustor Assembly A,Power Generation Bay 2,89.1,520,4400,0.72,39.4,3.8,Overstrain Failure (OSF)
CM-103,High-Pressure Compressor,Chemical Synthesis Unit,84.5,490,4100,0.68,34.2,4.2,Overstrain Failure (OSF)
CM-104,Low-Pressure Turbine,Power Generation Bay 1,68.2,410,3800,0.42,18.5,5.6,Normal
CM-105,Gearbox Drive Assembly,Heavy Machining Floor,64.0,380,3600,0.30,12.4,6.0,Normal
CM-106,Feed Booster Pump,Cooling Substation,52.4,290,3200,0.18,6.8,6.4,Normal
CM-107,Secondary Compressor,Gas Compression Bay,50.0,270,3000,0.12,4.5,6.8,Normal`}function qn(s="ai4i"){const t=s==="cmapss"?Mn():En(),e=s==="cmapss"?"C_MAPSS_Turbofan_Sample.csv":"AI4I_2020_Predictive_Maintenance_Sample.csv",n=new Blob([t],{type:"text/csv;charset=utf-8;"}),i=URL.createObjectURL(n),a=document.createElement("a");a.setAttribute("href",i),a.setAttribute("download",e),document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(i)}function B(s,t="info",e=3500){const n=document.getElementById("toast-root");if(!n)return;const i={success:"check_circle",error:"error",warning:"warning",info:"info"},a={success:"border-status-healthy/40 text-status-healthy shadow-[0_0_15px_rgba(16,185,129,0.15)]",error:"border-status-critical/40 text-status-critical shadow-[0_0_15px_rgba(239,68,68,0.15)]",warning:"border-status-warning/40 text-status-warning shadow-[0_0_15px_rgba(245,158,11,0.15)]",info:"border-secondary/40 text-secondary shadow-[0_0_15px_rgba(6,182,212,0.15)]"},o=document.createElement("div");o.className=`pointer-events-auto flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border bg-surface/95 backdrop-blur-md ${a[t]||a.info} w-full sm:w-auto min-w-[240px] max-w-full sm:max-w-md shadow-2xl animate-toast`,o.innerHTML=`
    <span class="material-symbols-outlined text-[20px] shrink-0">${i[t]||"info"}</span>
    <div class="flex-1 text-xs font-medium text-on-surface leading-tight font-mono">${s}</div>
    <button class="toast-close text-on-surface-variant hover:text-on-surface p-1">
      <span class="material-symbols-outlined text-[16px]">close</span>
    </button>
  `,n.appendChild(o);const r=o.querySelector(".toast-close"),l=()=>{o.style.opacity="0",o.style.transform="translateY(10px)",o.style.transition="all 0.2s ease",setTimeout(()=>{o.parentNode&&o.parentNode.removeChild(o)},200)};r&&r.addEventListener("click",l),setTimeout(l,e)}function ya(s=null){var l,c,d,u,p;const t=document.getElementById("modal-root");if(!t)return;const e=`
    <div id="upload-modal-backdrop" class="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-2 sm:p-4 animate-modal-backdrop">
      <div class="bg-surface w-full max-w-xl rounded-xl sm:rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-border-subtle overflow-hidden flex flex-col max-h-[96vh] sm:max-h-[90vh] animate-modal my-auto">
        <!-- Header -->
        <div class="px-4 py-3 sm:px-6 sm:py-4 bg-surface-container-low/90 border-b border-border-subtle text-on-surface flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-secondary/15 border border-secondary/30 text-secondary flex items-center justify-center shadow-[0_0_10px_rgba(6,182,212,0.15)] shrink-0">
              <span class="material-symbols-outlined text-[20px] sm:text-[22px]">upload_file</span>
            </div>
            <div class="min-w-0">
              <h3 class="font-bold text-xs sm:text-sm text-on-surface font-mono leading-tight truncate">Ingest Custom Telemetry Dataset</h3>
              <p class="text-[10px] sm:text-[11px] text-on-surface-variant font-mono mt-0.5 truncate">Upload CSV/JSON for Real-Time AI Inference Scoring</p>
            </div>
          </div>
          <button id="btn-close-upload-modal" class="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors shrink-0">
            <span class="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <!-- Body Content -->
        <div class="p-4 sm:p-6 space-y-3.5 sm:space-y-4 text-xs overflow-y-auto">
          <!-- Drag & Drop Upload Zone -->
          <div id="drop-zone" class="border-2 border-dashed border-border-subtle rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center gap-2 text-center bg-surface-container-low/40 hover:bg-surface-container-low hover:border-secondary transition-all cursor-pointer group">
            <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-secondary/15 text-secondary border border-secondary/30 flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_10px_rgba(6,182,212,0.15)]">
              <span class="material-symbols-outlined text-[24px] sm:text-[28px]">cloud_upload</span>
            </div>
            <div>
              <span class="font-bold text-xs sm:text-sm text-on-surface font-mono">Click to upload or drag & drop</span>
              <p class="text-[10px] sm:text-[11px] text-on-surface-variant font-mono mt-0.5">Supports industrial CSV or JSON files (up to 50MB)</p>
            </div>
            <input type="file" id="file-input" accept=".csv,.json" class="hidden">
            <div class="text-[9.5px] sm:text-[10px] font-mono px-2.5 py-1 rounded bg-surface border border-border-subtle text-on-surface-variant mt-2">
              Auto-maps: Machine ID, Temp, Torque, RPM, Tool Wear, Vibration, Pressure
            </div>
          </div>

          <!-- Processing Progress (Hidden by default) -->
          <div id="upload-progress-container" class="hidden p-4 rounded-xl bg-surface-container-low border border-border-subtle space-y-2 font-mono">
            <div class="flex items-center justify-between text-xs">
              <span id="upload-progress-status" class="font-bold text-secondary flex items-center gap-1.5">
                <span class="material-symbols-outlined text-[16px] animate-spin">sync</span>
                <span>Running Predictive Scoring Pipeline...</span>
              </span>
              <span id="upload-progress-pct" class="font-bold text-secondary">0%</span>
            </div>
            <div class="w-full bg-surface-container h-2 rounded-full overflow-hidden">
              <div id="upload-progress-bar" class="h-full bg-secondary shadow-[0_0_8px_#06B6D4] transition-all duration-300 w-0"></div>
            </div>
          </div>

          <!-- 1-Click Sample Preloads -->
          <div class="pt-2 border-t border-border-subtle font-mono">
            <span class="font-label-md text-on-surface-variant uppercase text-[10px] block mb-2">Or test instantly with pre-packaged telemetry:</span>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <button id="btn-load-sample-ai4i" class="p-2.5 rounded-xl bg-surface-container-low hover:bg-surface-container border border-border-subtle text-left transition-all flex items-center gap-2 group">
                <span class="material-symbols-outlined text-[18px] text-secondary group-hover:scale-110 transition-transform">precision_manufacturing</span>
                <div>
                  <div class="font-bold text-on-surface text-xs">AI4I 2020 Sample</div>
                  <div class="text-[10px] text-on-surface-variant font-mono">10 CNC & Lathe records</div>
                </div>
              </button>
              <button id="btn-load-sample-cmapss" class="p-2.5 rounded-xl bg-surface-container-low hover:bg-surface-container border border-border-subtle text-left transition-all flex items-center gap-2 group">
                <span class="material-symbols-outlined text-[18px] text-secondary group-hover:scale-110 transition-transform">rocket_launch</span>
                <div>
                  <div class="font-bold text-on-surface text-xs">NASA C-MAPSS Sample</div>
                  <div class="text-[10px] text-on-surface-variant font-mono">7 Turbofan Degradation rows</div>
                </div>
              </button>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="px-6 py-3 bg-surface-container-low/90 border-t border-border-subtle flex items-center justify-between text-xs font-mono">
          <span class="text-on-surface-variant">Instant in-browser edge AI processing</span>
          <button id="btn-cancel-upload" class="px-3 py-1.5 rounded-lg border border-border-subtle bg-surface-container hover:bg-surface-container-high text-on-surface font-semibold transition-all">
            Cancel
          </button>
        </div>
      </div>
    </div>
  `;t.innerHTML=e;const n=()=>{t.innerHTML=""};(l=document.getElementById("btn-close-upload-modal"))==null||l.addEventListener("click",n),(c=document.getElementById("btn-cancel-upload"))==null||c.addEventListener("click",n),(d=document.getElementById("upload-modal-backdrop"))==null||d.addEventListener("click",f=>{f.target.id==="upload-modal-backdrop"&&n()});const i=document.getElementById("drop-zone"),a=document.getElementById("file-input");i==null||i.addEventListener("click",()=>a==null?void 0:a.click()),i==null||i.addEventListener("dragover",f=>{f.preventDefault(),i.classList.add("border-secondary","bg-secondary/10")}),i==null||i.addEventListener("dragleave",()=>{i.classList.remove("border-secondary","bg-secondary/10")}),i==null||i.addEventListener("drop",f=>{f.preventDefault(),i.classList.remove("border-secondary","bg-secondary/10"),f.dataTransfer.files&&f.dataTransfer.files[0]&&o(f.dataTransfer.files[0])}),a==null||a.addEventListener("change",f=>{f.target.files&&f.target.files[0]&&o(f.target.files[0])}),(u=document.getElementById("btn-load-sample-ai4i"))==null||u.addEventListener("click",()=>{r(En(),"Sample AI4I 2020 Dataset")}),(p=document.getElementById("btn-load-sample-cmapss"))==null||p.addEventListener("click",()=>{r(Mn(),"Sample NASA C-MAPSS Dataset")});const o=f=>{const h=new FileReader;h.onload=m=>{r(m.target.result,f.name.replace(/\.[^/.]+$/,""))},h.readAsText(f)},r=(f,h)=>{const m=document.getElementById("upload-progress-container"),b=document.getElementById("upload-progress-bar"),g=document.getElementById("upload-progress-pct");m&&m.classList.remove("hidden"),b&&(b.style.width="35%"),g&&(g.innerText="35%"),setTimeout(()=>{try{b&&(b.style.width="75%"),g&&(g.innerText="75%");let x,w;if(f.trim().startsWith("[")||f.trim().startsWith("{")){const y=JSON.parse(f),k=Array.isArray(y)?y:[y];x=Object.keys(k[0]||{}),w=k.map(_=>x.map(S=>String(_[S]??"")))}else{const y=ga(f);x=y.headers,w=y.rows}const v=xa(x,w,h);ba(h,v),b&&(b.style.width="100%"),g&&(g.innerText="100%"),setTimeout(()=>{n(),B(`Successfully ingested and scored ${v.length} machines from "${h}"!`,"success",5e3),s?s(h,v):window.location.hash="#fleet-health"},400)}catch(x){B(`Failed to parse dataset: ${x.message}`,"error",5e3),m&&m.classList.add("hidden")}},400)}}function Lo(s="dashboard"){const t={dashboard:{title:"Predictive Maintenance Priority Engine",sub:"PREDICT → EXPLAIN → PRIORITIZE → RESOLVE"},"fleet-health":{title:"Fleet Health Diagnostics",sub:"ASSET RUL, FAILURE PROBABILITY & PRIORITY QUEUE"},"dataset-profiler":{title:"Dataset Ingestion & Profiler",sub:"CUSTOM TELEMETRY CSV/JSON & REAL-TIME EDGE INFERENCE SCORING"},"work-orders":{title:"Maintenance Teams & Work Order Routing",sub:"SOP EXECUTION, SKILL-MATCHED TEAMS & SLA TIMERS"},"what-if-simulator":{title:"What-If Risk Simulator",sub:"INTERACTIVE OPERATING PARAMETER SANDBOX & SHAP EXPLAINER"},"model-performance":{title:"Model Performance & Benchmark",sub:"ROC-AUC, CONFUSION MATRIX & GLOBAL FEATURE IMPORTANCE"},analytics:{title:"Telemetry & Failure Analytics",sub:"MULTI-SENSOR TIME-SERIES TRENDS & FAILURE MODE PARETO"}},e=t[s]||t.dashboard;return`
    <header class="fixed top-0 left-0 md:left-72 right-0 h-16 glass-header z-30 px-3 sm:px-6 flex items-center justify-between gap-2">
      <!-- Left: Mobile Toggle + Breadcrumb / Page Title -->
      <div class="flex items-center gap-2.5 min-w-0 flex-1">
        <!-- Mobile Sidebar Hamburger Toggle Button -->
        <button id="btn-toggle-sidebar" class="md:hidden p-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors shrink-0" aria-label="Open Navigation Menu">
          <span class="material-symbols-outlined text-[22px]">menu</span>
        </button>

        <div class="flex flex-col min-w-0">
          <div class="flex items-center gap-1.5 min-w-0">
            <span class="text-[10px] font-mono text-secondary font-bold uppercase tracking-wider shrink-0 hidden xs:inline">PREDIX /</span>
            <h1 class="text-xs sm:text-sm font-bold text-on-surface leading-tight tracking-wide truncate">${e.title}</h1>
          </div>
          <span class="text-[9px] sm:text-[10px] font-mono text-on-surface-variant font-medium mt-0.5 tracking-wider truncate">${e.sub}</span>
        </div>
      </div>

      <!-- Right Action Items -->
      <div class="flex items-center gap-1.5 sm:gap-3 shrink-0">
        <!-- Quick Upload Dataset Trigger Button -->
        <button id="btn-header-upload-dataset" class="hidden md:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-secondary/15 hover:bg-secondary/25 text-secondary border border-secondary/30 transition-all shadow-[0_0_10px_rgba(6,182,212,0.15)]" title="Upload Custom CSV / JSON Telemetry Dataset">
          <span class="material-symbols-outlined text-[16px]">upload_file</span>
          <span>Upload Dataset</span>
        </button>

        <!-- Live System Status Badge -->
        <div class="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-md bg-status-healthy/10 border border-status-healthy/25">
          <div class="w-1.5 h-1.5 rounded-full bg-status-healthy animate-pulse"></div>
          <span class="text-[10px] font-mono font-bold text-status-healthy tracking-wider uppercase">TELEMETRY: STABLE</span>
        </div>

        <!-- Quick Notifications Dropdown Trigger -->
        <div class="relative">
          <button id="btn-notifications" class="p-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors relative border border-transparent hover:border-border-subtle" title="Active Alarms">
            <span class="material-symbols-outlined text-[19px]">notifications</span>
            <span class="absolute top-1.5 right-1.5 w-2 h-2 bg-status-critical rounded-full ring-2 ring-surface shadow-[0_0_6px_#EF4444]"></span>
          </button>
          
          <!-- Dropdown panel -->
          <div id="notifications-panel" class="hidden absolute right-0 mt-2 w-[calc(100vw-24px)] max-w-xs sm:w-80 bg-surface rounded-xl shadow-2xl border border-border-subtle p-3.5 z-50 animate-modal">
            <div class="flex items-center justify-between pb-2 border-b border-border-subtle">
              <span class="text-xs font-bold text-on-surface uppercase tracking-wider font-mono">Active Critical Alarms</span>
              <span class="text-[9.5px] font-mono bg-status-critical/15 text-status-critical px-1.5 py-0.5 rounded font-bold border border-status-critical/30">2 Critical</span>
            </div>
            <div class="py-2.5 space-y-2 max-h-64 overflow-y-auto">
              <div class="p-2.5 rounded-lg bg-status-critical/10 border-l-2 border-status-critical text-xs">
                <div class="font-bold text-status-critical flex items-center justify-between">
                  <span>CNC-Milling-Unit-04</span>
                  <span class="text-[9px] font-mono text-on-surface-variant">4h 12m RUL</span>
                </div>
                <div class="text-[11px] text-on-surface-variant mt-0.5">Vibration reached 42.8 mm/s on cutting axis Z.</div>
              </div>
              <div class="p-2.5 rounded-lg bg-status-critical/10 border-l-2 border-status-critical text-xs">
                <div class="font-bold text-status-critical flex items-center justify-between">
                  <span>Turbine Alpha M103</span>
                  <span class="text-[9px] font-mono text-on-surface-variant">2h 45m RUL</span>
                </div>
                <div class="text-[11px] text-on-surface-variant mt-0.5">Combustor temp exceeded 98.6°C. RUL: 12 cycles.</div>
              </div>
            </div>
            <div class="pt-2 border-t border-border-subtle text-center">
              <a href="#work-orders" class="text-xs text-secondary font-semibold hover:underline flex items-center justify-center gap-1">
                <span>View Active Work Orders</span>
                <span class="material-symbols-outlined text-[14px]">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Global Export Dropdown Button -->
        <div class="relative group">
          <button class="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 transition-all shadow-sm">
            <span class="material-symbols-outlined text-[16px]">file_download</span>
            <span>Reports</span>
            <span class="material-symbols-outlined text-[14px]">expand_more</span>
          </button>
          
          <div class="hidden group-hover:block absolute right-0 mt-1 w-[calc(100vw-24px)] max-w-xs sm:w-64 bg-surface rounded-xl shadow-2xl border border-border-subtle p-2 z-50 animate-modal">
            <button id="btn-export-excel-global" class="w-full text-left p-2 rounded-lg hover:bg-surface-container-low transition-colors text-xs flex items-center gap-2">
              <span class="material-symbols-outlined text-[18px] text-emerald-400">table_chart</span>
              <div>
                <div class="font-bold text-on-surface">Executive Briefing (.xls)</div>
                <div class="text-[10px] text-on-surface-variant">Multi-Asset Report for Higher Officials</div>
              </div>
            </button>
            <button id="btn-export-csv-global" class="w-full text-left p-2 rounded-lg hover:bg-surface-container-low transition-colors text-xs flex items-center gap-2 border-t border-border-subtle mt-1 pt-1.5">
              <span class="material-symbols-outlined text-[18px] text-secondary">grid_on</span>
              <div>
                <div class="font-bold text-on-surface">Raw Diagnostic Data (.csv)</div>
                <div class="text-[10px] text-on-surface-variant">All Telemetry Sensor Records</div>
              </div>
            </button>
          </div>
        </div>

        <!-- User Avatar -->
        <div class="w-8 h-8 rounded-lg bg-surface-container text-secondary border border-secondary/30 flex items-center justify-center font-semibold text-xs cursor-pointer hover:border-secondary transition-all shrink-0">
          <span class="material-symbols-outlined text-[18px]">person</span>
        </div>
      </div>
    </header>
  `}const Do=[{id:"act-1",timestamp:"8 MINS AGO",type:"critical",icon:"notifications_active",title:"Spindle temperature anomaly detected",detail:"Lathe-Station-12 exceeded 85°C critical threshold. Risk factor increased +14%."},{id:"act-2",timestamp:"24 MINS AGO",type:"warning",icon:"warning",title:"Vibration harmonic resonance surge",detail:"CNC-Milling-Unit-04 vibration reached 42.8 mm/s on cutting axis Z."},{id:"act-3",timestamp:"1 HR AGO",type:"success",icon:"build_circle",title:"Preventative Maintenance Completed",detail:"Robotic-Arm-Assembly-B fluid flush and joint recalibration verified by Sarah Connor."},{id:"act-4",timestamp:"3 HRS AGO",type:"warning",icon:"sensors",title:"Sensor Calibration Drift",detail:"Pump-Unit-03 vibration sensor requiring recalibration before next continuous cycle."},{id:"act-5",timestamp:"5 HRS AGO",type:"info",icon:"model_training",title:"XGBoost Production Model Retrained",detail:"Version 2.4.1 deployed with 0.984 ROC-AUC across 10,000 telemetry batches."},{id:"act-6",timestamp:"7 HRS AGO",type:"success",icon:"verified",title:"Turbine Alpha Combustion Sweep Passed",detail:"Generator Gamma M045 thermal certification signed off with 92/100 health score."}];function va(s=24,t="CNC-04"){const e=[],n=[],i=[],a=[],o=[],r=[],l=new Date,c=s<=24?60:s<=168?360:1440,d=Math.floor(s*60/c);let u=t==="CNC-04"?72:t==="M103"?78:60,p=t==="CNC-04"?14:t==="M103"?18:8,f=t==="CNC-04"?380:t==="M103"?420:310,h=5.2;for(let m=d;m>=0;m--){const b=new Date(l.getTime()-m*c*60*1e3),g=s<=24?b.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):`${b.getMonth()+1}/${b.getDate()} ${b.getHours()}:00`;e.push(g);const x=1-m/d,w=x*x*1.8,v=(Math.random()-.48)*2,y=+(u+w*22+v).toFixed(1),k=+(p+w*28+v*1.5).toFixed(1),_=+(f+w*150+v*10).toFixed(0),S=+(h-w*1.8+v*.2).toFixed(1),E=Math.min(98,Math.max(8,Math.round(20+x*70+v*3)));n.push(y),i.push(k),a.push(_),o.push(S),r.push(E)}return{timestamps:e,tempSeries:n,vibrationSeries:i,torqueSeries:a,pressureSeries:o,riskSeries:r}}const sn=[{reason:"Tool Wear Failure (TWF)",count:145,percentage:31.5,cumulative:31.5},{reason:"Heat Dissipation Failure (HDF)",count:112,percentage:24.3,cumulative:55.8},{reason:"Overstrain Failure (OSF)",count:98,percentage:21.3,cumulative:77.1},{reason:"Power Failure (PWF)",count:86,percentage:18.7,cumulative:95.8},{reason:"Random Failure (RNF)",count:19,percentage:4.2,cumulative:100}];/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */function Ye(s){return s+.5|0}const Lt=(s,t,e)=>Math.max(Math.min(s,e),t);function Me(s){return Lt(Ye(s*2.55),0,255)}function Nt(s){return Lt(Ye(s*255),0,255)}function It(s){return Lt(Ye(s/2.55)/100,0,1)}function Un(s){return Lt(Ye(s*100),0,100)}const ut={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},nn=[..."0123456789ABCDEF"],Oo=s=>nn[s&15],Fo=s=>nn[(s&240)>>4]+nn[s&15],Je=s=>(s&240)>>4===(s&15),$o=s=>Je(s.r)&&Je(s.g)&&Je(s.b)&&Je(s.a);function Bo(s){var t=s.length,e;return s[0]==="#"&&(t===4||t===5?e={r:255&ut[s[1]]*17,g:255&ut[s[2]]*17,b:255&ut[s[3]]*17,a:t===5?ut[s[4]]*17:255}:(t===7||t===9)&&(e={r:ut[s[1]]<<4|ut[s[2]],g:ut[s[3]]<<4|ut[s[4]],b:ut[s[5]]<<4|ut[s[6]],a:t===9?ut[s[7]]<<4|ut[s[8]]:255})),e}const No=(s,t)=>s<255?t(s):"";function Ho(s){var t=$o(s)?Oo:Fo;return s?"#"+t(s.r)+t(s.g)+t(s.b)+No(s.a,t):void 0}const Wo=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function wa(s,t,e){const n=t*Math.min(e,1-e),i=(a,o=(a+s/30)%12)=>e-n*Math.max(Math.min(o-3,9-o,1),-1);return[i(0),i(8),i(4)]}function Vo(s,t,e){const n=(i,a=(i+s/60)%6)=>e-e*t*Math.max(Math.min(a,4-a,1),0);return[n(5),n(3),n(1)]}function jo(s,t,e){const n=wa(s,1,.5);let i;for(t+e>1&&(i=1/(t+e),t*=i,e*=i),i=0;i<3;i++)n[i]*=1-t-e,n[i]+=t;return n}function zo(s,t,e,n,i){return s===i?(t-e)/n+(t<e?6:0):t===i?(e-s)/n+2:(s-t)/n+4}function Cn(s){const e=s.r/255,n=s.g/255,i=s.b/255,a=Math.max(e,n,i),o=Math.min(e,n,i),r=(a+o)/2;let l,c,d;return a!==o&&(d=a-o,c=r>.5?d/(2-a-o):d/(a+o),l=zo(e,n,i,d,a),l=l*60+.5),[l|0,c||0,r]}function In(s,t,e,n){return(Array.isArray(t)?s(t[0],t[1],t[2]):s(t,e,n)).map(Nt)}function An(s,t,e){return In(wa,s,t,e)}function qo(s,t,e){return In(jo,s,t,e)}function Uo(s,t,e){return In(Vo,s,t,e)}function _a(s){return(s%360+360)%360}function Go(s){const t=Wo.exec(s);let e=255,n;if(!t)return;t[5]!==n&&(e=t[6]?Me(+t[5]):Nt(+t[5]));const i=_a(+t[2]),a=+t[3]/100,o=+t[4]/100;return t[1]==="hwb"?n=qo(i,a,o):t[1]==="hsv"?n=Uo(i,a,o):n=An(i,a,o),{r:n[0],g:n[1],b:n[2],a:e}}function Yo(s,t){var e=Cn(s);e[0]=_a(e[0]+t),e=An(e),s.r=e[0],s.g=e[1],s.b=e[2]}function Xo(s){if(!s)return;const t=Cn(s),e=t[0],n=Un(t[1]),i=Un(t[2]);return s.a<255?`hsla(${e}, ${n}%, ${i}%, ${It(s.a)})`:`hsl(${e}, ${n}%, ${i}%)`}const Gn={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Yn={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function Ko(){const s={},t=Object.keys(Yn),e=Object.keys(Gn);let n,i,a,o,r;for(n=0;n<t.length;n++){for(o=r=t[n],i=0;i<e.length;i++)a=e[i],r=r.replace(a,Gn[a]);a=parseInt(Yn[o],16),s[r]=[a>>16&255,a>>8&255,a&255]}return s}let Qe;function Jo(s){Qe||(Qe=Ko(),Qe.transparent=[0,0,0,0]);const t=Qe[s.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const Qo=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function Zo(s){const t=Qo.exec(s);let e=255,n,i,a;if(t){if(t[7]!==n){const o=+t[7];e=t[8]?Me(o):Lt(o*255,0,255)}return n=+t[1],i=+t[3],a=+t[5],n=255&(t[2]?Me(n):Lt(n,0,255)),i=255&(t[4]?Me(i):Lt(i,0,255)),a=255&(t[6]?Me(a):Lt(a,0,255)),{r:n,g:i,b:a,a:e}}}function tr(s){return s&&(s.a<255?`rgba(${s.r}, ${s.g}, ${s.b}, ${It(s.a)})`:`rgb(${s.r}, ${s.g}, ${s.b})`)}const Hs=s=>s<=.0031308?s*12.92:Math.pow(s,1/2.4)*1.055-.055,oe=s=>s<=.04045?s/12.92:Math.pow((s+.055)/1.055,2.4);function er(s,t,e){const n=oe(It(s.r)),i=oe(It(s.g)),a=oe(It(s.b));return{r:Nt(Hs(n+e*(oe(It(t.r))-n))),g:Nt(Hs(i+e*(oe(It(t.g))-i))),b:Nt(Hs(a+e*(oe(It(t.b))-a))),a:s.a+e*(t.a-s.a)}}function Ze(s,t,e){if(s){let n=Cn(s);n[t]=Math.max(0,Math.min(n[t]+n[t]*e,t===0?360:1)),n=An(n),s.r=n[0],s.g=n[1],s.b=n[2]}}function ka(s,t){return s&&Object.assign(t||{},s)}function Xn(s){var t={r:0,g:0,b:0,a:255};return Array.isArray(s)?s.length>=3&&(t={r:s[0],g:s[1],b:s[2],a:255},s.length>3&&(t.a=Nt(s[3]))):(t=ka(s,{r:0,g:0,b:0,a:1}),t.a=Nt(t.a)),t}function sr(s){return s.charAt(0)==="r"?Zo(s):Go(s)}class He{constructor(t){if(t instanceof He)return t;const e=typeof t;let n;e==="object"?n=Xn(t):e==="string"&&(n=Bo(t)||Jo(t)||sr(t)),this._rgb=n,this._valid=!!n}get valid(){return this._valid}get rgb(){var t=ka(this._rgb);return t&&(t.a=It(t.a)),t}set rgb(t){this._rgb=Xn(t)}rgbString(){return this._valid?tr(this._rgb):void 0}hexString(){return this._valid?Ho(this._rgb):void 0}hslString(){return this._valid?Xo(this._rgb):void 0}mix(t,e){if(t){const n=this.rgb,i=t.rgb;let a;const o=e===a?.5:e,r=2*o-1,l=n.a-i.a,c=((r*l===-1?r:(r+l)/(1+r*l))+1)/2;a=1-c,n.r=255&c*n.r+a*i.r+.5,n.g=255&c*n.g+a*i.g+.5,n.b=255&c*n.b+a*i.b+.5,n.a=o*n.a+(1-o)*i.a,this.rgb=n}return this}interpolate(t,e){return t&&(this._rgb=er(this._rgb,t._rgb,e)),this}clone(){return new He(this.rgb)}alpha(t){return this._rgb.a=Nt(t),this}clearer(t){const e=this._rgb;return e.a*=1-t,this}greyscale(){const t=this._rgb,e=Ye(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=e,this}opaquer(t){const e=this._rgb;return e.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return Ze(this._rgb,2,t),this}darken(t){return Ze(this._rgb,2,-t),this}saturate(t){return Ze(this._rgb,1,t),this}desaturate(t){return Ze(this._rgb,1,-t),this}rotate(t){return Yo(this._rgb,t),this}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */function Et(){}const nr=(()=>{let s=0;return()=>s++})();function R(s){return s==null}function q(s){if(Array.isArray&&Array.isArray(s))return!0;const t=Object.prototype.toString.call(s);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function L(s){return s!==null&&Object.prototype.toString.call(s)==="[object Object]"}function X(s){return(typeof s=="number"||s instanceof Number)&&isFinite(+s)}function ct(s,t){return X(s)?s:t}function A(s,t){return typeof s>"u"?t:s}const ir=(s,t)=>typeof s=="string"&&s.endsWith("%")?parseFloat(s)/100:+s/t,Sa=(s,t)=>typeof s=="string"&&s.endsWith("%")?parseFloat(s)/100*t:+s;function W(s,t,e){if(s&&typeof s.call=="function")return s.apply(e,t)}function N(s,t,e,n){let i,a,o;if(q(s))for(a=s.length,i=0;i<a;i++)t.call(e,s[i],i);else if(L(s))for(o=Object.keys(s),a=o.length,i=0;i<a;i++)t.call(e,s[o[i]],o[i])}function ws(s,t){let e,n,i,a;if(!s||!t||s.length!==t.length)return!1;for(e=0,n=s.length;e<n;++e)if(i=s[e],a=t[e],i.datasetIndex!==a.datasetIndex||i.index!==a.index)return!1;return!0}function _s(s){if(q(s))return s.map(_s);if(L(s)){const t=Object.create(null),e=Object.keys(s),n=e.length;let i=0;for(;i<n;++i)t[e[i]]=_s(s[e[i]]);return t}return s}function Ta(s){return["__proto__","prototype","constructor"].indexOf(s)===-1}function ar(s,t,e,n){if(!Ta(s))return;const i=t[s],a=e[s];L(i)&&L(a)?We(i,a,n):t[s]=_s(a)}function We(s,t,e){const n=q(t)?t:[t],i=n.length;if(!L(s))return s;e=e||{};const a=e.merger||ar;let o;for(let r=0;r<i;++r){if(o=n[r],!L(o))continue;const l=Object.keys(o);for(let c=0,d=l.length;c<d;++c)a(l[c],s,o,e)}return s}function De(s,t){return We(s,t,{merger:or})}function or(s,t,e){if(!Ta(s))return;const n=t[s],i=e[s];L(n)&&L(i)?De(n,i):Object.prototype.hasOwnProperty.call(t,s)||(t[s]=_s(i))}const Kn={"":s=>s,x:s=>s.x,y:s=>s.y};function rr(s){const t=s.split("."),e=[];let n="";for(const i of t)n+=i,n.endsWith("\\")?n=n.slice(0,-1)+".":(e.push(n),n="");return e}function lr(s){const t=rr(s);return e=>{for(const n of t){if(n==="")break;e=e&&e[n]}return e}}function Ht(s,t){return(Kn[t]||(Kn[t]=lr(t)))(s)}function Pn(s){return s.charAt(0).toUpperCase()+s.slice(1)}const Ve=s=>typeof s<"u",Wt=s=>typeof s=="function",Jn=(s,t)=>{if(s.size!==t.size)return!1;for(const e of s)if(!t.has(e))return!1;return!0};function cr(s){return s.type==="mouseup"||s.type==="click"||s.type==="contextmenu"}const F=Math.PI,j=2*F,dr=j+F,ks=Number.POSITIVE_INFINITY,ur=F/180,J=F/2,qt=F/4,Qn=F*2/3,Dt=Math.log10,Tt=Math.sign;function Oe(s,t,e){return Math.abs(s-t)<e}function Zn(s){const t=Math.round(s);s=Oe(s,t,s/1e3)?t:s;const e=Math.pow(10,Math.floor(Dt(s))),n=s/e;return(n<=1?1:n<=2?2:n<=5?5:10)*e}function pr(s){const t=[],e=Math.sqrt(s);let n;for(n=1;n<e;n++)s%n===0&&(t.push(n),t.push(s/n));return e===(e|0)&&t.push(e),t.sort((i,a)=>i-a).pop(),t}function fr(s){return typeof s=="symbol"||typeof s=="object"&&s!==null&&!(Symbol.toPrimitive in s||"toString"in s||"valueOf"in s)}function he(s){return!fr(s)&&!isNaN(parseFloat(s))&&isFinite(s)}function hr(s,t){const e=Math.round(s);return e-t<=s&&e+t>=s}function Ea(s,t,e){let n,i,a;for(n=0,i=s.length;n<i;n++)a=s[n][e],isNaN(a)||(t.min=Math.min(t.min,a),t.max=Math.max(t.max,a))}function gt(s){return s*(F/180)}function Rn(s){return s*(180/F)}function ti(s){if(!X(s))return;let t=1,e=0;for(;Math.round(s*t)/t!==s;)t*=10,e++;return e}function Ma(s,t){const e=t.x-s.x,n=t.y-s.y,i=Math.sqrt(e*e+n*n);let a=Math.atan2(n,e);return a<-.5*F&&(a+=j),{angle:a,distance:i}}function an(s,t){return Math.sqrt(Math.pow(t.x-s.x,2)+Math.pow(t.y-s.y,2))}function mr(s,t){return(s-t+dr)%j-F}function it(s){return(s%j+j)%j}function je(s,t,e,n){const i=it(s),a=it(t),o=it(e),r=it(a-i),l=it(o-i),c=it(i-a),d=it(i-o);return i===a||i===o||n&&a===o||r>l&&c<d}function et(s,t,e){return Math.max(t,Math.min(e,s))}function br(s){return et(s,-32768,32767)}function At(s,t,e,n=1e-6){return s>=Math.min(t,e)-n&&s<=Math.max(t,e)+n}function Ln(s,t,e){e=e||(o=>s[o]<t);let n=s.length-1,i=0,a;for(;n-i>1;)a=i+n>>1,e(a)?i=a:n=a;return{lo:i,hi:n}}const Pt=(s,t,e,n)=>Ln(s,e,n?i=>{const a=s[i][t];return a<e||a===e&&s[i+1][t]===e}:i=>s[i][t]<e),gr=(s,t,e)=>Ln(s,e,n=>s[n][t]>=e);function xr(s,t,e){let n=0,i=s.length;for(;n<i&&s[n]<t;)n++;for(;i>n&&s[i-1]>e;)i--;return n>0||i<s.length?s.slice(n,i):s}const Ca=["push","pop","shift","splice","unshift"];function yr(s,t){if(s._chartjs){s._chartjs.listeners.push(t);return}Object.defineProperty(s,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),Ca.forEach(e=>{const n="_onData"+Pn(e),i=s[e];Object.defineProperty(s,e,{configurable:!0,enumerable:!1,value(...a){const o=i.apply(this,a);return s._chartjs.listeners.forEach(r=>{typeof r[n]=="function"&&r[n](...a)}),o}})})}function ei(s,t){const e=s._chartjs;if(!e)return;const n=e.listeners,i=n.indexOf(t);i!==-1&&n.splice(i,1),!(n.length>0)&&(Ca.forEach(a=>{delete s[a]}),delete s._chartjs)}function Ia(s){const t=new Set(s);return t.size===s.length?s:Array.from(t)}const Aa=(function(){return typeof window>"u"?function(s){return s()}:window.requestAnimationFrame})();function Pa(s,t){let e=[],n=!1;return function(...i){e=i,n||(n=!0,Aa.call(window,()=>{n=!1,s.apply(t,e)}))}}function vr(s,t){let e;return function(...n){return t?(clearTimeout(e),e=setTimeout(s,t,n)):s.apply(this,n),t}}const Dn=s=>s==="start"?"left":s==="end"?"right":"center",nt=(s,t,e)=>s==="start"?t:s==="end"?e:(t+e)/2,wr=(s,t,e,n)=>s===(n?"left":"right")?e:s==="center"?(t+e)/2:t;function Ra(s,t,e){const n=t.length;let i=0,a=n;if(s._sorted){const{iScale:o,vScale:r,_parsed:l}=s,c=s.dataset&&s.dataset.options?s.dataset.options.spanGaps:null,d=o.axis,{min:u,max:p,minDefined:f,maxDefined:h}=o.getUserBounds();if(f){if(i=Math.min(Pt(l,d,u).lo,e?n:Pt(t,d,o.getPixelForValue(u)).lo),c){const m=l.slice(0,i+1).reverse().findIndex(b=>!R(b[r.axis]));i-=Math.max(0,m)}i=et(i,0,n-1)}if(h){let m=Math.max(Pt(l,o.axis,p,!0).hi+1,e?0:Pt(t,d,o.getPixelForValue(p),!0).hi+1);if(c){const b=l.slice(m-1).findIndex(g=>!R(g[r.axis]));m+=Math.max(0,b)}a=et(m,i,n)-i}else a=n-i}return{start:i,count:a}}function La(s){const{xScale:t,yScale:e,_scaleRanges:n}=s,i={xmin:t.min,xmax:t.max,ymin:e.min,ymax:e.max};if(!n)return s._scaleRanges=i,!0;const a=n.xmin!==t.min||n.xmax!==t.max||n.ymin!==e.min||n.ymax!==e.max;return Object.assign(n,i),a}const ts=s=>s===0||s===1,si=(s,t,e)=>-(Math.pow(2,10*(s-=1))*Math.sin((s-t)*j/e)),ni=(s,t,e)=>Math.pow(2,-10*s)*Math.sin((s-t)*j/e)+1,Fe={linear:s=>s,easeInQuad:s=>s*s,easeOutQuad:s=>-s*(s-2),easeInOutQuad:s=>(s/=.5)<1?.5*s*s:-.5*(--s*(s-2)-1),easeInCubic:s=>s*s*s,easeOutCubic:s=>(s-=1)*s*s+1,easeInOutCubic:s=>(s/=.5)<1?.5*s*s*s:.5*((s-=2)*s*s+2),easeInQuart:s=>s*s*s*s,easeOutQuart:s=>-((s-=1)*s*s*s-1),easeInOutQuart:s=>(s/=.5)<1?.5*s*s*s*s:-.5*((s-=2)*s*s*s-2),easeInQuint:s=>s*s*s*s*s,easeOutQuint:s=>(s-=1)*s*s*s*s+1,easeInOutQuint:s=>(s/=.5)<1?.5*s*s*s*s*s:.5*((s-=2)*s*s*s*s+2),easeInSine:s=>-Math.cos(s*J)+1,easeOutSine:s=>Math.sin(s*J),easeInOutSine:s=>-.5*(Math.cos(F*s)-1),easeInExpo:s=>s===0?0:Math.pow(2,10*(s-1)),easeOutExpo:s=>s===1?1:-Math.pow(2,-10*s)+1,easeInOutExpo:s=>ts(s)?s:s<.5?.5*Math.pow(2,10*(s*2-1)):.5*(-Math.pow(2,-10*(s*2-1))+2),easeInCirc:s=>s>=1?s:-(Math.sqrt(1-s*s)-1),easeOutCirc:s=>Math.sqrt(1-(s-=1)*s),easeInOutCirc:s=>(s/=.5)<1?-.5*(Math.sqrt(1-s*s)-1):.5*(Math.sqrt(1-(s-=2)*s)+1),easeInElastic:s=>ts(s)?s:si(s,.075,.3),easeOutElastic:s=>ts(s)?s:ni(s,.075,.3),easeInOutElastic(s){return ts(s)?s:s<.5?.5*si(s*2,.1125,.45):.5+.5*ni(s*2-1,.1125,.45)},easeInBack(s){return s*s*((1.70158+1)*s-1.70158)},easeOutBack(s){return(s-=1)*s*((1.70158+1)*s+1.70158)+1},easeInOutBack(s){let t=1.70158;return(s/=.5)<1?.5*(s*s*(((t*=1.525)+1)*s-t)):.5*((s-=2)*s*(((t*=1.525)+1)*s+t)+2)},easeInBounce:s=>1-Fe.easeOutBounce(1-s),easeOutBounce(s){return s<1/2.75?7.5625*s*s:s<2/2.75?7.5625*(s-=1.5/2.75)*s+.75:s<2.5/2.75?7.5625*(s-=2.25/2.75)*s+.9375:7.5625*(s-=2.625/2.75)*s+.984375},easeInOutBounce:s=>s<.5?Fe.easeInBounce(s*2)*.5:Fe.easeOutBounce(s*2-1)*.5+.5};function On(s){if(s&&typeof s=="object"){const t=s.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function ii(s){return On(s)?s:new He(s)}function Ws(s){return On(s)?s:new He(s).saturate(.5).darken(.1).hexString()}const _r=["x","y","borderWidth","radius","tension"],kr=["color","borderColor","backgroundColor"];function Sr(s){s.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),s.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),s.set("animations",{colors:{type:"color",properties:kr},numbers:{type:"number",properties:_r}}),s.describe("animations",{_fallback:"animation"}),s.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function Tr(s){s.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const ai=new Map;function Er(s,t){t=t||{};const e=s+JSON.stringify(t);let n=ai.get(e);return n||(n=new Intl.NumberFormat(s,t),ai.set(e,n)),n}function Xe(s,t,e){return Er(t,e).format(s)}const Da={values(s){return q(s)?s:""+s},numeric(s,t,e){if(s===0)return"0";const n=this.chart.options.locale;let i,a=s;if(e.length>1){const c=Math.max(Math.abs(e[0].value),Math.abs(e[e.length-1].value));(c<1e-4||c>1e15)&&(i="scientific"),a=Mr(s,e)}const o=Dt(Math.abs(a)),r=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),l={notation:i,minimumFractionDigits:r,maximumFractionDigits:r};return Object.assign(l,this.options.ticks.format),Xe(s,n,l)},logarithmic(s,t,e){if(s===0)return"0";const n=e[t].significand||s/Math.pow(10,Math.floor(Dt(s)));return[1,2,3,5,10,15].includes(n)||t>.8*e.length?Da.numeric.call(this,s,t,e):""}};function Mr(s,t){let e=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(e)>=1&&s!==Math.floor(s)&&(e=s-Math.floor(s)),e}var Rs={formatters:Da};function Cr(s){s.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Rs.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),s.route("scale.ticks","color","","color"),s.route("scale.grid","color","","borderColor"),s.route("scale.border","color","","borderColor"),s.route("scale.title","color","","color"),s.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),s.describe("scales",{_fallback:"scale"}),s.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const ee=Object.create(null),on=Object.create(null);function $e(s,t){if(!t)return s;const e=t.split(".");for(let n=0,i=e.length;n<i;++n){const a=e[n];s=s[a]||(s[a]=Object.create(null))}return s}function Vs(s,t,e){return typeof t=="string"?We($e(s,t),e):We($e(s,""),t)}class Ir{constructor(t,e){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=n=>n.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(n,i)=>Ws(i.backgroundColor),this.hoverBorderColor=(n,i)=>Ws(i.borderColor),this.hoverColor=(n,i)=>Ws(i.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(e)}set(t,e){return Vs(this,t,e)}get(t){return $e(this,t)}describe(t,e){return Vs(on,t,e)}override(t,e){return Vs(ee,t,e)}route(t,e,n,i){const a=$e(this,t),o=$e(this,n),r="_"+e;Object.defineProperties(a,{[r]:{value:a[e],writable:!0},[e]:{enumerable:!0,get(){const l=this[r],c=o[i];return L(l)?Object.assign({},c,l):A(l,c)},set(l){this[r]=l}}})}apply(t){t.forEach(e=>e(this))}}var U=new Ir({_scriptable:s=>!s.startsWith("on"),_indexable:s=>s!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[Sr,Tr,Cr]);function Ar(s){return!s||R(s.size)||R(s.family)?null:(s.style?s.style+" ":"")+(s.weight?s.weight+" ":"")+s.size+"px "+s.family}function Ss(s,t,e,n,i){let a=t[i];return a||(a=t[i]=s.measureText(i).width,e.push(i)),a>n&&(n=a),n}function Pr(s,t,e,n){n=n||{};let i=n.data=n.data||{},a=n.garbageCollect=n.garbageCollect||[];n.font!==t&&(i=n.data={},a=n.garbageCollect=[],n.font=t),s.save(),s.font=t;let o=0;const r=e.length;let l,c,d,u,p;for(l=0;l<r;l++)if(u=e[l],u!=null&&!q(u))o=Ss(s,i,a,o,u);else if(q(u))for(c=0,d=u.length;c<d;c++)p=u[c],p!=null&&!q(p)&&(o=Ss(s,i,a,o,p));s.restore();const f=a.length/2;if(f>e.length){for(l=0;l<f;l++)delete i[a[l]];a.splice(0,f)}return o}function Ut(s,t,e){const n=s.currentDevicePixelRatio,i=e!==0?Math.max(e/2,.5):0;return Math.round((t-i)*n)/n+i}function oi(s,t){!t&&!s||(t=t||s.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,s.width,s.height),t.restore())}function rn(s,t,e,n){Oa(s,t,e,n,null)}function Oa(s,t,e,n,i){let a,o,r,l,c,d,u,p;const f=t.pointStyle,h=t.rotation,m=t.radius;let b=(h||0)*ur;if(f&&typeof f=="object"&&(a=f.toString(),a==="[object HTMLImageElement]"||a==="[object HTMLCanvasElement]")){s.save(),s.translate(e,n),s.rotate(b),s.drawImage(f,-f.width/2,-f.height/2,f.width,f.height),s.restore();return}if(!(isNaN(m)||m<=0)){switch(s.beginPath(),f){default:i?s.ellipse(e,n,i/2,m,0,0,j):s.arc(e,n,m,0,j),s.closePath();break;case"triangle":d=i?i/2:m,s.moveTo(e+Math.sin(b)*d,n-Math.cos(b)*m),b+=Qn,s.lineTo(e+Math.sin(b)*d,n-Math.cos(b)*m),b+=Qn,s.lineTo(e+Math.sin(b)*d,n-Math.cos(b)*m),s.closePath();break;case"rectRounded":c=m*.516,l=m-c,o=Math.cos(b+qt)*l,u=Math.cos(b+qt)*(i?i/2-c:l),r=Math.sin(b+qt)*l,p=Math.sin(b+qt)*(i?i/2-c:l),s.arc(e-u,n-r,c,b-F,b-J),s.arc(e+p,n-o,c,b-J,b),s.arc(e+u,n+r,c,b,b+J),s.arc(e-p,n+o,c,b+J,b+F),s.closePath();break;case"rect":if(!h){l=Math.SQRT1_2*m,d=i?i/2:l,s.rect(e-d,n-l,2*d,2*l);break}b+=qt;case"rectRot":u=Math.cos(b)*(i?i/2:m),o=Math.cos(b)*m,r=Math.sin(b)*m,p=Math.sin(b)*(i?i/2:m),s.moveTo(e-u,n-r),s.lineTo(e+p,n-o),s.lineTo(e+u,n+r),s.lineTo(e-p,n+o),s.closePath();break;case"crossRot":b+=qt;case"cross":u=Math.cos(b)*(i?i/2:m),o=Math.cos(b)*m,r=Math.sin(b)*m,p=Math.sin(b)*(i?i/2:m),s.moveTo(e-u,n-r),s.lineTo(e+u,n+r),s.moveTo(e+p,n-o),s.lineTo(e-p,n+o);break;case"star":u=Math.cos(b)*(i?i/2:m),o=Math.cos(b)*m,r=Math.sin(b)*m,p=Math.sin(b)*(i?i/2:m),s.moveTo(e-u,n-r),s.lineTo(e+u,n+r),s.moveTo(e+p,n-o),s.lineTo(e-p,n+o),b+=qt,u=Math.cos(b)*(i?i/2:m),o=Math.cos(b)*m,r=Math.sin(b)*m,p=Math.sin(b)*(i?i/2:m),s.moveTo(e-u,n-r),s.lineTo(e+u,n+r),s.moveTo(e+p,n-o),s.lineTo(e-p,n+o);break;case"line":o=i?i/2:Math.cos(b)*m,r=Math.sin(b)*m,s.moveTo(e-o,n-r),s.lineTo(e+o,n+r);break;case"dash":s.moveTo(e,n),s.lineTo(e+Math.cos(b)*(i?i/2:m),n+Math.sin(b)*m);break;case!1:s.closePath();break}s.fill(),t.borderWidth>0&&s.stroke()}}function Rt(s,t,e){return e=e||.5,!t||s&&s.x>t.left-e&&s.x<t.right+e&&s.y>t.top-e&&s.y<t.bottom+e}function Ls(s,t){s.save(),s.beginPath(),s.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),s.clip()}function Ds(s){s.restore()}function Rr(s,t,e,n,i){if(!t)return s.lineTo(e.x,e.y);if(i==="middle"){const a=(t.x+e.x)/2;s.lineTo(a,t.y),s.lineTo(a,e.y)}else i==="after"!=!!n?s.lineTo(t.x,e.y):s.lineTo(e.x,t.y);s.lineTo(e.x,e.y)}function Lr(s,t,e,n){if(!t)return s.lineTo(e.x,e.y);s.bezierCurveTo(n?t.cp1x:t.cp2x,n?t.cp1y:t.cp2y,n?e.cp2x:e.cp1x,n?e.cp2y:e.cp1y,e.x,e.y)}function Dr(s,t){t.translation&&s.translate(t.translation[0],t.translation[1]),R(t.rotation)||s.rotate(t.rotation),t.color&&(s.fillStyle=t.color),t.textAlign&&(s.textAlign=t.textAlign),t.textBaseline&&(s.textBaseline=t.textBaseline)}function Or(s,t,e,n,i){if(i.strikethrough||i.underline){const a=s.measureText(n),o=t-a.actualBoundingBoxLeft,r=t+a.actualBoundingBoxRight,l=e-a.actualBoundingBoxAscent,c=e+a.actualBoundingBoxDescent,d=i.strikethrough?(l+c)/2:c;s.strokeStyle=s.fillStyle,s.beginPath(),s.lineWidth=i.decorationWidth||2,s.moveTo(o,d),s.lineTo(r,d),s.stroke()}}function Fr(s,t){const e=s.fillStyle;s.fillStyle=t.color,s.fillRect(t.left,t.top,t.width,t.height),s.fillStyle=e}function se(s,t,e,n,i,a={}){const o=q(t)?t:[t],r=a.strokeWidth>0&&a.strokeColor!=="";let l,c;for(s.save(),s.font=i.string,Dr(s,a),l=0;l<o.length;++l)c=o[l],a.backdrop&&Fr(s,a.backdrop),r&&(a.strokeColor&&(s.strokeStyle=a.strokeColor),R(a.strokeWidth)||(s.lineWidth=a.strokeWidth),s.strokeText(c,e,n,a.maxWidth)),s.fillText(c,e,n,a.maxWidth),Or(s,e,n,c,a),n+=Number(i.lineHeight);s.restore()}function ze(s,t){const{x:e,y:n,w:i,h:a,radius:o}=t;s.arc(e+o.topLeft,n+o.topLeft,o.topLeft,1.5*F,F,!0),s.lineTo(e,n+a-o.bottomLeft),s.arc(e+o.bottomLeft,n+a-o.bottomLeft,o.bottomLeft,F,J,!0),s.lineTo(e+i-o.bottomRight,n+a),s.arc(e+i-o.bottomRight,n+a-o.bottomRight,o.bottomRight,J,0,!0),s.lineTo(e+i,n+o.topRight),s.arc(e+i-o.topRight,n+o.topRight,o.topRight,0,-J,!0),s.lineTo(e+o.topLeft,n)}const $r=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,Br=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function Nr(s,t){const e=(""+s).match($r);if(!e||e[1]==="normal")return t*1.2;switch(s=+e[2],e[3]){case"px":return s;case"%":s/=100;break}return t*s}const Hr=s=>+s||0;function Fn(s,t){const e={},n=L(t),i=n?Object.keys(t):t,a=L(s)?n?o=>A(s[o],s[t[o]]):o=>s[o]:()=>s;for(const o of i)e[o]=Hr(a(o));return e}function Fa(s){return Fn(s,{top:"y",right:"x",bottom:"y",left:"x"})}function Zt(s){return Fn(s,["topLeft","topRight","bottomLeft","bottomRight"])}function ot(s){const t=Fa(s);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function tt(s,t){s=s||{},t=t||U.font;let e=A(s.size,t.size);typeof e=="string"&&(e=parseInt(e,10));let n=A(s.style,t.style);n&&!(""+n).match(Br)&&(console.warn('Invalid font style specified: "'+n+'"'),n=void 0);const i={family:A(s.family,t.family),lineHeight:Nr(A(s.lineHeight,t.lineHeight),e),size:e,style:n,weight:A(s.weight,t.weight),string:""};return i.string=Ar(i),i}function Ce(s,t,e,n){let i,a,o;for(i=0,a=s.length;i<a;++i)if(o=s[i],o!==void 0&&o!==void 0)return o}function Wr(s,t,e){const{min:n,max:i}=s,a=Sa(t,(i-n)/2),o=(r,l)=>e&&r===0?0:r+l;return{min:o(n,-Math.abs(a)),max:o(i,a)}}function Vt(s,t){return Object.assign(Object.create(s),t)}function $n(s,t=[""],e,n,i=()=>s[0]){const a=e||s;typeof n>"u"&&(n=Ha("_fallback",s));const o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:s,_rootScopes:a,_fallback:n,_getTarget:i,override:r=>$n([r,...s],t,a,n)};return new Proxy(o,{deleteProperty(r,l){return delete r[l],delete r._keys,delete s[0][l],!0},get(r,l){return Ba(r,l,()=>Xr(l,t,s,r))},getOwnPropertyDescriptor(r,l){return Reflect.getOwnPropertyDescriptor(r._scopes[0],l)},getPrototypeOf(){return Reflect.getPrototypeOf(s[0])},has(r,l){return li(r).includes(l)},ownKeys(r){return li(r)},set(r,l,c){const d=r._storage||(r._storage=i());return r[l]=d[l]=c,delete r._keys,!0}})}function me(s,t,e,n){const i={_cacheable:!1,_proxy:s,_context:t,_subProxy:e,_stack:new Set,_descriptors:$a(s,n),setContext:a=>me(s,a,e,n),override:a=>me(s.override(a),t,e,n)};return new Proxy(i,{deleteProperty(a,o){return delete a[o],delete s[o],!0},get(a,o,r){return Ba(a,o,()=>jr(a,o,r))},getOwnPropertyDescriptor(a,o){return a._descriptors.allKeys?Reflect.has(s,o)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(s,o)},getPrototypeOf(){return Reflect.getPrototypeOf(s)},has(a,o){return Reflect.has(s,o)},ownKeys(){return Reflect.ownKeys(s)},set(a,o,r){return s[o]=r,delete a[o],!0}})}function $a(s,t={scriptable:!0,indexable:!0}){const{_scriptable:e=t.scriptable,_indexable:n=t.indexable,_allKeys:i=t.allKeys}=s;return{allKeys:i,scriptable:e,indexable:n,isScriptable:Wt(e)?e:()=>e,isIndexable:Wt(n)?n:()=>n}}const Vr=(s,t)=>s?s+Pn(t):t,Bn=(s,t)=>L(t)&&s!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function Ba(s,t,e){if(Object.prototype.hasOwnProperty.call(s,t)||t==="constructor")return s[t];const n=e();return s[t]=n,n}function jr(s,t,e){const{_proxy:n,_context:i,_subProxy:a,_descriptors:o}=s;let r=n[t];return Wt(r)&&o.isScriptable(t)&&(r=zr(t,r,s,e)),q(r)&&r.length&&(r=qr(t,r,s,o.isIndexable)),Bn(t,r)&&(r=me(r,i,a&&a[t],o)),r}function zr(s,t,e,n){const{_proxy:i,_context:a,_subProxy:o,_stack:r}=e;if(r.has(s))throw new Error("Recursion detected: "+Array.from(r).join("->")+"->"+s);r.add(s);let l=t(a,o||n);return r.delete(s),Bn(s,l)&&(l=Nn(i._scopes,i,s,l)),l}function qr(s,t,e,n){const{_proxy:i,_context:a,_subProxy:o,_descriptors:r}=e;if(typeof a.index<"u"&&n(s))return t[a.index%t.length];if(L(t[0])){const l=t,c=i._scopes.filter(d=>d!==l);t=[];for(const d of l){const u=Nn(c,i,s,d);t.push(me(u,a,o&&o[s],r))}}return t}function Na(s,t,e){return Wt(s)?s(t,e):s}const Ur=(s,t)=>s===!0?t:typeof s=="string"?Ht(t,s):void 0;function Gr(s,t,e,n,i){for(const a of t){const o=Ur(e,a);if(o){s.add(o);const r=Na(o._fallback,e,i);if(typeof r<"u"&&r!==e&&r!==n)return r}else if(o===!1&&typeof n<"u"&&e!==n)return null}return!1}function Nn(s,t,e,n){const i=t._rootScopes,a=Na(t._fallback,e,n),o=[...s,...i],r=new Set;r.add(n);let l=ri(r,o,e,a||e,n);return l===null||typeof a<"u"&&a!==e&&(l=ri(r,o,a,l,n),l===null)?!1:$n(Array.from(r),[""],i,a,()=>Yr(t,e,n))}function ri(s,t,e,n,i){for(;e;)e=Gr(s,t,e,n,i);return e}function Yr(s,t,e){const n=s._getTarget();t in n||(n[t]={});const i=n[t];return q(i)&&L(e)?e:i||{}}function Xr(s,t,e,n){let i;for(const a of t)if(i=Ha(Vr(a,s),e),typeof i<"u")return Bn(s,i)?Nn(e,n,s,i):i}function Ha(s,t){for(const e of t){if(!e)continue;const n=e[s];if(typeof n<"u")return n}}function li(s){let t=s._keys;return t||(t=s._keys=Kr(s._scopes)),t}function Kr(s){const t=new Set;for(const e of s)for(const n of Object.keys(e).filter(i=>!i.startsWith("_")))t.add(n);return Array.from(t)}function Wa(s,t,e,n){const{iScale:i}=s,{key:a="r"}=this._parsing,o=new Array(n);let r,l,c,d;for(r=0,l=n;r<l;++r)c=r+e,d=t[c],o[r]={r:i.parse(Ht(d,a),c)};return o}const Jr=Number.EPSILON||1e-14,be=(s,t)=>t<s.length&&!s[t].skip&&s[t],Va=s=>s==="x"?"y":"x";function Qr(s,t,e,n){const i=s.skip?t:s,a=t,o=e.skip?t:e,r=an(a,i),l=an(o,a);let c=r/(r+l),d=l/(r+l);c=isNaN(c)?0:c,d=isNaN(d)?0:d;const u=n*c,p=n*d;return{previous:{x:a.x-u*(o.x-i.x),y:a.y-u*(o.y-i.y)},next:{x:a.x+p*(o.x-i.x),y:a.y+p*(o.y-i.y)}}}function Zr(s,t,e){const n=s.length;let i,a,o,r,l,c=be(s,0);for(let d=0;d<n-1;++d)if(l=c,c=be(s,d+1),!(!l||!c)){if(Oe(t[d],0,Jr)){e[d]=e[d+1]=0;continue}i=e[d]/t[d],a=e[d+1]/t[d],r=Math.pow(i,2)+Math.pow(a,2),!(r<=9)&&(o=3/Math.sqrt(r),e[d]=i*o*t[d],e[d+1]=a*o*t[d])}}function tl(s,t,e="x"){const n=Va(e),i=s.length;let a,o,r,l=be(s,0);for(let c=0;c<i;++c){if(o=r,r=l,l=be(s,c+1),!r)continue;const d=r[e],u=r[n];o&&(a=(d-o[e])/3,r[`cp1${e}`]=d-a,r[`cp1${n}`]=u-a*t[c]),l&&(a=(l[e]-d)/3,r[`cp2${e}`]=d+a,r[`cp2${n}`]=u+a*t[c])}}function el(s,t="x"){const e=Va(t),n=s.length,i=Array(n).fill(0),a=Array(n);let o,r,l,c=be(s,0);for(o=0;o<n;++o)if(r=l,l=c,c=be(s,o+1),!!l){if(c){const d=c[t]-l[t];i[o]=d!==0?(c[e]-l[e])/d:0}a[o]=r?c?Tt(i[o-1])!==Tt(i[o])?0:(i[o-1]+i[o])/2:i[o-1]:i[o]}Zr(s,i,a),tl(s,a,t)}function es(s,t,e){return Math.max(Math.min(s,e),t)}function sl(s,t){let e,n,i,a,o,r=Rt(s[0],t);for(e=0,n=s.length;e<n;++e)o=a,a=r,r=e<n-1&&Rt(s[e+1],t),a&&(i=s[e],o&&(i.cp1x=es(i.cp1x,t.left,t.right),i.cp1y=es(i.cp1y,t.top,t.bottom)),r&&(i.cp2x=es(i.cp2x,t.left,t.right),i.cp2y=es(i.cp2y,t.top,t.bottom)))}function nl(s,t,e,n,i){let a,o,r,l;if(t.spanGaps&&(s=s.filter(c=>!c.skip)),t.cubicInterpolationMode==="monotone")el(s,i);else{let c=n?s[s.length-1]:s[0];for(a=0,o=s.length;a<o;++a)r=s[a],l=Qr(c,r,s[Math.min(a+1,o-(n?0:1))%o],t.tension),r.cp1x=l.previous.x,r.cp1y=l.previous.y,r.cp2x=l.next.x,r.cp2y=l.next.y,c=r}t.capBezierPoints&&sl(s,e)}function Hn(){return typeof window<"u"&&typeof document<"u"}function Wn(s){let t=s.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function Ts(s,t,e){let n;return typeof s=="string"?(n=parseInt(s,10),s.indexOf("%")!==-1&&(n=n/100*t.parentNode[e])):n=s,n}const Os=s=>s.ownerDocument.defaultView.getComputedStyle(s,null);function il(s,t){return Os(s).getPropertyValue(t)}const al=["top","right","bottom","left"];function te(s,t,e){const n={};e=e?"-"+e:"";for(let i=0;i<4;i++){const a=al[i];n[a]=parseFloat(s[t+"-"+a+e])||0}return n.width=n.left+n.right,n.height=n.top+n.bottom,n}const ol=(s,t,e)=>(s>0||t>0)&&(!e||!e.shadowRoot);function rl(s,t){const e=s.touches,n=e&&e.length?e[0]:s,{offsetX:i,offsetY:a}=n;let o=!1,r,l;if(ol(i,a,s.target))r=i,l=a;else{const c=t.getBoundingClientRect();r=n.clientX-c.left,l=n.clientY-c.top,o=!0}return{x:r,y:l,box:o}}function Xt(s,t){if("native"in s)return s;const{canvas:e,currentDevicePixelRatio:n}=t,i=Os(e),a=i.boxSizing==="border-box",o=te(i,"padding"),r=te(i,"border","width"),{x:l,y:c,box:d}=rl(s,e),u=o.left+(d&&r.left),p=o.top+(d&&r.top);let{width:f,height:h}=t;return a&&(f-=o.width+r.width,h-=o.height+r.height),{x:Math.round((l-u)/f*e.width/n),y:Math.round((c-p)/h*e.height/n)}}function ll(s,t,e){let n,i;if(t===void 0||e===void 0){const a=s&&Wn(s);if(!a)t=s.clientWidth,e=s.clientHeight;else{const o=a.getBoundingClientRect(),r=Os(a),l=te(r,"border","width"),c=te(r,"padding");t=o.width-c.width-l.width,e=o.height-c.height-l.height,n=Ts(r.maxWidth,a,"clientWidth"),i=Ts(r.maxHeight,a,"clientHeight")}}return{width:t,height:e,maxWidth:n||ks,maxHeight:i||ks}}const Ot=s=>Math.round(s*10)/10;function cl(s,t,e,n){const i=Os(s),a=te(i,"margin"),o=Ts(i.maxWidth,s,"clientWidth")||ks,r=Ts(i.maxHeight,s,"clientHeight")||ks,l=ll(s,t,e);let{width:c,height:d}=l;if(i.boxSizing==="content-box"){const p=te(i,"border","width"),f=te(i,"padding");c-=f.width+p.width,d-=f.height+p.height}return c=Math.max(0,c-a.width),d=Math.max(0,n?c/n:d-a.height),c=Ot(Math.min(c,o,l.maxWidth)),d=Ot(Math.min(d,r,l.maxHeight)),c&&!d&&(d=Ot(c/2)),(t!==void 0||e!==void 0)&&n&&l.height&&d>l.height&&(d=l.height,c=Ot(Math.floor(d*n))),{width:c,height:d}}function ci(s,t,e){const n=t||1,i=Ot(s.height*n),a=Ot(s.width*n);s.height=Ot(s.height),s.width=Ot(s.width);const o=s.canvas;return o.style&&(e||!o.style.height&&!o.style.width)&&(o.style.height=`${s.height}px`,o.style.width=`${s.width}px`),s.currentDevicePixelRatio!==n||o.height!==i||o.width!==a?(s.currentDevicePixelRatio=n,o.height=i,o.width=a,s.ctx.setTransform(n,0,0,n,0,0),!0):!1}const dl=(function(){let s=!1;try{const t={get passive(){return s=!0,!1}};Hn()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return s})();function di(s,t){const e=il(s,t),n=e&&e.match(/^(\d+)(\.\d+)?px$/);return n?+n[1]:void 0}function Kt(s,t,e,n){return{x:s.x+e*(t.x-s.x),y:s.y+e*(t.y-s.y)}}function ul(s,t,e,n){return{x:s.x+e*(t.x-s.x),y:n==="middle"?e<.5?s.y:t.y:n==="after"?e<1?s.y:t.y:e>0?t.y:s.y}}function pl(s,t,e,n){const i={x:s.cp2x,y:s.cp2y},a={x:t.cp1x,y:t.cp1y},o=Kt(s,i,e),r=Kt(i,a,e),l=Kt(a,t,e),c=Kt(o,r,e),d=Kt(r,l,e);return Kt(c,d,e)}const fl=function(s,t){return{x(e){return s+s+t-e},setWidth(e){t=e},textAlign(e){return e==="center"?e:e==="right"?"left":"right"},xPlus(e,n){return e-n},leftForLtr(e,n){return e-n}}},hl=function(){return{x(s){return s},setWidth(s){},textAlign(s){return s},xPlus(s,t){return s+t},leftForLtr(s,t){return s}}};function le(s,t,e){return s?fl(t,e):hl()}function ja(s,t){let e,n;(t==="ltr"||t==="rtl")&&(e=s.canvas.style,n=[e.getPropertyValue("direction"),e.getPropertyPriority("direction")],e.setProperty("direction",t,"important"),s.prevTextDirection=n)}function za(s,t){t!==void 0&&(delete s.prevTextDirection,s.canvas.style.setProperty("direction",t[0],t[1]))}function qa(s){return s==="angle"?{between:je,compare:mr,normalize:it}:{between:At,compare:(t,e)=>t-e,normalize:t=>t}}function ui({start:s,end:t,count:e,loop:n,style:i}){return{start:s%e,end:t%e,loop:n&&(t-s+1)%e===0,style:i}}function ml(s,t,e){const{property:n,start:i,end:a}=e,{between:o,normalize:r}=qa(n),l=t.length;let{start:c,end:d,loop:u}=s,p,f;if(u){for(c+=l,d+=l,p=0,f=l;p<f&&o(r(t[c%l][n]),i,a);++p)c--,d--;c%=l,d%=l}return d<c&&(d+=l),{start:c,end:d,loop:u,style:s.style}}function Ua(s,t,e){if(!e)return[s];const{property:n,start:i,end:a}=e,o=t.length,{compare:r,between:l,normalize:c}=qa(n),{start:d,end:u,loop:p,style:f}=ml(s,t,e),h=[];let m=!1,b=null,g,x,w;const v=()=>l(i,w,g)&&r(i,w)!==0,y=()=>r(a,g)===0||l(a,w,g),k=()=>m||v(),_=()=>!m||y();for(let S=d,E=d;S<=u;++S)x=t[S%o],!x.skip&&(g=c(x[n]),g!==w&&(m=l(g,i,a),b===null&&k()&&(b=r(g,i)===0?S:E),b!==null&&_()&&(h.push(ui({start:b,end:S,loop:p,count:o,style:f})),b=null),E=S,w=g));return b!==null&&h.push(ui({start:b,end:u,loop:p,count:o,style:f})),h}function Ga(s,t){const e=[],n=s.segments;for(let i=0;i<n.length;i++){const a=Ua(n[i],s.points,t);a.length&&e.push(...a)}return e}function bl(s,t,e,n){let i=0,a=t-1;if(e&&!n)for(;i<t&&!s[i].skip;)i++;for(;i<t&&s[i].skip;)i++;for(i%=t,e&&(a+=i);a>i&&s[a%t].skip;)a--;return a%=t,{start:i,end:a}}function gl(s,t,e,n){const i=s.length,a=[];let o=t,r=s[t],l;for(l=t+1;l<=e;++l){const c=s[l%i];c.skip||c.stop?r.skip||(n=!1,a.push({start:t%i,end:(l-1)%i,loop:n}),t=o=c.stop?l:null):(o=l,r.skip&&(t=l)),r=c}return o!==null&&a.push({start:t%i,end:o%i,loop:n}),a}function xl(s,t){const e=s.points,n=s.options.spanGaps,i=e.length;if(!i)return[];const a=!!s._loop,{start:o,end:r}=bl(e,i,a,n);if(n===!0)return pi(s,[{start:o,end:r,loop:a}],e,t);const l=r<o?r+i:r,c=!!s._fullLoop&&o===0&&r===i-1;return pi(s,gl(e,o,l,c),e,t)}function pi(s,t,e,n){return!n||!n.setContext||!e?t:yl(s,t,e,n)}function yl(s,t,e,n){const i=s._chart.getContext(),a=fi(s.options),{_datasetIndex:o,options:{spanGaps:r}}=s,l=e.length,c=[];let d=a,u=t[0].start,p=u;function f(h,m,b,g){const x=r?-1:1;if(h!==m){for(h+=l;e[h%l].skip;)h-=x;for(;e[m%l].skip;)m+=x;h%l!==m%l&&(c.push({start:h%l,end:m%l,loop:b,style:g}),d=g,u=m%l)}}for(const h of t){u=r?u:h.start;let m=e[u%l],b;for(p=u+1;p<=h.end;p++){const g=e[p%l];b=fi(n.setContext(Vt(i,{type:"segment",p0:m,p1:g,p0DataIndex:(p-1)%l,p1DataIndex:p%l,datasetIndex:o}))),vl(b,d)&&f(u,p-1,h.loop,d),m=g,d=b}u<p-1&&f(u,p-1,h.loop,d)}return c}function fi(s){return{backgroundColor:s.backgroundColor,borderCapStyle:s.borderCapStyle,borderDash:s.borderDash,borderDashOffset:s.borderDashOffset,borderJoinStyle:s.borderJoinStyle,borderWidth:s.borderWidth,borderColor:s.borderColor}}function vl(s,t){if(!t)return!1;const e=[],n=function(i,a){return On(a)?(e.includes(a)||e.push(a),e.indexOf(a)):a};return JSON.stringify(s,n)!==JSON.stringify(t,n)}function ss(s,t,e){return s.options.clip?s[e]:t[e]}function wl(s,t){const{xScale:e,yScale:n}=s;return e&&n?{left:ss(e,t,"left"),right:ss(e,t,"right"),top:ss(n,t,"top"),bottom:ss(n,t,"bottom")}:t}function Ya(s,t){const e=t._clip;if(e.disabled)return!1;const n=wl(t,s.chartArea);return{left:e.left===!1?0:n.left-(e.left===!0?0:e.left),right:e.right===!1?s.width:n.right+(e.right===!0?0:e.right),top:e.top===!1?0:n.top-(e.top===!0?0:e.top),bottom:e.bottom===!1?s.height:n.bottom+(e.bottom===!0?0:e.bottom)}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */class _l{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,n,i){const a=e.listeners[i],o=e.duration;a.forEach(r=>r({chart:t,initial:e.initial,numSteps:o,currentStep:Math.min(n-e.start,o)}))}_refresh(){this._request||(this._running=!0,this._request=Aa.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let e=0;this._charts.forEach((n,i)=>{if(!n.running||!n.items.length)return;const a=n.items;let o=a.length-1,r=!1,l;for(;o>=0;--o)l=a[o],l._active?(l._total>n.duration&&(n.duration=l._total),l.tick(t),r=!0):(a[o]=a[a.length-1],a.pop());r&&(i.draw(),this._notify(i,n,t,"progress")),a.length||(n.running=!1,this._notify(i,n,t,"complete"),n.initial=!1),e+=a.length}),this._lastDate=t,e===0&&(this._running=!1)}_getAnims(t){const e=this._charts;let n=e.get(t);return n||(n={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,n)),n}listen(t,e,n){this._getAnims(t).listeners[e].push(n)}add(t,e){!e||!e.length||this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){const e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce((n,i)=>Math.max(n,i._duration),0),this._refresh())}running(t){if(!this._running)return!1;const e=this._charts.get(t);return!(!e||!e.running||!e.items.length)}stop(t){const e=this._charts.get(t);if(!e||!e.items.length)return;const n=e.items;let i=n.length-1;for(;i>=0;--i)n[i].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var Mt=new _l;const hi="transparent",kl={boolean(s,t,e){return e>.5?t:s},color(s,t,e){const n=ii(s||hi),i=n.valid&&ii(t||hi);return i&&i.valid?i.mix(n,e).hexString():t},number(s,t,e){return s+(t-s)*e}};class Sl{constructor(t,e,n,i){const a=e[n];i=Ce([t.to,i,a,t.from]);const o=Ce([t.from,a,i]);this._active=!0,this._fn=t.fn||kl[t.type||typeof o],this._easing=Fe[t.easing]||Fe.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=n,this._from=o,this._to=i,this._promises=void 0}active(){return this._active}update(t,e,n){if(this._active){this._notify(!1);const i=this._target[this._prop],a=n-this._start,o=this._duration-a;this._start=n,this._duration=Math.floor(Math.max(o,t.duration)),this._total+=a,this._loop=!!t.loop,this._to=Ce([t.to,e,i,t.from]),this._from=Ce([t.from,i,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const e=t-this._start,n=this._duration,i=this._prop,a=this._from,o=this._loop,r=this._to;let l;if(this._active=a!==r&&(o||e<n),!this._active){this._target[i]=r,this._notify(!0);return}if(e<0){this._target[i]=a;return}l=e/n%2,l=o&&l>1?2-l:l,l=this._easing(Math.min(1,Math.max(0,l))),this._target[i]=this._fn(a,r,l)}wait(){const t=this._promises||(this._promises=[]);return new Promise((e,n)=>{t.push({res:e,rej:n})})}_notify(t){const e=t?"res":"rej",n=this._promises||[];for(let i=0;i<n.length;i++)n[i][e]()}}class Xa{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!L(t))return;const e=Object.keys(U.animation),n=this._properties;Object.getOwnPropertyNames(t).forEach(i=>{const a=t[i];if(!L(a))return;const o={};for(const r of e)o[r]=a[r];(q(a.properties)&&a.properties||[i]).forEach(r=>{(r===i||!n.has(r))&&n.set(r,o)})})}_animateOptions(t,e){const n=e.options,i=El(t,n);if(!i)return[];const a=this._createAnimations(i,n);return n.$shared&&Tl(t.options.$animations,n).then(()=>{t.options=n},()=>{}),a}_createAnimations(t,e){const n=this._properties,i=[],a=t.$animations||(t.$animations={}),o=Object.keys(e),r=Date.now();let l;for(l=o.length-1;l>=0;--l){const c=o[l];if(c.charAt(0)==="$")continue;if(c==="options"){i.push(...this._animateOptions(t,e));continue}const d=e[c];let u=a[c];const p=n.get(c);if(u)if(p&&u.active()){u.update(p,d,r);continue}else u.cancel();if(!p||!p.duration){t[c]=d;continue}a[c]=u=new Sl(p,t,c,d),i.push(u)}return i}update(t,e){if(this._properties.size===0){Object.assign(t,e);return}const n=this._createAnimations(t,e);if(n.length)return Mt.add(this._chart,n),!0}}function Tl(s,t){const e=[],n=Object.keys(t);for(let i=0;i<n.length;i++){const a=s[n[i]];a&&a.active()&&e.push(a.wait())}return Promise.all(e)}function El(s,t){if(!t)return;let e=s.options;if(!e){s.options=t;return}return e.$shared&&(s.options=e=Object.assign({},e,{$shared:!1,$animations:{}})),e}function mi(s,t){const e=s&&s.options||{},n=e.reverse,i=e.min===void 0?t:0,a=e.max===void 0?t:0;return{start:n?a:i,end:n?i:a}}function Ml(s,t,e){if(e===!1)return!1;const n=mi(s,e),i=mi(t,e);return{top:i.end,right:n.end,bottom:i.start,left:n.start}}function Cl(s){let t,e,n,i;return L(s)?(t=s.top,e=s.right,n=s.bottom,i=s.left):t=e=n=i=s,{top:t,right:e,bottom:n,left:i,disabled:s===!1}}function Ka(s,t){const e=[],n=s._getSortedDatasetMetas(t);let i,a;for(i=0,a=n.length;i<a;++i)e.push(n[i].index);return e}function bi(s,t,e,n={}){const i=s.keys,a=n.mode==="single";let o,r,l,c;if(t===null)return;let d=!1;for(o=0,r=i.length;o<r;++o){if(l=+i[o],l===e){if(d=!0,n.all)continue;break}c=s.values[l],X(c)&&(a||t===0||Tt(t)===Tt(c))&&(t+=c)}return!d&&!n.all?0:t}function Il(s,t){const{iScale:e,vScale:n}=t,i=e.axis==="x"?"x":"y",a=n.axis==="x"?"x":"y",o=Object.keys(s),r=new Array(o.length);let l,c,d;for(l=0,c=o.length;l<c;++l)d=o[l],r[l]={[i]:d,[a]:s[d]};return r}function js(s,t){const e=s&&s.options.stacked;return e||e===void 0&&t.stack!==void 0}function Al(s,t,e){return`${s.id}.${t.id}.${e.stack||e.type}`}function Pl(s){const{min:t,max:e,minDefined:n,maxDefined:i}=s.getUserBounds();return{min:n?t:Number.NEGATIVE_INFINITY,max:i?e:Number.POSITIVE_INFINITY}}function Rl(s,t,e){const n=s[t]||(s[t]={});return n[e]||(n[e]={})}function gi(s,t,e,n){for(const i of t.getMatchingVisibleMetas(n).reverse()){const a=s[i.index];if(e&&a>0||!e&&a<0)return i.index}return null}function xi(s,t){const{chart:e,_cachedMeta:n}=s,i=e._stacks||(e._stacks={}),{iScale:a,vScale:o,index:r}=n,l=a.axis,c=o.axis,d=Al(a,o,n),u=t.length;let p;for(let f=0;f<u;++f){const h=t[f],{[l]:m,[c]:b}=h,g=h._stacks||(h._stacks={});p=g[c]=Rl(i,d,m),p[r]=b,p._top=gi(p,o,!0,n.type),p._bottom=gi(p,o,!1,n.type);const x=p._visualValues||(p._visualValues={});x[r]=b}}function zs(s,t){const e=s.scales;return Object.keys(e).filter(n=>e[n].axis===t).shift()}function Ll(s,t){return Vt(s,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function Dl(s,t,e){return Vt(s,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:e,index:t,mode:"default",type:"data"})}function we(s,t){const e=s.controller.index,n=s.vScale&&s.vScale.axis;if(n){t=t||s._parsed;for(const i of t){const a=i._stacks;if(!a||a[n]===void 0||a[n][e]===void 0)return;delete a[n][e],a[n]._visualValues!==void 0&&a[n]._visualValues[e]!==void 0&&delete a[n]._visualValues[e]}}}const qs=s=>s==="reset"||s==="none",yi=(s,t)=>t?s:Object.assign({},s),Ol=(s,t,e)=>s&&!t.hidden&&t._stacked&&{keys:Ka(e,!0),values:null};class xt{constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=js(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&we(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,e=this._cachedMeta,n=this.getDataset(),i=(u,p,f,h)=>u==="x"?p:u==="r"?h:f,a=e.xAxisID=A(n.xAxisID,zs(t,"x")),o=e.yAxisID=A(n.yAxisID,zs(t,"y")),r=e.rAxisID=A(n.rAxisID,zs(t,"r")),l=e.indexAxis,c=e.iAxisID=i(l,a,o,r),d=e.vAxisID=i(l,o,a,r);e.xScale=this.getScaleForId(a),e.yScale=this.getScaleForId(o),e.rScale=this.getScaleForId(r),e.iScale=this.getScaleForId(c),e.vScale=this.getScaleForId(d)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&ei(this._data,this),t._stacked&&we(t)}_dataCheck(){const t=this.getDataset(),e=t.data||(t.data=[]),n=this._data;if(L(e)){const i=this._cachedMeta;this._data=Il(e,i)}else if(n!==e){if(n){ei(n,this);const i=this._cachedMeta;we(i),i._parsed=[]}e&&Object.isExtensible(e)&&yr(e,this),this._syncList=[],this._data=e}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const e=this._cachedMeta,n=this.getDataset();let i=!1;this._dataCheck();const a=e._stacked;e._stacked=js(e.vScale,e),e.stack!==n.stack&&(i=!0,we(e),e.stack=n.stack),this._resyncElements(t),(i||a!==e._stacked)&&(xi(this,e._parsed),e._stacked=js(e.vScale,e))}configure(){const t=this.chart.config,e=t.datasetScopeKeys(this._type),n=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(n,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){const{_cachedMeta:n,_data:i}=this,{iScale:a,_stacked:o}=n,r=a.axis;let l=t===0&&e===i.length?!0:n._sorted,c=t>0&&n._parsed[t-1],d,u,p;if(this._parsing===!1)n._parsed=i,n._sorted=!0,p=i;else{q(i[t])?p=this.parseArrayData(n,i,t,e):L(i[t])?p=this.parseObjectData(n,i,t,e):p=this.parsePrimitiveData(n,i,t,e);const f=()=>u[r]===null||c&&u[r]<c[r];for(d=0;d<e;++d)n._parsed[d+t]=u=p[d],l&&(f()&&(l=!1),c=u);n._sorted=l}o&&xi(this,p)}parsePrimitiveData(t,e,n,i){const{iScale:a,vScale:o}=t,r=a.axis,l=o.axis,c=a.getLabels(),d=a===o,u=new Array(i);let p,f,h;for(p=0,f=i;p<f;++p)h=p+n,u[p]={[r]:d||a.parse(c[h],h),[l]:o.parse(e[h],h)};return u}parseArrayData(t,e,n,i){const{xScale:a,yScale:o}=t,r=new Array(i);let l,c,d,u;for(l=0,c=i;l<c;++l)d=l+n,u=e[d],r[l]={x:a.parse(u[0],d),y:o.parse(u[1],d)};return r}parseObjectData(t,e,n,i){const{xScale:a,yScale:o}=t,{xAxisKey:r="x",yAxisKey:l="y"}=this._parsing,c=new Array(i);let d,u,p,f;for(d=0,u=i;d<u;++d)p=d+n,f=e[p],c[d]={x:a.parse(Ht(f,r),p),y:o.parse(Ht(f,l),p)};return c}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,n){const i=this.chart,a=this._cachedMeta,o=e[t.axis],r={keys:Ka(i,!0),values:e._stacks[t.axis]._visualValues};return bi(r,o,a.index,{mode:n})}updateRangeFromParsed(t,e,n,i){const a=n[e.axis];let o=a===null?NaN:a;const r=i&&n._stacks[e.axis];i&&r&&(i.values=r,o=bi(i,a,this._cachedMeta.index)),t.min=Math.min(t.min,o),t.max=Math.max(t.max,o)}getMinMax(t,e){const n=this._cachedMeta,i=n._parsed,a=n._sorted&&t===n.iScale,o=i.length,r=this._getOtherScale(t),l=Ol(e,n,this.chart),c={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:d,max:u}=Pl(r);let p,f;function h(){f=i[p];const m=f[r.axis];return!X(f[t.axis])||d>m||u<m}for(p=0;p<o&&!(!h()&&(this.updateRangeFromParsed(c,t,f,l),a));++p);if(a){for(p=o-1;p>=0;--p)if(!h()){this.updateRangeFromParsed(c,t,f,l);break}}return c}getAllParsedValues(t){const e=this._cachedMeta._parsed,n=[];let i,a,o;for(i=0,a=e.length;i<a;++i)o=e[i][t.axis],X(o)&&n.push(o);return n}getMaxOverflow(){return!1}getLabelAndValue(t){const e=this._cachedMeta,n=e.iScale,i=e.vScale,a=this.getParsed(t);return{label:n?""+n.getLabelForValue(a[n.axis]):"",value:i?""+i.getLabelForValue(a[i.axis]):""}}_update(t){const e=this._cachedMeta;this.update(t||"default"),e._clip=Cl(A(this.options.clip,Ml(e.xScale,e.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,e=this.chart,n=this._cachedMeta,i=n.data||[],a=e.chartArea,o=[],r=this._drawStart||0,l=this._drawCount||i.length-r,c=this.options.drawActiveElementsOnTop;let d;for(n.dataset&&n.dataset.draw(t,a,r,l),d=r;d<r+l;++d){const u=i[d];u.hidden||(u.active&&c?o.push(u):u.draw(t,a))}for(d=0;d<o.length;++d)o[d].draw(t,a)}getStyle(t,e){const n=e?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(n):this.resolveDataElementOptions(t||0,n)}getContext(t,e,n){const i=this.getDataset();let a;if(t>=0&&t<this._cachedMeta.data.length){const o=this._cachedMeta.data[t];a=o.$context||(o.$context=Dl(this.getContext(),t,o)),a.parsed=this.getParsed(t),a.raw=i.data[t],a.index=a.dataIndex=t}else a=this.$context||(this.$context=Ll(this.chart.getContext(),this.index)),a.dataset=i,a.index=a.datasetIndex=this.index;return a.active=!!e,a.mode=n,a}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",n){const i=e==="active",a=this._cachedDataOpts,o=t+"-"+e,r=a[o],l=this.enableOptionSharing&&Ve(n);if(r)return yi(r,l);const c=this.chart.config,d=c.datasetElementScopeKeys(this._type,t),u=i?[`${t}Hover`,"hover",t,""]:[t,""],p=c.getOptionScopes(this.getDataset(),d),f=Object.keys(U.elements[t]),h=()=>this.getContext(n,i,e),m=c.resolveNamedOptions(p,f,h,u);return m.$shared&&(m.$shared=l,a[o]=Object.freeze(yi(m,l))),m}_resolveAnimations(t,e,n){const i=this.chart,a=this._cachedDataOpts,o=`animation-${e}`,r=a[o];if(r)return r;let l;if(i.options.animation!==!1){const d=this.chart.config,u=d.datasetAnimationScopeKeys(this._type,e),p=d.getOptionScopes(this.getDataset(),u);l=d.createResolver(p,this.getContext(t,n,e))}const c=new Xa(i,l&&l.animations);return l&&l._cacheable&&(a[o]=Object.freeze(c)),c}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||qs(t)||this.chart._animationsDisabled}_getSharedOptions(t,e){const n=this.resolveDataElementOptions(t,e),i=this._sharedOptions,a=this.getSharedOptions(n),o=this.includeOptions(e,a)||a!==i;return this.updateSharedOptions(a,e,n),{sharedOptions:a,includeOptions:o}}updateElement(t,e,n,i){qs(i)?Object.assign(t,n):this._resolveAnimations(e,i).update(t,n)}updateSharedOptions(t,e,n){t&&!qs(e)&&this._resolveAnimations(void 0,e).update(t,n)}_setStyle(t,e,n,i){t.active=i;const a=this.getStyle(e,i);this._resolveAnimations(e,n,i).update(t,{options:!i&&this.getSharedOptions(a)||a})}removeHoverStyle(t,e,n){this._setStyle(t,n,"active",!1)}setHoverStyle(t,e,n){this._setStyle(t,n,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const e=this._data,n=this._cachedMeta.data;for(const[r,l,c]of this._syncList)this[r](l,c);this._syncList=[];const i=n.length,a=e.length,o=Math.min(a,i);o&&this.parse(0,o),a>i?this._insertElements(i,a-i,t):a<i&&this._removeElements(a,i-a)}_insertElements(t,e,n=!0){const i=this._cachedMeta,a=i.data,o=t+e;let r;const l=c=>{for(c.length+=e,r=c.length-1;r>=o;r--)c[r]=c[r-e]};for(l(a),r=t;r<o;++r)a[r]=new this.dataElementType;this._parsing&&l(i._parsed),this.parse(t,e),n&&this.updateElements(a,t,e,"reset")}updateElements(t,e,n,i){}_removeElements(t,e){const n=this._cachedMeta;if(this._parsing){const i=n._parsed.splice(t,e);n._stacked&&we(n,i)}n.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[e,n,i]=t;this[e](n,i)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);const n=arguments.length-2;n&&this._sync(["_insertElements",t,n])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}T(xt,"defaults",{}),T(xt,"datasetElementType",null),T(xt,"dataElementType",null);function Fl(s,t){if(!s._cache.$bar){const e=s.getMatchingVisibleMetas(t);let n=[];for(let i=0,a=e.length;i<a;i++)n=n.concat(e[i].controller.getAllParsedValues(s));s._cache.$bar=Ia(n.sort((i,a)=>i-a))}return s._cache.$bar}function $l(s){const t=s.iScale,e=Fl(t,s.type);let n=t._length,i,a,o,r;const l=()=>{o===32767||o===-32768||(Ve(r)&&(n=Math.min(n,Math.abs(o-r)||n)),r=o)};for(i=0,a=e.length;i<a;++i)o=t.getPixelForValue(e[i]),l();for(r=void 0,i=0,a=t.ticks.length;i<a;++i)o=t.getPixelForTick(i),l();return n}function Bl(s,t,e,n){const i=e.barThickness;let a,o;return R(i)?(a=t.min*e.categoryPercentage,o=e.barPercentage):(a=i*n,o=1),{chunk:a/n,ratio:o,start:t.pixels[s]-a/2}}function Nl(s,t,e,n){const i=t.pixels,a=i[s];let o=s>0?i[s-1]:null,r=s<i.length-1?i[s+1]:null;const l=e.categoryPercentage;o===null&&(o=a-(r===null?t.end-t.start:r-a)),r===null&&(r=a+a-o);const c=a-(a-Math.min(o,r))/2*l;return{chunk:Math.abs(r-o)/2*l/n,ratio:e.barPercentage,start:c}}function Hl(s,t,e,n){const i=e.parse(s[0],n),a=e.parse(s[1],n),o=Math.min(i,a),r=Math.max(i,a);let l=o,c=r;Math.abs(o)>Math.abs(r)&&(l=r,c=o),t[e.axis]=c,t._custom={barStart:l,barEnd:c,start:i,end:a,min:o,max:r}}function Ja(s,t,e,n){return q(s)?Hl(s,t,e,n):t[e.axis]=e.parse(s,n),t}function vi(s,t,e,n){const i=s.iScale,a=s.vScale,o=i.getLabels(),r=i===a,l=[];let c,d,u,p;for(c=e,d=e+n;c<d;++c)p=t[c],u={},u[i.axis]=r||i.parse(o[c],c),l.push(Ja(p,u,a,c));return l}function Us(s){return s&&s.barStart!==void 0&&s.barEnd!==void 0}function Wl(s,t,e){return s!==0?Tt(s):(t.isHorizontal()?1:-1)*(t.min>=e?1:-1)}function Vl(s){let t,e,n,i,a;return s.horizontal?(t=s.base>s.x,e="left",n="right"):(t=s.base<s.y,e="bottom",n="top"),t?(i="end",a="start"):(i="start",a="end"),{start:e,end:n,reverse:t,top:i,bottom:a}}function jl(s,t,e,n){let i=t.borderSkipped;const a={};if(!i){s.borderSkipped=a;return}if(i===!0){s.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:o,end:r,reverse:l,top:c,bottom:d}=Vl(s);i==="middle"&&e&&(s.enableBorderRadius=!0,(e._top||0)===n?i=c:(e._bottom||0)===n?i=d:(a[wi(d,o,r,l)]=!0,i=c)),a[wi(i,o,r,l)]=!0,s.borderSkipped=a}function wi(s,t,e,n){return n?(s=zl(s,t,e),s=_i(s,e,t)):s=_i(s,t,e),s}function zl(s,t,e){return s===t?e:s===e?t:s}function _i(s,t,e){return s==="start"?t:s==="end"?e:s}function ql(s,{inflateAmount:t},e){s.inflateAmount=t==="auto"?e===1?.33:0:t}class ds extends xt{parsePrimitiveData(t,e,n,i){return vi(t,e,n,i)}parseArrayData(t,e,n,i){return vi(t,e,n,i)}parseObjectData(t,e,n,i){const{iScale:a,vScale:o}=t,{xAxisKey:r="x",yAxisKey:l="y"}=this._parsing,c=a.axis==="x"?r:l,d=o.axis==="x"?r:l,u=[];let p,f,h,m;for(p=n,f=n+i;p<f;++p)m=e[p],h={},h[a.axis]=a.parse(Ht(m,c),p),u.push(Ja(Ht(m,d),h,o,p));return u}updateRangeFromParsed(t,e,n,i){super.updateRangeFromParsed(t,e,n,i);const a=n._custom;a&&e===this._cachedMeta.vScale&&(t.min=Math.min(t.min,a.min),t.max=Math.max(t.max,a.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const e=this._cachedMeta,{iScale:n,vScale:i}=e,a=this.getParsed(t),o=a._custom,r=Us(o)?"["+o.start+", "+o.end+"]":""+i.getLabelForValue(a[i.axis]);return{label:""+n.getLabelForValue(a[n.axis]),value:r}}initialize(){this.enableOptionSharing=!0,super.initialize();const t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){const e=this._cachedMeta;this.updateElements(e.data,0,e.data.length,t)}updateElements(t,e,n,i){const a=i==="reset",{index:o,_cachedMeta:{vScale:r}}=this,l=r.getBasePixel(),c=r.isHorizontal(),d=this._getRuler(),{sharedOptions:u,includeOptions:p}=this._getSharedOptions(e,i);for(let f=e;f<e+n;f++){const h=this.getParsed(f),m=a||R(h[r.axis])?{base:l,head:l}:this._calculateBarValuePixels(f),b=this._calculateBarIndexPixels(f,d),g=(h._stacks||{})[r.axis],x={horizontal:c,base:m.base,enableBorderRadius:!g||Us(h._custom)||o===g._top||o===g._bottom,x:c?m.head:b.center,y:c?b.center:m.head,height:c?b.size:Math.abs(m.size),width:c?Math.abs(m.size):b.size};p&&(x.options=u||this.resolveDataElementOptions(f,t[f].active?"active":i));const w=x.options||t[f].options;jl(x,w,g,o),ql(x,w,d.ratio),this.updateElement(t[f],f,x,i)}}_getStacks(t,e){const{iScale:n}=this._cachedMeta,i=n.getMatchingVisibleMetas(this._type).filter(d=>d.controller.options.grouped),a=n.options.stacked,o=[],r=this._cachedMeta.controller.getParsed(e),l=r&&r[n.axis],c=d=>{const u=d._parsed.find(f=>f[n.axis]===l),p=u&&u[d.vScale.axis];if(R(p)||isNaN(p))return!0};for(const d of i)if(!(e!==void 0&&c(d))&&((a===!1||o.indexOf(d.stack)===-1||a===void 0&&d.stack===void 0)&&o.push(d.stack),d.index===t))break;return o.length||o.push(void 0),o}_getStackCount(t){return this._getStacks(void 0,t).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){const t=this.chart.scales,e=this.chart.options.indexAxis;return Object.keys(t).filter(n=>t[n].axis===e).shift()}_getAxis(){const t={},e=this.getFirstScaleIdForIndexAxis();for(const n of this.chart.data.datasets)t[A(this.chart.options.indexAxis==="x"?n.xAxisID:n.yAxisID,e)]=!0;return Object.keys(t)}_getStackIndex(t,e,n){const i=this._getStacks(t,n),a=e!==void 0?i.indexOf(e):-1;return a===-1?i.length-1:a}_getRuler(){const t=this.options,e=this._cachedMeta,n=e.iScale,i=[];let a,o;for(a=0,o=e.data.length;a<o;++a)i.push(n.getPixelForValue(this.getParsed(a)[n.axis],a));const r=t.barThickness;return{min:r||$l(e),pixels:i,start:n._startPixel,end:n._endPixel,stackCount:this._getStackCount(),scale:n,grouped:t.grouped,ratio:r?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:e,_stacked:n,index:i},options:{base:a,minBarLength:o}}=this,r=a||0,l=this.getParsed(t),c=l._custom,d=Us(c);let u=l[e.axis],p=0,f=n?this.applyStack(e,l,n):u,h,m;f!==u&&(p=f-u,f=u),d&&(u=c.barStart,f=c.barEnd-c.barStart,u!==0&&Tt(u)!==Tt(c.barEnd)&&(p=0),p+=u);const b=!R(a)&&!d?a:p;let g=e.getPixelForValue(b);if(this.chart.getDataVisibility(t)?h=e.getPixelForValue(p+f):h=g,m=h-g,Math.abs(m)<o){m=Wl(m,e,r)*o,u===r&&(g-=m/2);const x=e.getPixelForDecimal(0),w=e.getPixelForDecimal(1),v=Math.min(x,w),y=Math.max(x,w);g=Math.max(Math.min(g,y),v),h=g+m,n&&!d&&(l._stacks[e.axis]._visualValues[i]=e.getValueForPixel(h)-e.getValueForPixel(g))}if(g===e.getPixelForValue(r)){const x=Tt(m)*e.getLineWidthForValue(r)/2;g+=x,m-=x}return{size:m,base:g,head:h,center:h+m/2}}_calculateBarIndexPixels(t,e){const n=e.scale,i=this.options,a=i.skipNull,o=A(i.maxBarThickness,1/0);let r,l;const c=this._getAxisCount();if(e.grouped){const d=a?this._getStackCount(t):e.stackCount,u=i.barThickness==="flex"?Nl(t,e,i,d*c):Bl(t,e,i,d*c),p=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,f=this._getAxis().indexOf(A(p,this.getFirstScaleIdForIndexAxis())),h=this._getStackIndex(this.index,this._cachedMeta.stack,a?t:void 0)+f;r=u.start+u.chunk*h+u.chunk/2,l=Math.min(o,u.chunk*u.ratio)}else r=n.getPixelForValue(this.getParsed(t)[n.axis],t),l=Math.min(o,e.min*e.ratio);return{base:r-l/2,head:r+l/2,center:r,size:l}}draw(){const t=this._cachedMeta,e=t.vScale,n=t.data,i=n.length;let a=0;for(;a<i;++a)this.getParsed(a)[e.axis]!==null&&!n[a].hidden&&n[a].draw(this._ctx)}}T(ds,"id","bar"),T(ds,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),T(ds,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});class us extends xt{initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,e,n,i){const a=super.parsePrimitiveData(t,e,n,i);for(let o=0;o<a.length;o++)a[o]._custom=this.resolveDataElementOptions(o+n).radius;return a}parseArrayData(t,e,n,i){const a=super.parseArrayData(t,e,n,i);for(let o=0;o<a.length;o++){const r=e[n+o];a[o]._custom=A(r[2],this.resolveDataElementOptions(o+n).radius)}return a}parseObjectData(t,e,n,i){const a=super.parseObjectData(t,e,n,i);for(let o=0;o<a.length;o++){const r=e[n+o];a[o]._custom=A(r&&r.r&&+r.r,this.resolveDataElementOptions(o+n).radius)}return a}getMaxOverflow(){const t=this._cachedMeta.data;let e=0;for(let n=t.length-1;n>=0;--n)e=Math.max(e,t[n].size(this.resolveDataElementOptions(n))/2);return e>0&&e}getLabelAndValue(t){const e=this._cachedMeta,n=this.chart.data.labels||[],{xScale:i,yScale:a}=e,o=this.getParsed(t),r=i.getLabelForValue(o.x),l=a.getLabelForValue(o.y),c=o._custom;return{label:n[t]||"",value:"("+r+", "+l+(c?", "+c:"")+")"}}update(t){const e=this._cachedMeta.data;this.updateElements(e,0,e.length,t)}updateElements(t,e,n,i){const a=i==="reset",{iScale:o,vScale:r}=this._cachedMeta,{sharedOptions:l,includeOptions:c}=this._getSharedOptions(e,i),d=o.axis,u=r.axis;for(let p=e;p<e+n;p++){const f=t[p],h=!a&&this.getParsed(p),m={},b=m[d]=a?o.getPixelForDecimal(.5):o.getPixelForValue(h[d]),g=m[u]=a?r.getBasePixel():r.getPixelForValue(h[u]);m.skip=isNaN(b)||isNaN(g),c&&(m.options=l||this.resolveDataElementOptions(p,f.active?"active":i),a&&(m.options.radius=0)),this.updateElement(f,p,m,i)}}resolveDataElementOptions(t,e){const n=this.getParsed(t);let i=super.resolveDataElementOptions(t,e);i.$shared&&(i=Object.assign({},i,{$shared:!1}));const a=i.radius;return e!=="active"&&(i.radius=0),i.radius+=A(n&&n._custom,a),i}}T(us,"id","bubble"),T(us,"defaults",{datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}}),T(us,"overrides",{scales:{x:{type:"linear"},y:{type:"linear"}}});function Ul(s,t,e){let n=1,i=1,a=0,o=0;if(t<j){const r=s,l=r+t,c=Math.cos(r),d=Math.sin(r),u=Math.cos(l),p=Math.sin(l),f=(w,v,y)=>je(w,r,l,!0)?1:Math.max(v,v*e,y,y*e),h=(w,v,y)=>je(w,r,l,!0)?-1:Math.min(v,v*e,y,y*e),m=f(0,c,u),b=f(J,d,p),g=h(F,c,u),x=h(F+J,d,p);n=(m-g)/2,i=(b-x)/2,a=-(m+g)/2,o=-(b+x)/2}return{ratioX:n,ratioY:i,offsetX:a,offsetY:o}}class Jt extends xt{constructor(t,e){super(t,e),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,e){const n=this.getDataset().data,i=this._cachedMeta;if(this._parsing===!1)i._parsed=n;else{let a=l=>+n[l];if(L(n[t])){const{key:l="value"}=this._parsing;a=c=>+Ht(n[c],l)}let o,r;for(o=t,r=t+e;o<r;++o)i._parsed[o]=a(o)}}_getRotation(){return gt(this.options.rotation-90)}_getCircumference(){return gt(this.options.circumference)}_getRotationExtents(){let t=j,e=-j;for(let n=0;n<this.chart.data.datasets.length;++n)if(this.chart.isDatasetVisible(n)&&this.chart.getDatasetMeta(n).type===this._type){const i=this.chart.getDatasetMeta(n).controller,a=i._getRotation(),o=i._getCircumference();t=Math.min(t,a),e=Math.max(e,a+o)}return{rotation:t,circumference:e-t}}update(t){const e=this.chart,{chartArea:n}=e,i=this._cachedMeta,a=i.data,o=this.getMaxBorderWidth()+this.getMaxOffset(a)+this.options.spacing,r=Math.max((Math.min(n.width,n.height)-o)/2,0),l=Math.min(ir(this.options.cutout,r),1),c=this._getRingWeight(this.index),{circumference:d,rotation:u}=this._getRotationExtents(),{ratioX:p,ratioY:f,offsetX:h,offsetY:m}=Ul(u,d,l),b=(n.width-o)/p,g=(n.height-o)/f,x=Math.max(Math.min(b,g)/2,0),w=Sa(this.options.radius,x),v=Math.max(w*l,0),y=(w-v)/this._getVisibleDatasetWeightTotal();this.offsetX=h*w,this.offsetY=m*w,i.total=this.calculateTotal(),this.outerRadius=w-y*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-y*c,0),this.updateElements(a,0,a.length,t)}_circumference(t,e){const n=this.options,i=this._cachedMeta,a=this._getCircumference();return e&&n.animation.animateRotate||!this.chart.getDataVisibility(t)||i._parsed[t]===null||i.data[t].hidden?0:this.calculateCircumference(i._parsed[t]*a/j)}updateElements(t,e,n,i){const a=i==="reset",o=this.chart,r=o.chartArea,c=o.options.animation,d=(r.left+r.right)/2,u=(r.top+r.bottom)/2,p=a&&c.animateScale,f=p?0:this.innerRadius,h=p?0:this.outerRadius,{sharedOptions:m,includeOptions:b}=this._getSharedOptions(e,i);let g=this._getRotation(),x;for(x=0;x<e;++x)g+=this._circumference(x,a);for(x=e;x<e+n;++x){const w=this._circumference(x,a),v=t[x],y={x:d+this.offsetX,y:u+this.offsetY,startAngle:g,endAngle:g+w,circumference:w,outerRadius:h,innerRadius:f};b&&(y.options=m||this.resolveDataElementOptions(x,v.active?"active":i)),g+=w,this.updateElement(v,x,y,i)}}calculateTotal(){const t=this._cachedMeta,e=t.data;let n=0,i;for(i=0;i<e.length;i++){const a=t._parsed[i];a!==null&&!isNaN(a)&&this.chart.getDataVisibility(i)&&!e[i].hidden&&(n+=Math.abs(a))}return n}calculateCircumference(t){const e=this._cachedMeta.total;return e>0&&!isNaN(t)?j*(Math.abs(t)/e):0}getLabelAndValue(t){const e=this._cachedMeta,n=this.chart,i=n.data.labels||[],a=Xe(e._parsed[t],n.options.locale);return{label:i[t]||"",value:a}}getMaxBorderWidth(t){let e=0;const n=this.chart;let i,a,o,r,l;if(!t){for(i=0,a=n.data.datasets.length;i<a;++i)if(n.isDatasetVisible(i)){o=n.getDatasetMeta(i),t=o.data,r=o.controller;break}}if(!t)return 0;for(i=0,a=t.length;i<a;++i)l=r.resolveDataElementOptions(i),l.borderAlign!=="inner"&&(e=Math.max(e,l.borderWidth||0,l.hoverBorderWidth||0));return e}getMaxOffset(t){let e=0;for(let n=0,i=t.length;n<i;++n){const a=this.resolveDataElementOptions(n);e=Math.max(e,a.offset||0,a.hoverOffset||0)}return e}_getRingWeightOffset(t){let e=0;for(let n=0;n<t;++n)this.chart.isDatasetVisible(n)&&(e+=this._getRingWeight(n));return e}_getRingWeight(t){return Math.max(A(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}T(Jt,"id","doughnut"),T(Jt,"defaults",{datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"}),T(Jt,"descriptors",{_scriptable:t=>t!=="spacing",_indexable:t=>t!=="spacing"&&!t.startsWith("borderDash")&&!t.startsWith("hoverBorderDash")}),T(Jt,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data,{labels:{pointStyle:n,textAlign:i,color:a,useBorderRadius:o,borderRadius:r}}=t.legend.options;return e.labels.length&&e.datasets.length?e.labels.map((l,c)=>{const u=t.getDatasetMeta(0).controller.getStyle(c);return{text:l,fillStyle:u.backgroundColor,fontColor:a,hidden:!t.getDataVisibility(c),lineDash:u.borderDash,lineDashOffset:u.borderDashOffset,lineJoin:u.borderJoinStyle,lineWidth:u.borderWidth,strokeStyle:u.borderColor,textAlign:i,pointStyle:n,borderRadius:o&&(r||u.borderRadius),index:c}}):[]}},onClick(t,e,n){n.chart.toggleDataVisibility(e.index),n.chart.update()}}}});class ps extends xt{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const e=this._cachedMeta,{dataset:n,data:i=[],_dataset:a}=e,o=this.chart._animationsDisabled;let{start:r,count:l}=Ra(e,i,o);this._drawStart=r,this._drawCount=l,La(e)&&(r=0,l=i.length),n._chart=this.chart,n._datasetIndex=this.index,n._decimated=!!a._decimated,n.points=i;const c=this.resolveDatasetElementOptions(t);this.options.showLine||(c.borderWidth=0),c.segment=this.options.segment,this.updateElement(n,void 0,{animated:!o,options:c},t),this.updateElements(i,r,l,t)}updateElements(t,e,n,i){const a=i==="reset",{iScale:o,vScale:r,_stacked:l,_dataset:c}=this._cachedMeta,{sharedOptions:d,includeOptions:u}=this._getSharedOptions(e,i),p=o.axis,f=r.axis,{spanGaps:h,segment:m}=this.options,b=he(h)?h:Number.POSITIVE_INFINITY,g=this.chart._animationsDisabled||a||i==="none",x=e+n,w=t.length;let v=e>0&&this.getParsed(e-1);for(let y=0;y<w;++y){const k=t[y],_=g?k:{};if(y<e||y>=x){_.skip=!0;continue}const S=this.getParsed(y),E=R(S[f]),M=_[p]=o.getPixelForValue(S[p],y),I=_[f]=a||E?r.getBasePixel():r.getPixelForValue(l?this.applyStack(r,S,l):S[f],y);_.skip=isNaN(M)||isNaN(I)||E,_.stop=y>0&&Math.abs(S[p]-v[p])>b,m&&(_.parsed=S,_.raw=c.data[y]),u&&(_.options=d||this.resolveDataElementOptions(y,k.active?"active":i)),g||this.updateElement(k,y,_,i),v=S}}getMaxOverflow(){const t=this._cachedMeta,e=t.dataset,n=e.options&&e.options.borderWidth||0,i=t.data||[];if(!i.length)return n;const a=i[0].size(this.resolveDataElementOptions(0)),o=i[i.length-1].size(this.resolveDataElementOptions(i.length-1));return Math.max(n,a,o)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}T(ps,"id","line"),T(ps,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),T(ps,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});class Be extends xt{constructor(t,e){super(t,e),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){const e=this._cachedMeta,n=this.chart,i=n.data.labels||[],a=Xe(e._parsed[t].r,n.options.locale);return{label:i[t]||"",value:a}}parseObjectData(t,e,n,i){return Wa.bind(this)(t,e,n,i)}update(t){const e=this._cachedMeta.data;this._updateRadius(),this.updateElements(e,0,e.length,t)}getMinMax(){const t=this._cachedMeta,e={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return t.data.forEach((n,i)=>{const a=this.getParsed(i).r;!isNaN(a)&&this.chart.getDataVisibility(i)&&(a<e.min&&(e.min=a),a>e.max&&(e.max=a))}),e}_updateRadius(){const t=this.chart,e=t.chartArea,n=t.options,i=Math.min(e.right-e.left,e.bottom-e.top),a=Math.max(i/2,0),o=Math.max(n.cutoutPercentage?a/100*n.cutoutPercentage:1,0),r=(a-o)/t.getVisibleDatasetCount();this.outerRadius=a-r*this.index,this.innerRadius=this.outerRadius-r}updateElements(t,e,n,i){const a=i==="reset",o=this.chart,l=o.options.animation,c=this._cachedMeta.rScale,d=c.xCenter,u=c.yCenter,p=c.getIndexAngle(0)-.5*F;let f=p,h;const m=360/this.countVisibleElements();for(h=0;h<e;++h)f+=this._computeAngle(h,i,m);for(h=e;h<e+n;h++){const b=t[h];let g=f,x=f+this._computeAngle(h,i,m),w=o.getDataVisibility(h)?c.getDistanceFromCenterForValue(this.getParsed(h).r):0;f=x,a&&(l.animateScale&&(w=0),l.animateRotate&&(g=x=p));const v={x:d,y:u,innerRadius:0,outerRadius:w,startAngle:g,endAngle:x,options:this.resolveDataElementOptions(h,b.active?"active":i)};this.updateElement(b,h,v,i)}}countVisibleElements(){const t=this._cachedMeta;let e=0;return t.data.forEach((n,i)=>{!isNaN(this.getParsed(i).r)&&this.chart.getDataVisibility(i)&&e++}),e}_computeAngle(t,e,n){return this.chart.getDataVisibility(t)?gt(this.resolveDataElementOptions(t,e).angle||n):0}}T(Be,"id","polarArea"),T(Be,"defaults",{dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0}),T(Be,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;if(e.labels.length&&e.datasets.length){const{labels:{pointStyle:n,color:i}}=t.legend.options;return e.labels.map((a,o)=>{const l=t.getDatasetMeta(0).controller.getStyle(o);return{text:a,fillStyle:l.backgroundColor,strokeStyle:l.borderColor,fontColor:i,lineWidth:l.borderWidth,pointStyle:n,hidden:!t.getDataVisibility(o),index:o}})}return[]}},onClick(t,e,n){n.chart.toggleDataVisibility(e.index),n.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}});class ln extends Jt{}T(ln,"id","pie"),T(ln,"defaults",{cutout:0,rotation:0,circumference:360,radius:"100%"});class fs extends xt{getLabelAndValue(t){const e=this._cachedMeta.vScale,n=this.getParsed(t);return{label:e.getLabels()[t],value:""+e.getLabelForValue(n[e.axis])}}parseObjectData(t,e,n,i){return Wa.bind(this)(t,e,n,i)}update(t){const e=this._cachedMeta,n=e.dataset,i=e.data||[],a=e.iScale.getLabels();if(n.points=i,t!=="resize"){const o=this.resolveDatasetElementOptions(t);this.options.showLine||(o.borderWidth=0);const r={_loop:!0,_fullLoop:a.length===i.length,options:o};this.updateElement(n,void 0,r,t)}this.updateElements(i,0,i.length,t)}updateElements(t,e,n,i){const a=this._cachedMeta.rScale,o=i==="reset";for(let r=e;r<e+n;r++){const l=t[r],c=this.resolveDataElementOptions(r,l.active?"active":i),d=a.getPointPositionForValue(r,this.getParsed(r).r),u=o?a.xCenter:d.x,p=o?a.yCenter:d.y,f={x:u,y:p,angle:d.angle,skip:isNaN(u)||isNaN(p),options:c};this.updateElement(l,r,f,i)}}}T(fs,"id","radar"),T(fs,"defaults",{datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}}),T(fs,"overrides",{aspectRatio:1,scales:{r:{type:"radialLinear"}}});class hs extends xt{getLabelAndValue(t){const e=this._cachedMeta,n=this.chart.data.labels||[],{xScale:i,yScale:a}=e,o=this.getParsed(t),r=i.getLabelForValue(o.x),l=a.getLabelForValue(o.y);return{label:n[t]||"",value:"("+r+", "+l+")"}}update(t){const e=this._cachedMeta,{data:n=[]}=e,i=this.chart._animationsDisabled;let{start:a,count:o}=Ra(e,n,i);if(this._drawStart=a,this._drawCount=o,La(e)&&(a=0,o=n.length),this.options.showLine){this.datasetElementType||this.addElements();const{dataset:r,_dataset:l}=e;r._chart=this.chart,r._datasetIndex=this.index,r._decimated=!!l._decimated,r.points=n;const c=this.resolveDatasetElementOptions(t);c.segment=this.options.segment,this.updateElement(r,void 0,{animated:!i,options:c},t)}else this.datasetElementType&&(delete e.dataset,this.datasetElementType=!1);this.updateElements(n,a,o,t)}addElements(){const{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(t,e,n,i){const a=i==="reset",{iScale:o,vScale:r,_stacked:l,_dataset:c}=this._cachedMeta,d=this.resolveDataElementOptions(e,i),u=this.getSharedOptions(d),p=this.includeOptions(i,u),f=o.axis,h=r.axis,{spanGaps:m,segment:b}=this.options,g=he(m)?m:Number.POSITIVE_INFINITY,x=this.chart._animationsDisabled||a||i==="none";let w=e>0&&this.getParsed(e-1);for(let v=e;v<e+n;++v){const y=t[v],k=this.getParsed(v),_=x?y:{},S=R(k[h]),E=_[f]=o.getPixelForValue(k[f],v),M=_[h]=a||S?r.getBasePixel():r.getPixelForValue(l?this.applyStack(r,k,l):k[h],v);_.skip=isNaN(E)||isNaN(M)||S,_.stop=v>0&&Math.abs(k[f]-w[f])>g,b&&(_.parsed=k,_.raw=c.data[v]),p&&(_.options=u||this.resolveDataElementOptions(v,y.active?"active":i)),x||this.updateElement(y,v,_,i),w=k}this.updateSharedOptions(u,i,d)}getMaxOverflow(){const t=this._cachedMeta,e=t.data||[];if(!this.options.showLine){let r=0;for(let l=e.length-1;l>=0;--l)r=Math.max(r,e[l].size(this.resolveDataElementOptions(l))/2);return r>0&&r}const n=t.dataset,i=n.options&&n.options.borderWidth||0;if(!e.length)return i;const a=e[0].size(this.resolveDataElementOptions(0)),o=e[e.length-1].size(this.resolveDataElementOptions(e.length-1));return Math.max(i,a,o)/2}}T(hs,"id","scatter"),T(hs,"defaults",{datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1}),T(hs,"overrides",{interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}});var Gl=Object.freeze({__proto__:null,BarController:ds,BubbleController:us,DoughnutController:Jt,LineController:ps,PieController:ln,PolarAreaController:Be,RadarController:fs,ScatterController:hs});function Gt(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class Vn{constructor(t){T(this,"options");this.options=t||{}}static override(t){Object.assign(Vn.prototype,t)}init(){}formats(){return Gt()}parse(){return Gt()}format(){return Gt()}add(){return Gt()}diff(){return Gt()}startOf(){return Gt()}endOf(){return Gt()}}var Yl={_date:Vn};function Xl(s,t,e,n){const{controller:i,data:a,_sorted:o}=s,r=i._cachedMeta.iScale,l=s.dataset&&s.dataset.options?s.dataset.options.spanGaps:null;if(r&&t===r.axis&&t!=="r"&&o&&a.length){const c=r._reversePixels?gr:Pt;if(n){if(i._sharedOptions){const d=a[0],u=typeof d.getRange=="function"&&d.getRange(t);if(u){const p=c(a,t,e-u),f=c(a,t,e+u);return{lo:p.lo,hi:f.hi}}}}else{const d=c(a,t,e);if(l){const{vScale:u}=i._cachedMeta,{_parsed:p}=s,f=p.slice(0,d.lo+1).reverse().findIndex(m=>!R(m[u.axis]));d.lo-=Math.max(0,f);const h=p.slice(d.hi).findIndex(m=>!R(m[u.axis]));d.hi+=Math.max(0,h)}return d}}return{lo:0,hi:a.length-1}}function Fs(s,t,e,n,i){const a=s.getSortedVisibleDatasetMetas(),o=e[t];for(let r=0,l=a.length;r<l;++r){const{index:c,data:d}=a[r],{lo:u,hi:p}=Xl(a[r],t,o,i);for(let f=u;f<=p;++f){const h=d[f];h.skip||n(h,c,f)}}}function Kl(s){const t=s.indexOf("x")!==-1,e=s.indexOf("y")!==-1;return function(n,i){const a=t?Math.abs(n.x-i.x):0,o=e?Math.abs(n.y-i.y):0;return Math.sqrt(Math.pow(a,2)+Math.pow(o,2))}}function Gs(s,t,e,n,i){const a=[];return!i&&!s.isPointInArea(t)||Fs(s,e,t,function(r,l,c){!i&&!Rt(r,s.chartArea,0)||r.inRange(t.x,t.y,n)&&a.push({element:r,datasetIndex:l,index:c})},!0),a}function Jl(s,t,e,n){let i=[];function a(o,r,l){const{startAngle:c,endAngle:d}=o.getProps(["startAngle","endAngle"],n),{angle:u}=Ma(o,{x:t.x,y:t.y});je(u,c,d)&&i.push({element:o,datasetIndex:r,index:l})}return Fs(s,e,t,a),i}function Ql(s,t,e,n,i,a){let o=[];const r=Kl(e);let l=Number.POSITIVE_INFINITY;function c(d,u,p){const f=d.inRange(t.x,t.y,i);if(n&&!f)return;const h=d.getCenterPoint(i);if(!(!!a||s.isPointInArea(h))&&!f)return;const b=r(t,h);b<l?(o=[{element:d,datasetIndex:u,index:p}],l=b):b===l&&o.push({element:d,datasetIndex:u,index:p})}return Fs(s,e,t,c),o}function Ys(s,t,e,n,i,a){return!a&&!s.isPointInArea(t)?[]:e==="r"&&!n?Jl(s,t,e,i):Ql(s,t,e,n,i,a)}function ki(s,t,e,n,i){const a=[],o=e==="x"?"inXRange":"inYRange";let r=!1;return Fs(s,e,t,(l,c,d)=>{l[o]&&l[o](t[e],i)&&(a.push({element:l,datasetIndex:c,index:d}),r=r||l.inRange(t.x,t.y,i))}),n&&!r?[]:a}var Zl={modes:{index(s,t,e,n){const i=Xt(t,s),a=e.axis||"x",o=e.includeInvisible||!1,r=e.intersect?Gs(s,i,a,n,o):Ys(s,i,a,!1,n,o),l=[];return r.length?(s.getSortedVisibleDatasetMetas().forEach(c=>{const d=r[0].index,u=c.data[d];u&&!u.skip&&l.push({element:u,datasetIndex:c.index,index:d})}),l):[]},dataset(s,t,e,n){const i=Xt(t,s),a=e.axis||"xy",o=e.includeInvisible||!1;let r=e.intersect?Gs(s,i,a,n,o):Ys(s,i,a,!1,n,o);if(r.length>0){const l=r[0].datasetIndex,c=s.getDatasetMeta(l).data;r=[];for(let d=0;d<c.length;++d)r.push({element:c[d],datasetIndex:l,index:d})}return r},point(s,t,e,n){const i=Xt(t,s),a=e.axis||"xy",o=e.includeInvisible||!1;return Gs(s,i,a,n,o)},nearest(s,t,e,n){const i=Xt(t,s),a=e.axis||"xy",o=e.includeInvisible||!1;return Ys(s,i,a,e.intersect,n,o)},x(s,t,e,n){const i=Xt(t,s);return ki(s,i,"x",e.intersect,n)},y(s,t,e,n){const i=Xt(t,s);return ki(s,i,"y",e.intersect,n)}}};const Qa=["left","top","right","bottom"];function _e(s,t){return s.filter(e=>e.pos===t)}function Si(s,t){return s.filter(e=>Qa.indexOf(e.pos)===-1&&e.box.axis===t)}function ke(s,t){return s.sort((e,n)=>{const i=t?n:e,a=t?e:n;return i.weight===a.weight?i.index-a.index:i.weight-a.weight})}function tc(s){const t=[];let e,n,i,a,o,r;for(e=0,n=(s||[]).length;e<n;++e)i=s[e],{position:a,options:{stack:o,stackWeight:r=1}}=i,t.push({index:e,box:i,pos:a,horizontal:i.isHorizontal(),weight:i.weight,stack:o&&a+o,stackWeight:r});return t}function ec(s){const t={};for(const e of s){const{stack:n,pos:i,stackWeight:a}=e;if(!n||!Qa.includes(i))continue;const o=t[n]||(t[n]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=a}return t}function sc(s,t){const e=ec(s),{vBoxMaxWidth:n,hBoxMaxHeight:i}=t;let a,o,r;for(a=0,o=s.length;a<o;++a){r=s[a];const{fullSize:l}=r.box,c=e[r.stack],d=c&&r.stackWeight/c.weight;r.horizontal?(r.width=d?d*n:l&&t.availableWidth,r.height=i):(r.width=n,r.height=d?d*i:l&&t.availableHeight)}return e}function nc(s){const t=tc(s),e=ke(t.filter(c=>c.box.fullSize),!0),n=ke(_e(t,"left"),!0),i=ke(_e(t,"right")),a=ke(_e(t,"top"),!0),o=ke(_e(t,"bottom")),r=Si(t,"x"),l=Si(t,"y");return{fullSize:e,leftAndTop:n.concat(a),rightAndBottom:i.concat(l).concat(o).concat(r),chartArea:_e(t,"chartArea"),vertical:n.concat(i).concat(l),horizontal:a.concat(o).concat(r)}}function Ti(s,t,e,n){return Math.max(s[e],t[e])+Math.max(s[n],t[n])}function Za(s,t){s.top=Math.max(s.top,t.top),s.left=Math.max(s.left,t.left),s.bottom=Math.max(s.bottom,t.bottom),s.right=Math.max(s.right,t.right)}function ic(s,t,e,n){const{pos:i,box:a}=e,o=s.maxPadding;if(!L(i)){e.size&&(s[i]-=e.size);const u=n[e.stack]||{size:0,count:1};u.size=Math.max(u.size,e.horizontal?a.height:a.width),e.size=u.size/u.count,s[i]+=e.size}a.getPadding&&Za(o,a.getPadding());const r=Math.max(0,t.outerWidth-Ti(o,s,"left","right")),l=Math.max(0,t.outerHeight-Ti(o,s,"top","bottom")),c=r!==s.w,d=l!==s.h;return s.w=r,s.h=l,e.horizontal?{same:c,other:d}:{same:d,other:c}}function ac(s){const t=s.maxPadding;function e(n){const i=Math.max(t[n]-s[n],0);return s[n]+=i,i}s.y+=e("top"),s.x+=e("left"),e("right"),e("bottom")}function oc(s,t){const e=t.maxPadding;function n(i){const a={left:0,top:0,right:0,bottom:0};return i.forEach(o=>{a[o]=Math.max(t[o],e[o])}),a}return n(s?["left","right"]:["top","bottom"])}function Ie(s,t,e,n){const i=[];let a,o,r,l,c,d;for(a=0,o=s.length,c=0;a<o;++a){r=s[a],l=r.box,l.update(r.width||t.w,r.height||t.h,oc(r.horizontal,t));const{same:u,other:p}=ic(t,e,r,n);c|=u&&i.length,d=d||p,l.fullSize||i.push(r)}return c&&Ie(i,t,e,n)||d}function ns(s,t,e,n,i){s.top=e,s.left=t,s.right=t+n,s.bottom=e+i,s.width=n,s.height=i}function Ei(s,t,e,n){const i=e.padding;let{x:a,y:o}=t;for(const r of s){const l=r.box,c=n[r.stack]||{placed:0,weight:1},d=r.stackWeight/c.weight||1;if(r.horizontal){const u=t.w*d,p=c.size||l.height;Ve(c.start)&&(o=c.start),l.fullSize?ns(l,i.left,o,e.outerWidth-i.right-i.left,p):ns(l,t.left+c.placed,o,u,p),c.start=o,c.placed+=u,o=l.bottom}else{const u=t.h*d,p=c.size||l.width;Ve(c.start)&&(a=c.start),l.fullSize?ns(l,a,i.top,p,e.outerHeight-i.bottom-i.top):ns(l,a,t.top+c.placed,p,u),c.start=a,c.placed+=u,a=l.right}}t.x=a,t.y=o}var at={addBox(s,t){s.boxes||(s.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(e){t.draw(e)}}]},s.boxes.push(t)},removeBox(s,t){const e=s.boxes?s.boxes.indexOf(t):-1;e!==-1&&s.boxes.splice(e,1)},configure(s,t,e){t.fullSize=e.fullSize,t.position=e.position,t.weight=e.weight},update(s,t,e,n){if(!s)return;const i=ot(s.options.layout.padding),a=Math.max(t-i.width,0),o=Math.max(e-i.height,0),r=nc(s.boxes),l=r.vertical,c=r.horizontal;N(s.boxes,m=>{typeof m.beforeLayout=="function"&&m.beforeLayout()});const d=l.reduce((m,b)=>b.box.options&&b.box.options.display===!1?m:m+1,0)||1,u=Object.freeze({outerWidth:t,outerHeight:e,padding:i,availableWidth:a,availableHeight:o,vBoxMaxWidth:a/2/d,hBoxMaxHeight:o/2}),p=Object.assign({},i);Za(p,ot(n));const f=Object.assign({maxPadding:p,w:a,h:o,x:i.left,y:i.top},i),h=sc(l.concat(c),u);Ie(r.fullSize,f,u,h),Ie(l,f,u,h),Ie(c,f,u,h)&&Ie(l,f,u,h),ac(f),Ei(r.leftAndTop,f,u,h),f.x+=f.w,f.y+=f.h,Ei(r.rightAndBottom,f,u,h),s.chartArea={left:f.left,top:f.top,right:f.left+f.w,bottom:f.top+f.h,height:f.h,width:f.w},N(r.chartArea,m=>{const b=m.box;Object.assign(b,s.chartArea),b.update(f.w,f.h,{left:0,top:0,right:0,bottom:0})})}};class to{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,n){}removeEventListener(t,e,n){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,n,i){return e=Math.max(0,e||t.width),n=n||t.height,{width:e,height:Math.max(0,i?Math.floor(e/i):n)}}isAttached(t){return!0}updateConfig(t){}}class rc extends to{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const ms="$chartjs",lc={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},Mi=s=>s===null||s==="";function cc(s,t){const e=s.style,n=s.getAttribute("height"),i=s.getAttribute("width");if(s[ms]={initial:{height:n,width:i,style:{display:e.display,height:e.height,width:e.width}}},e.display=e.display||"block",e.boxSizing=e.boxSizing||"border-box",Mi(i)){const a=di(s,"width");a!==void 0&&(s.width=a)}if(Mi(n))if(s.style.height==="")s.height=s.width/(t||2);else{const a=di(s,"height");a!==void 0&&(s.height=a)}return s}const eo=dl?{passive:!0}:!1;function dc(s,t,e){s&&s.addEventListener(t,e,eo)}function uc(s,t,e){s&&s.canvas&&s.canvas.removeEventListener(t,e,eo)}function pc(s,t){const e=lc[s.type]||s.type,{x:n,y:i}=Xt(s,t);return{type:e,chart:t,native:s,x:n!==void 0?n:null,y:i!==void 0?i:null}}function Es(s,t){for(const e of s)if(e===t||e.contains(t))return!0}function fc(s,t,e){const n=s.canvas,i=new MutationObserver(a=>{let o=!1;for(const r of a)o=o||Es(r.addedNodes,n),o=o&&!Es(r.removedNodes,n);o&&e()});return i.observe(document,{childList:!0,subtree:!0}),i}function hc(s,t,e){const n=s.canvas,i=new MutationObserver(a=>{let o=!1;for(const r of a)o=o||Es(r.removedNodes,n),o=o&&!Es(r.addedNodes,n);o&&e()});return i.observe(document,{childList:!0,subtree:!0}),i}const qe=new Map;let Ci=0;function so(){const s=window.devicePixelRatio;s!==Ci&&(Ci=s,qe.forEach((t,e)=>{e.currentDevicePixelRatio!==s&&t()}))}function mc(s,t){qe.size||window.addEventListener("resize",so),qe.set(s,t)}function bc(s){qe.delete(s),qe.size||window.removeEventListener("resize",so)}function gc(s,t,e){const n=s.canvas,i=n&&Wn(n);if(!i)return;const a=Pa((r,l)=>{const c=i.clientWidth;e(r,l),c<i.clientWidth&&e()},window),o=new ResizeObserver(r=>{const l=r[0],c=l.contentRect.width,d=l.contentRect.height;c===0&&d===0||a(c,d)});return o.observe(i),mc(s,a),o}function Xs(s,t,e){e&&e.disconnect(),t==="resize"&&bc(s)}function xc(s,t,e){const n=s.canvas,i=Pa(a=>{s.ctx!==null&&e(pc(a,s))},s);return dc(n,t,i),i}class yc extends to{acquireContext(t,e){const n=t&&t.getContext&&t.getContext("2d");return n&&n.canvas===t?(cc(t,e),n):null}releaseContext(t){const e=t.canvas;if(!e[ms])return!1;const n=e[ms].initial;["height","width"].forEach(a=>{const o=n[a];R(o)?e.removeAttribute(a):e.setAttribute(a,o)});const i=n.style||{};return Object.keys(i).forEach(a=>{e.style[a]=i[a]}),e.width=e.width,delete e[ms],!0}addEventListener(t,e,n){this.removeEventListener(t,e);const i=t.$proxies||(t.$proxies={}),o={attach:fc,detach:hc,resize:gc}[e]||xc;i[e]=o(t,e,n)}removeEventListener(t,e){const n=t.$proxies||(t.$proxies={}),i=n[e];if(!i)return;({attach:Xs,detach:Xs,resize:Xs}[e]||uc)(t,e,i),n[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,n,i){return cl(t,e,n,i)}isAttached(t){const e=t&&Wn(t);return!!(e&&e.isConnected)}}function vc(s){return!Hn()||typeof OffscreenCanvas<"u"&&s instanceof OffscreenCanvas?rc:yc}class yt{constructor(){T(this,"x");T(this,"y");T(this,"active",!1);T(this,"options");T(this,"$animations")}tooltipPosition(t){const{x:e,y:n}=this.getProps(["x","y"],t);return{x:e,y:n}}hasValue(){return he(this.x)&&he(this.y)}getProps(t,e){const n=this.$animations;if(!e||!n)return this;const i={};return t.forEach(a=>{i[a]=n[a]&&n[a].active()?n[a]._to:this[a]}),i}}T(yt,"defaults",{}),T(yt,"defaultRoutes");function wc(s,t){const e=s.options.ticks,n=_c(s),i=Math.min(e.maxTicksLimit||n,n),a=e.major.enabled?Sc(t):[],o=a.length,r=a[0],l=a[o-1],c=[];if(o>i)return Tc(t,c,a,o/i),c;const d=kc(a,t,i);if(o>0){let u,p;const f=o>1?Math.round((l-r)/(o-1)):null;for(is(t,c,d,R(f)?0:r-f,r),u=0,p=o-1;u<p;u++)is(t,c,d,a[u],a[u+1]);return is(t,c,d,l,R(f)?t.length:l+f),c}return is(t,c,d),c}function _c(s){const t=s.options.offset,e=s._tickSize(),n=s._length/e+(t?0:1),i=s._maxLength/e;return Math.floor(Math.min(n,i))}function kc(s,t,e){const n=Ec(s),i=t.length/e;if(!n)return Math.max(i,1);const a=pr(n);for(let o=0,r=a.length-1;o<r;o++){const l=a[o];if(l>i)return l}return Math.max(i,1)}function Sc(s){const t=[];let e,n;for(e=0,n=s.length;e<n;e++)s[e].major&&t.push(e);return t}function Tc(s,t,e,n){let i=0,a=e[0],o;for(n=Math.ceil(n),o=0;o<s.length;o++)o===a&&(t.push(s[o]),i++,a=e[i*n])}function is(s,t,e,n,i){const a=A(n,0),o=Math.min(A(i,s.length),s.length);let r=0,l,c,d;for(e=Math.ceil(e),i&&(l=i-n,e=l/Math.floor(l/e)),d=a;d<0;)r++,d=Math.round(a+r*e);for(c=Math.max(a,0);c<o;c++)c===d&&(t.push(s[c]),r++,d=Math.round(a+r*e))}function Ec(s){const t=s.length;let e,n;if(t<2)return!1;for(n=s[0],e=1;e<t;++e)if(s[e]-s[e-1]!==n)return!1;return n}const Mc=s=>s==="left"?"right":s==="right"?"left":s,Ii=(s,t,e)=>t==="top"||t==="left"?s[t]+e:s[t]-e,Ai=(s,t)=>Math.min(t||s,s);function Pi(s,t){const e=[],n=s.length/t,i=s.length;let a=0;for(;a<i;a+=n)e.push(s[Math.floor(a)]);return e}function Cc(s,t,e){const n=s.ticks.length,i=Math.min(t,n-1),a=s._startPixel,o=s._endPixel,r=1e-6;let l=s.getPixelForTick(i),c;if(!(e&&(n===1?c=Math.max(l-a,o-l):t===0?c=(s.getPixelForTick(1)-l)/2:c=(l-s.getPixelForTick(i-1))/2,l+=i<t?c:-c,l<a-r||l>o+r)))return l}function Ic(s,t){N(s,e=>{const n=e.gc,i=n.length/2;let a;if(i>t){for(a=0;a<i;++a)delete e.data[n[a]];n.splice(0,i)}})}function Se(s){return s.drawTicks?s.tickLength:0}function Ri(s,t){if(!s.display)return 0;const e=tt(s.font,t),n=ot(s.padding);return(q(s.text)?s.text.length:1)*e.lineHeight+n.height}function Ac(s,t){return Vt(s,{scale:t,type:"scale"})}function Pc(s,t,e){return Vt(s,{tick:e,index:t,type:"tick"})}function Rc(s,t,e){let n=Dn(s);return(e&&t!=="right"||!e&&t==="right")&&(n=Mc(n)),n}function Lc(s,t,e,n){const{top:i,left:a,bottom:o,right:r,chart:l}=s,{chartArea:c,scales:d}=l;let u=0,p,f,h;const m=o-i,b=r-a;if(s.isHorizontal()){if(f=nt(n,a,r),L(e)){const g=Object.keys(e)[0],x=e[g];h=d[g].getPixelForValue(x)+m-t}else e==="center"?h=(c.bottom+c.top)/2+m-t:h=Ii(s,e,t);p=r-a}else{if(L(e)){const g=Object.keys(e)[0],x=e[g];f=d[g].getPixelForValue(x)-b+t}else e==="center"?f=(c.left+c.right)/2-b+t:f=Ii(s,e,t);h=nt(n,o,i),u=e==="left"?-J:J}return{titleX:f,titleY:h,maxWidth:p,rotation:u}}class ne extends yt{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:n,_suggestedMax:i}=this;return t=ct(t,Number.POSITIVE_INFINITY),e=ct(e,Number.NEGATIVE_INFINITY),n=ct(n,Number.POSITIVE_INFINITY),i=ct(i,Number.NEGATIVE_INFINITY),{min:ct(t,n),max:ct(e,i),minDefined:X(t),maxDefined:X(e)}}getMinMax(t){let{min:e,max:n,minDefined:i,maxDefined:a}=this.getUserBounds(),o;if(i&&a)return{min:e,max:n};const r=this.getMatchingVisibleMetas();for(let l=0,c=r.length;l<c;++l)o=r[l].controller.getMinMax(this,t),i||(e=Math.min(e,o.min)),a||(n=Math.max(n,o.max));return e=a&&e>n?n:e,n=i&&e>n?e:n,{min:ct(e,ct(n,e)),max:ct(n,ct(e,n))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){W(this.options.beforeUpdate,[this])}update(t,e,n){const{beginAtZero:i,grace:a,ticks:o}=this.options,r=o.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=n=Object.assign({left:0,right:0,top:0,bottom:0},n),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+n.left+n.right:this.height+n.top+n.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=Wr(this,a,i),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const l=r<this.ticks.length;this._convertTicksToLabels(l?Pi(this.ticks,r):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||o.source==="auto")&&(this.ticks=wc(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),l&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,e,n;this.isHorizontal()?(e=this.left,n=this.right):(e=this.top,n=this.bottom,t=!t),this._startPixel=e,this._endPixel=n,this._reversePixels=t,this._length=n-e,this._alignToPixels=this.options.alignToPixels}afterUpdate(){W(this.options.afterUpdate,[this])}beforeSetDimensions(){W(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){W(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),W(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){W(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const e=this.options.ticks;let n,i,a;for(n=0,i=t.length;n<i;n++)a=t[n],a.label=W(e.callback,[a.value,n,t],this)}afterTickToLabelConversion(){W(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){W(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,e=t.ticks,n=Ai(this.ticks.length,t.ticks.maxTicksLimit),i=e.minRotation||0,a=e.maxRotation;let o=i,r,l,c;if(!this._isVisible()||!e.display||i>=a||n<=1||!this.isHorizontal()){this.labelRotation=i;return}const d=this._getLabelSizes(),u=d.widest.width,p=d.highest.height,f=et(this.chart.width-u,0,this.maxWidth);r=t.offset?this.maxWidth/n:f/(n-1),u+6>r&&(r=f/(n-(t.offset?.5:1)),l=this.maxHeight-Se(t.grid)-e.padding-Ri(t.title,this.chart.options.font),c=Math.sqrt(u*u+p*p),o=Rn(Math.min(Math.asin(et((d.highest.height+6)/r,-1,1)),Math.asin(et(l/c,-1,1))-Math.asin(et(p/c,-1,1)))),o=Math.max(i,Math.min(a,o))),this.labelRotation=o}afterCalculateLabelRotation(){W(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){W(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:e,options:{ticks:n,title:i,grid:a}}=this,o=this._isVisible(),r=this.isHorizontal();if(o){const l=Ri(i,e.options.font);if(r?(t.width=this.maxWidth,t.height=Se(a)+l):(t.height=this.maxHeight,t.width=Se(a)+l),n.display&&this.ticks.length){const{first:c,last:d,widest:u,highest:p}=this._getLabelSizes(),f=n.padding*2,h=gt(this.labelRotation),m=Math.cos(h),b=Math.sin(h);if(r){const g=n.mirror?0:b*u.width+m*p.height;t.height=Math.min(this.maxHeight,t.height+g+f)}else{const g=n.mirror?0:m*u.width+b*p.height;t.width=Math.min(this.maxWidth,t.width+g+f)}this._calculatePadding(c,d,b,m)}}this._handleMargins(),r?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,n,i){const{ticks:{align:a,padding:o},position:r}=this.options,l=this.labelRotation!==0,c=r!=="top"&&this.axis==="x";if(this.isHorizontal()){const d=this.getPixelForTick(0)-this.left,u=this.right-this.getPixelForTick(this.ticks.length-1);let p=0,f=0;l?c?(p=i*t.width,f=n*e.height):(p=n*t.height,f=i*e.width):a==="start"?f=e.width:a==="end"?p=t.width:a!=="inner"&&(p=t.width/2,f=e.width/2),this.paddingLeft=Math.max((p-d+o)*this.width/(this.width-d),0),this.paddingRight=Math.max((f-u+o)*this.width/(this.width-u),0)}else{let d=e.height/2,u=t.height/2;a==="start"?(d=0,u=t.height):a==="end"&&(d=e.height,u=0),this.paddingTop=d+o,this.paddingBottom=u+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){W(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:e}=this.options;return e==="top"||e==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let e,n;for(e=0,n=t.length;e<n;e++)R(t[e].label)&&(t.splice(e,1),n--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const e=this.options.ticks.sampleSize;let n=this.ticks;e<n.length&&(n=Pi(n,e)),this._labelSizes=t=this._computeLabelSizes(n,n.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,e,n){const{ctx:i,_longestTextCache:a}=this,o=[],r=[],l=Math.floor(e/Ai(e,n));let c=0,d=0,u,p,f,h,m,b,g,x,w,v,y;for(u=0;u<e;u+=l){if(h=t[u].label,m=this._resolveTickFontOptions(u),i.font=b=m.string,g=a[b]=a[b]||{data:{},gc:[]},x=m.lineHeight,w=v=0,!R(h)&&!q(h))w=Ss(i,g.data,g.gc,w,h),v=x;else if(q(h))for(p=0,f=h.length;p<f;++p)y=h[p],!R(y)&&!q(y)&&(w=Ss(i,g.data,g.gc,w,y),v+=x);o.push(w),r.push(v),c=Math.max(w,c),d=Math.max(v,d)}Ic(a,e);const k=o.indexOf(c),_=r.indexOf(d),S=E=>({width:o[E]||0,height:r[E]||0});return{first:S(0),last:S(e-1),widest:S(k),highest:S(_),widths:o,heights:r}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const e=this._startPixel+t*this._length;return br(this._alignToPixels?Ut(this.chart,e,0):e)}getDecimalForPixel(t){const e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){const e=this.ticks||[];if(t>=0&&t<e.length){const n=e[t];return n.$context||(n.$context=Pc(this.getContext(),t,n))}return this.$context||(this.$context=Ac(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,e=gt(this.labelRotation),n=Math.abs(Math.cos(e)),i=Math.abs(Math.sin(e)),a=this._getLabelSizes(),o=t.autoSkipPadding||0,r=a?a.widest.width+o:0,l=a?a.highest.height+o:0;return this.isHorizontal()?l*n>r*i?r/n:l/i:l*i<r*n?l/n:r/i}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const e=this.axis,n=this.chart,i=this.options,{grid:a,position:o,border:r}=i,l=a.offset,c=this.isHorizontal(),u=this.ticks.length+(l?1:0),p=Se(a),f=[],h=r.setContext(this.getContext()),m=h.display?h.width:0,b=m/2,g=function(O){return Ut(n,O,m)};let x,w,v,y,k,_,S,E,M,I,P,G;if(o==="top")x=g(this.bottom),_=this.bottom-p,E=x-b,I=g(t.top)+b,G=t.bottom;else if(o==="bottom")x=g(this.top),I=t.top,G=g(t.bottom)-b,_=x+b,E=this.top+p;else if(o==="left")x=g(this.right),k=this.right-p,S=x-b,M=g(t.left)+b,P=t.right;else if(o==="right")x=g(this.left),M=t.left,P=g(t.right)-b,k=x+b,S=this.left+p;else if(e==="x"){if(o==="center")x=g((t.top+t.bottom)/2+.5);else if(L(o)){const O=Object.keys(o)[0],K=o[O];x=g(this.chart.scales[O].getPixelForValue(K))}I=t.top,G=t.bottom,_=x+b,E=_+p}else if(e==="y"){if(o==="center")x=g((t.left+t.right)/2);else if(L(o)){const O=Object.keys(o)[0],K=o[O];x=g(this.chart.scales[O].getPixelForValue(K))}k=x-b,S=k-p,M=t.left,P=t.right}const Y=A(i.ticks.maxTicksLimit,u),D=Math.max(1,Math.ceil(u/Y));for(w=0;w<u;w+=D){const O=this.getContext(w),K=a.setContext(O),ht=r.setContext(O),st=K.lineWidth,ie=K.color,Ke=ht.dash||[],ae=ht.dashOffset,ye=K.tickWidth,jt=K.tickColor,ve=K.tickBorderDash||[],zt=K.tickBorderDashOffset;v=Cc(this,w,l),v!==void 0&&(y=Ut(n,v,st),c?k=S=M=P=y:_=E=I=G=y,f.push({tx1:k,ty1:_,tx2:S,ty2:E,x1:M,y1:I,x2:P,y2:G,width:st,color:ie,borderDash:Ke,borderDashOffset:ae,tickWidth:ye,tickColor:jt,tickBorderDash:ve,tickBorderDashOffset:zt}))}return this._ticksLength=u,this._borderValue=x,f}_computeLabelItems(t){const e=this.axis,n=this.options,{position:i,ticks:a}=n,o=this.isHorizontal(),r=this.ticks,{align:l,crossAlign:c,padding:d,mirror:u}=a,p=Se(n.grid),f=p+d,h=u?-d:f,m=-gt(this.labelRotation),b=[];let g,x,w,v,y,k,_,S,E,M,I,P,G="middle";if(i==="top")k=this.bottom-h,_=this._getXAxisLabelAlignment();else if(i==="bottom")k=this.top+h,_=this._getXAxisLabelAlignment();else if(i==="left"){const D=this._getYAxisLabelAlignment(p);_=D.textAlign,y=D.x}else if(i==="right"){const D=this._getYAxisLabelAlignment(p);_=D.textAlign,y=D.x}else if(e==="x"){if(i==="center")k=(t.top+t.bottom)/2+f;else if(L(i)){const D=Object.keys(i)[0],O=i[D];k=this.chart.scales[D].getPixelForValue(O)+f}_=this._getXAxisLabelAlignment()}else if(e==="y"){if(i==="center")y=(t.left+t.right)/2-f;else if(L(i)){const D=Object.keys(i)[0],O=i[D];y=this.chart.scales[D].getPixelForValue(O)}_=this._getYAxisLabelAlignment(p).textAlign}e==="y"&&(l==="start"?G="top":l==="end"&&(G="bottom"));const Y=this._getLabelSizes();for(g=0,x=r.length;g<x;++g){w=r[g],v=w.label;const D=a.setContext(this.getContext(g));S=this.getPixelForTick(g)+a.labelOffset,E=this._resolveTickFontOptions(g),M=E.lineHeight,I=q(v)?v.length:1;const O=I/2,K=D.color,ht=D.textStrokeColor,st=D.textStrokeWidth;let ie=_;o?(y=S,_==="inner"&&(g===x-1?ie=this.options.reverse?"left":"right":g===0?ie=this.options.reverse?"right":"left":ie="center"),i==="top"?c==="near"||m!==0?P=-I*M+M/2:c==="center"?P=-Y.highest.height/2-O*M+M:P=-Y.highest.height+M/2:c==="near"||m!==0?P=M/2:c==="center"?P=Y.highest.height/2-O*M:P=Y.highest.height-I*M,u&&(P*=-1),m!==0&&!D.showLabelBackdrop&&(y+=M/2*Math.sin(m))):(k=S,P=(1-I)*M/2);let Ke;if(D.showLabelBackdrop){const ae=ot(D.backdropPadding),ye=Y.heights[g],jt=Y.widths[g];let ve=P-ae.top,zt=0-ae.left;switch(G){case"middle":ve-=ye/2;break;case"bottom":ve-=ye;break}switch(_){case"center":zt-=jt/2;break;case"right":zt-=jt;break;case"inner":g===x-1?zt-=jt:g>0&&(zt-=jt/2);break}Ke={left:zt,top:ve,width:jt+ae.width,height:ye+ae.height,color:D.backdropColor}}b.push({label:v,font:E,textOffset:P,options:{rotation:m,color:K,strokeColor:ht,strokeWidth:st,textAlign:ie,textBaseline:G,translation:[y,k],backdrop:Ke}})}return b}_getXAxisLabelAlignment(){const{position:t,ticks:e}=this.options;if(-gt(this.labelRotation))return t==="top"?"left":"right";let i="center";return e.align==="start"?i="left":e.align==="end"?i="right":e.align==="inner"&&(i="inner"),i}_getYAxisLabelAlignment(t){const{position:e,ticks:{crossAlign:n,mirror:i,padding:a}}=this.options,o=this._getLabelSizes(),r=t+a,l=o.widest.width;let c,d;return e==="left"?i?(d=this.right+a,n==="near"?c="left":n==="center"?(c="center",d+=l/2):(c="right",d+=l)):(d=this.right-r,n==="near"?c="right":n==="center"?(c="center",d-=l/2):(c="left",d=this.left)):e==="right"?i?(d=this.left+a,n==="near"?c="right":n==="center"?(c="center",d-=l/2):(c="left",d-=l)):(d=this.left+r,n==="near"?c="left":n==="center"?(c="center",d+=l/2):(c="right",d=this.right)):c="right",{textAlign:c,x:d}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,e=this.options.position;if(e==="left"||e==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(e==="top"||e==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:e},left:n,top:i,width:a,height:o}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(n,i,a,o),t.restore())}getLineWidthForValue(t){const e=this.options.grid;if(!this._isVisible()||!e.display)return 0;const i=this.ticks.findIndex(a=>a.value===t);return i>=0?e.setContext(this.getContext(i)).lineWidth:0}drawGrid(t){const e=this.options.grid,n=this.ctx,i=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let a,o;const r=(l,c,d)=>{!d.width||!d.color||(n.save(),n.lineWidth=d.width,n.strokeStyle=d.color,n.setLineDash(d.borderDash||[]),n.lineDashOffset=d.borderDashOffset,n.beginPath(),n.moveTo(l.x,l.y),n.lineTo(c.x,c.y),n.stroke(),n.restore())};if(e.display)for(a=0,o=i.length;a<o;++a){const l=i[a];e.drawOnChartArea&&r({x:l.x1,y:l.y1},{x:l.x2,y:l.y2},l),e.drawTicks&&r({x:l.tx1,y:l.ty1},{x:l.tx2,y:l.ty2},{color:l.tickColor,width:l.tickWidth,borderDash:l.tickBorderDash,borderDashOffset:l.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:e,options:{border:n,grid:i}}=this,a=n.setContext(this.getContext()),o=n.display?a.width:0;if(!o)return;const r=i.setContext(this.getContext(0)).lineWidth,l=this._borderValue;let c,d,u,p;this.isHorizontal()?(c=Ut(t,this.left,o)-o/2,d=Ut(t,this.right,r)+r/2,u=p=l):(u=Ut(t,this.top,o)-o/2,p=Ut(t,this.bottom,r)+r/2,c=d=l),e.save(),e.lineWidth=a.width,e.strokeStyle=a.color,e.beginPath(),e.moveTo(c,u),e.lineTo(d,p),e.stroke(),e.restore()}drawLabels(t){if(!this.options.ticks.display)return;const n=this.ctx,i=this._computeLabelArea();i&&Ls(n,i);const a=this.getLabelItems(t);for(const o of a){const r=o.options,l=o.font,c=o.label,d=o.textOffset;se(n,c,0,d,l,r)}i&&Ds(n)}drawTitle(){const{ctx:t,options:{position:e,title:n,reverse:i}}=this;if(!n.display)return;const a=tt(n.font),o=ot(n.padding),r=n.align;let l=a.lineHeight/2;e==="bottom"||e==="center"||L(e)?(l+=o.bottom,q(n.text)&&(l+=a.lineHeight*(n.text.length-1))):l+=o.top;const{titleX:c,titleY:d,maxWidth:u,rotation:p}=Lc(this,l,e,r);se(t,n.text,0,0,a,{color:n.color,maxWidth:u,rotation:p,textAlign:Rc(r,e,i),textBaseline:"middle",translation:[c,d]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,e=t.ticks&&t.ticks.z||0,n=A(t.grid&&t.grid.z,-1),i=A(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==ne.prototype.draw?[{z:e,draw:a=>{this.draw(a)}}]:[{z:n,draw:a=>{this.drawBackground(),this.drawGrid(a),this.drawTitle()}},{z:i,draw:()=>{this.drawBorder()}},{z:e,draw:a=>{this.drawLabels(a)}}]}getMatchingVisibleMetas(t){const e=this.chart.getSortedVisibleDatasetMetas(),n=this.axis+"AxisID",i=[];let a,o;for(a=0,o=e.length;a<o;++a){const r=e[a];r[n]===this.id&&(!t||r.type===t)&&i.push(r)}return i}_resolveTickFontOptions(t){const e=this.options.ticks.setContext(this.getContext(t));return tt(e.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class as{constructor(t,e,n){this.type=t,this.scope=e,this.override=n,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const e=Object.getPrototypeOf(t);let n;Fc(e)&&(n=this.register(e));const i=this.items,a=t.id,o=this.scope+"."+a;if(!a)throw new Error("class does not have id: "+t);return a in i||(i[a]=t,Dc(t,o,n),this.override&&U.override(t.id,t.overrides)),o}get(t){return this.items[t]}unregister(t){const e=this.items,n=t.id,i=this.scope;n in e&&delete e[n],i&&n in U[i]&&(delete U[i][n],this.override&&delete ee[n])}}function Dc(s,t,e){const n=We(Object.create(null),[e?U.get(e):{},U.get(t),s.defaults]);U.set(t,n),s.defaultRoutes&&Oc(t,s.defaultRoutes),s.descriptors&&U.describe(t,s.descriptors)}function Oc(s,t){Object.keys(t).forEach(e=>{const n=e.split("."),i=n.pop(),a=[s].concat(n).join("."),o=t[e].split("."),r=o.pop(),l=o.join(".");U.route(a,i,l,r)})}function Fc(s){return"id"in s&&"defaults"in s}class $c{constructor(){this.controllers=new as(xt,"datasets",!0),this.elements=new as(yt,"elements"),this.plugins=new as(Object,"plugins"),this.scales=new as(ne,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,n){[...e].forEach(i=>{const a=n||this._getRegistryForType(i);n||a.isForType(i)||a===this.plugins&&i.id?this._exec(t,a,i):N(i,o=>{const r=n||this._getRegistryForType(o);this._exec(t,r,o)})})}_exec(t,e,n){const i=Pn(t);W(n["before"+i],[],n),e[t](n),W(n["after"+i],[],n)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){const n=this._typedRegistries[e];if(n.isForType(t))return n}return this.plugins}_get(t,e,n){const i=e.get(t);if(i===void 0)throw new Error('"'+t+'" is not a registered '+n+".");return i}}var wt=new $c;class Bc{constructor(){this._init=void 0}notify(t,e,n,i){if(e==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install")),this._init===void 0)return;const a=i?this._descriptors(t).filter(i):this._descriptors(t),o=this._notify(a,t,e,n);return e==="afterDestroy"&&(this._notify(a,t,"stop"),this._notify(this._init,t,"uninstall"),this._init=void 0),o}_notify(t,e,n,i){i=i||{};for(const a of t){const o=a.plugin,r=o[n],l=[e,i,a.options];if(W(r,l,o)===!1&&i.cancelable)return!1}return!0}invalidate(){R(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){const n=t&&t.config,i=A(n.options&&n.options.plugins,{}),a=Nc(n);return i===!1&&!e?[]:Wc(t,a,i,e)}_notifyStateChanges(t){const e=this._oldCache||[],n=this._cache,i=(a,o)=>a.filter(r=>!o.some(l=>r.plugin.id===l.plugin.id));this._notify(i(e,n),t,"stop"),this._notify(i(n,e),t,"start")}}function Nc(s){const t={},e=[],n=Object.keys(wt.plugins.items);for(let a=0;a<n.length;a++)e.push(wt.getPlugin(n[a]));const i=s.plugins||[];for(let a=0;a<i.length;a++){const o=i[a];e.indexOf(o)===-1&&(e.push(o),t[o.id]=!0)}return{plugins:e,localIds:t}}function Hc(s,t){return!t&&s===!1?null:s===!0?{}:s}function Wc(s,{plugins:t,localIds:e},n,i){const a=[],o=s.getContext();for(const r of t){const l=r.id,c=Hc(n[l],i);c!==null&&a.push({plugin:r,options:Vc(s.config,{plugin:r,local:e[l]},c,o)})}return a}function Vc(s,{plugin:t,local:e},n,i){const a=s.pluginScopeKeys(t),o=s.getOptionScopes(n,a);return e&&t.defaults&&o.push(t.defaults),s.createResolver(o,i,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function cn(s,t){const e=U.datasets[s]||{};return((t.datasets||{})[s]||{}).indexAxis||t.indexAxis||e.indexAxis||"x"}function jc(s,t){let e=s;return s==="_index_"?e=t:s==="_value_"&&(e=t==="x"?"y":"x"),e}function zc(s,t){return s===t?"_index_":"_value_"}function Li(s){if(s==="x"||s==="y"||s==="r")return s}function qc(s){if(s==="top"||s==="bottom")return"x";if(s==="left"||s==="right")return"y"}function dn(s,...t){if(Li(s))return s;for(const e of t){const n=e.axis||qc(e.position)||s.length>1&&Li(s[0].toLowerCase());if(n)return n}throw new Error(`Cannot determine type of '${s}' axis. Please provide 'axis' or 'position' option.`)}function Di(s,t,e){if(e[t+"AxisID"]===s)return{axis:t}}function Uc(s,t){if(t.data&&t.data.datasets){const e=t.data.datasets.filter(n=>n.xAxisID===s||n.yAxisID===s);if(e.length)return Di(s,"x",e[0])||Di(s,"y",e[0])}return{}}function Gc(s,t){const e=ee[s.type]||{scales:{}},n=t.scales||{},i=cn(s.type,t),a=Object.create(null);return Object.keys(n).forEach(o=>{const r=n[o];if(!L(r))return console.error(`Invalid scale configuration for scale: ${o}`);if(r._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${o}`);const l=dn(o,r,Uc(o,s),U.scales[r.type]),c=zc(l,i),d=e.scales||{};a[o]=De(Object.create(null),[{axis:l},r,d[l],d[c]])}),s.data.datasets.forEach(o=>{const r=o.type||s.type,l=o.indexAxis||cn(r,t),d=(ee[r]||{}).scales||{};Object.keys(d).forEach(u=>{const p=jc(u,l),f=o[p+"AxisID"]||p;a[f]=a[f]||Object.create(null),De(a[f],[{axis:p},n[f],d[u]])})}),Object.keys(a).forEach(o=>{const r=a[o];De(r,[U.scales[r.type],U.scale])}),a}function no(s){const t=s.options||(s.options={});t.plugins=A(t.plugins,{}),t.scales=Gc(s,t)}function io(s){return s=s||{},s.datasets=s.datasets||[],s.labels=s.labels||[],s}function Yc(s){return s=s||{},s.data=io(s.data),no(s),s}const Oi=new Map,ao=new Set;function os(s,t){let e=Oi.get(s);return e||(e=t(),Oi.set(s,e),ao.add(e)),e}const Te=(s,t,e)=>{const n=Ht(t,e);n!==void 0&&s.add(n)};class Xc{constructor(t){this._config=Yc(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=io(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),no(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return os(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,e){return os(`${t}.transition.${e}`,()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,e){return os(`${t}-${e}`,()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]])}pluginScopeKeys(t){const e=t.id,n=this.type;return os(`${n}-plugin-${e}`,()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,e){const n=this._scopeCache;let i=n.get(t);return(!i||e)&&(i=new Map,n.set(t,i)),i}getOptionScopes(t,e,n){const{options:i,type:a}=this,o=this._cachedScopes(t,n),r=o.get(e);if(r)return r;const l=new Set;e.forEach(d=>{t&&(l.add(t),d.forEach(u=>Te(l,t,u))),d.forEach(u=>Te(l,i,u)),d.forEach(u=>Te(l,ee[a]||{},u)),d.forEach(u=>Te(l,U,u)),d.forEach(u=>Te(l,on,u))});const c=Array.from(l);return c.length===0&&c.push(Object.create(null)),ao.has(e)&&o.set(e,c),c}chartOptionScopes(){const{options:t,type:e}=this;return[t,ee[e]||{},U.datasets[e]||{},{type:e},U,on]}resolveNamedOptions(t,e,n,i=[""]){const a={$shared:!0},{resolver:o,subPrefixes:r}=Fi(this._resolverCache,t,i);let l=o;if(Jc(o,e)){a.$shared=!1,n=Wt(n)?n():n;const c=this.createResolver(t,n,r);l=me(o,n,c)}for(const c of e)a[c]=l[c];return a}createResolver(t,e,n=[""],i){const{resolver:a}=Fi(this._resolverCache,t,n);return L(e)?me(a,e,void 0,i):a}}function Fi(s,t,e){let n=s.get(t);n||(n=new Map,s.set(t,n));const i=e.join();let a=n.get(i);return a||(a={resolver:$n(t,e),subPrefixes:e.filter(r=>!r.toLowerCase().includes("hover"))},n.set(i,a)),a}const Kc=s=>L(s)&&Object.getOwnPropertyNames(s).some(t=>Wt(s[t]));function Jc(s,t){const{isScriptable:e,isIndexable:n}=$a(s);for(const i of t){const a=e(i),o=n(i),r=(o||a)&&s[i];if(a&&(Wt(r)||Kc(r))||o&&q(r))return!0}return!1}var Qc="4.5.1";const Zc=["top","bottom","left","right","chartArea"];function $i(s,t){return s==="top"||s==="bottom"||Zc.indexOf(s)===-1&&t==="x"}function Bi(s,t){return function(e,n){return e[s]===n[s]?e[t]-n[t]:e[s]-n[s]}}function Ni(s){const t=s.chart,e=t.options.animation;t.notifyPlugins("afterRender"),W(e&&e.onComplete,[s],t)}function td(s){const t=s.chart,e=t.options.animation;W(e&&e.onProgress,[s],t)}function oo(s){return Hn()&&typeof s=="string"?s=document.getElementById(s):s&&s.length&&(s=s[0]),s&&s.canvas&&(s=s.canvas),s}const bs={},Hi=s=>{const t=oo(s);return Object.values(bs).filter(e=>e.canvas===t).pop()};function ed(s,t,e){const n=Object.keys(s);for(const i of n){const a=+i;if(a>=t){const o=s[i];delete s[i],(e>0||a>t)&&(s[a+e]=o)}}}function sd(s,t,e,n){return!e||s.type==="mouseout"?null:n?t:s}class mt{static register(...t){wt.add(...t),Wi()}static unregister(...t){wt.remove(...t),Wi()}constructor(t,e){const n=this.config=new Xc(e),i=oo(t),a=Hi(i);if(a)throw new Error("Canvas is already in use. Chart with ID '"+a.id+"' must be destroyed before the canvas with ID '"+a.canvas.id+"' can be reused.");const o=n.createResolver(n.chartOptionScopes(),this.getContext());this.platform=new(n.platform||vc(i)),this.platform.updateConfig(n);const r=this.platform.acquireContext(i,o.aspectRatio),l=r&&r.canvas,c=l&&l.height,d=l&&l.width;if(this.id=nr(),this.ctx=r,this.canvas=l,this.width=d,this.height=c,this._options=o,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new Bc,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=vr(u=>this.update(u),o.resizeDelay||0),this._dataChanges=[],bs[this.id]=this,!r||!l){console.error("Failed to create chart: can't acquire context from the given item");return}Mt.listen(this,"complete",Ni),Mt.listen(this,"progress",td),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:e},width:n,height:i,_aspectRatio:a}=this;return R(t)?e&&a?a:i?n/i:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return wt}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():ci(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return oi(this.canvas,this.ctx),this}stop(){return Mt.stop(this),this}resize(t,e){Mt.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){const n=this.options,i=this.canvas,a=n.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(i,t,e,a),r=n.devicePixelRatio||this.platform.getDevicePixelRatio(),l=this.width?"resize":"attach";this.width=o.width,this.height=o.height,this._aspectRatio=this.aspectRatio,ci(this,r,!0)&&(this.notifyPlugins("resize",{size:o}),W(n.onResize,[this,o],this),this.attached&&this._doResize(l)&&this.render())}ensureScalesHaveIDs(){const e=this.options.scales||{};N(e,(n,i)=>{n.id=i})}buildOrUpdateScales(){const t=this.options,e=t.scales,n=this.scales,i=Object.keys(n).reduce((o,r)=>(o[r]=!1,o),{});let a=[];e&&(a=a.concat(Object.keys(e).map(o=>{const r=e[o],l=dn(o,r),c=l==="r",d=l==="x";return{options:r,dposition:c?"chartArea":d?"bottom":"left",dtype:c?"radialLinear":d?"category":"linear"}}))),N(a,o=>{const r=o.options,l=r.id,c=dn(l,r),d=A(r.type,o.dtype);(r.position===void 0||$i(r.position,c)!==$i(o.dposition))&&(r.position=o.dposition),i[l]=!0;let u=null;if(l in n&&n[l].type===d)u=n[l];else{const p=wt.getScale(d);u=new p({id:l,type:d,ctx:this.ctx,chart:this}),n[u.id]=u}u.init(r,t)}),N(i,(o,r)=>{o||delete n[r]}),N(n,o=>{at.configure(this,o,o.options),at.addBox(this,o)})}_updateMetasets(){const t=this._metasets,e=this.data.datasets.length,n=t.length;if(t.sort((i,a)=>i.index-a.index),n>e){for(let i=e;i<n;++i)this._destroyDatasetMeta(i);t.splice(e,n-e)}this._sortedMetasets=t.slice(0).sort(Bi("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach((n,i)=>{e.filter(a=>a===n._dataset).length===0&&this._destroyDatasetMeta(i)})}buildOrUpdateControllers(){const t=[],e=this.data.datasets;let n,i;for(this._removeUnreferencedMetasets(),n=0,i=e.length;n<i;n++){const a=e[n];let o=this.getDatasetMeta(n);const r=a.type||this.config.type;if(o.type&&o.type!==r&&(this._destroyDatasetMeta(n),o=this.getDatasetMeta(n)),o.type=r,o.indexAxis=a.indexAxis||cn(r,this.options),o.order=a.order||0,o.index=n,o.label=""+a.label,o.visible=this.isDatasetVisible(n),o.controller)o.controller.updateIndex(n),o.controller.linkScales();else{const l=wt.getController(r),{datasetElementType:c,dataElementType:d}=U.datasets[r];Object.assign(l,{dataElementType:wt.getElement(d),datasetElementType:c&&wt.getElement(c)}),o.controller=new l(this,n),t.push(o.controller)}}return this._updateMetasets(),t}_resetElements(){N(this.data.datasets,(t,e)=>{this.getDatasetMeta(e).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const e=this.config;e.update();const n=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),i=this._animationsDisabled=!n.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;const a=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let c=0,d=this.data.datasets.length;c<d;c++){const{controller:u}=this.getDatasetMeta(c),p=!i&&a.indexOf(u)===-1;u.buildOrUpdateElements(p),o=Math.max(+u.getMaxOverflow(),o)}o=this._minPadding=n.layout.autoPadding?o:0,this._updateLayout(o),i||N(a,c=>{c.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(Bi("z","_idx"));const{_active:r,_lastEvent:l}=this;l?this._eventHandler(l,!0):r.length&&this._updateHoverStyles(r,r,!0),this.render()}_updateScales(){N(this.scales,t=>{at.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,e=new Set(Object.keys(this._listeners)),n=new Set(t.events);(!Jn(e,n)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(const{method:n,start:i,count:a}of e){const o=n==="_removeElements"?-a:a;ed(t,i,o)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const e=this.data.datasets.length,n=a=>new Set(t.filter(o=>o[0]===a).map((o,r)=>r+","+o.splice(1).join(","))),i=n(0);for(let a=1;a<e;a++)if(!Jn(i,n(a)))return;return Array.from(i).map(a=>a.split(",")).map(a=>({method:a[1],start:+a[2],count:+a[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;at.update(this,this.width,this.height,t);const e=this.chartArea,n=e.width<=0||e.height<=0;this._layers=[],N(this.boxes,i=>{n&&i.position==="chartArea"||(i.configure&&i.configure(),this._layers.push(...i._layers()))},this),this._layers.forEach((i,a)=>{i._idx=a}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let e=0,n=this.data.datasets.length;e<n;++e)this.getDatasetMeta(e).controller.configure();for(let e=0,n=this.data.datasets.length;e<n;++e)this._updateDataset(e,Wt(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){const n=this.getDatasetMeta(t),i={meta:n,index:t,mode:e,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",i)!==!1&&(n.controller._update(e),i.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",i))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(Mt.has(this)?this.attached&&!Mt.running(this)&&Mt.start(this):(this.draw(),Ni({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:n,height:i}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(n,i)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const e=this._sortedMetasets,n=[];let i,a;for(i=0,a=e.length;i<a;++i){const o=e[i];(!t||o.visible)&&n.push(o)}return n}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const e=this.ctx,n={meta:t,index:t.index,cancelable:!0},i=Ya(this,t);this.notifyPlugins("beforeDatasetDraw",n)!==!1&&(i&&Ls(e,i),t.controller.draw(),i&&Ds(e),n.cancelable=!1,this.notifyPlugins("afterDatasetDraw",n))}isPointInArea(t){return Rt(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,e,n,i){const a=Zl.modes[e];return typeof a=="function"?a(this,t,n,i):[]}getDatasetMeta(t){const e=this.data.datasets[t],n=this._metasets;let i=n.filter(a=>a&&a._dataset===e).pop();return i||(i={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},n.push(i)),i}getContext(){return this.$context||(this.$context=Vt(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const e=this.data.datasets[t];if(!e)return!1;const n=this.getDatasetMeta(t);return typeof n.hidden=="boolean"?!n.hidden:!e.hidden}setDatasetVisibility(t,e){const n=this.getDatasetMeta(t);n.hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,n){const i=n?"show":"hide",a=this.getDatasetMeta(t),o=a.controller._resolveAnimations(void 0,i);Ve(e)?(a.data[e].hidden=!n,this.update()):(this.setDatasetVisibility(t,n),o.update(a,{visible:n}),this.update(r=>r.datasetIndex===t?i:void 0))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){const e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),Mt.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),oi(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),delete bs[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,e=this.platform,n=(a,o)=>{e.addEventListener(this,a,o),t[a]=o},i=(a,o,r)=>{a.offsetX=o,a.offsetY=r,this._eventHandler(a)};N(this.options.events,a=>n(a,i))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,e=this.platform,n=(l,c)=>{e.addEventListener(this,l,c),t[l]=c},i=(l,c)=>{t[l]&&(e.removeEventListener(this,l,c),delete t[l])},a=(l,c)=>{this.canvas&&this.resize(l,c)};let o;const r=()=>{i("attach",r),this.attached=!0,this.resize(),n("resize",a),n("detach",o)};o=()=>{this.attached=!1,i("resize",a),this._stop(),this._resize(0,0),n("attach",r)},e.isAttached(this.canvas)?r():o()}unbindEvents(){N(this._listeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._listeners={},N(this._responsiveListeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,e,n){const i=n?"set":"remove";let a,o,r,l;for(e==="dataset"&&(a=this.getDatasetMeta(t[0].datasetIndex),a.controller["_"+i+"DatasetHoverStyle"]()),r=0,l=t.length;r<l;++r){o=t[r];const c=o&&this.getDatasetMeta(o.datasetIndex).controller;c&&c[i+"HoverStyle"](o.element,o.datasetIndex,o.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const e=this._active||[],n=t.map(({datasetIndex:a,index:o})=>{const r=this.getDatasetMeta(a);if(!r)throw new Error("No dataset found at index "+a);return{datasetIndex:a,element:r.data[o],index:o}});!ws(n,e)&&(this._active=n,this._lastEvent=null,this._updateHoverStyles(n,e))}notifyPlugins(t,e,n){return this._plugins.notify(this,t,e,n)}isPluginEnabled(t){return this._plugins._cache.filter(e=>e.plugin.id===t).length===1}_updateHoverStyles(t,e,n){const i=this.options.hover,a=(l,c)=>l.filter(d=>!c.some(u=>d.datasetIndex===u.datasetIndex&&d.index===u.index)),o=a(e,t),r=n?t:a(t,e);o.length&&this.updateHoverStyle(o,i.mode,!1),r.length&&i.mode&&this.updateHoverStyle(r,i.mode,!0)}_eventHandler(t,e){const n={event:t,replay:e,cancelable:!0,inChartArea:this.isPointInArea(t)},i=o=>(o.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",n,i)===!1)return;const a=this._handleEvent(t,e,n.inChartArea);return n.cancelable=!1,this.notifyPlugins("afterEvent",n,i),(a||n.changed)&&this.render(),this}_handleEvent(t,e,n){const{_active:i=[],options:a}=this,o=e,r=this._getActiveElements(t,i,n,o),l=cr(t),c=sd(t,this._lastEvent,n,l);n&&(this._lastEvent=null,W(a.onHover,[t,r,this],this),l&&W(a.onClick,[t,r,this],this));const d=!ws(r,i);return(d||e)&&(this._active=r,this._updateHoverStyles(r,i,e)),this._lastEvent=c,d}_getActiveElements(t,e,n,i){if(t.type==="mouseout")return[];if(!n)return e;const a=this.options.hover;return this.getElementsAtEventForMode(t,a.mode,a,i)}}T(mt,"defaults",U),T(mt,"instances",bs),T(mt,"overrides",ee),T(mt,"registry",wt),T(mt,"version",Qc),T(mt,"getChart",Hi);function Wi(){return N(mt.instances,s=>s._plugins.invalidate())}function nd(s,t,e){const{startAngle:n,x:i,y:a,outerRadius:o,innerRadius:r,options:l}=t,{borderWidth:c,borderJoinStyle:d}=l,u=Math.min(c/o,it(n-e));if(s.beginPath(),s.arc(i,a,o-c/2,n+u/2,e-u/2),r>0){const p=Math.min(c/r,it(n-e));s.arc(i,a,r+c/2,e-p/2,n+p/2,!0)}else{const p=Math.min(c/2,o*it(n-e));if(d==="round")s.arc(i,a,p,e-F/2,n+F/2,!0);else if(d==="bevel"){const f=2*p*p,h=-f*Math.cos(e+F/2)+i,m=-f*Math.sin(e+F/2)+a,b=f*Math.cos(n+F/2)+i,g=f*Math.sin(n+F/2)+a;s.lineTo(h,m),s.lineTo(b,g)}}s.closePath(),s.moveTo(0,0),s.rect(0,0,s.canvas.width,s.canvas.height),s.clip("evenodd")}function id(s,t,e){const{startAngle:n,pixelMargin:i,x:a,y:o,outerRadius:r,innerRadius:l}=t;let c=i/r;s.beginPath(),s.arc(a,o,r,n-c,e+c),l>i?(c=i/l,s.arc(a,o,l,e+c,n-c,!0)):s.arc(a,o,i,e+J,n-J),s.closePath(),s.clip()}function ad(s){return Fn(s,["outerStart","outerEnd","innerStart","innerEnd"])}function od(s,t,e,n){const i=ad(s.options.borderRadius),a=(e-t)/2,o=Math.min(a,n*t/2),r=l=>{const c=(e-Math.min(a,l))*n/2;return et(l,0,Math.min(a,c))};return{outerStart:r(i.outerStart),outerEnd:r(i.outerEnd),innerStart:et(i.innerStart,0,o),innerEnd:et(i.innerEnd,0,o)}}function re(s,t,e,n){return{x:e+s*Math.cos(t),y:n+s*Math.sin(t)}}function Ms(s,t,e,n,i,a){const{x:o,y:r,startAngle:l,pixelMargin:c,innerRadius:d}=t,u=Math.max(t.outerRadius+n+e-c,0),p=d>0?d+n+e+c:0;let f=0;const h=i-l;if(n){const D=d>0?d-n:0,O=u>0?u-n:0,K=(D+O)/2,ht=K!==0?h*K/(K+n):h;f=(h-ht)/2}const m=Math.max(.001,h*u-e/F)/u,b=(h-m)/2,g=l+b+f,x=i-b-f,{outerStart:w,outerEnd:v,innerStart:y,innerEnd:k}=od(t,p,u,x-g),_=u-w,S=u-v,E=g+w/_,M=x-v/S,I=p+y,P=p+k,G=g+y/I,Y=x-k/P;if(s.beginPath(),a){const D=(E+M)/2;if(s.arc(o,r,u,E,D),s.arc(o,r,u,D,M),v>0){const st=re(S,M,o,r);s.arc(st.x,st.y,v,M,x+J)}const O=re(P,x,o,r);if(s.lineTo(O.x,O.y),k>0){const st=re(P,Y,o,r);s.arc(st.x,st.y,k,x+J,Y+Math.PI)}const K=(x-k/p+(g+y/p))/2;if(s.arc(o,r,p,x-k/p,K,!0),s.arc(o,r,p,K,g+y/p,!0),y>0){const st=re(I,G,o,r);s.arc(st.x,st.y,y,G+Math.PI,g-J)}const ht=re(_,g,o,r);if(s.lineTo(ht.x,ht.y),w>0){const st=re(_,E,o,r);s.arc(st.x,st.y,w,g-J,E)}}else{s.moveTo(o,r);const D=Math.cos(E)*u+o,O=Math.sin(E)*u+r;s.lineTo(D,O);const K=Math.cos(M)*u+o,ht=Math.sin(M)*u+r;s.lineTo(K,ht)}s.closePath()}function rd(s,t,e,n,i){const{fullCircles:a,startAngle:o,circumference:r}=t;let l=t.endAngle;if(a){Ms(s,t,e,n,l,i);for(let c=0;c<a;++c)s.fill();isNaN(r)||(l=o+(r%j||j))}return Ms(s,t,e,n,l,i),s.fill(),l}function ld(s,t,e,n,i){const{fullCircles:a,startAngle:o,circumference:r,options:l}=t,{borderWidth:c,borderJoinStyle:d,borderDash:u,borderDashOffset:p,borderRadius:f}=l,h=l.borderAlign==="inner";if(!c)return;s.setLineDash(u||[]),s.lineDashOffset=p,h?(s.lineWidth=c*2,s.lineJoin=d||"round"):(s.lineWidth=c,s.lineJoin=d||"bevel");let m=t.endAngle;if(a){Ms(s,t,e,n,m,i);for(let b=0;b<a;++b)s.stroke();isNaN(r)||(m=o+(r%j||j))}h&&id(s,t,m),l.selfJoin&&m-o>=F&&f===0&&d!=="miter"&&nd(s,t,m),a||(Ms(s,t,e,n,m,i),s.stroke())}class Ae extends yt{constructor(e){super();T(this,"circumference");T(this,"endAngle");T(this,"fullCircles");T(this,"innerRadius");T(this,"outerRadius");T(this,"pixelMargin");T(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,e&&Object.assign(this,e)}inRange(e,n,i){const a=this.getProps(["x","y"],i),{angle:o,distance:r}=Ma(a,{x:e,y:n}),{startAngle:l,endAngle:c,innerRadius:d,outerRadius:u,circumference:p}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],i),f=(this.options.spacing+this.options.borderWidth)/2,h=A(p,c-l),m=je(o,l,c)&&l!==c,b=h>=j||m,g=At(r,d+f,u+f);return b&&g}getCenterPoint(e){const{x:n,y:i,startAngle:a,endAngle:o,innerRadius:r,outerRadius:l}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],e),{offset:c,spacing:d}=this.options,u=(a+o)/2,p=(r+l+d+c)/2;return{x:n+Math.cos(u)*p,y:i+Math.sin(u)*p}}tooltipPosition(e){return this.getCenterPoint(e)}draw(e){const{options:n,circumference:i}=this,a=(n.offset||0)/4,o=(n.spacing||0)/2,r=n.circular;if(this.pixelMargin=n.borderAlign==="inner"?.33:0,this.fullCircles=i>j?Math.floor(i/j):0,i===0||this.innerRadius<0||this.outerRadius<0)return;e.save();const l=(this.startAngle+this.endAngle)/2;e.translate(Math.cos(l)*a,Math.sin(l)*a);const c=1-Math.sin(Math.min(F,i||0)),d=a*c;e.fillStyle=n.backgroundColor,e.strokeStyle=n.borderColor,rd(e,this,d,o,r),ld(e,this,d,o,r),e.restore()}}T(Ae,"id","arc"),T(Ae,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1}),T(Ae,"defaultRoutes",{backgroundColor:"backgroundColor"}),T(Ae,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"});function ro(s,t,e=t){s.lineCap=A(e.borderCapStyle,t.borderCapStyle),s.setLineDash(A(e.borderDash,t.borderDash)),s.lineDashOffset=A(e.borderDashOffset,t.borderDashOffset),s.lineJoin=A(e.borderJoinStyle,t.borderJoinStyle),s.lineWidth=A(e.borderWidth,t.borderWidth),s.strokeStyle=A(e.borderColor,t.borderColor)}function cd(s,t,e){s.lineTo(e.x,e.y)}function dd(s){return s.stepped?Rr:s.tension||s.cubicInterpolationMode==="monotone"?Lr:cd}function lo(s,t,e={}){const n=s.length,{start:i=0,end:a=n-1}=e,{start:o,end:r}=t,l=Math.max(i,o),c=Math.min(a,r),d=i<o&&a<o||i>r&&a>r;return{count:n,start:l,loop:t.loop,ilen:c<l&&!d?n+c-l:c-l}}function ud(s,t,e,n){const{points:i,options:a}=t,{count:o,start:r,loop:l,ilen:c}=lo(i,e,n),d=dd(a);let{move:u=!0,reverse:p}=n||{},f,h,m;for(f=0;f<=c;++f)h=i[(r+(p?c-f:f))%o],!h.skip&&(u?(s.moveTo(h.x,h.y),u=!1):d(s,m,h,p,a.stepped),m=h);return l&&(h=i[(r+(p?c:0))%o],d(s,m,h,p,a.stepped)),!!l}function pd(s,t,e,n){const i=t.points,{count:a,start:o,ilen:r}=lo(i,e,n),{move:l=!0,reverse:c}=n||{};let d=0,u=0,p,f,h,m,b,g;const x=v=>(o+(c?r-v:v))%a,w=()=>{m!==b&&(s.lineTo(d,b),s.lineTo(d,m),s.lineTo(d,g))};for(l&&(f=i[x(0)],s.moveTo(f.x,f.y)),p=0;p<=r;++p){if(f=i[x(p)],f.skip)continue;const v=f.x,y=f.y,k=v|0;k===h?(y<m?m=y:y>b&&(b=y),d=(u*d+v)/++u):(w(),s.lineTo(v,y),h=k,u=0,m=b=y),g=y}w()}function un(s){const t=s.options,e=t.borderDash&&t.borderDash.length;return!s._decimated&&!s._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!e?pd:ud}function fd(s){return s.stepped?ul:s.tension||s.cubicInterpolationMode==="monotone"?pl:Kt}function hd(s,t,e,n){let i=t._path;i||(i=t._path=new Path2D,t.path(i,e,n)&&i.closePath()),ro(s,t.options),s.stroke(i)}function md(s,t,e,n){const{segments:i,options:a}=t,o=un(t);for(const r of i)ro(s,a,r.style),s.beginPath(),o(s,t,r,{start:e,end:e+n-1})&&s.closePath(),s.stroke()}const bd=typeof Path2D=="function";function gd(s,t,e,n){bd&&!t.options.segment?hd(s,t,e,n):md(s,t,e,n)}class Ft extends yt{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){const n=this.options;if((n.tension||n.cubicInterpolationMode==="monotone")&&!n.stepped&&!this._pointsUpdated){const i=n.spanGaps?this._loop:this._fullLoop;nl(this._points,n,t,i,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=xl(this,this.options.segment))}first(){const t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){const t=this.segments,e=this.points,n=t.length;return n&&e[t[n-1].end]}interpolate(t,e){const n=this.options,i=t[e],a=this.points,o=Ga(this,{property:e,start:i,end:i});if(!o.length)return;const r=[],l=fd(n);let c,d;for(c=0,d=o.length;c<d;++c){const{start:u,end:p}=o[c],f=a[u],h=a[p];if(f===h){r.push(f);continue}const m=Math.abs((i-f[e])/(h[e]-f[e])),b=l(f,h,m,n.stepped);b[e]=t[e],r.push(b)}return r.length===1?r[0]:r}pathSegment(t,e,n){return un(this)(t,this,e,n)}path(t,e,n){const i=this.segments,a=un(this);let o=this._loop;e=e||0,n=n||this.points.length-e;for(const r of i)o&=a(t,this,r,{start:e,end:e+n-1});return!!o}draw(t,e,n,i){const a=this.options||{};(this.points||[]).length&&a.borderWidth&&(t.save(),gd(t,this,n,i),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}T(Ft,"id","line"),T(Ft,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),T(Ft,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),T(Ft,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"});function Vi(s,t,e,n){const i=s.options,{[e]:a}=s.getProps([e],n);return Math.abs(t-a)<i.radius+i.hitRadius}class gs extends yt{constructor(e){super();T(this,"parsed");T(this,"skip");T(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,e&&Object.assign(this,e)}inRange(e,n,i){const a=this.options,{x:o,y:r}=this.getProps(["x","y"],i);return Math.pow(e-o,2)+Math.pow(n-r,2)<Math.pow(a.hitRadius+a.radius,2)}inXRange(e,n){return Vi(this,e,"x",n)}inYRange(e,n){return Vi(this,e,"y",n)}getCenterPoint(e){const{x:n,y:i}=this.getProps(["x","y"],e);return{x:n,y:i}}size(e){e=e||this.options||{};let n=e.radius||0;n=Math.max(n,n&&e.hoverRadius||0);const i=n&&e.borderWidth||0;return(n+i)*2}draw(e,n){const i=this.options;this.skip||i.radius<.1||!Rt(this,n,this.size(i)/2)||(e.strokeStyle=i.borderColor,e.lineWidth=i.borderWidth,e.fillStyle=i.backgroundColor,rn(e,i,this.x,this.y))}getRange(){const e=this.options||{};return e.radius+e.hitRadius}}T(gs,"id","point"),T(gs,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),T(gs,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function co(s,t){const{x:e,y:n,base:i,width:a,height:o}=s.getProps(["x","y","base","width","height"],t);let r,l,c,d,u;return s.horizontal?(u=o/2,r=Math.min(e,i),l=Math.max(e,i),c=n-u,d=n+u):(u=a/2,r=e-u,l=e+u,c=Math.min(n,i),d=Math.max(n,i)),{left:r,top:c,right:l,bottom:d}}function $t(s,t,e,n){return s?0:et(t,e,n)}function xd(s,t,e){const n=s.options.borderWidth,i=s.borderSkipped,a=Fa(n);return{t:$t(i.top,a.top,0,e),r:$t(i.right,a.right,0,t),b:$t(i.bottom,a.bottom,0,e),l:$t(i.left,a.left,0,t)}}function yd(s,t,e){const{enableBorderRadius:n}=s.getProps(["enableBorderRadius"]),i=s.options.borderRadius,a=Zt(i),o=Math.min(t,e),r=s.borderSkipped,l=n||L(i);return{topLeft:$t(!l||r.top||r.left,a.topLeft,0,o),topRight:$t(!l||r.top||r.right,a.topRight,0,o),bottomLeft:$t(!l||r.bottom||r.left,a.bottomLeft,0,o),bottomRight:$t(!l||r.bottom||r.right,a.bottomRight,0,o)}}function vd(s){const t=co(s),e=t.right-t.left,n=t.bottom-t.top,i=xd(s,e/2,n/2),a=yd(s,e/2,n/2);return{outer:{x:t.left,y:t.top,w:e,h:n,radius:a},inner:{x:t.left+i.l,y:t.top+i.t,w:e-i.l-i.r,h:n-i.t-i.b,radius:{topLeft:Math.max(0,a.topLeft-Math.max(i.t,i.l)),topRight:Math.max(0,a.topRight-Math.max(i.t,i.r)),bottomLeft:Math.max(0,a.bottomLeft-Math.max(i.b,i.l)),bottomRight:Math.max(0,a.bottomRight-Math.max(i.b,i.r))}}}}function Ks(s,t,e,n){const i=t===null,a=e===null,r=s&&!(i&&a)&&co(s,n);return r&&(i||At(t,r.left,r.right))&&(a||At(e,r.top,r.bottom))}function wd(s){return s.topLeft||s.topRight||s.bottomLeft||s.bottomRight}function _d(s,t){s.rect(t.x,t.y,t.w,t.h)}function Js(s,t,e={}){const n=s.x!==e.x?-t:0,i=s.y!==e.y?-t:0,a=(s.x+s.w!==e.x+e.w?t:0)-n,o=(s.y+s.h!==e.y+e.h?t:0)-i;return{x:s.x+n,y:s.y+i,w:s.w+a,h:s.h+o,radius:s.radius}}class xs extends yt{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:e,options:{borderColor:n,backgroundColor:i}}=this,{inner:a,outer:o}=vd(this),r=wd(o.radius)?ze:_d;t.save(),(o.w!==a.w||o.h!==a.h)&&(t.beginPath(),r(t,Js(o,e,a)),t.clip(),r(t,Js(a,-e,o)),t.fillStyle=n,t.fill("evenodd")),t.beginPath(),r(t,Js(a,e)),t.fillStyle=i,t.fill(),t.restore()}inRange(t,e,n){return Ks(this,t,e,n)}inXRange(t,e){return Ks(this,t,null,e)}inYRange(t,e){return Ks(this,null,t,e)}getCenterPoint(t){const{x:e,y:n,base:i,horizontal:a}=this.getProps(["x","y","base","horizontal"],t);return{x:a?(e+i)/2:e,y:a?n:(n+i)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}}T(xs,"id","bar"),T(xs,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),T(xs,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});var kd=Object.freeze({__proto__:null,ArcElement:Ae,BarElement:xs,LineElement:Ft,PointElement:gs});const pn=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"],ji=pn.map(s=>s.replace("rgb(","rgba(").replace(")",", 0.5)"));function uo(s){return pn[s%pn.length]}function po(s){return ji[s%ji.length]}function Sd(s,t){return s.borderColor=uo(t),s.backgroundColor=po(t),++t}function Td(s,t){return s.backgroundColor=s.data.map(()=>uo(t++)),t}function Ed(s,t){return s.backgroundColor=s.data.map(()=>po(t++)),t}function Md(s){let t=0;return(e,n)=>{const i=s.getDatasetMeta(n).controller;i instanceof Jt?t=Td(e,t):i instanceof Be?t=Ed(e,t):i&&(t=Sd(e,t))}}function zi(s){let t;for(t in s)if(s[t].borderColor||s[t].backgroundColor)return!0;return!1}function Cd(s){return s&&(s.borderColor||s.backgroundColor)}function Id(){return U.borderColor!=="rgba(0,0,0,0.1)"||U.backgroundColor!=="rgba(0,0,0,0.1)"}var Ad={id:"colors",defaults:{enabled:!0,forceOverride:!1},beforeLayout(s,t,e){if(!e.enabled)return;const{data:{datasets:n},options:i}=s.config,{elements:a}=i,o=zi(n)||Cd(i)||a&&zi(a)||Id();if(!e.forceOverride&&o)return;const r=Md(s);n.forEach(r)}};function Pd(s,t,e,n,i){const a=i.samples||n;if(a>=e)return s.slice(t,t+e);const o=[],r=(e-2)/(a-2);let l=0;const c=t+e-1;let d=t,u,p,f,h,m;for(o[l++]=s[d],u=0;u<a-2;u++){let b=0,g=0,x;const w=Math.floor((u+1)*r)+1+t,v=Math.min(Math.floor((u+2)*r)+1,e)+t,y=v-w;for(x=w;x<v;x++)b+=s[x].x,g+=s[x].y;b/=y,g/=y;const k=Math.floor(u*r)+1+t,_=Math.min(Math.floor((u+1)*r)+1,e)+t,{x:S,y:E}=s[d];for(f=h=-1,x=k;x<_;x++)h=.5*Math.abs((S-b)*(s[x].y-E)-(S-s[x].x)*(g-E)),h>f&&(f=h,p=s[x],m=x);o[l++]=p,d=m}return o[l++]=s[c],o}function Rd(s,t,e,n){let i=0,a=0,o,r,l,c,d,u,p,f,h,m;const b=[],g=t+e-1,x=s[t].x,v=s[g].x-x;for(o=t;o<t+e;++o){r=s[o],l=(r.x-x)/v*n,c=r.y;const y=l|0;if(y===d)c<h?(h=c,u=o):c>m&&(m=c,p=o),i=(a*i+r.x)/++a;else{const k=o-1;if(!R(u)&&!R(p)){const _=Math.min(u,p),S=Math.max(u,p);_!==f&&_!==k&&b.push({...s[_],x:i}),S!==f&&S!==k&&b.push({...s[S],x:i})}o>0&&k!==f&&b.push(s[k]),b.push(r),d=y,a=0,h=m=c,u=p=f=o}}return b}function fo(s){if(s._decimated){const t=s._data;delete s._decimated,delete s._data,Object.defineProperty(s,"data",{configurable:!0,enumerable:!0,writable:!0,value:t})}}function qi(s){s.data.datasets.forEach(t=>{fo(t)})}function Ld(s,t){const e=t.length;let n=0,i;const{iScale:a}=s,{min:o,max:r,minDefined:l,maxDefined:c}=a.getUserBounds();return l&&(n=et(Pt(t,a.axis,o).lo,0,e-1)),c?i=et(Pt(t,a.axis,r).hi+1,n,e)-n:i=e-n,{start:n,count:i}}var Dd={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(s,t,e)=>{if(!e.enabled){qi(s);return}const n=s.width;s.data.datasets.forEach((i,a)=>{const{_data:o,indexAxis:r}=i,l=s.getDatasetMeta(a),c=o||i.data;if(Ce([r,s.options.indexAxis])==="y"||!l.controller.supportsDecimation)return;const d=s.scales[l.xAxisID];if(d.type!=="linear"&&d.type!=="time"||s.options.parsing)return;let{start:u,count:p}=Ld(l,c);const f=e.threshold||4*n;if(p<=f){fo(i);return}R(o)&&(i._data=c,delete i.data,Object.defineProperty(i,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(m){this._data=m}}));let h;switch(e.algorithm){case"lttb":h=Pd(c,u,p,n,e);break;case"min-max":h=Rd(c,u,p,n);break;default:throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`)}i._decimated=h})},destroy(s){qi(s)}};function Od(s,t,e){const n=s.segments,i=s.points,a=t.points,o=[];for(const r of n){let{start:l,end:c}=r;c=$s(l,c,i);const d=fn(e,i[l],i[c],r.loop);if(!t.segments){o.push({source:r,target:d,start:i[l],end:i[c]});continue}const u=Ga(t,d);for(const p of u){const f=fn(e,a[p.start],a[p.end],p.loop),h=Ua(r,i,f);for(const m of h)o.push({source:m,target:p,start:{[e]:Ui(d,f,"start",Math.max)},end:{[e]:Ui(d,f,"end",Math.min)}})}}return o}function fn(s,t,e,n){if(n)return;let i=t[s],a=e[s];return s==="angle"&&(i=it(i),a=it(a)),{property:s,start:i,end:a}}function Fd(s,t){const{x:e=null,y:n=null}=s||{},i=t.points,a=[];return t.segments.forEach(({start:o,end:r})=>{r=$s(o,r,i);const l=i[o],c=i[r];n!==null?(a.push({x:l.x,y:n}),a.push({x:c.x,y:n})):e!==null&&(a.push({x:e,y:l.y}),a.push({x:e,y:c.y}))}),a}function $s(s,t,e){for(;t>s;t--){const n=e[t];if(!isNaN(n.x)&&!isNaN(n.y))break}return t}function Ui(s,t,e,n){return s&&t?n(s[e],t[e]):s?s[e]:t?t[e]:0}function ho(s,t){let e=[],n=!1;return q(s)?(n=!0,e=s):e=Fd(s,t),e.length?new Ft({points:e,options:{tension:0},_loop:n,_fullLoop:n}):null}function Gi(s){return s&&s.fill!==!1}function $d(s,t,e){let i=s[t].fill;const a=[t];let o;if(!e)return i;for(;i!==!1&&a.indexOf(i)===-1;){if(!X(i))return i;if(o=s[i],!o)return!1;if(o.visible)return i;a.push(i),i=o.fill}return!1}function Bd(s,t,e){const n=Vd(s);if(L(n))return isNaN(n.value)?!1:n;let i=parseFloat(n);return X(i)&&Math.floor(i)===i?Nd(n[0],t,i,e):["origin","start","end","stack","shape"].indexOf(n)>=0&&n}function Nd(s,t,e,n){return(s==="-"||s==="+")&&(e=t+e),e===t||e<0||e>=n?!1:e}function Hd(s,t){let e=null;return s==="start"?e=t.bottom:s==="end"?e=t.top:L(s)?e=t.getPixelForValue(s.value):t.getBasePixel&&(e=t.getBasePixel()),e}function Wd(s,t,e){let n;return s==="start"?n=e:s==="end"?n=t.options.reverse?t.min:t.max:L(s)?n=s.value:n=t.getBaseValue(),n}function Vd(s){const t=s.options,e=t.fill;let n=A(e&&e.target,e);return n===void 0&&(n=!!t.backgroundColor),n===!1||n===null?!1:n===!0?"origin":n}function jd(s){const{scale:t,index:e,line:n}=s,i=[],a=n.segments,o=n.points,r=zd(t,e);r.push(ho({x:null,y:t.bottom},n));for(let l=0;l<a.length;l++){const c=a[l];for(let d=c.start;d<=c.end;d++)qd(i,o[d],r)}return new Ft({points:i,options:{}})}function zd(s,t){const e=[],n=s.getMatchingVisibleMetas("line");for(let i=0;i<n.length;i++){const a=n[i];if(a.index===t)break;a.hidden||e.unshift(a.dataset)}return e}function qd(s,t,e){const n=[];for(let i=0;i<e.length;i++){const a=e[i],{first:o,last:r,point:l}=Ud(a,t,"x");if(!(!l||o&&r)){if(o)n.unshift(l);else if(s.push(l),!r)break}}s.push(...n)}function Ud(s,t,e){const n=s.interpolate(t,e);if(!n)return{};const i=n[e],a=s.segments,o=s.points;let r=!1,l=!1;for(let c=0;c<a.length;c++){const d=a[c],u=o[d.start][e],p=o[d.end][e];if(At(i,u,p)){r=i===u,l=i===p;break}}return{first:r,last:l,point:n}}class mo{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,e,n){const{x:i,y:a,radius:o}=this;return e=e||{start:0,end:j},t.arc(i,a,o,e.end,e.start,!0),!n.bounds}interpolate(t){const{x:e,y:n,radius:i}=this,a=t.angle;return{x:e+Math.cos(a)*i,y:n+Math.sin(a)*i,angle:a}}}function Gd(s){const{chart:t,fill:e,line:n}=s;if(X(e))return Yd(t,e);if(e==="stack")return jd(s);if(e==="shape")return!0;const i=Xd(s);return i instanceof mo?i:ho(i,n)}function Yd(s,t){const e=s.getDatasetMeta(t);return e&&s.isDatasetVisible(t)?e.dataset:null}function Xd(s){return(s.scale||{}).getPointPositionForValue?Jd(s):Kd(s)}function Kd(s){const{scale:t={},fill:e}=s,n=Hd(e,t);if(X(n)){const i=t.isHorizontal();return{x:i?n:null,y:i?null:n}}return null}function Jd(s){const{scale:t,fill:e}=s,n=t.options,i=t.getLabels().length,a=n.reverse?t.max:t.min,o=Wd(e,t,a),r=[];if(n.grid.circular){const l=t.getPointPositionForValue(0,a);return new mo({x:l.x,y:l.y,radius:t.getDistanceFromCenterForValue(o)})}for(let l=0;l<i;++l)r.push(t.getPointPositionForValue(l,o));return r}function Qs(s,t,e){const n=Gd(t),{chart:i,index:a,line:o,scale:r,axis:l}=t,c=o.options,d=c.fill,u=c.backgroundColor,{above:p=u,below:f=u}=d||{},h=i.getDatasetMeta(a),m=Ya(i,h);n&&o.points.length&&(Ls(s,e),Qd(s,{line:o,target:n,above:p,below:f,area:e,scale:r,axis:l,clip:m}),Ds(s))}function Qd(s,t){const{line:e,target:n,above:i,below:a,area:o,scale:r,clip:l}=t,c=e._loop?"angle":t.axis;s.save();let d=a;a!==i&&(c==="x"?(Yi(s,n,o.top),Zs(s,{line:e,target:n,color:i,scale:r,property:c,clip:l}),s.restore(),s.save(),Yi(s,n,o.bottom)):c==="y"&&(Xi(s,n,o.left),Zs(s,{line:e,target:n,color:a,scale:r,property:c,clip:l}),s.restore(),s.save(),Xi(s,n,o.right),d=i)),Zs(s,{line:e,target:n,color:d,scale:r,property:c,clip:l}),s.restore()}function Yi(s,t,e){const{segments:n,points:i}=t;let a=!0,o=!1;s.beginPath();for(const r of n){const{start:l,end:c}=r,d=i[l],u=i[$s(l,c,i)];a?(s.moveTo(d.x,d.y),a=!1):(s.lineTo(d.x,e),s.lineTo(d.x,d.y)),o=!!t.pathSegment(s,r,{move:o}),o?s.closePath():s.lineTo(u.x,e)}s.lineTo(t.first().x,e),s.closePath(),s.clip()}function Xi(s,t,e){const{segments:n,points:i}=t;let a=!0,o=!1;s.beginPath();for(const r of n){const{start:l,end:c}=r,d=i[l],u=i[$s(l,c,i)];a?(s.moveTo(d.x,d.y),a=!1):(s.lineTo(e,d.y),s.lineTo(d.x,d.y)),o=!!t.pathSegment(s,r,{move:o}),o?s.closePath():s.lineTo(e,u.y)}s.lineTo(e,t.first().y),s.closePath(),s.clip()}function Zs(s,t){const{line:e,target:n,property:i,color:a,scale:o,clip:r}=t,l=Od(e,n,i);for(const{source:c,target:d,start:u,end:p}of l){const{style:{backgroundColor:f=a}={}}=c,h=n!==!0;s.save(),s.fillStyle=f,Zd(s,o,r,h&&fn(i,u,p)),s.beginPath();const m=!!e.pathSegment(s,c);let b;if(h){m?s.closePath():Ki(s,n,p,i);const g=!!n.pathSegment(s,d,{move:m,reverse:!0});b=m&&g,b||Ki(s,n,u,i)}s.closePath(),s.fill(b?"evenodd":"nonzero"),s.restore()}}function Zd(s,t,e,n){const i=t.chart.chartArea,{property:a,start:o,end:r}=n||{};if(a==="x"||a==="y"){let l,c,d,u;a==="x"?(l=o,c=i.top,d=r,u=i.bottom):(l=i.left,c=o,d=i.right,u=r),s.beginPath(),e&&(l=Math.max(l,e.left),d=Math.min(d,e.right),c=Math.max(c,e.top),u=Math.min(u,e.bottom)),s.rect(l,c,d-l,u-c),s.clip()}}function Ki(s,t,e,n){const i=t.interpolate(e,n);i&&s.lineTo(i.x,i.y)}var tu={id:"filler",afterDatasetsUpdate(s,t,e){const n=(s.data.datasets||[]).length,i=[];let a,o,r,l;for(o=0;o<n;++o)a=s.getDatasetMeta(o),r=a.dataset,l=null,r&&r.options&&r instanceof Ft&&(l={visible:s.isDatasetVisible(o),index:o,fill:Bd(r,o,n),chart:s,axis:a.controller.options.indexAxis,scale:a.vScale,line:r}),a.$filler=l,i.push(l);for(o=0;o<n;++o)l=i[o],!(!l||l.fill===!1)&&(l.fill=$d(i,o,e.propagate))},beforeDraw(s,t,e){const n=e.drawTime==="beforeDraw",i=s.getSortedVisibleDatasetMetas(),a=s.chartArea;for(let o=i.length-1;o>=0;--o){const r=i[o].$filler;r&&(r.line.updateControlPoints(a,r.axis),n&&r.fill&&Qs(s.ctx,r,a))}},beforeDatasetsDraw(s,t,e){if(e.drawTime!=="beforeDatasetsDraw")return;const n=s.getSortedVisibleDatasetMetas();for(let i=n.length-1;i>=0;--i){const a=n[i].$filler;Gi(a)&&Qs(s.ctx,a,s.chartArea)}},beforeDatasetDraw(s,t,e){const n=t.meta.$filler;!Gi(n)||e.drawTime!=="beforeDatasetDraw"||Qs(s.ctx,n,s.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const Ji=(s,t)=>{let{boxHeight:e=t,boxWidth:n=t}=s;return s.usePointStyle&&(e=Math.min(e,t),n=s.pointStyleWidth||Math.min(n,t)),{boxWidth:n,boxHeight:e,itemHeight:Math.max(t,e)}},eu=(s,t)=>s!==null&&t!==null&&s.datasetIndex===t.datasetIndex&&s.index===t.index;class Qi extends yt{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e,n){this.maxWidth=t,this.maxHeight=e,this._margins=n,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let e=W(t.generateLabels,[this.chart],this)||[];t.filter&&(e=e.filter(n=>t.filter(n,this.chart.data))),t.sort&&(e=e.sort((n,i)=>t.sort(n,i,this.chart.data))),this.options.reverse&&e.reverse(),this.legendItems=e}fit(){const{options:t,ctx:e}=this;if(!t.display){this.width=this.height=0;return}const n=t.labels,i=tt(n.font),a=i.size,o=this._computeTitleHeight(),{boxWidth:r,itemHeight:l}=Ji(n,a);let c,d;e.font=i.string,this.isHorizontal()?(c=this.maxWidth,d=this._fitRows(o,a,r,l)+10):(d=this.maxHeight,c=this._fitCols(o,i,r,l)+10),this.width=Math.min(c,t.maxWidth||this.maxWidth),this.height=Math.min(d,t.maxHeight||this.maxHeight)}_fitRows(t,e,n,i){const{ctx:a,maxWidth:o,options:{labels:{padding:r}}}=this,l=this.legendHitBoxes=[],c=this.lineWidths=[0],d=i+r;let u=t;a.textAlign="left",a.textBaseline="middle";let p=-1,f=-d;return this.legendItems.forEach((h,m)=>{const b=n+e/2+a.measureText(h.text).width;(m===0||c[c.length-1]+b+2*r>o)&&(u+=d,c[c.length-(m>0?0:1)]=0,f+=d,p++),l[m]={left:0,top:f,row:p,width:b,height:i},c[c.length-1]+=b+r}),u}_fitCols(t,e,n,i){const{ctx:a,maxHeight:o,options:{labels:{padding:r}}}=this,l=this.legendHitBoxes=[],c=this.columnSizes=[],d=o-t;let u=r,p=0,f=0,h=0,m=0;return this.legendItems.forEach((b,g)=>{const{itemWidth:x,itemHeight:w}=su(n,e,a,b,i);g>0&&f+w+2*r>d&&(u+=p+r,c.push({width:p,height:f}),h+=p+r,m++,p=f=0),l[g]={left:h,top:f,col:m,width:x,height:w},p=Math.max(p,x),f+=w+r}),u+=p,c.push({width:p,height:f}),u}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:e,options:{align:n,labels:{padding:i},rtl:a}}=this,o=le(a,this.left,this.width);if(this.isHorizontal()){let r=0,l=nt(n,this.left+i,this.right-this.lineWidths[r]);for(const c of e)r!==c.row&&(r=c.row,l=nt(n,this.left+i,this.right-this.lineWidths[r])),c.top+=this.top+t+i,c.left=o.leftForLtr(o.x(l),c.width),l+=c.width+i}else{let r=0,l=nt(n,this.top+t+i,this.bottom-this.columnSizes[r].height);for(const c of e)c.col!==r&&(r=c.col,l=nt(n,this.top+t+i,this.bottom-this.columnSizes[r].height)),c.top=l,c.left+=this.left+i,c.left=o.leftForLtr(o.x(c.left),c.width),l+=c.height+i}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const t=this.ctx;Ls(t,this),this._draw(),Ds(t)}}_draw(){const{options:t,columnSizes:e,lineWidths:n,ctx:i}=this,{align:a,labels:o}=t,r=U.color,l=le(t.rtl,this.left,this.width),c=tt(o.font),{padding:d}=o,u=c.size,p=u/2;let f;this.drawTitle(),i.textAlign=l.textAlign("left"),i.textBaseline="middle",i.lineWidth=.5,i.font=c.string;const{boxWidth:h,boxHeight:m,itemHeight:b}=Ji(o,u),g=function(k,_,S){if(isNaN(h)||h<=0||isNaN(m)||m<0)return;i.save();const E=A(S.lineWidth,1);if(i.fillStyle=A(S.fillStyle,r),i.lineCap=A(S.lineCap,"butt"),i.lineDashOffset=A(S.lineDashOffset,0),i.lineJoin=A(S.lineJoin,"miter"),i.lineWidth=E,i.strokeStyle=A(S.strokeStyle,r),i.setLineDash(A(S.lineDash,[])),o.usePointStyle){const M={radius:m*Math.SQRT2/2,pointStyle:S.pointStyle,rotation:S.rotation,borderWidth:E},I=l.xPlus(k,h/2),P=_+p;Oa(i,M,I,P,o.pointStyleWidth&&h)}else{const M=_+Math.max((u-m)/2,0),I=l.leftForLtr(k,h),P=Zt(S.borderRadius);i.beginPath(),Object.values(P).some(G=>G!==0)?ze(i,{x:I,y:M,w:h,h:m,radius:P}):i.rect(I,M,h,m),i.fill(),E!==0&&i.stroke()}i.restore()},x=function(k,_,S){se(i,S.text,k,_+b/2,c,{strikethrough:S.hidden,textAlign:l.textAlign(S.textAlign)})},w=this.isHorizontal(),v=this._computeTitleHeight();w?f={x:nt(a,this.left+d,this.right-n[0]),y:this.top+d+v,line:0}:f={x:this.left+d,y:nt(a,this.top+v+d,this.bottom-e[0].height),line:0},ja(this.ctx,t.textDirection);const y=b+d;this.legendItems.forEach((k,_)=>{i.strokeStyle=k.fontColor,i.fillStyle=k.fontColor;const S=i.measureText(k.text).width,E=l.textAlign(k.textAlign||(k.textAlign=o.textAlign)),M=h+p+S;let I=f.x,P=f.y;l.setWidth(this.width),w?_>0&&I+M+d>this.right&&(P=f.y+=y,f.line++,I=f.x=nt(a,this.left+d,this.right-n[f.line])):_>0&&P+y>this.bottom&&(I=f.x=I+e[f.line].width+d,f.line++,P=f.y=nt(a,this.top+v+d,this.bottom-e[f.line].height));const G=l.x(I);if(g(G,P,k),I=wr(E,I+h+p,w?I+M:this.right,t.rtl),x(l.x(I),P,k),w)f.x+=M+d;else if(typeof k.text!="string"){const Y=c.lineHeight;f.y+=bo(k,Y)+d}else f.y+=y}),za(this.ctx,t.textDirection)}drawTitle(){const t=this.options,e=t.title,n=tt(e.font),i=ot(e.padding);if(!e.display)return;const a=le(t.rtl,this.left,this.width),o=this.ctx,r=e.position,l=n.size/2,c=i.top+l;let d,u=this.left,p=this.width;if(this.isHorizontal())p=Math.max(...this.lineWidths),d=this.top+c,u=nt(t.align,u,this.right-p);else{const h=this.columnSizes.reduce((m,b)=>Math.max(m,b.height),0);d=c+nt(t.align,this.top,this.bottom-h-t.labels.padding-this._computeTitleHeight())}const f=nt(r,u,u+p);o.textAlign=a.textAlign(Dn(r)),o.textBaseline="middle",o.strokeStyle=e.color,o.fillStyle=e.color,o.font=n.string,se(o,e.text,f,d,n)}_computeTitleHeight(){const t=this.options.title,e=tt(t.font),n=ot(t.padding);return t.display?e.lineHeight+n.height:0}_getLegendItemAt(t,e){let n,i,a;if(At(t,this.left,this.right)&&At(e,this.top,this.bottom)){for(a=this.legendHitBoxes,n=0;n<a.length;++n)if(i=a[n],At(t,i.left,i.left+i.width)&&At(e,i.top,i.top+i.height))return this.legendItems[n]}return null}handleEvent(t){const e=this.options;if(!au(t.type,e))return;const n=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){const i=this._hoveredItem,a=eu(i,n);i&&!a&&W(e.onLeave,[t,i,this],this),this._hoveredItem=n,n&&!a&&W(e.onHover,[t,n,this],this)}else n&&W(e.onClick,[t,n,this],this)}}function su(s,t,e,n,i){const a=nu(n,s,t,e),o=iu(i,n,t.lineHeight);return{itemWidth:a,itemHeight:o}}function nu(s,t,e,n){let i=s.text;return i&&typeof i!="string"&&(i=i.reduce((a,o)=>a.length>o.length?a:o)),t+e.size/2+n.measureText(i).width}function iu(s,t,e){let n=s;return typeof t.text!="string"&&(n=bo(t,e)),n}function bo(s,t){const e=s.text?s.text.length:0;return t*e}function au(s,t){return!!((s==="mousemove"||s==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(s==="click"||s==="mouseup"))}var ou={id:"legend",_element:Qi,start(s,t,e){const n=s.legend=new Qi({ctx:s.ctx,options:e,chart:s});at.configure(s,n,e),at.addBox(s,n)},stop(s){at.removeBox(s,s.legend),delete s.legend},beforeUpdate(s,t,e){const n=s.legend;at.configure(s,n,e),n.options=e},afterUpdate(s){const t=s.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(s,t){t.replay||s.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(s,t,e){const n=t.datasetIndex,i=e.chart;i.isDatasetVisible(n)?(i.hide(n),t.hidden=!0):(i.show(n),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:s=>s.chart.options.color,boxWidth:40,padding:10,generateLabels(s){const t=s.data.datasets,{labels:{usePointStyle:e,pointStyle:n,textAlign:i,color:a,useBorderRadius:o,borderRadius:r}}=s.legend.options;return s._getSortedDatasetMetas().map(l=>{const c=l.controller.getStyle(e?0:void 0),d=ot(c.borderWidth);return{text:t[l.index].label,fillStyle:c.backgroundColor,fontColor:a,hidden:!l.visible,lineCap:c.borderCapStyle,lineDash:c.borderDash,lineDashOffset:c.borderDashOffset,lineJoin:c.borderJoinStyle,lineWidth:(d.width+d.height)/4,strokeStyle:c.borderColor,pointStyle:n||c.pointStyle,rotation:c.rotation,textAlign:i||c.textAlign,borderRadius:o&&(r||c.borderRadius),datasetIndex:l.index}},this)}},title:{color:s=>s.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:s=>!s.startsWith("on"),labels:{_scriptable:s=>!["generateLabels","filter","sort"].includes(s)}}};class jn extends yt{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e){const n=this.options;if(this.left=0,this.top=0,!n.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=t,this.height=this.bottom=e;const i=q(n.text)?n.text.length:1;this._padding=ot(n.padding);const a=i*tt(n.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=a:this.width=a}isHorizontal(){const t=this.options.position;return t==="top"||t==="bottom"}_drawArgs(t){const{top:e,left:n,bottom:i,right:a,options:o}=this,r=o.align;let l=0,c,d,u;return this.isHorizontal()?(d=nt(r,n,a),u=e+t,c=a-n):(o.position==="left"?(d=n+t,u=nt(r,i,e),l=F*-.5):(d=a-t,u=nt(r,e,i),l=F*.5),c=i-e),{titleX:d,titleY:u,maxWidth:c,rotation:l}}draw(){const t=this.ctx,e=this.options;if(!e.display)return;const n=tt(e.font),a=n.lineHeight/2+this._padding.top,{titleX:o,titleY:r,maxWidth:l,rotation:c}=this._drawArgs(a);se(t,e.text,0,0,n,{color:e.color,maxWidth:l,rotation:c,textAlign:Dn(e.align),textBaseline:"middle",translation:[o,r]})}}function ru(s,t){const e=new jn({ctx:s.ctx,options:t,chart:s});at.configure(s,e,t),at.addBox(s,e),s.titleBlock=e}var lu={id:"title",_element:jn,start(s,t,e){ru(s,e)},stop(s){const t=s.titleBlock;at.removeBox(s,t),delete s.titleBlock},beforeUpdate(s,t,e){const n=s.titleBlock;at.configure(s,n,e),n.options=e},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const rs=new WeakMap;var cu={id:"subtitle",start(s,t,e){const n=new jn({ctx:s.ctx,options:e,chart:s});at.configure(s,n,e),at.addBox(s,n),rs.set(s,n)},stop(s){at.removeBox(s,rs.get(s)),rs.delete(s)},beforeUpdate(s,t,e){const n=rs.get(s);at.configure(s,n,e),n.options=e},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Pe={average(s){if(!s.length)return!1;let t,e,n=new Set,i=0,a=0;for(t=0,e=s.length;t<e;++t){const r=s[t].element;if(r&&r.hasValue()){const l=r.tooltipPosition();n.add(l.x),i+=l.y,++a}}return a===0||n.size===0?!1:{x:[...n].reduce((r,l)=>r+l)/n.size,y:i/a}},nearest(s,t){if(!s.length)return!1;let e=t.x,n=t.y,i=Number.POSITIVE_INFINITY,a,o,r;for(a=0,o=s.length;a<o;++a){const l=s[a].element;if(l&&l.hasValue()){const c=l.getCenterPoint(),d=an(t,c);d<i&&(i=d,r=l)}}if(r){const l=r.tooltipPosition();e=l.x,n=l.y}return{x:e,y:n}}};function vt(s,t){return t&&(q(t)?Array.prototype.push.apply(s,t):s.push(t)),s}function Ct(s){return(typeof s=="string"||s instanceof String)&&s.indexOf(`
`)>-1?s.split(`
`):s}function du(s,t){const{element:e,datasetIndex:n,index:i}=t,a=s.getDatasetMeta(n).controller,{label:o,value:r}=a.getLabelAndValue(i);return{chart:s,label:o,parsed:a.getParsed(i),raw:s.data.datasets[n].data[i],formattedValue:r,dataset:a.getDataset(),dataIndex:i,datasetIndex:n,element:e}}function Zi(s,t){const e=s.chart.ctx,{body:n,footer:i,title:a}=s,{boxWidth:o,boxHeight:r}=t,l=tt(t.bodyFont),c=tt(t.titleFont),d=tt(t.footerFont),u=a.length,p=i.length,f=n.length,h=ot(t.padding);let m=h.height,b=0,g=n.reduce((v,y)=>v+y.before.length+y.lines.length+y.after.length,0);if(g+=s.beforeBody.length+s.afterBody.length,u&&(m+=u*c.lineHeight+(u-1)*t.titleSpacing+t.titleMarginBottom),g){const v=t.displayColors?Math.max(r,l.lineHeight):l.lineHeight;m+=f*v+(g-f)*l.lineHeight+(g-1)*t.bodySpacing}p&&(m+=t.footerMarginTop+p*d.lineHeight+(p-1)*t.footerSpacing);let x=0;const w=function(v){b=Math.max(b,e.measureText(v).width+x)};return e.save(),e.font=c.string,N(s.title,w),e.font=l.string,N(s.beforeBody.concat(s.afterBody),w),x=t.displayColors?o+2+t.boxPadding:0,N(n,v=>{N(v.before,w),N(v.lines,w),N(v.after,w)}),x=0,e.font=d.string,N(s.footer,w),e.restore(),b+=h.width,{width:b,height:m}}function uu(s,t){const{y:e,height:n}=t;return e<n/2?"top":e>s.height-n/2?"bottom":"center"}function pu(s,t,e,n){const{x:i,width:a}=n,o=e.caretSize+e.caretPadding;if(s==="left"&&i+a+o>t.width||s==="right"&&i-a-o<0)return!0}function fu(s,t,e,n){const{x:i,width:a}=e,{width:o,chartArea:{left:r,right:l}}=s;let c="center";return n==="center"?c=i<=(r+l)/2?"left":"right":i<=a/2?c="left":i>=o-a/2&&(c="right"),pu(c,s,t,e)&&(c="center"),c}function ta(s,t,e){const n=e.yAlign||t.yAlign||uu(s,e);return{xAlign:e.xAlign||t.xAlign||fu(s,t,e,n),yAlign:n}}function hu(s,t){let{x:e,width:n}=s;return t==="right"?e-=n:t==="center"&&(e-=n/2),e}function mu(s,t,e){let{y:n,height:i}=s;return t==="top"?n+=e:t==="bottom"?n-=i+e:n-=i/2,n}function ea(s,t,e,n){const{caretSize:i,caretPadding:a,cornerRadius:o}=s,{xAlign:r,yAlign:l}=e,c=i+a,{topLeft:d,topRight:u,bottomLeft:p,bottomRight:f}=Zt(o);let h=hu(t,r);const m=mu(t,l,c);return l==="center"?r==="left"?h+=c:r==="right"&&(h-=c):r==="left"?h-=Math.max(d,p)+i:r==="right"&&(h+=Math.max(u,f)+i),{x:et(h,0,n.width-t.width),y:et(m,0,n.height-t.height)}}function ls(s,t,e){const n=ot(e.padding);return t==="center"?s.x+s.width/2:t==="right"?s.x+s.width-n.right:s.x+n.left}function sa(s){return vt([],Ct(s))}function bu(s,t,e){return Vt(s,{tooltip:t,tooltipItems:e,type:"tooltip"})}function na(s,t){const e=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return e?s.override(e):s}const go={beforeTitle:Et,title(s){if(s.length>0){const t=s[0],e=t.chart.data.labels,n=e?e.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(n>0&&t.dataIndex<n)return e[t.dataIndex]}return""},afterTitle:Et,beforeBody:Et,beforeLabel:Et,label(s){if(this&&this.options&&this.options.mode==="dataset")return s.label+": "+s.formattedValue||s.formattedValue;let t=s.dataset.label||"";t&&(t+=": ");const e=s.formattedValue;return R(e)||(t+=e),t},labelColor(s){const e=s.chart.getDatasetMeta(s.datasetIndex).controller.getStyle(s.dataIndex);return{borderColor:e.borderColor,backgroundColor:e.backgroundColor,borderWidth:e.borderWidth,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(s){const e=s.chart.getDatasetMeta(s.datasetIndex).controller.getStyle(s.dataIndex);return{pointStyle:e.pointStyle,rotation:e.rotation}},afterLabel:Et,afterBody:Et,beforeFooter:Et,footer:Et,afterFooter:Et};function rt(s,t,e,n){const i=s[t].call(e,n);return typeof i>"u"?go[t].call(e,n):i}class hn extends yt{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const e=this.chart,n=this.options.setContext(this.getContext()),i=n.enabled&&e.options.animation&&n.animations,a=new Xa(this.chart,i);return i._cacheable&&(this._cachedAnimations=Object.freeze(a)),a}getContext(){return this.$context||(this.$context=bu(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,e){const{callbacks:n}=e,i=rt(n,"beforeTitle",this,t),a=rt(n,"title",this,t),o=rt(n,"afterTitle",this,t);let r=[];return r=vt(r,Ct(i)),r=vt(r,Ct(a)),r=vt(r,Ct(o)),r}getBeforeBody(t,e){return sa(rt(e.callbacks,"beforeBody",this,t))}getBody(t,e){const{callbacks:n}=e,i=[];return N(t,a=>{const o={before:[],lines:[],after:[]},r=na(n,a);vt(o.before,Ct(rt(r,"beforeLabel",this,a))),vt(o.lines,rt(r,"label",this,a)),vt(o.after,Ct(rt(r,"afterLabel",this,a))),i.push(o)}),i}getAfterBody(t,e){return sa(rt(e.callbacks,"afterBody",this,t))}getFooter(t,e){const{callbacks:n}=e,i=rt(n,"beforeFooter",this,t),a=rt(n,"footer",this,t),o=rt(n,"afterFooter",this,t);let r=[];return r=vt(r,Ct(i)),r=vt(r,Ct(a)),r=vt(r,Ct(o)),r}_createItems(t){const e=this._active,n=this.chart.data,i=[],a=[],o=[];let r=[],l,c;for(l=0,c=e.length;l<c;++l)r.push(du(this.chart,e[l]));return t.filter&&(r=r.filter((d,u,p)=>t.filter(d,u,p,n))),t.itemSort&&(r=r.sort((d,u)=>t.itemSort(d,u,n))),N(r,d=>{const u=na(t.callbacks,d);i.push(rt(u,"labelColor",this,d)),a.push(rt(u,"labelPointStyle",this,d)),o.push(rt(u,"labelTextColor",this,d))}),this.labelColors=i,this.labelPointStyles=a,this.labelTextColors=o,this.dataPoints=r,r}update(t,e){const n=this.options.setContext(this.getContext()),i=this._active;let a,o=[];if(!i.length)this.opacity!==0&&(a={opacity:0});else{const r=Pe[n.position].call(this,i,this._eventPosition);o=this._createItems(n),this.title=this.getTitle(o,n),this.beforeBody=this.getBeforeBody(o,n),this.body=this.getBody(o,n),this.afterBody=this.getAfterBody(o,n),this.footer=this.getFooter(o,n);const l=this._size=Zi(this,n),c=Object.assign({},r,l),d=ta(this.chart,n,c),u=ea(n,c,d,this.chart);this.xAlign=d.xAlign,this.yAlign=d.yAlign,a={opacity:1,x:u.x,y:u.y,width:l.width,height:l.height,caretX:r.x,caretY:r.y}}this._tooltipItems=o,this.$context=void 0,a&&this._resolveAnimations().update(this,a),t&&n.external&&n.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,n,i){const a=this.getCaretPosition(t,n,i);e.lineTo(a.x1,a.y1),e.lineTo(a.x2,a.y2),e.lineTo(a.x3,a.y3)}getCaretPosition(t,e,n){const{xAlign:i,yAlign:a}=this,{caretSize:o,cornerRadius:r}=n,{topLeft:l,topRight:c,bottomLeft:d,bottomRight:u}=Zt(r),{x:p,y:f}=t,{width:h,height:m}=e;let b,g,x,w,v,y;return a==="center"?(v=f+m/2,i==="left"?(b=p,g=b-o,w=v+o,y=v-o):(b=p+h,g=b+o,w=v-o,y=v+o),x=b):(i==="left"?g=p+Math.max(l,d)+o:i==="right"?g=p+h-Math.max(c,u)-o:g=this.caretX,a==="top"?(w=f,v=w-o,b=g-o,x=g+o):(w=f+m,v=w+o,b=g+o,x=g-o),y=w),{x1:b,x2:g,x3:x,y1:w,y2:v,y3:y}}drawTitle(t,e,n){const i=this.title,a=i.length;let o,r,l;if(a){const c=le(n.rtl,this.x,this.width);for(t.x=ls(this,n.titleAlign,n),e.textAlign=c.textAlign(n.titleAlign),e.textBaseline="middle",o=tt(n.titleFont),r=n.titleSpacing,e.fillStyle=n.titleColor,e.font=o.string,l=0;l<a;++l)e.fillText(i[l],c.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+r,l+1===a&&(t.y+=n.titleMarginBottom-r)}}_drawColorBox(t,e,n,i,a){const o=this.labelColors[n],r=this.labelPointStyles[n],{boxHeight:l,boxWidth:c}=a,d=tt(a.bodyFont),u=ls(this,"left",a),p=i.x(u),f=l<d.lineHeight?(d.lineHeight-l)/2:0,h=e.y+f;if(a.usePointStyle){const m={radius:Math.min(c,l)/2,pointStyle:r.pointStyle,rotation:r.rotation,borderWidth:1},b=i.leftForLtr(p,c)+c/2,g=h+l/2;t.strokeStyle=a.multiKeyBackground,t.fillStyle=a.multiKeyBackground,rn(t,m,b,g),t.strokeStyle=o.borderColor,t.fillStyle=o.backgroundColor,rn(t,m,b,g)}else{t.lineWidth=L(o.borderWidth)?Math.max(...Object.values(o.borderWidth)):o.borderWidth||1,t.strokeStyle=o.borderColor,t.setLineDash(o.borderDash||[]),t.lineDashOffset=o.borderDashOffset||0;const m=i.leftForLtr(p,c),b=i.leftForLtr(i.xPlus(p,1),c-2),g=Zt(o.borderRadius);Object.values(g).some(x=>x!==0)?(t.beginPath(),t.fillStyle=a.multiKeyBackground,ze(t,{x:m,y:h,w:c,h:l,radius:g}),t.fill(),t.stroke(),t.fillStyle=o.backgroundColor,t.beginPath(),ze(t,{x:b,y:h+1,w:c-2,h:l-2,radius:g}),t.fill()):(t.fillStyle=a.multiKeyBackground,t.fillRect(m,h,c,l),t.strokeRect(m,h,c,l),t.fillStyle=o.backgroundColor,t.fillRect(b,h+1,c-2,l-2))}t.fillStyle=this.labelTextColors[n]}drawBody(t,e,n){const{body:i}=this,{bodySpacing:a,bodyAlign:o,displayColors:r,boxHeight:l,boxWidth:c,boxPadding:d}=n,u=tt(n.bodyFont);let p=u.lineHeight,f=0;const h=le(n.rtl,this.x,this.width),m=function(S){e.fillText(S,h.x(t.x+f),t.y+p/2),t.y+=p+a},b=h.textAlign(o);let g,x,w,v,y,k,_;for(e.textAlign=o,e.textBaseline="middle",e.font=u.string,t.x=ls(this,b,n),e.fillStyle=n.bodyColor,N(this.beforeBody,m),f=r&&b!=="right"?o==="center"?c/2+d:c+2+d:0,v=0,k=i.length;v<k;++v){for(g=i[v],x=this.labelTextColors[v],e.fillStyle=x,N(g.before,m),w=g.lines,r&&w.length&&(this._drawColorBox(e,t,v,h,n),p=Math.max(u.lineHeight,l)),y=0,_=w.length;y<_;++y)m(w[y]),p=u.lineHeight;N(g.after,m)}f=0,p=u.lineHeight,N(this.afterBody,m),t.y-=a}drawFooter(t,e,n){const i=this.footer,a=i.length;let o,r;if(a){const l=le(n.rtl,this.x,this.width);for(t.x=ls(this,n.footerAlign,n),t.y+=n.footerMarginTop,e.textAlign=l.textAlign(n.footerAlign),e.textBaseline="middle",o=tt(n.footerFont),e.fillStyle=n.footerColor,e.font=o.string,r=0;r<a;++r)e.fillText(i[r],l.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+n.footerSpacing}}drawBackground(t,e,n,i){const{xAlign:a,yAlign:o}=this,{x:r,y:l}=t,{width:c,height:d}=n,{topLeft:u,topRight:p,bottomLeft:f,bottomRight:h}=Zt(i.cornerRadius);e.fillStyle=i.backgroundColor,e.strokeStyle=i.borderColor,e.lineWidth=i.borderWidth,e.beginPath(),e.moveTo(r+u,l),o==="top"&&this.drawCaret(t,e,n,i),e.lineTo(r+c-p,l),e.quadraticCurveTo(r+c,l,r+c,l+p),o==="center"&&a==="right"&&this.drawCaret(t,e,n,i),e.lineTo(r+c,l+d-h),e.quadraticCurveTo(r+c,l+d,r+c-h,l+d),o==="bottom"&&this.drawCaret(t,e,n,i),e.lineTo(r+f,l+d),e.quadraticCurveTo(r,l+d,r,l+d-f),o==="center"&&a==="left"&&this.drawCaret(t,e,n,i),e.lineTo(r,l+u),e.quadraticCurveTo(r,l,r+u,l),e.closePath(),e.fill(),i.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){const e=this.chart,n=this.$animations,i=n&&n.x,a=n&&n.y;if(i||a){const o=Pe[t.position].call(this,this._active,this._eventPosition);if(!o)return;const r=this._size=Zi(this,t),l=Object.assign({},o,this._size),c=ta(e,t,l),d=ea(t,l,c,e);(i._to!==d.x||a._to!==d.y)&&(this.xAlign=c.xAlign,this.yAlign=c.yAlign,this.width=r.width,this.height=r.height,this.caretX=o.x,this.caretY=o.y,this._resolveAnimations().update(this,d))}}_willRender(){return!!this.opacity}draw(t){const e=this.options.setContext(this.getContext());let n=this.opacity;if(!n)return;this._updateAnimationTarget(e);const i={width:this.width,height:this.height},a={x:this.x,y:this.y};n=Math.abs(n)<.001?0:n;const o=ot(e.padding),r=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&r&&(t.save(),t.globalAlpha=n,this.drawBackground(a,t,i,e),ja(t,e.textDirection),a.y+=o.top,this.drawTitle(a,t,e),this.drawBody(a,t,e),this.drawFooter(a,t,e),za(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){const n=this._active,i=t.map(({datasetIndex:r,index:l})=>{const c=this.chart.getDatasetMeta(r);if(!c)throw new Error("Cannot find a dataset at index "+r);return{datasetIndex:r,element:c.data[l],index:l}}),a=!ws(n,i),o=this._positionChanged(i,e);(a||o)&&(this._active=i,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e,n=!0){if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const i=this.options,a=this._active||[],o=this._getActiveElements(t,a,e,n),r=this._positionChanged(o,t),l=e||!ws(o,a)||r;return l&&(this._active=o,(i.enabled||i.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),l}_getActiveElements(t,e,n,i){const a=this.options;if(t.type==="mouseout")return[];if(!i)return e.filter(r=>this.chart.data.datasets[r.datasetIndex]&&this.chart.getDatasetMeta(r.datasetIndex).controller.getParsed(r.index)!==void 0);const o=this.chart.getElementsAtEventForMode(t,a.mode,a,n);return a.reverse&&o.reverse(),o}_positionChanged(t,e){const{caretX:n,caretY:i,options:a}=this,o=Pe[a.position].call(this,t,e);return o!==!1&&(n!==o.x||i!==o.y)}}T(hn,"positioners",Pe);var gu={id:"tooltip",_element:hn,positioners:Pe,afterInit(s,t,e){e&&(s.tooltip=new hn({chart:s,options:e}))},beforeUpdate(s,t,e){s.tooltip&&s.tooltip.initialize(e)},reset(s,t,e){s.tooltip&&s.tooltip.initialize(e)},afterDraw(s){const t=s.tooltip;if(t&&t._willRender()){const e={tooltip:t};if(s.notifyPlugins("beforeTooltipDraw",{...e,cancelable:!0})===!1)return;t.draw(s.ctx),s.notifyPlugins("afterTooltipDraw",e)}},afterEvent(s,t){if(s.tooltip){const e=t.replay;s.tooltip.handleEvent(t.event,e,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(s,t)=>t.bodyFont.size,boxWidth:(s,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:go},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:s=>s!=="filter"&&s!=="itemSort"&&s!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},xu=Object.freeze({__proto__:null,Colors:Ad,Decimation:Dd,Filler:tu,Legend:ou,SubTitle:cu,Title:lu,Tooltip:gu});const yu=(s,t,e,n)=>(typeof t=="string"?(e=s.push(t)-1,n.unshift({index:e,label:t})):isNaN(t)&&(e=null),e);function vu(s,t,e,n){const i=s.indexOf(t);if(i===-1)return yu(s,t,e,n);const a=s.lastIndexOf(t);return i!==a?e:i}const wu=(s,t)=>s===null?null:et(Math.round(s),0,t);function ia(s){const t=this.getLabels();return s>=0&&s<t.length?t[s]:s}class mn extends ne{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const e=this._addedLabels;if(e.length){const n=this.getLabels();for(const{index:i,label:a}of e)n[i]===a&&n.splice(i,1);this._addedLabels=[]}super.init(t)}parse(t,e){if(R(t))return null;const n=this.getLabels();return e=isFinite(e)&&n[e]===t?e:vu(n,t,A(e,t),this._addedLabels),wu(e,n.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let{min:n,max:i}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(n=0),e||(i=this.getLabels().length-1)),this.min=n,this.max=i}buildTicks(){const t=this.min,e=this.max,n=this.options.offset,i=[];let a=this.getLabels();a=t===0&&e===a.length-1?a:a.slice(t,e+1),this._valueRange=Math.max(a.length-(n?0:1),1),this._startValue=this.min-(n?.5:0);for(let o=t;o<=e;o++)i.push({value:o});return i}getLabelForValue(t){return ia.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}T(mn,"id","category"),T(mn,"defaults",{ticks:{callback:ia}});function _u(s,t){const e=[],{bounds:i,step:a,min:o,max:r,precision:l,count:c,maxTicks:d,maxDigits:u,includeBounds:p}=s,f=a||1,h=d-1,{min:m,max:b}=t,g=!R(o),x=!R(r),w=!R(c),v=(b-m)/(u+1);let y=Zn((b-m)/h/f)*f,k,_,S,E;if(y<1e-14&&!g&&!x)return[{value:m},{value:b}];E=Math.ceil(b/y)-Math.floor(m/y),E>h&&(y=Zn(E*y/h/f)*f),R(l)||(k=Math.pow(10,l),y=Math.ceil(y*k)/k),i==="ticks"?(_=Math.floor(m/y)*y,S=Math.ceil(b/y)*y):(_=m,S=b),g&&x&&a&&hr((r-o)/a,y/1e3)?(E=Math.round(Math.min((r-o)/y,d)),y=(r-o)/E,_=o,S=r):w?(_=g?o:_,S=x?r:S,E=c-1,y=(S-_)/E):(E=(S-_)/y,Oe(E,Math.round(E),y/1e3)?E=Math.round(E):E=Math.ceil(E));const M=Math.max(ti(y),ti(_));k=Math.pow(10,R(l)?M:l),_=Math.round(_*k)/k,S=Math.round(S*k)/k;let I=0;for(g&&(p&&_!==o?(e.push({value:o}),_<o&&I++,Oe(Math.round((_+I*y)*k)/k,o,aa(o,v,s))&&I++):_<o&&I++);I<E;++I){const P=Math.round((_+I*y)*k)/k;if(x&&P>r)break;e.push({value:P})}return x&&p&&S!==r?e.length&&Oe(e[e.length-1].value,r,aa(r,v,s))?e[e.length-1].value=r:e.push({value:r}):(!x||S===r)&&e.push({value:S}),e}function aa(s,t,{horizontal:e,minRotation:n}){const i=gt(n),a=(e?Math.sin(i):Math.cos(i))||.001,o=.75*t*(""+s).length;return Math.min(t/a,o)}class Cs extends ne{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return R(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:e,maxDefined:n}=this.getUserBounds();let{min:i,max:a}=this;const o=l=>i=e?i:l,r=l=>a=n?a:l;if(t){const l=Tt(i),c=Tt(a);l<0&&c<0?r(0):l>0&&c>0&&o(0)}if(i===a){let l=a===0?1:Math.abs(a*.05);r(a+l),t||o(i-l)}this.min=i,this.max=a}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:e,stepSize:n}=t,i;return n?(i=Math.ceil(this.max/n)-Math.floor(this.min/n)+1,i>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${n} would result generating up to ${i} ticks. Limiting to 1000.`),i=1e3)):(i=this.computeTickLimit(),e=e||11),e&&(i=Math.min(e,i)),i}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,e=t.ticks;let n=this.getTickLimit();n=Math.max(2,n);const i={maxTicks:n,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:e.includeBounds!==!1},a=this._range||this,o=_u(i,a);return t.bounds==="ticks"&&Ea(o,this,"value"),t.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){const t=this.ticks;let e=this.min,n=this.max;if(super.configure(),this.options.offset&&t.length){const i=(n-e)/Math.max(t.length-1,1)/2;e-=i,n+=i}this._startValue=e,this._endValue=n,this._valueRange=n-e}getLabelForValue(t){return Xe(t,this.chart.options.locale,this.options.ticks.format)}}class bn extends Cs{determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=X(t)?t:0,this.max=X(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),e=t?this.width:this.height,n=gt(this.options.ticks.minRotation),i=(t?Math.sin(n):Math.cos(n))||.001,a=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,a.lineHeight/i))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}T(bn,"id","linear"),T(bn,"defaults",{ticks:{callback:Rs.formatters.numeric}});const Ue=s=>Math.floor(Dt(s)),Yt=(s,t)=>Math.pow(10,Ue(s)+t);function oa(s){return s/Math.pow(10,Ue(s))===1}function ra(s,t,e){const n=Math.pow(10,e),i=Math.floor(s/n);return Math.ceil(t/n)-i}function ku(s,t){const e=t-s;let n=Ue(e);for(;ra(s,t,n)>10;)n++;for(;ra(s,t,n)<10;)n--;return Math.min(n,Ue(s))}function Su(s,{min:t,max:e}){t=ct(s.min,t);const n=[],i=Ue(t);let a=ku(t,e),o=a<0?Math.pow(10,Math.abs(a)):1;const r=Math.pow(10,a),l=i>a?Math.pow(10,i):0,c=Math.round((t-l)*o)/o,d=Math.floor((t-l)/r/10)*r*10;let u=Math.floor((c-d)/Math.pow(10,a)),p=ct(s.min,Math.round((l+d+u*Math.pow(10,a))*o)/o);for(;p<e;)n.push({value:p,major:oa(p),significand:u}),u>=10?u=u<15?15:20:u++,u>=20&&(a++,u=2,o=a>=0?1:o),p=Math.round((l+d+u*Math.pow(10,a))*o)/o;const f=ct(s.max,p);return n.push({value:f,major:oa(f),significand:u}),n}class gn extends ne{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,e){const n=Cs.prototype.parse.apply(this,[t,e]);if(n===0){this._zero=!0;return}return X(n)&&n>0?n:null}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=X(t)?Math.max(0,t):null,this.max=X(e)?Math.max(0,e):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!X(this._userMin)&&(this.min=t===Yt(this.min,0)?Yt(this.min,-1):Yt(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let n=this.min,i=this.max;const a=r=>n=t?n:r,o=r=>i=e?i:r;n===i&&(n<=0?(a(1),o(10)):(a(Yt(n,-1)),o(Yt(i,1)))),n<=0&&a(Yt(i,-1)),i<=0&&o(Yt(n,1)),this.min=n,this.max=i}buildTicks(){const t=this.options,e={min:this._userMin,max:this._userMax},n=Su(e,this);return t.bounds==="ticks"&&Ea(n,this,"value"),t.reverse?(n.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),n}getLabelForValue(t){return t===void 0?"0":Xe(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=Dt(t),this._valueRange=Dt(this.max)-Dt(t)}getPixelForValue(t){return(t===void 0||t===0)&&(t=this.min),t===null||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(Dt(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const e=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+e*this._valueRange)}}T(gn,"id","logarithmic"),T(gn,"defaults",{ticks:{callback:Rs.formatters.logarithmic,major:{enabled:!0}}});function xn(s){const t=s.ticks;if(t.display&&s.display){const e=ot(t.backdropPadding);return A(t.font&&t.font.size,U.font.size)+e.height}return 0}function Tu(s,t,e){return e=q(e)?e:[e],{w:Pr(s,t.string,e),h:e.length*t.lineHeight}}function la(s,t,e,n,i){return s===n||s===i?{start:t-e/2,end:t+e/2}:s<n||s>i?{start:t-e,end:t}:{start:t,end:t+e}}function Eu(s){const t={l:s.left+s._padding.left,r:s.right-s._padding.right,t:s.top+s._padding.top,b:s.bottom-s._padding.bottom},e=Object.assign({},t),n=[],i=[],a=s._pointLabels.length,o=s.options.pointLabels,r=o.centerPointLabels?F/a:0;for(let l=0;l<a;l++){const c=o.setContext(s.getPointLabelContext(l));i[l]=c.padding;const d=s.getPointPosition(l,s.drawingArea+i[l],r),u=tt(c.font),p=Tu(s.ctx,u,s._pointLabels[l]);n[l]=p;const f=it(s.getIndexAngle(l)+r),h=Math.round(Rn(f)),m=la(h,d.x,p.w,0,180),b=la(h,d.y,p.h,90,270);Mu(e,t,f,m,b)}s.setCenterPoint(t.l-e.l,e.r-t.r,t.t-e.t,e.b-t.b),s._pointLabelItems=Au(s,n,i)}function Mu(s,t,e,n,i){const a=Math.abs(Math.sin(e)),o=Math.abs(Math.cos(e));let r=0,l=0;n.start<t.l?(r=(t.l-n.start)/a,s.l=Math.min(s.l,t.l-r)):n.end>t.r&&(r=(n.end-t.r)/a,s.r=Math.max(s.r,t.r+r)),i.start<t.t?(l=(t.t-i.start)/o,s.t=Math.min(s.t,t.t-l)):i.end>t.b&&(l=(i.end-t.b)/o,s.b=Math.max(s.b,t.b+l))}function Cu(s,t,e){const n=s.drawingArea,{extra:i,additionalAngle:a,padding:o,size:r}=e,l=s.getPointPosition(t,n+i+o,a),c=Math.round(Rn(it(l.angle+J))),d=Lu(l.y,r.h,c),u=Pu(c),p=Ru(l.x,r.w,u);return{visible:!0,x:l.x,y:d,textAlign:u,left:p,top:d,right:p+r.w,bottom:d+r.h}}function Iu(s,t){if(!t)return!0;const{left:e,top:n,right:i,bottom:a}=s;return!(Rt({x:e,y:n},t)||Rt({x:e,y:a},t)||Rt({x:i,y:n},t)||Rt({x:i,y:a},t))}function Au(s,t,e){const n=[],i=s._pointLabels.length,a=s.options,{centerPointLabels:o,display:r}=a.pointLabels,l={extra:xn(a)/2,additionalAngle:o?F/i:0};let c;for(let d=0;d<i;d++){l.padding=e[d],l.size=t[d];const u=Cu(s,d,l);n.push(u),r==="auto"&&(u.visible=Iu(u,c),u.visible&&(c=u))}return n}function Pu(s){return s===0||s===180?"center":s<180?"left":"right"}function Ru(s,t,e){return e==="right"?s-=t:e==="center"&&(s-=t/2),s}function Lu(s,t,e){return e===90||e===270?s-=t/2:(e>270||e<90)&&(s-=t),s}function Du(s,t,e){const{left:n,top:i,right:a,bottom:o}=e,{backdropColor:r}=t;if(!R(r)){const l=Zt(t.borderRadius),c=ot(t.backdropPadding);s.fillStyle=r;const d=n-c.left,u=i-c.top,p=a-n+c.width,f=o-i+c.height;Object.values(l).some(h=>h!==0)?(s.beginPath(),ze(s,{x:d,y:u,w:p,h:f,radius:l}),s.fill()):s.fillRect(d,u,p,f)}}function Ou(s,t){const{ctx:e,options:{pointLabels:n}}=s;for(let i=t-1;i>=0;i--){const a=s._pointLabelItems[i];if(!a.visible)continue;const o=n.setContext(s.getPointLabelContext(i));Du(e,o,a);const r=tt(o.font),{x:l,y:c,textAlign:d}=a;se(e,s._pointLabels[i],l,c+r.lineHeight/2,r,{color:o.color,textAlign:d,textBaseline:"middle"})}}function xo(s,t,e,n){const{ctx:i}=s;if(e)i.arc(s.xCenter,s.yCenter,t,0,j);else{let a=s.getPointPosition(0,t);i.moveTo(a.x,a.y);for(let o=1;o<n;o++)a=s.getPointPosition(o,t),i.lineTo(a.x,a.y)}}function Fu(s,t,e,n,i){const a=s.ctx,o=t.circular,{color:r,lineWidth:l}=t;!o&&!n||!r||!l||e<0||(a.save(),a.strokeStyle=r,a.lineWidth=l,a.setLineDash(i.dash||[]),a.lineDashOffset=i.dashOffset,a.beginPath(),xo(s,e,o,n),a.closePath(),a.stroke(),a.restore())}function $u(s,t,e){return Vt(s,{label:e,index:t,type:"pointLabel"})}class Re extends Cs{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=ot(xn(this.options)/2),e=this.width=this.maxWidth-t.width,n=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+e/2+t.left),this.yCenter=Math.floor(this.top+n/2+t.top),this.drawingArea=Math.floor(Math.min(e,n)/2)}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!1);this.min=X(t)&&!isNaN(t)?t:0,this.max=X(e)&&!isNaN(e)?e:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/xn(this.options))}generateTickLabels(t){Cs.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((e,n)=>{const i=W(this.options.pointLabels.callback,[e,n],this);return i||i===0?i:""}).filter((e,n)=>this.chart.getDataVisibility(n))}fit(){const t=this.options;t.display&&t.pointLabels.display?Eu(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,e,n,i){this.xCenter+=Math.floor((t-e)/2),this.yCenter+=Math.floor((n-i)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,e,n,i))}getIndexAngle(t){const e=j/(this._pointLabels.length||1),n=this.options.startAngle||0;return it(t*e+gt(n))}getDistanceFromCenterForValue(t){if(R(t))return NaN;const e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e}getValueForDistanceFromCenter(t){if(R(t))return NaN;const e=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-e:this.min+e}getPointLabelContext(t){const e=this._pointLabels||[];if(t>=0&&t<e.length){const n=e[t];return $u(this.getContext(),t,n)}}getPointPosition(t,e,n=0){const i=this.getIndexAngle(t)-J+n;return{x:Math.cos(i)*e+this.xCenter,y:Math.sin(i)*e+this.yCenter,angle:i}}getPointPositionForValue(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:e,top:n,right:i,bottom:a}=this._pointLabelItems[t];return{left:e,top:n,right:i,bottom:a}}drawBackground(){const{backgroundColor:t,grid:{circular:e}}=this.options;if(t){const n=this.ctx;n.save(),n.beginPath(),xo(this,this.getDistanceFromCenterForValue(this._endValue),e,this._pointLabels.length),n.closePath(),n.fillStyle=t,n.fill(),n.restore()}}drawGrid(){const t=this.ctx,e=this.options,{angleLines:n,grid:i,border:a}=e,o=this._pointLabels.length;let r,l,c;if(e.pointLabels.display&&Ou(this,o),i.display&&this.ticks.forEach((d,u)=>{if(u!==0||u===0&&this.min<0){l=this.getDistanceFromCenterForValue(d.value);const p=this.getContext(u),f=i.setContext(p),h=a.setContext(p);Fu(this,f,l,o,h)}}),n.display){for(t.save(),r=o-1;r>=0;r--){const d=n.setContext(this.getPointLabelContext(r)),{color:u,lineWidth:p}=d;!p||!u||(t.lineWidth=p,t.strokeStyle=u,t.setLineDash(d.borderDash),t.lineDashOffset=d.borderDashOffset,l=this.getDistanceFromCenterForValue(e.reverse?this.min:this.max),c=this.getPointPosition(r,l),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(c.x,c.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,e=this.options,n=e.ticks;if(!n.display)return;const i=this.getIndexAngle(0);let a,o;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(i),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((r,l)=>{if(l===0&&this.min>=0&&!e.reverse)return;const c=n.setContext(this.getContext(l)),d=tt(c.font);if(a=this.getDistanceFromCenterForValue(this.ticks[l].value),c.showLabelBackdrop){t.font=d.string,o=t.measureText(r.label).width,t.fillStyle=c.backdropColor;const u=ot(c.backdropPadding);t.fillRect(-o/2-u.left,-a-d.size/2-u.top,o+u.width,d.size+u.height)}se(t,r.label,0,-a,d,{color:c.color,strokeColor:c.textStrokeColor,strokeWidth:c.textStrokeWidth})}),t.restore()}drawTitle(){}}T(Re,"id","radialLinear"),T(Re,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:Rs.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(t){return t},padding:5,centerPointLabels:!1}}),T(Re,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),T(Re,"descriptors",{angleLines:{_fallback:"grid"}});const Bs={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},lt=Object.keys(Bs);function ca(s,t){return s-t}function da(s,t){if(R(t))return null;const e=s._adapter,{parser:n,round:i,isoWeekday:a}=s._parseOpts;let o=t;return typeof n=="function"&&(o=n(o)),X(o)||(o=typeof n=="string"?e.parse(o,n):e.parse(o)),o===null?null:(i&&(o=i==="week"&&(he(a)||a===!0)?e.startOf(o,"isoWeek",a):e.startOf(o,i)),+o)}function ua(s,t,e,n){const i=lt.length;for(let a=lt.indexOf(s);a<i-1;++a){const o=Bs[lt[a]],r=o.steps?o.steps:Number.MAX_SAFE_INTEGER;if(o.common&&Math.ceil((e-t)/(r*o.size))<=n)return lt[a]}return lt[i-1]}function Bu(s,t,e,n,i){for(let a=lt.length-1;a>=lt.indexOf(e);a--){const o=lt[a];if(Bs[o].common&&s._adapter.diff(i,n,o)>=t-1)return o}return lt[e?lt.indexOf(e):0]}function Nu(s){for(let t=lt.indexOf(s)+1,e=lt.length;t<e;++t)if(Bs[lt[t]].common)return lt[t]}function pa(s,t,e){if(!e)s[t]=!0;else if(e.length){const{lo:n,hi:i}=Ln(e,t),a=e[n]>=t?e[n]:e[i];s[a]=!0}}function Hu(s,t,e,n){const i=s._adapter,a=+i.startOf(t[0].value,n),o=t[t.length-1].value;let r,l;for(r=a;r<=o;r=+i.add(r,1,n))l=e[r],l>=0&&(t[l].major=!0);return t}function fa(s,t,e){const n=[],i={},a=t.length;let o,r;for(o=0;o<a;++o)r=t[o],i[r]=o,n.push({value:r,major:!1});return a===0||!e?n:Hu(s,n,i,e)}class Ge extends ne{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e={}){const n=t.time||(t.time={}),i=this._adapter=new Yl._date(t.adapters.date);i.init(e),De(n.displayFormats,i.formats()),this._parseOpts={parser:n.parser,round:n.round,isoWeekday:n.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return t===void 0?null:da(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,e=this._adapter,n=t.time.unit||"day";let{min:i,max:a,minDefined:o,maxDefined:r}=this.getUserBounds();function l(c){!o&&!isNaN(c.min)&&(i=Math.min(i,c.min)),!r&&!isNaN(c.max)&&(a=Math.max(a,c.max))}(!o||!r)&&(l(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&l(this.getMinMax(!1))),i=X(i)&&!isNaN(i)?i:+e.startOf(Date.now(),n),a=X(a)&&!isNaN(a)?a:+e.endOf(Date.now(),n)+1,this.min=Math.min(i,a-1),this.max=Math.max(i+1,a)}_getLabelBounds(){const t=this.getLabelTimestamps();let e=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],n=t[t.length-1]),{min:e,max:n}}buildTicks(){const t=this.options,e=t.time,n=t.ticks,i=n.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&i.length&&(this.min=this._userMin||i[0],this.max=this._userMax||i[i.length-1]);const a=this.min,o=this.max,r=xr(i,a,o);return this._unit=e.unit||(n.autoSkip?ua(e.minUnit,this.min,this.max,this._getLabelCapacity(a)):Bu(this,r.length,e.minUnit,this.min,this.max)),this._majorUnit=!n.major.enabled||this._unit==="year"?void 0:Nu(this._unit),this.initOffsets(i),t.reverse&&r.reverse(),fa(this,r,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let e=0,n=0,i,a;this.options.offset&&t.length&&(i=this.getDecimalForValue(t[0]),t.length===1?e=1-i:e=(this.getDecimalForValue(t[1])-i)/2,a=this.getDecimalForValue(t[t.length-1]),t.length===1?n=a:n=(a-this.getDecimalForValue(t[t.length-2]))/2);const o=t.length<3?.5:.25;e=et(e,0,o),n=et(n,0,o),this._offsets={start:e,end:n,factor:1/(e+1+n)}}_generate(){const t=this._adapter,e=this.min,n=this.max,i=this.options,a=i.time,o=a.unit||ua(a.minUnit,e,n,this._getLabelCapacity(e)),r=A(i.ticks.stepSize,1),l=o==="week"?a.isoWeekday:!1,c=he(l)||l===!0,d={};let u=e,p,f;if(c&&(u=+t.startOf(u,"isoWeek",l)),u=+t.startOf(u,c?"day":o),t.diff(n,e,o)>1e5*r)throw new Error(e+" and "+n+" are too far apart with stepSize of "+r+" "+o);const h=i.ticks.source==="data"&&this.getDataTimestamps();for(p=u,f=0;p<n;p=+t.add(p,r,o),f++)pa(d,p,h);return(p===n||i.bounds==="ticks"||f===1)&&pa(d,p,h),Object.keys(d).sort(ca).map(m=>+m)}getLabelForValue(t){const e=this._adapter,n=this.options.time;return n.tooltipFormat?e.format(t,n.tooltipFormat):e.format(t,n.displayFormats.datetime)}format(t,e){const i=this.options.time.displayFormats,a=this._unit,o=e||i[a];return this._adapter.format(t,o)}_tickFormatFunction(t,e,n,i){const a=this.options,o=a.ticks.callback;if(o)return W(o,[t,e,n],this);const r=a.time.displayFormats,l=this._unit,c=this._majorUnit,d=l&&r[l],u=c&&r[c],p=n[e],f=c&&u&&p&&p.major;return this._adapter.format(t,i||(f?u:d))}generateTickLabels(t){let e,n,i;for(e=0,n=t.length;e<n;++e)i=t[e],i.label=this._tickFormatFunction(i.value,e,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const e=this._offsets,n=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+n)*e.factor)}getValueForPixel(t){const e=this._offsets,n=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+n*(this.max-this.min)}_getLabelSize(t){const e=this.options.ticks,n=this.ctx.measureText(t).width,i=gt(this.isHorizontal()?e.maxRotation:e.minRotation),a=Math.cos(i),o=Math.sin(i),r=this._resolveTickFontOptions(0).size;return{w:n*a+r*o,h:n*o+r*a}}_getLabelCapacity(t){const e=this.options.time,n=e.displayFormats,i=n[e.unit]||n.millisecond,a=this._tickFormatFunction(t,0,fa(this,[t],this._majorUnit),i),o=this._getLabelSize(a),r=Math.floor(this.isHorizontal()?this.width/o.w:this.height/o.h)-1;return r>0?r:1}getDataTimestamps(){let t=this._cache.data||[],e,n;if(t.length)return t;const i=this.getMatchingVisibleMetas();if(this._normalized&&i.length)return this._cache.data=i[0].controller.getAllParsedValues(this);for(e=0,n=i.length;e<n;++e)t=t.concat(i[e].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let e,n;if(t.length)return t;const i=this.getLabels();for(e=0,n=i.length;e<n;++e)t.push(da(this,i[e]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return Ia(t.sort(ca))}}T(Ge,"id","time"),T(Ge,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function cs(s,t,e){let n=0,i=s.length-1,a,o,r,l;e?(t>=s[n].pos&&t<=s[i].pos&&({lo:n,hi:i}=Pt(s,"pos",t)),{pos:a,time:r}=s[n],{pos:o,time:l}=s[i]):(t>=s[n].time&&t<=s[i].time&&({lo:n,hi:i}=Pt(s,"time",t)),{time:a,pos:r}=s[n],{time:o,pos:l}=s[i]);const c=o-a;return c?r+(l-r)*(t-a)/c:r}class yn extends Ge{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=cs(e,this.min),this._tableRange=cs(e,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:e,max:n}=this,i=[],a=[];let o,r,l,c,d;for(o=0,r=t.length;o<r;++o)c=t[o],c>=e&&c<=n&&i.push(c);if(i.length<2)return[{time:e,pos:0},{time:n,pos:1}];for(o=0,r=i.length;o<r;++o)d=i[o+1],l=i[o-1],c=i[o],Math.round((d+l)/2)!==c&&a.push({time:c,pos:o/(r-1)});return a}_generate(){const t=this.min,e=this.max;let n=super.getDataTimestamps();return(!n.includes(t)||!n.length)&&n.splice(0,0,t),(!n.includes(e)||n.length===1)&&n.push(e),n.sort((i,a)=>i-a)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const e=this.getDataTimestamps(),n=this.getLabelTimestamps();return e.length&&n.length?t=this.normalize(e.concat(n)):t=e.length?e:n,t=this._cache.all=t,t}getDecimalForValue(t){return(cs(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const e=this._offsets,n=this.getDecimalForPixel(t)/e.factor-e.end;return cs(this._table,n*this._tableRange+this._minPos,!0)}}T(yn,"id","timeseries"),T(yn,"defaults",Ge.defaults);var Wu=Object.freeze({__proto__:null,CategoryScale:mn,LinearScale:bn,LogarithmicScale:gn,RadialLinearScale:Re,TimeScale:Ge,TimeSeriesScale:yn});const Vu=[Gl,kd,xu,Wu];mt.register(...Vu);let St="telemetry",kt=null,ge={},vn=null;function xe(s,t,e,n="telemetry"){const i=document.getElementById("modal-root");if(!i||!s)return;St={team:"assign",investigate:"investigate",resolve:"resolve",report:"report",telemetry:"telemetry",why:"why"}[n]||"telemetry";const o=Sn(s),r=dt.find(h=>h.id===o.recommendedTeamId)||dt[0];o.investigation.checklist.forEach(h=>{ge[h.id]===void 0&&(ge[h.id]=0)});const l=s.riskLevel==="Critical",c=s.riskLevel==="High",d=s.riskLevel==="Medium",u=l?"bg-status-critical/15 text-status-critical border-status-critical/40":c?"bg-status-warning/15 text-status-warning border-status-warning/40":d?"bg-sky-500/15 text-sky-400 border-sky-500/40":"bg-status-healthy/15 text-status-healthy border-status-healthy/40",p=l?"#EF4444":c?"#F59E0B":d?"#38BDF8":"#10B981",f=()=>`
    <div id="machine-modal-backdrop" class="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto animate-modal-backdrop">
      <div class="bg-surface w-full max-w-5xl rounded-xl sm:rounded-2xl shadow-[0_0_60px_rgba(0,0,0,0.85)] border border-border-subtle overflow-hidden flex flex-col max-h-[96vh] sm:max-h-[94vh] animate-modal-dialog my-auto">
        
        <!-- HEADER: INDUSTRIAL AI DIAGNOSTIC CONSOLE -->
        <div class="px-3.5 py-3 sm:px-6 sm:py-4 bg-surface-container-low/90 border-b border-border-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
          
          <!-- Machine Identity & Sector -->
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-secondary/15 border border-secondary/30 text-secondary flex flex-col items-center justify-center font-mono font-bold shadow-[0_0_12px_rgba(6,182,212,0.15)] shrink-0">
              <span class="text-xs">${s.id}</span>
              <span class="text-[8px] text-on-surface-variant font-normal uppercase">ASSET</span>
            </div>
            <div class="min-w-0">
              <div class="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                <h2 class="font-bold text-sm sm:text-base text-on-surface font-mono tracking-wide truncate">${s.name}</h2>
                <span class="px-2 py-0.5 rounded text-[9px] sm:text-[9.5px] font-mono font-bold uppercase border ${u}">
                  ● ${s.riskLevel}
                </span>
                <span class="px-2 py-0.5 rounded text-[9px] sm:text-[9.5px] font-mono font-semibold bg-surface-container border border-border-subtle text-on-surface-variant">
                  ${s.dataset}
                </span>
              </div>
              <p class="text-[11px] sm:text-xs text-on-surface-variant font-mono mt-0.5 truncate">${s.sector} • Key Trigger: <strong class="text-on-surface">${s.keyIndicator}</strong></p>
            </div>
          </div>

          <!-- Animated Radial Risk Gauge & Failure Horizon -->
          <div class="flex items-center justify-between sm:justify-end gap-3 sm:gap-4 border-t sm:border-t-0 border-border-subtle/40 pt-2 sm:pt-0">
            
            <!-- Failure Horizon Box -->
            <div class="flex flex-col text-left sm:text-right font-mono">
              <span class="text-[9.5px] sm:text-[10px] text-on-surface-variant uppercase">Failure Horizon</span>
              <span class="text-xs sm:text-sm font-data-number font-bold text-status-critical">${s.timeToFailure}</span>
              <span class="text-[9px] sm:text-[9.5px] text-on-surface-variant">RUL: ${s.rulCycles} Cycles (~${s.rulDays}d)</span>
            </div>

            <!-- Enhanced Radial SVG Gauge -->
            <div class="relative w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center shrink-0">
              <svg class="w-12 h-12 sm:w-16 sm:h-16 -rotate-90 drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#161F33" stroke-width="10"></circle>
                <circle id="modal-risk-gauge-circle" cx="50" cy="50" r="40" fill="none" stroke="${p}" stroke-width="10" 
                        stroke-linecap="round"
                        stroke-dasharray="251.2" 
                        stroke-dashoffset="251.2"
                        class="gauge-circle"></circle>
              </svg>
              <div class="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span class="text-[11px] sm:text-xs font-data-number font-bold text-on-surface">${s.failureProbability}%</span>
                <span class="text-[7px] sm:text-[7.5px] font-mono text-on-surface-variant font-semibold uppercase">PROB</span>
              </div>
            </div>

            <!-- Header Quick Actions -->
            <div class="flex items-center gap-1.5 pl-2 border-l border-border-subtle font-mono">
              <button id="btn-export-excel-header" class="px-2.5 py-1.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 text-xs font-semibold flex items-center gap-1 transition-all shadow-sm" title="Export Executive Excel Dossier (.xls)">
                <span class="material-symbols-outlined text-[15px]">table_view</span>
                <span class="hidden sm:inline">.xls</span>
              </button>
              <button id="btn-close-machine-modal" class="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" title="Close Modal (Esc)">
                <span class="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>
          </div>
        </div>

        <!-- NAVIGATION TABS (01/TELEMETRY, 02/WHY, 03/INVESTIGATE, 04/RESOLVE, 05/ASSIGN, 06/REPORT) -->
        <div class="px-3 sm:px-6 bg-surface-container-low/50 border-b border-border-subtle flex items-center gap-1 overflow-x-auto whitespace-nowrap hide-scrollbar flex-nowrap text-xs font-semibold font-mono">
          ${[{id:"telemetry",label:"01 / TELEMETRY",icon:"query_stats"},{id:"why",label:"02 / WHY",icon:"psychology",badge:"SHAP"},{id:"investigate",label:"03 / INVESTIGATE",icon:"manage_search",badge:l?"ALERT":null},{id:"resolve",label:"04 / RESOLVE",icon:"build_circle"},{id:"assign",label:"05 / ASSIGN",icon:"groups",badge:"MATCH"},{id:"report",label:"06 / REPORT",icon:"description"}].map(h=>{const m=St===h.id;return`
              <button data-tab="${h.id}" class="modal-tab-btn px-3 sm:px-3.5 py-2.5 sm:py-3 border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 ${m?"border-secondary text-secondary font-bold bg-secondary/5":"border-transparent text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low/60"}">
                <span class="material-symbols-outlined text-[16px]">${h.icon}</span>
                <span>${h.label}</span>
                ${h.badge?`
                  <span class="px-1.5 py-0.2 rounded text-[8.5px] font-mono font-bold ${h.badge==="ALERT"?"bg-status-critical text-on-primary animate-pulse":"bg-secondary/20 text-secondary border border-secondary/30"}">${h.badge}</span>
                `:""}
              </button>
            `}).join("")}
        </div>

        <!-- TAB BODY CONTENT CONTAINER -->
        <div id="modal-tab-body" class="p-3.5 sm:p-6 overflow-y-auto space-y-4 sm:space-y-6 flex-1 animate-tab-in">
          ${Is(St,s,o,r)}
        </div>

        <!-- MODAL FOOTER ACTIONS -->
        <div class="px-3.5 sm:px-6 py-3 sm:py-3.5 bg-surface-container-low/90 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-3 font-mono">
          <div class="flex items-center gap-2 text-xs text-on-surface-variant w-full sm:w-auto">
            <span class="material-symbols-outlined text-[16px] text-status-healthy">verified</span>
            <span class="truncate">Recommended Route: <strong class="text-on-surface">${r.name}</strong> (${r.lead})</span>
          </div>

          <div class="flex flex-wrap sm:flex-nowrap items-center gap-2 w-full sm:w-auto justify-end">
            <button id="btn-export-excel-footer" class="flex-1 sm:flex-initial px-3 py-1.5 text-xs font-semibold rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 transition-all flex items-center justify-center gap-1.5 shadow-sm" title="Utility: Export Complete Excel Dossier">
              <span class="material-symbols-outlined text-[15px]">file_download</span>
              <span>Export Dossier (.xls)</span>
            </button>
            <button id="btn-simulate-from-modal" class="flex-1 sm:flex-initial px-3 py-1.5 text-xs font-semibold rounded-lg border border-border-subtle bg-surface-container hover:bg-surface-container-high text-on-surface transition-all flex items-center justify-center gap-1.5 shadow-sm" title="Secondary: Launch What-If Parameter Sandbox">
              <span class="material-symbols-outlined text-[15px] text-secondary">science</span>
              <span>Simulate Sandbox</span>
            </button>
            <button id="btn-dispatch-from-modal" class="w-full sm:w-auto px-4 py-1.5 text-xs font-bold rounded-lg bg-secondary/20 hover:bg-secondary/30 text-secondary border border-secondary/40 transition-all flex items-center justify-center gap-1.5 shadow-[0_0_12px_rgba(6,182,212,0.2)]" title="Primary: Dispatch Maintenance Team">
              <span class="material-symbols-outlined text-[16px]">engineering</span>
              <span>Assign & Dispatch</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  `;i.innerHTML=f(),zu(s,t,e,o,r),ju(s.failureProbability),St==="telemetry"&&setTimeout(()=>yo(s),80)}function Is(s,t,e,n){switch(s){case"telemetry":return`
        <!-- Live Telemetry KPI Cards with Staggered Entrance -->
        <div>
          <div class="flex items-center justify-between mb-2 font-mono">
            <span class="font-label-md text-on-surface-variant uppercase">Current Telemetry Signal Readouts</span>
            <span class="text-[10px] text-status-healthy font-semibold">● 100 Hz SAMPLE RATE • AI4I 2020 MODEL</span>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 font-mono">
            ${[{label:"Process Temp",val:`${t.telemetry.temp}°C`,thresh:"Threshold: >80°C",isCrit:t.telemetry.temp>80,isWarn:t.telemetry.temp>70&&t.telemetry.temp<=80,trend:t.telemetry.temp>80?"↑ Rapid Rise":"→ Nominal"},{label:"Torque Load",val:`${t.telemetry.torque} Nm`,thresh:"Threshold: >500 Nm",isCrit:t.telemetry.torque>520,isWarn:t.telemetry.torque>480&&t.telemetry.torque<=520,trend:t.telemetry.torque>500?"↑ High Load":"→ Steady"},{label:"Spindle RPM",val:`${t.telemetry.rpm}`,thresh:"Nominal: 2800–3600",isCrit:!1,isWarn:t.telemetry.rpm>3600||t.telemetry.rpm<2800,trend:"→ Stabilized"},{label:"Tool Wear",val:`${t.telemetry.toolWear} mm`,thresh:"Limit: 0.80 mm",isCrit:t.telemetry.toolWear>.65,isWarn:t.telemetry.toolWear>.5&&t.telemetry.toolWear<=.65,trend:t.telemetry.toolWear>.65?"↑ Critical Wear":"→ Nominal"},{label:"Vibration",val:`${t.telemetry.vibration} mm/s`,thresh:"ISO Limit: 18 mm/s",isCrit:t.telemetry.vibration>25,isWarn:t.telemetry.vibration>18&&t.telemetry.vibration<=25,trend:t.telemetry.vibration>25?"↑ Harmonic Spike":"→ Smooth"},{label:"Line Pressure",val:`${t.telemetry.pressure} bar`,thresh:"Nominal: 5.5–7.0 bar",isCrit:!1,isWarn:t.telemetry.pressure<5,trend:"→ Nominal Flow"}].map((l,c)=>{const d=l.isCrit?"border-status-critical/40 bg-status-critical/5 text-status-critical":l.isWarn?"border-status-warning/40 bg-status-warning/5 text-status-warning":"border-border-subtle bg-surface-container-low/80 text-on-surface",u=l.isCrit?"text-status-critical font-bold":l.isWarn?"text-status-warning font-semibold":"text-status-healthy";return`
                <div class="telemetry-card-stagger p-3 rounded-lg border ${d} flex flex-col justify-between" style="animation-delay: ${c*50}ms">
                  <div>
                    <span class="text-[9.5px] text-on-surface-variant uppercase block">${l.label}</span>
                    <div class="text-base font-data-number font-bold mt-0.5">${l.val}</div>
                  </div>
                  <div class="mt-2 pt-1 border-t border-border-subtle/50 text-[9px] flex items-center justify-between text-on-surface-variant">
                    <span>${l.thresh}</span>
                    <span class="${u}">${l.trend}</span>
                  </div>
                </div>
              `}).join("")}
          </div>
        </div>

        <!-- Interactive Time-Series Telemetry Chart with Anomaly Detection & Crosshair -->
        <div class="predix-panel p-4 flex flex-col gap-3">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono">
            <div>
              <div class="flex items-center gap-2">
                <h3 class="text-xs font-bold text-on-surface">Telemetry Multi-Signal Waveform (24h Window)</h3>
                <span class="px-1.5 py-0.2 rounded text-[8.5px] font-bold bg-status-critical/15 text-status-critical border border-status-critical/30 uppercase">ANOMALY DETECTED</span>
              </div>
              <p class="text-[10px] text-on-surface-variant mt-0.5">Observed sensor signals with real-time anomaly tracking</p>
            </div>
            
            <!-- Clear Distinction Legend: Observed (Solid) vs Predicted (Dashed) -->
            <div class="flex flex-wrap items-center gap-3 text-[10px]">
              <span class="flex items-center gap-1.5"><span class="w-3 h-0.5 bg-[#EF4444]"></span> Observed Temp</span>
              <span class="flex items-center gap-1.5"><span class="w-3 h-0.5 bg-[#06B6D4]"></span> Observed Vibration</span>
              <span class="flex items-center gap-1.5 text-amber-400 font-semibold"><span class="w-3 h-0.5 border-t-2 border-dashed border-amber-400"></span> Predicted Risk (%)</span>
            </div>
          </div>
          <div class="relative h-[240px] w-full">
            <canvas id="modal-telemetry-chart"></canvas>
          </div>
        </div>
      `;case"why":const a=[{id:"vib",name:"Vibration Harmonic Stress",val:38,isDanger:!0,note:"Resonance on Axis Z (>25 mm/s limit)",baseline:"8.4 mm/s",current:`${t.telemetry.vibration} mm/s`,deviation:`+${(t.telemetry.vibration-8.4).toFixed(1)} mm/s`,contribution:"+38% Risk Escalation",trend:"High frequency harmonic resonance at 3.2 kHz"},{id:"tool",name:"Tool Insert Degradation",val:28,isDanger:!0,note:"Flank wear exceeded 0.80mm threshold",baseline:"0.12 mm",current:`${t.telemetry.toolWear} mm`,deviation:`+${(t.telemetry.toolWear-.12).toFixed(2)} mm`,contribution:"+28% Risk Escalation",trend:"Carbide flank crater micro-fracture progression"},{id:"temp",name:"Thermal Dissipation Deficit",val:22,isDanger:!0,note:"Process-Air differential < 8.6K threshold",baseline:"58.0°C",current:`${t.telemetry.temp}°C`,deviation:`+${(t.telemetry.temp-58).toFixed(1)}°C`,contribution:"+22% Risk Escalation",trend:"Thermal accumulation in primary spindle housing"},{id:"torque",name:"Spindle Drive Torque Load",val:12,isDanger:!1,note:"Fluctuation under heavy continuous feed",baseline:"360 Nm",current:`${t.telemetry.torque} Nm`,deviation:`+${(t.telemetry.torque-360).toFixed(0)} Nm`,contribution:"+12% Risk Escalation",trend:"Moderate torque resistance variation"},{id:"rpm",name:"Rotational Speed Stability",val:-2,isDanger:!1,note:"Normal spindle rotational velocity",baseline:"3200 RPM",current:`${t.telemetry.rpm} RPM`,deviation:`+${(t.telemetry.rpm-3200).toFixed(0)} RPM`,contribution:"-2% (Stabilizing Factor)",trend:"Spindle velocity within nominal control loop"}];return`
        <!-- Top Summary Banner -->
        <div class="p-4 rounded-xl bg-surface-container-low border border-border-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div class="flex items-center gap-2">
              <h3 class="text-xs font-bold text-on-surface font-mono uppercase">WHY IS THIS MACHINE AT RISK?</h3>
              <span class="px-2 py-0.2 rounded text-[9px] font-mono bg-secondary/15 text-secondary border border-secondary/30 font-bold">XGBoost TreeSHAP</span>
            </div>
            <p class="text-xs text-on-surface-variant mt-0.5 leading-relaxed">
              Global feature attribution values explain specific physical sensor deviations driving failure prediction score to <strong>${t.failureProbability}%</strong>.
            </p>
          </div>
          <div class="px-3 py-1.5 rounded-lg bg-status-critical/15 border border-status-critical/30 font-mono text-right shrink-0">
            <span class="text-[9.5px] text-status-critical font-bold uppercase block">Primary Threat</span>
            <span class="text-xs font-bold text-on-surface">${t.failureType}</span>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-5">
          
          <!-- Ranked SHAP Feature Contribution Bars (Interactive Drill-Down) -->
          <div class="col-span-1 lg:col-span-7 predix-panel p-5 space-y-4">
            <div class="flex items-center justify-between font-mono pb-2 border-b border-border-subtle">
              <span class="font-label-md text-on-surface-variant uppercase text-[10px]">Ranked Feature Attribution</span>
              <span class="text-[10px] text-secondary font-semibold">CLICK FACTOR FOR DETAILS</span>
            </div>

            <div class="space-y-3 font-mono text-xs">
              ${a.map(l=>{const c=vn===l.id;return`
                  <div data-shap-id="${l.id}" class="btn-toggle-shap-drilldown p-2.5 rounded-xl border ${c?"border-secondary/60 bg-secondary/10":"border-border-subtle/60 bg-surface-container-low/50 hover:bg-surface-container-low"} transition-all cursor-pointer space-y-1.5">
                    <div class="flex items-center justify-between text-[11px]">
                      <span class="font-bold text-on-surface flex items-center gap-1.5">
                        <span class="material-symbols-outlined text-[14px] text-secondary">${c?"expand_less":"expand_more"}</span>
                        <span>${l.name}</span>
                      </span>
                      <span class="${l.val>0?l.isDanger?"text-status-critical":"text-status-warning":"text-status-healthy"} font-bold">
                        ${l.val>0?"+":""}${l.val}% Risk Shift
                      </span>
                    </div>
                    
                    <div class="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                      <div class="shap-bar-fill h-full rounded-full ${l.val>0?l.isDanger?"bg-status-critical shadow-[0_0_6px_#EF4444]":"bg-status-warning":"bg-status-healthy"}" style="width: ${Math.abs(l.val)*2}%"></div>
                    </div>
                    <span class="text-[9.5px] text-on-surface-variant block">${l.note}</span>

                    <!-- Expanded Detail Drill-Down Panel -->
                    ${c?`
                      <div class="mt-2 pt-2 border-t border-border-subtle/60 grid grid-cols-2 gap-2 text-[10.5px] text-on-surface-variant bg-surface/60 p-2 rounded-lg">
                        <div>Baseline Nominal: <strong class="text-on-surface">${l.baseline}</strong></div>
                        <div>Current Measured: <strong class="text-status-critical">${l.current}</strong></div>
                        <div>Physical Deviation: <strong class="text-status-critical">${l.deviation}</strong></div>
                        <div>Risk Contribution: <strong class="text-secondary">${l.contribution}</strong></div>
                        <div class="col-span-2 text-[10px] text-slate-400 mt-1">Diagnostic Trend: ${l.trend}</div>
                      </div>
                    `:""}
                  </div>
                `}).join("")}
            </div>
          </div>

          <!-- "WHAT CHANGED?" Comparison Module -->
          <div class="col-span-1 lg:col-span-5 predix-panel p-5 flex flex-col justify-between space-y-4">
            <div>
              <div class="flex items-center justify-between font-mono pb-2 border-b border-border-subtle">
                <span class="font-label-md text-secondary uppercase text-[10px]">WHAT CHANGED?</span>
                <span class="text-[9.5px] text-on-surface-variant font-mono">VS LAST NOMINAL SHIFT</span>
              </div>

              <!-- Risk Elevation Delta -->
              <div class="my-3 p-3 rounded-xl bg-surface-container-low border border-border-subtle flex items-center justify-between font-mono">
                <div class="text-center">
                  <span class="text-[9px] text-on-surface-variant uppercase block">Nominal Baseline</span>
                  <span class="text-sm font-data-number font-bold text-status-healthy">18.0%</span>
                </div>
                <div class="flex items-center gap-1 text-secondary">
                  <span class="material-symbols-outlined text-[18px]">trending_flat</span>
                </div>
                <div class="text-center">
                  <span class="text-[9px] text-status-critical uppercase block font-bold">Current Risk</span>
                  <span class="text-base font-data-number font-bold text-status-critical">${t.failureProbability}%</span>
                </div>
              </div>

              <!-- Key Escalation Drivers -->
              <div class="space-y-2 text-xs font-mono">
                <span class="text-[10px] text-on-surface-variant uppercase block font-semibold">Primary Risk Increase Drivers:</span>
                <div class="p-2 rounded bg-surface-container-low text-[11px] flex items-center justify-between border border-border-subtle/50">
                  <span class="text-on-surface">Vibration Harmonic Drift</span>
                  <span class="text-status-critical font-bold">+28.8 mm/s ↑</span>
                </div>
                <div class="p-2 rounded bg-surface-container-low text-[11px] flex items-center justify-between border border-border-subtle/50">
                  <span class="text-on-surface">Spindle Thermal Deficit</span>
                  <span class="text-status-critical font-bold">+22.2°C ↑</span>
                </div>
                <div class="p-2 rounded bg-surface-container-low text-[11px] flex items-center justify-between border border-border-subtle/50">
                  <span class="text-on-surface">Carbide Insert Flank Wear</span>
                  <span class="text-status-critical font-bold">+0.43 mm ↑</span>
                </div>
              </div>
            </div>

            <div class="pt-2 border-t border-border-subtle text-center">
              <span class="text-[10px] font-mono text-on-surface-variant">Validated via 10,000 Tree Splits • TreeSHAP Explainer</span>
            </div>
          </div>

        </div>
      `;case"investigate":const o=Object.values(ge).filter(l=>l===2).length,r=e.investigation.checklist.length;return`
        <!-- Diagnostic Summary Banner -->
        <div class="p-4 rounded-xl bg-status-critical/15 border-l-4 border-status-critical flex items-start gap-3">
          <span class="material-symbols-outlined text-status-critical text-[22px] shrink-0 mt-0.5">warning</span>
          <div>
            <h4 class="font-bold text-xs text-status-critical font-mono uppercase tracking-wider">Root Cause: ${e.failureMode}</h4>
            <p class="text-xs text-on-surface mt-0.5 leading-relaxed">${e.summary}</p>
          </div>
        </div>

        <!-- Telemetry Indicators Cue Box -->
        <div class="predix-panel p-4 space-y-2 font-mono text-xs">
          <span class="font-label-md text-on-surface-variant uppercase text-[10px]">Key Diagnostic Telemetry Cues</span>
          <ul class="space-y-1.5 text-on-surface">
            ${e.investigation.primaryCues.map(l=>`
              <li class="flex items-start gap-2">
                <span class="material-symbols-outlined text-secondary text-[15px] shrink-0 mt-0.5">arrow_forward</span>
                <span class="text-[11px]">${l}</span>
              </li>
            `).join("")}
          </ul>
        </div>

        <!-- 3-State Physical Inspection Checklist -->
        <div>
          <div class="flex items-center justify-between mb-2.5 font-mono">
            <div class="flex items-center gap-2">
              <span class="font-label-md text-on-surface uppercase">Physical Inspection Checklist</span>
              <span class="text-[10px] font-mono text-secondary font-bold bg-secondary/15 px-2 py-0.5 rounded border border-secondary/30">
                ${o} / ${r} VERIFIED
              </span>
            </div>
            <span class="text-[10px] text-on-surface-variant">Click row to toggle state (○ PENDING → ◐ IN PROGRESS → ✓ VERIFIED)</span>
          </div>

          <div class="space-y-2 font-mono">
            ${e.investigation.checklist.map((l,c)=>{const d=ge[l.id]||0,u=d===2?"border-status-healthy/50 bg-status-healthy/5":d===1?"border-status-warning/50 bg-status-warning/5":"border-border-subtle bg-surface-container-low/70",p=d===2?'<span class="material-symbols-outlined text-status-healthy text-[18px]">check_circle</span>':d===1?'<span class="material-symbols-outlined text-status-warning text-[18px]">timelapse</span>':'<span class="material-symbols-outlined text-slate-500 text-[18px]">radio_button_unchecked</span>',f=d===2?'<span class="px-2 py-0.5 rounded bg-status-healthy/20 text-status-healthy text-[9.5px] font-bold border border-status-healthy/30">✓ VERIFIED</span>':d===1?'<span class="px-2 py-0.5 rounded bg-status-warning/20 text-status-warning text-[9.5px] font-bold border border-status-warning/30">◐ IN PROGRESS</span>':'<span class="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant text-[9.5px] font-bold border border-border-subtle">○ PENDING</span>';return`
                <div data-checklist-id="${l.id}" class="btn-toggle-checklist p-3.5 rounded-xl border ${u} flex items-start gap-3 cursor-pointer hover:border-slate-500 transition-all group">
                  <div class="mt-0.5 shrink-0">${p}</div>
                  <div class="flex-1 text-xs">
                    <div class="flex items-center justify-between">
                      <span class="font-bold text-on-surface group-hover:text-secondary transition-colors text-[11.5px]">${c+1}. ${l.task}</span>
                      <div class="flex items-center gap-2">
                        <span class="text-[9.5px] text-on-surface-variant font-mono">${l.location}</span>
                        ${f}
                      </div>
                    </div>
                    <p class="text-[11px] text-on-surface-variant mt-1 leading-relaxed font-sans">${l.detail}</p>
                    <div class="mt-1.5 flex items-center gap-1 text-[10px] text-secondary font-semibold">
                      <span class="material-symbols-outlined text-[13px]">tune</span>
                      <span>Test Method: ${l.method}</span>
                    </div>
                  </div>
                </div>
              `}).join("")}
          </div>
        </div>

        <!-- NDT Methods -->
        <div class="predix-panel p-4 font-mono text-xs">
          <span class="font-label-md text-on-surface-variant uppercase text-[10px] block mb-2">Recommended Non-Destructive Testing (NDT)</span>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
            ${e.investigation.ndtMethods.map(l=>`
              <div class="p-2.5 rounded-lg bg-surface-container-low border border-border-subtle flex items-center gap-2">
                <span class="material-symbols-outlined text-[16px] text-secondary">sensors</span>
                <span class="text-[11px] text-on-surface">${l}</span>
              </div>
            `).join("")}
          </div>
        </div>
      `;case"resolve":return`
        <!-- Visual Maintenance Workflow Signal Pipeline -->
        <div class="p-3 rounded-xl bg-surface-container-low border border-border-subtle flex items-center justify-between text-[11px] font-mono font-bold overflow-x-auto">
          <div class="flex items-center gap-2 text-secondary">
            <span class="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center text-[10px]">1</span>
            <span>DETECT</span>
          </div>
          <span class="text-slate-600">→</span>
          <div class="flex items-center gap-2 text-sky-400">
            <span class="w-5 h-5 rounded-full bg-sky-400/20 flex items-center justify-center text-[10px]">2</span>
            <span>DIAGNOSE</span>
          </div>
          <span class="text-slate-600">→</span>
          <div class="flex items-center gap-2 text-amber-400">
            <span class="w-5 h-5 rounded-full bg-amber-400/20 flex items-center justify-center text-[10px]">3</span>
            <span>ACTION</span>
          </div>
          <span class="text-slate-600">→</span>
          <div class="flex items-center gap-2 text-status-healthy">
            <span class="w-5 h-5 rounded-full bg-status-healthy/20 flex items-center justify-center text-[10px]">4</span>
            <span>VERIFY</span>
          </div>
        </div>

        <!-- AI Recommendation Panel -->
        <div class="p-4 rounded-xl bg-secondary/10 border border-secondary/30 font-mono text-xs space-y-2">
          <div class="flex items-center justify-between">
            <span class="text-[10px] text-secondary font-bold uppercase tracking-wider flex items-center gap-1">
              <span class="material-symbols-outlined text-[14px]">psychology</span>
              <span>AI RECOMMENDATION</span>
            </span>
            <span class="px-2 py-0.2 rounded bg-status-critical/20 text-status-critical border border-status-critical/30 font-bold uppercase text-[9px]">Priority: CRITICAL</span>
          </div>
          <div>
            <div class="font-bold text-on-surface text-[12px]">${e.failureMode} Corrective Procedure</div>
            <p class="text-on-surface-variant font-sans text-[11px] mt-0.5 leading-relaxed">${e.summary}</p>
          </div>
        </div>

        <!-- Safety & LOTO Protocol Banner -->
        <div class="p-4 rounded-xl bg-status-warning/15 border-l-4 border-status-warning flex items-start gap-3">
          <span class="material-symbols-outlined text-status-warning text-[22px] shrink-0 mt-0.5">lock_person</span>
          <div>
            <h4 class="font-bold text-xs text-status-warning uppercase tracking-wider font-mono">Mandatory Safety & LOTO Procedure</h4>
            <p class="text-xs text-on-surface mt-0.5 leading-relaxed font-sans">${e.resolution.safety}</p>
            <div class="flex items-center gap-4 mt-2 text-[10.5px] font-mono text-on-surface-variant">
              <span>Estimated MTTR: <strong class="text-on-surface">${e.resolution.mttr}</strong></span>
              <span>Fastener Torque Spec: <strong class="text-on-surface">${e.resolution.torqueSpecs}</strong></span>
            </div>
          </div>
        </div>

        <!-- Required Spare Parts Matrix -->
        <div>
          <span class="font-label-md text-on-surface-variant uppercase font-mono text-[10px] block mb-2">Required Spare Parts & Replacement Kit</span>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
            ${e.resolution.parts.map(l=>`
              <div class="p-3 rounded-xl border border-border-subtle bg-surface-container-low flex flex-col justify-between">
                <div>
                  <span class="text-[9.5px] text-on-surface-variant uppercase">${l.sku}</span>
                  <div class="font-bold text-on-surface mt-0.5 text-[11.5px]">${l.name}</div>
                </div>
                <div class="mt-2 pt-2 border-t border-border-subtle flex items-center justify-between text-[10.5px]">
                  <span class="text-on-surface-variant">Req: ${l.qty}</span>
                  <span class="text-status-healthy font-bold">${l.stock}</span>
                </div>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Standard Operating Procedure (SOP) Step Workflow -->
        <div>
          <span class="font-label-md text-on-surface-variant uppercase font-mono text-[10px] block mb-2.5">Standard Operating Procedure (SOP)</span>
          <div class="space-y-2.5 font-mono">
            ${e.resolution.steps.map(l=>`
              <div class="p-3.5 rounded-xl border border-border-subtle bg-surface-container-low flex items-start gap-3">
                <div class="w-6 h-6 rounded-lg bg-secondary/15 border border-secondary/30 text-secondary flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  ${l.step}
                </div>
                <div class="flex-1 text-xs">
                  <span class="font-bold text-on-surface">${l.title}</span>
                  <p class="text-[11px] text-on-surface-variant mt-0.5 leading-relaxed font-sans">${l.desc}</p>
                </div>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Post-Service Validation Sign-off -->
        <div class="p-4 rounded-xl bg-status-healthy/15 border border-status-healthy/30 flex items-start gap-3 text-xs font-mono">
          <span class="material-symbols-outlined text-status-healthy text-[20px] shrink-0 mt-0.5">task_alt</span>
          <div>
            <span class="font-bold text-status-healthy uppercase">Post-Service Validation Sign-off</span>
            <p class="text-on-surface mt-0.5 leading-relaxed font-sans">${e.resolution.validationProtocol}</p>
          </div>
        </div>
      `;case"assign":return`
        <!-- AI Recommendation Highlight Card -->
        <div class="p-5 rounded-xl bg-surface-container-low border border-border-subtle text-on-surface shadow-md relative overflow-hidden font-mono">
          <div class="flex items-start justify-between">
            <div>
              <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-secondary/20 text-secondary border border-secondary/40 text-[10px] font-bold uppercase tracking-wider mb-2">
                <span class="material-symbols-outlined text-[14px]">bolt</span>
                <span>RECOMMENDED TEAM • 98% AI MATCH</span>
              </div>
              <h3 class="text-base font-bold text-on-surface">${n.name}</h3>
              <p class="text-xs text-on-surface-variant mt-0.5">Lead: ${n.lead} (${n.leadTitle})</p>
            </div>
            <div class="text-right">
              <span class="text-2xl font-data-number font-bold text-secondary">${n.rating}</span>
              <div class="text-[9.5px] text-on-surface-variant">Expertise Rating</div>
            </div>
          </div>

          <!-- Team Metrics Bar -->
          <div class="grid grid-cols-3 gap-3 mt-4 pt-4 border-t border-border-subtle text-xs">
            <div>
              <span class="text-[9.5px] text-on-surface-variant uppercase">Active Capacity</span>
              <div class="font-data-number font-bold text-on-surface mt-0.5">${n.capacityPct}% Loaded</div>
            </div>
            <div>
              <span class="text-[9.5px] text-on-surface-variant uppercase">Avg Response</span>
              <div class="font-data-number font-bold text-on-surface mt-0.5">${n.avgResponseTime}</div>
            </div>
            <div>
              <span class="text-[9.5px] text-on-surface-variant uppercase">Active Tickets</span>
              <div class="font-data-number font-bold text-on-surface mt-0.5">${n.activeTicketsCount} Units</div>
            </div>
          </div>
        </div>

        <!-- All Engineering Teams Selector Matrix -->
        <div>
          <span class="font-label-md text-on-surface-variant uppercase font-mono text-[10px] block mb-2.5">All Available Maintenance Teams</span>
          <div class="space-y-2.5 font-mono">
            ${dt.map(l=>{const c=l.id===n.id;return`
                <div class="p-3.5 rounded-xl border ${c?"border-secondary/50 bg-secondary/10":"border-border-subtle bg-surface-container-low"} flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div>
                    <div class="flex items-center gap-2">
                      <span class="font-bold text-on-surface">${l.name}</span>
                      ${c?'<span class="px-2 py-0.2 rounded bg-secondary text-background text-[9px] font-bold uppercase">Best Match</span>':""}
                    </div>
                    <div class="text-[11px] text-on-surface-variant mt-0.5">Lead: ${l.lead} • Active Queue: ${l.activeTicketsCount} tickets</div>
                    <div class="flex flex-wrap gap-1 mt-2">
                      ${l.specialties.map(d=>`
                        <span class="px-2 py-0.5 rounded bg-surface border border-border-subtle/50 text-[10px] text-on-surface-variant">${d}</span>
                      `).join("")}
                    </div>
                  </div>

                  <div class="flex items-center gap-3 shrink-0">
                    <div class="w-24 bg-surface-container h-2 rounded-full overflow-hidden">
                      <div class="${l.capacityPct>80?"bg-status-critical":"bg-status-healthy"} h-full" style="width: ${l.capacityPct}%"></div>
                    </div>
                    <button data-assign-team="${l.id}" class="btn-select-team px-3 py-1.5 rounded-lg bg-secondary/20 hover:bg-secondary/30 text-secondary border border-secondary/40 text-xs font-semibold transition-all">
                      Assign Team
                    </button>
                  </div>
                </div>
              `}).join("")}
          </div>
        </div>
      `;case"report":return`
        <!-- Official Executive Dossier Preview -->
        <div class="p-6 rounded-xl bg-surface-container-low border border-border-subtle shadow-sm space-y-5 font-mono">
          <div class="p-4 rounded-xl bg-surface-container border border-border-subtle text-on-surface flex flex-col sm:flex-row sm:items-start justify-between gap-3">
            <div>
              <div class="text-[10px] text-secondary uppercase font-bold tracking-wider">OFFICIAL EXECUTIVE DOSSIER PREVIEW</div>
              <h3 class="text-base font-bold text-on-surface mt-1">Machine Diagnostic & Reliability Briefing</h3>
              <p class="text-xs text-on-surface-variant font-sans">Prepared for Plant Directors, Operations Executives & Maintenance Leadership</p>
            </div>
            <button id="btn-download-preview-report" class="px-3.5 py-2 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm shrink-0">
              <span class="material-symbols-outlined text-[17px]">download</span>
              <span>Download Excel (.xls)</span>
            </button>
          </div>

          <!-- Summary Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div class="p-4 rounded-xl bg-surface border border-border-subtle space-y-2">
              <div class="font-bold text-on-surface uppercase tracking-wider text-[10.5px]">1. Asset & Risk Summary</div>
              <div class="space-y-1 text-on-surface-variant">
                <div>Asset: <strong class="text-on-surface">${t.name} (${t.id})</strong></div>
                <div>Location: <strong class="text-on-surface">${t.sector}</strong></div>
                <div>Risk Tier: <strong class="text-status-critical">${t.riskLevel} (${t.failureProbability}%)</strong></div>
                <div>Remaining Useful Life: <strong class="text-on-surface">${t.rulCycles} Cycles (~${t.rulDays}d)</strong></div>
                <div>Failure Mode: <strong class="text-on-surface">${t.failureType}</strong></div>
              </div>
            </div>

            <div class="p-4 rounded-xl bg-surface border border-border-subtle space-y-2">
              <div class="font-bold text-on-surface uppercase tracking-wider text-[10.5px]">2. Engineering Assignment & SLA</div>
              <div class="space-y-1 text-on-surface-variant">
                <div>Assigned Unit: <strong class="text-on-surface">${n.name}</strong></div>
                <div>Lead Technician: <strong class="text-on-surface">${n.lead}</strong></div>
                <div>Target MTTR: <strong class="text-on-surface">${e.resolution.mttr}</strong></div>
                <div>Fastener Torque: <strong class="text-on-surface">${e.resolution.torqueSpecs}</strong></div>
                <div>Safety Protocol: <strong class="text-status-healthy font-semibold">LOTO Certified</strong></div>
              </div>
            </div>
          </div>

          <!-- Investigation & Resolution Synopsis -->
          <div class="p-4 rounded-xl bg-surface border border-border-subtle space-y-2 text-xs">
            <div class="font-bold text-on-surface uppercase tracking-wider text-[10.5px]">3. Prescriptive Resolution Synopsis (SOP)</div>
            <p class="text-on-surface-variant leading-relaxed font-sans">${e.summary}</p>
            <div class="space-y-1 pt-2 border-t border-border-subtle">
              ${e.resolution.steps.map(l=>`
                <div class="flex items-start gap-2">
                  <span class="font-bold text-secondary shrink-0">Phase ${l.step}:</span>
                  <span class="text-on-surface">${l.title} — ${l.desc}</span>
                </div>
              `).join("")}
            </div>
          </div>

          <!-- Requisition Matrix -->
          <div class="p-4 rounded-xl bg-surface border border-border-subtle space-y-2 text-xs">
            <div class="font-bold text-on-surface uppercase tracking-wider text-[10.5px]">4. Required Replacement Parts Matrix</div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
              ${e.resolution.parts.map(l=>`
                <div class="p-2.5 rounded-lg bg-surface-container-low border border-border-subtle">
                  <div class="font-bold text-on-surface">${l.name}</div>
                  <div class="text-[10px] text-on-surface-variant">${l.sku} • Qty: ${l.qty}</div>
                  <div class="text-[10px] text-status-healthy font-semibold mt-1">${l.stock}</div>
                </div>
              `).join("")}
            </div>
          </div>

          <!-- Formal Authorization Signature Block -->
          <div class="p-4 rounded-xl bg-surface-container-low border border-dashed border-border-subtle grid grid-cols-2 gap-4 text-xs text-on-surface-variant">
            <div>
              <strong>Reliability Lead Signature:</strong><br>
              <span class="text-slate-500">_______________________________</span>
            </div>
            <div>
              <strong>Operations Director Authorization:</strong><br>
              <span class="text-slate-500">_______________________________</span>
            </div>
          </div>
        </div>
      `;default:return""}}function ju(s){const t=document.getElementById("modal-risk-gauge-circle");if(!t)return;const e=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,i=251.2*(1-s/100);if(e){t.style.strokeDashoffset=i.toString();return}setTimeout(()=>{t.style.strokeDashoffset=i.toString()},100)}function yo(s){const t=document.getElementById("modal-telemetry-chart");if(!t)return;kt&&(kt.destroy(),kt=null);const e=va(24,s.id),n=e.tempSeries.map(o=>o>80?5:1.5),i=e.vibrationSeries.map(o=>o>25?5:1.5),a=t.getContext("2d");kt=new mt(a,{type:"line",data:{labels:e.timestamps,datasets:[{label:"Observed Temp (°C)",data:e.tempSeries,borderColor:"#EF4444",backgroundColor:"rgba(239, 68, 68, 0.08)",borderWidth:2,pointRadius:n,pointBackgroundColor:"#EF4444",tension:.35,yAxisID:"y"},{label:"Observed Vibration (mm/s)",data:e.vibrationSeries,borderColor:"#06B6D4",backgroundColor:"rgba(6, 182, 212, 0.08)",borderWidth:2,pointRadius:i,pointBackgroundColor:"#06B6D4",tension:.35,yAxisID:"y1"},{label:"Predicted Risk (%)",data:e.riskSeries,borderColor:"#F59E0B",borderDash:[5,5],borderWidth:2,pointRadius:0,tension:.2,yAxisID:"y2"}]},options:{responsive:!0,maintainAspectRatio:!1,animation:{duration:window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches?0:900,easing:"easeOutQuart"},interaction:{mode:"index",intersect:!1},plugins:{legend:{display:!1},tooltip:{backgroundColor:"#080C14",borderColor:"rgba(148, 163, 184, 0.25)",borderWidth:1,padding:10,titleFont:{family:"JetBrains Mono",size:11,weight:"bold"},bodyFont:{family:"JetBrains Mono",size:10.5},titleColor:"#F8FAFC",bodyColor:"#94A3B8",callbacks:{label:function(o){const r=o.dataset.label||"",l=o.parsed.y;return` ${r}: ${l}`}}}},scales:{x:{grid:{color:"rgba(148, 163, 184, 0.06)"},ticks:{color:"#64748B",font:{family:"JetBrains Mono",size:9}}},y:{type:"linear",position:"left",title:{display:!0,text:"Temp (°C)",color:"#EF4444",font:{size:9,family:"JetBrains Mono"}},grid:{color:"rgba(148, 163, 184, 0.06)"},ticks:{color:"#64748B",font:{family:"JetBrains Mono",size:9}}},y1:{type:"linear",position:"right",title:{display:!0,text:"Vib (mm/s)",color:"#06B6D4",font:{size:9,family:"JetBrains Mono"}},grid:{drawOnChartArea:!1},ticks:{color:"#64748B",font:{family:"JetBrains Mono",size:9}}},y2:{type:"linear",position:"right",min:0,max:100,display:!1,grid:{drawOnChartArea:!1}}}}})}function zu(s,t,e,n,i){var l,c,d,u,p,f,h;const a=document.getElementById("modal-root"),o=()=>{kt&&(kt.destroy(),kt=null),a.innerHTML=""},r=()=>{fe(s),B(`Executive Diagnostic Dossier for ${s.id} exported (.xls)!`,"success",4500)};(l=document.getElementById("btn-close-machine-modal"))==null||l.addEventListener("click",o),(c=document.getElementById("machine-modal-backdrop"))==null||c.addEventListener("click",m=>{m.target.id==="machine-modal-backdrop"&&o()}),(d=document.getElementById("btn-export-excel-header"))==null||d.addEventListener("click",r),(u=document.getElementById("btn-export-excel-footer"))==null||u.addEventListener("click",r),(p=document.getElementById("btn-download-preview-report"))==null||p.addEventListener("click",r),document.querySelectorAll(".modal-tab-btn").forEach(m=>{m.addEventListener("click",()=>{St=m.getAttribute("data-tab"),document.querySelectorAll(".modal-tab-btn").forEach(g=>{const x=g.getAttribute("data-tab")===St;g.className=`modal-tab-btn px-3.5 py-3 border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap ${x?"border-secondary text-secondary font-bold bg-secondary/5":"border-transparent text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low/60"}`});const b=document.getElementById("modal-tab-body");b&&(b.innerHTML=Is(St,s,n,i)),St==="telemetry"?setTimeout(()=>yo(s),80):kt&&(kt.destroy(),kt=null),As(s,t,e,n,i,o,r)})}),(f=document.getElementById("btn-simulate-from-modal"))==null||f.addEventListener("click",()=>{o(),e&&e(s)}),(h=document.getElementById("btn-dispatch-from-modal"))==null||h.addEventListener("click",()=>{o(),t&&t(s,i.id)}),As(s,t,e,n,i,o,r)}function As(s,t,e,n,i,a,o){var r;(r=document.getElementById("btn-download-preview-report"))==null||r.addEventListener("click",o),document.querySelectorAll(".btn-toggle-checklist").forEach(l=>{l.addEventListener("click",()=>{const c=l.getAttribute("data-checklist-id"),d=ge[c]||0;ge[c]=(d+1)%3;const u=document.getElementById("modal-tab-body");u&&(u.innerHTML=Is(St,s,n,i),As(s,t,e,n,i,a,o))})}),document.querySelectorAll(".btn-toggle-shap-drilldown").forEach(l=>{l.addEventListener("click",()=>{const c=l.getAttribute("data-shap-id");vn=vn===c?null:c;const d=document.getElementById("modal-tab-body");d&&(d.innerHTML=Is(St,s,n,i),As(s,t,e,n,i,a,o))})}),document.querySelectorAll(".btn-select-team").forEach(l=>{l.addEventListener("click",()=>{const c=l.getAttribute("data-assign-team");a(),t&&t(s,c)})})}function Bt(s,t=null,e=null){var u,p,f,h;const n=document.getElementById("modal-root");if(!n||!s)return;const i=Sn(s),a=t||i.recommendedTeamId,o=dt.find(m=>m.id===a)||dt[0],r=`
    <div id="dispatch-modal-backdrop" class="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-2 sm:p-4 animate-modal-backdrop">
      <div class="bg-surface w-full max-w-xl rounded-xl sm:rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-border-subtle overflow-hidden flex flex-col max-h-[96vh] sm:max-h-[90vh] animate-modal my-auto">
        <!-- Header -->
        <div class="px-4 py-3 sm:px-6 sm:py-4 bg-surface-container-low/90 border-b border-border-subtle text-on-surface flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-secondary/15 border border-secondary/30 text-secondary flex items-center justify-center shadow-[0_0_10px_rgba(6,182,212,0.15)] shrink-0">
              <span class="material-symbols-outlined text-[20px] sm:text-[22px]">engineering</span>
            </div>
            <div class="min-w-0">
              <h3 class="font-bold text-xs sm:text-sm text-on-surface font-mono leading-tight truncate">Dispatch Maintenance Work Order</h3>
              <p class="text-[10px] sm:text-[11px] text-on-surface-variant font-mono mt-0.5 truncate">Target: ${s.id} • ${s.name}</p>
            </div>
          </div>
          <button id="btn-close-dispatch-modal" class="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors shrink-0">
            <span class="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <!-- Form Content -->
        <form id="dispatch-form" class="p-4 sm:p-6 space-y-3.5 sm:space-y-4 text-xs overflow-y-auto">
          <!-- AI Match Highlight Banner -->
          <div class="p-3 sm:p-3.5 rounded-xl bg-secondary/10 border-l-4 border-secondary flex items-start gap-2.5 sm:gap-3">
            <span class="material-symbols-outlined text-secondary text-[18px] sm:text-[20px] shrink-0 mt-0.5">psychology</span>
            <div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-secondary text-[11px] sm:text-xs uppercase font-mono">Smart Routing Recommendation</span>
                <span class="px-1.5 py-0.2 rounded bg-secondary/20 border border-secondary/40 text-secondary font-mono text-[8.5px] sm:text-[9px] font-bold">98% MATCH</span>
              </div>
              <p class="text-on-surface text-[10.5px] sm:text-[11px] mt-0.5 leading-relaxed">
                Failure signature classified as <strong class="text-secondary">${i.failureMode}</strong>. Auto-routing to <strong class="text-on-surface">${o.name}</strong>.
              </p>
            </div>
          </div>

          <!-- Team & Technician Assignment -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label class="block font-label-md text-on-surface-variant uppercase mb-1.5">Assigned Engineering Team</label>
              <select id="dispatch-team-select" class="w-full bg-surface-container-low border border-border-subtle rounded-xl px-3 py-2 text-xs text-on-surface font-semibold focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary cursor-pointer font-mono">
                ${dt.map(m=>`
                  <option value="${m.id}" ${m.id===o.id?"selected":""}>
                    ${m.name} (${m.capacityPct}% Loaded)
                  </option>
                `).join("")}
              </select>
            </div>

            <div>
              <label class="block font-label-md text-on-surface-variant uppercase mb-1.5">Lead Technician</label>
              <select id="dispatch-tech-select" class="w-full bg-surface-container-low border border-border-subtle rounded-xl px-3 py-2 text-xs text-on-surface font-semibold focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary cursor-pointer font-mono">
                ${o.members.map(m=>`
                  <option value="${m}">${m}</option>
                `).join("")}
              </select>
            </div>
          </div>

          <!-- Urgency Level -->
          <div>
            <label class="block font-label-md text-on-surface-variant uppercase mb-1.5">Dispatch Urgency & SLA</label>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <label class="flex items-center gap-2 p-2 sm:p-2.5 rounded-xl border border-border-subtle cursor-pointer hover:bg-surface-container-low bg-surface">
                <input type="radio" name="urgency" value="Immediate" checked class="accent-sky-400">
                <div>
                  <div class="font-bold text-status-critical font-mono">Immediate</div>
                  <div class="text-[10px] text-on-surface-variant font-mono">&lt; 1 Hour SLA</div>
                </div>
              </label>
              <label class="flex items-center gap-2 p-2 sm:p-2.5 rounded-xl border border-border-subtle cursor-pointer hover:bg-surface-container-low bg-surface">
                <input type="radio" name="urgency" value="4-Hour" class="accent-sky-400">
                <div>
                  <div class="font-bold text-status-warning font-mono">4-Hour</div>
                  <div class="text-[10px] text-on-surface-variant font-mono">Same Shift</div>
                </div>
              </label>
              <label class="flex items-center gap-2 p-2 sm:p-2.5 rounded-xl border border-border-subtle cursor-pointer hover:bg-surface-container-low bg-surface">
                <input type="radio" name="urgency" value="Scheduled" class="accent-sky-400">
                <div>
                  <div class="font-bold text-on-surface font-mono">Scheduled</div>
                  <div class="text-[10px] text-on-surface-variant font-mono">Next Window</div>
                </div>
              </label>
            </div>
          </div>

          <!-- Auto-Attached SOP & Parts Kit Checklist -->
          <div class="p-3.5 rounded-xl bg-surface-container-low border border-border-subtle space-y-2">
            <div class="flex items-center justify-between">
              <span class="font-bold text-on-surface text-xs flex items-center gap-1.5 font-mono">
                <span class="material-symbols-outlined text-[16px] text-status-healthy">inventory_2</span>
                <span>Auto-Requisitioned Parts Kit</span>
              </span>
              <span class="text-[10px] font-mono text-status-healthy font-bold bg-status-healthy/15 px-1.5 py-0.5 rounded border border-status-healthy/30">ALL IN STOCK</span>
            </div>
            <div class="space-y-1 text-[11px] text-on-surface">
              ${i.resolution.parts.map(m=>`
                <div class="flex items-center justify-between font-mono bg-surface p-1.5 rounded border border-border-subtle">
                  <span>${m.name} (${m.sku})</span>
                  <span class="text-on-surface-variant">Qty: ${m.qty}</span>
                </div>
              `).join("")}
            </div>
          </div>

          <!-- Operational Dispatch Instructions -->
          <div>
            <label class="block font-label-md text-on-surface-variant uppercase mb-1.5">Operational Safety & Work Instructions</label>
            <textarea id="dispatch-notes" rows="2" class="w-full bg-surface-container-low border border-border-subtle rounded-xl px-3 py-2 text-xs text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary font-mono">${i.resolution.safety} Follow ${i.failureMode} SOP.</textarea>
          </div>

          <!-- Submit Buttons -->
          <div class="pt-3 flex items-center justify-end gap-2 border-t border-border-subtle font-mono">
            <button type="button" id="btn-cancel-dispatch" class="px-4 py-2 text-xs font-semibold rounded-lg text-on-surface-variant hover:text-on-surface transition-colors">
              Cancel
            </button>
            <button type="submit" class="px-4 py-2 text-xs font-semibold rounded-lg bg-secondary/20 hover:bg-secondary/30 text-secondary border border-secondary/40 transition-all flex items-center gap-1.5 shadow-[0_0_10px_rgba(6,182,212,0.15)] font-bold">
              <span class="material-symbols-outlined text-[16px]">send</span>
              <span>Confirm & Dispatch Ticket</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  `;n.innerHTML=r;const l=()=>{n.innerHTML=""};(u=document.getElementById("btn-close-dispatch-modal"))==null||u.addEventListener("click",l),(p=document.getElementById("btn-cancel-dispatch"))==null||p.addEventListener("click",l),(f=document.getElementById("dispatch-modal-backdrop"))==null||f.addEventListener("click",m=>{m.target.id==="dispatch-modal-backdrop"&&l()});const c=document.getElementById("dispatch-team-select"),d=document.getElementById("dispatch-tech-select");c==null||c.addEventListener("change",m=>{const b=dt.find(g=>g.id===m.target.value);b&&d&&(d.innerHTML=b.members.map(g=>`<option value="${g}">${g}</option>`).join(""))}),(h=document.getElementById("dispatch-form"))==null||h.addEventListener("submit",m=>{var k,_,S,E;m.preventDefault();const b=(k=document.getElementById("dispatch-team-select"))==null?void 0:k.value,g=(_=document.getElementById("dispatch-tech-select"))==null?void 0:_.value,x=((S=document.querySelector('input[name="urgency"]:checked'))==null?void 0:S.value)||"Immediate",w=(E=document.getElementById("dispatch-notes"))==null?void 0:E.value,v=dt.find(M=>M.id===b)||o,y=Co({machineId:s.id,machineName:s.name,sector:s.sector,teamId:v.id,teamName:v.name,assignedTech:g,urgency:x,priorityRank:s.priority,failureType:s.failureType,keyIndicator:s.keyIndicator,targetCompletion:x==="Immediate"?"In 45 mins":x==="4-Hour"?"In 3h 30m":"In 12h 00m",parts:i.resolution.parts.map(M=>M.name),notes:w});l(),B(`Work Order #${y.id} dispatched to ${g} (${v.name})!`,"success",4500),e&&e(y)})}function qu(){const s=Ao(),t=C[0],e=C.slice(0,6);return`
    <div class="px-3 sm:px-6 py-4 sm:py-6 max-w-[1440px] mx-auto space-y-4 sm:space-y-6">
      
      <!-- 01 / TOP COMMAND STATUS & DECISION PIPELINE -->
      <div class="predix-panel p-3.5 sm:p-4 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 sm:gap-4 border-l-4 border-l-secondary bg-surface-container-low/60">
        <div class="space-y-1 w-full lg:w-auto">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="text-[10px] font-mono text-secondary font-bold uppercase tracking-wider">01 / COMMAND STATUS</span>
            <span class="text-on-surface-variant font-mono text-xs hidden xs:inline">•</span>
            <span class="text-xs font-bold text-on-surface font-mono tracking-wide uppercase">PREDICTIVE MAINTENANCE DECISION INTELLIGENCE</span>
          </div>
          <!-- Workflow Signal Pipeline -->
          <div class="flex items-center gap-2 text-[10px] sm:text-[10.5px] font-mono font-semibold text-on-surface-variant pt-0.5 overflow-x-auto whitespace-nowrap hide-scrollbar flex-nowrap pb-1 lg:pb-0">
            <span class="text-secondary font-bold">PREDICT</span>
            <span class="text-slate-600">→</span>
            <span class="text-sky-400 font-bold">DETECT</span>
            <span class="text-slate-600">→</span>
            <span class="text-amber-400 font-bold">EXPLAIN</span>
            <span class="text-slate-600">→</span>
            <span class="text-status-critical font-bold">PRIORITIZE</span>
            <span class="text-slate-600">→</span>
            <span class="text-status-healthy font-bold">ACT</span>
          </div>
        </div>

        <!-- Telemetry State & Edge Engine Metrics -->
        <div class="flex flex-wrap items-center gap-2.5">
          <div class="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-status-healthy/15 border border-status-healthy/30">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-healthy opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-status-healthy"></span>
            </span>
            <span class="text-[10.5px] font-mono font-bold text-status-healthy tracking-wider uppercase">STREAM: ONLINE</span>
          </div>
          <div class="px-3 py-1.5 rounded-lg bg-surface-container border border-border-subtle text-[10.5px] font-mono text-on-surface-variant">
            <span class="text-on-surface font-semibold">XGBoost v2.4.1</span> • <span class="text-secondary">1.2ms Latency</span>
          </div>
        </div>
      </div>

      <!-- KPI COMMAND STRIP (With Count-Up Animation) -->
      <div>
        <div class="flex items-center justify-between mb-2">
          <span class="font-label-md text-on-surface-variant uppercase">Fleet Health Telemetry Strip</span>
          <span class="text-[10px] font-mono text-secondary">SYNCED REAL-TIME</span>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
          
          <!-- Total Fleet -->
          <div class="predix-panel p-4 flex flex-col justify-between hover:border-slate-600 transition-colors">
            <div class="flex items-center justify-between text-on-surface-variant">
              <span class="font-label-md text-[10px]">Total Assets</span>
              <span class="material-symbols-outlined text-[18px] text-secondary">precision_manufacturing</span>
            </div>
            <div class="mt-2.5">
              <div class="text-2xl font-data-number font-bold text-on-surface">
                <span class="count-up-number" data-target="${s.total}" data-format="integer">0</span>
              </div>
              <div class="text-[11px] text-on-surface-variant flex items-center gap-1 mt-1 font-mono">
                <span class="material-symbols-outlined text-[14px] text-status-healthy">trending_up</span>
                <span class="text-status-healthy font-semibold">+12</span>
                <span>monitored</span>
              </div>
            </div>
          </div>

          <!-- Nominal (Healthy) Assets -->
          <div class="predix-panel p-4 flex flex-col justify-between hover:border-slate-600 transition-colors">
            <div class="flex items-center justify-between text-on-surface-variant">
              <span class="font-label-md text-[10px]">Nominal (Healthy)</span>
              <div class="w-6 h-6 rounded-md bg-status-healthy/15 flex items-center justify-center text-status-healthy border border-status-healthy/30">
                <span class="material-symbols-outlined text-[15px]">check_circle</span>
              </div>
            </div>
            <div class="mt-2.5">
              <div class="text-2xl font-data-number font-bold text-status-healthy">
                <span class="count-up-number" data-target="${s.healthy}" data-format="integer">0</span>
              </div>
              <div class="text-[11px] font-mono text-on-surface-variant mt-1">
                <span class="count-up-number" data-target="${s.healthyPct}" data-format="decimal" data-suffix="%">0</span> of fleet
              </div>
            </div>
          </div>

          <!-- Warning Assets -->
          <div class="predix-panel p-4 flex flex-col justify-between hover:border-slate-600 transition-colors">
            <div class="flex items-center justify-between text-on-surface-variant">
              <span class="font-label-md text-[10px]">Warning State</span>
              <div class="w-6 h-6 rounded-md bg-status-warning/15 flex items-center justify-center text-status-warning border border-status-warning/30">
                <span class="material-symbols-outlined text-[15px]">warning</span>
              </div>
            </div>
            <div class="mt-2.5">
              <div class="text-2xl font-data-number font-bold text-status-warning">
                <span class="count-up-number" data-target="${s.warning}" data-format="integer">0</span>
              </div>
              <div class="text-[11px] font-mono text-on-surface-variant mt-1">
                <span class="count-up-number" data-target="${s.warningPct}" data-format="decimal" data-suffix="%">0</span> observation
              </div>
            </div>
          </div>

          <!-- High Risk Assets -->
          <div class="predix-panel p-4 flex flex-col justify-between hover:border-slate-600 transition-colors">
            <div class="flex items-center justify-between text-on-surface-variant">
              <span class="font-label-md text-[10px]">High Risk (48h)</span>
              <div class="w-6 h-6 rounded-md bg-status-critical/15 flex items-center justify-center text-status-critical border border-status-critical/30">
                <span class="material-symbols-outlined text-[15px]">error</span>
              </div>
            </div>
            <div class="mt-2.5">
              <div class="text-2xl font-data-number font-bold text-[#F87171]">
                <span class="count-up-number" data-target="${s.highRisk}" data-format="integer">0</span>
              </div>
              <div class="text-[11px] text-[#F87171] flex items-center gap-1 mt-1 font-mono font-medium">
                <span class="material-symbols-outlined text-[14px]">trending_up</span>
                <span>+8 this shift</span>
              </div>
            </div>
          </div>

          <!-- Critical Action Required -->
          <div class="predix-panel-critical p-4 flex flex-col justify-between">
            <div class="flex items-center justify-between text-on-surface-variant">
              <span class="font-label-md text-[10px] text-status-critical">Critical Imminent</span>
              <div class="w-6 h-6 rounded-md bg-status-critical/20 flex items-center justify-center text-status-critical border border-status-critical/40">
                <span class="material-symbols-outlined text-[15px]">emergency</span>
              </div>
            </div>
            <div class="mt-2.5">
              <div class="text-2xl font-data-number font-bold text-status-critical">
                <span class="count-up-number" data-target="${s.critical}" data-format="integer">0</span>
              </div>
              <div class="text-[10px] text-status-critical font-mono font-bold flex items-center gap-1.5 mt-1 uppercase">
                <span class="w-1.5 h-1.5 rounded-full bg-status-critical animate-ping"></span>
                <span>Immediate Action Req.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- MAIN INTELLIGENCE GRID: HERO CARD / RISK DISTRIBUTION / EVENT STREAM -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        <!-- 02 / CRITICAL ASSET HERO CARD (DOMINANT VISUAL WEIGHT) -->
        <div class="col-span-1 lg:col-span-4 predix-panel-critical p-6 flex flex-col justify-between relative overflow-hidden group">
          <div class="absolute -right-16 -top-16 w-64 h-64 bg-status-critical/10 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
          
          <div class="relative z-10">
            <!-- Header Tag -->
            <div class="flex items-start justify-between mb-4">
              <div>
                <div class="flex items-center gap-1.5">
                  <span class="text-[10px] font-mono text-status-critical font-bold uppercase tracking-wider">02 / CRITICAL INTELLIGENCE</span>
                  <span class="w-1.5 h-1.5 rounded-full bg-status-critical animate-ping"></span>
                </div>
                <h2 class="text-lg font-bold text-on-surface mt-1 font-mono">${t.name}</h2>
                <p class="text-xs text-on-surface-variant font-mono">${t.sector}</p>
              </div>
              
              <!-- Radial Risk Indicator -->
              <div class="relative w-16 h-16 flex items-center justify-center shrink-0">
                <svg class="w-16 h-16 -rotate-90 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#161F33" stroke-width="10"></circle>
                  <circle id="hero-risk-gauge" cx="50" cy="50" r="40" fill="none" stroke="#EF4444" stroke-width="10" 
                          stroke-linecap="round"
                          stroke-dasharray="251.2" 
                          stroke-dashoffset="251.2"
                          class="gauge-circle"></circle>
                </svg>
                <div class="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span class="text-xs font-data-number font-bold text-status-critical">${t.failureProbability}%</span>
                  <span class="text-[7.5px] font-mono text-on-surface-variant font-semibold uppercase">PROB</span>
                </div>
              </div>
            </div>

            <!-- Predicted Failure Horizon Banner -->
            <div class="bg-surface-container-lowest/80 rounded-xl p-3.5 mb-3.5 border border-border-subtle backdrop-blur-sm">
              <div class="flex items-center justify-between text-xs mb-1.5">
                <span class="text-on-surface-variant font-mono text-[10.5px]">Predicted Failure Horizon</span>
                <span class="font-data-number text-status-critical font-bold text-sm tracking-wide">${t.timeToFailure}</span>
              </div>
              <div class="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                <div class="bg-status-critical h-full w-[88%] shadow-[0_0_8px_#EF4444]"></div>
              </div>
              <div class="flex justify-between text-[10px] font-mono text-on-surface-variant/80 mt-1.5">
                <span>RUL: ${t.rulCycles} Cycles (~${t.rulDays}d)</span>
                <span class="text-status-critical font-semibold">Risk Tier: CRITICAL</span>
              </div>
            </div>

            <!-- Live Sensor Alarms -->
            <div class="grid grid-cols-2 gap-2.5 mb-3.5">
              <div class="bg-surface-container-lowest/60 p-3 rounded-xl border border-border-subtle">
                <span class="block text-[9.5px] font-mono text-on-surface-variant uppercase">Vibration Peak</span>
                <div class="text-base font-data-number text-on-surface mt-0.5 flex items-center justify-between">
                  <span class="text-status-critical font-bold">${t.telemetry.vibration} mm/s</span>
                  <span class="material-symbols-outlined text-status-critical text-[15px]">arrow_upward</span>
                </div>
              </div>
              <div class="bg-surface-container-lowest/60 p-3 rounded-xl border border-border-subtle">
                <span class="block text-[9.5px] font-mono text-on-surface-variant uppercase">Spindle Temp</span>
                <div class="text-base font-data-number text-on-surface mt-0.5 flex items-center justify-between">
                  <span class="text-status-critical font-bold">${t.telemetry.temp}°C</span>
                  <span class="material-symbols-outlined text-status-critical text-[15px]">arrow_upward</span>
                </div>
              </div>
            </div>

            <!-- "WHAT CHANGED?" SHAP Insight Summary -->
            <div class="p-2.5 rounded-lg bg-surface-container-lowest/70 border border-border-subtle text-[11px] mb-4">
              <div class="flex items-center justify-between font-mono text-[10px] mb-1">
                <span class="text-secondary font-bold flex items-center gap-1">
                  <span class="material-symbols-outlined text-[13px]">analytics</span>
                  <span>ROOT CAUSE ATTRIBUTION</span>
                </span>
                <button id="btn-critical-what-changed" class="text-secondary hover:underline font-semibold flex items-center gap-0.5">
                  <span>WHAT CHANGED?</span>
                  <span class="material-symbols-outlined text-[12px]">open_in_new</span>
                </button>
              </div>
              <div class="text-on-surface-variant font-mono text-[10.5px] space-y-0.5">
                <div>• Vibration Harmonic: <strong class="text-status-critical">+38%</strong> Risk Shift</div>
                <div>• Tool Insert Degradation: <strong class="text-status-critical">+28%</strong> Risk Shift</div>
              </div>
            </div>
          </div>

          <!-- Dispatch & Report Action Buttons -->
          <div class="relative z-10 pt-3 border-t border-border-subtle flex items-center gap-2">
            <button id="btn-critical-report" class="py-2 px-3 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 font-bold text-xs rounded-lg transition-all flex items-center justify-center gap-1.5 shadow-sm font-mono" title="Export Executive Dossier (.xls) for CNC-04">
              <span class="material-symbols-outlined text-[16px]">description</span>
              <span>Report (.xls)</span>
            </button>
            <button id="btn-dispatch-critical" class="flex-1 py-2 bg-secondary/20 hover:bg-secondary/30 text-secondary border border-secondary/40 font-bold text-xs rounded-lg transition-all flex items-center justify-center gap-1.5 shadow-[0_0_12px_rgba(6,182,212,0.2)] font-mono">
              <span class="material-symbols-outlined text-[17px]">engineering</span>
              <span>Dispatch Team</span>
            </button>
          </div>
        </div>

        <!-- 03 / FLEET RISK DISTRIBUTION -->
        <div class="col-span-1 lg:col-span-4 predix-panel p-6 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-1">
              <span class="text-[10px] font-mono text-secondary font-bold uppercase tracking-wider">03 / RISK DISTRIBUTION</span>
              <span class="text-[10px] font-mono text-secondary font-bold">1,248 Nodes</span>
            </div>
            <h3 class="text-sm font-bold text-on-surface font-mono">Fleet Risk Categorization</h3>
            <p class="text-xs text-on-surface-variant">Real-time classification based on ML failure probabilities</p>
          </div>

          <!-- Animated SVG Donut Chart -->
          <div class="flex-1 flex items-center justify-center relative my-4">
            <svg class="w-44 h-44 transform -rotate-90 drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]" viewBox="0 0 100 100">
              <!-- Background Ring -->
              <circle cx="50" cy="50" r="40" fill="none" stroke="#161F33" stroke-width="12"></circle>
              <!-- Healthy (78.6%) -->
              <circle id="donut-healthy" cx="50" cy="50" r="40" fill="none" stroke="#10B981" stroke-width="12" stroke-dasharray="251.2" stroke-dashoffset="251.2" class="gauge-circle"></circle>
              <!-- Warning (14.7%) -->
              <circle id="donut-warning" cx="50" cy="50" r="40" fill="none" stroke="#F59E0B" stroke-width="12" stroke-dasharray="251.2" stroke-dashoffset="251.2" style="transform-origin: center; transform: rotate(283deg)" class="gauge-circle"></circle>
              <!-- High Risk (5.2%) -->
              <circle id="donut-high" cx="50" cy="50" r="40" fill="none" stroke="#EF4444" stroke-width="12" stroke-dasharray="251.2" stroke-dashoffset="251.2" style="transform-origin: center; transform: rotate(336deg)" class="gauge-circle"></circle>
              <!-- Critical (1.4%) -->
              <circle id="donut-critical" cx="50" cy="50" r="40" fill="none" stroke="#991B1B" stroke-width="12" stroke-dasharray="251.2" stroke-dashoffset="251.2" style="transform-origin: center; transform: rotate(355deg)" class="gauge-circle"></circle>
            </svg>
            <div class="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span class="text-3xl font-data-number font-bold text-on-surface">
                <span class="count-up-number" data-target="${s.avgHealth}" data-format="integer">0</span>
              </span>
              <span class="text-[10px] font-mono text-on-surface-variant uppercase font-semibold">Avg Health</span>
            </div>
          </div>

          <!-- Donut Legend Grid -->
          <div class="grid grid-cols-2 gap-2 text-xs pt-3 border-t border-border-subtle">
            <div class="flex items-center gap-2">
              <div class="w-2.5 h-2.5 rounded-full bg-status-healthy shadow-[0_0_5px_#10B981]"></div>
              <span class="text-on-surface-variant font-mono text-[11px]">Healthy (78.6%)</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-2.5 h-2.5 rounded-full bg-status-warning shadow-[0_0_5px_#F59E0B]"></div>
              <span class="text-on-surface-variant font-mono text-[11px]">Warning (14.7%)</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-2.5 h-2.5 rounded-full bg-status-critical shadow-[0_0_5px_#EF4444]"></div>
              <span class="text-on-surface-variant font-mono text-[11px]">High Risk (5.2%)</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-2.5 h-2.5 rounded-full bg-[#991B1B]"></div>
              <span class="text-on-surface-variant font-mono text-[11px]">Critical (1.4%)</span>
            </div>
          </div>
        </div>

        <!-- 04 / LIVE EVENT & TELEMETRY STREAM (STAGGERED ENTRANCE) -->
        <div class="col-span-1 lg:col-span-4 predix-panel p-6 flex flex-col justify-between">
          <div class="flex items-center justify-between mb-3 pb-2 border-b border-border-subtle">
            <div class="flex items-center gap-2">
              <span class="text-[10px] font-mono text-secondary font-bold uppercase tracking-wider">04 / ACTIVITY STREAM</span>
            </div>
            <span class="text-[9.5px] font-mono text-status-healthy font-bold tracking-wider uppercase bg-status-healthy/10 px-1.5 py-0.5 rounded border border-status-healthy/20 flex items-center gap-1">
              <span class="w-1.5 h-1.5 rounded-full bg-status-healthy animate-pulse"></span>
              <span>LIVE</span>
            </span>
          </div>

          <div class="flex-1 overflow-y-auto space-y-2.5 pr-1 max-h-[310px]">
            ${Do.map((n,i)=>{const a=n.type==="critical"?"text-status-critical bg-status-critical/15 border-status-critical/30":n.type==="warning"?"text-status-warning bg-status-warning/15 border-status-warning/30":n.type==="success"?"text-status-healthy bg-status-healthy/15 border-status-healthy/30":"text-secondary bg-secondary/15 border-secondary/30",o=n.type==="critical"?'<span class="text-[9px] font-mono font-bold text-status-critical bg-status-critical/10 px-1.5 py-0.2 rounded border border-status-critical/20 uppercase">CRIT</span>':n.type==="warning"?'<span class="text-[9px] font-mono font-bold text-status-warning bg-status-warning/10 px-1.5 py-0.2 rounded border border-status-warning/20 uppercase">WARN</span>':n.type==="success"?'<span class="text-[9px] font-mono font-bold text-status-healthy bg-status-healthy/10 px-1.5 py-0.2 rounded border border-status-healthy/20 uppercase">RESOLVED</span>':'<span class="text-[9px] font-mono font-bold text-secondary bg-secondary/10 px-1.5 py-0.2 rounded border border-secondary/20 uppercase">INFO</span>';return`
                <div class="event-stream-row flex items-start gap-2.5 p-2.5 rounded-lg bg-surface-container-low/60 hover:bg-surface-container-low transition-colors text-xs border border-border-subtle/50" style="animation-delay: ${i*50}ms">
                  <div class="w-6 h-6 rounded-md ${a} flex items-center justify-center shrink-0 mt-0.5 border">
                    <span class="material-symbols-outlined text-[14px]">${n.icon}</span>
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="flex items-center justify-between gap-1">
                      <span class="font-bold text-on-surface truncate font-mono text-[11px]">${n.title}</span>
                      <span class="text-[9px] font-mono text-on-surface-variant/80 shrink-0">${n.timestamp}</span>
                    </div>
                    <p class="text-[11px] text-on-surface-variant mt-0.5 line-clamp-2">${n.detail}</p>
                    <div class="mt-1 flex items-center gap-1.5">
                      ${o}
                    </div>
                  </div>
                </div>
              `}).join("")}
          </div>

          <div class="pt-3 border-t border-border-subtle text-center">
            <a href="#work-orders" class="text-xs font-semibold text-secondary hover:underline inline-flex items-center gap-1 font-mono">
              <span>Open Maintenance Work Orders</span>
              <span class="material-symbols-outlined text-[14px]">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>

      <!-- 05 / PRIORITY ASSET QUEUE TABLE (ENHANCED HOVER & MONOSPACE ALIGNMENT) -->
      <div class="predix-panel overflow-hidden flex flex-col">
        <div class="p-3.5 sm:p-5 bg-surface-container-low/60 border-b border-border-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <div class="flex items-center gap-2 flex-wrap">
              <span class="text-[10px] font-mono text-secondary font-bold uppercase tracking-wider">05 / PRIORITY QUEUE</span>
              <h3 class="text-sm font-bold text-on-surface font-mono">Top Maintenance Priorities</h3>
              <span class="px-2 py-0.2 rounded text-[9.5px] font-mono bg-status-critical/15 text-status-critical border border-status-critical/30 font-bold uppercase">24h–48h Horizon</span>
            </div>
            <p class="text-xs text-on-surface-variant mt-0.5">Asset queue ranked by predicted failure risk & Remaining Useful Life (RUL)</p>
          </div>
          <div class="flex flex-wrap items-center gap-2 font-mono">
            <button id="btn-export-priority-excel" class="px-3 py-1.5 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 font-bold text-xs rounded-lg border border-emerald-500/30 transition-all flex items-center gap-1.5 shadow-sm">
              <span class="material-symbols-outlined text-[16px]">table_chart</span>
              <span>Executive Briefing (.xls)</span>
            </button>
            <button id="btn-export-priority-report" class="px-3 py-1.5 bg-surface-container hover:bg-surface-container-high text-on-surface font-semibold text-xs rounded-lg border border-border-subtle transition-all flex items-center gap-1.5 shadow-sm">
              <span class="material-symbols-outlined text-[16px]">download</span>
              <span>Export CSV</span>
            </button>
          </div>
        </div>

        <div class="overflow-x-auto w-full">
          <table class="w-full text-left border-collapse min-w-[800px] text-xs">
            <thead>
              <tr class="bg-surface-container-low/80 font-label-md text-on-surface-variant uppercase tracking-wider text-[10.5px] border-b border-border-subtle">
                <th class="py-3 px-4 w-14">Pri</th>
                <th class="py-3 px-4">Machine ID & Name</th>
                <th class="py-3 px-4">Location / Sector</th>
                <th class="py-3 px-4">Health Score</th>
                <th class="py-3 px-4">Failure Prob (24h)</th>
                <th class="py-3 px-4">Key Diagnostic Trigger</th>
                <th class="py-3 px-4 text-right">Quick Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-border-subtle">
              ${e.map(n=>{const i=n.riskLevel==="Critical",a=n.riskLevel==="High",o=i?"text-status-critical font-bold":a?"text-status-warning font-semibold":"text-on-surface font-medium",r=i?"bg-status-critical shadow-[0_0_6px_#EF4444]":a?"bg-status-warning shadow-[0_0_6px_#F59E0B]":"bg-status-healthy shadow-[0_0_6px_#10B981]";return`
                  <tr data-machine-id="${n.id}" class="predix-table-row hover:bg-surface-container-low transition-colors group cursor-pointer ${i?"critical-row bg-status-critical/[0.03]":""}">
                    <td class="py-3.5 px-4 font-mono font-bold text-on-surface-variant">#${n.priority}</td>
                    <td class="py-3.5 px-4">
                      <div class="flex items-center gap-2.5">
                        <div class="w-2 h-2 rounded-full ${r} ${i?"animate-pulse":""}"></div>
                        <div>
                          <span class="font-bold text-on-surface font-mono">${n.id}</span>
                          <div class="text-[11px] text-on-surface-variant">${n.name}</div>
                        </div>
                      </div>
                    </td>
                    <td class="py-3.5 px-4 text-on-surface-variant font-mono text-[11px]">${n.sector}</td>
                    <td class="py-3.5 px-4">
                      <div class="flex items-center gap-2">
                        <div class="w-16 bg-surface-container h-1.5 rounded-full overflow-hidden">
                          <div class="${r} h-full" style="width: ${n.healthScore}%"></div>
                        </div>
                        <span class="font-mono text-on-surface font-semibold">${n.healthScore}</span>
                      </div>
                    </td>
                    <td class="py-3.5 px-4 font-mono ${o}">${n.failureProbability}%</td>
                    <td class="py-3.5 px-4">
                      <span class="px-2 py-0.5 bg-surface-container-low rounded border border-border-subtle text-on-surface font-mono text-[10px]">
                        ${n.keyIndicator}
                      </span>
                    </td>
                    <td class="py-3.5 px-4 text-right font-mono">
                      <div class="flex items-center justify-end gap-1.5">
                        <button data-report-id="${n.id}" class="btn-quick-report px-2 py-1 rounded bg-emerald-950/40 text-emerald-400 hover:bg-emerald-600 hover:text-on-primary text-[10.5px] font-bold transition-all border border-emerald-500/30" title="Export Executive Report (.xls)">
                          .xls
                        </button>
                        <button data-dispatch-id="${n.id}" class="btn-quick-dispatch px-2.5 py-1 rounded bg-secondary/15 hover:bg-secondary/30 text-secondary text-[10.5px] font-semibold transition-all border border-secondary/30">
                          Dispatch
                        </button>
                      </div>
                    </td>
                  </tr>
                `}).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `}function Uu(s,t,e=800,n=!1,i=""){if(window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches){s.innerText=n?t.toFixed(1)+i:Math.round(t).toLocaleString()+i;return}const o=0,r=performance.now();function l(c){const d=c-r,u=Math.min(d/e,1),p=1-Math.pow(1-u,3),f=o+(t-o)*p;n?s.innerText=f.toFixed(1)+i:s.innerText=Math.round(f).toLocaleString()+i,u<1&&requestAnimationFrame(l)}requestAnimationFrame(l)}function Gu(s){var o,r,l,c,d,u;document.querySelectorAll(".count-up-number").forEach(p=>{const f=parseFloat(p.getAttribute("data-target")||"0"),h=p.getAttribute("data-format")||"integer",m=p.getAttribute("data-suffix")||"";Uu(p,f,800,h==="decimal",m)});const t=document.getElementById("hero-risk-gauge");if(t){const h=251.2*(1-(((o=C[0])==null?void 0:o.failureProbability)||89.4)/100);setTimeout(()=>{t.style.strokeDashoffset=h.toString()},100)}const e=document.getElementById("donut-healthy"),n=document.getElementById("donut-warning"),i=document.getElementById("donut-high"),a=document.getElementById("donut-critical");setTimeout(()=>{e&&(e.style.strokeDashoffset="53.7"),n&&(n.style.strokeDashoffset="214.2"),i&&(i.style.strokeDashoffset="238.0"),a&&(a.style.strokeDashoffset="247.6")},120),(r=document.getElementById("btn-dispatch-critical"))==null||r.addEventListener("click",()=>{Bt(C[0])}),(l=document.getElementById("btn-critical-report"))==null||l.addEventListener("click",()=>{fe(C[0]),B("Executive Diagnostic Dossier for CNC-04 generated (.xls)!","success",4500)}),(c=document.getElementById("btn-critical-what-changed"))==null||c.addEventListener("click",()=>{xe(C[0],(p,f)=>Bt(p,f),p=>{window.location.hash=`#what-if-simulator?machine=${p.id}`},"investigate")}),(d=document.getElementById("btn-export-priority-excel"))==null||d.addEventListener("click",()=>{Ps(C,ft),B("Fleet Management Executive Briefing exported (.xls)!","success",4500)}),(u=document.getElementById("btn-export-priority-report"))==null||u.addEventListener("click",()=>{Tn(C),B("Fleet maintenance priorities exported to CSV!","success")}),document.querySelectorAll(".btn-quick-report").forEach(p=>{p.addEventListener("click",f=>{f.stopPropagation();const h=p.getAttribute("data-report-id"),m=C.find(b=>b.id===h);m&&(fe(m),B(`Executive Report for ${m.id} exported (.xls)!`,"success",4500))})}),document.querySelectorAll("tr[data-machine-id]").forEach(p=>{p.addEventListener("click",f=>{if(f.target.closest(".btn-quick-dispatch")||f.target.closest(".btn-quick-report"))return;const h=p.getAttribute("data-machine-id"),m=C.find(b=>b.id===h);m&&xe(m,(b,g)=>Bt(b,g),b=>{window.location.hash=`#what-if-simulator?machine=${b.id}`})})}),document.querySelectorAll(".btn-quick-dispatch").forEach(p=>{p.addEventListener("click",f=>{f.stopPropagation();const h=p.getAttribute("data-dispatch-id"),m=C.find(b=>b.id===h);m&&Bt(m)})})}let ce="All",Qt="All",de="",bt="priority",pt=!0,Z=1;const ue=8;function Yu(){const s=C.length,t=C.filter(c=>c.riskLevel==="Critical").length,e=C.filter(c=>c.riskLevel==="High").length,n=C.filter(c=>c.riskLevel==="Medium").length,i=C.filter(c=>c.riskLevel==="Healthy").length,a=+(t/s*100).toFixed(1),o=+(e/s*100).toFixed(1),r=+(n/s*100).toFixed(1),l=+(i/s*100).toFixed(1);return`
    <div class="px-3 sm:px-6 py-4 sm:py-6 max-w-[1440px] mx-auto space-y-4 sm:space-y-6">
      
      <!-- 01 / FLEET HEALTH COMMAND HEADER & PIPELINE -->
      <div class="predix-panel p-3.5 sm:p-5 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 sm:gap-4 border-l-4 border-l-secondary bg-surface-container-low/60">
        <div class="space-y-1 w-full lg:w-auto">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="text-[10px] font-mono text-secondary font-bold uppercase tracking-wider">01 / FLEET INTELLIGENCE</span>
            <span class="text-on-surface-variant font-mono text-xs hidden xs:inline">•</span>
            <span class="text-xs font-bold text-on-surface font-mono tracking-wide uppercase">FLEET HEALTH & TELEMETRY MATRIX</span>
          </div>
          <!-- Signal Decision Flow -->
          <div class="flex items-center gap-2 text-[10px] sm:text-[10.5px] font-mono font-semibold text-on-surface-variant pt-0.5 overflow-x-auto whitespace-nowrap hide-scrollbar flex-nowrap pb-1 lg:pb-0">
            <span class="text-secondary font-bold">WHAT IS HAPPENING?</span>
            <span class="text-slate-600">→</span>
            <span class="text-sky-400 font-bold">WHICH NEED ATTENTION?</span>
            <span class="text-slate-600">→</span>
            <span class="text-amber-400 font-bold">WHY?</span>
            <span class="text-slate-600">→</span>
            <span class="text-status-healthy font-bold">WHAT SHOULD WE DO?</span>
          </div>
        </div>

        <!-- Header Actions: Upload & Reports -->
        <div class="flex flex-wrap items-center gap-2 font-mono text-xs">
          <button id="btn-fleet-upload-dataset" class="px-3 py-1.5 rounded-lg bg-secondary/20 hover:bg-secondary/30 text-secondary border border-secondary/40 font-bold flex items-center gap-1.5 transition-all shadow-[0_0_12px_rgba(6,182,212,0.15)]">
            <span class="material-symbols-outlined text-[16px]">cloud_upload</span>
            <span>Upload Dataset</span>
          </button>
          <button id="btn-fleet-export-excel" class="px-3 py-1.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 font-bold flex items-center gap-1.5 transition-all shadow-sm">
            <span class="material-symbols-outlined text-[16px]">table_chart</span>
            <span>Executive Briefing (.xls)</span>
          </button>
          <button id="btn-fleet-export-csv" class="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-semibold border border-border-subtle flex items-center gap-1.5 transition-all shadow-sm">
            <span class="material-symbols-outlined text-[16px]">download</span>
            <span>CSV</span>
          </button>
        </div>
      </div>

      <!-- 02 / FLEET OVERVIEW SIGNAL & RISK DISTRIBUTION BAR -->
      <div class="predix-panel p-3.5 sm:p-5 space-y-4">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono">
          <div>
            <span class="font-label-md text-on-surface-variant uppercase text-[10px]">Fleet Risk Distribution Overview</span>
            <h3 class="text-xs font-bold text-on-surface uppercase tracking-wider mt-0.5">Real-Time Risk Categorization (${s} Scored Nodes)</h3>
          </div>
          <span class="text-[10.5px] text-secondary font-semibold">SYNCED WITH XGBOOST INFERENCE ENGINE</span>
        </div>

        <!-- Proportional Multi-Segment Risk Progress Bar -->
        <div class="w-full bg-surface-container h-3.5 rounded-xl overflow-hidden flex shadow-inner p-0.5 border border-border-subtle/60">
          <div class="bg-status-healthy h-full rounded-l-lg transition-all duration-700 shadow-[0_0_8px_#10B981]" style="width: ${l}%" title="Healthy: ${l}% (${i} units)"></div>
          <div class="bg-sky-400 h-full transition-all duration-700" style="width: ${r}%" title="Warning/Medium: ${r}% (${n} units)"></div>
          <div class="bg-status-warning h-full transition-all duration-700 shadow-[0_0_8px_#F59E0B]" style="width: ${o}%" title="High Risk: ${o}% (${e} units)"></div>
          <div class="bg-status-critical h-full rounded-r-lg transition-all duration-700 shadow-[0_0_8px_#EF4444]" style="width: ${a}%" title="Critical: ${a}% (${t} units)"></div>
        </div>

        <!-- 4-Tier Categorization Stat Cards -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 font-mono text-xs">
          
          <div class="p-3 rounded-xl bg-surface-container-low border border-border-subtle flex flex-col justify-between">
            <div class="flex items-center justify-between text-on-surface-variant">
              <span class="text-[10px] uppercase font-bold text-status-healthy flex items-center gap-1">
                <span class="w-2 h-2 rounded-full bg-status-healthy"></span>
                <span>Healthy</span>
              </span>
              <span class="text-[11px] font-bold text-status-healthy">${l}%</span>
            </div>
            <div class="text-lg font-data-number font-bold text-on-surface mt-1">${i} <span class="text-[10px] text-on-surface-variant font-normal">nodes</span></div>
          </div>

          <div class="p-3 rounded-xl bg-surface-container-low border border-border-subtle flex flex-col justify-between">
            <div class="flex items-center justify-between text-on-surface-variant">
              <span class="text-[10px] uppercase font-bold text-sky-400 flex items-center gap-1">
                <span class="w-2 h-2 rounded-full bg-sky-400"></span>
                <span>Monitor</span>
              </span>
              <span class="text-[11px] font-bold text-sky-400">${r}%</span>
            </div>
            <div class="text-lg font-data-number font-bold text-on-surface mt-1">${n} <span class="text-[10px] text-on-surface-variant font-normal">nodes</span></div>
          </div>

          <div class="p-3 rounded-xl bg-surface-container-low border border-border-subtle flex flex-col justify-between">
            <div class="flex items-center justify-between text-on-surface-variant">
              <span class="text-[10px] uppercase font-bold text-status-warning flex items-center gap-1">
                <span class="w-2 h-2 rounded-full bg-status-warning"></span>
                <span>High Risk</span>
              </span>
              <span class="text-[11px] font-bold text-status-warning">${o}%</span>
            </div>
            <div class="text-lg font-data-number font-bold text-on-surface mt-1">${e} <span class="text-[10px] text-on-surface-variant font-normal">nodes</span></div>
          </div>

          <div class="p-3 rounded-xl bg-status-critical/10 border border-status-critical/30 flex flex-col justify-between">
            <div class="flex items-center justify-between">
              <span class="text-[10px] uppercase font-bold text-status-critical flex items-center gap-1">
                <span class="w-2 h-2 rounded-full bg-status-critical animate-ping"></span>
                <span>Critical</span>
              </span>
              <span class="text-[11px] font-bold text-status-critical">${a}%</span>
            </div>
            <div class="text-lg font-data-number font-bold text-status-critical mt-1">${t} <span class="text-[10px] text-on-surface-variant font-normal">nodes</span></div>
          </div>

        </div>
      </div>

      <!-- 03 / SEARCH & FILTER CONTROLS BAR -->
      <div class="predix-panel p-3 sm:p-3.5 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 font-mono text-xs">
        
        <!-- Search Input -->
        <div class="relative flex-1 max-w-full lg:max-w-md">
          <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[16px]">search</span>
          <input id="fleet-search" 
                 type="text" 
                 placeholder="Search Machine ID, name, sector, failure mode..." 
                 value="${de}"
                 class="w-full h-9 pl-9 pr-8 bg-surface-container-low rounded-lg border border-border-subtle text-xs text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary font-mono"
                 aria-label="Search Fleet Diagnostics">
          ${de?`
            <button id="btn-clear-search" class="absolute right-2.5 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface p-0.5" title="Clear Search">
              <span class="material-symbols-outlined text-[14px]">close</span>
            </button>
          `:""}
        </div>

        <!-- Dataset Filter Pills -->
        <div class="flex items-center gap-1.5 overflow-x-auto whitespace-nowrap hide-scrollbar flex-nowrap pb-1 lg:pb-0">
          <span class="text-[10.5px] text-on-surface-variant mr-1 uppercase shrink-0">Dataset:</span>
          ${["All",...Ne].map(c=>`
            <button data-dataset-filter="${c}" class="btn-dataset-filter px-2.5 py-1 rounded-md text-xs font-mono font-medium transition-all shrink-0 ${ce===c?"bg-secondary/20 text-secondary border border-secondary/40 font-bold shadow-sm":"bg-surface-container-low text-on-surface-variant hover:text-on-surface border border-transparent"}">
              ${c}
            </button>
          `).join("")}
        </div>

        <!-- Risk Filter Pills & Quick "Critical First" Mode -->
        <div class="flex items-center gap-1.5 overflow-x-auto whitespace-nowrap hide-scrollbar flex-nowrap pb-1 lg:pb-0">
          <span class="text-[10.5px] text-on-surface-variant mr-1 uppercase shrink-0">Risk:</span>
          ${["All","Critical","High","Medium","Healthy"].map(c=>{const d=Qt===c;return`
              <button data-risk-filter="${c}" class="btn-risk-filter px-2.5 py-1 rounded-md text-xs font-mono transition-all shrink-0 ${d?"bg-secondary/20 text-secondary border border-secondary/40 font-bold shadow-sm":"bg-surface-container-low text-on-surface-variant hover:text-on-surface border border-transparent"}">
                ${d&&c!=="All"?"● ":""}${c}
              </button>
            `}).join("")}
          <button id="btn-critical-first" class="ml-1 px-2.5 py-1 rounded-md bg-status-critical/15 hover:bg-status-critical/25 text-status-critical border border-status-critical/30 font-bold text-xs transition-all flex items-center gap-1 shrink-0" title="Sort by Critical Failure Probability first">
            <span class="material-symbols-outlined text-[13px]">emergency</span>
            <span>Critical First</span>
          </button>
        </div>

      </div>

      <!-- 04 / MAIN FLEET DIAGNOSTICS TABLE CONTAINER -->
      <div class="predix-panel overflow-hidden flex flex-col">
        <div class="overflow-x-auto w-full">
          <table class="w-full text-left border-collapse min-w-[960px] text-xs">
            <thead class="bg-surface-container-low/80 border-b border-border-subtle text-[10.5px] font-label-md text-on-surface-variant uppercase tracking-wider font-mono">
              <tr>
                <th class="py-3 px-4 w-16 cursor-pointer hover:text-on-surface sort-header" data-sort="priority">
                  <div class="flex items-center gap-1">
                    <span>Pri</span>
                    <span class="material-symbols-outlined text-[14px]">${bt==="priority"?pt?"arrow_upward":"arrow_downward":"swap_vert"}</span>
                  </div>
                </th>
                <th class="py-3 px-4 cursor-pointer hover:text-on-surface sort-header" data-sort="id">
                  <div class="flex items-center gap-1">
                    <span>Machine ID & Name</span>
                    <span class="material-symbols-outlined text-[14px]">${bt==="id"?pt?"arrow_upward":"arrow_downward":"swap_vert"}</span>
                  </div>
                </th>
                <th class="py-3 px-4">Dataset / Sector</th>
                <th class="py-3 px-4 cursor-pointer hover:text-on-surface sort-header" data-sort="riskLevel">
                  <div class="flex items-center gap-1">
                    <span>Risk Level</span>
                    <span class="material-symbols-outlined text-[14px]">${bt==="riskLevel"?pt?"arrow_upward":"arrow_downward":"swap_vert"}</span>
                  </div>
                </th>
                <th class="py-3 px-4 cursor-pointer hover:text-on-surface sort-header" data-sort="failureProbability">
                  <div class="flex items-center gap-1">
                    <span>Failure Prob</span>
                    <span class="material-symbols-outlined text-[14px]">${bt==="failureProbability"?pt?"arrow_upward":"arrow_downward":"swap_vert"}</span>
                  </div>
                </th>
                <th class="py-3 px-4 cursor-pointer hover:text-on-surface sort-header" data-sort="healthScore">
                  <div class="flex items-center gap-1">
                    <span>Health Score</span>
                    <span class="material-symbols-outlined text-[14px]">${bt==="healthScore"?pt?"arrow_upward":"arrow_downward":"swap_vert"}</span>
                  </div>
                </th>
                <th class="py-3 px-4 cursor-pointer hover:text-on-surface sort-header" data-sort="rulCycles">
                  <div class="flex items-center gap-1">
                    <span>Remaining Useful Life (RUL)</span>
                    <span class="material-symbols-outlined text-[14px]">${bt==="rulCycles"?pt?"arrow_upward":"arrow_downward":"swap_vert"}</span>
                  </div>
                </th>
                <th class="py-3 px-4">Key Diagnostic Trigger</th>
                <th class="py-3 px-4 text-right w-28">Quick Actions</th>
              </tr>
            </thead>
            <tbody id="fleet-table-body" class="divide-y divide-border-subtle table-filter-fade">
              ${vo()}
            </tbody>
          </table>
        </div>

        <!-- Table Pagination Footer -->
        <div class="px-5 py-3.5 bg-surface-container-low/60 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
          <span id="pagination-info" class="text-on-surface-variant text-[11px]"></span>
          <div class="flex items-center gap-2">
            <button id="btn-prev-page" class="px-2.5 py-1 rounded-md border border-border-subtle bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-[11px]">
              Previous
            </button>
            <div id="page-numbers" class="flex items-center gap-1"></div>
            <button id="btn-next-page" class="px-2.5 py-1 rounded-md border border-border-subtle bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-[11px]">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  `}function zn(){return C.filter(s=>{const t=ce==="All"||s.dataset===ce,e=Qt==="All"||s.riskLevel===Qt,n=de.toLowerCase().trim(),i=!n||s.id.toLowerCase().includes(n)||s.name.toLowerCase().includes(n)||s.sector.toLowerCase().includes(n)||s.type.toLowerCase().includes(n)||s.dataset.toLowerCase().includes(n)||s.keyIndicator&&s.keyIndicator.toLowerCase().includes(n)||s.failureType&&s.failureType.toLowerCase().includes(n);return t&&e&&i}).sort((s,t)=>{let e=s[bt],n=t[bt];return typeof e=="string"?pt?e.localeCompare(n):n.localeCompare(e):pt?e-n:n-e})}function vo(){const s=zn(),t=(Z-1)*ue,e=s.slice(t,t+ue);return e.length===0?`
      <tr>
        <td colspan="9" class="text-center py-12 text-on-surface-variant font-mono space-y-2">
          <span class="material-symbols-outlined text-[36px] text-slate-500">search_off</span>
          <div class="text-sm font-bold text-on-surface">No industrial telemetry nodes match current filters</div>
          <div class="text-xs text-on-surface-variant">Try refining your search terms or resetting filters</div>
          <button id="btn-clear-filters" class="mt-2 px-3 py-1 rounded-lg bg-secondary/20 hover:bg-secondary/30 text-secondary border border-secondary/30 font-bold text-xs">
            Clear Filters
          </button>
        </td>
      </tr>
    `:e.map((n,i)=>{const a=n.riskLevel==="Critical",o=n.riskLevel==="High",r=n.riskLevel==="Medium",l=a?"bg-status-critical/15 text-status-critical border-status-critical/40 font-bold":o?"bg-status-warning/15 text-status-warning border-status-warning/40 font-bold":r?"bg-sky-500/15 text-sky-400 border-sky-500/40":"bg-status-healthy/15 text-status-healthy border-status-healthy/40",c=a?"text-status-critical font-bold":o?"text-status-warning font-semibold":"text-on-surface font-medium",d=a?"bg-status-critical shadow-[0_0_6px_#EF4444]":o?"bg-status-warning shadow-[0_0_6px_#F59E0B]":r?"bg-sky-400":"bg-status-healthy shadow-[0_0_6px_#10B981]",u=n.priority<10?`0${n.priority}`:`${n.priority}`;return`
      <tr data-machine-id="${n.id}" class="fleet-row-stagger predix-table-row hover:bg-surface-container-low transition-colors group cursor-pointer ${a?"critical-row bg-status-critical/[0.03]":""}" style="animation-delay: ${i*35}ms">
        
        <!-- Priority Indicator -->
        <td class="py-3 px-4 font-mono font-bold text-on-surface-variant">
          ${u}
        </td>

        <!-- Machine ID & Asset Name -->
        <td class="py-3 px-4">
          <div class="flex items-center gap-2.5">
            <div class="w-2 h-2 rounded-full ${d} ${a?"animate-pulse":""}"></div>
            <div>
              <span class="font-bold text-on-surface font-mono text-[11.5px] group-hover:text-secondary transition-colors">${n.id}</span>
              <div class="text-[11px] text-on-surface-variant">${n.name}</div>
            </div>
          </div>
        </td>

        <!-- Dataset & Sector Location -->
        <td class="py-3 px-4 font-mono text-[11px] text-on-surface-variant">
          <span class="px-1.5 py-0.2 rounded bg-surface-container border border-border-subtle/50 text-[10px] text-on-surface font-semibold mr-1">${n.dataset}</span>
          <span>${n.sector}</span>
        </td>

        <!-- Risk Tier Badge -->
        <td class="py-3 px-4">
          <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded border ${l} font-mono text-[9.5px] uppercase">
            ${a?"● ":""}${n.riskLevel}
          </span>
        </td>

        <!-- Failure Probability with Progress Bar -->
        <td class="py-3 px-4">
          <div class="flex items-center gap-2.5 font-mono">
            <span class="font-data-number ${c} text-[11.5px] w-12">${n.failureProbability}%</span>
            <div class="w-16 bg-surface-container h-1.5 rounded-full overflow-hidden">
              <div class="${d} h-full" style="width: ${n.failureProbability}%"></div>
            </div>
          </div>
        </td>

        <!-- Health Score -->
        <td class="py-3 px-4">
          <div class="flex items-center gap-2 font-mono">
            <div class="w-14 bg-surface-container h-1.5 rounded-full overflow-hidden">
              <div class="${d} h-full" style="width: ${n.healthScore}%"></div>
            </div>
            <span class="font-data-number font-bold text-on-surface">${n.healthScore}</span>
            <span class="text-on-surface-variant text-[9.5px]">/100</span>
          </div>
        </td>

        <!-- Remaining Useful Life (RUL) -->
        <td class="py-3 px-4">
          <div class="flex flex-col font-mono text-xs">
            <span class="font-data-number font-bold text-on-surface">${n.rulCycles} Cycles</span>
            <span class="text-[9.5px] text-on-surface-variant">~${n.rulDays} Days Horizon</span>
          </div>
        </td>

        <!-- Key Diagnostic Trigger -->
        <td class="py-3 px-4">
          <span class="px-2 py-0.5 rounded bg-surface-container-low border border-border-subtle font-mono text-[10px] text-on-surface">
            ${n.keyIndicator}
          </span>
        </td>

        <!-- Quick Actions (.xls & Diagnostics Modal trigger) -->
        <td class="py-3 px-4 text-right font-mono">
          <div class="flex items-center justify-end gap-1.5">
            <button data-report-id="${n.id}" class="btn-fleet-row-report px-2 py-1 rounded bg-emerald-950/40 text-emerald-400 hover:bg-emerald-600 hover:text-on-primary text-[10.5px] font-bold transition-all border border-emerald-500/30 shadow-sm" title="Export Executive Dossier (.xls)">
              .xls
            </button>
            <button data-row-action="${n.id}" class="btn-inspect-machine px-2.5 py-1 rounded bg-secondary/15 hover:bg-secondary/30 text-secondary border border-secondary/40 text-[10.5px] font-semibold transition-all shadow-sm">
              Inspect
            </button>
          </div>
        </td>

      </tr>
    `}).join("")}function ha(){const s=zn(),t=Math.ceil(s.length/ue)||1;Z>t&&(Z=t);const e=s.length>0?(Z-1)*ue+1:0,n=Math.min(Z*ue,s.length),i=document.getElementById("pagination-info");i&&(i.innerText=s.length>0?`Displaying ${e} to ${n} of ${s.length} nodes`:"No matching nodes");const a=document.getElementById("btn-prev-page"),o=document.getElementById("btn-next-page");a&&(a.disabled=Z<=1),o&&(o.disabled=Z>=t);const r=document.getElementById("page-numbers");r&&(r.innerHTML=Array.from({length:t},(l,c)=>c+1).map(l=>`
      <button data-page="${l}" class="btn-page-num w-6 h-6 rounded-md text-[11px] font-medium transition-colors ${l===Z?"bg-secondary/20 text-secondary border border-secondary/40 font-bold shadow-sm":"bg-surface-container border border-border-subtle text-on-surface hover:bg-surface-container-high"}">
        ${l}
      </button>
    `).join(""))}function Xu(){var n,i,a,o,r,l,c;const s=()=>{const d=document.getElementById("fleet-table-body");d&&(d.classList.remove("table-filter-fade"),d.offsetWidth,d.classList.add("table-filter-fade"),d.innerHTML=vo()),ha(),e()};(n=document.getElementById("btn-fleet-upload-dataset"))==null||n.addEventListener("click",()=>{ya(()=>{s()})}),(i=document.getElementById("btn-fleet-export-excel"))==null||i.addEventListener("click",()=>{Ps(C,ft),B("Fleet Management Executive Briefing exported (.xls)!","success",4500)}),(a=document.getElementById("btn-fleet-export-csv"))==null||a.addEventListener("click",()=>{Tn(C),B("Raw fleet diagnostic data exported to CSV!","success")});const t=document.getElementById("fleet-search");t==null||t.addEventListener("input",d=>{de=d.target.value,Z=1,s()}),(o=document.getElementById("btn-clear-search"))==null||o.addEventListener("click",()=>{de="",t&&(t.value=""),Z=1,s()}),document.querySelectorAll(".btn-dataset-filter").forEach(d=>{d.addEventListener("click",()=>{ce=d.getAttribute("data-dataset-filter"),Z=1,document.querySelectorAll(".btn-dataset-filter").forEach(u=>{const p=u.getAttribute("data-dataset-filter")===ce;u.className=`btn-dataset-filter px-2.5 py-1 rounded-md text-xs font-mono font-medium transition-all ${p?"bg-secondary/20 text-secondary border border-secondary/40 font-bold shadow-sm":"bg-surface-container-low text-on-surface-variant hover:text-on-surface border border-transparent"}`}),s()})}),document.querySelectorAll(".btn-risk-filter").forEach(d=>{d.addEventListener("click",()=>{Qt=d.getAttribute("data-risk-filter"),Z=1,document.querySelectorAll(".btn-risk-filter").forEach(u=>{const p=u.getAttribute("data-risk-filter")===Qt;u.className=`btn-risk-filter px-2.5 py-1 rounded-md text-xs font-mono transition-all ${p?"bg-secondary/20 text-secondary border border-secondary/40 font-bold shadow-sm":"bg-surface-container-low text-on-surface-variant hover:text-on-surface border border-transparent"}`}),s()})}),(r=document.getElementById("btn-critical-first"))==null||r.addEventListener("click",()=>{bt="failureProbability",pt=!1,Qt="All",Z=1,s(),B("Sorted fleet: Critical & High Probability assets prioritized first","info")}),document.querySelectorAll(".sort-header").forEach(d=>{d.addEventListener("click",()=>{const u=d.getAttribute("data-sort");bt===u?pt=!pt:(bt=u,pt=!0),s()})}),(l=document.getElementById("btn-prev-page"))==null||l.addEventListener("click",()=>{Z>1&&(Z--,s())}),(c=document.getElementById("btn-next-page"))==null||c.addEventListener("click",()=>{const d=zn(),u=Math.ceil(d.length/ue)||1;Z<u&&(Z++,s())});const e=()=>{var d;(d=document.getElementById("btn-clear-filters"))==null||d.addEventListener("click",()=>{de="",Qt="All",ce="All",Z=1,t&&(t.value=""),s()}),document.querySelectorAll(".btn-page-num").forEach(u=>{u.addEventListener("click",()=>{Z=parseInt(u.getAttribute("data-page"),10),s()})}),document.querySelectorAll(".btn-fleet-row-report").forEach(u=>{u.addEventListener("click",p=>{p.stopPropagation();const f=u.getAttribute("data-report-id"),h=C.find(m=>m.id===f);h&&(fe(h),B(`Executive Report for ${h.id} exported (.xls)!`,"success",4500))})}),document.querySelectorAll("tr[data-machine-id]").forEach(u=>{u.addEventListener("click",p=>{if(p.target.closest(".btn-fleet-row-report"))return;const f=u.getAttribute("data-machine-id"),h=C.find(m=>m.id===f);h&&xe(h,(m,b)=>Bt(m,b),m=>{window.location.hash=`#what-if-simulator?machine=${m.id}`})})})};ha(),e()}function Ku(){const s=C.length,t=C.filter(o=>o.riskLevel==="Critical").length,e=C.filter(o=>o.riskLevel==="High").length,n=Math.round(C.reduce((o,r)=>o+r.healthScore,0)/s),i=98.4,a=[{name:"Process Temperature",col:"temp",type:"Continuous (Float)",unit:"°C",missing:"0.0%",range:"50.0 – 120.0 °C",mean:"81.4 °C",corr:"+0.34 (High)",status:"NOMINAL"},{name:"Vibration Amplitude",col:"vibration",type:"Continuous (Float)",unit:"mm/s",missing:"0.0%",range:"8.0 – 48.2 mm/s",mean:"24.6 mm/s",corr:"+0.38 (Strong)",status:"CRITICAL TRIGGER"},{name:"Motor Torque Load",col:"torque",type:"Continuous (Float)",unit:"Nm",missing:"0.0%",range:"300.0 – 600.0 Nm",mean:"462.5 Nm",corr:"+0.22 (Moderate)",status:"NOMINAL"},{name:"Spindle Rotational Speed",col:"rpm",type:"Discrete (Integer)",unit:"RPM",missing:"0.0%",range:"2200 – 4800 RPM",mean:"3480 RPM",corr:"-0.04 (Neutral)",status:"STABLE"},{name:"Tool Insert Flank Wear",col:"toolWear",type:"Continuous (Float)",unit:"mm",missing:"0.0%",range:"0.00 – 0.95 mm",mean:"0.48 mm",corr:"+0.28 (Strong)",status:"HIGH WEAR"},{name:"Hydraulic Line Pressure",col:"pressure",type:"Continuous (Float)",unit:"bar",missing:"0.0%",range:"3.2 – 6.8 bar",mean:"5.1 bar",corr:"+0.18 (Moderate)",status:"NOMINAL"}];return`
    <div class="px-3 sm:px-6 py-4 sm:py-6 max-w-[1440px] mx-auto space-y-4 sm:space-y-6">
      
      <!-- 01 / DATASET INTELLIGENCE HEADER & PIPELINE -->
      <div class="predix-panel p-3.5 sm:p-5 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 sm:gap-4 border-l-4 border-l-secondary bg-surface-container-low/60">
        <div class="space-y-1 w-full lg:w-auto">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="text-[10px] font-mono text-secondary font-bold uppercase tracking-wider">01 / DATASET INTELLIGENCE CENTER</span>
            <span class="text-on-surface-variant font-mono text-xs hidden xs:inline">•</span>
            <span class="text-xs font-bold text-on-surface font-mono tracking-wide uppercase">DATA QUALITY • FEATURE INTELLIGENCE • MODEL READINESS</span>
          </div>
          <!-- 4 Core Questions Pipeline -->
          <div class="flex items-center gap-2 text-[10px] sm:text-[10.5px] font-mono font-semibold text-on-surface-variant pt-0.5 overflow-x-auto whitespace-nowrap hide-scrollbar flex-nowrap pb-1 lg:pb-0">
            <span class="text-secondary font-bold">WHAT DATA DO WE HAVE?</span>
            <span class="text-slate-600">→</span>
            <span class="text-sky-400 font-bold">IS THE DATA HEALTHY?</span>
            <span class="text-slate-600">→</span>
            <span class="text-amber-400 font-bold">WHAT FEATURES ARE AVAILABLE?</span>
            <span class="text-slate-600">→</span>
            <span class="text-status-healthy font-bold">MODEL TRAINING READY?</span>
          </div>
        </div>

        <!-- Sample CSV Template Downloads -->
        <div class="flex flex-wrap items-center gap-2 font-mono text-xs">
          <button id="btn-download-ai4i-template" class="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high border border-border-subtle text-on-surface font-semibold flex items-center gap-1.5 transition-all shadow-sm">
            <span class="material-symbols-outlined text-[15px] text-secondary">download</span>
            <span>AI4I Sample (.csv)</span>
          </button>
          <button id="btn-download-cmapss-template" class="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high border border-border-subtle text-on-surface font-semibold flex items-center gap-1.5 transition-all shadow-sm">
            <span class="material-symbols-outlined text-[15px] text-secondary">download</span>
            <span>C-MAPSS Sample (.csv)</span>
          </button>
        </div>
      </div>

      <!-- 02 / DATASET KPI & QUALITY READINESS STRIP -->
      <div>
        <div class="flex items-center justify-between mb-2 font-mono">
          <span class="font-label-md text-on-surface-variant uppercase text-[10px]">Active Data Pipeline Metrics & Quality Index</span>
          <span class="text-[10px] text-secondary font-semibold">VALIDATED AUTO-SCHEMA</span>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 font-mono">
          
          <div class="predix-panel p-3.5 flex flex-col justify-between hover:border-slate-600 transition-colors">
            <span class="font-label-md text-on-surface-variant uppercase text-[9.5px]">Ingested Assets</span>
            <div class="text-2xl font-data-number font-bold text-on-surface mt-1.5">
              ${s} <span class="text-xs text-on-surface-variant font-normal">nodes</span>
            </div>
            <div class="text-[9.5px] text-on-surface-variant mt-1 border-t border-border-subtle/50 pt-1">Active Streams</div>
          </div>

          <div class="predix-panel p-3.5 flex flex-col justify-between hover:border-slate-600 transition-colors">
            <span class="font-label-md text-on-surface-variant uppercase text-[9.5px]">Telemetry Channels</span>
            <div class="text-2xl font-data-number font-bold text-secondary mt-1.5">
              14 <span class="text-xs text-on-surface-variant font-normal">signals</span>
            </div>
            <div class="text-[9.5px] text-on-surface-variant mt-1 border-t border-border-subtle/50 pt-1">Auto-mapped</div>
          </div>

          <div class="predix-panel p-3.5 flex flex-col justify-between hover:border-slate-600 transition-colors">
            <span class="font-label-md text-on-surface-variant uppercase text-[9.5px]">Quality Index</span>
            <div class="text-2xl font-data-number font-bold text-status-healthy mt-1.5">
              ${i} <span class="text-xs text-on-surface-variant font-normal">/ 100</span>
            </div>
            <div class="text-[9.5px] text-status-healthy font-semibold mt-1 border-t border-border-subtle/50 pt-1">Deterministic Score</div>
          </div>

          <div class="predix-panel p-3.5 flex flex-col justify-between hover:border-slate-600 transition-colors">
            <span class="font-label-md text-on-surface-variant uppercase text-[9.5px]">Missing Values</span>
            <div class="text-2xl font-data-number font-bold text-status-healthy mt-1.5">
              0.0%
            </div>
            <div class="text-[9.5px] text-on-surface-variant mt-1 border-t border-border-subtle/50 pt-1">Clean Records</div>
          </div>

          <div class="predix-panel p-3.5 flex flex-col justify-between hover:border-slate-600 transition-colors">
            <span class="font-label-md text-on-surface-variant uppercase text-[9.5px]">Duplicate Rows</span>
            <div class="text-2xl font-data-number font-bold text-status-healthy mt-1.5">
              0.0%
            </div>
            <div class="text-[9.5px] text-on-surface-variant mt-1 border-t border-border-subtle/50 pt-1">Unique Asset IDs</div>
          </div>

          <div class="predix-panel p-3.5 flex flex-col justify-between hover:border-slate-600 transition-colors">
            <span class="font-label-md text-on-surface-variant uppercase text-[9.5px]">Training Readiness</span>
            <div class="text-base font-data-number font-bold text-status-healthy mt-1.5 flex items-center gap-1">
              <span class="w-2 h-2 rounded-full bg-status-healthy"></span>
              <span>READY</span>
            </div>
            <div class="text-[9.5px] text-on-surface-variant mt-1 border-t border-border-subtle/50 pt-1">Schema Validated</div>
          </div>

        </div>
      </div>

      <!-- 03 / INGESTION HUB: DRAG & DROP ZONE (LEFT) VS ACTIVE DATASET METRICS (RIGHT) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        <!-- Upload Dropzone Panel -->
        <div class="col-span-1 lg:col-span-7 predix-panel p-6 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-sm font-bold text-on-surface font-mono">Ingest Custom Telemetry Dataset</h3>
              <span class="text-[10px] font-mono text-secondary uppercase bg-secondary/15 px-2 py-0.5 rounded border border-secondary/30">CSV / JSON Format</span>
            </div>
            <p class="text-xs text-on-surface-variant mb-4">
              Drag & drop SCADA / PLC files or select from local storage. Sensor headers are auto-detected and scored through the non-linear risk engine.
            </p>
          </div>

          <!-- Drag & Drop Zone -->
          <div id="profiler-dropzone" class="border-2 border-dashed border-border-subtle rounded-xl p-8 flex flex-col items-center justify-center gap-3 text-center bg-surface-container-low/40 hover:bg-surface-container-low hover:border-secondary transition-all cursor-pointer group my-2">
            <div class="w-12 h-12 rounded-xl bg-secondary/15 text-secondary border border-secondary/30 flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_12px_rgba(6,182,212,0.15)]">
              <span class="material-symbols-outlined text-[28px]">cloud_upload</span>
            </div>
            <div>
              <span class="font-bold text-sm text-on-surface font-mono">Click to upload CSV / JSON or drag & drop</span>
              <p class="text-[11px] text-on-surface-variant font-mono mt-0.5">Auto-maps: Temp, Vibration, Torque, RPM, Tool Wear, Pressure</p>
            </div>
            <input type="file" id="profiler-file-input" accept=".csv,.json" class="hidden">
            <div class="flex items-center gap-2 mt-2">
              <span class="px-2.5 py-1 rounded bg-surface border border-border-subtle text-[10px] font-mono text-on-surface-variant">
                Supports: AI4I 2020 • NASA C-MAPSS • Custom SCADA / PLC CSVs
              </span>
            </div>
          </div>

          <!-- Live Progress Indicator (Hidden initially) -->
          <div id="profiler-progress-container" class="hidden p-4 rounded-xl bg-surface-container-low border border-border-subtle space-y-2 mt-3 font-mono">
            <div class="flex items-center justify-between text-xs">
              <span id="profiler-progress-status" class="font-bold text-secondary flex items-center gap-1.5">
                <span class="material-symbols-outlined text-[16px] animate-spin">sync</span>
                <span>Validating Schema & Scoring Telemetry...</span>
              </span>
              <span id="profiler-progress-pct" class="font-bold text-secondary">0%</span>
            </div>
            <div class="w-full bg-surface-container h-2 rounded-full overflow-hidden">
              <div id="profiler-progress-bar" class="h-full bg-secondary shadow-[0_0_8px_#06B6D4] transition-all duration-300 w-0"></div>
            </div>
          </div>

          <!-- Quick 1-Click Preset Loaders -->
          <div class="pt-4 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
            <span class="text-on-surface-variant text-[11px]">Instant Demo Ingestion:</span>
            <div class="flex items-center gap-2">
              <button id="btn-quickload-ai4i" class="px-2.5 py-1.5 rounded-md bg-secondary/15 hover:bg-secondary/25 text-secondary border border-secondary/30 font-semibold text-xs transition-all">
                Load AI4I (10 CNC Rows)
              </button>
              <button id="btn-quickload-cmapss" class="px-2.5 py-1.5 rounded-md bg-secondary/15 hover:bg-secondary/25 text-secondary border border-secondary/30 font-semibold text-xs transition-all">
                Load C-MAPSS (7 Turbofan Rows)
              </button>
            </div>
          </div>
        </div>

        <!-- Ingestion Metrics & Active Streams Panel -->
        <div class="col-span-1 lg:col-span-5 predix-panel p-6 flex flex-col justify-between font-mono">
          <div>
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-sm font-bold text-on-surface">Active Dataset Stream Status</h3>
              <span class="text-[9.5px] text-status-healthy font-bold uppercase bg-status-healthy/15 px-2 py-0.5 rounded border border-status-healthy/30">STREAM ONLINE</span>
            </div>
            <p class="text-xs text-on-surface-variant font-sans mb-4">Real-time breakdown of telemetry distributions in working memory</p>
          </div>

          <!-- Metrics 2x2 Grid -->
          <div class="grid grid-cols-2 gap-3 my-2 text-xs">
            <div class="p-3 rounded-xl bg-surface-container-low border border-border-subtle">
              <span class="text-[10px] text-on-surface-variant uppercase">Total Ingested Assets</span>
              <div class="text-2xl font-data-number font-bold text-on-surface mt-1">${s}</div>
              <div class="text-[10px] text-on-surface-variant">Active Nodes</div>
            </div>

            <div class="p-3 rounded-xl bg-status-critical/10 border border-status-critical/30">
              <span class="text-[10px] text-status-critical uppercase font-bold">Critical Risk Detected</span>
              <div class="text-2xl font-data-number font-bold text-status-critical mt-1">${t}</div>
              <div class="text-[10px] text-status-critical">Immediate Action Req.</div>
            </div>

            <div class="p-3 rounded-xl bg-status-warning/10 border border-status-warning/30">
              <span class="text-[10px] text-status-warning uppercase font-bold">High Risk Assets</span>
              <div class="text-2xl font-data-number font-bold text-status-warning mt-1">${e}</div>
              <div class="text-[10px] text-status-warning">Under 48h Horizon</div>
            </div>

            <div class="p-3 rounded-xl bg-surface-container-low border border-border-subtle">
              <span class="text-[10px] text-on-surface-variant uppercase">Average Health Score</span>
              <div class="text-2xl font-data-number font-bold text-status-healthy mt-1">${n} / 100</div>
              <div class="text-[10px] text-on-surface-variant">Nominal Plant Margin</div>
            </div>
          </div>

          <!-- Active Dataset Tags -->
          <div class="pt-3 border-t border-border-subtle">
            <span class="text-[10px] font-label-md text-on-surface-variant uppercase block mb-2">Ingested Dataset Streams:</span>
            <div class="flex flex-wrap gap-1.5">
              ${Ne.map(o=>`
                <span class="px-2 py-0.5 rounded-md bg-secondary/15 border border-secondary/30 text-secondary text-[10.5px] font-semibold flex items-center gap-1.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-status-healthy animate-pulse"></span>
                  <span>${o}</span>
                </span>
              `).join("")}
            </div>
          </div>
        </div>

      </div>

      <!-- 04 / FEATURE INTELLIGENCE MATRIX TABLE -->
      <div class="predix-panel overflow-hidden flex flex-col font-mono text-xs">
        <div class="p-4 bg-surface-container-low/60 border-b border-border-subtle flex items-center justify-between">
          <div>
            <h3 class="text-xs font-bold text-on-surface uppercase tracking-wider">Feature Intelligence & Operational Boundaries</h3>
            <p class="text-[11px] text-on-surface-variant font-sans">Statistical distribution and target correlation per telemetry signal channel</p>
          </div>
          <span class="text-[9.5px] text-secondary font-bold uppercase bg-secondary/15 px-2 py-0.5 rounded border border-secondary/30">14 Features Mapped</span>
        </div>

        <div class="overflow-x-auto w-full">
          <table class="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr class="bg-surface-container-low/80 font-label-md text-on-surface-variant uppercase text-[9.5px] border-b border-border-subtle">
                <th class="py-2.5 px-4">Feature Channel</th>
                <th class="py-2.5 px-4">Data Type</th>
                <th class="py-2.5 px-4">Missing</th>
                <th class="py-2.5 px-4">Operational Range</th>
                <th class="py-2.5 px-4">Fleet Mean</th>
                <th class="py-2.5 px-4">Target Correlation</th>
                <th class="py-2.5 px-4 text-right">Channel Status</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-border-subtle text-[11px]">
              ${a.map(o=>`
                <tr class="hover:bg-surface-container-low transition-colors">
                  <td class="py-2.5 px-4 font-bold text-on-surface">
                    ${o.name} <span class="text-[10px] text-on-surface-variant font-normal">(${o.unit})</span>
                  </td>
                  <td class="py-2.5 px-4 text-on-surface-variant">${o.type}</td>
                  <td class="py-2.5 px-4 text-status-healthy font-semibold">${o.missing}</td>
                  <td class="py-2.5 px-4 text-on-surface-variant">${o.range}</td>
                  <td class="py-2.5 px-4 font-bold text-on-surface">${o.mean}</td>
                  <td class="py-2.5 px-4 font-bold ${o.corr.includes("Strong")?"text-status-critical":"text-secondary"}">${o.corr}</td>
                  <td class="py-2.5 px-4 text-right">
                    <span class="px-2 py-0.5 rounded text-[9px] font-bold uppercase ${o.status==="CRITICAL TRIGGER"?"bg-status-critical/15 text-status-critical border border-status-critical/30":o.status==="HIGH WEAR"?"bg-status-warning/15 text-status-warning border border-status-warning/30":"bg-status-healthy/15 text-status-healthy border border-status-healthy/30"}">
                      ${o.status}
                    </span>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>

      <!-- 05 / PROCESSED TELEMETRY ASSETS TABLE -->
      <div class="predix-panel overflow-hidden flex flex-col font-mono text-xs">
        <div class="p-5 bg-surface-container-low/60 border-b border-border-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <h3 class="text-sm font-bold text-on-surface">Predictively Scored Machine Assets</h3>
            <p class="text-xs text-on-surface-variant font-sans">Real-time inference output for all active and uploaded machines</p>
          </div>

          <a href="#fleet-health" class="px-3.5 py-1.5 rounded-lg bg-secondary/20 hover:bg-secondary/30 text-secondary border border-secondary/40 font-bold text-xs transition-all flex items-center gap-1.5 shadow-sm">
            <span>Explore in Fleet Health Diagnostics</span>
            <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
        </div>

        <div class="overflow-x-auto w-full">
          <table class="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr class="bg-surface-container-low/80 border-b border-border-subtle text-[10.5px] font-label-md text-on-surface-variant uppercase tracking-wider">
                <th class="py-3 px-4">Pri</th>
                <th class="py-3 px-4">Machine ID</th>
                <th class="py-3 px-4">Dataset Stream</th>
                <th class="py-3 px-4">Equipment Type</th>
                <th class="py-3 px-4">Failure Probability</th>
                <th class="py-3 px-4">Health Score</th>
                <th class="py-3 px-4">RUL (Cycles)</th>
                <th class="py-3 px-4">Classified Failure Mode</th>
                <th class="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody id="profiler-tbody" class="divide-y divide-border-subtle">
              ${wo()}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  `}function wo(){return C.slice(0,10).map(s=>{const t=s.riskLevel==="Critical",e=s.riskLevel==="High",n=t?"bg-status-critical shadow-[0_0_6px_#EF4444]":e?"bg-status-warning shadow-[0_0_6px_#F59E0B]":"bg-status-healthy shadow-[0_0_6px_#10B981]",i=t?"text-status-critical font-bold":e?"text-status-warning font-semibold":"text-on-surface";return`
      <tr data-machine-id="${s.id}" class="hover:bg-surface-container-low transition-colors group cursor-pointer ${t?"bg-status-critical/[0.03]":""}">
        <td class="py-3 px-4 font-mono font-bold text-on-surface-variant">#${s.priority}</td>
        <td class="py-3 px-4">
          <div class="flex items-center gap-2">
            <div class="w-2 h-2 rounded-full ${n} ${t?"animate-pulse":""}"></div>
            <div>
              <span class="font-bold text-on-surface font-mono">${s.id}</span>
              <div class="text-[11px] text-on-surface-variant">${s.name}</div>
            </div>
          </div>
        </td>
        <td class="py-3 px-4">
          <span class="px-2 py-0.5 rounded bg-surface-container border border-border-subtle/50 text-[10px] font-mono text-on-surface-variant">
            ${s.dataset}
          </span>
        </td>
        <td class="py-3 px-4 text-on-surface-variant font-mono text-[11px]">${s.type}</td>
        <td class="py-3 px-4">
          <div class="flex items-center gap-2">
            <span class="font-data-number ${i}">${s.failureProbability}%</span>
            <div class="w-16 bg-surface-container h-1.5 rounded-full overflow-hidden">
              <div class="${n} h-full" style="width: ${s.failureProbability}%"></div>
            </div>
          </div>
        </td>
        <td class="py-3 px-4 font-data-number font-bold text-on-surface">${s.healthScore} / 100</td>
        <td class="py-3 px-4 font-mono font-semibold text-on-surface">${s.rulCycles} (~${s.rulDays}d)</td>
        <td class="py-3 px-4">
          <span class="font-semibold text-on-surface font-mono text-[11px]">${s.failureType}</span>
          <div class="text-[10px] font-mono text-on-surface-variant">${s.keyIndicator}</div>
        </td>
        <td class="py-3 px-4 text-right">
          <button data-inspect-id="${s.id}" class="btn-inspect-profile px-2.5 py-1 rounded bg-secondary/15 hover:bg-secondary/30 text-secondary border border-secondary/30 text-[10.5px] font-semibold transition-all font-mono">
            Inspect
          </button>
        </td>
      </tr>
    `}).join("")}function Ju(){var a,o,r,l;(a=document.getElementById("btn-download-ai4i-template"))==null||a.addEventListener("click",()=>{qn("ai4i"),B("AI4I 2020 Sample CSV Template downloaded!","success")}),(o=document.getElementById("btn-download-cmapss-template"))==null||o.addEventListener("click",()=>{qn("cmapss"),B("NASA C-MAPSS Sample CSV Template downloaded!","success")}),(r=document.getElementById("btn-quickload-ai4i"))==null||r.addEventListener("click",()=>{n(En(),"AI4I 2020 Batch Upload")}),(l=document.getElementById("btn-quickload-cmapss"))==null||l.addEventListener("click",()=>{n(Mn(),"NASA C-MAPSS Batch Upload")});const s=document.getElementById("profiler-dropzone"),t=document.getElementById("profiler-file-input");s==null||s.addEventListener("click",()=>t==null?void 0:t.click()),s==null||s.addEventListener("dragover",c=>{c.preventDefault(),s.classList.add("border-secondary","bg-secondary/10")}),s==null||s.addEventListener("dragleave",()=>{s.classList.remove("border-secondary","bg-secondary/10")}),s==null||s.addEventListener("drop",c=>{c.preventDefault(),s.classList.remove("border-secondary","bg-secondary/10"),c.dataTransfer.files&&c.dataTransfer.files[0]&&e(c.dataTransfer.files[0])}),t==null||t.addEventListener("change",c=>{c.target.files&&c.target.files[0]&&e(c.target.files[0])});const e=c=>{const d=new FileReader;d.onload=u=>{n(u.target.result,c.name.replace(/\.[^/.]+$/,""))},d.readAsText(c)},n=(c,d)=>{const u=document.getElementById("profiler-progress-container"),p=document.getElementById("profiler-progress-bar"),f=document.getElementById("profiler-progress-pct");u&&u.classList.remove("hidden"),p&&(p.style.width="30%"),f&&(f.innerText="30%"),setTimeout(()=>{try{p&&(p.style.width="70%"),f&&(f.innerText="70%");let h,m;if(c.trim().startsWith("[")||c.trim().startsWith("{")){const g=JSON.parse(c),x=Array.isArray(g)?g:[g];h=Object.keys(x[0]||{}),m=x.map(w=>h.map(v=>String(w[v]??"")))}else{const g=ga(c);h=g.headers,m=g.rows}const b=xa(h,m,d);ba(d,b),p&&(p.style.width="100%"),f&&(f.innerText="100%"),setTimeout(()=>{B(`Ingested & scored ${b.length} machines from "${d}"!`,"success",5e3);const g=document.getElementById("profiler-tbody");g&&(g.innerHTML=wo()),i(),u&&u.classList.add("hidden")},350)}catch(h){B(`Failed to parse dataset: ${h.message}`,"error",5e3),u&&u.classList.add("hidden")}},350)},i=()=>{document.querySelectorAll(".btn-inspect-profile").forEach(c=>{c.addEventListener("click",d=>{d.stopPropagation();const u=c.getAttribute("data-inspect-id"),p=C.find(f=>f.id===u);p&&xe(p,(f,h)=>Bt(f,h),f=>{window.location.hash=`#what-if-simulator?machine=${f.id}`})})}),document.querySelectorAll("tr[data-machine-id]").forEach(c=>{c.addEventListener("click",()=>{const d=c.getAttribute("data-machine-id"),u=C.find(p=>p.id===d);u&&xe(u,(p,f)=>Bt(p,f),p=>{window.location.hash=`#what-if-simulator?machine=${p.id}`})})})};i()}let pe="All";function Qu(){return ft.filter(s=>s.status!=="Completed").length,ft.filter(s=>s.urgency==="Immediate"&&s.status!=="Completed").length,`
    <div class="px-3 sm:px-6 py-4 sm:py-6 max-w-[1440px] mx-auto space-y-4 sm:space-y-6">
      <!-- Header Section -->
      <div class="predix-panel p-4 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div class="flex items-center gap-2 flex-wrap">
            <h1 class="text-base sm:text-lg font-bold text-on-surface font-mono">Maintenance Teams & Work Order Routing</h1>
            <span class="px-2 py-0.2 rounded text-[9.5px] font-mono font-bold bg-secondary/15 text-secondary border border-secondary/30 uppercase">
              SMART ROUTING ACTIVE
            </span>
          </div>
          <p class="text-xs text-on-surface-variant max-w-2xl mt-1">
            Skill-matched task routing across 5 specialized reliability teams. Generate executive reports for plant management prior to resolution sign-off.
          </p>
        </div>

        <!-- Global Report Download Trigger -->
        <div class="flex items-center gap-3">
          <button id="btn-export-fleet-briefing" class="px-3.5 py-2 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 text-xs font-bold flex items-center gap-2 transition-all shadow-sm font-mono">
            <span class="material-symbols-outlined text-[17px]">table_chart</span>
            <span>Export Management Briefing (.xls)</span>
          </button>
        </div>
      </div>

      <!-- 5 Specialized Engineering Teams Workload Grid -->
      <div>
        <div class="flex items-center justify-between mb-3">
          <h3 class="text-sm font-bold text-on-surface font-mono">Specialized Engineering Teams & Bandwidth</h3>
          <span class="text-[10px] font-mono text-on-surface-variant">Floor Capacity & Active Roster</span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
          ${dt.map(s=>{const e=s.capacityPct>75?"bg-status-critical shadow-[0_0_6px_#EF4444]":"bg-status-healthy shadow-[0_0_6px_#10B981]";return`
              <div class="predix-panel p-4 flex flex-col justify-between hover:border-slate-600 transition-colors">
                <div>
                  <div class="flex items-center justify-between mb-1.5">
                    <span class="font-bold text-xs text-on-surface truncate font-mono" title="${s.name}">${s.name}</span>
                    <span class="text-[10px] font-mono font-bold text-secondary">${s.rating} ★</span>
                  </div>
                  <div class="text-[11px] text-on-surface-variant font-mono">Lead: <strong class="text-on-surface">${s.lead}</strong></div>
                  
                  <div class="flex flex-wrap gap-1 mt-2">
                    ${s.specialties.slice(0,2).map(n=>`
                      <span class="px-1.5 py-0.5 rounded bg-surface-container-low text-[9px] font-mono text-on-surface-variant border border-border-subtle/40 truncate">${n}</span>
                    `).join("")}
                  </div>
                </div>

                <div class="mt-4 pt-3 border-t border-border-subtle">
                  <div class="flex items-center justify-between text-[10px] font-mono text-on-surface-variant mb-1">
                    <span>Workload (${s.capacityPct}%)</span>
                    <span class="font-bold text-on-surface">${s.activeTicketsCount} Tickets</span>
                  </div>
                  <div class="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
                    <div class="${e} h-full transition-all duration-500" style="width: ${s.capacityPct}%"></div>
                  </div>
                </div>
              </div>
            `}).join("")}
        </div>
      </div>

      <!-- Active Work Orders Stream Table -->
      <div class="predix-panel overflow-hidden flex flex-col">
        <div class="p-3.5 sm:p-5 bg-surface-container-low/60 border-b border-border-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <h3 class="text-sm font-bold text-on-surface font-mono">Active Maintenance Work Orders</h3>
            <p class="text-xs text-on-surface-variant">Generate pre-resolution dossiers and mark dispatched work orders as resolved</p>
          </div>

          <!-- Status Filter Tabs -->
          <div class="flex items-center gap-1 bg-surface-container-low p-1 rounded-lg border border-border-subtle overflow-x-auto whitespace-nowrap hide-scrollbar flex-nowrap font-mono text-xs max-w-full">
            ${["All","Immediate","In Progress","Pending Parts","Completed"].map(s=>`
              <button data-wo-status="${s}" class="btn-wo-status-filter px-2.5 py-1 rounded text-xs font-medium transition-all shrink-0 ${pe===s?"bg-secondary/20 text-secondary border border-secondary/40 font-bold shadow-sm":"text-on-surface-variant hover:text-on-surface"}">
                ${s}
              </button>
            `).join("")}
          </div>
        </div>

        <div class="overflow-x-auto w-full">
          <table class="w-full text-left border-collapse min-w-[900px] text-xs">
            <thead class="bg-surface-container-low/80 border-b border-border-subtle text-[10.5px] font-label-md text-on-surface-variant uppercase tracking-wider">
              <tr>
                <th class="py-3 px-4">Order ID</th>
                <th class="py-3 px-4">Target Machine</th>
                <th class="py-3 px-4">Assigned Team & Lead</th>
                <th class="py-3 px-4">Urgency / SLA</th>
                <th class="py-3 px-4">Diagnostic Trigger</th>
                <th class="py-3 px-4">Status & Progress</th>
                <th class="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody id="work-orders-tbody" class="divide-y divide-border-subtle">
              ${_o()}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `}function Zu(){return ft.filter(s=>pe==="All"?!0:pe==="Immediate"?s.urgency==="Immediate"&&s.status!=="Completed":s.status===pe)}function _o(){const s=Zu();return s.length===0?`
      <tr>
        <td colspan="7" class="text-center py-12 text-on-surface-variant font-mono">
          <span class="material-symbols-outlined text-[36px] text-slate-500 mb-2">assignment_turned_in</span>
          <div>No active work orders match the selected filter.</div>
        </td>
      </tr>
    `:s.map(t=>{const e=t.status==="Completed",n=t.urgency==="Immediate",i=e?"bg-status-healthy/15 text-status-healthy border-status-healthy/30":t.status==="In Progress"?"bg-secondary/15 text-secondary border-secondary/30":t.status==="Pending Parts"?"bg-status-warning/15 text-status-warning border-status-warning/30":"bg-primary/20 text-sky-400 border-primary/30",a=n?"bg-status-critical/15 text-status-critical border border-status-critical/30 font-bold":"bg-surface-container text-on-surface-variant border border-border-subtle/40";return`
      <tr class="hover:bg-surface-container-low transition-colors ${e?"opacity-50":""}">
        <td class="py-3 px-4 font-mono font-bold text-on-surface">
          ${t.id}
          <div class="text-[10px] text-on-surface-variant font-normal font-mono">${t.createdTime}</div>
        </td>
        <td class="py-3 px-4">
          <div class="font-bold text-on-surface font-mono">${t.machineName}</div>
          <div class="text-[11px] text-on-surface-variant font-mono">${t.machineId} • ${t.sector}</div>
        </td>
        <td class="py-3 px-4">
          <div class="font-semibold text-on-surface">${t.teamName}</div>
          <div class="text-[11px] text-secondary font-mono flex items-center gap-1">
            <span class="material-symbols-outlined text-[14px]">person</span>
            <span>${t.assignedTech}</span>
          </div>
        </td>
        <td class="py-3 px-4">
          <span class="px-2 py-0.5 rounded text-[9.5px] font-mono uppercase ${a}">
            ${t.urgency}
          </span>
          <div class="text-[10px] font-mono text-on-surface-variant mt-0.5">${t.targetCompletion}</div>
        </td>
        <td class="py-3 px-4">
          <div class="font-semibold text-on-surface">${t.failureType}</div>
          <div class="text-[11px] text-status-critical font-mono">${t.keyIndicator}</div>
        </td>
        <td class="py-3 px-4">
          <div class="flex items-center gap-2 mb-1">
            <span class="px-2 py-0.5 rounded text-[9.5px] font-mono uppercase font-bold border-l-2 ${i}">
              ${t.status}
            </span>
            <span class="font-mono text-[10px] text-on-surface-variant">${t.progressPct}%</span>
          </div>
          <div class="w-24 bg-surface-container h-1.5 rounded-full overflow-hidden">
            <div class="${e?"bg-status-healthy":"bg-secondary"} h-full transition-all duration-300" style="width: ${t.progressPct}%"></div>
          </div>
        </td>
        <td class="py-3 px-4 text-right">
          <div class="flex items-center justify-end gap-1.5">
            <!-- 1-Click Executive Excel Report Button -->
            <button data-report-machine="${t.machineId}" data-report-wo="${t.id}" class="btn-gen-wo-report px-2 py-1 rounded bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-600 hover:text-on-primary text-[10.5px] font-bold transition-all flex items-center gap-1 shadow-sm font-mono" title="Generate Executive Excel Report (.xls) for Higher Officials">
              <span class="material-symbols-outlined text-[14px]">description</span>
              <span>.xls</span>
            </button>

            <!-- SOP View Button -->
            <button data-view-sop="${t.machineId}" class="btn-open-sop px-2 py-1 rounded border border-border-subtle bg-surface-container hover:bg-surface-container-high text-[10.5px] font-semibold transition-all flex items-center gap-1 font-mono" title="View Investigation Checklist & SOP">
              <span class="material-symbols-outlined text-[14px] text-secondary">menu_book</span>
              <span>SOP</span>
            </button>

            ${e?`
              <span class="material-symbols-outlined text-status-healthy text-[18px]" title="Resolved & Documented">check_circle</span>
            `:`
              <button data-complete-wo="${t.id}" data-complete-machine="${t.machineId}" class="btn-complete-wo px-2.5 py-1 rounded bg-status-healthy/20 border border-status-healthy/40 text-status-healthy text-[10.5px] font-bold hover:bg-status-healthy hover:text-on-primary transition-all flex items-center gap-1 shadow-sm font-mono" title="Download report and mark work order as completed">
                <span class="material-symbols-outlined text-[14px]">task_alt</span>
                <span>Resolve</span>
              </button>
            `}
          </div>
        </td>
      </tr>
    `}).join("")}function tp(){var e;const s=()=>{const n=document.getElementById("work-orders-tbody");n&&(n.innerHTML=_o()),t()};document.querySelectorAll(".btn-wo-status-filter").forEach(n=>{n.addEventListener("click",()=>{pe=n.getAttribute("data-wo-status"),document.querySelectorAll(".btn-wo-status-filter").forEach(i=>{const a=i.getAttribute("data-wo-status")===pe;i.className=`btn-wo-status-filter px-2.5 py-1 rounded text-xs font-medium transition-all ${a?"bg-secondary/20 text-secondary border border-secondary/40 font-bold shadow-sm":"text-on-surface-variant hover:text-on-surface"}`}),s()})}),(e=document.getElementById("btn-export-fleet-briefing"))==null||e.addEventListener("click",()=>{Ps(C,ft),B("Fleet Management Executive Briefing exported (.xls)!","success",4500)});const t=()=>{document.querySelectorAll(".btn-gen-wo-report").forEach(n=>{n.addEventListener("click",()=>{const i=n.getAttribute("data-report-machine"),a=n.getAttribute("data-report-wo"),o=C.find(l=>l.id===i),r=ft.find(l=>l.id===a);o&&(fe(o,r),B(`Executive Report for ${o.id} generated (.xls)!`,"success",4500))})}),document.querySelectorAll(".btn-open-sop").forEach(n=>{n.addEventListener("click",()=>{const i=n.getAttribute("data-view-sop"),a=C.find(o=>o.id===i);a&&xe(a,(o,r)=>Bt(o,r),o=>{window.location.hash=`#what-if-simulator?machine=${o.id}`},"resolve")})}),document.querySelectorAll(".btn-complete-wo").forEach(n=>{n.addEventListener("click",()=>{const i=n.getAttribute("data-complete-wo"),a=n.getAttribute("data-complete-machine"),o=C.find(l=>l.id===a),r=ft.find(l=>l.id===i);o&&fe(o,r),Io(i),B(`Work Order #${i} marked completed & Executive Dossier exported for management!`,"success",5e3),s()})})};t()}function wn(s,t,e,n,i={}){const a=i.temp||98,o=i.torque||540,r=i.rpm||3600,l=i.toolWear||.82,c=i.failureProbability||91,d=(s-60)/40,u=(t-350)/200,p=Math.abs(e-3200)/1500,f=(n-.2)/.6;let h=.35*Math.max(0,d)*100+.28*Math.max(0,f)*100+.22*Math.max(0,u)*100+.15*Math.max(0,p)*100;s>85&&t>480&&n>.6&&(h+=18);const m=Math.min(99,Math.max(5,Math.round(h))),b=Math.round((s-a)/a*45),g=Math.round((n-l)/l*38),x=Math.round((t-o)/o*25),w=Math.round((e-r)/r*15);let v="Healthy",y="text-status-healthy bg-status-healthy/10 border-status-healthy",k="OPTIMAL";m>=80?(v="Critical",y="text-status-critical bg-status-critical/10 border-status-critical",k="CRITICAL"):m>=50?(v="High",y="text-status-warning bg-status-warning/10 border-status-warning",k="HIGH RISK"):m>=25?(v="Medium",y="text-[#3b82f6] bg-[#3b82f6]/10 border-[#3b82f6]",k="WARNING"):(v="Healthy",y="text-status-healthy bg-status-healthy/10 border-status-healthy",k="HEALTHY");const _=[];return s>80?_.push({icon:"thermostat",title:"Cooling Loop & Heat Sink Inspection",desc:`Process temp is ${s}°C. Verify heat exchanger flow rate, clean radiator fin buildup, and check thermal compound.`}):s<=75&&a>80&&_.push({icon:"ac_unit",title:"Thermal Relief Achieved",desc:`Simulated cooling to ${s}°C drops heat-induced stress by ${Math.abs(b)}%. Continuous operational duty cycle is sustainable.`}),n>.6?_.push({icon:"build",title:"Immediate Tool / Bearing Replacement",desc:`Tool wear is at ${n} mm (> 0.60 mm threshold). Schedule cutting insert or spindle sleeve replacement before resuming batch.`}):n<=.45&&l>.6&&_.push({icon:"check_circle",title:"Fresh Tool Head Life Extension",desc:`Operating with sharp cutter / new bearing reduces frictional cutting resistance by ${Math.abs(g)}%.`}),t>480&&_.push({icon:"speed",title:"Load Derating & Feed Rate Adjustment",desc:`Torque load of ${t} Nm approaches magnetic saturation and mechanical strain limit. Derate feed velocity by 15-20%.`}),_.length===0&&_.push({icon:"verified",title:"Asset Operating In Nominal Envelope",desc:"All simulated process parameters lie well within manufacturer safety margins. No immediate intervention required."}),{simulatedRisk:m,baseRisk:c,status:v,statusClass:y,badgeText:k,shap:{temp:b,toolWear:g,torque:x,rpm:w},actions:_}}let Q=C[0],H=94.2,$=542,V=3820,z=.88,ys="baseline",_t=[];function ep(s=null){if(s){const c=C.find(d=>d.id===s);c&&(Q=c,H=c.telemetry.temp,$=c.telemetry.torque,V=c.telemetry.rpm,z=c.telemetry.toolWear,ys="baseline")}const t=Q.telemetry,e=Q.failureProbability,n=wn(H,$,V,z,{temp:t.temp,torque:t.torque,rpm:t.rpm,toolWear:t.toolWear,failureProbability:e}),i=+(n.simulatedRisk-e).toFixed(1),a=i<0,o=H!==t.temp||$!==t.torque||V!==t.rpm||z!==t.toolWear;return`
    <div class="px-3 sm:px-6 py-4 sm:py-6 max-w-[1440px] mx-auto space-y-4 sm:space-y-6">
      
      <!-- 01 / TOP SCENARIO LAB HEADER & PIPELINE -->
      <div class="predix-panel p-3.5 sm:p-4 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 sm:gap-4 border-l-4 border-l-secondary bg-surface-container-low/60">
        <div class="space-y-1 w-full lg:w-auto">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="text-[10px] font-mono text-secondary font-bold uppercase tracking-wider">PREDICTIVE SCENARIO LAB</span>
            <span class="text-on-surface-variant font-mono text-xs hidden xs:inline">•</span>
            <span class="text-xs font-bold text-on-surface font-mono tracking-wide uppercase">WHAT IF WE CHANGE THE MACHINE CONDITIONS?</span>
          </div>
          <!-- Signal Pipeline -->
          <div class="flex items-center gap-2 text-[10px] sm:text-[10.5px] font-mono font-semibold text-on-surface-variant pt-0.5 overflow-x-auto whitespace-nowrap hide-scrollbar flex-nowrap pb-1 lg:pb-0">
            <span class="text-secondary font-bold">CURRENT MACHINE</span>
            <span class="text-slate-600">→</span>
            <span class="text-sky-400 font-bold">CHANGE CONDITIONS</span>
            <span class="text-slate-600">→</span>
            <span class="text-amber-400 font-bold">RUN PREDICTION</span>
            <span class="text-slate-600">→</span>
            <span class="text-status-critical font-bold">COMPARE RISK</span>
            <span class="text-slate-600">→</span>
            <span class="text-status-healthy font-bold">CHOOSE ACTION</span>
          </div>
        </div>

        <!-- Engine & Scenario Status Badges -->
        <div class="flex flex-wrap items-center gap-2.5 font-mono text-[10.5px]">
          <span id="scenario-status-badge" class="px-3 py-1.5 rounded-lg border font-bold uppercase ${o?ys==="analyzed"?"text-secondary bg-secondary/15 border-secondary/30":"text-amber-400 bg-amber-500/15 border-amber-500/30":"text-status-healthy bg-status-healthy/15 border-status-healthy/30"}">
            ${o?ys==="analyzed"?"● SCENARIO ANALYZED":"● UNSAVED SCENARIO":"● BASELINE"}
          </span>
          <div class="px-3 py-1.5 rounded-lg bg-surface-container border border-border-subtle text-on-surface-variant">
            <span class="text-on-surface font-semibold">XGBoost v2.4.1</span> • <span class="text-secondary">Nonlinear Multi-variable Classifier</span>
          </div>
        </div>
      </div>

      <!-- MAIN LAB GRID: CONTROLS (LEFT) VS SIMULATION OUTCOMES (RIGHT) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        <!-- LEFT COLUMN: TARGET ASSET & SCENARIO ENGINEERING CONTROLS -->
        <div class="col-span-1 lg:col-span-5 flex flex-col gap-5">
          
          <!-- Target Machine Selector Card -->
          <div class="predix-panel p-5 space-y-3">
            <div class="flex items-center justify-between font-mono">
              <span class="font-label-md text-on-surface-variant uppercase text-[10px]">Target Asset Baseline</span>
              <span class="material-symbols-outlined text-secondary text-[18px]">precision_manufacturing</span>
            </div>
            
            <div>
              <select id="sim-machine-select" class="w-full bg-surface-container-low border border-border-subtle rounded-xl px-3.5 py-2 text-xs font-bold text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary cursor-pointer font-mono">
                ${C.map(c=>`
                  <option value="${c.id}" ${c.id===Q.id?"selected":""}>
                    ${c.id} - ${c.name} (${c.riskLevel} - ${c.failureProbability}%)
                  </option>
                `).join("")}
              </select>
            </div>

            <!-- Baseline Metrics Overview Strip -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-border-subtle text-xs font-mono">
              <div class="p-2 rounded bg-surface-container-low border border-border-subtle/50">
                <span class="text-[9px] text-on-surface-variant uppercase block">Temp</span>
                <span class="font-bold text-on-surface">${t.temp}°C</span>
              </div>
              <div class="p-2 rounded bg-surface-container-low border border-border-subtle/50">
                <span class="text-[9px] text-on-surface-variant uppercase block">Torque</span>
                <span class="font-bold text-on-surface">${t.torque} Nm</span>
              </div>
              <div class="p-2 rounded bg-surface-container-low border border-border-subtle/50">
                <span class="text-[9px] text-on-surface-variant uppercase block">RPM</span>
                <span class="font-bold text-on-surface">${t.rpm}</span>
              </div>
              <div class="p-2 rounded bg-surface-container-low border border-border-subtle/50">
                <span class="text-[9px] text-on-surface-variant uppercase block">Wear</span>
                <span class="font-bold text-on-surface">${t.toolWear} mm</span>
              </div>
            </div>
          </div>

          <!-- Scenario Engineering Sliders -->
          <div class="predix-panel p-5 flex flex-col gap-4 flex-1">
            <div class="flex items-center justify-between pb-2 border-b border-border-subtle font-mono">
              <div>
                <h3 class="text-xs font-bold text-on-surface uppercase tracking-wider">Scenario Parameter Sandbox</h3>
                <span class="text-[10px] text-on-surface-variant">Adjust stress variables to forecast non-linear risk</span>
              </div>
              <span class="material-symbols-outlined text-secondary text-[18px]">tune</span>
            </div>

            <div class="space-y-4 font-mono">
              
              <!-- Slider 1: Temperature -->
              <div>
                <div class="flex justify-between items-baseline mb-1 text-xs">
                  <label for="slider-temp" class="font-bold text-on-surface uppercase text-[11px]">Operating Temp</label>
                  <div class="flex items-center gap-2">
                    <span class="text-[10.5px] text-on-surface-variant">Baseline: <strong class="text-on-surface">${t.temp}°C</strong></span>
                    <span class="font-data-number text-sm font-bold text-secondary"><span id="val-temp">${H}</span>°C</span>
                  </div>
                </div>
                <input id="slider-temp" type="range" min="50" max="120" step="0.5" value="${H}" 
                       class="w-full h-1.5 bg-surface-container rounded-lg cursor-pointer accent-cyan-400"
                       aria-label="Operating Temperature Slider">
                <div class="flex justify-between text-[9.5px] text-on-surface-variant mt-1">
                  <span>Min: 50°C</span>
                  <span class="text-secondary font-semibold">Current Baseline: ${t.temp}°C</span>
                  <span>Max: 120°C</span>
                </div>
              </div>

              <!-- Slider 2: Torque Load -->
              <div>
                <div class="flex justify-between items-baseline mb-1 text-xs">
                  <label for="slider-torque" class="font-bold text-on-surface uppercase text-[11px]">Torque Load</label>
                  <div class="flex items-center gap-2">
                    <span class="text-[10.5px] text-on-surface-variant">Baseline: <strong class="text-on-surface">${t.torque} Nm</strong></span>
                    <span class="font-data-number text-sm font-bold text-secondary"><span id="val-torque">${$}</span> Nm</span>
                  </div>
                </div>
                <input id="slider-torque" type="range" min="300" max="600" step="5" value="${$}" 
                       class="w-full h-1.5 bg-surface-container rounded-lg cursor-pointer accent-cyan-400"
                       aria-label="Torque Load Slider">
                <div class="flex justify-between text-[9.5px] text-on-surface-variant mt-1">
                  <span>Min: 300 Nm</span>
                  <span class="text-secondary font-semibold">Current Baseline: ${t.torque} Nm</span>
                  <span>Max: 600 Nm</span>
                </div>
              </div>

              <!-- Slider 3: Rotational Speed (RPM) -->
              <div>
                <div class="flex justify-between items-baseline mb-1 text-xs">
                  <label for="slider-rpm" class="font-bold text-on-surface uppercase text-[11px]">Spindle / Rotor RPM</label>
                  <div class="flex items-center gap-2">
                    <span class="text-[10.5px] text-on-surface-variant">Baseline: <strong class="text-on-surface">${t.rpm} RPM</strong></span>
                    <span class="font-data-number text-sm font-bold text-secondary"><span id="val-rpm">${V}</span> RPM</span>
                  </div>
                </div>
                <input id="slider-rpm" type="range" min="2000" max="5000" step="50" value="${V}" 
                       class="w-full h-1.5 bg-surface-container rounded-lg cursor-pointer accent-cyan-400"
                       aria-label="Rotor Spindle Speed Slider">
                <div class="flex justify-between text-[9.5px] text-on-surface-variant mt-1">
                  <span>Min: 2000 RPM</span>
                  <span class="text-secondary font-semibold">Current Baseline: ${t.rpm} RPM</span>
                  <span>Max: 5000 RPM</span>
                </div>
              </div>

              <!-- Slider 4: Tool Wear Index -->
              <div>
                <div class="flex justify-between items-baseline mb-1 text-xs">
                  <label for="slider-wear" class="font-bold text-on-surface uppercase text-[11px]">Tool Wear / Sleeve Flank</label>
                  <div class="flex items-center gap-2">
                    <span class="text-[10.5px] text-on-surface-variant">Baseline: <strong class="text-on-surface">${t.toolWear} mm</strong></span>
                    <span class="font-data-number text-sm font-bold text-secondary"><span id="val-wear">${z.toFixed(2)}</span> mm</span>
                  </div>
                </div>
                <input id="slider-wear" type="range" min="0" max="100" step="1" value="${Math.round(z*100)}" 
                       class="w-full h-1.5 bg-surface-container rounded-lg cursor-pointer accent-cyan-400"
                       aria-label="Tool Wear Index Slider">
                <div class="flex justify-between text-[9.5px] text-on-surface-variant mt-1">
                  <span>0.00 mm (New)</span>
                  <span class="text-secondary font-semibold">Current Baseline: ${t.toolWear} mm</span>
                  <span>1.00 mm (Worn)</span>
                </div>
              </div>

            </div>

            <!-- Quick Engineering Presets -->
            <div class="pt-3 border-t border-border-subtle font-mono">
              <span class="font-label-md text-on-surface-variant uppercase text-[10px] block mb-2">Scenario Engineering Presets</span>
              <div class="grid grid-cols-2 gap-2 text-xs">
                <button id="btn-preset-cooling" class="p-2 rounded-lg bg-surface-container-low hover:bg-surface-container border border-border-subtle text-left transition-all">
                  <div class="font-bold text-on-surface flex items-center gap-1 text-[11px]">
                    <span class="material-symbols-outlined text-[14px] text-secondary">ac_unit</span>
                    <span>Coolant Flush</span>
                  </div>
                  <div class="text-[9.5px] text-on-surface-variant mt-0.5">Temp 62°C • Torque 380</div>
                </button>

                <button id="btn-preset-fresh-tool" class="p-2 rounded-lg bg-surface-container-low hover:bg-surface-container border border-border-subtle text-left transition-all">
                  <div class="font-bold text-on-surface flex items-center gap-1 text-[11px]">
                    <span class="material-symbols-outlined text-[14px] text-status-healthy">build</span>
                    <span>New Tool Insert</span>
                  </div>
                  <div class="text-[9.5px] text-on-surface-variant mt-0.5">Wear 0.10 mm (Sharp)</div>
                </button>

                <button id="btn-preset-derating" class="p-2 rounded-lg bg-surface-container-low hover:bg-surface-container border border-border-subtle text-left transition-all">
                  <div class="font-bold text-on-surface flex items-center gap-1 text-[11px]">
                    <span class="material-symbols-outlined text-[14px] text-amber-400">speed</span>
                    <span>Load Derate 20%</span>
                  </div>
                  <div class="text-[9.5px] text-on-surface-variant mt-0.5">Torque 360 • 2800 RPM</div>
                </button>

                <button id="btn-preset-stress" class="p-2 rounded-lg bg-surface-container-low hover:bg-surface-container border border-border-subtle text-left transition-all">
                  <div class="font-bold text-on-surface flex items-center gap-1 text-[11px]">
                    <span class="material-symbols-outlined text-[14px] text-status-critical">warning</span>
                    <span>Stress Envelope</span>
                  </div>
                  <div class="text-[9.5px] text-on-surface-variant mt-0.5">Temp 98°C • Wear 0.88</div>
                </button>
              </div>
            </div>

            <!-- Action Controls Row -->
            <div class="pt-3 border-t border-border-subtle flex items-center gap-2 font-mono mt-auto">
              <button id="btn-reset-sim" class="py-2 px-3 bg-surface-container hover:bg-surface-container-high text-on-surface font-semibold text-xs rounded-xl border border-border-subtle transition-all flex items-center gap-1.5" title="Reset all parameters to machine baseline">
                <span class="material-symbols-outlined text-[15px] text-secondary">restart_alt</span>
                <span>Reset</span>
              </button>
              <button id="btn-save-scenario" class="flex-1 py-2 px-3 bg-secondary/20 hover:bg-secondary/30 text-secondary border border-secondary/30 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-sm" title="Save this scenario in session comparison list">
                <span class="material-symbols-outlined text-[16px]">bookmark_add</span>
                <span>Save Scenario</span>
              </button>
            </div>

          </div>
        </div>

        <!-- RIGHT COLUMN: DUAL COMPARISON GAUGES, SHAP ATTRIBUTION & COMPARISON TABLE -->
        <div class="col-span-1 lg:col-span-7 flex flex-col gap-5">
          
          <!-- Dual Comparison Gauge Card -->
          <div class="predix-panel p-6 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
            
            <!-- Baseline State Gauge -->
            <div class="flex-1 flex flex-col items-center text-center font-mono">
              <span class="font-label-md text-on-surface-variant uppercase text-[10px] mb-2">Current Baseline State</span>
              <div class="relative w-32 h-32 flex items-center justify-center my-1">
                <svg class="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="42" fill="none" stroke="#161F33" stroke-width="8"></circle>
                  <circle cx="50" cy="50" r="42" fill="none" stroke="#EF4444" stroke-width="8" 
                          stroke-dasharray="263.9" stroke-dashoffset="${263.9*(1-e/100)}"></circle>
                </svg>
                <div class="flex flex-col items-center">
                  <span class="text-2xl font-data-number font-bold text-on-surface">${e}<span class="text-sm font-normal">%</span></span>
                </div>
              </div>
              <div class="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase bg-status-critical/15 text-status-critical border border-status-critical/30 mt-1">
                ${Q.riskLevel}
              </div>
            </div>

            <!-- Transition Arrow with Delta Shift -->
            <div class="hidden md:flex flex-col items-center justify-center text-on-surface-variant font-mono">
              <div class="w-10 h-10 rounded-full bg-surface-container border border-border-subtle flex items-center justify-center shadow-sm">
                <span class="material-symbols-outlined text-[22px] text-secondary">trending_flat</span>
              </div>
              <span id="sim-delta-badge" class="text-[10px] font-bold mt-1.5 px-2 py-0.5 rounded ${a?"text-status-healthy bg-status-healthy/15 border border-status-healthy/30":"text-status-critical bg-status-critical/15 border border-status-critical/30"}">
                ${a?"":"+"}${i}% Shift
              </span>
            </div>

            <!-- Simulated State Gauge (Reactive) -->
            <div class="flex-1 flex flex-col items-center text-center font-mono">
              <span class="font-label-md text-secondary uppercase text-[10px] mb-2">Simulated Outcome</span>
              <div class="relative w-36 h-36 flex items-center justify-center my-1">
                <svg class="absolute inset-0 w-full h-full -rotate-90 drop-shadow-[0_0_12px_rgba(0,0,0,0.5)]" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="42" fill="none" stroke="#161F33" stroke-width="8"></circle>
                  <circle id="sim-gauge-circle" cx="50" cy="50" r="42" fill="none" 
                          class="gauge-circle ${n.simulatedRisk>=80?"stroke-status-critical":n.simulatedRisk>=50?"stroke-status-warning":"stroke-status-healthy"}" 
                          stroke-width="9" 
                          stroke-dasharray="263.9" 
                          stroke-dashoffset="${263.9*(1-n.simulatedRisk/100)}"></circle>
                </svg>
                <div class="flex flex-col items-center">
                  <span id="sim-risk-display" class="text-3xl font-data-number font-bold text-on-surface">${n.simulatedRisk}<span class="text-base font-normal">%</span></span>
                </div>
              </div>
              <div id="sim-risk-badge" class="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase border-l-2 ${n.statusClass} mt-1">
                ${n.badgeText}
              </div>
            </div>

          </div>

          <!-- Before / After Risk Bar Comparison -->
          <div class="predix-panel p-4 space-y-2 font-mono text-xs">
            <div class="flex items-center justify-between">
              <span class="font-label-md text-on-surface-variant uppercase text-[10px]">Before / After Risk Transformation</span>
              <span class="text-[10px] text-on-surface-variant">NONLINEAR RISK MAPPING</span>
            </div>
            
            <div class="space-y-1.5">
              <div class="flex items-center gap-3">
                <span class="w-20 text-[10px] text-on-surface-variant">BASELINE:</span>
                <div class="flex-1 bg-surface-container h-2 rounded-full overflow-hidden">
                  <div class="bg-status-critical h-full rounded-full" style="width: ${e}%"></div>
                </div>
                <span class="w-12 text-right font-bold text-status-critical">${e}%</span>
              </div>

              <div class="flex items-center gap-3">
                <span class="w-20 text-[10px] text-secondary font-bold">SCENARIO:</span>
                <div class="flex-1 bg-surface-container h-2 rounded-full overflow-hidden">
                  <div id="sim-comparison-bar" class="h-full rounded-full ${n.simulatedRisk>=80?"bg-status-critical":n.simulatedRisk>=50?"bg-status-warning":"bg-status-healthy"}" style="width: ${n.simulatedRisk}%"></div>
                </div>
                <span id="sim-comparison-val" class="w-12 text-right font-bold ${n.simulatedRisk>=80?"text-status-critical":n.simulatedRisk>=50?"text-status-warning":"text-status-healthy"}">${n.simulatedRisk}%</span>
              </div>
            </div>
          </div>

          <!-- SHAP Explainer & Prescriptive Actions Card -->
          <div class="predix-panel p-5 space-y-4">
            <div class="flex items-center justify-between pb-2 border-b border-border-subtle font-mono">
              <div>
                <h3 class="text-xs font-bold text-on-surface uppercase tracking-wider">Why Did The Risk Change?</h3>
                <span class="text-[10px] text-on-surface-variant">TreeSHAP feature contributions relative to current baseline</span>
              </div>
              <span class="material-symbols-outlined text-secondary text-[18px]">psychology</span>
            </div>

            <!-- Dynamic Deterministic Explanation Summary -->
            <div id="sim-explanation-summary" class="p-3 rounded-xl bg-surface-container-low border border-border-subtle text-xs font-mono text-on-surface-variant">
              ${ko(t,H,$,V,z,i)}
            </div>

            <div class="grid grid-cols-1 md:grid-cols-12 gap-5">
              <!-- Prescriptive Actions List -->
              <div class="col-span-1 md:col-span-7 space-y-2.5">
                <h4 class="text-[10px] font-bold text-on-surface uppercase tracking-wider font-mono">Prescriptive Recommendations</h4>
                <div id="sim-actions-container" class="space-y-2 text-xs font-mono">
                  ${So(n.actions)}
                </div>
              </div>

              <!-- Feature SHAP Contribution Bars -->
              <div class="col-span-1 md:col-span-5 space-y-2.5">
                <h4 class="text-[10px] font-bold text-on-surface uppercase tracking-wider font-mono">Feature Risk Attribution</h4>
                <div id="sim-shap-container" class="space-y-2.5 text-xs font-mono">
                  ${To(n.shap)}
                </div>
              </div>
            </div>
          </div>

          <!-- Session Saved Scenarios Comparison Table -->
          <div class="predix-panel overflow-hidden flex flex-col font-mono text-xs">
            <div class="p-4 bg-surface-container-low/60 border-b border-border-subtle flex items-center justify-between">
              <div>
                <h3 class="text-xs font-bold text-on-surface uppercase tracking-wider">Scenario Session Comparison</h3>
                <span class="text-[10px] text-on-surface-variant">Compare up to 3 saved sandbox iterations against baseline</span>
              </div>
              <span class="text-[10px] text-secondary font-semibold" id="saved-count-label">${_t.length} / 3 SAVED</span>
            </div>

            <div class="overflow-x-auto w-full">
              <table class="w-full text-left border-collapse min-w-[500px]">
                <thead>
                  <tr class="bg-surface-container-low/80 font-label-md text-on-surface-variant uppercase text-[9.5px] border-b border-border-subtle">
                    <th class="py-2.5 px-4">Scenario</th>
                    <th class="py-2.5 px-4">Conditions</th>
                    <th class="py-2.5 px-4">Risk</th>
                    <th class="py-2.5 px-4">Delta</th>
                    <th class="py-2.5 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody id="saved-scenarios-body" class="divide-y divide-border-subtle text-[11px]">
                  <tr class="bg-surface-container-low/40">
                    <td class="py-2.5 px-4 font-bold text-on-surface">Baseline (${Q.id})</td>
                    <td class="py-2.5 px-4 text-on-surface-variant">${t.temp}°C • ${t.torque}Nm • ${t.toolWear}mm</td>
                    <td class="py-2.5 px-4 font-bold text-status-critical">${e}%</td>
                    <td class="py-2.5 px-4 text-on-surface-variant">—</td>
                    <td class="py-2.5 px-4 text-right text-slate-500 font-semibold">Active</td>
                  </tr>
                  ${_t.map((c,d)=>`
                    <tr class="hover:bg-surface-container-low transition-colors">
                      <td class="py-2.5 px-4 font-bold text-secondary">${c.name}</td>
                      <td class="py-2.5 px-4 text-on-surface-variant">${c.temp}°C • ${c.torque}Nm • ${c.wear}mm</td>
                      <td class="py-2.5 px-4 font-bold ${c.risk>=80?"text-status-critical":c.risk>=50?"text-status-warning":"text-status-healthy"}">${c.risk}%</td>
                      <td class="py-2.5 px-4 font-bold ${c.delta<0?"text-status-healthy":"text-status-critical"}">${c.delta>0?"+":""}${c.delta}%</td>
                      <td class="py-2.5 px-4 text-right">
                        <button data-apply-scenario="${d}" class="btn-apply-sc px-2 py-0.5 rounded bg-secondary/15 hover:bg-secondary/30 text-secondary text-[10px] mr-1">Apply</button>
                        <button data-delete-scenario="${d}" class="btn-delete-sc px-2 py-0.5 rounded bg-status-critical/15 hover:bg-status-critical/30 text-status-critical text-[10px]">✕</button>
                      </td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </div>
  `}function ko(s,t,e,n,i,a){const o=a<0,r=+(t-s.temp).toFixed(1),l=+(i-s.toolWear).toFixed(2),c=+(e-s.torque).toFixed(0),d=[];return Math.abs(r)>2&&d.push(r<0?`operating temperature reduced by ${Math.abs(r)}°C`:`operating temperature increased by ${r}°C`),Math.abs(l)>.05&&d.push(l<0?`tool wear reset with fresh cutting edge (-${Math.abs(l)} mm)`:`excessive tool wear accumulation (+${l} mm)`),Math.abs(c)>20&&d.push(c<0?`motor torque load derated by ${Math.abs(c)} Nm`:`torque demand elevated by ${c} Nm`),d.length===0?`<strong>Baseline Envelope:</strong> Parameters are currently matching recorded asset operating baseline (${s.temp}°C, ${s.torque} Nm, ${s.toolWear} mm).`:`<strong>Risk ${o?"Reduction":"Escalation"} Driver:</strong> Risk changed by <strong class="${o?"text-status-healthy":"text-status-critical"}">${a>0?"+":""}${a}%</strong> primarily because ${d.join(", and ")}.`}function So(s){return s.map(t=>`
    <div class="p-2.5 rounded-lg bg-surface-container-low/60 border border-border-subtle flex items-start gap-2.5 hover:bg-surface-container-low transition-colors">
      <div class="w-6 h-6 rounded-md bg-secondary/15 text-secondary border border-secondary/30 flex items-center justify-center shrink-0 mt-0.5">
        <span class="material-symbols-outlined text-[15px]">${t.icon}</span>
      </div>
      <div>
        <h5 class="font-bold text-[11px] text-on-surface">${t.title}</h5>
        <p class="text-[10.5px] text-on-surface-variant mt-0.5 leading-relaxed font-sans">${t.desc}</p>
      </div>
    </div>
  `).join("")}function To(s){const t=(e,n)=>{const i=e<0,a=i?"text-status-healthy":e===0?"text-on-surface-variant":"text-status-critical",o=i?"bg-status-healthy shadow-[0_0_6px_#10B981]":"bg-status-critical shadow-[0_0_6px_#EF4444]",r=e>0?`+${e}%`:`${e}%`;return`
      <div>
        <div class="flex justify-between font-mono text-[10.5px] mb-1">
          <span class="text-on-surface">${n}</span>
          <span class="${a} font-bold">${r} Impact</span>
        </div>
        <div class="w-full h-1.5 bg-surface-container rounded-full overflow-hidden flex ${i?"justify-end":"justify-start"}">
          <div class="shap-bar-fill h-full ${o} rounded-full" style="width: ${Math.min(100,Math.abs(e)*2)}%"></div>
        </div>
      </div>
    `};return`
    ${t(s.temp,"Temperature")}
    ${t(s.toolWear,"Tool Wear")}
    ${t(s.torque,"Torque Load")}
    ${t(s.rpm,"Rotor Speed")}
  `}function sp(){var n,i,a,o,r,l,c,d,u,p,f;const s=()=>{const h=Q.telemetry,m=Q.failureProbability,b=wn(H,$,V,z,{temp:h.temp,torque:h.torque,rpm:h.rpm,toolWear:h.toolWear,failureProbability:m}),g=+(b.simulatedRisk-m).toFixed(1),x=g<0,w=document.getElementById("sim-risk-display");w&&(w.innerHTML=`${b.simulatedRisk}<span class="text-base font-normal">%</span>`);const v=document.getElementById("sim-risk-badge");v&&(v.className=`px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase border-l-2 ${b.statusClass} mt-1`,v.innerText=b.badgeText);const y=document.getElementById("sim-delta-badge");y&&(y.className=`text-[10px] font-mono font-bold mt-1.5 px-2 py-0.5 rounded ${x?"text-status-healthy bg-status-healthy/15 border border-status-healthy/30":"text-status-critical bg-status-critical/15 border border-status-critical/30"}`,y.innerText=`${x?"":"+"}${g}% Shift`);const k=document.getElementById("sim-comparison-bar"),_=document.getElementById("sim-comparison-val");k&&_&&(k.style.width=`${b.simulatedRisk}%`,k.className=`h-full rounded-full ${b.simulatedRisk>=80?"bg-status-critical":b.simulatedRisk>=50?"bg-status-warning":"bg-status-healthy"}`,_.innerText=`${b.simulatedRisk}%`,_.className=`w-12 text-right font-bold ${b.simulatedRisk>=80?"text-status-critical":b.simulatedRisk>=50?"text-status-warning":"text-status-healthy"}`);const S=document.getElementById("sim-gauge-circle");if(S){const Y=b.simulatedRisk>=80?"#EF4444":b.simulatedRisk>=50?"#F59E0B":"#10B981";S.setAttribute("stroke",Y),S.setAttribute("stroke-dashoffset",`${263.9*(1-b.simulatedRisk/100)}`)}const E=document.getElementById("sim-explanation-summary");E&&(E.innerHTML=ko(h,H,$,V,z,g));const M=document.getElementById("sim-actions-container");M&&(M.innerHTML=So(b.actions));const I=document.getElementById("sim-shap-container");I&&(I.innerHTML=To(b.shap));const P=H!==h.temp||$!==h.torque||V!==h.rpm||z!==h.toolWear;ys=P?"analyzed":"baseline";const G=document.getElementById("scenario-status-badge");G&&(G.innerText=P?"● SCENARIO ANALYZED":"● BASELINE",G.className=`px-3 py-1.5 rounded-lg border font-bold uppercase ${P?"text-secondary bg-secondary/15 border-secondary/30":"text-status-healthy bg-status-healthy/15 border-status-healthy/30"}`)};(n=document.getElementById("sim-machine-select"))==null||n.addEventListener("change",h=>{const m=C.find(b=>b.id===h.target.value);if(m){Q=m,H=m.telemetry.temp,$=m.telemetry.torque,V=m.telemetry.rpm,z=m.telemetry.toolWear;const b=document.getElementById("slider-temp"),g=document.getElementById("slider-torque"),x=document.getElementById("slider-rpm"),w=document.getElementById("slider-wear");b&&(b.value=H),g&&(g.value=$),x&&(x.value=V),w&&(w.value=Math.round(z*100)),document.getElementById("val-temp").innerText=H,document.getElementById("val-torque").innerText=$,document.getElementById("val-rpm").innerText=V,document.getElementById("val-wear").innerText=z.toFixed(2),s()}}),(i=document.getElementById("slider-temp"))==null||i.addEventListener("input",h=>{H=parseFloat(h.target.value),document.getElementById("val-temp").innerText=H,s()}),(a=document.getElementById("slider-torque"))==null||a.addEventListener("input",h=>{$=parseFloat(h.target.value),document.getElementById("val-torque").innerText=$,s()}),(o=document.getElementById("slider-rpm"))==null||o.addEventListener("input",h=>{V=parseFloat(h.target.value),document.getElementById("val-rpm").innerText=V,s()}),(r=document.getElementById("slider-wear"))==null||r.addEventListener("input",h=>{z=parseFloat(h.target.value)/100,document.getElementById("val-wear").innerText=z.toFixed(2),s()}),(l=document.getElementById("btn-preset-cooling"))==null||l.addEventListener("click",()=>{H=62,$=380,document.getElementById("slider-temp").value=H,document.getElementById("slider-torque").value=$,document.getElementById("val-temp").innerText=H,document.getElementById("val-torque").innerText=$,s(),B("Applied Coolant Flush Preset (Temp: 62°C, Torque: 380 Nm)","info")}),(c=document.getElementById("btn-preset-fresh-tool"))==null||c.addEventListener("click",()=>{z=.1,document.getElementById("slider-wear").value=10,document.getElementById("val-wear").innerText="0.10",s(),B("Applied Fresh Tool Insert Preset (Wear: 0.10 mm)","info")}),(d=document.getElementById("btn-preset-derating"))==null||d.addEventListener("click",()=>{$=360,V=2800,document.getElementById("slider-torque").value=$,document.getElementById("slider-rpm").value=V,document.getElementById("val-torque").innerText=$,document.getElementById("val-rpm").innerText=V,s(),B("Applied 20% Load Derating Preset (Torque: 360 Nm, RPM: 2800)","info")}),(u=document.getElementById("btn-preset-stress"))==null||u.addEventListener("click",()=>{H=98,$=560,z=.88,document.getElementById("slider-temp").value=H,document.getElementById("slider-torque").value=$,document.getElementById("slider-wear").value=88,document.getElementById("val-temp").innerText=H,document.getElementById("val-torque").innerText=$,document.getElementById("val-wear").innerText="0.88",s(),B("Applied Maximum Stress Envelope Preset","warning")}),(p=document.getElementById("btn-reset-sim"))==null||p.addEventListener("click",()=>{H=Q.telemetry.temp,$=Q.telemetry.torque,V=Q.telemetry.rpm,z=Q.telemetry.toolWear,document.getElementById("slider-temp").value=H,document.getElementById("slider-torque").value=$,document.getElementById("slider-rpm").value=V,document.getElementById("slider-wear").value=Math.round(z*100),document.getElementById("val-temp").innerText=H,document.getElementById("val-torque").innerText=$,document.getElementById("val-rpm").innerText=V,document.getElementById("val-wear").innerText=z.toFixed(2),s(),B(`Parameters reset to ${Q.id} baseline`,"info")}),(f=document.getElementById("btn-save-scenario"))==null||f.addEventListener("click",()=>{_t.length>=3&&_t.shift();const h=Q.telemetry,m=Q.failureProbability,b=wn(H,$,V,z,{temp:h.temp,torque:h.torque,rpm:h.rpm,toolWear:h.toolWear,failureProbability:m}),g=+(b.simulatedRisk-m).toFixed(1),x=`Scenario ${String.fromCharCode(65+_t.length)}`;_t.push({name:x,temp:H,torque:$,rpm:V,wear:z.toFixed(2),risk:b.simulatedRisk,delta:g}),B(`Saved ${x} to comparison list!`,"success"),t()});const t=()=>{const h=document.getElementById("saved-scenarios-body"),m=document.getElementById("saved-count-label");if(m&&(m.innerText=`${_t.length} / 3 SAVED`),!h)return;const b=Q.failureProbability,g=Q.telemetry;h.innerHTML=`
      <tr class="bg-surface-container-low/40">
        <td class="py-2.5 px-4 font-bold text-on-surface">Baseline (${Q.id})</td>
        <td class="py-2.5 px-4 text-on-surface-variant">${g.temp}°C • ${g.torque}Nm • ${g.toolWear}mm</td>
        <td class="py-2.5 px-4 font-bold text-status-critical">${b}%</td>
        <td class="py-2.5 px-4 text-on-surface-variant">—</td>
        <td class="py-2.5 px-4 text-right text-slate-500 font-semibold">Active</td>
      </tr>
      ${_t.map((x,w)=>`
        <tr class="hover:bg-surface-container-low transition-colors">
          <td class="py-2.5 px-4 font-bold text-secondary">${x.name}</td>
          <td class="py-2.5 px-4 text-on-surface-variant">${x.temp}°C • ${x.torque}Nm • ${x.wear}mm</td>
          <td class="py-2.5 px-4 font-bold ${x.risk>=80?"text-status-critical":x.risk>=50?"text-status-warning":"text-status-healthy"}">${x.risk}%</td>
          <td class="py-2.5 px-4 font-bold ${x.delta<0?"text-status-healthy":"text-status-critical"}">${x.delta>0?"+":""}${x.delta}%</td>
          <td class="py-2.5 px-4 text-right">
            <button data-apply-scenario="${w}" class="btn-apply-sc px-2 py-0.5 rounded bg-secondary/15 hover:bg-secondary/30 text-secondary text-[10px] mr-1">Apply</button>
            <button data-delete-scenario="${w}" class="btn-delete-sc px-2 py-0.5 rounded bg-status-critical/15 hover:bg-status-critical/30 text-status-critical text-[10px]">✕</button>
          </td>
        </tr>
      `).join("")}
    `,e()},e=()=>{document.querySelectorAll(".btn-apply-sc").forEach(h=>{h.addEventListener("click",()=>{const m=parseInt(h.getAttribute("data-apply-scenario"),10),b=_t[m];b&&(H=b.temp,$=b.torque,V=b.rpm,z=parseFloat(b.wear),document.getElementById("slider-temp").value=H,document.getElementById("slider-torque").value=$,document.getElementById("slider-rpm").value=V,document.getElementById("slider-wear").value=Math.round(z*100),document.getElementById("val-temp").innerText=H,document.getElementById("val-torque").innerText=$,document.getElementById("val-rpm").innerText=V,document.getElementById("val-wear").innerText=z.toFixed(2),s(),B(`Applied parameters from ${b.name}`,"info"))})}),document.querySelectorAll(".btn-delete-sc").forEach(h=>{h.addEventListener("click",()=>{const m=parseInt(h.getAttribute("data-delete-scenario"),10);_t.splice(m,1),t(),B("Scenario removed from comparison list","info")})})};e()}const Ee={models:[{id:"xgb-v2",name:"XGBoost Gradient Boosted Classifier (v2.4.1)",status:"PRODUCTION ACTIVE",rocAuc:.984,prAuc:.952,f1Score:.938,precision:.942,recall:.961,accuracy:.976,latencyMs:6.8,datasetSize:"10,000 Samples",featuresCount:14,lastTrained:"2026-08-20 03:00 UTC"},{id:"rf-ensemble",name:"Random Forest Ensemble (v1.9.0)",status:"BENCHMARK STANDBY",rocAuc:.962,prAuc:.918,f1Score:.904,precision:.91,recall:.925,accuracy:.954,latencyMs:14.2,datasetSize:"10,000 Samples",featuresCount:14,lastTrained:"2026-08-15 02:30 UTC"},{id:"lstm-rul",name:"Deep Temporal LSTM RUL Network (v3.0.2)",status:"TIME-SERIES RUL ONLY",rocAuc:.971,prAuc:.94,f1Score:.922,precision:.931,recall:.948,accuracy:.968,latencyMs:22.4,datasetSize:"45,000 Sequence Windows",featuresCount:21,lastTrained:"2026-08-18 12:00 UTC"}],confusionMatrix:{truePositive:482,falsePositive:18,falseNegative:12,trueNegative:4510},globalFeatureImportance:[{feature:"Vibration Amplitude (mm/s)",importance:34.2,description:"Mechanical harmonic imbalance and bearing raceway faults"},{feature:"Process Temperature (°C)",importance:26.5,description:"Thermodynamic heat dissipation efficiency"},{feature:"Tool Wear Index (mm)",importance:19.1,description:"Micro-cutting edge degradation and friction factor"},{feature:"Torque Load (Nm)",importance:12.8,description:"Drive motor strain and mechanical overload resistance"},{feature:"Air / Environmental Temp (°C)",importance:4.6,description:"Ambient thermal baseline variations"},{feature:"Rotational Speed (RPM)",importance:2.8,description:"Spindle speed variation stability"}],failureModeMetrics:[{mode:"Heat Dissipation Failure (HDF)",count:112,precision:95.8,recall:97.2},{mode:"Tool Wear Failure (TWF)",count:145,precision:94.1,recall:95.5},{mode:"Overstrain Failure (OSF)",count:98,precision:96,recall:94.8},{mode:"Power Failure (PWF)",count:86,precision:97.4,recall:98.1},{mode:"Random Failure (RNF)",count:19,precision:82.5,recall:81}]};function np(){const s=Ee.models[0],t=Ee.confusionMatrix;return`
    <div class="px-3 sm:px-6 py-4 sm:py-6 max-w-[1440px] mx-auto space-y-4 sm:space-y-6">
      
      <!-- 01 / MODEL STATUS HEADER & PIPELINE -->
      <div class="predix-panel p-3.5 sm:p-5 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 sm:gap-4 border-l-4 border-l-secondary bg-surface-container-low/60">
        <div class="space-y-1 w-full lg:w-auto">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="text-[10px] font-mono text-secondary font-bold uppercase tracking-wider">01 / MODEL INTELLIGENCE</span>
            <span class="text-on-surface-variant font-mono text-xs hidden xs:inline">•</span>
            <span class="text-xs font-bold text-on-surface font-mono tracking-wide uppercase">UNDERSTAND HOW THE PREDICTION ENGINE PERFORMS</span>
          </div>
          <!-- Real Decision Pipeline -->
          <div class="flex items-center gap-2 text-[10px] sm:text-[10.5px] font-mono font-semibold text-on-surface-variant pt-0.5 overflow-x-auto whitespace-nowrap hide-scrollbar flex-nowrap pb-1 lg:pb-0">
            <span class="text-secondary font-bold">1. TELEMETRY INGESTION (100 Hz)</span>
            <span class="text-slate-600">→</span>
            <span class="text-sky-400 font-bold">2. FEATURE EXTRACTION</span>
            <span class="text-slate-600">→</span>
            <span class="text-amber-400 font-bold">3. XGBOOST INFERENCE</span>
            <span class="text-slate-600">→</span>
            <span class="text-status-critical font-bold">4. NONLINEAR RISK</span>
            <span class="text-slate-600">→</span>
            <span class="text-status-healthy font-bold">5. PRESCRIPTIVE SOP</span>
          </div>
        </div>

        <!-- Model Status Metadata & Retrain Button -->
        <div class="flex flex-wrap items-center gap-2.5 font-mono text-xs">
          <div class="px-3 py-1.5 rounded-lg bg-status-healthy/15 border border-status-healthy/30 flex items-center gap-2">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-healthy opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-status-healthy"></span>
            </span>
            <span class="text-[10.5px] font-bold text-status-healthy uppercase">PRODUCTION ACTIVE</span>
          </div>
          <button id="btn-retrain-model" class="px-3.5 py-1.5 bg-secondary/20 hover:bg-secondary/30 text-secondary border border-secondary/40 font-bold text-xs rounded-lg transition-all flex items-center gap-1.5 shadow-[0_0_10px_rgba(6,182,212,0.15)]">
            <span class="material-symbols-outlined text-[16px]">autorenew</span>
            <span>Validate Telemetry Batch</span>
          </button>
        </div>
      </div>

      <!-- 02 / MODEL KPI STRIP (WITH COUNT-UP ANIMATION) -->
      <div>
        <div class="flex items-center justify-between mb-2 font-mono">
          <span class="font-label-md text-on-surface-variant uppercase text-[10px]">Holistic Validation Metrics (Holdout Test Split N=5,022)</span>
          <span class="text-[10px] text-secondary font-semibold">10,000 SAMPLES • 14 ENGINEERED FEATURES</span>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 font-mono">
          
          <div class="predix-panel p-3.5 flex flex-col justify-between hover:border-slate-600 transition-colors">
            <span class="font-label-md text-on-surface-variant uppercase text-[9.5px]">ROC-AUC Score</span>
            <div class="text-2xl font-data-number font-bold text-status-healthy mt-1.5">
              <span class="count-up-metric" data-target="${s.rocAuc}" data-format="decimal" data-decimals="3">0.000</span>
            </div>
            <div class="text-[9.5px] text-on-surface-variant mt-1 border-t border-border-subtle/50 pt-1">Separation Metric</div>
          </div>

          <div class="predix-panel p-3.5 flex flex-col justify-between hover:border-slate-600 transition-colors">
            <span class="font-label-md text-on-surface-variant uppercase text-[9.5px]">Precision Rate</span>
            <div class="text-2xl font-data-number font-bold text-on-surface mt-1.5">
              <span class="count-up-metric" data-target="${(s.precision*100).toFixed(1)}" data-format="decimal" data-suffix="%">0.0%</span>
            </div>
            <div class="text-[9.5px] text-on-surface-variant mt-1 border-t border-border-subtle/50 pt-1">Min False Alarms</div>
          </div>

          <div class="predix-panel p-3.5 flex flex-col justify-between hover:border-slate-600 transition-colors">
            <span class="font-label-md text-on-surface-variant uppercase text-[9.5px]">Recall / Sensitivity</span>
            <div class="text-2xl font-data-number font-bold text-on-surface mt-1.5">
              <span class="count-up-metric" data-target="${(s.recall*100).toFixed(1)}" data-format="decimal" data-suffix="%">0.0%</span>
            </div>
            <div class="text-[9.5px] text-on-surface-variant mt-1 border-t border-border-subtle/50 pt-1">Failure Catch Rate</div>
          </div>

          <div class="predix-panel p-3.5 flex flex-col justify-between hover:border-slate-600 transition-colors">
            <span class="font-label-md text-on-surface-variant uppercase text-[9.5px]">F1-Score</span>
            <div class="text-2xl font-data-number font-bold text-on-surface mt-1.5">
              <span class="count-up-metric" data-target="${s.f1Score}" data-format="decimal" data-decimals="3">0.000</span>
            </div>
            <div class="text-[9.5px] text-on-surface-variant mt-1 border-t border-border-subtle/50 pt-1">Harmonic Balance</div>
          </div>

          <div class="predix-panel p-3.5 flex flex-col justify-between hover:border-slate-600 transition-colors">
            <span class="font-label-md text-on-surface-variant uppercase text-[9.5px]">Global Accuracy</span>
            <div class="text-2xl font-data-number font-bold text-on-surface mt-1.5">
              <span class="count-up-metric" data-target="${(s.accuracy*100).toFixed(1)}" data-format="decimal" data-suffix="%">0.0%</span>
            </div>
            <div class="text-[9.5px] text-on-surface-variant mt-1 border-t border-border-subtle/50 pt-1">Total Accuracy</div>
          </div>

          <div class="predix-panel p-3.5 flex flex-col justify-between hover:border-slate-600 transition-colors">
            <span class="font-label-md text-on-surface-variant uppercase text-[9.5px]">Inference Latency</span>
            <div class="text-2xl font-data-number font-bold text-secondary mt-1.5">
              <span class="count-up-metric" data-target="${s.latencyMs}" data-format="decimal">0.0</span> <span class="text-xs font-normal text-on-surface-variant">ms</span>
            </div>
            <div class="text-[9.5px] text-on-surface-variant mt-1 border-t border-border-subtle/50 pt-1">Edge PLC Bench</div>
          </div>

        </div>
      </div>

      <!-- 03 / OPERATIONAL METRIC EXPLANATION GUIDE -->
      <div class="predix-panel p-4 bg-surface-container-low/60 border border-border-subtle font-mono text-xs">
        <span class="font-label-md text-secondary uppercase text-[10px] block mb-2 font-bold">Operational Metric Decision Guide</span>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-3 text-[11px]">
          <div class="p-2.5 rounded-lg bg-surface border border-border-subtle/60">
            <strong class="text-status-healthy block mb-1">ROC-AUC (0.984)</strong>
            <p class="text-on-surface-variant font-sans text-[10.5px] leading-relaxed">Measures model separation power between impending mechanical failure and healthy state across all probability thresholds.</p>
          </div>
          <div class="p-2.5 rounded-lg bg-surface border border-border-subtle/60">
            <strong class="text-sky-400 block mb-1">Precision (94.2%)</strong>
            <p class="text-on-surface-variant font-sans text-[10.5px] leading-relaxed">When a failure alert is generated, 94.2% of instances represent a genuine anomaly requiring physical maintenance (minimal false alarms).</p>
          </div>
          <div class="p-2.5 rounded-lg bg-surface border border-border-subtle/60">
            <strong class="text-amber-400 block mb-1">Recall (96.1%)</strong>
            <p class="text-on-surface-variant font-sans text-[10.5px] leading-relaxed">The model catches 96.1% of all physical failure progressions prior to catastrophic unplanned downtime.</p>
          </div>
          <div class="p-2.5 rounded-lg bg-surface border border-border-subtle/60">
            <strong class="text-secondary block mb-1">F1-Score (0.938)</strong>
            <p class="text-on-surface-variant font-sans text-[10.5px] leading-relaxed">The harmonic mean balancing precision and recall under extreme industrial imbalance (rare failure events).</p>
          </div>
        </div>
      </div>

      <!-- 04 / CONFUSION MATRIX & GLOBAL FEATURE IMPORTANCE GRID -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        <!-- Confusion Matrix Panel (2x2 Grid) -->
        <div class="col-span-1 lg:col-span-5 predix-panel p-6 flex flex-col justify-between font-mono">
          <div>
            <div class="flex items-center justify-between mb-1">
              <h3 class="text-xs font-bold text-on-surface uppercase tracking-wider">Confusion Matrix (Validation Set)</h3>
              <span class="text-[10px] text-on-surface-variant font-semibold">N = 5,022 Samples</span>
            </div>
            <p class="text-[11px] text-on-surface-variant font-sans mb-3">Classification breakdown of predicted failure alarms vs nominal operational ground truth</p>
          </div>

          <!-- 2x2 Matrix Visual -->
          <div class="grid grid-cols-2 gap-3 my-2 text-center">
            <!-- True Positive -->
            <div class="p-3.5 rounded-xl bg-status-healthy/10 border border-status-healthy/30 flex flex-col items-center">
              <span class="text-[9.5px] font-bold text-status-healthy uppercase">True Positive (TP)</span>
              <div class="text-2xl font-data-number font-bold text-status-healthy mt-1">${t.truePositive}</div>
              <span class="text-[10px] text-on-surface-variant mt-0.5">Failures Caught Correctly</span>
            </div>

            <!-- False Positive -->
            <div class="p-3.5 rounded-xl bg-status-warning/10 border border-status-warning/30 flex flex-col items-center">
              <span class="text-[9.5px] font-bold text-status-warning uppercase">False Positive (FP)</span>
              <div class="text-2xl font-data-number font-bold text-status-warning mt-1">${t.falsePositive}</div>
              <span class="text-[10px] text-on-surface-variant mt-0.5">False Alarms (Safe Unit)</span>
            </div>

            <!-- False Negative -->
            <div class="p-3.5 rounded-xl bg-status-critical/10 border border-status-critical/30 flex flex-col items-center">
              <span class="text-[9.5px] font-bold text-status-critical uppercase">False Negative (FN)</span>
              <div class="text-2xl font-data-number font-bold text-status-critical mt-1">${t.falseNegative}</div>
              <span class="text-[10px] text-on-surface-variant mt-0.5">Missed Anomalies</span>
            </div>

            <!-- True Negative -->
            <div class="p-3.5 rounded-xl bg-surface-container-low border border-border-subtle flex flex-col items-center">
              <span class="text-[9.5px] font-bold text-on-surface-variant uppercase">True Negative (TN)</span>
              <div class="text-2xl font-data-number font-bold text-on-surface mt-1">${t.trueNegative}</div>
              <span class="text-[10px] text-on-surface-variant mt-0.5">Nominal Operating Cycles</span>
            </div>
          </div>

          <div class="pt-3 border-t border-border-subtle flex justify-between text-xs text-on-surface-variant">
            <span>Type I Error (FP Rate): <strong class="text-status-warning">0.4%</strong></span>
            <span>Type II Error (FN Rate): <strong class="text-status-critical">2.4%</strong></span>
          </div>
        </div>

        <!-- Global Feature Importance Ranking (TreeSHAP Gain) -->
        <div class="col-span-1 lg:col-span-7 predix-panel p-6 flex flex-col justify-between font-mono">
          <div>
            <div class="flex items-center justify-between mb-1">
              <div>
                <h3 class="text-xs font-bold text-on-surface uppercase tracking-wider">Global Feature Importance Ranking</h3>
                <p class="text-[11px] text-on-surface-variant font-sans">Relative influence of sensor variables across 10,000 Tree Splits</p>
              </div>
              <span class="text-[9.5px] text-secondary font-bold uppercase bg-secondary/15 px-2 py-0.5 rounded border border-secondary/30">TreeSHAP Gain</span>
            </div>
          </div>

          <div class="space-y-3 my-3">
            ${Ee.globalFeatureImportance.map((e,n)=>`
              <div class="text-xs p-2 rounded-lg bg-surface-container-low/50 border border-border-subtle/50 space-y-1">
                <div class="flex items-center justify-between">
                  <span class="font-bold text-on-surface text-[11px]">${n+1}. ${e.feature}</span>
                  <span class="font-data-number font-bold text-secondary">${e.importance}%</span>
                </div>
                <div class="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
                  <div class="shap-bar-fill h-full bg-secondary rounded-full shadow-[0_0_6px_#06B6D4]" style="width: ${e.importance*2.5}%"></div>
                </div>
                <p class="text-[10px] text-on-surface-variant font-sans">${e.description}</p>
              </div>
            `).join("")}
          </div>

          <div class="pt-2 border-t border-border-subtle text-right text-[10px] text-on-surface-variant">
            Calculated across holdout validation split • TreeSHAP Explainer
          </div>
        </div>

      </div>

      <!-- 05 / FAILURE-MODE SPECIFIC CLASSIFICATION METRICS -->
      <div class="predix-panel overflow-hidden flex flex-col font-mono text-xs">
        <div class="p-4 bg-surface-container-low/60 border-b border-border-subtle flex items-center justify-between">
          <div>
            <h3 class="text-xs font-bold text-on-surface uppercase tracking-wider">Per-Failure-Mode Performance Metrics</h3>
            <p class="text-[11px] text-on-surface-variant font-sans">Precision and recall breakdown across distinct industrial breakdown root-causes</p>
          </div>
          <span class="text-[9.5px] text-status-healthy font-bold uppercase bg-status-healthy/15 px-2 py-0.5 rounded border border-status-healthy/30">Validated AI4I 2020</span>
        </div>

        <div class="overflow-x-auto w-full">
          <table class="w-full text-left border-collapse min-w-[650px]">
            <thead>
              <tr class="bg-surface-container-low/80 font-label-md text-on-surface-variant uppercase text-[9.5px] border-b border-border-subtle">
                <th class="py-2.5 px-4">Failure Mode Classification</th>
                <th class="py-2.5 px-4">Validation Occurrences</th>
                <th class="py-2.5 px-4">Precision Rate</th>
                <th class="py-2.5 px-4">Recall Rate</th>
                <th class="py-2.5 px-4 text-right">Detection Status</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-border-subtle text-[11px]">
              ${Ee.failureModeMetrics.map(e=>`
                <tr class="hover:bg-surface-container-low transition-colors">
                  <td class="py-2.5 px-4 font-bold text-on-surface">${e.mode}</td>
                  <td class="py-2.5 px-4 text-on-surface-variant">${e.count} records</td>
                  <td class="py-2.5 px-4 font-bold text-secondary">${e.precision}%</td>
                  <td class="py-2.5 px-4 font-bold text-status-healthy">${e.recall}%</td>
                  <td class="py-2.5 px-4 text-right">
                    <span class="px-2 py-0.5 rounded text-[9px] font-bold uppercase bg-status-healthy/15 text-status-healthy border border-status-healthy/30">
                      HIGH RELIABILITY
                    </span>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>

      <!-- 06 / MODEL BENCHMARK COMPARISON TABLE -->
      <div class="predix-panel overflow-hidden flex flex-col font-mono text-xs">
        <div class="p-4 bg-surface-container-low/60 border-b border-border-subtle flex items-center justify-between">
          <div>
            <h3 class="text-xs font-bold text-on-surface uppercase tracking-wider">Architecture Benchmark Comparison</h3>
            <p class="text-[11px] text-on-surface-variant font-sans">Empirical validation comparing candidate ML architectures on holdout dataset</p>
          </div>
          <span class="text-[10px] text-secondary font-semibold">HOLDOUT SPLIT (80/20)</span>
        </div>

        <div class="overflow-x-auto w-full">
          <table class="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr class="bg-surface-container-low/80 font-label-md text-on-surface-variant uppercase text-[9.5px] border-b border-border-subtle">
                <th class="py-3 px-4">Architecture</th>
                <th class="py-3 px-4">Status</th>
                <th class="py-3 px-4">ROC-AUC</th>
                <th class="py-3 px-4">Precision</th>
                <th class="py-3 px-4">Recall</th>
                <th class="py-3 px-4">F1-Score</th>
                <th class="py-3 px-4 text-right">Inference Latency</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-border-subtle text-[11px]">
              ${Ee.models.map(e=>`
                <tr class="hover:bg-surface-container-low transition-colors ${e.id==="xgb-v2"?"bg-secondary/[0.04] font-semibold":""}">
                  <td class="py-3 px-4">
                    <span class="text-on-surface font-bold">${e.name}</span>
                  </td>
                  <td class="py-3 px-4">
                    <span class="px-2 py-0.5 rounded text-[9.5px] font-bold uppercase ${e.status.includes("ACTIVE")?"bg-status-healthy/15 text-status-healthy border border-status-healthy/30":"bg-surface-container text-on-surface-variant"}">
                      ${e.status}
                    </span>
                  </td>
                  <td class="py-3 px-4 font-data-number text-status-healthy font-bold">${e.rocAuc}</td>
                  <td class="py-3 px-4 font-data-number">${(e.precision*100).toFixed(1)}%</td>
                  <td class="py-3 px-4 font-data-number">${(e.recall*100).toFixed(1)}%</td>
                  <td class="py-3 px-4 font-data-number">${e.f1Score}</td>
                  <td class="py-3 px-4 font-data-number text-secondary text-right">${e.latencyMs} ms</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  `}function ip(s,t,e=800,n=!1,i=1,a=""){if(window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches){s.innerText=n?t.toFixed(i)+a:Math.round(t).toString()+a;return}const r=0,l=performance.now();function c(d){const u=d-l,p=Math.min(u/e,1),f=1-Math.pow(1-p,3),h=r+(t-r)*f;n?s.innerText=h.toFixed(i)+a:s.innerText=Math.round(h).toString()+a,p<1&&requestAnimationFrame(c)}requestAnimationFrame(c)}function ap(){var s;document.querySelectorAll(".count-up-metric").forEach(t=>{const e=parseFloat(t.getAttribute("data-target")||"0"),n=t.getAttribute("data-format")||"decimal",i=parseInt(t.getAttribute("data-decimals")||"1",10),a=t.getAttribute("data-suffix")||"";ip(t,e,750,n==="decimal",i,a)}),(s=document.getElementById("btn-retrain-model"))==null||s.addEventListener("click",()=>{B("Re-evaluation validation completed. XGBoost model ROC-AUC confirmed at 0.984.","success",4e3)})}let vs=24,_n="CNC-04",tn=null,en=null;function op(){return`
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
              ${C.map(s=>`
                <option value="${s.id}" ${s.id===_n?"selected":""}>
                  ${s.id} (${s.name})
                </option>
              `).join("")}
            </select>

            <!-- Time Horizon Toggle -->
            <div class="flex items-center gap-1 bg-surface-container-low p-1 rounded-lg border border-border-subtle">
              ${[{hours:24,label:"24H"},{hours:168,label:"7D"},{hours:720,label:"30D"}].map(s=>`
                <button data-hours="${s.hours}" class="btn-time-toggle px-2.5 py-1 rounded text-xs font-semibold transition-all ${vs===s.hours?"bg-secondary/20 text-secondary border border-secondary/40 shadow-sm":"text-on-surface-variant hover:text-on-surface"}">
                  ${s.label}
                </button>
              `).join("")}
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
            ${sn.map(s=>`
              <div class="py-2.5 flex items-center justify-between">
                <div>
                  <div class="font-bold text-on-surface text-[11px]">${s.reason}</div>
                  <div class="text-[10px] text-on-surface-variant">Recorded Incidents: ${s.count}</div>
                </div>
                <div class="text-right">
                  <div class="font-data-number font-bold text-secondary text-sm">${s.percentage}%</div>
                  <div class="text-[10px] text-on-surface-variant">Cumulative: ${s.cumulative}%</div>
                </div>
              </div>
            `).join("")}
          </div>

          <div class="pt-3 border-t border-border-subtle text-[11px] text-on-surface-variant font-sans">
            Targeting TWF and HDF eliminates <strong class="text-secondary font-mono">55.8%</strong> of unexpected factory downtime.
          </div>
        </div>

      </div>

    </div>
  `}function rp(){var t;const s=()=>{var i,a;const e=(i=document.getElementById("telemetry-chart"))==null?void 0:i.getContext("2d");if(e){tn&&tn.destroy();const o=va(vs,_n);tn=new mt(e,{type:"line",data:{labels:o.timestamps,datasets:[{label:"Observed Temp (°C)",data:o.tempSeries,borderColor:"#EF4444",backgroundColor:"rgba(239, 68, 68, 0.08)",borderWidth:2,pointRadius:2,pointHoverRadius:5,tension:.35,yAxisID:"y"},{label:"Observed Vibration (mm/s)",data:o.vibrationSeries,borderColor:"#06B6D4",backgroundColor:"rgba(6, 182, 212, 0.08)",borderWidth:2,pointRadius:2,pointHoverRadius:5,tension:.35,yAxisID:"y1"},{label:"Predicted Failure Risk (%)",data:o.riskSeries,borderColor:"#F59E0B",borderDash:[5,5],borderWidth:2,pointRadius:0,tension:.2,yAxisID:"y2"}]},options:{responsive:!0,maintainAspectRatio:!1,animation:{duration:window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches?0:800,easing:"easeOutQuart"},interaction:{mode:"index",intersect:!1},plugins:{legend:{display:!1},tooltip:{backgroundColor:"#080C14",borderColor:"rgba(148, 163, 184, 0.25)",borderWidth:1,titleFont:{family:"JetBrains Mono",size:12},bodyFont:{family:"JetBrains Mono",size:11},titleColor:"#F8FAFC",bodyColor:"#94A3B8"}},scales:{x:{grid:{color:"rgba(148, 163, 184, 0.06)"},ticks:{color:"#64748B",font:{family:"JetBrains Mono",size:9}}},y:{type:"linear",position:"left",title:{display:!0,text:"Temp (°C)",color:"#EF4444",font:{size:9,family:"JetBrains Mono"}},grid:{color:"rgba(148, 163, 184, 0.06)"},ticks:{color:"#64748B",font:{family:"JetBrains Mono",size:9}}},y1:{type:"linear",position:"right",title:{display:!0,text:"Vibration (mm/s)",color:"#06B6D4",font:{size:9,family:"JetBrains Mono"}},grid:{drawOnChartArea:!1},ticks:{color:"#64748B",font:{family:"JetBrains Mono",size:9}}},y2:{type:"linear",position:"right",min:0,max:100,display:!1,grid:{drawOnChartArea:!1}}}}})}const n=(a=document.getElementById("pareto-chart"))==null?void 0:a.getContext("2d");n&&(en&&en.destroy(),en=new mt(n,{type:"bar",data:{labels:["TWF","HDF","OSF","PWF","RNF"],datasets:[{type:"bar",label:"Occurrences",data:sn.map(o=>o.count),backgroundColor:"#1E293B",borderColor:"rgba(148, 163, 184, 0.3)",borderWidth:1,borderRadius:6,yAxisID:"y"},{type:"line",label:"Cumulative %",data:sn.map(o=>o.cumulative),borderColor:"#06B6D4",backgroundColor:"#06B6D4",borderWidth:2,pointRadius:4,yAxisID:"y1"}]},options:{responsive:!0,maintainAspectRatio:!1,animation:{duration:window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches?0:800,easing:"easeOutQuart"},plugins:{legend:{display:!1},tooltip:{backgroundColor:"#080C14",borderColor:"rgba(148, 163, 184, 0.25)",borderWidth:1,titleFont:{family:"JetBrains Mono",size:12},bodyFont:{family:"JetBrains Mono",size:11},titleColor:"#F8FAFC",bodyColor:"#94A3B8"}},scales:{x:{grid:{color:"rgba(148, 163, 184, 0.06)"},ticks:{color:"#94A3B8",font:{family:"JetBrains Mono",size:10}}},y:{title:{display:!0,text:"Failure Count",color:"#94A3B8",font:{size:9,family:"JetBrains Mono"}},grid:{color:"rgba(148, 163, 184, 0.06)"},ticks:{color:"#64748B",font:{family:"JetBrains Mono",size:9}}},y1:{position:"right",min:0,max:100,title:{display:!0,text:"Cumulative %",color:"#06B6D4",font:{size:9,family:"JetBrains Mono"}},grid:{drawOnChartArea:!1},ticks:{color:"#64748B",font:{family:"JetBrains Mono",size:9}}}}}}))};s(),(t=document.getElementById("analytics-machine-select"))==null||t.addEventListener("change",e=>{_n=e.target.value,s()}),document.querySelectorAll(".btn-time-toggle").forEach(e=>{e.addEventListener("click",()=>{vs=parseInt(e.getAttribute("data-hours"),10),document.querySelectorAll(".btn-time-toggle").forEach(n=>{const i=parseInt(n.getAttribute("data-hours"),10)===vs;n.className=`btn-time-toggle px-2.5 py-1 rounded text-xs font-semibold transition-all ${i?"bg-secondary/20 text-secondary border border-secondary/40 shadow-sm":"text-on-surface-variant hover:text-on-surface"}`}),s()})})}function lp(){const s=window.location.hash.slice(1)||"dashboard",[t,e]=s.split("?"),n=new URLSearchParams(e||"");return{route:t||"dashboard",params:n}}function kn(){const{route:s,params:t}=lp(),e=document.getElementById("sidebar-root");e&&(e.innerHTML=Po(s));const n=document.getElementById("header-root");n&&(n.innerHTML=Lo(s));const i=document.getElementById("view-container");if(i){switch(s){case"fleet-health":i.innerHTML=Yu(),Xu();break;case"dataset-profiler":i.innerHTML=Ku(),Ju();break;case"work-orders":i.innerHTML=Qu(),tp();break;case"what-if-simulator":const a=t.get("machine");i.innerHTML=ep(a),sp();break;case"model-performance":i.innerHTML=np(),ap();break;case"analytics":i.innerHTML=op(),rp();break;case"dashboard":default:i.innerHTML=qu(),Gu();break}pp(),i.classList.remove("page-transition-enter"),i.offsetWidth,i.classList.add("page-transition-enter"),cp(),window.scrollTo(0,0)}}function cp(){const s=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,t=document.querySelectorAll(".predix-reveal:not(.is-revealed)");if(s){t.forEach(n=>n.classList.add("is-revealed"));return}if(!("IntersectionObserver"in window)){t.forEach(n=>n.classList.add("is-revealed"));return}const e=new IntersectionObserver((n,i)=>{n.forEach(a=>{a.isIntersecting&&(a.target.classList.add("is-revealed"),i.unobserve(a.target))})},{threshold:.1});t.forEach(n=>e.observe(n))}function Le(){const s=document.getElementById("sidebar"),t=document.getElementById("sidebar-backdrop");s&&s.classList.add("-translate-x-full"),t&&t.classList.add("hidden")}function dp(){const s=document.getElementById("sidebar"),t=document.getElementById("sidebar-backdrop");s&&s.classList.remove("-translate-x-full"),t&&t.classList.remove("hidden")}function up(){const s=document.getElementById("sidebar");s&&s.classList.contains("-translate-x-full")?dp():Le()}function pp(){var e,n,i,a,o,r;(e=document.getElementById("btn-toggle-sidebar"))==null||e.addEventListener("click",l=>{l.stopPropagation(),up()}),(n=document.getElementById("btn-close-sidebar"))==null||n.addEventListener("click",()=>{Le()}),(i=document.getElementById("sidebar-backdrop"))==null||i.addEventListener("click",()=>{Le()}),document.querySelectorAll("#sidebar a[data-nav], #sidebar a[href]").forEach(l=>{l.addEventListener("click",()=>{Le()})}),(a=document.getElementById("btn-header-upload-dataset"))==null||a.addEventListener("click",()=>{ya(l=>{kn()})});const s=document.getElementById("btn-notifications"),t=document.getElementById("notifications-panel");s&&t&&(s.addEventListener("click",l=>{l.stopPropagation(),t.classList.toggle("hidden")}),document.addEventListener("click",l=>{!t.contains(l.target)&&l.target!==s&&t.classList.add("hidden")})),(o=document.getElementById("btn-export-excel-global"))==null||o.addEventListener("click",()=>{Ps(C,ft),B("Fleet Management Executive Briefing exported (.xls)!","success",4500)}),(r=document.getElementById("btn-export-csv-global"))==null||r.addEventListener("click",()=>{Tn(C),B("Raw Fleet Diagnostic Data exported successfully to CSV!","success")}),document.addEventListener("keydown",l=>{if(l.key==="Escape"){const c=document.getElementById("modal-root");c&&(c.innerHTML=""),t&&t.classList.add("hidden"),Le()}})}window.addEventListener("DOMContentLoaded",()=>{kn(),window.addEventListener("hashchange",kn),setTimeout(()=>{B("Predix Engine active: All telemetry streams & ML models online.","info",4e3)},800)});
