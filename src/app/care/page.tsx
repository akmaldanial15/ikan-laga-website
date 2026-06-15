"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function WildBettaCare101() {
  const { locale } = useLanguage();
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 animate-fade-in space-y-8">
      <div className="space-y-4">
        <span className="text-xs text-primary font-black tracking-wider uppercase">
          {locale === "en" ? "📘 CARE GUIDE" : "📘 PANDUAN PEMELIHARAAN"}
        </span>
        <h1 className="text-4xl md:text-5xl font-black font-serif text-white leading-tight">
          Wild Betta Care 101
        </h1>
        <p className="text-sm text-zinc-400 max-w-2xl leading-relaxed">
          {locale === "en" 
            ? "Ensuring the welfare and survival of wild fighting fish requires a deep understanding of their native ecosystem. Follow these basic guidelines to keep your fish healthy."
            : "Menjaga kebajikan dan kelangsungan hidup ikan laga liar memerlukan pemahaman mendalam tentang ekosistem asal mereka. Ikuti panduan asas ini untuk memastikan ikan anda sihat."}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
        <div className="rounded-2xl border border-border-custom bg-card/45 p-6 space-y-3">
          <span className="text-2xl">🌡</span>
          <h3 className="text-base font-bold text-white">
            {locale === "en" ? "Temperature & Water Parameters" : "Suhu & Parameter Air"}
          </h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            {locale === "en"
              ? "The ideal temperature is around 24°C - 28°C. Recommended water pH is between 5.5 - 6.8 depending on the species (Imbellis prefers moderate pH, Splendens prefers calm stagnant water)."
              : "Suhu ideal ialah sekitar 24°C - 28°C. Manakala pH air disyorkan di antara 5.5 - 6.8 bergantung kepada jenis spesies (Imbellis menyukai pH sederhana, Splendens menyukai air bertakung tenang)."}
          </p>
        </div>

        <div className="rounded-2xl border border-border-custom bg-card/45 p-6 space-y-3">
          <span className="text-2xl">🌱</span>
          <h3 className="text-base font-bold text-white">
            {locale === "en" ? "Decoration & Plants" : "Dekorasi & Tumbuhan"}
          </h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            {locale === "en"
              ? "Provide an aquarium filled with natural aquatic plants such as Cabomba, Java Fern, or Frogbit. These plants mimic their natural swamp shade and reduce fish stress."
              : "Sediakan akuarium yang dipenuhi tumbuhan air semulajadi seperti Cabomba, Java Fern, atau Frogbit. Tumbuhan ini meniru teduhan hutan paya asal dan mengurangkan stres ikan."}
          </p>
        </div>

        <div className="rounded-2xl border border-border-custom bg-card/45 p-6 space-y-3">
          <span className="text-2xl">🦗</span>
          <h3 className="text-base font-bold text-white">
            {locale === "en" ? "Daily Diet" : "Makanan Harian"}
          </h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            {locale === "en"
              ? "Wild fighting fish are carnivores. Live foods such as mosquito larvae, Daphnia, and Bloodworms are highly recommended compared to common industrial dry pellets."
              : "Ikan laga liar adalah karnivor. Makanan hidup seperti jentik-jentik, kutu air (Daphnia), dan cacing darah (Bloodworms) amat disyorkan berbanding pelet kering industri biasa."}
          </p>
        </div>
      </div>
    </div>
  );
}
