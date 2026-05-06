import CopyButton from './CopyButton';

const QuoteCard = ({ quote }) => {
  const { content, author, tags } = quote;

  return (
    <div className="group relative bg-white rounded-3xl p-8 shadow-lg shadow-indigo-100/40 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-200/60 hover:-translate-y-1 border border-white/80 overflow-hidden">
      {/* Decorative Quote Mark */}
      <div className="absolute -top-4 -left-2 text-9xl text-indigo-50 opacity-50 font-serif leading-none select-none pointer-events-none group-hover:text-indigo-100 transition-colors duration-300">
        &ldquo;
      </div>
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-6">
          <div className="flex flex-wrap gap-2">
            {tags && tags.length > 0 ? (
              tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 text-xs font-medium text-indigo-600 bg-indigo-50 rounded-full border border-indigo-100/50 transition-colors duration-200 hover:bg-indigo-100"
                >
                  {tag}
                </span>
              ))
            ) : (
              <span className="px-3 py-1 text-xs font-medium text-gray-500 bg-gray-50 rounded-full border border-gray-100">
                General
              </span>
            )}
          </div>

          <CopyButton textToCopy={`"${content}" — ${author}`} />
        </div>

        <blockquote className="mb-8">
          <p className="text-xl md:text-2xl font-medium text-gray-800 leading-relaxed font-serif">
            "{content}"
          </p>
        </blockquote>

        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center text-indigo-700 font-bold text-lg border border-indigo-200">
            {author.charAt(0).toUpperCase()}
          </div>
          <div className="ml-4">
            <p className="text-sm font-bold text-gray-900">{author}</p>
            <p className="text-xs text-gray-500">Author</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
