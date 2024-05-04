import type { Metadata } from "next";
import { Inter, Roboto, Platypi } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-roboto",
});

const platypi = Platypi({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-platypi",
});

export const metadata: Metadata = {
  title: "Mca Schedule List 2024",
  description: "Bengal Tiger Cricket, MB CA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${platypi.variable} ${roboto.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
