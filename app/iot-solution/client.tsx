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
  Battery,
  CheckCircle2,
  Cloud,
  Cpu,
  Database,
  Layers,
  LineChart,
  Lock,
  Radio,
  Server,
  Shield,
  Wifi,
  Zap,
} from "lucide-react";

const hardwareSpecs = [
  {
    icon: Cpu,
    title: "İşlemci",
    specs: ["Nordic nRF52840", "64 MHz ARM Cortex-M4F", "1 MB Flash / 256 KB RAM"],
  },
  {
    icon: Radio,
    title: "Bağlantı",
    specs: ["BLE 5.0 Mesh", "LoRaWAN Backup", "Genişletilmiş menzil"],
  },
  {
    icon: Battery,
    title: "Güç",
    specs: ["3000 mAh Li-Po", "Solar yardımcı besleme", "2+ yıl bekleme süresi"],
  },
];

const featureBlocks = [
  {
    title: "Düşük Güç Tüketimi",
    description:
      "Uyarlanabilir güç profilleri ve akıllı uyku modlarıyla sahada kesintisiz çalışır.",
    stats: [
      { label: "Sleep Modu", value: "2 µA" },
      { label: "Mesh Aktif", value: "< 12 mA" },
    ],
  },
  {
    title: "Mesh Network",
    description:
      "10+ seviye hop geçişi ve self-healing topoloji ile güvenilir iletişim.",
    stats: [
      { label: "Maks. hop", value: "12" },
      { label: "Kapsama", value: "100+ m" },
    ],
  },
  {
    title: "Esnek Kurulum",
    description:
      "Tak-çalıştır modüller, uzaktan konfigürasyon ve otomatik güncellemeler.",
    stats: [
      { label: "Kurulum", value: "< 15 dk" },
      { label: "OTA", value: "Desteklenir" },
    ],
  },
  {
    title: "Güvenlik",
    description:
      "AES-256 şifreleme, donanım tabanlı anahtarlar ve kurumsal sertifikasyon.",
    stats: [
      { label: "Şifreleme", value: "AES-256" },
      { label: "Sertifika", value: "IP67 / CE" },
    ],
  },
];

const useCaseClusters = [
  {
    title: "Afet Yönetimi",
    items: [
      "Acil durum iletişimi",
      "Konum bazlı yardım çağrıları",
      "Saha ekip koordinasyonu",
      "Çoklu kurum veri paylaşımı",
    ],
  },
  {
    title: "Kritik Altyapı",
    items: [
      "Enerji, su ve ulaşım ağlarında durum takibi",
      "Arıza ve kesinti bildirimleri",
      "Sensör tabanlı otomasyon",
      "Edge analitik ile erken uyarı",
    ],
  },
];

const cloudLayers = [
  {
    icon: Database,
    title: "Veri Katmanı",
    features: ["Time-series depolama", "Soğuk veri arşivi", "Event sourcing mimarisi"],
  },
  {
    icon: Server,
    title: "API Gateway",
    features: ["REST + WebSocket", "Rate limiting", "Çoklu tenant mimarisi"],
  },
  {
    icon: Cloud,
    title: "Mikro Servisler",
    features: ["Data ingestion", "Gerçek zamanlı analitik", "Raporlama pipeline"],
  },
];

const resilienceHighlights = [
  {
    icon: Lock,
    title: "Güvenlik",
    description:
      "Donanım seviyesinde güvenlik modülleri, imzalı firmware ve cihaz bazlı erişim politikaları.",
  },
  {
    icon: Layers,
    title: "Ölçeklenebilirlik",
    description:
      "Dağıtık ağ yönetimi, bulut otomasyon ve yük dengeleme ile binlerce düğüme kadar büyüyün.",
  },
  {
    icon: LineChart,
    title: "Analitik",
    description:
      "Anlık KPI panoları, risk modellemeleri ve dış sistem entegrasyonlarıyla veri odaklı karar verin.",
  },
];

