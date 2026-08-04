import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0c0d10] text-zinc-100 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* BREADCRUMB */}
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-8">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#ff7722] font-semibold">About</span>
        </div>

        {/* HERO */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#181a20] border border-zinc-800 text-[#ff7722] text-xs font-mono uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-[#ff6000] animate-pulse" />
            As Foretold Research Labs
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
            Pioneering Intelligent Systems & Digital Simulation
          </h1>

          <p className="text-zinc-400 text-lg leading-relaxed">
            As Foretold Labs is an independent research lab dedicated to creating deterministic, high-reliability artificial intelligence solutions for high-stakes enterprise compliance and medical education.
          </p>
        </div>

        {/* BRAND IDENTITY BANNER */}
        <div className="relative rounded-2xl border border-zinc-800 bg-[#14161b] p-8 md:p-12 mb-16 shadow-xl overflow-hidden flex flex-col md:flex-row items-center gap-8">
          <div className="relative w-32 h-32 md:w-40 md:h-40 shrink-0 flex items-center justify-center p-4 rounded-xl bg-black border border-zinc-800">
            <Image
              src="/as-foretold-logo-adaptive.svg"
              alt="As Foretold Labs Wireframe Cube Logo"
              width={120}
              height={120}
              className="text-white"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">The As Foretold Philosophy</h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              We believe that the next breakthrough in artificial intelligence will not come from unstructured chatbots, but from deterministic state machines, agentic evaluation loops, and domain-grounded digital twins that guarantee auditability and precision.
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-mono text-[#ff7722]">
              <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800">Deterministic AI</span>
              <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800">Agentic Safety</span>
              <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800">High Reliability</span>
            </div>
          </div>
        </div>

        {/* KEY PRODUCTS GRID */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Featured Lab Systems</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl border border-zinc-800 bg-[#14161b] flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#ff7722] uppercase tracking-widest block mb-2">System 01</span>
                <h3 className="text-2xl font-bold text-white mb-3">Augur</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Compliance and governance automation platform mapping cloud security findings directly to SOC 2 Type II and ISO 27001 trust criteria automatically.
                </p>
              </div>
              <Link href="/products/augur" className="text-sm font-mono font-semibold text-[#ff7722] hover:text-[#ff8833] flex items-center gap-1">
                Explore Augur Architecture &rarr;
              </Link>
            </div>

            <div className="p-8 rounded-xl border border-zinc-800 bg-[#14161b] flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-2">System 02</span>
                <h3 className="text-2xl font-bold text-white mb-3">DokSim</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Agentic clinical dialogue simulator allowing medical trainees to practice delicate patient interviews with real-time empathy rubrics and diagnostic evaluation.
                </p>
              </div>
              <Link href="/products/doksim" className="text-sm font-mono font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1">
                Explore DokSim Architecture &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* TECH STACK SECTION */}
        <div className="p-8 rounded-2xl border border-zinc-800 bg-[#14161b] text-center">
          <h2 className="text-xl font-bold text-white mb-4">Core Technology Stack</h2>
          <p className="text-zinc-400 text-sm max-w-xl mx-auto mb-8">
            Our systems combine low-latency compiled backends with state-of-the-art Python AI agentic frameworks.
          </p>
          <div className="flex flex-wrap justify-center gap-3 font-mono text-xs text-zinc-300">
            <span className="px-3 py-1.5 rounded-md bg-black border border-zinc-800">C# / .NET 10</span>
            <span className="px-3 py-1.5 rounded-md bg-black border border-zinc-800">Blazor Server</span>
            <span className="px-3 py-1.5 rounded-md bg-black border border-zinc-800">Python 3.11</span>
            <span className="px-3 py-1.5 rounded-md bg-black border border-zinc-800">LangGraph</span>
            <span className="px-3 py-1.5 rounded-md bg-black border border-zinc-800">Chroma DB RAG</span>
            <span className="px-3 py-1.5 rounded-md bg-black border border-zinc-800">FastAPI</span>
            <span className="px-3 py-1.5 rounded-md bg-black border border-zinc-800">OpenAPI 3.1.1</span>
            <span className="px-3 py-1.5 rounded-md bg-black border border-zinc-800">Next.js 16</span>
          </div>
        </div>
      </div>
    </div>
  );
}
