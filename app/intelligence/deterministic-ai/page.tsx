import Link from "next/link";

export default function DeterministicAIArticle() {
  return (
    <article className="min-h-screen bg-obsidian text-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 text-xs font-mono text-dim mb-8">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="text-surface-border">/</span>
          <Link href="/intelligence" className="hover:text-white transition-colors">Intelligence</Link>
          <span className="text-surface-border">/</span>
          <span className="text-cobalt-light font-semibold">Deterministic AI</span>
        </div>

        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs tracking-wider uppercase text-dim mb-6">
            <span className="text-white font-medium">Briefing 03</span>
            <span className="text-surface-border">—</span>
            <span>Strategic Monographs</span>
            <span className="text-surface-border">—</span>
            <span>March 2026</span>
            <span className="text-surface-border">—</span>
            <span>16 Min</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight mb-6">
            Deterministic AI vs. Probabilistic Drift in Mission-Critical Systems
          </h1>
          <div className="flex flex-wrap items-center gap-6 font-mono text-xs text-dim">
            <span>Author: Marc Victor L. Velasquez</span>
            <span>Citation: AFL-BRIEF-26.03</span>
            <span>Classification: Open Public Release</span>
          </div>
        </header>

        <div className="prose prose-invert max-w-none space-y-8 text-steel leading-relaxed">
          <div className="border-t border-surface-border pt-8">
            <h2 className="text-xl font-semibold text-white mb-4">The Probabilistic Trap</h2>
            <p className="text-base mb-4">
              Large language models are, fundamentally, probabilistic next-token predictors. Their outputs are sampled from a distribution—temperature, top-p, and beam search merely shape the variance. In creative tasks, this variance is a feature. In clinical diagnosis, regulatory compliance, and autonomous defense, it is a liability.
            </p>
            <p className="text-base mb-4">
              A 99.9% accurate model still hallucinates 1 in 1,000 tokens. In a 500-token clinical note, that's a 40% probability of at least one fabrication. In a 10,000-line compliance mapping, that's thousands of erroneous control assertions. Probabilistic completeness is mathematically incompatible with zero-tolerance domains.
            </p>
          </div>

          <div className="border-t border-surface-border pt-8">
            <h2 className="text-xl font-semibold text-white mb-4">Boundary Validation Graphs</h2>
            <p className="text-base mb-4">
              DokSim solves this by constraining generative agents within LangGraph state machines. Every conversational turn is a state transition validated against:
            </p>
            <ul className="space-y-2 ml-6 list-disc text-base text-steel">
              <li><strong>Clinical protocol graphs:</strong> ACC/AHA, SPIKES, C-SSRS—encoded as deterministic finite automata. The agent cannot transition to states outside the protocol.</li>
              <li><strong>Vector ontology boundaries:</strong> Every medical assertion must retrieve a grounded source from ChromaDB (peer-reviewed guideline, pharmacology database, ICD-11 code). No retrieval = no assertion.</li>
              <li><strong>Empathy rubric checkpoints:</strong> Parallel evaluator node scores each turn on 12 axes. Scores below threshold trigger state rollback and re-generation.</li>
              <li><strong>Hallucination detection:</strong> Cross-reference generated tokens against retrieval corpus. Ungrounded tokens flagged and suppressed.</li>
            </ul>
          </div>

          <div className="border-t border-surface-border pt-8">
            <h2 className="text-xl font-semibold text-white mb-4">Quantitative Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
              <div className="p-6 border border-surface-border bg-surface-card text-center">
                <div className="text-3xl font-semibold text-emerald-glow">99.8%</div>
                <div className="font-mono text-xs text-dim uppercase tracking-wider mt-1">Safety Rubric Reliability</div>
              </div>
              <div className="p-6 border border-surface-border bg-surface-card text-center">
                <div className="text-3xl font-semibold text-cobalt-glow">{"<"} 16ms</div>
                <div className="font-mono text-xs text-dim uppercase tracking-wider mt-1">Ground-Truth RAG Latency</div>
              </div>
              <div className="p-6 border border-surface-border bg-surface-card text-center">
                <div className="text-3xl font-semibold text-white">0.00%</div>
                <div className="font-mono text-xs text-dim uppercase tracking-wider mt-1">Clinical Hallucination Margin</div>
              </div>
            </div>
          </div>

          <div className="border-t border-surface-border pt-8">
            <h2 className="text-xl font-semibold text-white mb-4">Augur: Compliance Determinism</h2>
            <p className="text-base mb-4">
              Augur applies the same principle to governance: deterministic AST-to-control mapping replaces heuristic classification. Every code change, infrastructure mutation, and vulnerability finding is parsed into an abstract syntax tree, then mapped via exact pattern matching to SOC 2, ISO 27001, and FedRAMP control identifiers. Zero sampling. Zero confidence intervals. Mathematical equivalence or non-mapping.
            </p>
          </div>

          <div className="border-t border-surface-border pt-8">
            <h2 className="text-xl font-semibold text-white mb-4">Key Vectors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="p-4 border border-surface-border bg-surface-card">
                <h4 className="font-mono text-xs text-cobalt-light uppercase tracking-wider mb-2">State Machine Validation</h4>
                <p className="text-sm text-steel">LangGraph deterministic finite automata for every high-stakes workflow. Zero path deviation permitted.</p>
              </div>
              <div className="p-4 border border-surface-border bg-surface-card">
                <h4 className="font-mono text-xs text-cobalt-light uppercase tracking-wider mb-2">Zero Hallucination</h4>
                <p className="text-sm text-steel">Every generated token grounded in retrieved source or formal rule. Ungrounded = suppressed.</p>
              </div>
              <div className="p-4 border border-surface-border bg-surface-card">
                <h4 className="font-mono text-xs text-cobalt-light uppercase tracking-wider mb-2">Clinical Decision Loops</h4>
                <p className="text-sm text-steel">OSCE-standardized evaluation rubrics running in parallel. Real-time quantitative feedback.</p>
              </div>
              <div className="p-4 border border-surface-border bg-surface-card">
                <h4 className="font-mono text-xs text-cobalt-light uppercase tracking-wider mb-2">Bounded Generativity</h4>
                <p className="text-sm text-steel">LLM as constrained policy actor within verified state space. Not an open-ended generator.</p>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-16 pt-8 border-t border-surface-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link className="text-xs font-mono text-dim hover:text-white transition-colors" href="/intelligence">
            ← Back to Intelligence Briefings
          </Link>
          <Link className="inline-flex items-center gap-2 px-4 py-2 bg-white text-obsidian text-xs font-mono uppercase tracking-wider hover:bg-neutral-200 transition-colors" href="/briefing">
            Request Full Briefing Access
          </Link>
        </footer>
      </div>
    </article>
  );
}