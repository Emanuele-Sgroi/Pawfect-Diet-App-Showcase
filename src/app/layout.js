import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Pawfect Diet App Showcase",
  description:
    "A smart diet app for dogs, built as a Computer Science dissertation project by Emanuele Sgroi. Explore the features, AI tools, and research behind Pawfect Diet.",
  keywords: [
    "Pawfect Diet",
    "Dog App",
    "AI for pets",
    "Emanuele Sgroi",
    "Dissertation Project",
    "React Native Expo",
  ],
  authors: [{ name: "Emanuele Sgroi", url: "https://www.emanuelesgroi.com" }],
  creator: "Emanuele Sgroi",
  openGraph: {
    title: "Pawfect Diet App Showcase",
    description:
      "Explore Pawfect Diet — a mobile app built using AI to help pet owners manage nutrition and track their dog's health. Created by Emanuele Sgroi.",
    url: "https://pawfect-diet-app-showcase.vercel.app/",
    siteName: "Pawfect Diet",
    images: [
      {
        url: "/images/hero_bg.jpg",
        width: 1200,
        height: 630,
        alt: "Pawfect Diet App Screenshot",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
