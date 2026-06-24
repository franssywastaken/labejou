'use client';

import { useState } from 'react';
import { MessageCircle, Phone, Mail } from 'lucide-react';
import { HOTEL_INFO } from '@/lib/content';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi Lab e Joo! I'm interested in booking a stay. ${formData.name}, ${formData.email}, ${formData.phone}, Check-in: ${formData.checkIn}, Check-out: ${formData.checkOut}. ${formData.message}`;
    const whatsappUrl = `https://wa.me/${HOTEL_INFO.whatsapp.replace(/ /g, '').replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 md:py-32 px-6 bg-neutral-cream">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center text-mountain-dark mb-4">Reserve Your Stay</h2>
        <p className="text-center text-mountain-charcoal mb-12 text-lg">Only 8 rooms — book with intention</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-mountain-dark font-serif mb-2">Your Name</label>
              <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 border border-mountain-charcoal/20 rounded-lg focus:outline-none focus:border-hospitality-orange" placeholder="Name" required />
            </div>
            <div>
              <label className="block text-mountain-dark font-serif mb-2">Email</label>
              <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 border border-mountain-charcoal/20 rounded-lg focus:outline-none focus:border-hospitality-orange" placeholder="your@email.com" required />
            </div>
            <div>
              <label className="block text-mountain-dark font-serif mb-2">Phone</label>
              <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 border border-mountain-charcoal/20 rounded-lg focus:outline-none focus:border-hospitality-orange" placeholder="+92 XXX XXXX XXX" required />
            </div>
            <div>
              <label className="block text-mountain-dark font-serif mb-2">Check-in Date</label>
              <input type="date" value={formData.checkIn} onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })} className="w-full px-4 py-3 border border-mountain-charcoal/20 rounded-lg focus:outline-none focus:border-hospitality-orange" required />
            </div>
            <div>
              <label className="block text-mountain-dark font-serif mb-2">Check-out Date</label>
              <input type="date" value={formData.checkOut} onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })} className="w-full px-4 py-3 border border-mountain-charcoal/20 rounded-lg focus:outline-none focus:border-hospitality-orange" required />
            </div>
            <div>
              <label className="block text-mountain-dark font-serif mb-2">Message (optional)</label>
              <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 border border-mountain-charcoal/20 rounded-lg focus:outline-none focus:border-hospitality-orange resize-none" rows={4} placeholder="Tell us about your travel plans..." />
            </div>
            <button type="submit" className="w-full bg-hospitality-orange text-white py-3 rounded-lg font-serif text-lg hover:bg-hospitality-gold transition-colors">Send via WhatsApp</button>
          </form>

          <div className="space-y-6">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
              <p className="font-serif text-mountain-dark font-bold mb-2">Travel Notice</p>
              <p className="text-sm text-mountain-charcoal">Jabbori is remote but accessible. Only 3 hours from Islamabad with pristine environment and clean facilities. We help arrange transport and provide detailed travel guidance.</p>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-lg text-mountain-dark font-bold">Direct Contact</h3>

              <a href={`https://wa.me/${HOTEL_INFO.whatsapp.replace(/ /g, '').replace('+', '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-white rounded-lg border border-mountain-charcoal/10 hover:border-hospitality-orange hover:bg-neutral-light transition-all">
                <MessageCircle className="w-6 h-6 text-hospitality-orange" />
                <div>
                  <p className="font-serif font-bold text-mountain-dark">WhatsApp</p>
                  <p className="text-sm text-mountain-charcoal">{HOTEL_INFO.whatsapp}</p>
                </div>
              </a>

              <a href={`tel:${HOTEL_INFO.phone.replace(/ /g, '')}`} className="flex items-center gap-3 p-4 bg-white rounded-lg border border-mountain-charcoal/10 hover:border-hospitality-orange hover:bg-neutral-light transition-all">
                <Phone className="w-6 h-6 text-hospitality-orange" />
                <div>
                  <p className="font-serif font-bold text-mountain-dark">Phone</p>
                  <p className="text-sm text-mountain-charcoal">{HOTEL_INFO.phone}</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
