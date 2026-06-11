"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

import { Dropdown } from "@/components/layout/Dropdown";
import { SearchDropdown } from "@/components/layout/SearchDropdown";
import { PrimaryButton } from "@/components/ui/Button";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { slugify } from "@/lib/utils";
import { fetchAllContent } from "@/lib/client-api";
import { AllContentData } from "@/lib/types";
import { HIDE_RESOURCES, HIDE_PRODUCTS } from "@/lib/featureFlags";

const NAV_SECTIONS = [
  {
    label: "Company",
    key: "company",
    items: ["About Us", "Team", "Careers"],
  },
  {
    label: "Products",
    key: "products",
    items: ["All Products", "ROAAR", "CENTOIRE"],
  },
  {
    label: "Solutions",
    key: "solutions",
    items: [
      "Research & Analysis",
      "Data Structuring & Monetization",
      "Cloud Integration",
      "AI Solutions & Services",
      "AI Agent Development",
      "Predictive Analysis",
    ],
  },
  {
    label: "Resources",
    key: "resources",
    items: ["Newsletters", "Blogs", "Case Studies"],
  },
];

const SearchIcon = ({ className }: { className?: string }) => (
  <svg
    aria-hidden="true"
    className={className}
    fill="none"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m15.5 15.5-3.15-3.15m1.15-3.35a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </svg>
);

const MenuIcon = ({ open }: { open: boolean }) => (
  <div className="relative flex h-6 w-6 items-center justify-center">
    <span
      className={`absolute h-0.5 w-5 rounded-full bg-white transition-all duration-200 ${
        open ? "translate-y-0 rotate-45" : "-translate-y-1.5"
      }`}
    />
    <span
      className={`absolute h-0.5 w-5 rounded-full bg-white transition-opacity duration-200 ${
        open ? "opacity-0" : "opacity-100"
      }`}
    />
    <span
      className={`absolute h-0.5 w-5 rounded-full bg-white transition-all duration-200 ${
        open ? "translate-y-0 -rotate-45" : "translate-y-1.5"
      }`}
    />
  </div>
);

