import { Metadata } from "next";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Shield, Lock, Eye, FileText, Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Gizlilik Politikası - KrizNet",
  description: "KrizNet gizlilik politikası ve veri koruma bilgileri",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Gizlilik Politikası
          </h1>
          <p className="text-lg text-gray-400">
            Son güncelleme: {new Date().toLocaleDateString("tr-TR", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>

        <div className="space-y-6">
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Shield className="h-5 w-5 text-brand-primary" />
                Veri Toplama
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                KrizNet, afet durumlarında iletişim sağlamak için minimal düzeyde veri toplar. 
                Uygulama kullanımı sırasında toplanan veriler sadece mesajlaşma ve konum paylaşımı 
                için kullanılır.
              </p>
              <p>
                Toplanan veriler:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Anonim cihaz kimlikleri (BLE mesh ağı için)</li>
                <li>Mesaj içerikleri (şifreli olarak)</li>
                <li>Konum bilgileri (isteğe bağlı)</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Lock className="h-5 w-5 text-brand-primary" />
                Veri Güvenliği
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                Tüm veriler end-to-end şifreleme ile korunur. BLE mesh ağı üzerinden iletilen 
                mesajlar sadece yetkili cihazlar tarafından okunabilir.
              </p>
              <p>
                Verileriniz:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Şifreli olarak saklanır</li>
                <li>Üçüncü şahıslarla paylaşılmaz</li>
                <li>Sadece acil durumlarda kullanılır</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Eye className="h-5 w-5 text-brand-primary" />
                Veri Kullanımı
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                Toplanan veriler sadece aşağıdaki amaçlar için kullanılır:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Afet durumlarında iletişim sağlamak</li>
                <li>Mesh ağı yönetimi ve optimizasyonu</li>
                <li>Servis geliştirme ve iyileştirme</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <FileText className="h-5 w-5 text-brand-primary" />
                Haklarınız
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                Verilerinizle ilgili aşağıdaki haklara sahipsiniz:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Verilerinize erişim talep etme</li>
                <li>Verilerinizin silinmesini talep etme</li>
                <li>Veri kullanımına itiraz etme</li>
                <li>Veri taşınabilirliği talep etme</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/60 border border-white/10 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Mail className="h-5 w-5 text-brand-primary" />
                İletişim
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5 text-gray-200">
              <p>
                Gizlilik politikamızla ilgili her türlü soru veya talebiniz için bizimle iletişime geçmekten çekinmeyin.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/85">
                  <div className="mb-2 flex items-center gap-2 text-white">
                    <Mail className="h-4 w-4 text-brand-primary" />
                    <span className="font-semibold uppercase tracking-wide text-xs">
                      E-Posta
                    </span>
                  </div>
                  <div className="space-y-1">
                    <p>1tariktek@gmail.com</p>
                    <p>erenayd58@gmail.com</p>
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/85">
                  <div className="mb-2 flex items-center gap-2 text-white">
                    <Phone className="h-4 w-4 text-brand-primary" />
                    <span className="font-semibold uppercase tracking-wide text-xs">
                      Telefon
                    </span>
                  </div>
                  <p>+90 506 121 77 71</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 sm:col-span-2 text-sm text-white/85">
                  <div className="mb-2 flex items-center gap-2 text-white">
                    <MapPin className="h-4 w-4 text-brand-primary" />
                    <span className="font-semibold uppercase tracking-wide text-xs">
                      Adres
                    </span>
                  </div>
                  <div className="space-y-1">
                    <p>Yıldız Teknik Üniversitesi</p>
                    <p>Davutpaşa Kampüsü</p>
                    <p>İstanbul, Türkiye</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
