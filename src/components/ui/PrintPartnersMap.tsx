'use client'

import { useState, useEffect } from 'react'
import WorldMap from 'react-svg-worldmap'
import Dialog from '@/components/ui/Dialog'

const regionColors = [
  '#1f77b4', // North America and Canada
  '#ff7f0e', // Australia & New Zealand
  '#2ca02c', // Brazil
  '#d62728', // China
  '#9467bd', // Germany
  '#8c564b', // India
  '#e377c2', // Italy
  '#7f7f7f', // Poland
  '#bcbd22', // South Korea
  '#17becf', // United Kingdom & Europe
  '#2f9b1a', // South Africa
  '#219909'  // Africa and Middle East
]

const africaAndMiddleEastCountries = [
    'DZ', 'EG', 'LY', 'MA', 'SD', 'TN', 'EH', 'AO', 'BJ', 'BW', 'BF', 'BI', 'CM', 'CV',
    'CF', 'TD', 'KM', 'CG', 'CD', 'CI', 'DJ', 'GQ', 'ER', 'ET', 'GA', 'GM', 'GH', 'GN',
    'GW', 'KE', 'LS', 'LR', 'MG', 'MW', 'ML', 'MR', 'MU', 'YT', 'MZ', 'NA', 'NE', 'NG',
    'RW', 'RE', 'SH', 'ST', 'SN', 'SC', 'SL', 'SO', 'ZA', 'SS', 'SZ', 'TZ', 'TG', 'TN',
    'UG', 'ZM', 'ZW', 'AE', 'SA', 'IR', 'IQ', 'IL', 'JO', 'KW', 'LB', 'OM', 'QA', 'SY',
    'TR', 'YE', 'BH'
]
  
const europeCountries = [
    'AL', 'AD', 'AT', 'BY', 'BE', 'BA', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR',
    'DE', 'GR', 'HU', 'IS', 'IE', 'IT', 'XK', 'LV', 'LI', 'LT', 'LU', 'MT', 'MD', 'MC',
    'ME', 'NL', 'MK', 'NO', 'PL', 'PT', 'RO', 'SM', 'RS', 'SK', 'SI', 'ES', 'SE',
    'CH', 'UA', 'GB', 'VA'
]
  
const regionData = [
    { country: 'US', value: 0 },
    { country: 'CA', value: 0 },
    { country: 'AU', value: 1 },
    { country: 'NZ', value: 1 },
    { country: 'BR', value: 2 },
    { country: 'CN', value: 3 },
    { country: 'DE', value: 4 },
    { country: 'IN', value: 5 },
    { country: 'IT', value: 6 },
    { country: 'PL', value: 7 },
    { country: 'KR', value: 8 },
    { country: 'ZA', value: 10 },
    ...africaAndMiddleEastCountries.filter(code => code !== 'ZA').map(code => ({ country: code, value: 11 })),
    ...europeCountries.map(code => ({ country: code, value: 9 }))
]

const partnersByRegion: Record<string, string[]> = {
  'North America and Canada': [
    'Amazon', 'Barnes & Noble', 'Chapters / Indigo (Canada)', 'E-commerce companies',
    'Independent bookstores', 'Libraries', 'Retailers', 'Schools', 'Target.com',
    'Walmart.com', 'and other well-known book retailers and wholesalers across North America.'
  ],
  'Australia & New Zealand': [
    'ALS', 'Amazon AU', 'Booktopia', 'Fishpond', 'James Bennett', 'Peter Pal', 'The Nile'
  ],
  'Brazil': [
    'Amazon Brazil', 'Estante Virtual', 'Selected independent bookstores',
    'Submarino (the largest Brazilian e-commerce)'
  ],
  'China': ['Dang Dang', 'JD.com'],
  'Germany': ['Books on Demand'],
  'India': ['Amazon.in', 'Flipkart'],
  'Italy': ['IBS.it', 'Inmondadori.it', 'Libraccio.it', 'Libreriarizzoli.it'],
  'Poland': [
    'Bernardinum', 'Copernicus Center Press', 'Czytam.pl', 'Edra Urban & Partner',
    'Empik.com', 'Gigant.pl', 'Krainaksiazek.pl', 'Pascal', 'WUW', 'Zwierciadło'
  ],
  'South Korea': ['Aladin', 'Coupang', 'Kyobo', 'Yes24'],
  'South Africa': ['BalaKudu.com', 'Takealot.com'],
  'United Kingdom & Europe': [
    'Adlibris', 'Agapea', 'Amazon.co.uk', 'Aphrohead', 'Blackwell', 'Books Express',
    'Coutts Information Services Ltd', 'Designarta Books', 'Eden Interactive Ltd',
    'Foyles', 'Gardners', 'Mallory International', 'Paperback Shop Ltd',
    'Superbookdeals', 'The Book Community Ltd', 'Trust Media Distribution (formerly STL)',
    'Waterstones', 'Wrap Distribution'
  ],
  'Africa and Middle East': [
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
    'Wanli Online Publishing Fze', 'White Lion General Trading', 'Wisdom Books', 'Zoom Books'
  ]
}


export default function WorldMapWithPartners() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null)
  const [dimensions, setDimensions] = useState({ width: 640, height: 480 })

  useEffect(() => {
    const updateDimensions = () => {
      if (window.innerWidth < 640) {
        setDimensions({ width: 270, height: 202.5 })
      } else if (window.innerWidth < 768) {
        setDimensions({ width: 620.25, height: 465.1875 })
      } else {
        setDimensions({ width: 640, height: 480 })
      }
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  const handleClick = (event: { countryCode: string }) => {
    const country = event.countryCode
    const countryToRegionMap: Record<string, string> = {
        US: 'North America and Canada',
        CA: 'North America and Canada',
        AU: 'Australia & New Zealand',
        NZ: 'Australia & New Zealand',
        BR: 'Brazil',
        CN: 'China',
        DE: 'Germany',
        IN: 'India',
        IT: 'Italy',
        PL: 'Poland',
        KR: 'South Korea',
        ZA: 'South Africa',
        ...Object.fromEntries(
          africaAndMiddleEastCountries.filter(code => code !== 'ZA').map(code => [code, 'Africa and Middle East'])
        ),
        ...Object.fromEntries(
          europeCountries.map(code => [code, 'United Kingdom & Europe'])
        )
    }

    const region = countryToRegionMap[country]
    if (region) setSelectedRegion(region)
  }

  return (
    <div className='max-w-4xl mx-auto pl-[12%]'>
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Our Print Partners Worldwide</h2>
          <WorldMap
            size={dimensions.width}
            data={regionData}
            color="#ccc"
            tooltipTextFunction={() => ''}
            onClickFunction={handleClick}
            backgroundColor="transparent"
            valuePrefix=""
            valueSuffix=""
            styleFunction={({ countryCode }: { countryCode: string }) => {
                const region = regionData.find((d) => d.country === countryCode)
                return {
                  fill: regionColors[region?.value ?? -1] || '#ccc',
                  stroke: 'white',
                  strokeWidth: 0.5,
                  cursor: 'pointer'
                }
              }}          
          />

    {selectedRegion && (
    <Dialog open={!!selectedRegion} onClose={() => setSelectedRegion(null)}>
        <div className="text-lg font-semibold mb-4">
        {selectedRegion}
        </div>
        <div className="max-h-[70vh] overflow-y-auto space-y-1 text-sm">
        {(partnersByRegion[selectedRegion] || []).map((partner) => (
            <div key={partner} className="text-sm">
              {partner}
            </div>
          ))}
        </div>
    </Dialog>
    )}
    </div>
  )
}
