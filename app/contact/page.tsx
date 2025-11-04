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
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

type FormField = "name" | "email" | "subject" | "message";
type FormErrors = Partial<Record<FormField, string>>;

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
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = (): boolean => {
    const nextErrors: FormErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Lütfen ad soyad bilgisi girin.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Lütfen e-posta adresinizi girin.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim().toLowerCase())
    ) {
      nextErrors.email = "Geçerli bir e-posta adresi girin.";
    }

    if (!formData.subject.trim()) {
      nextErrors.subject = "Lütfen mesajınız için konu başlığı yazın.";
    }

    if (!formData.message.trim()) {
      nextErrors.message = "Lütfen mesajınızı yazın.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus(null);
    setSubmitError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({});
      } else {
        if (response.status === 400 && Array.isArray(result.fields)) {
          const fieldErrors: FormErrors = {};
          result.fields.forEach((field: FormField) => {
            fieldErrors[field] = "Lütfen bu alanı doldurun.";
          });
          setErrors((prev) => ({ ...prev, ...fieldErrors }));
        }
        setSubmitStatus("error");
        setSubmitError(
          typeof result.error === "string"
            ? result.error
            : "Mesaj gönderilirken bir hata oluştu."
        );
      }
    } catch (error) {
      setSubmitStatus("error");
      setSubmitError("Mesaj gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const fieldName = name as FormField;

    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));

    setErrors((prev) => {
      if (!prev[fieldName]) {
        return prev;
      }

      const next = { ...prev };

      if (value.trim()) {
        delete next[fieldName];
      } else {
        next[fieldName] = prev[fieldName];
      }

      return next;
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
                  <Linkedin className="h-5 w-5 text-brand-primary" />
                  LinkedIn
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1 text-sm text-white/80">
                  <a
                    href="https://www.linkedin.com/in/erenayd58/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-white hover:underline"
                  >
                    linkedin.com/in/erenayd58
                  </a>
                  <a
                    href="https://www.linkedin.com/in/tariktek/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-white hover:underline"
                  >
                    linkedin.com/in/tariktek
                  </a>
                </div>
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
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
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
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "contact-name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="contact-name-error" className="mt-1 text-sm text-rose-200">
                        {errors.name}
                      </p>
                    )}
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
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? "contact-email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="contact-email-error" className="mt-1 text-sm text-rose-200">
                        {errors.email}
                      </p>
                    )}
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
                      aria-invalid={Boolean(errors.subject)}
                      aria-describedby={errors.subject ? "contact-subject-error" : undefined}
                    />
                    {errors.subject && (
                      <p id="contact-subject-error" className="mt-1 text-sm text-rose-200">
                        {errors.subject}
                      </p>
                    )}
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
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? "contact-message-error" : undefined}
                    />
                    {errors.message && (
                      <p id="contact-message-error" className="mt-1 text-sm text-rose-200">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {submitStatus === "success" && (
                    <div className="rounded-xl border border-emerald-300/60 bg-emerald-500/10 p-4 text-sm text-emerald-100">
                      Mesajınız başarıyla gönderildi! KrizNet ekibi olarak en kısa sürede size dönüş yapacağız.
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="rounded-xl border border-rose-300/60 bg-rose-500/10 p-4 text-sm text-rose-100">
                      {submitError ?? "Bir hata oluştu. Lütfen daha sonra tekrar deneyin."}
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

