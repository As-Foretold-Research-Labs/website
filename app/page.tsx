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
    <div className="w-full relative overflow-hidden bg-black">
      {/* Deep OLED black background */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Subtle ambient glow - restrained use of accent */}
        <div className="absolute left-[15%] top-[10%] h-[60vh] w-[40rem] bg-accent/3 blur-[150px] rounded-full"></div>
      </div>

      {/* Hero - asymmetrical split layout (not centered) */}
      <section className="relative z-10 min-h-screen flex items-end pb-28 md:pb-40 px-6 md:px-12">
        <div className="max-w-[1400px] w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          {/* Left: Editorial manifesto style */}
          <div className="md:col-span-7 flex flex-col justify-end min-h-[50vh] md:min-h-[60vh]">
            <span className="eyebrow mb-8">// The Future is Being Written</span>
            <h1 className="display text-left text-[clamp(2.5rem,8vw,5rem)] leading-none tracking-tight animate-fade-in-up">
              AS FORETOLD LABS
            </h1>
            <p className="mt-8 max-w-xl body-copy text-lg md:text-xl leading-relaxed opacity-75 animate-fade-in-up delay-150">
              We build intelligent systems at the intersection of simulation, automation, and human-computer interaction.
            </p>
            <div className="mt-12 flex flex-wrap gap-4 animate-fade-in-up delay-200">
              <Link href="/products/augur" className="chip chip--solid group">View products →</Link>
              <Link href="#research" className="chip">Research areas</Link>
            </div>
          </div>
          
          {/* Right: Empty negative space - lets the type breathe */}
          <div className="md:col-span-5 md:h-[40vh] md:min-h-[30vh]"></div>
        </div>
      </section>

      {/* Marquee band - subtle motion, not overwhelming */}
      <section className="my-8 border-y border-[var(--line-soft)] bg-black/50 backdrop-blur-sm relative overflow-hidden">
        <div className="marquee gap-16 overflow-hidden py-4">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0 items-center gap-12 md:gap-16 pr-12 md:pr-20" aria-hidden={dup === 1}>
              <span className="display whitespace-nowrap text-lg md:text-xl uppercase tracking-[0.2em] text-white/20 md:text-3xl">Simulation</span>
              <span className="display whitespace-nowrap text-lg md:text-xl uppercase tracking-[0.2em] text-white/20 md:text-3xl">Automation</span>
              <span className="display whitespace-nowrap text-lg md:text-xl uppercase tracking-[0.2em] text-[var(--accent)] md:text-3xl">Human-Computer Interaction</span>
              <span className="display whitespace-nowrap text-lg md:text-xl uppercase tracking-[0.2em] text-white/20 md:text-3xl">Research Systems</span>
            </div>
          ))}
        </div>
      </section>

      {/* Stats strip - data-led, minimal */}
      <section className="mb-16 mt-4 px-6 md:px-12">
        <div className="grid grid-cols-2 gap-px border-y border-[var(--line-soft)] bg-[var(--panel)] md:grid-cols-4 max-w-[1400px] mx-auto">
          {stats.map((s) => (
            <div key={s.label} className="border-r border-[var(--line-soft)] px-6 md:px-8 py-8 last:border-r-0 group hover:bg-[var(--panel-hover)] transition-colors cursor-default">
              <p className="display text-2xl md:text-4xl text-white md:text-5xl tracking-tight group-hover:scale-105 transition-transform">{s.value}</p>
              <p className="mt-2 break-words font-mono text-xs uppercase tracking-[0.2em] text-white/60">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Products - asymmetrical bento layout */}
      <section id="products" className="mb-24 px-6 md:px-12 max-w-[1400px] mx-auto">
        {/* Section header - left-aligned, not centered */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between mb-12">
          <div className="min-w-0">
            <span className="eyebrow">// Workload</span>
            <h2 className="display mt-6 text-5xl md:text-7xl tracking-tight">PRODUCTS IN FOCUS</h2>
          </div>
          <p className="body-copy max-w-md shrink-0 text-base md:text-lg leading-relaxed opacity-80">
            Two active product surfaces, both framed as modern operational tools rather than marketing pages.
          </p>
        </div>

        {/* Product 1 - Augur */}
        <div className="group mb-8">
          <a href={products[0].href} className="block relative overflow-hidden rounded-2xl bg-[var(--panel)] border border-[var(--line)] hover:border-[var(--accent)/0.5] transition-colors duration-500">
            {/* Subtle hover gradient */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-transparent via-accent/3 to-transparent pointer-events-none"></div>

            <div className="p-8 md:p-12 relative">
              <span className="eyebrow mb-4 text-lg tracking-widest opacity-60">{products[0].index}</span>
              
              <div className="mb-5">
                <h3 className="display flex items-center gap-3 group-hover:text-[var(--accent)] transition-colors">
                  {products[0].title}
                  {/* Decorative underline */}
                  <span className="inline-flex h-[1px] w-14 bg-accent/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </h3>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/70">{products[0].category}</p>
              </div>

              <p className="mb-8 body-copy max-w-xl leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                {products[0].description}
              </p>

              <div className="flex flex-wrap gap-2.5">
                {products[0].tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-[var(--line)] font-mono text-xs uppercase tracking-wide opacity-70 hover:opacity-100 cursor-default transition-opacity">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        </div>

        {/* Product 2 - DokSim */}
        <div className="group">
          <a href={products[1].href} className="block relative overflow-hidden rounded-2xl bg-[var(--panel)] border border-[var(--line)] hover:border-[var(--accent)/0.5] transition-colors duration-500">
            {/* Subtle hover gradient */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-transparent via-accent/3 to-transparent pointer-events-none"></div>

            <div className="p-8 md:p-12 relative">
              <span className="eyebrow mb-4 text-lg tracking-widest opacity-60">{products[1].index}</span>
              
              <div className="mb-5">
                <h3 className="display flex items-center gap-3 group-hover:text-[var(--accent)] transition-colors">
                  {products[1].title}
                  {/* Decorative underline */}
                  <span className="inline-flex h-[1px] w-14 bg-accent/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </h3>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/70">{products[1].category}</p>
              </div>

              <p className="mb-8 body-copy max-w-xl leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                {products[1].description}
              </p>

              <div className="flex flex-wrap gap-2.5">
                {products[1].tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-[var(--line)] font-mono text-xs uppercase tracking-wide opacity-70 hover:opacity-100 cursor-default transition-opacity">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        </div>

      </section>

      {/* Research grid - editorial asymmetry */}
      <section id="research" className="mb-24 px-6 md:px-12 max-w-[1400px] mx-auto">
        {/* Section accent glow - subtle */}
        <div className="absolute right-0 top-0 h-full w-[15rem] bg-gradient-to-l from-accent/3 to-transparent pointer-events-none"></div>

        <span className="eyebrow">// Exploration</span>
        <h2 className="display mt-6 text-5xl md:text-7xl tracking-tight">AREAS OF EXPLORATION</h2>

        <div className="mt-12 grid grid-cols-1 gap-px border-y border-[var(--line)] bg-[var(--panel)] md:grid-cols-2 lg:grid-cols-3 max-h-[600px] overflow-y-auto custom-scrollbar">
          {researchAreas.map((area, idx) => (
            <article key={idx} className="min-h-[220px] md:min-h-[280px] border-b border-[var(--line)] last:border-b-0 p-6 md:p-10 group hover:bg-[var(--panel-hover)] transition-colors relative">
              {/* Corner accent line */}
              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-accent/70 group-hover:w-full transition-all duration-500 ease-out"></div>

              <h3 className={`display mb-4 leading-none ${area.isAI ? 'text-white' : 'text-white/90'} group-hover:text-[var(--accent)] transition-colors duration-300`}>
                {area.title}
              </h3>
              <p className="body-copy text-sm leading-relaxed opacity-75 max-w-xl group-hover:opacity-90 transition-opacity duration-300">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA - minimal, not overwhelming */}
      <section className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
        {/* Accent background glow - subtle, restrained */}
        <div className="absolute bottom-0 right-0 h-[25rem] w-[25rem] bg-accent/3 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto">
          <span className="eyebrow">// Connect</span>
          <h2 className="display mt-6 text-5xl md:text-7xl tracking-tight">WANT TO WORK TOGETHER?</h2>
          <p className="mt-8 body-copy max-w-xl leading-relaxed opacity-75">
            We&apos;re always exploring new partnerships and technical challenges. Let us know what you&apos;re building.
          </p>
          <div className="mt-12 flex justify-end gap-4">
            <Link href="/contact" className="chip chip--solid group">Get in touch →</Link>
            <Link href="/products/augur" className="chip">View products</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
