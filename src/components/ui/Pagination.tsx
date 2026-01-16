'use client';

import { useState } from 'react';
import Icon from '../Icon';

interface PaginationProps {
  totalPages: number;
  currentPage?: number;
  onPageChange?: (page: number) => void;
}

export default function Pagination({ totalPages, currentPage = 1, onPageChange }: PaginationProps) {
  const [active, setActive] = useState(currentPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setActive(page);
      onPageChange?.(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    const showEllipsis = totalPages > 5;

    if (showEllipsis) {
      // Always show first 3 pages
      for (let i = 1; i <= Math.min(3, totalPages); i++) {
        pages.push(
          <button
            key={i}
            className={`pagination-btn ${active === i ? 'active' : ''}`}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </button>
        );
      }

      // Show ellipsis
      if (totalPages > 4) {
        pages.push(<span key="ellipsis" className="text-[var(--text-secondary)] px-2">...</span>);
      }

      // Show last page
      if (totalPages > 3) {
        pages.push(
          <button
            key={totalPages}
            className={`pagination-btn ${active === totalPages ? 'active' : ''}`}
            onClick={() => handlePageChange(totalPages)}
          >
            {totalPages}
          </button>
        );
      }
    } else {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <button
            key={i}
            className={`pagination-btn ${active === i ? 'active' : ''}`}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </button>
        );
      }
    }

    return pages;
  };

  return (
    <div className="pagination">
      <button
        className="pagination-arrow"
        onClick={() => handlePageChange(active - 1)}
        disabled={active === 1}
      >
        <Icon name="left" size={16} />
      </button>
      
      {renderPageNumbers()}
      
      <button
        className="pagination-arrow"
        onClick={() => handlePageChange(active + 1)}
        disabled={active === totalPages}
      >
        <Icon name="right" size={16} />
      </button>
    </div>
  );
}
