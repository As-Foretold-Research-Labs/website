import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-28 border-t border-[var(--line)] bg-[#08090e]">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <p className="text-sm font-semibold text-white">As Foretold Labs</p>
            <p className="section-copy mt-3 text-sm leading-relaxed">
              Research systems for governance automation, simulation, and human-computer
              interaction.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="command-chip text-white/40">© {new Date().getFullYear()}</span>
              <span className="command-chip text-white/40">research lab</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
            <Link href="/#work" className="text-white/60 transition-colors hover:text-white">Work</Link>
            <Link href="/#research" className="text-white/60 transition-colors hover:text-white">Research</Link>
            <Link href="/products/augur" className="text-white/60 transition-colors hover:text-white">Augur</Link>
            <Link href="/products/doksim" className="text-white/60 transition-colors hover:text-white">DokSim</Link>
            <a href="mailto:hello@asforetold.com" className="col-span-2 text-white/60 transition-colors hover:text-white">
              hello@asforetold.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
