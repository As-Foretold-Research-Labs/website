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
    <div className="w-full">
      {/* Hero - full height with minimal padding */}
      <section className="flex min-h-screen flex-col items-center justify-center py-28 md:py-40">
        <span className="eyebrow mb-6">// The Future is Being Written</span>
        <h1 className="display max-w-[14ch] text-center text-[clamp(3rem,15vw,9rem)] leading-none">
          AS FORETOLD LABS
        </h1>
        <p className="mt-12 max-w-2xl text-center body-copy text-lg md:text-xl leading-relaxed">
          We build intelligent systems at the intersection of simulation, automation, and human-computer interaction.
        </p>
        <div className="mt-16 flex gap-4">
          <Link href="/products/augur" className="chip chip--solid">View products →</Link>
          <Link href="#research" className="chip">Research areas</Link>
        </div>
      </section>

      {/* Marquee band - border frame with scrolling keywords */}
      <section className="my-8 border-y border-[var(--line-soft)] bg-black/40 backdrop-blur-sm">
        <div className="marquee gap-20 overflow-hidden py-6">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0 items-center gap-20 pr-20" aria-hidden={dup === 1}>
              <span className="display whitespace-nowrap text-2xl uppercase tracking-[0.2em] text-white/25 md:text-4xl">Simulation</span>
              <span className="display whitespace-nowrap text-2xl uppercase tracking-[0.2em] text-white/25 md:text-4xl">Automation</span>
              <span className="display whitespace-nowrap text-2xl uppercase tracking-[0.2em] text-[var(--accent)] md:text-4xl">Human-Computer Interaction</span>
              <span className="display whitespace-nowrap text-2xl uppercase tracking-[0.2em] text-white/25 md:text-4xl">Research Systems</span>
            </div>
          ))}
        </div>
      </section>

      {/* Stats strip - compact grid */}
      <section className="mb-16 mt-8 grid grid-cols-2 gap-px border-y border-[var(--line-soft)] bg-[var(--panel)] md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="border-r border-[var(--line-soft)] px-8 py-10 last:border-r-0">
            <p className="display text-3xl text-white md:text-4xl">{s.value}</p>
            <p className="mt-2 break-words font-mono text-xs uppercase tracking-[0.2em] text-white/50">
              {s.label}
            </p>
          </div>
        ))}
      </section>

      {/* Products - stacked editorial cards */}
      <section id="products" className="mb-24 pr-8 md:pr-12 lg:pr-16">
        <div className="mb-20 flex flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-16">
          <div className="min-w-0">
            <span className="eyebrow">// Workload</span>
            <h2 className="display mt-6 text-5xl md:text-7xl">PRODUCTS IN FOCUS</h2>
          </div>
          <p className="body-copy max-w-md shrink-0 text-base md:text-lg leading-relaxed">
            Two active product surfaces, both framed as modern operational tools rather than marketing pages.
          </p>
        </div>

        {/* Product 1 */}
        <article className="mb-16 border border-[var(--line)] bg-[var(--panel)] p-8 md:p-12 hover:bg-[var(--panel-hover)] transition-colors" href={products[0].href}>
          <span className="eyebrow mb-4 text-lg tracking-widest opacity-50">{products[0].index}</span>
          <div className="mb-4">
            <h3 className="display text-white">{products[0].title}</h3>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/60">{products[0].category}</p>
          </div>
          <p className="mb-6 body-copy max-w-xl leading-relaxed opacity-90">{products[0].description}</p>
          <div className="flex flex-wrap gap-3">
            {products[0].tags.map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full bg-[var(--line)] font-mono text-xs uppercase tracking-wide opacity-80">{tag}</span>
            ))}
          </div>
        </article>

        {/* Product 2 */}
        <article href={products[1].href}>
          <span className="eyebrow mb-4 text-lg tracking-widest opacity-50">{products[1].index}</span>
          <div className="mb-4">
            <h3 className="display text-white">{products[1].title}</h3>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/60">{products[1].category}</p>
          </div>
          <p className="mb-6 body-copy max-w-xl leading-relaxed opacity-90">{products[1].description}</p>
          <div className="flex flex-wrap gap-3">
            {products[1].tags.map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full bg-[var(--line)] font-mono text-xs uppercase tracking-wide opacity-80">{tag}</span>
            ))}
          </div>
        </article>
      </section>

      {/* Research grid */}
      <section id="research" className="mb-24">
        <span className="eyebrow">// Exploration</span>
        <h2 className="display mt-6 text-5xl md:text-7xl">AREAS OF EXPLORATION</h2>
        
        <div className="mt-12 grid grid-cols-1 gap-px border-y border-[var(--line)] bg-[var(--panel)] md:grid-cols-2 lg:grid-cols-3">
          {researchAreas.map((area, idx) => (
            <article key={idx} className="min-h-[300px] border-b border-[var(--line)] last:border-b-0 p-8 md:p-10 hover:bg-[var(--panel-hover)] transition-colors">
              <h3 className={`display ${area.isAI ? 'text-white' : 'text-white/90'} mb-4 leading-none`}>
                {area.title}
              </h3>
              <p className="body-copy text-sm leading-relaxed opacity-80 max-w-xl">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <span className="eyebrow">// Connect</span>
        <h2 className="display mt-6 text-5xl md:text-7xl">WANT TO WORK TOGETHER?</h2>
        <p className="mt-8 body-copy max-w-xl leading-relaxed opacity-80">
          We&apos;re always exploring new partnerships and technical challenges. Let us know what you&apos;re building.
        </p>
        <div className="mt-12 flex justify-end gap-4">
          <Link href="/contact" className="chip chip--solid">Get in touch →</Link>
          <Link href="/products/augur" className="chip">View products</Link>
        </div>
      </section>
    </div>
  );
}