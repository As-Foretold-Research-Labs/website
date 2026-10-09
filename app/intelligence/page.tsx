import Link from "next/link";

const publications = [
  {
    slug: "/intelligence/kill-switch-era",
    category: "Strategic Monograph",
    date: "JUN 2026",
    readTime: "18 Min Assessment",
    title: "The Kill Switch Era: Sovereign Institutions and Local-First AI",
    excerpt: "In mid-2026, multilateral export control recalibrations restricted frontier AI models to state-approved corridors. Frontier-model access has transitioned from commercial compute utility into sovereign diplomatic leverage. Sovereign critical infrastructure cannot remain tethered to single-point jurisdiction kill switches.",
    author: "Marc Victor L. Velasquez",
    citation: "AFL-SM-26.04",
    classification: "Open Public Release",
    vectors: ["Autonomous Compute", "Sovereign Data Rings", "Jurisdictional Drift", "Air-Gapped LLMs"]
  },
  {
    slug: "/intelligence/pax-silica",
    category: "Sovereign Systems",
    date: "JUL 2026",
    readTime: "12 Min",
    title: "Pax Silica: Industrial Decarbonization and Sovereign Semiconductor Hubs",
    excerpt: "A strategic framework evaluating the Indo-Pacific semiconductor supply corridor. If sovereign nations host high-density compute and fabrication facilities, institutional governance must require captive renewable grids and sovereign IP protection to avoid resource extraction without retained strategic value.",
    author: "Marc Victor L. Velasquez",
    citation: "AFL-BRIEF-26.09",
    classification: "Open Public Release",
    vectors: ["Semiconductor Sovereignty", "Energy Independence", "Digital Twin Grids", "Indo-Pacific Strategy"]
  },
  {
    slug: "/intelligence/canvas-breach",
    category: "Operational Risk",
    date: "JUN 2026",
    readTime: "14 Min",
    title: "The Canvas Incident: Educational Infrastructure as National Soft Targets",
    excerpt: "Technical post-mortem on the 275-million-record exfiltration across 9,000 academic entities. An architectural audit of central database concentration vulnerabilities in enterprise learning management systems, with proposed cryptographic zero-knowledge compartmentalization models.",
    author: "Marc Victor L. Velasquez",
    citation: "AFL-BRIEF-26.07",
    classification: "Open Public Release",
    vectors: ["Supply Chain Risk", "Educational Infrastructure", "Zero-Knowledge Architecture", "Data Compartmentalization"]
  },
  {
    slug: "/intelligence/information-warfare",
    category: "Information Integrity",
    date: "MAY 2026",
    readTime: "15 Min",
    title: "Information Warfare & OSINT: Verification Failures in the Synthetic Fog",
    excerpt: "Operational analysis of geopolitical narrative saturation via multi-modal diffusion engines. When generative video outpaces manual verification windows, conventional OSINT methodology collapses. How As Foretold Research Labs implements automated cryptochain lineage verification.",
    author: "Marc Victor L. Velasquez",
    citation: "AFL-BRIEF-26.05",
    classification: "Open Public Release",
    vectors: ["OSINT Automation", "Generative Media Forensics", "Cryptochain Lineage", "Narrative Defense"]
  },
  {
    slug: "/intelligence/deterministic-ai",
    category: "Strategic Monograph",
    date: "MAR 2026",
    readTime: "16 Min",
    title: "Deterministic AI vs. Probabilistic Drift in Mission-Critical Systems",
    excerpt: "Why high-consequence enterprise and clinical workflows cannot operate on raw probabilistic completions. Proving boundary validation graphs via DokSim that constrain generative agents to bounded state transitions with zero tolerance for ungrounded drift.",
    author: "Marc Victor L. Velasquez",
    citation: "AFL-BRIEF-26.03",
    classification: "Open Public Release",
    vectors: ["State Machine Validation", "Zero Hallucination", "Clinical Decision Loops", "Bounded Generativity"]
  },
];

