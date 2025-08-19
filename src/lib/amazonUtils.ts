type AmazonDomain = 'com' | 'co.uk' | 'fr' | 'de' | 'it' | 'es' | 'com.mx' | 'com.br' | 'jp' | 'se' | 'com.au' | 'nl' | 'in' | 'ca' | 'co.za';

const countryToDomain: Record<string, AmazonDomain> = {
  US: 'com',
  CA: 'ca',
  MX: 'com.mx',
  BR: 'com.br',
  ZA: 'com',      // default stays .com unless a per-book override says otherwise
  GB: 'co.uk',
  IE: 'co.uk',
  FR: 'fr',
  DE: 'de',
  AT: 'de',
  CH: 'de',
  IT: 'it',
  ES: 'es',
  IN: 'in',
  NL: 'nl',
  SE: 'se',
  JP: 'jp',
  AU: 'com.au'
};

export type AmazonRegionalOverrides = Partial<
  Record<string, { asin?: string; domain?: AmazonDomain }>
>;

export function getAmazonUrl(
  asin: string | undefined,
  userCountry: string,
  regional?: AmazonRegionalOverrides
): string | null {
  const baseAsin = asin;
  const override = regional?.[userCountry];

  const chosenAsin = override?.asin ?? baseAsin;
  if (!chosenAsin) return null;

  const chosenDomain =
    override?.domain ?? countryToDomain[userCountry] ?? 'com';

  console.log(`Using ASIN: ${chosenAsin} for domain: ${chosenDomain} in country: ${userCountry}`);

  return `https://amazon.${chosenDomain}/dp/${chosenAsin}`;
}
