import { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Akademik Çalışmalar - KrizNet",
  description: "Bilimsel araştırmalar, yayınlar ve saha testleri",
};

const publications = [
  {
    title: "KrizNet: Mediating Post-disaster Communication Systems using the Internet of Things and Bluetooth Mesh",
    conference: "IEEE International Conference on Internet of Things",
    status: "Yayınlandı",
    icon: FileText,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Secure Device-to-Device Communication for Emergency Response",
    conference: "Technische Universität Darmstadt - Doctoral Dissertation",
    status: "Yayınlandı",
    icon: GraduationCap,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Communication and Coordination Networks in the 2023 Kahramanmaraş Earthquakes",
    conference: "Natural Hazards Center Quick Response Research Report Series, Report 365 - University of Colorado Boulder",
    status: "Yayınlandı",
    icon: CheckCircle2,
    color: "bg-green-100 text-green-600",
  },
];

const posters = [
  {
    title: "BLE Mesh Network Performance Analysis for Disaster Communication",
    event: "Ulusal IoT Konferansı 2024",
    location: "İstanbul, Türkiye",
    highlights: ["Sinyal gücü haritalama", "Batarya ömrü optimizasyonu", "Dağıtım en iyi uygulamalar"],
  },
  {
    title: "Smart City Dashboard: User Experience Design",
    event: "HCI Turkey Conference",
    location: "Ankara, Türkiye",
    highlights: ["UX araştırma bulguları", "Arayüz tasarımı", "Kullanılabilirlik testleri"],
  },
  {
    title: "Improving the BLE Mesh Transmissions with User Collaboration in Smart Spaces Management",
    event: "15th ACM/IEEE International Conference on Information Processing in Sensor Networks (IPSN)",
    location: "Vienna, Austria",
    highlights: ["BLE Mesh optimizasyonu", "Kullanıcı işbirliği", "Akıllı alan yönetimi"],
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
    status: "completed",
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
    status: "completed",
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
    status: "completed",
  },
];

const findings = [
  {
    category: "Ağ Performansı",
    icon: LineChart,
    stats: [
      { label: "Ortalama Gecikme", value: "2.3s" },
      { label: "Paket Kaybı", value: "%0.2" },
      { label: "Kapsama Alanı", value: "%98" },
    ],
    color: "from-brand-primary to-red-700",
  },
  {
    category: "Güç Tüketimi",
    icon: Zap,
    stats: [
      { label: "Uyku Modu", value: "15 µA" },
      { label: "İletim Pik", value: "220 mA" },
      { label: "Batarya Ömrü", value: "2.1 yıl" },
    ],
    color: "from-gray-700 to-gray-800",
  },
  {
    category: "Kullanıcı Davranışı",
    icon: Users,
    stats: [
      { label: "Ortalama Kullanım", value: "8 dk/gün" },
      { label: "Bildirim Açma", value: "%68" },
      { label: "Gerçek Zamanlı Harita", value: "En Popüler" },
    ],
    color: "from-gray-700 to-gray-800",
  },
];

const researchAreas = [
  { title: "5G IoT Entegrasyonu", period: "0-6 ay", icon: Zap },
  { title: "Uç Yapay Zeka", period: "0-6 ay", icon: Brain },
  { title: "Çok Modlu Algılama", period: "6-12 ay", icon: Beaker },
  { title: "Sürü Zekası", period: "6-12 ay", icon: Target },
  { title: "Kuantum Kriptografisi", period: "1-2 yıl", icon: Database },
  { title: "Dijital İkiz", period: "1-2 yıl", icon: BarChart3 },
];

export default function AcademicPage() {
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
              <GraduationCap className="h-4 w-4 text-white" />
              <span className="text-sm font-semibold text-white">
                Akademik Araştırma
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Bilime Dayalı Yenilikçi Çözümler
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/90">
              Projemiz sadece bir ticari ürün değil, bilimsel araştırma çalışmalarını referans alan bir çalışmadır.
            </p>
          </div>
        </div>
      </section>

      {/* Data Stats */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-primary mb-2">1000+</div>
              <div className="text-sm text-gray-600">Yayın Sayısı</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-primary mb-2">10+</div>
              <div className="text-sm text-gray-600">Test Senaryoları</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-primary mb-2">11+</div>
              <div className="text-sm text-gray-600">Ülke</div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-20 bg-brand-light">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Bilimsel Yayınlar
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Uluslararası konferanslarda sunulan makaleler.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {publications.map((pub, index) => (
              <Card
                key={index}
                className="border-2 hover:border-brand-primary transition-all hover:shadow-xl group"
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${pub.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <pub.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg leading-tight">
                    {pub.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">{pub.conference}</p>
                  <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full bg-gray-100">
                    {pub.status}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Poster Presentations */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Poster Sunumları
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Ulusal ve uluslararası etkinliklerde sunulan poster çalışmaları.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {posters.map((poster, index) => (
              <Card key={index} className="hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle className="text-lg">{poster.title}</CardTitle>
                  <div className="mt-2 space-y-1 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{poster.event}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{poster.location}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {poster.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Field Tests / Pilots */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Saha Testleri
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Gerçek dünya koşullarında gelecek pilot uygulamalarımız
            </p>
          </div>

          <div className="space-y-8">
            {pilots.map((pilot, index) => (
              <Card
                key={index}
                className="border-2 border-transparent hover:border-brand-primary transition-all overflow-hidden"
              >
                <div className="grid lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-1 bg-gradient-to-br from-brand-primary to-red-700 text-white p-6">
                    <h3 className="text-2xl font-bold mb-4">{pilot.name}</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {pilot.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {pilot.duration}
                      </div>
                      <div className="flex items-center gap-2">
                        <Beaker className="h-4 w-4" />
                        {pilot.devices} Cihaz
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-2 p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Beklenilen Sonuçlar:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {pilot.results.map((result, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-2xl sm:text-3xl font-bold text-brand-primary mb-1 break-words">
                            {result.value}
                          </div>
                          <div className="text-sm text-gray-600 break-words">{result.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Findings */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Önemli Bulgular
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Veri analizinden elde edilen kritik içgörüler
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {findings.map((finding, index) => (
              <Card key={index} className={`bg-gradient-to-br ${finding.color} border-0`}>
                <CardHeader>
                  <finding.icon className="h-8 w-8 text-white mb-3" />
                  <CardTitle className="text-white text-lg">
                    {finding.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {finding.stats.map((stat, idx) => (
                      <div key={idx} className="bg-white/20 rounded-lg p-3 backdrop-blur-sm">
                        <div className="text-2xl font-bold text-white mb-1">
                          {stat.value}
                        </div>
                        <div className="text-xs text-white/80">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Future Research */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Gelecek Araştırma Konuları
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Devam eden ve planlanan AR-GE çalışmalarımız
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {researchAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-lg hover:border-brand-primary transition-all text-center">
                <CardHeader className="pb-3">
                  <area.icon className="h-8 w-8 text-brand-primary mx-auto mb-2" />
                  <CardTitle className="text-sm leading-tight">
                    {area.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <span className="text-xs text-gray-500">{area.period}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

