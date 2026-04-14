"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import type { Metadata } from "next";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [status, setStatus] = useState<"idle"|"sending"|"success"|"error">("idle");

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.service) {
      alert("Моля, попълнете задължителните полета (Име, Имейл, Услуга).");
      return;
    }
    setStatus("sending");
    try {
      await emailjs.send("service_mvhbkna", "template_qanq4x4", {
        name: form.name,
        email: form.email,
        phone: form.phone || "Не е посочен",
        service: form.service,
        message: form.message || "Без допълнително съобщение",
      }, "AJMyJPBFmCMaIRIEi");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const inputStyle = {
    width: "100%", padding: "0.8rem 1rem", border: "1.5px solid var(--border)", borderRadius: 10,
    fontSize: "0.92rem", fontWeight: 500, color: "var(--ink)", background: "var(--bg)", outline: "none",
    fontFamily: "inherit",
  };

  return (
    <div className="contact-grid" style={{ maxWidth: 1200, margin: "0 auto", padding: "7rem 2.5rem 4rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
      <div style={{ paddingTop: "1rem" }}>
        <span className="tag">Контакт</span>
        <h1 style={{ fontSize: "2.4rem", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: "1rem" }}>Поискайте индивидуална оферта</h1>
        <p style={{ fontSize: "1.05rem", color: "var(--gray)", lineHeight: 1.7, fontWeight: 500, marginBottom: "2.5rem" }}>
          Попълнете формуляра или ни пишете директно. Отговаряме в рамките на 24 часа с персонализирана оферта за вашия бизнес.
        </p>
        <div style={{ background: "var(--white)", border: "1.5px solid var(--border)", borderRadius: 14, padding: "1.75rem", marginBottom: "1rem" }}>
          <h3 style={{ fontWeight: 800, fontSize: "1rem", marginBottom: "0.75rem" }}>Директен контакт</h3>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.5rem 0", fontSize: "0.92rem", fontWeight: 600 }}>
            <div style={{ width: 36, height: 36, borderRadius: 9, background: "var(--orange-soft)", color: "var(--orange)", display: "flex", alignItems: "center", justifyContent: "center" }}>✉</div>
            info@getusallc.com
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.5rem 0", fontSize: "0.92rem", fontWeight: 600 }}>
            <div style={{ width: 36, height: 36, borderRadius: 9, background: "var(--orange-soft)", color: "var(--orange)", display: "flex", alignItems: "center", justifyContent: "center" }}>💬</div>
            Viber / WhatsApp
          </div>
          <a href="viber://chat?number=%2B359878786635" style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", background: "#7360f2", color: "white", padding: "0.85rem 1.75rem", borderRadius: 10, fontWeight: 700, fontSize: "0.95rem", textDecoration: "none", marginTop: "0.5rem" }}>
            💬 Пишете ни във Viber
          </a>
        </div>
        <div style={{ background: "var(--white)", border: "1.5px solid var(--border)", borderRadius: 14, padding: "1.75rem" }}>
          <h3 style={{ fontWeight: 800, fontSize: "1rem", marginBottom: "0.75rem" }}>Какво очаквате</h3>
          {["⏱ Отговор до 24 часа","📋 Индивидуална оферта с конкретна цена","🔒 Без ангажимент"].map((item,i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.5rem 0", fontSize: "0.92rem", fontWeight: 600 }}>{item}</div>
          ))}
        </div>
      </div>

      <div style={{ background: "var(--white)", border: "1.5px solid var(--border)", borderRadius: 16, padding: "2.5rem", boxShadow: "0 12px 40px rgba(0,0,0,0.04)" }}>
        <h2 style={{ fontWeight: 800, fontSize: "1.3rem", marginBottom: "0.35rem" }}>Изпратете запитване</h2>
        <p style={{ fontSize: "0.9rem", color: "var(--gray)", fontWeight: 500, marginBottom: "2rem" }}>Ще се свържем с вас с индивидуална оферта.</p>

        {status === "success" ? (
          <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
            <div style={{ width: 64, height: 64, borderRadius: "50%", background: "var(--green-soft)", color: "var(--green)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.8rem", margin: "0 auto 1.25rem" }}>✓</div>
            <h3 style={{ fontWeight: 800, fontSize: "1.3rem", marginBottom: "0.5rem" }}>Запитването е изпратено!</h3>
            <p style={{ fontSize: "0.95rem", color: "var(--gray)", fontWeight: 500, lineHeight: 1.7 }}>Благодарим ви. Ще се свържем с вас в рамките на 24 часа.</p>
          </div>
        ) : (
          <>
            {[
              { id: "name", label: "Име *", type: "text", placeholder: "Вашето име" },
              { id: "email", label: "Имейл *", type: "email", placeholder: "email@example.com" },
              { id: "phone", label: "Телефон", type: "tel", placeholder: "+359 XXX XXX XXX" },
            ].map(field => (
              <div key={field.id} style={{ marginBottom: "1.25rem" }}>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, marginBottom: "0.4rem" }}>{field.label}</label>
                <input type={field.type} placeholder={field.placeholder} style={inputStyle}
                  value={form[field.id as keyof typeof form]}
                  onChange={e => setForm({...form, [field.id]: e.target.value})} />
              </div>
            ))}
            <div style={{ marginBottom: "1.25rem" }}>
              <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, marginBottom: "0.4rem" }}>Услуга *</label>
              <select style={{...inputStyle, cursor: "pointer"}} value={form.service} onChange={e => setForm({...form, service: e.target.value})}>
                <option value="" disabled>Изберете услуга</option>
                {["LLC Регистрация","EIN Заявка","ITIN Заявка","Счетоводство","Данъчна декларация","Плащания и Банка","Друго / Не съм сигурен"].map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <div style={{ marginBottom: "1.25rem" }}>
              <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, marginBottom: "0.4rem" }}>Съобщение</label>
              <textarea placeholder="Разкажете ни накратко за вашия бизнес..." style={{...inputStyle, resize: "vertical", minHeight: 100}}
                value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
            </div>
            <button onClick={handleSubmit} disabled={status === "sending"} className="btn-main"
              style={{ width: "100%", justifyContent: "center", marginTop: "0.5rem", opacity: status === "sending" ? 0.6 : 1 }}>
              {status === "sending" ? "Изпращане..." : "Изпрати запитване →"}
            </button>
            {status === "error" && (
              <div style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: 10, padding: "1rem", marginTop: "1rem", fontSize: "0.88rem", color: "#dc2626", fontWeight: 600 }}>
                Възникна грешка. Моля, опитайте отново или ни пишете на info@getusallc.com
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
