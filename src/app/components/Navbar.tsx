"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { servicesData, serviceAreasData } from "../data/servicesAndAreas";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-3.5"
          : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between">
        {/* Logo Image & Text */}
        <Link href="/" className="flex items-center gap-3 z-10 group">
          <Image
            src="/logo.png"
            alt="Soarin Handyman Services, LLC"
            width={160}
            height={50}
            className="h-9 sm:h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-7">
          {/* Home */}
          <Link
            href="/"
            className={`text-sm font-medium transition-colors hover:text-[#C9A84C] ${
              scrolled ? "text-[#2C2C2A]" : "text-white"
            }`}
          >
            Home
          </Link>

          {/* Services Dropdown */}
          <div className="relative group py-2">
            <Link
              href="/services"
              className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-[#C9A84C] ${
                scrolled ? "text-[#2C2C2A]" : "text-white"
              }`}
            >
              Services
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-200 group-hover:rotate-180 text-[#C9A84C]"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </Link>

            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 hidden group-hover:block w-72 pt-2 animate-fade-in">
              <div className="bg-white border border-[#E5DFD5] rounded-md shadow-xl p-3 text-left">
                <Link
                  href="/services"
                  className="flex items-center justify-between px-3 py-2 text-xs font-semibold uppercase tracking-wider text-[#C9A84C] hover:bg-[#FAF7F0] rounded-sm transition-colors mb-1 border-b border-[#E5DFD5]/60 pb-2.5"
                >
                  <span>View All Services</span>
                  <span>→</span>
                </Link>

                <div className="space-y-1 mt-1">
                  {servicesData.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="block px-3 py-2 text-xs font-medium text-[#2C2C2A] hover:bg-[#FAF7F0] hover:text-[#C9A84C] rounded-sm transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Our Work */}
          <Link
            href="/#our-work"
            className={`text-sm font-medium transition-colors hover:text-[#C9A84C] ${
              scrolled ? "text-[#2C2C2A]" : "text-white"
            }`}
          >
            Our Work
          </Link>

          {/* About */}
          <Link
            href="/#about"
            className={`text-sm font-medium transition-colors hover:text-[#C9A84C] ${
              scrolled ? "text-[#2C2C2A]" : "text-white"
            }`}
          >
            About
          </Link>

          {/* Service Areas Dropdown */}
          <div className="relative group py-2">
            <Link
              href="/service-areas"
              className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-[#C9A84C] ${
                scrolled ? "text-[#2C2C2A]" : "text-white"
              }`}
            >
              Service Areas
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-200 group-hover:rotate-180 text-[#C9A84C]"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </Link>

            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 hidden group-hover:block w-64 pt-2 animate-fade-in">
              <div className="bg-white border border-[#E5DFD5] rounded-md shadow-xl p-3 text-left">
                <Link
                  href="/service-areas"
                  className="flex items-center justify-between px-3 py-2 text-xs font-semibold uppercase tracking-wider text-[#C9A84C] hover:bg-[#FAF7F0] rounded-sm transition-colors mb-1 border-b border-[#E5DFD5]/60 pb-2.5"
                >
                  <span>All Service Areas</span>
                  <span>→</span>
                </Link>

                <div className="space-y-1 mt-1">
                  {serviceAreasData.map((area) => (
                    <Link
                      key={area.slug}
                      href={`/service-areas/${area.slug}`}
                      className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-[#2C2C2A] hover:bg-[#FAF7F0] hover:text-[#C9A84C] rounded-sm transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#C9A84C"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="shrink-0"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {area.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <Link
            href="/#faq"
            className={`text-sm font-medium transition-colors hover:text-[#C9A84C] ${
              scrolled ? "text-[#2C2C2A]" : "text-white"
            }`}
          >
            FAQ
          </Link>
        </div>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-4">
          <Link
            href="tel:2392223111"
            className={`hidden md:inline-flex items-center gap-2 text-sm font-medium transition-colors ${
              scrolled ? "text-[#2C2C2A]" : "text-white"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            (239) 222-3111
          </Link>

          <Link
            href="/#estimate-form"
            className="hidden sm:inline-flex bg-[#C9A84C] text-white text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-[#B8943F] transition-colors shadow-xs"
          >
            Get a Free Estimate
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-md ${
              scrolled ? "text-[#1C1C1A]" : "text-white"
            }`}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1C1C1A] text-white px-6 py-6 border-b border-white/10 shadow-2xl space-y-4 animate-fade-in">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-white hover:text-[#C9A84C]"
          >
            Home
          </Link>

          {/* Mobile Services Collapsible */}
          <div>
            <button
              type="button"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full flex items-center justify-between py-2 text-base font-medium text-white hover:text-[#C9A84C]"
            >
              <span>Services</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform ${
                  mobileServicesOpen ? "rotate-180 text-[#C9A84C]" : ""
                }`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {mobileServicesOpen && (
              <div className="pl-4 pr-2 py-2 space-y-2 border-l border-[#C9A84C]/40 ml-2 mt-1">
                <Link
                  href="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs font-semibold uppercase tracking-wider text-[#C9A84C]"
                >
                  All Services →
                </Link>
                {servicesData.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-sm text-stone-300 hover:text-white py-1"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/#our-work"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-white hover:text-[#C9A84C]"
          >
            Our Work
          </Link>

          <Link
            href="/#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-white hover:text-[#C9A84C]"
          >
            About
          </Link>

          {/* Mobile Service Areas Collapsible */}
          <div>
            <button
              type="button"
              onClick={() => setMobileAreasOpen(!mobileAreasOpen)}
              className="w-full flex items-center justify-between py-2 text-base font-medium text-white hover:text-[#C9A84C]"
            >
              <span>Service Areas</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform ${
                  mobileAreasOpen ? "rotate-180 text-[#C9A84C]" : ""
                }`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {mobileAreasOpen && (
              <div className="pl-4 pr-2 py-2 space-y-2 border-l border-[#C9A84C]/40 ml-2 mt-1">
                <Link
                  href="/service-areas"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs font-semibold uppercase tracking-wider text-[#C9A84C]"
                >
                  All Service Areas →
                </Link>
                {serviceAreasData.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/service-areas/${a.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-sm text-stone-300 hover:text-white py-1"
                  >
                    {a.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-white hover:text-[#C9A84C]"
          >
            FAQ
          </Link>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <Link
              href="tel:2392223111"
              className="flex items-center justify-center gap-2 py-3 border border-white/20 text-white rounded-md text-sm font-medium"
            >
              📞 Call (239) 222-3111
            </Link>
            <Link
              href="/#estimate-form"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center py-3 bg-[#C9A84C] text-white rounded-md text-sm font-semibold"
            >
              Get a Free Estimate
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
