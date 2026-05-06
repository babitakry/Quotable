import { useState, useCallback } from 'react';

export function useQuotes() {
  const [quotes, setQuotes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Pagination state
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [limit] = useState(10);

  const fetchQuotes = useCallback(async (pageNum = 1) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.freeapi.app/api/v1/public/quotes?page=${pageNum}&limit=${limit}`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch quotes');
      }

      const result = await response.json();

      if (result.success && result.data) {
        setQuotes(result.data.data);
        setPage(result.data.page);
        setTotalPages(result.data.totalPages);
        setTotalItems(result.data.totalItems);
      } else {
        throw new Error('Invalid data format received');
      }
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  }, [limit]);

  const handleNext = useCallback(() => {
    if (page < totalPages) {
      fetchQuotes(page + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [page, totalPages, fetchQuotes]);

  const handlePrev = useCallback(() => {
    if (page > 1) {
      fetchQuotes(page - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [page, fetchQuotes]);

  const goToPage = useCallback((pageNum) => {
    if (pageNum >= 1 && pageNum <= totalPages) {
      fetchQuotes(pageNum);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [totalPages, fetchQuotes]);

  return {
    quotes,
    error,
    loading,
    page,
    totalPages,
    totalItems,
    fetchQuotes,
    handleNext,
    handlePrev,
    goToPage
  };
}
