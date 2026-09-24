import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Oswald,
  Press_Start_2P,
  Silkscreen,
} from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const pressStart = Press_Start_2P({
  variable: "--font-press-start",
  subsets: ["latin"],
  weight: "400",
});

const silkscreen = Silkscreen({
  variable: "--font-silkscreen",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Diário de Bordo - Job Interview Kombat",
  description:
    "Diário de bordo do desenvolvimento do projeto Job Interview Kombat.",
  icons: {
    icon: "/DiarioLogo.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} ${pressStart.variable} ${silkscreen.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
