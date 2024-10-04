// src/app/layout.tsx
import "./globals.css";

import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";
import { SearchProvider, SearchConfig } from "pliny/search/index.js";

import Navbar from "@/components/Navbar";
import SectionContainer from "@/components/SectionContainer";
import Footer from "@/components/Footer";
import siteMetadata from "@/data/siteMetadata";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "My Blog App",
  description: "A blog app with dark mode and smooth animations",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Wrap the app in ThemeProvider */}
        <ThemeProvider attribute="class" defaultTheme="system">
          <SectionContainer>
            <SearchProvider searchConfig={siteMetadata.search as SearchConfig}>
              <Navbar />
              {children}
            </SearchProvider>
            <Footer />
          </SectionContainer>
        </ThemeProvider>
      </body>
    </html>
  );
}
