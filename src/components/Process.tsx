"use client";

const Process = () => {
  const steps = [
    {
      num: "1",
      title: "Dein Coaching passt perfekt zu unserem System",
      desc: "Wir sind spezialisiert auf Gesundheits-, Fitness- und Ernährungscoaches – wir wissen, was funktioniert und welche Kunden wirklich kaufen.",
    },
    {
      num: "2",
      title: "Trage einfach deine Kontaktdaten ein",
      desc: "Name, Telefonnummer und dein Thema reichen völlig – danach übernehmen wir alles Weitere für dich.",
    },
    {
      num: "3",
      title: "Persönlicher Kontakt – ganz unkompliziert",
      desc: "Wir sprechen kurz persönlich und finden in wenigen Minuten heraus, ob unser System zu deinem Coaching passt.",
    },
    {
      num: "4",
      title: "Echte Zahlen statt leere Versprechen",
      desc: "Du erfährst genau, was möglich ist: 20 Leads pro Woche für nur 5,99€ pro Lead. Auf Rechnung. Kein Vertrag - Keine Laufzeit. Du zahlst nur für messbare Ergebnisse.",
    },
  ];

  return (
    <section className="bg-white py-14 px-6">
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto mb-8 lg:mb-12 fade-in delay-1">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F4C29] mb-4 slide-up delay-2">
          So einfach kommst du zu neuen Kunden
        </h2>
        <p className="text-base md:text-lg text-gray-600 slide-up delay-3">
          In nur wenigen Schritten zu echten Interessenten – ohne Werbung, ohne Umwege.
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {steps.map((s, i) => (
          <div
            key={s.num}
            className={`relative bg-white rounded-2xl p-8 text-center 
              border border-[#0F4C29]/10 shadow-[0_8px_30px_rgba(0,0,0,0.05)] 
              hover:shadow-[0_10px_40px_rgba(15,76,41,0.15)] transition-all 
              duration-300 hover:-translate-y-1 ${
                i % 2 === 0 ? "slide-left" : "slide-right"
              } delay-${i + 1}`}
          >
            {/* Step Number Circle */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 bg-[#0F4C29] text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
              {s.num}
            </div>

            {/* Card Content */}
            <h3 className="text-lg font-semibold text-[#0F4C29] mt-8 mb-2 leading-snug">
              {s.title}
            </h3>
            <p className="text-md text-gray-700 leading-relaxed">{s.desc}</p>

            {/* Connector Line */}
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 right-0 translate-x-1/2 w-10 h-[2px] bg-[#0F4C29]/10" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
