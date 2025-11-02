"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Ana Sayfa", href: "/" },
  { name: "Mobil Çözüm", href: "/mobile-solution" },
  { name: "IoT Çözümü", href: "/iot-solution" },
  { name: "Stratejik Ortaklıklar", href: "/partnership" },
  { name: "Akademik", href: "/academic" },
  { name: "İletişim", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className="relative sticky top-0 z-50 w-full overflow-hidden transition-all duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className={`pointer-events-none absolute inset-0 -z-10 border-b transition-all duration-300 ${
          scrolled
            ? "border-white/60 bg-white/95 backdrop-blur-xl shadow-[0_18px_40px_-25px_rgba(51,51,51,0.45)]"
            : "border-white/40 bg-gradient-to-r from-white/95 via-[#f8f4f5]/90 to-white/95 backdrop-blur-lg"
        }`}
        aria-hidden="true"
      />
      <nav
        className="relative mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8"
        aria-label="Global"
      >
        <motion.div
          className="flex lg:flex-1"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <Link href="/" className="-m-1.5 flex items-center gap-2 rounded-full p-1.5">
            <span className="text-2xl font-extrabold tracking-tight text-brand-primary drop-shadow-sm">
              KrizNet
            </span>
          </Link>
        </motion.div>

        <div className="flex lg:hidden">
          <motion.button
            whileTap={{ scale: 0.95 }}
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-full p-2.5 text-brand-dark transition-colors hover:bg-brand-primary/10"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            <span className="sr-only">Ana menüyü aç</span>
            <AnimatePresence mode="wait" initial={false}>
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        <div className="hidden lg:flex lg:items-center lg:gap-x-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className="group relative overflow-hidden rounded-full px-4 py-2 text-sm font-semibold tracking-wide text-brand-dark transition-colors duration-300 hover:text-brand-primary"
              >
                <span className="relative z-10">{item.name}</span>
                {isActive ? (
                  <motion.span
                    layoutId="navbar-pill"
                    className="absolute inset-0 rounded-full bg-brand-primary/10 ring-1 ring-brand-primary/20"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                ) : (
                  <span className="absolute inset-0 scale-75 opacity-0 rounded-full bg-brand-primary/5 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100" />
                )}
              </Link>
            );
          })}
        </div>
      </nav>

      <AnimatePresence initial={false}>
        {mobileMenuOpen && (
          <motion.div
            className="overflow-hidden lg:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-1 border-t border-white/60 bg-white/95 px-4 pb-4 pt-3 backdrop-blur-lg">
              {navigation.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className={`block rounded-xl px-3 py-2.5 text-base font-semibold transition-colors ${
                        isActive
                          ? "bg-brand-primary/10 text-brand-primary"
                          : "text-brand-dark hover:bg-brand-primary/10 hover:text-brand-primary"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
