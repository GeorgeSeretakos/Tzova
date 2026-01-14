"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "../../../../lib/locale";
import {categories} from "../../../../public/data/categories";

export default function CategoryShowcase() {
  const locale = useLocale();

  const localizedCategories = categories[locale];

  const M = {
    en: {
      viewGallery: "View Gallery",
    },
    el: {
      viewGallery: "Προβολή Gallery",
    },
  };

  const T = M[locale];

  return (
    <div className="flex flex-col">
      {localizedCategories.map((cat, i) => (
        <div
          key={cat.slug}
          className="grid grid-cols-1 md:grid-cols-2 gap-0 min-h-[400px]"
        >
          {/* Image */}
          <div
            className={`relative h-[360px] md:h-auto ${
              i % 2 === 0 ? "" : "md:order-2"
            }`}
          >
            <Image
              src={cat.image}
              alt={cat.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Text */}
          <div
            className={`flex flex-col justify-center items-start p-10 bg-[#0B0B0C] ${
              i % 2 === 0 ? "" : "md:order-1"
            }`}
          >
            <h1 className="font-great-vibes !font-normal mb-4">
              {cat.title}
            </h1>
            <p className="text-[#EAEAEA]/80 mb-6 max-w-lg">
              {cat.description}
            </p>
            <Link href={cat.href} className="btn-gold">
              {T.viewGallery}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
