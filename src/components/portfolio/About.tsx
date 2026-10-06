import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="w-full bg-surface px-margin-mobile py-24 md:px-margin-tablet lg:px-margin lg:py-40"
    >
      <div className="grid grid-cols-1 items-start gap-gutter lg:grid-cols-12">
        {/* Portrait */}
        <div className="lg:col-span-5">
          <div className="relative aspect-[3/4] w-full overflow-hidden">
            <Image
              src="/hero/portrait.jpg"
              alt="Leonardo Moretti, fotógrafo y director de arte"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
          </div>
        </div>

        {/* Bio & Editorial Narrative */}
        <div className="flex h-full flex-col justify-between lg:col-span-7 lg:pl-6">
          <div>
            <span className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-secondary">
              PRÁCTICA Y FILOSOFÍA
            </span>

            <h2 className="mb-8 font-display text-headline-lg text-on-surface">
              Sobre mí
            </h2>

            <p className="mb-6 font-display text-2xl leading-relaxed text-on-surface">
              Leonardo Moretti es fotógrafo y director de arte radicado en
              Buenos Aires, con una práctica que atraviesa el ámbito
              editorial y la cultura visual contemporánea.
            </p>

            <p className="mb-10 font-body text-base leading-relaxed text-on-surface-variant">
              Su práctica combina fotografía, composición y dirección visual
              para crear imágenes distintivas para marcas independientes,
              publicaciones y proyectos culturales. Basada en la geometría
              arquitectónica y la materialidad táctil, cada encargo se aborda
              como un universo visual cohesivo.
            </p>

            {/* Specifications */}
            <div className="mb-8 w-full space-y-4 bg-surface-container-low p-6">
              <div className="flex flex-col justify-between pb-3 sm:flex-row sm:items-center">
                <span className="font-mono text-[10px] uppercase tracking-widest text-secondary">
                  UBICACIÓN
                </span>

                <span className="mt-1 font-body text-sm text-on-surface sm:mt-0">
                  Buenos Aires, Argentina
                </span>
              </div>

              <div className="flex flex-col justify-between pb-3 sm:flex-row sm:items-center">
                <span className="font-mono text-[10px] uppercase tracking-widest text-secondary">
                  ENFOQUE
                </span>

                <span className="mt-1 font-body text-sm text-on-surface sm:mt-0">
                  Fotografía / Dirección de arte
                </span>
              </div>

              <div className="flex flex-col justify-between sm:flex-row sm:items-center">
                <span className="font-mono text-[10px] uppercase tracking-widest text-secondary">
                  DISPONIBLE PARA
                </span>

                <span className="mt-1 font-body text-sm text-on-surface sm:mt-0">
                  Editorial / Campañas / Colaboraciones
                </span>
              </div>
            </div>
          </div>

          <div>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-primary px-8 py-4 font-mono text-[10px] uppercase tracking-widest text-white transition-all hover:bg-surface-container-highest hover:text-on-surface"
            >
              <span>Contactar</span>
              <span aria-hidden="true" className="text-[16px]">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}