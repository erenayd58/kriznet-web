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
  title: "Vodafone Ortaklığı - Vodafone Bi'düşünsene",
  description: "Vodafone ile stratejik uyum ve sağlayacağımız faydalar",
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
  { label: "Hedef Pazar", value: "$2.5M", subtitle: "Türkiye 2025" },
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
  "Vodafone ağı ile tam entegrasyon",
  "7/24 teknik destek",
  "Düşük maliyet, yüksek performans",
];

export default function VodafonePartnershipPage() {
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
              Vodafone ile Geleceği Birlikte İnşa Edelim
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/90">
              Yenilikçi IoT çözümlerimizle Vodafone&apos;un teknoloji liderliğini
              güçlendiriyor, yeni iş modelleri ve gelir kaynakları yaratıyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Vodafone&apos;a Sağlayacağımız Değer
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Stratejik ortaklığımızın temel faydaları
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="relative overflow-hidden border-2 hover:border-brand-primary transition-all hover:shadow-xl group"
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-lg ${benefit.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 bg-gradient-to-br from-brand-light to-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border-2 border-transparent hover:border-brand-primary transition-all"
              >
                <div className="text-sm font-medium text-gray-500 mb-2">
                  {metric.label}
                </div>
                <div className="text-4xl font-bold text-brand-primary mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-gray-600">{metric.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Büyüme Yol Haritası
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Stratejik hedeflerimiz ve kilometre taşları
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roadmap.map((phase, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden ${
                  phase.status === "in-progress"
                    ? "border-2 border-brand-primary shadow-xl"
                    : "border-gray-200"
                }`}
              >
                {phase.status === "in-progress" && (
                  <div className="absolute top-0 right-0 bg-brand-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    Aktif
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center text-white font-bold text-lg">
                      {index + 1}
                    </div>
                    <div>
                      <CardTitle>{phase.phase}</CardTitle>
                      <CardDescription>{phase.period}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {phase.targets.map((target, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{target}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Integration */}
      <section className="relative py-20 text-white">
        {/* Gradient background from white to dark */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-800 via-40% to-gray-900" />
        {/* Smooth fade from white at top */}
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-white via-white/60 via-60% to-transparent pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Vodafone Altyapısı ile Tam Entegrasyon
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Mevcut Vodafone teknolojilerini kullanarak hızlı ve güvenli bir
                şekilde hizmete sunuyoruz.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <Zap className="h-6 w-6 text-yellow-400 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Vodafone NB-IoT Ağı</h3>
                    <p className="text-sm text-gray-300">
                      Nationwide coverage, güvenli ve güvenilir bağlantı
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <Shield className="h-6 w-6 text-green-400 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">
                      Vodafone IoT Platform
                    </h3>
                    <p className="text-sm text-gray-300">
                      Device management, connectivity, application enablement
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <Lightbulb className="h-6 w-6 text-blue-400 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Vodafone Cloud</h3>
                    <p className="text-sm text-gray-300">
                      Veri depolama, computing resources, disaster recovery
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6">Rekabet Avantajları</h3>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-200">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Model */}
      <section className="py-20 bg-brand-light">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              İşbirliği Modeli
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Win-win yaklaşımıyla sürdürülebilir ortaklık
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-brand-primary transition-all">
              <CardHeader>
                <Target className="h-10 w-10 text-brand-primary mb-4" />
                <CardTitle>Teknoloji Transferi</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Vodafone AR-GE ekipleri ile ortak çalışma</li>
                  <li>• Bilgi paylaşımı ve eğitim</li>
                  <li>• Co-innovation programları</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-brand-primary transition-all">
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-brand-primary mb-4" />
                <CardTitle>Yatırım & Finansman</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Pilot projeler için Vodafone desteği</li>
                  <li>• Marketing ve sales kaynakları</li>
                  <li>• Global sales network&apos;e erişim</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-brand-primary transition-all">
              <CardHeader>
                <BarChart className="h-10 w-10 text-brand-primary mb-4" />
                <CardTitle>Fikri Mülkiyet</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Ortak patent hakları</li>
                  <li>• Lisanslama modelleri</li>
                  <li>• Adil kazanç paylaşımı</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        {/* Gradient background from dark to red */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-brand-primary via-60% to-red-700" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Geleceği Birlikte İnşa Edelim
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Vodafone ile stratejik ortaklığımız, IoT ve akıllı şehir alanında
              liderlik konumunu güçlendirecek, yeni gelir kaynakları yaratacak
              ve toplumsal değer üretecek bir platform sunuyor.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-brand-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Bizimle İletişime Geçin
                <CheckCircle2 className="h-5 w-5" />
              </a>
              <a
                href="/demo"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Demo İzle
                <Rocket className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

