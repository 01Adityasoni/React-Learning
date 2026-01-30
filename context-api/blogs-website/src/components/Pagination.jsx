import React from 'react';
import { useContext } from 'react';
import { ContextApi } from '../context/ContextApi';
import './Pagination.css';

const Pagination = () => {
    const { page, totalPages , handlePageChange} = useContext(ContextApi);
    return (
        <div className="pagination-container">
            <div className="pagination-buttons">
                {page > 1 && (
                    <button
                        onClick={() => handlePageChange(page - 1)}
                        className="pagination-btn"
                    >
                        Previous
                    </button>
                )}
                {page < totalPages && (
                    <button
                        onClick={() => handlePageChange(page + 1)}
                        className="pagination-btn"
                    >
                        Next
                    </button>
                )}
            </div>
            <div className="pagination-info"> 
                page {page} of {totalPages}
            </div>
        </div>
    );
}
export default Pagination;
