import BlogCard from '../components/BlogCard';
import { blogPosts } from '../data/blogPosts';

const Blog = () => {
  return (
    <div className="py-12">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Travel Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest budget travel tips, destination guides, and money-saving hacks 
            from our community of experienced travelers and local experts.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="card overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span>{blogPosts[0].author}</span>
                  <span className="mx-2">•</span>
                  <span>{blogPosts[0].date}</span>
                  <span className="mx-2">•</span>
                  <span>{blogPosts[0].readTime}</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {blogPosts[0].title}
                </h2>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {blogPosts[0].tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="btn-primary self-start">
                  Read Full Article
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="btn-secondary">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;