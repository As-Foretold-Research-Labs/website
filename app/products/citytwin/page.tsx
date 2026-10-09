"use client";

import Image from "next/image";
import Link from "next/link";

export default function CityTwinProductPage() {
  return (
    <div className="min-h-screen bg-obsidian text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* BREADCRUMB */}
        <div className="flex items-center gap-2 text-xs font-mono text-dim mb-8">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="text-surface-border">/</span>
          <Link href="/#platforms" className="hover:text-white transition-colors">Platforms</Link>
          <span className="text-surface-border">/</span>
          <span className="text-cobalt-light font-semibold">CityTwin</span>
        </div>

        {/* HERO HEADER */}
        <section className="relative pt-16 md:pt-24 pb-20 border-b border-surface-border overflow-hidden mb-16">
          <div className="fixed inset-0 pointer-events-none z-0">
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1100px] h-[450px] bg-gradient-to-b from-blue-900/10 via-transparent to-transparent blur-[160px]" />
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-950/5 blur-[180px]" />
          </div>
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className="flex items-center space-x-3 mb-6 font-mono text-xs text-dim">
              <span className="inline-block w-1.5 h-1.5 bg-cobalt-light" />
              <span className="tracking-widest uppercase text-cobalt-light">OPERATIONAL DEFENSE & INFRASTRUCTURE SIMULATION</span>
              <span className="text-surface-border">|</span>
              <span className="tracking-widest uppercase text-dim">SYSTEM IDENT: CT-SYS-V4.2</span>
            </div>
            <div className="max-w-5xl mb-8">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.12]">
                CityTwin <span className="text-dim font-normal">|</span> Physics-Informed Digital Twins & Multi-Agent Operational Simulation
              </h1>
              <p className="mt-6 text-base md:text-lg text-steel max-w-3xl leading-relaxed font-body">
                A unified enterprise simulation platform enabling defense, municipal, and industrial institutions to stress-test autonomous robotics, dynamic fleets, and multi-agent AI systems in high-fidelity synthetic reality before operational deployment.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-16">
              <Link className="inline-flex items-center justify-center space-x-2 px-5 py-3 text-xs font-mono uppercase tracking-wider text-white bg-cobalt hover:bg-cobalt-light border border-cobalt-light/40 transition-all" href="#briefing">
                <span>Schedule Institutional Briefing</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
              <Link className="inline-flex items-center justify-center space-x-2 px-5 py-3 text-xs font-mono uppercase tracking-wider text-steel bg-surface hover:text-white border border-surface-border hover:border-surface-border-strong transition-all" href="#dossier">
                <span className="material-symbols-outlined text-[16px] text-cobalt-light">description</span>
                <span>Request Architecture Dossier</span>
              </Link>
            </div>
            {/* Operational Telemetry Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 border border-surface-border bg-surface">
              <div className="p-4 md:p-6 border-r border-b md:border-b-0 border-surface-border">
                <div className="font-mono text-xs text-dim uppercase tracking-wider mb-1">State Sync Latency</div>
                <div className="font-mono text-2xl md:text-3xl text-white font-medium">{"<"} 1.2 <span className="text-xs text-cobalt-light font-normal">MS PARITY</span></div>
                <div className="mt-2 text-[11px] text-dim font-mono">Deterministic telemetry sync loop</div>
              </div>
              <div className="p-4 md:p-6 border-r border-b md:border-b-0 border-surface-border">
                <div className="font-mono text-xs text-dim uppercase tracking-wider mb-1">Entity Scalability</div>
                <div className="font-mono text-2xl md:text-3xl text-white font-medium">100,000+</div>
                <div className="mt-2 text-[11px] text-dim font-mono">Concurrent agents & kinetic nodes</div>
              </div>
              <div className="p-4 md:p-6 border-r border-surface-border">
                <div className="font-mono text-xs text-dim uppercase tracking-wider mb-1">Physics Solver Fidelity</div>
                <div className="font-mono text-2xl md:text-3xl text-white font-medium">60 <span className="text-xs text-cobalt-light font-normal">HZ KINEMATIC</span></div>
                <div className="mt-2 text-[11px] text-dim font-mono">Sub-millimeter collision envelope</div>
              </div>
              <div className="p-4 md:p-6">
                <div className="font-mono text-xs text-dim uppercase tracking-wider mb-1">Security Certification</div>
                <div className="font-mono text-2xl md:text-3xl text-white font-medium">FEDRAMP <span className="text-xs text-cobalt-light font-normal">READY</span></div>
                <div className="mt-2 text-[11px] text-dim font-mono">Air-gapped & SOC 2 Type II audit</div>
              </div>
            </div>
          </div>
        </section>

        {/* OPERATIONAL ARCHITECTURE */}
        <section className="py-20 md:py-24 border-b border-surface-border" id="architecture">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-16">
              <div className="font-mono text-xs uppercase tracking-widest text-cobalt-light mb-2">SYSTEM ARCHITECTURE</div>
              <h2 className="text-2xl md:text-4xl font-semibold text-white tracking-tight">
                Unified Operational Simulation Architecture
              </h2>
              <p className="mt-4 text-sm md:text-base text-steel">
                Engineered for mission-critical integration across air-gapped sovereign networks and industrial enterprise architectures.
              </p>
            </div>
            <div className="border border-surface-border bg-surface p-6 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
                <div className="border border-surface-border bg-obsidian p-6 flex flex-col justify-between">
                  <div>
                    <div className="font-mono text-[11px] text-cobalt-light uppercase tracking-wider mb-2">LAYER 01</div>
                    <h4 className="text-base font-semibold text-white mb-2">Sovereign Data Ingestion</h4>
                    <p className="text-xs text-steel font-body leading-relaxed mb-4">
                      Air-gapped ingestion of BIM, CAD, GIS spatial rasters, point clouds, and SCADA industrial feeds.
                    </p>
                  </div>
                  <div className="space-y-1.5 pt-4 border-t border-surface-border font-mono text-[11px] text-dim">
                    <div>{">"} OpenUSD Native</div>
                    <div>{">"} OPC-UA & MQTT</div>
                    <div>{">"} Defense GIS Formats</div>
                  </div>
                </div>
                <div className="border border-surface-border bg-obsidian p-6 flex flex-col justify-between">
                  <div>
                    <div className="font-mono text-[11px] text-cobalt-light uppercase tracking-wider mb-2">LAYER 02</div>
                    <h4 className="text-base font-semibold text-white mb-2">High-Order Physics Core</h4>
                    <p className="text-xs text-steel font-body leading-relaxed mb-4">
                      Rigid-body, deformable terrain, aerodynamic drag, and kinematic joint solvers operating headless at 60Hz.
                    </p>
                  </div>
                  <div className="space-y-1.5 pt-4 border-t border-surface-border font-mono text-[11px] text-dim">
                    <div>{">"} Kinematic Solver Engine</div>
                    <div>{">"} GPU Vector Acceleration</div>
                    <div>{">"} Deterministic Replay</div>
                  </div>
                </div>
                <div className="border border-surface-border bg-obsidian p-6 flex flex-col justify-between">
                  <div>
                    <div className="font-mono text-[11px] text-cobalt-light uppercase tracking-wider mb-2">LAYER 03</div>
                    <h4 className="text-base font-semibold text-white mb-2">Multi-Agent Cognition</h4>
                    <p className="text-xs text-steel font-body leading-relaxed mb-4">
                      StateGraph-driven swarm policies and adversarial simulation routines with zero-latency sensor generation.
                    </p>
                  </div>
                  <div className="space-y-1.5 pt-4 border-t border-surface-border font-mono text-[11px] text-dim">
                    <div>{">"} Swarm Intelligence Engine</div>
                    <div>{">"} Adversarial Curriculum</div>
                    <div>{">"} Ray-Casted Sensor Bus</div>
                  </div>
                </div>
                <div className="border border-surface-border bg-obsidian p-6 flex flex-col justify-between">
                  <div>
                    <div className="font-mono text-[11px] text-cobalt-light uppercase tracking-wider mb-2">LAYER 04</div>
                    <h4 className="text-base font-semibold text-white mb-2">Mission Verification & Edge</h4>
                    <p className="text-xs text-steel font-body leading-relaxed mb-4">
                      Safety envelope verification via Augur Core before policy export to physical robotics hardware fleets.
                    </p>
                  </div>
                  <div className="space-y-1.5 pt-4 border-t border-surface-border font-mono text-[11px] text-dim">
                    <div>{">"} Continuous Audit (Augur)</div>
                    <div>{">"} ONNX / PyTorch Quantization</div>
                    <div>{">"} Edge Flight Pack Ready</div>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-surface-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="text-xs font-mono text-steel">
                  Complete institutional technical dossier contains full mathematical formulations, solver proofs, and security architecture.
                </div>
                <Link className="inline-flex items-center space-x-1.5 text-xs font-mono text-cobalt-light hover:text-white transition-colors uppercase tracking-wider" href="#dossier">
                  <span>Download Architectural Specification (PDF)</span>
                  <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* OPERATIONAL CAPABILITIES */}
        <section className="py-20 md:py-24 border-b border-surface-border" id="capabilities">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-cobalt-light mb-2">OPERATIONAL CAPABILITIES</div>
                <h2 className="text-2xl md:text-4xl font-semibold text-white tracking-tight">
                  High-Assurance Synthetic Simulation
                </h2>
              </div>
              <p className="text-sm md:text-base text-steel max-w-lg font-body">
                Eliminate the reality gap before deploying embodied autonomous systems into contested, high-liability, or sovereign operational theaters.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-surface-border border border-surface-border">
              <div className="p-8 bg-obsidian hover:bg-surface transition-colors flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs text-dim mb-6">CAPABILITY // 01</div>
                  <div className="w-10 h-10 border border-surface-border bg-surface flex items-center justify-center text-cobalt-light mb-6">
                    <span className="material-symbols-outlined text-[22px]">public</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">Kinematic Earth & Infrastructure Modeling</h3>
                  <p className="text-xs md:text-sm text-steel leading-relaxed mb-6 font-body">
                    High-resolution spatial ingestion of municipal topography, structural BIM assets, and industrial machinery with direct binding to mechanical, thermodynamic, and kinematic physical constraints.
                  </p>
                </div>
                <div className="pt-4 border-t border-surface-border font-mono text-[11px] text-dim">SPEC: USD / SUB-MILLIMETER KINEMATICS</div>
              </div>
              <div className="p-8 bg-obsidian hover:bg-surface transition-colors flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs text-dim mb-6">CAPABILITY // 02</div>
                  <div className="w-10 h-10 border border-surface-border bg-surface flex items-center justify-center text-cobalt-light mb-6">
                    <span className="material-symbols-outlined text-[22px]">hub</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">Adversarial Multi-Agent Stress Testing</h3>
                  <p className="text-xs md:text-sm text-steel leading-relaxed mb-6 font-body">
                    Simulate thousands of autonomous agents governed by MARL and LangGraph state logic. Formulate adversarial red-team swarms, stochastic civilian traffic, and unexpected hardware breakdown cascades.
                  </p>
                </div>
                <div className="pt-4 border-t border-surface-border font-mono text-[11px] text-dim">SPEC: MULTI-AGENT RL / STATE GRAPH</div>
              </div>
              <div className="p-8 bg-obsidian hover:bg-surface transition-colors flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs text-dim mb-6">CAPABILITY // 03</div>
                  <div className="w-10 h-10 border border-surface-border bg-surface flex items-center justify-center text-cobalt-light mb-6">
                    <span className="material-symbols-outlined text-[22px]">developer_board</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">Hardware-in-the-Loop Mission Validation</h3>
                  <p className="text-xs md:text-sm text-steel leading-relaxed mb-6 font-body">
                    Connect flight computers, vehicle ECUs, and edge compute boxes directly to virtual sensor buses. Quantize policies for Jetson Orin and proprietary robotics architectures with verifiable zero-shot transfer.
                  </p>
                </div>
                <div className="pt-4 border-t border-surface-border font-mono text-[11px] text-dim">SPEC: CAN-BUS / ROS2 / ONNX RUNTIME</div>
              </div>
              <div className="p-8 bg-obsidian hover:bg-surface transition-colors flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs text-dim mb-6">CAPABILITY // 04</div>
                  <div className="w-10 h-10 border border-surface-border bg-surface flex items-center justify-center text-cobalt-light mb-6">
                    <span className="material-symbols-outlined text-[22px]">sensors</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">Zero-Latency Telemetry Fusion</h3>
                  <p className="text-xs md:text-sm text-steel leading-relaxed mb-6 font-body">
                    Real-time bi-directional streaming between live physical assets and synthetic twins. Ingest real-world telemetry while simultaneously projecting simulation forecasts with sub-1.2ms state alignment.
                  </p>
                </div>
                <div className="pt-4 border-t border-surface-border font-mono text-[11px] text-dim">SPEC: gRPC / mTLS STREAM / OPC-UA</div>
              </div>
            </div>
          </div>
        </section>

        {/* DEPLOYMENT SCENARIOS */}
        <section className="py-20 md:py-24 border-b border-surface-border" id="scenarios">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-cobalt-light mb-2">DEPLOYMENT SCENARIOS</div>
                <h2 className="text-2xl md:text-4xl font-semibold text-white tracking-tight">Institutional Deployments</h2>
              </div>
              <p className="text-sm md:text-base text-steel max-w-lg font-body">
                Field-proven across defense operations, municipal resilience, and autonomous supply network logistics.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 border border-surface-border bg-obsidian hover:border-surface-border-strong transition-all">
                <div className="flex justify-between items-start mb-6">
                  <span className="font-mono text-xs text-cobalt-light uppercase tracking-wider">DEFENSE // MARL</span>
                  <span className="font-mono text-[11px] text-dim">VECTOR: TACTICAL FLEETS</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Defense Swarm Simulation & GPS-Denied Navigation</h3>
                <p className="text-xs md:text-sm text-steel leading-relaxed mb-6 font-body">
                  Validate autonomous multi-domain aerial and ground swarms in simulated electronic warfare (EW) conditions, dense urban canyons, and subterranean tunnels with visual SLAM synthetic fidelity.
                </p>
                <div className="pt-4 border-t border-surface-border flex justify-between items-center font-mono text-xs">
                  <span className="text-dim">Drift Mitigation:</span>
                  <span className="text-white">{"<"} 3cm over 5,000m traversal</span>
                </div>
              </div>
              <div className="p-8 border border-surface-border bg-obsidian hover:border-surface-border-strong transition-all">
                <div className="flex justify-between items-start mb-6">
                  <span className="font-mono text-xs text-cobalt-light uppercase tracking-wider">INFRASTRUCTURE // WATER & POWER</span>
                  <span className="font-mono text-[11px] text-dim">VECTOR: CRITICAL ASSETS</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Strategic Infrastructure & Sovereign Municipal Grids</h3>
                <p className="text-xs md:text-sm text-steel leading-relaxed mb-6 font-body">
                  Model regional electrical substations, municipal water networks, and utility backbones under extreme climate anomalies, cyber-physical kinetic disruption, and cascading power failures.
                </p>
                <div className="pt-4 border-t border-surface-border flex justify-between items-center font-mono text-xs">
                  <span className="text-dim">Stress Event Parity:</span>
                  <span className="text-white">99.9% physical match against SCADA logs</span>
                </div>
              </div>
              <div className="p-8 border border-surface-border bg-obsidian hover:border-surface-border-strong transition-all">
                <div className="flex justify-between items-start mb-6">
                  <span className="font-mono text-xs text-cobalt-light uppercase tracking-wider">LOGISTICS // SUPPLY NETWORK</span>
                  <span className="font-mono text-[11px] text-dim">VECTOR: SUPPLY RESILIENCE</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Autonomous Logistics Networks & Intermodal Terminals</h3>
                <p className="text-xs md:text-sm text-steel leading-relaxed mb-6 font-body">
                  Stress-test hundreds of autonomous forklifts, automated guided vehicles (AGVs), and container cranes within high-density freight interchanges without risking real equipment damage.
                </p>
                <div className="pt-4 border-t border-surface-border flex justify-between items-center font-mono text-xs">
                  <span className="text-dim">Collision Mitigation:</span>
                  <span className="text-white">99.7% pre-deployment reduction</span>
                </div>
              </div>
              <div className="p-8 border border-surface-border bg-obsidian hover:border-surface-border-strong transition-all">
                <div className="flex justify-between items-start mb-6">
                  <span className="font-mono text-xs text-cobalt-light uppercase tracking-wider">INDUSTRIAL // MANUFACTURING</span>
                  <span className="font-mono text-[11px] text-dim">VECTOR: ROBOTIC WORKCELLS</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Strategic Industrial Manufacturing & Cobot Safety</h3>
                <p className="text-xs md:text-sm text-steel leading-relaxed mb-6 font-body">
                  Simulate dynamic human-robot coexistence across semiconductor cleanrooms and automotive assembly plants. Formulate deterministic safety envelopes conforming to ISO 10218-1 standards.
                </p>
                <div className="pt-4 border-t border-surface-border flex justify-between items-center font-mono text-xs">
                  <span className="text-dim">Compliance Protocol:</span>
                  <span className="text-white">Pre-certified safety boundary</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INSTITUTIONAL SECURITY & GOVERNANCE */}
        <section className="py-20 md:py-24 border-b border-surface-border bg-surface/50" id="governance">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="border border-surface-border bg-surface-card p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  <div className="flex items-center space-x-2 font-mono text-xs text-cobalt-light mb-3">
                    <span className="w-2 h-2 bg-cobalt-light" />
                    <span className="uppercase tracking-widest">INSTITUTIONAL INTEGRITY & GOVERNANCE</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                    Sovereign On-Premises & Air-Gapped Deployment
                  </h3>
                  <p className="text-sm md:text-base text-steel leading-relaxed font-body max-w-2xl">
                    Every simulation runs with zero unauthorized data exfiltration. Fully audited via our continuous governance engine, <strong>Augur</strong>. Engineered for deployment inside sovereign clouds, classified SCIF networks, and FedRAMP High enterprise enclaves.
                  </p>
                </div>
                <div className="lg:col-span-4 space-y-3 font-mono text-xs">
                  <div className="p-3.5 border border-surface-border bg-surface flex items-center space-x-3 text-white">
                    <span className="material-symbols-outlined text-cobalt-light text-[18px]">lock</span>
                    <span>Air-Gapped & On-Premise GPU Nodes</span>
                  </div>
                  <div className="p-3.5 border border-surface-border bg-surface flex items-center space-x-3 text-white">
                    <span className="material-symbols-outlined text-cobalt-light text-[18px]">verified_user</span>
                    <span>FedRAMP High & SOC 2 Type II Certified</span>
                  </div>
                  <div className="p-3.5 border border-surface-border bg-surface flex items-center space-x-3 text-white">
                    <span className="material-symbols-outlined text-cobalt-light text-[18px]">shield</span>
                    <span>End-to-End Cryptographic mTLS Channels</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INSTITUTIONAL ENGAGEMENT */}
        <section className="py-20 md:py-24" id="briefing">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5" id="dossier">
                <div className="font-mono text-xs uppercase tracking-widest text-cobalt-light mb-2">ENGAGE AS FORETOLD RESEARCH LABS</div>
                <h2 className="text-2xl md:text-4xl font-semibold text-white tracking-tight mb-4">
                  Schedule Institutional Briefing
                </h2>
                <p className="text-sm text-steel leading-relaxed mb-6 font-body">
                  CityTwin is delivered under institutional simulation licenses and classified pilot agreements. Schedule an operational briefing with our engineering leadership to evaluate system capabilities, sensor bridge requirements, and deployment parameters.
                </p>
                <div className="border border-surface-border bg-surface p-5 space-y-3 text-xs font-mono text-steel">
                  <div className="text-white font-medium uppercase tracking-wider text-[11px] border-b border-surface-border pb-2">Engagement Protocol:</div>
                  <div className="flex items-start space-x-2"><span className="text-cobalt-light">01.</span><span>Security Clearance & Institutional Scoping Review</span></div>
                  <div className="flex items-start space-x-2"><span className="text-cobalt-light">02.</span><span>High-Fidelity Synthetic Proof-of-Concept Validation</span></div>
                  <div className="flex items-start space-x-2"><span className="text-cobalt-light">03.</span><span>Isolated Sandbox Deployment on Sovereign GPU Nodes</span></div>
                </div>
                <div className="mt-8 font-mono text-xs text-dim">
                  Direct Research Office: <span className="text-cobalt-light">velasquez.marcvictor.l@asforetold.space</span>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="border border-surface-border bg-surface-card p-8 md:p-10">
                  <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert('Institutional briefing request submitted. An engineering director from As Foretold Research Labs will respond through secure channels within 24 hours.'); }}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block font-mono text-[11px] text-dim uppercase tracking-wider mb-2">Principal Contact / Title</label>
                        <input className="w-full px-3.5 py-2.5 bg-obsidian border border-surface-border text-white text-xs font-mono focus:border-cobalt-light focus:outline-none transition" placeholder="Dr. Elena Vance, Director of Autonomy" required type="text" />
                      </div>
                      <div>
                        <label className="block font-mono text-[11px] text-dim uppercase tracking-wider mb-2">Institutional Email</label>
                        <input className="w-full px-3.5 py-2.5 bg-obsidian border border-surface-border text-white text-xs font-mono focus:border-cobalt-light focus:outline-none transition" placeholder="e.vance@institution.gov" required type="email" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block font-mono text-[11px] text-dim uppercase tracking-wider mb-2">Institution / Department</label>
                        <input className="w-full px-3.5 py-2.5 bg-obsidian border border-surface-border text-white text-xs font-mono focus:border-cobalt-light focus:outline-none transition" placeholder="Department of Defense / Defense Research" required type="text" />
                      </div>
                      <div>
                        <label className="block font-mono text-[11px] text-dim uppercase tracking-wider mb-2">Operational Vector</label>
                        <select className="w-full px-3.5 py-2.5 bg-obsidian border border-surface-border text-white text-xs font-mono focus:border-cobalt-light focus:outline-none transition">
                          <option>Autonomous Defense Swarm Simulation</option>
                          <option>Strategic Infrastructure & Municipal Grid</option>
                          <option>Autonomous Logistics Network Fleet</option>
                          <option>Critical Manufacturing & Cobot Safety</option>
                          <option>Multi-Agent Reinforcement Learning (MARL)</option>
                          <option>Other Sovereign Deployment Focus</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block font-mono text-[11px] text-dim uppercase tracking-wider mb-2">Mission Scope & Architecture Constraints</label>
                      <textarea className="w-full px-3.5 py-2.5 bg-obsidian border border-surface-border text-white text-xs font-mono focus:border-cobalt-light focus:outline-none transition" placeholder="Detail operational requirements: spatial scale, vehicle types (UAV/AMR), air-gap requirements, and simulation timelines..." rows={4} />
                    </div>
                    <div className="flex items-center space-x-2.5 text-xs font-mono text-dim">
                      <input className="border-surface-border bg-obsidian text-cobalt-light focus:ring-0" id="nda" type="checkbox" />
                      <label htmlFor="nda">Execute institutional Mutual Non-Disclosure Agreement (M-NDA) prior to technical briefing.</label>
                    </div>
                    <div className="pt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <button className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-cobalt hover:bg-cobalt-light text-white font-mono text-xs uppercase tracking-wider transition-colors" type="submit">
                        <span>Submit Institutional Briefing Request</span>
                        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                      </button>
                      <span className="font-mono text-[11px] text-dim">Response SLA: {"<"} 24h via secure dispatch</span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}