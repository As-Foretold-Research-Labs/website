import React from "react";
import Link from "next/link";
import Footer from "./components/Footer";

const researchAreas = [
  {
    title: "Digital Twin",
    description: "Creating high-fidelity virtual representations of physical systems to predict behavior and optimize workflows.",
  },
  {
    title: "Robotics Simulation",
    description: "Developing robust environments for training autonomous agent behavior in complex, dynamic spaces.",
  },
  {
    title: "Open Source Intelligence Activities",
    description: "Harnessing open-source data to uncover patterns, trends, and insights in an increasingly interconnected world.",
  },
  {
    title: "Cybersecurity",
    description: "Analyzing threat vectors and observing the evolving landscape of digital defense and adversarial tactics.",
  },
  {
    title: "AI",
    description: "in theoretical AI, exploring the underlying mathematical and philosophical frameworks of synthetic intelligence.",
    isAI: true,
  },
];

export default function Home() {
  return (
    <>
      {/* Ambient Background */}
      <div className="ambient-bg" aria-hidden="true" />
      <div className="grid-overlay" aria-hidden="true" />
      
      <main className="min-h-screen w-full flex flex-col items-center justify-center py-16 md:py-24 relative z-10">
        {/* Constrained container — THIS controls the content width */}
        <div className="w-full max-w-[720px] px-6 md:px-12 lg:px-16">
          
          {/* Logo */}
          <div className="mb-10 md:mb-14 animate-fade-in animate-logo-float flex justify-center" style={{ opacity: 1 }}>
            <svg
              width="128"
              height="128"
              viewBox="0 0 104 104"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="drop-shadow-[0_0_40px_rgba(255,255,255,0.05)]"
              style={{ color: 'white' }}
            >
              <g stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
                <path d="M26 60 L52 36 L78 60 L52 84 Z" />
                <path d="M26 44 L52 20 L78 44" />
                <path d="M26 44 L52 68 L78 44" />
                <path d="M26 60 L26 44" />
                <path d="M52 36 L52 20" />
                <path d="M52 84 L52 68" />
                <path d="M78 60 L78 44" />
                <circle cx="52" cy="52" r="15" />
                <circle cx="52" cy="52" r="6.5" />
              </g>
            </svg>
          </div>

          {/* Hero Content */}
          <div className="text-center mb-16 md:mb-20">
            <h1 className="text-display mb-5 md:mb-6 animate-fade-up">
              As Foretold Labs
            </h1>
            <p className="text-tagline text-white/80 mb-8 md:mb-10 animate-fade-up delay-1">
              The Future is Being Written
            </p>
            <p className="text-body text-white/60 leading-relaxed animate-fade-up delay-2">
              We explore the intersection of high-fidelity simulation, intelligence architecture, and security. Our research bridges the gap between the theoretical and the tangible.
            </p>
          </div>

          {/* Research Areas */}
          <div className="space-y-0 animate-fade-up delay-3">
            {researchAreas.map((area, index) => (
              <React.Fragment key={index}>
                {/* Hairline separator */}
                <div className="hairline w-full my-8" />
                
                <div className={`research-item py-6`}>
                  {area.isAI ? (
                    <div>
                      <h2 className="text-section text-white mb-3 md:mb-4 tracking-wider animate-fade-up" style={{ animationDelay: `${400 + index * 100}ms` }}>
                        Artificial Intelligence Research
                      </h2>
                      <p className="text-desc text-white/50 leading-relaxed animate-fade-up" style={{ animationDelay: `${500 + index * 100}ms` }}>
                        {area.description}
                      </p>
                    </div>
                  ) : (
                    <div>
                      <h2 className="text-section text-white mb-3 md:mb-4 tracking-wider animate-fade-up" style={{ animationDelay: `${400 + index * 100}ms` }}>
                        {area.title}
                      </h2>
                      <p className="text-desc text-white/50 leading-relaxed animate-fade-up" style={{ animationDelay: `${500 + index * 100}ms` }}>
                        {area.description}
                      </p>
                    </div>
                  )}
                </div>
              </React.Fragment>
            ))}
            
            {/* Final hairline */}
            <div className="hairline w-full my-8" />
          </div>

          {/* Footer */}
          <Footer />

        </div>
      </main>
    </>
  );
}