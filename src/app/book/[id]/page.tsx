import { books } from '@/lib/books';
import { notFound } from 'next/navigation';
import BookContent from '@/components/books/BookContent';

type PageParams = {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageParams) {
  const resolvedParams = await params;
  const book = books.find(b => b.id === resolvedParams.id);

  if (!book) {
    notFound();
  }

  return <BookContent book={book} />;
}

export function generateStaticParams() {
  return books.map((book) => ({
    id: book.id,
  }));
}