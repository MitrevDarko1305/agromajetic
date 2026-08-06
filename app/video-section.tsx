"use client";
import { useState, useRef } from "react";
import { Play } from "lucide-react";

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const partners = [
    { name: "Partner 1", logo: "/Agromajestic-Images/golmix-logo.png" },
    { name: "Partner 2", logo: "/Agromajestic-Images/pioneer-logo.png" },
  ];

  const galleryImages = [
    "/Agromajestic-Images/Agro-Majetic-3.png",
    "/Agromajestic-Images/Majetic-12.jpeg",
    "/Agromajestic-Images/Agro-Majetic-1.png",
    "/Agromajestic-Images/Majetic-11.jpeg",
    "/Agromajestic-Images/Majetic-10.jpeg",
    "/Agromajestic-Images/Majestic-Hero.jpeg",
    "/Agromajestic-Images/Majetic-13.jpeg",
    "/Agromajestic-Images/Majetic-14.jpeg",
  ];

  const handlePlay = () => {
    setPlaying(true);
    videoRef.current?.play();
  };

  return (
    <section className="bg-muted pt-4 pb-16 sm:py-24 space-y-20">
      <div className="mx-auto max-w-7xl md:px-6 px-4 lg:px-8">
        {/* Image grid left, text right */}
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="grid sm:grid-cols-4 gap-3 mb-8 e sm:mb-0">
            {galleryImages.map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Фарма"
                className="h-50 sm:h-44 w-full object-cover"
              />
            ))}
          </div>

          <div>
            <h2 className="text-foreground/50 font-medium leading-7">
              Svakodnevni rad 
            </h2>
            <p className="mt-2 text-[40px] font-heading font-heading font-extrabold mb-4 text-foreground">
              Život na <span className="text-primary">farmi</span>
            </p>
            <p className="text-base leading-7 text-foreground/70">
             Svakoga dana brinemo o stoci, održavamo prostor i pratimo kvalitet — isti standard, bez obzira na godišnje doba ili količinu posla. Svaka faza rada, od ishrane do nege životinja, prati se pažljivo kako bi rezultat uvek bio dosledan i pouzdan.
            </p>
          </div>
        </div>

        {/* Video left, text right */}
<div className="grid gap-10 lg:grid-cols-2 items-center mt-20">

  <div>
    <h2 className="text-foreground/50 font-medium leading-7">
      Pogledajte našu farmu
    </h2>
    <p className="mt-2 text-[40px] font-heading font-extrabold mb-4 text-foreground">
      Farma u <span className="text-primary">pokretu</span>
    </p>
    <p className="text-base leading-7 text-foreground/70 mb-8">
     Kratak uvid u naš svakodnevni rad — od brige o stoci do pripreme za isporuku. Svaka isporuka prolazi kroz isti proces pažnje i kontrole, bez obzira na sezonu ili količinu, kako bismo našim partnerima omogućili dosledan kvalitet na koji mogu da računaju.
    </p>

    <div className="flex items-center gap-8">
      {partners.map((p) => (
        <img
          key={p.name}
          src={p.logo}
          alt={p.name}
          className="h-9 object-contain opacity-80 hover:opacity-100 transition-opacity"
        />
      ))}
    </div>
  </div>

   <div className="relative rounded-lg overflow-hidden aspect-video bg-black">
    <video
      ref={videoRef}
      src="/Agromajestic-Images/farm-video-1.mp4"
      controls={playing}
      playsInline
      className="h-full w-full object-cover"
    />
    {!playing && (
      <button
        onClick={handlePlay}
        className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors"
      >
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white shadow-lg">
          <Play size={28} fill="white" />
        </span>
      </button>
    )}
  </div>
</div>
      </div>
    </section>
  );
}