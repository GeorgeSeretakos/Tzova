"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export default function Hero({
images = [],
// logoSrc = "",
autoPlay = true,
intervalMs = 6500,
}) {
  const [idx, setIdx] = useState(0);
  const touchStartX = useRef(null);
  const prefersReduced = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,
    []
  );

  // autoplay
  useEffect(() => {
    if (!autoPlay || prefersReduced || images.length < 2) return;
    const id = setInterval(
      () => setIdx((i) => (i + 1) % images.length),
      intervalMs
    );
    return () => clearInterval(id);
  }, [autoPlay, prefersReduced, images.length, intervalMs]);

  // keyboard
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setIdx((i) => (i + 1) % images.length);

  // swipe
  const onTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) (dx > 0 ? prev() : next());
    touchStartX.current = null;
  };

  return (
    <section
      className="relative min-h-[60vh] md:min-h-[100vh] overflow-hidden bg-black"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-label="Featured gallery"
    >
      {/* Slides */}
      <div className="absolute inset-0">
        {images.map((src, i) => (
          <div
            key={src + i}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === idx ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={i !== idx}
          >
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover"
            />
            {/* stronger black overlay (the "offset") */}
            <div className="absolute inset-0 bg-black/50"/>
          </div>
        ))}
      </div>

      {/* Centered logo */}
      {/*<div className="absolute inset-0 flex items-center justify-center">*/}
      {/*  <img*/}
      {/*    src={logoSrc}*/}
      {/*    alt="Katerina Tzova"*/}
      {/*    width={260}*/}
      {/*    height={90}*/}
      {/*    className="w-[44vw] max-w-[260px] min-w-[160px] drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)]"*/}
      {/*  />*/}
      {/*</div>*/}


      {/* Nav arrows */}
      {images.length > 1 && (
        <>
          <button aria-label="Previous" onClick={prev} className="hero-arrow left-4 md:left-6 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
            </svg>
          </button>

          <button aria-label="Next" onClick={next} className="hero-arrow right-4 md:right-6 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </>
      )}

      {/* Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <span
              key={i}
              onClick={() => setIdx(i)}
              className={`h-1.5 w-6 cursor-pointer rounded-full transition ${
                i === idx
                  ? "bg-[#D4AF37]"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
