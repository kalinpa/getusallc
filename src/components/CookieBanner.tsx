"use client";
import { useState, useEffect } from "react";
import type { Dictionary } from "@/lib/dictionaries";

export default function CookieBanner({ dict }: { dict: Dictionary }) {
  const [show, setShow] = useState(false);
  useEffect(() => { if (!localStorage.getItem("cookie_consent")) setShow(true); }, []);
  if (!show) return null;
  const accept = () => { localStorage.setItem("cookie_consent", "yes"); setShow(false); };
  const decline = () => { localStorage.setItem("cookie_consent", "no"); setShow(false); };
  return (
    <div style={{ position: "fixed", bottom: 24, left: 24, right: 24, maxWidth: 420, zIndex: 999, background: "var(--white)", border: "1.5px solid var(--border)", borderRadius: 14, padding: "1.25rem 1.5rem", boxShadow: "0 12px 40px rgba(0,0,0,0.1)", display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
      <p style={{ fontSize: "0.85rem", color: "var(--gray)", fontWeight: 500, flex: 1, minWidth: 180 }}>{dict.cookie.text}</p>
      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={decline} style={{ padding: "0.5rem 1rem", borderRadius: 8, border: "1px solid var(--border)", background: "transparent", fontSize: "0.82rem", fontWeight: 700, cursor: "pointer", color: "var(--gray)", fontFamily: "inherit" }}>{dict.cookie.decline}</button>
        <button onClick={accept} style={{ padding: "0.5rem 1rem", borderRadius: 8, border: "none", background: "var(--orange)", color: "white", fontSize: "0.82rem", fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>{dict.cookie.accept}</button>
      </div>
    </div>
  );
}
