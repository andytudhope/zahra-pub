'use client'

import { useState, useEffect } from 'react'
import WorldMap from 'react-svg-worldmap'
import Dialog from '@/components/ui/Dialog'
import { partnersByRegion, Partner } from '@/lib/printPartners'

const PartnerLink = ({ partner }: { partner: Partner }) => (
  <a
    href={partner.href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-black underline"
  >
    {partner.name}
  </a>
)

const regionColors = [
  '#1f77b4', // North America
  '#5370f0ff', // Australia / NZ
  '#f4da17ff', // Brazil
  '#dd850aff', // India
  '#9467bd', // UK
  '#8c564b', // Germany
  '#e377c2', // Italy
  '#7f7f7f', // Sweden
  '#bcbd22', // Netherlands
  '#e64412ff', // Spain
  '#17becf', // Taiwan
  '#2f9b1a', // South Korea
  '#2f1763', // South Africa
  '#219909'  // Africa & Middle East
]

const africaAndMiddleEastCountries = [
  'DZ','EG','LY','MA','SD','TN','EH','AO','BJ','BW','BF','BI','CM','CV',
  'CF','TD','KM','CG','CD','CI','DJ','GQ','ER','ET','GA','GM','GH','GN',
  'GW','KE','LS','LR','MG','MW','ML','MR','MU','YT','MZ','NA','NE','NG',
  'RW','RE','SH','ST','SN','SC','SL','SO','ZA','SS','SZ','TZ','TG','TN',
  'UG','ZM','ZW','AE','SA','IR','IQ','IL','JO','KW','LB','OM','QA','SY',
  'TR','YE','BH'
]

const regionData = [
  { country: 'US', value: 0 },
  { country: 'CA', value: 0 },

  { country: 'AU', value: 1 },
  { country: 'NZ', value: 1 },

  { country: 'BR', value: 2 },
  { country: 'IN', value: 3 },

  { country: 'GB', value: 4 },
  { country: 'DE', value: 5 },
  { country: 'IT', value: 6 },
  { country: 'SE', value: 7 },
  { country: 'NL', value: 8 },
  { country: 'ES', value: 9 },

  { country: 'TW', value: 10 },
  { country: 'KO', value: 11 },

  { country: 'ZA', value: 12 },

  ...africaAndMiddleEastCountries
    .filter(code => code !== 'ZA')
    .map(code => ({ country: code, value: 11 }))
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

      GB: 'UK',
      DE: 'Germany',
      IT: 'Italy',
      SE: 'Sweden',
      NL: 'Netherlands',
      ES: "Spain",

      TW: 'Taiwan',
      KO: 'South Korea',

      ZA: 'South Africa',

      ...Object.fromEntries(
        africaAndMiddleEastCountries
          .filter(code => code !== 'ZA')
          .map(code => [code, 'Africa and Middle East'])
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
