import { Geist, Geist_Mono } from "next/font/google";
import TopBar from "@/components/TopBar";
import Nav from "@/components/Nav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Friendship",
  description: "IamBanky Friendship",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen`}
      >
        <TopBar />
        {children}
        <Nav />
      </body>
    </html>
  );
}
