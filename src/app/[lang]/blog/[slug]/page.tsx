import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug, getRelatedPosts } from "@/lib/blog";
import { ArticleSchema, BreadcrumbSchema, FAQSchema } from "@/components/blog/BlogSchema";
import { getDictionarySync } from "@/lib/dictionaries";
import { isValidLang, languages, type Lang } from "@/lib/i18n";

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return languages.flatMap((lang) => slugs.map((slug) => ({ lang, slug })));
}

/**
 * Rewrites internal links in blog HTML to include the language prefix.
 * Turns href="/blog/foo" into href="/bg/blog/foo" (or en, ro, etc.)
 * Turns href="/contact" into href="/bg/contact".
 * Leaves external links and already-prefixed links untouched.
 */
function prefixInternalLinks(html: string, lang: string): string {
  return html
    .replace(/href="\/blog\//g, `href="/${lang}/blog/`)
    .replace(/href="\/contact"/g, `href="/${lang}/contact"`)
    .replace(/href="\/contact#/g, `href="/${lang}/contact#`);
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isValidLang(lang)) return {};
  const post = getPostBySlug(slug, lang as Lang);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updated || post.date,
      authors: [post.author],
      images: post.image ? [{ url: post.image, width: 1200, height: 630 }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
    alternates: {
      canonical: `/${lang}/blog/${slug}`,
      languages: Object.fromEntries(languages.map((l) => [l, `/${l}/blog/${slug}`])),
    },
  };
}

export default async function BlogArticle({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang: langParam, slug } = await params;
  if (!isValidLang(langParam)) notFound();
  const lang = langParam as Lang;
  const d = getDictionarySync(lang);
  const post = getPostBySlug(slug, lang);
  if (!post) notFound();
  const related = getRelatedPosts(post, lang);
  const p = `/${lang}`;
  const locales: Record<string, string> = { bg: "bg-BG", en: "en-US", ro: "ro-RO" };
  const locale = locales[lang] || "en-US";
  const dateFormatted = new Date(post.date).toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <ArticleSchema post={post} />
      <BreadcrumbSchema post={post} />
      {post.faq && <FAQSchema faqs={post.faq} />}

      <article className="blog-article">
        <div className="blog-content">
          {/* Breadcrumbs */}
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href={p}>{d.blog.breadcrumbHome}</Link>
            <span>/</span>
            <Link href={`${p}/blog`}>{d.blog.breadcrumbBlog}</Link>
            <span>/</span>
            <span>{post.title}</span>
          </nav>

          {/* Header */}
          <header className="blog-post-header">
            <div className="blog-card-cat">{post.category}</div>
            <h1 className="blog-heading">{post.title}</h1>
            <div className="blog-post-meta">
              <span>{dateFormatted}</span>
              <span>·</span>
              <span>{post.readingTime} {d.blog.readTime}</span>
              <span>·</span>
              <span>{post.author}</span>
            </div>
          </header>

          {/* TL;DR */}
          <div className="blog-tldr">
            <div className="blog-tldr-label">{d.blog.tldr}</div>
            <p>{post.tldr}</p>
          </div>

          {/* Table of Contents */}
          <nav className="blog-toc">
            <div className="blog-toc-label">{d.blog.toc}</div>
            <ol>
              {post.content.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>{section.heading}</a>
                </li>
              ))}
              {post.faq && <li><a href="#faq">{d.blog.faqTitle}</a></li>}
            </ol>
          </nav>

          {/* Content Sections */}
          {post.content.map((section) => (
            <section key={section.id} id={section.id} className="blog-section">
              <h2 className="blog-heading">{section.heading}</h2>
              <div dangerouslySetInnerHTML={{ __html: prefixInternalLinks(section.body, lang) }} />
            </section>
          ))}

          {/* FAQ Section */}
          {post.faq && (
            <section id="faq" className="blog-faq">
              <h2 className="blog-heading">{d.blog.faqTitle}</h2>
              {post.faq.map((item, i) => (
                <details key={i} className="blog-faq-item">
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </section>
          )}

          {/* CTA */}
          <div className="blog-cta">
            <h3>{d.blog.ctaTitle}</h3>
            <p>{d.blog.ctaText}</p>
            <Link href={`${p}/contact`} className="btn-main">{d.blog.ctaButton}</Link>
          </div>

          {/* Tags */}
          <div className="blog-tags">
            {post.tags.map((tag) => (
              <span key={tag} className="blog-tag">{tag}</span>
            ))}
          </div>

          {/* Related Posts */}
          {related.length > 0 && (
            <div className="blog-related">
              <h3>{d.blog.related}</h3>
              <div className="blog-related-grid">
                {related.map((r) => (
                  <Link key={r.slug} href={`${p}/blog/${r.slug}`} className="blog-related-card">
                    <div className="blog-card-cat">{r.category}</div>
                    <h4>{r.title}</h4>
                    <span className="blog-card-meta">{r.readingTime} {d.blog.readTime}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  );
}
