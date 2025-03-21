import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/main/Navbar";
import CreativeCanvas from "@/components/main/StarBackground";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "uha's Portfolio",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#04020e] overflow-y-scroll overflow-x-hidden`}
      >
        <CreativeCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
