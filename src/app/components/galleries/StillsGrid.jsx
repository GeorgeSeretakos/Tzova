"use client"

import { useState, useEffect } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

export default function StillsGrid({ items = [] }) {
  const [loaded, setLoaded] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    if (!items || items.length === 0) {
      setLoaded(true)
      return
    }

    let cancelled = false
    const srcs = Array.from(new Set(items.map((it) => it.src))) // dedupe
    let done = 0

    const onDone = () => {
      done += 1
      if (!cancelled && done >= srcs.length) setLoaded(true)
    }

    // preload
    const imgs = srcs.map((src) => {
      const img = new Image()
      img.onload = onDone
      img.onerror = onDone // <-- count errors too
      img.src = src
      return img
    })

    // bail out after N seconds in case some never resolve
    const timeout = setTimeout(() => {
      if (!cancelled) setLoaded(true)
    }, 8000)

    return () => {
      cancelled = true
      clearTimeout(timeout)
      imgs.forEach((img) => {
        img.onload = null
        img.onerror = null
      })
    }
  }, [items])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return

      if (e.key === "Escape") {
        setIsModalOpen(false)
      } else if (e.key === "ArrowLeft") {
        goToPrevious()
      } else if (e.key === "ArrowRight") {
        goToNext()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isModalOpen, currentImageIndex])

  const openModal = (index) => {
    setCurrentImageIndex(index)
    setIsModalOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setIsModalOpen(false)
    document.body.style.overflow = "unset"
  }

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % items.length)
  }

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + items.length) % items.length)
  }

  if (!loaded) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
      </div>
    )
  }

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6">
        {items.map((it, i) => (
          <figure
            key={it.src || i}
            className="break-inside-avoid mb-6 md:mb-10 overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => openModal(i)}
          >
            <div style={{ aspectRatio: `${it.w}/${it.h}` }} className="bg-[#111]">
              <img
                src={it.src || "/placeholder.svg"}
                alt={it.alt || "Photo"}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </figure>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 md:p-8">
          {/* Close button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          >
            <X size={24} />
          </button>

          {/* Previous button */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            disabled={items.length <= 1}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Next button */}
          <button
            onClick={goToNext}
            className="absolute right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            disabled={items.length <= 1}
          >
            <ChevronRight size={24} />
          </button>

          {/* Current image */}
          <div className="w-full h-full flex items-center justify-center">
            <img
              src={items[currentImageIndex]?.src || "/placeholder.svg"}
              alt={items[currentImageIndex]?.alt || "Photo"}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </div>

          {/* Image counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {currentImageIndex + 1} / {items.length}
          </div>
        </div>
      )}
    </>
  )
}
