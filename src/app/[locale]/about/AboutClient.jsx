"use client";

import { useState } from "react";
import {
  Camera,
  Clapperboard,
  Images,
  Scissors,
  GraduationCap,
} from "lucide-react";
import AnimatedPageHeader from "../../components/AnimatedPageHeader";

const ICONS = {
  Camera,
  Clapperboard,
  Images,
  Scissors,
  GraduationCap,
};

export default function AboutClient({ content }) {
  const [open, setOpen] = useState(false);
  const L = content;

  return (
    <section className="min-h-screen bg-[#031526] text-[#EAEAEA]">
      <AnimatedPageHeader
        title={L.header.title}
        iconSrc="/icons/about.png"
        iconAlt="Delicate hand-drawn sketch"
      />

      <div className="max-w-7xl mx-auto px-4 pb-24">
        {/* Hero */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-2xl overflow-hidden border border-[#C6A664]/30">
            <img
              src="/images/katerina/6.jpg"
              alt="Katerina Tzova portrait"
              className="w-full h-[420px] object-cover"
            />
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
        <h3 className="font-serif">{L.whatIDo.title}</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {L.whatIDo.cards.map((c) => {
            const Icon = ICONS[c.icon];
            return (
              <div
                key={c.title}
                className="rounded-2xl border border-[#C6A664]/30 hover:border-[#D4AF37] transition p-5 bg-[#031526]"
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

        {/* Roots */}
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
        <h3 className="font-serif">{L.roots.title}</h3>
        <ul className="list-disc list-inside space-y-2 text-[#EAEAEA]/80">
          {L.roots.items.map((i, idx) => (
            <li key={idx}>{i}</li>
          ))}
        </ul>

        {/* Projects */}
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
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

        {/* CTA */}
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
        <div className="text-center">
          <h1 className="font-great-vibes !font-normal">{L.cta}</h1>
        </div>
      </div>
    </section>
  );
}
