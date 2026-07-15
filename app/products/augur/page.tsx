import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Augur — Governance Automation Platform | As Foretold Labs",
  description:
    "AI-assisted compliance automation platform for SOC 2 and ISO 27001 controls. Built on .NET 10 / Blazor / EF Core / MediatR / OpenAPI 3.1.1.",
};

const features = [
  {
    title: "Control Library",
    desc: "SOC 2 and ISO 27001 control catalog with keyword mapping, status tracking, and evidence linking.",
  },
  {
    title: "Evidence Engine",
    desc: "Upload security tool exports or policies; Augur parses, deduplicates, and links findings to controls automatically.",
  },
  {
    title: "AI Mapping Agent",
    desc: "Maps raw findings to controls with deterministic fallback when the LLM is offline or returns malformed output.",
  },
  {
    title: "CQRS Query Layer",
    desc: "Fast read paths via MediatR queries over EF Core repositories — dashboard and reports stay responsive.",
  },
  {
    title: "OpenAPI-First Design",
    desc: "Strictly typed ASP.NET Core controllers with mandatory XML docs injected into OpenAPI 3.1.1.",
  },
  {
    title: "E2E-Tested UI",
    desc: "Blazor server UI driven by Playwright over data-testid selectors, covering create-control → upload → agent → status.",
  },
  {
    title: "Persistence",
    desc: "PostgreSQL via EF Core migrations; findings are deduplicated by ExternalId and queryable through normal CQRS paths.",
  },
  {
    title: "Agent Architecture",
    desc: "Framed prompt + defensive JSON parsing + deterministic keyword fallback — the product always returns a result.",
  },
];

const milestones = [
  ["M1", "Onion Architecture split — Domain / Application / Infrastructure / API with dependency direction enforced"],
  ["M2", "CQRS — MediatR commands + queries, FluentValidation pipeline, EF Core repositories, migrations"],
  ["M3", "Blazor UI — control library, evidence upload, dashboard, GrcBase components, scoped .scss"],
  ["M4", "OpenAPI 3.1.1 spec with mandatory XML docs injected on every endpoint"],
  ["M5", "Agent layer — LLM framing + defensive JSON parsing + deterministic offline-safe fallback"],
  ["M6", "Playwright E2E over data-testid selectors covering all four core flows"],
  ["M7", "Polish — warning-clean nullable build, README discipline, production-ready state"],
];

