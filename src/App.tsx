import React, { useState, useEffect } from 'react';
import { Sun, Heart, Star, Sparkles } from 'lucide-react';

function App() {
  const [currentMessage, setCurrentMessage] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const positiveMessages = [
    "Today is a new beginning. Embrace the possibilities that await you.",
    "You have the power to create positive change in your life and the lives of others.",
    "Every challenge you face is an opportunity to grow stronger and wiser.",
    "Your unique perspective and talents make the world a more beautiful place.",
    "Believe in yourself - you are capable of achieving incredible things.",
    "Kindness is a language that everyone understands. Spread it generously today.",
    "Progress, not perfection, is what matters. Celebrate every small step forward.",
    "You are exactly where you need to be on your journey of growth and discovery.",
    "Your resilience has brought you this far, and it will carry you even further.",
    "Today is full of opportunities to make someone smile, including yourself.",
    "Trust the process of your life. Beautiful things are unfolding in perfect timing.",
    "You have survived 100% of your difficult days so far. That's an amazing track record.",
    "Your presence in this world makes a difference, even in ways you may never know.",
    "Every sunrise brings new hope and fresh possibilities for joy and success.",
    "You are worthy of love, happiness, and all the good things life has to offer.",
    "Your dreams are valid and achievable. Take one small step toward them today.",
    "Gratitude transforms what we have into enough and opens doors to abundance.",
    "You have the strength to overcome any obstacle and the wisdom to learn from it.",
    "Your compassion and empathy make the world a more connected and caring place.",
    "Today is a gift - that's why it's called the present. Make it count.",
    "You are not just surviving, you are thriving and becoming who you're meant to be.",
    "Your journey is unique and beautiful. Trust your path and embrace your story.",
    "Every act of courage, no matter how small, creates ripples of positive change.",
    "You have the power to choose your thoughts and create your own happiness.",
    "Your potential is limitless. Don't let fear hold you back from your greatness.",
    "Love yourself as you would love your dearest friend - with patience and kindness.",
    "You are a masterpiece in progress. Every experience adds to your beautiful story.",
    "Today offers countless moments to practice joy, gratitude, and connection.",
    "Your inner light shines brightly and has the power to illuminate the world around you.",
    "You are enough, just as you are, while also growing into who you're becoming.",
    "Every new day is a chance to write a beautiful new chapter in your life story."
  ];

  useEffect(() => {
    // Get current date and format it beautifully
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    setCurrentDate(now.toLocaleDateString('en-US', options));

    // Use the day of year to determine which message to show
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now.getTime() - start.getTime();
    const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
    const messageIndex = dayOfYear % positiveMessages.length;
    setCurrentMessage(positiveMessages[messageIndex]);

    // Trigger fade-in animation
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const iconComponents = [Sun, Heart, Star, Sparkles];
  const IconComponent = iconComponents[Math.floor(Math.random() * iconComponents.length)];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-400 to-blue-200 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-96 h-96 bg-blue-100/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-blue-300/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Main content */}
      <div className={`relative z-10 min-h-screen flex items-center justify-center p-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="mb-8 flex justify-center">
            <div className="p-4 bg-white/20 backdrop-blur-sm rounded-full shadow-lg animate-bounce" style={{ animationDuration: '3s' }}>
              <IconComponent className="w-12 h-12 text-black" />
            </div>
          </div>

          {/* Date */}
          <div className="mb-6">
            <p className="text-black/80 text-lg font-medium tracking-wide">
              {currentDate}
            </p>
          </div>

          {/* Main message */}
          <div className="bg-white/20 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-white/30 hover:bg-white/25 transition-all duration-300 hover:scale-105 hover:shadow-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-black mb-6 leading-tight">
              Your Daily Inspiration
            </h1>
            <blockquote className="text-xl md:text-2xl text-black/90 leading-relaxed font-medium italic">
              "{currentMessage}"
            </blockquote>
          </div>

          {/* Bottom decorative elements */}
          <div className="mt-12 flex justify-center space-x-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-3 h-3 bg-black/50 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.5}s` }}
              ></div>
            ))}
          </div>

          {/* Inspirational footer */}
          <div className="mt-8">
            <p className="text-black/70 text-sm font-medium">
              ✨ A new message awaits you tomorrow ✨
            </p>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-10 right-10 animate-float">
        <Star className="w-6 h-6 text-black/30" />
      </div>
      <div className="absolute bottom-20 left-10 animate-float" style={{ animationDelay: '1s' }}>
        <Heart className="w-5 h-5 text-black/30" />
      </div>
      <div className="absolute top-1/3 right-20 animate-float" style={{ animationDelay: '2s' }}>
        <Sparkles className="w-4 h-4 text-black/30" />
      </div>
    </div>
  );
}

export default App;