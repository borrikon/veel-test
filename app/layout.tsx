import type { Metadata } from "next";

import "./globals.css";

import { Geist, Geist_Mono } from "next/font/google";

import Container from "@/components/container";
import { ReactQueryClientProvider } from "./QueryClientProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-100`}
      >
        <ReactQueryClientProvider>
          <Container>{children}</Container>
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
