const Footer = () => {
  return (
    <footer className="bg-mountain-dark text-neutral-cream py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Main info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Location and details */}
          <div>
            <h3 className="font-serif text-2xl mb-6">Lab e Joo</h3>
            <p className="text-neutral-cream/80 mb-4">
              Jabbori, Khyber Pakhtunkhwa, Pakistan
            </p>
            <div className="space-y-3 text-sm text-neutral-cream/70">
              <p>🏔️ Elevation: 7,200 ft (2,195 m)</p>
              <p>📍 75.9 miles from Islamabad International</p>
              <p>🛣️ 6–8 hour drive (adventure included)</p>
              <p>🌍 Nearest city: Peshawar (90 km)</p>
            </div>
          </div>

          {/* Emergency contacts */}
          <div>
            <h4 className="font-serif text-lg mb-6">Emergency Contacts</h4>
            <div className="space-y-3 text-sm text-neutral-cream/70">
              <p>🚑 Local clinic: +92 XXX XXXX XXX</p>
              <p>🚗 Transport service: +92 XXX XXXX XXX</p>
              <p>🪶 Cultural liaison: +92 XXX XXXX XXX</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-hospitality-orange/30 my-8" />

        {/* Quote */}
        <div className="text-center mb-8">
          <p className="font-serif italic text-lg text-hospitality-gold">
            "In the silence of mountains,<br />hospitality speaks loudest."
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-neutral-cream/50 space-y-2">
          <p>© 2026 Lab e Joo. All rights reserved.</p>
          <p>Preserving Jabbori. Welcoming the world.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
