'use client';

import { useState } from 'react';
import { HOTEL_INFO } from '@/lib/content';

const RoomCards = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-32 px-6 bg-mountain-dark">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center text-neutral-cream mb-4">
          Your Mountain Sanctuary
        </h2>
        <p className="text-center text-neutral-cream/70 mb-16 text-lg">
          🛏️ 16 intimate rooms, each with its own story
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOTEL_INFO.rooms.map((room) => (
            <div
              key={room.id}
              className="relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
              onMouseEnter={() => setHoveredId(room.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image placeholder - use real images when ready */}
              <div className="w-full h-48 bg-gradient-to-br from-hospitality-orange to-hospitality-gold" />

              {/* Room name and description */}
              <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/60 to-transparent">
                <h3 className="text-lg font-serif text-neutral-cream">{room.name}</h3>
                <p className="text-xs text-neutral-cream/80 italic mt-1">{room.description}</p>
              </div>

              {/* Quote overlay - appears on hover */}
              {hoveredId === room.id && (
                <div className="absolute inset-0 bg-gradient-to-t from-mountain-dark/95 via-black/50 to-transparent flex items-end p-4 animate-fade-in">
                  <div>
                    <p className="text-neutral-cream italic text-sm mb-2">{room.quote}</p>
                    <p className="text-hospitality-gold text-xs">— {room.author}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Scarcity message */}
        <div className="mt-16 p-8 bg-gradient-to-r from-hospitality-orange/20 to-hospitality-gold/20 border border-hospitality-orange/50 rounded-lg text-center">
          <p className="text-neutral-cream text-lg font-serif">
            🏔️ 16 rooms in the mountains of Jabbori.
            <br />
            <span className="text-hospitality-gold">Book not just a stay, but a transformation.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default RoomCards;