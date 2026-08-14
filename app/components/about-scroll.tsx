"use client";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "./language-provider";


export default function AboutSectionScroll() {

  const { t } = useLanguage();
  const stats = [
    { value: "2016", label: t.about.year },
    { value: "80+", label: t.about.bulls },
    { value: "4", label: t.about.partners },
    { value: "10+", label: t.about.experience },
    {value: "98%", label: t.about.delivery},
    {value: "4", label: t.about.employees},
    {value: "9.000m²", label: t.about.land},
    {value: "30+", label: t.about.bullsSold},
  ];

  const images = [
    "/Agromajestic-Images/Majetic-2.jpeg",
    "/Agromajestic-Images/Zilhad.png",
    "/Agromajestic-Images/Majetic-3.jpeg",
    "/Agromajestic-Images/Majetic-10.jpeg",
    "/Agromajestic-Images/Majetic-5.jpeg",
    "/Agromajestic-Images/Bratanca-2.png",
    "/Agromajestic-Images/Zilhad-2.png",
    "/Agromajestic-Images/Agro-Majetic-3.png",
    "/Agromajestic-Images/Majetic-6.jpeg",
    "/Agromajestic-Images/Agro-Majetic-1.png",
    "/Agromajestic-Images/Zilhad-Machinery.png",
    "/Agromajestic-Images/Majetic-17.jpeg",
    "/Agromajestic-Images/Majetic-Family.png",
  ];

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const windowH = window.innerHeight;

      // progress: 0 when section enters view, 1 when it leaves
      const progress = Math.min(
        Math.max((windowH - rect.top) / (windowH + rect.height), 0),
        1
      );

      setOffset(progress * -600); // adjust -400 for scroll distance
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="bg-surface py-16 sm:py-24" id="about">
      <div className="mx-auto max-w-7xl md:px-6 px-4 lg:px-8">
        <div className="mx-auto max-w-5xl  text-left mb-12">
          <h2 className="text-foreground/50 font-medium leading-7">{t.about.kicker}</h2>
          <p className="mt-2 text-[35px] sm:text-[40px] font-heading font-extrabold font-leading mb-4 text-foreground">
            {t.about.titleBefore} <span className="text-primary font-extrabold font-leading">{t.about.highlight}</span>
          </p>
          <p className="text-base leading-7 text-foreground/70">
            {t.about.about_paragraph1}
          </p>
          <p className="mt-4 text-base leading-7 text-foreground/70">
            {t.about.about_paragraph2}
           </p>
        </div>

        <div className="grid grid-cols-2 gap-12 sm:grid-cols-4 mb-16 border-y border-border py-10">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-[30px] sm:text-[40px] font-heading font-bold text-primary">{s.value}</p>
              <p className="mt-1 text-sm text-primary">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto scrollbar-hide">
       <div className="flex gap-4 w-max md:px-6 px-4">
        {images.map((src, i) => (
         <img
        key={i}
        src={src}
        alt="Фарма"
        className="md:h-120 h-80 md:w-100 w-60 flex-shrink-0 object-cover"
        />
      ))}
     </div>
    </div>

      {/* Scroll-linked image strip  
      <div ref={sectionRef} className="relative overflow-hidden">
        <div
          className="flex gap-4 w-max transition-transform duration-100 ease-out"
          style={{ transform: `translateX(${offset}px)` }}
        >
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Фарма"
              className="h-68 w-100 flex-shrink-0  object-cover"
            />
          ))}
        </div>
      </div>
      */}
    </section>
  );
}