import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
      default: "SoMe Bureau København | Resultatorienteret Markedsføring der Skaber Kunder | CPH Media Pro",
          template: "%s | CPH Media Pro - SoMe Bureau København",
    },
    description:
          "Få flere kunder gennem sociale medier med CPH Media Pro – et resultatorienteret SoMe bureau i København. Vi er eksperter i TikTok markedsføring, Facebook annoncering og B2B sociale medier strategi.",
    alternates: {
          canonical: "https://cphmediapro.dk/da",
          languages: {
                  "da-DK": "https://cphmediapro.dk/da",
                  "en-US": "https://cphmediapro.dk/en",
                  "x-default": "https://cphmediapro.dk/da",
          },
    },
    openGraph: {
          type: "website",
          locale: "da_DK",
          url: "https://cphmediapro.dk/da",
          siteName: "CPH Media Pro",
          title: "SoMe Bureau København | Få Flere Kunder gennem Sociale Medier",
          description:
                  "Resultatorienteret SoMe bureau i København med ekspertise i TikTok markedsføring, Facebook annoncering og B2B sociale medier strategi.",
    },
    twitter: {
          card: "summary_large_image",
          title: "CPH Media Pro | SoMe Bureau København",
          description:
                  "Få flere kunder gennem sociale medier. Eksperter i TikTok, Facebook og LinkedIn annoncering i København.",
    },
};

export default function DaLayout({ children }: { children: React.ReactNode }) {
    return children;
}
