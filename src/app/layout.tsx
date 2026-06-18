import Header from "@/components/Header";
import OceanBackground from "@/components/OceanBackground";
import { LanguageProvider } from "@/context/LanguageContext";
import { CurrencyProvider } from "@/context/CurrencyContext";
import type { Metadata } from "next";
import { Geist_Mono, Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wild Betta Malaysia - Premium Storytelling & Shop",
  description: "Menerokai khazanah ikan laga liar semulajadi Malaysia. Ensiklopedia spesies ikan laga dan tempahan terus ke WhatsApp Banglong.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${playfair.variable} ${geistMono.variable} h-full antialiased overflow-y-scroll`}
    >
      <body className="min-h-full flex flex-col relative bg-background">
        <LanguageProvider>
          <CurrencyProvider>
            <OceanBackground />
            <div className="relative z-10 flex-1 flex flex-col">
              <Header />
              {children}
            </div>
          </CurrencyProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}

