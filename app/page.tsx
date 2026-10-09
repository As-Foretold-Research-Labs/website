"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const products = [
  {
    id: "augur",
    title: "Augur",
    category: "Continuous Compliance & Sovereign Governance",
    href: "/products/augur",
    description: "Autonomous governance architecture that translates dynamic codebases, infrastructure telemetry, and vulnerability vectors into continuous compliance verification. Replaces point-in-time manual audits with living institutional evidence.",
    tags: ["C# / .NET 10", "Blazor Server", "EF Core", "OpenAPI 3.1.1"],
    image: "/augur-demo.gif",
    isGif: true,
    badge: "SOC 2 / ISO 27001 / FedRAMP",
    badgeColor: "badge-primary",
    features: [
      "Deterministic Control Cross-Mapping",
      "Real-time Evidence Ingestion",
      "Automated OpenAPI 3.1.1 Contract Validation",
      "Cryptographic Ledger Anchoring"
    ]
  },
  {
    id: "doksim",
    title: "DokSim",
    category: "High-Stakes Clinical Validation Platform",
    href: "/products/doksim",
    description: "Agentic simulation environments designed for clinical training, differential diagnosis stress-testing, and empathic interview evaluation under strict safety guardrails.",
    tags: ["Python 3.11", "LangGraph", "ChromaDB RAG", "FastAPI"],
    image: "/doksim-dashboard.png",
    isGif: false,
    badge: "Clinical AI / HIPAA",
    badgeColor: "badge-emerald",
    features: [
      "Deterministic State Machines",
      "Sub-16ms Vector Retrieval",
      "12-Axis Empathy Rubrics",
      "Zero Hallucination Protocols"
    ]
  },
  {
    id: "citytwin",
    title: "CityTwin",
    category: "Physics-Informed Spatial Simulation Engine",
    href: "/products/citytwin",
    description: "Zero-latency spatial environment synchronization for multi-agent robotics, urban logistics, and synthetic environment testing. Bridges physical sensor networks with deep learning surrogates.",
    tags: ["CUDA / PyTorch", "WebGPU", "MARL", "ROS2 / OPC-UA"],
    image: "/citytwin-hero.jpg",
    isGif: false,
    badge: "Spatial / FedRAMP Ready",
    badgeColor: "badge-primary",
    features: [
      "Continuous PDE Solver Integration",
      "Distributed MARL Execution",
      "100k+ Telemetry Nodes",
      "Hardware-in-the-Loop Validation"
    ]
  }
];

const stats = [
  { value: "3", label: "Mission Platforms" },
  { value: "Continuous", label: "Assurance Model" },
  { value: "Deterministic", label: "Agent Framework" },
  { value: "Zero-Trust", label: "Data Perimeter" },
];

const capabilities = [
  {
    id: 1,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "Autonomous Defense & Systems Simulation",
    description: "Constructing high-fidelity synthetic proving grounds for multi-agent autonomous assets. Generating edge cases and stress conditions impossible to replicate in physical test ranges safely.",
    tags: ["Robotics Gym", "Spatial Twins", "MARL"]
  },
  {
    id: 2,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Institutional Governance & Threat Modeling",
    description: "Architecting automated compliance rails that continuously measure software artifacts against security frameworks. Automated provenance, vulnerability verification, and audit evidence generation.",
    tags: ["Sovereign Audit", "Zero Hallucination", "Continuous Proof"]
  },
  {
    id: 3,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Clinical Decision & Empathic Validation",
    description: "Deterministic LLM evaluation pipelines deployed within clinical decision loops. Balancing medical knowledge ontologies, emotional distress modeling, and human-in-the-loop validation metrics.",
    tags: ["State Machines", "Vector Ontologies", "Licensing Metrics"]
  },
];

