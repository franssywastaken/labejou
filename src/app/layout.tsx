import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lab e Joo - Mountain Hospitality in Jabbori, Pakistan',
  description: 'Experience authentic Pashtun hospitality in the Hindu Kush mountains. 16 unique rooms, local experiences, and melmastiya.',
  keywords: ['hotel', 'jabbori', 'pakistan', 'mountain', 'hospitality', 'pashtun'],
  authors: [{ name: 'Lab e Joo Resorts' }],
  viewport: 'width=device-width, initial-scale=1.0',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://labejou.dpdns.org',
    title: 'Lab e Joo - Mountain Hospitality',
    description: 'Authentic mountain retreat in Jabbori, Pakistan',
    images: [{
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200',
      width: 1200,
      height: 630,
    }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Security Headers */}
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' https://unpkg.com; style-src 'self' 'unsafe-inline' https://unpkg.com; img-src 'self' https: data:; font-src 'self' https:; connect-src 'self' https://api.open-meteo.com https://unpkg.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self';" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className="bg-mountain-dark text-neutral-cream">
        {children}
      </body>
    </html>
  );
}