"use client";
import { useEffect, useRef, useState } from "react";

export default function AboutSectionScroll() {
  const stats = [
    { value: "2016", label: "Godina osnivanja" },
    { value: "80+", label: "Grla stoke" },
    { value: "4", label: "Parntera u industriji" },
    { value: "10+", label: "Godina iskustva" },
    {value: "98%", label: "Isporuca na vreme"},
    {value: "4", label: "Zaposlenih"},
    {value: "9.000m²", label: "Zemljišta"},
    {value: "30+", label: "Тоvnih bikova"},
  ];

  const images = [
    "/Agromajestic-Images/Majetic-2.jpeg",
    "/Agromajestic-Images/Majetic-3.jpeg",
    "/Agromajestic-Images/Majetic-10.jpeg",
    "/Agromajestic-Images/Majetic-5.jpeg",
    "/Agromajestic-Images/Agro-Majetic-3.png",
    "/Agromajestic-Images/Majetic-6.jpeg",
    "/Agromajestic-Images/Agro-Majetic-1.png",
    
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
    <section className="bg-surface py-16 sm:py-24">
      <div className="mx-auto max-w-7xl md:px-6 px-4 lg:px-8">
        <div className="mx-auto max-w-5xl  text-left mb-12">
          <h2 className="text-foreground/50 font-medium leading-7">Naša priča</h2>
          <p className="mt-2 text-[40px] font-heading font-extrabold font-leading mb-4 text-foreground">
            О <span className="text-primary font-extrabold font-leading">Agro-Majetić</span>
          </p>
          <p className="text-base leading-7 text-foreground/50">
            Od 2016. godine bavimo se uzgojem mlečnih krava i tovnih bikova, gradeći pouzdano partnerstvo sa mlečnom industrijom. Naša farma kombinuje dugogodišnje iskustvo i posvećenost kvalitetu u svakoj fazi rada — od brige o stoci do isporuke krajnjem partneru.
          </p>
          <p className="mt-4 text-base leading-7 text-foreground/50">
          Verujemo da poverenje gradi se vremenom i doslednošću. Zato svaku isporuku tretiramo sa istom pažnjom, bez obzira na količinu ili partnera — to je načelo koje nas vodi od prvog dana.
           </p>
        </div>

        <div className="grid grid-cols-2 gap-12 sm:grid-cols-4 mb-16 border-y border-border py-10">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-[36px] font-heading font-bold text-primary">{s.value}</p>
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
        className="md:h-80 h-50 md:w-100 w-60 flex-shrink-0 object-cover"
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