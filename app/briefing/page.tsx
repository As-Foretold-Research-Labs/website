"use client";

import { useState } from "react";
import Link from "next/link";

export default function BriefingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    institution: "",
    vector: "",
    scope: "",
    nda: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Institutional Briefing request submitted. An engineering director from As Foretold Research Labs will respond through secure channels within 24 hours.');
    setFormData({ name: "", email: "", institution: "", vector: "", scope: "", nda: false });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  return (
    <div className="min-h-screen bg-obsidian text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* BREADCRUMB */}
        <div className="flex items-center gap-2 text-xs font-mono text-dim mb-12">
          <a href="/" className="hover:text-white transition-colors">Home</a>
          <span className="text-surface-border">/</span>
          <span className="text-cobalt-light font-semibold">Briefing</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Strategic Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <div className="font-mono text-xs text-cobalt-light tracking-widest uppercase mb-2">Institutional Engagement</div>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-6">
              Deploy Mission Architecture
            </h1>
            <p className="text-steel text-base leading-relaxed font-body mb-10">
              Consult with our systems architecture team regarding production deployments of Augur, DokSim, or CityTwin across sovereign cloud, hybrid enterprise, or air-gapped enclaves.
            </p>
            
            <div className="border border-surface-border bg-surface-card p-8 space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-widest text-white mb-4">Engagement Protocol</h3>
              <div className="space-y-3 font-mono text-xs text-steel">
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-cobalt-light" />
                  <span>Security Clearance & Institutional Scoping Review</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-cobalt-light" />
                  <span>High-Fidelity Synthetic Proof-of-Concept Validation</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-cobalt-light" />
                  <span>Isolated Sandbox Deployment on Sovereign GPU Nodes</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-cobalt-light" />
                  <span>Continuous Governance Integration via Augur Core</span>
                </div>
              </div>
            </div>

            <div className="p-6 border border-surface-border bg-surface-card">
              <h3 className="font-mono text-xs uppercase tracking-widest text-white mb-4">Platform Specifications Available</h3>
              <div className="space-y-3 font-mono text-xs text-steel">
                <Link className="inline-flex items-center gap-2 text-steel hover:text-white transition-colors" href="/products/augur">
                  <span className="material-symbols-outlined text-sm">description</span>
                  Augur Governance Architecture Dossier (PDF)
                </Link>
                <Link className="inline-flex items-center gap-2 text-steel hover:text-white transition-colors" href="/products/doksim">
                  <span className="material-symbols-outlined text-sm">description</span>
                  DokSim Clinical Validation Whitepaper (PDF)
                </Link>
                <Link className="inline-flex items-center gap-2 text-steel hover:text-white transition-colors" href="/products/citytwin">
                  <span className="material-symbols-outlined text-sm">description</span>
                  CityTwin Technical Specification (PDF)
                </Link>
              </div>
            </div>

            <div className="text-center pt-8 border-t border-surface-border">
              <p className="font-mono text-[11px] text-dim">
                Direct Research Office: <span className="text-cobalt-light">velasquez.marcvictor.l@asforetold.space</span>
              </p>
              <p className="font-mono text-[11px] text-dim mt-1">
                PGP Key: <code className="text-white">0x4F2A 9B7C E3D1 8A6F</code>
              </p>
            </div>
          </div>

          {/* Right: Institutional Intake Form */}
          <div className="lg:col-span-7">
            <div className="border border-surface-border bg-surface-card p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-mono text-xs text-dim mb-1.5 uppercase tracking-wider">Principal Contact / Title</label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-obsidian border border-surface-border text-white text-xs font-mono focus:border-cobalt-light focus:outline-none transition"
                      placeholder="Dr. Elena Vance, Director of Autonomy"
                      required
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-dim mb-1.5 uppercase tracking-wider">Institutional Email</label>
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-obsidian border border-surface-border text-white text-xs font-mono focus:border-cobalt-light focus:outline-none transition"
                      placeholder="e.vance@institution.gov"
                      required
                      type="email"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-mono text-xs text-dim mb-1.5 uppercase tracking-wider">Institution / Department</label>
                    <input
                      name="institution"
                      value={formData.institution}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-obsidian border border-surface-border text-white text-xs font-mono focus:border-cobalt-light focus:outline-none transition"
                      placeholder="Department of Defense / Defense Research"
                      required
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-dim mb-1.5 uppercase tracking-wider">Operational Vector</label>
                    <select
                      name="vector"
                      value={formData.vector}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-obsidian border border-surface-border text-white text-xs font-mono focus:border-cobalt-light focus:outline-none transition"
                      required
                    >
                      <option value="">Select operational vector</option>
                      <option value="defense-swarm">Autonomous Defense Swarm Simulation</option>
                      <option value="infrastructure-grid">Strategic Infrastructure & Municipal Grid</option>
                      <option value="logistics-fleet">Autonomous Logistics Network Fleet</option>
                      <option value="manufacturing-cobot">Critical Manufacturing & Cobot Safety</option>
                      <option value="marl">Multi-Agent Reinforcement Learning (MARL)</option>
                      <option value="clinical-validation">Clinical Validation & Medical Training</option>
                      <option value="compliance-automation">Continuous Compliance Automation</option>
                      <option value="other">Other Sovereign Deployment Focus</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block font-mono text-xs text-dim mb-1.5 uppercase tracking-wider">Mission Scope & Architecture Constraints</label>
                  <textarea
                    name="scope"
                    value={formData.scope}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-obsidian border border-surface-border text-white text-xs font-mono focus:border-cobalt-light focus:outline-none transition"
                    placeholder="Detail operational requirements: spatial scale, vehicle types (UAV/AMR), air-gap requirements, compliance frameworks, and simulation timelines..."
                    rows={4}
                    required
                  />
                </div>
                <div className="flex items-center space-x-2.5 text-xs font-mono text-dim">
                  <input
                    name="nda"
                    type="checkbox"
                    checked={formData.nda}
                    onChange={handleChange}
                    className="w-3.5 h-3.5 rounded bg-obsidian border-surface-border text-cobalt-light focus:ring-cobalt-light focus:ring-0"
                    id="nda"
                  />
                  <label htmlFor="nda" className="font-body text-[12px] text-steel">
                    Execute institutional Mutual Non-Disclosure Agreement (M-NDA) prior to technical briefing.
                  </label>
                </div>
                <div className="pt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <button className="btn-black px-6 py-3 text-xs font-mono font-semibold tracking-widest uppercase" type="submit">
                    <span>Submit Institutional Briefing Request</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                  <span className="font-mono text-[11px] text-dim">
                    Response SLA: {"<"} 24h via secure dispatch
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Compliance badges at bottom */}
        <div className="mt-16 pt-8 border-t border-surface-border/60 flex flex-wrap items-center justify-center gap-6 font-mono text-[11px] text-dim">
          <span>SOC 2 TYPE II VERIFIED</span>
          <span>•</span>
          <span>AIR-GAPPED COMPLIANT</span>
          <span>•</span>
          <span>FEDRAMP HIGH READY</span>
          <span>•</span>
          <span>ZERO-TELEMETRY ARCHITECTURE</span>
          <span>•</span>
          <span>DIRECT: velasquez.marcvictor.l@asforetold.space</span>
        </div>
      </div>
    </div>
  );
}