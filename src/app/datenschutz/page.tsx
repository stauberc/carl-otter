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
          <h2 className="text-lg font-semibold text-white">Server-Logfiles</h2>
          <p>
            Beim Besuch dieser Website koennen technisch notwendige Daten (z. B. IP-Adresse, Datum, Uhrzeit,
            Browsertyp, Betriebssystem, Referrer) automatisch durch den Hosting-Provider erfasst werden.
            Diese Verarbeitung dient der sicheren und fehlerfreien Bereitstellung der Website.
          </p>
        </section>

        <section className="space-y-2 text-white/80 text-sm sm:text-base">
          <h2 className="text-lg font-semibold text-white">Kontakt</h2>
          <p>
            Auf dieser Website werden derzeit keine Formulardaten an einen Server uebermittelt oder in einer
            Datenbank gespeichert. Wenn du mich per E-Mail kontaktierst, verarbeite ich deine Angaben
            ausschliesslich zur Bearbeitung deiner Anfrage.
          </p>
        </section>

        <section className="space-y-2 text-white/80 text-sm sm:text-base">
          <h2 className="text-lg font-semibold text-white">Externe Links und Social Media</h2>
          <p>
            Diese Website enthaelt Verlinkungen zu externen Plattformen (z. B. Instagram, GitLab). Beim Klick
            auf diese Links gelten die Datenschutzbestimmungen der jeweiligen Anbieter.
          </p>
        </section>

        <section className="space-y-2 text-white/80 text-sm sm:text-base">
          <h2 className="text-lg font-semibold text-white">Cookies und Tracking</h2>
          <p>
            Aktuell werden auf dieser Website keine eigenen Analyse- oder Marketing-Tools eingesetzt.
            Es erfolgt kein eigenes Tracking zu Werbezwecken.
          </p>
        </section>

        <section className="space-y-2 text-white/80 text-sm sm:text-base">
          <h2 className="text-lg font-semibold text-white">Speicherdauer</h2>
          <p>
            Personenbezogene Daten werden nur so lange gespeichert, wie es fuer den jeweiligen Zweck
            erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.
          </p>
        </section>

        <section className="space-y-2 text-white/80 text-sm sm:text-base">
          <h2 className="text-lg font-semibold text-white">Deine Rechte</h2>
          <p>
            Du hast grundsaetzlich das Recht auf Auskunft, Berichtigung, Loeschung, Einschraenkung,
            Datenuebertragbarkeit, Widerruf und Widerspruch. Bei Fragen kannst du dich jederzeit per E-Mail
            melden.
          </p>
        </section>

        <p className="text-xs text-white/50">
          Stand: März 2026
        </p>
      </div>
    </main>
  )
}
