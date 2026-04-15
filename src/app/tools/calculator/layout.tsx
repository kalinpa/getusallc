import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Калкулатор на разходите за LLC — Безплатен инструмент",
  description: "Изчислете приблизителните разходи за регистрация на LLC в САЩ от България. Сравнете Wyoming, Delaware и други щати.",
};

export default function CalculatorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
