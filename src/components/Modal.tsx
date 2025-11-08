"use client";

import { useEffect } from "react";
import { CheckCircle, ArrowRight, X } from "lucide-react";

interface ModalProps {
  show: boolean;
  setShow: (show: boolean) => void;
  form: {
    hasBusiness: string;
    leads: string;
    problem: string;
    understood: string;
    contactMethod: string;
    name: string;
    phone: string;
  };
  setForm: React.Dispatch<
    React.SetStateAction<{
      hasBusiness: string;
      leads: string;
      problem: string;
      understood: string;
      contactMethod: string;
      name: string;
      phone: string;
    }>
  >;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  handleNext: () => void;
  handleBack: () => void;
  handleSubmit: (e: React.FormEvent) => void;
  success: boolean;
}

export default function Modal({
  show,
  setShow,
  form,
  setForm,
  step,
  handleNext,
  handleBack,
  handleSubmit,
  success,
}: ModalProps) {
  const selectOption = (key: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  // ❌ Prevent Body Scroll when Modal is open
  useEffect(() => {
    if (show) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6 z-50 animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative bg-white pt-8 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl animate-scaleIn cursor-default hover:scale-[1.02] transition-transform duration-200 ease-out"
      >
        {/* ✖️ Close Button */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition cursor-pointer"
          aria-label="Modal schließen"
        >
          <X className="w-6 h-6" />
        </button>

        {/* ✅ Success Message */}
        {success ? (
          <div className="p-10 text-center flex flex-col items-center">
            <CheckCircle className="w-16 h-16 text-[#0F4C29] mb-4" />
            <h3 className="text-2xl font-bold mb-2 text-[#0F4C29]">Danke! 🎉</h3>
            <p className="text-gray-700 mb-6">
              Wir melden uns innerhalb von 24 Stunden bei dir.
            </p>
            <button
              onClick={() => setShow(false)}
              className="bg-[#0F4C29] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0d3d21] transition cursor-pointer"
            >
              Fenster schließen
            </button>
          </div>
        ) : (
          /* 📋 Multi-Step Form */
          <div className="p-8 max-h-[90vh] overflow-y-auto">
            {/* Fortschrittsanzeige */}
            <div className="mb-6 sticky top-0 bg-white pt-1 pb-3 z-10">
              <div className="flex justify-between text-sm text-gray-500 mb-1">
                <span>Schritt {step} von 5</span>
                <span>{Math.round((step / 5) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-[#0F4C29] h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(step / 5) * 100}%` }}
                />
              </div>
            </div>

            {/* Step Content */}
            <div className="space-y-6">
              {step === 1 && (
                <>
                  <h3 className="text-xl font-bold text-[#0F4C29]">
                    Hast du bereits ein bestehendes Coachingbusiness?
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {["Ja", "Nein"].map((opt) => (
                      <button
                        key={opt}
                        onClick={() => selectOption("hasBusiness", opt)}
                        className={`p-4 rounded-xl border-2 font-semibold transition-all cursor-pointer ${
                          form.hasBusiness === opt
                            ? "border-[#0F4C29] bg-green-50"
                            : "border-gray-200 hover:border-[#0F4C29]"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <h3 className="text-xl font-bold text-[#0F4C29]">
                    Wie viele Leads pro Woche kannst du bearbeiten?
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {["10 Leads", "20 Leads", "30 Leads", "50 Leads"].map(
                      (num) => (
                        <button
                          key={num}
                          onClick={() => selectOption("leads", num)}
                          className={`p-4 rounded-xl border-2 font-semibold transition-all cursor-pointer ${
                            form.leads === num
                              ? "border-[#0F4C29] bg-green-50"
                              : "border-gray-200 hover:border-[#0F4C29]"
                          }`}
                        >
                          {num}
                        </button>
                      )
                    )}
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <h3 className="text-xl font-bold text-[#0F4C29]">
                    Was ist aktuell deine größte Herausforderung?
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      "Zu wenig Anfragen",
                      "Zu hohe Werbekosten",
                      "Unklare Zielgruppe",
                      "Schlechte Conversion",
                    ].map((p) => (
                      <button
                        key={p}
                        onClick={() => selectOption("problem", p)}
                        className={`p-4 rounded-xl border-2 font-semibold transition-all cursor-pointer ${
                          form.problem === p
                            ? "border-[#0F4C29] bg-green-50"
                            : "border-gray-200 hover:border-[#0F4C29]"
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </>
              )}

              {step === 4 && (
                <>
                  <h3 className="text-xl font-bold text-[#0F4C29]">
                    Hast du verstanden, dass:
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4 mb-6 space-y-2">
                    {[
                      "Wir sind monatlich kündbar",
                      "Wir arbeiten zum Festpreis pro Lead",
                      "Du benötigst kein Marketingbudget",
                      "Wir sind in 3 Tagen startklar",
                    ].map((text, i) => (
                      <p key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-[#0F4C29]" />
                        {text}
                      </p>
                    ))}
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                  
                      <button
                        
                        onClick={() => selectOption("understood", "Ja")}
                        className={`p-4 rounded-xl border-2 font-semibold transition-all cursor-pointer ${
                          form.understood === "Ja"
                            ? "border-[#0F4C29] bg-green-50"
                            : "border-gray-200 hover:border-[#0F4C29]"
                        }`}
                      >
                        Alles verstanden
                      </button>
                  
                  </div>
                </>
              )}

              {step === 5 && (
                <>
                  <h3 className="text-xl font-bold text-[#0F4C29]">
                    Fast geschafft: Wie darf ich dich kontaktieren?
                  </h3>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {["Per Anruf", "Per WhatsApp"].map((method) => (
                      <button
                        key={method}
                        onClick={() => selectOption("contactMethod", method)}
                        className={`p-4 rounded-xl border-2 font-semibold transition-all cursor-pointer ${
                          form.contactMethod === method
                            ? "border-[#0F4C29] bg-green-50"
                            : "border-gray-200 hover:border-[#0F4C29]"
                        }`}
                      >
                        {method}
                      </button>
                    ))}
                  </div>
                  <input
                    type="text"
                    placeholder="Name *"
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-[#0F4C29] outline-none"
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                  />
                  <input
                    type="tel"
                    placeholder="Telefonnummer *"
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-[#0F4C29] outline-none"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                  />
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-[#0F4C29] text-white py-3 rounded-lg font-bold hover:bg-[#0d3d21] transition-all transform hover:scale-105 mt-4 cursor-pointer"
                  >
                    Jetzt absenden
                  </button>
                </>
              )}
            </div>

            {/* Navigation */}
            <div className="mt-8 flex justify-between items-center">
              {step > 1 && (
                <button
                  onClick={handleBack}
                  className="px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-50 cursor-pointer"
                >
                  Zurück
                </button>
              )}
              {step < 5 && (
                <button
                  onClick={handleNext}
                  disabled={
                    (step === 1 && !form.hasBusiness) ||
                    (step === 2 && !form.leads) ||
                    (step === 3 && !form.problem) ||
                    (step === 4 && !form.understood)
                  }
                  className="ml-auto flex items-center gap-2 bg-[#0F4C29] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0d3d21] transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  Weiter <ArrowRight className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