export default function AugurPage() {
  return (
    <div data-theme="augur" className="relative">
      {/* Ambient */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="mesh-gradient" />
      </div>

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-[11px] md:text-[12px] font-semibold tracking-[0.25em] text-[var(--kicker)] uppercase mb-6">
              Portfolio Product — Compliance Automation
            </span>
            <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight mb-6" style={{ color: "var(--section-heading)" }}>
              Augur
            </h1>
            <p className="text-[clamp(1.125rem,2vw,1.5rem)] text-[var(--accent-2)] mb-6 leading-snug">
              Compliance automation that actually thinks.
            </p>
            <p className="text-body text-white/50 leading-relaxed max-w-2xl mb-10">
              Augur is an AI-assisted governance platform that tracks security controls, ingests evidence,
              and maps findings onto SOC 2 and ISO 27001 requirements — so teams can ship faster without
              drowning in audit prep.
            </p>

            <div className="flex flex-wrap gap-3">
              {["C# / .NET 10", "Blazor + MediatR", "EF Core + PostgreSQL", "OpenAPI 3.1.1", "Playwright"].map((tag) => (
                <span key={tag} className="px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] text-[12px] font-medium text-white/70">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem / Value */}
      <section className="relative py-20 md:py-28 border-t border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[11px] md:text-[12px] font-semibold tracking-[0.25em] text-[var(--kicker)] uppercase block mb-4">Why it exists</span>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold tracking-tight mb-6" style={{ color: "var(--section-heading)" }}>
              Built because audit prep is broken
            </h2>
            <p className="text-body text-white/50 leading-relaxed">
              Compliance teams spend up to 40% of their time collecting, organizing, and mapping evidence
              to control frameworks. Augur automates the low-value work: reading policy documents,
              parsing security tool exports, and producing auditable control mappings with risk summaries —
              so your team can focus on actual risk decisions instead of spreadsheets.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative py-20 md:py-28 border-t border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <span className="text-[11px] md:text-[12px] font-semibold tracking-[0.25em] text-[var(--kicker)] uppercase block mb-4">Core Features</span>
          <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold tracking-tight mb-10 md:mb-14" style={{ color: "var(--section-heading)" }}>
            What it does
          </h2>

          <div className="grid gap-5 md:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group p-6 md:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] transition-all duration-300 hover:border-white/15 hover:bg-white/[0.04]"
              >
                <h3 className="text-[11px] md:text-[12px] font-bold tracking-[0.2em] text-[var(--accent-1)] uppercase mb-3">
                  {feature.title}
                </h3>
                <p className="text-desc text-white/45 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="relative py-20 md:py-28 border-t border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <span className="text-[11px] md:text-[12px] font-semibold tracking-[0.25em] text-[var(--kicker)] uppercase block mb-4">Architecture</span>
          <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold tracking-tight mb-8" style={{ color: "var(--section-heading)" }}>
            Clean-applied Onion
          </h2>
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 md:p-8 font-mono text-[11px] md:text-[13px] text-white/50 leading-relaxed overflow-x-auto">
            <pre>{`
┌──────────────────────────────────────────────────────────────────────────────┐
│  Augur.Web (Blazor)  ·  Augur.ComponentLib  ·  GrcBase Shared Components   │  Presentation
└───────────────────────────────┬──────────────────────────────────────────────┘
                                │ HttpClient
┌───────────────────────────────▼──────────────────────────────────────────────┐
│  Augur.Api (ASP.NET Core · OpenAPI 3.1.1 · Swagger UI )                      │  API / Host
└───────────────────────────────┬──────────────────────────────────────────────┘
                                │ MediatR
┌───────────────────────────────▼──────────────────────────────────────────────┐
│  Augur.Application (CQRS handlers · validators · Mapster · pipeline)         │  Application
└──────────┬────────────────────────────────┬─────────────────────────────────┘
           │ ports (IUnitOfWork, IRepo)      │
┌──────────▼──────────────────┐  ┌───────────▼───────────────────────────────┐
│  Augur.Domain              │  │  Augur.Infrastructure (EF Core + Npgsql)  │
│  entities, enums,           │  │  DbContext impls · migrations ·            │
│  repository *ports*         │  │  IUnitOfWork implementation                │
└────────────────────────────┘  └───────────────────┬─────────────────────────┘
                                                     │ PostgreSQL
                                                ┌────▼─────────┐
                                                │  Augur.Agent │  (Application + Domain only)
                                                │  LLM client  │
                                                │  + fallback  │
                                                └──────────────┘
            `.trim()}
            </pre>
          </div>
          <p className="text-body text-white/40 mt-4">
            Dependencies only point inward. Domain knows nothing about EF Core or PostgreSQL. Infrastructure
            is the only layer that touches the database. Agent references Application + Domain — never Infrastructure.
          </p>
        </div>
      </section>

      {/* Milestones */}
      <section className="relative py-20 md:py-28 border-t border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <span className="text-[11px] md:text-[12px] font-semibold tracking-[0.25em] text-[var(--kicker)] uppercase block mb-4">Milestones</span>
          <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold tracking-tight mb-8" style={{ color: "var(--section-heading)" }}>
            Build trace
          </h2>
          <div className="grid gap-3">
            {milestones.map(([label, text]) => (
              <div key={label} className="flex gap-5 items-start p-4 md:p-5 rounded-xl border border-white/[0.04] bg-white/[0.01]">
                <span className="mt-[2px] text-[11px] md:text-xs font-bold tracking-widest text-[var(--accent-1)] whitespace-nowrap">{label}</span>
                <p className="text-body text-white/45 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo */}
      <section className="relative py-20 md:py-28 border-t border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <span className="text-[11px] md:text-[12px] font-semibold tracking-[0.25em] text-[var(--kicker)] uppercase block mb-4">Demo</span>
          <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold tracking-tight mb-8" style={{ color: "var(--section-heading)" }}>
            Product walkthrough
          </h2>
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.015] overflow-hidden">
            <div className="p-4 border-b border-white/[0.06] flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="ml-3 text-[11px] font-medium text-white/35 tracking-wide">AUGUR — DASHBOARD · CONTROLS · EVIDENCE · AGENT</span>
            </div>
            <div className="p-2 md:p-4">
              <Image
                src="/augur-demo.gif"
                alt="Augur product demo"
                width={1280}
                height={720}
                unoptimized
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-28 border-t border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold tracking-tight mb-6" style={{ color: "var(--section-heading)" }}>
              Want to discuss Augur?
            </h2>
            <p className="text-body text-white/50 leading-relaxed mb-8 max-w-xl">
              This is an active portfolio project — I can walk through the architecture, agent design decisions,
              or failure-mode choices in detail.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="mailto:hello@asforetolabs.com?subject=Augur%20product%20inquiry"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--accent-1)] text-[#04070e] text-[14px] font-semibold transition-opacity hover:opacity-90"
              >
                Get in touch
                <span className="text-lg leading-none">→</span>
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 text-[14px] font-medium text-white/80 hover:bg-white/5 transition-colors"
              >
                ← Back to site
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
