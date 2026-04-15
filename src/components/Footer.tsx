import Link from "next/link";
import Image from "next/image";
import type { Lang } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";

const resHrefs: Record<string, string> = {
  "Основен гайд": "#", "Main Guide": "#",
  "Калкулатор": "/tools/calculator", "Calculator": "/tools/calculator",
  "Данъчен тест": "/tools/tax-test", "Tax Test": "/tools/tax-test",
  "Сравнение на щати": "/tools/state-comparison", "State Comparison": "/tools/state-comparison",
  "Търсене": "/search", "Search": "/search",
  "Блог": "/blog", "Blog": "/blog",
};

export default function Footer({ lang, dict }: { lang: Lang; dict: Dictionary }) {
  const d = dict.footer;
  const p = `/${lang}`;
  return (
    <footer style={{ background: "var(--ink)", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "4rem 2.5rem 2rem" }}>
      <div className="ftr-grid">
        <div>
          <Link href={p}><Image src="/logo.webp" alt="GetUSA LLC" width={400} height={67} style={{ height: 34, width: "auto", filter: "brightness(1.2)" }} /></Link>
          <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.6, marginTop: "1rem", maxWidth: 280, fontWeight: 500 }}>{d.desc}</p>
        </div>
        <div>
          <h3 style={{ fontWeight: 800, fontSize: "0.82rem", color: "white", marginBottom: "0.9rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>{d.servicesTitle}</h3>
          {d.servicesLinks.map(s => (
            <Link key={s} href={`${p}/contact`} style={{ display: "block", color: "rgba(255,255,255,0.65)", textDecoration: "none", fontSize: "0.88rem", fontWeight: 600, padding: "0.3rem 0" }}>{s}</Link>
          ))}
        </div>
        <div>
          <h3 style={{ fontWeight: 800, fontSize: "0.82rem", color: "white", marginBottom: "0.9rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>{d.resourcesTitle}</h3>
          {d.resourcesLinks.map(s => (
            <Link key={s} href={`${p}${resHrefs[s] || "#"}`} style={{ display: "block", color: "rgba(255,255,255,0.65)", textDecoration: "none", fontSize: "0.88rem", fontWeight: 600, padding: "0.3rem 0" }}>{s}</Link>
          ))}
        </div>
        <div>
          <h3 style={{ fontWeight: 800, fontSize: "0.82rem", color: "white", marginBottom: "0.9rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>{d.companyTitle}</h3>
          <Link href={`${p}/contact`} style={{ display: "block", color: "rgba(255,255,255,0.65)", textDecoration: "none", fontSize: "0.88rem", fontWeight: 600, padding: "0.3rem 0" }}>{d.contact}</Link>
          <Link href={`${p}/terms`} style={{ display: "block", color: "rgba(255,255,255,0.65)", textDecoration: "none", fontSize: "0.88rem", fontWeight: 600, padding: "0.3rem 0" }}>{d.terms}</Link>
          <Link href={`${p}/privacy`} style={{ display: "block", color: "rgba(255,255,255,0.65)", textDecoration: "none", fontSize: "0.88rem", fontWeight: 600, padding: "0.3rem 0" }}>{d.privacy}</Link>
          <Link href={`${p}/disclaimer`} style={{ display: "block", color: "rgba(255,255,255,0.65)", textDecoration: "none", fontSize: "0.88rem", fontWeight: 600, padding: "0.3rem 0" }}>{d.disclaimer}</Link>
        </div>
      </div>
      <div style={{ maxWidth: 1200, margin: "3rem auto 0", paddingTop: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between", fontSize: "0.8rem", color: "rgba(255,255,255,0.6)", fontWeight: 600 }}>
        <span>&copy; 2026 {d.copyright}</span>
        <span>info@getusallc.com</span>
      </div>
    </footer>
  );
}
