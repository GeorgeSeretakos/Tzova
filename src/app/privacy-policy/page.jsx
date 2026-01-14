"use client";

import { useLocale } from "../../../lib/locale";

export default function PrivacyPolicyPage() {
  const locale = useLocale();

  const M = {
    el: {
      title: "Πολιτική Απορρήτου",
      intro: (
        <>
          Η προστασία των προσωπικών σας δεδομένων είναι σημαντική για εμάς. Η
          παρούσα Πολιτική Απορρήτου εξηγεί πώς συλλέγουμε, χρησιμοποιούμε και
          προστατεύουμε τα δεδομένα που μας παρέχετε μέσω της φόρμας επικοινωνίας
          στην ιστοσελίδα <strong>katerinatzova.gr</strong>.
        </>
      ),
      sections: [
        {
          title: "Ποια δεδομένα συλλέγουμε",
          content: (
            <>
              <p className="mt-2">
                Μέσω της φόρμας επικοινωνίας, συλλέγουμε τα παρακάτω προσωπικά
                δεδομένα:
              </p>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>Όνομα</li>
                <li>Επώνυμο</li>
                <li>Διεύθυνση ηλεκτρονικού ταχυδρομείου (email)</li>
                <li>Τηλέφωνο επικοινωνίας</li>
                <li>
                  Τύπο εκδήλωσης (Γάμος, Βάπτιση, Θέατρο, Ταινία, Διαφήμιση, Άλλη
                  εκδήλωση)
                </li>
                <li>Το περιεχόμενο του μηνύματός σας</li>
              </ul>
            </>
          ),
        },
        {
          title: "Σκοπός επεξεργασίας",
          content: (
            <>
              <p className="mt-2">
                Τα προσωπικά δεδομένα χρησιμοποιούνται αποκλειστικά για την
                επικοινωνία μαζί σας και την απάντηση σε ερωτήματα που αφορούν
                τις υπηρεσίες μας.
              </p>
              <p className="mt-2">
                Δεν χρησιμοποιούνται για διαφημιστικούς σκοπούς και δεν
                διαβιβάζονται σε τρίτους χωρίς τη συγκατάθεσή σας.
              </p>
            </>
          ),
        },
        {
          title: "Νομική βάση επεξεργασίας",
          content: (
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>στη συγκατάθεσή σας μέσω της φόρμας επικοινωνίας</li>
              <li>στο έννομο συμφέρον μας να απαντήσουμε στο αίτημά σας</li>
            </ul>
          ),
        },
        {
          title: "Διάρκεια διατήρησης δεδομένων",
          content: (
            <p className="mt-2">
              Τα δεδομένα διατηρούνται μόνο για όσο απαιτείται για τον σκοπό της
              επικοινωνίας και στη συνέχεια διαγράφονται με ασφάλεια.
            </p>
          ),
        },
        {
          title: "Τα δικαιώματά σας",
          content: (
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Δικαίωμα πρόσβασης</li>
              <li>Δικαίωμα διόρθωσης</li>
              <li>Δικαίωμα διαγραφής («δικαίωμα στη λήθη»)</li>
              <li>Δικαίωμα περιορισμού ή εναντίωσης</li>
              <li>
                Υποβολή καταγγελίας στην Αρχή Προστασίας Δεδομένων Προσωπικού
                Χαρακτήρα (www.dpa.gr)
              </li>
            </ul>
          ),
        },
        {
          title: "Επικοινωνία για θέματα απορρήτου",
          content: (
            <p className="mt-2">
              Για οποιοδήποτε σχετικό αίτημα, μπορείτε να επικοινωνήσετε στο{" "}
              <a
                href="mailto:katerinatzova@gmail.com"
                className="underline"
              >
                katerinatzova@gmail.com
              </a>.
            </p>
          ),
        },
        {
          title: "Ασφάλεια δεδομένων",
          content: (
            <p className="mt-2">
              Εφαρμόζουμε τεχνικά και οργανωτικά μέτρα για την προστασία των
              προσωπικών σας δεδομένων.
            </p>
          ),
        },
        {
          title: "Πνευματικά δικαιώματα και πηγές πολυμέσων",
          content: (
            <p className="mt-2">
              Στην ιστοσελίδα έχει χρησιμοποιηθεί υλικό από τις πλατφόρμες{" "}
              <a
                href="https://www.pexels.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Pexels
              </a>{" "}
              και{" "}
              <a
                href="https://unsplash.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Unsplash
              </a>
              , καθώς και εικονίδια από το{" "}
              <a
                href="https://www.freepik.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Freepik
              </a>
              . Όλες οι παραπάνω πηγές ανήκουν στις δωρεάν εκδόσεις των αντίστοιχων
              ιστοσελίδων και χρησιμοποιούνται σύμφωνα με τους όρους χρήσης και τις
              άδειες που αυτές παρέχουν.
            </p>
          ),
        },
      ],
    },

    en: {
      title: "Privacy Policy",
      intro: (
        <>
          Protecting your personal data is important to us. This Privacy Policy
          explains how we collect, use, and protect the information you provide
          through the contact form on <strong>katerinatzova.gr</strong>.
        </>
      ),
      sections: [
        {
          title: "What data we collect",
          content: (
            <>
              <p className="mt-2">
                Through the contact form, we collect the following personal
                information:
              </p>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>First name</li>
                <li>Last name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Type of event</li>
                <li>Message content</li>
              </ul>
            </>
          ),
        },
        {
          title: "Purpose of processing",
          content: (
            <>
              <p className="mt-2">
                Your data is used solely to communicate with you and respond to
                inquiries related to our services.
              </p>
              <p className="mt-2">
                It is not used for marketing purposes and is not shared with
                third parties without your consent.
              </p>
            </>
          ),
        },
        {
          title: "Legal basis",
          content: (
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Your consent via the contact form</li>
              <li>Our legitimate interest in responding to inquiries</li>
            </ul>
          ),
        },
        {
          title: "Data retention",
          content: (
            <p className="mt-2">
              Personal data is retained only for as long as necessary to fulfill
              the communication purpose and is then securely deleted.
            </p>
          ),
        },
        {
          title: "Your rights",
          content: (
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Right of access</li>
              <li>Right to rectification</li>
              <li>Right to erasure</li>
              <li>Right to restrict or object to processing</li>
              <li>Right to lodge a complaint with a supervisory authority</li>
            </ul>
          ),
        },
        {
          title: "Contact",
          content: (
            <p className="mt-2">
              For any privacy-related inquiries, contact us at{" "}
              <a
                href="mailto:katerinatzova@gmail.com"
                className="underline"
              >
                katerinatzova@gmail.com
              </a>.
            </p>
          ),
        },
        {
          title: "Data security",
          content: (
            <p className="mt-2">
              Appropriate technical and organizational measures are in place to
              safeguard your personal data.
            </p>
          ),
        },
        {
          title: "Copyright & media sources",
          content: (
            <p className="mt-2">
              The website includes content sourced from{" "}
              <a
                href="https://www.pexels.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Pexels
              </a>{" "}
              and{" "}
              <a
                href="https://unsplash.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Unsplash
              </a>
              , as well as icons from{" "}
              <a
                href="https://www.freepik.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Freepik
              </a>
              . All the above sources belong to the free versions of their respective
              platforms and are used in accordance with their terms of use and licensing
              policies.
            </p>
          ),
        },
      ],
    },
  };

  const T = M[locale];

  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-2xl md:text-3xl font-bold">{T.title}</h1>
      <p className="mt-4">{T.intro}</p>

      <ol className="mt-8 space-y-6 list-decimal pl-6">
        {T.sections.map((s, i) => (
          <li key={i}>
            <h2 className="font-semibold">{s.title}</h2>
            {s.content}
          </li>
        ))}
      </ol>
    </section>
  );
}
