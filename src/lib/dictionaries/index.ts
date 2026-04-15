import type { Lang } from '../i18n';
import bg from './bg';
import en from './en';
import type { Dictionary } from './bg';

const dicts: Record<string, Dictionary> = { bg, en };

export function getDictionarySync(lang: string): Dictionary {
  return dicts[lang] || dicts.bg;
}

export type { Dictionary };
