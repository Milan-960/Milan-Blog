// src/app/layout.tsx
import "./globals.css";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";
import { SearchProvider, SearchConfig } from "pliny/search/index.js";

import Navbar from "@/components/Navbar";
import SectionContainer from "@/components/SectionContainer";
import Footer from "@/components/Footer";
import siteMetadata from "@/data/siteMetadata";
import LoadingLayout from "@/layouts/LoadingLayout";

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
        <ThemeProvider attribute="class" defaultTheme="system">
          <LoadingLayout>
            <SectionContainer>
              <SearchProvider
                searchConfig={siteMetadata.search as SearchConfig}
              >
                <Navbar />
                {children}
              </SearchProvider>
              <Footer />
            </SectionContainer>
          </LoadingLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
