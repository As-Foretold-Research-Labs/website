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
    <div data-theme="augur" className="w-full px-6 sm:px-10 md:px-16 lg:px-24 xl:px-28">
      <section className="flex min-h-[80vh] flex-col justify-center py-40 md:py-56">
        <span className="eyebrow mb-10">// Portfolio Product — Compliance Automation</span>
        <h1 className="display max-w-4xl text-[clamp(3rem,9vw,7rem)]">Augur</h1>
        <p className="mt-12 max-w-2xl body-copy text-lg md:text-xl">
          Augur is an AI-assisted governance platform that tracks security controls, ingests
          evidence, and maps findings onto SOC 2 and ISO 27001 requirements so teams can ship
          faster without drowning in audit prep.
        </p>
        <div className="mt-16 flex flex-wrap gap-3">
          {["C# / .NET 10", "Blazor + MediatR", "EF Core + PostgreSQL", "OpenAPI 3.1.1", "Playwright"].map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32">
        <span className="eyebrow mb-16 block">// What it does</span>
        <div className="grid gap-px bg-[var(--line-soft)] md:grid-cols-2">
          {features.map((f) => (
            <div key={f.title} className="bg-black p-10 md:p-14">
              <h3 className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--accent)]">
                {f.title}
              </h3>
              <p className="body-copy mt-5 text-base md:text-lg">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32">
        <span className="eyebrow mb-16 block">// Architecture</span>
        <div className="panel overflow-hidden">
          <div className="border-b border-[var(--line-soft)] px-6 py-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/40">
              architecture / control graph
            </span>
          </div>
          <div className="bg-black p-8 font-mono text-sm leading-relaxed text-white/60">
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
        <span className="eyebrow mb-16 block">// Build trace</span>
        <div className="grid gap-px bg-[var(--line-soft)] md:grid-cols-2">
          {milestones.map(([label, text]) => (
            <div key={label} className="flex items-start gap-6 bg-black p-10 md:p-14">
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--accent)]">
                {label}
              </span>
              <p className="body-copy text-base md:text-lg">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="panel flex flex-col items-start gap-6 p-10 md:flex-row md:items-center md:justify-between md:p-16">
          <div>
            <span className="eyebrow">// Signal</span>
            <h2 className="display mt-6 text-3xl md:text-5xl">Want to discuss Augur?</h2>
            <p className="body-copy mt-5 max-w-xl text-base md:text-lg">
              Active portfolio project. I can walk through the architecture, agent design, or
              failure-mode choices.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="mailto:hello@asforetold.com?subject=Augur%20inquiry" className="chip chip--solid">
              Get in touch →
            </Link>
            <Link href="/" className="chip">
              ← Back
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