export default function IoTSolutionClient() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_60%)]" />
        <div className="absolute -top-40 left-[-140px] h-96 w-96 rounded-full bg-sky-500/25 blur-[180px]" />
        <div className="absolute bottom-[-160px] right-[-160px] h-96 w-96 rounded-full bg-rose-500/20 blur-[180px]" />
        <div className="relative mx-auto max-w-5xl px-6 text-center space-y-10">
          <motion.span
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-gray-100"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            IoT Çözümü
          </motion.span>
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            KrizNet IoT platformu sahadaki sensörleri tek ağda buluşturur
          </motion.h1>
          <motion.p
            className="mx-auto max-w-3xl text-lg text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Modüler cihazlarımız, mesh ağ geçitleriyle birlikte çalışarak saha ekiplerine ve komuta merkezlerine güvenilir, anlık veri akışı sunar.
          </motion.p>
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.05),_transparent_65%)]" />
        <div className="relative mx-auto max-w-5xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.35em] text-gray-300">
              Donanım Özellikleri
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">Zorlu koşullar için tasarlandı</h2>
            <p className="mt-3 text-base text-gray-300">
              Her cihaz, sahada uzun süreli görevlerde dayanıklılık, güvenilirlik ve hızlı kurulum için optimize edildi.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {hardwareSpecs.map((spec, index) => (
              <Card key={index} className="border-white/10 bg-white/[0.05] backdrop-blur">
                <CardHeader className="space-y-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white">
                    <spec.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-white text-xl">{spec.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-gray-200">
                  {spec.specs.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-slate-950/60" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {featureBlocks.map((feature, index) => (
              <Card key={index} className="border-white/10 bg-white/[0.05] backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-200">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-2 text-sm text-gray-200">
                  {feature.stats.map((stat) => (
                    <div key={stat.label} className="flex items-center justify-between">
                      <span>{stat.label}</span>
                      <span className="text-white font-semibold">{stat.value}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(239,68,68,0.25),_transparent_65%)]" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-start">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.35em] text-gray-300">
                Kullanım Senaryoları
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Kritik operasyonlarda fark yaratır
              </h2>
              <p className="text-base text-gray-300">
                KrizNet IoT cihazları, farklı sektör ve afet senaryolarında hızlı konuşlandırma, geniş kapsama ve güvenli veri akışı sağlar.
              </p>
              <div className="grid gap-6">
                {useCaseClusters.map((cluster) => (
                  <Card key={cluster.title} className="border-white/10 bg-white/[0.05] backdrop-blur">
                    <CardHeader>
                      <CardTitle className="text-white text-xl">{cluster.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-2 text-sm text-gray-200">
                      {cluster.items.map((item) => (
                        <div key={item} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-primary" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="grid gap-6">
              <Card className="border-white/10 bg-white/[0.05] backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-white text-xl">Saha sensör entegrasyonları</CardTitle>
                  <CardDescription className="text-gray-200">
                    Çoklu protokol desteği ve modüler giriş/çıkış seçenekleri ile mevcut sahra cihazlarına saniyeler içinde bağlanın.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-gray-200">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-primary" />
                    <span>Modbus, CAN ve MQTT köprüleri</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-primary" />
                    <span>Uzaktan firmware güncelleme ve hata ayıklama</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-primary" />
                    <span>Saha operasyonları için düşük gecikmeli olay akışı</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-slate-950/60" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.35em] text-gray-300">
              Bulut Katmanı
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">Bulut altyapısı ve veri uçtan uca güvende</h2>
            <p className="mt-3 text-base text-gray-300">
              Edge’den buluta kadar tüm pipeline yönetimi KrizNet tarafından sunulur.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {cloudLayers.map((layer, index) => (
              <Card key={index} className="border-white/10 bg-white/[0.05] backdrop-blur">
                <CardHeader>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white">
                    <layer.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-white text-xl">{layer.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-gray-200">
                  {layer.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {resilienceHighlights.map((item, index) => (
              <Card key={index} className="border-white/10 bg-white/[0.05] backdrop-blur">
                <CardHeader>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-white text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-200">
                  {item.description}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
