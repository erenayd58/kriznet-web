"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  GraduationCap,
  FileText,
  Beaker,
  Users,
  MapPin,
  Calendar,
  CheckCircle2,
  BarChart3,
  Brain,
  Target,
  Zap,
  Database,
  LineChart,
} from "lucide-react";

const academicMetrics = [
  { label: "Hakemli yayın", value: "12+" },
  { label: "Saha pilotu", value: "8" },
  { label: "Üniversite iş birliği", value: "5" },
];

const researchHighlights = [
  {
    icon: Brain,
    title: "Yapay zekâ destekli ağlar",
    description:
      "Kendini iyileştiren mesh topolojileri ve kestirimci veri analitiği için edge/AI modelleri geliştiriyoruz.",
  },
  {
    icon: Users,
    title: "Çok paydaşlı saha çalışmaları",
    description:
      "Kamu kurumları, STK’lar ve telekom operatörleriyle birlikte afet senaryolarına uygun saha protokolleri tasarlıyoruz.",
  },
  {
    icon: BarChart3,
    title: "Veri odaklı karar desteği",
    description:
      "Gerçek zamanlı ölçümlerden elde edilen veri kümeleriyle risk modelleme ve kaynak planlama algoritmaları üretiyoruz.",
  },
];

const publications = [
  {
    title:
      "KrizNet: Mediating Post-disaster Communication Systems using the Internet of Things and Bluetooth Mesh",
    conference: "IEEE International Conference on Internet of Things",
    status: "Yayınlandı",
    accent: "from-emerald-400/30 via-emerald-500/10 to-transparent",
  },
  {
    title: "Secure Device-to-Device Communication for Emergency Response",
    conference: "Technische Universität Darmstadt - Doctoral Dissertation",
    status: "Yayınlandı",
    accent: "from-sky-400/30 via-sky-500/10 to-transparent",
  },
  {
    title:
      "Communication and Coordination Networks in the 2023 Kahramanmaraş Earthquakes",
    conference:
      "Natural Hazards Center Quick Response Research Series #365 - University of Colorado Boulder",
    status: "Yayınlandı",
    accent: "from-rose-500/30 via-rose-500/10 to-transparent",
  },
];

const posters = [
  {
    title: "BLE Mesh Network Performance Analysis for Disaster Communication",
    event: "Ulusal IoT Konferansı 2024",
    location: "İstanbul, Türkiye",
    highlights: [
      "Sinyal gücü haritalama",
      "Batarya ömrü optimizasyonu",
      "Dağıtım en iyi uygulamalar",
    ],
    accent: "from-amber-400/25 via-amber-500/10 to-transparent",
  },
  {
    title: "Smart City Dashboard: User Experience Design",
    event: "HCI Turkey Conference",
    location: "Ankara, Türkiye",
    highlights: ["UX araştırma bulguları", "Arayüz tasarımı", "Kullanılabilirlik testleri"],
    accent: "from-violet-400/25 via-violet-500/10 to-transparent",
  },
  {
    title:
      "Improving the BLE Mesh Transmissions with User Collaboration in Smart Spaces Management",
    event:
      "15th ACM/IEEE International Conference on Information Processing in Sensor Networks (IPSN)",
    location: "Viyana, Avusturya",
    highlights: ["BLE Mesh optimizasyonu", "Kullanıcı işbirliği", "Akıllı alan yönetimi"],
    accent: "from-teal-400/25 via-teal-500/10 to-transparent",
  },
];

const pilots = [
  {
    name: "Kadıköy Pilot",
    location: "Kadıköy, İstanbul",
    duration: "3 ay (Mar-May 2026)",
    devices: 25,
    results: [
      { label: "Çalışma Süresi", value: "%99.8" },
      { label: "Güç Tüketimi", value: "12 mAh/gün" },
      { label: "Kullanıcı Memnuniyeti", value: "4.7/5" },
    ],
  },
  {
    name: "Üniversite Kampüsü",
    location: "Yıldız Teknik Üniversitesi",
    duration: "2 ay (Tem-Ağu 2026)",
    devices: 15,
    results: [
      { label: "Veri Noktası", value: "1M+" },
      { label: "Öğrenci Projeleri", value: "3" },
      { label: "Makale", value: "2" },
    ],
  },
  {
    name: "Akıllı Ofis",
    location: "Vodafone, Türkiye",
    duration: "2 ay (Eki-Kas 2026)",
    devices: 10,
    results: [
      { label: "Enerji Tasarrufu", value: "%15" },
      { label: "Maliyet Azalması", value: "%30" },
      { label: "ROI", value: "6 ay" },
    ],
  },
];

