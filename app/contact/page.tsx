"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container mx-auto px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4 drop-shadow-sm">
            İletişime Geçin
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Sorularınız için bizimle iletişime geçmekten çekinmeyin
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border border-white/15 bg-white/10 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Mail className="h-5 w-5 text-brand-primary" />
                  E-posta
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1 text-sm text-white/80">
                  <p>1tariktek@gmail.com</p>
                  <p>erenayd58@gmail.com</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-white/15 bg-white/10 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Phone className="h-5 w-5 text-brand-primary" />
                  Telefon
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">+90 506 121 77 71</p>
              </CardContent>
            </Card>

            <Card className="border border-white/15 bg-white/10 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <MapPin className="h-5 w-5 text-brand-primary" />
                  Adres
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm leading-relaxed text-white/80">
                  <p>Yıldız Teknik Üniversitesi</p>
                  <p>Davutpaşa Kampüsü</p>
                  <p>İstanbul, Türkiye</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border border-white/15 bg-white/10 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-white">Mesaj Gönderin</CardTitle>
                <CardDescription className="text-white/70">
                  Formu doldurun, en kısa sürede size dönüş yapalım
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-white/80 mb-1"
                    >
                      Ad Soyad
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-white/80 mb-1"
                    >
                      E-posta
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-white/80 mb-1"
                    >
                      Konu
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Mesajınızın konusu"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-white/80 mb-1"
                    >
                      Mesaj
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Mesajınızı buraya yazın..."
                      rows={6}
                    />
                  </div>

                  {submitStatus === "success" && (
                    <div className="rounded-xl border border-emerald-300/60 bg-emerald-500/10 p-4 text-sm text-emerald-100">
                      Mesajınız başarıyla gönderildi! KrizNet ekibi olarak en kısa sürede size dönüş yapacağız.
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="rounded-xl border border-rose-300/60 bg-rose-500/10 p-4 text-sm text-rose-100">
                      Bir hata oluştu. Lütfen daha sonra tekrar deneyin.
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full text-base font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Gönderiliyor..." : "Gönder"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

