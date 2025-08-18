// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

import { Roboto, Dancing_Script, Agdasima } from "next/font/google";
import { WebVitals } from "@/components/web-vitals";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"], // you can load multiple weights
});

const cursive = Agdasima({
  subsets: ["latin"],
  weight: ["700", "700"],
});

export const metadata: Metadata = {
  title: "Font Test",
  description: "Testing Google Fonts in Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {/* <WebVitals /> */}
        {children}
      </body>
    </html>
  );
}
