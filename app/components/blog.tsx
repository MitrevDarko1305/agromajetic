export default function BlogPreviewSection() {
  const posts = [
    {
      title: "Kako izgleda naš svakodnevni rad na farmi",
      excerpt: "Kratak uvid u naš svakodnevni rad na farmi — od brige o stoci i pravilne ishrane, do pripreme svake isporuke sa istom pažnjom, bez obzira na sezonu.",
      image: "/Agromajestic-Images/Majetic-12.jpeg",
      href: "/blog/svakodnevni-rad",
    },
    {
      title: "Put od farme do partnera",
      excerpt: "Koraci koji stoje iza svake pouzdane isporuke — od prvog kontakta do dugoročnog partnerstva izgrađenog na doslednosti.",
      image: "/Agromajestic-Images/golmix-logo.png",
      href: "/blog/od-farme-do-partnera",
    },
    {
      title: "Zašto je dosledan kvalitet ključan u mlečnoj industriji",
      excerpt: "Šta partneri očekuju od pouzdanog dobavljača i kako taj kvalitet obezbeđujemo iz sezone u sezonu, bez kompromisa.",
      image: "/Agromajestic-Images/Majetic-3.jpeg",
      href: "/blog/doslednost-kvaliteta",
    },
  ];

  return (
    <section className="bg-muted py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className=" mb-12">
          <h2 className="text-foreground/50 font-medium leading-7">Iz naše farme</h2>
          <p className="mt-2 text-[32px] font-heading font-extrabold text-foreground">
            Blog
          </p>
         <p className="mt-4 text-base leading-relaxed text-foreground/70 max-w-xl ">
          Kratki uvidi iz našeg svakodnevnog rada — o stoci, procesu i onome što
          stoji iza svake isporuke.
         </p>
        </div>
       

        <div className="grid gap-8 sm:grid-cols-3">
          {posts.map((p) => (
            <a
              key={p.href}
              href={p.href}
              className="group block overflow-hidden bg-surface shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover group-hover:scale-102 transition-transform duration-600"
                />
              </div>
              <div className="p-5">
                <p className="font-heading font-extrabold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                  {p.title}
                </p>
                <p className="text-sm leading-6 text-foreground/60">
                  {p.excerpt}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}