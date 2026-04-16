import type { Lang } from "../i18n";

export interface Section {
  id: string;
  heading: string;
  body: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  author: string;
  image?: string;
  category: string;
  tags: string[];
  readingTime: number;
  tldr: string;
  content: Section[];
  faq?: FAQ[];
  relatedSlugs?: string[];
}

export interface PostMeta {
  slug: string;
  date: string;
  updated?: string;
  author: string;
  image?: string;
  readingTime: number;
  relatedSlugs?: string[];
}

export interface PostTranslation {
  title: string;
  description: string;
  category: string;
  tags: string[];
  tldr: string;
  content: Section[];
  faq?: FAQ[];
}

export interface LocalizedPost {
  meta: PostMeta;
  translations: Partial<Record<Lang, PostTranslation>>;
}
