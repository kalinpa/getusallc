import type { Metadata } from "next";
import Script from "next/script";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  title: {
    default: "GetUSA LLC — Регистрация на американска фирма от България",
    template: "%s — GetUSA LLC",
  },
  description: "Регистрация на американска фирма (LLC) от България. Работете директно с лицензиран CPA и адвокат в САЩ. EIN, ITIN, банкова сметка, Stripe — 100% дистанционно.",
  metadataBase: new URL("https://www.getusallc.com"),
  openGraph: {
    title: "GetUSA LLC — Американска фирма от България",
    description: "Регистрация на LLC, данъчен номер, банкова сметка и Stripe — 100% дистанционно.",
    url: "https://www.getusallc.com",
    siteName: "GetUSA LLC",
    images: [{ url: "/og.webp", width: 1200, height: 630 }],
    locale: "bg_BG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GetUSA LLC — Американска фирма от България",
    description: "Регистрация на LLC, данъчен номер, банкова сметка и Stripe — 100% дистанционно.",
    images: ["/og.webp"],
  },
  icons: { icon: "/favicon.ico", shortcut: "/favicon.svg" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bg">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700;800&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-CPSL5N5FRZ" strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-CPSL5N5FRZ');
        `}</Script>
        <Script id="meta-pixel" strategy="afterInteractive">{`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '880210438395323');
          fbq('track', 'PageView');
        `}</Script>
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}

const CSS = `
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; -webkit-text-size-adjust: 100%; }
img, picture, video, canvas, svg { display: block; max-width: 100%; }
input, button, textarea, select { font: inherit; }
a { color: inherit; text-decoration: none; }
ul, ol { list-style: none; }

:root {
  --bg: #fafaf8; --white: #fff; --ink: #111318; --ink2: #2a2d35;
  --gray: #6b7080; --gray-light: #9ca3af; --border: #e5e7eb;
  --border-light: #f0f1f3; --surface: #f3f4f6; --orange: #d95b1c;
  --orange-soft: #fff0e8; --orange-hover: #c44e15; --green: #16a34a;
  --green-soft: #dcfce7; --blue: #2563eb;
}

body {
  font-family: 'Outfit', -apple-system, BlinkMacSystemFont, sans-serif;
  background: var(--bg); color: var(--ink); font-weight: 500;
  line-height: 1.6; -webkit-font-smoothing: antialiased; overflow-x: hidden;
}

.btn-main {
  background: var(--orange); color: white; padding: 0.95rem 2.2rem;
  border-radius: 10px; font-weight: 700; font-size: 0.95rem;
  border: none; cursor: pointer; transition: all 0.3s;
  display: inline-flex; align-items: center; gap: 0.4rem;
}
.btn-main:hover { background: var(--orange-hover); transform: translateY(-2px); box-shadow: 0 10px 30px rgba(217,91,28,0.25); }
.btn-ghost {
  background: var(--white); color: var(--ink); padding: 0.95rem 2.2rem;
  border-radius: 10px; font-weight: 700; font-size: 0.95rem;
  border: 1.5px solid var(--border); transition: all 0.3s;
}
.btn-ghost:hover { border-color: var(--ink); }

.tag {
  display: inline-flex; align-items: center; gap: 0.5rem;
  font-size: 0.78rem; font-weight: 800; color: var(--orange);
  text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: 0.75rem;
}
.tag::before { content: ''; width: 18px; height: 2.5px; background: var(--orange); border-radius: 2px; }
.stitle {
  font-size: clamp(1.8rem, 3.2vw, 2.5rem); font-weight: 800;
  line-height: 1.15; letter-spacing: -0.025em; color: var(--ink); margin-bottom: 0.75rem;
}
.sdesc { font-size: 1.05rem; color: var(--gray); max-width: 540px; line-height: 1.7; font-weight: 500; }

.sec { max-width: 1200px; margin: 0 auto; width: 100%; }
.hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; max-width: 1200px; margin: 0 auto; width: 100%; }
.stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem; text-align: center; max-width: 1200px; margin: 0 auto; }
.ps-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; margin-top: 3rem; }
.srv-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; margin-top: 3rem; }
.steps-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.25rem; margin-top: 3rem; }
.tools-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; margin-top: 3rem; }
.adv-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-top: 3rem; }
.tst-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; margin-top: 3rem; }
.ftr-grid { display: grid; grid-template-columns: 1.5fr 1fr 1fr 1fr; gap: 3rem; max-width: 1200px; margin: 0 auto; }

