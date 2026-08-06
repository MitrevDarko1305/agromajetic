import type { Metadata } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Agromajetic — Pouzdan partner u mlečnoj industriji",
  description: "Agro-Majetić — pouzdan partner u mlečnoj industriji. Uzgoj mlečnih krava i tovnih bikova od 2016. godine.",
  authors: [{name: "Mesut Majetić"}],
  robots: "Index, follow",

  openGraph: {
    title: "Agro Majetić — Pouzdan partner u mlečnoj industriji",
    description: "Uzgoj mlečnih krava i tovnih bikova od 2016. godine. Stoka i mleko, pouzdano isporučeno.",
    url: "https://agromajetic.mitrevdarko.dev", // zameni sa pravim domenom kada bude spreman
    siteName: "Agro Majetić",
    locale: "sr_RS",
    type: "website",
    images: [
      {
        url: "https://agromajetic.rs/Agromajestic-Images/Open-Graph.png",
        width: 1200,
        height: 630,
        alt: "Agro Majetić — farma",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Agro Majetić — Pouzdan partner u mlečnoj industriji",
    description: "Uzgoj mlečnih krava i tovnih bikova od 2016. godine.",
    images: ["https://agromajetic.rs/Agromajestic-Images/Open-Graph.png"],
  },

  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${workSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
