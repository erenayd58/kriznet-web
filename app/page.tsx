"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Gauge,
  GraduationCap,
  Handshake,
  Network,
  Shield,
  Smartphone,
  Zap,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const heroHighlights = [
  {
    icon: Shield,
    title: "Kesintisiz İletişim",
    description: "Mesh mimarisi altyapıya ihtiyaç duymadan sahayı bağlı tutar.",
  },
  {
    icon: Network,
    title: "Gerçek Zamanlı Ağ",
    description: "Cihaz sağlığını, konumları ve mesaj trafiğini anlık izleyin.",
  },
  {
    icon: Gauge,
    title: "Enerji Optimizasyonu",
    description: "Akıllı güç profilleriyle uzun süreli kriz senaryolarında çalışır.",
  },
];

const capabilitySections = [
  {
    title: "Mobil Çözüm",
    description:
      "Offline çalışan mobil arayüz, ekipler arası koordinasyonu acil durum modlarıyla hızlandırır.",
    icon: Smartphone,
    accent: "from-[#ff4d4f] via-[#ff7a45] to-[#ffb347]",
    bullets: [
      "Acil SOS, mesh tabanlı mesajlaşma ve konum paylaşımı",
      "Gerçek zamanlı ağ görünürlüğü ve cihaz durumu",
      "Enerji tasarruf modları ile uzun saha görevleri",
    ],
    href: "/mobile-solution",
    linkLabel: "Mobil çözümü incele",
  },
  {
    title: "IoT Çözümü",
    description:
      "Endüstriyel IoT cihazlarımız, sahada dayanıklı mesh altyapısı ve sensör katmanı sağlar.",
    icon: Cpu,
    accent: "from-[#60a5fa] via-[#4f46e5] to-[#312e81]",
    bullets: [
      "BLE Mesh + LoRa hibrit iletişim",
      "Düşük enerji tüketimi ve uzun batarya ömrü",
      "Bulut ve edge analitikleri ile veri güvenliği",
    ],
    href: "/iot-solution",
    linkLabel: "IoT altyapısını keşfet",
  },
  {
    title: "Stratejik Ortaklıklar",
    description:
      "Telekom operatörleri ve kamu kurumlarıyla afet yönetiminde sürdürülebilir iş birlikleri.",
    icon: Handshake,
    accent: "from-[#38bdf8] via-[#0ea5e9] to-[#0284c7]",
    bullets: [
      "Ölçeklenebilir dağıtım ve SLA modelleri",
      "Entegrasyona hazır API ve veri paylaşımı",
      "Ortak inovasyon programları",
    ],
    href: "/partnership",
    linkLabel: "Ortaklık modeli",
  },
  {
    title: "Akademik Çalışmalar",
    description:
      "Bilimsel araştırmalar, saha testleri ve uluslararası yayınlarla doğrulanmış altyapı.",
    icon: GraduationCap,
    accent: "from-[#a855f7] via-[#7c3aed] to-[#5b21b6]",
    bullets: [
      "Farklı afet senaryolarında akademik saha testleri",
      "Veri bilimi ve ağ optimizasyonu araştırmaları",
      "Açık kaynaklı teknik dokümanlar",
    ],
    href: "/academic",
    linkLabel: "Akademik içerik",
  },
];

const metrics = [
  { label: "Aktif mesh düğümü", value: "250+" },
  { label: "Saha test alanı", value: "18 şehir" },
  { label: "Ortalama mesaj gecikmesi", value: "< 2 sn" },
];

const architectureHighlights = [
  {
    title: "Mesh Ağ Katmanı",
    description:
      "Çoklu hop destekli BLE mesh ağ, LoRa yedekleme ve otomatik kanal yönetimi sayesinde kriz anında bile kopmayan iletişim sağlar.",
    points: [
      "Adaptif yönlendirme ve self-healing topoloji",
      "Cihaz başına 50K+ paket/saat kapasitesi",
      "İleri seviye gürültü ve çakışma tespiti",
    ],
  },
  {
    title: "Veri ve Analitik",
    description:
      "Edge ön işleme ve bulut tabanlı analitik platformu; kritik uyarıları, ağ sağlığını ve kullanıcı davranışlarını anlık raporlar.",
    points: [
      "Gerçek zamanlı dashboard ve KPI panoları",
      "Coğrafi ısı haritaları ve risk modellemeleri",
      "Otomatik raporlama ve dış sistem entegrasyonu",
    ],
  },
  {
    title: "Güvenlik ve Uyumluluk",
    description:
      "Uçtan uca şifreleme, cihaz sertifikasyonu ve rol tabanlı erişim kurguları ile kurumsal güvenlik standartları.",
    points: [
      "AES-256 + TLS tünelleme",
      "Cihaz bazlı kimlik yönetimi",
      "KVKK ve acil durum mevzuatına uyum",
    ],
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_60%)]" />
        <div className="absolute -top-44 -left-24 h-80 w-80 rounded-full bg-brand-primary/30 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-rose-500/20 blur-[160px]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.01)_45%,transparent_100%)]" />

        <div className="relative mx-auto max-w-6xl px-6">
          <motion.div
            className="text-center space-y-10"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeInUp}
              className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-slate-100"
            >
              <Zap className="h-4 w-4" />
              Afet Yönetiminde Yeni Nesil Yaklaşım
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight"
            >
              Yapay Zekâ Destekli{" "}
              <span className="bg-gradient-to-r from-rose-300 via-orange-200 to-amber-300 bg-clip-text text-transparent">
                Afet Haberleşme Ağı
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mx-auto max-w-3xl text-lg sm:text-xl leading-8 text-gray-300"
            >
              KrizNet, altyapıdan bağımsız çalışan BLE Mesh iletişim katmanı sayesinde saha ekiplerini,
              kurumları ve toplulukları en kritik anlarda bile birbirine bağlı tutar.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-brand-primary px-8 py-6 text-base font-semibold text-white shadow-lg shadow-brand-primary/40 transition hover:bg-brand-primary/90"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  İletişime geçelim
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/40 px-8 py-6 text-base font-semibold text-white/90 hover:bg-white/10 hover:text-white"
              >
                <Link href="/mobile-solution">Mobil çözüme göz at</Link>
              </Button>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-12 grid gap-6 sm:grid-cols-3">
              {heroHighlights.map((item, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-left transition-all duration-300 hover:border-brand-primary/60 hover:bg-white/10"
                >
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-300">{item.description}</p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-12 grid gap-6 sm:grid-cols-3">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-5 backdrop-blur-sm"
                >
                  <div className="text-3xl font-semibold text-white">{metric.value}</div>
                  <div className="mt-1 text-sm uppercase tracking-wide text-gray-400">{metric.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.05),_transparent_65%)]" />
        <div className="mx-auto max-w-7xl px-6 relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.4em] text-gray-300">
              Ürünlerimiz
            </span>
            <h2 className="mt-6 text-3xl md:text-4xl font-bold text-white">
              Saha için tasarlanmış birleşik platform
            </h2>
            <p className="mt-3 text-base text-gray-300">
              Mobil uygulamadan IoT altyapısına, kurumsal entegrasyonlardan akademik doğrulamaya kadar tek çatı altında.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {capabilitySections.map((section, index) => (
              <div
                key={index}
                className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-brand-primary/40 hover:bg-white/[0.08]"
              >
                <div className={`pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${section.accent}`} />
                <div className="relative z-10 flex h-full flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white">
                      <section.icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60 group-hover:text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{section.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-200">{section.description}</p>
                  </div>
                  <ul className="space-y-2.5 text-sm text-gray-200">
                    {section.bullets.map((bullet, bulletIdx) => (
                      <li key={bulletIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-white/70" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <Link
                      href={section.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-white/80"
                    >
                      {section.linkLabel}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-slate-950/60" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-gray-300">
                Mimari
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Dayanıklı, ölçeklenebilir ve güvenilir altyapı katmanları
              </h2>
              <p className="text-base text-gray-300">
                KrizNet, sahadan merkeze uzanan üç katmanlı mimarisi ve gelişmiş analitik yetenekleri ile afet yönetimi operasyonlarını uçtan uca destekler.
              </p>
              <div className="grid gap-6">
                {architectureHighlights.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-3xl border border-white/10 bg-white/[0.04] px-6 py-5 transition-colors hover:border-brand-primary/50 hover:bg-white/[0.08]"
                  >
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm text-gray-300">{item.description}</p>
                    <ul className="mt-4 grid gap-2 text-sm text-gray-300">
                      {item.points.map((point, pointIdx) => (
                        <li key={pointIdx} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-primary/70" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 backdrop-blur">
                <h3 className="text-lg font-semibold text-white">Saha operasyonları</h3>
                <p className="mt-3 text-sm text-gray-200">
                  Afet anında saha ekiplerinin konumlarını, görev durumlarını ve ihtiyaçlarını tek panelden yönetin.
                  Gerçek zamanlı alarm ve görev atama sistemiyle koordinasyon gecikmesini ortadan kaldırın.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
                <h3 className="text-lg font-semibold text-white">Kurumsal dashboard</h3>
                <p className="mt-3 text-sm text-gray-200">
                  Tarihsel analizler, risk modellemeleri ve entegre raporlama araçları ile kriz yönetimi kararlarını veri odaklı olarak hızlandırın.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
                <h3 className="text-lg font-semibold text-white">API & Entegrasyon</h3>
                <p className="mt-3 text-sm text-gray-200">
                  Kurum içi sistemlere, acil çağrı merkezlerine veya üçüncü parti analitik platformlarına güvenli veri aktarımı sağlayın.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
