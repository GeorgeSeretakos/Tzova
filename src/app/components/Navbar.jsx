"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

/* ---------------- Translations ---------------- */

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
    stills: "Στατική Εικόνα",
    films: "Κινούμενη Εικόνα",
    about: "Σχετικά",
    contact: "Επικοινωνία",
    openMenu: "Άνοιγμα μενού",
    closeMenu: "Κλείσιμο μενού",
  },
};

/* ---------------- Helpers ---------------- */

function extractLocale(pathname) {
  const match = pathname.match(/^\/(el|en)(\/|$)/);
  return match ? match[1] : "en";
}

function stripLocale(pathname) {
  return pathname.replace(/^\/(el|en)/, "") || "/";
}

/* ---------------- Component ---------------- */

export default function Navbar({ locale: forcedLocale }) {
  const pathname = usePathname();

  const locale =
    forcedLocale && M[forcedLocale]
      ? forcedLocale
      : extractLocale(pathname);

  const T = M[locale] ?? M.en;

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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

  const basePath = stripLocale(pathname);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-[#031526] border-b border-[#C6A664]/30"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <Link href={`/${locale}`} className="relative h-10 w-48">
          <img
            src="/logo/horizontal_white(2).png"
            alt="Katerina Tzova"
            className="object-contain w-full h-full"
          />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-4 text-[#EAEAEA]">
          <NavItem href={`/${locale}`} label={T.home} />
          <NavItem href={`/${locale}/stills`} label={T.stills} />
          <NavItem href={`/${locale}/films`} label={T.films} />
          <NavItem href={`/${locale}/about`} label={T.about} />
          <NavItem href={`/${locale}/contact`} label={T.contact} />

          <LangToggle locale={locale} basePath={basePath} />
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-4">
          <LangToggle locale={locale} basePath={basePath} compact />

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
        <div className="md:hidden bg-[#031526] shadow-md">
          <div className="flex flex-col space-y-3 px-6 py-4 font-medium text-[#EAEAEA]">
            <NavItem href={`/${locale}`} label={T.home} />
            <NavItem href={`/${locale}/stills`} label={T.stills} />
            <NavItem href={`/${locale}/films`} label={T.films} />
            <NavItem href={`/${locale}/about`} label={T.about} />
            <NavItem href={`/${locale}/contact`} label={T.contact} />
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
function LangToggle({ locale, basePath, compact = false }) {
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
      <Link
        href={`/el${basePath}`}
        aria-current={locale === "el" ? "true" : undefined}
        className={`${base} ${locale === "el" ? active : inactive}`}
        title="Ελληνικά"
      >
        EL
      </Link>

      <span className="mx-1 text-[#EAEAEA]/30 select-none">|</span>

      <Link
        href={`/en${basePath}`}
        aria-current={locale === "en" ? "true" : undefined}
        className={`${base} ${locale === "en" ? active : inactive}`}
        title="English"
      >
        EN
      </Link>
    </div>
  );
}
