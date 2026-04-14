import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ background: "var(--ink)", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "4rem 2.5rem 2rem" }}>
      <div className="ftr-grid">
        <div>
          <Link href="/">
            <Image src="/logo.webp" alt="GetUSA LLC" width={400} height={67} style={{ height: 34, width: "auto", filter: "brightness(1.2)" }} />
          </Link>
          <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.6, marginTop: "1rem", maxWidth: 280, fontWeight: 500 }}>
            Вашият партньор за стартиране на американски бизнес от България. Лицензиран CPA и адвокат в САЩ.
          </p>
        </div>
        <div>
          <h3 style={{ fontWeight: 800, fontSize: "0.82rem", color: "white", marginBottom: "0.9rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>Услуги</h3>
          {["LLC Регистрация","EIN Заявка","ITIN Заявка","Данъчна декларация","Счетоводство"].map(s => (
            <Link key={s} href="/contact" style={{ display: "block", color: "rgba(255,255,255,0.65)", textDecoration: "none", fontSize: "0.88rem", fontWeight: 600, padding: "0.3rem 0" }}>{s}</Link>
          ))}
        </div>
        <div>
          <h3 style={{ fontWeight: 800, fontSize: "0.82rem", color: "white", marginBottom: "0.9rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>Ресурси</h3>
          {["Основен гайд","Калкулатор","Данъчен тест","Сравнение на щати","Блог"].map(s => (
            <Link key={s} href={s === "Блог" ? "/blog" : "#"} style={{ display: "block", color: "rgba(255,255,255,0.65)", textDecoration: "none", fontSize: "0.88rem", fontWeight: 600, padding: "0.3rem 0" }}>{s}</Link>
          ))}
        </div>
        <div>
          <h3 style={{ fontWeight: 800, fontSize: "0.82rem", color: "white", marginBottom: "0.9rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>Компания</h3>
          <Link href="/contact" style={{ display: "block", color: "rgba(255,255,255,0.65)", textDecoration: "none", fontSize: "0.88rem", fontWeight: 600, padding: "0.3rem 0" }}>Контакт</Link>
          <Link href="/terms" style={{ display: "block", color: "rgba(255,255,255,0.65)", textDecoration: "none", fontSize: "0.88rem", fontWeight: 600, padding: "0.3rem 0" }}>Условия</Link>
          <Link href="/privacy" style={{ display: "block", color: "rgba(255,255,255,0.65)", textDecoration: "none", fontSize: "0.88rem", fontWeight: 600, padding: "0.3rem 0" }}>Поверителност</Link>
          <Link href="/disclaimer" style={{ display: "block", color: "rgba(255,255,255,0.65)", textDecoration: "none", fontSize: "0.88rem", fontWeight: 600, padding: "0.3rem 0" }}>Отказ от отговорност</Link>
        </div>
      </div>
      <div style={{ maxWidth: 1200, margin: "3rem auto 0", paddingTop: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between", fontSize: "0.8rem", color: "rgba(255,255,255,0.6)", fontWeight: 600 }}>
        <span>&copy; 2026 GetUSA LLC. Всички права запазени.</span>
        <span>info@getusallc.com</span>
      </div>
    </footer>
  );
}
