# Adaptive Maintenance Priority Engine

An industrial intelligence and predictive maintenance dashboard designed to help maintenance teams monitor fleet health, analyze machine telemetry, identify failure risks, and prioritize maintenance actions.

The system combines fleet-level health monitoring, telemetry analytics, predictive risk scoring, dataset profiling, work-order management, and what-if scenario simulation into a single operational dashboard.

---

## 🚀 Project Overview

Modern industrial environments generate large volumes of machine telemetry such as temperature, vibration, torque, RPM, and tool wear.

The **Adaptive Maintenance Priority Engine** transforms these signals into actionable maintenance intelligence.

Instead of simply showing raw machine data, the platform helps answer four important questions:

> **What is happening? → Which machines need attention? → Why are they at risk? → What should we do?**

The dashboard provides an operational view of machine health and supports predictive maintenance decision-making.

---

## 🎯 Why This Project?

Traditional maintenance approaches often depend on:

* Fixed maintenance schedules
* Manual inspection
* Reactive maintenance after equipment failure
* Large amounts of raw telemetry data
* Difficulty prioritizing multiple machines

This project aims to improve the maintenance workflow by using telemetry-driven risk analysis and predictive decision support.

### Main Goals

* Identify machines with elevated failure risk
* Prioritize assets requiring maintenance
* Analyze telemetry and reliability trends
* Understand major failure contributors
* Simulate operational changes before taking action
* Generate maintenance reports
* Support data-driven maintenance decisions

---

## ✨ Key Features

### 1. Fleet Health Monitoring

Provides an overview of the entire machine fleet.

Features include:

* Machine risk categorization
* Healthy / Medium / High / Critical risk levels
* Fleet risk distribution
* Machine search and filtering
* Dataset filtering
* Priority-based sorting
* Machine-level diagnostics

---

### 2. Predictive Analytics

The analytics module provides telemetry and reliability analysis.

It includes:

* Multi-sensor time-series telemetry
* Spindle temperature monitoring
* Vibration analysis
* Predicted failure-risk trajectory
* Failure-mode Pareto analysis
* MTBF tracking
* Avoided downtime cost metrics
* Machine-specific telemetry selection
* 24-hour, 7-day, and 30-day analysis windows

---

### 3. Predictive Scenario Lab

The scenario simulator allows users to modify machine operating conditions and observe how the predicted risk changes.

Users can experiment with parameters such as:

* Temperature
* Torque
* RPM
* Tool wear

The system compares the simulated condition against the machine's baseline and provides:

* Predicted risk
* Risk change
* Risk status
* Key contributing parameters
* Recommended actions

This provides a **what-if analysis** capability for maintenance planning.

---

### 4. Dataset Profiler

The application supports dataset-oriented analysis and profiling.

Users can upload datasets and inspect machine-related information before using it for analysis.

---

### 5. Work Order Management

The platform includes maintenance work-order functionality to help connect machine risk with maintenance operations.

---

### 6. Reports and Data Export

The application provides export functionality including:

* CSV export
* Executive Excel reports
* Executive briefing generation

This allows maintenance information to be shared outside the dashboard.

---

## 🧠 Predictive Risk Engine

The project contains a risk calculation module that evaluates machine operating conditions.

The risk engine considers parameters such as:

* Process temperature
* Torque
* RPM
* Tool wear
* Baseline failure probability

The simulator compares the modified scenario with the machine's baseline condition.

Example decision logic includes detecting:

* Excessive temperature
* High tool wear
* High torque
* Improved thermal conditions
* Improved tool condition

Based on these conditions, the system generates recommended maintenance actions.

---

## 🤖 AI / ML Pipeline

The application is designed around a predictive maintenance workflow:

```text
Machine Telemetry
       ↓
Data Processing
       ↓
Feature Analysis
       ↓
Predictive Risk Engine
       ↓
Failure Risk Estimation
       ↓
Risk Classification
       ↓
Maintenance Priority
       ↓
Recommended Action
```

The application interface identifies the predictive engine as an **XGBoost-based nonlinear multi-variable classifier**.

The current frontend contains the risk-analysis and scenario-simulation layer used to demonstrate predictive maintenance decision support.

---

## 🏗️ System Architecture

```text
                    ┌──────────────────────┐
                    │   Machine / Dataset  │
                    │       Telemetry      │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │   Dataset Processing │
                    │    & Profiling       │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │ Predictive Risk      │
                    │ Engine               │
                    └──────────┬───────────┘
                               │
              ┌────────────────┼────────────────┐
              ▼                ▼                ▼
       Fleet Health       Analytics       Scenario Lab
              │                │                │
              └────────────────┼────────────────┘
                               ▼
                    ┌──────────────────────┐
                    │ Maintenance Actions  │
                    │ & Work Orders        │
                    └──────────────────────┘
```

---

