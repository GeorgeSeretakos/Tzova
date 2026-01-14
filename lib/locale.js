"use client";

import { createContext, useContext, useState } from "react";

const LocaleContext = createContext(null);

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState("en"); // default

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

/* Read-only hook */
export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return ctx.locale;
}

/* Setter hook */
export function useSetLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useSetLocale must be used within LocaleProvider");
  }
  return ctx.setLocale;
}
