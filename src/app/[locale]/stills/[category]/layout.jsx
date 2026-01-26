import Link from "next/link";
import AnimatedPageHeader from "../../../components/AnimatedPageHeader";

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
    title: "Στατική Εικόνα",
    categories: [
      { slug: "weddings", label: "Γάμοι" },
      { slug: "baptisms", label: "Βαπτίσεις" },
      { slug: "portraits", label: "Πορτρέτα" },
      { slug: "films-and-theatre", label: "Κινηματογράφος & Θέατρο" },
      { slug: "advertisement", label: "Διαφήμιση" },
    ],
  },
};

export default async function StillsLayout({ children, params }) {
  const { locale, category } = await params;
  const T = M[locale] ?? M.en;

  return (
    <section className="min-h-screen bg-[#031526] text-[#EAEAEA]">
      <AnimatedPageHeader
        title={T.title}
        iconSrc="/icons/images.png"
        iconAlt="Delicate hand-drawn sketch"
      />

      <div className="sticky top-0 z-20 bg-[#031526]/95 backdrop-blur border-t border-b border-[#C6A664]/30">
        <nav className="flex flex-wrap justify-center gap-3 md:gap-6 py-3 text-sm">
          {T.categories.map((c) => (
            <Link
              key={c.slug}
              href={`/${locale}/stills/${c.slug}`}
              className={`px-3 py-1 rounded-lg transition ${
                c.slug === category
                  ? "bg-[#D4AF37] text-black"
                  : "text-[#EAEAEA]/80 hover:text-[#D4AF37]"
              }`}
            >
              {c.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        {children}
      </div>
    </section>
  );
}
