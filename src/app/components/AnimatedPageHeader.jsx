"use client";

import { motion } from "framer-motion";

export default function AnimatedPageHeader({
                                             title,
                                             iconSrc,
                                             iconAlt = "",
                                             titleClassName = "",
                                             iconClassName = "",
                                           }) {
  return (
    <div className="py-10">
      <div className="flex items-center justify-center gap-4">
        {/* Title */}
        <motion.h1
          className={`font-great-vibes !font-normal ${titleClassName}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
        >
          {title}
        </motion.h1>

        {/* Icon */}
        <motion.img
          src={iconSrc}
          alt={iconAlt}
          width={64}
          height={64}
          className={`opacity-80 ${iconClassName}`}
          initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
          animate={{ opacity: 0.8, scale: 1, rotate: 0 }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: "easeOut",
          }}
        />
      </div>
    </div>
  );
}
