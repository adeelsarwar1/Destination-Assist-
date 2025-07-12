export const blogPosts = [
  {
    id: 1,
    title: 'How to Travel Southeast Asia for Under $1000 a Month',
    slug: 'southeast-asia-budget-guide',
    excerpt: 'Discover the secrets to exploring Thailand, Vietnam, and Cambodia on an incredibly tight budget while still having amazing experiences.',
    author: 'Sarah Chen',
    date: '2024-01-15',
    readTime: '8 min read',
    image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Budget Travel', 'Southeast Asia', 'Backpacking']
  },
  {
    id: 2,
    title: 'The Ultimate Guide to Free Walking Tours in Europe',
    slug: 'free-walking-tours-europe',
    excerpt: 'Explore European cities without spending a dime on tours. Here are the best free walking tours in 15 major European destinations.',
    author: 'Marco Rodriguez',
    date: '2024-01-12',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/2180123/pexels-photo-2180123.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Europe', 'Free Activities', 'Walking Tours']
  },
  {
    id: 3,
    title: 'Street Food Safety: Eating Like a Local Without Getting Sick',
    slug: 'street-food-safety-guide',
    excerpt: 'Learn the insider tips for enjoying delicious street food around the world while keeping your stomach happy and healthy.',
    author: 'Priya Patel',
    date: '2024-01-10',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Street Food', 'Health', 'Travel Tips']
  },
  {
    id: 4,
    title: 'Budget Accommodation Hacks: Beyond Hostels',
    slug: 'budget-accommodation-alternatives',
    excerpt: 'Discover creative ways to find cheap accommodation including house sitting, work exchanges, and local home stays.',
    author: 'Alex Thompson',
    date: '2024-01-08',
    readTime: '7 min read',
    image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Accommodation', 'Budget Travel', 'Alternative Lodging']
  },
  {
    id: 5,
    title: 'Transportation Tricks: Getting Around for Less',
    slug: 'cheap-transportation-tips',
    excerpt: 'Master the art of budget transportation with tips for finding cheap flights, bus passes, and local transport deals.',
    author: 'Emma Johnson',
    date: '2024-01-05',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/386025/pexels-photo-386025.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Transportation', 'Budget Travel', 'Travel Hacks']
  },
  {
    id: 6,
    title: 'Digital Nomad Destinations Under $500/Month',
    slug: 'digital-nomad-budget-destinations',
    excerpt: 'The best affordable destinations for digital nomads with great wifi, low cost of living, and vibrant communities.',
    author: 'David Kim',
    date: '2024-01-03',
    readTime: '9 min read',
    image: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Digital Nomad', 'Budget Living', 'Remote Work']
  }
];

export const getFeaturedPosts = () => {
  return blogPosts.slice(0, 3);
};

export const getPostBySlug = (slug) => {
  return blogPosts.find(post => post.slug === slug);
};