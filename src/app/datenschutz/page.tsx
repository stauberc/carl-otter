export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-[#030303] text-white px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-3xl mx-auto space-y-8">
        <header className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Datenschutzerklärung
          </h1>
          <p className="text-white/60 text-sm sm:text-base">
            Informationen über die Verarbeitung personenbezogener Daten auf dieser Website.
          </p>
        </header>

        <section className="space-y-2 text-white/80 text-sm sm:text-base">
          <h2 className="text-lg font-semibold text-white">Verantwortliche</h2>
          <p>Carlotta Stauber</p>
          <p>Villach, Österreich</p>
          <p>E-Mail: trillian1998@gmail.com</p>
        </section>

        <section className="space-y-2 text-white/80 text-sm sm:text-base">
          <h2 className="text-lg font-semibold text-white">Hosting und Domain</h2>
          <p>
            Diese Website wird auf einem eigenen virtuellen Server (VPS) bei der{" "}
            <strong>Hetzner Online GmbH</strong> betrieben. Die Domain ist bei{" "}
            <strong>GoDaddy</strong> registriert, die technische Auslieferung der Seite erfolgt über den
            VPS bei Hetzner. Für die Verarbeitung personenbezogener Daten durch Hetzner bzw. GoDaddy gelten
            deren jeweilige Datenschutzhinweise.
          </p>
        </section>

        <section className="space-y-2 text-white/80 text-sm sm:text-base">
          <h2 className="text-lg font-semibold text-white">Server-Logfiles</h2>
          <p>
            Beim Aufruf dieser Website werden auf dem VPS automatisch technisch notwendige Daten erfasst
            (z. B. IP-Adresse, Datum/Uhrzeit, Browsertyp, Betriebssystem, Referrer-URL). Das dient der
            sicheren und stabilen Bereitstellung der Website. Es werden keine Analyse- oder
            Marketing-Tools eingesetzt und keine Besucherprofile erstellt.
          </p>
        </section>

        <section className="space-y-2 text-white/80 text-sm sm:text-base">
          <h2 className="text-lg font-semibold text-white">Kontakt</h2>
          <p>
            Auf dieser Website werden keine Formulardaten an einen Server gesendet und keine Daten in einer
            Datenbank gespeichert. Es findet kein aktives Sammeln personenbezogener Nutzungsdaten über die
            Website statt.
            Wenn Sie mich per E-Mail kontaktieren, verarbeite ich Ihre Angaben nur zur Bearbeitung Ihrer
            Anfrage und zur Kommunikation.
          </p>
        </section>

        <section className="space-y-2 text-white/80 text-sm sm:text-base">
          <h2 className="text-lg font-semibold text-white">Externe Links und Social Media</h2>
          <p>
            Diese Website enthält Verlinkungen zu externen Plattformen (z. B. Instagram, GitHub).
            Beim Klick auf diese Links verlassen Sie diese Website, es gelten dann die
            Datenschutzbestimmungen der jeweiligen Anbieter.
          </p>
        </section>

        <section className="space-y-2 text-white/80 text-sm sm:text-base">
          <h2 className="text-lg font-semibold text-white">Cookies und Tracking</h2>
          <p>
            Es werden keine Cookies zu Werbe- oder Analysezwecken gesetzt.{" "}
            <strong>Google Analytics</strong> ist nicht eingebunden. Es erfolgt kein Tracking zu
            Werbezwecken.
          </p>
        </section>

        <section className="space-y-2 text-white/80 text-sm sm:text-base">
          <h2 className="text-lg font-semibold text-white">Speicherdauer</h2>
          <p>
            Personenbezogene Daten werden nur so lange gespeichert, wie es für den jeweiligen Zweck
            erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.
          </p>
        </section>

        <section className="space-y-2 text-white/80 text-sm sm:text-base">
          <h2 className="text-lg font-semibold text-white">Ihre Rechte</h2>
          <p>
            Sie haben grundsätzlich das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung,
            Datenübertragbarkeit, Widerruf und Widerspruch. Bei Fragen können Siesich jederzeit per E-Mail
            melden.
          </p>
        </section>

        <section className="space-y-2 text-white/80 text-sm sm:text-base">
          <h2 className="text-lg font-semibold text-white">Beschwerderecht</h2>
          <p>
            Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer Daten gegen Datenschutzrecht verstoßen,
            können Sie sich bei der zuständigen Datenschutzbehörde beschweren.
          </p>
        </section>

        <p className="text-xs text-white/50">
          Stand: März 2026
        </p>
      </div>
    </main>
  )
}
