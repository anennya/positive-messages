import React, { useState, useEffect } from 'react';
import { Brain, Quote, Shuffle, Search } from 'lucide-react';

const FeynmanQuotes: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [randomQuote, setRandomQuote] = useState<string>('');

  const feynmanQuotes = [
    "I would rather have questions that can't be answered than answers that can't be questioned.",
    "Study hard what interests you the most in the most undisciplined, irreverent and original manner possible.",
    "The first principle is that you must not fool yourself — and you are the easiest person to fool.",
    "I learned very early the difference between knowing the name of something and knowing something.",
    "If you want to learn about nature, to appreciate nature, it is necessary to understand the language that she speaks in.",
    "Science is a way of thinking much more than it is a body of knowledge.",
    "I think it's much more interesting to live not knowing than to have answers which might be wrong.",
    "Nobody understands quantum mechanics.",
    "What I cannot create, I do not understand.",
    "The worthwhile problems are the ones you can really solve or help solve, the ones you can really contribute something to.",
    "It doesn't matter how beautiful your theory is, it doesn't matter how smart you are. If it doesn't agree with experiment, it's wrong.",
    "I have approximate answers and possible beliefs and different degrees of certainty about different things.",
    "Fall in love with some activity, and do it! Nobody ever figures out what life is all about, and it doesn't matter.",
    "I'd rather have questions I can't answer than answers I can't question.",
    "The highest forms of understanding we can achieve are laughter and human compassion.",
    "If you think you understand quantum mechanics, you don't understand quantum mechanics.",
    "Religion is a culture of faith; science is a culture of doubt.",
    "I was born not knowing and have had only a little time to change that here and there.",
    "We are trying to prove ourselves wrong as quickly as possible, because only in that way can we find progress.",
    "The imagination of nature is far, far greater than the imagination of man.",
    "I can live with doubt and uncertainty and not knowing. I think it is much more interesting to live not knowing than to have answers that might be wrong.",
    "You have no responsibility to live up to what other people think you ought to accomplish.",
    "I don't know what's the matter with people: they don't learn by understanding; they learn by some other way — by rote or something.",
    "Physics is like sex: sure, it may give some practical results, but that's not why we do it.",
    "If I could explain it to the average person, I wouldn't have been worth the Nobel Prize.",
    "The beauty of a flower is not diminished by our knowledge of the plant.",
    "I think I can safely say that nobody understands quantum mechanics.",
    "Teach principles, not formulas.",
    "I don't have to know an answer. I don't feel frightened by not knowing things.",
    "The only way to deep happiness is to do something you love to the best of your ability."
  ];

  const filteredQuotes = feynmanQuotes.filter(quote =>
    quote.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * feynmanQuotes.length);
    setRandomQuote(feynmanQuotes[randomIndex]);
  };

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
    getRandomQuote();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-400 to-indigo-300 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-16 w-72 h-72 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-100/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-2/3 left-1/4 w-56 h-56 bg-indigo-300/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Main content */}
      <div className={`relative z-10 min-h-screen p-6 pt-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="mb-6 flex justify-center">
              <div className="p-4 bg-white/20 backdrop-blur-sm rounded-full shadow-lg">
                <Brain className="w-12 h-12 text-black" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
              Richard Feynman
            </h1>
            <p className="text-xl text-black/80 font-medium">
              Wisdom from the Great Explainer
            </p>
          </div>

          {/* Featured Random Quote */}
          <div className="mb-12">
            <div className="bg-white/20 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-white/30 hover:bg-white/25 transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <Quote className="w-8 h-8 text-black/60" />
                <button
                  onClick={getRandomQuote}
                  className="flex items-center space-x-2 px-4 py-2 bg-white/20 rounded-full hover:bg-white/30 transition-all duration-300"
                >
                  <Shuffle className="w-4 h-4" />
                  <span className="text-sm font-medium">Random Quote</span>
                </button>
              </div>
              <blockquote className="text-xl md:text-2xl text-black/90 leading-relaxed font-medium italic text-center">
                "{randomQuote}"
              </blockquote>
            </div>
          </div>

          {/* Search */}
          <div className="mb-8">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-black/60" />
              <input
                type="text"
                placeholder="Search quotes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-black placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/25 transition-all duration-300"
              />
            </div>
          </div>

          {/* Quotes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredQuotes.map((quote, index) => (
              <div
                key={index}
                className="bg-white/15 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 group"
              >
                <Quote className="w-6 h-6 text-black/50 mb-4 group-hover:text-black/70 transition-colors duration-300" />
                <blockquote className="text-black/90 leading-relaxed font-medium">
                  "{quote}"
                </blockquote>
              </div>
            ))}
          </div>

          {/* No results message */}
          {filteredQuotes.length === 0 && (
            <div className="text-center py-12">
              <p className="text-black/70 text-lg">
                No quotes found matching "{searchTerm}"
              </p>
            </div>
          )}

          {/* Footer */}
          <div className="text-center mt-16 pb-8">
            <p className="text-black/70 text-sm font-medium">
              🧠 "The pleasure of finding things out" - Richard Feynman
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeynmanQuotes;