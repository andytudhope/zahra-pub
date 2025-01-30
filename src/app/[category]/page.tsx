import { getBooksByCategory } from '@/lib/books';
import { categories } from '@/lib/books';
import BookCard from '@/components/books/BookCard';

type PageParams = {
  params: Promise<{ category: string }>;
}

export default async function Page({ params }: PageParams) {
  const resolvedParams = await params;
  const category = categories[resolvedParams.category];
  const books = getBooksByCategory(resolvedParams.category);

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">{category.name}</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <BookCard key={book.id} book={book} variant="grid" />
        ))}
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return Object.keys(categories).map((category) => ({
    category,
  }));
}