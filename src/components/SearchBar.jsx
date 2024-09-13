import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm) {
      navigate(`/questions?query=${searchTerm}`);
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <input
        type="text"
        className="border border-gray-300 rounded-md px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        placeholder="Search by University, Year, Subject..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        className="bg-yellow-500 hover:bg-yellow-400 text-navy px-4 py-2 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-yellow-500"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
