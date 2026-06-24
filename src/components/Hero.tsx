'use client';

import { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (spotlightRef.current) {
      spotlightRef.current.style.left = mousePos.x - 150 + 'px';
      spotlightRef.current.style.top = mousePos.y - 150 + 'px';
    }
  }, [mousePos]);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-mountain-dark to-mountain-charcoal"
    >
      {/* Background image placeholder */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200')] bg-cover bg-center opacity-40" />

      {/* Spotlight effect */}
      <div
        ref={spotlightRef}
        className="spotlight fixed w-80 h-80 rounded-full pointer-events-none z-20"
        style={{
          background: 'radial-gradient(circle, rgba(212, 97, 63, 0.4) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div className="animate-fade-in space-y-6">
          <h1 className="text-6xl md:text-7xl font-serif font-bold text-neutral-cream mb-4">
            Lab e Joo
          </h1>
          <p className="text-xl md:text-2xl text-hospitality-orange font-serif italic">
            Where hospitality meets the Hindu Kush
          </p>
          <p className="text-lg text-neutral-cream/80 max-w-2xl mx-auto">
            Move your cursor to discover warmth in the mountains
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-hospitality-gold"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
