export const destinations = [
  {
    id: 1,
    name: 'Bangkok',
    country: 'Thailand',
    slug: 'bangkok',
    heroImage: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=1600',
    shortDescription: 'Experience the vibrant street food culture and stunning temples of Bangkok on a shoestring budget.',
    introduction: 'Bangkok, the bustling capital of Thailand, offers an incredible mix of ancient temples, modern skyscrapers, and some of the world\'s best street food. With careful planning, you can explore this amazing city for less than $30 per day.',
    quickFacts: {
      currency: 'Thai Baht (THB)',
      language: 'Thai',
      bestTime: 'November to February',
      budget: '$25-30 per day',
      safety: 'Very Safe',
      visaRequired: 'Tourist visa on arrival'
    },
    accommodation: [
      {
        name: 'Lub d Bangkok Silom',
        price: '$15-20/night',
        description: 'Modern hostel with excellent facilities and great location'
      },
      {
        name: 'The Yard Hostel',
        price: '$12-18/night',
        description: 'Clean, friendly hostel near BTS station'
      },
      {
        name: 'Mad Monkey Hostel',
        price: '$10-15/night',
        description: 'Social atmosphere, perfect for meeting other travelers'
      }
    ],
    food: [
      'Pad Thai from street vendors ($1-2)',
      'Tom Yum soup ($1.50)',
      'Mango sticky rice ($1)',
      'Green curry with rice ($2-3)',
      'Fresh fruit smoothies ($1)',
      'Som tam (papaya salad) ($1.50)'
    ],
    activities: [
      'Visit Wat Pho Temple (entrance fee $3)',
      'Explore Chatuchak Weekend Market (free entry)',
      'Take a boat ride on Chao Phraya River ($0.50)',
      'Walk through Chinatown (free)',
      'Visit Wat Arun at sunset ($1.50 entrance)',
      'Browse floating markets ($2 boat ride)'
    ],
    transport: 'Use the BTS Skytrain and MRT subway system ($1-2 per ride). Tuk-tuks are fun but negotiate prices first. Grab app works well for affordable rides. Bangkok has excellent public transportation - get a Rabbit Card for convenient travel.'
  },
  {
    id: 2,
    name: 'Lisbon',
    country: 'Portugal',
    slug: 'lisbon',
    heroImage: 'https://images.pexels.com/photos/2180123/pexels-photo-2180123.jpeg?auto=compress&cs=tinysrgb&w=1600',
    shortDescription: 'Discover the charming hills, colorful tiles, and affordable wine culture of Portugal\'s capital.',
    introduction: 'Lisbon combines old-world charm with modern energy. This coastal capital offers stunning views, delicious food, and rich history at prices that won\'t break the bank. Explore this beautiful city for around $40-50 per day.',
    quickFacts: {
      currency: 'Euro (EUR)',
      language: 'Portuguese',
      bestTime: 'April to June, September to October',
      budget: '$40-50 per day',
      safety: 'Very Safe',
      visaRequired: 'No visa for EU citizens'
    },
    accommodation: [
      {
        name: 'Home Lisbon Hostel',
        price: '$20-25/night',
        description: 'Cozy hostel in historic Chiado district'
      },
      {
        name: 'Travellers House',
        price: '$18-23/night',
        description: 'Traditional Portuguese building with modern amenities'
      },
      {
        name: 'Yes! Lisbon Hostel',
        price: '$22-28/night',
        description: 'Stylish hostel with rooftop terrace'
      }
    ],
    food: [
      'Pastéis de nata (custard tarts) ($1.50)',
      'Bifana (pork sandwich) ($2-3)',
      'Sardines at local tasca ($4-6)',
      'Francesinha sandwich ($5-7)',
      'Caldo verde soup ($3-4)',
      'Local wine by the glass ($2-3)'
    ],
    activities: [
      'Ride iconic Tram 28 ($3 day pass)',
      'Explore Alfama neighborhood (free)',
      'Visit Jerónimos Monastery ($10 entrance)',
      'Watch sunset at Miradouro da Senhora do Monte (free)',
      'Browse LX Factory markets (free entry)',
      'Walk through Sintra day trip ($15 train + entrance fees)'
    ],
    transport: 'Get a Lisboa Card for unlimited public transport and museum entries. Trams and metros cost around $1.50 per ride. Walking is the best way to explore the historic neighborhoods. Consider day trips to Sintra and Cascais by train.'
  },
  {
    id: 3,
    name: 'Prague',
    country: 'Czech Republic',
    slug: 'prague',
    heroImage: 'https://images.unsplash.com/photo-1607333956338-43c89d2d5862?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBhcmFnZXxlbnwwfHwwfHx8MA%3D%3D',
    shortDescription: 'Medieval architecture, world-famous beer, and fairytale castles await in this Central European gem.',
    introduction: 'Prague is a living fairy tale with its medieval Old Town, stunning castle, and legendary beer culture. This Central European capital offers incredible value for money, with delicious meals and quality beer at unbeatable prices.',
    quickFacts: {
      currency: 'Czech Koruna (CZK)',
      language: 'Czech',
      bestTime: 'April to June, September to November',
      budget: '$35-45 per day',
      safety: 'Very Safe',
      visaRequired: 'No visa for EU citizens'
    },
    accommodation: [
      {
        name: 'Hostel One Home',
        price: '$18-22/night',
        description: 'Social hostel with great community vibe'
      },
      {
        name: 'Czech Inn',
        price: '$20-25/night',
        description: 'Modern hostel with excellent facilities'
      },
      {
        name: 'Madhouse Hostel',
        price: '$15-20/night',
        description: 'Party hostel in the heart of Prague'
      }
    ],
    food: [
      'Traditional goulash ($4-6)',
      'Czech beer (world\'s best!) ($1-2)',
      'Svíčková (beef sirloin) ($5-7)',
      'Trdelník (sweet pastry) ($2-3)',
      'Bramboráky (potato pancakes) ($3-4)',
      'Koleno (roasted pork knuckle) ($6-8)'
    ],
    activities: [
      'Walk across Charles Bridge (free)',
      'Explore Prague Castle ($12 entrance)',
      'Wander through Old Town Square (free)',
      'Visit Astronomical Clock (free viewing)',
      'Climb Petřín Hill for panoramic views (free)',
      'Tour local breweries ($5-10 per tour)'
    ],
    transport: 'Prague has excellent public transport with trams, buses, and metro. Day passes cost around $5. The city center is very walkable. Consider getting a Prague Castle ticket combination for multiple attractions.'
  }
];

export const getDestinationBySlug = (slug) => {
  return destinations.find(dest => dest.slug === slug);
};
