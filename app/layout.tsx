import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import { Header, Footer } from "@/components/shared";
import { Toaster } from "@/components/ui/toaster";

import "./globals.css";

const barlow = Barlow({
  weight: ["200", "400", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ZOAN",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={barlow.className}>
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
