"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Smartphone, Cpu, Handshake, GraduationCap, ArrowRight, Zap, Shield, Network } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Full gradient background from red to transparent */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-primary via-red-600 to-transparent" />
        {/* Smooth fade to white at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent via-white/20 via-30% via-white/60 via-60% to-white pointer-events-none" />
        {/* Animated Background */}
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:40px_40px]" />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{
            y: [0, -40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            className="mx-auto max-w-4xl text-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            {/* Badge */}
            <motion.div 
              variants={fadeInUp}
              className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm border border-white/20"
            >
              <Zap className="h-4 w-4 text-white" />
              <span className="text-sm font-semibold text-white">
                Yenilikçi Afet Yönetimi Teknolojisi
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight"
            >
              Yapay Zekâ Destekli
              <span className="block mt-2 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                Afet Haberleşme Ağı
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              variants={fadeInUp}
              className="mt-6 text-lg sm:text-xl leading-8 text-white/90 max-w-3xl mx-auto"
            >
              KrizNet, altyapıdan bağımsız çalışan akıllı BLE Mesh ağı sayesinde 
              kriz anlarında bağlantıyı korur. Teknoloji, güvenlik ve insan hayatı için tasarlandı.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={fadeInUp}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button asChild size="lg" className="bg-white text-brand-primary hover:bg-white/90 font-semibold px-8 py-6 text-base group">
                <Link href="/demo" className="flex items-center gap-2">
                  Demo İzle
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-base backdrop-blur-sm">
                <Link href="/contact">
                  İletişime Geçin
                </Link>
              </Button>
            </motion.div>

            {/* Key Features */}
            <motion.div 
              variants={fadeInUp}
              className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
            >
              <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all">
                <Shield className="h-8 w-8 text-white mb-2" />
                <h3 className="text-white font-semibold">Güvenli İletişim</h3>
                <p className="text-white/80 text-sm">Şifreli veri aktarımı</p>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all">
                <Network className="h-8 w-8 text-white mb-2" />
                <h3 className="text-white font-semibold">Mesh Ağ</h3>
                <p className="text-white/80 text-sm">Kesintisiz bağlantı</p>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all">
                <Zap className="h-8 w-8 text-white mb-2" />
                <h3 className="text-white font-semibold">Düşük Enerji</h3>
                <p className="text-white/80 text-sm">Uzun batarya ömrü</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
              Çözümlerimiz
            </h2>
            <p className="text-lg text-gray-600">
              Afet yönetimi için geliştirdiğimiz yenilikçi teknolojiler
            </p>
          </motion.div>

          <motion.div 
            className="mx-auto mt-16 grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-2"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Mobil Çözüm */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <Card className="h-full border-2 hover:border-brand-primary transition-all hover:shadow-2xl group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardHeader>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-brand-primary to-red-600 shadow-lg group-hover:scale-110 transition-transform">
                    <Smartphone className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Mobil Çözüm</CardTitle>
                  <CardDescription className="text-base">
                    Kullanıcı dostu mobil uygulamamız
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Modern ve kullanıcı dostu arayüzü ile mobil uygulamamız,
                    gerçek zamanlı veri görüntüleme, konum tabanlı servisler ve
                    anlık bildirimler sunmaktadır. iOS ve Android platformlarında
                    sorunsuz çalışır.
                  </p>
                  <Button asChild variant="link" className="px-0 group-hover:gap-2 transition-all">
                    <Link href="/mobile-solution" className="flex items-center gap-1">
                      Detaylı Bilgi 
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* IoT Çözümü */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <Card className="h-full border-2 hover:border-brand-primary transition-all hover:shadow-2xl group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardHeader>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-brand-primary to-red-600 shadow-lg group-hover:scale-110 transition-transform">
                    <Cpu className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl">IoT Çözümü</CardTitle>
                  <CardDescription className="text-base">
                    Akıllı IoT cihazlarımız ve altyapımız
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Düşük güç tüketimi, BLE mesh teknolojisi ile çalışan akıllı
                    cihazlarımız. Afet anında kesintisiz iletişim sağlamak için
                    özel olarak tasarlandı.
                  </p>
                  <Button asChild variant="link" className="px-0 group-hover:gap-2 transition-all">
                    <Link href="/iot-solution" className="flex items-center gap-1">
                      Detaylı Bilgi
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Stratejik Ortaklıklar */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <Card className="h-full border-2 hover:border-brand-primary transition-all hover:shadow-2xl group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardHeader>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-brand-primary to-red-600 shadow-lg group-hover:scale-110 transition-transform">
                    <Handshake className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Stratejik Ortaklıklar</CardTitle>
                  <CardDescription className="text-base">
                    Telekomünikasyon şirketleriyle işbirliği
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Projemiz telekomünikasyon şirketleri ve kamu kurumlarıyla
                    stratejik ortaklıklar için hazırlanmıştır. Afet yönetiminde
                    yeni iş modelleri ve teknoloji liderliği fırsatları sunuyoruz.
                  </p>
                  <Button asChild variant="link" className="px-0 group-hover:gap-2 transition-all">
                    <Link href="/partnership" className="flex items-center gap-1">
                      Detaylı Bilgi
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Akademik Çalışmalar */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <Card className="h-full border-2 hover:border-brand-primary transition-all hover:shadow-2xl group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardHeader>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-brand-primary to-red-600 shadow-lg group-hover:scale-110 transition-transform">
                    <GraduationCap className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Akademik Çalışmalar</CardTitle>
                  <CardDescription className="text-base">
                    Bilimsel araştırmalar ve yayınlar
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Projemiz kapsamında araştırılan akademik çalışmalar,
                    uluslararası konferanslarda sunulan posterler, yayınlanan
                    makaleler ve gerçek dünya testleri. Bilimsel temellere dayanan
                    güvenilir çözümler.
                  </p>
                  <Button asChild variant="link" className="px-0 group-hover:gap-2 transition-all">
                    <Link href="/academic" className="flex items-center gap-1">
                      Detaylı Bilgi
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-24">
        {/* Gradient background from white to dark */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-800 via-40% to-gray-900" />
        {/* Smooth fade from white at top */}
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-white via-white/60 via-60% to-transparent pointer-events-none" />
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:40px_40px]" />
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Projemizi Daha Yakından Keşfedin
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-10">
              Detaylı bilgi almak ve demo görmek için bizimle iletişime geçin.
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button asChild size="lg" className="bg-brand-primary hover:bg-red-700 text-white font-semibold px-8 py-6 text-base w-full sm:w-auto group">
                <Link href="/contact" className="flex items-center gap-2">
                  İletişim
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-6 text-base w-full sm:w-auto">
                <Link href="/team">
                  Ekibimiz
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

