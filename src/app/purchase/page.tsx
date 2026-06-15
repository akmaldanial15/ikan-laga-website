"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function HowToPurchase() {
  const { locale } = useLanguage();
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 animate-fade-in space-y-8">
      <div className="space-y-4">
        <span className="text-xs text-primary font-black tracking-wider uppercase">
          {locale === "en" ? "🛍 ORDER INFO" : "🛍 INFO TEMPAHAN"}
        </span>
        <h1 className="text-4xl md:text-5xl font-black font-serif text-white leading-tight">
          {locale === "en" ? "How to Purchase Wild Betta" : "Cara Pembelian Ikan Laga"}
        </h1>
        <p className="text-sm text-zinc-400 max-w-2xl leading-relaxed">
          {locale === "en"
            ? "We provide a safe, transparent, and easy purchasing process via a direct WhatsApp link to Banglong."
            : "Kami menyediakan proses pembelian yang selamat, telus, dan mudah melalui pautan WhatsApp terus kepada Banglong."}
        </p>
      </div>

      <div className="max-w-3xl space-y-6 pt-6">
        {[
          {
            step: "1",
            title: { en: "Choose Your Dream Fish", my: "Pilih Ikan Idaman Anda" },
            desc: { en: "Browse the catalog on the 'Shop' tab. Filter the fish species you want using the search box provided.", my: "Layari halaman katalog di tab 'Kedai'. Tapis spesis ikan yang anda mahukan menggunakan kotak carian yang disediakan." },
          },
          {
            step: "2",
            title: { en: "Check Specifications & Click 'Buy Now'", my: "Semak Spesifikasi & Tekan 'Buy Now'" },
            desc: { en: "Click the product card to read the fish species specifications (origin, price, rarity). Click the 'Buy Now' button to go to the checkout page.", my: "Klik kad produk untuk membaca spesifikasi spesis ikan (asal-usul, harga, rarity). Tekan butang 'Buy Now' untuk pergi ke halaman checkout." },
          },
          {
            step: "3",
            title: { en: "Fill Shipping Info & Send to WhatsApp", my: "Isi Maklumat Penghantaran & Hantar ke WhatsApp" },
            desc: { en: "Fill in your full name, phone number, postal address, and your courier choice. Click submit to generate an automatic receipt and send it directly to Banglong's WhatsApp.", my: "Lengkapkan nama penuh, nombor telefon, alamat pos, dan pilihan kurier anda. Tekan butang submit untuk menjana resit automatik dan menghantarnya terus ke WhatsApp Banglong." },
          },
          {
            step: "4",
            title: { en: "Stock Confirmation & Bank Transfer", my: "Pengesahan Stok & Pembayaran Bank" },
            desc: { en: "Banglong will confirm the physical stock availability of the fish. Once the stock is confirmed, make a bank transfer to the account provided by Banglong and attach the payment receipt.", my: "Banglong akan mengesahkan kesediaan stok fizikal ikan tersebut. Selepas stok disahkan, buat pemindahan bank ke akaun yang disediakan oleh Banglong dan lampirkan resit pembayaran." },
          },
        ].map((item) => (
          <div key={item.step} className="flex gap-4 items-start p-6 rounded-2xl border border-border-custom bg-card/45">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-black font-black text-sm">
              {item.step}
            </span>
            <div className="space-y-1">
              <h3 className="text-base font-bold text-white">{item.title[locale]}</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">{item.desc[locale]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
