import React from 'react';

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    onPageChange(pageNumber);
  };

  return (
    <div className="pagination">
      {[...Array(totalPages).keys()].map((number) => (
        <button
          key={number}
          onClick={() => handlePageChange(number + 1)}
          className={currentPage === number + 1 ? 'active' : ''}
        >
          {number + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