const findings = [
  {
    category: "Ağ Performansı",
    icon: LineChart,
    stats: [
      { label: "Ortalama Gecikme", value: "2.3 sn" },
      { label: "Paket Kaybı", value: "%0.2" },
      { label: "Kapsama Alanı", value: "%98" },
    ],
    accent: "from-brand-primary/30 via-rose-600/20 to-transparent",
  },
  {
    category: "Güç Tüketimi",
    icon: Zap,
    stats: [
      { label: "Uyku Modu", value: "15 µA" },
      { label: "Aktif Mesh", value: "11 mA" },
      { label: "Solar Kazancı", value: "%22" },
    ],
    accent: "from-amber-400/30 via-amber-500/15 to-transparent",
  },
  {
    category: "Veri Güvenliği",
    icon: Database,
    stats: [
      { label: "Şifreleme", value: "AES-256" },
      { label: "Anahtar Yenileme", value: "24 sa" },
      { label: "Anomali Tespiti", value: "%96" },
    ],
    accent: "from-sky-500/30 via-blue-600/20 to-transparent",
  },
];

const researchAreas = [
  { title: "5G IoT Entegrasyonu", period: "0-6 ay", icon: Zap, accent: "from-rose-500/25 via-rose-600/10 to-transparent" },
  { title: "Uç Yapay Zekâ", period: "0-6 ay", icon: Brain, accent: "from-emerald-400/25 via-emerald-500/10 to-transparent" },
  { title: "Çok Modlu Algılama", period: "6-12 ay", icon: Beaker, accent: "from-sky-400/25 via-sky-500/10 to-transparent" },
  { title: "Sürü Zekâsı", period: "6-12 ay", icon: Target, accent: "from-violet-400/25 via-violet-500/10 to-transparent" },
  { title: "Kuantum Kriptografisi", period: "1-2 yıl", icon: Database, accent: "from-cyan-400/25 via-cyan-500/10 to-transparent" },
  { title: "Dijital İkiz", period: "1-2 yıl", icon: BarChart3, accent: "from-amber-400/25 via-amber-500/10 to-transparent" },
];

