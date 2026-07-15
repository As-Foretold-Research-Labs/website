import Link from "next/link";
import Footer from "./components/Footer";

const products = [
  {
    title: "Augur",
    category: "Governance Automation",
    href: "/products/augur",
    description:
      "AI-assisted compliance automation mapping security findings onto SOC 2 and ISO 27001 controls.",
    tags: ["C# / .NET 10", "Blazor", "EF Core", "OpenAPI 3.1.1"],
  },
  {
    title: "DokSim",
    category: "Clinical Training Simulation",
    href: "/products/doksim",
    description:
      "LangGraph + LangChain patient-communication simulator with LLM-as-judge evaluation and red-line safe-branch handling.",
    tags: ["Python 3.11", "LangGraph", "Chroma", "FastAPI"],
  },
];

const stats = [
  { value: "2", label: "Active products" },
  { value: "SOC 2", label: "Control framework alignment" },
  { value: "OpenAI-compatible", label: "LLM abstraction" },
  { value: "Deterministic", label: "Safe fallback architecture" },
];

const researchAreas = [
  {
    title: "Digital Twin",
    description:
      "High-fidelity virtual representations of physical systems to predict behavior and optimize workflows.",
  },
  {
    title: "Robotics Simulation",
    description:
      "Robust environments for training autonomous agent behavior in complex, dynamic spaces.",
  },
  {
    title: "Open Source Intelligence",
    description:
      "Harnessing open-source data to uncover patterns, trends, and insights in an interconnected world.",
  },
  {
    title: "Cybersecurity",
    description:
      "Analyzing threat vectors and observing the evolving landscape of digital defense and adversarial tactics.",
  },
  {
    title: "Artificial Intelligence Research",
    description:
      "Exploring the mathematical and philosophical frameworks of synthetic intelligence.",
    isAI: true,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero - full width */}
      <section className="relative w-full border-b border-white/[0.08]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-7">
              <h1 className="text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-[0.95] tracking-tight mb-6">
                As Foretold Labs
              </h1>
              <p className="text-[clamp(1rem,2vw,1.375rem)] text-white/70 mb-6 leading-snug">
                The Future is Being Written
              </p>
              <p className="text-base text-white/50 leading-relaxed max-w-xl mb-10">
                We build intelligent systems at the intersection of simulation, automation,
                and human-computer interaction.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/#work"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-black text-sm font-semibold transition-opacity hover:opacity-90"
                >
                  Products
                </Link>
                <Link
                  href="/#about"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/15 text-sm font-medium text-white/80 hover:bg-white/5 transition-colors"
                >
                  Research
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5 flex items-end">
              <p className="text-sm text-white/40 leading-relaxed max-w-sm">
                From governance automation to clinical training, we engineer systems that
                bridge theoretical frameworks and real-world impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products - full width grid */}
      <section id="work" className="w-full border-b border-white/[0.08]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product) => (
              <Link
                key={product.href}
                href={product.href}
                className="group block p-8 md:p-10 rounded-xl border border-white/[0.08] bg-white/[0.02] transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]"
              >
                <p className="text-[11px] font-semibold tracking-[0.2em] text-white/40 uppercase mb-4">
                  {product.category}
                </p>
                <h3 className="text-3xl md:text-[2.25rem] font-semibold tracking-tight mb-4 text-white">
                  {product.title}
                </h3>
                <p className="text-base text-white/50 leading-relaxed mb-6">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-[11px] font-medium text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-white group-hover:text-white transition-colors">
                  View product details
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats - horizontal band */}
      <section className="w-full border-b border-white/[0.08] bg-white/[0.01]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((m) => (
              <div key={m.label} className="text-left">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
                  {m.value}
                </div>
                <div className="text-[11px] font-medium tracking-wide text-white/40 uppercase">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research - full width list */}
      <section id="about" className="w-full border-b border-white/[0.08]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 md:py-24">
          <div className="mb-12 md:mb-16">
            <span className="text-[11px] font-semibold tracking-[0.25em] text-white/40 uppercase block mb-3">
              Research
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Areas of exploration
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
            {researchAreas.map((area, index) => (
              <div key={index} className="py-8 md:py-10 border-t border-white/[0.06]">
                <h3 className="text-[11px] font-bold tracking-[0.2em] text-white/80 uppercase mb-3">
                  {area.title}
                </h3>
                <p className="text-base text-white/45 leading-relaxed max-w-xl">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - full width accent band */}
      <section className="relative w-full border-b border-white/[0.08]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 md:py-24">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              Want to work together?
            </h2>
            <p className="text-base text-white/50 leading-relaxed mb-8 max-w-xl">
              Whether it is compliance automation, clinical training, or research
              collaboration — we are open to conversations that matter.
            </p>
            <Link
              href="mailto:hello@asforetolabs.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-black text-sm font-semibold transition-opacity hover:opacity-90"
            >
              Get in touch
              <span className="text-lg leading-none">→</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
