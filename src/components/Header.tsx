"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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
          <span className="rounded bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">MY</span>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="/encyclopedia" className="text-xs font-black uppercase tracking-wider text-zinc-400 hover:text-white transition-colors">
            Ensiklopedia
          </a>
          <a href="/shop" className="text-xs font-black uppercase tracking-wider text-zinc-400 hover:text-white transition-colors">
            Kedai
          </a>
          <a href="/leaves" className="text-xs font-black uppercase tracking-wider text-zinc-400 hover:text-white transition-colors">
            Daun Ketapang
          </a>
          <a href="/care" className="text-xs font-black uppercase tracking-wider text-zinc-400 hover:text-white transition-colors">
            Penjagaan
          </a>
          <a href="/purchase" className="text-xs font-black uppercase tracking-wider text-zinc-400 hover:text-white transition-colors">
            Cara Beli
          </a>
          <a href="/contact" className="text-xs font-black uppercase tracking-wider text-zinc-400 hover:text-white transition-colors">
            Hubungi
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-xl border border-border-custom bg-card/45 text-white focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Panel */}
      {mobileMenuOpen && (
        <nav className="md:hidden flex flex-col border-t border-border-custom bg-background px-6 py-4 space-y-3 animate-fade-in font-sans">
          <a href="/encyclopedia" className="text-xs font-black uppercase tracking-wider text-zinc-400 hover:text-white transition-colors py-1.5" onClick={() => setMobileMenuOpen(false)}>
            Ensiklopedia
          </a>
          <a href="/shop" className="text-xs font-black uppercase tracking-wider text-zinc-400 hover:text-white transition-colors py-1.5" onClick={() => setMobileMenuOpen(false)}>
            Kedai
          </a>
          <a href="/leaves" className="text-xs font-black uppercase tracking-wider text-zinc-400 hover:text-white transition-colors py-1.5" onClick={() => setMobileMenuOpen(false)}>
            Daun Ketapang
          </a>
          <a href="/care" className="text-xs font-black uppercase tracking-wider text-zinc-400 hover:text-white transition-colors py-1.5" onClick={() => setMobileMenuOpen(false)}>
            Penjagaan
          </a>
          <a href="/purchase" className="text-xs font-black uppercase tracking-wider text-zinc-400 hover:text-white transition-colors py-1.5" onClick={() => setMobileMenuOpen(false)}>
            Cara Beli
          </a>
          <a href="/contact" className="text-xs font-black uppercase tracking-wider text-zinc-400 hover:text-white transition-colors py-1.5" onClick={() => setMobileMenuOpen(false)}>
            Hubungi
          </a>
        </nav>
      )}
    </header>
  );
}
