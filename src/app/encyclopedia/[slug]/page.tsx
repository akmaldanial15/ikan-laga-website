"use client";

import React, { useState, useEffect } from "react";
import { mockBettas } from "../../../mock/mockData";
import { articles } from "../../../mock/articleData";
import { useRouter } from "next/navigation";
import { useLanguage } from "../../../context/LanguageContext";
import MarkdownRenderer, {
  extractHeadings,
} from "../../../components/MarkdownRenderer";

interface PageProps {
  params: Promise<{ slug: string }>;
}

/* ================================================================== */
/*  Language Toggle (Segmented Control)                               */
/* ================================================================== */
function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex rounded-xl overflow-hidden border border-border-custom/50 bg-zinc-950/50 backdrop-blur-sm">
      <button
        onClick={() => setLocale("en")}
        className={`cursor-pointer px-4 py-2 text-[11px] font-black tracking-wider transition-all duration-200 ${
          locale === "en"
            ? "bg-primary/15 text-primary border-r border-primary/20"
            : "text-zinc-500 hover:text-zinc-300 border-r border-border-custom/30"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLocale("my")}
        className={`cursor-pointer px-4 py-2 text-[11px] font-black tracking-wider transition-all duration-200 ${
          locale === "my"
            ? "bg-primary/15 text-primary"
            : "text-zinc-500 hover:text-zinc-300"
        }`}
      >
        MY
      </button>
    </div>
  );
}

/* ================================================================== */
/*  Table of Contents (Desktop sidebar / Mobile collapsible)          */
/* ================================================================== */
function TableOfContents({
  headings,
  activeId,
}: {
  headings: { level: number; text: string; id: string }[];
  activeId: string;
}) {
  return (
    <nav className="space-y-1">
      <h4 className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] mb-3">
        Contents
      </h4>
      <ul className="space-y-0.5">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(h.id)?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              className={`block text-[11px] leading-snug py-1.5 transition-all duration-200 border-l-2 ${
                h.level === 3
                  ? "pl-5"
                  : h.level === 4
                  ? "pl-8"
                  : "pl-3"
              } ${
                activeId === h.id
                  ? "border-primary text-primary font-bold"
                  : "border-transparent text-zinc-500 hover:text-zinc-300 hover:border-zinc-600"
              }`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/* ================================================================== */
/*  Main Article Detail Page                                          */
/* ================================================================== */
export default function ArticleDetailPage({ params }: PageProps) {
  const router = useRouter();
  const { slug } = React.use(params);
  const { locale } = useLanguage();
  const [tocOpen, setTocOpen] = useState(false);
  const [activeHeading, setActiveHeading] = useState("");

  const fish = mockBettas.find((f) => f.id === slug);
  const article = articles[slug];

  /* Intersection Observer — track which heading is in view */
  useEffect(() => {
    if (!article) return;
    const content = article.content[locale];
    const headings = extractHeadings(content);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveHeading(entry.target.id);
          }
        }
      },
      { rootMargin: "-15% 0px -75% 0px" }
    );

    /* Small delay to let the DOM render headings first */
    const timer = setTimeout(() => {
      headings.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [article, locale]);

  /* ── 404 state ── */
  if (!fish) {
    return (
      <div className="min-h-screen bg-background/5 text-foreground flex flex-col items-center justify-center p-6">
        <div className="max-w-md w-full border border-border-custom bg-card/45 backdrop-blur-md rounded-2xl p-8 text-center space-y-4">
          <span className="text-4xl">📚</span>
          <h2 className="text-xl font-bold text-white font-serif">
            Article Not Found
          </h2>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Sorry, the encyclopedia article with slug &quot;{slug}&quot; was not
            found in our library.
          </p>
          <button
            onClick={() => router.push("/encyclopedia")}
            className="cursor-pointer rounded-xl bg-primary text-black text-xs font-black px-6 py-3 shadow-lg shadow-primary/25 hover:opacity-90 transition-all"
          >
            ← Back to Encyclopedia
          </button>
        </div>
      </div>
    );
  }

  /* ── Simple layout fallback (no long-form article) ── */
  if (!article) {
    return (
      <div className="min-h-screen bg-background/5 text-foreground font-sans antialiased py-12 px-6">
        <div className="max-w-3xl mx-auto border border-border-custom bg-card/45 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-md animate-scale-up">
          {/* Back and Breadcrumb Header */}
          <div className="border-b border-border-custom/50 bg-zinc-950/30 px-6 py-4 flex items-center justify-between">
            <button
              onClick={() => router.push("/encyclopedia")}
              className="cursor-pointer text-xs font-bold text-zinc-400 hover:text-white transition-all flex items-center gap-1.5"
            >
              ← Back to Encyclopedia
            </button>
            <span className="text-[10px] text-zinc-500 font-extrabold tracking-widest uppercase">
              WILD HERITAGE ENCYCLOPEDIA
            </span>
          </div>

          {/* Hero Banner Cover */}
          <div className="h-80 w-full relative">
            <img
              src={fish.image}
              alt={fish.name}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/20 to-transparent" />
          </div>

          {/* Article Content Layout */}
          <div className="p-6 md:p-12 space-y-8">
            <div>
              <span className="text-xs text-zinc-400 font-semibold tracking-wider">
                📍 ORIGIN: {fish.origin}
              </span>
              <h2 className="text-3xl md:text-4xl font-black font-serif text-white mt-2 leading-tight">
                {fish.name}
              </h2>
              <p className="text-base text-primary font-serif italic mt-0.5">
                {fish.scientificName}
              </p>
            </div>

            <div className="flex gap-2 items-center">
              <span className="rounded-full bg-primary/10 text-primary border border-primary/20 px-3 py-0.5 text-[10px] font-extrabold tracking-wider uppercase">
                {fish.rarity}
              </span>
              <span className="rounded-full bg-zinc-950/50 text-zinc-400 border border-zinc-800 px-3 py-0.5 text-[10px] font-semibold">
                Category: {fish.category || "Wild Betta"}
              </span>
            </div>

            {/* Elegant Drop-cap Story Block */}
            <div className="text-sm md:text-base text-zinc-300 leading-relaxed text-justify space-y-6 font-sans">
              <p>
                <span className="float-left mr-3 text-7xl md:text-8xl font-black text-primary font-serif leading-[0.8] mt-2">
                  {fish.fullStory[locale].charAt(0)}
                </span>
                {fish.fullStory[locale].slice(1)}
              </p>
            </div>

            {/* Quick Order CTA Card */}
            <div className="border border-border-custom bg-zinc-950/40 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-[10px] text-zinc-500 font-black uppercase tracking-wider block">
                  Interested in Keeping This Species?
                </span>
                <h4 className="text-base font-black text-white mt-1">
                  Get the Best Original Stock
                </h4>
                <p className="text-xs text-zinc-400 mt-1 max-w-sm">
                  We supply authentic wild-caught/selectively bred stock of
                  premium grade directly to your doorstep.
                </p>
              </div>
              {fish.orderable ? (
                <div className="text-right flex flex-col items-center md:items-end gap-2 shrink-0">
                  <span className="text-lg font-black text-primary">
                    RM {fish.price.toFixed(2)}
                  </span>
                  <button
                    onClick={() =>
                      router.push(`/shop?checkout=${fish.id}`)
                    }
                    className="cursor-pointer rounded-xl bg-primary text-black font-black text-xs px-6 py-3 shadow-lg shadow-primary/25 hover:shadow-primary/45 hover:scale-102 active:scale-98 transition-all"
                  >
                    🛒 Order Now
                  </button>
                </div>
              ) : (
                <div className="text-right shrink-0">
                  <span className="text-xs font-bold text-zinc-500 uppercase bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-lg">
                    🏛️ Exhibition Only
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ────────────────────────────────────────────────────────────────── */
  /*  LONG-FORM ARTICLE LAYOUT                                        */
  /* ────────────────────────────────────────────────────────────────── */
  const content = article.content[locale];
  const headings = extractHeadings(content);
  const title = article.title[locale];
  const subtitle = article.subtitle?.[locale];

  return (
    <div className="min-h-screen bg-background/5 text-foreground font-sans antialiased">
      {/* ── Hero Banner ── */}
      <div className="relative h-72 md:h-[420px] w-full overflow-hidden">
        <img
          src={fish.image}
          alt={fish.name}
          className="h-full w-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#040714] via-[#040714]/50 to-[#040714]/20" />

        {/* Back button */}
        <div className="absolute top-0 left-0 right-0 p-4 md:p-6">
          <button
            onClick={() => router.push("/encyclopedia")}
            className="cursor-pointer text-xs font-bold text-zinc-300/80 hover:text-white transition-all flex items-center gap-1.5 bg-zinc-950/40 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-2"
          >
            ← Back to Encyclopedia
          </button>
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-2 items-center mb-4 flex-wrap">
              <span className="rounded-full bg-primary/15 text-primary border border-primary/25 px-3 py-0.5 text-[10px] font-extrabold tracking-wider uppercase backdrop-blur-sm">
                {fish.rarity}
              </span>
              <span className="rounded-full bg-zinc-950/60 text-zinc-400 border border-zinc-700/50 px-3 py-0.5 text-[10px] font-semibold backdrop-blur-sm">
                {fish.category || "Wild Betta"}
              </span>
              <span className="rounded-full bg-zinc-950/60 text-zinc-400 border border-zinc-700/50 px-3 py-0.5 text-[10px] font-semibold backdrop-blur-sm">
                📍 {fish.origin}
              </span>
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-[2.6rem] font-black font-serif text-white leading-tight max-w-3xl">
              {title}
            </h1>
            {subtitle && (
              <p className="text-sm md:text-base text-zinc-400 mt-3 max-w-2xl leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* ── Two-column layout: TOC sidebar + Article content ── */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12 flex gap-8 lg:gap-12">
        {/* ── Desktop TOC Sidebar ── */}
        <aside className="hidden lg:block w-52 shrink-0">
          <div className="sticky top-24 space-y-6 max-h-[calc(100vh-7rem)] overflow-y-auto pr-2 scrollbar-thin">
            <LanguageToggle />
            <TableOfContents headings={headings} activeId={activeHeading} />
          </div>
        </aside>

        {/* ── Main Article Content ── */}
        <main className="flex-1 min-w-0 max-w-3xl">
          {/* Mobile-only: language toggle + collapsible TOC */}
          <div className="lg:hidden mb-8 space-y-3">
            <div className="flex items-center gap-3">
              <LanguageToggle />
              <button
                onClick={() => setTocOpen(!tocOpen)}
                className="cursor-pointer flex-1 flex items-center justify-between text-xs font-bold text-zinc-400 hover:text-white transition-all bg-zinc-950/40 border border-border-custom/40 rounded-xl px-4 py-2.5 backdrop-blur-sm"
              >
                <span>📋 Table of Contents</span>
                <span
                  className={`transition-transform duration-200 ${
                    tocOpen ? "rotate-180" : ""
                  }`}
                >
                  ▾
                </span>
              </button>
            </div>
            {tocOpen && (
              <div className="bg-zinc-950/40 border border-border-custom/30 rounded-xl p-4 backdrop-blur-sm animate-fade-in">
                <TableOfContents
                  headings={headings}
                  activeId={activeHeading}
                />
              </div>
            )}
          </div>

          {/* Rendered markdown article */}
          <article className="border border-border-custom/30 bg-card/30 backdrop-blur-sm rounded-2xl p-6 md:p-10 lg:p-12">
            <MarkdownRenderer content={content} />
          </article>

          {/* ── CTA Card ── */}
          <div className="mt-8 border border-border-custom bg-zinc-950/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-[10px] text-zinc-500 font-black uppercase tracking-wider block">
                {locale === "en"
                  ? "Interested in Keeping This Species?"
                  : "Berminat Memelihara Spesies Ini?"}
              </span>
              <h4 className="text-base font-black text-white mt-1">
                {locale === "en"
                  ? "Get the Best Original Stock"
                  : "Dapatkan Baka Asal Terbaik"}
              </h4>
              <p className="text-xs text-zinc-400 mt-1 max-w-sm">
                {locale === "en"
                  ? "We supply authentic wild-caught/selectively bred stock of premium grade directly to your doorstep."
                  : "Kami membekalkan baka asli tangkapan liar/biakan terpilih dengan kualiti gred premium terus ke pintu rumah anda."}
              </p>
            </div>
            {fish.orderable ? (
              <div className="text-right flex flex-col items-center md:items-end gap-2 shrink-0">
                <span className="text-lg font-black text-primary">
                  RM {fish.price.toFixed(2)}
                </span>
                <button
                  onClick={() =>
                    router.push(`/shop?checkout=${fish.id}`)
                  }
                  className="cursor-pointer rounded-xl bg-primary text-black font-black text-xs px-6 py-3 shadow-lg shadow-primary/25 hover:shadow-primary/45 hover:scale-102 active:scale-98 transition-all"
                >
                  🛒 {locale === "en" ? "Order Now" : "Tempah Sekarang"}
                </button>
              </div>
            ) : (
              <div className="text-right shrink-0">
                <span className="text-xs font-bold text-zinc-500 uppercase bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-lg">
                  🏛️{" "}
                  {locale === "en" ? "Exhibition Only" : "Pameran Sahaja"}
                </span>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
