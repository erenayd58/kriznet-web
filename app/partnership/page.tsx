import { Metadata } from "next";
import PartnershipClient from "./client";

export const metadata: Metadata = {
  title: "Stratejik Ortaklıklar - KrizNet",
  description:
    "Telekom operatörleri ve kamu kurumlarıyla afet yönetiminde yeni iş modelleri geliştirin.",
};

export default function PartnershipPage() {
  return <PartnershipClient />;
}
