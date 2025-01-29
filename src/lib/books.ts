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
    id: "keys-full",
    title: "Keys to the Qur'an: A Commentary on Selected Surahs",
    description: "<b><i>This is the full, hardcover version. You can find each of the five sections separately in the <a href=\"/quran\">Qur'an</a> section.</b></i>\n\nThese commentaries on several essential chapters of the Qur'an are based on Shaykh Fadhlalla Haeri's teachings in the West. The chapters include Surahs Fatiha, Baqarah, Ale `Imran, Yaseen, Al `Ankabut, Al Rahman, Al Waq`iah, Al Mulk and the entire Juz `Amma (last section of the Qur'an). These explorations of selected chapters of the Qur'an are aimed at those seeking guidance and transformation in the modern world. Emphasising the timeless wisdom of the Qur'an, Shaykh Fadhlalla Haeri uses the linguistic roots of the key terms to offer illuminating insights into its deep inner meanings, and shows its relevance to our present day lives. As a source of understanding for both Muslims and non-Muslims, this volume of 5 parts will be greatly valued.\n\nThe Qur'an reflects the absolute truth in all respects. It guides towards knowledge of numerous realities. In it one hears the eternal song of mercy, love and the oneness of creational reality. In the Qur'an we see the laws which govern the experiential, physical word as well as the subtle hidden worlds above and below.\n\nThe Qur'an tells the story of creation from before creation to beyond the end of creation. It takes one to its source--the timeless, boundless, All-Encompassing Absolute Creator.\n\nKeys to the Qur'an is based on discourses given by Shaykh Fadhlalla Haeri in America and Europe. This volume looks to the Qur'an for existential guidance and direction in this life. It does not resemble other traditional commentaries. It seeks from the Qur'an a way of living that will enable humankind, here and now, to travel courageously, purposefully and humbly toward enlightenment and awakening.",
    coverImage: "/images/book-covers/KeysFull.jpg",
    category: "quran",
    order: 2,
    featured: true,
    publishedDate: new Date('2018-02-19'),
    purchaseLinks: {
      amazon: "1919826688",
      other: [
        {
          name: "Barnes & Noble",
          url: "https://www.barnesandnoble.com/w/keys-to-the-quran-shaykh-fadhlalla-haeri/1128081178",
          geography: "US",
        },
        {
          name: "Takealot",
          url: "https://www.takealot.com/keys-to-the-qur-an-a-commentary-on-selected-surahs/PLID50564505",
          geography: "ZA",
        },
        {
          name: "Waterstones",
          url: "https://www.waterstones.com/book/keys-to-the-quran/shaykh-fadhlalla-haeri/9781919826684",
          geography: "UK",
        },
      ]
    }
  },
  {
    id: "keys-volume-1",
    title: "Keys to the Qur'an: Volume 1: Commentary on Surah Al-Fatiha and Surah Al-Baqarah",
    description: "<b><i>Surah al-Fatiha</b></i> is placed at the beginning of the Qur'an because it signifies the opening of knowledge and so the victory over ignorance. If, in the direction we are taking, there is no door, then we have reached our target - we have won. Fatiha means to open, reveal, imbue, and conquer. This surah is so named because if you follow it in your heart, you will be victorious. You will conquer and an opening will come to you./n/n<b><i>Surah al-Baqarah</b></i> scans the history of humankind from Adam to the time of the Prophet Muhammad. It contains a blueprint of how a community can live, how its members should behave as individuals, within their families, and in economic and social terms. It also gives guidance and prescriptions regarding inner and outer struggle and development.",
    coverImage: "/images/book-covers/Keys1.jpg",
    category: "quran",
    order: 5,
    publishedDate: new Date('2018-02-27'),
    purchaseLinks: {
      amazon: "1928329004",
      kindle: "B01IY92LH8",
      kobo: "http://store.kobobooks.com/en-CA/ebook/commentaries-on-chapters-one-and-two-of-the-qur-an",
      apple: "http://itunes.apple.com/us/book/id1144700040",
      other: [
        {
          name: "Barnes & Noble",
          url: "https://www.barnesandnoble.com/w/keys-to-the-quran-shaykh-fadhlalla-haeri/1128086145",
          geography: "US",
        },
        {
          name: "Takealot",
          url: "https://www.takealot.com/keys-to-the-qur-an-volume-1-commentary-on-surah-fatiha-and-surah/PLID50555296",
          geography: "ZA",
        },
        {
          name: "Waterstones",
          url: "https://www.waterstones.com/book/keys-to-the-quran/shaykh-fadhlalla-haeri/9781928329008",
          geography: "UK",
        },
      ]
    },
    samplePdfUrl: "/samples/KeysVolume1.pdf",
  },
  {
    id: "keys-volume-2",
    title: "Keys to the Qur'an: Volume 2: Commentary on Surah Ale-`Imran",
    description: "<b><i>Surat Ale-`Imran</b></i> is one of the most comprehensive and detailed chapters of the Qur'an. It demonstrates the meaning of hypocrisy, courage and belief, using the historical setting of the Battle of Uhud, one of the early Muslim campaigns, to show how people behave in different circumstances and justify their behavior.\n\nThis chapter unveils truth and insight regarding the human self, society, this world and the Next Life.",
    coverImage: "/images/book-covers/Keys2.jpg",
    category: "quran",
    order: 6,
    publishedDate: new Date('2018-02-27'),
    purchaseLinks: {
      amazon: "1928329012",
      kindle: "B01IZY9RQ0",
      kobo: "http://store.kobobooks.com/en-CA/ebook/the-family-of-imran",
      apple: "http://itunes.apple.com/us/book/id1145002464",
      other: [
        {
          name: "Barnes & Noble",
          url: "https://www.barnesandnoble.com/w/keys-to-the-quran-shaykh-fadhlalla-haeri/1128086273",
          geography: "US",
        },
        {
          name: "Takealot",
          url: "https://www.takealot.com/keys-to-the-qur-an-volume-2-commentary-on-surah-al-imran/PLID50555311",
          geography: "ZA",
        },
        {
          name: "Waterstones",
          url: "https://www.waterstones.com/book/keys-to-the-quran/shaykh-fadhlalla-haeri/9781928329015",
          geography: "UK",
        },
      ]
    },
    samplePdfUrl: "/samples/Keys2.pdf",
  },
  {
    id: "keys-volume-3",
    title: "Keys to the Qur'an: Volume 3: Commentary on Surah Yasin",
    description: "<b><i>Surat Ya Sin</b></i> is the heart of the Qur'an (<i>qalb al-Qur'an</i>). It is the chapter (<i>surah</i>) of the Qur'an which is read over the dead; therefore it is a chapter of great importance to the living. Should one seek to know the meaning of life, one must experience death, for man has come from the non-physical realm and he is swiftly proceeding towards it again. Knowledge is based on opposites. Man's apprehension of knowledge depends upon the condition of his heart. If the condition of his heart is pure and receptive, he sees perfection in every aspect of every situation he finds himself in. The Qur'an allows one to fathom the unfathomable.",
    coverImage: "/images/book-covers/Keys3.jpg",
    category: "quran",
    order: 7,
    publishedDate: new Date('2018-02-27'),
    purchaseLinks: {
      amazon: "1928329020",
      kindle: "B01IZXV4S0",
      kobo: "http://store.kobobooks.com/en-CA/ebook/the-heart-of-the-qur-an",
      apple: "http://itunes.apple.com/us/book/id1145016709",
      other: [
        {
          name: "Barnes & Noble",
          url: "https://www.barnesandnoble.com/w/keys-to-the-quran-shaykh-fadhlalla-haeri/1128086272",
          geography: "US",
        },
        {
          name: "Takealot",
          url: "https://www.takealot.com/keys-to-the-qur-an-volume-3-commentary-on-surah-yasin/PLID50555325",
          geography: "ZA",
        },
        {
          name: "Waterstones",
          url: "https://www.waterstones.com/book/keys-to-the-quran/shaykh-fadhlalla-haeri/9781928329022",
          geography: "UK",
        },
      ]
    },
    samplePdfUrl: "/samples/Keys3.pdf",
  },
  {
    id: "keys-volume-4",
    title: "Keys to the Qur'an: Volume 4: Commentary on Surahs Al-`Ankabut, Al-Rahman, Al-Waqi`ah and Al-Mulk",
    description: "<ol><li>Chapter 29: The Spider (<b><i>Surat Al-`Ankabut</b></i>)</li><li>Chapter 55: The Beneficent (<b><i>Surat Al-Rahman</b></i>)</li><li>Chapter 56: The Great Event (<b><i>Surat Al-Waqi`ah</b></i>)</li><li>Chapter 67: The Kingdom (<b><i>Surat Al-Mulk</b></i>)</li></ol>\nThese four chapters from the Meccan period are thematically interconnected, covering the subjects of affliction, direct signs of the Creator, the Next Life and the nature of the One Supreme Deity. Through allegorical interpretation of Qur'anic language, the reader is shown the safe path of conduct in this world and the Hereafter. Its message of balance and mercy, and of Divine Unity, compels the reader to reflect on the interconnectedness of all facets of life.",
    coverImage: "/images/book-covers/Keys4.jpg",
    category: "quran",
    order: 8,
    publishedDate: new Date('2018-02-27'),
    purchaseLinks: {
      amazon: "1928329039",
      kindle: "B01IYVWPKO",
      kobo: "http://store.kobobooks.com/en-CA/ebook/commentaries-on-four-selected-chapters-of-the-qur-an",
      apple: "http://itunes.apple.com/us/book/id1144703533",
      other: [
        {
          name: "Barnes & Noble",
          url: "https://www.barnesandnoble.com/w/keys-to-the-quran-shaykh-fadhlalla-haeri/1143233870",
          geography: "US",
        },
        {
          name: "Takealot",
          url: "https://www.takealot.com/keys-to-the-qur-an-volume-4-commentary-on-surahs-ankabut-al-rahm/PLID50555339",
          geography: "ZA",
        },
        {
          name: "Waterstones",
          url: "https://www.waterstones.com/book/keys-to-the-quran/shaykh-fadhlalla-haeri/9781928329039",
          geography: "UK",
        },
      ]
    },
    samplePdfUrl: "/samples/Keys4.pdf",
  },
  {
    id: "keys-volume-5",
    title: "Keys to the Qur'an: Volume 5: Commentary on Juz' `Amma",
    description: "<b>This is a commentary on the last section of the Qur'an.</b>\n\nThe original edition of this commentary was a result of teachings and talks with the objective of exploring the deeper meanings of the Divine revelations. The emphasis had been on the key Qur'anic terms and the subtle facets and connotations of Arabic words. The response by the readers was most encouraging.\n\nThe new millennium opens in an age of great complexities, chaos and constant change in values and the way of life. Therefore, what is needed nowadays is the re-discovery of Allah's patterns as revealed in the Qur'anic message so that we can act appropriately in this world.\n\nThe message of the Qur'an emanates from the original Divine blueprint which also lies latent in the human heart. All of us seek the path of ease, knowledge, security, love and contentment. No happiness lasts unless it is based on the knowledge of Allah and submission to His intended purpose and ways. The Qur`an is the key to this awakening.",
    coverImage: "/images/book-covers/Keys5.jpg",
    category: "quran",
    order: 9,
    publishedDate: new Date('2018-02-27'),
    purchaseLinks: {
      amazon: "1928329047",
      kindle: "B01ITGN3A0",
      kobo: "http://store.kobobooks.com/en-CA/ebook/beams-of-illumination-from-the-divine-revelation",
      apple: "http://itunes.apple.com/us/book/id1144197186",
      other: [
        {
          name: "Barnes & Noble",
          url: "https://www.barnesandnoble.com/w/keys-to-the-quran-shaykh-fadhlalla-haeri/1128101053",
          geography: "US",
        },
        {
          name: "Takealot",
          url: "https://www.takealot.com/keys-to-the-qur-an-volume-5-commentary-on-juz-amma/PLID50555355",
          geography: "ZA",
        },
        {
          name: "Waterstones",
          url: "https://www.waterstones.com/book/keys-to-the-quran/shaykh-fadhlalla-haeri/9781928329046",
          geography: "UK",
        },
      ]
    },
    samplePdfUrl: "/samples/Keys5.pdf",
  },
  {
    id: "universal-quran",
    title: "Universal Qur'an: Selected Verses for All Times",
    description: "\"In our contemporary world where race, religion, culture and other human characteristics meet, connect, fuse, overlap and clash, so many challenges regarding faith, belief and metaphysical issues present themselves. The Abrahamic traditions are the result of thousands of prophets and messengers coming to guide humankind which culminated with the Prophet Muhammad, whose gift of the Qur'an is of universal value.\n\nThe Qur'ans miracle is that its verses repeatedly reveal the seamless connection between infinite, unseen, cosmic lights with finite, relative, and limited earthly consciousness. This selection of key verses are universally useful for all times and for all people for every moment in the human journey.\n\nThis book presents Qur'anic Universal renderings that connects the absolute and the relative in a unified voice that transforms and transports the reader to the eternal reality that is both transcendent and immanent. It is an essential reference for the inner technology guiding towards transformation that echoes in the hearts of the sincere seeker.\"\n\n- Adnan al Adnani, author of <b><i>Lights of Consciousness: A Sufi view of Science</b></i> and <b><i>Spirituality</b></i>\n\n\"Shaykh Fadhlalla's wise commentary and rendering of the verses enable the reader, whether newcomer or more experienced, to clearly understand the Qur'anic map and guide to life. This little book opens a door allowing us to hear a wake-up call for all humanity, regardless of belief or philosophy of life.\"\n\n- Dr Neil Douglas-Klotz, author of <b><i>The Sufi Book of Life</b></i> and <b><i>A Little Book of Sufi Stories</b></i>.",
    coverImage: "/images/book-covers/UniversalQuran.jpg",
    category: "quran",
    order: 3,
    featured: true,
    publishedDate: new Date('2021-04-19'),
    purchaseLinks: {
      amazon: "1928329217",
      kindle: "B0C5JSSJF1",
      kobo: "https://www.kobo.com/ca/en/ebook/universal-qur-an-1",
      apple: "http://books.apple.com/us/book/id6449255752",
      other: [
        {
          name: "Barnes & Noble",
          url: "https://www.barnesandnoble.com/w/universal-quran-shaykh-fadhlalla-haeri/1139382340",
          geography: "US",
        },
        {
          name: "Takealot",
          url: "https://www.takealot.com/universal-qur-an-selected-verses-for-all-times/PLID72331232",
          geography: "ZA",
        },
        {
          name: "Waterstones",
          url: "https://www.waterstones.com/book/universal-quran/shaykh-fadhlalla-haeri/9781928329213",
          geography: "UK",
        },
      ]
    },
  },
  {
    id: "essential-message-quran",
    title: "The Essential Message of the Qur'an",
    description: "This book is written for anyone interested in the basic message and purpose of the Qur'an and its historical and religious framework. It highlights the important issues and topics of the Qur'an.\n\nThe Qur'an connects life on earth to its sacred essence and heavenly source which encompasses whatever there is in the universe. ",
    coverImage: "/images/book-covers/EssentialMessageOfTheQuran.jpg",
    category: "quran",
    order: 12,
    publishedDate: new Date('2022-04-19'),
    purchaseLinks: {
      amazon: "1928329195",
      kindle: "B01IYM63O2",
      kobo: "http://store.kobobooks.com/en-CA/ebook/the-essential-message-of-the-qur-an",
      apple: "http://itunes.apple.com/us/book/id1145000400",
      other: [
        {
          name: "Barnes & Noble",
          url: "https://www.barnesandnoble.com/w/essential-message-of-the-quran-fadhlalla-haeri/1102407227",
          geography: "US",
        },
        {
          name: "Takealot",
          url: "https://www.takealot.com/essential-message-of-the-qur-an/PLID90858493",
          geography: "ZA",
        },
        {
          name: "Waterstones",
          url: "https://www.waterstones.com/book/essential-message-of-the-quran/shaykh-fadhlalla-haeri/9781928329190",
          geography: "UK",
        },
      ]
    },
    samplePdfUrl: "/samples/EssentialMessageOfQuran.pdf",
    reviews: "<b>By Nazo Hadi</b>\n\nI am a born Muslim and was exposed to the Qur'an from an early age, but I was never satisfied with the commentaries I read.\n\nThe Qur'an seemed to talk about events in the past, but I wanted to know how it relates to my life in this time and age.\n\nIn most commentaries the commentators follow the chapters and verses. In this book, Shaykh Fadhlalla has chosen topics which are important to everyday life and selected and collected all the verses relevant to those topics in the appendix at the end of the book, I found this approach very helpful when I wanted to look up what the Qur'an says about a certain topic.\n\nThe central theme of the Qur'an is its emphasis on Allah/God as the One source and Essence that permeates the entire universe. All manifestations come from Allah, are sustained by Him and return to Him. The entire universe is in submission to Allah.\n\nAccording to the Qur'an our job is to groom the ego and adhere to His laws and regulations so that we become aware of the Divine Presence at all times.\n\nThis book is useful for serious Muslims and anyone who is interested to know the basic message of the Qur'an. It is a very good introduction for beginners and inspires one to read and have a better understanding of the Qur'an.\n\nIt has led me to listen to the Shaykh's other commentaries on his website (http://www.shaykhfadhlallahaeri.com) and has transformed my life.\n\nFor example, his commentary on Surah Aale Imran -- 3: 179 -- to accept the present and trust in Allah for the future has helped me to deal with a lot of worry and anxiety in my life and given me peace of mind.\n\nIn addition it has changed my relationship with the Qur'an so that now I actually enjoy reading it.\n\n\n<b>By Anjum J - May 31, 2022</b>\n\nThis gem of a book is extremely deep and requires a lot of reflection before one can grasp its inner meanings and allow it to penetrate one's consciousness at its deepest levels.\n\nWe have a group weekly Zoom session in which we go over and dissect every sub-chapter of the book each week.\n\nSo, I know, from first-hand experience of diving deep into this book, that it is full of wisdom and spiritual nourishment, in spite of the fact that I was already quite familiar with what is written in this book before I started to participate in its weekly reading; yet, everything in it seems fresh and deep as well as extremely inspiring in that the book helps me to experience a deep connection and integration with the Divine Unity.\n\nThose who have praised this book in their editorial reviews of it (Dr. Neil Douglas-Klotz, Dr. Bruce B Lawrence and Ali A. Allawi) have done so with utmost honesty, and their reviews are quite on the mark and helpful.\n\nRepetition of certain concepts in it may bother someone at first, but please know that if you examine them from various angles, you'll appreciate their repetition as they unfold new meanings each time they are addressed.\n\nI'd highly recommend that this book be read slowly, with deep reflection, along with Shaykh Fadhlalla Haeri's other books, especially his book on the <a href=\"/book/sufi-map-self\">Academy of Self Knowledge (ASK) Course ONE</a> and \"<a href=\"/book/witnessing-perfection\">Witnessing Perfection</a>\".\n\nDr. Adnan al-Adnani's \"<a href=\"https://www.amazon.com/Lights-Consciousness-Sufi-Science-Spirituality/dp/B01CFC1D7Y\" target=\"_blank\">Lights of Consciousness: A Sufi view of Science & Spirituality</a>\" is also a great aid to understanding this book.\n\nAnother extremely important thing a reader can do is examine the root meanings of the key terms used in the relevant Qur'anic verses that are included in this book for each sub-chapter in Arabic and look for the same terms used elsewhere in the Qur'an and see how they are connected and their deep meanings are unfolded.\n\nIn summary, this book is an \"aid\" to understanding the essential message of the Qur'an, which requires a reader to use it to dive into the inner meanings of the Qur'an by examining the many key terms in Arabic.\n\nThis will require extra effort on the part of the student of the Qur'an who will use this book as the rungs of a ladder to climb up and raise their consciousness to experience Divine Unity, which is the main, and essential, message of the Qur'an anyway.\n\nSo, repetition of Divine Unity in this book simply means that the rungs of that ladder are repeated.\n\nBut, as we all know, how else one would climb up the ladder if its rungs are not repeated?"
  },
  {
    id: "quran-vital-verses",
    title: "Qur'an: 50 Vital Verses",
    description: "The Qur'an is a treasure trove providing guidance and help at all times and for all people when approached the right courtesy and trust. The selected verses in this booklet are exceptionally potent when reflected upon. They lift human consciousness towards its cosmic origin and therefore complete the story and meaning of human life. Their impact becomes greater when memorised and repeated giving the genuine uplift which is the gift of true worship.",
    coverImage: "/images/book-covers/50VitalVerses.jpg",
    category: "quran",
    order: 11,
    publishedDate: new Date('2019-11-19'),
    purchaseLinks: {
      amazon: "1919826971",
      kindle: "B0C5JLBJ7G",
      kobo: "https://www.kobo.com/ca/en/ebook/quran-9",
      apple: "http://books.apple.com/us/book/id6449252276",
      other: [
        {
          name: "Barnes & Noble",
          url: "https://www.barnesandnoble.com/w/quran-shaykh-fadhlalla-haeri/1135028850",
          geography: "US",
        },
        {
          name: "Waterstones",
          url: "https://www.waterstones.com/book/quran/shaykh-fadhlalla-haeri/9781919826974",
          geography: "UK",
        },
      ]
    }
  },
  {
    id: "quran-prescriptions-for-life",
    title: "Qur'an's Prescription for Life: Revealed Cosmic Maps and Prescriptions",
    description: " The Qur'an is the foundation of the <i>Deen</i> (life-transaction), containing as it does Allah's ways, patterns, purpose and direction of creation.\n\nThe purpose of this collection is to make the Qur'an accessible, with easy reference to key issues concerning life and the path of Islam.\n\nBy emphasizing the vital and transformative teachings of the Deen, this work offers the serious student the opportunity to awaken to the timeless message of the Truth.\n\nShaykh Fadhlalla Haeri is dedicated to making available the original Islamic 'prescription for life', and hopes that this selection of the Qur'anic verses will be a useful exposure for Muslims and seekers of Allah in their journey towards illumination and the realization of the Ever-Presence of Allah.",
    coverImage: "/images/book-covers/QuransPrescriptionForLife.jpg",
    category: "quran",
    order: 13,
    publishedDate: new Date('2019-11-19'),
    purchaseLinks: {
      amazon: "1919826904",
      kindle: "B01J284G50",
      kobo: "http://store.kobobooks.com/en-CA/ebook/the-qur-anic-prescription-for-life",
      apple: "http://itunes.apple.com/us/book/id1145040986",
      other: [
        {
          name: "Barnes & Noble",
          url: "https://www.barnesandnoble.com/w/qurans-prescription-for-life-shaykh-fadhlalla-haeri/1123136226",
          geography: "US",
        },
        {
          name: "Takealot",
          url: "https://www.takealot.com/qur-an-s-prescription-for-life/PLID50564519",
          geography: "ZA",
        },
        {
          name: "Waterstones",
          url: "https://www.waterstones.com/book/qurans-prescription-for-life/shaykh-fadhlalla-haeri/9781919826905",
          geography: "UK",
        },
      ]
    },
    samplePdfUrl: "/samples/TheQuranicPrescriptionForLife.pdf"
  },
  {
    id: "sacred-alchemy",
    title: "Sacred Alchemy: A Collection of Qur'anic Verses",
    description: "<b>Compiled by Leyya Kalla</b>\n\n<b>Translated by Adnan Al Adnani</b>\n\n\"<i>And We send down of the Qur'an that which is a healing and a mercy to those who believe...</i>\" - Qur'an 17:82.\n\nThe alchemical effect of the Qur'an, the deep transformative impact it has upon the human soul, is such that even its most ardent of opponents have been profoundly affected by it. The pouring of the Qur'an's healing verses over spiritual wounds, and allowing it to work its miracle is what led to this compilation.\n\nThe Qur'an is the ultimate reference guide in revealing hidden and manifest truths, but to approach this sacred text with the correct courtesy and to be granted its secrets requires an open and sincere heart, a clear mind and a courage to face Reality and the truth of one's present state. This collection of Qur'anic verses represent key verses to imbibe and meditate upon in your alchemical spiritual journey.",
    coverImage: "/images/book-covers/SacredAlchemy.jpg",
    category: "quran",
    order: 10,
    publishedDate: new Date('2017-09-19'),
    purchaseLinks: {
      amazon: "0620711825",
      other: [
        {
          name: "Waterstones",
          url: "https://www.waterstones.com/book/sacred-alchemy/leyya-kalla/shaykh-fadhlalla-haeri/9780620711821",
          geography: "UK",
        },
      ]
    }
  },
  {
    id: "story-of-creation-quran",
    title: "The Story of Creation in the Qur'an: A Sufi Interpretation",
    description: "<b><i>The Story of Creation in the Qur'an</b></i> is an exposition of the Qur'anic verses relating to the nature of physical phenomena, including the origins of the universe, the nature of light, matter, space and time, and the evolution of biological and sentient beings.\n\nIn this book Shaykh Fadhlalla Haeri demonstrates that the verses in the Qur'an relating to the outer physical phenomena are not separate from inner phenomena and states, but in fact reflect them.\n\nThe Qur'an gives us a unified view of existence drawing us from multiplicity to unity, in order to live appropriately from a unified foundation in a world of multiplicity. This is missing from other books, which only focus on matching outer phenomena to scientific discovery without inner reflection.\n\nThe Story of Creation in the Qur'an relates outer patterns and symbols to inner experiences and metaphors bringing out the gnostic elements not just the prescriptive and phenomenal descriptions. ",
    coverImage: "/images/book-covers/TheStoryOfCreationInTheQuran.jpg",
    category: "quran",
    order: 14,
    publishedDate: new Date('2019-11-19'),
    purchaseLinks: {
      kindle: "B01J1YDJRQ",
      kobo: "http://store.kobobooks.com/en-CA/ebook/the-story-of-creation-in-the-qur-an",
      apple: "http://itunes.apple.com/us/book/id1145046683",
      other: [
        {
          name: "Barnes & Noble",
          url: "https://www.barnesandnoble.com/w/the-story-of-creation-in-the-quran-shaykh-fadhlalla-haeri/1137190654",
          geography: "US",
        },
        {
          name: "Takealot",
          url: "https://www.takealot.com/the-story-of-creation-in-the-qur-an/PLID33055984",
          geography: "ZA",
        },
      ]
    },
    samplePdfUrl: "/samples/StoryOfCreationInTheQuran.pdf"
  },
  {
    id: "journey-universe-quran",
    title: "Journey of the Universe as Expounded in the Qur'an",
    description: "\"The Qur'an itself is the great ocean of truth that lies undiscovered before us. In 'Journey of the Universe' the Shaykh has built an island in this vast Qur'anic see of knowledge so that we on the shore can build a bridge to it from religion, or from science or from wherever we may stand. Then, when we have bridged this gap between our intellectual knowledge and what is already written in our hearts we see, on looking back to the shore we left, the whole landscape of our existence from an entirely new perspective.\n\nThe creation of the Universe is the eternal instant unfolding in time. There was the 'nothingness' and with the fiat of creation, 'kun fa-yakun', the 'nothingness' was split into the duality of existence, symbolized in the first Arabic letter 'alif', the primary mark of creation that descends from God. Viewed from the other side of time, from where we stand, there was this vast creation of immense energy that flung everything into separation, which we can liken to an explosion, or theorize as the 'Big Bang'. But everything is from its Creator and must return to its Lord.\"\n\n- From the <b><i>Foreword</b></i> by Ibrahim Stokes\n\nThe Qur'an traces the journey of all creation explicitly and implicitly, seeing the physical, biological and geological voyage of life as paralleled by the inner spiritual evolution of man. Bringing together the meanings and derivations of individual words, the author reveals vibrant images which the language of the Qur'an so subtly projects.",
    coverImage: "/images/book-covers/TheStoryOfCreationInTheQuran.jpg",
    category: "quran",
    order: 15,
    publishedDate: new Date('2020-06-19'),
    purchaseLinks: {
      amazon: "1928329136",
      kindle: "B01IYM63MY",
      kobo: "http://store.kobobooks.com/en-CA/ebook/journey-of-the-universe-as-expounded-in-the-qur-an",
      apple: "http://itunes.apple.com/us/book/id1144962534",
      other: [
        {
          name: "Barnes & Noble",
          url: "https://www.barnesandnoble.com/w/journey-of-the-universe-as-expounded-in-the-quran-shaykh-f-haeri/1013944952",
          geography: "US",
        },
        {
          name: "Waterstones",
          url: "https://www.waterstones.com/book/journey-of-the-universe-as-expounded-in-the-quran/shaykh-fadhlalla-haeri/9781928329138",
          geography: "UK",
        },
      ]
    },
    samplePdfUrl: "/samples/JourneyOfTheUniverse.pdf"
  },
  {
    id: "quran-in-islam",
    title: "The Qur'an in Islam: Its Impact & Influence on the Life of Muslims",
    description: "`Allamah Sayyid M. H. Tabataba`i shows in this gem how the Qur'an contains the fundamental roots of Islam and the proof of prophethood as the Word of God. Copious quotations from the Qur'an are given to illustrate its teachings, its exoteric and esoteric dimensions and the meaning of exegesis.\n\n\"The Qur'an in Islam should be read now more than ever before because the current aberrations propagated in the name of Islam in general and Shi`ism in particular necessitate the uncompromising and clear statement of the traditional Islamic perspective as expounded by such masters as `Allamah Tabataba`i. Moreover, the present book marks an important addition to the literature in English on the central theophany of Islam, the Noble Qur'an.\"\n\n- From the Foreword by Seyyed Hossein Nasr ",
    coverImage: "/images/book-covers/TheQuranInIslam.jpg",
    author: "`Allamah Sayyid M. H. Tabataba`i",
    category: "quran",
    order: 16,
    publishedDate: new Date('2024-11-19'),
    purchaseLinks: {
      amazon: "B0DQM32SWW",
      kindle: "B01IZXV7UK",
      kobo: "http://store.kobobooks.com/en-CA/ebook/the-qur-an-in-islam",
      apple: "http://itunes.apple.com/us/book/id1144655429",
    },
    samplePdfUrl: "/samples/TheQuranInIslam.pdf"
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
    },
    samplePdfUrl: "/samples/PathwaysToTheGarden.pdf",
  },
  {
    id: "sufi-encounters",
    title: "Sufi Encounters: Sharing the Wisdom of the Enlightened Sufis",
    description: "<b><i>With Muneera Haeri</b></i>\n\nAn unparalleled exploration of Sufism as it is practised around the world, describing meetings with today's enlightened teachers as well as including wonderfully inspiring translations of the great Sufi masters of the past. Ultimately, this book acts as a guide to the Sufi path and offers wise insight into the meaning and purpose of life.\n\nA compelling view of Sufi history together with vivid personal remembrances of living mystics.\n\n\"This is an inspiring and at the same time beautifully subtle book, with light-filled insights on every page.\" - Saadi Shakur Chishti, author of <i><a href=\"https://www.amazon.com/dp/0142196355\" target=\"_blank\">The Sufi Book of Life</a></i>. The Sufi path described in this book leads the seeker past ordinary states of consciousness towards a new experience of infinitude that is the source of the universe. In this stage there is no duality or otherness, but instead infinitude, the Original Oneness, from which all dualities and attributes emanate.\n\nThe book is at once an autobiography, a didactic treatise and a literary opus full of wonderful translations of the words of earlier Sufis, as well as the author's own poetry. It describes Shaykh Fadhlalla Haeri's life quest to connect today's world with classical times, especially through his meetings with enlightened Sufis all over the globe. Shaykh Fadhlalla Haeri also addresses profound Sufi teachings concerning the nature of humankind, the cosmos and God, using clear and simple language to address difficult doctrinal issues as only a master who has digested fully such knowledge could do. The book also reveals much about the present-day Islamic world where, despite the tragedies that are to be seen everywhere, tradition and spirituality survive. This is a metaphysical and spiritual guide to the Sufi path that ultimately offers insight into the meaning and purpose of life.",
    coverImage: "/images/book-covers/SufiEncounters.jpg",
    category: "sufism",
    order: 2,
    featured: true,
    publishedDate: new Date('2018-09-18'),
    purchaseLinks: {
      amazon: "1786781859",
      kindle: "B07RL8X6KR",
      kobo: "http://store.kobobooks.com/en-US/ebook/sufi-encounters-1",
      other: [
        {
          name: "Penguin Random House",
          url: "https://www.penguinrandomhouse.com/books/594954/sufi-encounters-by-shaykh-fadhlalla-haeri/",
          geography: "all",
        },
        {
          name: "Penguin Random House (E-Book)",
          url: "https://www.penguinrandomhouse.com/books/623459/sufi-encounters-by-shaykh-fadhlalla-haeri/",
          geography: "all",
        },
        {
          name: "Watkins (E-Book)",
          url: "https://www.watkinspublishing.com/shop/sufi-encounters-ebook/",
          geography: "all",
        },
        {
          name: "Barnes & Noble",
          url: "https://www.barnesandnoble.com/w/sufi-encounters-shaykh-fadhlalla-haeri/1127952082",
          geography: "US",
        },
        {
          name: "Waterstones",
          url: "https://www.waterstones.com/book/sufi-encounters/shaykh-fadhlalla-haeri-and-muneera-haeri/9780369330321",
          geography: "UK",
        },
      ]
    }
  },
  {
    id: "spectrum-of-reality",
    title: "Spectrum of Reality: Sufi Insights",
    description: "Spectrum of Reality synthesizes a comprehensive analysis of the human condition and the way we perceive reality. Shaykh Fadhlalla Haeri makes difficult concepts accessible, especially through the use of metaphors, allegories, and insights from modern science. His thesis is that human consciousness manifests in several ways across a spectrum that ranges from universal supreme consciousness to personal conditioned consciousness. It is the nature of human culture, thought and personal consciousness to continually operate in a dualistic way, so that Reality is obscured by several layers of fragmentation.\n\nThe ultimate harmony of human consciousness with universal reality is the challenge of existence. Shaykh Fadhlalla Haeri illustrates that we can heal the split between individual and the universal by recognising that each is essential to its different territory, and believes that 'spirit' is the causal factor from which all states arise. ",
    coverImage: "/images/book-covers/SpectrumOfReality.jpg",
    category: "sufism",
    order: 3,
    featured: true,
    publishedDate: new Date('2018-09-18'),
    purchaseLinks: {
      amazon: "1919826955",
      kindle: "B0C5JKYM37",
      kobo: "https://www.kobo.com/ca/en/ebook/spectrum-of-reality-11",
      apple: "http://books.apple.com/us/book/id6449234865",
      other: [
        {
          name: "Barnes & Noble",
          url: "https://www.barnesandnoble.com/w/spectrum-of-reality-shaykh-fadhlalla-haeri/1131668570",
          geography: "US",
        },
        {
          name: "Takealot",
          url: "https://www.takealot.com/spectrum-of-reality-sufi-insights/PLID54559664",
          geography: "ZA",
        },
        {
          name: "Waterstones",
          url: "https://www.waterstones.com/book/spectrum-of-reality/shaykh-fadhlalla-haeri/neil-douglas-klotz/9781919826950",
          geography: "UK",
        },
      ]
    },
    reviews: "<b>Dr Adnan al Adnani, author of <i>Lights of Consciousness: A Sufi view of Science and Spirituality</i>:</b>\n\n\"The aphorisms, precepts and commentaries presented by Shaykh Fadhlallah Haeri in his new work, Spectrum of Reality, are immensely rewarding. They provide the reader an extraordinarly insightful access into the realm of subtle meanings that underpin the outer realities; and provide not only spiritual nourishment but also an understanding of the vaster, hidden, worlds which enfold the human condition.\"\n\n<b>Dr. Ali Allawi, visiting professor at the National University of Singapore and Kennedy School of Government, Harvard University, Professor, Oxford University and former Minister of Finance, Iraq, Author of The Crisis of <i>Islamic Civilzation</i> and <i>The Occupation of Iraq: Winning the War, Losing the Peace</i>:</b>\n\n\"Spectrum of Reality is a true masterpiece, a life long work, and a very well written book, which is sure to satisfy all those who earnestly yearn to know and understand the actual Meaning of Life, What is the Nature of Reality? and How to Awaken to the Divine Self, that is lying latent in each human being, and waiting to be Realised. I highly recommend this significant and priceless publication for all earnest seekers who wish to understand the Real Truth of the World in which we live.\""
  },
  {
    id: "classical-sufi-teachings",
    title: "Teachings from a Classical Sufi Master",
    author: "Sidi `Ali al-Jamal",
    description: "<b><i>\"Man is a copy of existence and existence is a copy of man. All opposites meet in the human being.\"</b></i>\n\nShaykh Fadhlalla Haeri and Shaykh Hosam Raouf have translated key passages from the writings of Sidi `Ali al-Jamal of Fes, Morocco (d. 1193/4 AH or 1779 CE), who was a great sage of the Shadhiliyya order.\n\nSidi `Ali later became better known through his pupil, Moulay al-`Arabi al-Darqawi, one of the most celebrated eighteenth-century Sufi masters and founder of the Darqawi-Shadhiliyya Tariqa.\n\nThe original Arabic title of this work translates as: ‘Advice to the Seeker on the Path of Asceticism’, or ‘Beautiful Rubies in Understanding the Meaning of Man’.\n\nSelected passages were chosen for this anthology to inspire, guide and make accessible eternal truths to the contemporary seeker.",
    coverImage: "/images/book-covers/TeachingsFromAClassicalSufiMaster.jpg",
    category: "sufism",
    order: 4,
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
    id: "witnessing-perfection",
    title: "Witnessing Perfection",
    description: "<b>Annotated and includes sections of the Holy Qur'an and Prophetic (SAW) Traditions.</b>\n\n<b><i>Witnessing Perfection</b></i> addresses the concerns of those who are aware that an urgent redress in the balance between head and heart is needed and comprehended that this can only be fulfilled by personal spiritual development.\n\nShaykh Fadhlalla Haeri explores the process of spiritual growth starting with the discovery that the basic dynamic in creation is duality and the balance of opposites whose roots are the one cosmic source of all life.\n\n<b><i>Witnessing Perfection</b></i> delves into the universal question of deity and the purpose of life, with the appreciation that these are dilemmas clarified only by the image of unity, wherein all dualities and diversities fuse cohesively. Durable contentment is a result of this perfected vision.",
    coverImage: "/images/book-covers/WitnessingPerfection.jpg",
    category: "sufism",
    order: 5,
    publishedDate: new Date('2021-12-19'),
    purchaseLinks: {
      amazon: "1919897232",
      kindle: "B01J85V8V2",
      kobo: "http://store.kobobooks.com/en-CA/ebook/witnessing-perfection",
      apple: "http://itunes.apple.com/us/book/id1145054429",
      other: [
        {
          name: "Barnes & Noble",
          url: "https://www.barnesandnoble.com/w/witnessing-perfection-shaykh-fadhlalla-haeri/1100066743",
          geography: "US",
        },
        {
          name: "Takealot",
          url: "https://www.takealot.com/witnessing-perfection/PLID90182093",
          geography: "ZA",
        },
        {
          name: "Waterstones",
          url: "https://www.waterstones.com/book/witnessing-perfection/shaykh-fadhlalla-haeri/9781919897233",
          geography: "UK",
        },
      ]
    },
    samplePdfUrl: "/samples/WitnessingPerfection.pdf",
    reviews: "<b>By Hasan Joban</b>\n\nThe quest for lasting, durable happiness and contentment is very much a part of human nature. It could be argued that every human action, no matter how it manifests, is an attempt at echoing this primal impulse for experiencing peace and joy. Occasionally, we manage to capture the blissful moment, only to see it wriggle from our clutches and replaced all-too-quickly by longer periods of agitation, turbulence and anxiety.\n\nIn Witnessing Perfection, Shaykh Fadhlalla Haeri provides a road map for the journey of life that can facilitate the experiencing of this state of durable peace. The opening lines of the Introduction set the scene: \"Lasting fulfilment can only be achieved when an aspect of perfection is perceived within every moment. Every moment contains a glimpse of perfection\".\n\nWhat follows through subsequent pages is the unfolding of a formula, immersed in spiritual wisdom, which discusses such issues as the nature of the self, the relationship between self and soul, the family, civilizations and cultures, and the ultimate goal of personal transformation through self-knowledge. However, it is only by constant reference to an internal unifying essence underpinning everything, Shaykh Fadhlalla points out, that lasting happiness can be experienced. This is a recurring theme. In essence, what we learn is that the more our intentions, thoughts and actions are wedded to this pristine reference point within us, the greater the likelihood of achieving durable bliss. How does this exactly happen? Shaykh Fadhlalla explains:\n\n\"The journey of the spiritual seeker begins by looking for meaning and patterns behind events, feelings and experiences. The compass of this journey is the reference to the essence of life, which is the soul within the human's heart. When all dualities and opposites are seen through this unified lens, all of these experiences and events will change in meaning and significance. Conflicts, difficulties and disappointments will no longer bring about undue suffering and emotional reactions. This new state of authentic understanding enables the person to interact wisely with the outer world, whilst experiencing harmony and ease at heart. The door to the magnificent present moment and the joy therein begins to open\" (p. xv-xvi).\n\nThe book outlines a broad map to reaching this magnificent moment. There is a wealth of teaching emanating from the pages, punctuated by frequent aphorisms that glisten in their wisdom. This book is not meant to be read cover to cover in one sitting and then returned to the bookshelf; instead, it needs to be placed within arm's reach so that it can be delved into again and again for deep and frequent reflection. As the author explains, \"To fully benefit and be transformed by this book you need to read, reflect and apply what touches and benefits you most... Apply what is relevant to you at the time and trust that there is perfection within every situation and experience\". (p. xv).\n\nWhat impact has this book had on me personally? I have had this book for a while now; I refer to it frequently and can say that it has had a deep and transformative impact. One benefit that I would like to share is that I am comforted by the meaning of the self as expounded in the book. It provides me with a map by which to understand the nature of my own emotions, thoughts, desires, anxieties, and so on. This perspective helps me to identify when I might be getting overwhelmed by my own feelings of insecurity and inadequacy, or blaming others for my misfortune, and therefore enables me to change my thinking accordingly. It helps me to reflect upon the feelings of affliction as indicating whether I am aligned to the pristine essence within or not. Thus, rather than reacting in a knee-jerk fashion, I might take a moment to reflect and then act appropriately, as befits the perfect moment! In my view, to be guided to cultivate that attitude alone makes Witnessing Perfection worth having.\n\nThis book comes highly recommended to anyone who is interested in self-knowledge, personal transformation, and a desire to partake in a healthy and balanced life."
  },
  {
    id: 'beginnings-end',
    title: "Beginning's End",
    description: "Beginning's End is a contemporary outlook on the Sufi sciences of self-knowledge, intended for Muslims and non-Muslims alike. The author holds that truth has no end and is eternal, and that is why human beings will seek total freedom, of which material freedom is only a small part. The final freedom is a natural, spontaneous submission and being connected to timelessness, yet experiencing time.\n\n\"This book was written mainly to highlight the truth that if you wish to nourish the heart and nurture the light within, you need to make structural adjustments to your way of life as well as the all-consuming material drive. The book is a challenge to our modern lifestyle that is out of balance.\n\nNow it is being reprinted as the gap widens between the sustainable inner happiness and the ever-lasting outer frenzy.\"-- From the Preface to the Reprinted Edition.",
    coverImage: "/images/book-covers/BeginningsEnd.jpg",
    category: 'sufism',
    order: 6,
    publishedDate: new Date('2020-04-19'),
    purchaseLinks: {
      amazon: "1928329225",
      kindle: "B01ITGN5HQ",
      kobo: "http://store.kobobooks.com/en-CA/ebook/beginning-s-end",
      apple: "http://itunes.apple.com/us/book/id1144690196",
      other: [
        {
          name: "Barnes & Noble",
          url: "https://www.barnesandnoble.com/w/beginnings-end-shaykh-f-haeri/1004072541",
          geography: "US"
        },
        {
            name: "Takealot",
            url: "https://www.takealot.com/beginnings-end/PLID73226946",
            geography: "ZA"
        },
        {
            name: "Waterstones",
            url: "https://www.waterstones.com/book/beginnings-end/shaykh-fadhlalla-haeri/9781928329220",
            geography: "UK"
        }
      ]
    },
    samplePdfUrl: "/samples/BeginningsEnd.pdf"
  },
  {
    id: 'cosmology-self',
    title: "Cosmology of the Self",
    description: " For the serious seeker of Reality, the way to this transcendent knowledge has been clearly indicated by the Prophet: \"<b><i>Whoever knows himself, knows his Lord</b></i>\". Coming to know the inner landscape of the human self is one of the essential foundations for progress on the path of knowledge.\n\nThis book is a practical and accessible distillation of the tawhidi (unitive) Islamic teachings and insights into the map of the human self. Shaykh Fadhlalla Haeri has sought to furnish the reader with the fundamental elements and insights into the make-up of the individual self and how the various elements of spirituality and humanity interact within us.",
    coverImage: "/images/book-covers/CosmologyOfTheSelf.jpg",
    category: 'sufism',
    order: 7,
    publishedDate: new Date('2021-06-19'),
    purchaseLinks: {
      amazon: "0958417652",
      kindle: "B01J4LOCKO",
      kobo: "http://store.kobobooks.com/en-CA/ebook/cosmology-of-the-self",
      apple: "http://itunes.apple.com/us/book/id1144709005",
      other: [
        {
          name: "Barnes & Noble",
          url: "https://www.barnesandnoble.com/w/cosmology-of-the-self-shaykh-fadhlalla-haeri/1111782638",
          geography: "US"
        },
        {
            name: "Takealot",
            url: "https://www.takealot.com/cosmology-of-the-self/PLID73346012",
            geography: "ZA"
        },
        {
            name: "Waterstones",
            url: "https://www.waterstones.com/book/cosmology-of-the-self/shaykh-fadhlalla-haeri/9780958417655",
            geography: "UK"
        }
      ]
    },
    samplePdfUrl: "/samples/CosmologyOfTheSelf.pdf"
  },
  {
    id: 'decree-destiny-revised',
    title: "Decree & Destiny: Free Will or Determinism",
    description: "<b>THIS IS THE REVISED VERSION OF DECREE & DESTINY</b>\n\nFree will or determinism has been the frequent topic of philosophical debate from the early civilizations right through to the present day. Shaykh Fadhlalla Haeri shows how according to Islamic thought the answers to this important question lie in understanding two inseparable spheres of consciousness: the earthly causal and the realm of the Absolute.\n\n'Shaykh Fadhlalla Haeri's book has the great advantage that it presents to the Western reader the deepest aspects of the problems of decree and destiny through the actual words of the Qur'an, the Prophet Muhammad and the Imams of his Household. Many of the Sayings translated in this work, especially those of the Imams, have not been available in such a manner before'. -- From the Foreword by Seyyed Hossein Nasr",
    coverImage: "/images/book-covers/DecreeAndDestinyRevised.jpg",
    category: 'sufism',
    order: 8,
    publishedDate: new Date('2021-06-19'),
    purchaseLinks: {
      kindle: "B01J46EJJ8",
      kobo: "http://store.kobobooks.com/en-CA/ebook/decree-destiny-1",
      apple: "http://itunes.apple.com/us/book/id1144927606",
      other: [
        {
          name: "Barnes & Noble",
          url: "https://www.barnesandnoble.com/w/decree-and-destiny-shaykh-fadhlalla-haeri/1003336784",
          geography: "US"
        },
        {
            name: "Takealot",
            url: "https://www.takealot.com/decree-destiny/PLID33055980",
            geography: "ZA"
        }
      ]
    },
    samplePdfUrl: "/samples/DecreeAndDestinyRevised.pdf"
  },
  {
    id: 'decree-destiny-original',
    title: "Decree & Destiny: The Freedom of No Choice",
    description: "<b>THIS IS THE ORIGINAL VERSION OF DECREE & DESTINY</b>\n\nFree will or determinism has been the frequent topic of philosophical debate from the early civilizations right through to the present day. Shaykh Fadhlalla Haeri shows how according to Islamic thought the answers to this important question lie in understanding two inseparable spheres of consciousness: the earthly causal and the realm of the Absolute.\n\n'Shaykh Fadhlalla Haeri's book has the great advantage that it presents to the Western reader the deepest aspects of the problems of decree and destiny through the actual words of the Qur'an, the Prophet Muhammad and the Imams of his Household. Many of the Sayings translated in this work, especially those of the Imams, have not been available in such a manner before'. -- From the Foreword by Seyyed Hossein Nasr",
    coverImage: "/images/book-covers/DecreeAndDestinyOriginal.jpg",
    category: 'sufism',
    order: 9,
    publishedDate: new Date('2021-06-19'),
    purchaseLinks: {
      kindle: "B01J6QCM4U",
      kobo: "http://store.kobobooks.com/en-CA/ebook/decree-destiny",
      apple: "http://itunes.apple.com/us/book/id1144711393",
    },
    samplePdfUrl: "/samples/DecreeAndDestinyOriginal.pdf"
  },
  {
    id: "happiness-in-life-after-death",
    title: "Happiness in Life and After Death: An Islamic Sufi View",
    description: "In <b><i>Happiness in Life and After Death -- An Islamic Sufi View</b></i>, Shaykh Fadhlalla Haeri provides a lucid and inspiring account of life, death and the hereafter, according to an Islamic Sufi perspective.\n\nThe book opens with a wide-ranging sweep of death and dying as viewed in other cultures and religions -- from ancient Mesopotamian, Egyptian and Zoroastrian sources through to Judaism and Christianity.\n\nBased on the Qur'an and Prophetic message, this book offers a splendid collection of revelations and spiritual teachings that map a basic path towards a wholesome way of living without forgetting death. There is both physical and spiritual death, and death in both instances is seen as a natural bridge from the suffering and delusions of this life to a unifying and clear abode. As the reader is led from birth of the ephemeral self on earth through an unfolding progression towards higher consciousness and awakening to the eternal soul within, constant awareness of one's intimate dual nature takes away much of the fear of death and makes it seem like a familiar companion.",
    coverImage: "/images/book-covers/HappinessInLifeAndAfterDeath.jpg",
    category: "sufism",
    order: 10,
    publishedDate: new Date('2022-05-19'),
    purchaseLinks: {
      amazon: "1928329233",
      kindle: "B01J81DSWI",
      kobo: "http://store.kobobooks.com/en-CA/ebook/happiness-in-life-and-after-death",
      apple: "http://itunes.apple.com/us/book/id1144957454",
      other: [
        {
          name: "Barnes & Noble",
          url: "https://www.barnesandnoble.com/w/happiness-in-life-after-death-shaykh-fadhlalla-haeri/1141638993",
          geography: "US"
        },
        {
            name: "Takealot",
            url: "https://www.takealot.com/happiness-in-life-after-death-an-islamic-sufi-view/PLID91065382",
            geography: "ZA"
        }
      ]
    },
    samplePdfUrl: "/samples/HappinessInLifeAndAfterDeath.pdf",
    reviews: "<b>By J.K.Lafene</b>\n\nThe title of this book is arresting, to say the least. It immediately leads us to reflect on the meaning of happiness in this life and to wonder how it is connected to the afterlife.\n\nMost people, even believers, think of happiness only in terms of satisfaction with this life. If we have no belief in the afterlife, we concentrate on trying to enjoy this life and avoid thinking much about death. If we are believers we usually have a vague idea that we'll either be forgiven and live in heaven or (if we've been very wicked) will be consigned to Hell. But we hope for and expect mercy and take comfort in the belief that the wicked will get their just deserts!\n\nThis book gives us a detailed exposition of the nature of the human being in this life, how what we do here is intimately connected to the next life (the real life), and how we can prepare for what will occur after leaving the body, based on the Islamic Sufi interpretation of the teaching of the Holy Qur'an and hadith of the Prophet (saw) and Imams.(as)\n\nProspective readers may say, \"will this book tell me how I can be happy here and hopefully not fear death?\" the answer is 'Certainly', but not in the way they might imagine -- that is, like a 'self-help' book giving advice on 'attributes of effective people' or such like. Such manuals are indeed useful, but this book makes us realise that 'happiness', which it defines as 'consistent inner contentment and peace' and 'witnessing perfection in every situation', is not achieved without considerable effort; but it is unquestionably worth it!\n\nUltimately happiness in this life is \"to be a friend of God and reliant on the sacred light, which 'brings about joy and is beyond fear or sorrow'\". How? In his description of human nature and levels of consciousness, the author stresses how aligning the self, or ego, with the soul, or higher consciousness, through self-awareness and obedience to God-given laws of behaviour, will lead to stability and inner light. This must be worked on in this life so that we prepare for the next. We cannot be 'happy' in the afterlife if we have been selfish and heedless in this one.\n\nThe last section of the book describes the Qur'anic teachings about the afterlife, the period immediately after death, the resurrection and the ultimate return to Allah. We are told we need have no fear if our self has been aligned to our soul through \"faith, trust in god, good deeds, transformative worship, purity of heart and other religious acts...\" finally we need simply to surrender to the Absolute. On p 125 (of the printed copy of this book) we are told that the Prophet described four qualities which will help us remain in peace on the day of judgment. Read the book to find out!!"
  },
  {
    id: 'chistis-sufi-masters-india',
    title: "The Chishtis: Sufi Masters of India",
    author: "Muneera Haeri",
    description: "The Chishtis are one of the most beloved and enduring of the Sufi Orders, which emerged in the Indian Subcontinent in medieval times. The widespread acceptance of the teachings of Islam in the region was largely due to brotherhoods, such as the Chishtis, rather than through military conquest. The Sufis lived the message of original Islam and by the example of their lives attracted many to their way of being.\n\nThe founder of the order in the Indian Subcontinent was Shaykh Mu`in ad-Din Chishti of Ajmer, commonly known as Gharib Nawaz (Helper of the Poor), whose shrine continues to this day to be a popular place of pilgrimage for Muslim and Hindu alike. Muneera Haeri narrates the lives and teachings of Shaykh Mu`in ad-Din Chishti and five of his key successors, Shaykh Qutb ad-Din Bakhtiyar Kaki, Shaykh Hamid ad-Din Sufi Nagauri, Shaykh Farid ad-Din Mas`ud Ganj-i-Shakar, Shaykh Nizam ad-Din Awliya and Shaykh Nasir ad-Din Mahmud Chiragh-i-Delhi. All Masters from what is fondly remembered as the Golden Age of the Chishtis.\n\nThe book places the teachings of the Chishtiya in its historical perspective, but also emphasises their timeless message of love, compassion and tolerance for all. Their Masters often had dialogues with Hindu and Buddhist men of knowledge. They emphasised the importance of service and charitable acts as a means for self-purification. They fed Muslim and non-Muslim alike. Living as ascetics, they avoided contact with the sultans and their courts. Above all their qawwalis, or spiritual songs, attracted people to Islam.\n\nThe story of Amir Khusrau, the father of qawwalis and his devotion to Shaykh Nizam ad-Din Awliya is one of the many examples given of the impact the Chishti teachings had on celebrated historical personages. Through extracts from contemporary writings, the reader is transported to the gatherings of these medieval Masters and can imbibe the message of eternal Truth, through teachings that are as real and pertinent today as they were to the people of those times.\n\n<i>'The Chishtiya have at last found an articulate voice in English through the personal commitment and literary skill of Muneera Haeri.'</i> -- Bruce B. Lawrence, Professor Emeritus, Duke University.\n\n<br>ABOUT MUNEERA HAERI</b>\n\nMuneera Haeri is of Scottish origin. Born in Malaysia, educated in the U.K., she converted to Islam at the age of twenty-five. Muneera is married to Shaykh Fadhlalla Haeri, a teaching Sufi Shaykh.\n\nMuneera's family has had a long connection with India, spanning two hundred years. She has visited India and Pakistan extensively, and has a great love of both countries, their peoples and history. This is her first book.\n\nHer second book 'Sufi Encounters', which she co-authored with Shaykh Fadhlalla Haeri, was published by Watkins in 2018.",
    coverImage: "/images/book-covers/TheChishtis.jpg",
    category: 'sufism',
    order: 11,
    purchaseLinks: {
      kindle: "B08DMXHYV4",
      kobo: "https://www.kobo.com/ca/en/ebook/the-chishtis",
      apple: "http://books.apple.com/us/book/id1525132211",
    },
    samplePdfUrl: "/samples/The-Chishtis.pdf"
  },
  {
    id: 'courtyard-beloved-healing',
    title: "In the Courtyard of the Beloved There is Healing: A Danish Woman's Journey into Spiritual Islam",
    author: "Inge Haeri",
    description: "<b>(Publisher: Two Bows Books)</b>\n\n'<i>Throughout the journey of my life I have been drawn to the wisdom practices and knowledges that teach us about healing, health and wholeness. For me the whole notion of healing has come to involve the physical, mental and emotional as well as spiritual. In this book I hope to explore with you essential elements of the process of healing from my perspective as a believer in the Oneness of God.</i>' – from the Introduction\n\nThe unusual journey of Inge Haeri's life has exposed her to the rich interior world of the human spirit and its wonders and delights, through Islam and Sufism. In the devotional tradition of the '<i>Kashkool</i>' (<i>Miscellanea</i>), this book is a collection of personal experiences, readings, insight and commentary on the nature of healing the human spirit and keeping it in the best of conditions. Over her lifetime the author has had many encounters with living saints of the Sufi tradition and illuminated teachers from other esoteric traditions, each of which transmitted gifts, insights and blessings. Inge Haeri shares what has touched and influenced her. ",
    coverImage: "/images/book-covers/InTheCourtyard.jpg",
    category: 'sufism',
    order: 12,
    publishedDate: new Date('2021-06-19'),
    purchaseLinks: {
      kindle: "B015DARQT4",
    },
    samplePdfUrl: "/samples/InTheCourtyardOfTheBelovedThereIsHealing.pdf"
  },
  {
    id: 'leaves-sufi-journal',
    title: "Leaves From A Sufi Journal",
    author: "With a Foreword by Shaykh Fadhlalla Haeri",
    description: "<b><i>Leaves From A Sufi Journal</b></i> is a unique collection of articles presenting an outstanding introduction to the areas of Sufism and original Islamic teachings.\n\nThis ageless wisdom is set against the backcloth of a changing world in which the application of this knowledge to one's own life could scarcely be more appropriate.\n\nWritten by both classical and contemporary writers, this compilation includes commentaries on the Qur'anic revelations; the mysteries of faith; inner and outer practices; the lives of prophets and saints; the individual, the family and society and the nature of unity and existence.",
    coverImage: "/images/book-covers/LeavesFromASufiJournal.jpg",
    category: 'sufism',
    order: 13,
    publishedDate: new Date('2021-06-19'),
    purchaseLinks: {
      kindle: "B01J82P0H8",
      kobo: "http://store.kobobooks.com/en-CA/ebook/leaves-from-a-sufi-journal",
      apple: "http://itunes.apple.com/us/book/id1144965939",
    },
    samplePdfUrl: "/samples/LeavesFromASufiJournal.pdf"
  },
  {
    id: "elements-sufism",
    title: "The Elements of Sufism",
    description: "<b>NOTE: The print version of this book has also been published under the title, <i>The Thoughtful Guide to Sufism</i></b>\n\nSufism is the heart of Islam. This introduction to Sufism describes its origins and practices, its historical background and its spread throughout the world.\n\nThe Elements of Sufism explains:<ul><li>Where Sufism originated</li><li>The relationship between Islam and Sufism</li><li>What it means to be a Sufi</li><li>The relevance of Sufism in modern life</li>",
    coverImage: "/images/book-covers/ElementsOfSufism.jpg",
    category: "sufism",
    order: 14,
    publishedDate: new Date('2019-10-19'),
    purchaseLinks: {
      amazon: "1919897062",
      kindle: "B01J81DSUA",
      kobo: "http://store.kobobooks.com/en-CA/ebook/the-elements-of-sufism",
      apple: "http://itunes.apple.com/us/book/id1144990885",
      other: [
        {
          name: "Barnes & Noble",
          url: "https://www.barnesandnoble.com/w/elements-of-sufism-shaykh-fadhlalla-haeri/1100595131",
          geography: "US",
        },
        {
          name: "Takealot",
          url: "https://www.takealot.com/elements-of-sufism/PLID59340947",
          geography: "ZA",
        },
        {
          name: "Waterstones",
          url: "https://www.waterstones.com/book/the-elements-of-sufism/shaykh-fadhlalla-haeri/9781919897066",
          geography: "UK",
        },
      ]
    },
    samplePdfUrl: "/samples/TheElementsOfSufism.pdf",
  },
  {
    id: "garden-of-meaning",
    title: "The Garden of Meaning",
    description: "Human love of beauty, harmony and gardens simply reflects our desire to connect forms, emotions and meanings. Energy and matter are inseparable, so are all beginnings and ends. \"<i>The Garden of Meaning</i>\" expresses the truth of the ever-present Origin of all dualities, pluralities and diversities. Any reflection that elevates the human mind towards higher consciousness is a spiritual exercise. The pointers in this book are like ladders to help the serious reader transcend the limitations of the natural trap of space and time.",
    coverImage: "/images/book-covers/TheGardenOfMeaning.jpg",
    category: "sufism",
    order: 15,
    publishedDate: new Date('2019-11-09'),
    purchaseLinks: {
      amazon: "1919826564",
      kindle: "B089WHVKPN",
      kobo: "https://www.kobo.com/ca/en/ebook/the-garden-of-meaning",
      apple: "http://books.apple.com/us/book/id1517629677",
      other: [
        {
          name: "Barnes & Noble",
          url: "https://www.barnesandnoble.com/w/the-garden-of-meaning-shaykh-fadhlalla-haeri/1134907465",
          geography: "US",
        },
        {
          name: "Takealot",
          url: "https://www.takealot.com/the-garden-of-meaning/PLID60651335",
          geography: "ZA",
        },
        {
          name: "Waterstones",
          url: "https://www.waterstones.com/book/the-garden-of-meaning/shaykh-fadhlalla-haeri/9781919826561",
          geography: "UK",
        },
      ]
    },
    samplePdfUrl: "/samples/TheGardenOfMeaning.pdf",
  },
  {
    id: "journey-of-the-self",
    title: "The Journey of the Self",
    description: "\"<i><b>The Journey of the Self</b> provides a genuine spiritual psychology...We are invited to self-understanding in this book, to psychology and spiritual self-knowledge. Not only are we invited, we are given concrete examples and concrete help in making our way toward that goal.</i>\" -- from the Forward by Robert Frager, founder, Institute of Transpersonal Psychology.\n\nThis unique guide to spiritual psychology presents Western readers with an Islamic concept of personality -- the wellspring of the Enneagram and other Sufi theories of personality. After introducing the basic model of the self, Shaykh Haeri describes a simple yet complete outline of the self's emergence, development, sustenance, and growth toward its highest potential.",
    coverImage: "/images/book-covers/TheJourneyOfTheSelf.jpg",
    category: "sufism",
    order: 16,
    publishedDate: new Date('2019-11-09'),
    purchaseLinks: {
      kindle: "B01J93ZHII",
      kobo: "http://store.kobobooks.com/en-CA/ebook/the-journey-of-the-self",
      apple: "http://itunes.apple.com/us/book/id1145031110",
    },
    samplePdfUrl: "/samples/TheJourneyOfTheSelf.pdf",
  },
  {
    id: "sufi-way-to-self-unfoldment",
    title: "The Sufi Way to Self-Unfoldment",
    description: "\"<i>There can be no doubt that there is only one message in man's heart, to be fulfilled, to live a life that is honorable and fearless, that has within it no darkness, ignorance or abuse.</i>\"\n\nThis book is based on a collection of talks which were given in the eighties in the United States. The sixties and seventies witnessed resurgences in various spheres of mysticism, spirituality and related endeavors or topics, including the manifestation of formal prescriptive Islam in various forms. The reactions were both positive and negative, causing many people to begin to awaken to a better understanding of this ever vibrant faith, the last revealed of the world's great religions.",
    coverImage: "/images/book-covers/TheSufiWayToSelfUnfoldment.jpg",
    category: "sufism",
    order: 17,
    publishedDate: new Date('2019-11-09'),
    purchaseLinks: {
      amazon: "1919826572",
      kindle: "B01J93IIKC",
      kobo: "http://store.kobobooks.com/en-CA/ebook/the-sufi-way-to-self-unfoldment",
      apple: "http://itunes.apple.com/us/book/id1145049185",
    },
    samplePdfUrl: "/samples/TheSufiWaytoSelfUnfoldment.pdf",
    reviews: "<b>By Sadiqa</b>\n\n\"<i>We will not understand the world unless we understand the individual..We will not make headway unless we understand the 'I'...</i>\"\n\nBased on a series of talks given in the 80s, The Sufi Way to Self-Unfoldment is, more than ever, relevant to our times when more and more of us question the purpose of life and values that go beyond materialism.\n\nOver the years, the book's timeless and universal message has appealed to seekers world wide and has been an inspiration and revelation for many, including myself.\n\nI was interested in Islam but found I was unable to 'connect' with what I felt to be a cultural view. I was given The Sufi Way to Self-Unfoldment in its pre-published format -- Self Knowledge.\n\nThe book made complete sense to me. I carried it around for years --highlighted it -- wondering who the author was -- this was before the days of ISBN. I was even teaching Muslim friends from the book, which made absolute sense.\n\nThen -- by 'coincidence' -- I met the author's wife -- who gifted me a copy of a book just published by her husband. It was The Sufi Way to Self-Unfoldment.\n\nShaykh Fadhlalla emphasises the absolute need for self-knowledge as an essential tool for a committed seeker... A simple description is given of all aspects of the self and \"our ultimate purpose in life...to get rid of the 'I'\".\n\nThe book is a must, both for Muslims needing more in-depth explanation of the inner meanings of their rituals, and for non-Muslims, needing clarification of Islamic practices and their ultimate purpose.\n\nA short book, The Sufi Way to Self-Unfoldment can be read in an evening, and re-read for life. I still have my battered copy -- bound together with sellotape. It was instrumental to a profound understanding of the Sufi Islamic teachings. I will never throw it away."
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
    order: 9,
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
    id: "four-journeys",
    title: "The Four Journeys",
    description: "<b><i>\"O human you are struggling towards your Lord and striving until you come to know Him.</b></i>\" Qur'an 84:6\n\nThe notion of the complete human being or the 'Insan al-kamil' was addressed by early Islamic scholars and masters following the model of the Prophet and his exemplary conduct. Prophets, sages, imams and sufi masters have elaborated upon a life fulfilled by enlightenment and God-realisation.\n\nThis experience is the outcome of leaving behind self-illusion, identity and duality. Quality life begins when your direction is clear and you accept responsibility and accountability for your actions. Human needs and desires are endless. Acceptance of this fact is the first step. This is followed by a living faith and trust in God's perfect mercy and justice, irrespective of circumstance. Then comes the security, knowledge and experience of divine guidance through one's own soul and purified heart - a desirable destiny.\n\nAll prophets and messengers have travelled by trust and witnessed the light of Allah at all times. They lived with inner certainty and contentment. The illumined being also experiences the presence of Allah's mercy and grace; such beings can only be in ecstatic gratitude at heart, even when responding to earthly challenges. This is the complete person. Those people who have reached that station are the appropriate guides and role models to be followed. Numerous enlightened masters in the past have guided and helped humanity toward higher consciousness and happiness. Mulla Sadra (d.1640 CE) described the journey of the seeker's ascent into higher consciousness in four stages. In this work I have adopted and modified his four journeys to frame the poetry appropriately.",
    coverImage: "/images/book-covers/TheFourJourneys.jpg",
    category: "poetry",
    order: 4,
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
];

export const getBooksByCategory = (categorySlug: string): Book[] => {
  return books.filter(book => book.category === categorySlug);
};

export const getAllCategories = (): Category[] => {
  return Object.values(categories);
};