.srv { background: var(--white); border: 1.5px solid var(--border); border-radius: 14px; padding: 2rem; transition: all 0.3s; position: relative; overflow: hidden; }
.srv:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,0.06); border-color: #d1d5db; }
.srv.pop { border-color: var(--orange); }
.srv-ico { width: 46px; height: 46px; border-radius: 11px; background: var(--surface); display: flex; align-items: center; justify-content: center; font-size: 1.35rem; margin-bottom: 1.25rem; }
.srv h3 { font-weight: 800; font-size: 1.1rem; color: var(--ink); margin-bottom: 0.4rem; }
.srv .price { font-weight: 800; font-size: 1.5rem; color: var(--orange); }
.srv .pnote { font-size: 0.82rem; color: var(--gray); font-weight: 600; margin-bottom: 1.15rem; }
.srv ul { margin-bottom: 1.5rem; }
.srv li { font-size: 0.88rem; font-weight: 600; color: var(--gray); padding: 0.4rem 0 0.4rem 1.5rem; position: relative; }
.srv li span.check { position: absolute; left: 0; color: var(--green); font-weight: 800; }
.pop-tag { position: absolute; top: 1rem; right: 1rem; background: var(--orange); color: white; font-size: 0.7rem; font-weight: 800; padding: 0.25rem 0.65rem; border-radius: 6px; text-transform: uppercase; letter-spacing: 0.04em; }
.srv-btn { display: block; text-align: center; width: 100%; padding: 0.85rem; border-radius: 10px; font-weight: 700; font-size: 0.9rem; transition: all 0.3s; border: 1.5px solid var(--border); color: var(--ink); background: transparent; }
.srv-btn:hover { border-color: var(--ink); background: var(--surface); }
.srv-btn.orange { background: var(--orange); border-color: var(--orange); color: white; }
.srv-btn.orange:hover { background: var(--orange-hover); border-color: var(--orange-hover); }

.stp { background: var(--bg); border: 1px solid var(--border); border-radius: 14px; padding: 2rem 1.5rem; }
.stp-n { font-weight: 800; font-size: 2.5rem; color: var(--orange); opacity: 0.2; line-height: 1; margin-bottom: 0.75rem; }
.stp h3 { font-weight: 800; font-size: 1rem; color: var(--ink); margin-bottom: 0.4rem; }
.stp p { font-size: 0.88rem; color: var(--gray); font-weight: 500; line-height: 1.6; }

.tcard { background: var(--white); border: 1.5px solid var(--border); border-radius: 14px; padding: 1.75rem; display: flex; gap: 1.25rem; align-items: flex-start; transition: all 0.3s; color: inherit; }
.tcard:hover { transform: translateY(-3px); box-shadow: 0 10px 30px rgba(0,0,0,0.05); border-color: #d1d5db; }
.tcard-ico { width: 48px; height: 48px; border-radius: 12px; background: var(--surface); display: flex; align-items: center; justify-content: center; font-size: 1.4rem; flex-shrink: 0; }
.tcard h3 { font-weight: 800; font-size: 1rem; color: var(--ink); margin-bottom: 0.3rem; }
.tcard p { font-size: 0.88rem; color: var(--gray); font-weight: 500; line-height: 1.55; }
.tcard-link { display: inline-block; margin-top: 0.4rem; font-size: 0.82rem; font-weight: 700; color: var(--orange); }

.adv-card { background: var(--bg); border: 1px solid var(--border); border-radius: 14px; padding: 2.5rem; position: relative; overflow: hidden; }
.adv-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: var(--orange); }
.adv-card h3 { font-weight: 800; font-size: 1.15rem; color: var(--ink); margin-bottom: 0.65rem; }
.adv-card > p { font-size: 0.95rem; color: var(--gray); font-weight: 500; line-height: 1.7; margin-bottom: 1.25rem; }
.adv-item { display: flex; align-items: center; gap: 0.6rem; font-size: 0.92rem; font-weight: 700; color: var(--ink2); margin-bottom: 0.6rem; }
.adv-chk { width: 22px; height: 22px; border-radius: 6px; background: var(--green-soft); color: var(--green); display: flex; align-items: center; justify-content: center; font-size: 0.7rem; font-weight: 900; flex-shrink: 0; }

