import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "CPH Media Pro",
    description: "Welcome to CPH Media Pro - Social Media Agency in Copenhagen.",
    robots: { index: false, follow: true },
    alternates: { canonical: "https://cphmediapro.dk/da" },
};

export default function RootPage() { return <meta httpEquiv="refresh" content="0; url=/da" />; }
