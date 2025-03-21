import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Mehyli y Miguel",
  description: "Invitación de boda de Mehyli y Miguel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`dotted-background ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <link rel="canonical" href="https://www.boda-mehyli-y-miguel.com/" />
        {children}
      </body>
    </html>
  );
}
