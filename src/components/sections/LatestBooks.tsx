import { Book } from '@/types';
import BookCard from '@/components/books/BookCard';

interface LatestBooksProps {
  books: Book[];
}

export default function LatestBooks({ books }: LatestBooksProps) {
  // Sort books by publishedDate (newest first), fallback to title
  const sortedBooks = [...books].sort((a, b) => {
    if (a.publishedDate && b.publishedDate) {
      return b.publishedDate.getTime() - a.publishedDate.getTime();
    }
    // Put books with publishedDate before those without
    if (a.publishedDate) return -1;
    if (b.publishedDate) return 1;
    // Fall back to title comparison
    return a.title.localeCompare(b.title);
  });

  // Take only the first 4 books
  const displayBooks = sortedBooks.slice(0, 4);

  return (
    <div className='py-16 sm:py-4 mr-4'>
      <h2 className="text-2xl font-bold mb-6 border-b border-gray-300 pb-2">Latest</h2>
      <div className="grid grid-cols-2 gap-4">
        {displayBooks.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            variant="grid"
          />
        ))}
      </div>
    </div>
  );
}