import TopBar from "@/components/TopBar";
import Nav from "@/components/Nav";
import "./globals.css";

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
        className={`h-screen`}
      >
        <TopBar />
        {children}
        <Nav />
      </body>
    </html>
  );
}
