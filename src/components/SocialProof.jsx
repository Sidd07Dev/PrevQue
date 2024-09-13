import React from 'react';

const stats = [
  { label: 'Question Papers Available', value: '10,000+', icon: '📄' },
  { label: 'Universities Supported', value: '50+', icon: '🏫' },
  { label: 'Downloads', value: '100,000+', icon: '⬇️' },
];

const SocialProof = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-7xl text-center">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-navy mb-8">
          Trusted by Students and Institutions
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-lg">
              {/* Icon */}
              <div className="text-4xl mb-4">{stat.icon}</div>

              {/* Stat Value */}
              <h3 className="text-3xl font-bold text-yellow-500 mb-2">{stat.value}</h3>

              {/* Stat Label */}
              <p className="text-navy font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
