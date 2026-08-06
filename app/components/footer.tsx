export default function Footer() {
  return (
    <footer className="bg-foreground text-white/70 py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
       <div>
        <p className="font-heading font-extrabold text-xl text-white mb-2">Agro Majetić</p>
        <p className="text-sm leading-6 text-white/60">
         Stoka i mleko, pouzdano isporučeno — od 2016. godine.
        </p>
      </div>

        <div className="text-sm sm:text-right space-y-1">
          <p>info@agromajetic.rs</p>
          <p>+381 XX XXX XXXX</p>
        </div>
      </div>

      <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Agro Majetić. Sva prava zadržana.
      </div>
    </footer>
  );
}