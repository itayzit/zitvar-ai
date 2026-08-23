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
  metadataBase: new URL("https://www.zitvar.ai"),
  title: "Itay Zitvar",
  description: "AI guy.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Itay Zitvar",
    title: "Itay Zitvar",
    description:
      "Wharton MBA, Nvidia, AI. Projects and no-fluff AI writing.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Itay Zitvar — Wharton, Nvidia, AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@itayzit",
    title: "Itay Zitvar",
    description:
      "Wharton MBA, Nvidia, AI. Projects and no-fluff AI writing.",
    images: ["/og.png"],
  },
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
