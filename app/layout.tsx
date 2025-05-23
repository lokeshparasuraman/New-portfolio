import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lokesh Parasuraman",
  description: "Web Developer Portfolio of Lokesh Parasuraman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a192f] text-[#ccd6f6] min-h-screen`}
      >
        <div className="relative">
          <div className="fixed inset-0 bg-[#0a192f] z-[-1]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#112240] via-[#0a192f] to-[#020c1b] animate-gradient"></div>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
