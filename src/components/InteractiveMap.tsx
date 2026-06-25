'use client';

import { useEffect, useRef } from 'react';
import { HOTEL_INFO } from '@/lib/content';

const InteractiveMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapInitialized = useRef(false);

  useEffect(() => {
    if (mapInitialized.current || !mapContainer.current) return;

    // Load Leaflet CSS and JS dynamically
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    script.async = true;
    script.onload = () => {
      const L = (window as any).L;
      
      // Create map
      const map = L.map(mapContainer.current).setView(
        [HOTEL_INFO.location.latitude, HOTEL_INFO.location.longitude],
        12
      );

      // Add OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19,
      }).addTo(map);

      // Add Hotel marker
      L.marker([HOTEL_INFO.location.latitude, HOTEL_INFO.location.longitude], {
        title: 'Lab e Joo Hotel',
      })
        .bindPopup(
          `<div class="text-sm"><strong>🏨 Lab e Joo</strong><br/>Founded: ${HOTEL_INFO.founded}<br/>${HOTEL_INFO.location.mapPlusCode}</div>`
        )
        .addTo(map)
        .openPopup();

      // Add experience markers
      HOTEL_INFO.experiences.forEach((exp) => {
        L.marker([exp.lat, exp.lng], {
          title: exp.name,
        })
          .bindPopup(
            `<div class="text-sm"><strong>${exp.icon} ${exp.name}</strong><br/>${exp.duration}<br/>${exp.difficulty}</div>`
          )
          .addTo(map);
      });

      mapInitialized.current = true;
    };
    document.head.appendChild(script);

    return () => {
      if (mapInitialized.current && mapContainer.current) {
        mapContainer.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div
      ref={mapContainer}
      className="w-full h-full rounded-lg overflow-hidden"
      style={{ minHeight: '500px' }}
    />
  );
};

export default InteractiveMap;