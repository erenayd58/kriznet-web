import { Metadata } from "next";
import AcademicClient from "./client";

export const metadata: Metadata = {
  title: "Akademik Çalışmalar - KrizNet",
  description:
    "Bilimsel araştırmalar, yayınlar ve saha testleriyle KrizNet ekosisteminin akademik yolculuğu.",
};

export default function AcademicPage() {
  return <AcademicClient />;
}
