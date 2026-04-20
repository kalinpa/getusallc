import type { Lang } from "../i18n";
import { defaultLang } from "../i18n";
import type { BlogPost, LocalizedPost } from "./types";

import { post as p1 } from "./posts/kak-da-registriram-llc-v-amerika-ot-bulgaria";
import { post as p2 } from "./posts/wyoming-vs-delaware-koj-shtat-za-bulgari";
import { post as p3 } from "./posts/stripe-ot-bulgaria-s-amerikansko-llc";
import { post as p4 } from "./posts/siddo-spogodba-bulgaria-sasht-danaci";
import { post as p5 } from "./posts/ein-nomer-kakvo-e-kak-da-go-poluchite";
import { post as p6 } from "./posts/itin-za-balgari-bez-poseshtenie-v-sasht";
import { post as p7 } from "./posts/mercury-vs-relay-bankova-smetka-us-llc";
import { post as p8 } from "./posts/godishni-zadalzhenia-us-llc-za-balgari";
import { post as p9 } from "./posts/nulev-oborot-llc-form-5472-zadalzhitelno";
import { post as p10 } from "./posts/amazon-fba-za-balgari-pulen-gaid";
import { post as p11 } from "./posts/koga-dalzha-us-danak-eci-ustb-obiasnenie";
import { post as p12 } from "./posts/deklariarane-us-llc-prihodi-v-nap";
import { post as p13 } from "./posts/dropshipping-sales-tax-us-llc";
import { post as p14 } from "./posts/w2-contractor-us-llc-za-balgari";
import { post as p15 } from "./posts/dds-uslugi-kum-us-klient-ot-bulgaria";

export type { BlogPost, Section, FAQ } from "./types";

const allPosts: LocalizedPost[] = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15];

/**
 * Merges meta + translation into a single BlogPost.
 * Falls back to defaultLang if requested lang isn't translated yet.
 */
function materialize(p: LocalizedPost, lang: Lang): BlogPost | undefined {
  const tr = p.translations[lang] || p.translations[defaultLang];
  if (!tr) return undefined;
  return {
    slug: p.meta.slug,
    date: p.meta.date,
    updated: p.meta.updated,
    author: p.meta.author,
    image: p.meta.image,
    readingTime: p.meta.readingTime,
    relatedSlugs: p.meta.relatedSlugs,
    title: tr.title,
    description: tr.description,
    category: tr.category,
    tags: tr.tags,
    tldr: tr.tldr,
    content: tr.content,
    faq: tr.faq,
  };
}

export function getAllPosts(lang: Lang = defaultLang): BlogPost[] {
  return allPosts
    .map((p) => materialize(p, lang))
    .filter((p): p is BlogPost => Boolean(p))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string, lang: Lang = defaultLang): BlogPost | undefined {
  const found = allPosts.find((p) => p.meta.slug === slug);
  return found ? materialize(found, lang) : undefined;
}

export function getRelatedPosts(post: BlogPost, lang: Lang = defaultLang): BlogPost[] {
  if (post.relatedSlugs?.length) {
    return post.relatedSlugs
      .map((s) => getPostBySlug(s, lang))
      .filter((p): p is BlogPost => Boolean(p));
  }
  return getAllPosts(lang)
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);
}

export function getAllSlugs(): string[] {
  return allPosts.map((p) => p.meta.slug);
}

/**
 * Returns languages a post is available in.
 */
export function getPostLanguages(slug: string): Lang[] {
  const found = allPosts.find((p) => p.meta.slug === slug);
  if (!found) return [];
  return Object.keys(found.translations) as Lang[];
}
