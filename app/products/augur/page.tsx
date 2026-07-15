import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Augur — Governance Automation Platform | As Foretold Labs",
  description:
    "AI-assisted compliance automation platform for SOC 2 and ISO 27001 controls. Built on .NET 10, Blazor, EF Core, MediatR, and OpenAPI 3.1.1.",
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
    desc: "Fast read paths via MediatR queries over EF Core repositories so dashboards and reports stay responsive.",
  },
  {
    title: "OpenAPI-First Design",
    desc: "Strictly typed ASP.NET Core controllers with mandatory XML docs injected into OpenAPI 3.1.1.",
  },
  {
    title: "E2E-Tested UI",
    desc: "Blazor server UI driven by Playwright over data-testid selectors, covering create-control to upload to agent to status.",
  },
  {
    title: "Persistence",
    desc: "PostgreSQL via EF Core migrations; findings are deduplicated by ExternalId and queryable through normal CQRS paths.",
  },
  {
    title: "Agent Architecture",
    desc: "Framed prompt + defensive JSON parsing + deterministic keyword fallback so the product always returns a result.",
  },
];

const milestones = [
  ["M1", "Onion Architecture split - Domain / Application / Infrastructure / API with dependency direction enforced"],
  ["M2", "CQRS - MediatR commands + queries, FluentValidation pipeline, EF Core repositories, migrations"],
  ["M3", "Blazor UI - control library, evidence upload, dashboard, GrcBase components, scoped .scss"],
  ["M4", "OpenAPI 3.1.1 spec with mandatory XML docs injected on every endpoint"],
  ["M5", "Agent layer - LLM framing + defensive JSON parsing + deterministic offline-safe fallback"],
  ["M6", "Playwright E2E over data-testid selectors covering all four core flows"],
  ["M7", "Polish - warning-clean nullable build, README discipline, production-ready state"],
];

