import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GoCurrent",
  description: "GoCurrent is a Go playground for running Go code in the browser.",
  icons: {
    icon: "/go-redeyes.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" href="/go-redeyes.png" />
        </head>
        <body className={inter.className}>{children}</body>
      </html>
    </>
  );
}
