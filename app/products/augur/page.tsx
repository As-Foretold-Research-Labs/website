"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const sampleFindings = [
  {
    id: "FIND-101",
    title: "S3 Bucket Encryption Disabled",
    severity: "HIGH",
    description: "Production S3 bucket `prod-data-vault` has SSE-KMS customer managed encryption unconfigured.",
    source: "AWS Security Hub",
  },
  {
    id: "FIND-102",
    title: "MFA Enforcement Missing for Admin Role",
    severity: "CRITICAL",
    description: "IAM Role `DevOpsAdminRole` allows assumeRole without requiring multi-factor authentication token.",
    source: "CloudTrail Monitor",
  },
  {
    id: "FIND-103",
    title: "Outdated Dependency CVE-2024-3094",
    severity: "HIGH",
    description: "Library `xz-utils` version 5.6.0 detected in container image `api-gateway:latest`.",
    source: "Container Vulnerability Scanner",
  },
];

const mappedControlsMap: Record<string, { soc2: string; iso: string; policy: string; reasoning: string }> = {
  "FIND-101": {
    soc2: "CC6.1 - Logical Access Controls & CC6.7 - Data Transmission Encryption",
    iso: "ISO 27001:2022 A.8.24 - Use of Cryptography",
    policy: "POL-SEC-04: Data Classification and Storage Protection Policy",
    reasoning: "Unencrypted storage exposes stored customer assets. Policy mandates AES-256 or KMS-based envelope encryption on all static datastores.",
  },
  "FIND-102": {
    soc2: "CC6.2 - User Access Authentication & CC6.3 - Privilege Access Management",
    iso: "ISO 27001:2022 A.5.17 - Authentication Information",
    policy: "POL-IAM-01: Identity & Access Management Enforcement Policy",
    reasoning: "Administrative access without MFA breaches strict identity verification requirements. Policy mandates hardware or TOTP MFA for elevated roles.",
  },
  "FIND-103": {
    soc2: "CC7.1 - Vulnerability Management & CC7.4 - Patch & Change Management",
    iso: "ISO 27001:2022 A.8.8 - Management of Technical Vulnerabilities",
    policy: "POL-DEV-02: Software Supply Chain & Vulnerability Remediation Policy",
    reasoning: "Critical library vulnerabilities require automated triage and replacement within 72 hours under SOC 2 CC7.1 rules.",
  },
};

export default function AugurProductPage() {
  const [selectedFinding, setSelectedFinding] = useState(sampleFindings[0].id);
  const [customFinding, setCustomFinding] = useState("");
  const [isSimulating, setIsSimulating] = useState(false);
  const [activeTab, setActiveTab] = useState<"overview" | "simulator" | "architecture">("overview");

  const mappedData = mappedControlsMap[selectedFinding] || mappedControlsMap["FIND-101"];

  const handleSimulate = () => {
    setIsSimulating(true);
    setTimeout(() => {
      setIsSimulating(false);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-obsidian text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* BREADCRUMB */}
        <div className="flex items-center gap-2 text-xs font-mono text-dim mb-8">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="text-surface-border">/</span>
          <Link href="/#platforms" className="hover:text-white transition-colors">Platforms</Link>
          <span className="text-surface-border">/</span>
          <span className="text-cobalt-light font-semibold">Augur</span>
        </div>

        {/* HERO HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded bg-surface border border-surface-border text-cobalt-light text-xs font-mono uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-cobalt-light animate-pulse" />
              Continuous Compliance & Sovereign Governance
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
              Augur <span className="text-dim font-normal">|</span> Continuous Compliance & Sovereign Governance Architecture
            </h1>

            <p className="text-lg sm:text-xl font-normal text-steel max-w-3xl leading-relaxed mb-8">
              Automating operational proof and continuous attestation across high-stakes autonomous systems. Augur continuously verifies code, infrastructure state, and operational telemetry against global regulatory mandates with mathematical certainty.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-3 py-1 rounded border border-surface-border bg-surface text-cobalt-light text-xs font-mono">C# / .NET 10</span>
              <span className="px-3 py-1 rounded border border-surface-border bg-surface text-white text-xs font-mono">Blazor Server</span>
              <span className="px-3 py-1 rounded border border-surface-border bg-surface text-emerald-glow text-xs font-mono">EF Core</span>
              <span className="px-3 py-1 rounded border border-surface-border bg-surface text-amber text-xs font-mono">OpenAPI 3.1.1</span>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  setActiveTab("simulator");
                  const el = document.getElementById("augur-demo-section");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn btn-primary text-sm py-3 px-6"
              >
                Launch Compliance Simulator
              </button>
              <Link
                href="#assessment"
                className="btn btn-secondary text-sm py-3 px-6"
              >
                Request Institutional Assessment
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded border border-surface-border bg-surface-card p-2 shadow-xl overflow-hidden group">
              <div className="relative w-full h-72 md:h-80 rounded overflow-hidden bg-black">
                <Image
                  src="/augur-demo.gif"
                  alt="Augur Compliance Automation Demo"
                  fill
                  className="object-cover object-top opacity-95 group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4 flex items-center justify-between text-xs text-dim">
                <span className="flex items-center gap-1.5 font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Live Compliance Mapping
                </span>
                <span className="text-cobalt-light font-mono font-semibold">Blazor WebUI</span>
              </div>
            </div>
          </div>
        </div>

        {/* PALANTIR-STYLE METRICS BAR */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-surface-border mt-20 border border-surface-border mb-16">
          <div className="bg-obsidian p-6 sm:p-7">
            <div className="font-mono text-xs text-dim uppercase tracking-widest mb-2">Audit Latency</div>
            <div className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">{"<"} 15 Minutes</div>
            <div className="text-xs text-dim mt-2 font-mono">From telemetry emit to sealed proof</div>
          </div>
          <div className="bg-obsidian p-6 sm:p-7">
            <div className="font-mono text-xs text-dim uppercase tracking-widest mb-2">Control Resolution</div>
            <div className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">Deterministic</div>
            <div className="text-xs text-dim mt-2 font-mono">Zero heuristic sampling bias</div>
          </div>
          <div className="bg-obsidian p-6 sm:p-7">
            <div className="font-mono text-xs text-dim uppercase tracking-widest mb-2">Perimeter Boundary</div>
            <div className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">Zero-Exfiltration</div>
            <div className="text-xs text-dim mt-2 font-mono">Cryptographic hashes only</div>
          </div>
          <div className="bg-obsidian p-6 sm:p-7">
            <div className="font-mono text-xs text-dim uppercase tracking-widest mb-2">Assurance Model</div>
            <div className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">Continuous</div>
            <div className="text-xs text-dim mt-2 font-mono">Real-time point-in-time seals</div>
          </div>
        </div>

        {/* TABS NAVIGATION */}
        <div className="flex border-b border-surface-border mb-12">
          <button
            onClick={() => setActiveTab("overview")}
            className={`py-3 px-6 font-semibold text-sm transition-colors border-b-2 -mb-px ${activeTab === "overview" ? "border-cobalt-light text-cobalt-light" : "border-transparent text-dim hover:text-white"}`}
          >
            System Capabilities
          </button>
          <button
            onClick={() => setActiveTab("simulator")}
            className={`py-3 px-6 font-semibold text-sm transition-colors border-b-2 -mb-px ${activeTab === "simulator" ? "border-cobalt-light text-cobalt-light" : "border-transparent text-dim hover:text-white"}`}
          >
            Interactive Auto-Mapper
          </button>
          <button
            onClick={() => setActiveTab("architecture")}
            className={`py-3 px-6 font-semibold text-sm transition-colors border-b-2 -mb-px ${activeTab === "architecture" ? "border-cobalt-light text-cobalt-light" : "border-transparent text-dim hover:text-white"}`}
          >
            Architecture & Specs
          </button>
        </div>

        {/* TAB 1: OVERVIEW */}
        {activeTab === "overview" && (
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded border border-surface-border bg-surface-card">
                <div className="w-10 h-10 rounded border border-surface-border bg-surface flex items-center justify-center text-cobalt-light mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Deterministic Control Mapping</h3>
                <p className="text-steel text-sm leading-relaxed">
                  Dynamic, bidirectional compilation between code diffs, container lifecycles, and discrete regulatory controls. Every pull request and Terraform change is automatically indexed directly against applicable SOC 2 and ISO criteria.
                </p>
              </div>

              <div className="p-6 rounded border border-surface-border bg-surface-card">
                <div className="w-10 h-10 rounded border border-surface-border bg-surface flex items-center justify-center text-amber mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Continuous Evidentiary Ledger</h3>
                <p className="text-steel text-sm leading-relaxed">
                  Eliminate reactive quarterly audit prep. Augur replaces manual screenshot evidence collections with an automated, tamper-proof evidentiary ledger continuously compiled and verifiable at any arbitrary timestamp.
                </p>
              </div>

              <div className="p-6 rounded border border-surface-border bg-surface-card">
                <div className="w-10 h-10 rounded border border-surface-border bg-surface flex items-center justify-center text-emerald-glow mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="10 8 16 12 10 16 10 8" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">High Performance .NET 10 Enclave</h3>
                <p className="text-steel text-sm leading-relaxed">
                  Engineered with C# .NET 10, Entity Framework Core, and Blazor Server for low-latency streaming compliance updates across thousands of repositories.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: INTERACTIVE COMPLIANCE SIMULATOR */}
        {(activeTab === "simulator" || activeTab === "overview") && (
          <div id="augur-demo-section" className="mt-12 p-8 rounded border border-surface-border bg-surface-card shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
              <div>
                <span className="text-xs font-mono text-cobalt-light uppercase tracking-widest">Interactive Tool</span>
                <h3 className="text-2xl font-semibold text-white">Augur Auto-Mapper Simulator</h3>
                <p className="text-steel text-sm mt-1">Select a sample security finding below to test Augur's control mapping engine in real time.</p>
              </div>
              <button
                onClick={handleSimulate}
                disabled={isSimulating}
                className="btn btn-primary text-xs py-2.5 px-5 self-start md:self-auto"
              >
                {isSimulating ? "Re-Evaluating..." : "Run Augur Inference"}
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Finding Selection */}
              <div className="lg:col-span-5 space-y-3">
                <label className="block text-xs font-mono font-semibold text-steel uppercase tracking-wider mb-2">
                  1. Select Security Finding Input
                </label>
                {sampleFindings.map((finding) => (
                  <div
                    key={finding.id}
                    onClick={() => {
                      setSelectedFinding(finding.id);
                      handleSimulate();
                    }}
                    className={`cursor-pointer p-4 rounded border transition-all ${selectedFinding === finding.id ? "border-cobalt-light bg-surface-border-accent" : "border-surface-border bg-surface hover:border-surface-border-strong"}`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-mono text-cobalt-light font-semibold">{finding.id}</span>
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${finding.severity === "CRITICAL" ? "bg-red-500/20 text-red-400 border border-red-500/30" : "bg-amber-500/20 text-amber-400 border border-amber-500/30"}`}>
                        {finding.severity}
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-white mb-1">{finding.title}</div>
                    <div className="text-xs text-dim line-clamp-2">{finding.description}</div>
                  </div>
                ))}

                <div className="pt-2">
                  <label className="block text-xs font-mono text-dim mb-1">Or paste custom log snippet:</label>
                  <input
                    type="text"
                    value={customFinding}
                    onChange={(e) => setCustomFinding(e.target.value)}
                    placeholder="e.g., ElasticSearch cluster unauthenticated port 9200 exposed..."
                    className="w-full text-xs p-3 rounded bg-black border border-surface-border text-white focus:outline-none focus:border-cobalt-light"
                  />
                </div>
              </div>

              {/* Mapped Output */}
              <div className="lg:col-span-7 bg-black rounded border border-surface-border p-6 flex flex-col justify-between font-mono text-xs">
                <div>
                  <div className="flex items-center justify-between border-b border-surface-border pb-3 mb-4">
                    <span className="text-dim flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cobalt-light animate-pulse" />
                      AUGUR_ENGINE_OUTPUT // {selectedFinding}
                    </span>
                    <span className="text-cobalt-light font-semibold">CONFIDENCE: 99.4%</span>
                  </div>

                  {isSimulating ? (
                    <div className="py-12 text-center text-dim animate-pulse">
                      Processing findings through C# .NET 10 Blazor pipeline...
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div>
                        <div className="text-dim uppercase text-[10px] mb-1">Primary SOC 2 Control Mapping:</div>
                        <div className="text-emerald-glow font-semibold text-sm bg-emerald-950/30 p-2.5 rounded border border-emerald-500/20">
                          {mappedData.soc2}
                        </div>
                      </div>

                      <div>
                        <div className="text-dim uppercase text-[10px] mb-1">ISO 27001:2022 Mapping:</div>
                        <div className="text-cobalt-light font-semibold text-sm bg-surface-border-accent p-2.5 rounded border border-surface-border-accent">
                          {mappedData.iso}
                        </div>
                      </div>

                      <div>
                        <div className="text-dim uppercase text-[10px] mb-1">Suggested Policy Enforcement:</div>
                        <div className="text-amber font-semibold text-sm bg-amber-950/30 p-2.5 rounded border border-amber-500/20">
                          {mappedData.policy}
                        </div>
                      </div>

                      <div>
                        <div className="text-dim uppercase text-[10px] mb-1">Audit Trail Rationale:</div>
                        <div className="text-steel text-xs bg-surface p-3 rounded leading-relaxed border border-surface-border">
                          {mappedData.reasoning}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-surface-border flex items-center justify-between text-[11px] text-dim mt-6">
                  <span>OpenAPI 3.1.1 Export Ready</span>
                  <span className="text-steel">Response time: 14ms</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: ARCHITECTURE */}
        {activeTab === "architecture" && (
          <div className="mt-12 space-y-8">
            <h3 className="text-2xl font-semibold text-white">Augur Technical Architecture</h3>
            
            {/* Architecture Pipeline */}
            <div className="border border-surface-border bg-surface-card p-8">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 relative">
                {/* Step 1 */}
                <div className="border border-surface-border bg-obsidian p-6 relative flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs font-mono text-dim">
                      <span>NODE 01</span>
                      <span className="text-cobalt-light">INGESTION</span>
                    </div>
                    <div className="w-8 h-8 border border-surface-border flex items-center justify-center text-steel">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
                        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                        <line x1="9" y1="9" x2="9.01" y2="9" />
                        <line x1="15" y1="9" x2="15.01" y2="9" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-white mb-1">State & Telemetry Ingestion</h4>
                      <p className="text-xs text-steel leading-relaxed font-body">
                        Continuous capture of Git commits, CI/CD pipeline states, runtime container metrics, IAM role mutations, and cloud configuration deltas.
                      </p>
                    </div>
                  </div>
                  <div className="pt-6 mt-6 border-t border-surface-border font-mono text-[11px] text-dim space-y-1">
                    <div className="flex justify-between"><span>Throughput:</span><span className="text-white">10k+ ev/sec</span></div>
                    <div className="flex justify-between"><span>Integration:</span><span className="text-white">OpenAPI 3.1 & eBPF</span></div>
                  </div>
                </div>
                {/* Step 2 */}
                <div className="border border-surface-border bg-obsidian p-6 relative flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs font-mono text-dim">
                      <span>NODE 02</span>
                      <span className="text-cobalt-light">SYNTHESIS</span>
                    </div>
                    <div className="w-8 h-8 border border-surface-border flex items-center justify-center text-cobalt-light">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="17 1 21 5 17 9" />
                        <path d="M3 11V9a4 4 0 0 1 4-4h14" />
                        <path d="M7 23a10 10 0 0 1-7-7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-white mb-1">Control Reconciliation</h4>
                      <p className="text-xs text-steel leading-relaxed font-body">
                        Deterministic policy evaluation maps operational artifacts directly to SOC 2, ISO 27001, and FedRAMP control mandates without heuristic guesswork.
                      </p>
                    </div>
                  </div>
                  <div className="pt-6 mt-6 border-t border-surface-border font-mono text-[11px] text-dim space-y-1">
                    <div className="flex justify-between"><span>Resolution:</span><span className="text-white">Exact AST / Policy Map</span></div>
                    <div className="flex justify-between"><span>Latency:</span><span className="text-white">{"<"} 1.8ms per rule</span></div>
                  </div>
                </div>
                {/* Step 3 */}
                <div className="border border-surface-border bg-obsidian p-6 relative flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs font-mono text-dim">
                      <span>NODE 03</span>
                      <span className="text-steel">ANCHORING</span>
                    </div>
                    <div className="w-8 h-8 border border-surface-border flex items-center justify-center text-steel">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-white mb-1">Cryptographic Ledger</h4>
                      <p className="text-xs text-steel leading-relaxed font-body">
                        Compiles artifacts into an immutable evidentiary ledger sealed with SHA-256 validation trees, creating non-repudiable proof chains.
                      </p>
                    </div>
                  </div>
                  <div className="pt-6 mt-6 border-t border-surface-border font-mono text-[11px] text-dim space-y-1">
                    <div className="flex justify-between"><span>Vault Seal:</span><span className="text-white">Merkle Root Anchor</span></div>
                    <div className="flex justify-between"><span>Tamper State:</span><span className="text-white">Provably Immutable</span></div>
                  </div>
                </div>
                {/* Step 4 */}
                <div className="border border-surface-border bg-obsidian p-6 relative flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs font-mono text-dim">
                      <span>NODE 04</span>
                      <span className="text-cobalt-light">ATTESTATION</span>
                    </div>
                    <div className="w-8 h-8 border border-surface-border flex items-center justify-center text-cobalt-light">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-white mb-1">Continuous Attestation</h4>
                      <p className="text-xs text-steel leading-relaxed font-body">
                        Accredited third-party auditors and internal compliance officers inspect live cryptographic proof vectors, terminating point-in-time sample reviews.
                      </p>
                    </div>
                  </div>
                  <div className="pt-6 mt-6 border-t border-surface-border font-mono text-[11px] text-dim space-y-1">
                    <div className="flex justify-between"><span>Auditor Portal:</span><span className="text-white">Zero-Trust Read-Only</span></div>
                    <div className="flex justify-between"><span>Audit Cycle:</span><span className="text-white">Continuous 365 Days</span></div>
                  </div>
                </div>
              </div>
              
              {/* Live Pipeline Telemetry Status Bar */}
              <div className="mt-8 pt-6 border-t border-surface-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-dim">
                <div className="flex items-center gap-4">
                  <span className="text-steel">ARCHITECTURE STANDARD: AIR-GAPPED OR HYBRID SOVEREIGN CLOUD</span>
                  <span className="hidden md:inline text-surface-border">|</span>
                  <span className="hidden md:inline text-dim">FEDRAMP HIGH READY</span>
                </div>
                <div className="text-dim">
                  DATA RESIDENCY: LOCAL ENCLAVE ENFORCED
                </div>
              </div>
            </div>

            {/* Key Capabilities */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-surface-border bg-surface-card p-8 flex flex-col justify-between hover:border-surface-border-strong transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs text-dim">CAPABILITY // 01</span>
                    <div className="w-7 h-7 border border-surface-border flex items-center justify-center text-cobalt-light">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Deterministic Control Mapping</h3>
                  <p className="text-sm text-steel leading-relaxed font-body mb-6">
                    Dynamic, bidirectional compilation between code diffs, container lifecycles, and discrete regulatory controls. Every pull request and Terraform change is automatically indexed directly against applicable SOC 2 and ISO criteria.
                  </p>
                </div>
                <div className="pt-4 border-t border-surface-border font-mono text-xs text-dim flex items-center justify-between">
                  <span>Target Accuracy</span>
                  <span className="text-white">100% Deterministic AST Mapping</span>
                </div>
              </div>

              <div className="border border-surface-border bg-surface-card p-8 flex flex-col justify-between hover:border-surface-border-strong transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs text-dim">CAPABILITY // 02</span>
                    <div className="w-7 h-7 border border-surface-border flex items-center justify-center text-cobalt-light">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Continuous Evidentiary Ledger</h3>
                  <p className="text-sm text-steel leading-relaxed font-body mb-6">
                    Eliminate reactive quarterly audit prep. Augur replaces manual screenshot evidence collections with an automated, tamper-proof evidentiary ledger continuously compiled and verifiable at any arbitrary timestamp.
                  </p>
                </div>
                <div className="pt-4 border-t border-surface-border font-mono text-xs text-dim flex items-center justify-between">
                  <span>Ledger Integrity</span>
                  <span className="text-white">Cryptographically Signed Artifacts</span>
                </div>
              </div>

              <div className="border border-surface-border bg-surface-card p-8 flex flex-col justify-between hover:border-surface-border-strong transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs text-dim">CAPABILITY // 03</span>
                    <div className="w-7 h-7 border border-surface-border flex items-center justify-center text-cobalt-light">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="2" y1="12" x2="22" y2="12" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Cross-Silo Policy Synthesis</h3>
                  <p className="text-sm text-steel leading-relaxed font-body mb-6">
                    Unify conflicting policy sets across fragmented multi-cloud deployments, self-hosted Kubernetes clusters, and sovereign on-premise hardware into a unified, consolidated attestation model with zero friction.
                  </p>
                </div>
                <div className="pt-4 border-t border-surface-border font-mono text-xs text-dim flex items-center justify-between">
                  <span>Scope Resolution</span>
                  <span className="text-white">Multi-Cloud / Bare Metal Enclaves</span>
                </div>
              </div>

              <div className="border border-surface-border bg-surface-card p-8 flex flex-col justify-between hover:border-surface-border-strong transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs text-dim">CAPABILITY // 04</span>
                    <div className="w-7 h-7 border border-surface-border flex items-center justify-center text-cobalt-light">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <path d="M9 12l2 2 4-4" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Cryptographic Assurance Chain</h3>
                  <p className="text-sm text-steel leading-relaxed font-body mb-6">
                    Verifiable compliance proofs are compiled using SHA-256 tree validation and zero-knowledge evidence containers, ensuring auditors receive definitive proof without exposing raw IP, code repositories, or proprietary model weights.
                  </p>
                </div>
                <div className="pt-4 border-t border-surface-border font-mono text-xs text-dim flex items-center justify-between">
                  <span>Verification Model</span>
                  <span className="text-white">Zero Raw Code Exposure Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* INSTITUTIONAL ENGAGEMENT */}
        <section className="mt-28" id="assessment">
          <div className="border border-surface-border bg-surface-card p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-5 space-y-6">
                <div className="text-xs font-mono text-cobalt-light tracking-widest uppercase mb-1.5">[05] Engagement</div>
                <h2 className="text-3xl font-semibold text-white leading-tight">
                  Request Institutional Assessment
                </h2>
                <p className="text-sm text-steel leading-relaxed font-body">
                  Deploy Augur within sovereign infrastructure in under 48 hours. Our engineering directors engage directly with your Chief Information Security Officer and governance leads to model continuous control attestation across your infrastructure surface.
                </p>
                <div className="pt-4 border-t border-surface-border space-y-3 font-mono text-xs text-steel">
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-cobalt-light" />
                    <span>Available on-premise, AWS GovCloud, or sovereign VPC</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-cobalt-light" />
                    <span>Includes baseline gap analysis against SOC 2 & ISO 27001</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-cobalt-light" />
                    <span>Direct access to core systems engineering personnel</span>
                  </div>
                </div>
                <div className="pt-6" id="briefing">
                  <div className="text-xs font-mono text-dim mb-2">GOVERNANCE RESEARCH & SPECIFICATIONS</div>
                  <Link className="inline-flex items-center gap-2 text-xs font-mono text-steel hover:text-white underline underline-offset-4" href="#whitepaper">
                    <span className="material-symbols-outlined text-sm">description</span>
                    Download Governance Briefing (PDF // 28 Pages) →
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-7 bg-obsidian border border-surface-border p-6 sm:p-8">
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Institutional Assessment request received. A Senior Systems Engineer will review your requirements.'); }}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-xs text-dim mb-1.5">Official Name</label>
                      <input className="w-full bg-surface border border-surface-border px-3.5 py-2.5 text-white font-body text-sm focus:border-cobalt-light focus:ring-0 outline-none transition" placeholder="Dr. Elena Vance" required type="text" />
                    </div>
                    <div>
                      <label className="block font-mono text-xs text-dim mb-1.5">Institutional Email</label>
                      <input className="w-full bg-surface border border-surface-border px-3.5 py-2.5 text-white font-body text-sm focus:border-cobalt-light focus:ring-0 outline-none transition" placeholder="vance@institution.gov" required type="email" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-xs text-dim mb-1.5">Organization / Enterprise</label>
                      <input className="w-full bg-surface border border-surface-border px-3.5 py-2.5 text-white font-body text-sm focus:border-cobalt-light focus:ring-0 outline-none transition" placeholder="Autonomous Defense Systems" required type="text" />
                    </div>
                    <div>
                      <label className="block font-mono text-xs text-dim mb-1.5">Infrastructure Perimeter</label>
                      <select className="w-full bg-surface border border-surface-border px-3.5 py-2.5 text-white font-body text-sm focus:border-cobalt-light focus:ring-0 outline-none transition">
                        <option>AWS GovCloud / Commercial</option>
                        <option>Air-Gapped On-Premise Enclave</option>
                        <option>Azure Government / Sovereign Cloud</option>
                        <option>Hybrid Multi-Cloud Sovereign Mesh</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-dim mb-1.5">Target Compliance Mandate & Assessment Scope</label>
                    <textarea className="w-full bg-surface border border-surface-border px-3.5 py-2.5 text-white font-body text-sm focus:border-cobalt-light focus:ring-0 outline-none transition" placeholder="Specify relevant frameworks (SOC 2 Type II, ISO 27001, FedRAMP High, EU AI Act) and active audit horizon..." rows={3} />
                  </div>
                  <div className="pt-2">
                    <button className="w-full py-3.5 btn-black text-xs font-medium tracking-wider uppercase" type="submit">
                      Submit Institutional Assessment Request →
                    </button>
                    <p className="text-center font-mono text-[11px] text-dim mt-3">
                      Subject to mutual non-disclosure. Zero third-party telemetry transmitted.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}