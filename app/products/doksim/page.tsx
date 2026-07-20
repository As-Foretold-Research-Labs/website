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
    <div data-theme="doksim" className="w-full px-6 sm:px-10 md:px-16 lg:px-24 xl:px-28">
      <section className="flex min-h-[80vh] flex-col justify-center py-40 md:py-56">
        <span className="eyebrow mb-10">// Portfolio Product — Clinical Simulation</span>
        <h1 className="display max-w-4xl text-[clamp(3rem,9vw,7rem)]">DokSim</h1>
        <p className="mt-12 max-w-2xl body-copy text-lg md:text-xl">
          DokSim is a production-grade patient-communication simulator built on LangGraph +
          LangChain. It trains clinicians through structured, multi-turn conversations with
          synthetic patients — judged by LLM evaluators, without real patients, risk, or bias.
        </p>
        <div className="mt-16 flex flex-wrap gap-3">
          {["Python 3.11", "LangGraph + LangChain", "Chroma", "FastAPI", "Azure AI Foundry"].map((t) => (
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
        <span className="eyebrow mb-16 block">// Providers</span>
        <div className="grid gap-px bg-[var(--line-soft)] md:grid-cols-3">
          {providers.map((p) => (
            <div key={p.name} className="bg-black p-10 md:p-14">
              <h3 className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--accent)]">
                {p.name}
              </h3>
              <p className="body-copy mt-5 text-base md:text-lg">{p.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32">
        <span className="eyebrow mb-16 block">// System design</span>
        <div className="panel overflow-hidden">
          <div className="border-b border-[var(--line-soft)] px-6 py-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/40">
              system design / data flow
            </span>
          </div>
          <div className="bg-black p-8 font-mono text-sm leading-relaxed text-white/60">
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
        <div className="panel flex flex-col items-start gap-6 p-10 md:flex-row md:items-center md:justify-between md:p-16">
          <div>
            <span className="eyebrow">// Signal</span>
            <h2 className="display mt-6 text-3xl md:text-5xl">Interested in DokSim?</h2>
            <p className="body-copy mt-5 max-w-xl text-base md:text-lg">
              Active development. I can discuss persona authoring, RAG design, or the
              safe-branch safety model.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="mailto:hello@asforetold.com?subject=DokSim%20inquiry" className="chip chip--solid">
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
