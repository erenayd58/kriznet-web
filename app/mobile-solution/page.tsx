"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Smartphone,
  Zap,
  MapPin,
  Bell,
  Shield,
  Gauge,
  Cloud,
  RefreshCw,
  Users,
  BarChart3,
  Layout,
  Settings,
  CheckCircle2,
  Globe,
  Database,
  Lock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const screenshots = [
  {
    id: 1,
    title: "Giriş Ekranı",
    description: "İnternet yokken bile ulaşılabilir",
    image: "/screenshots/splash.jpg",
  },
  {
    id: 2,
    title: "İzinler",
    description: "Bluetooth, Konum ve Bildirim izinleri",
    image: "/screenshots/permissions.jpg",
  },
  {
    id: 3,
    title: "Profil Oluşturma",
    description: "Acil durum bilgilerinizi kaydedin",
    image: "/screenshots/profile.jpg",
  },
  {
    id: 4,
    title: "Ana Sayfa",
    description: "SOS butonu ile acil yardım çağırın",
    image: "/screenshots/main.jpg",
  },
  {
    id: 5,
    title: "Yakın Ağ",
    description: "Mesh ağındaki cihazları görüntüleyin",
    image: "/screenshots/network.jpg",
  },
  {
    id: 6,
    title: "Mesajlaşma",
    description: "İnternet olmadan mesajlaşın",
    image: "/screenshots/messages.jpg",
  },
  {
    id: 7,
    title: "Güç Yönetimi",
    description: "Batarya tasarrufu için güç modları",
    image: "/screenshots/settings.jpg",
  },
];

const mainFeatures = [
  {
    icon: BarChart3,
    title: "Gerçek Zamanlı Veri",
    description: "IoT cihazlarından anlık veri görüntüleme ve grafikler",
    highlights: ["Anlık cihaz verileri", "Geçmiş veri grafikleri", "Anomali tespiti"],
    color: "bg-red-100 text-brand-primary",
  },
  {
    icon: Bell,
    title: "Anlık Bildirimler",
    description: "Önemli olaylar için push notification sistemi",
    highlights: ["Kritik uyarılar", "Özelleştirilebilir", "Multi-channel"],
    color: "bg-red-100 text-brand-primary",
  },
  {
    icon: Layout,
    title: "Dashboard Özelleştirme",
    description: "Kullanıcı ihtiyaçlarına özel dashboard oluşturma",
    highlights: ["Drag & drop", "Widget'lar", "Tema seçenekleri"],
    color: "bg-gray-100 text-gray-700",
  },
];

const platforms = [
  {
    name: "iOS",
    version: "14.0+",
    icon: Smartphone,
    features: ["Native performans", "Face ID desteği", "Widget'lar"],
  },
  {
    name: "Android",
    version: "8.0+",
    icon: Smartphone,
    features: ["Material Design", "Background sync", "Bildirim kontrolü"],
  },
];

const techStack = [
  {
    category: "Frontend",
    icon: Layout,
    technologies: ["React Native", "TypeScript", "Redux Toolkit"],
  },
  {
    category: "Backend",
    icon: Database,
    technologies: ["REST API", "WebSocket", "Firebase"],
  },
  {
    category: "Harita & Konum",
    icon: MapPin,
    technologies: ["Google Maps SDK", "Geolocation API", "Geocoding"],
  },
  {
    category: "Güvenlik",
    icon: Lock,
    technologies: ["OAuth 2.0", "JWT", "Biometric Auth"],
  },
];

