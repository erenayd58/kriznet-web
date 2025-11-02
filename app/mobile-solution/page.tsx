"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Bell,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Gauge,
  Layers,
  MapPin,
  Shield,
  Signal,
  Smartphone,
  Users,
  Wifi,
  Zap,
} from "lucide-react";

const screenshots = [
  {
    id: 1,
    title: "Giriş Ekranı",
    description: "İnternet yokken bile ulaşılabilir.",
    image: "/screenshots/splash.jpg",
  },
  {
    id: 2,
    title: "İzinler",
    description: "Bluetooth, konum ve bildirim izinlerini kolayca yönetin.",
    image: "/screenshots/permissions.jpg",
  },
  {
    id: 3,
    title: "Profil Oluşturma",
    description: "Acil durum bilgilerinizi birkaç adımda kaydedin.",
    image: "/screenshots/profile.jpg",
  },
  {
    id: 4,
    title: "Ana Ekran",
    description: "SOS butonu ve ağ görünümü tek ekranda.",
    image: "/screenshots/main.jpg",
  },
  {
    id: 5,
    title: "Yakın Ağ",
    description: "Mesh ağındaki cihazları gerçek zamanlı gözlemleyin.",
    image: "/screenshots/network.jpg",
  },
  {
    id: 6,
    title: "Mesajlaşma",
    description: "İnternet olmadan anlık mesajlaşma deneyimi.",
    image: "/screenshots/messages.jpg",
  },
  {
    id: 7,
    title: "Güç Yönetimi",
    description: "Farklı senaryolar için akıllı pil modları.",
    image: "/screenshots/settings.jpg",
  },
];

const appHighlights = [
  {
    icon: Bell,
    title: "Acil SOS Sistemi",
    description:
      "Tek dokunuşla acil durum mesajı gönderin ve sahadaki tüm ekipleri eş zamanlı bilgilendirin.",
    accent: "from-[#ef4444] via-[#f97316] to-[#fb923c]",
  },
  {
    icon: Users,
    title: "Mesh Ağ Görüntüleyici",
    description:
      "Yakınınızdaki cihazları gerçek zamanlı izleyin, ağ sağlığını ve kapsama alanını tek bakışta görün.",
    accent: "from-[#38bdf8] via-[#0ea5e9] to-[#2563eb]",
  },
  {
    icon: MapPin,
    title: "Konum Paylaşımı",
    description:
      "Saha ekiplerinin konumlarını otomatik paylaşarak görev koordinasyonunu hızlandırın.",
    accent: "from-[#34d399] via-[#22d3ee] to-[#0ea5e9]",
  },
  {
    icon: Shield,
    title: "Offline Çalışma",
    description:
      "İnternet olmadan da kritik özelliklere erişim ve akıllı senkronizasyon.",
    accent: "from-[#818cf8] via-[#6366f1] to-[#4338ca]",
  },
  {
    icon: Zap,
    title: "Hızlı Mesajlaşma",
    description:
      "BLE Mesh üzerinden anlık mesaj gönderme ve acil durum bildirimlerini saniyeler içinde iletme.",
    accent: "from-[#f97316] via-[#fb7185] to-[#f43f5e]",
  },
  {
    icon: Gauge,
    title: "Pil Optimizasyonu",
    description:
      "Akıllı güç yönetimi profilleri ile uzun saha görevlerinde bile kesintisiz kullanım.",
    accent: "from-[#2dd4bf] via-[#22c55e] to-[#84cc16]",
  },
];

