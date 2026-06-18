"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./purchase.module.css";

const LOCAL_STEPS = [
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
];

const INTERNATIONAL_NODES = [
  {
    step: "01",
    icon: "📱",
    title: { en: "Select & Contact", my: "Pilih & Hubungi" },
    desc: {
      en: "Choose your wild betta and contact us on WhatsApp. Inform us of your destination country.",
      my: "Pilih ikan laga liar anda dan hubungi kami di WhatsApp. Maklumkan negara destinasi anda.",
    },
  },
  {
    step: "02",
    icon: "📦",
    title: { en: "Export Agent", my: "Ejen Eksport" },
    desc: {
      en: "We prepare the fish (quarantine) and send them to the primary export transshipper in Malaysia.",
      my: "Kami menyediakan ikan (kuarantin) dan menghantarnya kepada ejen eksport utama di Malaysia.",
    },
  },
  {
    step: "03",
    icon: "✈️",
    title: { en: "Air Cargo Flight", my: "Kargo Penerbangan" },
    desc: {
      en: "The export agent clears customs and flies the fish to your country's local import transshipper.",
      my: "Ejen eksport menguruskan kastam dan menerbangkan ikan ke ejen import di negara anda.",
    },
  },
  {
    step: "04",
    icon: "🏡",
    title: { en: "Doorstep Delivery", my: "Penerimaan Di Rumah" },
    desc: {
      en: "Your local transshipper clears customs, repackages, and ships the fish directly to your doorstep.",
      my: "Ejen import tempatan menguruskan kastam, membungkus semula, dan pos terus ke pintu rumah anda.",
    },
  },
];

export default function HowToPurchase() {
  const { locale } = useLanguage();

  return (
    <div className={styles.container}>
      {/* Header Info */}
      <div className={styles.headerSection}>
        <span className={styles.badge}>
          {locale === "en" ? "🛍 ORDER INFO" : "🛍 INFO TEMPAHAN"}
        </span>
        <h1 className={styles.title}>
          {locale === "en" ? "How to Purchase Wild Betta" : "Cara Pembelian Ikan Laga"}
        </h1>
        <p className={styles.subtitle}>
          {locale === "en"
            ? "We provide shipping services locally within Malaysia and internationally through licensed transshippers to ensure your wild bettas arrive safely."
            : "Kami menyediakan perkhidmatan penghantaran secara tempatan di dalam Malaysia dan juga ke peringkat antarabangsa melalui ejen transship berlesen."}
        </p>
      </div>

      {/* 1. Local Shipping Section */}
      <div className={styles.sectionBlock}>
        <h2 className={styles.sectionTitle}>
          <span>🇲🇾 {locale === "en" ? "Local Shipping (Within Malaysia)" : "Penghantaran Tempatan (Malaysia)"}</span>
        </h2>
        <div className={styles.localGrid}>
          {LOCAL_STEPS.map((item) => (
            <div key={item.step} className={styles.stepCard}>
              <span className={styles.stepNumber}>{item.step}</span>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{item.title[locale]}</h3>
                <p className={styles.stepDesc}>{item.desc[locale]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. International Transshipping Section (Full Width Infographic) */}
      <div className={styles.sectionBlock}>
        <h2 className={styles.sectionTitle}>
          <span>🌐 {locale === "en" ? "International Transshipping" : "Penghantaran Antarabangsa"}</span>
        </h2>
        <div className={styles.transshipPanel}>
          <p className={styles.transshipIntro}>
            {locale === "en"
              ? "For buyers outside Malaysia, live aquatic animals must be shipped via transshipping agents. This ensures compliance with border customs and safe live-arrival."
              : "Bagi pembeli di luar Malaysia, haiwan hidup mesti dihantar melalui ejen transshipment berlesen. Ini bagi memastikan pelepasan kastam yang sah dan ikan sampai dengan selamat."}
          </p>
          
          {/* Infographic Grid Flow */}
          <div className={styles.infographicFlow}>
            {INTERNATIONAL_NODES.map((node) => (
              <div key={node.step} className={styles.infoCard}>
                <span className={styles.infoBadge}>
                  {locale === "en" ? `Step ${node.step}` : `Langkah ${node.step}`}
                </span>
                <div className={styles.infoIconWrapper}>
                  {node.icon}
                </div>
                <h4 className={styles.infoTitle}>{node.title[locale]}</h4>
                <p className={styles.infoDesc}>{node.desc[locale]}</p>
              </div>
            ))}
          </div>

          <div className={styles.ctaWrapper}>
            <a 
              href="https://wa.me/60123456789?text=Hi%20Banglong,%20I%20am%20an%20international%20buyer%20interested%20in%20ordering%20wild%20bettas." 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              💬 {locale === "en" ? "Inquire About Transshipping" : "Tanya Mengenai Transshipping"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
