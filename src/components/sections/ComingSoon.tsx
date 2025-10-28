import { Book } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

interface ComingSoonProps {
  books: Book[];
}

export default function ComingSoon({ books }: ComingSoonProps) {
  const comingBooks = books.filter((b) => b.coming).slice(0, 4);

  if (comingBooks.length === 0) return null;

  return (
    <div className="flex flex-col items-center px-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Coming Soon</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {comingBooks.map((book) => (
          <Link key={book.id} href={`/book/${book.id}`}>
            <Image
              src={book.coverImage}
              alt={book.title}
              width={160}
              height={170}
              className="rounded-md object-cover"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
