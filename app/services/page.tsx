"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Truck,
  Users,
  ShieldCheck,
  PackageCheck,
  MapPinned,
  Plane,
  Ship,
  TrainFront,
  Wheat,
  FlaskConical,
} from "lucide-react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

// ---------------------------------------------------------------------------
// DATA — driven by SR Frontier's actual business: Transport & Logistics
// (Sea / Air / Road / Rail) and Product Industries (Spices / Chemicals).
// Edit this section to update content without touching layout/markup.
// ---------------------------------------------------------------------------

const transportModes = [
  {
    icon: Ship,
    name: "Sea Freight",
    href: "/services/transport/sea-freight",
    stat: "300+ Ports",
    desc: "FCL, LCL & break-bulk shipping connecting 300+ international ports with real-time tracking.",
  },
  {
    icon: Plane,
    name: "Air Cargo",
    href: "/services/transport/air-cargo",
    stat: "195+ Countries",
    desc: "Time-critical air freight for perishables and high-value cargo with priority handling.",
  },
  {
    icon: Truck,
    name: "Road Transport",
    href: "/services/transport/road-transport",
    stat: "Door-to-Door",
    desc: "Reliable domestic & cross-border trucking from origin warehouse to destination port.",
  },
  {
    icon: TrainFront,
    name: "Rail Freight",
    href: "/services/transport/rail-freight",
    stat: "Bulk Capacity",
    desc: "Cost-efficient bulk rail movement for high-volume inland cargo transport.",
  },
];

const productIndustries = [
  {
    icon: Wheat,
    name: "Premium Spices & Agro-Products",
    href: "/services/products/spices",
    color: "amber",
    items: [
      "Cumin (Jeera)",
      "Fenugreek (Methi)",
      "Fennel (Saunf)",
      "Psyllium Husk",
      "Spirulina",
    ],
    desc: "FSSAI-certified premium spices sourced directly from Gujarat's farmer collectives, exported globally.",
  },
  {
    icon: FlaskConical,
    name: "Industrial & Specialty Chemicals",
    href: "/services/products/chemicals",
    color: "slate",
    items: [
      "Agrochemicals",
      "Petrochemicals",
      "Solvents & Organic Chemicals",
      "Specialty Organic Intermediates",
    ],
    desc: "REACH & ISO compliant export of industrial and specialty chemicals to global manufacturing buyers.",
  },
];

