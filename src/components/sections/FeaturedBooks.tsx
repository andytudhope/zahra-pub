import { Book } from '@/types';
import BookCard from '@/components/books/BookCard';

interface FeaturedBooksProps {
  books: Book[];
}

export default function FeaturedBooks({ books }: FeaturedBooksProps) {
  // Take only the first 4 books
  const displayBooks = books.slice(0, 4);

  return (
    <div className='mr-4'>
      <h2 className="text-2xl font-bold mb-6 border-b border-gray-300 pb-2">Featured</h2>
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