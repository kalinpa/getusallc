import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllSlugs, getRelatedPosts } from "@/lib/blog";
import { ArticleSchema, BreadcrumbSchema, FAQSchema } from "@/components/blog/BlogSchema";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
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
      canonical: `/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post);
  const dateFormatted = new Date(post.date).toLocaleDateString("bg-BG", {
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
            <Link href="/">Начало</Link>
            <span>/</span>
            <Link href="/blog">Блог</Link>
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
              <span>{post.readingTime} мин. четене</span>
              <span>·</span>
              <span>{post.author}</span>
            </div>
          </header>

          {/* TL;DR */}
          <div className="blog-tldr">
            <div className="blog-tldr-label">Накратко</div>
            <p>{post.tldr}</p>
          </div>

          {/* Table of Contents */}
          <nav className="blog-toc">
            <div className="blog-toc-label">Съдържание</div>
            <ol>
              {post.content.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>{section.heading}</a>
                </li>
              ))}
              {post.faq && <li><a href="#faq">Често задавани въпроси</a></li>}
            </ol>
          </nav>

          {/* Content Sections */}
          {post.content.map((section) => (
            <section key={section.id} id={section.id} className="blog-section">
              <h2 className="blog-heading">{section.heading}</h2>
              <div dangerouslySetInnerHTML={{ __html: section.body }} />
            </section>
          ))}

          {/* FAQ Section */}
          {post.faq && (
            <section id="faq" className="blog-faq">
              <h2 className="blog-heading">Често задавани въпроси</h2>
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
            <h3>Готови ли сте да стартирате?</h3>
            <p>Свържете се с нас за безплатна консултация и индивидуална оферта за вашия бизнес.</p>
            <Link href="/contact" className="btn-main">Поискай оферта →</Link>
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
              <h3>Свързани статии</h3>
              <div className="blog-related-grid">
                {related.map((r) => (
                  <Link key={r.slug} href={`/blog/${r.slug}`} className="blog-related-card">
                    <div className="blog-card-cat">{r.category}</div>
                    <h4>{r.title}</h4>
                    <span className="blog-card-meta">{r.readingTime} мин. четене</span>
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
