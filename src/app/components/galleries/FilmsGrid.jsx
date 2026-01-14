"use client";

import { useState } from "react";
import { useLocale } from "../../../../lib/locale";

function resolveTitle(title, locale) {
  if (!title) return null;
  if (typeof title === "string") return title;
  return title[locale] ?? title.en ?? null;
}


export default function FilmsGrid({ items = [] }) {
  const locale = useLocale();
  const [activeId, setActiveId] = useState(null);

  const play = (id) => setActiveId(id);
  const stop = () => setActiveId(null);

  return (
    // one per row + bottom spacing after the gallery
    <div className="grid grid-cols-1 gap-8 lg:gap-10 mb-16">
      {items.map((item) => {
        const isActive = activeId === item.id;

        return (
          <div
            key={item.id}
            className="group border border-white/10 rounded-lg overflow-hidden bg-black/20 w-screen -mx-4 lg:w-4/5 lg:mx-auto mb-32"
          >
            {/* Player area */}
            <div className="relative w-full h-[40vh] sm:h-[45vh] lg:h-[60vh]">
              {isActive ? (
                <Player item={item} onClose={stop}/>
              ) : (
                <Thumb item={item} onPlay={() => play(item.id)}/>
              )}
            </div>

            {/* Caption */}
            {item.title && (
              <h3 className="h-[60px] flex items-center justify-center px-3 text-[#EAEAEA]/90 border-t border-white/10 text-center font-serif">
                {resolveTitle(item.title, locale)}
              </h3>
            )}
          </div>
        );
      })}
    </div>
  );
}

function Thumb({item, onPlay}) {
  return (
    <button
      type="button"
      onClick={onPlay}
      className="absolute inset-0 w-full h-full focus:outline-none"
      aria-label={`Play ${item.title || "video"}`}
    >
      {/* Thumbnail or fallback */}
      {item.thumbnail ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={item.thumbnail}
          alt={item.title || "Video thumbnail"}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full bg-[#141414]" />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="rounded-full p-4 md:p-5 bg-white/90 text-black group-hover:bg-white transition">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M8 5v14l11-7z"></path>
          </svg>
        </div>
      </div>
    </button>
  );
}

function Player({ item, onClose }) {
  // Build embed URL for external providers
  const embed =
    item.provider === "youtube"
      ? toYouTubeEmbed(item.url)
      : item.provider === "vimeo"
        ? toVimeoEmbed(item.url)
        : null;

  return (
    <>
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-2 right-2 z-10 rounded-full bg-black/60 text-white px-2 py-1 text-xs hover:bg-black/80"
        aria-label="Close player"
      >
        Close
      </button>

      {/* Player */}
      {item.provider === "file" ? (
        <video
          src={item.url}
          poster={item.thumbnail}
          controls
          autoPlay
          className="w-full h-full object-cover"
        />
      ) : (
        <iframe
          src={embed}
          title={item.title || "Embedded video"}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </>
  );
}

/** Helpers */
function toYouTubeEmbed(url) {
  try {
    const u = new URL(url);
    let id =
      u.hostname.includes("youtu.be")
        ? u.pathname.replace("/", "")
        : u.searchParams.get("v");

    if (!id && u.pathname.startsWith("/shorts/")) {
      id = u.pathname.split("/")[2];
    }
    return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`;
  } catch {
    return `https://www.youtube.com/embed/${url}?autoplay=1&rel=0&modestbranding=1`;
  }
}

function toVimeoEmbed(url) {
  try {
    const u = new URL(url);
    let id = u.pathname.split("/").filter(Boolean).pop();
    return `https://player.vimeo.com/video/${id}?autoplay=1&title=0&byline=0&portrait=0`;
  } catch {
    return `https://player.vimeo.com/video/${url}?autoplay=1&title=0&byline=0&portrait=0`;
  }
}
