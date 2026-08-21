"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { renderRichText } from "@/lib/renderRichText";
import { Document } from "@contentful/rich-text-types";

interface Slide {
  title: string;
  description: Document;
  image: {
    fields: {
      file: {
        url: string;
      };
      title?: string;
    };
  };
}

interface EditorialSliderProps {
  slides: Slide[];
}

export default function EditorialSlider({ slides }: EditorialSliderProps) {
  const [index, setIndex] = useState(0);
  const total = slides.length;

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + total) % total);
  };

  const slide = slides[index];

  if (!slide) return null;

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <h2 className="font-ivy text-[32px] leading-tight text-primary sm:text-[44px]">
          Attractions Near Kudajadri Drizzle Homestay Wayanad
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-4">

        {/* TEXT */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-3xl sm:text-4xl font-ivy leading-tight">
              {slide.title}
            </h3>

            <div className="mt-6 text-gray-600">
              {renderRichText(slide.description)}
            </div>

            <div className="mt-8 flex gap-4">
              <button onClick={prevSlide} className="px-4 py-2 border">
                Prev
              </button>
              <button onClick={nextSlide} className="px-4 py-2 border">
                Next
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* IMAGE */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.image.fields.file.url}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="relative h-[400px] w-full"
          >
            <Image
              src={`https:${slide.image.fields.file.url}`}
              alt={slide.image.fields.title || slide.title}
              fill
              className="object-cover rounded-xl"
            />
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
