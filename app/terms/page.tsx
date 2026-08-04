import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 py-16 px-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-indigo-400 font-semibold">Terms of Service</span>
        </div>

        <h1 className="text-4xl font-extrabold text-white">Terms of Service</h1>
        <p className="text-xs text-slate-400">Last updated: August 2026</p>

        <div className="space-y-6 text-sm text-slate-300 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">1. Acceptance of Terms</h2>
            <p>
              By accessing the As Foretold Labs website or utilizing our simulation and compliance products (Augur and DokSim), you agree to be bound by these Terms of Service.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">2. Use of Intellectual Property</h2>
            <p>
              All software, source code, logos, brand assets, and research materials produced by As Foretold Labs remain the exclusive intellectual property of As Foretold Labs.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">3. Medical & Simulation Disclaimer</h2>
            <p>
              DokSim patient simulations are designed exclusively for educational and clinical training purposes under institutional supervision and do not constitute formal medical diagnosis or advice.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">4. Governing Law</h2>
            <p>
              These terms shall be governed and interpreted in accordance with applicable state and federal laws. Inquiries may be directed to <a href="mailto:hello@asforetold.com" className="text-indigo-400 underline">hello@asforetold.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
