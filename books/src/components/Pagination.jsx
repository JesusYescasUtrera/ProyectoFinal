import React from 'react';

const Pagination = ({ currentPage, pages, handlePageChange, handleNextPages, pagesToShow, totalPageCount }) => (
    <div className="pagination">
        {pages.map(pageNumber => (
            <button
                key={pageNumber}
                className={`btn ${currentPage === pageNumber ? 'active' : ''}`}
                onClick={() => handlePageChange(pageNumber)}
            >
                {pageNumber}
            </button>
        ))}
        {pagesToShow < totalPageCount && (
            <button
                className="btn"
                onClick={handleNextPages}
            >
                &raquo; {/* Añadir flecha para indicar más páginas */}
            </button>
        )}
    </div>
);

export default Pagination;
