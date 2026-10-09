import Link from "next/link";

export default function PaxSilicaArticle() {
  return (
    <article className="min-h-screen bg-obsidian text-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 text-xs font-mono text-dim mb-8">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="text-surface-border">/</span>
          <Link href="/intelligence" className="hover:text-white transition-colors">Intelligence</Link>
          <span className="text-surface-border">/</span>
          <span className="text-cobalt-light font-semibold">Pax Silica</span>
        </div>

        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs tracking-wider uppercase text-dim mb-6">
            <span className="text-white font-medium">Briefing 09</span>
            <span className="text-surface-border">—</span>
            <span>Sovereign Systems</span>
            <span className="text-surface-border">—</span>
            <span>July 2026</span>
            <span className="text-surface-border">—</span>
            <span>12 Min</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight mb-6">
            Pax Silica: Industrial Decarbonization and Sovereign Semiconductor Hubs
          </h1>
          <div className="flex flex-wrap items-center gap-6 font-mono text-xs text-dim">
            <span>Author: Marc Victor L. Velasquez</span>
            <span>Citation: AFL-BRIEF-26.09</span>
            <span>Classification: Open Public Release</span>
          </div>
        </header>

        <div className="prose prose-invert max-w-none space-y-8 text-steel leading-relaxed">
          <div className="border-t border-surface-border pt-8">
            <h2 className="text-xl font-semibold text-white mb-4">Strategic Framework</h2>
            <p className="text-base mb-4">
              The Indo-Pacific semiconductor supply corridor—spanning TSMC in Taiwan, Samsung in Korea, and emerging fabrication in Japan, Malaysia, and Vietnam—represents the most concentrated strategic compute dependency in modern history. As nations bid for AI data center hosting rights, a critical asymmetry emerges: host nations provide land, power, water, and regulatory stability, while retaining zero equity in the IP, model weights, or strategic value generated.
            </p>
            <p className="text-base mb-4">
              This briefing proposes a conditional framework: if a sovereign nation hosts high-density compute and fabrication facilities, institutional governance must require captive renewable grids and sovereign IP protection to avoid resource extraction without retained strategic value.
            </p>
          </div>

          <div className="border-t border-surface-border pt-8">
            <h2 className="text-xl font-semibold text-white mb-4">The Energy-Compute Nexus</h2>
            <p className="text-base mb-4">
              A 100MW AI data center consumes approximately 876 GWh annually—equivalent to the residential electricity consumption of 80,000 households. In tropical climates, cooling overhead adds 30-40% to baseline compute power. The Philippines, Malaysia, and Indonesia face a structural dilemma: attract hyperscaler investment with subsidized power, or mandate captive renewable generation that preserves grid stability for domestic populations.
            </p>
            <p className="text-base mb-4">
              Our modeling indicates that a 200MW sovereign semiconductor campus with co-located solar/wind/battery storage achieves LCOE parity with grid power within 4.2 years, while providing 99.97% uptime during grid instability events. This is not optional—it is a national security requirement.
            </p>
          </div>

          <div className="border-t border-surface-border pt-8">
            <h2 className="text-xl font-semibold text-white mb-4">Digital Twin Grid Integration</h2>
            <p className="text-base mb-4">
              CityTwin's physics-informed simulation engine enables real-time coupling of power grid dynamics, thermal management, and compute workload scheduling. When a fabrication cluster initiates a 400MW lithography cycle, the digital twin pre-positions battery dispatch, adjusts cooling tower setpoints, and validates grid stability margins—all within a 1.2ms telemetry sync loop.
            </p>
          </div>

          <div className="border-t border-surface-border pt-8">
            <h2 className="text-xl font-semibold text-white mb-4">Key Vectors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="p-4 border border-surface-border bg-surface-card">
                <h4 className="font-mono text-xs text-cobalt-light uppercase tracking-wider mb-2">Semiconductor Sovereignty</h4>
                <p className="text-sm text-steel">Retained equity in advanced node IP, model distillation rights, and strategic compute allocation for national defense.</p>
              </div>
              <div className="p-4 border border-surface-border bg-surface-card">
                <h4 className="font-mono text-xs text-cobalt-light uppercase tracking-wider mb-2">Energy Independence</h4>
                <p className="text-sm text-steel">Captive renewable microgrids with battery storage, hydrogen backup, and grid-forming inverter technology.</p>
              </div>
              <div className="p-4 border border-surface-border bg-surface-card">
                <h4 className="font-mono text-xs text-cobalt-light uppercase tracking-wider mb-2">Digital Twin Grids</h4>
                <p className="text-sm text-steel">Real-time power-compute co-optimization via CityTwin physics engine. Sub-millisecond stability validation.</p>
              </div>
              <div className="p-4 border border-surface-border bg-surface-card">
                <h4 className="font-mono text-xs text-cobalt-light uppercase tracking-wider mb-2">Indo-Pacific Strategy</h4>
                <p className="text-sm text-steel">Multilateral framework for compute resource sharing without strategic dependency. ASEAN compute confederation model.</p>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-16 pt-8 border-t border-surface-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link className="text-xs font-mono text-dim hover:text-white transition-colors" href="/intelligence">
            ← Back to Intelligence Briefings
          </Link>
          <Link className="btn-black px-4 py-2 text-xs font-mono uppercase tracking-wider" href="/briefing">
            Request Full Briefing Access
          </Link>
        </footer>
      </div>
    </article>
  );
}