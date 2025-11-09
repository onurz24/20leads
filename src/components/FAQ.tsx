"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; // falls du shadcn generiert hast

const FAQ = () => {
  const faqs = [
    {
      q: "Kann ich auch mehr oder weniger Leads erhalten?",
      a: "Ja, natürlich! Wir richten uns ganz nach deinem Bedarf – von 20 bis 200 Leads ist alles möglich. Du bestimmst, wie viel Power dein Funnel haben soll.",
    },
    {
      q: "Wie schnell bekomme ich die ersten Leads?",
      a: "Sobald wir alle deine Infos haben, benötigen wir 3 Tage Vorbereitungszeit für den Kampagnenstart. Danach erhältst du innerhalb von 48 Stunden die ersten heißen Leads – schnell, transparent und verlässlich.",
    },
    {
      q: "Muss ich ein Werbebudget einplanen?",
      a: "Nein! Du brauchst kein eigenes Werbebudget. Wir übernehmen die komplette Leadgenerierung – du zahlst nur den festen Preis pro Lead. Dieser liegt (Stand November 2025) bei 5,99 € netto pro Lead.",
    },
    {
      q: "Kann ich die Fragen der Vorqualifizierung selbst bestimmen?",
      a: "Generell ja – außer, wenn bestimmte Fragen den Funnel negativ beeinflussen würden. Bewährt haben sich z. B. Fragen wie: Wann möchtest du starten? Wie viele Kilo möchtest du verlieren? Was war bisher dein größtes Hindernis?",
    },
    {
      q: "Wie erhalte ich meine Leads?",
      a: "Die Leads kommen geordnet in Tabellenform mit Name, Telefonnummer und den Antworten auf die Vorqualifizierungsfragen. Du kannst sie entweder als originale Meta-CSV-Datei oder als übersichtlich aufbereitete Tabelle erhalten – ganz wie du möchtest.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-14" id="FAQ">

              <h2 className="text-4xl md:text-5xl text-center font-extrabold text-[#0F4C29] mb-12 slide-up delay-2">
          Häufig gestellte Fragen
        </h2>

      <Accordion type="single" collapsible className="space-y-4 slide-up delay-2">
        {faqs.map((f, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="border-none rounded-xl bg-gradient-to-br from-[#0F4C29] via-green-950 to-[#1a7a42] text-white shadow-lg hover:shadow-[0_0_20px_rgba(167,255,176,0.2)] transition-all"
          >
            <AccordionTrigger className="px-6 py-5 text-left text-lg font-semibold  hover:bg-[#0d3d21]/70 rounded-t-xl transition-colors cursor-pointer">
              <div className="flex w-full items-center justify-between">
                <span>{f.q}</span>
              </div>
            </AccordionTrigger>

            <AccordionContent className="px-6 pb-5 pt-2 border-t border-[#1a7a42] text-white font-medium leading-relaxed">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQ;
