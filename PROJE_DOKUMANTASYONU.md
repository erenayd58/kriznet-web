# Bluemergency Web Sitesi - Kapsamlı Proje Dokümantasyonu

## İçindekiler
1. [Proje Genel Bakış](#proje-genel-bakış)
2. [Teknoloji Yığını](#teknoloji-yığını)
3. [Site Yapısı ve Navigasyon](#site-yapısı-ve-navigasyon)
4. [Sayfa Detayları](#sayfa-detayları)
5. [Bileşenler](#bileşenler)
6. [Tasarım ve Stil](#tasarım-ve-stil)
7. [Özellikler ve Fonksiyonalite](#özellikler-ve-fonksiyonalite)

---

## Proje Genel Bakış

### Proje Adı
**Bluemergency - Afet Anında Hayat Kurtaran İletişim**

### Açıklama
Bluemergency, BLE mesh teknolojisi ile afet anında kesintisiz iletişim sağlayan yenilikçi bir mobil uygulama ve IoT çözümüdür. Proje, afet anında ağ altyapısı çöktüğünde bile mesh ağ üzerinden bilgi iletimini mümkün kılar.

### Temel Misyon
- Afet anında BLE teknolojisi kullanarak iletişimi sağlamak
- Ağ altyapısı çöktüğünde bile mesh ağ ile bilgi iletimini mümkün kılmak
- Hayat kurtaran teknolojiler geliştirmek

### Proje Kapsamı
- Mobil uygulama çözümü (iOS ve Android)
- IoT cihazları ve altyapı
- Stratejik ortaklık modelleri
- Akademik araştırma ve geliştirme

---

## Teknoloji Yığını

### Frontend Framework
- **Next.js 14.2.5**: React tabanlı full-stack framework
- **React 18.3.1**: UI kütüphanesi
- **TypeScript 5.5.2**: Tip güvenli programlama

### Stil ve UI Kütüphaneleri
- **Tailwind CSS 3.4.4**: Utility-first CSS framework
- **Radix UI**: Erişilebilir UI bileşenleri
  - @radix-ui/react-accordion (1.1.2)
  - @radix-ui/react-dialog (1.0.5)
  - @radix-ui/react-icons (1.3.0)
  - @radix-ui/react-slot (1.0.2)
- **Lucide React 0.395.0**: Icon kütüphanesi
- **class-variance-authority**: Stil varyasyon yönetimi
- **clsx & tailwind-merge**: Dinamik class yönetimi
- **tailwindcss-animate**: Animasyon utilities

### Backend ve API
- **Next.js API Routes**: Serverless fonksiyonlar
- **Nodemailer 6.9.14**: E-posta gönderim servisi

### İçerik Yönetimi
- **MDX**: Markdown ile React bileşenleri
  - @mdx-js/loader (3.0.1)
  - @mdx-js/react (3.0.1)
  - @next/mdx (14.2.5)

### Test Araçları
- **Playwright 1.44.1**: End-to-end testing

### Geliştirme Araçları
- **ESLint**: Kod kalitesi
- **Prettier**: Kod formatı
- **Autoprefixer**: CSS vendor prefix
- **PostCSS**: CSS transformasyonu

### Renk Paleti
```css
Primary (Brand): #E60000 (Kırmızı)
Dark: #333333
Gray: #666666
Light: #F5F5F5
Background: Beyaz (#FFFFFF)
```

---

## Site Yapısı ve Navigasyon

### Ana Navigasyon Menüsü
1. **Ana Sayfa** (`/`)
2. **Mobil Çözüm** (`/mobile-solution`)
3. **IoT Çözümü** (`/iot-solution`)
4. **Stratejik Ortaklıklar** (`/partnership`)
5. **Akademik** (`/academic`)
6. **Demo** (`/demo`)
7. **Ekip** (`/team`)
8. **İletişim** (`/contact`)

### Footer Navigasyonu

#### Çözümler
- Mobil Çözüm
- IoT Çözümü
- Stratejik Ortaklıklar
- Akademik Çalışmalar

#### Şirket
- Ekip
- Demo
- İletişim

#### Yasal
- Gizlilik Politikası (`/privacy`)
- Kullanım Koşulları (`/terms`)
- SSS (`/faq`)

### Özel Sayfalar
- **Vodafone Ortaklığı** (`/vodafone-partnership`) - Vodafone'a özel sunum sayfası

---

## Sayfa Detayları

### 1. Ana Sayfa (`/`)

#### Meta Bilgileri
- **Title**: "Bluemergency - Afet Anında İletişim Çözümü"
- **Description**: "BLE mesh teknolojisi ile afet anında kesintisiz iletişim sağlayan yenilikçi mobil uygulama ve IoT çözümü."

#### Bölümler

##### Hero Section
- **Başlık**: "Afet Anında Hayat Kurtaran İletişim"
- **Alt Başlık**: Afet anında BLE teknolojisini kullanarak iletişimi sağlama, mesh ağ ile bilgi iletimi
- **Stil**: Gradient arka plan (kırmızı tonları), grid pattern overlay

##### Çözümlerimiz
4 ana çözüm kartı:

**1. Mobil Çözüm**
- İkon: Smartphone
- Açıklama: Modern ve kullanıcı dostu arayüz
- Özellikler:
  - Gerçek zamanlı veri görüntüleme
  - Konum tabanlı servisler
  - Anlık bildirimler
  - iOS ve Android desteği

**2. IoT Çözümü**
- İkon: Cpu
- Açıklama: Akıllı IoT cihazları ve altyapı
- Özellikler:
  - Düşük güç tüketimi
  - BLE mesh teknolojisi
  - Kesintisiz iletişim
  - Afet için özel tasarım

**3. Stratejik Ortaklıklar**
- İkon: Handshake
- Açıklama: Telekomünikasyon şirketleriyle işbirliği
- Özellikler:
  - Kamu kurumları ortaklığı
  - Yeni iş modelleri
  - Teknoloji liderliği fırsatları

**4. Akademik Çalışmalar**
- İkon: GraduationCap
- Açıklama: Bilimsel araştırmalar ve yayınlar
- Özellikler:
  - Uluslararası konferans sunumları
  - Yayınlanan makaleler
  - Gerçek dünya testleri
  - Bilimsel temelli çözümler

##### CTA (Call To Action) Section
- **Başlık**: "Projemizi Daha Yakından Keşfedin"
- **Alt Başlık**: "Detaylı bilgi almak ve demo görmek için bizimle iletişime geçin"
- **Butonlar**:
  - İletişim (Primary)
  - Ekibimiz (Outline)

---

### 2. Mobil Çözüm Sayfası (`/mobile-solution`)

#### Meta Bilgileri
- **Title**: "Mobil Çözüm - Bluemergency"
- **Description**: "Yenilikçi mobil uygulamamız hakkında detaylı bilgi"

#### Ana Bölümler

##### Hero Section
- **Badge**: "Mobil Uygulama"
- **Başlık**: "Her Yerde Yanımızda"
- **Alt Başlık**: Modern ve kullanıcı dostu mobil uygulama

##### 1. Temel Özellikler (4 Kart)

**Gerçek Zamanlı Veri**
- İkon: BarChart3
- Özellikler:
  - Anlık cihaz verileri
  - Geçmiş veri grafikleri
  - Anomali tespiti

**Konum Bazlı Servisler**
- İkon: MapPin
- Özellikler:
  - Harita görünümü
  - Bölgesel analiz
  - Rota optimizasyonu

**Anlık Bildirimler**
- İkon: Bell
- Özellikler:
  - Kritik uyarılar
  - Özelleştirilebilir
  - Multi-channel

**Dashboard Özelleştirme**
- İkon: Layout
- Özellikler:
  - Drag & drop
  - Widget'lar
  - Tema seçenekleri

##### 2. Platform Desteği

**iOS**
- Versiyon: 14.0+
- Özellikler:
  - Native performans
  - Face ID desteği
  - Widget'lar

**Android**
- Versiyon: 8.0+
- Özellikler:
  - Material Design
  - Background sync
  - Bildirim kontrolü

##### 3. Kullanıcı Deneyimi

**Modern Tasarım**
- Material Design prensipleri
- Minimalist ve şık arayüz

**Hızlı Performans**
- Native teknolojiler
- 60fps performans

**Çevrimdışı Çalışma**
- Ağ olmadan temel özellikler
- Otomatik senkronizasyon

**Güvenlik**
- Endüstri standartları
- Şifreleme ve kimlik doğrulama

##### 4. Teknoloji Yığını

**Frontend**
- React Native
- TypeScript
- Redux Toolkit

**Backend**
- REST API
- WebSocket
- Firebase

**Harita & Konum**
- Google Maps SDK
- Geolocation API
- Geocoding

**Güvenlik**
- OAuth 2.0
- JWT
- Biometric Auth

##### 5. Sistem Entegrasyonları
- RESTful API Gateway
- OAuth 2.0 Kimlik Doğrulama
- IoT Platform Entegrasyonu
- Cloud Services
- Real-time Analytics
- Firebase Cloud Messaging

##### 6. Kullanım Senaryoları

**Akıllı Şehir Yönetimi**
- Kullanıcılar: Belediye & Kamu
- Özellikler:
  - Merkezi izleme paneli
  - Anında müdahale
  - Raporlama araçları

**Vatandaş Katılımı**
- Kullanıcılar: Son Kullanıcılar
- Özellikler:
  - Şeffaf bilgi akışı
  - Sorun raporlama
  - Topluluk katılımı

**Saha Ekipleri**
- Kullanıcılar: Teknik Ekipler
- Özellikler:
  - Görev yönetimi
  - Navigasyon desteği
  - Offline çalışma

##### 7. Gelecek Özellikler
- Yapay Zeka Tahminleme (Geliştiriliyor)
- AR ile Görselleştirme (Planlanan)
- Sesli Asistan (Planlanan)
- Çoklu Dil Desteği (Planlanan)

---

### 3. IoT Çözümü Sayfası (`/iot-solution`)

#### Meta Bilgileri
- **Title**: "IoT Çözümü - Bluemergency"
- **Description**: "Akıllı IoT cihazlarımız ve altyapımız hakkında detaylı bilgi"

#### Ana Bölümler

##### Hero Section
- **Badge**: "IoT Teknolojisi"
- **Başlık**: "Akıllı IoT Cihazları ve Altyapı"
- **Alt Başlık**: BLE mesh network ile kesintisiz iletişim

##### 1. Donanım Özellikleri

**Ana İşlemci**
- Nordic nRF52832
- 64 MHz ARM Cortex-M4
- 512 KB Flash

**Kablosuz İletişim**
- BLE 5.0 (2.4 GHz)
- Mesh Network
- LoRaWAN

**Güç Kaynağı**
- 3000 mAh Li-Po
- Solar panel
- 2+ yıl ömür

##### 2. Teknik Avantajlar

**Düşük Güç Tüketimi**
- Sleep Mode: 2 µA
- BLE TX: 5-10 mA

**Mesh Network**
- Menzil: 100+ m
- Mesh Hops: 10+ seviye

**Ölçeklenebilirlik**
- Hücre Kapasitesi: 50K+ cihaz
- Kurulum: ~15 dk

**Güvenlik**
- Şifreleme: AES-256
- Sertifikalar: CE, IP65

##### 3. Kullanım Alanları - Afet Yönetimi

**Acil Durum İletişimi**
- Ağ altyapısı olmadan haberleşme

**Konum Paylaşımı**
- GPS koordinatları mesh ağ üzerinden iletim

**Yardım Talebi**
- SOS sinyalleri ve acil yardım mesajları

**Ekip Koordinasyonu**
- Kurtarma ekipleri arası iletişim

##### 4. Cloud Altyapısı

**Veri Depolama**
- Time-series DB (InfluxDB)
- Hot data: 6 ay
- Cold data: 5 yıl arşiv

**API Gateway**
- RESTful API
- WebSocket desteği
- Rate limiting

**Mikro Servisler**
- Data ingestion
- Processing
- Analytics

##### 5. IoT Platform Entegrasyonu

**Device Management**
- Cihaz yaşam döngüsü yönetimi

**Data Pipeline**
- Gerçek zamanlı veri akışı

**Analytics**
- Real-time analytics motoru

**Security**
- Endüstri güvenlik standartları

##### 6. Maliyet Etkinliği
- Düşük cihaz maliyeti
- Minimal bakım gereksinimleri
- Uzun ömür (10+ yıl)
- Esnek veri tarifeleri
- OTA firmware güncellemeleri
- Edge computing yetenekleri

##### 7. Pilot Uygulama
- 5 farklı lokasyon
- 3 aylık test süreci
- %99.8 uptime başarısı

##### 8. Ölçeklendirme Planı

**Faz 1 (0-6 ay)**
- 50 cihaz
- Tek şehir

**Faz 2 (6-12 ay)**
- 5,000 cihaz
- 5 şehir

**Faz 3 (12-24 ay)**
- 50,000+ cihaz
- Ülke çapında

---

### 4. Stratejik Ortaklıklar Sayfası (`/partnership`)

#### Meta Bilgileri
- **Title**: "Stratejik Ortaklıklar - Bluemergency"
- **Description**: "Telekomünikasyon şirketleri ve kamu kurumları ile stratejik işbirliği fırsatları"

#### Ana Bölümler

##### Hero Section
- **Badge**: "Stratejik Ortaklık"
- **Başlık**: "Birlikte Daha Güçlüyüz"
- **Alt Başlık**: Telekomünikasyon şirketleri ve kamu kurumları ile işbirliği

##### 1. Anahtar Metrikler
- **Yıllık Büyüme**: %15-20 (Sektör ortalaması)
- **ROI Süresi**: 6-12 ay (Ortalama)
- **Cihaz Kapasitesi**: 50K+ (Hücre başına)

##### 2. Ortaklık Avantajları

**Yeni Gelir Kaynakları**
- Global ölçekte B2B iş modeli
- Teknoloji transferi

**Müşteri Kazanımı**
- Ağa olan güven sonrası müşteri artışı

**Teknoloji Liderliği**
- 5G ve IoT alanında sektör öncülüğü

**Afet Yönetimi Paydaşı**
- Afet yönetiminde kritik rol

##### 3. Büyüme Yol Haritası

**Faz 1 (0-6 ay)**
- 10 belediye
- 5,000 cihaz

**Faz 2 (6-12 ay)**
- 50 belediye
- 50,000 cihaz

**Faz 3 (12-24 ay)**
- Pazar lideri
- 5+ ülke

##### 4. Rekabet Avantajları
- End-to-end çözüm (Hardware + Software + Platform)
- Ölçeklenebilir altyapı
- Telekomünikasyon ağları ile tam entegrasyon
- 7/24 teknik destek
- Düşük maliyet, yüksek performans

---

### 5. Akademik Çalışmalar Sayfası (`/academic`)

#### Meta Bilgileri
- **Title**: "Akademik Çalışmalar - Bluemergency"
- **Description**: "Bilimsel araştırmalar, yayınlar ve saha testleri"

#### Ana Bölümler

##### Hero Section
- **Badge**: "Akademik Araştırma"
- **Başlık**: "Bilime Dayalı Yenilikçi Çözümler"
- **Alt Başlık**: Bilimsel araştırma ve geliştirme süreçleri

##### 1. İstatistikler
- **1000+ Yayın Sayısı**
- **10+ Test Senaryoları**
- **11+ Ülke**

##### 2. Bilimsel Yayınlar

**Yayın 1**
- Başlık: "Bluemergency: Mediating Post-disaster Communication Systems using the Internet of Things and Bluetooth Mesh"
- Konferans: IEEE International Conference on Internet of Things
- Durum: Published

**Yayın 2**
- Başlık: "Secure Device-to-Device Communication for Emergency Response"
- Konferans: Technische Universität Darmstadt - Doctoral Dissertation
- Durum: Published

**Yayın 3**
- Başlık: "Communication and Coordination Networks in the 2023 Kahramanmaraş Earthquakes"
- Konferans: Natural Hazards Center Quick Response Research Report Series, Report 365 - University of Colorado Boulder
- Durum: Published

##### 3. Poster Sunumları

**Poster 1**
- Başlık: "BLE Mesh Network Performance Analysis for Disaster Communication"
- Etkinlik: Ulusal IoT Konferansı 2024
- Lokasyon: İstanbul, Türkiye
- Vurgular:
  - Signal strength mapping
  - Battery life optimization
  - Deployment best practices

**Poster 2**
- Başlık: "Smart City Dashboard: User Experience Design"
- Etkinlik: HCI Turkey Conference
- Lokasyon: Ankara, Türkiye
- Vurgular:
  - UX research findings
  - Interface design
  - Usability testing

**Poster 3**
- Başlık: "Improving the BLE Mesh Transmissions with User Collaboration in Smart Spaces Management"
- Etkinlik: 15th ACM/IEEE International Conference on Information Processing in Sensor Networks (IPSN)
- Lokasyon: Vienna, Austria
- Vurgular:
  - BLE Mesh optimization
  - User collaboration
  - Smart space management

##### 4. Saha Testleri

**Kadıköy Pilot**
- Lokasyon: Kadıköy, İstanbul
- Süre: 3 ay (Haz-Ağu 2024)
- Cihaz Sayısı: 25
- Sonuçlar:
  - Uptime: %99.8
  - Power Consumption: 12 mAh/gün
  - Kullanıcı Memnuniyeti: 4.7/5

**Üniversite Kampüsü**
- Lokasyon: [Üniversite Adı]
- Süre: 2 ay (Eyl-Eki 2024)
- Cihaz Sayısı: 15
- Sonuçlar:
  - Veri Noktası: 1M+
  - Öğrenci Projeleri: 3
  - Makale: 2

**Endüstriyel Tesis**
- Lokasyon: [Firma Adı] Fabrika
- Süre: 1 ay (Kas 2024)
- Cihaz Sayısı: 10
- Sonuçlar:
  - Enerji Tasarrufu: %15
  - Maliyet Azalması: %30
  - ROI: 6 ay

##### 5. Önemli Bulgular

**Network Performance**
- Ortalama Latency: 2.3s
- Packet Loss: %0.2
- Coverage: %98

**Power Consumption**
- Sleep Mode: 15 µA
- Transmission Peak: 220 mA
- Battery Life: 2.1 yıl

**Environmental Insights**
- PM2.5 İyileşme: %35
- Sıcaklık-Nem Korelasyon: 0.76
- Gece Hava Kalitesi: %40 artış

**User Behavior**
- Ortalama Kullanım: 8 dk/gün
- Notification Açma: %68
- En Popüler Feature: Real-time Map

##### 6. Gelecek Araştırma Konuları

**0-6 Ay**
- 5G IoT Integration
- Edge AI

**6-12 Ay**
- Multi-modal Sensing
- Swarm Intelligence

**1-2 Yıl**
- Quantum Cryptography
- Digital Twin

---

### 6. Ekip Sayfası (`/team`)

#### Meta Bilgileri
- **Title**: "Ekibimiz - Bluemergency"
- **Description**: "Proje ekibimiz hakkında bilgi"

#### Ekip Üyeleri (6 Kişi)

**Ekip Üyesi 1**
- Rol: Proje Lideri
- Alan: Full-stack geliştirme ve proje yönetimi

**Ekip Üyesi 2**
- Rol: Hardware Mühendisi
- Alan: IoT cihaz tasarımı ve geliştirme

**Ekip Üyesi 3**
- Rol: Backend Developer
- Alan: API ve cloud altyapı geliştirme

**Ekip Üyesi 4**
- Rol: Mobile Developer
- Alan: iOS ve Android uygulama geliştirme

**Ekip Üyesi 5**
- Rol: Data Scientist
- Alan: Veri analizi ve makine öğrenmesi

**Ekip Üyesi 6**
- Rol: UX/UI Designer
- Alan: Kullanıcı arayüzü ve deneyim tasarımı

#### Danışmanlar

**Prof. Dr. [İsim]**
- Kurum: [Üniversite Adı]
- Alan: IoT ve Akıllı Sistemler

**Doç. Dr. [İsim]**
- Kurum: [Üniversite Adı]
- Alan: Çevre Mühendisliği

**[İsim]**
- Rol: Senior IoT Solutions Architect

---

### 7. İletişim Sayfası (`/contact`)

#### Meta Bilgileri
- **Title**: İletişim formu ve bilgileri

#### İletişim Bilgileri

**E-posta**
- info@bluemergency.com

**Telefon**
- +90 (XXX) XXX XX XX

**Adres**
- [Adres Bilgisi]
- İstanbul, Türkiye

#### İletişim Formu
Form alanları:
- Ad Soyad (zorunlu)
- E-posta (zorunlu)
- Konu (zorunlu)
- Mesaj (zorunlu, textarea)

**Form Özellikleri:**
- Client-side validation
- API endpoint: `/api/contact`
- POST metodu ile JSON gönderimi
- Success/Error durumları
- Loading state
- Form reset başarılı gönderim sonrası

**API Entegrasyonu:**
- Nodemailer kullanarak e-posta gönderimi
- Async/await ile hata yönetimi

---

### 8. Demo Sayfası (`/demo`)

#### Meta Bilgileri
- **Title**: "Demo - Bluemergency"
- **Description**: "Projemizin canlı demosunu izleyin"

#### Demo Bölümleri

##### 1. Video Demo
- Mobil uygulama ve IoT cihazların çalışma videosu
- Placeholder: YouTube, Vimeo veya lokal video

##### 2. Sistem Mimarisi
- Sistem yapısı ve bileşenleri diyagramı

##### 3. Canlı Dashboard
- Gerçek zamanlı veri akışı
- Görselleştirme
- Placeholder: Grafana, custom dashboard veya iframe

##### 4. Ekran Görüntüleri Galerisi
- Mobil App - Ana Sayfa
- Mobil App - Harita
- Mobil App - Veriler
- Mobil App - Ayarlar

---

### 9. Vodafone Ortaklığı Sayfası (`/vodafone-partnership`)

#### Meta Bilgileri
- **Title**: "Vodafone Ortaklığı - Vodafone Bi'düşünsene"
- **Description**: "Vodafone ile stratejik uyum ve sağlayacağımız faydalar"

#### Ana Bölümler

##### Hero Section
- **Badge**: "Stratejik Ortaklık"
- **Başlık**: "Vodafone ile Geleceği Birlikte İnşa Edelim"
- **Alt Başlık**: Yenilikçi IoT çözümleriyle Vodafone'un teknoloji liderliği

##### 1. Vodafone'a Sağlanacak Değer

**Yeni Gelir Kaynakları**
- Global B2B iş modeli
- Teknoloji transferi

**Müşteri Kazanımı**
- Ağa güven sonrası müşteri artışı

**Teknoloji Liderliği**
- 5G ve IoT öncülüğü

**Afet Yönetimi Paydaşı**
- Kritik rol oynama

##### 2. Metrikler
- **Hedef Pazar**: $2.5M (Türkiye 2025)
- **Yıllık Büyüme**: %15-20
- **ROI Süresi**: 6-12 ay
- **Cihaz Kapasitesi**: 50K+

##### 3. Vodafone Altyapısı Entegrasyonu

**Vodafone NB-IoT Ağı**
- Nationwide coverage
- Güvenli ve güvenilir bağlantı

**Vodafone IoT Platform**
- Device management
- Connectivity
- Application enablement

**Vodafone Cloud**
- Veri depolama
- Computing resources
- Disaster recovery

##### 4. Rekabet Avantajları
- End-to-end çözüm
- Ölçeklenebilir altyapı
- Vodafone ağı ile tam entegrasyon
- 7/24 teknik destek
- Düşük maliyet, yüksek performans

##### 5. İşbirliği Modeli

**Teknoloji Transferi**
- Vodafone AR-GE ekipleri ile ortak çalışma
- Bilgi paylaşımı ve eğitim
- Co-innovation programları

**Yatırım & Finansman**
- Pilot projeler için Vodafone desteği
- Marketing ve sales kaynakları
- Global sales network'e erişim

**Fikri Mülkiyet**
- Ortak patent hakları
- Lisanslama modelleri
- Adil kazanç paylaşımı

---

## Bileşenler

### Layout Bileşenleri

#### 1. Navbar (`components/navbar.tsx`)
**Özellikler:**
- Sticky pozisyon (sayfanın üstünde sabit)
- Responsive tasarım
- Mobil hamburger menü
- Glassmorphism efekti (backdrop-blur)
- Client component ("use client")

**Navigasyon Öğeleri:**
- Logo/Brand name (Bluemergency)
- 8 ana menü linki
- Mobil ve desktop görünümü

**Teknik Detaylar:**
- useState ile mobil menü kontrolü
- Lucide React iconları (Menu, X)
- Tailwind CSS ile stil

#### 2. Footer (`components/footer.tsx`)
**Özellikler:**
- 3 kolonlu layout
- Brand bilgisi
- Navigasyon linkleri (kategorize)
- Copyright bilgisi

**Footer Kategorileri:**
1. Çözümler (4 link)
2. Şirket (3 link)
3. Yasal (3 link)

**Stil:**
- Koyu arka plan (brand-dark)
- Beyaz/gri tonlarda yazılar
- Hover efektleri

#### 3. Layout (`app/layout.tsx`)
**Root Layout Özellikleri:**
- HTML lang="tr"
- Inter font ailesi
- Min-height ekran boyutu
- Flexbox yapı (header-main-footer)
- SEO meta tags

**Metadata:**
- Title
- Description
- Keywords
- Authors
- Open Graph tags

### UI Bileşenleri (`components/ui/`)

#### 1. Button (`button.tsx`)
**Varyantlar:**
- default (primary)
- destructive
- outline
- secondary
- ghost
- link

**Boyutlar:**
- default
- sm (small)
- lg (large)
- icon

**Özellikler:**
- Radix UI Slot kullanımı
- class-variance-authority ile varyasyon
- Accessible
- Customizable

#### 2. Card (`card.tsx`)
**Bileşenler:**
- Card (ana container)
- CardHeader
- CardFooter
- CardTitle
- CardDescription
- CardContent

**Özellikler:**
- Flexible layout
- Semantic HTML
- Tailwind styling
- Reusable

#### 3. Input (`input.tsx`)
**Özellikler:**
- React forwardRef
- Tüm HTML input props
- Consistent styling
- Focus states
- Disabled states

#### 4. Textarea (`textarea.tsx`)
**Özellikler:**
- React forwardRef
- Resizable
- Focus states
- Min-height
- Consistent styling

#### 5. Accordion (`accordion.tsx`)
**Özellikler:**
- Radix UI Accordion
- Animated (chevron rotation)
- Accessible (ARIA)
- Customizable triggers
- Smooth transitions

---

## Tasarım ve Stil

### Renk Sistemi

#### Brand Colors
```css
--brand-primary: #E60000 (Vodafone Kırmızısı)
--brand-dark: #333333
--brand-gray: #666666
--brand-light: #F5F5F5
```

#### Semantic Colors (HSL değerleri)
```css
--background: 0 0% 100%
--foreground: 0 0% 20%
--primary: 0 100% 45%
--primary-foreground: 0 0% 100%
--secondary: 0 0% 96%
--destructive: 0 84.2% 60.2%
--border: 0 0% 90%
--input: 0 0% 90%
--ring: 0 100% 45%
```

### Tipografi
- **Font Ailesi**: Inter (Google Fonts)
- **Font Yükleme**: next/font/google ile optimize
- **Ağırlıklar**: Otomatik (Inter variable font)

### Spacing & Sizing
- **Border Radius**: 0.5rem (8px)
  - lg: var(--radius)
  - md: calc(var(--radius) - 2px)
  - sm: calc(var(--radius) - 4px)

### Responsive Breakpoints
Tailwind CSS varsayılan breakpoints:
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- 2xl: 1536px

### Animasyonlar
- **Plugin**: tailwindcss-animate
- **Kullanım Alanları**:
  - Hover transitions
  - Accordion expand/collapse
  - Button interactions
  - Card hover effects
  - Mobile menu slide

### Tasarım Sisteminin Temel Özellikleri

#### 1. Gradient Backgrounds
```css
/* Hero sections */
bg-gradient-to-br from-brand-primary via-red-600 to-red-800

/* CTA sections */
bg-gradient-to-r from-brand-primary to-red-700

/* Dark sections */
bg-gradient-to-br from-gray-900 to-gray-800
```

#### 2. Grid Pattern Overlay
```css
bg-grid-white/10 bg-[size:20px_20px]
```

#### 3. Glassmorphism
```css
backdrop-blur-sm
bg-white/20
border border-white/10
```

#### 4. Card Styles
- Border: 2px
- Hover: border-brand-primary
- Shadow: hover:shadow-xl
- Transition: transition-all

#### 5. Icon Styling
- Size: h-5 w-5 (normal), h-6 w-6 (medium), h-8 w-8 (large)
- Colors: text-brand-primary, text-white
- Background circles: rounded-full, rounded-lg

---

## Özellikler ve Fonksiyonalite

### 1. Routing ve Navigation
- **Framework**: Next.js App Router
- **File-based routing**: /app dizini
- **Dynamic imports**: Client/Server components
- **Metadata**: Per-page SEO optimization

### 2. İletişim Formu
**Frontend (`/contact` sayfası):**
- React useState ile form state yönetimi
- Controlled components
- Client-side validation (required fields)
- Loading states
- Success/Error feedback
- Form reset

**Backend (`/api/contact`):**
- Next.js API Route
- POST endpoint
- Nodemailer entegrasyonu
- JSON response
- Error handling

### 3. SEO Optimizasyonu
**Her sayfa için:**
- Unique title
- Meta description
- Keywords (bazı sayfalarda)
- Open Graph tags
- Semantic HTML

**Layout seviyesinde:**
- Global metadata
- Structured data potential
- Language attribute (lang="tr")

### 4. Performance Optimizasyonları
- **Next.js 14 özellikleri**:
  - Automatic code splitting
  - Image optimization
  - Font optimization (next/font)
  - Server Components (varsayılan)
  - Client Components (gerektiğinde)

### 5. Responsive Tasarım
**Tüm sayfalarda:**
- Mobile-first approach
- Fluid typography (text-4xl sm:text-6xl)
- Responsive grids (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Flexible containers (max-w-7xl mx-auto)
- Mobile navigation menu

### 6. Erişilebilirlik (Accessibility)
- **Semantic HTML**: header, nav, main, footer, section
- **ARIA attributes**: aria-label, aria-labelledby
- **Keyboard navigation**: Tab order
- **Focus states**: ring utilities
- **Alt text**: Image alternatives (plan)
- **Screen reader support**: sr-only class

### 7. Animasyonlar ve Transitions
**Kullanım alanları:**
- Button hover: hover:bg-gray-100
- Card hover: hover:shadow-xl hover:border-brand-primary
- Icon scale: group-hover:scale-110
- Smooth transitions: transition-all, transition-colors
- Mobile menu: Slide in/out

### 8. İçerik Yönetimi
**Mevcut Durum:**
- Hardcoded content (TypeScript/TSX)
- JSON-like data structures (arrays of objects)

**MDX Desteği:**
- Kurulu ama kullanımda değil
- Potansiyel blog/dokümantasyon için

### 9. Icon Sistemi
- **Kütüphane**: Lucide React
- **Kullanım**: Import as needed
- **Consistency**: Tüm sayfalarda aynı stil
- **Örnekler**: Smartphone, Cpu, Users, Mail, etc.

### 10. Form Handling
**İletişim formu özellikleri:**
- Async submit
- Loading indicator
- Error boundaries
- Success messages
- Field validation
- Email validation

---

## Geliştirme Komutları

### Development
```bash
npm run dev
# Starts development server at http://localhost:3000
```

### Production Build
```bash
npm run build
# Creates optimized production build
```

### Production Start
```bash
npm start
# Starts production server
```

### Code Quality
```bash
npm run lint
# Runs ESLint

npm run format
# Formats code with Prettier

npm run format:check
# Checks code formatting
```

### Testing
```bash
npm run test
# Runs Playwright tests

npm run test:ui
# Opens Playwright UI mode
```

---

## Dosya Yapısı

```
presentsite/
├── app/
│   ├── academic/
│   │   └── page.tsx
│   ├── api/
│   │   └── contact/
│   │       └── route.ts (varsayımsal)
│   ├── contact/
│   │   └── page.tsx
│   ├── demo/
│   │   └── page.tsx
│   ├── faq/
│   │   (boş - gelecek içerik)
│   ├── iot-solution/
│   │   └── page.tsx
│   ├── mobile-solution/
│   │   └── page.tsx
│   ├── partnership/
│   │   └── page.tsx
│   ├── privacy/
│   │   (boş - gelecek içerik)
│   ├── team/
│   │   └── page.tsx
│   ├── terms/
│   │   (boş - gelecek içerik)
│   ├── vodafone-partnership/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx (Ana sayfa)
├── components/
│   ├── ui/
│   │   ├── accordion.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── textarea.tsx
│   ├── footer.tsx
│   └── navbar.tsx
├── lib/
│   └── utils.ts
├── tests/
│   (test dosyaları)
├── .eslintrc.json
├── .prettierrc
├── mdx-components.tsx
├── next-env.d.ts
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

---

## Gelecek Geliştirmeler

### İçerik
- FAQ sayfası içeriği
- Gizlilik Politikası
- Kullanım Koşulları
- Blog/Haberler bölümü
- Case studies
- Testimonials

### Özellikler
- Çoklu dil desteği (i18n)
- Dark mode
- Interaktif demo/playground
- Canlı chat desteği
- Newsletter kayıt
- Sosyal medya entegrasyonu

### Teknik
- Database entegrasyonu
- CMS entegrasyonu (Strapi, Contentful)
- Analytics (Google Analytics, Plausible)
- A/B testing
- Progressive Web App (PWA)
- Gelişmiş SEO (Schema.org)

### Görsel
- Gerçek görseller ve videolar
- İnfografikler
- 3D visualizations
- Animasyonlu açıklamalar
- Interaktif haritalar

---

## Teknik Notlar

### Next.js 14 Özellikleri
- **App Router**: Yeni routing sistemi
- **Server Components**: Varsayılan rendering
- **Metadata API**: SEO optimizasyonu
- **Font Optimization**: Otomatik font yükleme
- **TypeScript**: Full type safety

### Tailwind CSS Yapılandırması
- **JIT Mode**: Just-in-Time compilation
- **Custom colors**: Brand colors tanımlı
- **Plugins**: tailwindcss-animate
- **Content paths**: All TSX/JSX files

### TypeScript Yapılandırması
- **Strict mode**: Enabled
- **Path aliases**: @ for root
- **JSX**: react-jsx
- **Module**: ESNext

### Build Optimization
- **Static Generation**: Mümkün olan sayfalar için
- **Image Optimization**: Next.js Image component (kullanıma hazır)
- **Code Splitting**: Automatic
- **Tree Shaking**: Production builds

---

## İletişim ve Destek

### Proje İletişim
- **E-posta**: info@bluemergency.com
- **Website**: [Site URL]

### Geliştirici Notları
- Kod style: Prettier yapılandırması
- Commit convention: Varsayılan
- Branch strategy: (belirtilmemiş)
- Code review: (süreç belirtilmemiş)

---

## Lisans ve Haklar
- **Telif Hakkı**: © 2024 Bluemergency Project
- **Tüm hakları saklıdır**

---

## Son Güncelleme
**Dokümantasyon Tarihi**: 30 Ekim 2024

**Versiyon**: 1.0.0

---

## Notlar
Bu dokümantasyon, Bluemergency web sitesinin mevcut durumunu kapsamlı bir şekilde belgeler. Proje geliştikçe bu dokümantasyon güncellenmelidir.

### Placeholder İçerikler
Aşağıdaki alanlar gerçek içerik ile doldurulmalıdır:
- Ekip üyesi isimleri ve fotoğrafları
- Danışman bilgileri
- İletişim telefon numarası ve adresi
- Demo videoları ve görseller
- Test lokasyonları (üniversite, firma isimleri)
- Gerçek metrikler ve istatistikler

---

**Dokümantasyon Sonu**

