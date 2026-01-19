"use client";

import { createContext, useContext, useState, useEffect } from "react";

const LocaleContext = createContext(null);

export function LocaleProvider({ children }) {
  const [locale, setLocaleState] = useState("en"); // fallback

  // Read cookie ONCE on mount
  useEffect(() => {
    const cookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("locale="));

    if (cookie) {
      const value = cookie.split("=")[1];
      if (value === "en" || value === "el") {
        setLocaleState(value);
      }
    }
  }, []);

  function setLocale(next) {
    if (next !== "en" && next !== "el") return;

    setLocaleState(next);
    document.cookie = `locale=${next}; Path=/; Max-Age=${
      60 * 60 * 24 * 365
    }; SameSite=Lax`;
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx.locale;
}

export function useSetLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useSetLocale must be used within LocaleProvider");
  return ctx.setLocale;
}
