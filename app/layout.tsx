import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { Space_Grotesk } from "next/font/google";

// Initialize the font
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "HOTMOJI",
  description:
    "HOTMOJI is the ultimate memecoin that combines the power of fire, fun, and emojis to create a unique crypto experience! It's designed for meme lovers, crypto enthusiasts, and anyone who loves to turn up the heat. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className={`font-space-grotesk antialiased`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
