'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { search, getSuggestions, type SearchResult } from '@/lib/search';

const categoryIcons: Record<string, string> = {
  blog: '📝',
  faq: '❓',
  service: '🏛',
  tool: '🔧',
};

export default function SearchModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const suggestions = getSuggestions();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
      setResults([]);
      setActiveIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      setActiveIndex(0);
      return;
    }
    setResults(search(query));
    setActiveIndex(0);
  }, [query]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIndex(i => Math.min(i + 1, results.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIndex(i => Math.max(i - 1, 0));
      } else if (e.key === 'Enter' && results[activeIndex]) {
        setIsOpen(false);
        window.location.href = results[activeIndex].url;
      }
    },
    [results, activeIndex]
  );

  useEffect(() => {
    if (resultsRef.current) {
      const active = resultsRef.current.querySelector('[data-active="true"]');
      active?.scrollIntoView({ block: 'nearest' });
    }
  }, [activeIndex]);

  function highlightMatch(text: string, q: string): React.ReactNode {
    if (!q.trim()) return text;
    const terms = q.toLowerCase().split(/\s+/).filter(t => t.length > 1);
    if (terms.length === 0) return text;
    const regex = new RegExp(
      `(${terms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`,
      'gi'
    );
    const parts = text.split(regex);
    return parts.map((part, i) =>
      terms.some(t => part.toLowerCase() === t) ? (
        <mark key={i}>{part}</mark>
      ) : (
        part
      )
    );
  }

  if (!isOpen) {
    return (
      <button className="search-trigger" onClick={() => setIsOpen(true)} aria-label="Търсене (Ctrl+K)" title="Търсене (Ctrl+K)">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <span className="search-trigger-label">Търсене</span>
        <kbd className="search-kbd">Ctrl K</kbd>
      </button>
    );
  }

  return (
    <div className="search-overlay" onClick={() => setIsOpen(false)}>
      <div className="search-modal" onClick={e => e.stopPropagation()}>
        <div className="search-input-wrap">
          <svg className="search-input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            className="search-input"
            placeholder="Търсете в съдържанието…"
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            autoComplete="off"
            spellCheck={false}
          />
          <button className="search-close" onClick={() => setIsOpen(false)}>
            <kbd>Esc</kbd>
          </button>
        </div>

        <div className="search-results" ref={resultsRef}>
          {query.trim().length < 2 ? (
            <div className="search-suggestions">
              <div className="search-suggestions-label">Популярни търсения</div>
              <div className="search-suggestions-grid">
                {suggestions.map(s => (
                  <button key={s} className="search-suggestion-chip" onClick={() => setQuery(s)}>{s}</button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="search-empty">
              <div className="search-empty-icon">🔍</div>
              <div className="search-empty-text">Няма резултати за „{query}"</div>
              <div className="search-empty-hint">Опитайте с други ключови думи</div>
            </div>
          ) : (
            <>
              <div className="search-count">{results.length} резултат{results.length !== 1 ? 'а' : ''}</div>
              {results.map((r, i) => (
                <Link
                  key={r.id}
                  href={r.url}
                  className={`search-result ${i === activeIndex ? 'active' : ''}`}
                  data-active={i === activeIndex}
                  onClick={() => setIsOpen(false)}
                  onMouseEnter={() => setActiveIndex(i)}
                >
                  <span className="search-result-icon">{categoryIcons[r.category] || '📄'}</span>
                  <div className="search-result-body">
                    <div className="search-result-title">{highlightMatch(r.title, query)}</div>
                    <div className="search-result-snippet">{highlightMatch(r.snippet, query)}</div>
                  </div>
                  <span className="search-result-badge">{r.categoryLabel}</span>
                </Link>
              ))}
            </>
          )}
        </div>

        <div className="search-footer">
          <span><kbd>↑↓</kbd> навигация</span>
          <span><kbd>↵</kbd> отвори</span>
          <span><kbd>Esc</kbd> затвори</span>
        </div>
      </div>
    </div>
  );
}
