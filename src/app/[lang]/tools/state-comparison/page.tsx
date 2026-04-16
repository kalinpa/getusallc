"use client";
import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { isValidLang, type Lang } from "@/lib/i18n";
import { getDictionarySync } from "@/lib/dictionaries";

// Numeric / static data — same in all languages
interface StateNum {
  key: keyof ReturnType<typeof getDictionarySync>["stateComp"]["states"];
  name: string;
  flag: string;
  formation: number;
  annualReport: number;
  franchiseTax: number;
  totalAnnual: number;
  fiveYear: number;
  speedDays: number;
  privacyScore: number;
  assetScore: number;
  bankingScore: number;
  recommended?: boolean;
}

const stateNums: StateNum[] = [
  { key: "wyoming", name: "Wyoming", flag: "🏔", formation: 100, annualReport: 60, franchiseTax: 0, totalAnnual: 60, fiveYear: 400, speedDays: 2, privacyScore: 5, assetScore: 5, bankingScore: 5, recommended: true },
  { key: "delaware", name: "Delaware", flag: "🏛", formation: 90, annualReport: 50, franchiseTax: 300, totalAnnual: 350, fiveYear: 1490, speedDays: 5, privacyScore: 4, assetScore: 4, bankingScore: 5 },
  { key: "newMexico", name: "New Mexico", flag: "🌵", formation: 50, annualReport: 0, franchiseTax: 0, totalAnnual: 0, fiveYear: 50, speedDays: 2, privacyScore: 4, assetScore: 3, bankingScore: 3 },
  { key: "florida", name: "Florida", flag: "🌴", formation: 125, annualReport: 138, franchiseTax: 0, totalAnnual: 138, fiveYear: 677, speedDays: 5, privacyScore: 2, assetScore: 3, bankingScore: 4 },
  { key: "texas", name: "Texas", flag: "⛳", formation: 300, annualReport: 0, franchiseTax: 0, totalAnnual: 0, fiveYear: 300, speedDays: 7, privacyScore: 2, assetScore: 3, bankingScore: 4 },
  { key: "nevada", name: "Nevada", flag: "🎰", formation: 75, annualReport: 150, franchiseTax: 200, totalAnnual: 350, fiveYear: 1475, speedDays: 5, privacyScore: 4, assetScore: 4, bankingScore: 4 },
];

function ScoreDots({ score, max = 5 }: { score: number; max?: number }) {
  return (
    <div className="sc-dots">
      {Array.from({ length: max }).map((_, i) => (
        <span
          key={i}
          className="sc-dot"
          style={{
            background: i < score
              ? score >= 4 ? "var(--green)" : score >= 3 ? "#f59e0b" : "#ef4444"
              : "var(--border)",
          }}
        />
      ))}
    </div>
  );
}

