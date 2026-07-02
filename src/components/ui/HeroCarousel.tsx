"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface HeroImage {
  src: string;
  alt: string;
}

interface HeroCarouselProps {
  images: HeroImage[];
  children: React.ReactNode;
  className?: string;
}

export default function HeroCarousel({ images, children, className = "" }: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <section className={`relative w-full overflow-hidden ${className}`}>
      {/* Images Container */}
      <div className="absolute inset-0 z-0">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Dark Green Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#012928] via-[#012928]/80 to-[#012928]/40" />
      <div className="absolute inset-0 z-0 bg-black/20" />

      {/* Content wrapper with text shadow for enhancement */}
      <div className="relative z-10 w-full h-full drop-shadow-[0_4px_12px_rgba(0,125,66,0.8)]">
        {children}
      </div>
    </section>
  );
}
