import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center justify-center my-4">
      <button
        onClick={handlePrevious}
        className="px-4 py-2 mx-1 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
        disabled={currentPage === 1}
      >
        Prev
      </button>
      <span className="px-4 py-2 mx-1">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={handleNext}
        className="px-4 py-2 mx-1 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;