"use client";

import Link from "next/link";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Reviews", path: "/reviews" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <h1 className="text-2xl font-bold text-slate-900">
            Frontier Global Trade
          </h1>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.path}
                className="text-sm font-medium text-slate-700 hover:text-blue-600 transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button className="hidden md:block text-sm font-medium">
              Login
            </button>

            <button className="bg-slate-900 text-white px-5 py-3 rounded-xl text-sm font-semibold hover:bg-slate-800 transition">
              Track Shipment
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
