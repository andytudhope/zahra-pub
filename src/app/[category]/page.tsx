import { getBooksByCategory } from '@/lib/books';
import { categories } from '@/lib/books';
import BookCard from '@/components/books/BookCard';

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = categories[params.category];
  const books = getBooksByCategory(params.category);

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">{category.name}</h1>
        <p className="text-gray-600">{category.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-screen">
        {books.map((book) => (
          <BookCard key={book.id} book={book} variant="grid" />
        ))}
      </div>
    </div>
  );
}

// Generate static params for all categories
export async function generateStaticParams() {
  return Object.keys(categories).map((category) => ({
    category,
  }));
}