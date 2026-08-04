import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 py-16 px-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-indigo-400 font-semibold">Privacy Policy</span>
        </div>

        <h1 className="text-4xl font-extrabold text-white">Privacy Policy</h1>
        <p className="text-xs text-slate-400">Last updated: August 2026</p>

        <div className="space-y-6 text-sm text-slate-300 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">1. Information We Collect</h2>
            <p>
              As Foretold Labs respects your privacy. When you interact with our website or contact us regarding our products (Augur and DokSim), we may collect contact information such as your name, work email address, and organization name provided through inquiry forms.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">2. Use of Information</h2>
            <p>
              Information collected is used solely to respond to research inquiries, process pilot program applications, and evaluate system usage metrics for platform enhancement. We do not sell or rent user data to third parties.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">3. Enterprise & Clinical Data Isolation</h2>
            <p>
              For enterprise customers utilizing Augur or DokSim, client telemetry and patient simulation interaction logs are stored in isolated instance environments according to strict SOC 2 and HIPAA guidance.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">4. Contact</h2>
            <p>
              For questions regarding this policy, contact our privacy officer at <a href="mailto:hello@asforetold.com" className="text-indigo-400 underline">hello@asforetold.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
