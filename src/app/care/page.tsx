"use client";

import React from "react";

export default function WildBettaCare101() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 animate-fade-in space-y-8">
      <div className="space-y-4">
        <span className="text-xs text-primary font-black tracking-wider uppercase">📘 PANDUAN PEMELIHARAAN</span>
        <h1 className="text-4xl md:text-5xl font-black font-serif text-white leading-tight">
          Wild Betta Care 101
        </h1>
        <p className="text-sm text-zinc-400 max-w-2xl leading-relaxed">
          Menjaga kebajikan dan kelangsungan hidup ikan laga liar memerlukan pemahaman mendalam tentang ekosistem asal mereka. Ikuti panduan asas ini untuk memastikan ikan anda sihat.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
        <div className="rounded-2xl border border-border-custom bg-card/45 p-6 space-y-3">
          <span className="text-2xl">🌡</span>
          <h3 className="text-base font-bold text-white">Suhu & Parameter Air</h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Suhu ideal ialah sekitar 24°C - 28°C. Manakala pH air disyorkan di antara 5.5 - 6.8 bergantung kepada jenis spesies (Imbellis menyukai pH sederhana, Splendens menyukai air bertakung tenang).
          </p>
        </div>

        <div className="rounded-2xl border border-border-custom bg-card/45 p-6 space-y-3">
          <span className="text-2xl">🌱</span>
          <h3 className="text-base font-bold text-white">Dekorasi & Tumbuhan</h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Sediakan akuarium yang dipenuhi tumbuhan air semulajadi seperti Cabomba, Java Fern, atau Frogbit. Tumbuhan ini meniru teduhan hutan paya asal dan mengurangkan stres ikan.
          </p>
        </div>

        <div className="rounded-2xl border border-border-custom bg-card/45 p-6 space-y-3">
          <span className="text-2xl">🦗</span>
          <h3 className="text-base font-bold text-white">Makanan Harian</h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Ikan laga liar adalah karnivor. Makanan hidup seperti jentik-jentik, kutu air (Daphnia), dan cacing darah (Bloodworms) amat disyorkan berbanding pelet kering industri biasa.
          </p>
        </div>
      </div>
    </div>
  );
}
