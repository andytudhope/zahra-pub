// src/app/search/page.tsx
'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: string;
}

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    // Load search index and perform search
    fetch('/search-index.json')
      .then(res => res.json())
      .then(searchIndex => {
        if (query.length < 2) {
          setResults([]);
          return;
        }

        const searchWords = query.toLowerCase().split(' ');
        const filtered = searchIndex.filter((item: SearchResult) => {
          const titleLower = item.title.toLowerCase();
          const descLower = item.description.toLowerCase();
          
          return searchWords.every(word => 
            titleLower.includes(word) || descLower.includes(word)
          );
        });

        setResults(filtered);
      });
  }, [query]);

  if (!query) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Search</h1>
        <p>Please enter a search term</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Query</h1>
      <p className="text-gray-600 text-lg mb-8">{query}</p>

      <h2 className="text-2xl font-bold mb-6">Results</h2>
      <div className="space-y-1">
        {results.length === 0 ? (
          <p>No results found for &quot;{query}&quot;</p>
        ) : (
          results.map((result) => (
            <Link
              key={result.id}
              href={`/book/${result.id}`}
              className="block p-6 border-b border-gray-300 hover:bg-gray-50"
            >
              <h3 className="font-bold text-lg mb-2">{result.title}</h3>
              <p className="text-gray-600 line-clamp-2">{result.description}</p>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Search</h1>
        <p>Loading...</p>
      </div>
    }>
      <SearchResults />
    </Suspense>
  );
}