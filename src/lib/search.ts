import { getAllPosts, type BlogPost, type Section, type FAQ } from './blog';

// === Types ===

export interface SearchResult {
  id: string;
  title: string;
  snippet: string;
  url: string;
  category: 'blog' | 'faq' | 'service' | 'tool';
  categoryLabel: string;
  relevance: number;
}

interface SearchEntry {
  id: string;
  title: string;
  body: string;
  url: string;
  category: SearchResult['category'];
  categoryLabel: string;
}

// === Static content to index ===

const serviceEntries: SearchEntry[] = [
  {
    id: 'svc-llc',
    title: 'LLC Регистрация',
    body: 'Регистрация на LLC компания в САЩ Wyoming Delaware New Mexico Florida Texas Nevada Registered Agent бизнес адрес Operating Agreement американска фирма от България фрийлансъри e-commerce IT дигитален бизнес',
    url: '/contact',
    category: 'service',
    categoryLabel: 'Услуга',
  },
  {
    id: 'svc-ein',
    title: 'EIN Номер (Данъчен ID)',
    body: 'EIN Employer Identification Number данъчен номер от IRS SS-4 формуляр необходим за банкова сметка Stripe PayPal',
    url: '/contact',
    category: 'service',
    categoryLabel: 'Услуга',
  },
  {
    id: 'svc-itin',
    title: 'ITIN Номер',
    body: 'ITIN Individual Taxpayer Identification Number индивидуален данъчен номер W-7 формуляр IRS за чуждестранни лица без SSN',
    url: '/contact',
    category: 'service',
    categoryLabel: 'Услуга',
  },
  {
    id: 'svc-bank',
    title: 'Бизнес банкова сметка',
    body: 'Отваряне на американска бизнес банкова сметка Mercury Relay банка в САЩ без пътуване от България дистанционно',
    url: '/contact',
    category: 'service',
    categoryLabel: 'Услуга',
  },
  {
    id: 'svc-stripe',
    title: 'Stripe и PayPal активиране',
    body: 'Активиране на Stripe PayPal payment processor плащания американски акаунт обработка на плащания от цял свят',
    url: '/contact',
    category: 'service',
    categoryLabel: 'Услуга',
  },
  {
    id: 'svc-tax',
    title: 'Данъчни декларации и счетоводство',
    body: 'Годишни данъчни декларации annual report franchise tax federal return CPA счетоводител СИДДО спогодба двойно данъчно облагане Form 5472 1120',
    url: '/contact',
    category: 'service',
    categoryLabel: 'Услуга',
  },
];

const toolEntries: SearchEntry[] = [
  {
    id: 'tool-calc',
    title: 'Калкулатор на разходите',
    body: 'Калкулатор изчисляване разходи регистрация LLC САЩ state filing fee registered agent EIN годишни разходи цена колко струва',
    url: '/tools/calculator',
    category: 'tool',
    categoryLabel: 'Инструмент',
  },
  {
    id: 'tool-tax',
    title: 'Данъчен тест',
    body: 'Тест определяне данъчен статус САЩ резидент нерезидент СИДДО данъчно облагане дължа ли данъци',
    url: '/tools/tax-test',
    category: 'tool',
    categoryLabel: 'Инструмент',
  },
  {
    id: 'tool-states',
    title: 'Сравнение на щати',
    body: 'Сравнение щати регистрация LLC Wyoming Delaware New Mexico Florida Texas Nevada такси данъци поверителност бързина annual report',
    url: '/tools/state-comparison',
    category: 'tool',
    categoryLabel: 'Инструмент',
  },
];

// === Strip HTML tags from blog content ===

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

// === Build search index ===

function buildIndex(): SearchEntry[] {
  const entries: SearchEntry[] = [...serviceEntries, ...toolEntries];
  const allPosts = getAllPosts();

  for (const post of allPosts) {
    const bodyParts: string[] = [post.description, post.tldr];
    for (const section of post.content) {
      bodyParts.push(section.heading);
      bodyParts.push(stripHtml(section.body));
    }

    entries.push({
      id: `blog-${post.slug}`,
      title: post.title,
      body: bodyParts.join(' '),
      url: `/blog/${post.slug}`,
      category: 'blog',
      categoryLabel: 'Блог',
    });

    if (post.faq) {
      for (let i = 0; i < post.faq.length; i++) {
        const faq = post.faq[i];
        entries.push({
          id: `faq-${post.slug}-${i}`,
          title: faq.question,
          body: stripHtml(faq.answer),
          url: `/blog/${post.slug}#faq`,
          category: 'faq',
          categoryLabel: 'FAQ',
        });
      }
    }
  }

  return entries;
}

// === Search logic ===

function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\wа-яА-ЯёЁ\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function getSnippet(body: string, terms: string[], maxLen = 160): string {
  const lower = body.toLowerCase();
  let bestStart = 0;
  let bestScore = 0;

  for (let i = 0; i < lower.length - 40; i += 20) {
    const window = lower.slice(i, i + maxLen);
    let score = 0;
    for (const t of terms) {
      if (window.includes(t)) score++;
    }
    if (score > bestScore) {
      bestScore = score;
      bestStart = i;
    }
  }

  let snippet = body.slice(bestStart, bestStart + maxLen);

  if (bestStart > 0) {
    const spaceIdx = snippet.indexOf(' ');
    if (spaceIdx > 0 && spaceIdx < 20) snippet = snippet.slice(spaceIdx + 1);
    snippet = '…' + snippet;
  }
  if (bestStart + maxLen < body.length) {
    const lastSpace = snippet.lastIndexOf(' ');
    if (lastSpace > snippet.length - 30) snippet = snippet.slice(0, lastSpace);
    snippet = snippet + '…';
  }

  return snippet;
}

let cachedIndex: SearchEntry[] | null = null;

export function search(query: string, limit = 20): SearchResult[] {
  if (!cachedIndex) cachedIndex = buildIndex();

  const normalized = normalize(query);
  if (!normalized) return [];

  const terms = normalized.split(' ').filter(t => t.length > 1);
  if (terms.length === 0) return [];

  const results: SearchResult[] = [];

  for (const entry of cachedIndex) {
    const titleLower = normalize(entry.title);
    const bodyLower = normalize(entry.body);
    const combined = titleLower + ' ' + bodyLower;

    let relevance = 0;

    for (const term of terms) {
      if (titleLower.includes(term)) {
        relevance += 10;
        if (titleLower.startsWith(term)) relevance += 5;
      }
      if (bodyLower.includes(term)) {
        relevance += 3;
        const regex = new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
        const matches = combined.match(regex);
        if (matches) relevance += Math.min(matches.length - 1, 3);
      }
    }

    const allMatch = terms.every(t => combined.includes(t));
    if (allMatch) relevance += 5;

    if (relevance > 0) {
      results.push({
        id: entry.id,
        title: entry.title,
        snippet: getSnippet(entry.body, terms),
        url: entry.url,
        category: entry.category,
        categoryLabel: entry.categoryLabel,
        relevance,
      });
    }
  }

  results.sort((a, b) => b.relevance - a.relevance);
  return results.slice(0, limit);
}

export function getSuggestions(): string[] {
  return [
    'LLC регистрация',
    'Wyoming или Delaware',
    'EIN номер',
    'ITIN',
    'Stripe от България',
    'банкова сметка САЩ',
    'СИДДО',
    'данъци',
    'годишни разходи',
    'Registered Agent',
  ];
}
