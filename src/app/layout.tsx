import type { Metadata } from "next";
import Script from "next/script";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { OrganizationSchema } from "@/components/blog/BlogSchema";

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
        <OrganizationSchema />
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
  --border-light: #f0f1f3; --surface: #f3f4f6; --orange: #c44e15;
  --orange-soft: #fff0e8; --orange-hover: #a84010; --green: #16a34a;
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
  font-size: 0.78rem; font-weight: 800; color: #b34512;
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
.stp-n { font-weight: 800; font-size: 2.5rem; color: #e0a080; line-height: 1; margin-bottom: 0.75rem; }
.stp h3 { font-weight: 800; font-size: 1rem; color: var(--ink); margin-bottom: 0.4rem; }
.stp p { font-size: 0.88rem; color: var(--gray); font-weight: 500; line-height: 1.6; }

.tcard { background: var(--white); border: 1.5px solid var(--border); border-radius: 14px; padding: 1.75rem; display: flex; gap: 1.25rem; align-items: flex-start; transition: all 0.3s; color: inherit; }
.tcard:hover { transform: translateY(-3px); box-shadow: 0 10px 30px rgba(0,0,0,0.05); border-color: #d1d5db; }
.tcard-ico { width: 48px; height: 48px; border-radius: 12px; background: var(--surface); display: flex; align-items: center; justify-content: center; font-size: 1.4rem; flex-shrink: 0; }
.tcard h3 { font-weight: 800; font-size: 1rem; color: var(--ink); margin-bottom: 0.3rem; }
.tcard p { font-size: 0.88rem; color: var(--gray); font-weight: 500; line-height: 1.55; }
.tcard-link { display: inline-block; margin-top: 0.4rem; font-size: 0.82rem; font-weight: 700; color: #b34512; }

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

.hero-pill { display: inline-flex; align-items: center; gap: 0.5rem; background: var(--orange-soft); border: 1px solid rgba(196,78,21,0.2); padding: 0.45rem 1rem; border-radius: 100px; font-size: 0.8rem; font-weight: 700; color: #b34512; margin-bottom: 1.5rem; animation: fadeUp 0.6s ease both; }
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

/* Blog */
.blog-listing { padding: 7rem 2.5rem 4rem; }
.blog-header { margin-bottom: 3rem; }
.blog-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
.blog-card {
  background: var(--white); border: 1.5px solid var(--border); border-radius: 14px;
  padding: 2rem; transition: all 0.3s; color: inherit;
}
.blog-card:hover { transform: translateY(-3px); box-shadow: 0 10px 30px rgba(0,0,0,0.05); border-color: #d1d5db; }
.blog-card-cat {
  display: inline-block; font-size: 0.72rem; font-weight: 800; color: #b34512;
  text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.75rem;
  background: var(--orange-soft); padding: 0.25rem 0.65rem; border-radius: 5px;
}
.blog-card-title { font-weight: 800; font-size: 1.15rem; line-height: 1.35; margin-bottom: 0.6rem; color: var(--ink); }
.blog-card-desc { font-size: 0.9rem; color: var(--gray); line-height: 1.6; font-weight: 500; margin-bottom: 1rem; }
.blog-card-meta { font-size: 0.8rem; color: var(--gray-light); font-weight: 600; display: flex; gap: 0.4rem; }

.blog-article { padding: 7rem 2.5rem 4rem; }
.blog-content { max-width: 780px; margin: 0 auto; }

.breadcrumbs { display: flex; gap: 0.5rem; font-size: 0.82rem; color: var(--gray); font-weight: 600; margin-bottom: 2rem; flex-wrap: wrap; }
.breadcrumbs a { color: var(--orange); }
.breadcrumbs a:hover { text-decoration: underline; }
.breadcrumbs span:last-child { color: var(--ink); }

.blog-post-header { margin-bottom: 2.5rem; }
.blog-heading { font-weight: 800; font-size: 1.35rem; color: var(--ink); margin-bottom: 0.75rem; line-height: 1.3; }
.blog-post-header h1.blog-heading { font-size: clamp(1.8rem, 3.5vw, 2.4rem); letter-spacing: -0.03em; line-height: 1.15; margin-bottom: 1rem; }
.blog-post-meta { font-size: 0.85rem; color: var(--gray); font-weight: 600; display: flex; gap: 0.5rem; flex-wrap: wrap; }

.blog-tldr {
  background: var(--orange-soft); border-left: 4px solid var(--orange);
  padding: 1.5rem; border-radius: 0 12px 12px 0; margin-bottom: 2.5rem;
}
.blog-tldr-label { font-weight: 800; font-size: 0.82rem; color: var(--orange); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.5rem; }
.blog-tldr p { font-size: 0.95rem; color: var(--ink2); line-height: 1.7; font-weight: 500; margin: 0; }

.blog-toc {
  background: var(--surface); border: 1px solid var(--border); border-radius: 12px;
  padding: 1.5rem; margin-bottom: 2.5rem;
}
.blog-toc-label { font-weight: 800; font-size: 0.85rem; color: var(--ink); margin-bottom: 0.75rem; }
.blog-toc ol { counter-reset: toc; padding-left: 0; }
.blog-toc li { counter-increment: toc; padding: 0.3rem 0; font-size: 0.9rem; font-weight: 600; }
.blog-toc li::before { content: counter(toc) ". "; color: var(--orange); font-weight: 800; }
.blog-toc a { color: var(--ink2); }
.blog-toc a:hover { color: var(--orange); }

.blog-section { margin-bottom: 2.5rem; }
.blog-section p { font-size: 0.95rem; color: var(--ink2); line-height: 1.85; margin-bottom: 1rem; font-weight: 500; }
.blog-section ul, .blog-section ol { margin: 0 0 1rem 1.5rem; list-style: disc; }
.blog-section ol { list-style: decimal; }
.blog-section li { font-size: 0.95rem; color: var(--ink2); line-height: 1.75; margin-bottom: 0.4rem; font-weight: 500; }
.blog-section strong { font-weight: 700; color: var(--ink); }
.blog-section a { color: var(--orange); font-weight: 600; }
.blog-section a:hover { text-decoration: underline; }

.blog-faq { margin-bottom: 2.5rem; }
.blog-faq-item { border-bottom: 1px solid var(--border-light); }
.blog-faq-item summary {
  padding: 1.15rem 0; font-weight: 700; font-size: 0.95rem; cursor: pointer;
  list-style: none; color: var(--ink);
}
.blog-faq-item summary::-webkit-details-marker { display: none; }
.blog-faq-item p { font-size: 0.92rem; color: var(--gray); line-height: 1.75; font-weight: 500; padding-bottom: 1.15rem; }

.blog-cta {
  background: var(--ink); color: white; padding: 2.5rem; border-radius: 16px;
  text-align: center; margin-bottom: 2.5rem;
}
.blog-cta h3 { font-weight: 800; font-size: 1.3rem; margin-bottom: 0.5rem; }
.blog-cta p { font-size: 0.95rem; color: rgba(255,255,255,0.6); font-weight: 500; margin-bottom: 1.5rem; }

.blog-tags { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 2.5rem; }
.blog-tag {
  background: var(--surface); border: 1px solid var(--border); border-radius: 6px;
  padding: 0.3rem 0.75rem; font-size: 0.78rem; font-weight: 700; color: var(--gray);
}

.blog-related { margin-bottom: 2rem; }
.blog-related h3 { font-weight: 800; font-size: 1.15rem; margin-bottom: 1.25rem; }
.blog-related-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; }
.blog-related-card {
  background: var(--white); border: 1.5px solid var(--border); border-radius: 12px;
  padding: 1.5rem; color: inherit; transition: all 0.3s;
}
.blog-related-card:hover { border-color: var(--orange); transform: translateY(-2px); }
.blog-related-card h4 { font-weight: 800; font-size: 0.95rem; line-height: 1.35; margin-bottom: 0.5rem; color: var(--ink); }

/* Tax Test */
.tax-page { padding: 7rem 2.5rem 4rem; max-width: 720px; margin: 0 auto; }
.tax-header { margin-bottom: 2rem; }
.tax-progress { height: 6px; background: var(--border); border-radius: 3px; margin-bottom: 0.75rem; overflow: hidden; }
.tax-progress-bar { height: 100%; background: var(--orange); border-radius: 3px; transition: width 0.3s ease; }
.tax-step-info { display: flex; justify-content: space-between; align-items: center; font-size: 0.82rem; color: var(--gray); font-weight: 600; margin-bottom: 2rem; }
.tax-back-btn { background: none; border: none; color: var(--orange); font-weight: 700; font-size: 0.82rem; cursor: pointer; font-family: inherit; }
.tax-back-btn:hover { text-decoration: underline; }

.tax-question { margin-bottom: 2rem; }
.tax-q-text { font-weight: 800; font-size: 1.35rem; color: var(--ink); line-height: 1.3; margin-bottom: 0.4rem; }
.tax-q-sub { font-size: 0.9rem; color: var(--gray); font-weight: 500; margin-bottom: 1.5rem; }
.tax-options { display: flex; flex-direction: column; gap: 0.6rem; }
.tax-option {
  display: flex; align-items: center; gap: 0.85rem; padding: 1rem 1.25rem;
  background: var(--white); border: 1.5px solid var(--border); border-radius: 12px;
  cursor: pointer; font-family: inherit; font-size: 0.95rem; font-weight: 600;
  color: var(--ink); transition: all 0.2s; text-align: left; width: 100%;
}
.tax-option:hover { border-color: var(--orange); background: var(--orange-soft); }
.tax-option.selected { border-color: var(--orange); background: var(--orange-soft); }
.tax-option-icon { font-size: 1.2rem; flex-shrink: 0; }

.tax-result > * { margin-bottom: 1.5rem; }
.tax-risk-card { border: 2px solid; border-radius: 16px; padding: 2rem; text-align: center; }
.tax-risk-badge {
  display: inline-block; color: white; font-size: 0.78rem; font-weight: 800;
  padding: 0.35rem 1rem; border-radius: 100px; text-transform: uppercase;
  letter-spacing: 0.06em; margin-bottom: 1rem;
}
.tax-risk-title { font-weight: 800; font-size: 1.25rem; color: var(--ink); margin-bottom: 0.5rem; }
.tax-risk-summary { font-size: 0.95rem; color: var(--ink2); font-weight: 500; line-height: 1.7; }

.tax-warning {
  background: #fef2f2; border: 1.5px solid #fecaca; border-radius: 12px;
  padding: 1.25rem; font-size: 0.9rem; color: #dc2626; font-weight: 600; line-height: 1.6;
}

.tax-details-card {
  background: var(--white); border: 1.5px solid var(--border); border-radius: 14px; padding: 1.75rem;
}
.tax-details-card h3 { font-weight: 800; font-size: 1.05rem; color: var(--ink); margin-bottom: 1rem; }
.tax-detail-row { display: flex; gap: 0.75rem; align-items: flex-start; margin-bottom: 0.75rem; }
.tax-detail-row:last-child { margin-bottom: 0; }
.tax-detail-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; margin-top: 0.45rem; }
.tax-detail-row p { font-size: 0.9rem; color: var(--ink2); font-weight: 500; line-height: 1.6; margin: 0; }

.tax-links { margin-top: 1.5rem; }
.tax-links h3 { font-weight: 800; font-size: 1.05rem; color: var(--ink); margin-bottom: 1rem; }
.tax-links-grid { display: grid; grid-template-columns: 1fr; gap: 0.75rem; }
.tax-link-card {
  display: flex; gap: 1rem; align-items: center; padding: 1rem 1.25rem;
  background: var(--white); border: 1.5px solid var(--border); border-radius: 12px;
  color: inherit; transition: all 0.2s;
}
.tax-link-card:hover { border-color: var(--orange); transform: translateY(-2px); }
.tax-link-card span:first-child { font-size: 1.5rem; }
.tax-link-card strong { font-weight: 800; font-size: 0.92rem; color: var(--ink); display: block; }
.tax-link-card p { font-size: 0.82rem; color: var(--gray); font-weight: 500; margin: 0.15rem 0 0; }

/* Calculator */
.calc-page { padding: 7rem 2.5rem 4rem; }
.calc-header { margin-bottom: 3rem; }
.calc-grid { display: grid; grid-template-columns: 380px 1fr; gap: 2rem; align-items: start; }
.calc-card { background: var(--white); border: 1.5px solid var(--border); border-radius: 14px; padding: 1.75rem; margin-bottom: 1.25rem; }
.calc-card-dark { background: var(--ink); border-color: var(--ink); }
.calc-card-title { font-weight: 800; font-size: 1.05rem; color: var(--ink); margin-bottom: 1.25rem; }
.calc-states { display: flex; flex-direction: column; gap: 0.5rem; }
.calc-state-btn {
  display: flex; align-items: center; justify-content: space-between; gap: 0.5rem;
  padding: 0.85rem 1rem; border-radius: 10px; border: 1.5px solid var(--border);
  background: transparent; cursor: pointer; font-family: inherit; transition: all 0.2s; text-align: left; width: 100%;
}
.calc-state-btn:hover { border-color: var(--orange); }
.calc-state-btn.active { border-color: var(--orange); background: var(--orange-soft); }
.calc-state-btn.recommended { position: relative; }
.calc-state-name { font-weight: 700; font-size: 0.92rem; color: var(--ink); }
.calc-rec-badge {
  font-size: 0.65rem; font-weight: 800; color: var(--orange);
  background: var(--orange-soft); padding: 0.15rem 0.45rem; border-radius: 4px;
  text-transform: uppercase; letter-spacing: 0.04em;
}
.calc-state-price { font-weight: 700; font-size: 0.82rem; color: var(--gray); margin-left: auto; }

.calc-extra {
  display: flex; align-items: center; gap: 0.75rem;
  padding: 0.75rem 0; border-bottom: 1px solid var(--border-light); cursor: pointer;
}
.calc-extra:last-child { border-bottom: none; }
.calc-extra input[type="checkbox"] {
  width: 18px; height: 18px; accent-color: var(--orange); cursor: pointer; flex-shrink: 0;
}
.calc-extra-info { display: flex; justify-content: space-between; width: 100%; }
.calc-extra-name { font-weight: 600; font-size: 0.9rem; color: var(--ink); }
.calc-extra-price { font-weight: 700; font-size: 0.82rem; color: var(--gray); }

.calc-section { margin-bottom: 1.75rem; }
.calc-section:last-child { margin-bottom: 0; }
.calc-section-title {
  font-weight: 700; font-size: 0.78rem; color: rgba(255,255,255,0.4);
  text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.75rem;
  padding-bottom: 0.5rem; border-bottom: 1px solid rgba(255,255,255,0.08);
}
.calc-row {
  display: flex; justify-content: space-between; align-items: center;
  padding: 0.45rem 0; font-size: 0.88rem; color: rgba(255,255,255,0.6); font-weight: 500;
}
.calc-amount { font-weight: 700; color: rgba(255,255,255,0.8); }
.calc-row-total { padding-top: 0.75rem; margin-top: 0.5rem; border-top: 1px solid rgba(255,255,255,0.1); }
.calc-amount-total { font-weight: 800; font-size: 1.15rem; color: var(--orange); }

.calc-info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
.calc-info-item { display: flex; flex-direction: column; gap: 0.2rem; }
.calc-info-label { font-size: 0.75rem; font-weight: 700; color: var(--gray); text-transform: uppercase; letter-spacing: 0.08em; }
.calc-info-value { font-size: 0.9rem; font-weight: 700; color: var(--ink); }

.calc-cta {
  background: var(--orange-soft); border: 1.5px solid rgba(217,91,28,0.15);
  border-radius: 14px; padding: 2rem; text-align: center;
}
.calc-cta h3 { font-weight: 800; font-size: 1.15rem; color: var(--ink); margin-bottom: 0.5rem; }
.calc-cta p { font-size: 0.9rem; color: var(--gray); font-weight: 500; margin-bottom: 1.25rem; }

.calc-disclaimer { font-size: 0.78rem; color: var(--gray-light); line-height: 1.6; font-weight: 500; margin-top: 1rem; }
.calc-disclaimer a { color: var(--orange); font-weight: 600; }

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
  .blog-listing { padding: 6rem 1.25rem 3rem; }
  .blog-grid { grid-template-columns: 1fr !important; }
  .blog-article { padding: 6rem 1.25rem 3rem; }
  .blog-related-grid { grid-template-columns: 1fr !important; }
  .calc-page { padding: 6rem 1.25rem 3rem; }
  .calc-grid { grid-template-columns: 1fr !important; }
}
`;
