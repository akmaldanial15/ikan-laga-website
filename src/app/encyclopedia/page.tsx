"use client";

import React, { useState } from "react";
import { mockBettas, BettaFish } from "../../mock/mockData";
import { useRouter } from "next/navigation";
import { useLanguage } from "../../context/LanguageContext";

export default function EncyclopediaIndex() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const { locale } = useLanguage();

  const filteredBettas = mockBettas.filter(
    (fish) =>
      fish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      fish.scientificName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (fish.category && fish.category.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-background/5 text-foreground font-sans antialiased py-12 px-6">
      <main className="mx-auto max-w-5xl space-y-10">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border-custom/30 pb-6">
          <div>
            <h1 className="text-3xl font-black font-serif tracking-tight text-white">
              {locale === "en" ? "Wild Betta Encyclopedia" : "Ensiklopedia Ikan Laga Liar"}
            </h1>
            <p className="text-sm text-zinc-400 mt-2">
              {locale === "en" 
                ? "Research and learn about the unique wild fighting fish species (*Splendens Complex*) in their natural habitat." 
                : "Kaji dan pelajari tentang keunikan spesies ikan laga liar (*Splendens Complex*) di habitat asal mereka."}
            </p>
          </div>
          
          {/* Article Search Bar */}
          <div className="relative w-full md:max-w-xs">
            <span className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none text-zinc-400 text-xs">🔍</span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={locale === "en" ? "Search species or article..." : "Cari spesies atau artikel..."}
              className="w-full rounded-xl border border-border-custom bg-card/30 pl-10 pr-4 py-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all backdrop-blur-sm"
            />
          </div>
        </div>

        {/* Articles Grid layout */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {filteredBettas.length === 0 ? (
            <div className="w-full text-center py-12 border border-dashed border-border-custom rounded-2xl bg-card/10 col-span-full">
              <p className="text-xs text-zinc-500 italic">
                {locale === "en" ? `No articles found for "${searchQuery}"` : `Tiada artikel ditemui bagi carian "${searchQuery}"`}
              </p>
            </div>
          ) : (
            filteredBettas.map((fish) => (
              <div
                key={fish.id}
                onClick={() => router.push(`/encyclopedia/${fish.id}`)}
                className="group cursor-pointer flex flex-col justify-between rounded-2xl border border-border-custom bg-card/45 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/45 hover:shadow-2xl hover:shadow-primary/5"
              >
                <div>
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={fish.image}
                      alt={fish.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-103"
                    />
                    <span className="absolute top-3 right-3 rounded-full bg-zinc-950/80 backdrop-blur-sm px-3 py-1 text-[9px] font-extrabold text-primary border border-primary/20 tracking-wider">
                      {fish.rarity.toUpperCase()}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] text-zinc-400">📍 Origin: {fish.origin}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors duration-200">
                      {fish.name}
                    </h3>
                    <p className="text-xs text-primary italic font-serif mt-1 mb-3">{fish.scientificName}</p>
                    <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3">
                      {fish.description[locale]}
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <span className="text-xs font-black text-primary group-hover:underline">
                    {locale === "en" ? "Read Full Story →" : "Baca Kisah Penuh →"}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

      </main>
    </div>
  );
}
