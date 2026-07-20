import Link from "next/link";

const products = [
  {
    title: "Augur",
    category: "Governance Automation",
    index: "01",
    href: "/products/augur",
    description:
      "AI-assisted compliance automation mapping security findings onto SOC 2 and ISO 27001 controls.",
    tags: ["C# / .NET 10", "Blazor", "EF Core", "OpenAPI 3.1.1"],
  },
  {
    title: "DokSim",
    category: "Clinical Training Simulation",
    index: "02",
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
    <div className="w-full px-6 sm:px-10 md:px-16 lg:px-24 xl:px-28">
      {/* Hero */}
      <section className="flex min-h-[90vh] flex-col justify-center py-36 md:py-48 mb-20">
        <span className="eyebrow mb-10">// The Future is Being Written</span>
        <h1 className="display max-w-[14ch] text-[clamp(2.75rem,10vw,8.5rem)]">
          As Foretold
          <br />
          Labs
        </h1>
        <p className="mt-12 max-w-2xl body-copy text-lg md:text-xl">
          We build intelligent systems at the intersection of simulation, automation, and
          human-computer interaction.
        </p>
        <div className="mt-16 flex flex-wrap gap-4">
          <Link href="/#work" className="chip chip--solid">
            View products →
          </Link>
          <Link href="/#research" className="chip">
            Research areas
          </Link>
        </div>
      </section>

      {/* Marquee band */}
      <section className="overflow-hidden border-y border-[var(--line-soft)] py-8 md:py-12">
        <div className="marquee gap-16">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0 items-center gap-16 pr-16" aria-hidden={dup === 1}>
              <span className="display whitespace-nowrap text-2xl text-white/15 md:text-4xl">
                Simulation
              </span>
              <span className="display whitespace-nowrap text-2xl text-white/15 md:text-4xl">
                Automation
              </span>
              <span className="display whitespace-nowrap text-2xl text-[var(--accent)] md:text-4xl">
                Human-Computer Interaction
              </span>
              <span className="display whitespace-nowrap text-2xl text-white/15 md:text-4xl">
                Research Systems
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Stats strip */}
      <section className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
        {stats.map((s) => (
          <div key={s.label} className="border border-[var(--line-soft)] p-8 md:p-12">
            <p className="display text-3xl text-white md:text-4xl">{s.value}</p>
            <p className="mt-4 break-words font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
              {s.label}
            </p>
          </div>
        ))}
      </section>

      {/* Work — full-width stacked cards */}
      <section id="work" className="py-36 md:py-48 pr-8 md:pr-12 lg:pr-16">
        <div className="mb-20 flex flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-16">
          <div className="min-w-0">
            <span className="eyebrow">// Workload</span>
            <h2 className="display mt-6 text-5xl md:text-7xl">Products in focus</h2>
          </div>
          <p className="body-copy max-w-md shrink-0 text-base md:text-lg">
            Two active product surfaces, both framed as modern operational tools rather than
            marketing pages.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          {products.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="panel group flex flex-col justify-between p-10 transition-transform duration-300 hover:-translate-y-1 md:p-16"
            >
              <div className="flex items-start justify-between gap-6">
                <span className="index-label">{p.index}</span>
                <span className="text-right font-mono text-[11px] uppercase tracking-[0.24em] text-white/40">
                  {p.category}
                </span>
              </div>
              <h3 className="display mt-10 text-5xl text-white md:text-8xl">{p.title}</h3>
              <p className="body-copy mt-8 max-w-xl text-base md:text-lg">{p.description}</p>
              <div className="mt-12 flex flex-wrap gap-3">
                {p.tags.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Research */}
      <section id="research" className="py-36 md:py-48">
        <div className="mb-20">
          <span className="eyebrow">// Research</span>
          <h2 className="display mt-6 text-5xl md:text-7xl">Areas of exploration</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {researchAreas.map((area, i) => (
            <div
              key={area.title}
              className={`flex min-h-[16rem] flex-col justify-between border border-[var(--line-soft)] p-10 md:p-14 ${
                area.isAI ? "border-[var(--accent)]/40" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/38">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {area.isAI && <span className="chip chip--solid text-[10px]">priority</span>}
              </div>
              <div>
                <h3 className="display text-3xl text-white md:text-4xl">{area.title}</h3>
                <p className="body-copy mt-5 text-base md:text-lg">{area.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="py-36 md:py-48">
        <div className="panel flex flex-col items-start gap-10 p-10 md:p-20 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <span className="eyebrow">// Signal</span>
            <h2 className="display mt-6 text-5xl md:text-7xl">Want to work together?</h2>
            <p className="body-copy mt-12 max-w-xl text-lg md:text-xl">
              Whether it is compliance automation, clinical training, or research collaboration,
              the work is framed as an operating system for serious product thinking.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="mailto:hello@asforetold.com" className="chip chip--solid">
              Get in touch →
            </Link>
            <Link href="/#work" className="chip">
              View products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
