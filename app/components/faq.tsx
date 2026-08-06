"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Koje regione pokrivate isporukom?",
      answer:
        "Isporučujemo mleko i stoku partnerima širom regiona, uz mogućnost dogovora za veće udaljenosti u zavisnosti od količine i učestalosti isporuke.",
    },
    {
      question: "Da li postoji minimalna količina za saradnju?",
      answer:
        "Minimalna količina zavisi od vrste saradnje — kontaktirajte nas i zajedno ćemo definisati uslove koji odgovaraju vašim potrebama.",
    },
    {
      question: "Kako izgleda proces uspostavljanja partnerstva?",
      answer:
        "Nakon prvog kontakta, dogovaramo posetu farmi ili razmenu uzoraka, a zatim definišemo uslove isporuke i saradnje pre potpisivanja dogovora.",
    },
    {
      question: "Da li imate stalne zalihe tokom cele godine?",
      answer:
        "Da, farma radi kontinuirano tokom cele godine, uz isti standard kvaliteta bez obzira na sezonu.",
    },
    {
      question: "Kakvi su uslovi kvaliteta i nege životinja na farmi?",
      answer:
        "Svakodnevno pratimo zdravlje i ishranu stoke, uz redovne kontrole kako bismo obezbedili dosledan kvalitet mleka i stoke.",
    },
    {
      question: "Da li je moguća dugoročna saradnja?",
      answer:
        "Apsolutno — većina naših partnerstava je izgrađena na dugoročnoj osnovi, uz poverenje i doslednu isporuku.",
    },
    {
      question: "Kako mogu da zatražim ponudu?",
      answer:
        "Dovoljno je da nas kontaktirate putem forme ili telefona — odgovaramo brzo i dogovaramo sledeće korake direktno sa vama.",
    },
  ];

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="bg-surface pt-20 pb-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-foreground/50 font-medium leading-7">
            Pitanja i odgovori
          </h2>
          <p className="mt-2 text-[40px] leading-[1.5] font-heading font-extrabold text-foreground">
            Često postavljana <span className="text-primary">pitanja</span>
          </p>
        </div>

        <div className="divide-y divide-border sm:mt-0 mt-12">
          {faqs.map((faq, i) => (
            <div key={i} className="py-5">
              <button
                onClick={() => toggle(i)}
                className="flex w-full items-center justify-between text-left"
              >
                <span className="font-heading font-extrabold cursor-pointer text-lg text-foreground">
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-primary flex-shrink-0 cursor-pointer transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === i
                    ? "grid-rows-[1fr] opacity-100 mt-3"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-sm sm:leading-7 leading-6 text-foreground/70">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}