import { Metadata } from "next";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, MessageCircle, Smartphone, Network, Shield, Battery } from "lucide-react";

export const metadata: Metadata = {
  title: "Sık Sorulan Sorular - KrizNet",
  description: "KrizNet hakkında sık sorulan sorular ve cevaplar",
};

const faqCategories = [
  {
    title: "Genel Sorular",
    icon: HelpCircle,
    questions: [
      {
        question: "KrizNet nedir?",
        answer: "KrizNet, afet durumlarında BLE (Bluetooth Low Energy) mesh teknolojisi kullanarak kesintisiz iletişim sağlayan yenilikçi bir çözümdür. İnternet veya telefon ağı olmasa bile kullanıcıların birbirleriyle iletişim kurmasına olanak tanır."
      },
      {
        question: "KrizNet nasıl çalışır?",
        answer: "Uygulama, cihazlar arasında BLE mesh ağı oluşturur. Mesajlar bu ağ üzerinden diğer kullanıcılara iletilir. Her cihaz hem mesaj gönderebilir hem de ağdaki diğer cihazlara mesaj iletebilir, böylece geniş bir iletişim ağı oluşturulur."
      },
      {
        question: "Hangi cihazlarda çalışır?",
        answer: "KrizNet Android ve iOS işletim sistemli akıllı telefonlarda çalışır. Cihazınızın Bluetooth Low Energy desteği olması gerekir. Modern akıllı telefonların çoğu bu özelliği desteklemektedir."
      }
    ]
  },
  {
    title: "Kullanım",
    icon: MessageCircle,
    questions: [
      {
        question: "Uygulamayı nasıl kullanırım?",
        answer: "Uygulamayı indirdikten sonra açın ve izinleri verin. Afet durumunda, uygulama otomatik olarak yakındaki diğer KrizNet kullanıcılarıyla mesh ağı oluşturur. Mesaj göndermek için iletişim ekranını kullanın."
      },
      {
        question: "Mesajlarım ne kadar uzağa gidebilir?",
        answer: "Mesajlar, BLE mesh ağı üzerinden iletildiği için ağdaki her cihaz bir 'düğüm' görevi görür. Böylece mesajlar birkaç yüz metreden kilometrelerce uzaklığa kadar iletilebilir, ağdaki cihaz sayısına bağlı olarak."
      },
      {
        question: "Bateri tüketimi nasıldır?",
        answer: "BLE teknolojisi düşük güç tüketimi için tasarlanmıştır. Ancak sürekli mesh ağında olmak bazı batarya kullanımına neden olur. Acil durumlarda güç tasarrufu modu mevcuttur."
      }
    ]
  },
  {
    title: "Teknik",
    icon: Smartphone,
    questions: [
      {
        question: "İnternet bağlantısı gerekli mi?",
        answer: "Hayır, KrizNet tamamen offline çalışır. İnternet bağlantısı olmadan BLE mesh ağı üzerinden iletişim sağlar."
      },
      {
        question: "Mesajlarım güvenli mi?",
        answer: "Evet, tüm mesajlar end-to-end şifreleme ile korunur. Mesajlarınız sadece alıcı tarafından okunabilir."
      },
      {
        question: "Mesh ağı ne kadar geniş olabilir?",
        answer: "Mesh ağının boyutu, bölgedeki aktif kullanıcı sayısına bağlıdır. Teorik olarak yüzlerce cihaz bir ağa bağlanabilir. Ağ otomatik olarak genişler ve optimize edilir."
      }
    ]
  },
  {
    title: "Güvenlik ve Gizlilik",
    icon: Shield,
    questions: [
      {
        question: "Verilerim nasıl korunuyor?",
        answer: "KrizNet, minimal veri toplama prensibiyle çalışır. Toplanan veriler şifrelenmiş olarak saklanır ve sadece acil durumlarda iletişim için kullanılır. Detaylar için Gizlilik Politikamızı inceleyebilirsiniz."
      },
      {
        question: "Konum bilgim paylaşılıyor mu?",
        answer: "Konum paylaşımı tamamen isteğe bağlıdır. İsterseniz konumunuzu paylaşabilirsiniz, ancak zorunlu değildir. Paylaşılan konum bilgileri de şifrelenir."
      }
    ]
  }
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Sık Sorulan Sorular
          </h1>
          <p className="text-lg text-gray-400">
            KrizNet hakkında merak ettikleriniz
          </p>
        </div>

        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <category.icon className="h-5 w-5 text-brand-primary" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem 
                      key={faqIndex} 
                      value={`item-${categoryIndex}-${faqIndex}`}
                      className="border-gray-700"
                    >
                      <AccordionTrigger className="text-left text-gray-300 hover:text-white">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-400">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8 bg-gray-800/50 border-gray-700">
          <CardContent className="pt-6">
            <p className="text-center text-gray-400">
              Başka sorularınız mı var?{" "}
              <a 
                href="/contact" 
                className="text-brand-primary hover:text-red-600 transition-colors underline"
              >
                İletişim sayfamızdan
              </a>{" "}
              bize ulaşabilirsiniz.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
