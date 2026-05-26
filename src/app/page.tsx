import type { Metadata } from "next";
import ChooseLanguagePage from "./choose-language/page";

export const metadata: Metadata = {
      title: "CPH Media Pro | SoMe Bureau København — Vælg sprog / Choose your language",
      description: "Vælg sprog for at fortsætte — Choose your language to continue. CPH Media Pro: SoMe bureau i København / Social Media Agency in Copenhagen.",
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
              title: "CPH Media Pro | Vælg sprog / Choose your language",
              description: "SoMe bureau i København / Social Media Agency in Copenhagen.",
      },
};

export default function RootPage() {
      return <ChooseLanguagePage />;
}
