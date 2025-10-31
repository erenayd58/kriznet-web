import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KrizNet - Afet Anında İletişim Çözümü",
  description:
    "BLE mesh teknolojisi ile afet anında kesintisiz iletişim sağlayan yenilikçi mobil uygulama ve IoT çözümü.",
  keywords: [
    "KrizNet",
    "Afet İletişimi",
    "BLE Mesh",
    "IoT",
    "Mobil Uygulama",
    "Acil Durum",
    "Teknoloji",
  ],
  authors: [{ name: "KrizNet Team" }],
  openGraph: {
    title: "KrizNet - Yapay Zekâ Destekli Afet Haberleşme Ağı",
    description:
      "BLE mesh teknolojisi ile afet anında kesintisiz iletişim sağlayan yenilikçi çözüm",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${inter.className} bg-gradient-to-b from-brand-primary via-red-600/30 via-red-500/10 to-white text-foreground`}
      >
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 relative">
            {/* Gentle top fade to blend red into content without affecting readability */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-white via-white/70 to-transparent" />
            <div className="relative">{children}</div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

