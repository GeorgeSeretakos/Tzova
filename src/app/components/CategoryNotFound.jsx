"use client";

import { useParams } from "next/navigation";

const M = {
  en: "Category not found",
  el: "Η κατηγορία δεν βρέθηκε",
};

export default function CategoryNotFound() {
  const { locale } = useParams();
  const text = M[locale] ?? M.en;

  return (
    <div className="text-center text-[#EAEAEA]/70 py-12">
      {text}
    </div>
  );
}
