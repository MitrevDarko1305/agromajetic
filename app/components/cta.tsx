"use client";
import { useState } from "react";

export default function CTASection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

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

  return (
    <section className="bg-primary py-12 sm:py-20" id="cta">
      <div className="mx-auto max-w-5xl sm:px-6 px-4 lg:px-8 grid gap-12 sm:grid-cols-2 items-center">
        <div>
          <p className="text-[35px] sm:text-[40px] leading-[1.2] font-heading font-extrabold text-white sm:mb-4 mb-10">
            Spremni za pouzdano partnerstvo?
          </p>
          <p className="text-base leading-7 text-white/85 max-w-md">
            Kontaktirajte nas i zajedno ćemo dogovoriti uslove saradnje koji
            odgovaraju vašim potrebama.
          </p>
        </div>

        <div>
          {status === "success" ? (
            <div className="rounded-md bg-white/10 border border-white/20 px-6 py-8 text-center">
              <p className="text-white font-heading text-lg">Poruka poslata! 🎉</p>
              <p className="text-white/70 text-sm mt-2">Javićemo vam se uskoro.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                name="name"
                required
                placeholder="Ime i prezime"
                className="w-full  border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 outline-none focus:border-white/50"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Email adresa"
                className="w-full  border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 outline-none focus:border-white/50"
              />
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Vaša poruka"
                className="w-full  border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 outline-none focus:border-white/50"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full  bg-border px-6 py-3 sm:mt-0 mt-8 text-sm font-extrabold cursor-pointer text-foreground hover:bg-foreground hover:text-border transition-colors duration-200 disabled:opacity-50"
              >
                {status === "loading" ? "Slanje..." : "Pošaljite poruku"}
              </button>

              {status === "error" && (
                <p className="text-white/90 text-xs">Došlo je do greške. Pokušajte ponovo.</p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}