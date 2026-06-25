'use client';

import { HOTEL_INFO } from '@/lib/content';

const About = () => {
  return (
    <section className="py-20 md:py-32 px-6 bg-mountain-dark">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center text-neutral-cream mb-16">
          📖 Our Story
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-hospitality-orange" />

          {/* Timeline items */}
          <div className="space-y-12">
            {HOTEL_INFO.timeline.map((item, index) => (
              <div key={index} className={`flex gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Content */}
                <div className="flex-1">
                  <div className="bg-neutral-cream rounded-lg p-6 shadow-lg">
                    <h3 className="text-2xl font-serif text-hospitality-orange mb-2">{item.year}</h3>
                    <h4 className="text-xl font-serif text-mountain-dark mb-2">{item.title}</h4>
                    <p className="text-mountain-charcoal text-sm">{item.description}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="flex justify-center">
                  <div className="w-4 h-4 bg-hospitality-gold rounded-full border-4 border-mountain-dark relative z-10" />
                </div>

                {/* Image placeholder */}
                <div className="flex-1 hidden md:block">
                  <div className="w-full h-40 bg-gradient-to-br from-hospitality-orange/50 to-hospitality-gold/50 rounded-lg shadow-lg" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy callout */}
        <div className="mt-20 p-8 bg-gradient-to-r from-hospitality-orange to-hospitality-gold rounded-lg text-white text-center">
          <p className="text-2xl font-serif italic leading-relaxed mb-6">
            "Tourism should heal, not harm. Every guest leaves lighter. Every local grows richer—not just in money, but in stories."
          </p>
          <p className="text-lg font-serif">
            Founded by the {HOTEL_INFO.founder} in {HOTEL_INFO.founded}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;