'use client';

import { Book } from '@/types';
import Image from 'next/image';
import { useGeography } from '@/hooks/useGeography';
import { getAmazonUrl } from '@/lib/amazonUtils';
import RichText from '@/components/ui/RichText';

interface BookContentProps {
  book: Book;
}

export default function BookContent({ book }: BookContentProps) {
  const userCountry = useGeography();
  const amazonUrl = getAmazonUrl(book.purchaseLinks.amazon, userCountry);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-shrink-0">
          <div className="relative w-64 h-96">
            <Image
              src={book.coverImage}
              alt={book.title}
              width={256}
              height={384}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        <div className="flex-grow">
          <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
          <RichText content={book.description} />

          <div className="mt-4 space-y-4 max-w-md">
            <a
              href={book.samplePdfUrl}
              className="block w-full text-center border-2 border-black text-black py-3 rounded-lg hover:bg-gray-50 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Sample PDF
            </a>
            
            {amazonUrl && (
              <a
                href={amazonUrl}
                className="block w-full text-center bg-black text-white py-3 rounded-lg hover:bg-black/80 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Amazon
              </a>
            )}

            {book.purchaseLinks.other?.filter(link => 
              link.geography === 'all' || link.geography === userCountry
            ).map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="block w-full text-center border border-gray-300 text-gray-700 py-3 rounded-lg hover:border-black transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name}
              </a>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
}