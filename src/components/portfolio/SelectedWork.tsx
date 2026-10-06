import Image from "next/image";

const projects = [
  {
    number: "01",
    category: "EDITORIAL 2026",
    title: "01 — SILENCIO",
    description:
      "Un estudio sobre el espacio mínimo, la niebla atmosférica y el peso del silencio en paisajes costeros.",
    image: "/work/1-silencio.jpg",
    imageAspect: "aspect-[16/10]",
    figure: "FIG. 01 / 16:10",
    camera: "35MM MONOCROMO • EXP. +0.7",
  },
  {
    number: "02",
    category: "FFOTOGRAFÍA ARQUITECTÓNICA  2026",
    title: "02 — AL ANOCHECER",
    description:
      "Campaña nocturna que explora la iluminación artificial y el modernismo arquitectónico. Una investigación visual sobre espacios subterráneos, estructuras geométricas y el contraste entre luz de tungsteno y vapor de sodio.",
    image: "/work/2-al-anochecer.jpg",
    imageAspect: "aspect-[4/5]",
    figure: "FIG. 02 / 4:5 VERTICAL",
    camera: "FUJIFILM 400H • FORZADO 1 PASO",
  },
  {
    number: "03",
    category: "DIRECCIÓN DE ARTE 2025",
    title: "03 — FORMA",
    description:
      "Dirección espacial para cerámicas modernas de estética brutalista. Exploración de proporciones, sombras duras y fricción geométrica.",
    image: "/work/3-forma.jpg",
    imageAspect: "aspect-[21/9]",
    figure: "FIG. 03 / 21:9 CINEMÁTICO",
    camera: "INSTALACIÓN ESCULTÓRICA",
  },
  {
    number: "04",
    category: "EDITORIAL 2025",
    title: "04 — ENTRE LA LUZ",
    description:
      "Exploraciones de la luz solar directa del mediodía atravesando textiles de seda plisada. Publicado como una edición limitada encuadernada en tela.",
    image: "/work/4-entre-la-luz.jpg",
    imageAspect: "aspect-[3/4]",
    figure: "FIG. 04 / 3:4",
    camera: "KODAK TRI-X 400",
  },
  {
    number: "05",
    category: "CAMPAÑA 2025",
    title: "05 — MATERIA PRIMA",
    description:
      "Imágenes de marca para un fabricante de artículos de cuero sustentable y calzado artesanal, capturando el trabajo manual y los tintes naturales.",
    image: "/work/5-materia-prima.jpg",
    imageAspect: "aspect-[16/11]",
    figure: "FIG. 05 / 16:11",
    camera: "PENTAX 67 • 105MM",
  },
];

function ProjectImage({
  project,
}: {
  project: (typeof projects)[number];
}) {
  return (
    <div
      className={`relative w-full ${project.imageAspect} overflow-hidden bg-surface-container-high`}
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 75vw"
      />
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
          </div>
          <h2 className="font-display text-headline-lg text-on-surface">
            Trabajos recientes
          </h2>
        </div>

        <p className="mt-4 max-w-md font-body text-base text-secondary md:mt-0">
          Una selección de proyectos recientes en edición, moda y campañas
          visuales.
        </p>
      </div>

      {/* Projects */}
      <div className="flex flex-col gap-24">
        {/* PROJECT 01 */}
        <article className="grid grid-cols-1 items-start gap-gutter lg:grid-cols-12">
          <div className="lg:col-span-8">
            <ProjectImage project={projects[0]} />
          </div>

          <div className="flex h-full flex-col justify-between pt-2 lg:col-span-4">
            <ProjectMeta project={projects[0]} />

            <div className="mt-6 space-y-2 bg-surface p-4 font-mono text-[10px]">
              <div className="flex justify-between">
                <span className="uppercase text-secondary">Publicación</span>
                <span className="text-on-surface">SOLSTICE REVIEW</span>
              </div>

              <div className="flex justify-between">
                <span className="uppercase text-secondary">Rol</span>
                <span className="text-on-surface">
                  FOTOGRAFÍA / DIRECCIÓN DE ARTE
                </span>
              </div>

              <div className="flex justify-between">
                <span className="uppercase text-secondary">Año</span>
                <span className="text-on-surface">2026</span>
              </div>
            </div>

            <div className="mt-8">
            </div>
          </div>
        </article>

        {/* PROJECT 02 */}
        <article className="grid grid-cols-1 items-center gap-gutter lg:grid-cols-12">
          <div className="flex flex-col justify-between lg:col-span-4 lg:order-1">
            <ProjectMeta project={projects[1]} />

            <div className="mt-6 space-y-2 bg-surface p-4 font-mono text-[10px]">
              <div className="flex justify-between">
                <span className="uppercase text-secondary">Enfoque</span>
                <span className="text-on-surface">ARQUITECTURA Y LUZ</span>
              </div>

              <div className="flex justify-between">
                <span className="uppercase text-secondary">Año</span>
                <span className="text-on-surface">2026</span>
              </div>

            </div>

            <div className="mt-8">

            </div>
          </div>

          <div className="lg:col-span-7 lg:col-start-6 lg:order-2">
            <ProjectImage project={projects[1]} />
          </div>
        </article>

        {/* PROJECT 03 */}
        <article className="grid grid-cols-1 items-start gap-gutter lg:grid-cols-12">
          <div className="lg:col-span-9">
            <ProjectImage project={projects[2]} />
          </div>

          <div className="flex flex-col justify-between pt-2 lg:col-span-3">
            <ProjectMeta project={projects[2]} compact />

            <div className="mt-6 bg-surface p-3">
              <span className="block font-mono text-[10px] uppercase text-secondary">
                DIRECCIÓN DE ARTE
              </span>

              <span className="font-mono text-[10px] uppercase text-on-surface">
                CERÁMICA Y ESPACIO
              </span>
            </div>
          </div>
        </article>

        {/* PROJECTS 04 + 05 */}
        <div className="grid grid-cols-1 items-start gap-gutter lg:grid-cols-12">
          {/* PROJECT 04 */}
          <article className="flex flex-col gap-4 lg:col-span-5">
            <ProjectImage project={projects[3]} />

            <div className="pt-2">
              <ProjectMeta project={projects[3]} />


            </div>
          </article>

          {/* PROJECT 05 */}
          <article className="flex flex-col gap-4 lg:col-span-7 lg:pt-16">
            <ProjectImage project={projects[4]} />

            <div className="pt-2">
              <ProjectMeta project={projects[4]} />

              <div className="mt-4 flex items-center gap-6">
      

                <span className="font-mono text-[10px] uppercase text-secondary">
                  ARTESANÍA Y PROCESO
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}