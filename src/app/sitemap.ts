import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://cphmediapro.dk";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${BASE_URL}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          da: `${BASE_URL}/da`,
          en: `${BASE_URL}/en`,
        },
      },
    },
    {
      url: `${BASE_URL}/da`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/da/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/en`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/en/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
