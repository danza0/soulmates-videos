"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import MenuIcon from "@/components/icons/MenuIcon";
import CloseIcon from "@/components/icons/CloseIcon";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      role="banner"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      )}
    >
      <nav
        role="navigation"
        aria-label="Main navigation"
        className="mx-auto max-w-7xl px-4 mobile:px-6 tablet:px-8 py-4 flex items-center justify-between"
      >
        <a
          href="#home"
          className="font-serif text-2xl text-charcoal hover:text-rose-gold transition-colors"
        >
          {SITE_CONFIG.name}
        </a>

        <ul className="hidden tablet:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-sans text-charcoal hover:text-rose-gold transition-colors text-sm tracking-wide"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          className="tablet:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <CloseIcon className="w-6 h-6 text-charcoal" />
          ) : (
            <MenuIcon className="w-6 h-6 text-charcoal" />
          )}
        </button>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-16 bg-white z-40 tablet:hidden"
          >
            <nav className="flex flex-col p-6">
              {NAV_LINKS.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-2xl text-charcoal hover:text-rose-gold py-4 border-b border-border"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}