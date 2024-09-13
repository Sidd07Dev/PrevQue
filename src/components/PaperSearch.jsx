import React, { useState } from 'react';

const PaperSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim());
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <input
        type="text"
        className="border border-gray-300 rounded-md px-4 py-2 w-64"
        placeholder="Search by Paper Name..."
        value={searchTerm}
        onChange={handleChange}
      />
      <button
        className="bg-yellow-500 hover:bg-blue-400 text-white px-4 py-2 rounded-md font-semibold"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default PaperSearch;
