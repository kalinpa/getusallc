import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Данъчен тест — Дължите ли данъци в САЩ?",
  description: "8 въпроса, за да разберете дали и какви данъци дължите в САЩ като българско лице с американско LLC. Безплатен онлайн тест.",
};

export default function TaxTestLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
