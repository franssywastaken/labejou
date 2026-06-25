'use client';

import { useState } from 'react';
import { HOTEL_INFO } from '@/lib/content';

const RoomCards = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Modern', 'Standard', 'Suite', 'Simple Deluxe'];
  const operationalRooms = HOTEL_INFO.rooms.filter(room => room.status === 'Operational');
  const filteredRooms = selectedCategory === 'All' 
    ? operationalRooms 
    : operationalRooms.filter(room => room.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'Modern': return 'bg-blue-500';
      case 'Standard': return 'bg-green-500';
      case 'Suite': return 'bg-purple-500';
      case 'Simple Deluxe': return 'bg-amber-500';
      default: return 'bg-gray-500';
    }
  };

  const getPriceDisplay = (room: typeof HOTEL_INFO.rooms[0]) => {
    if (room.category === 'Suite') {
      return `${room.priceIndividual?.toLocaleString('en-PK')} PKR (sep) / ${room.price?.toLocaleString('en-PK')} PKR (tog)`;
    }
    return `${room.price?.toLocaleString('en-PK')} PKR`;
  };

  return (
    <section className="py-20 md:py-32 px-6 bg-mountain-dark">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center text-neutral-cream mb-4">
          Your Mountain Sanctuary
        </h2>
        <p className="text-center text-neutral-cream/70 mb-8 text-lg">
          🛏️ {operationalRooms.length} rooms available, each with its own story
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg font-serif transition-all ${
                selectedCategory === cat
                  ? 'bg-hospitality-orange text-white'
                  : 'bg-neutral-cream/20 text-neutral-cream hover:bg-neutral-cream/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Room Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredRooms.map((room) => (
            <div
              key={room.id}
              className="relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
              onMouseEnter={() => setHoveredId(room.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image placeholder */}
              <div className="w-full h-48 bg-gradient-to-br from-hospitality-orange to-hospitality-gold" />

              {/* Category Badge */}
              <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-white text-xs font-bold ${getCategoryColor(room.category)}`}>
                {room.category}
              </div>

              {/* Room info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                <h3 className="text-lg font-serif text-neutral-cream">{room.name}</h3>
                <p className="text-xs text-neutral-cream/80 italic mt-1 mb-2">{room.description}</p>
                <p className="text-sm font-bold text-hospitality-gold">{getPriceDisplay(room)}</p>
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

        {/* Pricing Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/50 rounded-lg">
            <h3 className="text-lg font-serif text-neutral-cream mb-3">
              💎 Modern Rooms
            </h3>
            <p className="text-neutral-cream/80 text-sm mb-2">6 rooms • Fully renovated with premium amenities</p>
            <p className="text-2xl font-bold text-hospitality-gold">₨10,000 per night</p>
          </div>

          <div className="p-6 bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/50 rounded-lg">
            <h3 className="text-lg font-serif text-neutral-cream mb-3">
              🏔️ Standard Rooms
            </h3>
            <p className="text-neutral-cream/80 text-sm mb-2">4 rooms • Comfortable mountain views</p>
            <p className="text-2xl font-bold text-hospitality-gold">₨4,000 per night</p>
            <p className="text-xs text-neutral-cream/60 mt-1">*Prices may increase during peak season</p>
          </div>

          <div className="p-6 bg-gradient-to-r from-purple-500/20 to-purple-600/20 border border-purple-500/50 rounded-lg">
            <h3 className="text-lg font-serif text-neutral-cream mb-3">
              👥 Suite Rooms
            </h3>
            <p className="text-neutral-cream/80 text-sm mb-2">2 rooms • Perfect for families or groups</p>
            <p className="text-2xl font-bold text-hospitality-gold">₨6,000 - ₨8,000</p>
            <p className="text-xs text-neutral-cream/60 mt-1">₨6k each (separate) / ₨8k (connected)</p>
          </div>

          <div className="p-6 bg-gradient-to-r from-amber-500/20 to-amber-600/20 border border-amber-500/50 rounded-lg">
            <h3 className="text-lg font-serif text-neutral-cream mb-3">
              ✨ Simple Deluxe Rooms
            </h3>
            <p className="text-neutral-cream/80 text-sm mb-2">2 rooms • Elegant & cozy</p>
            <p className="text-2xl font-bold text-hospitality-gold">₨6,000 per night</p>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-12 p-8 bg-gradient-to-r from-hospitality-orange/20 to-hospitality-gold/20 border border-hospitality-orange/50 rounded-lg text-center">
          <p className="text-neutral-cream text-lg font-serif">
            🏔️ 14 rooms operational.
            <br />
            <span className="text-hospitality-gold">Book your authentic mountain experience today.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default RoomCards;