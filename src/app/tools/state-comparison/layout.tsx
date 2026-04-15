import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Сравнение на щати за LLC — Wyoming, Delaware и други",
  description: "Сравнете Wyoming, Delaware, New Mexico, Florida, Texas и Nevada за регистрация на LLC. Такси, данъци, поверителност, скорост — всичко на едно място.",
};

export default function StateComparisonLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
