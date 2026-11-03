import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sansation = localFont({
  src: "../public/fonts/Sansation/Sansation-Regular.ttf",
  variable: "--font-sansation"
});

const sansationBold = localFont({
  src: "../public/fonts/Sansation/Sansation-Bold.ttf",
  variable: "--font-sansation-bold"
});

const auraSeraph = localFont({
  src: "../public/fonts/AuraSeraphRegular-own3z.ttf",
  variable: "--font-auraSeraph"
});

const chivo = localFont({
  src: "../public/fonts/chivo/Chivo-Regular.ttf",
  variable: "--font-chivo"
});

export const metadata = {
  title: "Evergreen Hackathon",
  description: "Join Evergreen game-jam hackathon in Springfield, Missouri in November 2026! A teen-led hackathon where you'll build amazing games with other teens in the area. All costs and foods are covered!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${sansation.variable} ${sansationBold.variable}  ${auraSeraph.variable} ${chivo.variable} antialiased`}
      >
        {children}
      </body>
      <Analytics/>
    </html>
  );
}
