"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { isValidLang, type Lang } from "@/lib/i18n";
import { getDictionarySync } from "@/lib/dictionaries";

export default function LangProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const lang = useMemo<Lang>(() => {
    const seg = pathname.split("/")[1];
    return isValidLang(seg) ? seg : "bg";
  }, [pathname]);
  const dict = getDictionarySync(lang);

  return (
    <>
      <Nav lang={lang} dict={dict} />
      <main>{children}</main>
      <Footer lang={lang} dict={dict} />
      <CookieBanner dict={dict} />
    </>
  );
}
