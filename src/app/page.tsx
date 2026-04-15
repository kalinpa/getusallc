import Link from "next/link";
import Image from "next/image";

const services = [
  { icon: "🏛", name: "LLC Регистрация", features: ["Регистрация в избран щат","EIN данъчен номер","Бизнес адрес в САЩ - 1 год.","Registered Agent - 1 год.","Operating Agreement","Viber / WhatsApp поддръжка"], pop: true },
  { icon: "📋", name: "EIN Заявка", features: ["Подготовка на SS-4 формуляр","Официална заявка до IRS","Проследяване на процеса","Готов за 3-4 седмици"] },
  { icon: "🪪", name: "ITIN Заявка", features: ["Подготовка на W-7 формуляр","Проверка на документи","Официална заявка до IRS","Пълно проследяване"] },
  { icon: "📊", name: "Счетоводство", features: ["Категоризация на транзакции","Сканиране на разходи","Import от Mercury / Wise","Подготовка за CPA"] },
  { icon: "📄", name: "Данъчна декларация", features: ["Annual Report подаване","Franchise Tax","Federal return за LLC","СИДДО консултация (БГ-САЩ)"] },
  { icon: "💳", name: "Плащания и Банка", features: ["Mercury / Relay сметка","Stripe активиране","PayPal Business настройка","Wise Business интеграция"] },
];

const steps = [
  { n: "01", title: "Попълнете формуляра", desc: "Въведете основна информация за бизнеса. Отнема под 5 минути." },
  { n: "02", title: "Получете оферта", desc: "Изпращаме индивидуална оферта спрямо вашите нужди в рамките на 24ч." },
  { n: "03", title: "Ние работим", desc: "CPA и адвокат регистрират фирмата и подготвят документите." },
  { n: "04", title: "Стартирайте бизнеса", desc: "Получавате документи, отваряте банка и приемате плащания." },
];

const tools = [
  { icon: "🧮", name: "Калкулатор на разходите", desc: "Изберете щат и тип бизнес. Вижте точните разходи за регистрация и годишна поддръжка.", link: "Изчисли безплатно →", href: "/tools/calculator" },
  { icon: "📋", name: "Данъчен тест", desc: "8 въпроса, за да разберете дали и какви данъци дължите в САЩ като българско лице.", link: "Направи теста →", href: "/tools/tax-test" },
  { icon: "🗺", name: "Сравнение на щати", href: "/tools/state-comparison", desc: "Wyoming, Delaware или New Mexico - коя юрисдикция е подходяща за вашия бизнес.", link: "Сравни безплатно →" },
  { icon: "🔍", name: "Търсачка в съдържанието", href: "/search", desc: "Намерете отговор на вашия въпрос в нашите гайдове и статии за секунди.", link: "Търси →" },
];

