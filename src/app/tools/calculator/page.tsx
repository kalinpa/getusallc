"use client";
import { useState } from "react";
import Link from "next/link";

interface StateData {
  name: string;
  formation: number;
  annualReport: number;
  franchiseTax: number;
  agentLow: number;
  agentHigh: number;
  addressLow: number;
  addressHigh: number;
  speed: string;
  privacy: string;
  notes: string;
  recommended?: boolean;
}

const states: Record<string, StateData> = {
  wyoming: {
    name: "Wyoming",
    formation: 100,
    annualReport: 60,
    franchiseTax: 0,
    agentLow: 50,
    agentHigh: 100,
    addressLow: 50,
    addressHigh: 150,
    speed: "1-2 работни дни",
    privacy: "Отлична — не разкрива собствениците",
    notes: "Най-популярният избор за българи. Нулев щатски данък, ниски такси, силна поверителност.",
    recommended: true,
  },
  delaware: {
    name: "Delaware",
    formation: 90,
    annualReport: 50,
    franchiseTax: 300,
    agentLow: 50,
    agentHigh: 150,
    addressLow: 50,
    addressHigh: 200,
    speed: "3-5 работни дни",
    privacy: "Добра — не разкрива собствениците",
    notes: "Подходящ за стартъпи с VC инвеститори или IPO планове. По-скъп дългосрочно.",
  },
  newMexico: {
    name: "New Mexico",
    formation: 50,
    annualReport: 0,
    franchiseTax: 0,
    agentLow: 50,
    agentHigh: 100,
    addressLow: 50,
    addressHigh: 150,
    speed: "1-2 работни дни",
    privacy: "Добра",
    notes: "Най-евтиният вариант, но по-малко разпознат от банки. Може да затрудни Mercury заявка.",
  },
  florida: {
    name: "Florida",
    formation: 125,
    annualReport: 138,
    franchiseTax: 0,
    agentLow: 50,
    agentHigh: 150,
    addressLow: 50,
    addressHigh: 200,
    speed: "3-5 работни дни",
    privacy: "Средна — публичен регистър",
    notes: "Голям бизнес хъб, но няма предимство пред Wyoming за чуждестранни собственици.",
  },
  texas: {
    name: "Texas",
    formation: 300,
    annualReport: 0,
    franchiseTax: 0,
    agentLow: 50,
    agentHigh: 150,
    addressLow: 50,
    addressHigh: 200,
    speed: "3-7 работни дни",
    privacy: "Средна",
    notes: "Franchise Tax от 0.375-0.75% за приходи над $2.47M. За малък бизнес — няма предимство.",
  },
  nevada: {
    name: "Nevada",
    formation: 75,
    annualReport: 150,
    franchiseTax: 200,
    agentLow: 50,
    agentHigh: 150,
    addressLow: 50,
    addressHigh: 200,
    speed: "3-5 работни дни",
    privacy: "Добра",
    notes: "Маркетиран като данъчен рай, но годишните разходи са най-високите. Не препоръчваме.",
  },
};

const extras = [
  { id: "ein", label: "EIN заявка (от нас)", low: 50, high: 100, included: true },
  { id: "opAgreement", label: "Operating Agreement", low: 0, high: 200, included: true },
  { id: "accounting", label: "Счетоводство (годишно)", low: 300, high: 800, included: false },
  { id: "taxReturn", label: "Данъчна декларация (Form 5472)", low: 200, high: 500, included: false },
];

