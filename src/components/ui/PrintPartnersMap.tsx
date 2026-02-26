'use client'

import { useState } from 'react'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import Dialog from '@/components/ui/Dialog'
import { partnersByRegion, Partner } from '@/lib/printPartners'

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'

const PartnerLink = ({ partner }: { partner: Partner }) => {
  if (!partner.href) {
    return <span className="text-black">{partner.name}</span>
  }

  return (
    <a
      href={partner.href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-black underline"
    >
      {partner.name}
    </a>
  )
}

const regionColors = [
  '#1f77b4',   // 0  North America
  '#5370f0ff', // 1  Australia / NZ
  '#f4da17ff', // 2  Brazil
  '#dd850aff', // 3  India
  '#f73c03ff', // 4  China
  '#9467bd',   // 5  UK
  '#8c564b',   // 6  Germany
  '#e377c2',   // 7  Italy
  '#64b5f6',   // 8  Sweden
  '#bcbd22',   // 9  Netherlands
  '#e64412ff', // 10 Spain
  '#3c17f4ff', // 11 Poland
  '#17becf',   // 12 Taiwan
  '#894005ff', // 13 South Korea
  '#0a9e40ff', // 14 Japan
  '#b927d6ff', // 15 Singapore
  '#640c07ff', // 16 UAE
  '#045015ff', // 17 Saudi Arabia
  '#d62728',   // 18 Turkey
  '#2f1763',   // 19 South Africa
  '#219909',   // 20 Middle East
]

const middleEastCountries = [
  'BH', 'EG', 'LB', 'OM', 'QA', 'KW', 'JO', 'IL', 'PK', 'PS',
]

const regionData = [
  { country: 'US', value: 0 },
  { country: 'CA', value: 0 },

  { country: 'AU', value: 1 },
  { country: 'NZ', value: 1 },

  { country: 'BR', value: 2 },
  { country: 'IN', value: 3 },
  { country: 'CN', value: 4 },

  { country: 'GB', value: 5 },
  { country: 'DE', value: 6 },
  { country: 'IT', value: 7 },
  { country: 'SE', value: 8 },
  { country: 'NL', value: 9 },
  { country: 'ES', value: 10 },
  { country: 'PL', value: 11 },

  { country: 'TW', value: 12 },
  { country: 'KR', value: 13 },
  { country: 'JP', value: 14 },
  { country: 'SG', value: 15 },

  { country: 'AE', value: 16 },
  { country: 'SA', value: 17 },
  { country: 'TR', value: 18 },

  { country: 'ZA', value: 19 },

  ...middleEastCountries.map(code => ({ country: code, value: 20 })),
]

// ISO 3166-1 numeric (used by world-atlas) → alpha-2, for all countries in regionData
const numericToAlpha2: Record<string, string> = {
  '840': 'US', '124': 'CA',
  '036': 'AU', '554': 'NZ',
  '076': 'BR', '356': 'IN', '156': 'CN',
  '826': 'GB', '276': 'DE',  '380': 'IT',
  '752': 'SE', '528': 'NL',  '724': 'ES', '616': 'PL',
  '158': 'TW', '410': 'KR',  '392': 'JP', '702': 'SG',
  '784': 'AE', '682': 'SA',  '792': 'TR',
  '710': 'ZA',
  '048': 'BH', '818': 'EG',  '422': 'LB', '512': 'OM',
  '634': 'QA', '414': 'KW',  '400': 'JO', '376': 'IL',
  '586': 'PK', '275': 'PS',
}

const countryToRegionMap: Record<string, string> = {
  US: 'North America and Canada',
  CA: 'North America and Canada',
  AU: 'Australia',
  NZ: 'Australia',
  BR: 'Brazil',
  IN: 'India',
  CN: 'China',
  GB: 'UK',
  DE: 'Germany',
  IT: 'Italy',
  SE: 'Sweden',
  NL: 'Netherlands',
  ES: 'Spain',
  PL: 'Poland',
  TW: 'Taiwan',
  KR: 'South Korea',
  JP: 'Japan',
  SG: 'Singapore',
  AE: 'United Arab Emirates',
  SA: 'Saudi Arabia',
  TR: 'Turkey',
  ZA: 'South Africa',
  ...Object.fromEntries(middleEastCountries.map(code => [code, 'Middle East'])),
}

export default function PrintPartnersMap() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null)

  return (
    <div className="max-w-4xl mx-auto pl-[12%]">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Our Print Partners Worldwide
      </h2>

      <ComposableMap
        projection="geoEqualEarth"
        projectionConfig={{ scale: 153 }}
        style={{ width: '100%', height: 'auto' }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const alpha2 = numericToAlpha2[String(geo.id)]
              const entry = alpha2 ? regionData.find(d => d.country === alpha2) : undefined
              const fill = entry !== undefined ? regionColors[entry.value] : '#ccc'

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={fill}
                  stroke="white"
                  strokeWidth={0.5}
                  className={alpha2 ? 'cursor-pointer' : 'cursor-default'}
                  onClick={() => {
                    if (!alpha2) return
                    const region = countryToRegionMap[alpha2]
                    if (region) setSelectedRegion(region)
                  }}
                />
              )
            })
          }
        </Geographies>
      </ComposableMap>

      {selectedRegion && (
        <Dialog open onClose={() => setSelectedRegion(null)}>
          <div className="text-lg font-semibold mb-4">
            {selectedRegion}
          </div>

          <div className="max-h-[70vh] overflow-y-auto space-y-1 text-sm">
            {(partnersByRegion[selectedRegion] || []).map(partner => (
              <div key={partner.name}>
                <PartnerLink partner={partner} />
              </div>
            ))}
          </div>
        </Dialog>
      )}
    </div>
  )
}
