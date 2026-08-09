"use client";
import { useState } from "react";
import { useLanguage } from "./language-provider";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false });

export default function CTASectionComplex() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  // TODO: swap with real farm coordinates from Mesut
  const farmCoords: [number, number] = [44.9224, 15.9595]; // Bosanska Gradiska 

  return (
    <section className="bg-primary py-12 sm:py-28" id="cta">
      <div className="mx-auto max-w-6xl sm:px-6 px-4 lg:px-8 grid gap-12 lg:grid-cols-2 items-start">
        {/* Left: text + form */}
        <div>
          <p className="text-[35px] sm:text-[40px] leading-[1.2] font-heading font-extrabold text-white sm:mb-4 mb-6">
            {t.cta.kicker}
          </p>
          <p className="text-base leading-7 text-white/85 max-w-md mb-8">
            {t.cta.cta_title}
          </p>

          {status === "success" ? (
            <div className="rounded-md bg-white/10 border border-white/20 px-6 py-8 text-center">
              <p className="text-white font-heading text-lg">{t.cta.success_title}</p>
              <p className="text-white/70 text-sm mt-2">{t.cta.success_desc}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                name="name"
                required
                placeholder={t.cta.name_placeholder}
                className="w-full border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 outline-none focus:border-white/50"
              />
              <input
                type="email"
                name="email"
                required
                placeholder={t.cta.email_placeholder}
                className="w-full border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 outline-none focus:border-white/50"
              />
              <textarea
                name="message"
                required
                rows={4}
                placeholder={t.cta.message_placeholder}
                className="w-full border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 outline-none focus:border-white/50"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-border px-6 py-3 sm:mt-0 mt-8 text-sm font-extrabold cursor-pointer text-foreground hover:bg-foreground hover:text-border transition-colors duration-200 disabled:opacity-50"
              >
                {status === "loading" ? t.cta.sending : t.cta.send_button}
              </button>

              {status === "error" && (
                <p className="text-white/90 text-xs">{t.cta.error_message}</p>
              )}
            </form>
          )}
        </div>

        {/* Right: map */}
        <div className="h-[400px] lg:h-full min-h-[400px] rounded-md overflow-hidden border border-white/20">
          <MapContainer
            center={farmCoords}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: "100%", width: "100%" }}
          >
           <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; OpenStreetMap contributors'
            />
            <Marker position={farmCoords} icon={customIcon}/>
          </MapContainer>
        </div>
      </div>
    </section>
  );
}