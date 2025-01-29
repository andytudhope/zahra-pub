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
    id: "classical-sufi-teachings",
    title: "Teachings from a Classical Sufi Master",
    author: "Sidi `Ali al-Jamal",
    description: "<b><i>\"Man is a copy of existence and existence is a copy of man. All opposites meet in the human being.\"</b></i>\n\nShaykh Fadhlalla Haeri and Shaykh Hosam Raouf have translated key passages from the writings of Sidi `Ali al-Jamal of Fes, Morocco (d. 1193/4 AH or 1779 CE), who was a great sage of the Shadhiliyya order.\n\nSidi `Ali later became better known through his pupil, Moulay al-`Arabi al-Darqawi, one of the most celebrated eighteenth-century Sufi masters and founder of the Darqawi-Shadhiliyya Tariqa.\n\nThe original Arabic title of this work translates as: ‘Advice to the Seeker on the Path of Asceticism’, or ‘Beautiful Rubies in Understanding the Meaning of Man’.\n\nSelected passages were chosen for this anthology to inspire, guide and make accessible eternal truths to the contemporary seeker.",
    coverImage: "/images/book-covers/TeachingsFromAClassicalSufiMaster.jpg",
    category: "sufism",
    order: 1,
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