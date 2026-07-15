import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "DokSim — Patient Communication Simulator | As Foretold Labs",
  description:
    "Production-grade patient-communication training simulator built on LangGraph + LangChain. Config-driven LLM providers, Chroma-backed RAG, LLM-as-judge evaluation, FastAPI, and Typer CLI.",
};

const features = [
  {
    title: "Multi-provider LLM support",
    desc: "Pluggable provider per slot: patient voice, judge voice, and embeddings. Supports OpenAI, Anthropic, and Azure AI Foundry.",
  },
  {
    title: "Synthetic patient persona engine",
    desc: "Config-driven personas and scenarios with automatic turn parsing and retry. Personas are authored declaratively.",
  },
  {
    title: "LLM-as-judge rubric evaluation",
    desc: "Transcripts are scored against a competency rubric by an independent judge model, with optional enterprise evaluation.",
  },
  {
    title: "RAG-backed patient memory",
    desc: "Chroma-backed retrieval augments patient consistency so prior conversation turns remain available to the simulator.",
  },
  {
    title: "Rolling summary + progressive disclosure",
    desc: "Conversation context is summarized progressively, keeping prompt size bounded while preserving important details.",
  },
  {
    title: "Red-line safe-branch handling",
    desc: "Critical keywords or unsafe trajectories are intercepted by a deterministic safe-branch that ends the scenario safely.",
  },
  {
    title: "Difficulty modulation",
    desc: "Scenario difficulty is configurable, affecting patient cooperativeness, vocabulary complexity, and emotional intensity.",
  },
  {
    title: "Dual interface — API + CLI",
    desc: "FastAPI session API for web integration and a Typer CLI harness for offline evaluation or debugging.",
  },
];

const providers = [
  { name: "OpenAI", detail: "GPT-4o / GPT-4o-mini · patient · judge · embeddings slots" },
  { name: "Anthropic", detail: "Claude Sonnet · patient · judge slots" },
  { name: "Azure AI Foundry", detail: "Enterprise deployments · optional native eval pass · compliant model catalog" },
];

