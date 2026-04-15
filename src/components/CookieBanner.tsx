"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookie-consent")) setVisible(true);
  }, []);

  if (!visible) return null;

  const accept = (type: string) => {
    localStorage.setItem("cookie-consent", type);
    setVisible(false);
  };

  return (
    <div style={{
      position: "fixed", bottom: 0, left: 0, right: 0,
      background: "var(--ink)", padding: "1.25rem 2.5rem",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      gap: "1.5rem", zIndex: 9999, borderTop: "1px solid rgba(255,255,255,0.1)", flexWrap: "wrap"
    }}>
      <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.85)", fontWeight: 500, margin: 0, maxWidth: 700, lineHeight: 1.6 }}>
        Този уебсайт използва бисквитки за подобряване на потребителското изживяване. Вижте нашата{" "}
        <Link href="/privacy" style={{ color: "#f59e0b", textDecoration: "underline", fontWeight: 700 }}>Политика за поверителност</Link>.
      </p>
      <div style={{ display: "flex", gap: "0.5rem", flexShrink: 0 }}>
        <button onClick={() => accept("all")} style={{
          background: "#b34a14", color: "white", border: "none",
          padding: "0.6rem 1.4rem", borderRadius: 8, fontWeight: 700,
          fontSize: "0.85rem", cursor: "pointer", minHeight: 44
        }}>Приемам</button>
        <button onClick={() => accept("essential")} style={{
          background: "transparent", color: "rgba(255,255,255,0.5)",
          border: "1px solid rgba(255,255,255,0.15)",
          padding: "0.6rem 1.4rem", borderRadius: 8, fontWeight: 700,
          fontSize: "0.85rem", cursor: "pointer"
        }}>Само необходими</button>
      </div>
    </div>
  );
}
