export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-[#030303] text-white px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-3xl mx-auto space-y-8">
        <header className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Impressum
          </h1>
          <p className="text-white/60 text-sm sm:text-base">
            Angaben gemäss § 5 ECG, § 14 UGB und § 63 GewO.
          </p>
        </header>

        <section className="space-y-2 text-white/80 text-sm sm:text-base">
          <h2 className="text-lg font-semibold text-white">Medieninhaberin und Verantwortliche</h2>
          <p>Carlotta Stauber</p>
          <p>Villach, Österreich</p>
          <p>E-Mail: trillian1998@gmail.com</p>
        </section>

        <section className="space-y-2 text-white/80 text-sm sm:text-base">
          <h2 className="text-lg font-semibold text-white">Haftung für Inhalte</h2>
          <p>
            Die Inhalte dieser Website wurden mit grösster Sorgfalt erstellt. Für die Richtigkeit,
            Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.
          </p>
        </section>

        <section className="space-y-2 text-white/80 text-sm sm:text-base">
          <h2 className="text-lg font-semibold text-white">Haftung für Links</h2>
          <p>
            Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte kein Einfluss
            besteht. Daher kann für diese fremden Inhalte keine Gewähr übernommen werden.
          </p>
        </section>

        <section className="space-y-2 text-white/80 text-sm sm:text-base">
          <h2 className="text-lg font-semibold text-white">Urheberrecht</h2>
          <p>
            Die auf dieser Website erstellten Inhalte und Werke unterliegen dem Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen
            des Urheberrechts bedürfen der schriftlichen Zustimmung.
          </p>
        </section>

        <p className="text-xs text-white/50">
          Stand: März 2026
        </p>
      </div>
    </main>
  )
}
