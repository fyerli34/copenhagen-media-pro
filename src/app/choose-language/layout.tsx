import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Choose Language | CPH Media Pro",
    description: "Select your preferred language to continue.",
    robots: {
          index: false,
          follow: true,
    },
    alternates: {
          canonical: "https://cphmediapro.dk/choose-language",
    },
};

export default function ChooseLanguageLayout({ children }: { children: React.ReactNode }) {
    return children;
}