const coreModules = [
  {
    title: "Saha Ekipleri",
    icon: Smartphone,
    description:
      "Görev tabanlı modüller, hızlı bildirimler ve offline kayıtlarla saha ekiplerinin ihtiyaçlarına odaklı tasarım.",
    bullets: [
      "Görev, konum ve ekip takibi tek panelde",
      "Önceliklendirilmiş uyarılar ve olay akışı",
      "Form ve veri toplama araçları",
    ],
  },
  {
    title: "Komuta Merkezi",
    icon: Signal,
    description:
      "Geniş kapsamlı dashboard, risk haritaları ve kriz planlarına yönelik raporlama araçları.",
    bullets: [
      "Gerçek zamanlı ağ sağlığı ve kapasite",
      "Dinamik görev atama ve onay akışları",
      "Kurumsal sistemlerle çift yönlü entegrasyon",
    ],
  },
  {
    title: "Analitik & Raporlama",
    icon: Layers,
    description:
      "Edge ön işleme ve bulut analitikleri ile karar destek mekanizmalarını hızlandırın.",
    bullets: [
      "Saha yoğunluk ve risk haritaları",
      "KPI bazlı performans raporları",
      "Öngörücü modellemeler ve uyarılar",
    ],
  },
];

const connectivityLayers = [
  {
    title: "Bağlantı Katmanı",
    icon: Wifi,
    description:
      "BLE Mesh + LoRa hibrit yapısı ile ulaşılması zor noktalarda bile bağlantı sürdürülebilir.",
  },
  {
    title: "Güvenlik Katmanı",
    icon: Shield,
    description:
      "Uçtan uca şifreleme, cihaz sertifikasyonu ve rol tabanlı erişim politikaları standarttır.",
  },
  {
    title: "Süreç Otomasyonu",
    icon: Zap,
    description:
      "Akıllı tetikleyiciler, otomatik olay akışları ve kurum içi entegrasyonlar ile operasyon hızlanır.",
  },
];

const roadmap = [
  { name: "Yapay zekâ destekli risk tahmini", status: "Geliştiriliyor" },
  { name: "AR destekli saha navigasyonu", status: "Planlanan" },
  { name: "Sesli komut desteği", status: "Planlanan" },
  { name: "Çoklu kurum çalışma alanı", status: "Pilot aşamasında" },
];

function ScreenshotsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);

  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),_transparent_60%)]" />
      <div className="absolute -top-36 right-[-120px] h-72 w-72 rounded-full bg-brand-primary/25 blur-[140px]" />
      <div className="absolute bottom-0 left-[-120px] h-64 w-64 rounded-full bg-rose-500/15 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 xl:flex-row xl:items-start xl:justify-between">
          <div className="order-2 xl:order-1 w-full max-w-[220px] sm:max-w-[240px] md:max-w-[260px] lg:max-w-[280px] xl:max-w-[300px] mx-auto xl:mx-0">
            <div className="relative flex items-center justify-center">
              <button
                onClick={prevSlide}
                className="absolute -left-12 top-1/2 -translate-y-1/2 rounded-full border border-white/25 bg-white/15 p-2.5 text-white shadow-lg backdrop-blur transition hover:-translate-x-1 hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white/60"
                aria-label="Önceki ekran"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div
                className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-b from-slate-900 via-slate-950 to-black shadow-[0_28px_70px_-30px_rgba(15,23,42,0.8)]"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div className="relative h-full w-full overflow-hidden">
                  {screenshots.map((screenshot, index) => (
                    <div
                      key={screenshot.id}
                      className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                        index === currentIndex
                          ? "translate-x-0 opacity-100"
                          : index < currentIndex
                          ? "-translate-x-full opacity-0"
                          : "translate-x-full opacity-0"
                      }`}
                    >
                      <Image
                        src={screenshot.image}
                        alt={screenshot.title}
                        fill
                        sizes="(max-width: 640px) 200px, 260px"
                        className="object-cover"
                        draggable={false}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={nextSlide}
                className="absolute -right-12 top-1/2 -translate-y-1/2 rounded-full border border-white/25 bg-white/15 p-2.5 text-white shadow-lg backdrop-blur transition hover:translate-x-1 hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white/60"
                aria-label="Sonraki ekran"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-4 text-center text-sm text-gray-200">
              <h3 className="font-semibold text-white">{screenshots[currentIndex].title}</h3>
              <p className="mt-1 text-gray-400">{screenshots[currentIndex].description}</p>
            </div>

            <div className="mt-4 flex justify-center gap-1.5">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 w-10 rounded-full transition-colors ${
                    index === currentIndex ? "bg-brand-primary" : "bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Ekran ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="order-1 xl:order-2 max-w-2xl space-y-8">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.35em] text-gray-300">
                Mobil arayüz
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
                Saha ekiplerine güç veren deneyim
              </h2>
              <p className="mt-3 text-base text-gray-300">
                KrizNet mobil uygulaması, acil durum modlarına göre uyarlanabilir tasarımı ve yüksek performanslı mesh iletişim katmanı ile fark yaratır.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {appHighlights.map((highlight, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur transition hover:border-brand-primary/50 hover:bg-white/[0.1]"
                >
                  <div className={`pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${highlight.accent}`} />
                  <div className="relative flex flex-col gap-2">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white">
                      <highlight.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-semibold text-white">{highlight.title}</h3>
                    <p className="text-sm text-gray-200 leading-snug">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function MobileSolutionPage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_60%)]" />
        <div className="absolute -top-48 -right-32 h-96 w-96 rounded-full bg-brand-primary/25 blur-[160px]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.01)_45%,transparent_100%)]" />
        <div className="relative mx-auto max-w-5xl px-6 text-center space-y-10">
          <motion.span
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-gray-100"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            Mobil Çözüm
          </motion.span>
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Kesintisiz iletişim için cebinizdeki kriz asistanı
          </motion.h1>
          <motion.p
            className="mx-auto max-w-3xl text-lg text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            KrizNet mobil uygulaması, sahadaki ekiplerin en kritik anlarda bile bilgiye erişimini, koordinasyonunu ve güvenliğini garanti altına alır.
          </motion.p>
        </div>
      </section>

      <ScreenshotsCarousel />

      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.05),_transparent_65%)]" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.35em] text-gray-300">
              Modüller
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">Operasyonların kalbi</h2>
            <p className="mt-3 text-base text-gray-300">
              Sahadaki ekiplerden komuta merkezine kadar tüm katmanları tek mobil çözümde birleştirin.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {coreModules.map((module, index) => (
              <Card key={index} className="h-full border-white/10 bg-white/[0.05] backdrop-blur">
                <CardHeader className="space-y-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white">
                    <module.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-white text-xl">{module.title}</CardTitle>
                  <CardDescription className="text-sm text-gray-200">
                    {module.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {module.bullets.map((bullet, bulletIdx) => (
                    <div key={bulletIdx} className="flex items-start gap-2 text-sm text-gray-200">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-primary" />
                      <span>{bullet}</span>
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
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.35em] text-gray-300">
                Entegrasyon
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Kurumsal yapıya uyumlu bağlantı katmanı
              </h2>
              <p className="text-base text-gray-300">
                Mobil çözüm; telekom altyapıları, acil çağrı merkezleri ve üçüncü parti sistemlerle uçtan uca entegre çalışır.
              </p>
              <div className="grid gap-4">
                {connectivityLayers.map((layer, index) => (
                  <div key={index} className="rounded-3xl border border-white/10 bg-white/[0.05] px-6 py-5 transition hover:border-brand-primary/50 hover:bg-white/[0.1]">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white">
                        <layer.icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">{layer.title}</h3>
                    </div>
                    <p className="mt-3 text-sm text-gray-200">{layer.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <Card className="border-white/10 bg-white/[0.05] backdrop-blur">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Kurum içi süreç otomasyonu</CardTitle>
                <CardDescription className="text-gray-200">
                  KrizNet mobil çözümü, kurumların mevcut iş akışlarıyla otomatik entegre olur ve manuel süreçleri minimuma indirir.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {["Görev yönetimi ve onay zinciri", "Dinamik şablonlarla form toplama", "Anlık bildirim botları ve raporlar"].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-gray-200">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(239,68,68,0.25),_transparent_60%)]" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.35em] text-gray-300">
              Yol Haritası
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">Yakında gelecek geliştirmeler</h2>
            <p className="mt-3 text-base text-gray-300">
              Sürekli iyileştirme prensibiyle geliştirdiğimiz modüller ve planlanan özellikler.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {roadmap.map((item, index) => (
              <div key={index} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.05] px-6 py-4 text-sm text-gray-200">
                <span>{item.name}</span>
                <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