const ChevronSmall = ({ open }: { open: boolean }) => (
  <svg
    aria-hidden="true"
    className={`size-4 text-[#22c55e] transition-transform duration-200 ${
      open ? "rotate-180" : ""
    }`}
    fill="currentColor"
    viewBox="0 0 12 7"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6 7 0 0h12L6 7Z" />
  </svg>
);

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [allContent, setAllContent] = useState<AllContentData | null>(null);
  const [isLoadingContent, setIsLoadingContent] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement | null>(null);
  const mobileSearchModalRef = useRef<HTMLDivElement | null>(null);

  const navLinkBase =
    "relative inline-flex items-center pb-3 text-sm font-medium text-white/70 transition-colors duration-200 after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-[#22c55e] after:transition-all after:duration-200 after:content-[''] hover:text-white hover:after:w-full";
  const navLinkActive = "text-white after:w-full";

  const dropdowns = useMemo(
    () =>
      NAV_SECTIONS.filter((section) => {
        if (HIDE_RESOURCES && section.key === "resources") return false;
        if (HIDE_PRODUCTS && section.key === "products") return false;
        return true;
      }).map((section) => ({
        label: section.label,
        key: section.key,
        items: section.items.map((item) => ({
          label: item,
          href: section.key === "products"
            ? (item === "All Products" ? "/products" : `/products${slugify(item)}`)
            : section.key === "solutions" ? `/solutions${slugify(item)}`
            : section.key === "company" ? `/company${slugify(item)}`
            : slugify(item),
        })),
      })),
    [],
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearchToggle = () => {
    setSearchOpen(!searchOpen);
  };

  useEffect(() => {
    if (searchOpen && !allContent && !isLoadingContent) {
      const loadContent = async () => {
        setIsLoadingContent(true);
        try {
          const data = await fetchAllContent();
          setAllContent(data);
        } catch (error) {
          console.error("Failed to load search content:", error);
        } finally {
          setIsLoadingContent(false);
        }
      };
      loadContent();
    }
  }, [searchOpen, allContent, isLoadingContent]);

  useEffect(() => {
    setSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      const targetNode = event.target as Node | null;
      if (!targetNode) return;

      const clickedInsideDesktop =
        searchContainerRef.current?.contains(targetNode) ?? false;
      const clickedInsideMobile =
        mobileSearchModalRef.current?.contains(targetNode) ?? false;

      if (!clickedInsideDesktop && !clickedInsideMobile) {
        setSearchOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSearchOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleOpenContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#contact");
    }
  };

  return (
    <>
      <header
        className={`relative sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/80 backdrop-blur-md border-b border-white/10"
            : "bg-[#0a0a0a]/90 border-b border-white/5"
        }`}
        role="banner"
      >
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-2 xl:px-0">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo/Opho logo for dark mode.png"
              alt="Opho Technologies"
              width={190}
              height={64}
              priority
              className="h-auto w-24 md:w-[140px]"
            />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            <Link
              href="/"
              className={`${navLinkBase} ${
                pathname === "/" ? navLinkActive : ""
              }`}
            >
              Home
            </Link>
            {dropdowns.map((dropdown) => {
              const isActive = dropdown.items.some((item) =>
                pathname?.startsWith(item.href),
              );
              return (
                <Dropdown
                  key={dropdown.key}
                  label={dropdown.label}
                  items={dropdown.items}
                  isActive={isActive}
                  linkClassName={navLinkBase}
                  activeClassName={navLinkActive}
                />
              );
            })}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            {HIDE_RESOURCES ? null : (
              <div ref={searchContainerRef} className="relative">
                <button
                  type="button"
                  aria-label="Search"
                  className="flex size-10 items-center justify-center rounded-xl bg-white/5 text-[#22c55e] transition hover:bg-[#22c55e]/10 border border-white/10"
                  onClick={handleSearchToggle}
                  aria-expanded={searchOpen}
                  aria-haspopup="true"
                >
                  <SearchIcon className="size-5" />
                </button>

                {searchOpen ? (
                  <SearchDropdown
                    allContent={allContent}
                    isLoading={isLoadingContent}
                    onClose={() => setSearchOpen(false)}
                  />
                ) : null}
              </div>
            )}
            <PrimaryButton onClick={handleOpenContact}>Schedule a Call</PrimaryButton>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation"
            className="flex items-center justify-center rounded-xl border border-white/10 p-2 text-white lg:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <MenuIcon open={mobileOpen} />
          </button>
        </div>

        <div
          className={`lg:hidden transition-[max-height,opacity] duration-300 ${
            mobileOpen ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden border-t border-white/10 bg-[#0f0f0f]`}
        >
          <div className="space-y-6 px-4 py-6">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className={`block text-base font-semibold ${
                pathname === "/"
                  ? "text-[#22c55e]"
                  : "text-white/80 hover:text-white"
              }`}
            >
              Home
            </Link>
            {dropdowns.map((dropdown) => {
              const isExpanded = expandedSection === dropdown.key;
              return (
                <div key={dropdown.key} className="border-t border-white/5 pt-4">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between text-left text-base font-semibold text-white/80"
                    onClick={() =>
                      setExpandedSection((prev) =>
                        prev === dropdown.key ? null : dropdown.key,
                      )
                    }
                  >
                    {dropdown.label}
                    <ChevronSmall open={isExpanded} />
                  </button>
                  <div
                    className={`mt-3 space-y-2 pl-4 transition-[max-height,opacity] duration-300 ${
                      isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    } overflow-hidden`}
                  >
                    {dropdown.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block text-sm text-white/50 hover:text-[#22c55e]"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
            <div className="flex items-center gap-3 pt-4">
              {HIDE_RESOURCES ? null : (
                <SecondaryButton
                  withArrow={false}
                  className="w-full justify-center"
                  onClick={() => {
                    setMobileOpen(false);
                    setSearchOpen(true);
                  }}
                >
                  Search
                </SecondaryButton>
              )}
              <PrimaryButton
                className="w-full justify-center"
                onClick={() => {
                  setMobileOpen(false);
                  handleOpenContact();
                }}
              >
                Schedule a Call
              </PrimaryButton>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Search Modal */}
      {!HIDE_RESOURCES && searchOpen && (
        <div className="fixed inset-0 z-[70] bg-black/70 lg:hidden">
          <div
            ref={mobileSearchModalRef}
            className="fixed inset-x-0 top-0 bottom-0 z-[71] bg-[#0f0f0f] shadow-xl overflow-hidden"
          >
            <SearchDropdown
              allContent={allContent}
              isLoading={isLoadingContent}
              onClose={() => setSearchOpen(false)}
              isMobile={true}
            />
          </div>
        </div>
      )}
    </>
  );
}
