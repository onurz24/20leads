"use client";

import { useInView } from "react-intersection-observer";
import clsx from "clsx";
import { ArrowRight, CheckCircle2, Shield, Zap, Clock } from "lucide-react";

interface CTAInterface {
  setShowModal: (show: boolean) => void;
}

export default function CTA({ setShowModal }: CTAInterface) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      id="angebot"
      ref={ref}
      className={clsx(
        "relative bg-gradient-to-br from-[#0F4C29] via-green-950 to-[#1a7a42] py-20 md:py-28 overflow-hidden transition-all duration-700",
        inView && "is-visible"
      )}
    >
      {/* 🌟 Hintergrund Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] md:w-[900px] h-[600px] sm:h-[800px] md:h-[900px] bg-[#A7FFB0]/15 blur-[150px] rounded-full animate-pulse-slower" />

      {/* === Container === */}
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10 text-center lg:text-left">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 items-center">
          {/* === LEFT: Text / Info === */}
          <div
            className={clsx("fade-left delay-1 space-y-6", inView && "animate-visible")}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 mb-4">
              <Zap className="w-4 h-4 text-white" />

              <span className="font-semibold text-white text-sm tracking-wide">
  Exklusiv für Coaches verfügbar
</span>

            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
              <span className="gold-text">Transparente</span> Preisgestaltung
              <br />
              für echte Coaching-Leads
            </h2>

            <p className="text-lg md:text-xl text-white  leading-relaxed max-w-lg">
              Kein Werbebudget, keine Verträge, keine faulen Versprechen – du zahlst
              nur für echte, geprüfte Leads, die sich wirklich für dein Angebot
              interessieren.
            </p>

            {/* === Badges === */}
            <div className="flex flex-wrap gap-3 mt-6 width-full justify-center lg:justify-start ">
              {[
                { icon: CheckCircle2, text: "100% echte Leads" },
                { icon: Shield, text: "Datenschutz-konform" },
                { icon: Clock, text: "Bereit in 48 Stunden" },
              ].map((b, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/10 text-lg font-semibold text-white"
                >
                  <b.icon className="w-4 h-4 text-[#A7FFB0]" />
                  <span>{b.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* === RIGHT: Angebot / Box === */}
          <div
            className={clsx(
              "fade-right delay-2 bg-white rounded-3xl border-2 border-[#0F4C29]/10 p-10 shadow-2xl text-center lg:text-left relative overflow-hidden ",
              inView && "animate-visible"
            )}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#A7FFB0]/10 to-transparent" />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-black text-[#0F4C29] mb-3">
                Dein Angebot:
              </h3>
              <p className="text-lg md:text-xl font-semibold text-[#0F4C29]/80 mb-6">
                <span className="text-4xl md:text-6xl font-black text-[#0F4C29]">
                  20 Leads
                </span>{" "}
                {/* pro Woche */}
              </p>

              <div className="bg-[#0F4C29]/5 border border-[#0F4C29]/10 rounded-2xl py-5 px-6 mb-6">
                <p className="text-lg font-medium text-[#0F4C29]/90 text-left">
                  Nur <span className="font-bold text-[#0F4C29]">5,99 € pro Lead</span> 
                  {/* +{" "}
                   <span className="font-bold">9 € Setup</span> */}
                </p>
                <p className="text-sm text-[#0F4C29]/70 mt-1 text-left">
                  ✓ All-Inclusive <br/> ✓ Monatlich kündbar <br/> ✓ Keine versteckten Kosten
                </p>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => setShowModal(true)}
                className="w-full cursor-pointer bg-[#0F4C29] text-white py-5 rounded-full font-bold text-lg hover:bg-green-900 transition-all shadow-[0_0_40px_rgba(167,255,176,0.2)] hover:shadow-[0_0_60px_rgba(167,255,176,0.6)] transform hover:scale-105 duration-300"
              >
                Jetzt Leads sichern <ArrowRight className="inline-block w-5 h-5 ml-2" />
              </button>

              <p className="text-sm text-[#0F4C29]/70 mt-4 border-t pt-4 border-[#0F4C29]/10">
                Keine Laufzeit · Keine Agenturbindung · 100% Ergebnisorientiert
              </p>

              {/* Mini-Testimonial */}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