## 🔄 Core Workflow

1. Select or upload machine data.
2. Analyze fleet and telemetry information.
3. Calculate or obtain machine failure risk.
4. Categorize assets according to risk.
5. Identify machines requiring attention.
6. Analyze telemetry and possible failure contributors.
7. Run what-if scenarios for selected machines.
8. Compare simulated risk against baseline risk.
9. Generate recommended maintenance actions.
10. Export reports for operational use.

---

## 🛠️ Technology Stack

### Frontend

* JavaScript
* HTML
* CSS
* Vite

### Data Visualization

* Chart.js

### Build Tool

* Vite

### Development Environment

* Node.js
* npm

---

## 📁 Project Structure

```text
crm/
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
│
└── src/
    │
    ├── main.js
    │
    ├── components/
    │   ├── DispatchModal.js
    │   ├── Header.js
    │   ├── MachineModal.js
    │   ├── Sidebar.js
    │   ├── Toast.js
    │   └── UploadModal.js
    │
    ├── data/
    │   ├── activityLogs.js
    │   ├── diagnosticGuides.js
    │   ├── fleetData.js
    │   ├── modelMetrics.js
    │   ├── teamsData.js
    │   └── telemetryData.js
    │
    ├── utils/
    │   ├── datasetParser.js
    │   ├── excelReport.js
    │   ├── export.js
    │   └── riskModel.js
    │
    ├── views/
    │   ├── AnalyticsView.js
    │   ├── DashboardView.js
    │   ├── DatasetProfilerView.js
    │   ├── FleetHealthView.js
    │   ├── ModelPerfView.js
    │   ├── SimulatorView.js
    │   └── WorkOrdersView.js
    │
    └── styles/
        └── main.css
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

### 2. Navigate to the project

```bash
cd crm
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

---

## 🏭 Example Use Case

Consider a manufacturing plant operating several CNC machines.

One machine begins showing:

* Increasing temperature
* High torque
* Increased tool wear
* Higher predicted failure probability

The Fleet Health module identifies the machine as high risk.

The maintenance engineer can then:

1. Open the machine details.
2. Review telemetry.
3. Identify possible failure contributors.
4. Open the Scenario Lab.
5. Modify temperature, torque, RPM, or tool-wear conditions.
6. Compare predicted risk.
7. Review recommended actions.
8. Create or prioritize maintenance work.
9. Export an executive report.

This allows maintenance teams to move from **reactive maintenance to data-driven predictive maintenance**.

---

## 📊 Engineering Highlights

* Component-based frontend architecture
* Modular JavaScript structure
* Reusable UI components
* Chart.js-based telemetry visualization
* Client-side dataset processing
* Risk calculation engine
* Scenario-based predictive analysis
* Fleet filtering and prioritization
* CSV and Excel report generation
* Responsive dashboard design
* Separation of data, views, utilities, and UI components

---

## 🔐 Security & Repository Hygiene

The following files and directories should **not** be committed to GitHub:

```text
.env
.env.*
node_modules/
dist/
build/
.cache/
.vite/
*.log
```

Never commit:

* API keys
* Passwords
* Authentication tokens
* Private credentials
* Secret configuration files

---

## 📸 Screenshots

Add screenshots to a directory such as:

```text
screenshots/
├── dashboard.png
├── fleet-health.png
├── analytics.png
├── simulator.png
└── work-orders.png
```

Then reference them in this README using relative paths:

```markdown
## 📸 Screenshots

### Dashboard

![Dashboard](screenshots/dashboard.png)

### Fleet Health

![Fleet Health](screenshots/fleet-health.png)

### Predictive Analytics

![Analytics](screenshots/analytics.png)

### Scenario Lab

![Scenario Lab](screenshots/simulator.png)
```

**Only add these image references after confirming the actual screenshot filenames. Do not rename or assume screenshots without checking the project files.**

---

## 🚧 Project Status

**Status: Hackathon / Prototype**

The current version demonstrates the core predictive-maintenance dashboard, fleet intelligence workflow, telemetry visualization, risk analysis, scenario simulation, and reporting capabilities.

---

## 🔮 Future Improvements

Potential improvements include:

* Integration with real industrial IoT sensors
* Real-time telemetry streaming
* Backend API integration
* Production ML model serving
* Automated model retraining
* Database integration
* Authentication and role-based access
* Advanced anomaly detection
* Explainable AI for predictions
* Automated maintenance scheduling
* Cloud deployment
* Real-time alerts and notifications
* Historical failure prediction
* Integration with industrial IoT platforms

---

## 👥 Intended Users

The system can support:

* Maintenance engineers
* Plant managers
* Reliability engineers
* Operations teams
* Industrial data scientists
* Manufacturing organizations

---

## 📄 License

This project was developed as a hackathon/project prototype.

Add an appropriate open-source license if the project is intended for public reuse.
