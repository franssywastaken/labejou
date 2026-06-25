'use client';

import { useState } from 'react';
import { Clock, Users } from 'lucide-react';
import { HOTEL_INFO } from '@/lib/content';

const ExperienceMap = () => {
  const [selectedExp, setSelectedExp] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-32 px-6 bg-neutral-cream">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center text-mountain-dark mb-16">
          Local Experiences
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map placeholder */}
          <div className="lg:col-span-2 relative bg-gray-200 rounded-lg overflow-hidden h-96 md:h-full min-h-96">
            <div className="w-full h-full flex items-center justify-center text-center">
              <div className="text-mountain-charcoal">
                <p className="text-2xl font-serif mb-2">🗺️ Jabbori Region Map</p>
                <p className="text-sm">{HOTEL_INFO.location.mapPlusCode}</p>
                <p className="text-xs mt-2 text-gray-600">{HOTEL_INFO.location.latitude}° N, {HOTEL_INFO.location.longitude}° E</p>
              </div>
            </div>
          </div>

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
        </div>

        {/* Expanded experience detail */}
        {selectedExp && (
          <div className="mt-8 p-6 bg-white rounded-lg border-l-4 border-hospitality-orange animate-slide-up">
            {HOTEL_INFO.experiences.map(
              (exp) =>
                exp.id === selectedExp && (
                  <div key={exp.id}>
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
                      <p className="font-serif text-sm">{exp.guide}</p>
                    </div>
                    <button className="w-full bg-hospitality-orange text-white py-3 rounded-lg font-serif hover:bg-hospitality-gold transition-colors">
                      📅 Book This Experience
                    </button>
                  </div>
                )
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ExperienceMap;