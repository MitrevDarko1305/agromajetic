export default function FounderSectionComplex() {

  return (
    <section className="bg-muted py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid gap-12 lg:grid-cols-2 items-center">
        <div>
          <img
            src="/Agromajestic-Images/Director.jpg"
            alt="Оснивач"
            className=" object-cover w-full h-[520px]"
          />
        </div>

        <div>
          <h2 className="text-foreground/50 font-medium leading-7">
              Iza svake isporuke
          </h2>
          <p className="mt-2 text-[36px] font-heading font-medium mb-6 text-foreground">
             Osnivač
          </p>
          <p className="text-base leading-7 text-foreground/70 mb-4">
            Mesut Majetić je 2016. godine osnovao Agro-Majetić sa ciljem da izgradi farmu na temeljima kvaliteta i poverenja. Ono što je počelo kao mali broj grla, vremenom je preraslo u stabilnu farmu koja opslužuje brojne partnere u mlečnoj industriji.
          </p>
          <p className="text-base leading-7 text-foreground/70 mb-6">
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

