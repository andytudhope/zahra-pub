import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
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
  title: "Zahra Publications",
  description: "All Shaykh Fadhlalla Haeri's books in one place",
  icons: {
    icon: "/favicon.ico", // or .png, .svg etc.
    shortcut: "/images/favicon-32x32.png",
    apple: "/images/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "/images/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: "Zahra Publications",
    description: "All Shaykh Fadhlalla Haeri's books in one place",
    url: "https://zahra-pub.vercel.app",
    siteName: "Zahra Publications",
    images: [
      {
        url: "/images/share-image.png",
        width: 1200,
        height: 630,
        alt: "Zahra Publications",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main>
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}
