'use client';

import Hero from '@/components/Hero';
import Melmastiya from '@/components/Melmastiya';
import RoomCards from '@/components/RoomCards';
import ExperienceMap from '@/components/ExperienceMap';
import About from '@/components/About';
import Booking from '@/components/Booking';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Hero />
      <Melmastiya />
      <RoomCards />
      <ExperienceMap />
      <About />
      <Booking />
      <Footer />
    </main>
  );
}
