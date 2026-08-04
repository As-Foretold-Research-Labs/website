import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-[#0c0d10] relative z-20">
      <div className="mx-auto w-full max-w-7xl px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 group mb-4">
              <div className="relative w-8 h-8 rounded-lg bg-[#ff6000] flex items-center justify-center p-1.5 shadow-sm transition-colors duration-200 group-hover:bg-[#e05300]">
                <Image
                  src="/as-foretold-logo-adaptive.svg"
                  alt="As Foretold Labs logo"
                  width={22}
                  height={22}
                  className="text-white invert"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                As Foretold Labs
              </span>
            </Link>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm mb-6">
              Pioneering intelligent systems at the intersection of simulation, automation, and human-computer interaction.
            </p>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#181a20] border border-zinc-800 text-xs text-[#ff7722] font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff6000] animate-pulse" />
                Active Research Lab
              </span>
              <span className="text-xs text-zinc-500 font-mono">EST. 2024</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300 mb-4">Products</h4>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              <li>
                <Link href="/products/augur" className="hover:text-[#ff6000] transition-colors flex items-center gap-1.5">
                  Augur
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[#ff6000]/10 text-[#ff7722] border border-[#ff6000]/20">SOC 2</span>
                </Link>
              </li>
              <li>
                <Link href="/products/doksim" className="hover:text-[#ff6000] transition-colors flex items-center gap-1.5">
                  DokSim
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Clinical</span>
                </Link>
              </li>
              <li>
                <Link href="/#products" className="hover:text-[#ff6000] transition-colors">
                  Overview
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300 mb-4">Company & Research</h4>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              <li>
                <Link href="/about" className="hover:text-[#ff6000] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#ff6000] transition-colors">
                  Blog & Research Papers
                </Link>
              </li>
              <li>
                <Link href="/#research" className="hover:text-[#ff6000] transition-colors">
                  Research Areas
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#ff6000] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="mailto:velasquez.marcvictor.l@asforetold.space" className="hover:text-[#ff6000] transition-colors break-all">
                  velasquez.marcvictor.l@asforetold.space
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300 mb-4">Legal & Social</h4>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              <li>
                <Link href="/privacy" className="hover:text-[#ff6000] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#ff6000] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/As-Foretold-Research-Labs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ff6000] transition-colors flex items-center gap-1.5"
                >
                  GitHub
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
          <p>&copy; {new Date().getFullYear()} As Foretold Labs. All rights reserved.</p>
          <p>Building intelligent systems for enterprise automation & clinical simulation.</p>
        </div>
      </div>
    </footer>
  );
}
