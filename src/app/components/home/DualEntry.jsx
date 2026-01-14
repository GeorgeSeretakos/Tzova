"use client";

import Link from "next/link";
import { useLocale } from "../../../../lib/locale";

export default function DualEntry({ variant = "boxed", stills, films }) {
  const locale = useLocale();

  const M = {
    en: {
      stills: {
        title: "Stills",
        descBoxed:
          "Timeless photographs capturing the essence of weddings, baptisms, theatre, film, and portraits — stories told through light and detail.",
        descFull:
          "Timeless photographs capturing weddings, baptisms, theatre, film, and portraits — authentic moments preserved with artistry.",
      },
      films: {
        title: "Films",
        desc:
          "Cinematic films that capture emotion and atmosphere, turning moments into lasting stories.",
      },
    },
    el: {
      stills: {
        title: "Φωτογραφίες",
        descBoxed:
          "Διαχρονικές φωτογραφίες που αποτυπώνουν την ουσία γάμων, βαπτίσεων, θεάτρου, κινηματογράφου και πορτρέτων — ιστορίες ειπωμένες μέσα από το φως και τη λεπτομέρεια.",
        descFull:
          "Διαχρονικές φωτογραφίες από γάμους, βαπτίσεις, θέατρο, κινηματογράφο και πορτρέτα — αυθεντικές στιγμές αποτυπωμένες με καλλιτεχνική ματιά.",
      },
      films: {
        title: "Ταινίες",
        desc:
          "Κινηματογραφικές ταινίες που αποτυπώνουν συναίσθημα και ατμόσφαιρα, μετατρέποντας τις στιγμές σε διαχρονικές ιστορίες.",
      },
    },
  };

  const T = M[locale];

  if (variant === "boxed") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* STILLS */}
        <Link
          href="/stills"
          className="group border border-[#C6A664]/40 rounded-xl p-8 bg-[#121214] hover:border-[#D4AF37] transition"
        >
          <h2 className="font-serif">{T.stills.title}</h2>
          <p className="mt-2 text-sm text-[#EAEAEA]/70">
            {T.stills.descBoxed}
          </p>
          <div className="mt-6 h-48 md:h-64 lg:h-80 rounded-md overflow-hidden relative">
            {stills?.src ? (
              <img
                src={stills.src}
                alt={stills.alt || `${T.stills.title} cover`}
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full bg-black/30" />
            )}
          </div>
        </Link>

        {/* FILMS */}
        <Link
          href="/films"
          className="group border border-[#C6A664]/40 rounded-xl p-8 bg-[#121214] hover:border-[#D4AF37] transition"
        >
          <h2 className="font-serif">{T.films.title}</h2>
          <p className="mt-2 text-[#EAEAEA]/70">
            {T.films.desc}
          </p>
          <div className="mt-6 h-48 md:h-64 lg:h-80 rounded-md overflow-hidden relative">
            {films?.src ? (
              <img
                src={films.src}
                alt={films.alt || `${T.films.title} cover`}
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full bg-black/30" />
            )}
          </div>
        </Link>
      </div>
    );
  }

  // Full-bleed version
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* STILLS */}
      <Link
        href="/stills"
        className="group border border-[#C6A664]/40 rounded-xl p-0 bg-[#121214] hover:border-[#D4AF37] transition overflow-hidden relative h-72 md:h-80 lg:h-96"
      >
        {stills?.src && (
          <img
            src={stills.src}
            alt={stills.alt || `${T.stills.title} cover`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        )}
        <div className="absolute inset-0 bg-black/35 backdrop-blur-[2px] group-hover:bg-black/30 transition" />
        <div className="absolute bottom-0 left-0 p-6">
          <h2 className="text-2xl md:text-3xl">{T.stills.title}</h2>
          <p className="mt-2 text-sm text-[#EAEAEA]/85 max-w-xs">
            {T.stills.descFull}
          </p>
        </div>
      </Link>

      {/* FILMS */}
      <Link
        href="/films"
        className="group border border-[#C6A664]/40 rounded-xl p-0 bg-[#121214] hover:border-[#D4AF37] transition overflow-hidden relative h-72 md:h-80 lg:h-96"
      >
        {films?.src && (
          <img
            src={films.src}
            alt={films.alt || `${T.films.title} cover`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        )}
        <div className="absolute inset-0 bg-black/35 backdrop-blur-[2px] group-hover:bg-black/30 transition" />
        <div className="absolute bottom-0 left-0 p-6">
          <h2 className="text-2xl md:text-3xl">{T.films.title}</h2>
          <p className="mt-2 text-sm text-[#EAEAEA]/85 max-w-xs">
            {T.films.desc}
          </p>
        </div>
      </Link>
    </div>
  );
}
