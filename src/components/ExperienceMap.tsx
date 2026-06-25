'use client';

import { useState } from 'react';
import { Clock, Users } from 'lucide-react';
import { HOTEL_INFO } from '@/lib/content';
import InteractiveMap from './InteractiveMap';

const ExperienceMap = () => {
  const [selectedExp, setSelectedExp] = useState<number | null>(null);
  const [showMap, setShowMap] = useState(false);

  return (
    <section className="py-20 md:py-32 px-6 bg-neutral-cream">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center text-mountain-dark mb-4">
          🗺️ Local Experiences
        </h2>
        <p className="text-center text-mountain-charcoal mb-8">
          Explore Jabbori, Mundi, Bandagocha, and mountain trails
        </p>

        {/* Map Toggle Button */}
        <div className="text-center mb-8">
          <button
            onClick={() => setShowMap(!showMap)}
            className="bg-hospitality-orange text-white px-6 py-3 rounded-lg font-serif hover:bg-hospitality-gold transition-colors"
          >
            {showMap ? '📋 Show List' : '🗺️ View Interactive Map'}
          </button>
        </div>

        {/* Interactive Map */}
        {showMap && (
          <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
            <InteractiveMap />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Experience list */}
          <div className="lg:col-span-1 space-y-4 max-h-96 overflow-y-auto">
            {HOTEL_INFO.experiences.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setSelectedExp(exp.id)}
                className={`w-full p-4 rounded-lg text-left transition-all ${
                  selectedExp === exp.id
                    ? 'bg-hospitality-orange text-white'
                    : 'bg-white text-mountain-charcoal hover:bg-neutral-light'
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{exp.icon}</span>
                  <div className="flex-1">
                    <h3 className="font-serif font-bold text-sm">{exp.name}</h3>
                    <p className="text-xs opacity-75">{exp.guide}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Experience details */}
          <div className="lg:col-span-2">
            {selectedExp ? (
              HOTEL_INFO.experiences.map(
                (exp) =>
                  exp.id === selectedExp && (
                    <div key={exp.id} className="p-6 bg-white rounded-lg border-l-4 border-hospitality-orange animate-slide-up">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-2xl font-serif text-mountain-dark">{exp.name}</h3>
                        <span className="text-4xl">{exp.icon}</span>
                      </div>
                      <p className="text-mountain-charcoal mb-4">{exp.description}</p>
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="flex items-center gap-2">
                          <Clock className="w-5 h-5 text-hospitality-orange" />
                          <span className="text-sm">{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-5 h-5 text-hospitality-orange" />
                          <span className="text-sm">{exp.difficulty}</span>
                        </div>
                      </div>
                      <div className="bg-neutral-light p-4 rounded mb-6 italic">
                        <p className="font-serif text-sm">👤 {exp.guide}</p>
                      </div>
                      <button className="w-full bg-hospitality-orange text-white py-3 rounded-lg font-serif hover:bg-hospitality-gold transition-colors">
                        📅 Book This Experience
                      </button>
                    </div>
                  )
              )
            ) : (
              <div className="p-8 bg-white rounded-lg border-l-4 border-hospitality-orange text-center text-mountain-charcoal">
                <p className="text-lg font-serif">👆 Select an experience to learn more</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceMap;