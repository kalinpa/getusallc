"use client";
import { useState } from "react";
import Link from "next/link";

interface Question {
  id: string;
  text: string;
  subtext?: string;
  options: { label: string; value: string; icon?: string }[];
}

const questions: Question[] = [
  {
    id: "residence",
    text: "Къде живеете постоянно?",
    subtext: "Данъчната ви резиденция е ключова за определяне на задълженията.",
    options: [
      { label: "България", value: "bg", icon: "🇧🇬" },
      { label: "Друга държава в ЕС", value: "eu", icon: "🇪🇺" },
      { label: "САЩ", value: "us", icon: "🇺🇸" },
      { label: "Друга държава", value: "other", icon: "🌍" },
    ],
  },
  {
    id: "presence",
    text: "Имате ли физическо присъствие в САЩ?",
    subtext: "Офис, склад, служители или представител, който сключва договори.",
    options: [
      { label: "Не, нямам нищо в САЩ", value: "none", icon: "✅" },
      { label: "Имам Registered Agent (само)", value: "agent", icon: "✅" },
      { label: "Имам склад / инвентар (напр. Amazon FBA)", value: "warehouse", icon: "⚠️" },
      { label: "Имам офис или служители", value: "office", icon: "🔴" },
    ],
  },
  {
    id: "members",
    text: "Колко собственици има LLC-то?",
    subtext: "Броят на собствениците определя данъчната форма.",
    options: [
      { label: "Един собственик (аз)", value: "single", icon: "👤" },
      { label: "Двама или повече (всички чуждестранни)", value: "multi-foreign", icon: "👥" },
      { label: "Двама или повече (поне един е американец)", value: "multi-us", icon: "🇺🇸" },
    ],
  },
  {
    id: "business",
    text: "Какъв е основният ви бизнес?",
    subtext: "Типът дейност влияе на данъчното третиране.",
    options: [
      { label: "Услуги / Консултации / Фрийланс", value: "services", icon: "💼" },
      { label: "SaaS / Софтуер", value: "saas", icon: "💻" },
      { label: "E-commerce (собствен магазин)", value: "ecommerce", icon: "🛒" },
      { label: "Amazon FBA / Marketplace", value: "fba", icon: "📦" },
      { label: "Дигитални продукти / Курсове", value: "digital", icon: "📚" },
    ],
  },
  {
    id: "inventory",
    text: "Съхранявате ли инвентар / стока в САЩ?",
    subtext: "Физическото наличие на стока може да създаде данъчни задължения.",
    options: [
      { label: "Не, всичко е дигитално или извън САЩ", value: "no", icon: "✅" },
      { label: "Да, в Amazon FBA складове", value: "fba", icon: "⚠️" },
      { label: "Да, в собствен или нает склад", value: "own", icon: "🔴" },
    ],
  },
  {
    id: "classification",
    text: "Как е класифицирано LLC-то за данъчни цели?",
    subtext: "Ако не сте подавали Form 8832, LLC-то е disregarded entity (по подразбиране).",
    options: [
      { label: "По подразбиране (disregarded entity)", value: "default", icon: "✅" },
      { label: "Избрали сме облагане като C-Corporation", value: "ccorp", icon: "⚠️" },
      { label: "Не съм сигурен", value: "unsure", icon: "❓" },
    ],
  },
  {
    id: "revenue",
    text: "Какъв е приблизителният ви годишен приход?",
    subtext: "Приходът влияе на някои щатски данъчни прагове.",
    options: [
      { label: "Под $50,000", value: "under50k", icon: "📊" },
      { label: "$50,000 – $200,000", value: "50k-200k", icon: "📊" },
      { label: "$200,000 – $1,000,000", value: "200k-1m", icon: "📊" },
      { label: "Над $1,000,000", value: "over1m", icon: "📊" },
    ],
  },
  {
    id: "declaration",
    text: "Подавали ли сте данъчна декларация в САЩ досега?",
    subtext: "Годишната декларация е задължителна дори ако не дължите данъци.",
    options: [
      { label: "Да, редовно подавам", value: "yes", icon: "✅" },
      { label: "Не, но LLC-то е ново", value: "new", icon: "⏳" },
      { label: "Не, пропуснал/а съм", value: "missed", icon: "🔴" },
      { label: "Не знам / Не съм сигурен", value: "unsure", icon: "❓" },
    ],
  },
];

interface RiskResult {
  level: "low" | "medium" | "high";
  title: string;
  summary: string;
  details: string[];
  actions: string[];
  warning?: string;
}

