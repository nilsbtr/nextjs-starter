import type { Metadata } from "next";
import { Nunito, Roboto, Roboto_Mono } from "next/font/google";

import NavbarWrapper from "@/components/navbar/navbar-wrapper";
import { Providers } from "@/components/providers";

import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "Next.js Starter",
  description: "A basic Next.js starter template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📦</text></svg>"
        />
      </head>
      <body className={`${nunito.variable} ${roboto.variable} ${robotoMono.variable} h-screen w-screen antialiased`}>
        <Providers>
          <div className="flex h-full w-full flex-col">
            <NavbarWrapper />
            <main className="flex-grow overflow-y-auto">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
