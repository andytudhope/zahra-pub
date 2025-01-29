import { Book } from '@/types';

export function getFeaturedBooks(books: Book[]): Book[] {
  return books.filter(book => book.featured);
}

export function getLatestBooks(books: Book[]): Book[] {
  return books
    .filter(book => book.latest)
    .sort((a, b) => {
      if (!a.publishedDate || !b.publishedDate) return 0;
      return b.publishedDate.getTime() - a.publishedDate.getTime();
    });
}