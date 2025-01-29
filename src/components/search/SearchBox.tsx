'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Search as SearchIcon } from 'lucide-react';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: string;
}

export default function SearchBox() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [searchIndex, setSearchIndex] = useState<SearchResult[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetch('/search-index.json')
      .then(res => res.json())
      .then(data => setSearchIndex(data));

    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
        setSearchTerm('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (searchTerm.length < 2) {
      setResults([]);
      return;
    }

    const searchWords = searchTerm.toLowerCase().split(' ');
    const filtered = searchIndex.filter(item => {
      const titleLower = item.title.toLowerCase();
      const descLower = item.description.toLowerCase();
      
      return searchWords.every(word => 
        titleLower.includes(word) || descLower.includes(word)
      );
    }).slice(0, 5);

    setResults(filtered);
  }, [searchTerm, searchIndex]);

  const handleSearchIconClick = () => {
    setIsExpanded(true);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  return (
    <div ref={searchRef} className="relative">
      {!isExpanded ? (
        <button onClick={handleSearchIconClick} className="p-1">
          <SearchIcon className="w-5 h-5" />
        </button>
      ) : (
        <div className="flex items-center space-x-2">
          <SearchIcon className="w-5 h-5 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search books..."
            className="border border-gray-300 rounded-lg px-2 focus:border-black outline-none py-1 w-48"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}

      {/* Results dropdown */}
      {isExpanded && results.length > 0 && (
        <div className="absolute right-0 mt-2 w-96 bg-white shadow-lg rounded-lg overflow-hidden z-50">
          <div className="max-h-96 overflow-y-auto">
            {results.map((result) => (
              <Link
                key={result.id}
                href={`/book/${result.id}`}
                onClick={() => {
                  setIsExpanded(false);
                  setSearchTerm('');
                }}
                className="block p-4 hover:bg-gray-50 border-b last:border-b-0"
              >
                <h3 className="font-bold text-black">{result.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">{result.description}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}