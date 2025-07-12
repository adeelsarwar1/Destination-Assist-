import { useParams } from 'react-router-dom';
import { getDestinationBySlug } from '../data/destinations';
import QuickFacts from '../components/QuickFacts';

const DestinationGuide = () => {
  const { city } = useParams();
  const destination = getDestinationBySlug(city);

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Destination Not Found</h1>
          <p className="text-gray-600">Sorry, we couldn't find the destination you're looking for.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-gray-900">
        <img
          src={destination.heroImage}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container-max section-padding">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              {destination.name}
            </h1>
            <p className="text-xl text-white/90">
              {destination.country}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Introduction */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {destination.introduction}
                </p>
              </div>

              {/* Accommodation */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="mr-3">🏨</span>
                  Cheap Places to Stay
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {destination.accommodation.map((place, index) => (
                    <div key={index} className="card p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {place.name}
                      </h3>
                      <div className="text-primary-600 font-bold mb-3">
                        {place.price}
                      </div>
                      <p className="text-gray-600">
                        {place.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Food */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="mr-3">🍜</span>
                  Food Under $5
                </h2>
                <div className="card p-6">
                  <ul className="space-y-3">
                    {destination.food.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-secondary-500 mr-3 mt-1">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Activities */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="mr-3">🎯</span>
                  Free & Cheap Activities
                </h2>
                <div className="card p-6">
                  <ul className="space-y-3">
                    {destination.activities.map((activity, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-accent-500 mr-3 mt-1">•</span>
                        <span className="text-gray-700">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Transport */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="mr-3">🚌</span>
                  Transportation Tips
                </h2>
                <div className="card p-6">
                  <p className="text-gray-700 leading-relaxed">
                    {destination.transport}
                  </p>
                </div>
              </div>

              {/* Map */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="mr-3">🗺️</span>
                  Location Map
                </h2>
                <div className="card p-6">
                  <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <p>Interactive Map of {destination.name}</p>
                      <p className="text-sm mt-2">
                        (Google Maps integration would go here)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <QuickFacts facts={destination.quickFacts} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DestinationGuide;