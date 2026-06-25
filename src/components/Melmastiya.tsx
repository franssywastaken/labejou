'use client';

import { useEffect, useRef } from 'react';

const Melmastiya = () => {
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && textRef.current) {
          textRef.current.classList.add('animate-slide-up');
        }
      },
      { threshold: 0.3 }
    );

    if (textRef.current) observer.observe(textRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 md:py-32 px-6 bg-neutral-cream">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        {/* Decorative line */}
        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-hospitality-orange" />
          <h2 className="text-4xl md:text-5xl font-serif text-mountain-dark">
            Melmastiya
          </h2>
          <div className="h-px w-12 bg-hospitality-orange" />
        </div>

        {/* Main text */}
        <p
          ref={textRef}
          className="text-xl md:text-2xl font-serif text-mountain-charcoal leading-relaxed space-y-4 opacity-0"
        >
          <span className="block italic text-hospitality-orange mb-6">
            "The Art of Welcome"
          </span>
          <span className="block">
            In Pashtun culture, a guest is not merely welcomed—
          </span>
          <span className="block">
            they are honored as a gift from God.
          </span>
          <span className="block font-bold mt-8 mb-8">
            This is melmastiya: radical, unconditional hospitality.
          </span>
          <span className="block">
            At Lab e Joo, every arrival is a ceremony.
          </span>
          <span className="block">
            Every meal, a conversation.
          </span>
          <span className="block">
            Every departure, a friendship.
          </span>
        </p>
      </div>

      {/* Parallax mountains */}
      <div className="mt-20 relative h-40 overflow-hidden opacity-20">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 400"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            d="M0,300 Q150,100 300,250 T600,200 T900,300 L1200,300 L1200,400 L0,400 Z"
            fill="#1a1410"
          />
        </svg>
      </div>
    </section>
  );
};

export default Melmastiya;