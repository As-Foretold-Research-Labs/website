import React from "react";
import Link from "next/link";
import Footer from "./components/Footer";

const researchAreas = [
  {
    title: "Digital Twin",
    description:
      "Creating high-fidelity virtual representations of physical systems to predict behavior and optimize workflows.",
  },
  {
    title: "Robotics Simulation",
    description:
      "Developing robust environments for training autonomous agent behavior in complex, dynamic spaces.",
  },
  {
    title: "Open Source Intelligence Activities",
    description:
      "Harnessing open-source data to uncover patterns, trends, and insights in an increasingly interconnected world.",
  },
  {
    title: "Cybersecurity",
    description:
      "Analyzing threat vectors and observing the evolving landscape of digital defense and adversarial tactics.",
  },
  {
    title: "Artificial Intelligence Research",
    description:
      "Exploring the underlying mathematical and philosophical frameworks of synthetic intelligence.",
    isAI: true,
  },
];

export default function Home() {
  return (
    <>
      {/* Ambient */}
      <div className="ambient-bg" aria-hidden="true" />
      <div className="grid-overlay" aria-hidden="true" />

      <main className="min-h-screen w-full flex flex-col items-center relative z-10">
        {/* Hero */}
        <section className="w-full pt-28 md:pt-40 pb-20 md:pb-28">
          <div className="mx-auto max-w-[720px] px-6 md:px-12 lg:px-16 text-center">
            <h1 className="text-display mb-5 md:mb-6 animate-fade-up">
              As Foretold Labs
            </h1>
            <p className="text-tagline text-white/80 mb-8 md:mb-10 animate-fade-up delay-1">
              The Future is Being Written
            </p>
            <p className="text-body text-white/55 leading-relaxed max-w-[540px] mx-auto animate-fade-up delay-2">
              We build intelligent systems at the intersection of simulation, automation,
              and human-computer interaction — from governance automation to clinical training.
            </p>
          </div>
        </section>

        {/* Products / Work */}
        <section id="work" className="w-full pb-24 md:pb-32">
          <div className="mx-auto max-w-[720px] px-6 md:px-12 lg:px-16">
            <div className="mb-12 md:mb-16 text-center animate-fade-up">
              <span className="text-section text-white/40 mb-4 tracking-wider block">What We Build</span>
              <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold text-white/90">
                Products in development
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 animate-fade-up delay-1">
              {[
                {
                  title: "Augur",
                  subtitle: "Governance Automation Platform",
                  href: "/products/augur",
                  description:
                    "An AI-assisted compliance automation platform tracking security controls and evidence for SOC 2 and ISO 27001.",
                },
                {
                  title: "DokSim",
                  subtitle: "Patient Communication Simulator",
                  href: "/products/doksim",
                  description:
                    "A clinical communication training simulator built on LangGraph and LangChain — trains empathy and red-line handling safely.",
                },
              ].map((product) => (
                <Link
                  key={product.href}
                  href={product.href}
                  className="group block p-6 md:p-8 rounded-xl border border-white/[0.06] bg-white/[0.02] transition-all duration-300 hover:border-white/15 hover:bg-white/[0.04]"
                >
                  <p className="text-section text-white/50 mb-3 tracking-wider">
                    {product.subtitle}
                  </p>
                  <h3 className="text-2xl md:text-[1.75rem] font-semibold text-white mb-3 tracking-tight">
                    {product.title}
                  </h3>
                  <p className="text-body text-white/50 leading-relaxed mb-6">
                    {product.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[13px] font-medium text-white/70 group-hover:text-white transition-colors duration-200">
                    View product details
                    <span className="block transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Research */}
        <section className="w-full pb-24 md:pb-32">
          <div className="mx-auto max-w-[720px] px-6 md:px-12 lg:px-16">
            <div className="mb-12 md:mb-16 text-center animate-fade-up">
              <span className="text-section text-white/40 mb-4 tracking-wider block">Research</span>
              <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold text-white/90">
                Areas of exploration
              </h2>
            </div>

            <div className="space-y-0">
              {researchAreas.map((area, index) => (
                <React.Fragment key={index}>
                  <div className="hairline w-full my-8" />
                  <div className="research-item py-6">
                    <h3 className="text-section text-white mb-3 md:mb-4 tracking-wider uppercase">
                      {area.title}
                    </h3>
                    <p className="text-desc text-white/45 leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </React.Fragment>
              ))}
              <div className="hairline w-full my-8" />
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
