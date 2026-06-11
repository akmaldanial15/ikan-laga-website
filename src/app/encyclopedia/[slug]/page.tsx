"use client";

import React from "react";
import { mockBettas } from "../../../mock/mockData";
import { useRouter } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ArticleDetailPage({ params }: PageProps) {
  const router = useRouter();
  const { slug } = React.use(params);

  // Find the betta fish article by its slug (fish ID)
  const fish = mockBettas.find((f) => f.id === slug);

  if (!fish) {
    return (
      <div className="min-h-screen bg-background/5 text-foreground flex flex-col items-center justify-center p-6">
        <div className="max-w-md w-full border border-border-custom bg-card/45 backdrop-blur-md rounded-2xl p-8 text-center space-y-4">
          <span className="text-4xl">📚</span>
          <h2 className="text-xl font-bold text-white font-serif">Artikel Tidak Ditemui</h2>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Maaf, artikel ensiklopedia dengan slug "{slug}" tiada dalam simpanan perpustakaan kami.
          </p>
          <button
            onClick={() => router.push("/encyclopedia")}
            className="cursor-pointer rounded-xl bg-primary text-black text-xs font-black px-6 py-3 shadow-lg shadow-primary/25 hover:opacity-90 transition-all"
          >
            ← Kembali ke Ensiklopedia
          </button>
        </div>
      </div>
    );
  }

  const handleOrderRedirect = () => {
    router.push(`/shop?checkout=${fish.id}`);
  };

  return (
    <div className="min-h-screen bg-background/5 text-foreground font-sans antialiased py-12 px-6">
      <div className="max-w-3xl mx-auto border border-border-custom bg-card/45 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-md animate-scale-up">
        
        {/* Back and Breadcrumb Header */}
        <div className="border-b border-border-custom/50 bg-zinc-950/30 px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => router.push("/encyclopedia")}
            className="cursor-pointer text-xs font-bold text-zinc-400 hover:text-white transition-all flex items-center gap-1.5"
          >
            ← Kembali ke Ensiklopedia
          </button>
          <span className="text-[10px] text-zinc-500 font-extrabold tracking-widest uppercase">
            ENSIKLOPEDIA KHAZANAH LIAR
          </span>
        </div>

        {/* Hero Banner Cover */}
        <div className="h-80 w-full relative">
          <img
            src={fish.image}
            alt={fish.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/20 to-transparent" />
        </div>

        {/* Article Content Layout */}
        <div className="p-6 md:p-12 space-y-8">
          <div>
            <span className="text-xs text-zinc-400 font-semibold tracking-wider">📍 LOKASI ASAL: {fish.origin}</span>
            <h2 className="text-3xl md:text-4xl font-black font-serif text-white mt-2 leading-tight">{fish.name}</h2>
            <p className="text-base text-primary font-serif italic mt-0.5">{fish.scientificName}</p>
          </div>

          <div className="flex gap-2 items-center">
            <span className="rounded-full bg-primary/10 text-primary border border-primary/20 px-3 py-0.5 text-[10px] font-extrabold tracking-wider uppercase">
              {fish.rarity}
            </span>
            <span className="rounded-full bg-zinc-950/50 text-zinc-400 border border-zinc-800 px-3 py-0.5 text-[10px] font-semibold">
              Kategori: {fish.category || "Wild Betta"}
            </span>
          </div>

          {/* Elegant Drop-cap Story Block */}
          <div className="text-sm md:text-base text-zinc-300 leading-relaxed text-justify space-y-6 font-sans">
            <p>
              <span className="float-left mr-3 text-7xl md:text-8xl font-black text-primary font-serif leading-[0.8] mt-2">
                {fish.fullStory.charAt(0)}
              </span>
              {fish.fullStory.slice(1)}
            </p>
          </div>

          {/* Quick Order CTA Card inside Article */}
          <div className="border border-border-custom bg-zinc-950/40 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-[10px] text-zinc-500 font-black uppercase tracking-wider block">Minat Membela Spesies Ini?</span>
              <h4 className="text-base font-black text-white mt-1">Dapatkan Baka Asal Terbaik</h4>
              <p className="text-xs text-zinc-400 mt-1 max-w-sm">
                Kami membekalkan baka asli tangkapan liar/biakan terpilih dengan kualiti gred premium terus ke pintu rumah anda.
              </p>
            </div>
            
            {fish.orderable ? (
              <div className="text-right flex flex-col items-center md:items-end gap-2 shrink-0">
                <span className="text-lg font-black text-primary">RM {fish.price.toFixed(2)}</span>
                <button
                  onClick={handleOrderRedirect}
                  className="cursor-pointer rounded-xl bg-primary text-black font-black text-xs px-6 py-3 shadow-lg shadow-primary/25 hover:shadow-primary/45 hover:scale-102 active:scale-98 transition-all"
                >
                  🛒 Tempah Sekarang
                </button>
              </div>
            ) : (
              <div className="text-right shrink-0">
                <span className="text-xs font-bold text-zinc-500 uppercase bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-lg">
                  🏛️ Pameran Sahaja
                </span>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
