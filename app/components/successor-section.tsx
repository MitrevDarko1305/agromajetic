"use client";
import { useLanguage } from "./language-provider";
export default function SuccessorSectionComplex() {
    const { t } =useLanguage();
    return (
        <section className="bg-muted pt-12 pb-10 sm:pt-12 sm:pb-20" id="successor">
      <div className="mx-auto max-w-6xl md:px-6 px-4 lg:px-8 grid gap-10 lg:grid-cols-2 items-center">
         {/* Right: text */}
        <div>
          <h2 className="text-foreground/50 font-medium leading-7">
            {t.successor.kicker}
          </h2>
          <p className="text-[35px] sm:text-[40px] font-heading font-extrabold sm:mb-10 mb-8 text-foreground">
            {t.successor.successor_title}
          </p>
          <p className="text-base leading-7 text-foreground/70 sm:mb-6 mb-8">
            {t.successor.successor_description1}
          </p>
          <p className="text-base leading-7 text-foreground/70 sm:mb-6 mb-8">
            {t.successor.successor_description2}
          </p>
          <p className="font-heading font-extrabold italic text-foreground text-lg border-l-2 border-primary pl-4">
            {t.successor.quote}
          </p>
        </div>
        {/* Left: big image + small image row below */}
        <div>
          <img
            src="/Agromajestic-Images/Zilhad.png"
            alt="Naslednik"
            className="object-[center_20px] w-full h-[420px]"
          />
 
          <div className="mt-4 grid grid-cols-3 gap-4 sm:grid-cols-4">
            <img
              src="/Agromajestic-Images/Bratanca.png"
              alt="Naslednik na farmi 1"
              className="h-24 w-full object-cover sm:h-28"
            />
            <img
              src="/Agromajestic-Images/Zilhad-2.png"
              alt="Naslednik na farmi 2"
              className="h-24 w-full object-cover sm:h-28"
            />
            <img
              src="/Agromajestic-Images/Bratanca-2.png"
              alt="Naslednik na farmi 3"
              className="h-24 w-full object-cover sm:h-28"
            />
            <img
              src="/Agromajestic-Images/Majetic-Horse.jpeg"
              alt="Naslednik na farmi 4"
              className="hidden h-24 w-full object-cover sm:block sm:h-28"
            />
          </div>
        </div>
      </div>
    </section>
    );
}