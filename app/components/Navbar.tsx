"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/#work", label: "Work" },
    { href: "/#about", label: "About" },
    { href: "/products/augur", label: "Augur" },
    { href: "/products/doksim", label: "DokSim" },
    { href: "mailto:hello@asforetolabs.com", label: "Contact" },
  ];

  return (
    <nav className="top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-black/60 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-[1200px] items-center justify-between px-6 md:px-10">
        <Link href="/" className="text-sm font-semibold tracking-wide text-white/90">
          AS FORETOLD LABS
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-white/50 transition-colors duration-200 hover:text-white active:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block h-[1.5px] w-5 bg-white/80 transition-all duration-200 ${open ? "rotate-45 translate-y-[6.5px]" : ""}`} />
          <span className={`block h-[1.5px] w-5 bg-white/80 transition-all duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-[1.5px] w-5 bg-white/80 transition-all duration-200 ${open ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/[0.06] bg-black/95 backdrop-blur-xl">
          <div className="mx-auto flex flex-col px-6 py-6 gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[14px] font-medium text-white/60 transition-colors active:text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
