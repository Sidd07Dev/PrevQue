import React from 'react';
import { Link } from 'react-router-dom';

function  HeroSection () {
  return (
    <section className="relative bg-navy text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl text-center">
        {/* Hero Title */}
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Access Previous Years' Question Papers
        </h1>

        {/* Hero Subtitle */}
        <p className="mt-4 text-lg text-gray-300">
          Find exam papers by university, course, and year. Prepare better for your exams with our free resource library.
        </p>

        {/* Search Bar */}
        <div className="mt-8 flex justify-center">
          <input
            type="text"
            className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Search by University, Year, Subject..."
          />
          <button className="bg-yellow-500 text-navy px-4 py-2 rounded-r-md font-semibold hover:bg-yellow-400 transition focus:outline-none focus:ring-2 focus:ring-yellow-500">
            Search
          </button>
        </div>

        {/* Call to Action Buttons */}
        <div className="mt-8 flex justify-center space-x-4">
          <Link to="/questions">
            <button className="bg-yellow-500 text-navy px-6 py-2 rounded-md font-semibold hover:bg-yellow-400 transition focus:outline-none focus:ring-2 focus:ring-yellow-500">
              Browse by University
            </button>
          </Link>
          <Link to="/questions">
            <button className="bg-yellow-500 text-navy px-6 py-2 rounded-md font-semibold hover:bg-yellow-400 transition focus:outline-none focus:ring-2 focus:ring-yellow-500">
              Browse by Course
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
