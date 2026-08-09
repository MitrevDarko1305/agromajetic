"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "./language-provider";

export default function FAQSection() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    
    {question: t.faq.question1, answer:t.faq.answer1},
    {question: t.faq.question2, answer:t.faq.answer2},
    {question: t.faq.question3, answer:t.faq.answer3},
    {question: t.faq.question4, answer:t.faq.answer4},
    {question: t.faq.question5, answer:t.faq.answer5},
    {question: t.faq.question6, answer:t.faq.answer6},
    {question: t.faq.question7, answer:t.faq.answer7},
  ];

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="bg-border pt-16 pb-8 sm:py-24" id="faq">
      <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-20">
          <h2 className="text-foreground/50 font-medium leading-7">
            {t.faq.kicker}
          </h2>
          <p className="sm:mt-2 mt-0 sm:text-[40px] text-[35px] leading-[1.4] font-heading font-extrabold text-foreground">
            {t.faq.faq_title1} <span className="text-foreground">{t.faq.faq_title2}</span>
          </p>
        </div>

        <div className="divide-y divide-border sm:mt-0">
          {faqs.map((faq, i) => (
            <div key={i} className="sm:py-10 py-10">
              <button
                onClick={() => toggle(i)}
                className="flex w-full items-center justify-between text-left"
              >
                <span className="font-heading font-extrabold cursor-pointer text-lg text-foreground">
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-foreground flex-shrink-0 cursor-pointer transition-transform duration-200 ${
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