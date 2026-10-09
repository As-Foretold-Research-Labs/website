import Link from "next/link";

export default function KillSwitchEraArticle() {
  return (
    <article className="min-h-screen bg-obsidian text-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* BREADCRUMB */}
        <div className="flex items-center gap-2 text-xs font-mono text-dim mb-8">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="text-surface-border">/</span>
          <Link href="/intelligence" className="hover:text-white transition-colors">Intelligence</Link>
          <span className="text-surface-border">/</span>
          <span className="text-cobalt-light font-semibold">Kill Switch Era</span>
        </div>

        {/* ARTICLE HEADER */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs tracking-wider uppercase text-dim mb-6">
            <span className="text-white font-medium">Monograph 01</span>
            <span className="text-surface-border">—</span>
            <span>Strategic Monographs</span>
            <span className="text-surface-border">—</span>
            <span>June 2026</span>
            <span className="text-surface-border">—</span>
            <span>18 Min Assessment</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight mb-6">
            The Kill Switch Era: Sovereign Institutions and Local-First AI
          </h1>
          <div className="flex flex-wrap items-center gap-6 font-mono text-xs text-dim">
            <span>Author: Marc Victor L. Velasquez</span>
            <span>Citation: AFL-SM-26.04</span>
            <span>Classification: Open Public Release</span>
          </div>
        </header>

        {/* ARTICLE CONTENT */}
        <div className="prose prose-invert max-w-none space-y-8 text-steel leading-relaxed">
          <div className="border-t border-surface-border pt-8">
            <h2 className="text-xl font-semibold text-white mb-4">Executive Summary</h2>
            <p className="text-base">
              In mid-2026, multilateral export control recalibrations restricted frontier AI models to state-approved corridors. Frontier-model access has transitioned from commercial compute utility into sovereign diplomatic leverage. Sovereign critical infrastructure cannot remain tethered to single-point jurisdiction kill switches.
            </p>
          </div>

          <div className="border-t border-surface-border pt-8">
            <h2 className="text-xl font-semibold text-white mb-4">The Architecture of Dependence</h2>
            <p className="text-base mb-4">
              For the past decade, institutional AI strategy has been predicated on a fragile assumption: that frontier model access—hosted on hyperscaler infrastructure, governed by US export policy, and billed per token—would remain perpetually available, affordable, and politically neutral. That assumption has been invalidated.
            </p>
            <p className="text-base mb-4">
              The 2025–2026 export control regime expansion—encompassing H100/H200 GPU restrictions, model weight export licensing, and end-use certification requirements for Tier 3 nations—has reclassified AI compute as strategic dual-use material. Institutions in Manila, São Paulo, Ankara, and Jakarta now face a structural vulnerability: their core intelligence pipelines can be terminated by a single policy directive from a foreign jurisdiction.
            </p>
          </div>

          <div className="border-t border-surface-border pt-8">
            <h2 className="text-xl font-semibold text-white mb-4">Local-First as Strategic Imperative</h2>
            <p className="text-base mb-4">
              "Local-first AI" is not a cost optimization. It is a sovereignty architecture. It requires:
            </p>
            <ul className="space-y-3 ml-6 list-disc text-base">
              <li><strong>Deterministic local weights:</strong> Open-weight models (Llama 3.1 405B, Nemotron 3 Ultra, Qwen 2.5 72B) quantized to INT4/INT8 and deployed on sovereign GPU clusters (NVIDIA H100/L40S, AMD MI300X, or domestic accelerators).</li>
              <li><strong>Resilient offline inferencing meshes:</strong> Kubernetes-native inference servers (vLLM, TGI, TensorRT-LLM) with multi-region failover, air-gapped model registries, and zero-external-dependency startup sequences.</li>
              <li><strong>Data sovereignty safeguards:</strong> Training and fine-tuning data never leaves the enclave. RAG corpora, evaluation benchmarks, and prompt templates are version-controlled inside the perimeter.</li>
              <li><strong>Border-level infrastructure isolation:</strong> Network segmentation ensuring inference clusters operate without egress to public internet, model hubs, or telemetry endpoints.</li>
            </ul>
          </div>

          <div className="border-t border-surface-border pt-8">
            <h2 className="text-xl font-semibold text-white mb-4">Operationalizing the Transition</h2>
            <p className="text-base mb-4">
              As Foretold Research Labs has codified this transition into three deployment tiers:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="p-6 border border-surface-border bg-surface-card">
                <h3 className="font-semibold text-white mb-2 font-mono text-xs uppercase tracking-wider">Tier 0: Air-Gapped Enclave</h3>
                <p className="text-sm text-steel">On-premise GPU clusters with zero network egress. Model weights, training data, and inference logs never leave the SCIF. FedRAMP High / SOC 2 Type II continuous attestation via Augur Core.</p>
              </div>
              <div className="p-6 border border-surface-border bg-surface-card">
                <h3 className="font-semibold text-white mb-2 font-mono text-xs uppercase tracking-wider">Tier 1: Sovereign VPC</h3>
                <p className="text-sm text-steel">Dedicated tenancy in AWS GovCloud, Azure Government, or national sovereign cloud. Encrypted model storage, private endpoint inference, VPC-only data paths. Mutual TLS between all microservices.</p>
              </div>
              <div className="p-6 border border-surface-border bg-surface-card">
                <h3 className="font-semibold text-white mb-2 font-mono text-xs uppercase tracking-wider">Tier 2: Hybrid Mesh</h3>
                <p className="text-sm text-steel">Edge inference on-premises with centralized orchestration in sovereign cloud. Federated learning coordination without raw data exchange. Cryptographic proof of model integrity at each edge node.</p>
              </div>
            </div>
          </div>

          <div className="border-t border-surface-border pt-8">
            <h2 className="text-xl font-semibold text-white mb-4">Policy & Architecture Implications</h2>
            <p className="text-base mb-4">
              This monograph synthesizes 34 verified intelligence nodes into a blueprint for autonomous institutions: operationalizing deterministic local weights, resilient offline inferencing meshes, and data sovereignty safeguards that withstand border-level infrastructure isolation.
            </p>
            <p className="text-base mb-4">
              The strategic implication is clear: institutions that fail to localize their AI stack by 2027 will operate at the permission of foreign export control regimes. Those that invest now in sovereign compute, deterministic evaluation frameworks, and air-gapped deployment pipelines will retain decision advantage regardless of geopolitical turbulence.
            </p>
          </div>

          <div className="border-t border-surface-border pt-8">
            <h2 className="text-xl font-semibold text-white mb-4">Key Vectors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="p-4 border border-surface-border bg-surface-card">
                <h4 className="font-mono text-xs text-cobalt-light uppercase tracking-wider mb-2">Autonomous Compute</h4>
                <p className="text-sm text-steel">Domestic GPU cluster procurement, INT4/INT8 quantization pipelines, and inference server hardening for zero-downtime operation.</p>
              </div>
              <div className="p-4 border border-surface-border bg-surface-card">
                <h4 className="font-mono text-xs text-cobalt-light uppercase tracking-wider mb-2">Sovereign Data Rings</h4>
                <p className="text-sm text-steel">Encrypted, version-controlled knowledge corpora that never traverse public networks. Cryptographic lineage tracking for every training artifact.</p>
              </div>
              <div className="p-4 border border-surface-border bg-surface-card">
                <h4 className="font-mono text-xs text-cobalt-light uppercase tracking-wider mb-2">Jurisdictional Drift</h4>
                <p className="text-sm text-steel">Monitoring export control regime evolution across 47 jurisdictions. Automated risk scoring for model weight and compute dependencies.</p>
              </div>
              <div className="p-4 border border-surface-border bg-surface-card">
                <h4 className="font-mono text-xs text-cobalt-light uppercase tracking-wider mb-2">Air-Gapped LLMs</h4>
                <p className="text-sm text-steel">Complete model lifecycle—training, evaluation, deployment, monitoring—inside isolated enclaves. Zero telemetry, zero external API calls.</p>
              </div>
            </div>
          </div>

          <div className="border-t border-surface-border pt-8">
            <h2 className="text-xl font-semibold text-white mb-4">Institutional Recommendations</h2>
            <ol className="space-y-4 ml-6 list-decimal text-base text-steel">
              <li>Audit all external model dependencies. Catalog every API call, model weight download, and telemetry stream.</li>
              <li>Procure sovereign GPU capacity. Minimum 8× H100 or equivalent for 70B+ parameter model inference at production latency.</li>
              <li>Deploy Augur Core for continuous compliance attestation of the localized AI stack.</li>
              <li>Establish mutual NDA and technical exchange protocols with As Foretold Research Labs for co-development of sovereign evaluation frameworks.</li>
              <li>Execute tabletop exercises simulating sudden export control escalation: 72-hour cutover to local inference, data integrity verification, and stakeholder communication.</li>
            </ol>
          </div>
        </div>

        {/* FOOTER NAV */}
        <footer className="mt-16 pt-8 border-t border-surface-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link className="text-xs font-mono text-dim hover:text-white transition-colors" href="/intelligence">
            ← Back to Intelligence Briefings
          </Link>
          <Link className="inline-flex items-center gap-2 px-4 py-2 bg-white text-obsidian text-xs font-mono uppercase tracking-wider hover:bg-neutral-200 transition-colors" href="/briefing">
            Request Full Monograph Access
          </Link>
        </footer>
      </div>
    </article>
  );
}