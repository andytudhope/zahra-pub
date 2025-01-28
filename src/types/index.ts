export interface Book {
    id: string;
    title: string;
    description: string;
    coverImage: string;
    category: CategorySlug;
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
    | 'islam'
    | 'quran'
    | 'sufism'
    | 'practices'
    | 'talks-courses'
    | 'poetry'
    | 'other';
  
  export interface Category {
    slug: CategorySlug;
    name: string;
    description: string;
  }
  
  export interface Categories {
    [key: string]: Category;
  }