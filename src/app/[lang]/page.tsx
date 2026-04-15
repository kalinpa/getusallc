import Link from "next/link";
import Image from "next/image";
import { getDictionarySync } from "@/lib/dictionaries";
import { isValidLang, type Lang } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  if (!isValidLang(langParam)) notFound();
  const lang = langParam as Lang;
  const d = getDictionarySync(lang);
  const p = `/${lang}`;

  return (
    <>
      {/* HERO */}
      <section className="hero-section" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "7rem 2.5rem 4rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -120, right: -120, width: 600, height: 600, background: "radial-gradient(circle, rgba(217,91,28,0.06) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div className="hero-grid" style={{ position: "relative", zIndex: 1 }}>
          <div>
            <div className="hero-pill"><span className="dot" /> {d.hero.pill}</div>
            <h1 style={{ fontSize: "clamp(2.6rem, 4.8vw, 3.8rem)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.035em", marginBottom: "1.5rem", animation: "fadeUp 0.6s 0.08s ease both" }}>
              {d.hero.titleLine1}<br/><span style={{ color: "var(--orange)" }}>{d.hero.titleLine2}<br/>{d.hero.titleLine3}</span>
            </h1>
            <p style={{ fontSize: "1.1rem", color: "var(--gray)", fontWeight: 500, lineHeight: 1.75, maxWidth: 490, marginBottom: "2.25rem", animation: "fadeUp 0.6s 0.16s ease both" }}>
              {d.hero.subtitle}
            </p>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", animation: "fadeUp 0.6s 0.24s ease both" }}>
              <Link href={`${p}/contact`} className="btn-main">{d.hero.cta}</Link>
              <Link href={`${p}/#process`} className="btn-ghost">{d.hero.ctaGhost}</Link>
            </div>
          </div>
          <div style={{ position: "relative", animation: "fadeUp 0.6s 0.3s ease both" }}>
            <div style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: 16, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.06)" }}>
              <Image src="/picture.webp" alt="LLC Registration" width={800} height={600} priority style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
            <div className="fbadge" style={{ top: "8%", left: -16, animation: "bobble 5s ease-in-out infinite" }}>
              <span style={{ width: 9, height: 9, borderRadius: "50%", background: "var(--green)", display: "inline-block" }} /> {d.hero.badgeLLC}
            </div>
            <div className="fbadge" style={{ bottom: "20%", right: -16, animation: "bobble 5s ease-in-out infinite 1.8s" }}>
              <span style={{ width: 9, height: 9, borderRadius: "50%", background: "var(--blue)", display: "inline-block" }} /> {d.hero.badgeMercury}
            </div>
            <div className="fbadge" style={{ bottom: "52%", left: -24, animation: "bobble 5s ease-in-out infinite 3.2s" }}>
              <span style={{ width: 9, height: 9, borderRadius: "50%", background: "var(--orange)", display: "inline-block" }} /> {d.hero.badgeStripe}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div style={{ background: "var(--ink)", padding: "2.5rem" }}>
        <div className="stats-grid">
          <div><div style={{ fontSize: "2rem", fontWeight: 800, color: "white" }}>5<span style={{ color: "var(--orange)" }}>0</span></div><div style={{ fontSize: "0.82rem", fontWeight: 600, color: "rgba(255,255,255,0.45)", marginTop: "0.15rem" }}>{d.stats.states}</div></div>
          <div><div style={{ fontSize: "2rem", fontWeight: 800, color: "white" }}>5 <span style={{ color: "var(--orange)" }}>{d.stats.days}</span></div><div style={{ fontSize: "0.82rem", fontWeight: 600, color: "rgba(255,255,255,0.45)", marginTop: "0.15rem" }}>{d.stats.avgTime}</div></div>
          <div><div style={{ fontSize: "2rem", fontWeight: 800, color: "white" }}>10<span style={{ color: "var(--orange)" }}>0</span>%</div><div style={{ fontSize: "0.82rem", fontWeight: 600, color: "rgba(255,255,255,0.45)", marginTop: "0.15rem" }}>{d.stats.remote}</div></div>
          <div><div style={{ fontSize: "2rem", fontWeight: 800, color: "white" }}>CPA</div><div style={{ fontSize: "0.82rem", fontWeight: 600, color: "rgba(255,255,255,0.45)", marginTop: "0.15rem" }}>{d.stats.cpa}</div></div>
        </div>
      </div>

      {/* PROBLEM/SOLUTION */}
      <section style={{ padding: "6rem 2.5rem", background: "var(--white)" }}>
        <div className="sec">
          <span className="tag">{d.ps.tag}</span>
          <h2 className="stitle" dangerouslySetInnerHTML={{ __html: d.ps.title.replace('\n','<br/>') }} />
          <div className="ps-grid">
            <div>
              <div style={{ fontWeight: 800, fontSize: "1.1rem", marginBottom: "1.25rem" }}>{d.ps.problemsTitle}</div>
              {d.ps.problems.map(([t,desc],i) => (
                <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", padding: "1.15rem 0", borderBottom: "1px solid var(--border-light)" }}>
                  <div className="ps-dot bad">✕</div>
                  <div><h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--ink2)", marginBottom: "0.1rem" }}>{t}</h3><p style={{ fontSize: "0.88rem", color: "var(--gray)", fontWeight: 500, lineHeight: 1.55 }}>{desc}</p></div>
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: "1.1rem", marginBottom: "1.25rem" }}>{d.ps.solutionsTitle}</div>
              {d.ps.solutions.map(([t,desc],i) => (
                <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", padding: "1.15rem 0", borderBottom: "1px solid var(--border-light)" }}>
                  <div className="ps-dot ok">✓</div>
                  <div><h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--ink2)", marginBottom: "0.1rem" }}>{t}</h3><p style={{ fontSize: "0.88rem", color: "var(--gray)", fontWeight: 500, lineHeight: 1.55 }}>{desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: "6rem 2.5rem" }}>
        <div className="sec">
          <span className="tag">{d.services.tag}</span>
          <h2 className="stitle">{d.services.title}</h2>
          <div className="srv-grid">
            {d.services.items.map((s,i) => (
              <div key={i} className={`srv ${s.pop ? 'pop' : ''}`}>
                {s.pop && <span className="pop-tag">{d.services.popTag}</span>}
                <div className="srv-ico">{s.icon}</div>
                <h3>{s.name}</h3>
                <ul style={{ marginBottom: "1.5rem" }}>
                  {s.features.map((f,j) => <li key={j}><span className="check">✓</span>{f}</li>)}
                </ul>
                <Link href={`${p}/contact`} className={`srv-btn ${s.pop ? 'orange' : ''}`}>{d.services.cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" style={{ padding: "6rem 2.5rem", background: "var(--white)" }}>
        <div className="sec">
          <span className="tag">{d.steps.tag}</span>
          <h2 className="stitle" dangerouslySetInnerHTML={{ __html: d.steps.title.replace('\n','<br/>') }} />
          <p className="sdesc">{d.steps.subtitle}</p>
          <div className="steps-grid">
            {d.steps.items.map((s,i) => (
              <div key={i} className="stp"><div className="stp-n">{s.n}</div><h3>{s.title}</h3><p>{s.desc}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section id="tools" style={{ padding: "6rem 2.5rem" }}>
        <div className="sec">
          <span className="tag">{d.tools.tag}</span>
          <h2 className="stitle">{d.tools.title}</h2>
          <p className="sdesc">{d.tools.subtitle}</p>
          <div className="tools-grid">
            {d.tools.items.map((t,i) => (
              <Link key={i} href={`${p}${t.href}`} className="tcard">
                <div className="tcard-ico">{t.icon}</div>
                <div><h3>{t.name}</h3><p>{t.desc}</p><span className="tcard-link">{t.link}</span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANTAGE */}
      <section style={{ padding: "6rem 2.5rem", background: "var(--white)" }}>
        <div className="sec">
          <span className="tag">{d.advantage.tag}</span>
          <h2 className="stitle" dangerouslySetInnerHTML={{ __html: d.advantage.title.replace('\n','<br/>') }} />
          <div className="adv-grid">
            {d.advantage.cards.map((c,i) => (
              <div key={i} className="adv-card">
                <h3>{c.title}</h3><p>{c.desc}</p>
                {c.items.map((item,j) => <div key={j} className="adv-item"><span className="adv-chk">✓</span>{item}</div>)}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: "6rem 2.5rem" }}>
        <div className="sec">
          <span className="tag">{d.testimonials.tag}</span>
          <h2 className="stitle">{d.testimonials.title}</h2>
          <div className="tst-grid">
            {d.testimonials.items.map((t,i) => (
              <div key={i} className="tst">
                <div className="tst-stars">★★★★★</div>
                <p>{t.text}</p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
                  <div className="tst-av">{t.init}</div>
                  <div><div style={{ fontWeight: 800, fontSize: "0.9rem" }}>{t.name}</div><div style={{ fontSize: "0.8rem", color: "var(--gray)", fontWeight: 600 }}>{t.role}</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ padding: "6rem 2.5rem", background: "var(--white)" }}>
        <div className="sec">
          <span className="tag">{d.faq.tag}</span>
          <h2 className="stitle">{d.faq.title}</h2>
          <div style={{ maxWidth: 720, margin: "3rem auto 0" }}>
            {d.faq.items.map((faq,i) => (
              <details key={i} style={{ borderBottom: "1px solid var(--border-light)" }}>
                <summary style={{ padding: "1.35rem 0", fontWeight: 700, fontSize: "1rem" }}>{faq.q}</summary>
                <p style={{ fontSize: "0.92rem", color: "var(--gray)", lineHeight: 1.75, fontWeight: 500, paddingBottom: "1.25rem" }}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--ink)", textAlign: "center", padding: "5.5rem 2.5rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(217,91,28,0.1) 0%, transparent 55%)", pointerEvents: "none" }} />
        <div className="sec" style={{ position: "relative" }}>
          <span className="tag" style={{ justifyContent: "center", color: "var(--orange)" }}>{d.cta.tag}</span>
          <h2 className="stitle" style={{ color: "white" }} dangerouslySetInnerHTML={{ __html: d.cta.title.replace('\n','<br/>') }} />
          <p className="sdesc" style={{ color: "rgba(255,255,255,0.5)", margin: "0 auto 2rem", maxWidth: 480 }}>{d.cta.subtitle}</p>
          <Link href={`${p}/contact`} className="btn-main">{d.cta.button}</Link>
          <div style={{ marginTop: "1rem", fontSize: "0.82rem", color: "rgba(255,255,255,0.3)", fontWeight: 600 }}>{d.cta.note}</div>
        </div>
      </section>
    </>
  );
}
