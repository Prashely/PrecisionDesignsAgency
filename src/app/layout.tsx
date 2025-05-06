import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { PopupWidget } from "@/components/PopupWidget";

export const metadata: Metadata = {
  title: "Precision Designs Agency",
  description: "Specializing in clean, modern web and graphic design.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/img/pdaicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/img/favicon.ico" type="image/x-icon" />

        {/* Basic SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Specializing in clean, modern web and graphic design."
        />
        <meta
          name="keywords"
          content="web design, graphic design, modern design, creative agency"
        />
        <meta name="author" content="Precision Designs Agency" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Precision Designs Agency" />
        <meta
          property="og:description"
          content="Specializing in clean, modern web and graphic design."
        />
        <meta property="og:image" content="/img/logo.png" />
        <meta
          property="og:url"
          content="https://www.precisiondesignsagency.com"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Precision Designs Agency" />
        <meta
          name="twitter:description"
          content="Specializing in clean, modern web and graphic design."
        />
        <meta name="twitter:image" content="/img/logo.jpg" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://www.precisiondesignsagency.com" />
      </head>
      <body>
        <ThemeProvider attribute="class">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
