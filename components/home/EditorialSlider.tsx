"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { editorialSlides } from "@/data/editorialSlides";

export default function EditorialSlider() {
  const [index, setIndex] = useState(0);
  const total = editorialSlides.length;
  const slide = editorialSlides[index];
  const progress = (index + 1) / total;

  const next = () => {
    if (index < total - 1) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <section className="h-screen w-full flex items-center">
      <div
        className="
          w-full
          max-w-[1440px]
          mx-auto
          px-4 sm:px-6 lg:px-12
          grid
          grid-cols-1
          lg:grid-cols-[50%_50%]
          gap-16
          items-start
        "
      >
        {/* RIGHT – IMAGE (RATIO SOURCE) */}
        <div className="order-2 lg:order-2 flex justify-end">
          <div className="relative w-full aspect-[3/4] max-w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.image}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-0"
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* LEFT – CONTENT (MATCHES IMAGE HEIGHT) */}
        <div className="order-1 lg:order-1 flex flex-col justify-between h-full">

          {/* TOP */}
          <div>
            <span className="text-xs tracking-widest text-gray-500 uppercase">
              {slide.tag}
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold leading-tight">
              {slide.title}
            </h2>
          </div>

          {/* BOTTOM */}
          <div className="mt-8">
            <p className="text-gray-600 max-w-xl mb-4 text-sm sm:text-base">
              {slide.description}
            </p>

            {/* PROGRESS BAR */}
            <div className="w-full h-[2px] bg-gray-200 overflow-hidden mb-6">
              <motion.div
                className="h-full bg-black"
                animate={{ width: `${progress * 100}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>

            {/* COUNTER + ARROWS */}
            <div className="flex items-center gap-4 sm:gap-6">
              <span className="text-sm text-gray-500 tabular-nums">
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(total).padStart(2, "0")}
              </span>

              <div className="flex items-center gap-3">
                <button
                  onClick={prev}
                  disabled={index === 0}
                  className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center border disabled:opacity-30"
                  aria-label="Previous"
                >
                  ←
                </button>

                <button
                  onClick={next}
                  disabled={index === total - 1}
                  className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center border disabled:opacity-30"
                  aria-label="Next"
                >
                  →
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
