'use client'

import { useState, useEffect } from 'react'
import WorldMap from 'react-svg-worldmap'
import Dialog from '@/components/ui/Dialog'
import { partnersByRegion, Partner } from '@/lib/printPartners'

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
  '#1f77b4', // North America
  '#5370f0ff', // Australia / NZ
  '#f4da17ff', // Brazil
  '#dd850aff', // India
  '#f73c03ff', // China
  '#9467bd', // UK
  '#8c564b', // Germany
  '#e377c2', // Italy
  '#7f7f7f', // Sweden
  '#bcbd22', // Netherlands
  '#e64412ff', // Spain
  '#3c17f4ff', // Poland
  '#17becf', // Taiwan
  '#894005ff', // South Korea
  '#0a9e40ff',  // Japan
  '#b927d6ff', // Singapore
  '#640c07ff', // UAE
  '#045015ff', // Saudi Arabia
  '#d62728', // Turkey
  '#2f1763', // South Africa  
  '#219909'  // Africa & Middle East
]

const middleEastCountries = [
  'BH', 'EG', 'LB', 'OM', 'QA', 'KW', 'JO', 'IL', 'PK', 'PS'
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

  ...middleEastCountries
    .map(code => ({ country: code, value: 20 }))
]

export default function PrintPartnersMap() {
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
      ES: "Spain",
      PL: 'Poland',

      TW: 'Taiwan',
      KR: 'South Korea',
      JP: 'Japan',
      SG: 'Singapore',

      AE: 'United Arab Emirates',
      SA: 'Saudi Arabia',
      TR: 'Turkey',

      ZA: 'South Africa',

      ...Object.fromEntries(
        middleEastCountries
          .map(code => [code, 'Middle East'])
      )
    }

    const region = countryToRegionMap[event.countryCode]
    if (region) setSelectedRegion(region)
  }

  return (
    <div className="max-w-4xl mx-auto pl-[12%]">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Our Print Partners Worldwide
      </h2>

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
          const region = regionData.find(d => d.country === countryCode)
          return {
            fill: regionColors[region?.value ?? -1] || '#ccc',
            stroke: 'white',
            strokeWidth: 0.5,
            cursor: 'pointer'
          }
        }}
      />

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
