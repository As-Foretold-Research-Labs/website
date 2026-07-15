import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 md:mt-32 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="terminal-window">
          <div className="terminal-bar">
            <span className="terminal-dot" />
            <span className="terminal-dot" />
            <span className="terminal-dot" />
            <span className="ml-3 mono-text text-[11px] tracking-[0.24em] text-white/40 uppercase">
              system footer / contact surface
            </span>
          </div>

          <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
            <div className="flex flex-col gap-4">
              <div>
                <p className="section-kicker">As Foretold Labs</p>
                <p className="mt-3 max-w-xl text-sm md:text-base text-white/52 leading-relaxed">
                  Research systems for governance automation, simulation, and human-computer interaction.
                  The public site is intentionally spare, with each product page framed like a terminal session.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="command-chip text-white/70">© {new Date().getFullYear()}</span>
                <span className="command-chip text-white/55">modern terminal shell</span>
                <span className="command-chip text-white/55">palantir-inspired presentation</span>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <Link href="/#work" className="command-chip justify-between hover:border-white/20 hover:bg-white/[0.05] hover:text-white">
                <span>Work</span>
                <span className="text-white/35">↗</span>
              </Link>
              <Link href="/#about" className="command-chip justify-between hover:border-white/20 hover:bg-white/[0.05] hover:text-white">
                <span>About</span>
                <span className="text-white/35">↗</span>
              </Link>
              <Link href="/products/augur" className="command-chip justify-between hover:border-white/20 hover:bg-white/[0.05] hover:text-white">
                <span>Augur</span>
                <span className="text-white/35">↗</span>
              </Link>
              <Link href="/products/doksim" className="command-chip justify-between hover:border-white/20 hover:bg-white/[0.05] hover:text-white">
                <span>DokSim</span>
                <span className="text-white/35">↗</span>
              </Link>
              <Link
                href="mailto:hello@asforetolabs.com"
                className="command-chip justify-between sm:col-span-2 hover:border-[var(--accent)] hover:bg-[var(--accent-subtle)] hover:text-white"
              >
                <span>hello@asforetolabs.com</span>
                <span className="text-white/35">mail</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
