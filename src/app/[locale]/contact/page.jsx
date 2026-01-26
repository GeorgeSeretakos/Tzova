import AnimatedPageHeader from "../../components/AnimatedPageHeader";

export default async function ContactPage({ params }) {
  const { locale } = await params;

  const M = {
    en: {
      header: "Contact",
      heroTitle: "I’d love to hear about your story",
      subtitle: "Reach out and let’s create something timeless together",
    },
    el: {
      header: "Επικοινωνία",
      heroTitle: "Θα χαρώ να ακούσω την ιστορία σου",
      subtitle: "Επικοινώνησε μαζί μου και έλα να δημιουργήσουμε παρέα κάτι αναλλοίωτο στον χρόνο",
    },
  };

  const T = M[locale] ?? M.en;

  return (
    <section className="bg-[#031526] text-[#EAEAEA] pb-12">
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
