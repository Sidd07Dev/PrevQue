import React, { useState } from 'react';
import { getPapersByName } from '../api/paperApi'; // Replace with actual API call

const BrowseByPaperName = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [papers, setPapers] = useState([]);

  const handleSearch = async () => {
    try {
      if (searchTerm) {
        const data = await getPapersByName(searchTerm);
        setPapers(data);
      }
    } catch (error) {
      console.error('Failed to fetch papers:', error);
    }
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-navy mb-8 text-center">Search by Paper Name</h2>
        
        <div className="flex justify-center mb-8">
          <input
            type="text"
            className="w-1/2 p-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Enter paper name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="bg-yellow-500 text-navy p-3 rounded-r-lg font-semibold hover:bg-yellow-400 transition focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            Search
          </button>
        </div>

        {papers.length > 0 ? (
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {papers.map((paper) => (
              <li key={paper.id} className="bg-white p-6 rounded-lg shadow-lg text-center hover:bg-yellow-100 transition">
                <h3 className="text-xl font-semibold text-navy">{paper.title}</h3>
                <p className="text-gray-600">{paper.year}</p>
                <a href={paper.url} target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:underline">
                  View Paper
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600 text-center">No papers found.</p>
        )}
      </div>
    </section>
  );
};

export default BrowseByPaperName;
