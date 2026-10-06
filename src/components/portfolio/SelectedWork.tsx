  const projects = [
  {
    number: "01",
    category: "EDITORIAL 2026",
    title: "01 — SILENCIO",
    description:
      "Un estudio sobre el espacio mínimo, la niebla atmosférica y el peso del silencio en las afueras costeras de Mar del Plata. Fotografiado durante cuatro sesiones al amanecer.",
    imageAspect: "aspect-[16/10]",
    figure: "FIG. 01 / 16:10",
    camera: "35MM MONOCROMO • EXP. +0.7",
    imageLabel: "IMAGEN PLACEHOLDER — 16:10 PANORÁMICO",
    imageDescription: "PLACA EDITORIAL / CANTERA DE BUENOS AIRES",
    imageType: "PLACA A SANGRE",
    bottomLeft: "LUZ NATURAL",
    bottomRight: "REF. PLACA: LM-26-01",
  },
  {
    number: "02",
    category: "CAMPAÑA DE MODA 2026",
    title: "02 — DESPUÉS DE LA NOCHE",
    description:
      "Campaña nocturna que explora la iluminación artificial y el modernismo arquitectónico. Utilizando iluminación selectiva de tungsteno y vapor de sodio en la infraestructura del subterráneo de Buenos Aires.",
    imageAspect: "aspect-[4/5]",
    figure: "FIG. 02 / 4:5 VERTICAL",
    camera: "FUJIFILM 400H • FORZADO 1 PASO",
    imageLabel: "IMAGEN PLACEHOLDER — 4:5",
    imageDescription: "PLACA DE CAMPAÑA NOCTURNA",
    imageType: "ENCUADRE VERTICAL",
    bottomLeft: "DISPERSIÓN DE LUZ DE SODIO",
    bottomRight: "REF. PLACA: LM-26-02",
  },
  {
    number: "03",
    category: "DIRECCIÓN DE ARTE 2025",
    title: "03 — FORMA",
    description:
      "Dirección espacial para cerámicas modernas de estética brutalista. Exploración de proporciones, sombras duras y fricción geométrica.",
    imageAspect: "aspect-[21/9]",
    figure: "FIG. 03 / 21:9 CINEMÁTICO",
    camera: "INSTALACIÓN ESCULTÓRICA",
    imageLabel: "IMAGEN PLACEHOLDER — 21:9 PANORÁMICO",
    imageDescription: "CONCRETO MONOLÍTICO Y FORMAS BRUTALISTAS",
    imageType: "ARCHIVO PANORÁMICO",
    bottomLeft: "SOMBRA DIFUSA DE LLUVIA",
    bottomRight: "REF. PLACA: LM-25-03",
  },
  {
    number: "04",
    category: "EDITORIAL 2025",
    title: "04 — ENTRE LA LUZ",
    description:
      "Exploraciones de la luz solar directa del mediodía atravesando textiles de seda plisada. Publicado como una edición limitada encuadernada en tela.",
    imageAspect: "aspect-[3/4]",
    figure: "FIG. 04 / 3:4",
    camera: "KODAK TRI-X 400",
    imageLabel: "IMAGEN PLACEHOLDER — 3:4",
    imageDescription: "ENTRE LA LUZ / EDITORIAL",
    imageType: "RETRATO VERTICAL",
    bottomLeft: "LUZ DE ESTUDIO",
    bottomRight: "REF. PLACA: LM-25-04",
  },
  {
    number: "05",
    category: "CAMPAÑA 2025",
    title: "05 — MATERIA PRIMA",
    description:
      "Imágenes de marca para un fabricante de artículos de cuero sustentable y calzado artesanal, capturando el trabajo manual y los tintes naturales.",
    imageAspect: "aspect-[16/11]",
    figure: "FIG. 05 / 16:11",
    camera: "PENTAX 67 • 105MM",
    imageLabel: "IMAGEN PLACEHOLDER — 16:11",
    imageDescription: "CAMPAÑA MATERIA PRIMA",
    imageType: "CAMPAÑA DE REPOSO",
    bottomLeft: "CUERO Y LINO GRUESO",
    bottomRight: "REF. PLACA: LM-25-05",
  },
];

