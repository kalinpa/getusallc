"use client";
import { useState } from "react";
import Link from "next/link";

interface StateInfo {
  key: string;
  name: string;
  flag: string;
  formation: number;
  annualReport: number;
  franchiseTax: number;
  totalAnnual: number;
  fiveYear: number;
  stateTax: string;
  speed: string;
  speedDays: number;
  privacy: string;
  privacyScore: number;
  assetProtection: string;
  assetScore: number;
  banking: string;
  bankingScore: number;
  bestFor: string[];
  notIdealFor: string[];
  verdict: string;
  recommended?: boolean;
}

const allStates: StateInfo[] = [
  {
    key: "wyoming",
    name: "Wyoming",
    flag: "🏔",
    formation: 100,
    annualReport: 60,
    franchiseTax: 0,
    totalAnnual: 60,
    fiveYear: 400,
    stateTax: "0% — нулев щатски данък",
    speed: "1-2 работни дни",
    speedDays: 2,
    privacy: "Отлична — не разкрива собствениците публично",
    privacyScore: 5,
    assetProtection: "Най-силната в САЩ — charging order protection",
    assetScore: 5,
    banking: "Mercury, Relay, Wise — без проблеми",
    bankingScore: 5,
    bestFor: ["Фрийлансъри", "SaaS", "E-commerce", "Dropshipping", "Дигитални продукти", "Консултации"],
    notIdealFor: ["Стартъпи с VC инвеститори"],
    verdict: "Най-добрият избор за 90% от българите. Най-ниски разходи, нулев данък, отлична поверителност.",
    recommended: true,
  },
  {
    key: "delaware",
    name: "Delaware",
    flag: "🏛",
    formation: 90,
    annualReport: 50,
    franchiseTax: 300,
    totalAnnual: 350,
    fiveYear: 1490,
    stateTax: "0% за LLC без дейност в DE; 2.2-6.6% при дейност",
    speed: "3-5 работни дни",
    speedDays: 5,
    privacy: "Добра — не разкрива собствениците публично",
    privacyScore: 4,
    assetProtection: "Добра — Court of Chancery за бизнес спорове",
    assetScore: 4,
    banking: "Mercury, Relay, Wise — без проблеми",
    bankingScore: 5,
    bestFor: ["Стартъпи с VC инвеститори", "Финтех", "IPO планове", "Множество собственици"],
    notIdealFor: ["Малък бизнес", "Фрийланс", "Бюджетно стартиране"],
    verdict: "Стандарт за VC-backed стартъпи. По-скъп, но с най-развитата правна система.",
  },
  {
    key: "new-mexico",
    name: "New Mexico",
    flag: "🌵",
    formation: 50,
    annualReport: 0,
    franchiseTax: 0,
    totalAnnual: 0,
    fiveYear: 50,
    stateTax: "4.8-5.9% при дейност в NM; 0% без дейност",
    speed: "1-2 работни дни",
    speedDays: 2,
    privacy: "Добра — минимално публично разкриване",
    privacyScore: 4,
    assetProtection: "Средна — стандартна LLC защита",
    assetScore: 3,
    banking: "Може да затрудни Mercury заявка",
    bankingScore: 3,
    bestFor: ["Минимален бюджет", "Максимална анонимност", "Тестване на идея"],
    notIdealFor: ["Бизнес с нужда от банкиране", "Дългосрочен бизнес"],
    verdict: "Най-евтиният вариант, но потенциални проблеми с банки. Подходящ за тестване.",
  },
  {
    key: "florida",
    name: "Florida",
    flag: "🌴",
    formation: 125,
    annualReport: 138,
    franchiseTax: 0,
    totalAnnual: 138,
    fiveYear: 677,
    stateTax: "0% личен данък; 5.5% корпоративен (ако е C-Corp)",
    speed: "3-5 работни дни",
    speedDays: 5,
    privacy: "Средна — публичен регистър Sunbiz",
    privacyScore: 2,
    assetProtection: "Добра — силна homestead protection",
    assetScore: 3,
    banking: "Mercury, Relay — без проблеми",
    bankingScore: 4,
    bestFor: ["Бизнес с US клиенти във FL", "Недвижими имоти", "Планиране на преместване в FL"],
    notIdealFor: ["Чуждестранни собственици без връзка с FL", "Бюджетно стартиране"],
    verdict: "Популярен щат, но няма предимство пред Wyoming за чуждестранни собственици.",
  },
  {
    key: "texas",
    name: "Texas",
    flag: "⛳",
    formation: 300,
    annualReport: 0,
    franchiseTax: 0,
    totalAnnual: 0,
    fiveYear: 300,
    stateTax: "0% личен; Franchise Tax 0.375-0.75% за приходи над $2.47M",
    speed: "3-7 работни дни",
    speedDays: 7,
    privacy: "Средна — публичен регистър",
    privacyScore: 2,
    assetProtection: "Добра — стандартна LLC защита",
    assetScore: 3,
    banking: "Mercury, Relay — без проблеми",
    bankingScore: 4,
    bestFor: ["Бизнес с US клиенти в TX", "Голям приход (без Franchise Tax под $2.47M)"],
    notIdealFor: ["Малък бизнес", "Чуждестранни собственици"],
    verdict: "Скъпа регистрация, бавна обработка. Franchise Tax е риск при растеж.",
  },
  {
    key: "nevada",
    name: "Nevada",
    flag: "🎰",
    formation: 75,
    annualReport: 150,
    franchiseTax: 200,
    totalAnnual: 350,
    fiveYear: 1475,
    stateTax: "0% — нулев щатски данък",
    speed: "3-5 работни дни",
    speedDays: 5,
    privacy: "Добра — не разкрива собствениците",
    privacyScore: 4,
    assetProtection: "Добра — силна charging order protection",
    assetScore: 4,
    banking: "Mercury, Relay — без проблеми",
    bankingScore: 4,
    bestFor: ["Бизнес с US присъствие в NV"],
    notIdealFor: ["Всички останали — най-скъпият вариант"],
    verdict: "Маркетиран като данъчен рай, но годишните разходи са най-високите. Не препоръчваме.",
  },
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
  const [selected, setSelected] = useState<string[]>(["wyoming", "delaware"]);

  const toggleState = (key: string) => {
    if (selected.includes(key)) {
      if (selected.length > 1) {
        setSelected(selected.filter(s => s !== key));
      }
    } else if (selected.length < 3) {
      setSelected([...selected, key]);
    }
  };

  const compared = allStates.filter(s => selected.includes(s.key));
  const cheapest = compared.reduce((a, b) => a.totalAnnual < b.totalAnnual ? a : b);
  const fastest = compared.reduce((a, b) => a.speedDays < b.speedDays ? a : b);
  const bestPrivacy = compared.reduce((a, b) => a.privacyScore > b.privacyScore ? a : b);

  return (
    <div className="sc-page">
      <div className="sec">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Начало</Link><span>/</span>
          <Link href="/#tools">Инструменти</Link><span>/</span>
          <span>Сравнение на щати</span>
        </nav>

        <div className="sc-header">
          <span className="tag">Инструменти</span>
          <h1 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: "0.75rem" }}>
            Сравнение на щати за LLC
          </h1>
          <p className="sdesc">Изберете 2-3 щата за детайлно сравнение. Кликнете за добавяне или премахване.</p>
        </div>

        {/* State selector */}
        <div className="sc-selector">
          {allStates.map(s => (
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
            <span className="sc-winner-label">💰 Най-евтин</span>
            <span className="sc-winner-name">{cheapest.name}</span>
          </div>
          <div className="sc-winner">
            <span className="sc-winner-label">⚡ Най-бърз</span>
            <span className="sc-winner-name">{fastest.name}</span>
          </div>
          <div className="sc-winner">
            <span className="sc-winner-label">🔒 Най-поверителен</span>
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
                    {s.recommended && <span className="sc-th-rec">Препоръчан</span>}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="sc-section-row"><td colSpan={compared.length + 1}>Разходи</td></tr>
              <tr>
                <td className="sc-label">Регистрация</td>
                {compared.map(s => <td key={s.key} className="sc-val">${s.formation}</td>)}
              </tr>
              <tr>
                <td className="sc-label">Annual Report</td>
                {compared.map(s => <td key={s.key} className="sc-val">${s.annualReport}/год.</td>)}
              </tr>
              <tr>
                <td className="sc-label">Franchise Tax</td>
                {compared.map(s => <td key={s.key} className="sc-val">{s.franchiseTax ? `$${s.franchiseTax}/год.` : "Няма ✓"}</td>)}
              </tr>
              <tr className="sc-total-row">
                <td className="sc-label">Общо годишно</td>
                {compared.map(s => (
                  <td key={s.key} className="sc-val sc-val-total">
                    ${s.totalAnnual}/год.
                    {s.key === cheapest.key && compared.length > 1 && <span className="sc-best">Най-евтин</span>}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="sc-label">Разход за 5 години</td>
                {compared.map(s => <td key={s.key} className="sc-val">${s.fiveYear.toLocaleString()}</td>)}
              </tr>

              <tr className="sc-section-row"><td colSpan={compared.length + 1}>Данъци</td></tr>
              <tr>
                <td className="sc-label">Щатски данък</td>
                {compared.map(s => <td key={s.key} className="sc-val sc-val-sm">{s.stateTax}</td>)}
              </tr>

              <tr className="sc-section-row"><td colSpan={compared.length + 1}>Регистрация</td></tr>
              <tr>
                <td className="sc-label">Скорост</td>
                {compared.map(s => (
                  <td key={s.key} className="sc-val">
                    {s.speed}
                    {s.key === fastest.key && compared.length > 1 && <span className="sc-best">Най-бърз</span>}
                  </td>
                ))}
              </tr>

              <tr className="sc-section-row"><td colSpan={compared.length + 1}>Защита и поверителност</td></tr>
              <tr>
                <td className="sc-label">Поверителност</td>
                {compared.map(s => <td key={s.key} className="sc-val"><ScoreDots score={s.privacyScore} /><span className="sc-val-sm">{s.privacy}</span></td>)}
              </tr>
              <tr>
                <td className="sc-label">Защита на активи</td>
                {compared.map(s => <td key={s.key} className="sc-val"><ScoreDots score={s.assetScore} /><span className="sc-val-sm">{s.assetProtection}</span></td>)}
              </tr>

              <tr className="sc-section-row"><td colSpan={compared.length + 1}>Банкиране</td></tr>
              <tr>
                <td className="sc-label">Лекота на банкиране</td>
                {compared.map(s => <td key={s.key} className="sc-val"><ScoreDots score={s.bankingScore} /><span className="sc-val-sm">{s.banking}</span></td>)}
              </tr>

              <tr className="sc-section-row"><td colSpan={compared.length + 1}>Подходящ за</td></tr>
              <tr>
                <td className="sc-label">Най-добър за</td>
                {compared.map(s => (
                  <td key={s.key} className="sc-val">
                    <div className="sc-tags">{s.bestFor.map(t => <span key={t} className="sc-tag-good">{t}</span>)}</div>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="sc-label">Не е идеален за</td>
                {compared.map(s => (
                  <td key={s.key} className="sc-val">
                    <div className="sc-tags">{s.notIdealFor.map(t => <span key={t} className="sc-tag-bad">{t}</span>)}</div>
                  </td>
                ))}
              </tr>

              <tr className="sc-section-row"><td colSpan={compared.length + 1}>Заключение</td></tr>
              <tr>
                <td className="sc-label">Вердикт</td>
                {compared.map(s => <td key={s.key} className="sc-val sc-verdict">{s.verdict}</td>)}
              </tr>
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div className="calc-cta" style={{ marginTop: "2rem" }}>
          <h3>Не сте сигурни кой щат да изберете?</h3>
          <p>Свържете се с нас за безплатна консултация. Ще ви помогнем да изберете оптималния щат за вашия бизнес.</p>
          <Link href="/contact" className="btn-main">Безплатна консултация →</Link>
        </div>

        {/* Related */}
        <div className="tax-links" style={{ marginTop: "2rem" }}>
          <h3>Полезни ресурси</h3>
          <div className="tax-links-grid">
            <Link href="/blog/wyoming-vs-delaware-koj-shtat-za-bulgari" className="tax-link-card">
              <span>🏔</span>
              <div><strong>Wyoming vs Delaware</strong><p>Подробно сравнение в блога</p></div>
            </Link>
            <Link href="/tools/calculator" className="tax-link-card">
              <span>🧮</span>
              <div><strong>Калкулатор на разходите</strong><p>Изчислете точните разходи</p></div>
            </Link>
            <Link href="/blog/kak-da-registriram-llc-v-amerika-ot-bulgaria" className="tax-link-card">
              <span>🏛</span>
              <div><strong>Как да регистрирам LLC</strong><p>Пълен гайд стъпка по стъпка</p></div>
            </Link>
          </div>
        </div>

        <p className="calc-disclaimer" style={{ marginTop: "1.5rem" }}>
          * Информацията е актуална към април 2026 г. Таксите и изискванията могат да се променят. За актуална информация <a href="/contact">свържете се с нас</a>. Вижте нашия <a href="/disclaimer">отказ от отговорност</a>.
        </p>
      </div>
    </div>
  );
}