export default function DokSimPage() {
  return (
    <div data-theme="doksim" className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 py-40 md:py-56">
      <section className="grid gap-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
        <div className="shell-panel p-16 md:p-20 xl:p-24">
          <span className="section-kicker">Portfolio Product / Clinical Simulation</span>
          <h1 className="section-heading mt-16 max-w-3xl">DokSim</h1>
          <p className="mt-16 max-w-2xl text-xl md:text-2xl text-[var(--accent-2)] leading-snug">
            Clinical conversation training, safely scaled.
          </p>
          <p className="mt-16 max-w-2xl text-xl md:text-2xl section-copy leading-relaxed">
            DokSim is a production-grade patient-communication simulator built on LangGraph + LangChain.
            It trains clinicians through structured, multi-turn conversations with synthetic patients,
            judged by LLM evaluators without real patients, without risk, and without bias.
          </p>
          <div className="mt-16 flex flex-wrap gap-4">
            {["Python 3.11", "LangGraph + LangChain", "Chroma", "FastAPI", "Azure AI Foundry"].map((tag) => (
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
              doksim / training surface
            </span>
          </div>
          <div className="grid gap-12 p-14 md:p-16">
            <div className="metric-card">
              <p className="mono-text text-[11px] uppercase tracking-[0.24em] text-white/40">status</p>
              <p className="mt-4 text-xl text-white/85">Simulation safety gate online</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="metric-card">
                <p className="text-2xl font-semibold text-white">LLM</p>
                <p className="mt-3 text-[11px] uppercase tracking-[0.24em] text-white/40">judge / patient / embeddings</p>
              </div>
              <div className="metric-card">
                <p className="text-2xl font-semibold text-white">RAG</p>
                <p className="mt-3 text-[11px] uppercase tracking-[0.24em] text-white/40">conversation memory</p>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-10 md:p-12">
              <p className="mono-text text-[11px] uppercase tracking-[0.24em] text-white/35">note</p>
              <p className="mt-4 text-base md:text-lg text-white/58 leading-relaxed">
                The interface is intentionally precise and restrained so the safety model reads like a real
                operational control, not a toy demo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-44 md:mt-56 shell-panel p-16 md:p-20">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <span className="section-kicker">Why it exists</span>
            <h2 className="section-heading mt-16 text-4xl md:text-5xl">
              Built because bedside manner is hard to teach at scale
            </h2>
          </div>
          <p className="text-xl md:text-2xl section-copy leading-relaxed">
            Clinical communication is the single greatest predictor of patient outcomes, and it is also the
            hardest skill to train at scale. Role-playing with standardized patients is effective but expensive,
            inconsistent, and impossible to repeat. DokSim replaces human SPs with configurable AI personas and
            grades every interaction with the same rubric at any time, anywhere.
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
            system design / data flow
          </span>
        </div>
        <div className="p-14 md:p-16">
          <span className="section-kicker">System Design</span>
          <h2 className="section-heading mt-16 mb-8 text-4xl md:text-5xl">Data flow</h2>
          <div className="rounded-[20px] border border-white/10 bg-black/20 p-6 md:p-8 font-mono text-[11px] md:text-[13px] text-white/55 leading-relaxed overflow-x-auto">
            <pre>{`
┌────────────────────────────────────────────────────────────────────────────────┐
│                        Persona + Scenario Config (YAML)                      │
└───────────────────────────────────────┬────────────────────────────────────────┘
                                        │
                                        ▼
┌──────────────────────────────────────────────────────────────────────────────┐
│  FastAPI Session API  ◄──►  CLI Harness (Typer)                             │
│  /v1/session/start · turn · state · transcript                                │
└──────────────────────────┬───────────────────────────────────────────────────┘
                           │
              ┌────────────┴────────────────┐
              │                             │
              ▼                             ▼
┌──────────────────────┐    ┌─────────────────────────┐
│ Patient Slot (LLM)   │    │ Judge Slot (LLM)        │
│ Persona + RAG +      │    │ Transcript → rubric      │
│ rolling summary       │    │ → structured score       │
└──────────┬───────────┘    └─────────────────────────┘
           │                        ▲
           │                        │
           ▼                        │
┌────────────────────────────────────────────────────────────────┐
│ Safe-Branch Handler — intercepts unsafe trajectories            │
│ Defaults to deterministic safe response + ends scenario         │
└────────────────────────────────────────────────────────────────┘
                           │
                           ▼
┌───────────────────────────────────────────────────────────────────┐
│ Structured JSONL Session Logs                                    │
│ [ { turn, latency_ms, provider, judge_score, safe_branch } ... ] │
└───────────────────────────────────────────────────────────────────┘
            `.trim()}
            </pre>
          </div>
        </div>
      </section>

      <section className="mt-44 md:mt-56">
        <div className="mb-20 md:mb-24">
          <span className="section-kicker">Providers</span>
          <h2 className="section-heading mt-16 text-4xl md:text-5xl">Works the way you do</h2>
        </div>
        <div className="grid gap-12 md:grid-cols-3">
          {providers.map((prov) => (
            <div key={prov.name} className="shell-panel p-14 md:p-16">
              <h3 className="mono-text text-[11px] font-bold tracking-[0.24em] text-[var(--accent-1)] uppercase mb-4">
                {prov.name}
              </h3>
              <p className="text-lg md:text-xl text-white/56 leading-relaxed">{prov.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-44 md:mt-56">
        <div className="mb-20 md:mb-24">
          <span className="section-kicker">Demo</span>
          <h2 className="section-heading mt-16 text-4xl md:text-5xl">Simulation dashboard</h2>
        </div>
        <div className="terminal-window">
          <div className="terminal-bar">
            <span className="terminal-dot" />
            <span className="terminal-dot" />
            <span className="terminal-dot" />
            <span className="ml-3 mono-text text-[11px] tracking-[0.24em] text-white/40 uppercase">
              doksim / simulation dashboard
            </span>
          </div>
          <div className="p-3 md:p-5">
            <Image
              src="/doksim-dashboard.png"
              alt="DokSim simulation dashboard"
              width={1280}
              height={720}
              loading="eager"
              className="w-full h-auto rounded-[18px]"
            />
          </div>
        </div>
      </section>

      <section className="mt-44 md:mt-56 shell-panel p-16 md:p-20">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <span className="section-kicker">Signal</span>
            <h2 className="section-heading mt-16 text-4xl md:text-5xl">Interested in DokSim?</h2>
            <p className="mt-16 max-w-2xl text-xl md:text-2xl section-copy leading-relaxed">
              This project is in active development. I can discuss the persona authoring workflow, RAG design,
              safe-branch safety model, or multi-provider LLM abstraction.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="mailto:hello@asforetolabs.com?subject=DokSim%20product%20inquiry"
              className="command-chip border-transparent bg-[var(--accent-1)] text-[#040c0a] hover:opacity-90"
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
