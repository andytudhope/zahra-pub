// src/app/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { categories, books } from '@/lib/books';
import BookCard from '@/components/books/BookCard';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with centered image */}
      <div className="h-screen flex items-center justify-center">
        <div className="relative w-[400px] h-[395px]">
          <Image
            src="/images/allah.png"
            alt="Zahra Publications Hero"
            width={400}
            height={395}
            priority
          />
        </div>
      </div>

      {/* Category Sections */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="space-y-16">
          {Object.values(categories)
            .sort((a, b) => a.order - b.order)
            .map((category) => {
              const categoryBooks = books
                .filter(book => book.category === category.slug)
                .slice(0, 5);

              if (categoryBooks.length === 0) return null;

              return (
                <section key={category.slug}>
                  <Link 
                    href={`/${category.slug}`}
                    className="inline-block hover:underline"
                  >
                    <h2 className="text-3xl font-bold mb-6">{category.name}</h2>
                  </Link>
                  <div className="overflow-x-auto overflow-y-hidden -mx-4 px-4">
                    <div className="flex space-x-6 pb-4">
                      {categoryBooks.map((book) => (
                        <BookCard
                          key={book.id}
                          book={book}
                          variant="grid"
                        />
                      ))}
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}



