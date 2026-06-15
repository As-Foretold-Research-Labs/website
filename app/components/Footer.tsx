export default function Footer() {
  return (
    <footer className="mt-16 md:mt-24 pt-12 border-t border-white/10 text-center animate-fade-up delay-10">
      <p className="text-sm text-white/40 tracking-wider">
        © {new Date().getFullYear()} As Foretold Research Labs
      </p>
    </footer>
  );
}