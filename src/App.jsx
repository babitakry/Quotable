import React from 'react';
import QuotesList from './components/QuotesList.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-purple-100 to-amber-100 font-sans text-gray-800">
      <header className="bg-white/70 backdrop-blur-md border-b border-indigo-100 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-xl font-serif">
              "
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-900">
              Quotable<span className="text-indigo-600">.</span>
            </span>
          </div>
          <nav>
            <a href="https://freeapi.app/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-500 hover:text-indigo-600 transition-colors">
              Powered by FreeAPI
            </a>
          </nav>
        </div>
      </header>

      <main className="py-8">
        <QuotesList />
      </main>

      <footer className="mt-auto py-8 text-center text-sm text-gray-500 border-t border-indigo-50">
        <p>Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}

export default App;
