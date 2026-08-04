"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const products = [
  {
    id: "augur",
    title: "Augur",
    category: "Governance & Compliance Automation",
    href: "/products/augur",
    description: "AI-powered governance and compliance automation system. Maps raw security findings, code commits, and vulnerability logs to SOC 2 Type II and ISO 27001 controls automatically with audit-ready documentation.",
    tags: ["C# / .NET 10", "Blazor", "EF Core", "OpenAPI 3.1.1"],
    image: "/augur-demo.gif",
    isGif: true,
    badge: "SOC 2 & ISO 27001",
    badgeColor: "bg-[#ff6000]/10 text-[#ff7722] border-[#ff6000]/25 font-mono",
    features: [
      "Automated Control Mapping",
      "Real-time Audit Evidence Collector",
      "OpenAPI 3.1.1 Integration Engine",
      "C# .NET 10 Enterprise High-Performance Backend"
    ]
  },
  {
    id: "doksim",
    title: "DokSim",
    category: "Clinical Training & Patient Simulation",
    href: "/products/doksim",
    description: "Advanced patient communication simulator with intelligent LLM evaluation and safe agentic branching. Empowers medical students and clinical trainees to practice sensitive clinical interviews with real-time feedback.",
    tags: ["Python 3.11", "LangGraph", "Chroma DB", "FastAPI"],
    image: "/doksim-dashboard.png",
    isGif: false,
    badge: "Clinical AI",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 font-mono",
    features: [
      "LangGraph Agentic Dialogue Trees",
      "Real-time Clinical Empathy Evaluation",
      "Chroma Vector RAG Knowledge Retrieval",
      "FastAPI Asynchronous Engine"
    ]
  },
];

const stats = [
  { value: "2", label: "Active AI Systems" },
  { value: "SOC 2 & ISO", label: "Governance Standards" },
  { value: "LangGraph", label: "Agentic Framework" },
  { value: "100%", label: "Audit Precision" },
];

const researchAreas = [
  {
    id: "digital-twin",
    title: "Digital Twin Systems",
    subtitle: "High-fidelity virtual modeling for predictive behavior and workflow optimization.",
    description: "We develop physics-informed digital twins that synchronize real-time IoT sensors, operational logs, and machine state telemetry to simulate systemic disruptions before they manifest in physical operations.",
    tags: ["IoT Simulation", "State Synchronization", "Predictive Analytics"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21v-4"/>
        <path d="M16 21v-4"/>
        <path d="M12 17v4"/>
      </svg>
    ),
  },
  {
    id: "robotics-sim",
    title: "Robotics & Agent Simulation",
    subtitle: "Virtual training environments for autonomous agents in dynamic spaces.",
    description: "Building scalable synthetic environments that train multi-agent reinforcement learning models for robotic navigation, spatial manipulation, and human-robot co-working safety protocols.",
    tags: ["Synthetic Environments", "Multi-Agent RL", "Spatial AI"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3 4H9l3-4z"/>
        <path d="M3 14c0-3.5 2.5-6.5 6-5.5 1.5.3 3 1 4.5 1s3-.7 4.5-1c3.5-1 6 2 6 5.5v6c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2v-6z"/>
        <path d="M5 14v6"/>
        <path d="M19 14v6"/>
      </svg>
    ),
  },
  {
    id: "osint",
    title: "Open Source Intelligence (OSINT)",
    subtitle: "Automated aggregation and signal extraction from public data streams.",
    description: "Leveraging custom LLM reasoning pipelines to filter noise from massive open-source data streams, providing actionable security intelligence and geopolitical risk mapping.",
    tags: ["Signal Extraction", "Risk Mapping", "Graph Analysis"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <circle cx="21" cy="11" r="8"/>
        <path d="M21 3v6l-6 3"/>
      </svg>
    ),
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity & Governance Automation",
    subtitle: "Continuous automated compliance and defensive threat modeling.",
    description: "Connecting security telemetry directly with compliance framework control objectives, eliminating manual audit preparation through continuous verification.",
    tags: ["Automated SOC 2", "Threat Vector Modeling", "DevSecOps"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
  },
  {
    id: "ai-architectures",
    title: "Agentic AI & LLM Evaluation",
    subtitle: "Safe branching, deterministic guardrails, and real-time evaluation rubrics.",
    description: "Designing agentic state machines using frameworks like LangGraph and Custom RAG to perform high-stakes tasks in clinical and compliance domains with zero hallucination tolerance.",
    tags: ["LangGraph", "RAG Optimization", "Deterministic AI"],
    isFeatured: true,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9"/>
        <ellipse cx="12" cy="12" rx="9" ry="4"/>
        <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(120 12 12)"/>
      </svg>
    ),
  },
];

