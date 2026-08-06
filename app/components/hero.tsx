"use client";

type HeroButton = {
  label: string;
  href?: string; // use if you navigate
  onClick?: () => void; // use if you trigger modal/scroll
  variant?: "primary" | "secondary";
};

type HeroFullBackgroundProps = {
  backgroundImage: string;
  ResponsiveImageBehavior?: string
  kicker?: string;
  titleBefore: string;
  highlight?: string; // optional highlighted word/phrase
  titleAfter:string;
  description?: string;
  primaryButton?: HeroButton;
  secondaryButton?: HeroButton;

};

export function HeroFullBackground({
  backgroundImage,
  ResponsiveImageBehavior,
  kicker = "trusted dental clinic",
  titleBefore,
  highlight = "Great Smiles",
  titleAfter,
  description,
  primaryButton,
  secondaryButton,
}: HeroFullBackgroundProps) {
  const bgBehavior= 
  ResponsiveImageBehavior??
  "bg-cover bg-center bg-no-repeat md:bg-cover";


  const renderButton = (btn?: HeroButton) => {
    if (!btn) return null;

    const base =
      " p-[12px] cursor-pointer capitalise transition-colors text-sm font-medium";
    const primary =
      "bg-primary hover:bg-foreground font-extrabold text-white";
    const secondary =
      "text-white/60 hover:text-white";

    const className =
      `${base} ${btn.variant === "secondary" ? secondary : primary}`;

    // Link button
    if (btn.href) {
      return (
        <a href={btn.href} className={className}>
          {btn.label}
        </a>
      );
    }

    // Action button
    return (
      <button onClick={btn.onClick} className={className}>
        {btn.label}
      </button>
    );
  };

  return (
    <section className="relative h-screen">
      <div
        className={`relative h-full ${bgBehavior}  flex items-center text-white pr-[5%] md:pr-[5%] md:pl-[5%] pl-[5%]`}
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        <div className="absolute inset-0 bg-black/40 z-10" />

        <div className="flex z-20 flex-col mt-20">
          {kicker && (
            <div className="text-sm text-white/40 tracking-wide">
              {kicker}
            </div>
          )}

          <div className="text-[45px] font-extrabold mb-4 text-white font-heading">
          {titleBefore}
        {highlight && (
          <span className="text-primary"> {highlight} </span>
        )}
        {titleAfter}
        </div>


          {description && (
            <p className=" w-full md:max-w-[397px] mb-[40px] text-sm text-white">
              {description}
            </p>
          )}

          <div className="flex gap-[16px] font-extrabold ">
            {renderButton(
              primaryButton
                ? { ...primaryButton, variant: "primary" }
                : undefined
            )}
            {renderButton(
              secondaryButton
                ? { ...secondaryButton, variant: "secondary" }
                : undefined
            )}
          </div>
        </div>
      </div>

      {/* KEEP THIS — Navbar relies on it */}
      <div id="hero-sentinel" className="absolute bottom-0 left-0 h-px w-full" />
    </section>
  );
}