function ProjectImage({
  project,
  variant,
}: {
  project: (typeof projects)[number];
  variant: "wide" | "vertical" | "cinematic" | "portrait" | "campaign";
}) {
  return (
    <div
      className={`relative w-full ${project.imageAspect} ${
        variant === "portrait"
          ? "bg-surface-container"
          : variant === "campaign"
            ? "bg-surface-container-highest"
            : variant === "vertical"
              ? "bg-surface-container-highest"
              : "bg-surface-container-high"
      } p-6 flex flex-col justify-between`}
    >
      <div className="flex items-center justify-between text-secondary">
        <span className="bg-surface px-2 py-0.5 font-mono text-[10px] uppercase text-on-surface">
          {project.figure}
        </span>

        <span className="font-mono text-[10px] uppercase">
          {project.camera}
        </span>
      </div>

      <div
        className={`self-center bg-surface/90 text-center ${
          variant === "vertical" ? "max-w-xs px-6 py-8" : "px-6 py-4"
        }`}
      >
        <span className="font-mono text-[10px] uppercase tracking-widest text-outline">
          {project.imageType}
        </span>

        <p className="mt-1 font-display text-2xl text-on-surface">
          {project.imageLabel}
        </p>

        <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-secondary">
          {project.imageDescription}
        </p>

        {variant === "vertical" && (
          <p className="mt-2 font-mono text-[10px] text-outline">
            2800 × 3500 PX
          </p>
        )}
      </div>

      <div className="flex items-center justify-between font-mono text-[10px] uppercase text-on-surface-variant">
        <span>{project.bottomLeft}</span>
        <span>{project.bottomRight}</span>
      </div>
    </div>
  );
}

function ProjectMeta({
  project,
  compact = false,
}: {
  project: (typeof projects)[number];
  compact?: boolean;
}) {
  return (
    <div>
      <span className="mb-1 block font-mono text-[10px] uppercase tracking-widest text-secondary">
        {project.category}
      </span>

      <h3
        className={
          compact
            ? "font-display text-headline-sm text-on-surface"
            : "font-display text-headline-md text-on-surface"
        }
      >
        {project.title}
      </h3>

      <p
        className={`text-on-surface-variant ${
          compact
            ? "mt-3 font-body text-sm leading-relaxed"
            : "mt-4 font-body text-base leading-relaxed"
        }`}
      >
        {project.description}
      </p>
    </div>
  );
}

