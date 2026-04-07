"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      name: "Industries",
      dropdown: [
        { label: "Commercial & Industrial", href: "/commercial-and-industrial" },
        { label: "Defense & Government", href: "/defense-and-government" },
        { label: "Motive / Traction Batteries", href: "/motive-traction-batteries" },
      ],
    },

    {
      name: "Products",
      dropdown: [
        {
          title: "",
          items: [{ label: "All Products", href: "/products", tag: "Overview" }],
        },
        {
          title: "SMART EMS",
          items: [
            { label: "Series-C", href: "/products/series-c", tag: "279V" },
            { label: "Series-R", href: "/products/series-r", tag: "48V" },
          ],
        },
        {
          title: "CORE BESS",
          items: [
            { label: "Series-DC", href: "/products/series-dc", tag: "279V" },
            { label: "Series-M", href: "/products/series-m", tag: "48V" },
            { label: "Series-S", href: "/products/series-s", tag: "12V" },
          ],
        },
      ],
    },

    {
      name: "Technology",
      dropdown: [
        {
          title: "",
          items: [
            { label: "Smart EMS", href: "/smart-ems", tag: "AI-Powered" },
            { label: "BESS Core", href: "/bess-core", tag: "Open Protocol" },
            { label: "Sodium-Ion Technology", href: "/sodium-ion-technology", tag: "Chemistry" },
          ],
        },
      ],
    },

    {
      name: "About Us",
      dropdown: [
        { label: "Who We Are", href: "/who-we-are" },
        { label: "Careers", href: "/careers" },
      ],
    },
  ];

  const dropdownBase =
    "absolute top-full left-0 mt-2 invisible translate-y-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100";

  const dropdownCard =
    "overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xl";

  const dropdownItem =
    "flex items-center justify-between rounded-md px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50 hover:text-primary";

  const badge =
    "ml-4 inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-semibold text-primary";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm transition-all duration-300 ${
        isScrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <div className="flex w-[30%] items-center justify-start">
          <Link href="/" className="relative h-12 w-48 flex-shrink-0 md:h-16 md:w-64">
            <Image
              src="/images/coulomb-logo-no-bg.png"
              alt="Coulomb Technology"
              fill
              className="object-contain"
              priority
            />
          </Link>
        </div>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <div key={link.name} className="group relative">
              <button className="flex items-center gap-3 text-lg font-medium text-gray-800 transition-colors hover:text-primary">
                {link.name}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4 transition-transform group-hover:rotate-180"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {link.name === "Products" || link.name === "Technology" ? (
                <div className={`${dropdownBase} w-[26rem]`}>
                  <div className={`${dropdownCard} py-3`}>
                    <div className="px-4">
                      {link.dropdown.map((section: any) => (
                        <div
                          key={section.title || section.items[0].label}
                          className={section.title ? "py-2" : "border-b border-gray-100 pb-3"}
                        >
                          {section.title && (
                            <div className="px-2 text-xs font-semibold uppercase tracking-wide text-sky-600">
                              {section.title}
                            </div>
                          )}

                          <div className={section.title ? "mt-2" : ""}>
                            {section.items.map((it: any) => (
                              <Link key={it.href} href={it.href} className={dropdownItem}>
                                <span>{it.label}</span>
                                {it.tag && <span className={badge}>{it.tag}</span>}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className={`${dropdownBase} w-56`}>
                  <div className={`${dropdownCard} py-2`}>
                    {link.dropdown.map((it: any) => (
                      <Link
                        key={it.href}
                        href={it.href}
                        className="block px-4 py-2 text-md text-gray-700 transition-colors hover:bg-gray-50 hover:text-primary"
                      >
                        {it.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-opacity-90"
          >
            Contact Us
          </Link>
        </div>

        <button
          className="p-2 lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6 text-gray-900"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 max-h-[calc(100vh-80px)] overflow-y-auto bg-white shadow-lg lg:hidden">
          <div className="flex flex-col space-y-4 p-4">
            {navLinks.map((link) => (
              <div key={link.name} className="border-b border-gray-100 pb-2 last:border-0">
                <div className="mb-2 font-semibold text-gray-900">{link.name}</div>

                <div className="flex flex-col space-y-2 pl-4">
                  {link.name === "Products" || link.name === "Technology" ? (
                    link.dropdown.flatMap((section: any) => section.items).map((it: any) => (
                      <Link
                        key={it.href}
                        href={it.href}
                        className="flex items-center justify-between text-sm text-gray-600 hover:text-primary"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span>{it.label}</span>
                        {it.tag && (
                          <span className="ml-3 inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-semibold text-primary">
                            {it.tag}
                          </span>
                        )}
                      </Link>
                    ))
                  ) : (
                    link.dropdown.map((it: any) => (
                      <Link
                        key={it.href}
                        href={it.href}
                        className="text-sm text-gray-600 hover:text-primary"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {it.label}
                      </Link>
                    ))
                  )}
                </div>
              </div>
            ))}

            <Link
              href="/contact"
              className="mt-4 block w-full rounded-lg bg-primary px-4 py-3 text-center font-semibold text-white"
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