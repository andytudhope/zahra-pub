import { Book, Category, Categories } from '../types';

export const categories: Categories = {
  'islam': {
    slug: 'islam',
    name: 'Islam',
    description: 'Foundational works covering various aspects of Islamic knowledge and practice.',
    order: 6
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
    order: 3
  },
  'practices': {
    slug: 'practices',
    name: 'Practices',
    description: '',
    order: 4
  },
  'talks-courses': {
    slug: 'talks-courses',
    name: 'Talks and Courses',
    description: '',
    order: 5
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
    description: "\"<i>There are numerous challenges and quests in human life. The most powerful drive, however, is to understand and connect with that which is timeless and boundless. Our keen interest in the beginning of creation and its end is part of this quest. The Qur’an is the voice of truth which involves what is considered to be rational and shareable consciousness. The majesty of the Qur’an is that it addresses most of the human situation and day to day realities whilst connecting it with the Absolute and Boundless. At a normal, conditioned, human consciousness, the Qur’an can help to reduce suffering and discord, but a point is reached where spiritual insights go beyond the mind and into the realm of the soul where discernment and differentiations melt away into a zone where energy and matter are not distinguishable. For this reason, most classical scholars of Qur’an refer to this higher level as the Divine Domain and refrain from commenting or discussing it.</i>\"\n – <b>From the Foreword by Shaykh Fadhlalla Haeri</b>\n\nThe <i>Irfani</i> reflections and commentaries presented by Shaykh Fadhlalla Haeri in this book provide a bridge between rational understanding and spiritual insights of the Qur’an. This production urges the reader to travel deeper and higher in their consciousness to achieve their ultimate destiny – awareness of awareness of the Ultimate Oneness of our existence.\n\nThis edition contains a Foreword by Shaykh Fadhlalla Haeri, an introduction by the editor Shaykh Saadi Douglas Klotz, and an introduction by the translator of the Qur’anic verses Dr Adnan Al Adnani. The text contains the Qur’anic translation followed by commentaries by Shaykh Fadhlalla Haeri relevant to each set of verses.\n\n<h2>Different Options Available</h2>\n\nWhen you navigate to the book shop of your choice below, please be aware that there are different options available for this unique work.\n\n<ul><li>A Hardcover and a Paperback version which includes a Foreword by Shaykh Fadhlalla Haeri, an Introduction by the editor Shaykh Saadi Douglas Klotz, an Introduction by the translator Dr Adnan Al Adnani. The text contains the Arabic of the Qur'an, a translation alongside it completed by Dr Adnan Al Adnani, commentaries by Shaykh Fadhlalla Haeri relevant to each page, as well as two additional sets of commentaries on the side of each page of the Qur'an, one of which describes the meaning of the key verse/s per page (identified by their verse numbers underlined) and the other which presents a prescription.</li><li>A Travel version in Paperback, which contains a Foreword by Shaykh Fadhlalla Haeri. The text contains the English translation of the Qur'an by Dr Adnan Al Adnani, along with commentaries and prescription by Shaykh Fadhlalla Haeri relevant to each page. It does not include the Arabic script</li><li>An E-Book version which contains a Foreword by Shaykh Fadhlalla Haeri, an Introduction by the editor Shaykh Saadi Douglas Klotz, and an Introduction by the translator of the Qur’anic verses Dr Adnan Al Adnani. The text contains the Qur'anic translation followed by commentaries and prescription by Shaykh Fadhlalla Haeri relevant to each set of verses. It does not include the Arabic script</li></ul>",
    coverImage: "/images/book-covers/QuranPathToEternalLife.jpg",
    category: 'quran',
    order: 1,
    featured: true, 
    purchaseLinks: {
      amazon: "1928329209",
      kobo: 'https://www.kobo.com/ca/en/ebook/the-qur-an-47',
      apple: 'http://books.apple.com/us/book/id6478554730',
      other: [
        {
          name: "Amazon Paperback Version",
          url: "http://www.amazon.com/dp/1928329489",
          geography: "all"
        },
        {
          name: "Amazon Travel Version",
          url: "http://www.amazon.com/dp/1776490118",
          geography: "all"
        },
        {
          name: "Kindle",
          url: "https://www.amazon.com/gp/product/B0CW1JQCQ2",
          geography: "all"
        },
        {
          name: "Adilbris",
          url: "https://www.adlibris.com/se/bok/the-quran-9781928329480",
          geography: "SE"
        },
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
          name: "Bokus",
          url: "https://www.bokus.com/bok/9781928329480/the-quran-path-to-eternal-life/",
          geography: "SE"
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
          name: "Feltrinelli",
          url: "https://www.ibs.it/qur-path-to-eternal-life-libro-inglese-shaykh-fadhlalla-haeri/e/9781928329480?queryId=76313c9d865f1487d727d6f1239265ab",
          geography: "IT"
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
          name: "Magers & Quinn",
          url: "https://www.magersandquinn.com/product/QURAN/26479732",
          geography: "US"
        },
        {
          name: "Matfel",
          url: "https://matfel.pl/product-pol-1828976-The-Quran-Haeri-Shaykh-Fadhlalla.html",
          geography: "PL"
        },
        {
          name: "Medimops",
          url: "https://www.medimops.de/haeri-shaykh-fadhlalla-the-qur-an-path-to-eternal-life-zp-qur-an-taschenbuch-M01928329489.html",
          geography: "DE"
        },
        {
          name: "Penguin Books",
          url: "https://www.penguinbookshop.com/book/9781928329480",
          geography: "US"
        },
        {
          name: "Poshmark",
          url: "https://poshmark.com/listing/The-Quran-Path-to-Eternal-Life-Shaykh-Fadhlalla-Haeri-6603c2944ba08af7fecd1b13",
          geography: "US"
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
    latest: true,
    publishedDate: new Date('2024-10-19'),
    purchaseLinks: {
      amazon: "B0DPLCXLDG",
      kindle: "B0DPNG2JMH",
      kobo: "https://www.kobo.com/ca/en/ebook/shades-of-reality-1",
      apple: "http://books.apple.com/us/book/id6739071434",
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
    latest: true,
    publishedDate: new Date('2024-09-19'),
    purchaseLinks: {
      amazon: "177649010X",
      kindle: "B0DKB5B6SF",
      kobo: "https://www.kobo.com/ca/en/ebook/hikari-3",
      apple: "http://books.apple.com/us/book/id6737148873",
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
    publishedDate: new Date('2020-04--19'),
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
    id: "the-calling-heart",
    title: "The Calling Heart",
    description: "The Prophetic teachings and practices are very rich regarding the importance of supplication and prayers to Allah and calling upon His Attributes and Beautiful Names. Allah, the Sublime says: \"Indeed through the remembrance of Allah the hearts become tranquil.\" (13:28)\n\nI present this Litany (wird) to whomsoever desires access to the treasures of the Hereafter. There is no power and no strength except through Allah, the Magnificent. There is no victor except Him. There is no presence except His. There is nothing and none sought after besides Him. There is no beloved except Him. Oh He, Oh He, Oh He who there is no he except He.\n\n- Shaykh Fadhlalla Haeri",
    coverImage: "/images/book-covers/TheCallingHeart.jpg",
    category: "poetry",
    order: 1,
    latest: true,
    publishedDate: new Date('2024-05-19'),
    purchaseLinks: {
      amazon: "B0D8CPSRQZ",
      other: [
        {
          name: "Barnes & Noble",
          url: "https://www.barnesandnoble.com/w/the-calling-heart-shaykh-fadhlalla-haeri/1145918765?ean=9781776490134",
          geography: "US",
        },
      ]
    },
  },
  {
    id: "pathways-to-the-garden",
    title: "Pathways to the Garden: Contemporary Insights on the Sufi Path",
    description: " It is a natural human drive to discover and develop the perfect Garden. We long for a state where we have no concerns, anxieties or needs, just living in the Garden in the eternal drift of time. Only a few reach a point of bewilderment when they are not certain whether the Garden is in them or they are in the Garden. Truth is beyond space and time; therefore, its apparent confusion is a big grace when the ‘you’ is lost and the cosmic Oneness illuminates all.\n\nCosmic Light is boundless and eternal. Throughout human history, irrespective of religious orientation or culture, people have reflected on the eternal truth of this reality. Some of these sages, like Shaykh Sa`d ud-Dīn Mahmūd Shabistārī, were able to convey this in a universal light. In my experience and understanding, the conditioned consciousness of human beings has within it a drive towards higher consciousness and intelligence. Throughout our history, this appears in diverse ways and forms, cloaked within the culture of the time. With the rise in intelligence and education, today’s people can easily understand duality and the quest for unity without it being too esoteric. Young people today can also easily appreciate the truth that our existence has emerged from a mysterious unific source and will return to it after the end of time. Every one of us is challenged by the mystery of now, which is ever-changing and constant, and the unique gift of life.\n\nAll quests and teachings lead to the realization that the soul, or essence of life, is eternal and that the moment radiates from timelessness. We are obsessed with that which is eternal and ever-present. In my lifelong search to uncover and share the dazzling lights of Truth, I have been propelled to make more accessible translations of specific seminal texts from the Sufi tradition available, as I have done with <i>‘The Secret Garden’</i>. This book, <i>‘Pathways to the Garden’</i> is presented as an update to key questions for today’s time.\n\n- Shaykh Fadhlalla Haeri",
    coverImage: "/images/book-covers/PathwaysToTheGarden.jpg",
    category: "sufism",
    order: 1,
    latest: true,
    publishedDate: new Date('2024-06-19'),
    purchaseLinks: {
      amazon: "1928329446",
      kindle: "B0DDTRNFQW",
      kobo: "https://www.kobo.com/ca/en/ebook/pathways-to-the-garden",
      apple: "http://books.apple.com/us/book/id6651860673",
      other: [
        {
          name: "",
          url: "",
          geography: "",
        },
      ]
    },
    samplePdfUrl: "/samples/PathwaysToTheGarden.pdf",
  },
  {
    id: "seasons-of-wisdom",
    title: "Seasons Of Wisdom",
    description: " Seasons of Wisdom is mostly collated from the closing unscripted talks given by Shaykh Fadhlalla Haeri to seal the annual conferences held by the Academy of Self Knowledge in South Africa. It was his love for Qur'an that brought about a situation of regularly sharing commentaries and delights in the eternal Truth that whatever is known and unknown emanates from one Cosmic Source that is not subject to space or time.\n\n<i>\"Every living entity is a combination of a mysterious divine spirit or soul, which provides life and is eternal and boundless in nature, and a physical identity which connects the divine attributes of the soul with all earthly, transient realities and shadows. With intelligence and faith you will realize how these descriptions will provide seeds of prescriptions. If you dwell on either, you realise they are two facets of the same reality. One describes and the other leads to responsibility and drive. From the inert to the dynamic and moving.</i>\"\n\n- Shaykh Fadhlalla Haeri",
    coverImage: "/images/book-covers/SeasonsOfWisdom.jpg",
    category: "talks-courses",
    order: 2,
    publishedDate: new Date('2023-11-19'),
    purchaseLinks: {
      amazon: "1928329454",
      kindle: "B0CRLM54RC",
      kobo: "https://www.kobo.com/ca/en/ebook/seasons-of-wisdom",
      apple: "http://books.apple.com/us/book/id6475609555",
      other: [
        {
          name: "Takealot",
          url: "https://www.takealot.com/seasons-of-wisdom/PLID94751076",
          geography: "ZA",
        },
      ]
    },
    samplePdfUrl: "/samples/SeasonsOfWisdom-Sample.pdf",
  },
  {
    id: "courteous-approach-quran",
    title: "A Courteous Approach to Qur'an",
    description: "<i>\"The Qur’an addresses most issues that concern human beings with constant references to the ultimate Reality and Truth. Considerable emphasis is given to relative time and human concerns on earth and the connection between the inseparability of the relative and the Absolute. The Qur'an emphasizes that anything that exists or happens is due to God and equally emphasizes human responsibility to act and live with clear accountability to God.\n\nThe main difference between other traditions and religions at the time of the Prophet Muhammad is the perplexing notion that, in truth, there is only God, and all else are shadows in this Light.\n\nTo understand the Qur’an and use it as a template, this brief background is necessary. This booklet presents extracts from talks I have given on the subject, arranged in six themes: Context and Action, the Self, Understanding, Transformation, Awakening and lastly Oneness and Balance.</i>\"\n\n- From the Introduction by Shaykh Fadhlalla Haeri ",
    coverImage: "/images/book-covers/A-Courteous-Approach-To-Quran.jpg",
    category: "quran",
    order: 2,
    publishedDate: new Date('2023-12-12'),
    purchaseLinks: {
      amazon: "1928329470",
      kindle: "B0CQXRJ3SJ",
      kobo: "https://www.kobo.com/ca/en/ebook/a-courteous-approach-to-qur-an",
      apple: "http://books.apple.com/us/book/id6474973710",
      other: [
        {
          name: "Takealot",
          url: "https://www.takealot.com/a-courteous-approach-to-qur-an/PLID94727205",
          geography: "ZA",
        },
      ]
    },
    samplePdfUrl: "/samples/A-Courteous-Approach-To-Quran.pdf",
  },
  {
    id: "classical-sufi-teachings",
    title: "Teachings from a Classical Sufi Master",
    author: "Sidi `Ali al-Jamal",
    description: "<b><i>\"Man is a copy of existence and existence is a copy of man. All opposites meet in the human being.\"</b></i>\n\nShaykh Fadhlalla Haeri and Shaykh Hosam Raouf have translated key passages from the writings of Sidi `Ali al-Jamal of Fes, Morocco (d. 1193/4 AH or 1779 CE), who was a great sage of the Shadhiliyya order.\n\nSidi `Ali later became better known through his pupil, Moulay al-`Arabi al-Darqawi, one of the most celebrated eighteenth-century Sufi masters and founder of the Darqawi-Shadhiliyya Tariqa.\n\nThe original Arabic title of this work translates as: ‘Advice to the Seeker on the Path of Asceticism’, or ‘Beautiful Rubies in Understanding the Meaning of Man’.\n\nSelected passages were chosen for this anthology to inspire, guide and make accessible eternal truths to the contemporary seeker.",
    coverImage: "/images/book-covers/TeachingsFromAClassicalSufiMaster.jpg",
    category: "sufism",
    order: 1,
    featured: true,
    publishedDate: new Date('2023-04-19'),
    purchaseLinks: {
      amazon: "1928329438",
      kindle: "B0C511DWNX",
      kobo: "https://www.kobo.com/ca/en/ebook/teachings-from-a-classical-sufi-master",
      apple: "http://books.apple.com/us/book/id6448954863",
      other: [
        {
          name: "Waterstones",
          url: "https://www.waterstones.com/book/teachings-from-a-classical-sufi-master/sidi-ali-al-jamal/shaykh-fadhlalla-haeri/9781928329435",
          geography: "UK",
        },
      ]
    },
    samplePdfUrl: "/samples/TeachingsFromAClassicalSufiMaster.pdf",
  },
  {
    id: "four-journeys",
    title: "The Four Journeys",
    description: "<b><i>\"O human you are struggling towards your Lord and striving until you come to know Him.</b></i>\" Qur'an 84:6\n\nThe notion of the complete human being or the 'Insan al-kamil' was addressed by early Islamic scholars and masters following the model of the Prophet and his exemplary conduct. Prophets, sages, imams and sufi masters have elaborated upon a life fulfilled by enlightenment and God-realisation.\n\nThis experience is the outcome of leaving behind self-illusion, identity and duality. Quality life begins when your direction is clear and you accept responsibility and accountability for your actions. Human needs and desires are endless. Acceptance of this fact is the first step. This is followed by a living faith and trust in God's perfect mercy and justice, irrespective of circumstance. Then comes the security, knowledge and experience of divine guidance through one's own soul and purified heart - a desirable destiny.\n\nAll prophets and messengers have travelled by trust and witnessed the light of Allah at all times. They lived with inner certainty and contentment. The illumined being also experiences the presence of Allah's mercy and grace; such beings can only be in ecstatic gratitude at heart, even when responding to earthly challenges. This is the complete person. Those people who have reached that station are the appropriate guides and role models to be followed. Numerous enlightened masters in the past have guided and helped humanity toward higher consciousness and happiness. Mulla Sadra (d.1640 CE) described the journey of the seeker's ascent into higher consciousness in four stages. In this work I have adopted and modified his four journeys to frame the poetry appropriately.",
    coverImage: "/images/book-covers/TheFourJourneys.jpg",
    category: "poetry",
    order: 4,
    featured: true,
    publishedDate: new Date('2021-07-19'),
    purchaseLinks: {
      amazon: "1919826815",
      kindle: "B0C5JX56NC",
      kobo: "https://www.kobo.com/ca/en/ebook/the-four-journeys-1",
      apple: "http://books.apple.com/us/book/id6449260467",
      other: [
        {
          name: "Barnes & Noble",
          url: "https://www.barnesandnoble.com/w/the-four-journeys-shaykh-fadhlalla-haeri/1144023427",
          geography: "US",
        },
        {
          name: "Takealot",
          url: "https://www.takealot.com/the-four-journeys/PLID72907512",
          geography: "ZA",
        },
        {
          name: "Waterstones",
          url: "https://www.waterstones.com/book/the-four-journeys/shaykh-fadhlalla-haeri/9781919826813",
          geography: "UK",
        },
      ]
    },
  },
  {
    id: "fulfillment-now",
    title: "Fulfilment Now",
    description: "<b><i>A modern-day sage's indispensable insights into how to access true fulfilment</b></i>\n\nAt the heart of life's quest lies the mystery of existence. Fulfilment Now presents the key elements needed to fulfil this quest. Through questions put to him by students, Shaykh Fadhlalla Haeri succinctly lays bare a terrain that shows how two zones of consciousness prevail.\n\nThis book touches on the evolutionary rise of consciousness, time and timelessness, and the eternal moment. Fuelled by the major inherent drives of consciousness, connection and continuity, humanity is driven to seek contentment and to excel along the journey towards supreme consciousness. Guides have always been an inherent part of the journey to fulfilment, but Shaykh Haeri sees in the last few decades significant shifts away from localized relationships of master-student, wherein the mirroring needed by the seeker is no longer one of exclusivity but greater self-awareness and self-accountability.\n\n<b><i>Fulfilment Now</b></i> offers fresh insight into the nature of what is sought of a teacher, the subconscious, the balance between free will and predestination, what is meant by presence, death as a natural continuation, the obsession with life, relationality, and self-governance. The central thread is that it is connecting with higher consciousness that brings about fulfilment; with that calibration, suffering is reduced. Realizing this existence is a transitory stage of being between the infinite unknown and the finite known, between self and soul, leads to a fulfilled life. <b><i>Fulfilment Now</b></i> highlights that there is no distance between the seeker and the Giver.",
    coverImage: "/images/book-covers/FulfilmentNow.jpg",
    category: "talks-courses",
    order: 1,
    publishedDate: new Date('2023-01-19'),
    purchaseLinks: {
      amazon: "1928329349",
      kindle: "B0BXJNF4D6",
      kobo: "https://www.kobo.com/ca/en/ebook/fulfilment-now",
      apple: "http://books.apple.com/us/book/id6446064445",
      other: [
        {
          name: "Barnes & Noble",
          url: "https://www.barnesandnoble.com/w/fulfilment-now-shaykh-fadhlalla-haeri/1143048417",
          geography: "US",
        },
        {
          name: "Takealot",
          url: "https://www.takealot.com/fulfilment-now/PLID92669320",
          geography: "ZA",
        },
        {
          name: "Waterstones",
          url: "https://www.waterstones.com/book/fulfilment-now/shaykh-fadhlalla-haeri/aliya-batul-haeri/9781928329343",
          geography: "UK",
        },
      ]
    },
    samplePdfUrl: "/samples/FulfilmentNow.pdf",
  },
];

export const getBooksByCategory = (categorySlug: string): Book[] => {
  return books.filter(book => book.category === categorySlug);
};

export const getAllCategories = (): Category[] => {
  return Object.values(categories);
};