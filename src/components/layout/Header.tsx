"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { HIDE_PRODUCTS, HIDE_RESOURCES } from "@/lib/featureFlags";

const COMPANY_LINKS = [
  { label: "About Us", href: "/company/about-us" },
  { label: "Team", href: "/company/team" },
  { label: "Careers", href: "/company/careers" },
];

const PRODUCT_LINKS = [
  { label: "All Products", href: "/products" },
  { label: "ROAAR", href: "/products/roaar" },
  { label: "CENTOIRE", href: "/products/centoire" },
];

const SOLUTION_LINKS = [
  { label: "Research & Analysis", href: "/solutions/research-and-analysis" },
  { label: "Data Structuring", href: "/solutions/data-structuring-and-monetization" },
  { label: "Cloud Integration", href: "/solutions/cloud-integration" },
  { label: "AI Solutions & Services", href: "/solutions/ai-solutions-and-services" },
  { label: "AI Agent Development", href: "/solutions/ai-agent-development" },
  { label: "Predictive Analysis", href: "/solutions/predictive-analysis" },
];

const RESOURCE_LINKS = [
  { label: "Newsletters", href: "/newsletters" },
  { label: "Blogs", href: "/blogs" },
  { label: "Case Studies", href: "/case-studies" },
];

function NavDropdown({
  label,
  links,
}: {
  label: string;
  links: { label: string; href: string }[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="flex items-center gap-1 text-sm font-medium tracking-wide transition-colors relative text-white/80 hover:text-[#09C771]"
      >
        {label}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
        <motion.span
          className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#09C771] origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: open ? 1 : 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            className="absolute top-full left-1/2 -translate-x-1/2 pt-3 min-w-[180px] z-50"
          >
            <div className="bg-[#0E1010]/98 backdrop-blur-md rounded-2xl border border-white/10 p-2 shadow-2xl">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-white/70 hover:text-[#09C771] hover:bg-white/5 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  <span className="w-1 h-1 rounded-full bg-[#09C771] opacity-0 group-hover:opacity-100" />
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0E1010]/95 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <motion.div
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Image
              src="/images/logo/Opho logo for dark mode.png"
              alt="Opho Technologies"
              width={190}
              height={64}
              className="h-8 w-auto"
              priority
            />
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7">
          <NavDropdown label="Company" links={COMPANY_LINKS} />
          {!HIDE_PRODUCTS && (
            <NavDropdown label="Products" links={PRODUCT_LINKS} />
          )}
          <NavDropdown label="Solutions" links={SOLUTION_LINKS} />
          {!HIDE_RESOURCES && (
            <NavDropdown label="Resources" links={RESOURCE_LINKS} />
          )}
        </div>

        {/* CTA */}
        <motion.button
          onClick={scrollToContact}
          className="hidden md:block bg-[#09C771] text-[#0E1010] px-6 py-2.5 rounded-full font-bold text-sm tracking-wide relative overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          />
          <span className="relative z-10">Schedule a Call</span>
        </motion.button>

        {/* Mobile hamburger */}
        <motion.button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {mobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="text-white" size={22} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="text-white" size={22} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="md:hidden bg-[#0E1010]/98 backdrop-blur-md border-t border-white/10 overflow-hidden"
          >
            <div className="px-6 py-5 space-y-1">
              {[
                ...COMPANY_LINKS.map(l => ({ ...l, section: "Company" })),
                ...(HIDE_PRODUCTS ? [] : PRODUCT_LINKS.map(l => ({ ...l, section: "Products" }))),
                ...SOLUTION_LINKS.map(l => ({ ...l, section: "Solutions" })),
                ...(HIDE_RESOURCES ? [] : RESOURCE_LINKS.map(l => ({ ...l, section: "Resources" }))),
              ].map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    href={link.href}
                    className="block text-white/70 hover:text-[#09C771] text-base font-medium py-2.5 border-b border-white/5 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.button
                onClick={scrollToContact}
                className="w-full mt-4 bg-[#09C771] text-[#0E1010] px-6 py-3 rounded-full font-bold text-sm tracking-wide"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Schedule a Call
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
