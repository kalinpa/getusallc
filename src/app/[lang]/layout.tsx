import type { Metadata } from "next";
import { languages, isValidLang, langLocales } from "@/lib/i18n";
import { getDictionarySync } from "@/lib/dictionaries";

export function generateStaticParams() {
  return languages.map(lang => ({ lang }));
}

export async function generateMetadata(props: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await props.params;
  if (!isValidLang(lang)) return {};
  const d = getDictionarySync(lang);
  return {
    title: { default: d.meta.title, template: d.meta.titleTemplate },
    description: d.meta.description,
    metadataBase: new URL("https://www.getusallc.com"),
    openGraph: {
      title: d.meta.ogTitle, description: d.meta.ogDescription,
      url: `https://www.getusallc.com/${lang}`, siteName: "GetUSA LLC",
      images: [{ url: "/og.webp", width: 1200, height: 630 }],
      locale: langLocales[lang], type: "website",
    },
    icons: { icon: "/favicon.ico", shortcut: "/favicon.svg" },
    robots: { index: true, follow: true },
    alternates: {
      languages: Object.fromEntries(languages.map(l => [l, `https://www.getusallc.com/${l}`])),
    },
  };
}

export default function LangLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
