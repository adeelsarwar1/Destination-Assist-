import { Link } from 'react-router-dom';

const DestinationCard = ({ destination }) => {
  return (
    <div className="card overflow-hidden group">
      <div className="relative overflow-hidden">
        <img
          src={destination.heroImage}
          alt={destination.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
          {destination.country}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {destination.name}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {destination.shortDescription}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-500">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"/>
            </svg>
            {destination.quickFacts.budget}
          </div>
          
          <Link
            to={`/travel/${destination.slug}`}
            className="text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors duration-200"
          >
            Explore Guide →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;