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
    reasoning: "Unencrypted storage exposes stored customer assets. Policy mandates AES-256 or KMS KMS-based envelope encryption on all static datastores.",
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
    <div className="min-h-screen bg-[#0c0d10] text-zinc-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* BREADCRUMB */}
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-8">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href="/#products" className="hover:text-white transition-colors">Products</Link>
          <span>/</span>
          <span className="text-[#ff7722] font-semibold">Augur</span>
        </div>

        {/* HERO HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#181a20] border border-zinc-800 text-[#ff7722] text-xs font-mono uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-[#ff6000] animate-pulse" />
              Governance & Compliance Automation
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
              Augur
            </h1>

            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              AI-powered compliance engine built on C# / .NET 10 and Blazor. Augur ingests cloud security findings, GitHub pull requests, and audit logs to map them directly to SOC 2 Type II and ISO 27001 control frameworks.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-3 py-1 rounded-md bg-zinc-900 text-[#ff7722] border border-zinc-800 text-xs font-mono">
                C# / .NET 10
              </span>
              <span className="px-3 py-1 rounded-md bg-zinc-900 text-zinc-300 border border-zinc-800 text-xs font-mono">
                Blazor Server
              </span>
              <span className="px-3 py-1 rounded-md bg-zinc-900 text-emerald-400 border border-zinc-800 text-xs font-mono">
                EF Core
              </span>
              <span className="px-3 py-1 rounded-md bg-zinc-900 text-amber-400 border border-zinc-800 text-xs font-mono">
                OpenAPI 3.1.1
              </span>
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
                href="/contact"
                className="btn btn-secondary text-sm py-3 px-6"
              >
                Request Enterprise Trial
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-xl border border-zinc-800 bg-[#14161b] p-2 shadow-xl overflow-hidden group">
              <div className="relative w-full h-72 md:h-80 rounded-lg overflow-hidden bg-black">
                <Image
                  src="/augur-demo.gif"
                  alt="Augur Compliance Automation Demo"
                  fill
                  className="object-cover object-top opacity-95 group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4 flex items-center justify-between text-xs text-zinc-400">
                <span className="flex items-center gap-1.5 font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Live Compliance Mapping
                </span>
                <span className="text-[#ff7722] font-mono font-semibold">Blazor WebUI</span>
              </div>
            </div>
          </div>
        </div>

        {/* TABS NAVIGATION */}
        <div className="flex border-b border-zinc-800 mb-12">
          <button
            onClick={() => setActiveTab("overview")}
            className={`py-3 px-6 font-semibold text-sm transition-colors border-b-2 -mb-px ${
              activeTab === "overview"
                ? "border-[#ff6000] text-[#ff7722]"
                : "border-transparent text-zinc-400 hover:text-zinc-200"
            }`}
          >
            System Capabilities
          </button>
          <button
            onClick={() => setActiveTab("simulator")}
            className={`py-3 px-6 font-semibold text-sm transition-colors border-b-2 -mb-px ${
              activeTab === "simulator"
                ? "border-[#ff6000] text-[#ff7722]"
                : "border-transparent text-zinc-400 hover:text-zinc-200"
            }`}
          >
            Interactive Auto-Mapper
          </button>
          <button
            onClick={() => setActiveTab("architecture")}
            className={`py-3 px-6 font-semibold text-sm transition-colors border-b-2 -mb-px ${
              activeTab === "architecture"
                ? "border-[#ff6000] text-[#ff7722]"
                : "border-transparent text-zinc-400 hover:text-zinc-200"
            }`}
          >
            Architecture & Specs
          </button>
        </div>

        {/* TAB 1: OVERVIEW */}
        {activeTab === "overview" && (
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-xl border border-zinc-800 bg-[#14161b]">
                <div className="w-10 h-10 rounded-lg bg-zinc-900 text-[#ff7722] border border-zinc-800 flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">SOC 2 & ISO 27001 Mapping</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Automatically correlates raw security advisories, PR approval traces, and access logs against trust services criteria (CC6.1, CC7.1, CC8.1) without manual spreadsheet mapping.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-zinc-800 bg-[#14161b]">
                <div className="w-10 h-10 rounded-lg bg-zinc-900 text-amber-400 border border-zinc-800 flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Audit-Ready Artifacts</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Generates machine-readable OpenAPI 3.1.1 compliant compliance reports and structured JSON evidence bundles for SOC 2 auditors.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-zinc-800 bg-[#14161b]">
                <div className="w-10 h-10 rounded-lg bg-zinc-900 text-emerald-400 border border-zinc-800 flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="10 8 16 12 10 16 10 8" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">High Performance .NET 10</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Engineered with C# .NET 10, Entity Framework Core, and Blazor Server for low-latency streaming compliance updates across thousands of repositories.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: INTERACTIVE COMPLIANCE SIMULATOR */}
        {(activeTab === "simulator" || activeTab === "overview") && (
          <div id="augur-demo-section" className="mt-12 p-8 rounded-2xl border border-zinc-800 bg-[#14161b] shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
              <div>
                <span className="text-xs font-mono text-[#ff7722] uppercase tracking-widest">Interactive Tool</span>
                <h3 className="text-2xl font-bold text-white">Augur Auto-Mapper Simulator</h3>
                <p className="text-zinc-400 text-sm mt-1">Select a sample security finding below to test Augur&apos;s control mapping engine in real time.</p>
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
                <label className="block text-xs font-mono font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                  1. Select Security Finding Input
                </label>
                {sampleFindings.map((finding) => (
                  <div
                    key={finding.id}
                    onClick={() => {
                      setSelectedFinding(finding.id);
                      handleSimulate();
                    }}
                    className={`cursor-pointer p-4 rounded-xl border transition-all ${
                      selectedFinding === finding.id
                        ? "border-[#ff6000] bg-[#ff6000]/10"
                        : "border-zinc-800 bg-[#181a20] hover:border-zinc-700"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-mono text-[#ff7722] font-semibold">{finding.id}</span>
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                        finding.severity === "CRITICAL" ? "bg-red-500/20 text-red-400 border border-red-500/30" : "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                      }`}>
                        {finding.severity}
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-white mb-1">{finding.title}</div>
                    <div className="text-xs text-zinc-400 line-clamp-2">{finding.description}</div>
                  </div>
                ))}

                <div className="pt-2">
                  <label className="block text-xs font-mono text-zinc-400 mb-1">Or paste custom log snippet:</label>
                  <input
                    type="text"
                    value={customFinding}
                    onChange={(e) => setCustomFinding(e.target.value)}
                    placeholder="e.g., ElasticSearch cluster unauthenticated port 9200 exposed..."
                    className="w-full text-xs p-3 rounded-lg bg-black border border-zinc-800 text-zinc-200 focus:outline-none focus:border-[#ff6000]"
                  />
                </div>
              </div>

              {/* Mapped Output */}
              <div className="lg:col-span-7 bg-black rounded-xl border border-zinc-800 p-6 flex flex-col justify-between font-mono text-xs">
                <div>
                  <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-4">
                    <span className="text-zinc-400 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#ff6000] animate-pulse" />
                      AUGUR_ENGINE_OUTPUT // {selectedFinding}
                    </span>
                    <span className="text-[#ff7722] font-semibold">CONFIDENCE: 99.4%</span>
                  </div>

                  {isSimulating ? (
                    <div className="py-12 text-center text-zinc-500 animate-pulse">
                      Processing findings through C# .NET 10 Blazor pipeline...
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div>
                        <div className="text-zinc-500 uppercase text-[10px] mb-1">Primary SOC 2 Control Mapping:</div>
                        <div className="text-emerald-300 font-semibold text-sm bg-emerald-950/30 p-2.5 rounded border border-emerald-500/20">
                          {mappedData.soc2}
                        </div>
                      </div>

                      <div>
                        <div className="text-zinc-500 uppercase text-[10px] mb-1">ISO 27001:2022 Mapping:</div>
                        <div className="text-[#ff7722] font-semibold text-sm bg-[#ff6000]/10 p-2.5 rounded border border-[#ff6000]/25">
                          {mappedData.iso}
                        </div>
                      </div>

                      <div>
                        <div className="text-zinc-500 uppercase text-[10px] mb-1">Suggested Policy Enforcement:</div>
                        <div className="text-amber-300 font-semibold text-sm bg-amber-950/30 p-2.5 rounded border border-amber-500/20">
                          {mappedData.policy}
                        </div>
                      </div>

                      <div>
                        <div className="text-zinc-500 uppercase text-[10px] mb-1">Audit Trail Rationale:</div>
                        <div className="text-zinc-300 text-xs bg-zinc-900 p-3 rounded leading-relaxed border border-zinc-800">
                          {mappedData.reasoning}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-[11px] text-zinc-500 mt-6">
                  <span>OpenAPI 3.1.1 Export Ready</span>
                  <span className="text-zinc-400">Response time: 14ms</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: ARCHITECTURE */}
        {activeTab === "architecture" && (
          <div className="mt-12 p-8 rounded-2xl border border-zinc-800 bg-[#14161b] space-y-6">
            <h3 className="text-2xl font-bold text-white">Augur Technical Architecture</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="p-5 rounded-xl bg-black border border-zinc-800 space-y-2">
                <h4 className="font-mono font-semibold text-[#ff7722]">Backend Core</h4>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  Powered by C# / .NET 10 with asynchronous pipeline execution, Entity Framework Core with PostgreSQL backing store, and OpenAPI 3.1.1 REST endpoints for enterprise SIEM integration.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-black border border-zinc-800 space-y-2">
                <h4 className="font-mono font-semibold text-amber-400">Blazor WebUI</h4>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  Real-time Server-Side Blazor components delivering instant state synchronization for compliance officer dashboards and continuous evidence logging.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