export default function IntelligencePage() {
  return (
    <div className="min-h-screen bg-obsidian text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* TOP INSTITUTIONAL HEADER */}
        <header className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
            <div>
              <div className="font-mono text-xs text-dim uppercase tracking-widest mb-3 flex items-center gap-2">
                <span>Dossier Series</span>
                <span className="text-surface-border">·</span>
                <span>Unclassified Research Release</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.15]">
                Strategic Intelligence & Research Monograph Briefings
              </h1>
            </div>
            <div className="font-mono text-xs text-dim text-right shrink-0">
              <div>INDEX: AFL-MONO-2026</div>
              <div className="text-surface-border mt-0.5">MANILA / GLOBAL</div>
            </div>
          </div>
          <p className="font-body text-base sm:text-lg text-steel max-w-3xl leading-relaxed font-normal">
            In-depth technical analysis, geopolitical assessments, and architectural monographs from As Foretold Research Labs on artificial intelligence sovereignty, autonomous defense, and institutional security.
          </p>

          {/* TAXONOMY FILTER BAR */}
          <div className="mt-10 pt-4 border-t border-surface-border flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-1 font-mono text-xs">
              <button className="px-3 py-1.5 bg-surface-card border border-surface-border text-white tracking-wider uppercase font-medium">
                All Intelligence
              </button>
              <button className="px-3 py-1.5 text-steel hover:text-white border border-transparent hover:border-surface-border transition-colors tracking-wider uppercase">
                Strategic Monographs
              </button>
              <button className="px-3 py-1.5 text-steel hover:text-white border border-transparent hover:border-surface-border transition-colors tracking-wider uppercase">
                Sovereign Systems
              </button>
              <button className="px-3 py-1.5 text-steel hover:text-white border border-transparent hover:border-surface-border transition-colors tracking-wider uppercase">
                Information Integrity
              </button>
              <button className="px-3 py-1.5 text-steel hover:text-white border border-transparent hover:border-surface-border transition-colors tracking-wider uppercase">
                Operational Risk
              </button>
            </div>
            <div className="font-mono text-xs text-dim">Showing 5 Briefings</div>
          </div>
        </header>

        {/* FEATURED STRATEGIC MONOGRAPH */}
        <section className="mb-16">
          <article className="bg-surface border border-surface-border p-8 lg:p-10">
            <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12">
              <div className="lg:max-w-3xl space-y-5">
                <div className="flex flex-wrap items-center gap-3 font-mono text-xs tracking-wider uppercase text-dim">
                  <span className="text-white font-medium">Monograph 01</span>
                  <span className="text-surface-border">—</span>
                  <span>Strategic Monographs</span>
                  <span className="text-surface-border">—</span>
                  <span>June 2026</span>
                  <span className="text-surface-border">—</span>
                  <span>18 Min Assessment</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white leading-tight">
                  The Kill Switch Era: Sovereign Institutions and Local-First AI
                </h2>
                <div className="space-y-4 text-steel text-sm sm:text-base leading-relaxed">
                  <p className="font-body">
                    <strong className="font-medium text-white uppercase text-xs font-mono tracking-wider block mb-1">Executive Summary</strong>
                    In mid-2026, multilateral export control recalibrations restricted frontier AI models to state-approved corridors. Frontier-model access has transitioned from commercial compute utility into sovereign diplomatic leverage. Sovereign critical infrastructure cannot remain tethered to single-point jurisdiction kill switches.
                  </p>
                  <p className="font-body">
                    <strong className="font-medium text-white uppercase text-xs font-mono tracking-wider block mb-1">Policy & Architecture Implications</strong>
                    This monograph synthesizes 34 verified intelligence nodes into a blueprint for autonomous institutions: operationalizing deterministic local weights, resilient offline inferencing meshes, and data sovereignty safeguards that withstand border-level infrastructure isolation.
                  </p>
                </div>
                <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 font-mono text-xs text-dim border-t border-surface-border">
                  <span>Author: Marc Victor L. Velasquez</span>
                  <span>Citation: AFL-SM-26.04</span>
                  <span>Classification: Open Public Release</span>
                </div>
              </div>
              <div className="lg:w-64 flex flex-col justify-between shrink-0 border-t lg:border-t-0 lg:border-l border-surface-border pt-6 lg:pt-0 lg:pl-8">
                <div className="space-y-3 font-mono text-xs">
                  <div className="text-dim uppercase tracking-wider text-[11px]">Key Vectors</div>
                  <ul className="space-y-1.5 text-steel">
                    {publications[0].vectors.map((v, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-dim" />
                        {v}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
                  <Link className="w-full inline-flex items-center justify-between px-4 py-3 bg-white text-obsidian font-mono text-xs uppercase tracking-wider font-medium hover:bg-neutral-200 transition-colors" href={publications[0].slug}>
                    <span>Access Full Monograph</span>
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </section>

        {/* DOSSIER INTELLIGENCE GRID */}
        <section className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-surface-border">
            <h3 className="font-mono text-xs uppercase tracking-widest text-dim font-medium">
              Dossier Briefings & Field Evaluations
            </h3>
            <span className="font-mono text-xs text-surface-border uppercase">Archive: 2026.Q1 – 2026.Q3</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {publications.slice(1).map((pub) => (
              <article key={pub.slug} className="bg-surface border border-surface-border p-6 sm:p-8 flex flex-col justify-between hover:border-surface-border-strong transition-colors">
                <div>
                  <div className="flex items-center justify-between font-mono text-xs uppercase tracking-wider text-dim mb-4 pb-3 border-b border-surface-border">
                    <span>{pub.category}</span>
                    <span>{pub.date} · {pub.readTime}</span>
                  </div>
                  <Link href={pub.slug} className="block">
                    <h4 className="text-xl font-semibold text-white mb-3 leading-snug hover:text-cobalt-light transition-colors">
                      {pub.title}
                    </h4>
                  </Link>
                  <p className="font-body text-sm text-steel leading-relaxed mb-6">
                    {pub.excerpt}
                  </p>
                </div>
                <div>
                  <div className="pt-4 border-t border-surface-border flex items-center justify-between font-mono text-xs">
                    <span className="text-dim">{pub.citation}</span>
                    <Link className="text-white hover:text-cobalt-light flex items-center gap-1 uppercase tracking-wider transition-colors" href={pub.slug}>
                      <span>Read Dossier</span>
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CLEAN EDITORIAL SUBSCRIPTION MODULE */}
        <section className="mt-20 border-t border-surface-border pt-12">
          <div className="bg-surface border border-surface-border p-8 lg:p-12">
            <div className="max-w-3xl">
              <div className="font-mono text-xs text-dim uppercase tracking-widest mb-3">
                Institutional Despatches
              </div>
              <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight text-white mb-3">
                Receive Intelligence Briefings
              </h3>
              <p className="font-body text-sm sm:text-base text-steel leading-relaxed mb-8">
                Strategic monographs, system vulnerability audits, and policy architectures delivered directly to defense specialists, policy fellows, and institutional architects prior to standard public publication.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-xl">
                <input className="flex-grow px-4 py-3 bg-obsidian border border-surface-border text-white placeholder:text-dim text-xs font-mono focus:outline-none focus:border-steel transition-colors" placeholder="institutional.email@organization.domain" required type="email" />
                <button className="px-6 py-3 bg-white hover:bg-neutral-200 text-obsidian text-xs font-mono uppercase tracking-wider font-semibold transition-colors shrink-0" type="submit">
                  Request Access
                </button>
              </form>
              <div className="mt-6 flex flex-wrap items-center gap-6 font-mono text-xs text-dim">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-dim" />
                  PGP Encrypted Digests
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-dim" />
                  No Commercial Tracking
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-dim" />
                  Controlled Circulation
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}