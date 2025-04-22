import Link from 'next/link';
import { categories, books } from '@/lib/books';
import { getFeaturedBooks, getLatestBooks } from '@/lib/bookUtils';
import WorldMapWithPartners from '@/components/ui/PrintPartnersMap';
import BookCard from '@/components/books/BookCard';
import FeaturedBooks from '@/components/sections/FeaturedBooks';
import LatestBooks from '@/components/sections/LatestBooks';

export default function Home() {
  return (
    <div className="min-h-screen">

      {/* Featured and Latest Section */}
      <div className="max-w-6xl mt-10 mx-auto px-4 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-1">
          <FeaturedBooks books={getFeaturedBooks(books)} />
          <LatestBooks books={getLatestBooks(books)} />
        </div>
      </div>

      {/* About Section */}
      <div className="py-8 sm:py-4 max-w-6xl mx-auto">
        <p className='text-4xl font-bold text-center border-b border-gray-300 py-2 mb-8'>About Us</p>
        <p className='text-l px-4 mb-8'>
          Zahra Publications have been publishing books on Islam and Sufism since 1981. Dedicated to disseminating the original teachings of Islam through contemporary and classical works alike, Zahra Publications titles lay particular emphasis on spiritual and transformative teachings.
        </p>
        <p className='text-l px-4 mb-8'>
          Islam reflects the constant compassion and presence of the Divine Light. In these crucial times, more than ever before, Muslims and seekers of a life lived with integrity and harmony need to renew their knowledge and awaken to the original Prophetic path.
        </p>
      </div>

      {/* Category Sections */}
      <div className="py-8 sm:py-4 max-w-6xl mx-auto">
        <p className='text-4xl font-bold text-center border-b border-gray-300 py-2 mb-8'>All Categories</p>
        <div className="max-w-6xl mx-auto px-4">
          <div className="space-y-16">
          {Object.values(categories)
            .filter(category => category.slug !== 'other')
            .sort((a, b) => a.order - b.order)
            .map((category) => {
              const categoryBooks = books
                .filter(book => book.category === category.slug)
                .sort((a, b) => {
                  // First sort by order if it exists
                  if (a.order !== undefined && b.order !== undefined) {
                    return a.order - b.order;
                  }
                  // Put books with order first
                  if (a.order !== undefined) return -1;
                  if (b.order !== undefined) return 1;
                  // Then sort by publishedDate if it exists
                  if (a.publishedDate && b.publishedDate) {
                    return b.publishedDate.getTime() - a.publishedDate.getTime(); // newest first
                  }
                  // Put books with publishedDate before those without
                  if (a.publishedDate) return -1;
                  if (b.publishedDate) return 1;
                  
                  // Finally, fall back to title
                  return a.title.localeCompare(b.title);
                })
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
                    <div className="flex space-x-6 md:space-x-2 pb-4">
                      {categoryBooks.map((book) => (
                        <BookCard
                          key={book.id}
                          book={book}
                          variant="grid"
                          className="w-64"
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

      {/* Print Partners Sections */}
      <div className="py-8 sm:py-4 max-w-6xl mx-auto">
        <WorldMapWithPartners />
      </div>

    </div>
  );
}



