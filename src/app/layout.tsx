import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PopupWidget } from "@/components/PopupWidget";

export const metadata: Metadata = {
  title: "Precision Designa",
  description: "Top-tier branding, web & graphic design services.",
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider attribute="class">
          <Navbar />
          <main>{children}</main>
          <Footer />
          <PopupWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
