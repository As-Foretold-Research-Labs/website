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
      <section className="flex min-h-[92vh] flex-col justify-center py-40 md:py-56">
        <span className="eyebrow mb-10">// The Future is Being Written</span>
        <h1 className="display max-w-5xl text-[clamp(3rem,11vw,9rem)]">
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
      <section className="overflow-hidden border-y border-[var(--line-soft)] py-8">
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
      <section className="grid grid-cols-2 gap-px border-b border-[var(--line-soft)] bg-[var(--line-soft)] md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-black p-10 md:p-14">
            <p className="display text-3xl text-white md:text-4xl">{s.value}</p>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.24em] text-white/40">
              {s.label}
            </p>
          </div>
        ))}
      </section>

      {/* Work — asymmetric staggered */}
      <section id="work" className="py-40 md:py-56">
        <div className="mb-28 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="eyebrow">// Workload</span>
            <h2 className="display mt-6 text-5xl md:text-7xl">Products in focus</h2>
          </div>
          <p className="body-copy max-w-md text-base md:text-lg">
            Two active product surfaces, both framed as modern operational tools rather than
            marketing pages.
          </p>
        </div>

        <div className="flex flex-col gap-20">
          {products.map((p, i) => (
            <Link
              key={p.href}
              href={p.href}
              className={`panel group flex flex-col justify-between p-10 transition-transform duration-300 hover:-translate-y-1 md:p-16 ${
                i % 2 === 1 ? "md:ml-auto md:w-[82%]" : "md:w-[82%]"
              }`}
            >
              <div className="flex items-start justify-between">
                <span className="index-label">{p.index}</span>
                <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/40">
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
      <section id="research" className="py-40 md:py-56">
        <div className="mb-28">
          <span className="eyebrow">// Research</span>
          <h2 className="display mt-6 text-5xl md:text-7xl">Areas of exploration</h2>
        </div>

        <div className="grid gap-px bg-[var(--line-soft)] md:grid-cols-2 lg:grid-cols-3">
          {researchAreas.map((area, i) => (
            <div
              key={area.title}
              className={`flex min-h-[18rem] flex-col justify-between bg-black p-10 md:p-14 ${
                area.isAI ? "border border-[var(--accent)]/40" : ""
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
      <section className="py-40 md:py-56">
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