export default function AugurPage() {
  return (
    <div data-theme="augur" className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 py-40 md:py-56">
      <section className="grid gap-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
        <div className="shell-panel p-16 md:p-20 xl:p-24">
          <span className="section-kicker">Portfolio Product / Compliance Automation</span>
          <h1 className="section-heading mt-16 max-w-3xl">Augur</h1>
          <p className="mt-16 max-w-2xl text-xl md:text-2xl text-[var(--accent-2)] leading-snug">
            Compliance automation that actually thinks.
          </p>
          <p className="mt-16 max-w-2xl text-xl md:text-2xl section-copy leading-relaxed">
            Augur is an AI-assisted governance platform that tracks security controls, ingests evidence,
            and maps findings onto SOC 2 and ISO 27001 requirements so teams can ship faster without
            drowning in audit prep.
          </p>
          <div className="mt-16 flex flex-wrap gap-4">
            {["C# / .NET 10", "Blazor + MediatR", "EF Core + PostgreSQL", "OpenAPI 3.1.1", "Playwright"].map((tag) => (
              <span key={tag} className="command-chip text-white/72">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="terminal-window">
          <div className="terminal-bar">
            <span className="terminal-dot" />
            <span className="terminal-dot" />
            <span className="terminal-dot" />
            <span className="ml-3 mono-text text-[11px] tracking-[0.24em] text-white/40 uppercase">
              augur / control surface
            </span>
          </div>
          <div className="grid gap-12 p-14 md:p-16">
            <div className="metric-card">
              <p className="mono-text text-[11px] uppercase tracking-[0.24em] text-white/40">status</p>
              <p className="mt-4 text-xl text-white/85">Audit workflow mapped</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="metric-card">
                <p className="text-2xl font-semibold text-white">7</p>
                <p className="mt-3 text-[11px] uppercase tracking-[0.24em] text-white/40">milestones</p>
              </div>
              <div className="metric-card">
                <p className="text-2xl font-semibold text-white">SOC 2</p>
                <p className="mt-3 text-[11px] uppercase tracking-[0.24em] text-white/40">framework</p>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-10 md:p-12">
              <p className="mono-text text-[11px] uppercase tracking-[0.24em] text-white/35">note</p>
              <p className="mt-4 text-base md:text-lg text-white/58 leading-relaxed">
                Every interface decision is built to feel operational, not decorative.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-44 md:mt-56 shell-panel p-16 md:p-20">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <span className="section-kicker">Why it exists</span>
            <h2 className="section-heading mt-16 text-4xl md:text-5xl">Built because audit prep is broken</h2>
          </div>
          <p className="text-xl md:text-2xl section-copy leading-relaxed">
            Compliance teams spend up to 40% of their time collecting, organizing, and mapping evidence to
            control frameworks. Augur automates the low-value work: reading policy documents, parsing security
            tool exports, and producing auditable control mappings with risk summaries so the team can focus
            on actual risk decisions instead of spreadsheets.
          </p>
        </div>
      </section>

      <section className="mt-44 md:mt-56">
        <div className="mb-20 md:mb-24">
          <span className="section-kicker">Core Features</span>
          <h2 className="section-heading mt-16 text-4xl md:text-5xl">What it does</h2>
        </div>
        <div className="grid gap-16 md:grid-cols-2">
          {features.map((feature) => (
            <div key={feature.title} className="shell-panel p-14 md:p-16">
              <h3 className="mono-text text-[11px] font-bold tracking-[0.24em] text-[var(--accent-1)] uppercase mb-4">
                {feature.title}
              </h3>
              <p className="text-lg md:text-xl text-white/56 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-44 md:mt-56 terminal-window">
        <div className="terminal-bar">
          <span className="terminal-dot" />
          <span className="terminal-dot" />
          <span className="terminal-dot" />
          <span className="ml-3 mono-text text-[11px] tracking-[0.24em] text-white/40 uppercase">
            architecture / control graph
          </span>
        </div>
        <div className="p-14 md:p-16">
          <span className="section-kicker">Architecture</span>
          <h2 className="section-heading mt-16 mb-8 text-4xl md:text-5xl">Clean applied onion</h2>
          <div className="rounded-[20px] border border-white/10 bg-black/20 p-6 md:p-8 font-mono text-[11px] md:text-[13px] text-white/55 leading-relaxed overflow-x-auto">
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
│  repository ports          │  │  IUnitOfWork implementation                │
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
        </div>
      </section>

      <section className="mt-44 md:mt-56">
        <div className="mb-20 md:mb-24">
          <span className="section-kicker">Milestones</span>
          <h2 className="section-heading mt-16 text-4xl md:text-5xl">Build trace</h2>
        </div>
        <div className="grid gap-12 md:grid-cols-2">
          {milestones.map(([label, text]) => (
            <div key={label} className="shell-panel flex items-start gap-6 p-10 md:p-11">
              <span className="mono-text text-[11px] md:text-xs font-bold tracking-[0.24em] text-[var(--accent-1)] whitespace-nowrap">
                {label}
              </span>
              <p className="text-lg md:text-xl text-white/55 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-44 md:mt-56">
        <div className="mb-20 md:mb-24">
          <span className="section-kicker">Demo</span>
          <h2 className="section-heading mt-16 text-4xl md:text-5xl">Product walkthrough</h2>
        </div>
        <div className="terminal-window">
          <div className="terminal-bar">
            <span className="terminal-dot" />
            <span className="terminal-dot" />
            <span className="terminal-dot" />
            <span className="ml-3 mono-text text-[11px] tracking-[0.24em] text-white/40 uppercase">
              augur / dashboard / evidence / agent
            </span>
          </div>
          <div className="p-3 md:p-5">
            <Image
              src="/augur-demo.gif"
              alt="Augur product demo"
              width={1280}
              height={720}
              unoptimized
              className="w-full h-auto rounded-[18px]"
            />
          </div>
        </div>
      </section>

      <section className="mt-44 md:mt-56 shell-panel p-16 md:p-20">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <span className="section-kicker">Signal</span>
            <h2 className="section-heading mt-16 text-4xl md:text-5xl">Want to discuss Augur?</h2>
            <p className="mt-16 max-w-2xl text-xl md:text-2xl section-copy leading-relaxed">
              This is an active portfolio project. I can walk through the architecture, agent design decisions,
              or failure-mode choices in detail.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="mailto:hello@asforetolabs.com?subject=Augur%20product%20inquiry"
              className="command-chip border-transparent bg-[var(--accent-1)] text-[#04070e] hover:opacity-90"
            >
              Get in touch
              <span className="text-lg leading-none">→</span>
            </Link>
            <Link href="/" className="command-chip hover:border-white/20 hover:bg-white/[0.05] hover:text-white">
              ← Back to site
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
