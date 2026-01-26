import { MetadataRoute } from "next";

const BASE_URL = "https://katerinatzova.gr";

const locales = ["el", "en"] as const;

/* ---------- Pages ---------- */

const staticPages = [
    "",
    "/about",
    "/contact",
    "/privacy-policy",
    "/thank-you",
];

const filmCategories = [
    "weddings",
    "baptisms",
    "movies",
    "theatre",
    "advertisement",
];

const stillCategories = [
    "weddings",
    "baptisms",
    "portraits",
    "films-and-theatre",
    "advertisement",
];

/* ---------- Helpers ---------- */

function withLocales(path: string) {
    return locales.map((locale) => ({
        locale,
        url: `${BASE_URL}/${locale}${path}`,
    }));
}

/* ---------- Sitemap ---------- */

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    return [
        /* ---------- Static pages ---------- */
        ...staticPages.flatMap((path) =>
            locales.map((locale) => ({
                url: `${BASE_URL}/${locale}${path}`,
                lastModified: now,
                changeFrequency: "monthly",
                priority: path === "" ? 1 : 0.7,
                alternates: {
                    languages: {
                        el: `${BASE_URL}/el${path}`,
                        en: `${BASE_URL}/en${path}`,
                    },
                },
            }))
        ),

        /* ---------- Films categories ---------- */
        ...filmCategories.flatMap((category) =>
            locales.map((locale) => ({
                url: `${BASE_URL}/${locale}/films/${category}`,
                lastModified: now,
                changeFrequency: "weekly",
                priority: 0.8,
                alternates: {
                    languages: {
                        el: `${BASE_URL}/el/films/${category}`,
                        en: `${BASE_URL}/en/films/${category}`,
                    },
                },
            }))
        ),

        /* ---------- Stills categories ---------- */
        ...stillCategories.flatMap((category) =>
            locales.map((locale) => ({
                url: `${BASE_URL}/${locale}/stills/${category}`,
                lastModified: now,
                changeFrequency: "weekly",
                priority: 0.8,
                alternates: {
                    languages: {
                        el: `${BASE_URL}/el/stills/${category}`,
                        en: `${BASE_URL}/en/stills/${category}`,
                    },
                },
            }))
        ),
    ];
}
