"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/#work", label: "Work" },
    { href: "/#about", label: "About" },
    { href: "/products/augur", label: "Augur" },
    { href: "/products/doksim", label: "DokSim" },
    { href: "mailto:hello@asforetolabs.com", label: "Contact" },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 sm:px-6 lg:px-8 pt-3">
      <div
        className={`mx-auto max-w-7xl rounded-[22px] border border-[var(--line)] bg-[var(--bg-glass)] backdrop-blur-xl shadow-[0_18px_50px_rgba(0,0,0,0.28)] transition-all duration-300 ${
          scrolled ? "bg-[var(--bg-glass-strong)]" : ""
        }`}
      >
        <div className="flex items-center justify-between gap-4 px-4 py-3 md:px-5">
          <Link href="/" className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_20px_var(--accent)]" />
            <div className="flex flex-col leading-none">
              <span className="text-[11px] font-semibold tracking-[0.3em] text-white/85 uppercase">
                As Foretold Labs
              </span>
              <span className="mono-text text-[10px] tracking-[0.24em] text-white/40 uppercase">
                local research system
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="command-chip text-white/72 transition-colors hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-flex command-chip border-white/10 text-white/70">
              live / portfolio
            </span>
            <button
              className="lg:hidden inline-flex items-center justify-center rounded-full border border-[var(--line)] bg-white/[0.03] px-3 py-2 text-white/75 transition-colors hover:bg-white/[0.06] hover:text-white"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <div className="space-y-1.5">
                <span
                  className={`block h-[1.5px] w-5 bg-current transition-all duration-200 ${
                    open ? "rotate-45 translate-y-[4.5px]" : ""
                  }`}
                />
                <span
                  className={`block h-[1.5px] w-5 bg-current transition-all duration-200 ${
                    open ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-[1.5px] w-5 bg-current transition-all duration-200 ${
                    open ? "-rotate-45 -translate-y-[4.5px]" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden border-t border-[var(--line)] bg-[var(--bg-glass-strong)]">
            <div className="px-4 py-4 flex flex-col gap-3 sm:px-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="command-chip justify-between text-white/68 hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  <span>{link.label}</span>
                  <span className="text-white/35">↗</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
