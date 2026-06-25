'use client';

import { useEffect, useRef, useState } from 'react';

interface Weather {
  temp: number;
  weatherCode: number;
  description: string;
}

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [weather, setWeather] = useState<Weather | null>(null);
  const [time, setTime] = useState<string>('');
  const [hour, setHour] = useState(0);
  const [greeting, setGreeting] = useState<string>('');
  const [bgGradient, setBgGradient] = useState('from-mountain-dark to-mountain-charcoal');
  const [bgImage, setBgImage] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const currentHour = now.getHours();
      setHour(currentHour);
      
      if (currentHour < 12) setGreeting('🌅 Good Morning');
      else if (currentHour < 17) setGreeting('☀️ Good Afternoon');
      else if (currentHour < 21) setGreeting('🌅 Good Evening');
      else setGreeting('🌙 Good Night');
      
      setTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
      updateBackgroundByTime(currentHour);
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const updateBackgroundByTime = (hour: number) => {
    if (hour >= 5 && hour < 7) {
      setBgGradient('from-orange-900 via-orange-700 to-orange-500');
      setBgImage('opacity-60');
    } else if (hour >= 7 && hour < 12) {
      setBgGradient('from-blue-400 via-blue-500 to-blue-600');
      setBgImage('opacity-70');
    } else if (hour >= 12 && hour < 17) {
      setBgGradient('from-blue-300 via-blue-400 to-blue-500');
      setBgImage('opacity-80');
    } else if (hour >= 17 && hour < 19) {
      setBgGradient('from-red-900 via-orange-600 to-yellow-500');
      setBgImage('opacity-50');
    } else if (hour >= 19 && hour < 21) {
      setBgGradient('from-purple-900 via-indigo-800 to-blue-900');
      setBgImage('opacity-40');
    } else {
      setBgGradient('from-slate-950 via-slate-900 to-slate-800');
      setBgImage('opacity-30');
    }
  };

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=34.6051&longitude=73.2584&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=auto`
        );
        const data = await response.json();
        const current = data.current;
        
        setWeather({
          temp: Math.round(current.temperature_2m),
          weatherCode: current.weather_code,
          description: getWeatherDescription(current.weather_code),
        });
      } catch (error) {
        setWeather({
          temp: 22,
          weatherCode: 0,
          description: 'Clear skies',
        });
      }
    };
    
    fetchWeather();
    const interval = setInterval(fetchWeather, 600000);
    return () => clearInterval(interval);
  }, []);

  const getWeatherDescription = (code: number): string => {
    const descriptions: { [key: number]: string } = {
      0: 'Clear sky',
      1: 'Mostly clear',
      2: 'Partly cloudy',
      3: 'Overcast',
      45: 'Foggy',
      48: 'Foggy',
      51: 'Light drizzle',
      61: 'Rain',
      71: 'Snow',
      80: 'Rain showers',
      95: 'Thunderstorm',
    };
    return descriptions[code] || 'Weather unknown';
  };

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
      className={`relative w-full h-screen overflow-hidden bg-gradient-to-b ${bgGradient} transition-all duration-1000`}
    >
      <div className={`absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200')] bg-cover bg-center ${bgImage} transition-opacity duration-1000`} />

      {weather && (
        <div className="absolute inset-0 bg-black/10 transition-opacity duration-1000" />
      )}

      <div
        ref={spotlightRef}
        className="spotlight fixed w-80 h-80 rounded-full pointer-events-none z-20"
        style={{
          background: 'radial-gradient(circle, rgba(212, 97, 63, 0.4) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div className="animate-fade-in space-y-6">
          <h1 className="text-6xl md:text-7xl font-serif font-bold text-neutral-cream mb-4 drop-shadow-lg">
            Lab e Joo
          </h1>
          <p className="text-xl md:text-2xl text-hospitality-orange font-serif italic drop-shadow-md">
            Where hospitality meets the Hindu Kush
          </p>
          <div className="text-lg text-neutral-cream/90 max-w-2xl mx-auto drop-shadow-md">
            <p className="mb-2">{greeting} • {time}</p>
            {weather && (
              <p className="text-base">
                {weather.temp}°C • {weather.description}
              </p>
            )}
          </div>
          <p className="text-lg text-neutral-cream/80 max-w-2xl mx-auto mt-4">
            Move your cursor to discover warmth in the mountains
          </p>
          <p className="text-sm text-neutral-cream/60 mt-4">
            🏠 Welcoming guests since <span className="font-bold text-hospitality-gold">1972</span>
          </p>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-hospitality-gold drop-shadow-md"
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