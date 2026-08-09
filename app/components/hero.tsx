"use client";
import { useState, useEffect } from "react";

type HeroButton = {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
};

type HeroFullBackgroundProps = {
  backgroundImages: string[]; // now an array instead of single string
  backgroundImageMobile?: string;
  kicker?: string;
  titleBefore: string;
  highlight?: string;
  titleAfter: string;
  description?: string;
  primaryButton?: HeroButton;
  secondaryButton?: HeroButton;
};

export function HeroFullBackground({
  backgroundImages,
  backgroundImageMobile,
  kicker,
  titleBefore,
  highlight,
  titleAfter,
  description,
  primaryButton,
  secondaryButton,
}: HeroFullBackgroundProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 6000); // change image every 6s
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const renderButton = (btn?: HeroButton) => {
    if (!btn) return null;
    const base = "p-[12px] cursor-pointer capitalize transition-colors text-sm font-medium";
    const primary = "bg-primary hover:bg-foreground font-extrabold text-white";
    const secondary = "text-white/60 hover:text-white";
    const className = `${base} ${btn.variant === "secondary" ? secondary : primary}`;

    if (btn.href) {
      return <a href={btn.href} className={className}>{btn.label}</a>;
    }
    return <button onClick={btn.onClick} className={className}>{btn.label}</button>;
  };

  return (
    <section className="relative h-[100dvh] md:h-screen">
      <div className="relative h-full flex items-center text-white pr-[5%] pl-[5%]">
        {/* Ken Burns rotating images */}
        {backgroundImages.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1500ms] ease-in-out ${
              i === activeIndex ? "opacity-100 animate-kenburns" : "opacity-0"
            }`}
            style={{ zIndex: i === activeIndex ? 1 : 0 }}
          />
        ))}

        <div className="absolute inset-0 bg-black/40 z-10" />

        <div className="flex z-20 flex-col mt-20">
          {kicker && <div className="text-sm text-white/40 tracking-wide">{kicker}</div>}

          <div className="text-[45px] font-extrabold mb-4 text-white font-heading">
            {titleBefore}
            {highlight && <span className="text-primary"> {highlight} </span>}
            {titleAfter}
          </div>

          {description && (
            <p className="w-full md:max-w-[397px] mb-[40px] text-sm text-white">{description}</p>
          )}

          <div className="flex gap-[16px] font-extrabold">
            {renderButton(primaryButton ? { ...primaryButton, variant: "primary" } : undefined)}
            {renderButton(secondaryButton ? { ...secondaryButton, variant: "secondary" } : undefined)}
          </div>
        </div>
      </div>

      <div id="hero-sentinel" className="absolute bottom-0 left-0 h-px w-full" />
    </section>
  );
}