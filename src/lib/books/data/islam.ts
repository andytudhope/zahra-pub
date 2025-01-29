import { Book } from '@/types';

export const islamBooks: Book[] = [ 
    {
        id: 'elements-of-islam',
        title: "The Elements Of Islam",
        description: "At a time when communities increasingly tend to view each other with suspicion, <i>The Elements of Islam</i> cuts through the morass of misunderstanding and misinformation to give a true and timely overview of the universality and light of the prophetic message of Islam.\n\n<i>The Elements of Islam</i> explains:\n\n<ol><li>The unifying path of Islam</li><li>The history and development of Islam as a religion</li><li>The distinction between original Islam and the traditions of Muslims</li><li>The life that Muslims lead today</li><li>The future of Islam</li></ol>",
        coverImage: "/images/book-covers/elements-of-islam.jpg",
        category: 'islam',
        publishedDate: new Date('2020-04-19'),
        purchaseLinks: {
          amazon: "1919897054",
          kindle: "B01IVTK8WG",
          kobo: "http://store.kobobooks.com/en-CA/ebook/the-elements-of-islam",
          apple: "http://itunes.apple.com/us/book/id1144988283",
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
      {
        id: "living-islam",
        title: "Living Islam - East & West",
        description: "This is the journal of a contemporary Sufi master's travels through many lands in the East and West. From Japan to India, to Britain and America, he speaks to contemporary audiences about the timeless eternal reality of the path of dynamic submission and the way to self-fulfillment.\n\nIn <b><i>Living Islam</b></i>, Shaykh Fadhlalla Haeri shows how it is possible to apply the eternal teachings of Islam to one's own life in this modern age. Portraying ageless wisdom against the backdrop of a changing world, this vivid, and captivating work is essential for all sincere seekers of the Truth.",
        coverImage: "/images/book-covers/LivingIslam.jpg",
        category: "islam",
        order: 2,
        publishedDate: new Date('1991-11-03'),
        purchaseLinks: {
          amazon: "1852300655",
          kindle: "B01IVTK8T4",
          kobo: "http://store.kobobooks.com/en-CA/ebook/living-islam",
          apple: "http://itunes.apple.com/us/book/id1144968591",
        },
        samplePdfUrl: "/samples/LivingIslam.pdf",
      },
]
