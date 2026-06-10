"use client";

import React, { useState } from "react";
import { mockBettas, BettaFish } from "@/mock/mockData";

export default function Home() {
  const [selectedFish, setSelectedFish] = useState<BettaFish | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const articleId = params.get("article");
      if (articleId) {
        const found = mockBettas.find((fish) => fish.id === articleId);
        if (found) {
          setSelectedFish(found);
          setTimeout(() => {
            const element = document.getElementById("encyclopedia");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }, 100);
        }
      }
    }
  }, []);

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
              ✨ KHAZANAH LIAR MALAYSIA
            </div>
            <h1 className="text-3xl md:text-5xl font-black font-serif leading-tight tracking-tight text-white mb-4 max-w-2xl">
              Keindahan Liar Yang Tersembunyi
            </h1>
            <p className="text-sm md:text-base text-zinc-400 leading-relaxed mb-6 max-w-xl">
              Menerokai dunia ikan laga liar di habitat semulajadi tanah air kita. 
              Satu perkongsian penceritaan untuk menghargai warisan alam semula jadi kita.
            </p>
            <button
              onClick={() => setSelectedFish(mockBettas[0])}
              className="cursor-pointer rounded-xl bg-primary px-7 py-3.5 text-xs font-black text-black shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.98]"
            >
              Baca Kisah Imbellis
            </button>
          </div>
        </section>

        {/* SECTION 1: ENCYCLOPEDIA */}
        <section id="encyclopedia" className="my-16 scroll-mt-24">
          <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl font-black font-serif tracking-tight text-white">Ensiklopedia Ikan Laga Liar</h2>
              <p className="text-sm text-zinc-400 mt-2">Ketahui keunikan setiap spesies di habitat asal mereka.</p>
            </div>
            {/* Search Input with Search Icon */}
            <div className="relative w-full md:max-w-xs">
              <span className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none text-zinc-400 text-xs">🔍</span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari artikel ikan..."
                className="w-full rounded-xl border border-border-custom bg-card/30 pl-10 pr-4 py-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all backdrop-blur-sm"
              />
            </div>
          </div>

          {/* Horizontal scrollbar wrapper */}
          <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-thin scrollbar-thumb-border-custom scrollbar-track-transparent">
            {filteredBettas.length === 0 ? (
              <div className="w-full text-center py-12 border border-dashed border-border-custom rounded-2xl bg-card/10">
                <p className="text-xs text-zinc-500 italic">Tiada artikel ditemui bagi carian "{searchQuery}"</p>
              </div>
            ) : (
              filteredBettas.map((fish) => (
                <div
                  key={fish.id}
                  onClick={() => setSelectedFish(fish)}
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
                        🏛️ Pameran Sahaja
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
                    <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2">{fish.description}</p>
                    <span className="text-xs font-black text-primary mt-5 inline-block group-hover:underline">Baca Cerita Lengkap →</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

      </main>

      {/* ARTICLE READER MODAL (WWF Editorial Story + Shop Links) */}
      {selectedFish && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 md:p-6 backdrop-blur-md animate-fade-in">
          <div className="relative flex h-full max-h-[85vh] w-full max-w-2xl flex-col rounded-3xl border border-border-custom bg-card overflow-hidden shadow-2xl animate-scale-up">
            {/* Close Button */}
            <button
              onClick={() => setSelectedFish(null)}
              className="cursor-pointer absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/75 hover:scale-105 transition-all duration-200"
            >
              ✕
            </button>

            {/* Modal Scroll Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="h-72 w-full relative">
                <img
                  src={selectedFish.image}
                  alt={selectedFish.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
              </div>

              <div className="p-6 md:p-10">
                <span className="text-xs text-zinc-400 font-semibold tracking-wider">📍 ASAL HABITAT: {selectedFish.origin}</span>
                <h2 className="text-3xl font-black font-serif text-white mt-1.5">{selectedFish.name}</h2>
                <p className="text-sm text-primary font-serif italic mt-1 mb-6">{selectedFish.scientificName}</p>

                <div className="flex gap-2 items-center mb-6">
                  <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-extrabold tracking-wider ${
                    selectedFish.rarity === "Extremely Rare" ? "bg-accent/15 text-accent border border-accent/25" : "bg-primary/10 text-primary border border-primary/25"
                  }`}>
                    {selectedFish.rarity.toUpperCase()}
                  </span>
                  {selectedFish.orderable ? (
                    <span className="rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-0.5 text-[10px] font-extrabold">
                      🛒 SEDIA DIORDER
                    </span>
                  ) : (
                    <span className="rounded-full bg-zinc-850/80 text-zinc-400 border border-zinc-700/50 px-2.5 py-0.5 text-[10px] font-extrabold">
                      🏛️ PAMERAN SAHAJA
                    </span>
                  )}
                </div>

                {/* Styled Editorial Body Copy */}
                <p className="text-sm md:text-base text-zinc-300 leading-relaxed text-justify mb-8 font-sans">
                  <span className="float-left mr-3 text-6xl md:text-7xl font-black text-primary font-serif leading-[0.8] mt-1">
                    {selectedFish.fullStory.charAt(0)}
                  </span>
                  {selectedFish.fullStory.slice(1)}
                </p>
              </div>
            </div>

            {/* Modal Footer with Shop Redirect Link */}
            <div className="border-t border-border-custom bg-zinc-950/70 backdrop-blur-md p-6 md:px-10 flex items-center justify-between">
              {selectedFish.orderable ? (
                <>
                  <div>
                    <span className="text-xs text-zinc-500">Harga Baka</span>
                    <p className="text-xl font-black text-primary font-sans">RM {selectedFish.price.toFixed(2)}</p>
                  </div>
                  <a
                    href={`/shop?fish=${selectedFish.id}`}
                    className="rounded-xl bg-primary px-7 py-3.5 text-xs font-black text-black shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300 inline-block text-center cursor-pointer"
                  >
                    Beli di Kedai 🛒
                  </a>
                </>
              ) : (
                <div className="w-full text-center">
                  <p className="text-xs text-zinc-500 italic">
                    Spesies pameran ini tidak dibuka untuk jualan buat masa sekarang.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
