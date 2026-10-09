import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-obsidian text-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* BREADCRUMB */}
        <div className="flex items-center gap-2 text-xs font-mono text-dim mb-8">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="text-surface-border">/</span>
          <span className="text-cobalt-light font-semibold">Doctrine</span>
        </div>

        {/* HERO */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded bg-surface border border-surface-border text-cobalt-light text-xs font-mono uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-cobalt-light animate-pulse" />
            As Foretold Research Labs
          </div>

          <h1 className="text-4xl sm:text-5xl font-semibold text-white mb-6 leading-tight">
            Pioneering Intelligent Systems & Digital Simulation
          </h1>

          <p className="text-steel text-lg leading-relaxed">
            As Foretold Labs is an independent research lab dedicated to creating deterministic, high-reliability artificial intelligence solutions for high-stakes enterprise compliance and medical education.
          </p>
        </div>

        {/* BRAND IDENTITY BANNER */}
        <div className="relative border border-surface-border bg-surface-card p-8 md:p-12 mb-16 shadow-xl overflow-hidden flex flex-col md:flex-row items-center gap-8">
          <div className="relative w-32 h-32 md:w-40 md:h-40 shrink-0 flex items-center justify-center p-4 rounded border border-surface-border bg-obsidian">
            <svg className="w-24 h-24 md:w-32 md:h-32 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">The As Foretold Philosophy</h2>
            <p className="text-steel text-sm leading-relaxed mb-4">
              We believe that the next breakthrough in artificial intelligence will not come from unstructured chatbots, but from deterministic state machines, agentic evaluation loops, and domain-grounded digital twins that guarantee auditability and precision.
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-mono text-cobalt-light">
              <span className="px-2.5 py-1 rounded border border-surface-border bg-surface">Deterministic AI</span>
              <span className="px-2.5 py-1 rounded border border-surface-border bg-surface">Agentic Safety</span>
              <span className="px-2.5 py-1 rounded border border-surface-border bg-surface">High Reliability</span>
              <span className="px-2.5 py-1 rounded border border-surface-border bg-surface">Zero Hallucination</span>
              <span className="px-2.5 py-1 rounded border border-surface-border bg-surface">Sovereign Deployment</span>
            </div>
          </div>
        </div>

        {/* KEY PRODUCTS GRID */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-8 text-center">Core Platforms</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/products/augur" className="p-8 rounded border border-surface-border bg-surface-card hover:border-surface-border-strong transition-all duration-300 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-cobalt-light uppercase tracking-widest block mb-2">Platform Pillar • 01</span>
                <h3 className="text-2xl font-semibold text-white mb-3">Augur</h3>
                <p className="text-steel text-sm leading-relaxed mb-6">
                  Continuous regulatory & governance engine that translates codebases, infrastructure telemetry, and vulnerability vectors into living compliance verification.
                </p>
              </div>
              <div className="pt-4 border-t border-surface-border flex items-center justify-between text-xs font-mono text-dim">
                <span>CORE: C# / .NET 10 Enclave</span>
                <span className="text-cobalt-light hover:text-white transition-colors flex items-center gap-1">Explore Architecture →</span>
              </div>
            </Link>

            <Link href="/products/doksim" className="p-8 rounded border border-surface-border bg-surface-card hover:border-surface-border-strong transition-all duration-300 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-emerald-glow uppercase tracking-widest block mb-2">Platform Pillar • 02</span>
                <h3 className="text-2xl font-semibold text-white mb-3">DokSim</h3>
                <p className="text-steel text-sm leading-relaxed mb-6">
                  High-stakes clinical validation platform with deterministic state machines, verified medical knowledge retrieval, and quantitative empathy rubrics.
                </p>
              </div>
              <div className="pt-4 border-t border-surface-border flex items-center justify-between text-xs font-mono text-dim">
                <span>CORE: Python 3.11 / LangGraph / ChromaDB</span>
                <span className="text-emerald-glow hover:text-white transition-colors flex items-center gap-1">Explore Architecture →</span>
              </div>
            </Link>

            <Link href="/products/citytwin" className="p-8 rounded border border-surface-border bg-surface-card hover:border-surface-border-strong transition-all duration-300 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-cobalt-light uppercase tracking-widest block mb-2">Platform Pillar • 03</span>
                <h3 className="text-2xl font-semibold text-white mb-3">CityTwin</h3>
                <p className="text-steel text-sm leading-relaxed mb-6">
                  Physics-informed spatial simulation engine for multi-agent robotics, urban logistics, and synthetic environment testing with zero-latency sensor fusion.
                </p>
              </div>
              <div className="pt-4 border-t border-surface-border flex items-center justify-between text-xs font-mono text-dim">
                <span>CORE: CUDA / PyTorch / WebGPU / MARL</span>
                <span className="text-cobalt-light hover:text-white transition-colors flex items-center gap-1">Explore Architecture →</span>
              </div>
            </Link>
          </div>
        </div>

        {/* DOCTRINE SECTION */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-8 text-center">Foundational Principles</h2>
          <div className="space-y-6">
            <div className="p-6 rounded border border-surface-border bg-surface-card">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <span className="w-6 h-6 border border-surface-border flex items-center justify-center text-cobalt-light font-mono text-xs">01</span>
                Deterministic Over Probabilistic
              </h3>
              <p className="text-steel text-sm leading-relaxed">
                High-consequence domains—clinical decision-making, regulatory compliance, autonomous defense—cannot operate on raw probabilistic completions. Every system we build enforces bounded state transitions with mathematical verification.
              </p>
            </div>
            <div className="p-6 rounded border border-surface-border bg-surface-card">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <span className="w-6 h-6 border border-surface-border flex items-center justify-center text-cobalt-light font-mono text-xs">02</span>
                Continuous Verification Over Point-in-Time Audit
              </h3>
              <p className="text-steel text-sm leading-relaxed">
                Traditional audit cycles introduce latency and blind spots. Our platforms replace quarterly evidence gathering with cryptographic ledger anchoring and real-time control reconciliation across distributed infrastructure.
              </p>
            </div>
            <div className="p-6 rounded border border-surface-border bg-surface-card">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <span className="w-6 h-6 border border-surface-border flex items-center justify-center text-cobalt-light font-mono text-xs">03</span>
                Sovereign Data Perimeter
              </h3>
              <p className="text-steel text-sm leading-relaxed">
                Zero-exfiltration architecture. Air-gapped deployment, end-to-end mTLS channels, and zero-knowledge evidence containers ensure institutional data never leaves the enclave—even during auditor inspection.
              </p>
            </div>
            <div className="p-6 rounded border border-surface-border bg-surface-card">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <span className="w-6 h-6 border border-surface-border flex items-center justify-center text-cobalt-light font-mono text-xs">04</span>
                Domain-Grounded Intelligence
              </h3>
              <p className="text-steel text-sm leading-relaxed">
                Medical, regulatory, and spatial reasoning require verified knowledge ontologies—not synthetic generation. Our retrieval systems ground every inference in peer-reviewed sources, formal standards, and physical law.
              </p>
            </div>
          </div>
        </div>

        {/* TECH STACK SECTION */}
        <div className="p-8 rounded border border-surface-border bg-surface-card text-center">
          <h2 className="text-xl font-semibold text-white mb-4">Core Technology Stack</h2>
          <p className="text-steel text-sm max-w-xl mx-auto mb-8">
            Our systems combine low-latency compiled backends with state-of-the-art Python AI agentic frameworks.
          </p>
          <div className="flex flex-wrap justify-center gap-3 font-mono text-xs text-steel">
            <span className="px-3 py-1.5 rounded border border-surface-border bg-surface">C# / .NET 10</span>
            <span className="px-3 py-1.5 rounded border border-surface-border bg-surface">Blazor Server</span>
            <span className="px-3 py-1.5 rounded border border-surface-border bg-surface">Python 3.11</span>
            <span className="px-3 py-1.5 rounded border border-surface-border bg-surface">LangGraph</span>
            <span className="px-3 py-1.5 rounded border border-surface-border bg-surface">ChromaDB RAG</span>
            <span className="px-3 py-1.5 rounded border border-surface-border bg-surface">FastAPI</span>
            <span className="px-3 py-1.5 rounded border border-surface-border bg-surface">OpenAPI 3.1.1</span>
            <span className="px-3 py-1.5 rounded border border-surface-border bg-surface">Next.js 15</span>
            <span className="px-3 py-1.5 rounded border border-surface-border bg-surface">CUDA / PyTorch</span>
            <span className="px-3 py-1.5 rounded border border-surface-border bg-surface">WebGPU</span>
            <span className="px-3 py-1.5 rounded border border-surface-border bg-surface">ROS2 / OPC-UA</span>
            <span className="px-3 py-1.5 rounded border border-surface-border bg-surface">MARL</span>
          </div>
        </div>
      </div>
    </div>
  );
}