/**
 * Everything on the site that belongs to the organisation rather than the
 * design. Values in [square brackets] are placeholders to replace before
 * submitting to the stores.
 */
export const site = {
  appName: 'Church Life',
  tagline: 'Your parish, in your pocket.',
  description:
    'Church Life connects Catholic parishioners with their parish: Mass times and intentions, daily readings, parish groups, giving and celebrations, all in one app.',

  domain: 'https://churchlife.live/',
  legalOwner: 'Church Life Limited',
  jurisdiction: 'Nigeria',
  postalAddress: 'Golf view estate, lemma road, Calabar, Cross River State, Nigeria',

  supportEmail: 'philipelias@churchlife.live',
  privacyEmail: 'philipelias@churchlife.live',
  // Same number the app shows for platform support.
  whatsapp: '08131260740',
  supportHours: 'Monday to Friday, 9am to 5pm WAT',

  appStoreUrl: '[App Store URL]',
  playStoreUrl: '[Google Play URL]',

  policiesEffective: '9/24/2026',
} as const;

/** True while a value is still a bracketed placeholder. */
export const isPlaceholder = (value: string) => value.startsWith('[') && value.endsWith(']');

/** wa.me wants the international form, without the plus. */
export function whatsappUrl(message = '') {
  const digits = site.whatsapp.replace(/\D/g, '');
  const intl = digits.startsWith('0') ? `234${digits.slice(1)}` : digits;
  const text = message ? `?text=${encodeURIComponent(message)}` : '';
  return `https://wa.me/${intl}${text}`;
}

export function mailto(address: string, subject = '') {
  if (isPlaceholder(address)) return undefined;
  return `mailto:${address}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}`;
}