const publications = [
  {
    slug: "/intelligence/kill-switch-era",
    category: "Strategic Monograph",
    date: "JUN 2026",
    readTime: "18 Min",
    title: "The Kill Switch Era: Sovereign Institutions and Local-First AI",
    excerpt: "Analysis of frontier-model supply chains governed by sudden export embargoes and the institutional necessity of deploying open-weight models on air-gapped hardware enclaves."
  },
  {
    slug: "/intelligence/pax-silica",
    category: "Geopolitical Systems",
    date: "JUL 2026",
    readTime: "12 Min",
    title: "Pax Silica: Industrial Decarbonization and Sovereign Semiconductor Hubs",
    excerpt: "Framework for sovereign compute host nations: why hosting AI data centers demands reciprocal sovereign control over domestic power and digital twin grids."
  },
  {
    slug: "/intelligence/canvas-breach",
    category: "Operational Risk",
    date: "JUN 2026",
    readTime: "14 Min",
    title: "The Canvas Incident: Educational Infrastructure as National Soft Targets",
    excerpt: "Technical post-mortem on the 275-million-record exfiltration across 9,000 academic entities. Architectural audit of central database concentration vulnerabilities."
  }
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-obsidian text-white overflow-hidden w-full flex flex-col items-center">
      {/* Subtle Ambient Glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1100px] h-[450px] bg-gradient-to-b from-blue-900/10 via-transparent to-transparent blur-[160px]" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-950/5 blur-[180px]" />
      </div>

      {/* HERO SECTION */}
      <section className="relative z-10 px-6 lg:px-12 pt-24 md:pt-36 pb-20 md:pb-28 max-w-7xl mx-auto w-full grid-pattern border-b border-surface-border">
        <div className="max-w-4xl">
          {/* Sovereign Tag */}
          <div className="inline-flex items-center gap-2.5 px-2.5 py-1 mb-8 border border-surface-border bg-surface text-steel text-[11px] font-mono tracking-widest uppercase">
            <span className="w-1.5 h-1.5 bg-cobalt-light" />
            Operational Sovereignty • Simulation • Decision Superiority
          </div>

          {/* Editorial Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tighter leading-[1.06] text-white mb-8">
            Software for Critical Operations: Simulation, Governance, and Sovereign Intelligence.
          </h1>

          {/* Executive Subtext */}
          <p className="font-body text-lg sm:text-xl text-steel font-normal leading-relaxed max-w-3xl mb-12">
            As Foretold Labs builds mission-grade platforms for autonomous decision-making, clinical validation, and continuous regulatory sovereignty. Engineered specifically for enterprise and institutional environments where failure is not an option.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              className="inline-flex items-center justify-center px-6 py-3.5 bg-white text-obsidian text-xs font-mono font-semibold tracking-widest uppercase hover:bg-neutral-200 transition-colors"
              href="#briefing"
            >
              Deploy Mission Architecture
            </Link>
            <Link
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-surface-border bg-surface-card hover:border-white/30 text-white text-xs font-mono tracking-widest uppercase transition-colors"
              href="#platforms"
            >
              <span>Examine Platforms</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
            <Link
              className="text-xs font-mono tracking-wider text-steel hover:text-white px-3 py-3 transition-colors uppercase"
              href="#capabilities"
            >
              Read Capabilities Brief →
            </Link>
          </div>
        </div>

        {/* Operational Metric Pillars */}
        <div className="mt-24 pt-12 border-t border-surface-border grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div>
            <div className="font-mono text-xs text-steel uppercase tracking-widest mb-2">Platform Deployment</div>
            <div className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Tier-0 Ready</div>
            <p className="font-body text-xs text-muted mt-1.5">Air-gapped and sovereign enclave compatible.</p>
          </div>
          <div>
            <div className="font-mono text-xs text-steel uppercase tracking-widest mb-2">Assurance Standard</div>
            <div className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Continuous</div>
            <p className="font-body text-xs text-muted mt-1.5">SOC 2 Type II, ISO 27001 algorithmic fidelity.</p>
          </div>
          <div>
            <div className="font-mono text-xs text-steel uppercase tracking-widest mb-2">Agent Framework</div>
            <div className="text-2xl sm:text-3xl font-semibold tracking-tight text-cobalt-light">Deterministic</div>
            <p className="font-body text-xs text-muted mt-1.5">Constrained LangGraph state orchestration.</p>
          </div>
          <div>
            <div className="font-mono text-xs text-steel uppercase tracking-widest mb-2">Mission Integrity</div>
            <div className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Zero-Tolerance</div>
            <p className="font-body text-xs text-muted mt-1.5">Zero-hallucination protocols for clinical & audit.</p>
          </div>
        </div>
      </section>

      {/* ENTERPRISE PLATFORMS */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto w-full border-b border-surface-border" id="platforms">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-[11px] font-mono tracking-widest uppercase text-steel mb-3">Enterprise Suite</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">Core Platforms</h2>
          </div>
          <p className="font-body text-steel text-sm md:text-base max-w-md">
            Institutional software designed to ingest operational complexity, synthesize ground truth, and execute high-fidelity actions across regulatory, medical, and spatial infrastructure.
          </p>
        </div>
        <div className="space-y-12">
          {products.map((p) => (
            <div
              key={p.id}
              className="border border-surface-border bg-surface-card p-8 md:p-12 hover:border-surface-border-strong transition-all duration-300"
              id={`${p.id}-detail`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                <div className="lg:col-span-4">
                  <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-steel mb-4">
                    <span className={`w-2 h-2 rounded-full ${p.id === 'augur' ? 'bg-white' : p.id === 'doksim' ? 'bg-cobalt-light' : 'bg-white'}`} />
                    Platform Pillar • 0{p.id === 'augur' ? 1 : p.id === 'doksim' ? 2 : 3}
                  </div>
                  <h3 className="text-2xl md:text-4xl font-semibold tracking-tight text-white mb-3">{p.title}</h3>
                  <div className="font-mono text-xs text-cobalt-light tracking-wider uppercase mb-6">{p.category}</div>
                  <p className="font-body text-sm text-steel leading-relaxed mb-6">
                    {p.description}
                  </p>
                  <Link
                    className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-white hover:text-cobalt-light transition-colors"
                    href="#briefing"
                  >
                    <span>Examine {p.title} Deployment</span>
                    <span className="material-symbols-outlined text-sm">arrow_outward</span>
                  </Link>
                </div>
                <div className="lg:col-span-8 border-t lg:border-t-0 lg:border-l border-surface-border pt-8 lg:pt-0 lg:pl-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-widest text-white mb-2">Strategic Capabilities</h4>
                    <ul className="space-y-3 font-body text-xs text-steel">
                      {p.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1 h-1 bg-white mt-1.5 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-widest text-white mb-2">Institutional Impact</h4>
                    <div className="space-y-3 font-body text-xs text-steel">
                      <p>{p.id === 'augur' && "Eliminates the multi-month latency of institutional compliance filings, creating verifiable, real-time audit readiness for defense and critical banking infrastructure."}
                      {p.id === 'doksim' && "Scales repeatable, risk-free bedside simulation across university medical systems and clinical licensing bodies with rigorous reproducibility metrics."}
                      {p.id === 'citytwin' && "Provides sovereign infrastructure operators with predictive operational control to simulate systemic urban or industrial disruptions before real-world cascade failures."}
                      </p>
                      <div className="pt-3 border-t border-surface-border font-mono text-[11px] text-muted space-y-1">
                        {p.id === 'augur' && (
                          <>
                            <div>CORE RUNTIME: High-Performance C# / .NET 10 Enclave</div>
                            <div>DEPLOYMENT: Air-Gapped, Hybrid Sovereign Cloud</div>
                          </>
                        )}
                        {p.id === 'doksim' && (
                          <>
                            <div>CORE RUNTIME: Python 3.11 / LangGraph / ChromaDB RAG</div>
                            <div>FRAMEWORK: Asynchronous Low-Latency Evaluation Engine</div>
                          </>
                        )}
                        {p.id === 'citytwin' && (
                          <>
                            <div>CORE RUNTIME: CUDA / PyTorch / WebGPU Accelerated Engine</div>
                            <div>INTERFACE: Direct Telemetry Bus & High-Fidelity Twin</div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STRATEGIC CAPABILITIES */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto w-full border-b border-surface-border" id="capabilities">
        <div className="max-w-3xl mb-16">
          <div className="text-[11px] font-mono tracking-widest uppercase text-steel mb-3">Intelligence & Defense Frontiers</div>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">Strategic Capabilities</h2>
          <p className="font-body text-steel text-sm md:text-base leading-relaxed">
            Where high-stakes artificial intelligence interfaces with sovereign operations, automated defense, and deterministic execution.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-surface-border">
          {capabilities.map((cap) => (
            <div key={cap.id} className="bg-obsidian p-8 md:p-10 flex flex-col justify-between">
              <div>
                <div className="font-mono text-xs text-steel uppercase tracking-widest mb-4">Capability 0{cap.id}</div>
                <div className="w-10 h-10 border border-surface-border bg-surface flex items-center justify-center text-cobalt-light mb-6">
                  {cap.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{cap.title}</h3>
                <p className="font-body text-xs text-steel leading-relaxed mb-6">
                  {cap.description}
                </p>
              </div>
              <div className="pt-6 border-t border-surface-border text-[11px] font-mono text-muted uppercase tracking-wider">
                {cap.tags.join(" • ")}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STRATEGIC INTELLIGENCE / PUBLICATIONS */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto w-full border-b border-surface-border" id="intelligence">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-[11px] font-mono tracking-widest uppercase text-steel mb-3">Dispatches</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">Strategic Intelligence</h2>
          </div>
          <Link
            className="text-xs font-mono tracking-widest uppercase text-steel hover:text-white transition-colors"
            href="/intelligence"
          >
            View All Briefings →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {publications.map((pub) => (
            <article key={pub.slug} className="border border-surface-border bg-surface p-8 flex flex-col justify-between hover:border-surface-border-strong transition-all">
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-steel uppercase tracking-widest mb-6">
                  <span>{pub.category}</span>
                  <span>{pub.date} · {pub.readTime}</span>
                </div>
                <Link href={pub.slug} className="block">
                  <h3 className="text-lg font-semibold text-white tracking-tight mb-4 leading-snug hover:text-cobalt-light transition-colors">
                    {pub.title}
                  </h3>
                </Link>
                <p className="font-body text-xs text-steel leading-relaxed mb-8">
                  {pub.excerpt}
                </p>
              </div>
              <div className="pt-4 border-t border-surface-border flex items-center justify-between text-xs font-mono text-steel hover:text-white transition-colors">
                <span className="uppercase tracking-widest">Read Briefing</span>
                <span>→</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* INSTITUTIONAL ENGAGEMENT CTA */}
      <section className="py-24 md:py-32 px-6 lg:px-12 max-w-7xl mx-auto w-full" id="briefing">
        <div className="border border-surface-border bg-surface-card p-8 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden subtle-glow">
          <div className="inline-flex items-center gap-2 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-steel border border-surface-border bg-obsidian mb-6">
            Institutional Engagement
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">
            Deploy Mission Architecture
          </h2>
          <p className="font-body text-steel text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-10">
            Consult with our systems architecture team regarding production deployments of Augur, DokSim, or CityTwin across sovereign cloud, hybrid enterprise, or air-gapped enclaves.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-obsidian text-xs font-mono font-semibold tracking-widest uppercase hover:bg-neutral-200 transition-colors"
              href="mailto:velasquez.marcvictor.l@asforetold.space?subject=Request%20Institutional%20Briefing"
            >
              Request Institutional Briefing
            </Link>
            <Link
              className="inline-flex items-center justify-center px-8 py-4 border border-surface-border bg-obsidian text-white text-xs font-mono tracking-widest uppercase hover:border-white/30 transition-colors"
              href="#platforms"
            >
              Review Technical Specifications
            </Link>
          </div>
          <div className="mt-12 pt-8 border-t border-surface-border/60 flex flex-wrap items-center justify-center gap-6 font-mono text-[11px] text-muted">
            <span>SOC 2 TYPE II VERIFIED</span>
            <span>•</span>
            <span>AIR-GAPPED COMPLIANT</span>
            <span>•</span>
            <span>DIRECT: velasquez.marcvictor.l@asforetold.space</span>
          </div>
        </div>
      </section>
    </div>
  );
}