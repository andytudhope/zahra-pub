import { Book } from '@/types';
import { categories } from './categories';
import { islamBooks } from './data/islam';
import { quranBooks } from './data/quran';
import { sufismBooks } from './data/sufism';
import { talksCoursesBooks } from './data/talks-courses';
import { inspirationalBooks } from './data/inspirations';
import { otherBooks } from './data/other';

export const books: Book[] = [
  ...islamBooks,
  ...quranBooks,
  ...sufismBooks,
  ...talksCoursesBooks,
  ...inspirationalBooks,
  ...otherBooks,
];

export { categories };

export function getBooksByCategory(categorySlug: string): Book[] {
    return books.filter(book => book.category === categorySlug);
}