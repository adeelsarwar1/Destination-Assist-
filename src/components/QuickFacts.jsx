const QuickFacts = ({ facts }) => {
  const factItems = [
    { label: 'Currency', value: facts.currency, icon: '💰' },
    { label: 'Language', value: facts.language, icon: '🗣️' },
    { label: 'Best Time', value: facts.bestTime, icon: '📅' },
    { label: 'Daily Budget', value: facts.budget, icon: '💵' },
    { label: 'Safety', value: facts.safety, icon: '🛡️' },
    { label: 'Visa', value: facts.visaRequired, icon: '📄' }
  ];

  return (
    <div className="card p-6 sticky top-24">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <span className="mr-2">📊</span>
        Quick Facts
      </h3>
      
      <div className="space-y-4">
        {factItems.map((item, index) => (
          <div key={index} className="flex items-start">
            <span className="text-lg mr-3">{item.icon}</span>
            <div>
              <dt className="text-sm font-medium text-gray-500">{item.label}</dt>
              <dd className="text-sm text-gray-900 mt-1">{item.value}</dd>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickFacts;