import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-display",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "As Foretold Labs | Intelligent Systems & AI Solutions",
  description: "Pioneering intelligent systems at the intersection of simulation, automation, and human-computer interaction. Augur compliance automation and DokSim clinical training solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0b0f19] text-slate-100 flex flex-col min-h-screen w-full items-stretch`}>
        <Navbar />
        <main className="flex-1 w-full pt-16 flex flex-col items-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
