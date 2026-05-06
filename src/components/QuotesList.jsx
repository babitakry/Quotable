import { useEffect } from 'react';
import QuoteCard from './QuoteCard';
import Pagination from './Pagination';
import LoadingIndicator from './LoadingIndicator';
import ErrorState from './ErrorState';
import { useQuotes } from '../hooks/useQuotes';

const QuotesList = () => {
  const {
    quotes,
    error,
    loading,
    page,
    totalPages,
    fetchQuotes,
    goToPage
  } = useQuotes();

  useEffect(() => {
    fetchQuotes();
  }, [fetchQuotes]);

  const handleRetry = () => {
    fetchQuotes(page);
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

      {loading ? (
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
              currentPage={page} 
              totalPages={totalPages} 
              onPageChange={goToPage} 
            />
          )}
        </>
      )}
    </div>
  );
};

export default QuotesList;
