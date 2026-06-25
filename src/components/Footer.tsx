import { HOTEL_INFO } from '@/lib/content';

const Footer = () => {
  return (
    <footer className="bg-mountain-dark text-neutral-cream py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="font-serif text-2xl mb-6">🏔️ {HOTEL_INFO.name}</h3>
            <p className="text-neutral-cream/80 mb-4">{HOTEL_INFO.location.town}, {HOTEL_INFO.location.region}, {HOTEL_INFO.location.country}</p>
            <div className="space-y-3 text-sm text-neutral-cream/70">
              <p>📍 Map Plus Code: {HOTEL_INFO.location.mapPlusCode}</p>
              <p>🏔️ Elevation: {HOTEL_INFO.location.elevation}</p>
              <p>🚗 {HOTEL_INFO.location.distanceFromIslamabad}</p>
              <p>🌍 Nearest city: {HOTEL_INFO.location.nearestCity}</p>
              <p>🏠 Operating since: {HOTEL_INFO.founded}</p>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Get in Touch</h4>
            <div className="space-y-3 text-sm text-neutral-cream/70">
              <p>📱 WhatsApp: <a href={`https://wa.me/${HOTEL_INFO.whatsapp.replace(/ /g, '').replace('+', '')}`} target="_blank" rel="noopener noreferrer" className="text-hospitality-gold hover:underline">{HOTEL_INFO.whatsapp}</a></p>
              <p>☎️ Phone: <a href={`tel:${HOTEL_INFO.phone.replace(/ /g, '')}`} className="text-hospitality-gold hover:underline">{HOTEL_INFO.phone}</a></p>
              <p>📧 Email: <a href={`mailto:${HOTEL_INFO.email}`} className="text-hospitality-gold hover:underline">{HOTEL_INFO.email}</a></p>
            </div>
          </div>
        </div>

        <div className="h-px bg-hospitality-orange/30 my-8" />

        <div className="text-center mb-8">
          <p className="font-serif italic text-lg text-hospitality-gold">"In the silence of mountains,<br />hospitality speaks loudest."</p>
        </div>

        <div className="text-center text-sm text-neutral-cream/50 space-y-2">
          <p>© {HOTEL_INFO.founded}-{new Date().getFullYear()} {HOTEL_INFO.fullName}. All rights reserved.</p>
          <p>Preserving Jabbori. Welcoming the world.</p>
          <p>🏠 Founded by the {HOTEL_INFO.founder}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;