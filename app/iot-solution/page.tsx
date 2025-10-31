import { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Cpu,
  Zap,
  Shield,
  Wifi,
  Battery,
  Cloud,
  Server,
  Database,
  LineChart,
  Radio,
  CheckCircle2,
  Layers,
  Lock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "IoT Çözümü - KrizNet",
  description: "Akıllı IoT cihazlarımız ve altyapımız hakkında detaylı bilgi",
};

const deviceSpecs = [
  {
    icon: Cpu,
    title: "Ana İşlemci",
    specs: ["Nordic nRF52832", "64 MHz ARM Cortex-M4", "512 KB Flash"],
    color: "bg-red-100 text-brand-primary",
  },
  {
    icon: Radio,
    title: "Kablosuz İletişim",
    specs: ["BLE 5.0 (2.4 GHz)", "Mesh Network", "LoRaWAN"],
    color: "bg-gray-100 text-gray-700",
  },
  {
    icon: Battery,
    title: "Güç Kaynağı",
    specs: ["3000 mAh Li-Po", "Solar panel", "2+ yıl ömür"],
    color: "bg-red-100 text-brand-primary",
  },
];

const features = [
  {
    icon: Zap,
    title: "Düşük Güç Tüketimi",
    description: "Ultra düşük güç tüketimi, akıllı uyku modları",
    stats: [
      { label: "Sleep Mode", value: "2 µA" },
      { label: "BLE TX", value: "5-10 mA" },
    ],
  },
  {
    icon: Wifi,
    title: "Mesh Network",
    description: "BLE mesh teknolojisi ile cihazlar arası ağ oluşturma",
    stats: [
      { label: "Menzil", value: "100+ m" },
      { label: "Mesh Hops", value: "10+ seviye" },
    ],
  },
  {
    icon: Layers,
    title: "Ölçeklenebilirlik",
    description: "Plug-and-play kurulum, uzaktan konfigürasyon",
    stats: [
      { label: "Hücre Kapasitesi", value: "50K+ cihaz" },
      { label: "Kurulum", value: "~15 dk" },
    ],
  },
  {
    icon: Shield,
    title: "Güvenlik",
    description: "AES-256 şifreleme, güvenli veri iletimi",
    stats: [
      { label: "Şifreleme", value: "AES-256" },
      { label: "Sertifika", value: "CE, IP65" },
    ],
  },
];

const useCases = [
  {
    category: "Afet Yönetimi",
    icon: Shield,
    cases: [
      { name: "Acil Durum İletişimi", description: "Ağ altyapısı olmadan haberleşme" },
      { name: "Konum Paylaşımı", description: "GPS koordinatları mesh ağ üzerinden iletim" },
      { name: "Yardım Talebi", description: "SOS sinyalleri ve acil yardım mesajları" },
      { name: "Ekip Koordinasyonu", description: "Kurtarma ekipleri arası iletişim" },
    ],
  },
];

const cloudInfra = [
  {
    title: "Veri Depolama",
    icon: Database,
    features: ["Time-series DB (InfluxDB)", "Hot data: 6 ay", "Cold data: 5 yıl arşiv"],
  },
  {
    title: "API Gateway",
    icon: Server,
    features: ["RESTful API", "WebSocket desteği", "Rate limiting"],
  },
  {
    title: "Mikro Servisler",
    icon: Cloud,
    features: ["Data ingestion", "Processing", "Analytics"],
  },
];

const techAdvantages = [
  "Düşük cihaz maliyeti",
  "Minimal bakım gereksinimleri",
  "Uzun ömür (10+ yıl)",
  "Esnek veri tarifeleri",
  "OTA firmware güncellemeleri",
  "Edge computing yetenekleri",
];

export default function IoTSolutionPage() {
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
              <Cpu className="h-4 w-4 text-white" />
              <span className="text-sm font-semibold text-white">
                IoT Teknolojisi
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Akıllı IoT Cihazları ve Altyapı
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/90">
              BLE mesh network teknolojisi ile çalışan akıllı cihazlarımız, afet
              anında kesintisiz iletişimi sağlayarak hayat kurtarıyor.
            </p>
          </div>
        </div>
      </section>

      {/* Device Specifications */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Donanım Özellikleri
            </h2>
            <p className="mt-4 text-lg text-gray-600">
            Son teknoloji bileşenlerle tasarlanmış IoT cihazlarımız
          </p>
        </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deviceSpecs.map((spec, index) => (
              <Card
                key={index}
                className="border-2 hover:border-brand-primary transition-all hover:shadow-xl group"
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-lg ${spec.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <spec.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{spec.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {spec.specs.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-brand-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Features */}
      <section className="py-20 bg-brand-light">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Teknik Avantajlar
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              IoT teknolojisinin sağladığı üstün özellikler
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-brand-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-brand-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {feature.stats.map((stat, idx) => (
                      <div key={idx} className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">{stat.label}:</span>
                        <span className="text-sm font-semibold text-brand-primary">
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Kullanım Alanları
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Afet anında hayat kurtaran uygulamalar
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {useCases.map((useCase, index) => (
              <Card key={index} className="border-2 hover:border-brand-primary transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-primary to-red-700 flex items-center justify-center">
                      <useCase.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl">{useCase.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {useCase.cases.map((item, idx) => (
                      <div key={idx} className="border-l-4 border-brand-primary pl-4">
                        <h4 className="font-semibold text-gray-900 mb-1">{item.name}</h4>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Infrastructure */}
      <section className="relative py-20 text-white">
        {/* Gradient background with darker top for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800/80 via-gray-900 to-gray-950" />
        {/* Smooth fade from white at top */}
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-white via-white/50 to-transparent pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white drop-shadow-xl">
              Cloud Altyapısı
            </h2>
            <p className="mt-4 text-white/85 drop-shadow-lg">
              Modern IoT platformları ile sorunsuz entegrasyon
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {cloudInfra.map((infra, index) => (
              <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all">
                <CardHeader>
                  <infra.icon className="h-10 w-10 text-brand-primary mb-4" />
                  <CardTitle className="text-white text-xl">{infra.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {infra.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-brand-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6">IoT Platform Entegrasyonu</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Lock className="h-5 w-5 text-brand-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold">Device Management</div>
                    <div className="text-sm text-gray-400">Cihaz yaşam döngüsü yönetimi</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Database className="h-5 w-5 text-brand-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold">Data Pipeline</div>
                    <div className="text-sm text-gray-400">Gerçek zamanlı veri akışı</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <LineChart className="h-5 w-5 text-brand-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold">Analytics</div>
                    <div className="text-sm text-gray-400">Real-time analytics motoru</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-brand-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold">Security</div>
                    <div className="text-sm text-gray-400">Endüstri güvenlik standartları</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6">Maliyet Etkinliği</h3>
              <ul className="space-y-3">
                {techAdvantages.map((advantage, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

