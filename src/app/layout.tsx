import type { Metadata } from "next";
import { Outfit, Playfair_Display, Geist_Mono } from "next/font/google";
import "./globals.css";
import OceanBackground from "@/components/OceanBackground";
import Header from "@/components/Header";

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
      className={`${outfit.variable} ${playfair.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative bg-background">
        <OceanBackground />
        <div className="relative z-10 flex-1 flex flex-col">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}

