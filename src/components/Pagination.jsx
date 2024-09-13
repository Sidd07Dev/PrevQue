import React from 'react';

const Pagination = ({ currentPage, onPageChange }) => {
  const handlePageChange = (newPage) => {
    if (newPage > 0) {
      onPageChange(newPage);
    }
  };

  return (
    <div className="flex justify-center mt-6">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 mx-1 bg-navy text-white rounded-md hover:bg-light-gray disabled:bg-gray-300"
      >
        Previous
      </button>
      <span className="px-4 py-2 text-white">{currentPage}</span>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        className="px-4 py-2 mx-1 bg-yellow text-white rounded-md hover:bg-yellow-dark"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
