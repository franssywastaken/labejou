'use client';

import { useState } from 'react';

const rooms = [
  {
    id: 1,
    name: "The Raven's Rest",
    image: 'https://images.unsplash.com/photo-1631049307038-da0ec89d4d0a?w=500',
    quote: '"I felt the world slow down here." — Sarah, USA',
  },
  {
    id: 2,
    name: "Shepherd's Refuge",
    image: 'https://images.unsplash.com/photo-1631049307038-da0ec89d4d0a?w=500',
    quote: '"Waking to grazing lands felt like stepping back in time." — Rashid, UAE',
  },
  {
    id: 3,
    name: 'Woodsmoke & Quiet',
    image: 'https://images.unsplash.com/photo-1631049307038-da0ec89d4d0a?w=500',
    quote: '"The fireplace, the silence, the mountains. Everything I needed." — Emma, UK',
  },
  {
    id: 4,
    name: 'The Starwell',
    image: 'https://images.unsplash.com/photo-1631049307038-da0ec89d4d0a?w=500',
    quote: '"I\'ve never seen stars like this. Ever." — Marcus, Canada',
  },
  {
    id: 5,
    name: 'Summit View',
    image: 'https://images.unsplash.com/photo-1631049307038-da0ec89d4d0a?w=500',
    quote: '"Standing on the balcony felt like standing on top of the world." — Leila, France',
  },
  {
    id: 6,
    name: 'Golden Dawn',
    image: 'https://images.unsplash.com/photo-1631049307038-da0ec89d4d0a?w=500',
    quote: '"Each sunrise was better than the last." — Amir, Pakistan',
  },
];

const RoomCards = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-32 px-6 bg-mountain-dark">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center text-neutral-cream mb-16">
          Your Mountain Sanctuary
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
              onMouseEnter={() => setHoveredId(room.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-80 object-cover"
              />

              {/* Room name */}
              <div className="absolute top-0 left-0 right-0 p-6 bg-gradient-to-b from-black/60 to-transparent">
                <h3 className="text-2xl font-serif text-neutral-cream">{room.name}</h3>
              </div>

              {/* Quote overlay - appears on hover */}
              {hoveredId === room.id && (
                <div className="absolute inset-0 bg-gradient-to-t from-mountain-dark/90 to-transparent flex items-end p-6 animate-fade-in">
                  <p className="text-neutral-cream italic text-lg">{room.quote}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomCards;
