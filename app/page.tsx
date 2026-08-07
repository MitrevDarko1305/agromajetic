import Image from "next/image";
import Navbar from "./components/navbar";
import { HeroFullBackground } from "./components/hero";
import AboutSectionScroll from "./components/about-scroll";
import FounderSectionComplex from "./components/founder-complex";
import VideoSection from "./video-section";
import FAQSection from "./components/faq";
import BlogPreviewSection from "./components/blog";
import CTASection from "./components/cta";
import Footer from "./components/footer";
import { ScrollToTopButton } from "./components/floating-button";





export default async function Page()
  {
  return (
    <>
      <main className="p-0 text-gray-600">
        <Navbar/>
         <HeroFullBackground
        backgroundImage="Agromajestic-Images/Majestic-Hero.jpeg"
        backgroundImageMobile="/Agromajestic-Images/Majestic-Hero.jpeg"
        kicker="Vaš partner u mlecnoj industriji"
        titleBefore="Stoka i Mleko —"
        highlight="Pouzdano"
        titleAfter="Isporučeno"
        description=" Od farme do fabrike — stabilna snabdevačka mreža za mlečnu industriju."
        primaryButton={{ label: "Zatražite ponudu", href: "/book" }}
        secondaryButton={{ label: "Saznajte više", href: "/how-it-works" }}/>
        <AboutSectionScroll />
        <FounderSectionComplex />
        <VideoSection />
        <FAQSection />
        <CTASection />
        <BlogPreviewSection />
        <Footer />
        <ScrollToTopButton/>
      </main>
    </>
  );
}