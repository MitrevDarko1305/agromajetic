"use client"

import { useLanguage } from "./language-provider";

export default function FounderSectionComplex() {
  const { t } = useLanguage();
  return (
    <section className="bg-muted pt-16 pb-10 sm:py-24" id="founder">
      <div className="mx-auto max-w-7xl md:px-6 px-4 lg:px-8 grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <img
            src="/Agromajestic-Images/Majetic-Founder.jpeg"
            alt="Оснивач"
            className=" object-[center_20px] w-full h-[420px]"
          />
        </div>

        <div>
          <h2 className="text-foreground/50 font-medium leading-7">
              {t.founder.kicker}
          </h2>
          <p className="text-[35px] sm:text-[40px] font-heading font-extrabold  sm:mb-10 mb-8 text-foreground">
             {t.founder.founder_title}
          </p>
          <p className="text-base leading-7 text-foreground/70 sm:mb-6 mb-8 ">
             {t.founder.founder_description1}
          </p>
          <p className="text-base leading-7 text-foreground/70 sm:mb-6 mb-8">
             {t.founder.founder_description2}
          </p>
          <p className="font-heading font-extrabold italic text-foreground text-lg border-l-2 border-primary pl-4">
             {t.founder.quote}
          </p>
        </div>
      </div>
    </section>
  );
}

