import Link from "next/link";

export default function InformationWarfareArticle() {
  return (
    <article className="min-h-screen bg-obsidian text-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 text-xs font-mono text-dim mb-8">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="text-surface-border">/</span>
          <Link href="/intelligence" className="hover:text-white transition-colors">Intelligence</Link>
          <span className="text-surface-border">/</span>
          <span className="text-cobalt-light font-semibold">Information Warfare</span>
        </div>

        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs tracking-wider uppercase text-dim mb-6">
            <span className="text-white font-medium">Briefing 05</span>
            <span className="text-surface-border">—</span>
            <span>Information Integrity</span>
            <span className="text-surface-border">—</span>
            <span>May 2026</span>
            <span className="text-surface-border">—</span>
            <span>15 Min</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight mb-6">
            Information Warfare & OSINT: Verification Failures in the Synthetic Fog
          </h1>
          <div className="flex flex-wrap items-center gap-6 font-mono text-xs text-dim">
            <span>Author: Marc Victor L. Velasquez</span>
            <span>Citation: AFL-BRIEF-26.05</span>
            <span>Classification: Open Public Release</span>
          </div>
        </header>

        <div className="prose prose-invert max-w-none space-y-8 text-steel leading-relaxed">
          <div className="border-t border-surface-border pt-8">
            <h2 className="text-xl font-semibold text-white mb-4">Operational Analysis</h2>
            <p className="text-base mb-4">
              Geopolitical narrative saturation via multi-modal diffusion engines has collapsed conventional OSINT methodology. When generative video outpaces manual verification windows by orders of magnitude, the analyst's fundamental tool—visual corroboration—becomes unreliable. This briefing documents the verification failure cascade and the cryptochain lineage architecture deployed by As Foretold Research Labs.
            </p>
          </div>

          <div className="border-t border-surface-border pt-8">
            <h2 className="text-xl font-semibold text-white mb-4">The Synthetic Fog</h2>
            <p className="text-base mb-4">
              In Q1 2026, observed deepfake video generation capacity exceeded 50,000 clips/day across major platforms. The verification latency for a single clip—reverse image search, metadata analysis, source tracing—averages 47 minutes. At 50,000 clips/day, the verification backlog exceeds 38,000 hours daily. The adversary floods the zone; the defender drowns.
            </p>
            <p className="text-base mb-4">
              This is not a quality problem. It is a throughput problem. Generative models produce synthetic media at near-zero marginal cost. Verification requires human-in-the-loop judgment, forensic tooling, and cross-source correlation—all linear, expensive, and slow.
            </p>
          </div>

          <div className="border-t border-surface-border pt-8">
            <h2 className="text-xl font-semibold text-white mb-4">Cryptochain Lineage Verification</h2>
            <p className="text-base mb-4">
              As Foretold Research Labs implements an automated cryptochain lineage architecture:
            </p>
            <ol className="space-y-3 ml-6 list-decimal text-base text-steel">
              <li><strong>Provenance anchoring at capture:</strong> Camera firmware signs SHA-256 hash of raw sensor data + GPS + timestamp + device certificate into a Merkle leaf. Immutable chain of custody from photon to pixel.</li>
              <li><strong>Transformation attestation:</strong> Every edit, crop, color grade, or AI enhancement logs a signed transformation record. The lineage chain grows; the original anchor remains verifiable.</li>
              <li><strong>Zero-knowledge verification:</strong> Third parties verify "this video has an unbroken cryptochain from a certified sensor" without accessing the raw footage. Privacy-preserving integrity proof.</li>
              <li><strong>Automated forgery detection:</strong> Any clip lacking a valid cryptochain, or showing chain discontinuity, is flagged as UNVERIFIED. No human review required for the negative case.</li>
            </ol>
          </div>

          <div className="border-t border-surface-border pt-8">
            <h2 className="text-xl font-semibold text-white mb-4">Key Vectors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="p-4 border border-surface-border bg-surface-card">
                <h4 className="font-mono text-xs text-cobalt-light uppercase tracking-wider mb-2">OSINT Automation</h4>
                <p className="text-sm text-steel">Pipeline ingestion of open sources with cryptographic provenance scoring. Unverified sources deprioritized automatically.</p>
              </div>
              <div className="p-4 border border-surface-border bg-surface-card">
                <h4 className="font-mono text-xs text-cobalt-light uppercase tracking-wider mb-2">Generative Media Forensics</h4>
                <p className="text-sm text-steel">Diffusion model fingerprinting, latent space anomaly detection, and temporal consistency analysis at scale.</p>
              </div>
              <div className="p-4 border border-surface-border bg-surface-card">
                <h4 className="font-mono text-xs text-cobalt-light uppercase tracking-wider mb-2">Cryptochain Lineage</h4>
                <p className="text-sm text-steel">Hardware-rooted trust chain from sensor to publication. Zero-knowledge verification for third-party auditors.</p>
              </div>
              <div className="p-4 border border-surface-border bg-surface-card">
                <h4 className="font-mono text-xs text-cobalt-light uppercase tracking-wider mb-2">Narrative Defense</h4>
                <p className="text-sm text-steel">Automated clustering of coordinated inauthentic behavior across platforms. Attribution via infrastructure fingerprinting.</p>
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