import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";

export const metadata = {
  title: "DokSim — Patient Communication Simulator | As Foretold Labs",
  description:
    "Production-grade patient-communication training simulator built on LangGraph + LangChain. Config-driven LLM providers, Chroma-backed RAG, LLM-as-judge evaluation, FastAPI, and Typer CLI.",
};

const features = [
  {
    title: "Multi-provider LLM support",
    desc: "Pluggable provider per slot: patient voice, judge voice, and embeddings. Supports OpenAI, Anthropic, and Azure AI Foundry — swap providers with a single env var.",
  },
  {
    title: "Synthetic patient persona engine",
    desc: "Config-driven personas and scenarios with automatic turn parsing and retry. Personas are authored declaratively under the personas/ directory.",
  },
  {
    title: "LLM-as-judge rubric evaluation",
    desc: "Transcripts are scored against a competency rubric by an independent judge model. Optional Foundry-native evaluation pass for enterprise deployments.",
  },
  {
    title: "RAG-backed patient memory",
    desc: "Chroma-backed retrieval augments patient consistency — the simulator references prior conversation turns when generating responses.",
  },
  {
    title: "Rolling summary + progressive disclosure",
    desc: "Conversation context is summarized progressively, keeping prompt size bounded while preserving important clinical details.",
  },
  {
    title: "Red-line safe-branch handling",
    desc: "Critical keywords or unsafe trajectories are intercepted by a deterministic safe-branch, overriding the LLM and ending the scenario with safety messaging.",
  },
  {
    title: "Difficulty modulation",
    desc: "Scenario difficulty is configurable, affecting patient cooperativeness, vocabulary complexity, and emotional intensity — same persona, harder variant.",
  },
  {
    title: "Dual interface — API + CLI",
    desc: "FastAPI session API for web or LMS integration, and a Typer CLI harness for offline evaluation or debugging.",
  },
];

const providers = [
  {
    name: "OpenAI",
    detail: "GPT-4o / GPT-4o-mini · patient · judge · embeddings slots",
  },
  {
    name: "Anthropic",
    detail: "Claude Sonnet · patient · judge slots",
  },
  {
    name: "Azure AI Foundry",
    detail: "Enterprise deployments · optional native eval pass · compliant model catalog",
  },
];

export default function DokSimPage() {
  return (
    <div data-theme="doksim" className="relative">
      {/* Ambient */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="mesh-gradient" />
      </div>

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-[11px] md:text-[12px] font-semibold tracking-[0.25em] text-[var(--kicker)] uppercase mb-6">
              Portfolio Product — Clinical Simulation
            </span>
            <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight mb-6" style={{ color: "var(--section-heading)" }}>
              DokSim
            </h1>
            <p className="text-[clamp(1.125rem,2vw,1.5rem)] text-[var(--accent-2)] mb-6 leading-snug">
              Clinical conversation training, safely scaled.
            </p>
            <p className="text-body text-white/50 leading-relaxed max-w-2xl mb-10">
              DokSim is a production-grade patient-communication simulator built on LangGraph + LangChain.
              It trains clinicians through structured, multi-turn conversations with synthetic patients,
              judged by LLM evaluators — without real patients, without risk, and without bias.
            </p>

            <div className="flex flex-wrap gap-3">
              {["Python 3.11", "LangGraph + LangChain", "Chroma", "FastAPI", "Azure AI Foundry"].map((tag) => (
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
              Built because bedside manner is hard to teach at scale
            </h2>
            <p className="text-body text-white/50 leading-relaxed">
              Clinical communication is the single greatest predictor of patient outcomes — and it is also
              the hardest skill to train at scale. Role-playing with standardized patients is effective but
              expensive, inconsistent, and impossible to repeat. DokSim replaces human SPs with configurable
              AI personas and grades every interaction with the same rubric, at any time, anywhere.
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

      {/* Architecture / Data flow */}
      <section className="relative py-20 md:py-28 border-t border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <span className="text-[11px] md:text-[12px] font-semibold tracking-[0.25em] text-[var(--kicker)] uppercase block mb-4">System Design</span>
          <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold tracking-tight mb-8" style={{ color: "var(--section-heading)" }}>
            Data flow
          </h2>
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 md:p-8 font-mono text-[11px] md:text-[13px] text-white/50 leading-relaxed overflow-x-auto">
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
          <p className="text-body text-white/40 mt-4">
            Each slot can point to a different LLM backend. The safe-branch is deterministic and runs
            before the patient response — no risky completion is ever returned to the user surface.
          </p>
        </div>
      </section>

      {/* Providers */}
      <section className="relative py-20 md:py-28 border-t border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <span className="text-[11px] md:text-[12px] font-semibold tracking-[0.25em] text-[var(--kicker)] uppercase block mb-4">Providers</span>
          <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold tracking-tight mb-8" style={{ color: "var(--section-heading)" }}>
            Works the way you do
          </h2>

          <div className="grid gap-5 md:grid-cols-3">
            {providers.map((prov) => (
              <div
                key={prov.name}
                className="p-6 md:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02]"
              >
                <h3 className="text-[11px] md:text-[12px] font-bold tracking-[0.2em] text-[var(--accent-1)] uppercase mb-3">
                  {prov.name}
                </h3>
                <p className="text-desc text-white/45 leading-relaxed">{prov.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshot */}
      <section className="relative py-20 md:py-28 border-t border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <span className="text-[11px] md:text-[12px] font-semibold tracking-[0.25em] text-[var(--kicker)] uppercase block mb-4">Demo</span>
          <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold tracking-tight mb-8" style={{ color: "var(--section-heading)" }}>
            Simulation dashboard
          </h2>
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.015] overflow-hidden">
            <div className="p-4 border-b border-white/[0.06] flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="ml-3 text-[11px] font-medium text-white/35 tracking-wide">DOKSIM — SIMULATION DASHBOARD</span>
            </div>
            <div className="p-2 md:p-4">
              <Image
                src="/doksim-dashboard.png"
                alt="DokSim simulation dashboard"
                width={1280}
                height={720}
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
              Interested in DokSim?
            </h2>
            <p className="text-body text-white/50 leading-relaxed mb-8 max-w-xl">
              This project is in active development. I can discuss the persona authoring workflow, RAG design,
              safe-branch safety model, or multi-provider LLM abstraction.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="mailto:hello@asforetolabs.com?subject=DokSim%20product%20inquiry"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--accent-1)] text-[#040c0a] text-[14px] font-semibold transition-opacity hover:opacity-90"
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
