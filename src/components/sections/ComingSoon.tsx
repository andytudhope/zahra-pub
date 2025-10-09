import { Book } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

interface ComingSoonProps {
  books: Book[];
}

export default function ComingSoon({ books }: ComingSoonProps) {
  const comingBooks = books.filter((b) => b.coming).slice(0, 1);
  const book = comingBooks[0];

  if (!book) return null;

  return (
    <div className="flex md:flex-row flex-col items-center gap-4 overflow-hidden">
      <div className="flex flex-col px-4">
        <h2 className="text-2xl font-bold mb-2">Coming Soon</h2>
        <Link href={`/book/${book.id}`}>
          <Image
            src={book.coverImage}
            alt={book.title}
            width={160}
            height={170}
            className="rounded-md object-cover"
          />
        </Link>
      </div>
    </div>
  );
}
