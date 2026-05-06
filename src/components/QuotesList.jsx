import React, { useState, useEffect } from 'react';
import QuoteCard from './QuoteCard';
import Pagination from './Pagination';
import LoadingIndicator from './LoadingIndicator';
import ErrorState from './ErrorState';

const QuotesList = () => {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limit] = useState(10); // Standard limit

  const fetchQuotes = async (page) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`https://api.freeapi.app/api/v1/public/quotes?page=${page}&limit=${limit}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.success && data.data) {
        setQuotes(data.data.data);
        setTotalPages(data.data.totalPages);
      } else {
        throw new Error(data.message || 'Failed to fetch quotes structure was unexpected');
      }
    } catch (err) {
      console.error("Error fetching quotes:", err);
      setError(err.message || 'An unexpected error occurred while fetching quotes.');
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch data when component mounts or page changes
  useEffect(() => {
    fetchQuotes(currentPage);
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const handleRetry = () => {
    fetchQuotes(currentPage);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8 relative">
      <div className="mb-12 text-center">
        <h2 className="text-sm font-bold tracking-widest text-indigo-600 uppercase mb-3">
          Daily Inspiration
        </h2>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
          Words of Wisdom
        </h1>
        <div className="w-24 h-1 bg-indigo-600 mx-auto mt-6 rounded-full opacity-80"></div>
      </div>

      {isLoading ? (
        <LoadingIndicator />
      ) : error ? (
        <ErrorState message={error} onRetry={handleRetry} />
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {quotes && quotes.length > 0 ? (
              quotes.map((quote) => (
                <QuoteCard key={quote.id} quote={quote} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 text-lg">No quotes found.</p>
              </div>
            )}
          </div>

          {totalPages > 1 && (
            <Pagination 
              currentPage={currentPage} 
              totalPages={totalPages} 
              onPageChange={handlePageChange} 
            />
          )}
        </>
      )}
    </div>
  );
};

export default QuotesList;
