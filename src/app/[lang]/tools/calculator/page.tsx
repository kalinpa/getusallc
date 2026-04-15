"use client";
import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { isValidLang, type Lang } from "@/lib/i18n";
import { getDictionarySync } from "@/lib/dictionaries";

const stateNums: Record<string, { formation: number; annualReport: number; franchiseTax: number; agentLow: number; agentHigh: number; addressLow: number; addressHigh: number; recommended?: boolean }> = {
  wyoming:   { formation: 100, annualReport: 60,  franchiseTax: 0,   agentLow: 50, agentHigh: 100, addressLow: 50, addressHigh: 150, recommended: true },
  delaware:  { formation: 90,  annualReport: 50,  franchiseTax: 300, agentLow: 50, agentHigh: 150, addressLow: 50, addressHigh: 200 },
  newMexico: { formation: 50,  annualReport: 0,   franchiseTax: 0,   agentLow: 50, agentHigh: 100, addressLow: 50, addressHigh: 150 },
  florida:   { formation: 125, annualReport: 138, franchiseTax: 0,   agentLow: 50, agentHigh: 150, addressLow: 50, addressHigh: 200 },
  texas:     { formation: 300, annualReport: 0,   franchiseTax: 0,   agentLow: 50, agentHigh: 150, addressLow: 50, addressHigh: 200 },
  nevada:    { formation: 75,  annualReport: 150, franchiseTax: 200, agentLow: 50, agentHigh: 150, addressLow: 50, addressHigh: 200 },
};

const stateNames: Record<string, string> = { wyoming: "Wyoming", delaware: "Delaware", newMexico: "New Mexico", florida: "Florida", texas: "Texas", nevada: "Nevada" };

const extrasData = [
  { id: "ein", low: 50, high: 100, included: true },
  { id: "opAgreement", low: 0, high: 200, included: true },
  { id: "accounting", low: 300, high: 800, included: false },
  { id: "taxReturn", low: 200, high: 500, included: false },
];