.tst { background: var(--white); border: 1.5px solid var(--border); border-radius: 14px; padding: 2rem; }
.tst-stars { color: #f59e0b; font-size: 0.88rem; margin-bottom: 0.75rem; letter-spacing: 2px; }
.tst p { font-size: 0.92rem; color: var(--gray); line-height: 1.7; font-weight: 500; margin-bottom: 1.25rem; }
.tst-av { width: 40px; height: 40px; border-radius: 50%; background: var(--orange-soft); color: var(--orange); display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 0.9rem; }

.ps-dot { width: 34px; height: 34px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; font-weight: 800; flex-shrink: 0; }
.ps-dot.bad { background: #fef2f2; color: #ef4444; }
.ps-dot.ok { background: var(--green-soft); color: var(--green); }

.hero-pill { display: inline-flex; align-items: center; gap: 0.5rem; background: var(--orange-soft); border: 1px solid rgba(217,91,28,0.15); padding: 0.45rem 1rem; border-radius: 100px; font-size: 0.8rem; font-weight: 700; color: var(--orange); margin-bottom: 1.5rem; animation: fadeUp 0.6s ease both; }
.hero-pill .dot { width: 7px; height: 7px; border-radius: 50%; background: var(--green); box-shadow: 0 0 6px rgba(22,163,74,0.5); animation: blink 2s infinite; display: inline-block; }

.fbadge { position: absolute; background: var(--white); border: 1px solid var(--border); padding: 0.65rem 1rem; border-radius: 10px; display: flex; align-items: center; gap: 0.55rem; font-size: 0.82rem; font-weight: 700; color: var(--ink); box-shadow: 0 8px 25px rgba(0,0,0,0.07); }

.ftr-col h3 { font-weight: 800; font-size: 0.82rem; color: white; margin-bottom: 0.9rem; text-transform: uppercase; letter-spacing: 0.08em; }
.ftr-col a { display: block; color: rgba(255,255,255,0.65); font-size: 0.88rem; font-weight: 600; padding: 0.3rem 0; transition: color 0.2s; }
.ftr-col a:hover { color: white; }

.nav-link { font-size: 0.88rem; font-weight: 600; color: var(--gray); transition: color 0.2s; }
.nav-link:hover { color: var(--ink); }
.nav-cta-btn { background: var(--orange); color: white; padding: 0.6rem 1.4rem; border-radius: 8px; font-weight: 700; font-size: 0.85rem; transition: all 0.3s; }
.nav-cta-btn:hover { background: var(--orange-hover); }

details summary { list-style: none; cursor: pointer; }
details summary::-webkit-details-marker { display: none; }

.legal { max-width: 780px; margin: 0 auto; padding: 8rem 2rem 4rem; }
.legal h1 { font-size: 2.2rem; font-weight: 800; letter-spacing: -0.03em; margin-bottom: 0.5rem; }
.legal .updated { font-size: 0.88rem; color: var(--gray); font-weight: 600; margin-bottom: 3rem; }
.legal h2 { font-size: 1.25rem; font-weight: 800; margin-top: 2.5rem; margin-bottom: 0.75rem; }
.legal p { font-size: 0.95rem; color: var(--ink2); line-height: 1.8; margin-bottom: 1rem; font-weight: 500; }
.legal ul { margin: 0 0 1rem 1.5rem; list-style: disc; }
.legal li { font-size: 0.95rem; color: var(--ink2); line-height: 1.8; margin-bottom: 0.35rem; font-weight: 500; }
.legal a { color: var(--orange); font-weight: 600; }
.legal a:hover { text-decoration: underline; }
.legal strong { font-weight: 700; color: var(--ink); }

@keyframes fadeUp { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: translateY(0); } }
@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
@keyframes bobble { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-7px); } }

@media (max-width: 900px) {
  .hero-section { padding: 6rem 1.25rem 3rem !important; }
  .hero-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
  .ps-grid, .adv-grid, .tools-grid { grid-template-columns: 1fr !important; }
  .srv-grid, .tst-grid { grid-template-columns: 1fr !important; }
  .steps-grid { grid-template-columns: 1fr 1fr !important; }
  .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
  .fbadge { display: none !important; }
  section { padding: 4rem 1.25rem !important; }
  .nav-links-desktop { display: none !important; }
  .burger-btn { display: block !important; }
  .ftr-grid { grid-template-columns: 1fr !important; gap: 2rem !important; text-align: center; }
  .contact-grid { grid-template-columns: 1fr !important; padding: 6rem 1.25rem 3rem !important; gap: 2rem !important; }
}
`;
