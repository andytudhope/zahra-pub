import Image from 'next/image';
import Link from 'next/link';
import { Book } from '../../types';
import RichText from '@/components/ui/RichText'

interface BookCardProps {
  book: Book;
  variant: 'grid' | 'detail';
  className?: string;
}

const BookCard = ({ book, variant, className = '' }: BookCardProps) => {
  if (variant === 'grid') {
    return (
      <Link
        href={`/book/${book.id}`}
        className={`block aspect-[10/14] relative transition-transform hover:scale-105 ${className}`}
      >
        <Image
          src={book.coverImage}
          alt={book.title}
          fill
          sizes="(max-width: 768px) 50vw, 33vw"
          className="rounded-lg shadow-md object-cover"
          unoptimized
        />
      </Link>
    );
  }

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="flex justify-center p-4 bg-gray-50">
        <div className="relative w-48 h-72">
          <Image
            src={book.coverImage}
            alt={book.title}
            width={192}
            height={288}
            className="rounded shadow-sm"
            unoptimized
          />
        </div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
        <div className="text-gray-600 mb-4 flex-grow overflow-hidden">
          <RichText
            content={book.description}
            className="line-clamp-3"
          />
        </div>
        <div className="space-y-2">
          {book.purchaseLinks.amazon && (
            <a
              href={book.purchaseLinks.amazon}
              className="block w-full text-center bg-black text-white py-2 rounded hover:bg-black/80 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy on Amazon
            </a>
          )}
          <a
            href={book.samplePdfUrl}
            className="block w-full text-center border border-black text-black py-2 rounded hover:bg-gray-50 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Sample
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookCard;