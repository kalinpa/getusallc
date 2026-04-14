import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Блог — LLC регистрация, данъци и бизнес в САЩ",
  description: "Гайдове, съвети и актуална информация за регистрация на американска фирма от България. LLC, EIN, ITIN, данъци, банкови сметки и Stripe.",
  openGraph: {
    title: "Блог — GetUSA LLC",
    description: "Гайдове за регистрация на американска фирма от България.",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="blog-listing">
      <div className="sec">
        <div className="blog-header">
          <span className="tag">Блог</span>
          <h1 className="stitle">Гайдове и ресурси</h1>
          <p className="sdesc">Всичко, което трябва да знаете за стартиране на американски бизнес от България.</p>
        </div>

        <div className="blog-grid">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
              <div className="blog-card-cat">{post.category}</div>
              <h2 className="blog-card-title">{post.title}</h2>
              <p className="blog-card-desc">{post.description}</p>
              <div className="blog-card-meta">
                <span>{new Date(post.date).toLocaleDateString("bg-BG", { year: "numeric", month: "long", day: "numeric" })}</span>
                <span>·</span>
                <span>{post.readingTime} мин. четене</span>
              </div>
            </Link>
          ))}
        </div>

        {posts.length === 0 && (
          <p style={{ textAlign: "center", color: "var(--gray)", padding: "4rem 0", fontSize: "1.05rem" }}>
            Скоро тук ще има полезни статии. Следете ни!
          </p>
        )}
      </div>
    </div>
  );
}