export default function ServicesPage() {
  return (
    <main className="overflow-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-[600px] lg:h-[600px] flex items-center overflow-hidden">
        <Image
          src="/images/service.png"
          alt="Global Supply Chain"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 w-full py-24">
          <div className="max-w-3xl text-white">
            <p className="uppercase tracking-[4px] text-blue-300 font-medium mb-4 sm:mb-5 text-sm sm:text-base">
              Import &amp; Export Specialists
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
              Our Global Supply Chain Solutions
            </h1>

            <p className="mt-5 sm:mt-6 text-base sm:text-lg lg:text-xl text-slate-200 leading-7 sm:leading-8 max-w-2xl">
              Transport · Logistics · Products — connecting Gujarat&apos;s
              premium spices and specialty chemicals with global markets through
              reliable, end-to-end trade solutions.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#transport"
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 transition px-6 sm:px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2"
              >
                Browse Transport
                <ArrowRight size={18} />
              </a>

              <a
                href="#products"
                className="w-full sm:w-auto border border-white/30 hover:bg-white/10 transition px-6 sm:px-8 py-4 rounded-xl font-semibold text-center"
              >
                Browse Products
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSPORT & LOGISTICS */}
      <section id="transport" className="py-20 sm:py-24 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
          <div className="text-center mb-14 sm:mb-16">
            <p className="uppercase tracking-[4px] text-blue-600 font-semibold text-sm sm:text-base">
              Multimodal Network
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-4">
              Transport &amp; Logistics
            </h2>

            <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
              Four transport modes, one seamless network — moving your cargo by
              sea, air, road, and rail.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {transportModes.map((mode, index) => (
              <Link
                key={index}
                href={mode.href}
                className="group bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
                  <mode.icon className="text-blue-600" size={26} />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mt-6">
                  {mode.name}
                </h3>

                <p className="mt-1 text-blue-600 font-semibold text-sm">
                  {mode.stat}
                </p>

                <p className="text-slate-600 mt-4 leading-7 text-sm flex-1">
                  {mode.desc}
                </p>

                <span className="mt-6 text-blue-600 font-semibold flex items-center gap-2 group-hover:gap-4 transition-all text-sm">
                  Explore
                  <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT INDUSTRIES */}
      <section id="products" className="py-20 sm:py-24 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <p className="uppercase tracking-[4px] text-blue-600 font-semibold text-sm sm:text-base">
              Excellence In Trade
            </p>

            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mt-4">
              Product Industries
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-8">
              Delivering premium-quality spices and chemical products to global
              markets through trusted sourcing, international compliance, and
              reliable logistics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {productIndustries.map((industry, index) => (
              <div
                key={index}
                className={`rounded-3xl p-6 sm:p-8 lg:p-10 border shadow-sm hover:shadow-xl transition-all duration-300 ${
                  industry.color === "amber"
                    ? "bg-amber-50 border-amber-200"
                    : "bg-slate-900 border-slate-800 text-white"
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                    industry.color === "amber" ? "bg-amber-100" : "bg-white/10"
                  }`}
                >
                  <industry.icon
                    className={
                      industry.color === "amber"
                        ? "text-amber-600"
                        : "text-blue-400"
                    }
                    size={28}
                  />
                </div>

                <h3
                  className={`text-2xl sm:text-3xl font-bold mt-6 ${
                    industry.color === "amber" ? "text-slate-900" : "text-white"
                  }`}
                >
                  {industry.name}
                </h3>

                <p
                  className={`mt-4 leading-7 sm:leading-8 text-sm sm:text-base ${
                    industry.color === "amber"
                      ? "text-slate-600"
                      : "text-slate-300"
                  }`}
                >
                  {industry.desc}
                </p>

                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {industry.items.map((item, i) => (
                    <li
                      key={i}
                      className={`flex items-center gap-2 text-sm ${
                        industry.color === "amber"
                          ? "text-slate-700"
                          : "text-slate-200"
                      }`}
                    >
                      <PackageCheck
                        size={16}
                        className={
                          industry.color === "amber"
                            ? "text-amber-600"
                            : "text-blue-400"
                        }
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* <Link
                  href={industry.href}
                  className={`mt-8 inline-flex items-center gap-2 font-semibold text-sm group ${
                    industry.color === "amber"
                      ? "text-amber-700"
                      : "text-blue-400"
                  }`}
                >
                  Explore Products
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL PRESENCE */}
      <section className="py-20 sm:py-24 lg:py-28 bg-slate-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div>
            <p className="uppercase tracking-[4px] text-blue-400 font-semibold text-sm sm:text-base">
              Unrivaled Coverage
            </p>

            <h2 className="text-4xl sm:text-5xl font-bold mt-5 leading-tight">
              Global Presence, Local Expertise
            </h2>

            <p className="mt-6 sm:mt-8 text-slate-300 leading-7 sm:leading-8 text-base sm:text-lg">
              Operating across 195+ countries with regional hubs, trusted
              logistics networks, and direct farmer and manufacturer
              partnerships.
            </p>

            <div className="grid grid-cols-2 gap-6 sm:gap-10 mt-10 sm:mt-12">
              <div>
                <h3 className="text-4xl sm:text-5xl font-bold text-blue-400">
                  195+
                </h3>
                <p className="mt-2 text-slate-400 text-sm sm:text-base">
                  Countries Served
                </p>
              </div>

              <div>
                <h3 className="text-4xl sm:text-5xl font-bold text-blue-400">
                  300+
                </h3>
                <p className="mt-2 text-slate-400 text-sm sm:text-base">
                  Ports Covered
                </p>
              </div>
            </div>
          </div>

          <div className="relative max-w-[500px] mx-auto w-full">
            <div className="aspect-square rounded-full overflow-hidden border border-white/10">
              <Image
                src="/images/world.png"
                alt="World Map"
                width={700}
                height={700}
                className="w-full h-full object-cover opacity-70"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 sm:py-24 lg:py-28 bg-slate-100">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
            Ready to Ship Globally?
          </h2>

          <p className="mt-5 sm:mt-6 text-slate-600 text-base sm:text-lg leading-7 sm:leading-8">
            Whether you&apos;re importing transport capacity or exporting spices
            and chemicals, our specialists will design a strategy tailored to
            your operational goals.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-5">
            <button className="w-full sm:w-auto bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-800 transition">
              Request a Quote
            </button>

            <button className="w-full sm:w-auto bg-white border border-slate-300 px-8 py-4 rounded-xl font-semibold hover:bg-slate-50 transition">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
