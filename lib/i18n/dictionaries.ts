import 'server-only';

import { SITE_STATS_PLACEHOLDERS } from '@/lib/config/siteStats';

const dictionaries = {
  en: {
    about: () => import('../../messages/en/about.json').then((module) => module.default),
    home: () => import('../../messages/en/home.json').then((module) => module.default),
  },
};

type Dictionaries = typeof dictionaries;
export type Locale = keyof Dictionaries;
export type Page<L extends Locale = Locale> = keyof Dictionaries[L];
export type Dictionary<
  L extends Locale = Locale,
  P extends Page<L> = Page<L>
> = Dictionaries[L][P] extends () => Promise<infer Content> ? Content : never;

const siteStatsTokenPattern = /\{\{([a-zA-Z0-9_]+)\}\}/g;

function applySiteStats<T>(value: T): T {
  if (typeof value === 'string') {
    return value.replace(siteStatsTokenPattern, (token, key) => {
      const statKey = key as keyof typeof SITE_STATS_PLACEHOLDERS;
      return SITE_STATS_PLACEHOLDERS[statKey] ?? token;
    }) as T;
  }

  if (Array.isArray(value)) {
    return value.map(applySiteStats) as T;
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, nestedValue]) => [
        key,
        applySiteStats(nestedValue),
      ])
    ) as T;
  }

  return value;
}

export const getDictionary = async <L extends Locale, P extends Page<L>>(
  locale: L,
  page: P
): Promise<Dictionary<L, P>> => {
  if (!dictionaries[locale] || !dictionaries[locale][page]) {
    throw new Error(`Dictionary not found for locale: ${locale}, page: ${String(page)}`);
  }
  const loadDictionary = dictionaries[locale][page] as () => Promise<Dictionary<L, P>>;
  const dictionary = await loadDictionary();
  return applySiteStats(dictionary);
};

// Backward compatibility for about page
export const getAboutDictionary = async <L extends Locale>(locale: L) => {
  return getDictionary(locale, 'about');
};
