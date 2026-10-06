export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low">
      <div className="w-full px-margin-mobile py-24 md:px-margin-tablet lg:px-margin lg:py-40">
        <div className="grid grid-cols-1 items-start gap-gutter md:grid-cols-12">
          <div className="flex flex-col gap-3 md:col-span-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-on-surface">
              Lena Moretti
            </span>

            <p className="font-body text-sm text-secondary">
              Fotografía y Dirección de Arte
            </p>

            <p className="font-mono text-[10px] uppercase tracking-wider text-on-surface-variant">
              Buenos Aires, Argentina
            </p>
          </div>

          <div className="flex flex-col gap-3 md:col-span-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-secondary">
              REPRESENTACIÓN
            </span>

            <p className="font-body text-sm text-on-surface">
              Estudio y consultas: studio@lenamoretti.com
            </p>

            <p className="font-mono text-[10px] uppercase text-on-surface-variant">
              GMT-3 / DISPONIBLE INTERNACIONALMENTE
            </p>
          </div>

          <div className="flex flex-col justify-between gap-8 md:col-span-4 md:items-end">
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="font-mono text-[10px] uppercase tracking-widest text-on-surface-variant transition-colors hover:text-on-surface"
              >
                Instagram
              </a>

              <a
                href="#"
                className="font-mono text-[10px] uppercase tracking-widest text-on-surface-variant transition-colors hover:text-on-surface"
              >
                Behance
              </a>

              <a
                href="#"
                className="font-mono text-[10px] uppercase tracking-widest text-on-surface-variant transition-colors hover:text-on-surface"
              >
                Archivo
              </a>
            </div>

            <div className="flex flex-col gap-1 md:items-end">
              <span className="font-mono text-[10px] uppercase tracking-wider text-on-surface-variant">
                © 2026 Lena Moretti. Todos los derechos reservados.
              </span>

              <span className="font-mono text-[10px] uppercase tracking-widest text-outline">
                Frequency Studio Typography Edition
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}