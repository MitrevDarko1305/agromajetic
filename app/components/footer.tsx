"use client";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-white/70 py-10" id="footer">
      <div className="mx-auto text-center sm:text-start max-w-7xl px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div className="mb-8 sm:mb-0">
          <p className="font-heading font-extrabold text-[25px] md:text-[25px] text-white mb-2">Agro Majetić</p>
          <p className="text-sm leading-6 text-white/60">
            Stoka i mleko, pouzdano isporučeno — od 2016. godine.
          </p>
        </div>

        <div className="text-sm sm:text-right space-y-1">
          <p>+387 62 414 256</p>
          <a
           href="mailto:info@agromajetic.rs"
           className="hover:text-primary transition-colors"
          >
          Mirzetmicunmajetic@gmail.com
          </a>
        </div>
      </div>

      <div className="mt-6 border-t border-white/10 pt-6">
        <div className=" mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-center sm:justify-between">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Agro Majetić. Sva prava zadržana.
          </p>
        </div>
      </div>
    </footer>
  );
}