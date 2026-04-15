import type { Metadata } from "next";
import Link from "next/link";
import { getAllSlugs, getPostBySlug, getRelatedPosts } from "@/lib/blog";
import { ArticleSchema, BreadcrumbSchema, FAQSchema } from "@/components/blog/BlogSchema";
import { getDictionarySync } from "@/lib/dictionaries";
import { isValidLang, languages, type Lang } from "@/lib/i18n";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return languages.flatMap(lang => slugs.map(slug => ({ lang, slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang, slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: { title: post.title, description: post.description, type: "article", images: post.image ? [{ url: post.image }] : [] },
  };
}

export default async function BlogArticle({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang: langParam, slug } = await params;
  if (!isValidLang(langParam)) notFound();
  const lang = langParam as Lang;
  const d = getDictionarySync(lang);
  const post = getPostBySlug(slug);
  if (!post) notFound();
  const related = getRelatedPosts(post);
  const p = `/${lang}`;
  const locale = lang === 'bg' ? 'bg-BG' : 'en-US';

  return (
    <article className="blog-article">
      <ArticleSchema post={post} />
      <BreadcrumbSchema post={post} />
      {post.faq && <FAQSchema faqs={post.faq} />}

      <div className="sec" style={{ maxWidth: 780 }}>
        {/* Breadcrumbs */}
        <nav style={{ fontSize: "0.82rem", color: "var(--gray)", marginBottom: "2rem", fontWeight: 600 }}>
          <Link href={p} style={{ color: "var(--orange)" }}>{d.blog.breadcrumbHome}</Link>
          <span style={{ margin: "0 0.5rem" }}>→</span>
          <Link href={`${p}/blog`} style={{ color: "var(--orange)" }}>{d.blog.breadcrumbBlog}</Link>
          <span style={{ margin: "0 0.5rem" }}>→</span>
          <span>{post.title.length > 50 ? post.title.slice(0, 50) + '…' : post.title}</span>
        </nav>

        <div className="blog-card-cat" style={{ marginBottom: "0.75rem" }}>{post.category}</div>
        <h1 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-0.025em", marginBottom: "1rem" }}>{post.title}</h1>
        <div style={{ display: "flex", gap: "1rem", fontSize: "0.85rem", color: "var(--gray)", fontWeight: 600, marginBottom: "2.5rem" }}>
          <span>{new Date(post.date).toLocaleDateString(locale, { year: "numeric", month: "long", day: "numeric" })}</span>
          <span>·</span>
          <span>{post.readingTime} {d.blog.readTime}</span>
        </div>

        {/* TL;DR */}
        <div style={{ background: "var(--orange-soft)", border: "1px solid rgba(217,91,28,0.12)", borderRadius: 12, padding: "1.25rem 1.5rem", marginBottom: "2.5rem" }}>
          <div style={{ fontWeight: 800, fontSize: "0.82rem", color: "var(--orange)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>{d.blog.tldr}</div>
          <p style={{ fontSize: "0.95rem", color: "var(--ink2)", lineHeight: 1.7, fontWeight: 500 }}>{post.tldr}</p>
        </div>

        {/* TOC */}
        <div style={{ background: "var(--surface)", borderRadius: 12, padding: "1.25rem 1.5rem", marginBottom: "3rem" }}>
          <div style={{ fontWeight: 800, fontSize: "0.88rem", marginBottom: "0.75rem" }}>{d.blog.toc}</div>
          {post.content.map((s) => (
            <a key={s.id} href={`#${s.id}`} style={{ display: "block", fontSize: "0.88rem", color: "var(--gray)", fontWeight: 600, padding: "0.35rem 0", lineHeight: 1.4 }}>{s.heading}</a>
          ))}
        </div>

        {/* Content sections */}
        {post.content.map((section) => (
          <section key={section.id} id={section.id} style={{ marginBottom: "2.5rem" }}>
            <h2 style={{ fontSize: "1.35rem", fontWeight: 800, marginBottom: "1rem", letterSpacing: "-0.015em" }}>{section.heading}</h2>
            <div className="blog-body" dangerouslySetInnerHTML={{ __html: section.body }} />
          </section>
        ))}

        {/* FAQ */}
        {post.faq && post.faq.length > 0 && (
          <section id="faq" style={{ marginTop: "3rem", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "1.35rem", fontWeight: 800, marginBottom: "1.25rem" }}>{d.blog.faqTitle}</h2>
            {post.faq.map((f, i) => (
              <details key={i} style={{ borderBottom: "1px solid var(--border-light)" }}>
                <summary style={{ padding: "1rem 0", fontWeight: 700, fontSize: "0.95rem" }}>{f.question}</summary>
                <div className="blog-body" style={{ paddingBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: f.answer }} />
              </details>
            ))}
          </section>
        )}

        {/* CTA */}
        <div style={{ background: "var(--orange-soft)", border: "1px solid rgba(217,91,28,0.12)", borderRadius: 14, padding: "2.5rem", textAlign: "center", marginTop: "3rem" }}>
          <h3 style={{ fontWeight: 800, fontSize: "1.25rem", marginBottom: "0.5rem" }}>{d.blog.ctaTitle}</h3>
          <p style={{ color: "var(--gray)", fontSize: "0.95rem", fontWeight: 500, marginBottom: "1.25rem" }}>{d.blog.ctaText}</p>
          <Link href={`${p}/contact`} className="btn-main">{d.blog.ctaButton}</Link>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section style={{ marginTop: "4rem" }}>
            <h2 style={{ fontWeight: 800, fontSize: "1.15rem", marginBottom: "1.25rem" }}>{d.blog.related}</h2>
            <div className="blog-related-grid">
              {related.map((r) => (
                <Link key={r.slug} href={`${p}/blog/${r.slug}`} className="blog-card" style={{ padding: "1.5rem" }}>
                  <div className="blog-card-cat">{r.category}</div>
                  <h3 className="blog-card-title" style={{ fontSize: "1rem" }}>{r.title}</h3>
                  <p className="blog-card-desc">{r.description}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
