import Link from "next/link";

export default function CanvasBreachArticle() {
  return (
    <article className="min-h-screen bg-obsidian text-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 text-xs font-mono text-dim mb-8">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="text-surface-border">/</span>
          <Link href="/intelligence" className="hover:text-white transition-colors">Intelligence</Link>
          <span className="text-surface-border">/</span>
          <span className="text-cobalt-light font-semibold">Canvas Breach</span>
        </div>

        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs tracking-wider uppercase text-dim mb-6">
            <span className="text-white font-medium">Briefing 07</span>
            <span className="text-surface-border">—</span>
            <span>Operational Risk</span>
            <span className="text-surface-border">—</span>
            <span>June 2026</span>
            <span className="text-surface-border">—</span>
            <span>14 Min</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight mb-6">
            The Canvas Incident: Educational Infrastructure as National Soft Targets
          </h1>
          <div className="flex flex-wrap items-center gap-6 font-mono text-xs text-dim">
            <span>Author: Marc Victor L. Velasquez</span>
            <span>Citation: AFL-BRIEF-26.07</span>
            <span>Classification: Open Public Release</span>
          </div>
        </header>

        <div className="prose prose-invert max-w-none space-y-8 text-steel leading-relaxed">
          <div className="border-t border-surface-border pt-8">
            <h2 className="text-xl font-semibold text-white mb-4">Technical Post-Mortem</h2>
            <p className="text-base mb-4">
              On June 14, 2026, ShinyHunters exfiltrated approximately 275 million records from Instructure's Canvas Learning Management System, affecting 9,000+ educational institutions across 90 countries. The breach exposed student PII, enrollment records, grade histories, authentication tokens, and institutional financial data.
            </p>
            <p className="text-base mb-4">
              Root cause analysis reveals a textbook centralized architecture failure: a single multi-tenant PostgreSQL cluster serving all institutions, with inadequate tenant isolation, no cryptographic compartmentalization, and excessive administrative privilege scope. The attack vector—compromised service account credentials with global read access—traversed the entire data estate in under 4 hours.
            </p>
          </div>

          <div className="border-t border-surface-border pt-8">
            <h2 className="text-xl font-semibold text-white mb-4">Architectural Audit Findings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="p-4 border border-surface-border bg-surface-card">
                <h4 className="font-mono text-xs text-cobalt-light uppercase tracking-wider mb-2">Centralized Database Concentration</h4>
                <p className="text-sm text-steel">Single logical database serving 9,000 tenants. No sharding, no tenant-level encryption keys, no blast radius limitation.</p>
              </div>
              <div className="p-4 border border-surface-border bg-surface-card">
                <h4 className="font-mono text-xs text-cobalt-light uppercase tracking-wider mb-2">Excessive Privilege Scope</h4>
                <p className="text-sm text-steel">Service account possessed global SELECT across all tenant schemas. Principle of least privilege violated at architecture layer.</p>
              </div>
              <div className="p-4 border border-surface-border bg-surface-card">
                <h4 className="font-mono text-xs text-cobalt-light uppercase tracking-wider mb-2">Zero Cryptographic Compartmentalization</h4>
                <p className="text-sm text-steel">No per-tenant encryption. No zero-knowledge proof of data access. Auditor and attacker see identical data plane.</p>
              </div>
              <div className="p-4 border border-surface-border bg-surface-card">
                <h4 className="font-mono text-xs text-cobalt-light uppercase tracking-wider mb-2">Insufficient Audit Granularity</h4>
                <p className="text-sm text-steel">Query logging captured table-level access, not row-level or tenant-level. Exfiltration appeared as "normal" reporting workload.</p>
              </div>
            </div>
          </div>

          <div className="border-t border-surface-border pt-8">
            <h2 className="text-xl font-semibold text-white mb-4">Proposed Mitigation Architecture</h2>
            <p className="text-base mb-4">
              As Foretold Research Labs proposes a cryptographic zero-knowledge compartmentalization model for multi-tenant SaaS platforms:
            </p>
            <ol className="space-y-3 ml-6 list-decimal text-base text-steel">
              <li><strong>Per-tenant encryption keys</strong> managed by customer HSM/KMS, not platform provider. Platform never holds plaintext keys.</li>
              <li><strong>Zero-knowledge access proofs</strong> for every query: platform proves it accessed only authorized tenant data without revealing data contents.</li>
              <li><strong>Augur Core continuous attestation</strong> mapping every database query to tenant authorization policy in real-time.</li>
              <li><strong>Immutable audit ledger</strong> with Merkle tree anchoring—tamper-evident proof of all data access for regulatory and forensic use.</li>
            </ol>
          </div>

          <div className="border-t border-surface-border pt-8">
            <h2 className="text-xl font-semibold text-white mb-4">Strategic Implications</h2>
            <p className="text-base mb-4">
              Educational infrastructure is critical national infrastructure. Student records, research IP, and enrollment data constitute strategic intelligence. The Canvas breach demonstrates that SaaS centralization without cryptographic tenant isolation creates systemic soft targets. Nations must mandate cryptographic compartmentalization for all educational and governmental SaaS procurement.
            </p>
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