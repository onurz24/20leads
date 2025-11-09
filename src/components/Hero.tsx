"use client";

import { useRef, useState } from "react";
import { ArrowRight, Play } from "lucide-react";
import { ShootingStars } from "./ui/shadcn-io/shooting-stars";

interface HeroInterface {
  setShowModal: (show: boolean) => void;
}

const Hero = ({ setShowModal }: HeroInterface) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handlePlay = () => {
    if (!videoRef.current) return;
    videoRef.current.play();
    setIsPlaying(true);
  };

  return (
    <section className="relative bg-gradient-to-br from-[#0F4C29] via-green-950 to-[#1a7a42] text-white py-14 px-6 text-center overflow-hidden">

      {/* HERO CONTENT */}
      <div className="relative z-10">
        <img
          src="https://hc-academy.de/wp-content/uploads/2025/02/hca-logo-white.webp"
          alt="HC Academy"
          className="h-20 mx-auto mb-10 fade-in"
        />

        <h1 className="text-3xl md:text-6xl font-extrabold leading-tight mb-6 slide-up delay-1">
          Qualifizierte Leads für Gesundheitscoaches <br />
          <span className="gold-text text-2xl lg:text-6xl">
            Ohne eigenes Werbebudget
          </span>
        </h1>

        {/* 🎥 Local Video with Play Overlay */}
        <div className="relative mx-auto w-full max-w-[420px] h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-[#A7FFB0]/30 mb-6 scale-in delay-3">
          <video
            ref={videoRef}
            poster="/video/poster.webp"
            controls={isPlaying}
            loop
            playsInline
            preload="metadata"
            className={`w-full h-full object-cover object-bottom transition-opacity duration-500 ${
              isPlaying ? "opacity-100" : "opacity-90"
            }`}
          >
            {/* ✅ WebM zuerst (beste Performance) */}
            <source src="/video/intro.webm" type="video/webm" />
            {/* ✅ Fallback MP4 */}
            <source src="/video/intro.mp4" type="video/mp4" />
            Dein Browser unterstützt keine modernen Videoformate.
          </video>

          {!isPlaying && (
            <button
              onClick={handlePlay}
              className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-xs transition hover:bg-black/30 cursor-pointer"
              aria-label="Play Video"
            >
              <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                <Play className="text-[#0F4C29] w-10 h-10 ml-1" />
              </div>
            </button>
          )}
        </div>

        <p className="t lg:text-4xl max-w-4xl mx-auto opacity-90 mb-6 slide-up delay-2 text-white font-extrabold leading-snug">
          <span className=" gold-text text-2xl lg:text-6xl">
            Heiße, echte Leads in 48 Stunden –
            {/* Space html */}
            &nbsp;
          </span>
          <span className=" gold-text text-2xl lg:text-6xl">
            Du zahlst nur für Ergebnisse!
          </span>
        </p>

        <button
          onClick={() => setShowModal(true)}
          className="bg-white text-[#0F4C29] px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-all transform hover:scale-110 shadow-2xl cursor-pointer scale-in delay-4 hover:shadow-[0_0_30px_rgba(167,255,176,0.5)]"
        >
          Jetzt Leads sichern <ArrowRight className="inline-block w-5 h-5 ml-2" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