const faqs = [
  { q: "Трябва ли да пътувам до САЩ?", a: "Не. Целият процес е 100% дистанционен - от регистрацията до банковата сметка. Не е необходимо да стъпвате в Америка." },
  { q: "Колко време отнема регистрацията?", a: "LLC регистрацията отнема 3-5 работни дни. EIN номерът идва за 3-4 седмици. Банковата сметка е готова до 1 седмица след LLC-то." },
  { q: "Дължа ли данъци в САЩ?", a: "Зависи от бизнес модела. Без офис и служители в САЩ обикновено не дължите федерален данък. СИДДО спогодбата между България и САЩ предотвратява двойно облагане." },
  { q: "Мога ли да отворя банкова сметка?", a: "Да. Помагаме за Mercury или Relay - изцяло дистанционно. Също съдействаме за Wise Business и Stripe." },
  { q: "Wyoming или Delaware?", a: "За повечето българи Wyoming е оптимален - ниски годишни разходи, без щатски данък. Delaware е за стартъпи с инвеститори." },
  { q: "LLC или Corporation?", a: "LLC е по-гъвкав, по-евтин и без двойно облагане - идеален за чуждестранни предприемачи. За 95% от българите LLC е правилният избор." },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero-section" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "7rem 2.5rem 4rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -120, right: -120, width: 600, height: 600, background: "radial-gradient(circle, rgba(217,91,28,0.06) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div className="hero-grid" style={{ position: "relative", zIndex: 1 }}>
          <div>
            <div className="hero-pill"><span className="dot" /> Лицензиран CPA и адвокат в САЩ</div>
            <h1 style={{ fontSize: "clamp(2.6rem, 4.8vw, 3.8rem)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.035em", marginBottom: "1.5rem", animation: "fadeUp 0.6s 0.08s ease both" }}>
              Американска фирма.<br/><span style={{ color: "var(--orange)" }}>Без да стъпваш<br/>в Америка.</span>
            </h1>
            <p style={{ fontSize: "1.1rem", color: "var(--gray)", fontWeight: 500, lineHeight: 1.75, maxWidth: 490, marginBottom: "2.25rem", animation: "fadeUp 0.6s 0.16s ease both" }}>
              Регистрация на LLC, данъчен номер, банкова сметка и Stripe - от България. Работиш директно с американски CPA и адвокат, не с посредници.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", animation: "fadeUp 0.6s 0.24s ease both" }}>
              <Link href="/contact" className="btn-main">Поискай оферта →</Link>
              <Link href="#process" className="btn-ghost">Как работи</Link>
            </div>
          </div>
          <div style={{ position: "relative", animation: "fadeUp 0.6s 0.3s ease both" }}>
            <div style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: 16, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.06)" }}>
              <Image src="/picture.webp" alt="LLC Registration" width={800} height={600} priority style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
            <div className="fbadge" style={{ top: "8%", left: -16, animation: "bobble 5s ease-in-out infinite" }}>
              <span style={{ width: 9, height: 9, borderRadius: "50%", background: "var(--green)", display: "inline-block" }} /> LLC Регистрирана
            </div>
            <div className="fbadge" style={{ bottom: "20%", right: -16, animation: "bobble 5s ease-in-out infinite 1.8s" }}>
              <span style={{ width: 9, height: 9, borderRadius: "50%", background: "var(--blue)", display: "inline-block" }} /> Mercury сметка
            </div>
            <div className="fbadge" style={{ bottom: "52%", left: -24, animation: "bobble 5s ease-in-out infinite 3.2s" }}>
              <span style={{ width: 9, height: 9, borderRadius: "50%", background: "var(--orange)", display: "inline-block" }} /> Stripe активен
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div style={{ background: "var(--ink)", padding: "2.5rem" }}>
        <div className="stats-grid">
          <div><div style={{ fontSize: "2rem", fontWeight: 800, color: "white" }}>5<span style={{ color: "var(--orange)" }}>0</span></div><div style={{ fontSize: "0.82rem", fontWeight: 600, color: "rgba(255,255,255,0.45)", marginTop: "0.15rem" }}>Щата</div></div>
          <div><div style={{ fontSize: "2rem", fontWeight: 800, color: "white" }}>5 <span style={{ color: "var(--orange)" }}>дни</span></div><div style={{ fontSize: "0.82rem", fontWeight: 600, color: "rgba(255,255,255,0.45)", marginTop: "0.15rem" }}>Средно време</div></div>
          <div><div style={{ fontSize: "2rem", fontWeight: 800, color: "white" }}>10<span style={{ color: "var(--orange)" }}>0</span>%</div><div style={{ fontSize: "0.82rem", fontWeight: 600, color: "rgba(255,255,255,0.45)", marginTop: "0.15rem" }}>Дистанционно</div></div>
          <div><div style={{ fontSize: "2rem", fontWeight: 800, color: "white" }}>CPA</div><div style={{ fontSize: "0.82rem", fontWeight: 600, color: "rgba(255,255,255,0.45)", marginTop: "0.15rem" }}>Лицензиран в САЩ</div></div>
        </div>
      </div>

      {/* PROBLEM/SOLUTION */}
      <section style={{ padding: "6rem 2.5rem", background: "var(--white)" }}>
        <div className="sec">
          <span className="tag">Защо ние</span>
          <h2 className="stitle">Познатите проблеми -<br/>и нашите решения</h2>
          <div className="ps-grid">
            <div>
              <div style={{ fontWeight: 800, fontSize: "1.1rem", marginBottom: "1.25rem" }}>Типичните пречки</div>
              {[["Бюрокрация и объркване","Десетки форми, непознати термини и противоречива информация от форуми."],["Скрити разходи","Агенции с ниски рекламни цени, но стотици евро скрити такси след това."],["Посредници без лиценз","Повечето услуги идват от препродавачи без юридическо образование."]].map(([t,d],i) => (
                <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", padding: "1.15rem 0", borderBottom: "1px solid var(--border-light)" }}>
                  <div className="ps-dot bad">✕</div>
                  <div><h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--ink2)", marginBottom: "0.1rem" }}>{t}</h3><p style={{ fontSize: "0.88rem", color: "var(--gray)", fontWeight: 500, lineHeight: 1.55 }}>{d}</p></div>
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: "1.1rem", marginBottom: "1.25rem" }}>Нашият подход</div>
              {[["Стъпка по стъпка на български","Ясни гайдове и лична подкрепа на всеки етап от процеса."],["Индивидуална оферта","Цена спрямо вашите конкретни нужди. Без скрити такси и изненади."],["Директен достъп до CPA и адвокат","Фирмата ви се обслужва от лицензиран американски специалист."]].map(([t,d],i) => (
                <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", padding: "1.15rem 0", borderBottom: "1px solid var(--border-light)" }}>
                  <div className="ps-dot ok">✓</div>
                  <div><h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--ink2)", marginBottom: "0.1rem" }}>{t}</h3><p style={{ fontSize: "0.88rem", color: "var(--gray)", fontWeight: 500, lineHeight: 1.55 }}>{d}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: "6rem 2.5rem" }}>
        <div className="sec">
          <span className="tag">Услуги</span>
          <h2 className="stitle">Всичко, от което имате нужда</h2>
          <p className="sdesc">Покриваме целия процес - от регистрация до данъчна декларация. Всяка оферта е индивидуална.</p>
          <div className="srv-grid">
            {services.map((s,i) => (
              <div key={i} className={`srv${s.pop ? " pop" : ""}`}>
                {s.pop && <span className="pop-tag">Най-популярна</span>}
                <div className="srv-ico">{s.icon}</div>
                <h3>{s.name}</h3>
                <div className="price">По запитване</div>
                <div className="pnote">индивидуална оферта</div>
                <ul>
                  {s.features.map((f,j) => (
                    <li key={j}><span className="check">✓</span>{f}</li>
                  ))}
                </ul>
                <Link href="/contact" className={`srv-btn${s.pop ? " orange" : ""}`}>Свържете се</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section id="process" style={{ padding: "6rem 2.5rem", background: "var(--white)" }}>
        <div className="sec">
          <span className="tag">Процес</span>
          <h2 className="stitle">Четири стъпки до вашата<br/>американска фирма</h2>
          <p className="sdesc">От заявката до първото плащане - ние се грижим за всичко.</p>
          <div className="steps-grid">
            {steps.map((s,i) => (
              <div key={i} className="stp">
                <div className="stp-n">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section id="tools" style={{ padding: "6rem 2.5rem" }}>
        <div className="sec">
          <span className="tag">Инструменти</span>
          <h2 className="stitle">Разберете преди да решите</h2>
          <p className="sdesc">Безплатни инструменти за оценка на разходи и информирано решение.</p>
          <div className="tools-grid">
            {tools.map((t,i) => (
              <Link key={i} href={t.href || "#"} className="tcard">
                <div className="tcard-ico">{t.icon}</div>
                <div>
                  <h3>{t.name}</h3>
                  <p>{t.desc}</p>
                  <span className="tcard-link">{t.link}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANTAGE */}
      <section style={{ padding: "6rem 2.5rem", background: "var(--white)" }}>
        <div className="sec">
          <span className="tag">Предимство</span>
          <h2 className="stitle">Защо GetUSA LLC, а не<br/>поредната агенция</h2>
          <div className="adv-grid">
            {[
              { title: "Лицензиран CPA и адвокат", desc: "Не работите с посредник. Вашата фирма се регистрира директно от лицензиран американски CPA и адвокат.", items: ["Директна комуникация с CPA","Юридическа проверка на документите","Данъчна консултация включена"] },
              { title: "Специализирани за България", desc: "Познаваме спецификите на българския пазар - от СИДДО спогодбата до проблемите с PayPal и Stripe.", items: ["СИДДО експертиза (БГ-САЩ)","Поддръжка на български","Viber комуникация"] },
            ].map((c,i) => (
              <div key={i} className="adv-card">
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                {c.items.map((item,j) => (
                  <div key={j} className="adv-item"><span className="adv-chk">✓</span>{item}</div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: "6rem 2.5rem" }}>
        <div className="sec">
          <span className="tag">Отзиви</span>
          <h2 className="stitle">Какво казват клиентите</h2>
          <div className="tst-grid">
            {[
              { text: "Регистрираха LLC-то ми за 4 дни. До седмица имах Mercury сметка и работещ Stripe. Спестиха ми седмици.", name: "Иван К.", role: "E-commerce, София", init: "И" },
              { text: "Най-ценното е прекият достъп до CPA. По всяко данъчно питане получавам компетентен отговор.", name: "Мария Д.", role: "SaaS, Пловдив", init: "М" },
              { text: "Пробвах сам - загубих месец. С GetUSA всичко стана за дни. Цената е честна и без изненади.", name: "Димитър П.", role: "Freelancer, Варна", init: "Д" },
            ].map((t,i) => (
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
          <span className="tag">Въпроси</span>
          <h2 className="stitle">Често задавани въпроси</h2>
          <div style={{ maxWidth: 720, margin: "3rem auto 0" }}>
            {faqs.map((faq,i) => (
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
          <span className="tag" style={{ justifyContent: "center", color: "var(--orange)" }}>Готови ли сте</span>
          <h2 className="stitle" style={{ color: "white" }}>Стартирайте американския си<br/>бизнес още днес</h2>
          <p className="sdesc" style={{ color: "rgba(255,255,255,0.5)", margin: "0 auto 2rem", maxWidth: 480 }}>Попълнете формуляра и ще се свържем в рамките на 24 часа с индивидуална оферта.</p>
          <Link href="/contact" className="btn-main">Поискай оферта →</Link>
          <div style={{ marginTop: "1rem", fontSize: "0.82rem", color: "rgba(255,255,255,0.3)", fontWeight: 600 }}>
            Без скрити такси · 100% дистанционно · Viber поддръжка
          </div>
        </div>
      </section>
    </>
  );
}