function calculateResult(answers: Record<string, string>): RiskResult {
  const risks: string[] = [];
  const actions: string[] = [];
  let riskScore = 0;
  let warning = "";

  // Residence
  if (answers.residence === "us") {
    risks.push("Като US резидент дължите федерален данък върху световния си доход.");
    riskScore += 3;
  } else if (answers.residence === "bg") {
    actions.push("Поискайте удостоверение за данъчна резиденция от НАП за прилагане на СИДДО.");
  }

  // Physical presence
  if (answers.presence === "office") {
    risks.push("Офис или служители в САЩ създават Permanent Establishment (PE) — дължите US данъци върху свързаните доходи.");
    riskScore += 3;
  } else if (answers.presence === "warehouse") {
    risks.push("Инвентар в САЩ може да създаде nexus за sales tax и потенциално PE за income tax.");
    riskScore += 2;
  }

  // Members
  if (answers.members === "multi-us") {
    risks.push("Американски партньор в LLC-то създава допълнителни данъчни задължения. Партньорът дължи US данъци върху своя дял.");
    riskScore += 2;
    actions.push("Подавайте Form 1065 + Schedule K-1 ежегодно.");
  } else if (answers.members === "single") {
    actions.push("Подавайте Form 5472 + Form 1120 ежегодно (глоба $25,000 при неподаване).");
  } else {
    actions.push("Подавайте Form 1065 + Schedule K-1 ежегодно.");
  }

  // Inventory
  if (answers.inventory === "fba") {
    risks.push("Amazon FBA складовете създават nexus в множество щати — може да дължите Sales Tax.");
    riskScore += 2;
    actions.push("Проучете sales tax nexus в щатите, където Amazon съхранява стоката ви.");
  } else if (answers.inventory === "own") {
    risks.push("Собствен склад в САЩ е силен индикатор за PE — вероятно дължите федерален и щатски данък.");
    riskScore += 3;
  }

  // Classification
  if (answers.classification === "ccorp") {
    risks.push("C-Corporation облагане означава 21% федерален корпоративен данък върху печалбата на LLC-то.");
    riskScore += 3;
    actions.push("Обмислете дали C-Corp класификацията е оптимална за вас.");
  } else if (answers.classification === "unsure") {
    actions.push("Проверете дали е подавана Form 8832. Ако не — LLC-то е disregarded entity по подразбиране.");
  }

  // Declaration
  if (answers.declaration === "missed") {
    warning = "Внимание: Пропуснатата данъчна декларация може да доведе до глоба от $25,000. Препоръчваме незабавна консултация с CPA.";
    riskScore += 2;
    actions.push("Подайте пропуснатите декларации възможно най-скоро с помощта на CPA.");
  }

  // Always add these
  actions.push("Работете с лицензиран CPA, запознат със СИДДО спогодбата.");
  actions.push("Не смесвайте лични и бизнес средства.");
  if (answers.residence === "bg") {
    actions.push("Декларирайте доходите от LLC-то в годишната данъчна декларация в България.");
  }

  // Determine result
  if (riskScore <= 1) {
    return {
      level: "low",
      title: "Нисък данъчен риск в САЩ",
      summary: "Базирано на отговорите ви, вероятно не дължите федерален данък в САЩ. Доходите ви се облагат в България по СИДДО спогодбата.",
      details: risks.length ? risks : ["Нямате индикатори за US данъчни задължения. LLC-то е disregarded entity и доходите се облагат само в държавата ви на резиденция."],
      actions,
      warning,
    };
  } else if (riskScore <= 3) {
    return {
      level: "medium",
      title: "Среден данъчен риск — Необходима е консултация",
      summary: "Имате фактори, които могат да създадат данъчни задължения в САЩ. Препоръчваме професионална консултация.",
      details: risks,
      actions,
      warning,
    };
  } else {
    return {
      level: "high",
      title: "Висок данъчен риск — Задължителна е CPA консултация",
      summary: "Базирано на отговорите ви, вероятно имате данъчни задължения в САЩ. Не предприемайте действия без професионален съвет.",
      details: risks,
      actions,
      warning,
    };
  }
}

