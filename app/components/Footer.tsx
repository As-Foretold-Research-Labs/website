import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#080a0f] py-14 px-6 md:px-12 text-xs">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-white/[0.06]">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2 text-white">
              <svg className="w-4 h-4 text-cobalt-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
              <span className="font-semibold tracking-wider text-sm font-mono uppercase">AS FORETOLD LABS</span>
            </div>
            <p className="text-zinc-400 text-xs leading-relaxed max-w-sm">
              Sovereign decision systems, stateful agentic simulators, and continuous validation architectures for mission-critical institutional operations.
            </p>
            <div className="flex items-center space-x-3 text-[11px] font-mono text-zinc-500 pt-2">
              <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> ALL SYSTEMS OPERATIONAL</span>
              <span className="text-zinc-700">|</span>
              <span>EST. 2024</span>
              <span className="text-zinc-700">|</span>
              <span>MANILA / GLOBAL</span>
            </div>
          </div>
          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-wider text-zinc-300 font-semibold mb-4">Core Platforms</h4>
            <ul className="space-y-2.5 text-zinc-400 text-xs">
              <li><Link href="/products/augur" className="hover:text-cobalt-light transition-colors flex items-center justify-between">Augur <span className="font-mono text-[10px] text-zinc-600">SOC 2 / ISO</span></Link></li>
              <li><Link href="/products/doksim" className="hover:text-cobalt-light transition-colors flex items-center justify-between">DokSim <span className="font-mono text-[10px] text-zinc-600">CLINICAL</span></Link></li>
              <li><Link href="/products/citytwin" className="hover:text-cobalt-light transition-colors flex items-center justify-between">CityTwin <span className="font-mono text-[10px] text-zinc-600">SPATIAL</span></Link></li>
              <li><Link href="/#platforms" className="hover:text-cobalt-light transition-colors text-zinc-500">Platform Specs & Architecture →</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-wider text-zinc-300 font-semibold mb-4">Strategic Intelligence</h4>
            <ul className="space-y-2.5 text-zinc-400 text-xs">
              <li><Link href="/intelligence" className="hover:text-cobalt-light transition-colors">Strategic Monographs</Link></li>
              <li><Link href="/intelligence" className="hover:text-cobalt-light transition-colors">Sovereign Data Ring Briefs</Link></li>
              <li><Link href="/intelligence" className="hover:text-cobalt-light transition-colors">Formal Verification Schemas</Link></li>
              <li><Link href="/intelligence" className="hover:text-cobalt-light transition-colors">Research Preprints & Dossiers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-wider text-zinc-300 font-semibold mb-4">Institutional Protocol</h4>
            <ul className="space-y-2.5 text-zinc-400 text-xs">
              <li><Link href="/about" className="hover:text-cobalt-light transition-colors">Doctrine & Foundational Principles</Link></li>
              <li><Link href="/briefing" className="hover:text-cobalt-light transition-colors">Air-Gapped Sovereign Deployment</Link></li>
              <li><Link href="/briefing" className="hover:text-cobalt-light transition-colors">Bilateral Mutual NDA Protocol</Link></li>
              <li><a href="mailto:velasquez.marcvictor.l@asforetold.space" className="hover:text-cobalt-light transition-colors font-mono text-[11px] text-zinc-500 truncate block">velasquez.marcvictor.l@asforetold.space</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-mono text-zinc-500">
          <div className="flex flex-wrap items-center gap-4">
            <span>© 2026 As Foretold Labs. All rights reserved.</span>
            <span className="text-zinc-700">|</span>
            <a href="/terms" className="hover:text-zinc-300 transition-colors">Terms of Sovereignty</a>
            <a href="/privacy" className="hover:text-zinc-300 transition-colors">Zero-Telemetry Privacy</a>
            <a href="/briefing" className="hover:text-zinc-300 transition-colors">Security Enclaves</a>
          </div>
          <div className="flex items-center gap-4 text-zinc-500">
            <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> SCIF / AIR-GAP READY</span>
            <span className="text-zinc-700">|</span>
            <span>SOC 2 TYPE II AUDITED</span>
            <span className="text-zinc-700">|</span>
            <span>ENC: SHA-256</span>
          </div>
        </div>
      </div>
    </footer>
  );
}