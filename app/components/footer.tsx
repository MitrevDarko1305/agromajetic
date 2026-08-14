"use client";

import { useLanguage } from "./language-provider";

export default function Footer() {
  const { t }= useLanguage();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-white/70 dark:text-black py-10" id="footer">
      <div className="mx-auto text-center sm:text-start max-w-7xl px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div className="mb-6 sm:mb-0">
          <p className="font-heading font-extrabold text-[25px] md:text-[25px] text-border mb-2">{t.footer.footer_logo }</p>
          <p className="text-sm leading-6 text-border">
            {t.footer.footer_description}
          </p>
        </div>

        <div className="text-sm  text-border sm:text-right space-y-1">
          <p>+387 62 414 256</p>
          <div className="flex flex-col gap-2">
          <a
           href="mailto:info@agromajetic.rs"
           className="hover:text-primary transition-colors"
          >
          Mirzetmicunmajetic@gmail.com
          </a>
           <a
           href="mailto:info@agromajetic.rs"
           className="hover:text-primary transition-colors"
          >
          Majeticzilhad4@gmail.com
          </a>
          </div>
        </div>
      </div>

      <div className="mt-6 border-t border-white/10 pt-6">
        <div className=" mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-center sm:justify-between">
          <p className="text-xs text-border">
            © {new Date().getFullYear()} {t.footer.footer_rights}
          </p>
        </div>
      </div>
    </footer>
  );
}