const uxFeatures = [
  {
    title: "Modern Tasarım",
    description: "Minimal, ölçeklenebilir arayüz bileşenleri ve canlı mikro animasyonlarla kullanıcıların dikkatini çekin.",
    icon: Layout,
    accent: "from-rose-500 via-orange-400 to-amber-400",
    glow: "bg-rose-500/40",
    highlights: ["Dinamik tema seçenekleri", "Özelleştirilebilir bileşen kütüphanesi"],
  },
  {
    title: "Hızlı Performans",
    description: "Native optimizasyonlar ve akıllı önbellekleme sayesinde her cihazda 60fps’e yakın akışkan deneyim.",
    icon: Zap,
    accent: "from-red-500 via-pink-500 to-purple-500",
    glow: "bg-pink-500/35",
    highlights: ["Gerçek zamanlı kaynak izleme", "Anlık geri bildirimli etkileşimler"],
  },
  {
    title: "Çevrimdışı Çalışma",
    description: "Ağ kesintilerinde bile kritik görevleri sürdürmek için akıllı senkronizasyon ve veri tutarlılığı.",
    icon: RefreshCw,
    accent: "from-emerald-500 via-teal-500 to-cyan-500",
    glow: "bg-emerald-500/30",
    highlights: ["Otomatik veri eşitleme", "Saha ekipleri için görev modu"],
  },
  {
    title: "Güvenlik",
    description: "Uçtan uca şifreleme ve cihaz bazlı doğrulama ile hassas verileriniz her koşulda güvende.",
    icon: Shield,
    accent: "from-sky-500 via-indigo-500 to-blue-600",
    glow: "bg-sky-500/35",
    highlights: ["Rol tabanlı erişim katmanları", "Anomali tespitli güvenlik uyarıları"],
  },
];


const integrations = [
  "RESTful API Gateway",
  "OAuth 2.0 Kimlik Doğrulama",
  "IoT Platform Entegrasyonu",
  "Cloud Services",
  "Real-time Analytics",
  "Firebase Cloud Messaging",
];

const futureFeatures = [
  { name: "Yapay Zeka Tahminleme", status: "Geliştiriliyor", icon: BarChart3 },
  { name: "AR ile Görselleştirme", status: "Planlanan", icon: Gauge },
  { name: "Sesli Asistan", status: "Planlanan", icon: Bell },
  { name: "Çoklu Dil Desteği", status: "Planlanan", icon: Globe },
];

function ScreenshotsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  const appHighlights = [
    {
      icon: Bell,
      title: "Acil SOS Sistemi",
      description: "Tek tuşla acil durum mesajı gönderin",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Users,
      title: "Mesh Ağ Görüntüleyici",
      description: "Yakınınızdaki cihazları gerçek zamanlı izleyin",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: MapPin,
      title: "Konum Paylaşımı",
      description: "Konumunuzu otomatik paylaşın",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Shield,
      title: "Offline Çalışma",
      description: "İnternet olmadan tüm kritik özelliklere erişim",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Zap,
      title: "Hızlı Mesajlaşma",
      description: "BLE Mesh üzerinden anlık mesaj gönderme",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Gauge,
      title: "Pil Optimizasyonu",
      description: "Akıllı güç yönetimi ile uzun pil ömrü",
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <section id="uygulama-gorunum" className="py-8 md:py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-8 md:mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Uygulama İçi Görünüm
          </h2>
          <p className="mt-2 text-base md:text-lg text-gray-600">
            KrizNet mobil uygulamasının modern ve kullanıcı dostu arayüzü
          </p>
        </div>

        {/* Two Column Layout: Phone + Features */}
        <div className="grid xl:grid-cols-[300px_1fr] gap-8 md:gap-10 xl:gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Side: Phone Mockup */}
          <div className="order-2 xl:order-1">
            <div className="relative w-[280px] mx-auto xl:mx-0">
              {/* Phone Mockup */}
              <div className="relative">
                <div 
                  className="relative bg-black rounded-2xl shadow-2xl overflow-hidden border-4 border-gray-800 mx-auto touch-pan-y"
                  style={{ aspectRatio: '9/19.5', maxWidth: '280px' }}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  {/* Screenshots */}
                  <div className="relative w-full h-full overflow-hidden">
                    {screenshots.map((screenshot, index) => (
                      <div
                        key={screenshot.id}
                        className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                          index === currentIndex
                            ? 'translate-x-0 opacity-100'
                            : index < currentIndex
                            ? '-translate-x-full opacity-0'
                            : 'translate-x-full opacity-0'
                        }`}
                      >
                        <Image
                          src={screenshot.image}
                          alt={screenshot.title}
                          fill
                          sizes="(max-width: 768px) 220px, 280px"
                          className="object-cover"
                          draggable={false}
                          onError={(e) => {
                            const target = e.currentTarget;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              const fallback = document.createElement('div');
                              fallback.className = 'absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-brand-primary to-red-700 text-white p-8 text-center';
                              fallback.innerHTML = `
                                <div class="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                                  <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                  </svg>
                                </div>
                                <h3 class="text-xl font-bold mb-2">${screenshot.title}</h3>
                                <p class="text-sm opacity-90">${screenshot.description}</p>
                              `;
                              parent.appendChild(fallback);
                            }
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 bg-gradient-to-br from-brand-primary to-red-600 hover:from-red-600 hover:to-brand-primary text-white rounded-full p-3 shadow-lg transition-all hover:scale-110 border-2 border-white"
                  aria-label="Önceki ekran"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 bg-gradient-to-br from-brand-primary to-red-600 hover:from-red-600 hover:to-brand-primary text-white rounded-full p-3 shadow-lg transition-all hover:scale-110 border-2 border-white"
                  aria-label="Sonraki ekran"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Screenshot Info */}
              <div className="mt-4 text-center px-2">
                <h3 className="text-base font-bold text-gray-900 mb-1 line-clamp-1">
                  {screenshots[currentIndex].title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-1">
                  {screenshots[currentIndex].description}
                </p>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-1.5 mt-3">
                {screenshots.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-1.5 rounded-full transition-all ${
                      index === currentIndex
                        ? 'bg-brand-primary w-6'
                        : 'bg-gray-300 hover:bg-gray-400 w-1.5'
                    }`}
                    aria-label={`${index + 1}. ekrana git`}
                  />
                ))}
              </div>

              {/* Swipe Hint */}
              <div className="xl:hidden text-center mt-3">
                <p className="text-sm text-gray-500">
                  👈 Kaydırarak gezinin 👉
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Features List */}
          <div className="order-1 xl:order-2 space-y-4 xl:max-w-2xl">
            <div className="mb-4">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                Temel Özellikler
              </h3>
              <p className="text-base text-gray-600">
                Afet anında hayat kurtaran modern teknoloji
              </p>
            </div>

            <div className="grid sm:grid-cols-2 xl:grid-cols-1 gap-3">
              {appHighlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="group bg-white rounded-lg p-3.5 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 hover:border-brand-primary/30"
                >
                  <div className="flex items-center gap-3">
                    <div className={`flex-shrink-0 w-11 h-11 rounded-lg bg-gradient-to-br ${highlight.color} flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform`}>
                      <highlight.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base font-semibold text-gray-900 leading-tight mb-1 group-hover:text-brand-primary transition-colors line-clamp-1">
                        {highlight.title}
                      </h4>
                      <p className="text-sm text-gray-600 leading-snug line-clamp-1">
                        {highlight.description}
                      </p>
                    </div>
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
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 sm:py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-primary via-red-600 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent via-white/20 via-30% via-white/60 via-60% to-white pointer-events-none" />
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">
              <Smartphone className="h-5 w-5 text-white" />
              <span className="text-sm font-semibold text-white">
                Mobil Çözüm
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              KrizNet Mobil Uygulaması
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/90">
              Modern ve kullanıcı dostu mobil uygulamamız, afet anında bile kesintisiz
              iletişim için tasarlandı. Mesh tabanlı altyapı sayesinde ağlar koptuğunda
              ekipleriniz bağlantıda kalır.
            </p>
          </div>
        </div>
      </section>

      {/* App Screenshots Carousel */}
      <ScreenshotsCarousel />

      {/* Main Features */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Uygulama Özellikleri
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-600">
              Kullanıcı ihtiyaçlarına özel geliştirilmiş özellikler
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainFeatures.map((feature, index) => (
              <Card
                key={index}
                className="border-2 hover:border-brand-primary transition-all hover:shadow-xl group"
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-brand-primary flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* UX Features */}
      <section className="relative overflow-hidden py-24 bg-slate-950">
        <div className="absolute inset-0">
          <div className="absolute -top-32 -left-24 h-72 w-72 rounded-full bg-brand-primary/20 blur-[140px]" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-red-500/10 blur-[200px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_55%)]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-white/80">
              Deneyim Tasarımı
            </div>
            <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Kullanıcı Deneyimi
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-300">
              Her detayda mükemmelliği hedefleyen zahmetsiz, hızlı ve güvenli etkileşim akışları.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {uxFeatures.map((feature, index) => (
              <div
                key={index}
                className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_25px_60px_-30px_rgba(239,68,68,0.45)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-brand-primary/40 hover:shadow-[0_28px_75px_-30px_rgba(239,68,68,0.6)]"
              >
                <div className={`pointer-events-none absolute -top-24 right-[-60px] h-48 w-48 rounded-full ${feature.glow} blur-3xl opacity-40 transition-opacity duration-500 group-hover:opacity-80`} />
                <div className="relative flex h-full flex-col">
                  <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.accent} text-white shadow-lg shadow-black/20`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-300">
                    {feature.description}
                  </p>
                  <div className="mt-6 border-t border-white/10 pt-6">
                    <ul className="space-y-2 text-sm text-gray-300">
                      {feature.highlights.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-center gap-2">
                          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-white/60 group-hover:bg-white" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Teknoloji Yığını
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-300">
              Modern ve güvenilir teknolojilerle geliştirildi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all">
                <CardHeader>
                  <tech.icon className="h-8 w-8 text-brand-primary mb-3" />
                  <CardTitle className="text-white">{tech.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {tech.technologies.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-brand-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-6">Sistem Entegrasyonları</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {integrations.map((integration, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-brand-primary flex-shrink-0" />
                  <span className="text-gray-300">{integration}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Future Features */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Gelecek Özellikler
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-600">
              Sürekli gelişen ve yenilenen uygulamamız
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {futureFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all">
                <CardHeader>
                  <feature.icon className="h-10 w-10 text-brand-primary mx-auto mb-3" />
                  <CardTitle className="text-lg">{feature.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">
                    {feature.status}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        {/* Soft gradient background with opacity fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 via-brand-primary/5 to-brand-primary/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-primary/60" />
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent" />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 tracking-tight">
              Mobil Uygulamamızı Keşfedin
            </h2>
            
            {/* Description */}
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              Kullanıcı dostu arayüzü ve güçlü özellikleri ile her an her yerde
              <br className="hidden md:block" />
              IoT cihazlarınızı yönetin.
            </p>
            
            {/* Coming Soon Badge */}
            <div className="mb-10">
              <span className="inline-flex items-center gap-2 bg-white border border-gray-200 text-brand-primary px-5 py-2 rounded-full text-sm font-semibold shadow-sm hover:shadow-md transition-shadow">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
                </span>
                Yakında
              </span>
            </div>
            
            {/* App Store Badges */}
            <div className="flex flex-wrap justify-center items-center gap-5 md:gap-8">
              {/* App Store (full badge) */}
              <a href="#" aria-label="App Store" className="group inline-flex">
                <Image
                  src="/app-store-logos/pp-store-icon.png"
                  alt="Download on the App Store"
                  width={240}
                  height={70}
                  sizes="(max-width: 640px) 200px, (max-width: 1024px) 220px, 240px"
                  priority
                  quality={90}
                  className="h-auto w-[200px] sm:w-[220px] md:w-[240px] transition-transform duration-300 group-hover:scale-[1.05]"
                />
              </a>

              {/* Google Play (full badge) */}
              <a href="#" aria-label="Google Play" className="group inline-flex">
                <Image
                  src="/app-store-logos/google-play-icon.png"
                  alt="Get it on Google Play"
                  width={240}
                  height={70}
                  sizes="(max-width: 640px) 200px, (max-width: 1024px) 220px, 240px"
                  priority
                  quality={90}
                  className="h-auto w-[200px] sm:w-[220px] md:w-[240px] transition-transform duration-300 group-hover:scale-[1.05]"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