export default function SelectedWork() {
  return (
    <section
      id="work"
      className="w-full bg-surface-container-low px-margin-mobile py-24 md:px-margin-tablet lg:px-margin lg:py-40"
    >
      {/* Section Header */}
      <div className="mb-16 flex flex-col justify-between border-b border-outline-variant pb-6 md:flex-row md:items-end">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] uppercase tracking-widest text-secondary">
              CATALOGUE RAISONNÉ
            </span>

            <span className="font-mono text-[10px] font-bold uppercase text-primary">
              (05)
            </span>
          </div>

          <h2 className="font-display text-headline-lg text-on-surface">
            Selected Work
          </h2>
        </div>

        <p className="mt-4 max-w-md font-body text-base text-secondary md:mt-0">
          A selection of recent projects across editorial, fashion and visual
          campaigns.
        </p>
      </div>

      {/* Projects */}
      <div className="flex flex-col gap-24">
        {/* PROJECT 01 */}
        <article className="grid grid-cols-1 items-start gap-gutter lg:grid-cols-12">
          <div className="lg:col-span-8">
            <ProjectImage project={projects[0]} variant="wide" />
          </div>

          <div className="flex h-full flex-col justify-between pt-2 lg:col-span-4">
            <ProjectMeta project={projects[0]} />

            <div className="mt-6 space-y-2 bg-surface p-4 font-mono text-[10px]">
              <div className="flex justify-between">
                <span className="uppercase text-secondary">Publication</span>
                <span className="text-on-surface">SOLSTICE REVIEW</span>
              </div>

              <div className="flex justify-between">
                <span className="uppercase text-secondary">Role</span>
                <span className="text-on-surface">
                  PHOTOGRAPHY & ART DIRECTION
                </span>
              </div>

              <div className="flex justify-between">
                <span className="uppercase text-secondary">Year</span>
                <span className="text-on-surface">2026</span>
              </div>
            </div>

            <div className="mt-8">
              <span className="font-mono text-[10px] uppercase tracking-widest text-on-surface underline underline-offset-4 transition-opacity hover:opacity-60">
                Explore Project Notes →
              </span>
            </div>
          </div>
        </article>

        {/* PROJECT 02 */}
        <article className="grid grid-cols-1 items-center gap-gutter lg:grid-cols-12">
          <div className="flex flex-col justify-between lg:col-span-4 lg:order-1">
            <ProjectMeta project={projects[1]} />

            <div className="mt-6 space-y-2 bg-surface p-4 font-mono text-[10px]">
              <div className="flex justify-between">
                <span className="uppercase text-secondary">Client</span>
                <span className="text-on-surface">ATELIER NORDICO</span>
              </div>

              <div className="flex justify-between">
                <span className="uppercase text-secondary">Format</span>
                <span className="text-on-surface">MEDIUM FORMAT 6×7</span>
              </div>

              <div className="flex justify-between">
                <span className="uppercase text-secondary">Location</span>
                <span className="text-on-surface">LINEA H TÚNEL</span>
              </div>
            </div>

            <div className="mt-8">
              <span className="font-mono text-[10px] uppercase tracking-widest text-on-surface underline underline-offset-4 transition-opacity hover:opacity-60">
                View Lookbook Index →
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 lg:col-start-6 lg:order-2">
            <ProjectImage project={projects[1]} variant="vertical" />
          </div>
        </article>

        {/* PROJECT 03 */}
        <article className="grid grid-cols-1 items-start gap-gutter lg:grid-cols-12">
          <div className="lg:col-span-9">
            <ProjectImage project={projects[2]} variant="cinematic" />
          </div>

          <div className="flex flex-col justify-between pt-2 lg:col-span-3">
            <ProjectMeta project={projects[2]} compact />

            <div className="mt-6 bg-surface p-3">
              <span className="block font-mono text-[10px] uppercase text-secondary">
                MUSEO DE ARTE MODERNO
              </span>

              <span className="font-mono text-[10px] uppercase text-on-surface">
                BUENOS AIRES EXHIBITION
              </span>
            </div>
          </div>
        </article>

        {/* PROJECTS 04 + 05 */}
        <div className="grid grid-cols-1 items-start gap-gutter lg:grid-cols-12">
          {/* PROJECT 04 */}
          <article className="flex flex-col gap-4 lg:col-span-5">
            <ProjectImage project={projects[3]} variant="portrait" />

            <div className="pt-2">
              <ProjectMeta project={projects[3]} />

              <div className="mt-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-on-surface underline underline-offset-4 transition-opacity hover:opacity-60">
                  View Editorial Series →
                </span>
              </div>
            </div>
          </article>

          {/* PROJECT 05 */}
          <article className="flex flex-col gap-4 lg:col-span-7 lg:pt-16">
            <ProjectImage project={projects[4]} variant="campaign" />

            <div className="pt-2">
              <ProjectMeta project={projects[4]} />

              <div className="mt-4 flex items-center gap-6">
                <span className="font-mono text-[10px] uppercase tracking-widest text-on-surface underline underline-offset-4 transition-opacity hover:opacity-60">
                  View Project →
                </span>

                <span className="font-mono text-[10px] uppercase text-secondary">
                  EXHIBITION: BIENAL SUR
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}