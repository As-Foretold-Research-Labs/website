"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(true);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setProductsOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setProductsOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-surface-border bg-obsidian/90 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 lg:px-10 h-16">
        {/* Brand Mark & System Tier */}
        <div className="flex items-center gap-4">
          <Link className="flex items-center gap-3 group" href="/">
            <div className="w-4 h-4 border border-white flex items-center justify-center transition-transform group-hover:rotate-45 duration-300">
              <div className="w-1.5 h-1.5 bg-white" />
            </div>
            <span className="text-xs md:text-sm font-semibold tracking-tight uppercase text-white font-display hidden sm:inline">
              AS FORETOLD LABS
            </span>
            <span className="hidden lg:inline-block text-[10px] tracking-widest text-steel uppercase font-mono pl-3 border-l border-surface-border/60">
              / SOVEREIGN INTELLIGENCE
            </span>
          </Link>
        </div>

        {/* Primary Navigation Links */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/#platforms"
            className="text-steel hover:text-white transition-colors text-xs font-mono tracking-widest uppercase"
          >
            Platforms
          </Link>
          <Link
            href="/#intelligence"
            className="text-steel hover:text-white transition-colors text-xs font-mono tracking-widest uppercase"
          >
            Intelligence
          </Link>
          <Link
            href="/#capabilities"
            className="text-steel hover:text-white transition-colors text-xs font-mono tracking-widest uppercase"
          >
            Doctrine
          </Link>
        </div>

        {/* Right Side Telemetry Indicator & Action CTA */}
        <div className="flex items-center gap-4">
          {/* System / Security status pill */}
          <div className="hidden sm:inline-flex items-center gap-2 font-mono text-[10px] tracking-wider text-steel border border-surface-border bg-surface px-2.5 py-1">
            <span className="w-1.5 h-1.5 bg-emerald-400" />
            <span>SYS_STATUS: AIR-GAPPED // OPERATIONAL</span>
          </div>
          {/* Primary button CTA */}
          <Link
                      className="btn-black text-xs font-mono tracking-widest uppercase px-4 py-2"
                      href="#briefing"
                    >
                      REQUEST BRIEFING
                    </Link>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className="p-2 rounded text-steel hover:bg-surface hover:text-white md:hidden"
          >
            {mobileOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-surface-border px-6 py-6 bg-obsidian/95 backdrop-blur-2xl md:hidden">
          <div className="flex flex-col gap-2">
            {/* Products Collapsible Group */}
            <div>
              <div className="flex items-center justify-between w-full py-2 px-3 text-sm font-medium text-zinc-200">
                <Link
                  href="/#platforms"
                  onClick={() => setMobileOpen(false)}
                  className="hover:text-cobalt-light transition-colors"
                >
                  Platforms
                </Link>
                <button
                  onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                  className="text-steel p-1"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`transition-transform duration-200 ${mobileProductsOpen ? "rotate-180" : ""}`}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
              </div>

              {mobileProductsOpen && (
                <div className="ml-3 pl-3 border-l border-surface-border flex flex-col gap-2 my-1">
                  <Link
                    href="/products/augur"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between rounded px-3 py-2 text-xs font-medium text-steel hover:bg-surface/60 hover:text-white transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cobalt" />
                      Augur
                    </span>
                    <span className="font-mono text-[10px] text-dim">SOC 2 / ISO</span>
                  </Link>

                  <Link
                    href="/products/doksim"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between rounded px-3 py-2 text-xs font-medium text-steel hover:bg-surface/60 hover:text-emerald-400 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      DokSim
                    </span>
                    <span className="font-mono text-[10px] text-dim">CLINICAL</span>
                  </Link>

                  <Link
                    href="/products/citytwin"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between rounded px-3 py-2 text-xs font-medium text-steel hover:bg-surface/60 hover:text-cobalt-light transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cobalt-light" />
                      CityTwin
                    </span>
                    <span className="font-mono text-[10px] text-dim">SPATIAL</span>
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/#intelligence"
              onClick={() => setMobileOpen(false)}
              className="rounded px-3 py-2 text-sm font-medium text-steel hover:bg-surface/60 hover:text-white transition-colors"
            >
              Intelligence
            </Link>

            <Link
              href="/#capabilities"
              onClick={() => setMobileOpen(false)}
              className="rounded px-3 py-2 text-sm font-medium text-steel hover:bg-surface/60 hover:text-white transition-colors"
            >
              Doctrine
            </Link>

            <Link
              href="/briefing"
              onClick={() => setMobileOpen(false)}
              className="rounded px-3 py-2 text-sm font-medium text-steel hover:bg-surface/60 hover:text-white transition-colors"
            >
              Briefing
            </Link>

            <div className="pt-4 border-t border-surface-border">
              <Link
                href="/briefing"
                onClick={() => setMobileOpen(false)}
                className="btn btn-primary w-full text-center text-xs py-2.5"
              >
                Request Briefing
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}