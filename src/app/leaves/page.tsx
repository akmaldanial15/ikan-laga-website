"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function IndianAlmondLeaves() {
  const { locale } = useLanguage();
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 animate-fade-in space-y-8">
      <div className="space-y-4">
        <span className="text-xs text-primary font-black tracking-wider uppercase">
          {locale === "en" ? "🌿 Water Care" : "🌿 Penjagaan Air Ikan"}
        </span>
        <h1 className="text-4xl md:text-5xl font-black font-serif text-white leading-tight">
          Indian Almond Leaves (Daun Ketapang)
        </h1>
        <p className="text-sm text-zinc-400 max-w-2xl leading-relaxed">
          {locale === "en"
            ? "Indian almond leaves are a vital element in keeping wild fighting fish. They help mimic the natural acidic water conditions of Malaysia's swamp and rainforest habitats."
            : "Daun ketapang adalah elemen penting dalam pemeliharaan ikan laga liar. Ia membantu meniru keadaan air berasid semulajadi di habitat paya dan hutan hujan Malaysia."}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
        <div className="rounded-2xl border border-border-custom bg-card/45 p-8 space-y-4">
          <h3 className="text-xl font-bold text-white">
            {locale === "en" ? "Main Benefits of Ketapang Leaves:" : "Khasiat Utama Daun Ketapang:"}
          </h3>
          <ul className="space-y-3 text-xs text-zinc-400">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">✔</span>
              <span>
                {locale === "en" ? "**Lowers Water pH**: Creates a mildly acidic pH favored by wild fighting fish." : "**Menurunkan pH Air**: Mewujudkan pH berasid ringan yang disukai oleh ikan laga liar."}
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">✔</span>
              <span>
                {locale === "en" ? "**Anti-Bacterial & Fungal**: Tannins help prevent skin infections." : "**Anti-Bakteria & Kulat**: Kandungan tanin membantu mencegah jangkitan penyakit kulit."}
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">✔</span>
              <span>
                {locale === "en" ? "**Reduces Stress**: Tea-colored water provides a sense of security for the fish to build bubble nests." : "**Mengurangkan Stres**: Air berwarna teh memberikan rasa selamat untuk ikan membuat sarang buih."}
              </span>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-border-custom bg-card/45 p-8 space-y-4">
          <h3 className="text-xl font-bold text-white">
            {locale === "en" ? "How to Use:" : "Cara Penggunaan:"}
          </h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            {locale === "en"
              ? "Wash the dried ketapang leaves until they are free of dust. Add one medium-sized leaf for every 10-15 liters of aquarium water. Let the leaf slowly decay until the water turns a golden/light tea color. Replace with a new leaf every 2-3 weeks."
              : "Basuh daun ketapang kering sehingga bersih daripada debu. Masukkan sehelai daun bersaiz sederhana untuk setiap 10-15 liter air akuarium. Biarkan daun mereput secara perlahan sehingga air bertukar warna keemasan/teh cair. Tukar daun baru setiap 2-3 minggu sekali."}
          </p>
          <a
            href="/shop"
            className="inline-block rounded-xl bg-primary px-6 py-3.5 text-xs font-black text-black hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/15 transition-all"
          >
            {locale === "en" ? "Buy Ketapang Leaves & Extract 🛒" : "Beli Ekstrak & Daun Ketapang 🛒"}
          </a>
        </div>
      </div>
    </div>
  );
}
