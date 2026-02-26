declare module 'react-simple-maps' {
  import { ReactNode, SVGProps, CSSProperties } from 'react'

  interface ComposableMapProps {
    projection?: string
    projectionConfig?: Record<string, unknown>
    style?: CSSProperties
    width?: number
    height?: number
    children?: ReactNode
  }

  interface GeographiesChildProps {
    geographies: GeoFeature[]
  }

  interface GeoFeature {
    rsmKey: string
    id: string | number
    properties: Record<string, unknown>
    [key: string]: unknown
  }

  interface GeographiesProps {
    geography: string | object
    children: (props: GeographiesChildProps) => ReactNode
  }

  interface GeographyProps extends SVGProps<SVGPathElement> {
    geography: GeoFeature
  }

  export function ComposableMap(props: ComposableMapProps): JSX.Element
  export function Geographies(props: GeographiesProps): JSX.Element
  export function Geography(props: GeographyProps): JSX.Element
}