export default function CalculatorPage() {
  const params = useParams();
  const lang = (isValidLang(params.lang as string) ? params.lang : 'bg') as Lang;
  const d = getDictionarySync(lang);
  const t = d.calc;
  const p = `/${lang}`;

  const [sel, setSel] = useState("wyoming");
  const [extras, setExtras] = useState<string[]>(["ein", "opAgreement"]);
  const s = stateNums[sel];
  const stateT = t.states[sel as keyof typeof t.states];
  const toggle = (id: string) => setExtras(prev => prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id]);

  const fy1 = s.formation + s.agentLow + s.addressLow + extras.reduce((sum, id) => sum + (extrasData.find(e => e.id === id)?.low || 0), 0);
  const fy2 = s.formation + s.agentHigh + s.addressHigh + extras.reduce((sum, id) => sum + (extrasData.find(e => e.id === id)?.high || 0), 0);
  const ay1 = s.annualReport + s.franchiseTax + s.agentLow + s.addressLow + (extras.includes("accounting") ? 300 : 0) + (extras.includes("taxReturn") ? 200 : 0);
  const ay2 = s.annualReport + s.franchiseTax + s.agentHigh + s.addressHigh + (extras.includes("accounting") ? 800 : 0) + (extras.includes("taxReturn") ? 500 : 0);

  return (
    <div className="calc-page">
      <div className="sec">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href={p}>{d.blog.breadcrumbHome}</Link><span>/</span>
          <Link href={`${p}/#tools`}>{d.nav.tools}</Link><span>/</span>
          <span>{t.breadcrumb}</span>
        </nav>
        <div className="calc-header">
          <span className="tag">{t.tag}</span>
          <h1 style={{ fontSize: "clamp(1.8rem,3.5vw,2.4rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: "0.75rem" }}>{t.title}</h1>
          <p className="sdesc">{t.subtitle}</p>
        </div>
        <div className="calc-grid">
          <div className="calc-controls">
            <div className="calc-card">
              <h2 className="calc-card-title">{t.selectState}</h2>
              <div className="calc-states">
                {Object.entries(stateNums).map(([key, st]) => (
                  <button key={key} className={`calc-state-btn${sel === key ? " active" : ""}${st.recommended ? " recommended" : ""}`} onClick={() => setSel(key)}>
                    <span className="calc-state-name">{stateNames[key]}</span>
                    {st.recommended && <span className="calc-rec-badge">{t.recommended}</span>}
                    <span className="calc-state-price">${st.formation + st.annualReport + st.franchiseTax}{t.perYear}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="calc-card">
              <h2 className="calc-card-title">{t.extras}</h2>
              {extrasData.map(e => (
                <label key={e.id} className="calc-extra">
                  <input type="checkbox" checked={extras.includes(e.id)} onChange={() => toggle(e.id)} />
                  <span className="calc-extra-info">
                    <span className="calc-extra-name">{t.extrasLabels[e.id as keyof typeof t.extrasLabels]}</span>
                    <span className="calc-extra-price">${e.low}{e.high > e.low ? `–$${e.high}` : ""}</span>
                  </span>
                </label>
              ))}
            </div>
          </div>
          <div className="calc-results">
            <div className="calc-card calc-card-dark">
              <h2 className="calc-card-title" style={{ color: "white" }}>{t.breakdownFor} {stateNames[sel]}</h2>
              <div className="calc-section">
                <h3 className="calc-section-title">{t.oneTime}</h3>
                <div className="calc-row"><span>{t.stateFee}</span><span className="calc-amount">${s.formation}</span></div>
                <div className="calc-row"><span>{t.agent1y}</span><span className="calc-amount">${s.agentLow}–${s.agentHigh}</span></div>
                <div className="calc-row"><span>{t.usAddress}</span><span className="calc-amount">${s.addressLow}–${s.addressHigh}</span></div>
                {extras.includes("ein") && <div className="calc-row"><span>{t.einApp}</span><span className="calc-amount">$50–$100</span></div>}
                {extras.includes("opAgreement") && <div className="calc-row"><span>{t.opAgreement}</span><span className="calc-amount">$0–$200</span></div>}
                <div className="calc-row calc-row-total"><span>{t.totalFirstYear}</span><span className="calc-amount-total">${fy1}–${fy2}</span></div>
              </div>
              <div className="calc-section">
                <h3 className="calc-section-title">{t.annual}</h3>
                <div className="calc-row"><span>{t.annualReport}</span><span className="calc-amount">${s.annualReport}</span></div>
                {s.franchiseTax > 0 && <div className="calc-row"><span>{t.franchiseTax}</span><span className="calc-amount">${s.franchiseTax}</span></div>}
                <div className="calc-row"><span>{t.agent}</span><span className="calc-amount">${s.agentLow}–${s.agentHigh}</span></div>
                <div className="calc-row"><span>{t.address}</span><span className="calc-amount">${s.addressLow}–${s.addressHigh}</span></div>
                {extras.includes("accounting") && <div className="calc-row"><span>{t.accounting}</span><span className="calc-amount">$300–$800</span></div>}
                {extras.includes("taxReturn") && <div className="calc-row"><span>{t.taxReturn}</span><span className="calc-amount">$200–$500</span></div>}
                <div className="calc-row calc-row-total"><span>{t.totalAnnual}</span><span className="calc-amount-total">${ay1}–${ay2}</span></div>
              </div>
              <div className="calc-section">
                <h3 className="calc-section-title">{t.forecast5y}</h3>
                <div className="calc-row calc-row-total"><span>{t.total5y}</span><span className="calc-amount-total">${(fy1 + ay1 * 4).toLocaleString()}–${(fy2 + ay2 * 4).toLocaleString()}</span></div>
              </div>
            </div>
            <div className="calc-card">
              <h3 className="calc-card-title">{t.aboutState} {stateNames[sel]}</h3>
              <div className="calc-info-grid">
                <div className="calc-info-item"><span className="calc-info-label">{t.regSpeed}</span><span className="calc-info-value">{stateT.speed}</span></div>
                <div className="calc-info-item"><span className="calc-info-label">{t.privacyLabel}</span><span className="calc-info-value">{stateT.privacy}</span></div>
              </div>
              <p style={{ fontSize: "0.9rem", color: "var(--gray)", lineHeight: 1.65, fontWeight: 500, marginTop: "1rem" }}>{stateT.notes}</p>
            </div>
            <div className="calc-cta">
              <h3>{t.ctaTitle}</h3>
              <p>{t.ctaText}</p>
              <Link href={`${p}/contact`} className="btn-main">{t.ctaButton}</Link>
            </div>
            <p className="calc-disclaimer">{t.disclaimer} <a href={`${p}/contact`}>{t.contactLink}</a>.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
