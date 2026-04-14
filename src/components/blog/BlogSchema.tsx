import { BlogPost } from "@/lib/blog";

const BASE_URL = "https://www.getusallc.com";

export function ArticleSchema({ post }: { post: BlogPost }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: post.image ? `${BASE_URL}${post.image}` : undefined,
    datePublished: post.date,
    dateModified: post.updated || post.date,
    author: {
      "@type": "Organization",
      name: post.author,
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "GetUSA LLC",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo.webp`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${post.slug}`,
    },
    wordCount: post.content.reduce((acc, s) => acc + s.body.replace(/<[^>]*>/g, '').split(/\s+/).length, 0),
    articleSection: post.category,
    keywords: post.tags.join(", "),
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".blog-tldr", ".blog-heading"],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ post }: { post: BlogPost }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Начало",
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Блог",
        item: `${BASE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${BASE_URL}/blog/${post.slug}`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GetUSA LLC",
    url: BASE_URL,
    logo: `${BASE_URL}/logo.webp`,
    description: "Регистрация на американска фирма (LLC) от България. Лицензиран CPA и адвокат в САЩ.",
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@getusallc.com",
      contactType: "customer service",
      availableLanguage: ["Bulgarian", "English"],
    },
    sameAs: [
      // Add social profiles when available
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
