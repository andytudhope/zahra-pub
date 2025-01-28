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
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [searchIndex, setSearchIndex] = useState<SearchResult[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load search index
    fetch('/search-index.json')
      .then(res => res.json())
      .then(data => setSearchIndex(data));

    // Close search on click outside
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
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
    }).slice(0, 5); // Limit to 5 results

    setResults(filtered);
  }, [searchTerm, searchIndex]);

  return (
    <div ref={searchRef} className="relative px-2 border border-gray-300 rounded-lg">
      <div className="flex items-center space-x-2">
        <SearchIcon className="w-5 h-5" />
        <input
          type="text"
          placeholder="Search books..."
          className="focus:border-black outline-none py-1 w-48"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
        />
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full mt-2 w-96 right-0 bg-white shadow-lg rounded-lg overflow-hidden z-50">
          <div className="max-h-96 overflow-y-auto">
            {results.map((result) => (
              <Link
                key={result.id}
                href={`/book/${result.id}`}
                onClick={() => {
                  setIsOpen(false);
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