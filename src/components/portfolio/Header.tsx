import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-surface/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 items-center justify-between px-margin-mobile md:px-margin-tablet lg:px-margin">
        <Link
          href="#"
          className="font-display text-xl font-semibold tracking-tight text-on-surface"
        >
          Leonardo Moretti
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="#work"
            className="font-body text-sm text-on-surface-variant transition-colors hover:text-primary"
          >
            Proyectos
          </Link>

          <Link
            href="#about"
            className="font-body text-sm text-on-surface-variant transition-colors hover:text-primary"
          >
            About
          </Link>

          <Link
            href="#contact"
            className="font-body text-sm text-on-surface-variant transition-colors hover:text-primary"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-on-surface-variant">
          <span className="h-2 w-2 rounded-full bg-green-500" />
          Agenda abierta
        </div>
      </div>
    </header>
  );
}