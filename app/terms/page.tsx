import { Metadata } from "next";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Scale, AlertTriangle, CheckCircle2, XCircle, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Kullanım Koşulları - KrizNet",
  description: "KrizNet kullanım koşulları ve şartları",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Kullanım Koşulları
          </h1>
          <p className="text-lg text-gray-400">
            Son güncelleme: {new Date().toLocaleDateString("tr-TR", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>

        <div className="space-y-6">
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Scale className="h-5 w-5 text-brand-primary" />
                Genel Şartlar
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                KrizNet uygulamasını kullanarak, aşağıdaki kullanım koşullarını kabul etmiş olursunuz. 
                Lütfen bu koşulları dikkatle okuyunuz.
              </p>
              <p>
                Bu uygulama afet durumlarında iletişim sağlamak amacıyla geliştirilmiştir ve 
                yalnızca bu amaçla kullanılmalıdır.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-brand-primary" />
                Kullanıcı Yükümlülükleri
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>Kullanıcılar aşağıdaki yükümlülüklere uymalıdır:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Uygulamayı yasalara uygun şekilde kullanmak</li>
                <li>Diğer kullanıcılara saygı göstermek</li>
                <li>Yanlış veya yanıltıcı bilgi paylaşmamak</li>
                <li>Sistem güvenliğini tehlikeye atmamak</li>
                <li>Telif haklarına saygı göstermek</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <XCircle className="h-5 w-5 text-brand-primary" />
                Yasak Kullanımlar
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>Aşağıdaki faaliyetler kesinlikle yasaktır:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Zararlı yazılım yayma veya sistem güvenliğini ihlal etme</li>
                <li>Spam veya istenmeyen mesaj gönderme</li>
                <li>Başkalarının haklarını ihlal etme</li>
                <li>Yasadışı faaliyetler için uygulamayı kullanma</li>
                <li>Ağ performansını bozmaya yönelik eylemler</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-brand-primary" />
                Sorumluluk Reddi
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                KrizNet, afet durumlarında iletişim sağlamak için geliştirilmiştir ancak 
                aşağıdaki durumlarda sorumluluk kabul etmez:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Altyapı kesintileri veya teknik arızalar</li>
                <li>Kullanıcı hataları veya yanlış kullanım</li>
                <li>Üçüncü taraf servislerindeki sorunlar</li>
                <li>İletişim başarısızlıklarından kaynaklanan hasarlar</li>
              </ul>
              <p className="mt-4">
                Uygulama "olduğu gibi" sunulmaktadır ve hiçbir garantisi yoktur.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <FileText className="h-5 w-5 text-brand-primary" />
                Fikri Mülkiyet
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                KrizNet uygulaması ve tüm içeriği telif hakkı ile korunmaktadır. 
                Uygulamanın içeriği, tasarımı ve kodları izinsiz kopyalanamaz, 
                dağıtılamaz veya değiştirilemez.
              </p>
              <p>
                Bu uygulama açık kaynak lisansı altında dağıtılmaktadır. Lisans detayları 
                için GitHub deposuna bakabilirsiniz.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Scale className="h-5 w-5 text-brand-primary" />
                Değişiklikler ve Güncellemeler
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                Bu kullanım koşulları zaman zaman güncellenebilir. Önemli değişiklikler 
                kullanıcılara bildirilecektir. Koşulları kabul etmeye devam etmek için 
                bu sayfayı düzenli olarak kontrol etmeniz önerilir.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
