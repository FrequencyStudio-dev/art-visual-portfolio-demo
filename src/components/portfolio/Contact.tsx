export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full bg-surface px-margin-mobile py-24 md:px-margin-tablet lg:px-margin lg:py-40"
    >
      <div className="max-w-4xl">
        <div className="mb-4 flex items-center gap-2">
          <span className="h-2 w-2 bg-primary" />

          <span className="font-mono text-[10px] uppercase tracking-widest text-secondary">
            INICIAR PROYECTO
          </span>
        </div>

        <h2 className="mb-4 font-display text-headline-lg leading-tight text-on-surface">
          ¿Tenés un proyecto en mente?
        </h2>

        <p className="mb-12 font-display text-2xl leading-relaxed text-secondary">
          Disponible para proyectos editoriales, campañas y colaboraciones
          creativas seleccionadas.
        </p>

        <div className="mb-14">
          <span className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-secondary">
            CONTACTO DIRECTO
          </span>

          <a
            href="mailto:hello@lenamoretti.com"
            className="inline-block break-all font-display text-headline-md text-on-surface underline decoration-1 underline-offset-8 transition-colors hover:text-secondary sm:text-headline-lg"
          >
            hello@leonardomoretti.com
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-x-12 gap-y-4 border-t border-outline-variant pt-8">
          <span className="font-mono text-[10px] uppercase text-secondary">
            CONECTAR:
          </span>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-on-surface transition-colors hover:text-secondary"
          >
            Instagram
            <span className="text-[14px]">↗</span>
          </a>

          <a
            href="https://behance.net"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-on-surface transition-colors hover:text-secondary"
          >
            Behance
            <span className="text-[14px]">↗</span>
          </a>

          <a
            href="#"
            className="ml-auto inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-on-surface-variant transition-colors hover:text-on-surface"
          >
            Volver arriba
            <span className="text-[14px]">↑</span>
          </a>
        </div>
      </div>
    </section>
  );
}