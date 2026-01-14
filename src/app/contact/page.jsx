"use client";

import AnimatedPageHeader from "../components/AnimatedPageHeader";
import { useLocale } from "../../../lib/locale";

export default function ContactPage() {
  const locale = useLocale();

  const M = {
    en: {
      header: "Contact",
      heroTitle: "I’d love to hear about your story",
      subtitle: "Reach out and let’s create something timeless together",
    },
    el: {
      header: "Επικοινωνία",
      heroTitle: "Θα χαρώ να ακούσω την ιστορία σου",
      subtitle: "Επικοινώνησε μαζί μου και ας δημιουργήσουμε κάτι διαχρονικό μαζί",
    },
  };

  const T = M[locale];

  return (
    <section className="bg-[#0B0B0C] text-[#EAEAEA] mb-12">
      <AnimatedPageHeader
        title={T.header}
        iconSrc="/icons/contact-us.png"
        iconAlt="Delicate hand-drawn sketch"
      />

      <div className="max-w-3xl mx-auto px-4 text-center">
        <h1 className="font-great-vibes !font-normal mb-6">
          {T.heroTitle}
        </h1>
        <p className="text-sm md:text-base text-[#EAEAEA]/70 mb-6">
          {T.subtitle}
        </p>
      </div>
    </section>
  );
}
