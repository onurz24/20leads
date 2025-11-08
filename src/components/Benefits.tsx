"use client";

const Benefits = () => {
  const benefits = [
    {
      name: "flame",
      title: "Heisse, echte Leads in 48 Stunden",
      desc: "Erhalte qualifizierte Kontakte, die aktiv nach Gesundheits- oder Fitnesscoaching suchen.",
    },
    {
      name: "no-budget",
      title: "Kein Werbebudget nötig",
      desc: "Wir übernehmen die Leadgenerierung – du zahlst nur den festen Preis pro Lead.",
    },
    {
      name: "meta",
      title: "Transparente Daten & echte Nachweise",
      desc: "Mit offizieller Meta-Liste siehst du genau, woher deine Leads kommen.",
    },
    {
      name: "qualifiziert",
      title: "Leads sind vorqualifiziert",
      desc: "Du bestimmst selbst, welche Fragen gestellt werden – oder verlässt dich auf unsere erprobten Funnel-Fragen.",
    },
    {
      name: "monatsschritte",
      title: "Flexible Zusammenarbeit in Monatsschritten",
      desc: "Keine langfristigen Verträge, du entscheidest jeden Monat neu.",
    },
    {
      name: "coach",
      title: "Von Coaches für Coaches",
      desc: "Wir kennen die Fitness- und Gesundheitsbranche genau und liefern Leads, die wirklich zu deinem Angebot passen.",
    },
  ];

  return (
    <section className="bg-[rgb(245,245,247)] py-14 px-6">
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto mb-8 lg:mb-12 fade-in delay-1">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F4C29] mb-4 slide-up delay-2">
          Warum Coaches mit uns skalieren
        </h2>
        <p className="text-base md:text-lg text-gray-600 slide-up delay-3">
          Wir liefern dir keine kalten Kontakte – sondern qualifizierte Interessenten,
          die bereit sind, mit dir zu sprechen.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {benefits.map((b, i) => (
          <div
            key={i}
            className={`group relative bg-white rounded-2xl p-5 flex flex-col items-center text-center shadow-[0_6px_25px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_35px_rgba(15,76,41,0.15)] transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-[#0F4C29]/10 slide-up delay-${i + 2}`}
          >
            <div className="relative w-56 h-56 mb-4 scale-in delay-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0F4C29]/10 to-transparent rounded-full blur-lg scale-125 group-hover:opacity-70 transition" />

              {/* ✅ WebP mit PNG-Fallback */}
              <picture>
                <source
                  srcSet={`/images/webp/${b.name}.webp`}
                  type="image/webp"
                />
                <source
                  srcSet={`/images/png/${b.name}.png`}
                  type="image/png"
                />
                <img
                  src={`/images/png/${b.name}.png`}
                  alt={b.title}
                  loading="lazy"
                  className="relative w-full h-full object-contain drop-shadow-md rounded-full aspect-auto bg-green-900/5"
                />
              </picture>
            </div>

            <h3 className="text-lg font-semibold text-[#0F4C29] mb-2 leading-snug">
              {b.title}
            </h3>
            <p className="text-gray-700 text-md leading-relaxed">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
