import { MetadataRoute } from "next";

const BASE_URL = "https://katerinatzova.gr";

export default function sitemap(): MetadataRoute.Sitemap {
    const staticPages = [
        "",
        "/about",
        "/contact",
        "/privacy-policy",
        "/thank-you",
    ];

    // 👉 Replace with your real categories
    const filmCategories = [
        "weddings",
        "baptisms",
        "movies",
        "theatre",
        "advertisement"
    ];

    const stillCategories = [
        "weddings",
        "baptisms",
        "portraits",
        "films-and-theatre",
        "advertisement"
    ];

    return [
        // Static pages
        ...staticPages.map((path) => ({
            url: `${BASE_URL}${path}`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: path === "" ? 1 : 0.7,
        })),

        // /films/[category]
        ...filmCategories.map((category) => ({
            url: `${BASE_URL}/films/${category}`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.8,
        })),

        // /stills/[category]
        ...stillCategories.map((category) => ({
            url: `${BASE_URL}/stills/${category}`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.8,
        })),
    ];
}
