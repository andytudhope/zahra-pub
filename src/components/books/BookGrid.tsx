import { Book } from '@/types';
import BookCard from './BookCard';

interface BookGridProps {
  books: Book[];
  className?: string;
}

const BookGrid = ({ books, className = '' }: BookGridProps) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {books.map((book) => (
        <BookCard key={book.id} book={book} variant="detail" />
      ))}
    </div>
  );
};

export default BookGrid;