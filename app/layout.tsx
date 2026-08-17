import type { Metadata } from "next";
import { Fraunces, Karla } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
});

const karla = Karla({
  subsets: ["latin"],
  variable: "--font-karla",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.akupunktur-wasserschloss.ch"),
  title: {
    default:
      "Praxisgemeinschaft Wasserschloss · Akupunktur & TCM in Turgi",
    template: "%s · Praxisgemeinschaft Wasserschloss",
  },
  description:
    "Zentrum für Naturmedizin in Turgi: Traditionelle Chinesische Medizin, Akupunktur, Tuina, Moxibustion und Coaching bei Silke Altorfer, eidg. dipl. Naturheilpraktikerin TCM.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${fraunces.variable} ${karla.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
