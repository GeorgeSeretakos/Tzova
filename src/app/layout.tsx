import {
    Geist,
    Geist_Mono,
    Manrope,
    Open_Sans,
    Roboto,
    Great_Vibes,
    EB_Garamond,
} from "next/font/google";

import "./styles/globals.css";
import Navbar from "./components/Navbar";
import PhotoRibbon from "./components/home/PhotoRibon";
import Footer from "./components/Footer";
import { LocaleProvider } from "@/lib/locale";
import {cookies} from "next/headers";

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

export const metadata = {
    metadataBase: new URL("https://katerinatzova.gr"),
    title: "Katerina Tzova creative photography & videography",
    description: "Website for photographer Katerina Tzova",
    robots: { index: true, follow: true },
};

/* ---------------- Layout ---------------- */

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const cookieStore = await cookies();

    const locale = cookieStore.getAll()
        .find((c) => c.name === "locale")?.value ?? "en";

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
        <LocaleProvider>
            <Navbar />
            <main>{children}</main>
            <PhotoRibbon />
            <Footer />
        </LocaleProvider>
        </body>
        </html>
    );
}
