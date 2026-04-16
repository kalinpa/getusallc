import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { getDictionarySync } from "@/lib/dictionaries";
import { isValidLang, type Lang } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLang(lang)) return {};
  const d = getDictionarySync(lang);
  return { title: d.blog.title, description: d.blog.subtitle };
}

export default async function BlogPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  if (!isValidLang(langParam)) return null;
  const lang = langParam as Lang;
  const d = getDictionarySync(lang);
  const posts = getAllPosts(lang);
  const p = `/${lang}`;
  const locale = lang === 'bg' ? 'bg-BG' : 'en-US';

  return (
    <div className="blog-listing">
      <div className="sec">
        <div className="blog-header">
          <span className="tag">{d.blog.title}</span>
          <h1 className="stitle">{d.blog.subtitle}</h1>
        </div>
        <div className="blog-grid">
          {posts.map((post) => (
            <Link key={post.slug} href={`${p}/blog/${post.slug}`} className="blog-card">
              <div className="blog-card-cat">{post.category}</div>
              <h2 className="blog-card-title">{post.title}</h2>
              <p className="blog-card-desc">{post.description}</p>
              <div className="blog-card-meta">
                <span>{new Date(post.date).toLocaleDateString(locale, { year: "numeric", month: "long", day: "numeric" })}</span>
                <span>·</span>
                <span>{post.readingTime} {d.blog.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
