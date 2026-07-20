import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line-soft)] bg-black">
      <div className="mx-auto w-full max-w-[100rem] px-6 py-14 sm:px-10 md:px-16 lg:px-24 xl:px-28">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <p className="display text-sm tracking-[0.12em] text-white">As Foretold Labs</p>
            <p className="body-copy mt-4 text-sm">
              Research systems for governance automation, simulation, and human-computer
              interaction.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="chip text-[10px]">© {new Date().getFullYear()}</span>
              <span className="chip text-[10px]">research lab</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-3 font-mono text-[11px] uppercase tracking-[0.2em]">
            <Link href="/#work" className="text-white/55 transition-colors hover:text-[var(--accent)]">
              Work
            </Link>
            <Link href="/#research" className="text-white/55 transition-colors hover:text-[var(--accent)]">
              Research
            </Link>
            <Link href="/products/augur" className="text-white/55 transition-colors hover:text-[var(--accent)]">
              Augur
            </Link>
            <Link href="/products/doksim" className="text-white/55 transition-colors hover:text-[var(--accent)]">
              DokSim
            </Link>
            <a href="mailto:hello@asforetold.com" className="col-span-2 text-white/55 transition-colors hover:text-[var(--accent)]">
              hello@asforetold.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
