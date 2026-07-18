import type { Metadata } from "next";
import { Poppins, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.edigitalinteractive.com"),
  title: {
    default: "Best Digital Marketing Agency in Delhi, India | eDigital Interactive",
    template: "%s | eDigital Interactive"
  },
  description:
    "eDigital Interactive is a leading digital marketing agency in Delhi, India, providing SEO, AI Search Optimization, Performance Marketing, Social Media Marketing and Web Design & Development for startups and brands.",
  openGraph: {
    title: "eDigital Interactive",
    description:
      "Performance-driven digital marketing agency — SEO, AI Search Optimization, Performance Marketing, Social Media & Web Development.",
    url: "https://www.edigitalinteractive.com",
    siteName: "eDigital Interactive",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
