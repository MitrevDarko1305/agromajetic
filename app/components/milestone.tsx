"use client";
import { useLanguage } from "./language-provider";

export default function MilestoneSection() {
  const { t } = useLanguage();

  const milestones = [
    { year: "2016", text: t.milestone.milestone1 },
    { year: "2019", text: t.milestone.milestone2 },
    { year: "2022", text: t.milestone.milestone3 },
    { year: "2026", text: t.milestone.milestone4 },
  ];

  return (
    <section className="bg-surface pt-12 pb-18 sm:py-20" id="timeline">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center sm:mb-20 mb-16">
          <h2 className="text-foreground/50 font-medium leading-7">{t.milestone.kicker}</h2>
          <p className=" text-[32px] sm:text-[40px] font-heading font-extrabold text-foreground">
            {t.milestone.milestone_title1}  <span className="text-primary font-extrabold font-leading">{t.milestone.milestone_title2}</span>
          </p>
        </div>

        <div className="relative border-l-2 border-border pl-8 space-y-14">
          {milestones.map((m) => (
            <div key={m.year} className="relative">
              <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full bg-primary border-4 border-surface" />
              <p className="text-primary font-heading font-extrabold text-2xl mb-1">{m.year}</p>
              <p className="text-foreground/70 leading-7">{m.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}