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
    {
      name: "Twitter",
      href: "#",
      icon: Twitter,
    },
    {
      name: "GitHub",
      href: "#",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: Linkedin,
    },
    {
      name: "Email",
      href: "mailto:info@kriznet.com",
      icon: Mail,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-3xl font-bold bg-gradient-to-r from-brand-primary to-red-600 bg-clip-text text-transparent">
              KrizNet
            </span>
            <p className="text-base leading-6 text-gray-300 max-w-xs">
              Afet anında BLE mesh teknolojisi ile kesintisiz iletişim sağlayan yenilikçi çözüm.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {footerNavigation.social.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="sr-only">{item.name}</span>
                  <div className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-brand-primary transition-colors">
                    <item.icon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider">
                  Çözümler
                </h3>
                <ul role="list" className="mt-6 space-y-3">
                  {footerNavigation.solutions.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-400 hover:text-white transition-colors relative group"
                      >
                        <span className="relative">
                          {item.name}
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary group-hover:w-full transition-all duration-300"></span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider">
                  Şirket
                </h3>
                <ul role="list" className="mt-6 space-y-3">
                  {footerNavigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-400 hover:text-white transition-colors relative group"
                      >
                        <span className="relative">
                          {item.name}
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary group-hover:w-full transition-all duration-300"></span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider">
                  Yasal
                </h3>
                <ul role="list" className="mt-6 space-y-3">
                  {footerNavigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-400 hover:text-white transition-colors relative group"
                      >
                        <span className="relative">
                          {item.name}
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary group-hover:w-full transition-all duration-300"></span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm leading-5 text-gray-400">
              &copy; {new Date().getFullYear()} KrizNet Project. Tüm hakları saklıdır.
            </p>
            <p className="text-sm text-gray-400">
              Made with <span className="text-red-500">❤</span> for a safer world
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

