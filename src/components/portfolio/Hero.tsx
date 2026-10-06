import Image from "next/image";

export default function Hero() {
  return (
    <section className="px-margin-mobile pb-24 pt-36 md:px-margin-tablet md:pb-32 md:pt-40 lg:px-margin lg:pb-40">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start lg:gap-gutter">
        {/* Content */}
        <div className="lg:col-span-5">
          <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.18em] text-on-surface-variant">
            Fotográfo / Artista visual
          </p>

          <h1 className="font-display text-display-mobile leading-[1.05] tracking-[-0.03em] text-on-surface md:text-display-xl">
            Leonardo Moretti
          </h1>

          <p className="mt-8 max-w-md font-body text-base leading-relaxed text-on-surface-variant">
            Historias visuales moldeadas a través de la fotografía, la dirección artística y
            la creación de imágenes contemporáneas.
          </p>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.16em] text-on-surface-variant">
            <span>Buenos Aires</span>
            <span>Editorial</span>
            <span>Moda</span>
            <span>Campañas</span>
          </div>

          <a
            href="#work"
            className="mt-10 inline-flex items-center border-b border-primary pb-2 font-mono text-[11px] uppercase tracking-[0.16em] text-primary transition-opacity hover:opacity-60"
          >
            Ver trabajo seleccionado
          </a>
        </div>

        {/* Visual placeholder */}
        <div className="lg:col-span-7">
          <div className="relative aspect-[5/5] w-full overflow-hidden">
            <Image
              src="/hero/hero.jpg"
              alt="Leonardo Moretti, fotógrafo y artista visual"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}