"use client";

import React from "react";

export default function HowToPurchase() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 animate-fade-in space-y-8">
      <div className="space-y-4">
        <span className="text-xs text-primary font-black tracking-wider uppercase">🛍 INFO TEMPAHAN</span>
        <h1 className="text-4xl md:text-5xl font-black font-serif text-white leading-tight">
          Cara Pembelian Ikan Laga
        </h1>
        <p className="text-sm text-zinc-400 max-w-2xl leading-relaxed">
          Kami menyediakan proses pembelian yang selamat, telus, dan mudah melalui pautan WhatsApp terus kepada Banglong.
        </p>
      </div>

      <div className="max-w-3xl space-y-6 pt-6">
        {[
          {
            step: "1",
            title: "Pilih Ikan Idaman Anda",
            desc: "Layari halaman katalog di tab 'Kedai'. Tapis baka ikan yang anda mahukan menggunakan kotak carian yang disediakan.",
          },
          {
            step: "2",
            title: "Semak Spesifikasi & Tekan 'Buy Now'",
            desc: "Klik kad produk untuk membaca spesifikasi baka ikan (asal-usul, harga, rarity). Tekan butang 'Buy Now' untuk pergi ke halaman checkout.",
          },
          {
            step: "3",
            title: "Isi Maklumat Penghantaran & Hantar ke WhatsApp",
            desc: "Lengkapkan nama penuh, nombor telefon, alamat pos, dan pilihan kurier anda. Tekan butang submit untuk menjana resit automatik dan menghantarnya terus ke WhatsApp Banglong.",
          },
          {
            step: "4",
            title: "Pengesahan Stok & Pembayaran Bank",
            desc: "Banglong akan mengesahkan kesediaan stok fizikal ikan tersebut. Selepas stok disahkan, buat pemindahan bank ke akaun yang disediakan oleh Banglong dan lampirkan resit pembayaran.",
          },
        ].map((item) => (
          <div key={item.step} className="flex gap-4 items-start p-6 rounded-2xl border border-border-custom bg-card/45">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-black font-black text-sm">
              {item.step}
            </span>
            <div className="space-y-1">
              <h3 className="text-base font-bold text-white">{item.title}</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
