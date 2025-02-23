import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UniGuide - AI-Powered Educational Guidance Platform",
  description:
    "UniGuide provides personalized AI-driven support for students, offering course recommendations, career guidance, and interactive tools to optimize your educational journey.",
  keywords: "UniGuide, education, AI, career guidance, course finder, scholarship tracker",
  openGraph: {
    title: "UniGuide - AI-Powered Educational Guidance",
    description: "Personalized support and interactive guidance for your educational journey.",
    url: "https://www.uniguide.lk",
    siteName: "UniGuide",
    images: [
      {
        url: "https://www.uniguide.lk",
        width: 1200,
        height: 630,
        alt: "UniGuide Platform Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.uniguide.lk" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}