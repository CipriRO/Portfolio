import Header from "./components/Header";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata = {
  title: "Ciprian's Portfolio",
  description: "Developed by me :)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={
          poppins.className + " bg-_rich-black text-slate-100 min-h-screen"
        }
      >
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
