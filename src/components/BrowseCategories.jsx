import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Computer Science', description: 'Find past papers for computer science courses.', icon: '💻' },
  { name: 'Engineering', description: 'Access engineering papers across all majors.', icon: '🔧' },
  { name: 'Medicine', description: 'Explore previous question papers for medical courses.', icon: '⚕️' },
  { name: 'Business Administration', description: 'Get business management and administration papers.', icon: '📊' },
  { name: 'Arts & Humanities', description: 'Discover question papers for arts and humanities.', icon: '🎨' },
];

const BrowseCategories = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto max-w-7xl text-center">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-navy mb-8">
          Browse by Categories
        </h2>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link
              to={`/categories/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
              key={index}
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:bg-yellow-100 transition"
            >
              {/* Icon */}
              <div className="text-5xl mb-4">{category.icon}</div>
              
              {/* Category Name */}
              <h3 className="text-xl font-semibold text-navy mb-2">{category.name}</h3>
              
              {/* Description */}
              <p className="text-gray-600">{category.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseCategories;
