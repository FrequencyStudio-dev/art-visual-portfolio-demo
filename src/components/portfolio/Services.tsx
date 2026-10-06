const services = [
  {
    number: "01",
    title: "Fotografía",
    description: "Fotografía editorial y para campañas.",
  },
  {
    number: "02",
    title: "Dirección de arte",
    description: "Conceptos visuales y dirección creativa.",
  },
  {
    number: "03",
    title: "Editorial",
    description:
      "Fotografía para revistas y publicaciones independientes.",
  },
  {
    number: "04",
    title: "Campañas",
    description:
      "Producción visual para marcas y proyectos culturales.",
  },
];

export default function Services() {
  return (
    <section className="w-full bg-surface-container-low px-margin-mobile py-24 md:px-margin-tablet lg:px-margin lg:py-40">
      <div className="mb-12 grid grid-cols-1 gap-gutter lg:grid-cols-12">
        <div className="lg:col-span-4">
          <span className="mb-1 block font-mono text-[10px] uppercase tracking-widest text-secondary">
            CAPACIDADES
          </span>

          <h2 className="font-display text-headline-lg text-on-surface">
            Servicios
          </h2>
        </div>

        <div className="flex items-end lg:col-span-8">
          <p className="max-w-xl font-body text-base leading-relaxed text-on-surface-variant">
            Producción visual integral, desde el desarrollo del concepto hasta
            el tratamiento final de color, disponible para proyectos por
            encargo.
          </p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <div
            key={service.number}
            className="flex min-h-[220px] flex-col justify-between bg-surface p-8"
          >
            <span className="font-mono text-[10px] uppercase tracking-widest text-secondary">
              {service.number} / ESPEC.
            </span>

            <div>
              <h3 className="mb-2 font-display text-2xl text-on-surface">
                {service.title}
              </h3>

              <p className="font-body text-sm leading-relaxed text-on-surface-variant">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}