import React from 'react';
import { AcademicCapIcon, SearchIcon, DownloadIcon } from '@heroicons/react/outline'; // Using Heroicons for icons

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-7xl text-center">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-navy mb-8">
          How It Works
        </h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-16 h-16 bg-yellow-500 text-navy rounded-full mb-4">
              <AcademicCapIcon className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-navy mb-2">Select University</h3>
            <p className="text-gray-600">
              Choose your university from our extensive list of supported universities and colleges.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-16 h-16 bg-yellow-500 text-navy rounded-full mb-4">
              <SearchIcon className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-navy mb-2">Browse Question Papers</h3>
            <p className="text-gray-600">
              Search for previous years' question papers by course, subject, and year.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-16 h-16 bg-yellow-500 text-navy rounded-full mb-4">
              <DownloadIcon className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-navy mb-2">Download and Prepare</h3>
            <p className="text-gray-600">
              View or download question papers to help you prepare for your exams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