export default function CalculatorPage() {
  const [selectedState, setSelectedState] = useState("wyoming");
  const [selectedExtras, setSelectedExtras] = useState<string[]>(["ein", "opAgreement"]);

  const state = states[selectedState];

  const toggleExtra = (id: string) => {
    setSelectedExtras(prev =>
      prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id]
    );
  };

  // Calculate totals
  const firstYearLow = state.formation + state.agentLow + state.addressLow
    + selectedExtras.reduce((sum, id) => sum + (extras.find(e => e.id === id)?.low || 0), 0);
  const firstYearHigh = state.formation + state.agentHigh + state.addressHigh
    + selectedExtras.reduce((sum, id) => sum + (extras.find(e => e.id === id)?.high || 0), 0);

  const annualLow = state.annualReport + state.franchiseTax + state.agentLow + state.addressLow
    + (selectedExtras.includes("accounting") ? 300 : 0)
    + (selectedExtras.includes("taxReturn") ? 200 : 0);
  const annualHigh = state.annualReport + state.franchiseTax + state.agentHigh + state.addressHigh
    + (selectedExtras.includes("accounting") ? 800 : 0)
    + (selectedExtras.includes("taxReturn") ? 500 : 0);

  const fiveYearLow = firstYearLow + annualLow * 4;
  const fiveYearHigh = firstYearHigh + annualHigh * 4;

  return (
    <div className="calc-page">
      <div className="sec">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Начало</Link><span>/</span>
          <Link href="/#tools">Инструменти</Link><span>/</span>
          <span>Калкулатор на разходите</span>
        </nav>

        <div className="calc-header">
          <span className="tag">Инструменти</span>
          <h1 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: "0.75rem" }}>
            Калкулатор на разходите за LLC
          </h1>
          <p className="sdesc">Изберете щат и допълнителни услуги, за да видите приблизителните разходи за регистрация и годишна поддръжка.</p>
        </div>

        <div className="calc-grid">
          {/* LEFT: Controls */}
          <div className="calc-controls">
            <div className="calc-card">
              <h2 className="calc-card-title">Изберете щат</h2>
              <div className="calc-states">
                {Object.entries(states).map(([key, s]) => (
                  <button
                    key={key}
                    className={`calc-state-btn${selectedState === key ? " active" : ""}${s.recommended ? " recommended" : ""}`}
                    onClick={() => setSelectedState(key)}
                  >
                    <span className="calc-state-name">{s.name}</span>
                    {s.recommended && <span className="calc-rec-badge">Препоръчан</span>}
                    <span className="calc-state-price">${s.formation + s.annualReport + s.franchiseTax}/год.</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="calc-card">
              <h2 className="calc-card-title">Допълнителни услуги</h2>
              {extras.map(e => (
                <label key={e.id} className="calc-extra">
                  <input
                    type="checkbox"
                    checked={selectedExtras.includes(e.id)}
                    onChange={() => toggleExtra(e.id)}
                  />
                  <span className="calc-extra-info">
                    <span className="calc-extra-name">{e.label}</span>
                    <span className="calc-extra-price">${e.low}{e.high > e.low ? `–$${e.high}` : ""}</span>
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* RIGHT: Results */}
          <div className="calc-results">
            <div className="calc-card calc-card-dark">
              <h2 className="calc-card-title" style={{ color: "white" }}>Разбивка за {state.name}</h2>

              <div className="calc-section">
                <h3 className="calc-section-title">Еднократни разходи (регистрация)</h3>
                <div className="calc-row">
                  <span>Държавна такса (Articles of Organization)</span>
                  <span className="calc-amount">${state.formation}</span>
                </div>
                <div className="calc-row">
                  <span>Registered Agent (1-ва год.)</span>
                  <span className="calc-amount">${state.agentLow}–${state.agentHigh}</span>
                </div>
                <div className="calc-row">
                  <span>Бизнес адрес в САЩ</span>
                  <span className="calc-amount">${state.addressLow}–${state.addressHigh}</span>
                </div>
                {selectedExtras.includes("ein") && (
                  <div className="calc-row">
                    <span>EIN заявка</span>
                    <span className="calc-amount">$50–$100</span>
                  </div>
                )}
                {selectedExtras.includes("opAgreement") && (
                  <div className="calc-row">
                    <span>Operating Agreement</span>
                    <span className="calc-amount">$0–$200</span>
                  </div>
                )}
                <div className="calc-row calc-row-total">
                  <span>Общо първа година</span>
                  <span className="calc-amount-total">${firstYearLow}–${firstYearHigh}</span>
                </div>
              </div>

              <div className="calc-section">
                <h3 className="calc-section-title">Годишни разходи (поддръжка)</h3>
                <div className="calc-row">
                  <span>Annual Report</span>
                  <span className="calc-amount">${state.annualReport}</span>
                </div>
                {state.franchiseTax > 0 && (
                  <div className="calc-row">
                    <span>Franchise Tax</span>
                    <span className="calc-amount">${state.franchiseTax}</span>
                  </div>
                )}
                <div className="calc-row">
                  <span>Registered Agent</span>
                  <span className="calc-amount">${state.agentLow}–${state.agentHigh}</span>
                </div>
                <div className="calc-row">
                  <span>Бизнес адрес</span>
                  <span className="calc-amount">${state.addressLow}–${state.addressHigh}</span>
                </div>
                {selectedExtras.includes("accounting") && (
                  <div className="calc-row">
                    <span>Счетоводство</span>
                    <span className="calc-amount">$300–$800</span>
                  </div>
                )}
                {selectedExtras.includes("taxReturn") && (
                  <div className="calc-row">
                    <span>Данъчна декларация</span>
                    <span className="calc-amount">$200–$500</span>
                  </div>
                )}
                <div className="calc-row calc-row-total">
                  <span>Общо годишно</span>
                  <span className="calc-amount-total">${annualLow}–${annualHigh}</span>
                </div>
              </div>

              <div className="calc-section">
                <h3 className="calc-section-title">Прогноза за 5 години</h3>
                <div className="calc-row calc-row-total">
                  <span>Общо за 5 години</span>
                  <span className="calc-amount-total">${fiveYearLow.toLocaleString()}–${fiveYearHigh.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="calc-card">
              <h3 className="calc-card-title">За {state.name}</h3>
              <div className="calc-info-grid">
                <div className="calc-info-item">
                  <span className="calc-info-label">Скорост на регистрация</span>
                  <span className="calc-info-value">{state.speed}</span>
                </div>
                <div className="calc-info-item">
                  <span className="calc-info-label">Поверителност</span>
                  <span className="calc-info-value">{state.privacy}</span>
                </div>
              </div>
              <p style={{ fontSize: "0.9rem", color: "var(--gray)", lineHeight: 1.65, fontWeight: 500, marginTop: "1rem" }}>{state.notes}</p>
            </div>

            <div className="calc-cta">
              <h3>Искате точна оферта за вашия случай?</h3>
              <p>Калкулаторът дава приблизителна оценка. Свържете се с нас за персонализирана оферта с конкретна цена.</p>
              <Link href="/contact" className="btn-main">Поискай оферта →</Link>
            </div>

            <p className="calc-disclaimer">
              * Цените са ориентировъчни и могат да варират. Държавните такси са актуални към април 2026 г. Не включва данъчни консултации. За точна оферта <a href="/contact">свържете се с нас</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
