export interface Book {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  category: CategorySlug;
  order?: number;
  featured?: boolean;
  latest?: boolean;
  publishedDate?: Date;
  purchaseLinks: {
    amazon?: string;
    kindle?: string;
    kobo?: string;
    apple?: string;
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