export default function StateComparisonPage() {
  const params = useParams();
  const lang = (isValidLang(params.lang as string) ? params.lang : 'bg') as Lang;
  const d = getDictionarySync(lang);
  const t = d.stateComp;
  const p = `/${lang}`;

  const [selected, setSelected] = useState<string[]>(["wyoming", "delaware"]);

  const toggleState = (key: string) => {
    if (selected.includes(key)) {
      if (selected.length > 1) setSelected(selected.filter(s => s !== key));
    } else if (selected.length < 3) {
      setSelected([...selected, key]);
    }
  };

  const compared = stateNums.filter(s => selected.includes(s.key));
  const cheapest = compared.reduce((a, b) => a.totalAnnual < b.totalAnnual ? a : b);
  const fastest = compared.reduce((a, b) => a.speedDays < b.speedDays ? a : b);
  const bestPrivacy = compared.reduce((a, b) => a.privacyScore > b.privacyScore ? a : b);

  // Helper to get localized text for a state
  const st = (key: string) => t.states[key as keyof typeof t.states];

  return (
    <div className="sc-page">
      <div className="sec">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href={p}>{t.breadcrumbHome}</Link><span>/</span>
          <Link href={`${p}/#tools`}>{t.breadcrumbTools}</Link><span>/</span>
          <span>{t.breadcrumb}</span>
        </nav>

        <div className="sc-header">
          <span className="tag">{t.tag}</span>
          <h1 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: "0.75rem" }}>
            {t.h1}
          </h1>
          <p className="sdesc">{t.subtitle}</p>
        </div>

        {/* State selector */}
        <div className="sc-selector">
          {stateNums.map(s => (
            <button
              key={s.key}
              className={`sc-sel-btn${selected.includes(s.key) ? " active" : ""}${s.recommended ? " rec" : ""}`}
              onClick={() => toggleState(s.key)}
            >
              <span className="sc-sel-flag">{s.flag}</span>
              <span className="sc-sel-name">{s.name}</span>
              {s.recommended && <span className="sc-sel-badge">★</span>}
            </button>
          ))}
        </div>

        {/* Quick winner badges */}
        <div className="sc-winners">
          <div className="sc-winner">
            <span className="sc-winner-label">{t.cheapestIcon} {t.cheapest}</span>
            <span className="sc-winner-name">{cheapest.name}</span>
          </div>
          <div className="sc-winner">
            <span className="sc-winner-label">{t.fastestIcon} {t.fastest}</span>
            <span className="sc-winner-name">{fastest.name}</span>
          </div>
          <div className="sc-winner">
            <span className="sc-winner-label">{t.mostPrivateIcon} {t.mostPrivate}</span>
            <span className="sc-winner-name">{bestPrivacy.name}</span>
          </div>
        </div>

        {/* Comparison table */}
        <div className="sc-table-wrap">
          <table className="sc-table">
            <thead>
              <tr>
                <th className="sc-th-label"></th>
                {compared.map(s => (
                  <th key={s.key} className="sc-th-state">
                    <span className="sc-th-flag">{s.flag}</span>
                    <span>{s.name}</span>
                    {s.recommended && <span className="sc-th-rec">{t.recommended}</span>}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="sc-section-row"><td colSpan={compared.length + 1}>{t.costs}</td></tr>
              <tr>
                <td className="sc-label">{t.formation}</td>
                {compared.map(s => <td key={s.key} className="sc-val">${s.formation}</td>)}
              </tr>
              <tr>
                <td className="sc-label">{t.annualReport}</td>
                {compared.map(s => <td key={s.key} className="sc-val">${s.annualReport}{t.perYear}</td>)}
              </tr>
              <tr>
                <td className="sc-label">{t.franchiseTax}</td>
                {compared.map(s => <td key={s.key} className="sc-val">{s.franchiseTax ? `$${s.franchiseTax}${t.perYear}` : t.none}</td>)}
              </tr>
              <tr className="sc-total-row">
                <td className="sc-label">{t.totalAnnualLabel}</td>
                {compared.map(s => (
                  <td key={s.key} className="sc-val sc-val-total">
                    ${s.totalAnnual}{t.perYear}
                    {s.key === cheapest.key && compared.length > 1 && <span className="sc-best">{t.bestLabel}</span>}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="sc-label">{t.fiveYearLabel}</td>
                {compared.map(s => <td key={s.key} className="sc-val">${s.fiveYear.toLocaleString()}</td>)}
              </tr>

              <tr className="sc-section-row"><td colSpan={compared.length + 1}>{t.taxes}</td></tr>
              <tr>
                <td className="sc-label">{t.stateTax}</td>
                {compared.map(s => <td key={s.key} className="sc-val sc-val-sm">{st(s.key).stateTax}</td>)}
              </tr>

              <tr className="sc-section-row"><td colSpan={compared.length + 1}>{t.sectionRegistration}</td></tr>
              <tr>
                <td className="sc-label">{t.speedLabel}</td>
                {compared.map(s => (
                  <td key={s.key} className="sc-val">
                    {st(s.key).speed}
                    {s.key === fastest.key && compared.length > 1 && <span className="sc-best">{t.fastLabel}</span>}
                  </td>
                ))}
              </tr>

              <tr className="sc-section-row"><td colSpan={compared.length + 1}>{t.sectionProtection}</td></tr>
              <tr>
                <td className="sc-label">{t.privacy}</td>
                {compared.map(s => <td key={s.key} className="sc-val"><ScoreDots score={s.privacyScore} /><span className="sc-val-sm">{st(s.key).privacy}</span></td>)}
              </tr>
              <tr>
                <td className="sc-label">{t.assetProtection}</td>
                {compared.map(s => <td key={s.key} className="sc-val"><ScoreDots score={s.assetScore} /><span className="sc-val-sm">{st(s.key).assetProtection}</span></td>)}
              </tr>

              <tr className="sc-section-row"><td colSpan={compared.length + 1}>{t.banking}</td></tr>
              <tr>
                <td className="sc-label">{t.bankingEase}</td>
                {compared.map(s => <td key={s.key} className="sc-val"><ScoreDots score={s.bankingScore} /><span className="sc-val-sm">{st(s.key).banking}</span></td>)}
              </tr>

              <tr className="sc-section-row"><td colSpan={compared.length + 1}>{t.sectionFitFor}</td></tr>
              <tr>
                <td className="sc-label">{t.bestForLabel}</td>
                {compared.map(s => (
                  <td key={s.key} className="sc-val">
                    <div className="sc-tags">{st(s.key).bestFor.map(tag => <span key={tag} className="sc-tag-good">{tag}</span>)}</div>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="sc-label">{t.notIdealForLabel}</td>
                {compared.map(s => (
                  <td key={s.key} className="sc-val">
                    <div className="sc-tags">{st(s.key).notIdealFor.map(tag => <span key={tag} className="sc-tag-bad">{tag}</span>)}</div>
                  </td>
                ))}
              </tr>

              <tr className="sc-section-row"><td colSpan={compared.length + 1}>{t.sectionConclusion}</td></tr>
              <tr>
                <td className="sc-label">{t.verdict}</td>
                {compared.map(s => <td key={s.key} className="sc-val sc-verdict">{st(s.key).verdict}</td>)}
              </tr>
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div className="calc-cta" style={{ marginTop: "2rem" }}>
          <h3>{t.ctaTitle}</h3>
          <p>{t.ctaText}</p>
          <Link href={`${p}/contact`} className="btn-main">{t.ctaButton}</Link>
        </div>

        {/* Resources */}
        <div className="tax-links" style={{ marginTop: "2rem" }}>
          <h3>{t.resourcesTitle}</h3>
          <div className="tax-links-grid">
            {t.resources.map((r, i) => (
              <Link key={i} href={`${p}${r.href}`} className="tax-link-card">
                <span>{r.icon}</span>
                <div><strong>{r.title}</strong><p>{r.desc}</p></div>
              </Link>
            ))}
          </div>
        </div>

        <p className="calc-disclaimer" style={{ marginTop: "1.5rem" }}>
          {t.disclaimer} <a href={`${p}/contact`}>{t.contactLink}</a>. {t.seeAlso} <a href={`${p}/disclaimer`}>{t.disclaimerLink}</a>.
        </p>
      </div>
    </div>
  );
}
