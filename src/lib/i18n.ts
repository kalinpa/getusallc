export const defaultLang = 'bg';
export const languages = ['bg', 'en'] as const;
export type Lang = (typeof languages)[number];

export function isValidLang(lang: string): lang is Lang {
  return languages.includes(lang as Lang);
}

export const langNames: Record<Lang, string> = {
  bg: 'Български',
  en: 'English',
};

export const langFlags: Record<Lang, string> = {
  bg: '🇧🇬',
  en: '🇬🇧',
};

// Used for hreflang and og:locale
export const langLocales: Record<Lang, string> = {
  bg: 'bg_BG',
  en: 'en_US',
};
