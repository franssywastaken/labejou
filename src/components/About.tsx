'use client';

const timeline = [
  {
    year: '2012',
    title: 'Lab e Joo Founded',
    description: '"I wanted to share my home without changing it"',
    image: 'https://images.unsplash.com/photo-1519167758993-b61b95b5a10c?w=400',
  },
  {
    year: '2015',
    title: 'First International Guests',
    description: '"We learned what hospitality truly means"',
    image: 'https://images.unsplash.com/photo-1529148482759-b649effa3142?w=400',
  },
  {
    year: '2020',
    title: 'Community Program Launched',
    description: '"12 local families now work here"',
    image: 'https://images.unsplash.com/photo-1529148482759-b649effa3142?w=400',
  },
  {
    year: '2026',
    title: 'Still Only 8 Rooms',
    description: '"We chose depth over scale"',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
  },
];

const About = () => {
  return (
    <section className="py-20 md:py-32 px-6 bg-mountain-dark">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center text-neutral-cream mb-16">
          Our Story
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-hospitality-orange" />

          {/* Timeline items */}
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className={`flex gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Content */}
                <div className="flex-1">
                  <div className="bg-neutral-cream rounded-lg p-6 shadow-lg">
                    <h3 className="text-2xl font-serif text-hospitality-orange mb-2">{item.year}</h3>
                    <h4 className="text-xl font-serif text-mountain-dark mb-2">{item.title}</h4>
                    <p className="text-mountain-charcoal italic">{item.description}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="flex justify-center">
                  <div className="w-4 h-4 bg-hospitality-gold rounded-full border-4 border-mountain-dark relative z-10" />
                </div>

                {/* Image */}
                <div className="flex-1 hidden md:block">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-40 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy callout */}
        <div className="mt-20 p-8 bg-gradient-to-r from-hospitality-orange to-hospitality-gold rounded-lg text-white text-center">
          <p className="text-2xl font-serif italic leading-relaxed">
            "Tourism should heal, not harm. Every guest leaves lighter. Every local grows richer—not just in money, but in stories."
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
