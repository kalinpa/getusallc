"use client";
import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { isValidLang, type Lang } from "@/lib/i18n";
import { getDictionarySync, type Dictionary } from "@/lib/dictionaries";
import { Emoji } from "@/components/Emoji";

interface RiskResult {
  level: "low" | "medium" | "high";
  title: string;
  summary: string;
  details: string[];
  actions: string[];
  warning?: string;
}

function calculateResult(answers: Record<string, string>, t: Dictionary["taxTest"]): RiskResult {
  const risks: string[] = [];
  const actions: string[] = [];
  let riskScore = 0;
  let warning = "";

  if (answers.residence === "us") {
    risks.push(t.risks.usResident);
    riskScore += 3;
  } else if (answers.residence === "bg") {
    actions.push(t.actions.napCert);
  }

  if (answers.presence === "office") {
    risks.push(t.risks.pe_office);
    riskScore += 3;
  } else if (answers.presence === "warehouse") {
    risks.push(t.risks.pe_warehouse);
    riskScore += 2;
  }

  if (answers.members === "multi-us") {
    risks.push(t.risks.multi_us);
    riskScore += 2;
    actions.push(t.actions.file1065);
  } else if (answers.members === "single") {
    actions.push(t.actions.file5472);
  } else {
    actions.push(t.actions.file1065);
  }

  if (answers.inventory === "fba") {
    risks.push(t.risks.fba_nexus);
    riskScore += 2;
    actions.push(t.actions.fbaProbe);
  } else if (answers.inventory === "own") {
    risks.push(t.risks.own_warehouse);
    riskScore += 3;
  }

  if (answers.classification === "ccorp") {
    risks.push(t.risks.ccorp);
    riskScore += 3;
    actions.push(t.actions.ccorpReview);
  } else if (answers.classification === "unsure") {
    actions.push(t.actions.check8832);
  }

  if (answers.declaration === "missed") {
    warning = t.warnings.missedDeclaration;
    riskScore += 2;
    actions.push(t.actions.missedFile);
  }

  actions.push(t.actions.cpaSiddo);
  actions.push(t.actions.noMixing);
  if (answers.residence === "bg") {
    actions.push(t.actions.bgDeclare);
  }

  if (riskScore <= 1) {
    return {
      level: "low",
      title: t.results.low.title,
      summary: t.results.low.summary,
      details: risks.length ? risks : [t.results.low.defaultDetail],
      actions,
      warning,
    };
  } else if (riskScore <= 3) {
    return {
      level: "medium",
      title: t.results.medium.title,
      summary: t.results.medium.summary,
      details: risks,
      actions,
      warning,
    };
  } else {
    return {
      level: "high",
      title: t.results.high.title,
      summary: t.results.high.summary,
      details: risks,
      actions,
      warning,
    };
  }
}

export default function TaxTestPage() {
  const params = useParams();
  const lang = (isValidLang(params.lang as string) ? params.lang : 'bg') as Lang;
  const d = getDictionarySync(lang);
  const t = d.taxTest;
  const p = `/${lang}`;

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<RiskResult | null>(null);

  const questions = t.questions;
  const currentQ = questions[step];
  const progress = ((step) / questions.length) * 100;

  const selectAnswer = (value: string) => {
    const newAnswers = { ...answers, [currentQ.id]: value };
    setAnswers(newAnswers);
    if (step < questions.length - 1) {
      setTimeout(() => setStep(step + 1), 200);
    } else {
      setTimeout(() => setResult(calculateResult(newAnswers, t)), 200);
    }
  };

  const goBack = () => { if (step > 0) setStep(step - 1); };
  const restart = () => { setStep(0); setAnswers({}); setResult(null); };

  const riskColors = { low: "var(--green)", medium: "#f59e0b", high: "#ef4444" };
  const riskBg = { low: "var(--green-soft)", medium: "#fef3c7", high: "#fef2f2" };

  return (
    <div className="tax-page">
      <div className="sec">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href={p}>{t.breadcrumbHome}</Link><span>/</span>
          <Link href={`${p}/#tools`}>{t.breadcrumbTools}</Link><span>/</span>
          <span>{t.breadcrumb}</span>
        </nav>

        {!result ? (
          <div className="tax-quiz">
            <div className="tax-header">
              <span className="tag">{t.tag}</span>
              <h1 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: "0.5rem" }}>
                {t.h1}
              </h1>
              <p style={{ fontSize: "0.95rem", color: "var(--gray)", fontWeight: 500 }}>
                {t.subtitle}
              </p>
            </div>

            <div className="tax-progress">
              <div className="tax-progress-bar" style={{ width: `${progress}%` }} />
            </div>
            <div className="tax-step-info">
              <span>{t.questionOf} {step + 1} {t.of} {questions.length}</span>
              {step > 0 && <button onClick={goBack} className="tax-back-btn">{t.prev}</button>}
            </div>

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
                    {opt.icon && <span className="tax-option-icon"><Emoji size={20}>{opt.icon}</Emoji></span>}
                    <span>{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="tax-result">
            <div className="tax-header">
              <span className="tag">{t.resultTag}</span>
              <h1 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: "1rem" }}>
                {t.resultTitle}
              </h1>
            </div>

            <div className="tax-risk-card" style={{ background: riskBg[result.level], borderColor: riskColors[result.level] }}>
              <div className="tax-risk-badge" style={{ background: riskColors[result.level] }}>
                {t.riskLabels[result.level]}
              </div>
              <h2 className="tax-risk-title">{result.title}</h2>
              <p className="tax-risk-summary">{result.summary}</p>
            </div>

            {result.warning && (
              <div className="tax-warning">
                <strong>⚠️ {result.warning}</strong>
              </div>
            )}

            <div className="tax-details-card">
              <h3>{t.whatMeans}</h3>
              {result.details.map((dtl, i) => (
                <div key={i} className="tax-detail-row">
                  <span className="tax-detail-dot" style={{ background: riskColors[result.level] }} />
                  <p>{dtl}</p>
                </div>
              ))}
            </div>

            <div className="tax-details-card">
              <h3>{t.recommendations}</h3>
              {result.actions.map((a, i) => (
                <div key={i} className="tax-detail-row">
                  <span className="tax-detail-dot" style={{ background: "var(--orange)" }} />
                  <p>{a}</p>
                </div>
              ))}
            </div>

            <div className="calc-cta">
              <h3>{t.ctaTitle}</h3>
              <p>{t.ctaText}</p>
              <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
                <Link href={`${p}/contact`} className="btn-main">{t.ctaButton}</Link>
                <button onClick={restart} className="btn-ghost">{t.retake}</button>
              </div>
            </div>

            <div className="tax-links">
              <h3>{t.resourcesTitle}</h3>
              <div className="tax-links-grid">
                {t.resources.map((r, i) => (
                  <Link key={i} href={`${p}${r.href}`} className="tax-link-card">
                    <span>{r.icon}</span>
                    <div>
                      <strong>{r.title}</strong>
                      <p>{r.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <p className="calc-disclaimer">
              {t.disclaimer} <a href={`${p}/disclaimer`}>{t.disclaimerLink}</a>.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
