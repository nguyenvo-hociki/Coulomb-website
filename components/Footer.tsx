import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-gray-400 py-16 px-6 font-sans border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Column 1 — Brand / Description */}
          <div className="flex flex-col">
            <Link href="/" className="block relative h-10 w-40 mb-4">
                {/* 
                   Using text as a safe fallback since we don't have a guaranteed white logo asset.
                   If you have a white logo version, replace this block with <Image ... /> 
                */}
               <span className="text-white text-xl font-bold tracking-tight">
                  Coulomb<span className="text-primary">Technology</span>
               </span>
            </Link>
            
            <p className="text-sm mt-4 max-w-xs leading-relaxed">
              Energy Storage You Can Bank On. High-uptime, safety-first sodium-ion systems with lower total cost of ownership.
            </p>

            <div className="flex gap-3 mt-6">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/coulomb-technology/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-md flex items-center justify-center hover:bg-gray-700 transition-colors text-white"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="https://twitter.com/coulombtech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-md flex items-center justify-center hover:bg-gray-700 transition-colors text-white"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 — Products */}
          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/products/battery-storage" className="hover:text-white transition-colors">
                  Battery Storage
                </Link>
              </li>
             <li>
                <Link href="/products/software" className="hover:text-white transition-colors">
                  GridIQ Software
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 — Industries */}
          <div>
            <h3 className="text-white font-semibold mb-4">Industries</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/industries/commercial-industrial" className="hover:text-white transition-colors">
                   Commercial & Industrial
                </Link>
              </li>
              <li>
                <Link href="/industries/defense" className="hover:text-white transition-colors">
                   Defense & Government
                </Link>
              </li>
              <li>
                <Link href="/industries/motive" className="hover:text-white transition-colors">
                   Motive / Traction Batteries
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 — Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/partners" className="hover:text-white transition-colors">
                  Partners
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="text-gray-500">
            © 2026 Coulomb Technology, Inc. All rights reserved.
          </div>
          
          <div className="text-center md:text-left">
            <span className="text-white font-medium">Made in America</span>
            <span className="text-gray-600 mx-2">—</span>
            <span>Sodium is 1,000× more abundant than lithium</span>
          </div>

          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
