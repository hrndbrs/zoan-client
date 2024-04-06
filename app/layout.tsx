import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import { Header, Footer, WhatsAppFloatingButton } from "@/components/shared";
import { Toaster } from "@/components/ui/toaster";
import CategoryProvider from "@/contexts/CategoryProvider";

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
      <CategoryProvider>
        <body className={barlow.className}>
          <Header />
          {children}
          <Footer />
          <Toaster />
          <WhatsAppFloatingButton />
        </body>
      </CategoryProvider>
    </html>
  );
}
