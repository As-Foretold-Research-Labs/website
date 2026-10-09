import type { Metadata } from "next";
import { Geist, Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const interSans = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const materialSymbols = {
  className: "material-symbols-outlined",
  href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap",
};

export const metadata: Metadata = {
  title: "As Foretold Labs | Software for Critical Operations",
  description: "Mission-grade platforms for autonomous decision-making, clinical validation, and continuous regulatory sovereignty. Augur, DokSim, CityTwin.",
  keywords: ["compliance automation", "clinical simulation", "digital twin", "sovereign AI", "SOC 2", "ISO 27001", "FedRAMP", "air-gapped"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${geistSans.variable} ${interSans.variable} ${jetbrainsMono.variable} antialiased bg-obsidian text-white flex flex-col min-h-screen w-full items-stretch`}>
        <Navbar />
        <main className="flex-1 w-full pt-16 flex flex-col items-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}