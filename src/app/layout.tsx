import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import { MotionProvider } from "@/components/MotionProvider";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  variable: "--font-space-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Talspace — Above the Noise, Without Borders",
  description: "Talspace is where the rarest engineering talent operates globally. A curated universe built in response to a broken talent market.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${spaceMono.variable} antialiased bg-black text-white`}
      >
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
