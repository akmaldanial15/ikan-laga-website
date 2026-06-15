"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactUs() {
  const { locale } = useLanguage();
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 animate-fade-in space-y-8">
      <div className="space-y-4">
        <span className="text-xs text-primary font-black tracking-wider uppercase">
          {locale === "en" ? "📞 CONTACT US" : "📞 HUBUNGI KAMI"}
        </span>
        <h1 className="text-4xl md:text-5xl font-black font-serif text-white leading-tight">
          {locale === "en" ? "Contact Banglong & Team" : "Hubungi Banglong & Team"}
        </h1>
        <p className="text-sm text-zinc-400 max-w-2xl leading-relaxed">
          {locale === "en"
            ? "Have questions about wild betta breeds, wholesale ketapang leaves, or care tips? Contact us now."
            : "Mempunyai pertanyaan mengenai baka ikan laga liar, borong daun ketapang, atau tips penjagaan? Hubungi kami sekarang."}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
        <div className="rounded-2xl border border-border-custom bg-card/45 p-8 space-y-6">
          <h3 className="text-xl font-bold text-white">
            {locale === "en" ? "Communication Channels:" : "Saluran Komunikasi:"}
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-xl">💬</span>
              <div>
                <p className="text-xs text-zinc-500 font-bold uppercase">
                  {locale === "en" ? "WhatsApp Contact" : "WhatsApp Hubungan"}
                </p>
                <a
                  href="https://wa.me/60123456789"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-extrabold text-primary hover:underline"
                >
                  +60 12-345 6789 (Banglong)
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-xl">📍</span>
              <div>
                <p className="text-xs text-zinc-500 font-bold uppercase">
                  {locale === "en" ? "Self-Pickup Location" : "Lokasi Ambil Sendiri (Self-Pickup)"}
                </p>
                <p className="text-sm text-zinc-300">Kulim, Kedah, Malaysia</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-border-custom bg-card/45 p-8 space-y-4">
          <h3 className="text-xl font-bold text-white">
            {locale === "en" ? "Shipping Operation Hours:" : "Waktu Operasi Pos:"}
          </h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            {locale === "en" ? (
              <>
                * **Postage Days**: Monday, Tuesday & Wednesday only (to ensure fish do not get stuck at the post office over the weekend).
                <br />
                * **Weekend Orders**: Will be posted on the following Monday.
                <br />
                * **Guarantee (DOA - Death on Arrival)**: If the fish is dead upon arrival, please take a picture/video of the fish inside the original unopened plastic bag and send it to Banglong's WhatsApp for a refund or replacement claim.
              </>
            ) : (
              <>
                * **Hari Pos**: Isnin, Selasa & Rabu sahaja (bagi memastikan ikan tidak tersangkut di pejabat pos pada hujung minggu).
                <br />
                * **Pesanan Hujung Minggu**: Akan dipos pada hari Isnin berikutnya.
                <br />
                * **Jaminan (DOA - Death on Arrival)**: Jika ikan mati semasa sampai, sila tangkap gambar/video ikan di dalam beg plastik asal tanpa buka dan hantar ke WhatsApp Banglong untuk tuntutan ganti rugi atau gantian.
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
