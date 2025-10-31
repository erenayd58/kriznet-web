"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const footerNavigation = {
  solutions: [
    { name: "Mobil Çözüm", href: "/mobile-solution" },
    { name: "IoT Çözümü", href: "/iot-solution" },
    { name: "Stratejik Ortaklıklar", href: "/partnership" },
    { name: "Akademik Çalışmalar", href: "/academic" },
  ],
  company: [
    { name: "İletişim", href: "/contact" },
  ],
  legal: [
    { name: "Gizlilik Politikası", href: "/privacy" },
    { name: "Kullanım Koşulları", href: "/terms" },
    { name: "SSS", href: "/faq" },
  ],
  social: [
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "GitHub", href: "#", icon: Github },
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "E-posta", href: "mailto:info@kriznet.com", icon: Mail },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-[#050815] to-black" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-10 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] xl:gap-24">
          <motion.div
            className="space-y-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20 backdrop-blur">
                <span className="text-lg font-semibold text-white">KN</span>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-[0.55em] text-brand-primary/80">KrizNet</p>
                <h3 className="text-3xl font-bold text-white">Afet İletişim Platformu</h3>
              </div>
            </div>
            <p className="text-base leading-7 text-gray-300 max-w-lg">
              Afet anlarında BLE Mesh teknolojisiyle kesintisiz iletişim sağlayan KrizNet, saha ekipleri ile yerel topluluklar arasında güvenli bilgi akışını sürdürür.
            </p>
            <div className="flex items-center gap-3">
              {footerNavigation.social.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="group"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="sr-only">{item.name}</span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 transition-all group-hover:bg-brand-primary/80 group-hover:ring-brand-primary/60">
                    <item.icon className="h-5 w-5 text-gray-400 transition-colors group-hover:text-white" />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="mt-16 grid grid-cols-2 gap-10 xl:mt-0 xl:grid-cols-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="space-y-5">
              <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-400">Çözümler</h3>
              <ul role="list" className="space-y-3.5">
                {footerNavigation.solutions.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm leading-6 text-gray-400 hover:text-white transition-colors relative group"
                    >
                      <span className="relative">
                        {item.name}
                        <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-brand-primary transition-all duration-300 group-hover:w-full" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-5">
              <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-400">Şirket</h3>
              <ul role="list" className="space-y-3.5">
                {footerNavigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm leading-6 text-gray-400 hover:text-white transition-colors relative group"
                    >
                      <span className="relative">
                        {item.name}
                        <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-brand-primary transition-all duration-300 group-hover:w-full" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-5">
              <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-400">Yasal</h3>
              <ul role="list" className="space-y-3.5">
                {footerNavigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm leading-6 text-gray-400 hover:text-white transition-colors relative group"
                    >
                      <span className="relative">
                        {item.name}
                        <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-brand-primary transition-all duration-300 group-hover:w-full" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-20 border-t border-white/10 pt-8 sm:mt-24 lg:mt-28"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-col gap-4 text-center text-sm text-gray-400 md:flex-row md:items-center md:justify-between">
            <p className="text-xs tracking-wide uppercase text-gray-500">
              &copy; {new Date().getFullYear()} KrizNet Project. Tüm hakları saklıdır.
            </p>
            <p>
              Kriz anlarında bağlantı hiç kopmasın diye geliştirdik.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

