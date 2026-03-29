"use client";

import { useState, useEffect } from 'react';
import { Star, CalendarDays, Repeat, ArrowUp } from 'lucide-react';

export default function ScrollNav() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-white/95 backdrop-blur-md shadow-lg rounded-full px-3 py-2 flex items-center gap-1 border border-gray-200">
      <a href="#top-picks" className="flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors">
        <Star className="w-3.5 h-3.5" /> Top 5
      </a>
      <a href="#full-calendar" className="flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors">
        <CalendarDays className="w-3.5 h-3.5" /> Calendar
      </a>
      <a href="#recurring" className="flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors">
        <Repeat className="w-3.5 h-3.5" /> Weekly
      </a>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors ml-1"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-3.5 h-3.5" />
      </button>
    </nav>
  );
}
