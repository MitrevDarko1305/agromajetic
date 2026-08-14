"use client"

import Image from "next/image";
import Navbar from "./components/navbar";
import { HeroFullBackground } from "./components/hero";
import AboutSectionScroll from "./components/about-scroll";
import FounderSectionComplex from "./components/founder-complex";
import VideoSection from "./video-section";
import FAQSection from "./components/faq";
import BlogPreviewSection from "./components/blog";
import Footer from "./components/footer";
import { ScrollToTopButton } from "./components/floating-button";
import { useLanguage } from "./components/language-provider";
import CTASectionComplex from "./components/cta-complex";
import MilestoneSection from "./components/milestone";
import SuccessorSectionComplex from "./components/successor-section";


export default function Page()
  {
    const { t } = useLanguage ();
  return (
    <>
      <main className="p-0 text-gray-600">
        <Navbar/>
        <HeroFullBackground
        backgroundImage="Agromajestic-Images/Majestic-Hero.jpeg"
        backgroundImageMobile="/Agromajestic-Images/Majestic-Hero.jpeg"
        kicker={t.hero.kicker}
        titleBefore={t.hero.titleBefore}
        highlight={t.hero.highlight}
        titleAfter={t.hero.titleAfter}
        description={t.hero.description}
        primaryButton={{ label: t.hero.primaryButton, href: "/book" }}
        secondaryButton={{ label: t.hero.secondaryButton, href: "/how-it-works" }}/>
        <AboutSectionScroll />
        <FounderSectionComplex />
        <SuccessorSectionComplex />
        <VideoSection />
        <FAQSection />
        <MilestoneSection />
        <CTASectionComplex />
        <BlogPreviewSection />
        <Footer />
        <ScrollToTopButton/>
      </main>
    </>
  );
}

/* 
 <HeroFullBackground
        backgroundImage="Agromajestic-Images/Majestic-Hero.jpeg"
        backgroundImageMobile="/Agromajestic-Images/Majestic-Hero.jpeg"
        kicker={t.hero.kicker}
        titleBefore={t.hero.titleBefore}
        highlight={t.hero.highlight}
        titleAfter={t.hero.titleAfter}
        description={t.hero.description}
        primaryButton={{ label: t.hero.primaryButton, href: "/book" }}
        secondaryButton={{ label: t.hero.secondaryButton, href: "/how-it-works" }}/>

*/