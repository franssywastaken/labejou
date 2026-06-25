'use client';

import { useEffect, useRef, useState } from 'react';

interface Weather {
  temp: number;
  description: string;
  icon: string;
  humidity: number;
  windSpeed: number;
}

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [weather, setWeather] = useState<Weather | null>(null);
  const [time, setTime] = useState<string>('');
  const [greeting, setGreeting] = useState<string>('');

  // Update time every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hour = now.getHours();
      
      // Set greeting based on time of day
      if (hour < 12) setGreeting('🌅 Good Morning');
      else if (hour < 17) setGreeting('☀️ Good Afternoon');
      else if (hour < 21) setGreeting('🌆 Good Evening');
      else setGreeting('🌙 Good Night');
      
      setTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Fetch weather data
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Using free API with Jabbori coordinates
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=34.6051&longitude=73.2584&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=auto`
        );
        const data = await response.json();
        const current = data.current;
        
        // Map weather codes to descriptions
        const weatherDescriptions: { [key: number]: string } = {
          0: 'Clear sky ☀️',
          1: 'Mostly clear 🌤️',
          2: 'Partly cloudy ⛅',
          3: 'Overcast ☁️',
          45: 'Foggy 🌫️',
          48: 'Foggy 🌫️',
          51: 'Light drizzle 🌧️',
          61: 'Rain 🌧️',
          71: 'Snow ❄️',
          80: 'Rain showers 🌧️',
          95: 'Thunderstorm ⛈️',
        };
        
        setWeather({
          temp: Math.round(current.temperature_2m),
          description: weatherDescriptions[current.weather_code] || 'Weather unknown',
          icon: '🌡️',
          humidity: current.relative_humidity_2m,
          windSpeed: Math.round(current.wind_speed_10m),
        });
      } catch (error) {
        console.log('Weather fetch failed, using defaults');
        setWeather({
          temp: 22,
          description: 'Clear skies ☀️',
          icon: '🌡️',
          humidity: 65,
          windSpeed: 8,
        });
      }
    };
    
    fetchWeather();
    const interval = setInterval(fetchWeather, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

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
        {/* Live Time & Weather Widget */}
        <div className="absolute top-10 right-10 bg-black/40 backdrop-blur-md rounded-lg p-4 text-neutral-cream border border-hospitality-orange/30">
          <p className="text-sm font-serif mb-2">{greeting}</p>
          <p className="text-xl font-bold font-mono">{time}</p>
          {weather && (
            <div className="mt-3 text-sm space-y-1">
              <p>{weather.temp}°C • {weather.description}</p>
              <p>💨 {weather.windSpeed} km/h • 💧 {weather.humidity}%</p>
            </div>
          )}
        </div>

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
          <p className="text-sm text-neutral-cream/60 mt-4">
            🏠 Welcoming guests since <span className="font-bold text-hospitality-gold">1972</span>
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