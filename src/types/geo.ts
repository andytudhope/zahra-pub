export type AmazonDomain =
  | 'com' | 'co.uk' | 'fr' | 'de' | 'it' | 'es' | 'com.mx' | 'com.br'
  | 'jp' | 'se' | 'com.au' | 'nl' | 'in' | 'ca' | 'co.za';

export type AmazonRegionalOverrides =
  Partial<Record<string, { asin?: string; domain?: AmazonDomain }>>;