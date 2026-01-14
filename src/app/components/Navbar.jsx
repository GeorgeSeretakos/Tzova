"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useLocale, useSetLocale } from "@/lib/locale";

const M = {
  en: {
    home: "Home",
    stills: "Stills",
    films: "Films",
    about: "About",
    contact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  el: {
    home: "Αρχική",
    stills: "Φωτογραφίες",
    films: "Ταινίες",
    about: "Σχετικά",
    contact: "Επικοινωνία",
    openMenu: "Άνοιγμα μενού",
    closeMenu: "Κλείσιμο μενού",
  },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const pathname = usePathname();
  const locale = useLocale();
  const setLocale = useSetLocale();

  const T = M[locale];

  /* Scroll background */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close mobile menu on route change */
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  function handleSetLocale(nextLocale) {
    if (nextLocale === locale) return;
    setLocale(nextLocale); // CONTEXT ONLY — no cookies, no refresh
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-[#0B0B0C] border-b border-[#C6A664]/30"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <Link href="/" className="relative h-10 w-48">
          <img
            src="/logo/horizontal_white(2).png"
            alt="Katerina Tzova"
            className="object-contain w-full h-full"
          />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-4 text-[#EAEAEA]">
          <NavItem href="/" label={T.home} />
          <NavItem href="/stills" label={T.stills} />
          <NavItem href="/films" label={T.films} />
          <NavItem href="/about" label={T.about} />
          <NavItem href="/contact" label={T.contact} />

          <LangToggle locale={locale} onSelect={handleSetLocale} />
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-4">
          <LangToggle locale={locale} onSelect={handleSetLocale} compact />

          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            aria-label={mobileOpen ? T.closeMenu : T.openMenu}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0B0B0C] shadow-md">
          <div className="flex flex-col space-y-3 px-6 py-4 font-medium text-[#EAEAEA]">
            <NavItem href="/" label={T.home} />
            <NavItem href="/stills" label={T.stills} />
            <NavItem href="/films" label={T.films} />
            <NavItem href="/about" label={T.about} />
            <NavItem href="/contact" label={T.contact} />
          </div>
        </div>
      )}
    </nav>
  );
}

/* ---------------- Subcomponents ---------------- */

function NavItem({ href, label }) {
  return (
    <Link
      href={href}
      className="inline-flex font-serif items-center px-2 py-1 rounded-sm transition whitespace-nowrap hover:text-[#D4AF37]"
    >
      {label}
    </Link>
  );
}

/* Language toggle (EL | EN) */
function LangToggle({ locale, onSelect, compact = false }) {
  const base = "px-0.5 focus:outline-none";
  const active = "font-semibold text-[#EAEAEA]";
  const inactive = "text-[#EAEAEA]/40 hover:text-[#D4AF37]";
  const size = compact ? "text-xs" : "text-xs md:text-sm";

  return (
    <div
      className={`flex items-center ${size}`}
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => onSelect("el")}
        disabled={locale === "el"}
        aria-current={locale === "el" ? "true" : undefined}
        className={`${base} ${locale === "el" ? active : inactive}`}
        title="Ελληνικά"
      >
        EL
      </button>

      <span className="mx-1 text-[#EAEAEA]/30 select-none">|</span>

      <button
        type="button"
        onClick={() => onSelect("en")}
        disabled={locale === "en"}
        aria-current={locale === "en" ? "true" : undefined}
        className={`${base} ${locale === "en" ? active : inactive}`}
        title="English"
      >
        EN
      </button>
    </div>
  );
}
