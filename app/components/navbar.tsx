"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // optional: prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const navLink =
    "cursor-pointer relative text-sm tracking-wide text-primary hover:text-primary-hover"

  const links = [
    { href: "/", label: "Početna" },
    { href: "/services", label: "Usluge" },
    { href: "/about", label: "O nama" },
    { href: "/faq", label: "Često postavljana pitanja"},
    { href: "/appointment", label: "Zakazivanje" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <header className="bg-background sticky top-0 z-999 shadow-sm relative">
      <div className="px-[20px] py-[20px] flex justify-between items-center tracking-wide transition-all duration-300">
       
       <Link
        href="/#hero"
        className={[
        "text-[25px] text-primary font-extrabold hover:text-foreground tracking-tight transition-colors duration-300 font-heading",
        ].join(" ")}
      >
       Agro Majetic{" "}
        <span className="text-transparent hover:text-foreground">.</span>
       </Link>

        {/* Desktop nav */}
        <ul className="hidden bg-[#F2b2b2b]/80 backdrop-blur lg:flex items-center gap-[45px]">
          {links.map((l) => (
            <li key={l.href} className={navLink}>
              <Link href={l.href}>{l.label}</Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="inline-flex font-bold items-center justify-center px-4 py-2 bg-primary  text-sm tracking-wide text-white hover:bg-foreground transition-colors duration-200"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="lg:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-black/5 transition"
        >
          {/* simple icon */}
          <span className="sr-only">Toggle menu</span>
          <div className="relative h-5 w-6">
            <span
              className={[
                "absolute left-0 top-0 h-[2px] w-6 bg-foreground transition-transform duration-200",
                mobileOpen ? "translate-y-[9px] rotate-45" : "",
              ].join(" ")}
            />
            <span
              className={[
                "absolute left-0 top-[9px] h-[2px] w-6 bg-foreground transition-opacity duration-200",
                mobileOpen ? "opacity-0" : "opacity-100",
              ].join(" ")}
            />
            <span
              className={[
                "absolute left-0 top-[18px] h-[2px] w-6 bg-foreground transition-transform duration-200",
                mobileOpen ? "-translate-y-[9px] -rotate-45" : "",
              ].join(" ")}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
       className={`lg:hidden z-50 grid transition-all duration-300 ease-out ${
       mobileOpen
      ? "grid-rows-[1fr] opacity-100"
      : "grid-rows-[0fr] opacity-0 pointer-events-none"
     }`}
   >
     <div className="overflow-hidden">
       <div className="px-[20px] pb-[18px] pt-[6px] border-t border-black/10 bg-white">
        <nav className="flex flex-col gap-4">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="text-sm tracking-wide text-foreground/80 hover:text-primary"
            onClick={() => setMobileOpen(false)}
          >
            {l.label}
          </Link>
        ))}

        <Link
          href="/contact"
          className="mt-2 inline-flex items-center justify-center px-4 py-2 bg-primary rounded-lg text-sm tracking-wide text-white hover:bg-foreground transition-colors duration-200"
          onClick={() => setMobileOpen(false)}
        >
          Contact
        </Link>
      </nav>
    </div>
  </div>
</div>

      {/* Optional overlay (click to close) */}
      {mobileOpen && (
        <button
          aria-label="Close menu overlay"
          className="lg:hidden z-40  bg-black/20"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </header>
  );
}
