import { Link } from 'react-router-dom';
import DestinationCard from '../components/DestinationCard';
import BlogCard from '../components/BlogCard';
import { destinations } from '../data/destinations';
import { getFeaturedPosts } from '../data/blogPosts';

const Home = () => {
  const featuredDestinations = destinations;
  const featuredPosts = getFeaturedPosts();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gradient-to-r from-primary-600 to-secondary-600 flex items-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-max section-padding relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Travel the World on a Budget
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Discover amazing destinations with insider tips from locals. 
              Explore the world without breaking the bank.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/destinations" className="btn-primary text-center">
                Explore Destinations
              </Link>
              <Link to="/blog" className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors duration-200 text-center">
                Read Travel Tips
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Destinations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Handpicked budget-friendly destinations with complete guides 
              written by local experts and seasoned travelers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDestinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/destinations" className="btn-primary">
              View All Destinations
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-16">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Travel Tips
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get the latest budget travel tips, destination guides, and money-saving 
              hacks from our community of travelers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/blog" className="btn-secondary">
              Read More Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-primary-600">
        <div className="container-max section-padding">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Never Miss a Deal
            </h2>
            <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
              Subscribe to our newsletter and get exclusive budget travel tips, 
              destination guides, and special offers delivered to your inbox.
            </p>
            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;