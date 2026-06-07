"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Reviews", path: "/reviews" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <h1 className="text-2xl font-bold text-white tracking-tight">
              Frontier Global Trade
            </h1>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <Link
                  key={item.label}
                  href={item.path}
                  className={`text-sm font-medium transition-all duration-200 ${
                    index === 0
                      ? "text-white border-b-2 border-white pb-1"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Buttons */}
            {/* <div className="hidden md:flex items-center gap-4">
              <button className="text-sm font-medium text-white hover:bg-white/10 px-4 py-2 rounded-lg transition">
                Login
              </button>

              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all duration-300">
                Track Shipment
              </button>
            </div> */}

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden w-11 h-11 flex items-center justify-center rounded-xl border border-white/20 text-white hover:bg-white/10 transition"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-50 shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Top Section */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-slate-200">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Frontier Global Trade
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Global Logistics Solutions
            </p>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-100 transition"
          >
            <X size={22} className="text-slate-700" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col px-5 py-6 gap-3">
          {navItems.map((item, index) => (
            <Link
              key={item.label}
              href={item.path}
              onClick={() => setIsOpen(false)}
              className={`px-5 py-4 rounded-2xl text-base font-medium transition-all duration-200 ${
                index === 0
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Bottom Buttons */}
        <div className="px-5 mt-4 space-y-3">
          <button className="w-full border border-slate-300 text-slate-700 py-3 rounded-xl font-medium hover:bg-slate-100 transition">
            Login
          </button>

          <button className="w-full bg-slate-900 text-white py-3 rounded-xl font-semibold hover:bg-blue-600 transition">
            Track Shipment
          </button>
        </div>

        {/* Footer */}
        <div className="absolute bottom-6 left-6 text-xs text-slate-400 space-y-2">
          <p className="hover:text-slate-600 cursor-pointer transition">
            Privacy Policy
          </p>

          <p className="hover:text-slate-600 cursor-pointer transition">
            Terms of Service
          </p>

          <p>© 2026 Frontier Global Trade</p>
        </div>
      </div>
    </>
  );
}
