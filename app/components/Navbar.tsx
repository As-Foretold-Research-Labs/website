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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-800/80 bg-[#0c0d10]/90 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-3.5">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 rounded-lg bg-[#ff6000] flex items-center justify-center p-1.5 shadow-md transition-all duration-200 group-hover:bg-[#e05300]">
            <Image
              src="/as-foretold-logo-adaptive.svg"
              alt="As Foretold Labs logo"
              width={22}
              height={22}
              className="text-white invert"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="text-base font-bold text-white tracking-tight">
            As Foretold Labs
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 md:flex">
          {/* Products Dropdown Container */}
          <div 
            className="relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex items-center gap-1 py-2">
              <Link
                href="/#products"
                className="text-sm font-medium text-zinc-300 group-hover:text-[#ff6000] hover:text-[#ff6000] transition-colors flex items-center gap-1.5"
                onClick={() => setProductsOpen(false)}
              >
                Products
              </Link>
              <button
                type="button"
                onClick={() => setProductsOpen((prev) => !prev)}
                className="text-zinc-400 group-hover:text-[#ff6000] hover:text-[#ff6000] transition-colors focus:outline-none"
                aria-label="Toggle Products dropdown"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className={`transition-transform duration-200 group-hover:rotate-180 ${productsOpen ? "rotate-180 text-[#ff6000]" : ""}`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
            </div>

            {/* Dropdown Menu - always rendered in DOM, revealed on hover or click */}
            <div 
              className={`absolute top-full left-0 pt-1.5 w-72 z-50 transition-all duration-150 ${
                productsOpen 
                  ? "opacity-100 visible pointer-events-auto translate-y-0" 
                  : "opacity-0 invisible pointer-events-none -translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto group-hover:translate-y-0"
              }`}
            >
              <div className="rounded-xl border border-zinc-800 bg-[#14161b] p-2.5 shadow-2xl backdrop-blur-2xl">
                <div className="px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-semibold">
                  Lab Systems
                </div>

                <Link
                  href="/products/augur"
                  onClick={() => setProductsOpen(false)}
                  className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-zinc-800/70 transition-colors group/item"
                >
                  <div className="w-8 h-8 rounded-md bg-[#ff6000]/10 border border-[#ff6000]/20 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:border-[#ff6000]/40">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ff7722" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 font-semibold text-sm text-zinc-100 group-hover/item:text-[#ff6000]">
                      Augur
                      <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[#ff6000]/10 text-[#ff7722] border border-[#ff6000]/20">.NET 10</span>
                    </div>
                    <span className="text-xs text-zinc-400 mt-0.5 block leading-snug">
                      SOC 2 & ISO compliance automation
                    </span>
                  </div>
                </Link>

                <Link
                  href="/products/doksim"
                  onClick={() => setProductsOpen(false)}
                  className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-zinc-800/70 transition-colors group/item mt-1"
                >
                  <div className="w-8 h-8 rounded-md bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:border-emerald-500/40">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 font-semibold text-sm text-zinc-100 group-hover/item:text-[#ff6000]">
                      DokSim
                      <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">LangGraph</span>
                    </div>
                    <span className="text-xs text-zinc-400 mt-0.5 block leading-snug">
                      Clinical patient communication simulator
                    </span>
                  </div>
                </Link>

                <div className="mt-2 pt-2 border-t border-zinc-800/80 px-2">
                  <Link
                    href="/#products"
                    onClick={() => setProductsOpen(false)}
                    className="flex items-center justify-between text-xs font-mono font-medium text-zinc-400 hover:text-[#ff6000] py-1 transition-colors"
                  >
                    View All Products
                    <span>&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/#research"
            className="text-sm font-medium text-zinc-300 hover:text-[#ff6000] transition-colors"
          >
            Research
          </Link>

          <Link
            href="/blog"
            className="text-sm font-medium text-zinc-300 hover:text-[#ff6000] transition-colors"
          >
            Blog
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium text-zinc-300 hover:text-[#ff6000] transition-colors"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="text-sm font-medium text-zinc-300 hover:text-[#ff6000] transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/products/augur"
            className="btn btn-primary text-xs py-2 px-4 shadow-sm"
          >
            Explore Augur
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          className="p-2 rounded-lg text-zinc-300 hover:bg-zinc-800 md:hidden"
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
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-zinc-800 px-6 py-6 bg-[#0c0d10]/95 backdrop-blur-2xl md:hidden">
          <div className="flex flex-col gap-2">
            {/* Products Collapsible Group */}
            <div>
              <div className="flex items-center justify-between w-full py-2 px-3 text-sm font-medium text-zinc-200">
                <Link
                  href="/#products"
                  onClick={() => setMobileOpen(false)}
                  className="hover:text-[#ff6000] transition-colors"
                >
                  Products
                </Link>
                <button
                  onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                  className="text-zinc-400 p-1"
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
                <div className="ml-3 pl-3 border-l border-zinc-800 flex flex-col gap-2 my-1">
                  <Link
                    href="/products/augur"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between rounded-lg px-3 py-2 text-xs font-medium text-zinc-300 hover:bg-zinc-800/60 hover:text-[#ff6000] transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff6000]" />
                      Augur Governance
                    </span>
                    <span className="font-mono text-[10px] text-zinc-500">SOC 2</span>
                  </Link>

                  <Link
                    href="/products/doksim"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between rounded-lg px-3 py-2 text-xs font-medium text-zinc-300 hover:bg-zinc-800/60 hover:text-emerald-400 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      DokSim Simulator
                    </span>
                    <span className="font-mono text-[10px] text-zinc-500">Clinical</span>
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/#research"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-200 hover:bg-zinc-800/60 hover:text-[#ff6000] transition-colors"
            >
              Research
            </Link>

            <Link
              href="/blog"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-200 hover:bg-zinc-800/60 hover:text-[#ff6000] transition-colors"
            >
              Blog
            </Link>

            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-200 hover:bg-zinc-800/60 hover:text-[#ff6000] transition-colors"
            >
              About
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-200 hover:bg-zinc-800/60 hover:text-[#ff6000] transition-colors"
            >
              Contact
            </Link>

            <div className="pt-4 border-t border-zinc-800">
              <Link
                href="/products/augur"
                onClick={() => setMobileOpen(false)}
                className="btn btn-primary w-full text-center text-xs py-2.5"
              >
                Explore Augur
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

