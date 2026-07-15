import Link from "next/link";

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
    <>
      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 py-36 md:py-48">
        <div className="grid gap-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-28">
          <div className="shell-panel p-16 md:p-20 xl:p-24">
            <span className="section-kicker">Command Center</span>
            <h1 className="section-heading mt-8 max-w-4xl">As Foretold Labs</h1>
            <p className="mt-10 max-w-2xl text-xl md:text-2xl text-[var(--accent-2)] leading-snug">
              The Future is Being Written.
            </p>
            <p className="mt-10 max-w-2xl text-lg md:text-xl section-copy">
              We build intelligent systems at the intersection of simulation, automation,
              and human-computer interaction.
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                href="/#work"
                className="command-chip border-transparent bg-[var(--accent)] text-[#04070e] hover:opacity-90"
              >
                Products
              </Link>
              <Link
                href="/#about"
                className="command-chip hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
              >
                Research
              </Link>
            </div>
          </div>

          <div className="terminal-window">
            <div className="terminal-bar">
              <span className="terminal-dot" />
              <span className="terminal-dot" />
              <span className="terminal-dot" />
              <span className="ml-3 mono-text text-[11px] tracking-[0.24em] text-white/40 uppercase">
                live system summary
              </span>
            </div>
            <div className="grid gap-10 p-14 md:p-16">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-10">
                <p className="mono-text text-[11px] uppercase tracking-[0.24em] text-white/40">status</p>
                <p className="mt-4 text-xl text-white/85">Research studio online</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {stats.map((item) => (
                  <div key={item.label} className="metric-card">
                    <p className="text-2xl font-semibold tracking-tight text-white">{item.value}</p>
                    <p className="mt-2 text-[11px] uppercase tracking-[0.24em] text-white/40">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-10 md:p-12">
                <p className="mono-text text-[11px] uppercase tracking-[0.24em] text-white/35">mission</p>
                <p className="mt-4 text-base md:text-lg text-white/60 leading-relaxed">
                  Build systems that feel precise, explainable, and operationally real. Every public page
                  is structured like an interface, not a brochure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 py-36 md:py-48">
        <div className="mb-24 md:mb-28 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="section-kicker">Workload</span>
            <h2 className="section-heading mt-6 text-5xl md:text-6xl">Products in focus</h2>
          </div>
          <p className="max-w-xl text-base md:text-lg section-copy">
            Two active product surfaces, both framed as modern operational tools rather than marketing pages.
          </p>
        </div>

        <div className="grid gap-16 md:grid-cols-2">
          {products.map((product) => (
            <Link
              key={product.href}
              href={product.href}
              className="shell-panel group flex h-full flex-col justify-between p-14 md:p-16 transition-transform duration-300 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <p className="mono-text text-[11px] uppercase tracking-[0.24em] text-white/42">
                    {product.category}
                  </p>
                  <span className="text-white/28 transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </div>
                <h3 className="mt-6 text-4xl md:text-[2.75rem] font-semibold tracking-[-0.04em] text-white">
                  {product.title}
                </h3>
                <p className="mt-6 max-w-xl text-base md:text-lg text-white/58 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="mt-20 flex flex-wrap gap-3">
                {product.tags.map((tag) => (
                  <span key={tag} className="command-chip text-white/66">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 py-36 md:py-48">
        <div className="shell-panel p-16 md:p-20">
          <div className="grid gap-12 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="metric-card">
                <p className="text-4xl md:text-5xl font-semibold tracking-tight text-white">{item.value}</p>
                <p className="mt-3 text-[11px] uppercase tracking-[0.24em] text-white/40">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 py-36 md:py-48">
        <div className="mb-24 md:mb-28">
          <span className="section-kicker">Research</span>
          <h2 className="section-heading mt-6 text-5xl md:text-6xl">Areas of exploration</h2>
        </div>

        <div className="grid gap-16 md:grid-cols-2 xl:grid-cols-3">
          {researchAreas.map((area, index) => (
            <div
              key={area.title}
              className={`shell-panel p-14 md:p-16 ${area.isAI ? "border-[var(--accent)]/40" : ""}`}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="mono-text text-[11px] uppercase tracking-[0.24em] text-white/38">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {area.isAI ? (
                  <span className="command-chip border-[var(--accent)]/40 bg-[var(--accent-subtle)] text-white/80">
                    priority
                  </span>
                ) : null}
              </div>
              <h3 className="mt-6 text-3xl font-semibold tracking-[-0.03em] text-white">
                {area.title}
              </h3>
              <p className="mt-5 text-base md:text-lg text-white/56 leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 py-36 md:py-48">
        <div className="terminal-window">
          <div className="terminal-bar">
            <span className="terminal-dot" />
            <span className="terminal-dot" />
            <span className="terminal-dot" />
            <span className="ml-3 mono-text text-[11px] tracking-[0.24em] text-white/40 uppercase">
              contact / prompt
            </span>
          </div>
          <div className="grid gap-16 p-16 md:p-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <span className="section-kicker">Signal</span>
              <h2 className="section-heading mt-6 text-5xl md:text-6xl">Want to work together?</h2>
              <p className="mt-16 max-w-xl text-lg md:text-xl section-copy leading-relaxed">
                Whether it is compliance automation, clinical training, or research collaboration, the work is
                framed as an operating system for serious product thinking.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap lg:justify-end">
              <Link
                href="mailto:hello@asforetolabs.com"
                className="command-chip border-transparent bg-[var(--accent)] text-[#04070e] hover:opacity-90"
              >
                Get in touch
                <span className="text-lg leading-none">→</span>
              </Link>
              <Link
                href="/#work"
                className="command-chip hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
              >
                View products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
