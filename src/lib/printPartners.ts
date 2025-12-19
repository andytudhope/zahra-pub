export type Partner = { name: string; href: string }

export const partnersByRegion: Record<string, Partner[]> = {
  'North America and Canada': [
    { name: 'Amazon', href: 'https://www.amazon.com/s?k=shaykh+fadhlalla+haeri' },
    { name: 'Barnes & Noble', href: 'https://www.barnesandnoble.com/s/shaykh%20fadhlalla%20haeri' },
    { name: 'Indigo (Canada)', href: 'https://www.indigo.ca/en-ca/search?q=shaykh+fadhlalla+haeri' },
    { name: 'Target.com', href: 'https://www.target.com/s?searchTerm=shaykh+fadhlalla+haeri' },
    { name: 'Walmart.com', href: 'https://www.walmart.com/search?q=shaykh+fadhlalla+haeri' },
    { name: "Bookshop.org", href: 'https://bookshop.org/search?keywords=shaykh+fadhlalla+haeri' },
    { name: "eBay", href: 'https://www.ebay.com/sch/i.html?_nkw=shaykh+fadhlalla+haeri' },
    { name: "Alibris", href: 'https://www.alibris.com/booksearch?mtype=B&keyword=shaykh+fadhlalla+haeri' },
    { name: "AbeBooks", href: 'https://www.abebooks.com/servlet/SearchResults?sts=t&cm_sp=SearchF-_-home-_-Results&an=shaykh+fadhlalla+haeri' },
    { name: "Book Bug", href: 'https://bookbugkalamazoo.com/search?q=shaykh%20fadhlalla%20haeri' },
    { name: "Copperfields", href: 'https://www.copperfieldsbooks.com/search/site/shaykh%20fadhlalla%20haeri' },
    { name: "Hickory Stick Bookshop", href: 'https://www.hickorystickbookshop.com/?s=shaykh+fadhlalla+haeri' },
    { name: "Intellectual Bookshop", href: 'https://www.intellectualbookshop.com/search/site/shaykh%20fadhlalla%20haeri' },
    { name: "Magers & Quin", href: 'https://www.magersandquinn.com/Books?keyword=shaykh%20fadhlalla%20haeri' },
    { name: "RJ Julia Booksellers", href: 'https://rjjulia.com/search?q=shaykh%20fadhlalla%20haeri' },
    { name: "Penguin Bookshop", href: 'https://penguinbookshop.com/search?q=shaykh%20fadhlalla%20haeri' },
    { name: "Shermans Maine Cost Book Shops", href: 'https://www.shermans.com/search?q=shaykh%20fadhlalla%20haeri' },
    { name: "The Reading Bug", href: 'https://www.thereadingbug.com/search/site/shaykh%20fadhlalla%20haeri' },
    { name: "Thrift Books", href: 'https://www.thriftbooks.com/browse/?b.search=shaykh%20fadhlalla%20haeri' },
    { name: "Yardstick", href: 'https://yardstickalgoma.com/search?q=shaykh%20fadhlalla%20haeri' }
  ],

  UK: [
    { name: 'Amazon.co.uk', href: 'https://www.amazon.co.uk/s?k=shaykh+fadhlalla+haeri' },
    { name: 'Blackwell', href: 'https://blackwells.co.uk/bookshop/search/?format=&keyword=shaykh+fadhlalla+haeri' },
    { name: 'Foyles', href: 'https://www.foyles.co.uk/search?term=shaykh+fadhlalla+haeri' },
    { name: 'Waterstones', href: 'https://www.waterstones.com/books/search/term/shaykh+fadhlalla+haeri' },
    { name: 'eBay UK', href: 'https://www.ebay.co.uk/sch/i.html?_nkw=shaykh+fadhlalla+haeri' },
    { name: 'Books Please', href: 'https://booksplea.se/search.php?search_query=shaykh+fadhlalla+haeri&section=product' },
    { name: "Gardners", href: "https://www.gardners.com/"}
  ],

  Germany: [
    { name: "Medimops", href: 'https://www.medimops.de/produkte-C0/?fcIsSearch=1&searchparam=shaykh+fadhlalla+haeri' }
  ],

  Italy: [
    { name: 'IBS.it', href: 'https://www.ibs.it/algolia-search?ts=as&query=shaykh%20fadhlalla%20haeri' },
    { name: 'La Feltrinelli', href: 'https://www.lafeltrinelli.it/algolia-search?ts=as&query=shaykh%20fadhlalla%20haeri'},
  ],

  Sweden: [
    { name: 'Adlibris', href: 'https://www.adlibris.com/se/sok?q=shaykh+fadhlalla+haeri' },
    { name: 'Bokus', href: 'https://www.bokus.com/cgi-bin/product_search.cgi?search_word=shaykh+fadhlalla+haeri' },
    { name: 'Akademibokhandeln', href: 'https://www.akademibokhandeln.se/search?q=shaykh%20fadhlalla%20haeri' }
  ],

  Spain: [
    { name: "Agapea", href: "https://www.agapea.com/buscar/buscador.php?texto=shaykh+fadhlalla+haeri" }
  ],

  Netherlands: [
    { name: 'Bol.com', href: 'https://www.bol.com/nl/nl/s/?searchtext=shaykh+fadhllala+haeri' }
  ],

  Taiwan: [
    { name: 'Books.com.tw', href: 'https://search.books.com.tw/search/query/key/shaykh%20fadhlalla%20haeri/cat/all' },
  ],

  Australia: [
    { name: 'Amazon AU', href: 'https://www.amazon.com.au/s?k=shaykh+fadhlalla+haeri' },
    { name: 'Booktopia', href: 'https://www.booktopia.com.au/search?keywords=shaykh%20fadhlalla%20haeri' },
    { name: 'Fishpond', href: 'https://www.fishpond.com.au/q/shaykh+fadhlalla+haeri?rid=1766150729' },
    { name: 'The Nile', href: 'https://www.thenile.com.au/search?s.q=shaykh%20fadhlalla%20haeri' }
  ],

  'South Africa': [
    { name: 'Takealot.com', href: 'https://www.takealot.com/all?qsearch=shaykh%20fadhlalla%20haeri' },
    { name: 'Exclusive Books', href: 'https://exclusivebooks.co.za/search?q=shaykh+fadhlalla+haeri&filter.v.availability=1' },
    { name: "Loot", href: 'https://www.loot.co.za/search?cat=qb&terms=shaykh%20fadhlalla%20haeri' },
    { name: "Amazon South Africa", href: 'https://www.amazon.co.za/s?k=shaykh+fadhlalla+haeri' }
  ],

  'South Korea': [ 
    { name: 'Aladin', href: 'https://www.aladin.co.kr/search/wsearchresult.aspx?SearchTarget=All&SearchWord=shaykh+fadhlalla+haeri' }, 
    { name: 'Coupang', href: 'https://www.coupang.com/np/search?component=&q=shaykh+fadhlalla+haeri' }, 
    { name: 'Kyobo', href: 'https://search.kyobobook.co.kr/search?keyword=shaykh+fadhlalla+haeri&gbCode=TOT&target=total' }, 
    { name: 'Yes24', href: 'https://www.yes24.com/product/search?domain=ALL&query=shaykh%2520fadhlalla%2520haeri' } 
  ],

  Brazil: [ 
    { name: 'Amazon Brazil', href: 'https://www.amazon.com.br/s?k=shaykh+fadhlalla+haeri' }, 
    { name: 'Estante Virtual', href: 'https://www.estantevirtual.com.br/busca?nsCat=Natural&q=shaykh%20fadhlalla%20haeri&searchField=titulo-autor' },
],

  India: [ 
    { name: 'Amazon.in', href: 'https://www.amazon.in/s?k=shaykh+fadhlalla+haeri' }, 
    { name: 'Flipkart', href: 'https://www.flipkart.com' },
    { name: 'Bookscape', href: 'https://bookscape.com/search/shaykh%20fadhlalla%20haeri?page=1&searchKeyWord=shaykh%20fadhlalla%20haeri&searchedBy=&sort=' }
  ],

  'Africa and Middle East': [ 
    { name: 'Akiba Dba Of Hinomaru', href: 'https://example.com' }, 
    { name: 'Akindemy', href: 'https://example.com' }, 
    { name: 'Al Falah Bookshop', href: 'https://example.com' }, 
    { name: 'Al Maya', href: 'https://example.com' }, 
    { name: 'Al Shegrey', href: 'https://example.com' }, 
    { name: 'Al-Rowad', href: 'https://example.com' }, 
    { name: 'All Prints Llc', href: 'https://example.com' }, 
    { name: 'American University Of Sharjah', href: 'https://example.com' }, 
    { name: 'Animex', href: 'https://example.com' }, 
    { name: 'Arif Books Distribution', href: 'https://example.com' }, 
    { name: 'Bookish Nkc', href: 'https://example.com' }, 
    { name: 'Ciel Book', href: 'https://example.com' }, 
    { name: 'Ciel Lebanon', href: 'https://example.com' }, 
    { name: 'Collage Talent Center', href: 'https://example.com' }, 
    { name: 'Curl Book & Coffee Shop', href: 'https://example.com' }, 
    { name: 'Dar Al-Fajr', href: 'https://example.com' }, 
    { name: 'Dar Al Hayat Bookshop', href: 'https://example.com' }, 
    { name: 'Dar Kreidieh Publishing & Distribution', href: 'https://example.com' }, 
    { name: 'Egyptian American Book Center', href: 'https://example.com' }, 
    { name: 'Gopi', href: 'https://example.com' }, 
    { name: 'House Of Wisdom', href: 'https://example.com' }, 
    { name: 'Ingram Test Account Internal Only', href: 'https://example.com' }, 
    { name: 'Jabal Amman Publishers', href: 'https://example.com' }, 
    { name: 'Jarir Bookstore / Jarir Marketing Company', href: 'https://www.jarir.com' }, 
    { name: 'Jashanmal - Bahrain', href: 'https://example.com' }, 
    { name: 'Jashanmal - Dubai', href: 'https://example.com' }, 
    { name: 'Jordan Distribution Agency', href: 'https://example.com' }, 
    { name: 'Kinokuniya Dubai', href: 'https://example.com' }, 
    { name: 'Kiss By Nature Ltd', href: 'https://example.com' }, 
    { name: 'Lavish Livings International', href: 'https://example.com' }, 
    { name: 'Liberty Books', href: 'https://example.com' }, 
    { name: 'Librairie Antoine Sal (Culture & Co)', href: 'https://example.com' }, 
    { name: 'Little Ones Bookbarn', href: 'https://example.com' }, 
    { name: 'Magrudy Enterprises', href: 'https://example.com' }, 
    { name: 'Manga Bound', href: 'https://example.com' }, 
    { name: 'Neel Wafurat', href: 'https://example.com' }, 
    { name: 'Neo Books', href: 'https://example.com' }, 
    { name: 'Ninety Nine Books Trading', href: 'https://example.com' }, 
    { name: 'Noor Al Samaa Bookshop', href: 'https://example.com' }, 
    { name: 'Noveltea Bookshop', href: 'https://example.com' }, 
    { name: 'Pak Manifesto Enterprises', href: 'https://example.com' }, 
    { name: 'Pan World', href: 'https://example.com' }, 
    { name: 'Paper Trails', href: 'https://example.com' }, 
    { name: 'Perfect Purity General Trading Llc', href: 'https://example.com' }, 
    { name: 'Progressive International Agencies', href: 'https://example.com' }, 
    { name: 'Rewardz', href: 'https://example.com' }, 
    { name: 'Sanad Books', href: 'https://example.com' }, 
    { name: 'Sharjah Department Of Culture', href: 'https://example.com' }, 
    { name: 'Sharjah House Of Archives', href: 'https://example.com' }, 
    { name: 'Sharjah Performing Arts Academy', href: 'https://example.com' }, 
    { name: 'Sharjah Public Libraries', href: 'https://example.com' }, 
    { name: 'Stm Middle East', href: 'https://example.com' }, 
    { name: 'Tanany Book Services', href: 'https://example.com' }, 
    { name: 'The Library Division', href: 'https://example.com' }, 
    { name: 'Totsnbabies / Lara Salem', href: 'https://example.com' }, 
    { name: 'University Book Centers Company', href: 'https://example.com' }, 
    { name: 'Wanli Online Publishing Fze', href: 'https://example.com' }, 
    { name: 'White Lion General Trading', href: 'https://example.com' }, 
    { name: 'Wisdom Books', href: 'https://example.com' }, 
    { name: 'Zoom Books', href: 'https://example.com' } 
]
}