export default function TaxTestPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<RiskResult | null>(null);

  const currentQ = questions[step];
  const progress = ((step) / questions.length) * 100;

  const selectAnswer = (value: string) => {
    const newAnswers = { ...answers, [currentQ.id]: value };
    setAnswers(newAnswers);

    if (step < questions.length - 1) {
      setTimeout(() => setStep(step + 1), 200);
    } else {
      setTimeout(() => setResult(calculateResult(newAnswers)), 200);
    }
  };

  const goBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const restart = () => {
    setStep(0);
    setAnswers({});
    setResult(null);
  };

  const riskColors = { low: "var(--green)", medium: "#f59e0b", high: "#ef4444" };
  const riskBg = { low: "var(--green-soft)", medium: "#fef3c7", high: "#fef2f2" };
  const riskLabels = { low: "Нисък риск", medium: "Среден риск", high: "Висок риск" };

  return (
    <div className="tax-page">
      <div className="sec">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Начало</Link><span>/</span>
          <Link href="/#tools">Инструменти</Link><span>/</span>
          <span>Данъчен тест</span>
        </nav>

        {!result ? (
          <div className="tax-quiz">
            <div className="tax-header">
              <span className="tag">Инструменти</span>
              <h1 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: "0.5rem" }}>
                Дължите ли данъци в САЩ?
              </h1>
              <p style={{ fontSize: "0.95rem", color: "var(--gray)", fontWeight: 500 }}>
                8 въпроса · 2 минути · Персонализиран резултат
              </p>
            </div>

            {/* Progress */}
            <div className="tax-progress">
              <div className="tax-progress-bar" style={{ width: `${progress}%` }} />
            </div>
            <div className="tax-step-info">
              <span>Въпрос {step + 1} от {questions.length}</span>
              {step > 0 && <button onClick={goBack} className="tax-back-btn">← Назад</button>}
            </div>

            {/* Question */}
            <div className="tax-question">
              <h2 className="tax-q-text">{currentQ.text}</h2>
              {currentQ.subtext && <p className="tax-q-sub">{currentQ.subtext}</p>}
              <div className="tax-options">
                {currentQ.options.map((opt) => (
                  <button
                    key={opt.value}
                    className={`tax-option${answers[currentQ.id] === opt.value ? " selected" : ""}`}
                    onClick={() => selectAnswer(opt.value)}
                  >
                    {opt.icon && <span className="tax-option-icon">{opt.icon}</span>}
                    <span>{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="tax-result">
            <div className="tax-header">
              <span className="tag">Резултат</span>
              <h1 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: "1rem" }}>
                Вашият данъчен профил
              </h1>
            </div>

            {/* Risk badge */}
            <div className="tax-risk-card" style={{ background: riskBg[result.level], borderColor: riskColors[result.level] }}>
              <div className="tax-risk-badge" style={{ background: riskColors[result.level] }}>
                {riskLabels[result.level]}
              </div>
              <h2 className="tax-risk-title">{result.title}</h2>
              <p className="tax-risk-summary">{result.summary}</p>
            </div>

            {/* Warning */}
            {result.warning && (
              <div className="tax-warning">
                <strong>⚠️ {result.warning}</strong>
              </div>
            )}

            {/* Details */}
            <div className="tax-details-card">
              <h3>Какво означава това за вас</h3>
              {result.details.map((d, i) => (
                <div key={i} className="tax-detail-row">
                  <span className="tax-detail-dot" style={{ background: riskColors[result.level] }} />
                  <p>{d}</p>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="tax-details-card">
              <h3>Препоръчани действия</h3>
              {result.actions.map((a, i) => (
                <div key={i} className="tax-detail-row">
                  <span className="tax-detail-dot" style={{ background: "var(--orange)" }} />
                  <p>{a}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="calc-cta">
              <h3>Искате професионална оценка?</h3>
              <p>Този тест е ориентировъчен. За точна данъчна консултация, свържете се с нашия лицензиран CPA.</p>
              <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
                <Link href="/contact" className="btn-main">Консултация с CPA →</Link>
                <button onClick={restart} className="btn-ghost">Направи теста отново</button>
              </div>
            </div>

            {/* Links */}
            <div className="tax-links">
              <h3>Полезни ресурси</h3>
              <div className="tax-links-grid">
                <Link href="/blog/siddo-spogodba-bulgaria-sasht-danaci" className="tax-link-card">
                  <span>📄</span>
                  <div>
                    <strong>СИДДО спогодба</strong>
                    <p>Как да не плащате данъци два пъти</p>
                  </div>
                </Link>
                <Link href="/blog/kak-da-registriram-llc-v-amerika-ot-bulgaria" className="tax-link-card">
                  <span>🏛</span>
                  <div>
                    <strong>Регистрация на LLC</strong>
                    <p>Пълен гайд стъпка по стъпка</p>
                  </div>
                </Link>
                <Link href="/tools/calculator" className="tax-link-card">
                  <span>🧮</span>
                  <div>
                    <strong>Калкулатор на разходите</strong>
                    <p>Изчислете разходите за LLC</p>
                  </div>
                </Link>
              </div>
            </div>

            <p className="calc-disclaimer">
              * Този тест е с информативен характер и не представлява данъчна консултация. Резултатите са ориентировъчни. За точна оценка на вашата данъчна ситуация, консултирайте се с лицензиран CPA. Вижте нашия <a href="/disclaimer">отказ от отговорност</a>.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
