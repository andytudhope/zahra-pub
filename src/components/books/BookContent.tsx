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
  const kindleUrl = getAmazonUrl(book.purchaseLinks.kindle, userCountry);
  
  const localShops = book.purchaseLinks.other?.filter(link =>
    link.geography === 'all' || link.geography === userCountry
  );

  const hasEbooks = book.purchaseLinks.kindle || book.purchaseLinks.kobo || book.purchaseLinks.apple;
  const hasLocalShops = localShops && localShops.length > 0;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-8">
        <div>
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
        <div>
          <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
          <p className="text-gray-400 italic mb-6">by {book.author || 'Shaykh Fadhlalla Haeri'}</p>
          <RichText content={book.description} />
          
          <div className="mt-8 space-y-2">
            {/* Sample PDF */}
            <a
              href={book.samplePdfUrl}
              className="block w-[calc(50%-20px)] md:w-full md:max-w-md text-center border-2 border-black text-black py-3 rounded-lg hover:bg-gray-50 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Sample PDF
            </a>

            {/* Amazon button */}
            {amazonUrl && (
              <a
                href={amazonUrl}
                className="block w-[calc(50%-20px)] md:w-full md:max-w-md text-center bg-black text-white py-3 rounded-lg hover:bg-black/80 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Amazon
              </a>
            )}

            {/* Purchase Options Grid */}
            {(hasEbooks || hasLocalShops) && (
              <div className="grid grid-cols-2 md:grid-cols-1 gap-8 py-8">
                {/* E-books Column */}
                {hasEbooks && (
                  <div>
                    <p className="font-bold text-xl mb-4">E-Books</p>
                    <div className="space-y-3">
                      {kindleUrl && (
                        <a
                          href={kindleUrl}
                          className="block w-full text-center border border-gray-300 text-gray-700 py-3 rounded-lg hover:border-black transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Kindle
                        </a>
                      )}
                      {book.purchaseLinks.kobo && (
                        <a
                          href={book.purchaseLinks.kobo}
                          className="block w-full text-center border border-gray-300 text-gray-700 py-3 rounded-lg hover:border-black transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Kobo
                        </a>
                      )}
                      {book.purchaseLinks.apple && (
                        <a
                          href={book.purchaseLinks.apple}
                          className="block w-full text-center border border-gray-300 text-gray-700 py-3 rounded-lg hover:border-black transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Apple Books
                        </a>
                      )}
                    </div>
                  </div>
                )}

                {/* Local Bookshops Column */}
                {hasLocalShops && (
                  <div>
                    <p className="font-bold text-xl mb-4">Book Shops Relevant to You</p>
                    <div className="space-y-3">
                      {localShops.map((link, index) => (
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
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}