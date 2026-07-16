import Link from "next/link";

const features = [
  {
    title: "Multi-provider LLM",
    desc: "Pluggable provider per slot: patient voice, judge voice, and embeddings. OpenAI, Anthropic, Azure AI Foundry.",
  },
  {
    title: "Synthetic patient personas",
    desc: "Config-driven personas and scenarios with automatic turn parsing and retry.",
  },
  {
    title: "LLM-as-judge evaluation",
    desc: "Transcripts scored against a competency rubric by an independent judge model.",
  },
  {
    title: "RAG-backed memory",
    desc: "Chroma-backed retrieval keeps patient consistency across conversation turns.",
  },
  {
    title: "Red-line safe branch",
    desc: "Critical keywords or unsafe trajectories are intercepted by a deterministic safe-branch.",
  },
  {
    title: "Dual interface",
    desc: "FastAPI session API for web integration and a Typer CLI harness for offline eval.",
  },
];

const providers = [
  { name: "OpenAI", detail: "GPT-4o / GPT-4o-mini · patient · judge · embeddings" },
  { name: "Anthropic", detail: "Claude Sonnet · patient · judge" },
  { name: "Azure AI Foundry", detail: "Enterprise deployments · optional native eval" },
];

export default function DokSimPage() {
  return (
    <div data-theme="doksim" className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
      <section className="flex min-h-[80vh] flex-col justify-center py-44 md:py-56">
        <span className="section-kicker mb-10">Portfolio Product / Clinical Simulation</span>
        <h1 className="section-heading max-w-3xl">DokSim</h1>
        <p className="mt-12 max-w-2xl text-xl text-[var(--accent-2)] md:text-2xl">
          Clinical conversation training, safely scaled.
        </p>
        <p className="section-copy mt-10 max-w-2xl text-lg leading-relaxed md:text-xl">
          DokSim is a production-grade patient-communication simulator built on LangGraph +
          LangChain. It trains clinicians through structured, multi-turn conversations with
          synthetic patients — judged by LLM evaluators, without real patients, risk, or bias.
        </p>
        <div className="mt-16 flex flex-wrap gap-3">
          {["Python 3.11", "LangGraph + LangChain", "Chroma", "FastAPI", "Azure AI Foundry"].map((t) => (
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
        <h2 className="section-heading mb-16 text-3xl md:text-4xl">Providers</h2>
        <div className="grid gap-20 md:grid-cols-3">
          {providers.map((p) => (
            <div key={p.name} className="shell-panel p-16 md:p-20">
              <h3 className="mono-text text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--accent-1)]">
                {p.name}
              </h3>
              <p className="section-copy mt-5 text-base leading-relaxed md:text-lg">{p.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32">
        <h2 className="section-heading mb-16 text-3xl md:text-4xl">System design</h2>
        <div className="terminal-window">
          <div className="terminal-bar">
            <span className="terminal-dot" />
            <span className="terminal-dot" />
            <span className="terminal-dot" />
            <span className="mono-text ml-3 text-[11px] uppercase tracking-[0.24em] text-white/40">
              system design / data flow
            </span>
          </div>
          <div className="bg-[#08090e] p-10 font-mono text-sm leading-relaxed text-white/60">
            <pre className="whitespace-pre overflow-x-auto">{`
Persona + Scenario (YAML)
        │
        ▼
FastAPI Session API  ◄──►  Typer CLI
  /v1/session/start · turn · state
        │
   ┌────┴────┐
   │         │
   ▼         ▼
Patient LLM   Judge LLM
 + RAG        + rubric
   │         ▲
   └────┬────┘
        ▼
Safe-Branch Handler → deterministic fallback
        ▼
JSONL Session Logs [ turn, latency_ms, judge_score ]
            `.trim()}</pre>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="shell-panel flex flex-col items-start gap-6 p-16 md:flex-row md:items-center md:justify-between md:p-20">
          <div>
            <span className="section-kicker">Signal</span>
            <h2 className="section-heading mt-6 text-3xl md:text-4xl">Interested in DokSim?</h2>
            <p className="section-copy mt-6 max-w-xl text-base leading-relaxed md:text-lg">
              Active development. I can discuss persona authoring, RAG design, or the
              safe-branch safety model.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="mailto:hello@asforetold.com?subject=DokSim%20inquiry"
              className="command-chip border-transparent bg-[var(--accent-1)] text-[#040a09] hover:opacity-90"
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
