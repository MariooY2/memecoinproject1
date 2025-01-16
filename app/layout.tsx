import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
export const metadata: Metadata = {
  title: "HOTMOJI",
  description:
    "HOTMOJI is the ultimate memecoin that combines the power of fire, fun, and emojis to create a unique crypto experience! It’s designed for meme lovers, crypto enthusiasts, and anyone who loves to turn up the heat. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
