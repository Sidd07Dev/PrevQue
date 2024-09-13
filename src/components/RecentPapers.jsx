import React from 'react';

const recentPapers = [
  {
    id: 1,
    title: 'Computer Science - 2023',
    university: 'ABC University',
    description: 'Final exam paper for Computer Science.',
    year: '2023',
    link: 'https://example.com/cs2023'
  },
  {
    id: 2,
    title: 'Mechanical Engineering - 2022',
    university: 'XYZ University',
    description: 'Midterm paper for Mechanical Engineering.',
    year: '2022',
    link: 'https://example.com/me2022'
  },
  {
    id: 3,
    title: 'Business Administration - 2021',
    university: 'DEF University',
    description: 'Year-end paper for Business Administration.',
    year: '2021',
    link: 'https://example.com/ba2021'
  },
  {
    id: 4,
    title: 'Medical Science - 2023',
    university: 'GHI Institute',
    description: 'Final year question paper for Medical Science.',
    year: '2023',
    link: 'https://example.com/ms2023'
  },
];

const RecentPapers = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto max-w-7xl text-center">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-navy mb-8">
          Recent Question Papers
        </h2>

        {/* Papers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {recentPapers.map((paper) => (
            <div
              key={paper.id}
              className="flex flex-col bg-white rounded-lg shadow-lg p-6 hover:bg-yellow-100 transition"
            >
              {/* Paper Title */}
              <h3 className="text-xl font-semibold text-navy mb-2">{paper.title}</h3>

              {/* University Name */}
              <p className="text-gray-600 mb-4">{paper.university}</p>

              {/* Description */}
              <p className="text-gray-600 mb-4">{paper.description}</p>

              {/* Year */}
              <p className="text-sm text-gray-500">Year: {paper.year}</p>

              {/* View Button */}
              <a
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto bg-yellow-500 text-navy px-4 py-2 rounded-md font-semibold hover:bg-yellow-400 transition"
              >
                View Paper
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentPapers;
