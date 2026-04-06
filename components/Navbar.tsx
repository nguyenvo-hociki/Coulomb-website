// components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavDropdownItem {
  name: string;
  href: string;
}

type NavDropdownEntry = string | NavDropdownItem;

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const currentPathname = pathname ?? "";

  const industryLinks: NavDropdownItem[] = [
    { name: "Commercial & Industrial", href: "/industries/commercial-industrial" },
    { name: "Defense & Government", href: "/industries/defense-government" },
    { name: "Motive & Traction", href: "/industries/motive-traction" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks: Array<{ name: string; href: string; dropdown: NavDropdownEntry[] }> = [
    { 
      name: "Industries", 
      href: "/industries/commercial-industrial",
      dropdown: industryLinks
    },
    { 
      name: "Products", 
      href: "/products",
      dropdown: ["Battery Storage Systems", "GridIQ Software", "Energy Management"]
    },
    { 
      name: "Technology", 
      href: "/technology",
      dropdown: ["Sodium-Ion Chemistry", "Safety & Reliability", "Performance Data"]
    },
    { 
      name: "About Us", 
      href: "/about",
      dropdown: ["Our Mission", "Leadership", "Careers", "News"]
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-sm ${
        isScrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="w-[30%] flex items-center justify-start">
          <Link href="/" className="relative h-12 w-48 md:h-16 md:w-64 shrink-0">
             <Image
              src="/images/coulomb-logo-no-bg.png"
              alt="Coulomb Technology"
              fill
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link
                href={link.href}
                className={`flex items-center gap-3 text-lg font-medium transition-colors ${
                  currentPathname.startsWith(link.href.split('/').slice(0, 2).join('/')) ? 'text-primary' : 'text-gray-800 hover:text-primary'
                }`}
              >
                {link.name}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 transition-transform group-hover:rotate-180">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </Link>
              
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                <div className="bg-white rounded-xl shadow-xl overflow-hidden py-2 border border-gray-100">
                  {link.dropdown.map((item) => {
                    const href = typeof item === "string"
                      ? `${link.href}/${item.toLowerCase().replace(/\s+/g, '-')}`
                      : item.href;
                    const label = typeof item === "string" ? item : item.name;

                    return (
                      <Link
                        key={label}
                        href={href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                      >
                        {label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 bg-primary text-white hover:bg-opacity-90"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-900"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg lg:hidden max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <div key={link.name} className="border-b border-gray-100 pb-2 last:border-0">
                <Link href={link.href} className="font-semibold text-gray-900 mb-2 block" onClick={() => setIsMobileMenuOpen(false)}>
                  {link.name}
                </Link>
                <div className="flex flex-col space-y-2 pl-4">
                  {link.dropdown.map((item) => {
                    const href = typeof item === "string"
                      ? `${link.href}/${item.toLowerCase().replace(/\s+/g, '-')}`
                      : item.href;
                    const label = typeof item === "string" ? item : item.name;

                    return (
                      <Link
                        key={label}
                        href={href}
                        className="text-sm text-gray-600 hover:text-primary"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
            <Link
              href="/contact"
              className="mt-4 block w-full text-center bg-primary text-white font-semibold px-4 py-3 rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
