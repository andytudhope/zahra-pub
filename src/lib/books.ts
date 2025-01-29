import { Book, Category, Categories } from '../types';

export const categories: Categories = {
  'islam': {
    slug: 'islam',
    name: 'Islam',
    description: 'Foundational works covering various aspects of Islamic knowledge and practice.',
    order: 3
  },
  'quran': {
    slug: 'quran',
    name: 'Quran',
    description: 'Works focused on Quranic studies, translations, and contemplation.',
    order: 1,
  },
  'sufism': {
    slug: 'sufism',
    name: 'Sufism',
    description: '',
    order: 4
  },
  'practices': {
    slug: 'practices',
    name: 'Practices',
    description: '',
    order: 5
  },
  'talks-courses': {
    slug: 'talks-courses',
    name: 'Talks and Courses',
    description: '',
    order: 6
  },
  'poetry': {
    slug: 'poetry',
    name: 'Poetry',
    description: '',
    order: 2
  },
};

export const books: Book[] = [
  {
    id: 'quran-path-eternal-life',
    title: "The Qur'an: Path to Eternal Life",
    description: "\"There are numerous challenges and quests in human life. The most powerful drive, however, is to understand and connect with that which is timeless and boundless. Our keen interest in the beginning of creation and its end is part of this quest. The Qur’an is the voice of truth which involves what is considered to be rational and shareable consciousness. The majesty of the Qur’an is that it addresses most of the human situation and day to day realities whilst connecting it with the Absolute and Boundless. At a normal, conditioned, human consciousness, the Qur’an can help to reduce suffering and discord, but a point is reached where spiritual insights go beyond the mind and into the realm of the soul where discernment and differentiations melt away into a zone where energy and matter are not distinguishable. For this reason, most classical scholars of Qur’an refer to this higher level as the Divine Domain and refrain from commenting or discussing it.\"\n – From the Foreword by Shaykh Fadhlalla Haeri\n\nThe <i>Irfani</i> reflections and commentaries presented by Shaykh Fadhlalla Haeri in this book provide a bridge between rational understanding and spiritual insights of the Qur’an. This production urges the reader to travel deeper and higher in their consciousness to achieve their ultimate destiny – awareness of awareness of the Ultimate Oneness of our existence.\n\nThis edition contains a Foreword by Shaykh Fadhlalla Haeri, an introduction by the editor Shaykh Saadi Douglas Klotz, and an introduction by the translator of the Qur’anic verses Dr Adnan Al Adnani. The text contains the Qur’anic translation followed by commentaries by Shaykh Fadhlalla Haeri relevant to each set of verses.",
    coverImage: "/images/book-covers/QuranPathToEternalLife.jpg",
    category: 'quran',
    purchaseLinks: {
      amazon: "B0CW1JQCQ2",
      other: [
        {
            name: "Angus and Robertson",
            url: "https://www.angusrobertson.com.au/books/the-quran-shaykh-fadhlalla-haeri/p/9781776490110",
            geography: "AU"
        },
        {
          name: "Barnes & Noble",
          url: "https://www.barnesandnoble.com/w/the-quran-shaykh-fadhlalla-haeri/1144971602",
          geography: "US"
        },
        {
            name: "Bol",
            url: "https://www.bol.com/be/nl/p/the-qur-an/9300000174603444/",
            geography: "NL"
        },
        {
            name: "Bookshop",
            url: "https://bookshop.org/book/9781776490110",
            geography: "US"
        },
        {
            name: "Book Bug",
            url: "https://www.bookbugkalamazoo.com/book/9781776490110",
            geography: "US"
        },
        {
            name: "Booktopia",
            url: "https://www.booktopia.com.au/the-qur-an-shaykh-fadhlalla-haeri/book/9781776490110.html",
            geography: "AU"
        },
        {
            name: "eBay",
            url: "https://www.ebay.co.uk/itm/364807514020",
            geography: "UK"
        },
        {
            name: "Hickory Stick Bookshop",
            url: "https://www.hickorystickbookshop.com/book/9781776490110",
            geography: "US"
        },
        {
            name: "The Intellectual Bookshop",
            url: "https://www.intellectualbookshop.com/book/9781776490110",
            geography: "US"
        },
        {
            name: "Krisostomus",
            url: "https://www.kriso.ee/quran-path-eternal-life-tq-launch-db-9781776490110.html",
            geography: "EE"
        },
        {
            name: "Laguna Beach Books",
            url: "https://www.lagunabeachbooks.com/book/9781776490110",
            geography: "US"
        },
        {
            name: "Lehmanns",
            url: "https://www.lehmanns.de/shop/geisteswissenschaften/67516285-9781776490110-the-qur-an",
            geography: "DE"
        },
        {
            name: "RJ Julia",
            url: "https://www.rjjulia.com/book/9781776490110",
            geography: "US"
        },
        {
            name: "Shermans Maine Cost Book Shops",
            url: "https://www.shermans.com/book/9781776490110",
            geography: "US"
        },
        {
            name: "Takealot",
            url: "https://www.takealot.com/the-qur-an-path-to-eternal-life/PLID95219850",
            geography: "ZA"
        },
        {
            name: "The Reading Bug",
            url: "https://www.thereadingbug.com/book/9781776490110",
            geography: "US"
        },
        {
            name: "Thrift Books",
            url: "https://www.thriftbooks.com/w/the-quran-path-to-eternal-life-travel-version_shaykh-fadhlalla-haeri/52468919/#edition=71083075&idiq=63639719",
            geography: "US"
        },
        {
            name: "Yardstick",
            url: "https://www.yardstickalgoma.com/book/9781776490110",
            geography: "US"
        },
        {
            name: "Waterstones",
            url: "https://www.waterstones.com/book/the-quran/shaykh-fadhlalla-haeri/adnan-al-adnani/9781928329480",
            geography: "UK"
        }
      ]
    },
    samplePdfUrl: "/samples/TheQuranPathToEternalLife.pdf"
  },
  {
    id: 'shades-of-reality',
    title: "Shades of Reality",
    description: "In these stories I would like to show the many different ways that people strive towards a better life that is more secure and enjoyable. Sometimes our lives may be in a downward spiral and it might feel as if everything is disintegrating on a path of entropy. Our journey on earth is a short period of being exposed to interaction with the outer world, a period of awareness and self-reflection, which often follows a path that touches both hope and despair. I hope these snippets of life will enable the reader to rise in awareness to the inner spirit, which is eternal and divine.\n\nHuman consciousness is a special entity that interacts with whatever it focuses on, like the flame of a fire, unlike a passing wind that simply changes outer situations. Some of these stories show the effect of consciousness on an event. It is here that the narrator of the story participates in its content.\n\n- Shaykh Fadhlalla Haeri",
    coverImage: "/images/book-covers/ShadesOfReality.jpg",
    category: 'poetry',
    purchaseLinks: {
      amazon: "B0DPNG2JMH",
      other: [
        {
          name: "Bookshop",
          url: "https://bookshop.org/p/books/shades-of-reality-shaykh-fadhlalla-haeri/22095110",
          geography: "US"
        },
        {
            name: "Booktopia",
            url: "https://www.booktopia.com.au/shades-of-reality-shaykh-fadhlalla-haeri/book/9781776490141.html",
            geography: "AU"
        },
        {
            name: "Bokus",
            url: "https://www.bokus.com/bok/9781776490141/shades-of-reality/",
            geography: "SE"
        }
      ]
    },
    samplePdfUrl: "/samples/ShadesOfReality.pdf"
  },
  {
    id: 'hikari',
    title: "Hikari: Lights and Shadows",
    description: " The word \"Hikari\" is often used in various contexts in Japanese culture, including literature, art, and everyday language, to convey different shades of meaning related to light and its symbolic significance.\n\nReality emanates from the perpetual cosmic Oneness that radiates numerous patterns of lights which brings about life. As evolved human beings, any link that connects us to the origin, gives us comfort, ease and joy.\n\nWe are privileged to have numerous links to this Oneness. Language can help us to connect and unify, so does a beautiful scene, so do all our major senses-through attraction and repulsion.\n\nThe short bursts of insights in this book are steps towards being at one with the light within the heart. All our ambitions and drives ultimately lead us to the origin and creation of cosmic Oneness. Truth is one. Reality is one. Boundless eternal life is one, emanating from the One.\n\n- From the Introduction by Shaykh Fadhlalla Haeri ",
    coverImage: "/images/book-covers/Hikari.jpg",
    category: 'poetry',
    purchaseLinks: {
      amazon: "B0DKB5B6SF",
      other: [
        {
          name: "Bookshop",
          url: "https://bookshop.org/p/books/shades-of-reality-shaykh-fadhlalla-haeri/22095110",
          geography: "US"
        },
        {
            name: "Booktopia",
            url: "https://www.booktopia.com.au/shades-of-reality-shaykh-fadhlalla-haeri/book/9781776490141.html",
            geography: "AU"
        },
        {
            name: "Bokus",
            url: "https://www.bokus.com/bok/9781776490141/shades-of-reality/",
            geography: "SE"
        }
      ]
    },
    samplePdfUrl: "/samples/ShadesOfReality.pdf"
  },
  {
    id: 'elements-of-islam',
    title: "The Elements Of Islam",
    description: "At a time when communities increasingly tend to view each other with suspicion, <i>The Elements of Islam</i> cuts through the morass of misunderstanding and misinformation to give a true and timely overview of the universality and light of the prophetic message of Islam.\n\n<i>The Elements of Islam</i> explains:\n\n<ol><li>The unifying path of Islam</li><li>The history and development of Islam as a religion</li><li>The distinction between original Islam and the traditions of Muslims</li><li>The life that Muslims lead today</li><li>The future of Islam</li></ol>",
    coverImage: "/images/book-covers/elements-of-islam.jpg",
    category: 'islam',
    purchaseLinks: {
      amazon: "B01IVTK8WG",
      other: [
        {
          name: "Barnes & Noble",
          url: "https://www.barnesandnoble.com/w/elements-of-islam-shaykh-fadhlalla-haeri/1000382122",
          geography: "US"
        },
        {
            name: "Takealot",
            url: "https://www.takealot.com/the-elements-of-islam/PLID68923347",
            geography: "ZA"
        },
        {
            name: "Waterstones",
            url: "https://www.waterstones.com/book/the-elements-of-islam/shaykh-fadhlalla-haeri/9781919897059",
            geography: "UK"
        }
      ]
    },
    samplePdfUrl: "/samples/TheElementsOfIslam.pdf"
  },
];

export const getBooksByCategory = (categorySlug: string): Book[] => {
  return books.filter(book => book.category === categorySlug);
};

export const getAllCategories = (): Category[] => {
  return Object.values(categories);
};