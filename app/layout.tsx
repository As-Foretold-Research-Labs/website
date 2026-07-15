import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { IBM_Plex_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "As Foretold Labs",
  description:
    "Research laboratory building Augur (compliance automation) and DokSim (patient communication training).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${ibmPlexMono.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--fg)]">
        <Navbar />
        <main className="flex-1 pt-40 md:pt-48">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
