export default function FounderSectionComplex() {

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
              Iza svake isporuke
          </h2>
          <p className="text-[35px] sm:text-[40px] font-heading font-extrabold  sm:mb-10 mb-8 text-foreground">
             Osnivač
          </p>
          <p className="text-base leading-7 text-foreground/70 sm:mb-6 mb-8 ">
            Mesud Majetić je 2016. godine osnovao Agro-Majetić sa ciljem da izgradi farmu na temeljima kvaliteta i poverenja. Ono što je počelo kao mali broj grla, vremenom je preraslo u stabilnu farmu koja opslužuje brojne partnere u mlečnoj industriji.
          </p>
          <p className="text-base leading-7 text-foreground/70 sm:mb-6 mb-8">
            Svakodnevni rad na farmi — briga o stoci, planiranje isporuka, saradnja sa partnerima — vodi lično, uz uverenje da poslovni uspeh počiva na direktnom odnosu i pouzdanosti, a ne samo na brojkama.
          </p>
          <p className="font-heading font-extrabold italic text-primary text-lg border-l-2 border-primary pl-4">
             „Svaka isporuka nosi naš potpis — i naše ime stoji iza nje."
          </p>
        </div>
      </div>
    </section>
  );
}

