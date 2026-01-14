import {
    Geist,
    Geist_Mono,
    Manrope,
    Open_Sans,
    Roboto,
    Great_Vibes,
    Zen_Kurenaido,
} from "next/font/google";

import "./styles/globals.css";
import Navbar from "./components/Navbar";
import PhotoRibbon from "./components/home/PhotoRibon";
import Footer from "./components/Footer";
import { LocaleProvider } from "../../lib/locale";

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

const greekFallback = Zen_Kurenaido({
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
    // const cookieStore = await cookies();
    //
    // const locale = cookieStore.getAll()
    //     .find((c) => c.name === "locale")?.value ?? "el";

    return (
        <html>
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

        {/* Netlify contact form */}
        {/*<form*/}
        {/*    name="contact"*/}
        {/*    method="POST"*/}
        {/*    data-netlify="true"*/}
        {/*    data-netlify-honeypot="bot-field"*/}
        {/*    hidden*/}
        {/*>*/}
        {/*    <input type="hidden" name="form-name" value="contact"/>*/}
        {/*    <input type="text" name="firstName"/>*/}
        {/*    <input type="text" name="lastName"/>*/}
        {/*    <input type="email" name="email"/>*/}
        {/*    <input type="tel" name="phone"/>*/}
        {/*    <select name="eventType">*/}
        {/*        <option>Wedding</option>*/}
        {/*        <option>Baptism</option>*/}
        {/*        <option>Portrait</option>*/}
        {/*        <option>Theatre</option>*/}
        {/*        <option>Movie</option>*/}
        {/*        <option>Dance School</option>*/}
        {/*        <option>Other Event</option>*/}
        {/*    </select>*/}
        {/*    <textarea name="message"/>*/}
        {/*    <input type="text" name="bot-field"/>*/}
        {/*</form>*/}
        </body>
        </html>
    );
}
