'use client';

import { useState } from 'react';
import { MapPin, Clock, Users } from 'lucide-react';

const experiences = [
  {
    id: 1,
    name: "Shepherd's Trail",
    icon: '🥾',
    duration: '4 hours',
    difficulty: 'Moderate',
    guide: 'Shahid, 48 — lifelong shepherd',
    description: 'Hike ancient mountain paths. Learn about shepherding, see grazing lands, stop at a traditional shepherd camp.',
    lng: 72.5,
    lat: 35.2,
  },
  {
    id: 2,
    name: 'Village Market Walk',
    icon: '🏘️',
    duration: '2 hours',
    difficulty: 'Easy',
    guide: 'Fatima, 52 — market vendor & storyteller',
    description: 'Explore the local bazaar. Learn traditional crafts, taste local honey, connect with villagers.',
    lng: 72.48,
    lat: 35.22,
  },
  {
    id: 3,
    name: 'Old Stone Fort',
    icon: '⛪',
    duration: '1.5 hours',
    difficulty: 'Easy',
    guide: 'Ahmad, 65 — historian & village elder',
    description: 'Visit the 300-year-old fort. Hear stories of ancient kingdoms, mountain trade routes, and local legends.',
    lng: 72.52,
    lat: 35.18,
  },
  {
    id: 4,
    name: 'Grandma\'s Kitchen',
    icon: '🍲',
    duration: '3 hours',
    difficulty: 'Easy',
    guide: 'Bibi Hawa, 68 — master cook',
    description: 'Cook traditional Pashtun meals. Learn recipes passed down for generations. Eat together, share stories.',
    lng: 72.49,
    lat: 35.21,
  },
  {
    id: 5,
    name: 'Golden Hour Peak',
    icon: '📸',
    duration: '2.5 hours',
    difficulty: 'Moderate',
    guide: 'Kareem, 35 — photographer & local',
    description: 'Sunset photography with a professional. Capture the mountains, learn composition, share chai as light fades.',
    lng: 72.51,
    lat: 35.19,
  },
];

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
                <p className="text-2xl font-serif mb-2">Jabbori Region Map</p>
                <p className="text-sm">Interactive map coming soon</p>
              </div>
            </div>

            {/* Experience pins */}
            <div className="absolute inset-0">
              {experiences.map((exp) => (
                <button
                  key={exp.id}
                  onClick={() => setSelectedExp(exp.id)}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 hover:scale-125 transition-transform"
                  style={{
                    left: `${((exp.lng - 72.45) / 0.1) * 100}%`,
                    top: `${((35.25 - exp.lat) / 0.1) * 100}%`,
                  }}
                  title={exp.name}
                >
                  <div className="w-8 h-8 bg-hospitality-orange rounded-full shadow-lg flex items-center justify-center text-white text-xs font-bold hover:bg-hospitality-gold">
                    {exp.id}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Experience list */}
          <div className="lg:col-span-1 space-y-4 max-h-96 overflow-y-auto">
            {experiences.map((exp) => (
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
                    <h3 className="font-serif font-bold">{exp.name}</h3>
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
            {experiences.map(
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
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-hospitality-orange" />
                        <span className="text-sm">Local guide</span>
                      </div>
                    </div>
                    <div className="bg-neutral-light p-4 rounded mb-6 italic">
                      <p className="font-serif">{exp.guide}</p>
                    </div>
                    <button className="w-full bg-hospitality-orange text-white py-3 rounded-lg font-serif hover:bg-hospitality-gold transition-colors">
                      Book This Experience
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
