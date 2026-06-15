"use client";

import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useLanguage } from "../context/LanguageContext";

export default function Header() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { locale, setLocale } = useLanguage();

  // Secret routing to admin panel via Ctrl + Click
  const handleMyClick = (e: React.MouseEvent) => {
    if (e.ctrlKey) {
      e.preventDefault();
      router.push("/admin");
    }
  };

  // Hide header on admin pages
  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border-custom bg-background/60 backdrop-blur-lg">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <a href="/" className="text-xl font-black tracking-wider text-primary font-sans hover:opacity-85 transition-opacity">
            WILD BETTA
          </a>
          <span 
            onClick={handleMyClick}
            className="rounded bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary select-none cursor-default active:bg-primary/20"
          >
            {locale.toUpperCase()}
          </span>
        </div>

        {/* Desktop Nav Links & Language Toggle */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6">
            <a href="/encyclopedia" className="text-xs font-black uppercase tracking-wider text-zinc-400 hover:text-white transition-colors">
              {locale === "en" ? "Encyclopedia" : "Ensiklopedia"}
            </a>
            <a href="/shop" className="text-xs font-black uppercase tracking-wider text-zinc-400 hover:text-white transition-colors">
              {locale === "en" ? "Shop" : "Kedai"}
            </a>
            <a href="/leaves" className="text-xs font-black uppercase tracking-wider text-zinc-400 hover:text-white transition-colors">
              {locale === "en" ? "Ketapang Leaves" : "Daun Ketapang"}
            </a>
            <a href="/care" className="text-xs font-black uppercase tracking-wider text-zinc-400 hover:text-white transition-colors">
              {locale === "en" ? "Care Guide" : "Penjagaan"}
            </a>
            <a href="/purchase" className="text-xs font-black uppercase tracking-wider text-zinc-400 hover:text-white transition-colors">
              {locale === "en" ? "How to Buy" : "Cara Beli"}
            </a>
            <a href="/contact" className="text-xs font-black uppercase tracking-wider text-zinc-400 hover:text-white transition-colors">
              {locale === "en" ? "Contact" : "Hubungi"}
            </a>
          </nav>

          <div className="flex rounded-lg overflow-hidden border border-border-custom/50 bg-zinc-950/50 backdrop-blur-sm ml-2">
            <button
              onClick={() => setLocale("en")}
              className={`cursor-pointer px-2.5 py-1.5 text-[10px] font-black tracking-wider transition-all duration-200 ${
                locale === "en"
                  ? "bg-primary/15 text-primary border-r border-primary/20"
                  : "text-zinc-500 hover:text-zinc-300 border-r border-border-custom/30"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLocale("my")}
              className={`cursor-pointer px-2.5 py-1.5 text-[10px] font-black tracking-wider transition-all duration-200 ${
                locale === "my"
                  ? "bg-primary/15 text-primary"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              MY
            </button>
          </div>
        </div>

        {/* Mobile Menu Button & Language Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <div className="flex rounded-lg overflow-hidden border border-border-custom/50 bg-zinc-950/50 backdrop-blur-sm">
            <button
              onClick={() => setLocale("en")}
              className={`cursor-pointer px-2.5 py-1.5 text-[10px] font-black tracking-wider transition-all duration-200 ${
                locale === "en"
                  ? "bg-primary/15 text-primary border-r border-primary/20"
                  : "text-zinc-500 hover:text-zinc-300 border-r border-border-custom/30"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLocale("my")}
              className={`cursor-pointer px-2.5 py-1.5 text-[10px] font-black tracking-wider transition-all duration-200 ${
                locale === "my"
                  ? "bg-primary/15 text-primary"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              MY
            </button>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border-custom bg-card/45 text-white focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Panel */}
      {mobileMenuOpen && (
        <nav className="md:hidden flex flex-col border-t border-border-custom bg-background px-6 py-4 space-y-3 animate-fade-in font-sans">
          <a href="/encyclopedia" className="text-xs font-black uppercase tracking-wider text-zinc-400 hover:text-white transition-colors py-1.5" onClick={() => setMobileMenuOpen(false)}>
            {locale === "en" ? "Encyclopedia" : "Ensiklopedia"}
          </a>
          <a href="/shop" className="text-xs font-black uppercase tracking-wider text-zinc-400 hover:text-white transition-colors py-1.5" onClick={() => setMobileMenuOpen(false)}>
            {locale === "en" ? "Shop" : "Kedai"}
          </a>
          <a href="/leaves" className="text-xs font-black uppercase tracking-wider text-zinc-400 hover:text-white transition-colors py-1.5" onClick={() => setMobileMenuOpen(false)}>
            {locale === "en" ? "Ketapang Leaves" : "Daun Ketapang"}
          </a>
          <a href="/care" className="text-xs font-black uppercase tracking-wider text-zinc-400 hover:text-white transition-colors py-1.5" onClick={() => setMobileMenuOpen(false)}>
            {locale === "en" ? "Care Guide" : "Penjagaan"}
          </a>
          <a href="/purchase" className="text-xs font-black uppercase tracking-wider text-zinc-400 hover:text-white transition-colors py-1.5" onClick={() => setMobileMenuOpen(false)}>
            {locale === "en" ? "How to Buy" : "Cara Beli"}
          </a>
          <a href="/contact" className="text-xs font-black uppercase tracking-wider text-zinc-400 hover:text-white transition-colors py-1.5" onClick={() => setMobileMenuOpen(false)}>
            {locale === "en" ? "Contact" : "Hubungi"}
          </a>
        </nav>
      )}
    </header>
  );
}
