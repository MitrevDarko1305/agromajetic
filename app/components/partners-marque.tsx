export default function PartnersMarque() {
  const partners = [
    { name: "Partner 1", logo: "/Agromajestic-Images/partner-1.png" },
    { name: "Partner 2", logo: "/Agromajestic-Images/partner-2.png" },
    { name: "Partner 3", logo: "/Agromajestic-Images/partner-3.png" },
    // add real partner logos here
  ];

  return (
    <section className="bg-surface py-12 overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 text-center mb-8">
        <p className="text-sm text-foreground/50">Поуздани партнери</p>
      </div>

      <div className="relative">
        <div className="flex w-max gap-16 animate-marquee">
          {[...partners, ...partners].map((p, i) => (
            <img
              key={`${p.name}-${i}`}
              src={p.logo}
              alt={p.name}
              className="h-10 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}