import "../global.css";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { Analytics } from "./components/analytics";
import { icons } from "lucide-react";
import React from "react";
import Particles from "./components/particles";

export const metadata = {
  title: 'Portifólio Israel',
  icons: {
    icon: ['Logo.png']
  }
}

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black min-h-screen ${process.env.NODE_ENV === "development" ? "debug-screens" : ""}`}
      >
      <Particles
        className="absolute inset-0 -z-50 animate-fade-in" 
        quantity={500}
      />
        {children}
      </body>
    </html>
  );
}
