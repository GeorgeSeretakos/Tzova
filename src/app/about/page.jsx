"use client";
import { useState } from "react";
import {
  Camera,
  Clapperboard,
  Images,
  Scissors,
  GraduationCap,
} from "lucide-react";
import AnimatedPageHeader from "../components/AnimatedPageHeader";
import { useLocale } from "../../../lib/locale";

export default function AboutPage() {
  const [open, setOpen] = useState(false);
  const locale = useLocale();

  const M = {
    en: {
      header: { title: "About" },
      intro: {
        name: "Katerina Tzova",
        tagline:
          "Cinematographer & Photographer based in Greece. Documentary-minded visuals for weddings, baptisms, theatre, and real stories.",
        bio: (
          <>
            Born in Corinth (1984). Studied Photography & Audiovisual Arts in
            Athens (ATEI—now University of West Attica) with ERASMUS at the
            Università degli Studi di Firenze (grad. 2009). Postgraduate studies
            at the University of the Aegean in{" "}
            <span className="italic">
              Culture and Documentary Film Production
            </span>
            .
          </>
        ),
        playful:
          "When not shooting, I’m busy being a dog-mom to Carusos.",
        readMore: {
          open: "Hide full story",
          closed: "Read full story",
        },
        fullStory: (
          <>
            I began with video art and soon turned to documentary. A spark from my
            Constantinopolitan roots—recording family memories—became{" "}
            <span className="font-medium">APOLIS</span>, my first documentary.
            Since 2002 I’ve worked at FOTO VICTOR (Neapoli Exarcheion),
            photographed interiors for a decor magazine, and created trailers
            for theatre. I work as a cinematographer for weddings, baptisms, and
            events; have served as a script supervisor for TV series; taught
            photography and the language of cinema to teens and adults; directed
            the stage piece{" "}
            <span className="font-medium">“The Fish’s Gaze”</span> about a river
            in Argolida under municipal pressure; and contributed as
            photographer & editor to{" "}
            <span className="font-medium">
              Dimitris Mouzakitis’ “01”
            </span>{" "}
            (2024).
          </>
        ),
      },
      whatIDo: {
        title: "What I Do",
        cards: [
          {
            title: "Weddings & Baptisms",
            desc: "Discreet, documentary-minded coverage that honors feeling.",
            icon: Clapperboard,
          },
          {
            title: "Theatre & Events",
            desc: "Trailers, backstage, and performances with atmosphere.",
            icon: Images,
          },
          {
            title: "Photography",
            desc:
              "People, theatre, and select editorial with elegant detail.",
            icon: Camera,
          },
          {
            title: "Editing",
            desc: "Narrative pacing for shorts and features.",
            icon: Scissors,
          },
          {
            title: "Teaching",
            desc:
              "Workshops on photography and the language of cinema.",
            icon: GraduationCap,
          },
        ],
      },
      roots: {
        title: "Roots & Education",
        items: [
          "Origins: Corinth (1984); Constantinopolitan & Peloponnesian family",
          "ATEI Athens (now UniWA), Photography & Audiovisual Arts — 2009",
          "ERASMUS: Università degli Studi di Firenze",
          "M.A.: University of the Aegean — Culture & Documentary Film Production",
          "Seminars in documentary & cinematography",
        ],
      },
      projects: {
        title: "Selected Projects",
        items: [
          {
            title: "aPolis",
            desc:
              "Debut documentary rooted in Constantinopolitan family histories.",
          },
          {
            title: "The Fish’s Gaze",
            desc:
              "Theatre direction; a reflection on a river in Argolida under municipal pressure.",
          },
          {
            title: "01 (2024, dir. Dimitris Mouzakitis)",
            desc: "Photographer & editor.",
          },
        ],
      },
      cta: "Let’s talk about your story",
    },

    el: {
      header: { title: "Σχετικά" },
      intro: {
        name: "Κατερίνα Τζόβα",
        tagline:
          "Διευθύντρια Φωτογραφίας & Φωτογράφος με έδρα την Ελλάδα. Προσεγγίζω γάμους, βαπτίσεις, θέατρο και αληθινές ιστορίες, με ματιά ντοκιμαντέρ.",
        bio: (
          <>
            Γεννήθηκα στην Κόρινθο (1984). Σπούδασα Φωτογραφία &
            Οπτικοακουστικές Τέχνες στην Αθήνα (ΑΤΕΙ — σημερινό
            Πανεπιστήμιο Δυτικής Αττικής) και συμμετείχα στο πρόγραμμα
            ERASMUS στο Università degli Studi di Firenze (αποφοίτηση
            2009). Μεταπτυχιακές σπουδές στο Πανεπιστήμιο Αιγαίου στον
            τομέα της{" "}
            <span className="italic">
              Πολιτιστικής Διαχείρισης και Παραγωγής Ντοκιμαντέρ
            </span>
            .
          </>
        ),
        playful:
          "Όταν δεν βρίσκομαι πίσω από την κάμερα, είμαι απασχολημένη κάνοντας την dog-mom του Carusos.",
        readMore: {
          open: "Απόκρυψη πλήρους ιστορίας",
          closed: "Διάβασε ολόκληρη την ιστορία",
        },
        fullStory: (
          <>
            Ξεκίνησα με video art και σύντομα στράφηκα στο ντοκιμαντέρ.
            Ένα έναυσμα από τις Κωνσταντινουπολίτικες ρίζες μου — η
            καταγραφή οικογενειακών αναμνήσεων — οδήγησε στο{" "}
            <span className="font-medium">APOLIS</span>, το πρώτο μου
            ντοκιμαντέρ. Από το 2002 έχω εργαστεί στο FOTO VICTOR (Νεάπολη
            Εξαρχείων), έχω φωτογραφίσει εσωτερικούς χώρους για περιοδικό
            διακόσμησης και έχω δημιουργήσει trailers για θεατρικές
            παραστάσεις. Εργάζομαι ως διευθύντρια φωτογραφίας σε γάμους,
            βαπτίσεις και εκδηλώσεις· έχω διατελέσει script supervisor σε
            τηλεοπτικές σειρές· έχω διδάξει φωτογραφία και τη γλώσσα του
            κινηματογράφου σε εφήβους και ενήλικες· έχω σκηνοθετήσει το
            θεατρικό έργο{" "}
            <span className="font-medium">«Το Βλέμμα του Ψαριού»</span>,
            που πραγματεύεται ένα ποτάμι στην Αργολίδα υπό δημοτική
            πίεση· και έχω συμμετάσχει ως φωτογράφος και μοντέζερ στο{" "}
            <span className="font-medium">
              «01» του Δημήτρη Μουζακίτη
            </span>{" "}
            (2024).
          </>
        ),
      },
      whatIDo: {
        title: "Τι Κάνω",
        cards: [
          {
            title: "Γάμοι & Βαπτίσεις",
            desc:
              "Διακριτική, ντοκιμαντερίστικη κάλυψη με έμφαση στο συναίσθημα.",
            icon: Clapperboard,
          },
          {
            title: "Θέατρο & Εκδηλώσεις",
            desc:
              "Trailers, backstage και παραστάσεις με ατμόσφαιρα.",
            icon: Images,
          },
          {
            title: "Φωτογραφία",
            desc:
              "Άνθρωποι, θέατρο και επιλεγμένη editorial δουλειά με έμφαση στη λεπτομέρεια.",
            icon: Camera,
          },
          {
            title: "Μοντάζ",
            desc:
              "Αφηγηματικός ρυθμός για μικρού και μεγάλου μήκους έργα.",
            icon: Scissors,
          },
          {
            title: "Διδασκαλία",
            desc:
              "Σεμινάρια φωτογραφίας και της γλώσσας του κινηματογράφου.",
            icon: GraduationCap,
          },
        ],
      },
      roots: {
        title: "Ρίζες & Εκπαίδευση",
        items: [
          "Καταγωγή: Κόρινθος (1984)· οικογένεια Κωνσταντινουπολίτικης και Πελοποννησιακής προέλευσης",
          "ΑΤΕΙ Αθήνας (νυν ΠΑΔΑ), Φωτογραφία & Οπτικοακουστικές Τέχνες — 2009",
          "ERASMUS: Università degli Studi di Firenze",
          "Μ.Α.: Πανεπιστήμιο Αιγαίου — Πολιτιστική Διαχείριση & Παραγωγή Ντοκιμαντέρ",
          "Σεμινάρια ντοκιμαντέρ & κινηματογράφησης",
        ],
      },
      projects: {
        title: "Επιλεγμένα Έργα",
        items: [
          {
            title: "aPolis",
            desc:
              "Πρώτο ντοκιμαντέρ με ρίζες σε Κωνσταντινουπολίτικες οικογενειακές ιστορίες.",
          },
          {
            title: "Το Βλέμμα του Ψαριού",
            desc:
              "Θεατρική σκηνοθεσία· στοχασμός πάνω σε ένα ποτάμι της Αργολίδας υπό δημοτική πίεση.",
          },
          {
            title: "01 (2024, σκην. Δημήτρης Μουζακίτης)",
            desc: "Φωτογράφος & μοντέζ.",
          },
        ],
      },
      cta: "Ας μιλήσουμε για τη δική σου ιστορία",
    },
  };

  const L = M[locale];

  return (
    <section className="min-h-screen bg-[#0B0B0C] text-[#EAEAEA]">
      <AnimatedPageHeader
        title={L.header.title}
        iconSrc="/icons/about.png"
        iconAlt="Delicate hand-drawn sketch"
      />

      <div className="max-w-7xl mx-auto px-4 pb-24">
        {/* Hero */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-[#C6A664]/30">
              <img
                src="/images/katerina/6.jpg"
                alt="Katerina Tzova portrait"
                className="w-full h-[420px] object-cover"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif">{L.intro.name}</h2>
            <p className="text-[#EAEAEA]/80">{L.intro.tagline}</p>
            <p className="text-[#EAEAEA]/80">{L.intro.bio}</p>
            <p className="text-[#D4AF37] italic">{L.intro.playful}</p>

            <button onClick={() => setOpen(v => !v)} className="btn-gold">
              {open ? L.intro.readMore.open : L.intro.readMore.closed}
            </button>

            {open && (
              <div className="pt-3 text-sm leading-relaxed text-[#EAEAEA]/80">
                {L.intro.fullStory}
              </div>
            )}
          </div>
        </div>

        {/* What I Do */}
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
        <div className="space-y-4">
          <h3 className="font-serif">{L.whatIDo.title}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {L.whatIDo.cards.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className="rounded-2xl border border-[#C6A664]/30 hover:border-[#D4AF37] transition p-5 bg-[#121214]"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-[#D4AF37]" />
                    <div className="font-medium">{c.title}</div>
                  </div>
                  <p className="mt-2 text-[#EAEAEA]/80">{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Roots */}
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
        <div className="space-y-4">
          <h3 className="font-serif">{L.roots.title}</h3>
          <ul className="list-disc list-inside space-y-2 text-[#EAEAEA]/80">
            {L.roots.items.map((i, idx) => (
              <li key={idx}>{i}</li>
            ))}
          </ul>
        </div>

        {/* Projects */}
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
        <div className="space-y-6">
          <h3 className="text-xl font-serif">{L.projects.title}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {L.projects.items.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-[#C6A664]/30 p-5 hover:border-[#D4AF37] transition"
              >
                <div className="font-medium">{p.title}</div>
                <p className="mt-2 text-[#EAEAEA]/80">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
        <div className="text-center">
          <h1 className="font-great-vibes !font-normal">{L.cta}</h1>
        </div>
      </div>
    </section>
  );
}
