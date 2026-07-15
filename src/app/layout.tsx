import type { Metadata } from "next";
import { Gabarito, Figtree } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const gabarito = Gabarito({
  variable: "--font-gabarito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Itay Zitvar",
  description: "AI guy.",
  icons: {
    icon: "/profile.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gabarito.variable} ${figtree.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
