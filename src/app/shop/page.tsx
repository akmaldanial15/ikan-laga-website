"use client";

import React, { useState } from "react";
import { mockBettas, BettaFish } from "@/mock/mockData";
import { useRouter } from "next/navigation";

interface CartItem {
  fish: BettaFish;
  quantity: number;
}

type ShopView = "catalog" | "detail" | "checkout";

export default function Shop() {
  const router = useRouter();
  const [view, setView] = useState<ShopView>("catalog");
  const [selectedFish, setSelectedFish] = useState<BettaFish | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  // Form states
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [courier, setCourier] = useState("J&T Express (Semenanjung)");

  // Dynamic categories list based on available mock products
  const categories = ["Semua", ...Array.from(new Set(mockBettas.map(f => f.category || "Wild Betta")))];

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const fishId = params.get("fish");
      const checkoutId = params.get("checkout");
      
      if (fishId) {
        router.replace(`/shop/${fishId}`);
      } else if (checkoutId) {
        const found = mockBettas.find((f) => f.id === checkoutId && f.orderable);
        if (found) {
          setCart([{ fish: found, quantity: 1 }]);
          setView("checkout");
        }
      }
    }
  }, [router]);

  const filteredBettas = mockBettas
    .filter((fish) => fish.orderable)
    .filter((fish) => selectedCategory === "Semua" || (fish.category || "Wild Betta") === selectedCategory)
    .filter(
      (fish) =>
        fish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        fish.scientificName.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const selectProductForDetail = (fish: BettaFish) => {
    router.push(`/shop/${fish.id}`);
  };

  const handleBuyNow = (fish: BettaFish) => {
    setCart([{ fish, quantity: 1 }]);
    setView("checkout");
  };

  const updateQuantity = (delta: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => ({ ...item, quantity: item.quantity + delta }))
        .filter((item) => item.quantity > 0)
    );
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.fish.price * item.quantity, 0);
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Troli anda kosong! Sila kembali ke kedai.");
      return;
    }

    if (!customerName || !customerPhone || !deliveryAddress) {
      alert("Sila lengkapkan nama, nombor telefon, dan alamat penghantaran.");
      return;
    }

    let itemsText = "";
    cart.forEach((item, index) => {
      itemsText += `${index + 1}. ${item.fish.name} (${item.fish.scientificName}) \n   Kuantiti: ${item.quantity} ekor - RM ${(item.fish.price * item.quantity).toFixed(2)}\n`;
    });

    const totalOrder = calculateTotal();
    const message = `Salam Banglong! Saya nak order ikan laga liar:\n\n` +
      `📦 PESANAN:\n${itemsText}\n` +
      `💰 JUMLAH KESELURUHAN: RM ${totalOrder.toFixed(2)}\n` +
      `🚚 KURIER PILIHAN: ${courier}\n\n` +
      `👤 MAKLUMAT PENGHANTARAN:\n` +
      `Nama: ${customerName}\n` +
      `No Tel: ${customerPhone}\n` +
      `Alamat: ${deliveryAddress}\n\n` +
      `*Nota: Saya akan buat pemindahan bank selepas Banglong sahkan stok.*`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/60123456789?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-background/5 text-foreground font-sans antialiased selection:bg-primary selection:text-black">

      <main className="mx-auto max-w-5xl px-6 py-12">
        {/* Step Progress Tracker */}
        <div className="mb-12 max-w-md mx-auto flex items-center justify-between relative px-2 animate-fade-in">
          {/* Progress lines */}
          <div className="absolute top-4 left-6 right-6 h-[2px] bg-border-custom z-0" />
          <div
            className="absolute top-4 left-6 h-[2px] bg-primary z-0 transition-all duration-500"
            style={{
              width: view === "catalog" ? "0%" : view === "detail" ? "50%" : "100%",
            }}
          />

          {[
            { key: "catalog", label: "Catalog", step: 1 },
            { key: "detail", label: "Product Info", step: 2 },
            { key: "checkout", label: "Checkout", step: 3 },
          ].map((s) => {
            const isActive = view === s.key || (s.key === "catalog" && view !== "catalog") || (s.key === "detail" && view === "checkout");
            const isCurrent = view === s.key;
            return (
              <div key={s.key} className="flex flex-col items-center z-10 relative">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-extrabold border transition-all duration-300 ${
                    isCurrent
                      ? "bg-primary text-black border-primary ring-4 ring-primary/20 scale-105"
                      : isActive
                      ? "bg-zinc-900 text-primary border-primary"
                      : "bg-zinc-950 text-zinc-500 border-border-custom"
                  }`}
                >
                  {s.step}
                </div>
                <span
                  className={`text-[10px] font-black mt-2 tracking-wider uppercase transition-colors duration-300 ${
                    isCurrent ? "text-primary" : isActive ? "text-zinc-300" : "text-zinc-500"
                  }`}
                >
                  {s.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* STEP 1: CATALOG VIEW */}
        {view === "catalog" && (
          <div className="animate-fade-in">
            <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h1 className="text-3xl font-black font-serif tracking-tight text-white">Katalog Ikan Laga Liar</h1>
                <p className="text-sm text-zinc-400 mt-2">Pilih baka ikan laga liar pilihan anda di bawah untuk membuat tempahan.</p>
              </div>
              {/* Product Search with Icon */}
              <div className="relative w-full md:max-w-xs font-sans">
                <span className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none text-zinc-400 text-xs">🔍</span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari baka ikan..."
                  className="w-full rounded-xl border border-border-custom bg-card/30 pl-10 pr-4 py-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all backdrop-blur-sm"
                />
              </div>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2 mb-8 border-b border-border-custom/20 pb-5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`cursor-pointer px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 border ${
                    selectedCategory === cat
                      ? "bg-primary text-black border-primary font-black shadow-lg shadow-primary/20 scale-102"
                      : "bg-card/20 text-zinc-400 border-border-custom hover:border-primary/40 hover:text-white"
                  }`}
                >
                  {cat === "Semua" ? "🐟 Semua" : cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
              {filteredBettas.length === 0 ? (
                <div className="w-full text-center py-12 border border-dashed border-border-custom rounded-2xl bg-card/10 col-span-full">
                  <p className="text-xs text-zinc-500 italic">Tiada baka ikan ditemui bagi carian "{searchQuery}"</p>
                </div>
              ) : (
                filteredBettas.map((fish) => (
                  <div
                    key={fish.id}
                    onClick={() => selectProductForDetail(fish)}
                    className="group cursor-pointer flex flex-col justify-between rounded-2xl border border-border-custom bg-card/45 overflow-hidden transition-all duration-300 hover:border-primary/45 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary/5"
                  >
                    <div>
                      <div className="h-48 overflow-hidden relative">
                        <img
                          src={fish.image}
                          alt={fish.name}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-103"
                        />
                        <span className="absolute bottom-3 right-3 rounded-xl bg-zinc-950/80 backdrop-blur-sm px-3.5 py-2 text-xs font-black text-primary border border-primary/20">
                          RM {fish.price.toFixed(2)}
                        </span>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="rounded-full bg-primary/10 text-primary border border-primary/20 px-2.5 py-0.5 text-[9px] font-extrabold tracking-wider">
                            {fish.rarity.toUpperCase()}
                          </span>
                          <span className="text-[11px] text-zinc-400">📍 {fish.origin}</span>
                        </div>
                        <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors duration-200">{fish.name}</h3>
                        <p className="text-xs text-zinc-400 mt-2 leading-relaxed line-clamp-2">
                          {fish.description}
                        </p>
                      </div>
                    </div>
                    <div className="p-6 pt-0">
                      <span className="text-xs font-black text-primary group-hover:underline">Lihat Spesifikasi & Beli →</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* STEP 2: PRODUCT DETAIL VIEW (Ikan Information) */}
        {view === "detail" && selectedFish && (
          <div className="max-w-3xl mx-auto border border-border-custom bg-card/45 rounded-3xl overflow-hidden shadow-2xl animate-scale-up">
            <div className="h-80 w-full relative">
              <img
                src={selectedFish.image}
                alt={selectedFish.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/85 via-card/10 to-transparent" />
              <button
                onClick={() => setView("catalog")}
                className="cursor-pointer absolute top-4 left-4 rounded-xl bg-black/55 backdrop-blur-sm text-white px-4 py-2 text-xs font-extrabold hover:bg-black/75 transition-all"
              >
                ← Kembali ke Katalog
              </button>
            </div>

            <div className="p-6 md:p-10 space-y-8">
              <div>
                <span className="text-xs text-zinc-400 font-semibold tracking-wider">📍 ASAL HABITAT: {selectedFish.origin}</span>
                <h2 className="text-3xl font-black font-serif text-white mt-1.5">{selectedFish.name}</h2>
                <p className="text-sm text-primary font-serif italic mt-0.5">{selectedFish.scientificName}</p>
              </div>

              {/* Product Specifications Grid */}
              <div className="grid grid-cols-2 gap-6 border-t border-b border-border-custom/80 py-6">
                <div>
                  <span className="text-[10px] text-zinc-500 uppercase font-black tracking-wider">Harga Tempahan</span>
                  <p className="text-2xl font-black text-primary mt-0.5">RM {selectedFish.price.toFixed(2)}</p>
                </div>
                <div>
                  <span className="text-[10px] text-zinc-500 uppercase font-black tracking-wider">Status Stok</span>
                  <p className="text-sm font-extrabold text-emerald-400 mt-1.5">🟢 Ready Stock (Tersedia)</p>
                </div>
                <div>
                  <span className="text-[10px] text-zinc-500 uppercase font-black tracking-wider">Rarity Spesies</span>
                  <p className="text-sm font-extrabold text-white mt-1">{selectedFish.rarity}</p>
                </div>
                <div>
                  <span className="text-[10px] text-zinc-500 uppercase font-black tracking-wider">Kaedah Pembungkusan</span>
                  <p className="text-sm font-medium text-white mt-1">Styrofoam Box + Kotak Tebal</p>
                </div>
              </div>

              {/* General Fish Info (Short specs) */}
              <div className="space-y-3">
                <h3 className="text-xs font-black text-white uppercase tracking-wider">Spesifikasi Pembelian:</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Baka ikan laga liar yang ditawarkan disaring terlebih dahulu untuk menjamin kualiti terbaik. Kami menjamin pembungkusan yang selamat dengan ruang udara yang mencukupi untuk penghantaran kurier. Penghantaran dibuat ke seluruh negara.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={() => handleBuyNow(selectedFish)}
                  className="cursor-pointer flex-1 rounded-xl bg-primary py-4 text-xs font-black text-black text-center hover:scale-[1.01] hover:shadow-lg hover:shadow-primary/10 transition-all active:scale-[0.99]"
                >
                  🛒 Beli Sekarang (Buy Now)
                </button>
                <a
                  href={`/?article=${selectedFish.id}`}
                  className="rounded-xl border border-border-custom bg-zinc-950/20 py-4 px-6 text-xs font-bold text-zinc-400 hover:text-foreground text-center transition-all cursor-pointer"
                >
                  📖 Baca Artikel Ensiklopedia
                </a>
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: CHECKOUT VIEW */}
        {view === "checkout" && cart.length > 0 && (
          <div className="max-w-2xl mx-auto space-y-8 animate-scale-up">
            <div className="flex items-center justify-between border-b border-border-custom pb-4">
              <h1 className="text-2xl font-black font-serif tracking-tight text-white">Checkout Pesanan</h1>
              <button
                onClick={() => setView("detail")}
                className="cursor-pointer rounded-xl border border-border-custom bg-card/50 px-4 py-2 text-xs font-bold text-zinc-400 hover:text-white transition-all"
              >
                ← Kembali ke Detail
              </button>
            </div>

            {/* Cart summary */}
            <div className="rounded-2xl border border-border-custom bg-card/45 p-6 md:p-8 space-y-6">
              <h3 className="text-xs font-black text-white uppercase tracking-wider text-primary">Ringkasan Troli</h3>
              {cart.map((item) => (
                <div key={item.fish.id} className="flex items-center justify-between border-b border-border-custom/50 pb-5">
                  <div>
                    <p className="text-base font-bold text-white">{item.fish.name}</p>
                    <p className="text-xs text-primary italic font-serif mt-0.5">{item.fish.scientificName}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(-1)}
                        className="cursor-pointer flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-850 hover:bg-zinc-700 text-xs font-extrabold text-white transition-all"
                      >
                        -
                      </button>
                      <span className="text-xs font-black text-white px-2">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(1)}
                        className="cursor-pointer flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-black hover:opacity-85 text-xs font-extrabold transition-all"
                      >
                        +
                      </button>
                    </div>
                    <span className="text-lg font-black text-primary">RM {(item.fish.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
              ))}
              <div className="flex justify-between items-center pt-2">
                <span className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">Jumlah Keseluruhan</span>
                <span className="text-xl font-black text-primary">RM {calculateTotal().toFixed(2)}</span>
              </div>
            </div>

            {/* Checkout Form */}
            <form onSubmit={handleCheckout} className="rounded-2xl border border-border-custom bg-card/45 p-6 md:p-8 space-y-6">
              <h3 className="text-xs font-black text-white uppercase tracking-wider text-primary">Maklumat Pos Penerima</h3>
              
              <div className="space-y-4 font-sans">
                <div>
                  <label className="block text-[10px] text-zinc-500 uppercase font-black tracking-wider mb-1.5">Nama Penuh</label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Contoh: Ahmad bin Ali"
                    className="w-full rounded-xl border border-border-custom bg-zinc-950/40 p-3.5 text-xs text-white placeholder-zinc-655/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[10px] text-zinc-500 uppercase font-black tracking-wider mb-1.5">Nombor Telefon</label>
                  <input
                    type="tel"
                    required
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="Contoh: 019-1234567"
                    className="w-full rounded-xl border border-border-custom bg-zinc-950/40 p-3.5 text-xs text-white placeholder-zinc-655/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[10px] text-zinc-500 uppercase font-black tracking-wider mb-1.5">Alamat Penghantaran Lengkap</label>
                  <textarea
                    required
                    rows={4}
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                    placeholder="Sila masukkan alamat rumah lengkap untuk tujuan pos ikan."
                    className="w-full rounded-xl border border-border-custom bg-zinc-950/40 p-3.5 text-xs text-white placeholder-zinc-655/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                  />
                </div>

                <div>
                  <label className="block text-[10px] text-zinc-500 uppercase font-black tracking-wider mb-1.5">Pilihan Kurier / Hantar</label>
                  <select
                    value={courier}
                    onChange={(e) => setCourier(e.target.value)}
                    className="w-full rounded-xl border border-border-custom bg-zinc-950/80 p-3.5 text-xs text-zinc-300 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                  >
                    <option value="J&T Express (Semenanjung)">J&T Express (Semenanjung - RM15.00)</option>
                    <option value="PosLaju (Semenanjung)">PosLaju (Semenanjung - RM15.00)</option>
                    <option value="J&T Express (Sabah/Sarawak)">J&T Express (Sabah/Sarawak - RM20.00)</option>
                    <option value="Self-Pickup (Kulim, Kedah)">Self-Pickup (Ambil Sendiri di Kulim - Percuma)</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="cursor-pointer w-full rounded-xl bg-emerald-500 hover:bg-emerald-400 py-4 text-xs font-black text-black shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/25 transition-all active:scale-[0.99]"
              >
                💬 Hantar Pesanan Ke WhatsApp Banglong
              </button>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}
