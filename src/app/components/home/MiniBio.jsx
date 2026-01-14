"use client";

import { useLocale } from "../../../../lib/locale";

export default function MiniBio() {
  const locale = useLocale();

  const M = {
    en: {
      title: "About Katerina",
      text: (
        <>
          Katerina Tzova is a Greece-based photographer and filmmaker crafting
          intimate stories with cinematic light and presence. Trained in
          Photography &amp; Audiovisual Arts at PADA Athens (with Erasmus studies
          in Florence) and holding an MA in Culture &amp; Documentary Film
          Production from the University of the Aegean, her work spans weddings,
          baptisms, portraits, theatre and documentaries—including her debut film{" "}
          <em>APOLIS</em>.
        </>
      ),
      button: "Read full bio",
      aria: "Read Katerina Tzova’s full biography",
    },
    el: {
      title: "Σχετικά με την Κατερίνα",
      text: (
        <>
          Η Κατερίνα Τζόβα είναι φωτογράφος και δημιουργός ταινιών με έδρα την
          Ελλάδα, και δημιουργεί οικείες ιστορίες με κινηματογραφικό φως και
          παρουσία. Σπούδασε Φωτογραφία &amp; Οπτικοακουστικές Τέχνες στο ΠΑΔΑ
          Αθήνας (με σπουδές Erasmus στη Φλωρεντία) και κατέχει μεταπτυχιακό
          τίτλο στην Πολιτιστική Διαχείριση &amp; Παραγωγή Ντοκιμαντέρ από το
          Πανεπιστήμιο Αιγαίου. Το έργο της εκτείνεται σε γάμους, βαπτίσεις,
          πορτρέτα, θέατρο και ντοκιμαντέρ — συμπεριλαμβανομένης της πρώτης της
          ταινίας <em>APOLIS</em>.
        </>
      ),
      button: "Διάβασε ολόκληρο το βιογραφικό",
      aria: "Διάβασε το πλήρες βιογραφικό της Κατερίνας Τζόβα",
    },
  };

  const T = M[locale];

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
        <a href="/about" className="btn-gold" aria-label={T.aria}>
          {T.button}
        </a>
      </div>
    </section>
  );
}
