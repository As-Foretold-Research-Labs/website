"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#research", label: "Research" },
  { href: "/products/augur", label: "Augur" },
  { href: "/products/doksim", label: "DokSim" },
  { href: "mailto:hello@asforetold.com", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--line-soft)] bg-black/70 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-[100rem] items-center justify-between px-6 py-5 sm:px-10 md:px-16 lg:px-24 xl:px-28">
        <Link href="/" className="display text-sm tracking-[0.12em] text-white">
          AFL
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-[var(--accent)]"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/70 md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open && (
        <div className="border-t border-[var(--line-soft)] px-6 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-white/70 hover:bg-white/5 hover:text-[var(--accent)]"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
