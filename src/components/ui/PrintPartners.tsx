'use client';

import { useState, ReactNode } from 'react';
import { ChevronDown, ChevronUp, Globe } from 'lucide-react';

// Define types for our data structure
interface RegionData {
  icon: ReactNode;
  partners: string[];
  subRegions?: {
    [key: string]: {
      icon: ReactNode;
      partners: string[];
    }
  };
}

type RegionsType = {
  [key: string]: RegionData;
}

export default function PrintPartners() {
  const [expandedRegion, setExpandedRegion] = useState<string | null>(null);
  const [expandedSubRegion, setExpandedSubRegion] = useState<{[key: string]: string | null}>({});
  
  const regions: RegionsType = {
    'Africa & Middle East': {
      icon: <Globe className="text-blue-600" size={20} />,
      partners: [
        'Akiba Dba Of Hinomaru', 'Akindemy', 'Al Falah Bookshop', 'Al Maya', 'Al Shegrey', 
        'Al-Rowad', 'All Prints Llc', 'American University Of Sharjah', 'Animex', 
        'Arif Books Distribution', 'Bookish Nkc', 'Ciel Book', 'Ciel Lebanon', 
        'Collage Talent Center', 'Curl Book & Coffee Shop', 'Dar Al-Fajr', 
        'Dar Al Hayat Bookshop', 'Dar Kreidieh Publishing & Distribution', 
        'Egyptian American Book Center', 'Gopi', 'House Of Wisdom', 
        'Ingram Test Account Internal Only', 'Jabal Amman Publishers', 
        'Jarir Bookstore / Jarir Marketing Company', 'Jashanmal - Bahrain', 
        'Jashanmal - Dubai', 'Jordan Distribution Agency', 'Kinokuniya Dubai', 
        'Kiss By Nature Ltd', 'Lavish Livings International', 'Liberty Books', 
        'Librairie Antoine Sal (Culture & Co)', 'Little Ones Bookbarn', 
        'Magrudy Enterprises', 'Manga Bound', 'Neel Wafurat', 'Neo Books', 
        'Ninety Nine Books Trading', 'Noor Al Samaa Bookshop', 'Noveltea Bookshop', 
        'Pak Manifesto Enterprises', 'Pan World', 'Paper Trails', 
        'Perfect Purity General Trading Llc', 'Progressive International Agencies', 
        'Rewardz', 'Sanad Books', 'Sharjah Department Of Culture', 
        'Sharjah House Of Archives', 'Sharjah Performing Arts Academy', 
        'Sharjah Public Libraries', 'Stm Middle East', 'Tanany Book Services', 
        'The Library Division', 'Totsnbabies / Lara Salem', 'University Book Centers Company', 
        'Wanli Online Publishing Fze', 'White Lion General Trading', 'Wisdom Books', 'Zoom Books',
        // Added South Africa partners
        'BalaKudu.com', 'Takealot.com'
      ]
    },
    'Asia': {
      icon: <Globe className="text-blue-600" size={20} />,
      partners: [],
      subRegions: {
        'China': {
          icon: <span>🇨🇳</span>,
          partners: ['Dang Dang', 'JD.com']
        },
        'India': {
          icon: <span>🇮🇳</span>,
          partners: ['Amazon.in', 'Flipkart']
        },
        'South Korea': {
          icon: <span>🇰🇷</span>,
          partners: ['Aladin', 'Coupang', 'Kyobo', 'Yes24']
        }
      }
    },
    'South America': {
      icon: <Globe className="text-blue-600" size={20} />,
      partners: [
        'Amazon Brazil', 'Estante Virtual', 'Selected independent bookstores', 
        'Submarino (the largest Brazilian e-commerce)'
      ]
    },
    'North America': {
      icon: (
        <div className="flex">
          <span className="mr-1">🇺🇸</span>
          <span>🇨🇦</span>
        </div>
      ),
      partners: [
        'Amazon', 'Barnes & Noble', 'Chapters / Indigo (Canada)', 'E-commerce companies',
        'Independent bookstores', 'Libraries', 'Retailers', 'Schools', 'Target.com',
        'Walmart.com', 'and other well-known book retailers and wholesalers across North America.'
      ]
    },
    'Australia & New Zealand': {
      icon: (
        <div className="flex">
          <span className="mr-1">🇦🇺</span>
          <span>🇳🇿</span>
        </div>
      ),
      partners: [
        'ALS', 'Amazon AU', 'Booktopia', 'Fishpond', 'James Bennett', 'Peter Pal', 'The Nile'
      ]
    },
    
    'UK & Europe': {
      icon: (
        <div className="flex">
          <span className="mr-1">🇬🇧</span>
          <span>🇪🇺</span>
        </div>
      ),
      partners: [
        'Adlibris', 'Agapea', 'Amazon.co.uk', 'Aphrohead', 'Blackwell', 'Books Express',
        'Coutts Information Services Ltd', 'Designarta Books', 'Eden Interactive Ltd',
        'Foyles', 'Gardners', 'Mallory International', 'Paperback Shop Ltd',
        'Superbookdeals', 'The Book Community Ltd', 'Trust Media Distribution (formerly STL)',
        'Waterstones', 'Wrap Distribution',
        // Added from Poland
        'Bernardinum', 'Copernicus Center Press', 'Czytam.pl', 'Edra Urban & Partner',
        'Empik.com', 'Gigant.pl', 'Krainaksiazek.pl', 'Pascal', 'WUW', 'Zwierciadło',
        // Added from Italy
        'IBS.it', 'Inmondadori.it', 'Libraccio.it', 'Libreriarizzoli.it',
        // Added from Germany
        'Books on Demand'
      ]
    }
  };

  const toggleRegion = (region: string) => {
    setExpandedRegion(expandedRegion === region ? null : region);
  };

  const toggleSubRegion = (parentRegion: string, subRegion: string) => {
    setExpandedSubRegion(prev => ({
      ...prev,
      [parentRegion]: prev[parentRegion] === subRegion ? null : subRegion
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Our Print Partners Worldwide</h2>
      
      <div className="space-y-2">
        {Object.keys(regions).map((region) => (
          <div key={region} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleRegion(region)}
              className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center space-x-3">
                {regions[region].icon}
                <span className="font-medium text-lg text-gray-800">{region}</span>
                <span className="text-sm text-gray-500">
                  {regions[region].subRegions 
                    ? Object.values(regions[region].subRegions).reduce((total, subRegion) => total + subRegion.partners.length, 0) + ' partners'
                    : `(${regions[region].partners.length} partners)`}
                </span>
              </div>
              {expandedRegion === region ? (
                <ChevronUp size={20} className="text-gray-600" />
              ) : (
                <ChevronDown size={20} className="text-gray-600" />
              )}
            </button>
            
            {expandedRegion === region && (
              <div className="p-4 bg-white">
                {regions[region].subRegions ? (
                  // Display subregions if they exist
                  <div className="space-y-3">
                    {Object.keys(regions[region].subRegions!).map((subRegion) => (
                      <div key={subRegion} className="border border-gray-100 rounded-lg overflow-hidden">
                        <button
                          onClick={() => toggleSubRegion(region, subRegion)}
                          className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 transition-colors"
                        >
                          <div className="flex items-center space-x-3">
                            {regions[region].subRegions![subRegion].icon}
                            <span className="font-medium text-gray-800">{subRegion}</span>
                            <span className="text-sm text-gray-500">
                              ({regions[region].subRegions![subRegion].partners.length} partners)
                            </span>
                          </div>
                          {expandedSubRegion[region] === subRegion ? (
                            <ChevronUp size={16} className="text-gray-600" />
                          ) : (
                            <ChevronDown size={16} className="text-gray-600" />
                          )}
                        </button>
                        
                        {expandedSubRegion[region] === subRegion && (
                          <div className="p-3 bg-white">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                              {regions[region].subRegions![subRegion].partners.map((partner) => (
                                <div key={partner} className="p-2 bg-gray-50 rounded">
                                  <p className="text-gray-700">{partner}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  // Display partners directly if no subregions
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {regions[region].partners.map((partner) => (
                      <div key={partner} className="p-2 bg-gray-50 rounded">
                        <p className="text-gray-700">{partner}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}