import { Book, Category, Categories } from '@/types';

export const categories: Categories = {
  'islam': {
    slug: 'islam',
    name: 'Islam',
    description: 'Foundational works covering various aspects of Islamic knowledge and practice.'
  },
  'quran': {
    slug: 'quran',
    name: 'Quran',
    description: 'Works focused on Quranic studies, translations, and contemplation.'
  },
  'sufism': {
    slug: 'sufism',
    name: 'Sufism',
    description: ''
  },
  'practices': {
    slug: 'practices',
    name: 'Practices',
    description: ''
  },
  'talks-courses': {
    slug: 'talks-courses',
    name: 'Talks and Courses',
    description: ''
  },
  'poetry': {
    slug: 'poetry',
    name: 'Poetry',
    description: ''
  },
};

export const books: Book[] = [
  {
    id: 'elements-of-islam',
    title: "The Elements Of Islam",
    description: "At a time when communities increasingly tend to view each other with suspicion, <i>The Elements of Islam</i> cuts through the morass of misunderstanding and misinformation to give a true and timely overview of the universality and light of the prophetic message of Islam.\n\n<i>The Elements of Islam</i> explains:\n\n<ol><li>The unifying path of Islam</li><li>The history and development of Islam as a religion</li><li>The distinction between original Islam and the traditions of Muslims</li><li>The life that Muslims lead today</li><li>The future of Islam</li></ol>",
    coverImage: "/images/book-covers/elements-of-islam.jpg",
    category: 'islam',
    purchaseLinks: {
      amazon: "https://www.amazon.com/dp/B01IVTK8WG",
      other: [
        {
          name: "Barnes & Noble",
          url: "https://www.barnesandnoble.com/w/elements-of-islam-shaykh-fadhlalla-haeri/1000382122"
        }
      ]
    },
    samplePdfUrl: "/samples/beginners-guide-islam.pdf"
  },
  // Add other books...
];

export const getBooksByCategory = (categorySlug: string): Book[] => {
  return books.filter(book => book.category === categorySlug);
};

export const getAllCategories = (): Category[] => {
  return Object.values(categories);
};