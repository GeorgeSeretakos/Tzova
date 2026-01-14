"use client";

import { useLocale } from "../../../lib/locale";

const M = {
  en: "Category not found",
  el: "Η κατηγορία δεν βρέθηκε",
};

export default function CategoryNotFound() {
  const locale = useLocale();
  return (
    <div className="text-center text-[#EAEAEA]/70">
      {M[locale]}
    </div>
  );
}
