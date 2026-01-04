import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google"; // [NEW] Serif and Sans fonts
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { MotionProvider } from "@/components/MotionProvider";

// [NEW] Configure Inter (Sans)
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// [NEW] Configure Playfair Display (Serif)
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ACube Tech - Hire World-Class Remote Talent",
  description: "Connect with vetted global professionals in tech and beyond. Build faster, spend smarter, and scale without limits.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        <MotionProvider>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </MotionProvider>
      </body>
    </html>
  );
}
