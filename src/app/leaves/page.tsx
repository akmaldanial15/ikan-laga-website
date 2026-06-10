"use client";

import React from "react";

export default function IndianAlmondLeaves() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 animate-fade-in space-y-8">
      <div className="space-y-4">
        <span className="text-xs text-primary font-black tracking-wider uppercase">🌿 Penjagaan Air Ikan</span>
        <h1 className="text-4xl md:text-5xl font-black font-serif text-white leading-tight">
          Indian Almond Leaves (Daun Ketapang)
        </h1>
        <p className="text-sm text-zinc-400 max-w-2xl leading-relaxed">
          Daun ketapang adalah elemen penting dalam pemeliharaan ikan laga liar. Ia membantu meniru keadaan air berasid semulajadi di habitat paya dan hutan hujan Malaysia.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
        <div className="rounded-2xl border border-border-custom bg-card/45 p-8 space-y-4">
          <h3 className="text-xl font-bold text-white">Khasiat Utama Daun Ketapang:</h3>
          <ul className="space-y-3 text-xs text-zinc-400">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">✔</span>
              <span>**Menurunkan pH Air**: Mewujudkan pH berasid ringan yang disukai oleh ikan laga liar.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">✔</span>
              <span>**Anti-Bakteria & Kulat**: Kandungan tanin membantu mencegah jangkitan penyakit kulit.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">✔</span>
              <span>**Mengurangkan Stres**: Air berwarna teh memberikan rasa selamat untuk ikan membuat sarang buih.</span>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-border-custom bg-card/45 p-8 space-y-4">
          <h3 className="text-xl font-bold text-white">Cara Penggunaan:</h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Basuh daun ketapang kering sehingga bersih daripada debu. Masukkan sehelai daun bersaiz sederhana untuk setiap 10-15 liter air akuarium. Biarkan daun mereput secara perlahan sehingga air bertukar warna keemasan/teh cair. Tukar daun baru setiap 2-3 minggu sekali.
          </p>
          <a
            href="/shop"
            className="inline-block rounded-xl bg-primary px-6 py-3.5 text-xs font-black text-black hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/15 transition-all"
          >
            Beli Ekstrak & Daun Ketapang 🛒
          </a>
        </div>
      </div>
    </div>
  );
}
