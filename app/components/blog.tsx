import { useLanguage } from "./language-provider";

export default function BlogPreviewSection() {
  const { t } = useLanguage();
  const posts = [
    {
      title: t.blog.blog1_title,
      excerpt: t.blog.blog1_description,
      image: "/Agromajestic-Images/Majetic-12.jpeg",
      href: "/blog/svakodnevni-rad",
    },
    {
      title: t.blog.blog2_title,
      excerpt: t.blog.blog2_description,
      image: "/Agromajestic-Images/golmix-logo.png",
      href: "/blog/od-farme-do-partnera",
    },
    {
      title: t.blog.blog3_title,
      excerpt: t.blog.blog3_description,
      image: "/Agromajestic-Images/Majetic-3.jpeg",
      href: "/blog/doslednost-kvaliteta",
    },
  ];

  return (
    <section className="bg-border py-16 sm:py-24" id="blog">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:mb-12 mb-12">
          <h2 className="text-foreground/50 font-medium leading-7">{t.blog.kicker}</h2>
          <p className="sm:mt-2 mt-0 text-[32px] font-heading font-extrabold text-foreground">
            {t.blog.blog_title}
          </p>
          <p className="sm:mt-4 mt-6 text-base leading-relaxed text-foreground/70 max-w-xl">
            {t.blog.blog_description}
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