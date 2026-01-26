import {
    Geist,
    Geist_Mono,
    Manrope,
    Open_Sans,
    Roboto,
    Great_Vibes,
    EB_Garamond,
} from "next/font/google";

import "../styles/globals.css";

import Navbar from "../components/Navbar";
import PhotoRibbon from "../components/home/PhotoRibon";
import Footer from "../components/Footer";

import type { Metadata } from "next";

/* ---------------- Fonts ---------------- */

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const greatVibes = Great_Vibes({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-great-vibes",
});

const greekFallback = EB_Garamond({
    subsets: ["greek", "latin"],
    variable: "--font-greek-fallback",
    weight: ["400"],
});


const manrope = Manrope({
    variable: "--font-manrope",
    subsets: ["latin"],
});

const openSans = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin"],
});

const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"],
});

/* ---------------- Metadata ---------------- */

export async function generateMetadata({ params }: any): Promise<Metadata> {
    const { locale } = params;

    if (locale === "el") {
        return {
            metadataBase: new URL("https://katerinatzova.gr"),
            title: "Κατερίνα Τζόβα – Φωτογράφος & Βιντεογράφος",
            description:
                "Η Κατερίνα Τζόβα είναι επαγγελματίας φωτογράφος και βιντεογράφος στην Ελλάδα. Δημιουργική φωτογραφία και κινηματογράφηση για projects, events και καλλιτεχνικές παραγωγές.",
            robots: { index: true, follow: true },
            openGraph: {
                type: "website",
                locale: "el_GR",
                url: "https://katerinatzova.gr/el",
                title: "Κατερίνα Τζόβα – Φωτογράφος & Βιντεογράφος",
                description:
                    "Επίσημη ιστοσελίδα της φωτογράφου και βιντεογράφου Κατερίνας Τζόβα.",
                siteName: "Katerina Tzova",
            },
        };
    }

    // English (default)
    return {
        metadataBase: new URL("https://katerinatzova.gr"),
        title: "Katerina Tzova – Creative Photography & Videography",
        description:
            "Katerina Tzova is a professional photographer and videographer based in Greece, specializing in creative photography and cinematic video projects.",
        robots: { index: true, follow: true },
        openGraph: {
            type: "website",
            locale: "en_US",
            url: "https://katerinatzova.gr/en",
            title: "Katerina Tzova – Creative Photography & Videography",
            description:
                "Official website of photographer and videographer Katerina Tzova.",
            siteName: "Katerina Tzova",
        },
    };
}

/* ---------------- Layout ---------------- */

export default function RootLayout({ children, params }: any) {
    const { locale } = params;

    return (
        <html lang={locale}>
            <body
            className={`
              ${manrope.variable}
              ${openSans.variable}
              ${roboto.variable}
              ${geistSans.variable}
              ${geistMono.variable}
              ${greatVibes.variable}
              ${greekFallback.variable}
              antialiased
            `}
            >
            <Navbar locale={locale} />
            <main>{children}</main>
            <PhotoRibbon />
            <Footer locale={locale} />
            </body>
        </html>
    );
}
