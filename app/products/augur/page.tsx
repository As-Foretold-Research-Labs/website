import Link from "next/link";

const features = [
  {
    title: "Evidence mapping",
    desc: "Ingests policy docs and security-tool exports, producing auditable control mappings with risk summaries.",
  },
  {
    title: "Control framework alignment",
    desc: "Maps findings onto SOC 2 and ISO 27001 automatically, so audit prep stops being spreadsheets.",
  },
  {
    title: "Agent with safe fallback",
    desc: "An LLM agent drafts control narratives, with a deterministic fallback when confidence is low.",
  },
  {
    title: "Audit-ready exports",
    desc: "Generates the evidence trail reviewers expect, structured by control and traced to source.",
  },
];

const milestones = [
  ["M1", "Solution architecture + domain model for control mappings."],
  ["M2", "Clean architecture slices: API, application, domain, infrastructure."],
  ["M3", "Evidence ingestion pipeline with deterministic parsing."],
  ["M4", "LLM agent with safe-branch fallback for low-confidence drafts."],
  ["M5", "Control-framework alignment engine (SOC 2 / ISO 27001)."],
  ["M6", "Audit-ready export + evaluation harness."],
  ["M7", "Hardening, tests, and demo walkthrough."],
];

export default function AugurPage() {
  return (
    <div data-theme="augur" className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
      <section className="flex min-h-[80vh] flex-col justify-center py-44 md:py-56">
        <span className="section-kicker mb-10">Portfolio Product / Compliance Automation</span>
        <h1 className="section-heading max-w-3xl">Augur</h1>
        <p className="mt-12 max-w-2xl text-xl text-[var(--accent-2)] md:text-2xl">
          Compliance automation that actually thinks.
        </p>
        <p className="section-copy mt-10 max-w-2xl text-lg leading-relaxed md:text-xl">
          Augur is an AI-assisted governance platform that tracks security controls, ingests
          evidence, and maps findings onto SOC 2 and ISO 27001 requirements so teams can
          ship faster without drowning in audit prep.
        </p>
        <div className="mt-16 flex flex-wrap gap-3">
          {["C# / .NET 10", "Blazor + MediatR", "EF Core + PostgreSQL", "OpenAPI 3.1.1", "Playwright"].map((t) => (
            <span key={t} className="command-chip text-white/72">{t}</span>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32">
        <h2 className="section-heading mb-16 text-3xl md:text-4xl">What it does</h2>
        <div className="grid gap-20 md:grid-cols-2">
          {features.map((f) => (
            <div key={f.title} className="shell-panel p-16 md:p-20">
              <h3 className="mono-text text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--accent-1)]">
                {f.title}
              </h3>
              <p className="section-copy mt-5 text-base leading-relaxed md:text-lg">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32">
        <h2 className="section-heading mb-16 text-3xl md:text-4xl">Architecture</h2>
        <div className="terminal-window">
          <div className="terminal-bar">
            <span className="terminal-dot" />
            <span className="terminal-dot" />
            <span className="terminal-dot" />
            <span className="mono-text ml-3 text-[11px] uppercase tracking-[0.24em] text-white/40">
              architecture / control graph
            </span>
          </div>
          <div className="bg-[#08090e] p-10 font-mono text-sm leading-relaxed text-white/60">
            <pre className="whitespace-pre overflow-x-auto">{`
Presentation   Augur.Web (Blazor) · Augur.ComponentLib · GrcBase
Host           Augur.Api (ASP.NET Core · OpenAPI 3.1.1 · Swagger)
Application     Augur.Application (CQRS + MediatR · validators · Mapster)
Domain          Augur.Domain (entities, enums, repository ports)
Infrastructure  Augur.Infrastructure (EF Core + Npgsql · migrations)
Agent           Augur.Agent (LLM client + deterministic safe-branch)
Data            PostgreSQL
            `.trim()}</pre>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <h2 className="section-heading mb-16 text-3xl md:text-4xl">Build trace</h2>
        <div className="grid gap-16 md:grid-cols-2">
          {milestones.map(([label, text]) => (
            <div key={label} className="shell-panel flex items-start gap-6 p-12 md:p-14">
              <span className="mono-text text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--accent-1)]">
                {label}
              </span>
              <p className="section-copy text-base leading-relaxed md:text-lg">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="shell-panel flex flex-col items-start gap-6 p-16 md:flex-row md:items-center md:justify-between md:p-20">
          <div>
            <span className="section-kicker">Signal</span>
            <h2 className="section-heading mt-6 text-3xl md:text-4xl">Want to discuss Augur?</h2>
            <p className="section-copy mt-6 max-w-xl text-base leading-relaxed md:text-lg">
              Active portfolio project. I can walk through the architecture, agent design, or
              failure-mode choices.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="mailto:hello@asforetold.com?subject=Augur%20inquiry"
              className="command-chip border-transparent bg-[var(--accent-1)] text-[#04070e] hover:opacity-90"
            >
              Get in touch <span className="text-lg leading-none">→</span>
            </Link>
            <Link href="/" className="command-chip hover:border-white/20 hover:bg-white/[0.05] hover:text-white">
              ← Back
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
