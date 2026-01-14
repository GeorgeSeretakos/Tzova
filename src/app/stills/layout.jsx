"use client";

export const dynamicParams = true;
export const dynamic = 'force-dynamic'; // Ensure dynamic rendering

import Link from "next/link";
import { usePathname } from "next/navigation";
import AnimatedPageHeader from "../components/AnimatedPageHeader";
import { useLocale } from "../../../lib/locale";


const M = {
  en: {
    title: "Stills",
    categories: [
      { slug: "weddings", label: "Weddings" },
      { slug: "baptisms", label: "Baptisms" },
      { slug: "portraits", label: "Portraits" },
      { slug: "films-and-theatre", label: "Films & Theatre" },
      { slug: "advertisement", label: "Advertisement" },
    ],
  },
  el: {
    title: "Φωτογραφίες",
    categories: [
      { slug: "weddings", label: "Γάμοι" },
      { slug: "baptisms", label: "Βαπτίσεις" },
      { slug: "portraits", label: "Πορτρέτα" },
      { slug: "films-and-theatre", label: "Κινηματογράφος & Θέατρο" },
      { slug: "advertisement", label: "Διαφήμιση" },
    ],
  },
};

export default function StillsLayout({ children }) {
  const pathname = usePathname();
  const locale = useLocale();
  const T = M[locale];

  const active = pathname.split("/")[2] || "weddings";

  return (
    <section className="min-h-screen bg-[#0B0B0C] text-[#EAEAEA]">
      <AnimatedPageHeader
        title={T.title}
        iconSrc="/icons/images.png"
        iconAlt="Delicate hand-drawn sketch"
      />

      <div className="sticky top-0 z-20 bg-[#0B0B0C]/95 backdrop-blur border-t border-b border-[#C6A664]/30">
        <nav className="flex flex-wrap justify-center gap-3 md:gap-6 py-3 text-sm">
          {T.categories.map((c) => (
            <Link
              key={c.slug}
              href={`/stills/${c.slug}`}
              className={`px-3 py-1 rounded-lg transition ${
                active === c.slug
                  ? "bg-[#D4AF37] text-black"
                  : "text-[#EAEAEA]/80 hover:text-[#D4AF37]"
              }`}
            >
              {c.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">{children}</div>
    </section>
  );
}
