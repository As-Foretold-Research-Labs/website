import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] mt-24 md:mt-32">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-10 md:py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex flex-col gap-1">
          <p className="text-[13px] font-semibold tracking-wide text-white/80">
            AS FORETOLD LABS
          </p>
          <p className="text-[12px] text-white/35">
            © {new Date().getFullYear()} As Foretold Research Labs. All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <Link href="/#work" className="text-[13px] text-white/40 transition-colors duration-200 hover:text-white active:text-white">
            Work
          </Link>
          <Link href="/#about" className="text-[13px] text-white/40 transition-colors duration-200 hover:text-white active:text-white">
            About
          </Link>
          <Link href="/products/augur" className="text-[13px] text-white/40 transition-colors duration-200 hover:text-white active:text-white">
            Augur
          </Link>
          <Link href="/products/doksim" className="text-[13px] text-white/40 transition-colors duration-200 hover:text-white active:text-white">
            DokSim
          </Link>
          <Link
            href="mailto:hello@asforetolabs.com"
            className="text-[13px] font-medium text-white/70 transition-colors duration-200 hover:text-white active:text-white"
          >
            hello@asforetolabs.com
          </Link>
        </div>
      </div>
    </footer>
  );
}
