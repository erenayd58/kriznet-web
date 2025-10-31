import { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  TrendingUp,
  Users,
  Award,
  Target,
  Zap,
  Globe,
  Shield,
  Lightbulb,
  DollarSign,
  BarChart,
  CheckCircle2,
  Rocket,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Stratejik Ortaklıklar - KrizNet",
  description: "Telekomünikasyon şirketleri ve kamu kurumları ile stratejik işbirliği fırsatları",
};

const benefits = [
  {
    icon: DollarSign,
    title: "Yeni Gelir Kaynakları",
    description: "Global ölçekte B2B iş modeli üzerine teknoloji transferi.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Users,
    title: "Müşteri Kazanımı",
    description: "Ağa olan güven kurulduktan sonra müşteri temelli artış.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Award,
    title: "Teknoloji Liderliği",
    description: "5G ve IoT alanında sektör öncülüğü",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Globe,
    title: "Afet Yönetimi Paydaşı",
    description: "Afet yönetiminde kritik rol oynama.",
    color: "bg-red-100 text-brand-primary",
  },
];

const metrics = [
  { label: "Yıllık Büyüme", value: "%15-20", subtitle: "Sektör ortalaması" },
  { label: "ROI Süresi", value: "6-12 ay", subtitle: "Ortalama" },
  { label: "Cihaz Kapasitesi", value: "50K+", subtitle: "Hücre başına" },
];

const roadmap = [
  {
    phase: "Faz 1",
    period: "0-6 ay",
    targets: ["10 belediye", "5,000 cihaz"],
    status: "planned",
  },
  {
    phase: "Faz 2",
    period: "6-12 ay",
    targets: ["50 belediye", "50,000 cihaz"],
    status: "planned",
  },
  {
    phase: "Faz 3",
    period: "12-24 ay",
    targets: ["Pazar lideri", "5+ ülke"],
    status: "planned",
  },
];

const features = [
  "End-to-end çözüm (Hardware + Software + Platform)",
  "Ölçeklenebilir altyapı",
  "Telekomünikasyon ağları ile tam entegrasyon",
  "7/24 teknik destek",
  "Düşük maliyet, yüksek performans",
];

export default function PartnershipPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 sm:py-16">
        {/* Full gradient background from red to transparent */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-primary via-red-600 to-transparent" />
        {/* Smooth fade to white at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent via-white/20 via-30% via-white/60 via-60% to-white pointer-events-none" />
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">
              <Rocket className="h-4 w-4 text-white" />
              <span className="text-sm font-semibold text-white">
                Stratejik Ortaklık
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Birlikte Daha Güçlüyüz
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/90">
              Telekomünikasyon şirketleri ve kamu kurumları ile afet yönetiminde 
              yeni bir dönem başlatıyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-brand-primary mb-2">
                  {metric.value}
                </div>
                <div className="text-sm font-semibold text-gray-900 mb-1">
                  {metric.label}
                </div>
                <div className="text-xs text-gray-600">{metric.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-brand-light">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ortaklık Avantajları
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              İşbirliğimizin sağlayacağı stratejik faydalar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="border-2 hover:border-brand-primary transition-all hover:shadow-xl group"
              >
                <CardHeader className="text-center">
                  <div
                    className={`w-16 h-16 rounded-full ${benefit.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <benefit.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Büyüme Yol Haritası
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Aşamalı büyüme planımız
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {roadmap.map((phase, index) => (
              <Card
                key={index}
                className="border-2 hover:border-brand-primary transition-all"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">
                        {index + 1}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-bold text-gray-900 text-lg">
                          {phase.phase}
                        </h4>
                        <span className="text-sm text-gray-500">
                          {phase.period}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {phase.targets.map((target, idx) => (
                          <span
                            key={idx}
                            className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                          >
                            {target}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-brand-light">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Rekabet Avantajları
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Çözümümüzü öne çıkaran özellikler
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all"
              >
                <CheckCircle2 className="h-5 w-5 text-brand-primary flex-shrink-0" />
                <span className="text-sm text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20">
        {/* Gradient background from white to red */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-primary via-40% to-red-700" />
        {/* Smooth fade from white at top */}
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-white via-white/60 via-60% to-transparent pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Birlikte Çalışmaya Başlayalım
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Stratejik ortaklık fırsatları hakkında detaylı bilgi almak için 
              bizimle iletişime geçin.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-brand-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                İletişime Geçin
                <CheckCircle2 className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

