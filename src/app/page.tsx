"use client";

import React, { useState } from "react";
import { mockBettas, BettaFish } from "@/mock/mockData";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const { locale } = useLanguage();

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const articleId = params.get("article");
      if (articleId) {
        router.replace(`/encyclopedia/${articleId}`);
      }
    }
  }, [router]);

  const filteredBettas = mockBettas.filter(
    (fish) =>
      fish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      fish.scientificName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background/5 text-foreground font-sans antialiased selection:bg-primary selection:text-black">
      <main className="mx-auto max-w-5xl px-6 pb-24">
        
        {/* HERO BANNER (WWF Editorial Vibe) */}
        <section className="relative my-8 overflow-hidden rounded-3xl border border-border-custom bg-card/45 shadow-2xl transition-all duration-300">
          <div className="relative h-[320px] md:h-[480px] w-full">
            <img
              src="/images/betta_imbellis.png"
              alt="Wild Betta Imbellis"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.01]"
            />
            {/* Elegant Radial/Linear Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/10 to-transparent" />
          </div>
          
          <div className="p-8 md:p-14 relative -mt-32 md:-mt-40 z-10">
            <div className="inline-block rounded-full bg-primary/20 border border-primary/30 px-3.5 py-1 text-[10px] font-extrabold tracking-wider text-primary mb-4">
              {locale === "en" ? "✨ MALAYSIA'S WILD TREASURE" : "✨ KHAZANAH LIAR MALAYSIA"}
            </div>
            <h1 className="text-3xl md:text-5xl font-black font-serif leading-tight tracking-tight text-white mb-4 max-w-2xl">
              {locale === "en" ? "The Hidden Wild Beauty" : "Keindahan Liar Yang Tersembunyi"}
            </h1>
            <p className="text-sm md:text-base text-zinc-400 leading-relaxed mb-6 max-w-xl">
              {locale === "en" 
                ? "Explore the world of wild fighting fish in their natural habitat. A storytelling journey to appreciate our natural heritage."
                : "Menerokai dunia ikan laga liar di habitat semulajadi tanah air kita. Satu perkongsian penceritaan untuk menghargai warisan alam semula jadi kita."}
            </p>
            <button
              onClick={() => router.push(`/encyclopedia/${mockBettas[0].id}`)}
              className="cursor-pointer rounded-xl bg-primary px-7 py-3.5 text-xs font-black text-black shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.98]"
            >
              {locale === "en" ? "Read Imbellis Story" : "Baca Kisah Imbellis"}
            </button>
          </div>
        </section>

        {/* SECTION 1: ENCYCLOPEDIA */}
        <section id="encyclopedia" className="my-16 scroll-mt-24">
          <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl font-black font-serif tracking-tight text-white">
                {locale === "en" ? "Wild Betta Encyclopedia" : "Ensiklopedia Ikan Laga Liar"}
              </h2>
              <p className="text-sm text-zinc-400 mt-2">
                {locale === "en" ? "Discover the uniqueness of each species in their original habitat." : "Ketahui keunikan setiap spesies di habitat asal mereka."}
              </p>
            </div>
            {/* Search Input with Search Icon */}
            <div className="relative w-full md:max-w-xs">
              <span className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none text-zinc-400 text-xs">🔍</span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={locale === "en" ? "Search fish articles..." : "Cari artikel ikan..."}
                className="w-full rounded-xl border border-border-custom bg-card/30 pl-10 pr-4 py-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all backdrop-blur-sm"
              />
            </div>
          </div>

          {/* Horizontal scrollbar wrapper */}
          <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-thin scrollbar-thumb-border-custom scrollbar-track-transparent">
            {filteredBettas.length === 0 ? (
              <div className="w-full text-center py-12 border border-dashed border-border-custom rounded-2xl bg-card/10">
                <p className="text-xs text-zinc-500 italic">
                  {locale === "en" ? `No articles found for "${searchQuery}"` : `Tiada artikel ditemui bagi carian "${searchQuery}"`}
                </p>
              </div>
            ) : (
              filteredBettas.map((fish) => (
                <div
                  key={fish.id}
                  onClick={() => router.push(`/encyclopedia/${fish.id}`)}
                  className="group w-[320px] shrink-0 cursor-pointer rounded-2xl border border-border-custom bg-card/45 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={fish.image}
                      alt={fish.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {!fish.orderable && (
                      <span className="absolute top-3 right-3 rounded-full bg-zinc-950/80 backdrop-blur-sm px-3 py-1 text-[10px] font-black text-zinc-400 border border-zinc-700/50">
                        {locale === "en" ? "🏛️ Exhibition Only" : "🏛️ Pameran Sahaja"}
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`rounded-full px-2.5 py-0.5 text-[9px] font-extrabold tracking-wider ${
                        fish.rarity === "Extremely Rare" 
                          ? "bg-accent/15 text-accent border border-accent/20" 
                          : "bg-primary/10 text-primary border border-primary/20"
                      }`}>
                        {fish.rarity.toUpperCase()}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors duration-200">{fish.name}</h3>
                    <p className="text-xs text-primary italic font-serif mt-1 mb-4">{fish.scientificName}</p>
                    <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2">{fish.description[locale]}</p>
                    <span className="text-xs font-black text-primary mt-5 inline-block group-hover:underline">
                      {locale === "en" ? "Read Full Story →" : "Baca Cerita Lengkap →"}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

      </main>
    </div>
  );
}