export default function Home() {
  const [activeResearch, setActiveResearch] = useState<string | null>(null);

  return (
    <div className="relative min-h-screen bg-[#0c0d10] text-zinc-100 overflow-hidden w-full flex flex-col items-center">
      {/* HERO SECTION */}
      <section className="relative z-10 px-6 pt-16 pb-20 md:pt-24 md:pb-28 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#181a20] border border-zinc-800 text-[#ff7722] text-xs font-mono tracking-wider uppercase mb-8">
            <span className="w-2 h-2 rounded-full bg-[#ff6000] animate-pulse" />
            Pioneering Intelligent Systems
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
            We build <span className="text-[#ff6000]">intelligent systems</span> for simulation & enterprise automation.
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-3xl mx-auto mb-10">
            As Foretold Labs develops advanced governance automation and clinical training simulators.
            Bridging state-of-the-art AI research with high-precision modular enterprise software.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 mb-16">
            <Link
              href="/products/augur"
              className="btn btn-primary text-sm py-3 px-6 shadow-sm"
            >
              Explore Augur
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/products/doksim"
              className="btn btn-secondary text-sm py-3 px-6"
            >
              Explore DokSim
            </Link>
            <Link
              href="/about"
              className="text-sm text-zinc-400 hover:text-white px-4 py-3 transition-colors"
            >
              About the Lab &rarr;
            </Link>
          </div>

          {/* STATS STRIP */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-xl bg-[#14161b] border border-zinc-800 w-full">
            {stats.map((s, idx) => (
              <div key={idx} className="p-4 text-center">
                <div className="text-2xl md:text-3xl font-extrabold text-white mb-1">
                  {s.value}
                </div>
                <div className="text-xs text-[#ff7722] font-mono tracking-wider uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS SHOWCASE SECTION */}
      <section id="products" className="relative z-10 px-6 py-20 bg-[#121418] border-y border-zinc-800 w-full flex flex-col items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
            <span className="inline-block px-3 py-1 rounded-md bg-[#181a20] border border-zinc-800 text-[#ff7722] text-xs font-mono uppercase tracking-wider mb-3">
              Core Systems
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Enterprise Products & Simulators
            </h2>
            <p className="text-zinc-400 text-base md:text-lg">
              Explore our flagged intelligent solutions engineered for compliance and medical training.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {products.map((p) => (
              <div
                key={p.id}
                className="group relative rounded-xl border border-zinc-800 bg-[#16181d] overflow-hidden hover:border-[#ff6000]/50 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Media Preview Box */}
                  <div className="relative w-full h-64 md:h-72 bg-black overflow-hidden border-b border-zinc-800">
                    <Image
                      src={p.image}
                      alt={`${p.title} preview`}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#16181d] via-transparent to-transparent opacity-90" />
                    
                    <div className="absolute top-4 left-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded border text-xs font-mono ${p.badgeColor}`}>
                        {p.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-zinc-300">
                      <span className="font-mono bg-zinc-950/80 px-2.5 py-1 rounded border border-zinc-800">
                        {p.category}
                      </span>
                      <span className="text-[#ff7722] group-hover:translate-x-1 transition-transform flex items-center gap-1 font-semibold">
                        Launch System &rarr;
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#ff6000] transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                      {p.description}
                    </p>

                    {/* Features checklist */}
                    <div className="space-y-2 mb-6">
                      {p.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                          <svg className="w-4 h-4 text-[#ff6000] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-8 pt-0">
                  <Link
                    href={p.href}
                    className="btn btn-primary w-full text-center text-xs py-3"
                  >
                    View {p.title} System Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESEARCH AREAS SECTION */}
      <section id="research" className="relative z-10 px-6 py-24 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="inline-block px-3 py-1 rounded-md bg-[#181a20] border border-zinc-800 text-[#ff7722] text-xs font-mono uppercase tracking-wider mb-3">
              Research Frontiers
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Key Research Domains
            </h2>
          </div>
          <p className="text-zinc-400 text-sm md:text-base max-w-md">
            Our labs explore real-world digital twin, autonomous agent, and security domain challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchAreas.map((area) => (
            <div
              key={area.id}
              onClick={() => setActiveResearch(activeResearch === area.id ? null : area.id)}
              className={`cursor-pointer rounded-xl border p-6 transition-all duration-200 flex flex-col justify-between ${
                area.isFeatured
                  ? 'border-[#ff6000]/40 bg-[#16181d]'
                  : 'border-zinc-800 bg-[#121418] hover:border-zinc-700'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-zinc-900 text-[#ff7722] border border-zinc-800">
                    {area.icon}
                  </div>
                  {area.isFeatured && (
                    <span className="px-2.5 py-0.5 rounded bg-[#ff6000]/10 text-[#ff7722] text-[10px] font-mono uppercase tracking-wider border border-[#ff6000]/25">
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{area.title}</h3>
                <p className="text-xs text-[#ff7722] font-mono mb-3">{area.subtitle}</p>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  {area.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-800/80">
                  {area.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-400">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BLOG & PUBLICATIONS SECTION */}
      <section className="relative z-10 px-6 py-20 border-t border-zinc-800/80 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#181a20] border border-zinc-800 text-[#ff7722] text-xs font-mono uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-[#ff6000]" />
              Insights & Engineering
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Latest Publications
            </h2>
          </div>
          <Link
            href="/blog"
            className="mt-4 md:mt-0 text-sm font-mono font-semibold text-[#ff7722] hover:text-[#ff8833] flex items-center gap-1 transition-colors"
          >
            Browse All Publications &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link
            href="/blog/kill-switch-era-local-first-ai"
            className="group p-6 rounded-xl border border-zinc-800 bg-[#14161b] hover:border-zinc-700 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-3">
                <span className="px-2 py-0.5 rounded bg-[#ff6000]/10 border border-[#ff6000]/20 text-[#ff7722] font-semibold">
                  Research
                </span>
                <span>13 min read</span>
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-[#ff7722] transition-colors mb-2 leading-snug">
                The Kill Switch Era: Why We&apos;re Going Local-First on AI
              </h3>
              <p className="text-zinc-400 text-xs leading-relaxed mb-4 line-clamp-3">
                With frontier-model access now governed by trade policy and sudden export bans, why As Foretold Research Labs is doubling down on local, open-weight LLMs.
              </p>
            </div>
            <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-400">
              <span>Jun 27, 2026</span>
              <span className="text-[#ff7722] group-hover:translate-x-1 transition-transform">&rarr;</span>
            </div>
          </Link>

          <Link
            href="/blog/pax-silica-green-city-ai-zone"
            className="group p-6 rounded-xl border border-zinc-800 bg-[#14161b] hover:border-zinc-700 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-3">
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-semibold">
                  Research
                </span>
                <span>12 min read</span>
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-[#ff7722] transition-colors mb-2 leading-snug">
                Pax Silica Should Be a Green City, Not Just an AI Zone
              </h3>
              <p className="text-zinc-400 text-xs leading-relaxed mb-4 line-clamp-3">
                A conditional argument for Pax Silica: if the Philippines hosts AI and semiconductor infrastructure, it should demand a green-tech city under local control.
              </p>
            </div>
            <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-400">
              <span>Jul 26, 2026</span>
              <span className="text-[#ff7722] group-hover:translate-x-1 transition-transform">&rarr;</span>
            </div>
          </Link>

          <Link
            href="/blog/canvas-instructure-breach-edtech-security"
            className="group p-6 rounded-xl border border-zinc-800 bg-[#14161b] hover:border-zinc-700 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-3">
                <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 font-semibold">
                  Cybersecurity
                </span>
                <span>14 min read</span>
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-[#ff7722] transition-colors mb-2 leading-snug">
                The Canvas Breach Is a Warning: Why EdTech Platforms Are Soft Targets
              </h3>
              <p className="text-zinc-400 text-xs leading-relaxed mb-4 line-clamp-3">
                The 2026 ShinyHunters breach of Instructure&apos;s Canvas exposed around 275M records across 9,000 institutions. What it means for sensitive data handling.
              </p>
            </div>
            <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-400">
              <span>Jun 27, 2026</span>
              <span className="text-[#ff7722] group-hover:translate-x-1 transition-transform">&rarr;</span>
            </div>
          </Link>
        </div>
      </section>

      {/* COLLABORATION CTA SECTION */}
      <section className="relative z-10 px-6 py-20 bg-[#121418] border-t border-zinc-800 w-full flex flex-col items-center">
        <div className="max-w-4xl mx-auto rounded-2xl border border-zinc-800 bg-[#16181d] p-10 md:p-16 text-center shadow-xl relative overflow-hidden flex flex-col items-center w-full">
          <div className="relative z-10 flex flex-col items-center">
            <span className="inline-block px-3.5 py-1 rounded-md bg-[#181a20] text-[#ff7722] text-xs font-mono uppercase tracking-wider mb-6 border border-zinc-800">
              Partner With Us
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
              Collaborate on Next-Gen Systems
            </h2>
            <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Whether you are looking to integrate Augur compliance automation or deploy DokSim clinical simulations, our engineering team is ready to discuss pilot deployments.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn btn-primary text-sm py-3 px-7">
                Get in Touch
              </Link>
              <Link href="/about" className="btn btn-secondary text-sm py-3 px-7">
                Read Research Overview
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
