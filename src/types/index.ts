export interface Book {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  category: CategorySlug;
  featured?: boolean;
  latest?: boolean;
  publishedDate?: Date;
  purchaseLinks: {
    amazon?: string;
    other?: Array<{
      name: string;
      url: string;
      geography: string | 'all';
    }>;
  };
  samplePdfUrl: string;
}

export type CategorySlug =
  | 'quran'
  | 'poetry'
  | 'islam'
  | 'sufism'
  | 'practices'
  | 'talks-courses'
  | 'other';

export interface Category {
  slug: CategorySlug;
  name: string;
  description: string;
  order: number;
}

export interface Categories {
  [key: string]: Category;
}