/**
 * Item shape:
 * {
 *   id: string,
 *   title?: string,
 *   provider: "youtube" | "vimeo" | "file",
 *   url: string,          // full watch URL (yt/vimeo) OR direct file URL
 *   thumbnail?: string,   // /images/films/....jpg  (optional but recommended)
 *   aspect?: string       // Tailwind aspect class, defaults to "aspect-video"
 * }
 */

export const filmsByCategory = {
  weddings: [
    {
      id: "wed-1",
      title: {
        en: "Christina & Nikos",
        el: "Χριστίνα & Νίκος"
      },
      provider: "youtube",
      url: "https://www.youtube.com/watch?v=ykZOGUaPPbI",
      thumbnail: "/images/thumbnails/weddings/W_Christina_Nikos.jpg"
    },
    {
      id: "wed-2",
      title: {
        en: "Thodoris & Maria",
        el: "Θοδωρής & Μαρία"
      },
      provider: "youtube",
      url: "https://www.youtube.com/watch?v=eHx0k1jIdeo",
      thumbnail: "/images/thumbnails/weddings/W_Thodoris+Maria_Samtorini.jpg"
    },
    {
      id: "wed-3",
      title: {
        en: "Marianna & Kostas",
        el: "Μαριάννα & Κώστας"
      },
      provider: "youtube",
      url: "https://www.youtube.com/watch?v=r3jpzbzN9N8",
      thumbnail: "/images/thumbnails/weddings/W_Marianna_Kostas.jpg"
    },
    {
      id: "wed-4",
      title: {
        en: "Lefteris & Glykeria",
        el: "Λευτέρης & Γλυκερία"
      },
      provider: "youtube",
      url: "https://www.youtube.com/watch?v=XkFyVM73HmU",
      thumbnail: "/images/thumbnails/weddings/W_LefterisGlykeria.jpg"
    },
    {
      id: "wed-5",
      title: {
        en: "Vasilis & Zoe",
        el: "Βασίλης & Ζωή"
      },
      provider: "youtube",
      url: "https://www.youtube.com/watch?v=k2x7ETkexxE",
      thumbnail: "/images/thumbnails/weddings/W_Vasilis_Zoe.jpg"
    },
    {
      id: "wed-6",
      title: {
        en: "Sofie & Meletis",
        el: "Σόφη & Μελέτης"
      },
      provider: "youtube",
      url: "https://www.youtube.com/watch?v=pd9GvbADJN4",
      thumbnail: "/images/thumbnails/weddings/W_Sofie+Meletis.png"
    },
    {
      id: "wed-7",
      title: {
        en: "Elia & Maurizio",
        el: "Έλια & Μαυρίζιο"
      },
      provider: "youtube",
      url: "https://www.youtube.com/watch?v=RBJSHJeI0So",
      thumbnail: "/images/thumbnails/weddings/W_EliaMaurizio.jpg"
    },
  ],

  baptisms: [
    {
      id: "bap-1",
      title: {
        en: "Dimitris",
        el: "Δημήτρης"
      },
      provider: "vimeo",
      url: "https://vimeo.com/1149916409?fl=ip&fe=ec",
      thumbnail: "/images/thumbnails/baptisms/V_Dimitris_180725.jpg"
    },
    {
      id: "bap-2",
      title: {
        en: "Ioannis Marios",
        el: "Ιωάννης Μάριος"
      },
      provider: "vimeo",
      url: "https://vimeo.com/1149924847?fl=ip&fe=ec",
      thumbnail: "/images/thumbnails/baptisms/V_IoannisMarios.jpg"
    },
    {
      id: "bap-3",
      title: {
        en: "Artemis",
        el: "Άρτεμις"
      },
      provider: "youtube",
      url: "https://www.youtube.com/watch?v=TsrMhnxOMQQ",
      thumbnail: "/images/thumbnails/baptisms/V_Artemis_210925.jpg"
    },
    {
      id: "bap-4",
      title: {
        en: "Irini",
        el: "Ειρήνη"
      },
      provider: "youtube",
      url: "https://www.youtube.com/watch?v=Mr6w60CRDY8",
      thumbnail: "/images/thumbnails/baptisms/V_Irini.jpg"
    },
    {
      id: "bap-5",
      title: {
        en: "Georgia",
        el: "Γεωργία"
      },
      provider: "youtube",
      url: "https://www.youtube.com/watch?v=3WRtc23hd-A",
      thumbnail: "/images/thumbnails/baptisms/V_Georgia.jpg"
    },
    {
      id: "bap-6",
      title: {
        en: "Theologos",
        el: "Θεολόγος"
      },
      provider: "youtube",
      url: "https://www.youtube.com/watch?v=87mUlBWa9gU",
      thumbnail: "/images/thumbnails/baptisms/V_theologos.jpg"
    },
  ],

  movies: [
    {
      id: "mov-1",
      title: "aPolis trailer",
      provider: "youtube",
      url: "https://youtu.be/lm8UB7nsh-I?si=MdYosDX-PxCiRrWo",
      thumbnail: "/images/thumbnails/movies/apolis.jpg",
    },
    {
      id: "mov-2",
      title: {
        en: "I remember everything - trailer",
        el: "Τα θυμάμαι όλα - trailer"
      },
      provider: "youtube",
      url: "https://youtu.be/vioWBhg3C3U?si=C9nv3zytTNiuaFie",
      thumbnail: "/images/thumbnails/movies/thimamai.jpg",
    },
    {
      id: "mov-3",
      title: "Ηχοτοπία της Ελλάδας - trailer",
      provider: "youtube",
      url: "https://youtu.be/BQXgd-CSZF8?si=WMXErBHM0j6JSPTV",
      thumbnail: "/images/thumbnails/movies/ixotopia.jpg",
    },
    {
      id: "mov-4",
      title: {
        en: "Confinement Diaries - trailer",
        el: "Ημερολόγια Εγκλεισμού - trailer"
      },
      provider: "youtube",
      url: "https://youtu.be/zyo-dB_scM8?si=zm2p5s0NmDMgacqh",
      thumbnail: "/images/thumbnails/movies/imerologia.jpg",
    },
    {
      id: "mov-5",
      title: "01 NANOS VALAORITIS & MARIE WILSON TRAILER",
      provider: "youtube",
      url: "https://www.youtube.com/watch?v=ibdx3x0ozds",
      thumbnail: "/images/thumbnails/movies/01.jpg",
    },
  ],

  theatre: [
    {
      id: "the-1",
      title: {
        en: "The Fish’s Gaze - trailer",
        el: "Το βλέμμα του ψαριού"
      },
      provider: "youtube",
      url: "https://youtu.be/mD7OJIzJtkU?si=i6rfxsYR7eQ4FX3V",
      thumbnail: "/images/thumbnails//theatre/psari.jpg",
    },
    {
      id: "the-2",
      title: "Άκου Ανθρωπάκο",
      provider: "youtube",
      url: "https://youtu.be/RsKpYrNs1zY?si=7YJhMo45mYHLn_mU",
      thumbnail: "/images/thumbnails//theatre/akou.jpg",
    },
    {
      id: "the-3",
      title: {
        en: "White Rose",
        el: "Λευκό Ρόδο"
      },
      provider: "youtube",
      url: "https://youtu.be/tebfSiAL4X0?si=gpkqr1PubiRg7HFD",
      thumbnail: "/images/thumbnails//theatre/lefko_rodo.jpg",
    },
  ],

  advertisement: [
    {
      id: "adv-1",
      title: {
        en: "Motivo Dance School",
        el: "Σχολή Χορού Motivo"
      },
      provider: "youtube",
      url: "https://www.youtube.com/watch?v=HvvWdtTdUEY",
      thumbnail: "/images/thumbnails/advertisement/dance_school.jpg"
    },
    {
      id: "adv-2",
      title: "DMC LEXI, International Symposium",
      provider: "youtube",
      url: "https://www.youtube.com/watch?v=7ID-z8NfiNw",
      thumbnail: "/images/thumbnails/films/DMC.jpg"
    },
    {
      id: "adv-3",
      title: {
        en: "Svetlana Marozaite jewellery (rings)",
        el: "Svetlana Marozaite jewellery (δαχτυλίδια)",
      },
      provider: "youtube",
      url: "https://www.youtube.com/shorts/zqyv6uzsKz8",
      thumbnail: "/images/thumbnails/advertisement/rings.png"
    },
    {
      id: "adv-4",
      title: {
        en: "Svetlana Marozaite jewellery (necklaces)",
        el: "Svetlana Marozaite jewellery (κολιέ)"
      },
      provider: "youtube",
      url: "https://www.youtube.com/shorts/GDRN00yNfLU",
      thumbnail: "/images/thumbnails/advertisement/necklaces.png"
    },
    {
      id: "adv-5",
      title: {
        en: "Svetlana Marozaite jewellery (earings)",
        el: "Svetlana Marozaite jewellery (σκουλαρίκια)"
      },
      provider: "youtube",
      url: "https://www.youtube.com/shorts/a5Pb_t440dI",
      thumbnail: "/images/thumbnails/advertisement/earings.png"
    },
    {
      id: "adv-6",
      title: {
        en: "Svetlana Marozaite jewellery (bracelets)",
        el: "Svetlana Marozaite jewellery (βραχιόλια)"
      },
      provider: "youtube",
      url: "https://www.youtube.com/shorts/6KX9KakwinM",
      thumbnail: "/images/thumbnails/advertisement/bracelets.png"
    },
    {
      id: "adv-7",
      title: {
        en: "IRC 30YEARS ENGLISH",
        el: "Διεθνείς Σχέσεις Πολιτισμού 30Χρόνια"
      },
      provider: "youtube",
      url: "https://www.youtube.com/watch?v=_fj839Iz9L4",
      thumbnail: "/images/thumbnails/advertisement/irc.png"
    }
  ]
};
