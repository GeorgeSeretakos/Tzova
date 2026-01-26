"use client";

import Link from "next/link";

export default function MiniBio({ locale }) {

  const M = {
    en: {
      title: "About Katerina",
      text: (
        <>
          Katerina Tzova, a photographer and filmmaker based in Athens, creates
          stories through light and presence in space. She studied Photography and
          Audiovisual Arts at the University of West Attica and holds a postgraduate
          degree in Cultural Management and Documentary Production from the University
          of the Aegean. Her work spans weddings, baptisms, portraits, theatre, and
          documentary, including her award-winning film <em>aPolis</em>.
        </>
      ),
      button: "Read full bio",
      aria: "Read Katerina Tzova’s full biography",
    },
    el: {
      title: "Σχετικά με την Κατερίνα",
      text: (
        <>
          Η Κατερίνα Τζόβα, φωτογράφος και δημιουργός ταινιών με έδρα την Αθήνα,
          φτιάχνει ιστορίες με το φως και την παρουσία της στο χώρο. Σπούδασε Φωτογραφία
          & Οπτικοακουστικές Τέχνες στο ΠΑΔΑ και κατέχει μεταπτυχιακό τίτλο στην Πολιτιστική
          Διαχείριση & Παραγωγή Ντοκιμαντέρ από το Πανεπιστήμιο Αιγαίου. Το έργο της εκτείνεται
          σε γάμους, βαπτίσεις, πορτρέτα, θέατρο και ντοκιμαντέρ — συμπεριλαμβανομένης της
          βραβευμένης της ταινίας <em>aPolis</em>.
        </>
      ),
      button: "Διάβασε ολόκληρο το βιογραφικό",
      aria: "Διάβασε το πλήρες βιογραφικό της Κατερίνας Τζόβα",
    },
  };

  const T = M[locale] ?? M.en;
  const safeLocale = locale ?? "en";

  return (
    <section className="relative text-center md:text-left">
      {/* Sketch (gold, delicate) */}
      <div className="flex justify-center md:justify-start mb-5">
        <img
          src="/icons/camera.png"
          alt="Delicate hand-drawn sketch"
          width={84}
          height={84}
          className="opacity-80"
        />
      </div>

      {/* tiny gold divider */}
      <span
        aria-hidden
        className="inline-block w-14 h-[2px] bg-[#D4AF37] mb-4"
      />

      <h3 className="text-2xl md:text-3xl">{T.title}</h3>

      <p className="mt-3 text-sm md:text-base text-[#EAEAEA]/85 max-w-2xl">
        {T.text}
      </p>

      <div className="mt-6">
        <Link
          href={`/${safeLocale}/about`}
          className="btn-gold"
          aria-label={T.aria}
        >
          {T.button}
        </Link>
      </div>
    </section>
  );
}
