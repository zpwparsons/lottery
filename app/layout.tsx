import PrimaryNavigation from "@/app/ui/primary-navigation";
import { DM_Sans } from "next/font/google";
import Footer from "@/app/ui/footer";
import type { Metadata } from "next";
import React from "react";
import "./globals.css";

const smSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | Lottery UK',
    default: 'Lottery UK',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${smSans.className} antialiased bg-slate-100`}>
        <PrimaryNavigation />

        {children}

        <Footer />
      </body>
    </html>
  );
}
