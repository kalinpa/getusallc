'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { search, getSuggestions, type SearchResult } from '@/lib/search';
import { isValidLang, type Lang } from '@/lib/i18n';
import { getDictionarySync } from '@/lib/dictionaries';

const catIcons: Record<string, string> = { blog: '📝', faq: '❓', service: '🏛', tool: '🔧' };

export default function SearchPage() {
  const params = useParams();
  const lang = (isValidLang(params.lang as string) ? params.lang : 'bg') as Lang;
  const d = getDictionarySync(lang);
  const p = `/${lang}`;
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get('q');
    if (q) { setQuery(q); setResults(search(q)); }
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (query.trim().length < 2) { setResults([]); return; }
    setResults(search(query));
  }, [query]);

  function hl(text: string, q: string): React.ReactNode {
    if (!q.trim()) return text;
    const terms = q.toLowerCase().split(/\s+/).filter(t => t.length > 1);
    if (!terms.length) return text;
    const re = new RegExp(`(${terms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');
    return text.split(re).map((part, i) =>
      terms.some(t => part.toLowerCase() === t)
        ? <span key={i} style={{ background: 'var(--orange-soft)', color: 'var(--orange)', borderRadius: 3, padding: '0 2px', fontWeight: 700 }}>{part}</span>
        : part
    );
  }

  return (
    <section style={{ maxWidth: 720, margin: '0 auto', padding: '120px 24px 80px' }}>
      <h1 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: 8, letterSpacing: '-0.02em' }}>{d.search.title}</h1>
      <p style={{ color: 'var(--gray)', marginBottom: 28, fontSize: '0.95rem', fontWeight: 500 }}>{d.search.subtitle}</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 18px', background: 'var(--white)', border: '2px solid var(--border)', borderRadius: 14, marginBottom: 32 }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gray)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <input ref={inputRef} type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder={d.search.placeholder} autoComplete="off" spellCheck={false}
          style={{ flex: 1, border: 'none', outline: 'none', background: 'transparent', fontFamily: 'inherit', fontSize: '1.05rem', fontWeight: 500, color: 'var(--ink)' }} />
        {query && <button onClick={() => setQuery('')} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 8, padding: '6px 14px', cursor: 'pointer', fontSize: '0.82rem', fontWeight: 600, color: 'var(--gray)', fontFamily: 'inherit' }}>{d.search.clear}</button>}
      </div>

      {query.trim().length < 2 && (
        <div>
          <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--gray)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 14 }}>{d.search.popularTitle}</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {getSuggestions(lang).map(s => <button key={s} onClick={() => setQuery(s)} style={{ padding: '8px 16px', background: 'var(--white)', border: '1.5px solid var(--border)', borderRadius: 20, fontFamily: 'inherit', fontSize: '0.88rem', fontWeight: 600, color: 'var(--ink2)', cursor: 'pointer' }}>{s}</button>)}
          </div>
        </div>
      )}

      {query.trim().length >= 2 && results.length === 0 && (
        <div style={{ textAlign: 'center', padding: '56px 0' }}>
          <div style={{ fontSize: '2.4rem', marginBottom: 12, opacity: 0.4 }}>🔍</div>
          <div style={{ fontWeight: 700, fontSize: '1.05rem' }}>{d.search.noResults} „{query}"</div>
          <div style={{ color: 'var(--gray)', marginTop: 6, fontSize: '0.9rem', fontWeight: 500 }}>
            {d.search.tryOther} <Link href={`${p}/contact`} style={{ color: 'var(--orange)', fontWeight: 700 }}>{d.search.contactUs}</Link>
          </div>
        </div>
      )}

      {results.length > 0 && (
        <div>
          <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--gray)', marginBottom: 16 }}>
            {results.length} {results.length !== 1 ? d.search.resultsFor : d.search.resultFor} „{query}"
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {results.map(r => (
              <Link key={r.id} href={`${p}${r.url}`} onMouseEnter={() => setHoveredId(r.id)} onMouseLeave={() => setHoveredId(null)}
                style={{ display: 'flex', alignItems: 'flex-start', gap: 14, padding: '16px 14px', borderRadius: 12, textDecoration: 'none', color: 'inherit', background: hoveredId === r.id ? 'var(--surface)' : 'transparent', border: hoveredId === r.id ? '1px solid var(--border-light)' : '1px solid transparent' }}>
                <span style={{ width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--white)', border: '1.5px solid var(--border)', borderRadius: 10, fontSize: '1.1rem', flexShrink: 0 }}>{catIcons[r.category] || '📄'}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 700, fontSize: '0.96rem', lineHeight: 1.4 }}>{hl(r.title, query)}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--gray)', lineHeight: 1.55, marginTop: 3, fontWeight: 500, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{hl(r.snippet, query)}</div>
                </div>
                <span style={{ padding: '4px 10px', background: 'var(--surface)', borderRadius: 6, fontSize: '0.74rem', fontWeight: 700, color: 'var(--gray)', whiteSpace: 'nowrap', flexShrink: 0, marginTop: 2 }}>
                  {d.search.categories[r.category as keyof typeof d.search.categories] || r.categoryLabel}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
