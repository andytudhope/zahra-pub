export type AmazonDomain =
  | 'com' | 'co.uk' | 'fr' | 'de' | 'it' | 'es' | 'com.mx' | 'com.br'
  | 'co.jp' | 'se' | 'com.au' | 'nl' | 'in' | 'ca' | 'co.za' | 'ae' | 'sg' | 'sa' | 'com.tr';

export type AmazonRegionalOverrides =
  Partial<Record<string, { asin?: string; domain?: AmazonDomain }>>;