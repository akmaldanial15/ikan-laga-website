"use client";

import React from "react";
import { mockBettas } from "../../../mock/mockData";
import { useRouter } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ProductDetailPage({ params }: PageProps) {
  const router = useRouter();
  const { id } = React.use(params);

  // Find the fish by its dynamic route ID
  const fish = mockBettas.find((f) => f.id === id);

  if (!fish) {
    return (
      <div className="min-h-screen bg-background/5 text-foreground flex flex-col items-center justify-center p-6">
        <div className="max-w-md w-full border border-border-custom bg-card/45 backdrop-blur-md rounded-2xl p-8 text-center space-y-4">
          <span className="text-4xl">🔎</span>
          <h2 className="text-xl font-bold text-white font-serif">Produk Tidak Ditemui</h2>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Maaf, baka ikan laga liar dengan ID "{id}" tiada dalam senarai katalog kami atau telah dialih keluar.
          </p>
          <button
            onClick={() => router.push("/shop")}
            className="cursor-pointer rounded-xl bg-primary text-black text-xs font-black px-6 py-3 shadow-lg shadow-primary/25 hover:opacity-90 transition-all"
          >
            ← Kembali ke Kedai
          </button>
        </div>
      </div>
    );
  }

  const handleBuyNow = () => {
    // Navigate back to shop with the checkout query param
    router.push(`/shop?checkout=${fish.id}`);
  };

  const handleReadArticle = () => {
    router.push(`/encyclopedia/${fish.id}`);
  };

  return (
    <div className="min-h-screen bg-background/5 text-foreground font-sans antialiased py-12 px-6">
      <div className="max-w-3xl mx-auto border border-border-custom bg-card/45 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-md animate-scale-up">
        
        {/* Product Image Banner */}
        <div className="h-80 w-full relative">
          <img
            src={fish.image}
            alt={fish.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/15 to-transparent" />
          <button
            onClick={() => router.push("/shop")}
            className="cursor-pointer absolute top-4 left-4 rounded-xl bg-black/60 backdrop-blur-sm text-white px-4 py-2 text-xs font-extrabold hover:bg-black/80 transition-all border border-zinc-800"
          >
            ← Kembali ke Kedai
          </button>
        </div>

        {/* Product Details & Specs */}
        <div className="p-6 md:p-10 space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="rounded-full bg-primary/10 text-primary border border-primary/20 px-2.5 py-0.5 text-[9px] font-extrabold tracking-wider">
                {fish.rarity.toUpperCase()}
              </span>
              <span className="text-xs text-zinc-400 font-semibold">📍 ASAL HABITAT: {fish.origin}</span>
            </div>
            <h2 className="text-3xl font-black font-serif text-white mt-1.5 leading-tight">{fish.name}</h2>
            <p className="text-sm text-primary font-serif italic mt-0.5">{fish.scientificName}</p>
          </div>

          {/* Product Specifications Grid */}
          <div className="grid grid-cols-2 gap-6 border-t border-b border-border-custom/50 py-6">
            <div>
              <span className="text-[10px] text-zinc-500 uppercase font-black tracking-wider">Harga Tempahan</span>
              <p className="text-2xl font-black text-primary mt-0.5">RM {fish.price.toFixed(2)}</p>
            </div>
            <div>
              <span className="text-[10px] text-zinc-500 uppercase font-black tracking-wider">Status Stok</span>
              <p className={`text-sm font-extrabold mt-1.5 ${fish.inStock ? "text-emerald-400" : "text-red-400"}`}>
                {fish.inStock ? "🟢 Ready Stock (Tersedia)" : "🔴 Habis Stok"}
              </p>
            </div>
            <div>
              <span className="text-[10px] text-zinc-500 uppercase font-black tracking-wider">Kategori</span>
              <p className="text-sm font-extrabold text-white mt-1">{fish.category || "Wild Betta"}</p>
            </div>
            <div>
              <span className="text-[10px] text-zinc-500 uppercase font-black tracking-wider">Kaedah Pembungkusan</span>
              <p className="text-sm font-medium text-white mt-1">Styrofoam Box + Kotak Tebal</p>
            </div>
          </div>

          {/* Description Section */}
          <div className="space-y-3">
            <h3 className="text-xs font-black text-white uppercase tracking-wider">Deskripsi Spesies:</h3>
            <p className="text-xs text-zinc-300 leading-relaxed text-justify">
              {fish.description}
            </p>
          </div>

          {/* Editorial Story Preview snippet */}
          <div className="rounded-2xl bg-zinc-950/20 border border-border-custom/50 p-6 space-y-3">
            <h4 className="text-xs font-black text-primary uppercase tracking-wider">Sekilas Kisah Habitat asal</h4>
            <p className="text-xs text-zinc-400 leading-relaxed italic line-clamp-3">
              "{fish.fullStory}"
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            {fish.orderable ? (
              <button
                onClick={handleBuyNow}
                className="cursor-pointer flex-1 rounded-xl bg-primary py-4 text-xs font-black text-black text-center hover:scale-[1.01] hover:shadow-lg hover:shadow-primary/10 transition-all active:scale-[0.99]"
              >
                🛒 Beli Sekarang (Order via WhatsApp)
              </button>
            ) : (
              <button
                disabled
                className="flex-1 rounded-xl bg-zinc-800 py-4 text-xs font-black text-zinc-500 text-center cursor-not-allowed"
              >
                🏛️ Pameran Sahaja (Tiada Stok)
              </button>
            )}
            <button
              onClick={handleReadArticle}
              className="rounded-xl border border-border-custom bg-zinc-950/20 py-4 px-6 text-xs font-bold text-zinc-400 hover:text-white text-center transition-all cursor-pointer"
            >
              📖 Baca Artikel Penuh
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
