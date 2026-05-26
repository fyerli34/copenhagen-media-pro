import type { Metadata } from "next";
import ChooseLanguagePage from "./choose-language/page";

export const metadata: Metadata = {
        title: "CPH Media Pro | SoMe Bureau København — Få Flere Kunder gennem Sociale Medier",
        description: "Resultatorienteret SoMe bureau i København. Eksperter i TikTok, Facebook og LinkedIn annoncering. Book et gratis strategimøde i dag.",
        alternates: {
                  canonical: "https://cphmediapro.dk/",
                  languages: {
                              "da-DK": "https://cphmediapro.dk/da",
                              "en-US": "https://cphmediapro.dk/en",
                              "x-default": "https://cphmediapro.dk/",
                  },
        },
        robots: { index: true, follow: true },
        openGraph: {
                  type: "website",
                  url: "https://cphmediapro.dk/",
                  siteName: "CPH Media Pro",
                  title: "CPH Media Pro | SoMe Bureau København — Få Flere Kunder gennem Sociale Medier",
                  description: "Resultatorienteret SoMe bureau i København. Eksperter i TikTok, Facebook og LinkedIn annoncering.",
        },
};

export default function RootPage() {
        return <ChooseLanguagePage />;
}
