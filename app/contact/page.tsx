"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    inquiryType: "Augur Compliance Automation",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#0c0d10] text-zinc-100 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* BREADCRUMB */}
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-8">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#ff7722] font-semibold">Contact</span>
        </div>

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#181a20] border border-zinc-800 text-[#ff7722] text-xs font-mono uppercase tracking-wider mb-6">
            Get In Touch
          </div>

          <h1 className="text-4xl font-extrabold text-white mb-4">
            Connect with As Foretold Labs
          </h1>

          <p className="text-zinc-400 text-base leading-relaxed">
            Interested in deploying Augur for SOC 2 governance or licensing DokSim for medical simulation training? Send us a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Contact Details Info Card */}
          <div className="md:col-span-5 space-y-6">
            <div className="p-6 rounded-xl border border-zinc-800 bg-[#14161b] space-y-6">
              <div>
                <h3 className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider mb-2">Direct Email</h3>
                <a
                  href="mailto:velasquez.marcvictor.l@asforetold.space"
                  className="text-[#ff7722] hover:text-[#ff8833] font-semibold text-base transition-colors break-all"
                >
                  velasquez.marcvictor.l@asforetold.space
                </a>
              </div>

              <div>
                <h3 className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider mb-2">Research Focus</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Governance automation, agentic dialogue trees, clinical simulations, and digital twin systems.
                </p>
              </div>

              <div>
                <h3 className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider mb-2">Code Repositories</h3>
                <a
                  href="https://github.com/As-Foretold-Research-Labs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-zinc-300 hover:text-white underline transition-colors"
                >
                  github.com/As-Foretold-Research-Labs
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-zinc-800 bg-[#14161b]">
              <span className="text-xs font-mono text-[#ff7722] uppercase tracking-wider block mb-1">Response SLA</span>
              <p className="text-xs text-zinc-400">
                Our research team typically responds to institutional and pilot inquiries within 24 business hours.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-7 bg-[#14161b] p-8 rounded-2xl border border-zinc-800 shadow-xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mx-auto flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Message Transmitted</h3>
                <p className="text-zinc-400 text-sm max-w-sm mx-auto">
                  Thank you for reaching out to As Foretold Labs. Our engineering team has received your request and will follow up shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", company: "", inquiryType: "Augur Compliance Automation", message: "" });
                  }}
                  className="btn btn-secondary text-xs py-2 px-4 mt-4"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono font-semibold text-zinc-300 mb-1.5">
                    Your Full Name <span className="text-[#ff7722]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. Alex Mercer"
                    className="w-full text-sm p-3 rounded-lg bg-black border border-zinc-800 text-white focus:outline-none focus:border-[#ff6000]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-semibold text-zinc-300 mb-1.5">
                      Work Email <span className="text-[#ff7722]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@organization.com"
                      className="w-full text-sm p-3 rounded-lg bg-black border border-zinc-800 text-white focus:outline-none focus:border-[#ff6000]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-zinc-300 mb-1.5">
                      Organization / Company
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Organization Name"
                      className="w-full text-sm p-3 rounded-lg bg-black border border-zinc-800 text-white focus:outline-none focus:border-[#ff6000]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-zinc-300 mb-1.5">
                    Inquiry Topic
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full text-sm p-3 rounded-lg bg-black border border-zinc-800 text-zinc-200 focus:outline-none focus:border-[#ff6000]"
                  >
                    <option value="Augur Compliance Automation">Augur Compliance Automation (SOC 2 / ISO)</option>
                    <option value="DokSim Clinical Simulator">DokSim Clinical Training Simulator</option>
                    <option value="Research Collaboration">Research & Lab Partnership</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-zinc-300 mb-1.5">
                    Message / Project Details <span className="text-[#ff7722]">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your compliance or simulation requirements..."
                    className="w-full text-sm p-3 rounded-lg bg-black border border-zinc-800 text-white focus:outline-none focus:border-[#ff6000]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn btn-primary w-full text-sm py-3 px-6"
                >
                  {submitting ? "Sending Request..." : "Submit Inquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
