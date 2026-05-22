import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cphmediapro.dk"),
  title: {
    default: "SoMe Bureau København | Resultatorienteret Markedsføring der Skaber Kunder | CPH Media Pro",
    template: "%s | CPH Media Pro - SoMe Bureau København",
  },
  description:
    "Få flere kunder gennem sociale medier med CPH Media Pro – et resultatorienteret SoMe bureau i København. Vi er eksperter i TikTok markedsføring, Facebook annoncering og B2B sociale medier strategi. Se vores transparente SoMe bureau priser og book et gratis strategimøde i dag.",
  keywords: [
    "SoMe bureau København",
    "SoMe bureau priser",
    "Resultatorienteret SoMe bureau",
    "TikTok markedsføring bureau København",
    "Facebook annoncering ekspert",
    "B2B sociale medier strategi",
    "Få flere kunder gennem sociale medier",
    "Lokal markedsføring København",
    "Sociale medier bureau Danmark",
    "Digitalt marketing bureau København",
    "Instagram markedsføring",
    "LinkedIn annoncering",
  ],
  authors: [{ name: "CPH Media Pro" }],
  creator: "CPH Media Pro",
  publisher: "CPH Media Pro",
  alternates: {
    canonical: "/",
    languages: {
      "da-DK": "/da",
      "en-US": "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "da_DK",
    url: "https://cphmediapro.dk",
    siteName: "CPH Media Pro",
    title: "SoMe Bureau København | Få Flere Kunder gennem Sociale Medier",
    description:
      "Resultatorienteret SoMe bureau i København med ekspertise i TikTok markedsføring, Facebook annoncering og B2B sociale medier strategi. Lokal markedsføring der virker.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CPH Media Pro | SoMe Bureau København – Resultatorienteret Markedsføring",
    description:
      "Få flere kunder gennem sociale medier. Eksperter i TikTok, Facebook og LinkedIn annoncering i København.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "s3KJ9rOBu0amJOA29Pjbqb_c2vQSUMCRYp22sMSx4Mk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da" className={`${inter.variable} ${poppins.variable}`}>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
