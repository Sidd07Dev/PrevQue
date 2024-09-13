import React, { useState, useEffect } from 'react';
import { getUniversities } from '../api/universityApi';

const UniversityFilter = ({ onSelectUniversity }) => {
  const [universities, setUniversities] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchUniversities = async () => {
      const data = await getUniversities();
      setUniversities(data);
    };
    fetchUniversities();
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleSelect = (university) => {
    onSelectUniversity(university);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left w-full md:w-64">
      <div>
        <button
          type="button"
          className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
          onClick={toggleDropdown}
        >
          Select University
          <svg className="-mr-1 ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {universities.map((university) => (
              <button
                key={university.id}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => handleSelect(university.name)}
              >
                {university.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UniversityFilter;
