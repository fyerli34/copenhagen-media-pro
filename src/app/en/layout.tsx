import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
      default: "Social Media Agency Copenhagen | Result-Driven Marketing That Creates Customers | CPH Media Pro",
          template: "%s | CPH Media Pro - Social Media Agency Copenhagen",
    },
    description:
          "Get more customers through social media with CPH Media Pro – a result-driven social media agency in Copenhagen. We are experts in TikTok marketing, Facebook advertising and B2B social media strategy. See our transparent agency prices and book a free strategy meeting today.",
    alternates: {
          canonical: "https://cphmediapro.dk/en",
          languages: {
                  "da-DK": "https://cphmediapro.dk/da",
                  "en-US": "https://cphmediapro.dk/en",
                  "x-default": "https://cphmediapro.dk/da",
          },
    },
    openGraph: {
          type: "website",
          locale: "en_US",
          url: "https://cphmediapro.dk/en",
          siteName: "CPH Media Pro",
          title: "Social Media Agency Copenhagen | Get More Customers via Social Media",
          description:
                  "Result-driven social media agency in Copenhagen with expertise in TikTok marketing, Facebook advertising and B2B social media strategy. Local marketing that works.",
    },
    twitter: {
          card: "summary_large_image",
          title: "CPH Media Pro | Social Media Agency Copenhagen",
          description:
                  "Get more customers through social media. Experts in TikTok, Facebook and LinkedIn advertising in Copenhagen.",
    },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
    return children;
}
