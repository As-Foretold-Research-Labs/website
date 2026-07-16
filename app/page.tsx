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
    <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
      {/* Hero */}
      <section className="flex min-h-[92vh] flex-col justify-center py-44 md:py-56">
        <span className="section-kicker mb-10">Command Center</span>
        <h1 className="section-heading max-w-4xl">As Foretold Labs</h1>
        <p className="mt-12 max-w-2xl text-xl text-[var(--accent-2)] md:text-2xl">
          The Future is Being Written.
        </p>
        <p className="section-copy mt-10 max-w-2xl text-lg leading-relaxed md:text-xl">
          We build intelligent systems at the intersection of simulation, automation, and
          human-computer interaction.
        </p>
        <div className="mt-16 flex flex-wrap gap-4">
          <Link
            href="/#work"
            className="command-chip border-transparent bg-[var(--accent)] text-[#06070b] hover:opacity-90"
          >
            View products
          </Link>
          <Link
            href="/#research"
            className="command-chip hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
          >
            Research areas
          </Link>
        </div>
      </section>

      {/* Stats strip */}
      <section className="my-20 md:my-28">
        <div className="shell-panel grid grid-cols-2 gap-px overflow-hidden md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="metric-card">
              <p className="text-2xl font-semibold text-white">{s.value}</p>
              <p className="mt-3 text-[11px] uppercase tracking-[0.24em] text-white/40">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Work */}
      <section id="work" className="py-40 md:py-56">
        <div className="mb-28 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="section-kicker">Workload</span>
            <h2 className="section-heading mt-6 text-5xl md:text-6xl">Products in focus</h2>
          </div>
          <p className="section-copy max-w-md text-base leading-relaxed md:text-lg">
            Two active product surfaces, both framed as modern operational tools rather than
            marketing pages.
          </p>
        </div>

        <div className="grid gap-20 md:grid-cols-2">
          {products.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="shell-panel group flex flex-col justify-between p-16 transition-transform duration-300 hover:-translate-y-1 md:p-20"
            >
              <div>
                <p className="mono-text text-[11px] uppercase tracking-[0.24em] text-white/42">
                  {p.category}
                </p>
                <h3 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-white md:text-[2.75rem]">
                  {p.title}
                </h3>
                <p className="section-copy mt-6 max-w-md text-base leading-relaxed md:text-lg">
                  {p.description}
                </p>
              </div>
              <div className="mt-20 flex flex-wrap gap-3">
                {p.tags.map((t) => (
                  <span key={t} className="command-chip text-white/66">
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Research */}
      <section id="research" className="py-40 md:py-56">
        <div className="mb-28">
          <span className="section-kicker">Research</span>
          <h2 className="section-heading mt-6 text-5xl md:text-6xl">Areas of exploration</h2>
        </div>

        <div className="grid gap-20 md:grid-cols-2 lg:grid-cols-3">
          {researchAreas.map((area, i) => (
            <div
              key={area.title}
              className={`shell-panel p-16 md:p-20 ${
                area.isAI ? "border-[var(--accent)]/40" : ""
              }`}
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="mono-text text-[11px] uppercase tracking-[0.24em] text-white/38">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {area.isAI && (
                  <span className="command-chip border-[var(--accent)]/40 bg-[var(--accent-subtle)] text-white/80">
                    priority
                  </span>
                )}
              </div>
              <h3 className="text-3xl font-semibold tracking-[-0.03em] text-white">
                {area.title}
              </h3>
              <p className="section-copy mt-5 text-base leading-relaxed md:text-lg">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="py-40 md:py-56">
        <div className="terminal-window">
          <div className="terminal-bar">
            <span className="terminal-dot" />
            <span className="terminal-dot" />
            <span className="terminal-dot" />
            <span className="mono-text ml-3 text-[11px] uppercase tracking-[0.24em] text-white/40">
              contact / prompt
            </span>
          </div>
          <div className="grid gap-20 p-16 md:grid-cols-[1.05fr_0.95fr] md:p-24 lg:items-center">
            <div>
              <span className="section-kicker">Signal</span>
              <h2 className="section-heading mt-6 text-5xl md:text-6xl">Want to work together?</h2>
              <p className="section-copy mt-16 max-w-xl text-lg leading-relaxed md:text-xl">
                Whether it is compliance automation, clinical training, or research collaboration,
                the work is framed as an operating system for serious product thinking.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <Link
                href="mailto:hello@asforetold.com"
                className="command-chip border-transparent bg-[var(--accent)] text-[#06070b] hover:opacity-90"
              >
                Get in touch <span className="text-lg leading-none">→</span>
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
    </div>
  );
}
