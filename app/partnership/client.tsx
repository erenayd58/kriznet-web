"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Award,
  BarChart,
  CheckCircle2,
  DollarSign,
  Globe,
  Rocket,
  Shield,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

const benefitCards = [
  {
    icon: DollarSign,
    title: "Yeni gelir kaynakları",
    description:
      "KrizNet altyapısını kullanarak B2B ve B2G segmentlerinde katma değerli hizmetler oluşturun.",
  },
  {
    icon: Users,
    title: "Müşteri kazanımı",
    description:
      "Afet yönetimi odağında fark yaratan çözümlerle sadakati artırın ve yeni müşteriler edinin.",
  },
  {
    icon: Award,
    title: "Teknoloji liderliği",
    description:
      "5G, IoT ve mesh iletişim alanlarında sektöre yön veren projelere imza atın.",
  },
  {
    icon: Globe,
    title: "Afet yönetimi paydaşı",
    description:
      "Kamu kurumlarıyla ortak hareket ederek sosyal sorumluluk ve güven inşasını güçlendirin.",
  },
];

const partnershipMetrics = [
  { label: "Yıllık büyüme potansiyeli", value: "%15-20" },
  { label: "ROI süresi", value: "6-12 ay" },
  { label: "Cihaz kapasitesi", value: "50K+" },
];

const roadmap = [
  {
    phase: "Faz 1",
    period: "0-6 ay",
    targets: ["10 belediye", "5.000 cihaz"],
  },
  {
    phase: "Faz 2",
    period: "6-12 ay",
    targets: ["50 belediye", "50.000 cihaz"],
  },
  {
    phase: "Faz 3",
    period: "12-24 ay",
    targets: ["5+ ülke", "Pazar liderliği"],
  },
];

const differentiators = [
  "Donanım, yazılım ve platformu kapsayan uçtan uca çözüm",
  "Telekom ve kamu altyapılarına uyumlu entegrasyon",
  "7/24 teknik destek ve ortak inovasyon programları",
  "Düşük maliyetli kurulum, yüksek performans",
  "Ölçeklenebilir gelir paylaşım modelleri",
];

export default function PartnershipClient() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_60%)]" />
        <div className="absolute top-[-160px] right-[-160px] h-96 w-96 rounded-full bg-brand-primary/25 blur-[180px]" />
        <div className="relative mx-auto max-w-6xl px-6 text-center space-y-10">
          <motion.span
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-gray-100"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            Stratejik Ortaklık
          </motion.span>
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Afet yönetiminde birlikte daha güçlüyüz
          </motion.h1>
          <motion.p
            className="mx-auto max-w-3xl text-lg text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            KrizNet, telekom operatörleri ve kamu kurumlarıyla ortak inovasyon projeleri geliştirerek afet anlarında kritik iletişim altyapısı sağlar.
          </motion.p>
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.05),_transparent_65%)]" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="grid gap-6 sm:grid-cols-3">
            {partnershipMetrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/[0.05] px-6 py-5 text-center backdrop-blur">
                <div className="text-3xl font-semibold text-white">{metric.value}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.3em] text-gray-400">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-slate-950/60" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.35em] text-gray-300">
              Avantajlar
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">Neden KrizNet ortaklığı?</h2>
            <p className="mt-3 text-base text-gray-300">
              İş ortağımıza; gelir paylaşımı, teknoloji transferi ve inovasyon desteği sunuyoruz.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {benefitCards.map((benefit, index) => (
              <Card key={index} className="border-white/10 bg-white/[0.05] backdrop-blur">
                <CardHeader className="flex flex-col gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-white text-xl">{benefit.title}</CardTitle>
                  <CardDescription className="text-gray-200">
                    {benefit.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(239,68,68,0.25),_transparent_65%)]" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.35em] text-gray-300">
              Yol Haritası
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">Ortak büyüme planı</h2>
            <p className="mt-3 text-base text-gray-300">
              Faz bazlı büyüme planımızla birlikte hızlı ve sürdürülebilir ölçeklenme sağlıyoruz.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {roadmap.map((phase, index) => (
              <Card key={index} className="border-white/10 bg-white/[0.05] backdrop-blur">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white text-xl">{phase.phase}</CardTitle>
                    <span className="text-sm text-gray-300">{phase.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2 text-sm text-gray-200">
                  {phase.targets.map((target) => (
                    <span key={target} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1">
                      <CheckCircle2 className="h-4 w-4 text-brand-primary" />
                      {target}
                    </span>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-slate-950/60" />
        <div className="relative mx-auto max-w-5xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.35em] text-gray-300">
              Rekabet Avantajları
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">Masaya getirdiklerimiz</h2>
          </div>

          <div className="mt-10 grid gap-3 md:grid-cols-2">
            {differentiators.map((feature) => (
              <div key={feature} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-4 text-sm text-gray-200">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-primary" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
