import { Book } from '@/types';
import { categories } from './categories';
import { islamBooks } from './data/islam';
import { quranBooks } from './data/quran';
import { sufismBooks } from './data/sufism';
import { talksCoursesBooks } from './data/talks-courses';
import { poetryBooks } from './data/poetry';

export const books: Book[] = [
  ...islamBooks,
  ...quranBooks,
  ...sufismBooks,
  ...talksCoursesBooks,
  ...poetryBooks,
];

export { categories };

export function getBooksByCategory(categorySlug: string): Book[] {
    return books.filter(book => book.category === categorySlug);
}