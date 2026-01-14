"use client";

import { useLocale } from "@/lib/locale";

export default function Footer() {
  const locale = useLocale();

  const M = {
    en: {
      telLabel: "Tel:",
      aria: {
        facebook: "Facebook",
        youtube: "YouTube",
        instagram: "Instagram",
      },
      form: {
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email",
        phone: "Phone",
        eventType: "Type of Event",
        events: [
          "Wedding",
          "Baptism",
          "Theatre",
          "Movie",
          "Advertisement",
          "Other Event",
        ],
        message: "Message / Comment",
        submit: "Send Message",
        honeypot: "Don’t fill this out:",
        privacy: {
          prefix: "I accept the",
          link: "Privacy Policy"
        }
      },
    },
    el: {
      telLabel: "Τηλ:",
      aria: {
        facebook: "Facebook",
        youtube: "YouTube",
        instagram: "Instagram",
      },
      form: {
        firstName: "Όνομα",
        lastName: "Επώνυμο",
        email: "Email",
        phone: "Τηλέφωνο",
        eventType: "Τύπος Εκδήλωσης",
        events: [
          "Γάμος",
          "Βάπτιση",
          "Θέατρο",
          "Ταινία",
          "Διαφήμιση",
          "Άλλη Εκδήλωση",
        ],
        message: "Μήνυμα / Σχόλιο",
        submit: "Αποστολή Μηνύματος",
        honeypot: "Μην συμπληρώσετε αυτό το πεδίο:",
        privacy: {
          prefix: "Αποδέχομαι την",
          link: "Πολιτική Απορρήτου"
        }
      },
    },
  };

  const T = M[locale];

  return (
    <footer className="bg-[#0B0B0C] text-[#EAEAEA] border-t border-[#C6A664]/30 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left column: Logo + Info */}
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <img
            src="/logo/white(1).png"
            alt="Katerina Tzova"
            width={220}
            height={80}
            className="mb-4"
          />

          {/* Phone */}
          <p>
            {T.telLabel}{" "}
            <a href="tel:+306974184885" className="hover:underline">
              +30 697 418 4885
            </a>
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com/kater.tzova"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={T.aria.facebook}
              className="hover:text-[#D4AF37] transition"
            >
              <img
                src="/icons/facebook.png"
                alt={T.aria.facebook}
                className="w-5 h-5"
              />
            </a>
            <a
              href="https://www.youtube.com/@katerinatzova9005"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={T.aria.youtube}
              className="hover:text-[#D4AF37] transition"
            >
              <img
                src="/icons/youtube.png"
                alt={T.aria.youtube}
                className="w-5 h-5"
              />
            </a>
            <a
              href="https://www.instagram.com/katerinatzova/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={T.aria.instagram}
              className="hover:text-[#D4AF37] transition"
            >
              <img
                src="/icons/instagram.png"
                alt={T.aria.instagram}
                className="w-5 h-5"
              />
            </a>
          </div>
        </div>

        {/* Right column: Contact Form */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          action="/thank-you"
          className="space-y-4"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              {T.form.honeypot} <input name="bot-field" />
            </label>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              id="firstName"
              type="text"
              name="firstName"
              placeholder={T.form.firstName}
              required
              className="w-full rounded-md bg-[#121214] border border-[#C6A664]/30 px-3 py-2 text-sm focus:border-[#D4AF37] focus:outline-none"
            />
            <input
              id="lastName"
              type="text"
              name="lastName"
              placeholder={T.form.lastName}
              required
              className="w-full rounded-md bg-[#121214] border border-[#C6A664]/30 px-3 py-2 text-sm focus:border-[#D4AF37] focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              id="email"
              type="email"
              name="email"
              placeholder={T.form.email}
              required
              className="w-full rounded-md bg-[#121214] border border-[#C6A664]/30 px-3 py-2 text-sm focus:border-[#D4AF37] focus:outline-none"
            />
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder={T.form.phone}
              className="w-full rounded-md bg-[#121214] border border-[#C6A664]/30 px-3 py-2 text-sm focus:border-[#D4AF37] focus:outline-none"
            />
          </div>

          <select
            id="eventType"
            name="eventType"
            required
            className="w-full rounded-md bg-[#121214] border border-[#C6A664]/30 px-3 py-2 text-sm focus:border-[#D4AF37] focus:outline-none"
          >
            <option value="">{T.form.eventType}</option>
            {T.form.events.map((e) => (
              <option key={e}>{e}</option>
            ))}
          </select>

          <textarea
            id="message"
            name="message"
            placeholder={T.form.message}
            rows={4}
            className="w-full rounded-md bg-[#121214] border border-[#C6A664]/30 px-3 py-2 text-sm focus:border-[#D4AF37] focus:outline-none"
          />

          {/* Consent + Submit */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-2">
            <label className="flex items-center gap-2 text-xs sm:text-sm text-[#EAEAEA]/80">
              <input
                type="checkbox"
                name="consent"
                value="yes"
                required
                className="opacity-70"
              />
              <span>
                {T.form.privacy.prefix}{" "}
                          <a
                            href="/privacy-policy"
                            className="hover:underline text-[#EAEAEA]"
                          >
                  {T.form.privacy.link}
                </a>
              </span>
            </label>

            <button
              type="submit"
              className="btn-gold w-full md:w-auto px-6 py-2"
            >
              {T.form.submit}
            </button>
          </div>

        </form>
      </div>
    </footer>
  );
}
