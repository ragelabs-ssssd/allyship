import { MetadataRoute } from "next";
import { INITIATIVES } from "@/data/initiatives";

const BASE_URL = "https://allyship.soa.ac.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/event`, lastModified, changeFrequency: "weekly", priority: 0.95 },
    {
      url: `${BASE_URL}/discover-soa`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/collaborate`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    { url: `${BASE_URL}/impact`, lastModified, changeFrequency: "monthly", priority: 0.85 },
    {
      url: `${BASE_URL}/initiatives`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    { url: `${BASE_URL}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/terms`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];

  const initiativeRoutes: MetadataRoute.Sitemap = INITIATIVES.map((initiative) => ({
    url: `${BASE_URL}/initiatives/${initiative.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...initiativeRoutes];
}