export default function AcademicClient() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_60%)]" />
        <div className="absolute -top-48 left-[-140px] h-[420px] w-[420px] rounded-full bg-brand-primary/25 blur-[160px]" />
        <div className="absolute bottom-[-160px] right-[-160px] h-[360px] w-[360px] rounded-full bg-rose-500/20 blur-[160px]" />
        <div className="relative mx-auto max-w-5xl px-6 text-center space-y-10">
          <motion.span
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-gray-100"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <GraduationCap className="h-4 w-4" />
            Akademik
          </motion.span>
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Bilimsel temellere dayanan işbirliklerimizle afet iletişimini yeniden tanımlıyoruz.
          </motion.h1>
          <motion.p
            className="mx-auto max-w-3xl text-lg text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            KrizNet ekibi, akademik araştırmalardan ilham alarak geliştirilen dayanıklı haberleşme altyapılarını,
            saha pilotlarından gerçek dünya uygulamalarına taşıyor.
          </motion.p>
          <motion.div
            className="grid gap-4 sm:grid-cols-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {academicMetrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-5 text-left backdrop-blur"
              >
                <div className="text-2xl font-semibold text-white">{metric.value}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.3em] text-white/60">{metric.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(255,255,255,0.05),_transparent_60%)]" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {researchHighlights.map((highlight) => (
              <Card
                key={highlight.title}
                className="relative h-full border-white/10 bg-white/[0.04] text-white backdrop-blur"
              >
                <CardHeader className="space-y-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                    <highlight.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-white">{highlight.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-200 leading-relaxed">
                  {highlight.description}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.04),_transparent_70%)]" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="max-w-2xl space-y-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.35em] text-gray-300">
                  Yayınlar
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Uluslararası hakemli çalışmalar
                </h2>
                <p className="text-base text-gray-300">
                  Akademik iş birliklerinden elde edilen bulgular, KrizNet altyapısının performans ve güvenlik temellerini destekliyor.
                </p>
              </div>

              <div className="mt-12 space-y-6">
                {publications.map((publication) => (
                  <Card
                    key={publication.title}
                    className="relative overflow-hidden border-white/10 bg-white/[0.04] text-white backdrop-blur"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${publication.accent}`}
                      aria-hidden="true"
                    />
                    <div className="relative flex flex-col gap-4 p-6">
                      <div className="flex items-center gap-3">
                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white">
                          <FileText className="h-5 w-5" />
                        </div>
                        <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
                          {publication.status}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold leading-snug text-white">
                        {publication.title}
                      </h3>
                      <p className="text-sm text-gray-200">{publication.conference}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="max-w-md space-y-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-gray-300">
                  Poster & Sunumlar
                </span>
                <p className="text-sm text-gray-300">
                  Saha deneyimlerinden elde edilen verileri topluluklarla paylaşarak kullanıcı deneyimini ve ağ performansını birlikte geliştiriyoruz.
                </p>
              </div>
              {posters.map((poster) => (
                <Card
                  key={poster.title}
                  className="relative overflow-hidden border-white/10 bg-white/[0.04] text-white backdrop-blur"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${poster.accent}`}
                    aria-hidden="true"
                  />
                  <div className="relative space-y-4 p-6">
                    <div className="space-y-1.5">
                      <h3 className="text-lg font-semibold">{poster.title}</h3>
                      <p className="text-sm text-gray-200">{poster.event}</p>
                      <div className="flex items-center gap-2 text-xs text-white/70">
                        <MapPin className="h-3.5 w-3.5" />
                        {poster.location}
                      </div>
                    </div>
                    <div className="space-y-2">
                      {poster.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-start gap-2 text-sm text-gray-100">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 text-white/80" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(239,68,68,0.25),_transparent_65%)]" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.35em] text-gray-300">
              Pilotlar
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Gerçek saha validasyonları</h2>
            <p className="text-base text-gray-300">
              Belediyelerden kurumsal kampüslere kadar farklı ortamlarda KrizNet altyapısının performansını değerlendirmeyi hedefliyoruz.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {pilots.map((pilot) => (
              <Card
                key={pilot.name}
                className="relative h-full overflow-hidden border-white/10 bg-white/[0.04] text-white backdrop-blur"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/25 via-transparent to-transparent" />
                <div className="relative flex h-full flex-col gap-6 p-6">
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold">{pilot.name}</h3>
                    <div className="space-y-2 text-sm text-gray-200">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-white/80" />
                        <span>{pilot.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-white/80" />
                        <span>{pilot.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Beaker className="h-4 w-4 text-white/80" />
                        <span>{pilot.devices} cihaz</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 text-center text-sm text-gray-200 sm:grid-cols-3">
                    {pilot.results.map((result) => (
                      <div key={result.label} className="rounded-xl border border-white/10 bg-white/10 px-3 py-4 backdrop-blur">
                        <div className="text-lg font-semibold text-white">{result.value}</div>
                        <div className="mt-1 text-xs uppercase tracking-[0.2em] text-white/60">
                          {result.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-slate-950/60" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.35em] text-gray-300">
              Bulgular
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Araştırma çıktılarından içgörüler</h2>
            <p className="text-base text-gray-300">
              Pilot projeler ve laboratuvar testlerinden ölçümlenen kritik göstergeler.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {findings.map((finding) => (
              <Card
                key={finding.category}
                className="relative overflow-hidden border-white/10 bg-white/[0.04] text-white backdrop-blur"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${finding.accent}`}
                  aria-hidden="true"
                />
                <div className="relative space-y-5 p-6">
                  <div className="space-y-3">
                    <finding.icon className="h-7 w-7 text-white" />
                    <h3 className="text-lg font-semibold">{finding.category}</h3>
                  </div>
                  <div className="space-y-3">
                    {finding.stats.map((stat) => (
                      <div key={stat.label} className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur">
                        <div className="text-lg font-semibold text-white">{stat.value}</div>
                        <div className="mt-1 text-xs uppercase tracking-[0.25em] text-white/60">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(255,255,255,0.04),_transparent_70%)]" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.35em] text-gray-300">
              Ar-Ge Gündemi
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Gelecek araştırma başlıklarımız</h2>
            <p className="text-base text-gray-300">
              Ağı geliştirmek için sıradaki deneysellik ve inovasyon alanları.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {researchAreas.map((area) => (
              <Card
                key={area.title}
                className="relative h-full overflow-hidden border-white/10 bg-white/[0.03] text-white/90 backdrop-blur"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${area.accent}`}
                  aria-hidden="true"
                />
                <div className="relative flex h-full flex-col items-center gap-3 px-4 py-5 text-center">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white">
                    <area.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-sm font-semibold text-white">
                    {area.title}
                  </CardTitle>
                  <span className="text-xs uppercase tracking-[0.25em] text-white/60">
                    {area.period}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
