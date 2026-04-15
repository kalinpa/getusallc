"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Lang } from "@/lib/i18n";
import { languages } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";

export default function Nav({ lang, dict }: { lang: Lang; dict: Dictionary }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const d = dict.nav;
  const p = `/${lang}`;

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        height: 64, padding: "0 2.5rem",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: "rgba(250,250,248,0.9)", backdropFilter: "blur(20px) saturate(1.3)",
        borderBottom: "1px solid var(--border-light)"
      }}>
        <Link href={p} style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <Image src="/logo.webp" alt="GetUSA LLC" width={400} height={67} style={{ height: 38, width: "auto" }} priority />
        </Link>
        <div className="nav-links-desktop" style={{ display: "flex", gap: "1.75rem", alignItems: "center" }}>
          <Link href={`${p}/#services`} style={{ textDecoration: "none", color: "var(--gray)", fontSize: "0.88rem", fontWeight: 600 }}>{d.services}</Link>
          <Link href={`${p}/#process`} style={{ textDecoration: "none", color: "var(--gray)", fontSize: "0.88rem", fontWeight: 600 }}>{d.process}</Link>
          <Link href={`${p}/#tools`} style={{ textDecoration: "none", color: "var(--gray)", fontSize: "0.88rem", fontWeight: 600 }}>{d.tools}</Link>
          <Link href={`${p}/#faq`} style={{ textDecoration: "none", color: "var(--gray)", fontSize: "0.88rem", fontWeight: 600 }}>{d.faq}</Link>
          <div className="lang-switch">
            {languages.map(l => (
              <Link key={l} href={`/${l}`} className={`lang-btn ${l === lang ? 'active' : ''}`}>
                {l.toUpperCase()}
              </Link>
            ))}
          </div>
          <Link href={`${p}/contact`} style={{
            background: "var(--orange)", color: "white",
            padding: "0.6rem 1.4rem", borderRadius: 8,
            fontWeight: 700, fontSize: "0.85rem", textDecoration: "none"
          }}>{d.contact}</Link>
        </div>
        <button onClick={() => setMenuOpen(true)} className="burger-btn" aria-label="Menu"
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: 8 }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111318" strokeWidth="2.5" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div style={{
          position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
          background: "var(--bg)", zIndex: 200, padding: "2rem",
          display: "flex", flexDirection: "column"
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "3rem" }}>
            <Link href={p} onClick={() => setMenuOpen(false)}>
              <Image src="/logo.webp" alt="GetUSA LLC" width={400} height={67} style={{ height: 36, width: "auto" }} />
            </Link>
            <button onClick={() => setMenuOpen(false)} aria-label="Close"
              style={{ background: "none", border: "none", cursor: "pointer", padding: 8 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111318" strokeWidth="2.5" strokeLinecap="round">
                <line x1="4" y1="4" x2="20" y2="20"/><line x1="20" y1="4" x2="4" y2="20"/>
              </svg>
            </button>
          </div>
          {[
            { href: `${p}/#services`, label: d.services },
            { href: `${p}/#process`, label: d.process },
            { href: `${p}/#tools`, label: d.tools },
            { href: `${p}/#faq`, label: d.faq },
          ].map(link => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
              style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--ink)", textDecoration: "none", padding: "1rem 0", borderBottom: "1px solid var(--border-light)" }}>
              {link.label}
            </Link>
          ))}
          <div style={{ display: "flex", gap: 8, padding: "1rem 0" }}>
            {languages.map(l => (
              <Link key={l} href={`/${l}`} onClick={() => setMenuOpen(false)}
                className={`lang-btn ${l === lang ? 'active' : ''}`} style={{ padding: "8px 16px", fontSize: "0.9rem" }}>
                {l.toUpperCase()}
              </Link>
            ))}
          </div>
          <Link href={`${p}/contact`} onClick={() => setMenuOpen(false)}
            style={{ display: "block", textAlign: "center", marginTop: "1rem", background: "var(--orange)", color: "white", padding: "1rem", borderRadius: 10, fontWeight: 700, fontSize: "1rem", textDecoration: "none" }}>
            {d.contact}
          </Link>
        </div>
      )}
    </>
  );
}
