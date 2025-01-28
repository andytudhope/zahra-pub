import { books } from '@/lib/books';
import Image from 'next/image';
import RichText from '@/components/ui/RichText';
import { notFound } from 'next/navigation';

type PageParams = {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageParams) {
  const resolvedParams = await params;
  const book = books.find(b => b.id === resolvedParams.id);

  if (!book) {
    notFound();
  }

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
          <div className="text-gray-600 mb-8">
            <RichText content={book.description} />
          </div>

          <div className="space-y-4 max-w-md">
            {book.purchaseLinks.amazon && (
              <a
                href={book.purchaseLinks.amazon}
                className="block w-full text-center bg-black text-white py-3 rounded-lg hover:bg-black/80 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy on Amazon
              </a>
            )}

            <a
              href={book.samplePdfUrl}
              className="block w-full text-center border-2 border-black text-black py-3 rounded-lg hover:bg-gray-50 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Sample PDF
            </a>

            {book.purchaseLinks.other?.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="block w-full text-center border border-gray-300 text-gray-700 py-3 rounded-lg hover:border-black transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy on {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return books.map((book) => ({
    id: book.id,
  }));
}