"use client";

import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useLanguage } from "../context/LanguageContext";
import { useCurrency, CurrencyCode } from "../context/CurrencyContext";

export default function Header() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const { locale, setLocale } = useLanguage();
  const { currency, setCurrency, currencyList } = useCurrency();

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

          {/* Custom Desktop Currency Selector */}
          <div className="relative ml-2 font-sans">
            <button
              onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
              className="cursor-pointer flex items-center gap-1.5 rounded-lg border border-border-custom/50 bg-zinc-950/50 px-3 py-1.5 text-[10px] font-black tracking-wider text-zinc-400 hover:text-zinc-200 outline-none backdrop-blur-sm transition-all duration-200"
            >
              <span>{currency} ({currencyList.find(c => c.code === currency)?.symbol || "$"})</span>
              <span className={`text-[8px] transition-transform duration-200 ${isCurrencyOpen ? 'rotate-180' : ''}`}>▼</span>
            </button>

            {isCurrencyOpen && (
              <>
                {/* Click outside overlay */}
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setIsCurrencyOpen(false)}
                />
                
                {/* Floating Menu */}
                <div className="absolute right-0 mt-2 w-48 rounded-xl border border-border-custom bg-[#0d1b3e]/90 backdrop-blur-md p-1.5 shadow-2xl z-50 animate-fade-in space-y-0.5">
                  {currencyList.map((c) => {
                    const isActive = c.code === currency;
                    return (
                      <button
                        key={c.code}
                        onClick={() => {
                          setCurrency(c.code);
                          setIsCurrencyOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left transition-all duration-150 cursor-pointer ${
                          isActive 
                            ? "bg-primary/15 text-primary font-black" 
                            : "text-zinc-400 hover:text-white hover:bg-zinc-800/40"
                        }`}
                      >
                        <div className="flex flex-col">
                          <span className="text-[10px] font-black tracking-wider">{c.code}</span>
                          <span className="text-[9px] opacity-60 font-medium">{c.name}</span>
                        </div>
                        <span className={`text-[11px] font-bold ${isActive ? 'text-primary' : 'text-zinc-500'}`}>
                          {c.symbol}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </>
            )}
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

          {/* Mobile Currency Switcher */}
          <div className="pt-2.5 border-t border-border-custom/20 flex items-center justify-between">
            <span className="text-[10px] font-black uppercase tracking-wider text-zinc-500">
              {locale === "en" ? "Currency" : "Mata Wang"}
            </span>
            <div className="relative flex rounded-lg border border-border-custom/50 bg-zinc-950/50 backdrop-blur-sm overflow-hidden">
              <select
                value={currency}
                onChange={(e) => {
                  setCurrency(e.target.value as CurrencyCode);
                  setMobileMenuOpen(false);
                }}
                className="cursor-pointer appearance-none bg-transparent px-3 py-1.5 text-[10px] font-black tracking-wider text-zinc-400 hover:text-zinc-200 outline-none pr-6 transition-all duration-200"
                style={{
                  backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='rgba%28255,255,255,0.4%29' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                  backgroundPosition: "right 6px center",
                  backgroundSize: "8px",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {currencyList.map((c) => (
                  <option key={c.code} value={c.code} className="bg-zinc-900 text-white">
                    {c.code} ({c.symbol})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
