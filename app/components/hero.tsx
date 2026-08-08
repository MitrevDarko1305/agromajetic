"use client";

type HeroButton = {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
};

type HeroFullBackgroundProps = {
  backgroundImage: string;
  backgroundImageMobile?: string; // new: optional mobile-specific image
  ResponsiveImageBehavior?: string;
  kicker?: string;
  titleBefore: string;
  highlight?: string;
  titleAfter: string;
  description?: string;
  primaryButton?: HeroButton;
  secondaryButton?: HeroButton;
};

export function HeroFullBackground({
  backgroundImage,
  backgroundImageMobile,
  ResponsiveImageBehavior,
  kicker = "trusted dental clinic",
  titleBefore,
  highlight = "Great Smiles",
  titleAfter,
  description,
  primaryButton,
  secondaryButton,
}: HeroFullBackgroundProps) {
  const bgBehavior =
    ResponsiveImageBehavior ?? "bg-cover bg-center bg-no-repeat md:bg-cover";

  const renderButton = (btn?: HeroButton) => {
    if (!btn) return null;

    const base =
      " p-[12px] cursor-pointer capitalize transition-colors text-sm font-medium";
    const primary = "bg-primary hover:bg-foreground hover:text-border font-extrabold text-white";
    const secondary = "text-white/60 hover:text-white";

    const className = `${base} ${btn.variant === "secondary" ? secondary : primary}`;

    if (btn.href) {
      return (
        <a href={btn.href} className={className}>
          {btn.label}
        </a>
      );
    }

    return (
      <button onClick={btn.onClick} className={className}>
        {btn.label}
      </button>
    );
  };

  return (
    <section className="relative h-[50dvh] sm:h-screen" id="hero">
      <div className={`relative h-full ${bgBehavior} flex items-center text-white pr-[5%] md:pr-[5%] md:pl-[5%] pl-[5%]`}>
        {/* Mobile image */}
        <img
          src={backgroundImageMobile || backgroundImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover md:hidden"
        />
        {/* Desktop image */}
        <img
          src={backgroundImage}
          alt=""
          className="absolute inset-0 hidden h-full w-full object-cover md:block"
        />

        <div className="absolute inset-0 bg-black/40 z-10" />

        <div className="flex z-20 flex-col mt-10">
          {kicker && (
            <div className="text-sm text-white/40 hidden md:block tracking-wide">{kicker}</div>
          )}

          <div className="md:text-[45px] text-[30px] font-extrabold mb-4 text-white leading-[1.3] md:leading-relaxed font-heading">
            {titleBefore}
            {highlight && <span className="text-primary"> {highlight} </span>}
            {titleAfter}
          </div>

          {description && (
            <p className="w-full md:max-w-[397px] md:mb-[40px] mb-[30px] text-sm text-white ">
              {description}
            </p>
          )}

          <div className="flex gap-[16px] font-extrabold">
            {renderButton(
              primaryButton ? { ...primaryButton, variant: "primary" } : undefined
            )}
            {renderButton(
              secondaryButton ? { ...secondaryButton, variant: "secondary" } : undefined
            )}
          </div>
        </div>
      </div>

      {/* KEEP THIS — Navbar relies on it */}
      <div id="hero-sentinel" className="absolute bottom-0 left-0 h-px w-full" />
    </section>
  );
}