"use client";

import Image from "next/image";
import {
  ArrowRight,
  Globe,
  Truck,
  Users,
  Clock3,
  ShieldCheck,
  Warehouse,
  PackageCheck,
  MapPinned,
  Plane,
} from "lucide-react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export default function ServicesPage() {
  return (
    <main className="overflow-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-[650px] lg:h-[650px] flex items-center overflow-hidden">
        <Image
          src="/images/service.png"
          alt="Logistics Hub"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 w-full py-24">
          <div className="max-w-3xl text-white">
            <p className="uppercase tracking-[4px] text-blue-300 font-medium mb-4 sm:mb-5 text-sm sm:text-base">
              Global Logistics Solutions
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
              Tailored Logistics Solutions
            </h1>

            <p className="mt-5 sm:mt-6 text-base sm:text-lg lg:text-xl text-slate-200 leading-7 sm:leading-8 max-w-2xl">
              Optimizing global supply chains through intelligent forwarding,
              precision distribution, and comprehensive trade compliance for the
              modern market.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4">
              <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 transition px-6 sm:px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2">
                Our Core Services
                <ArrowRight size={18} />
              </button>

              {/* <button className="w-full sm:w-auto border border-white/30 hover:bg-white/10 transition px-6 sm:px-8 py-4 rounded-xl font-semibold">
                Speak to Expert
              </button> */}
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      {/* <section className="-mt-10 sm:-mt-12 lg:-mt-16 relative z-20 px-6 sm:px-8 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {[
            {
              icon: Globe,
              title: "150+",
              subtitle: "Countries Covered",
            },
            {
              icon: Truck,
              title: "10K+",
              subtitle: "Monthly Shipments",
            },
            {
              icon: Users,
              title: "2500+",
              subtitle: "Logistics Experts",
            },
            {
              icon: Clock3,
              title: "25 Years",
              subtitle: "Industry Experience",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-slate-100"
            >
              <item.icon className="text-blue-600 mb-4 sm:mb-5" size={38} />

              <h3 className="text-3xl sm:text-4xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-2 text-slate-600 font-medium text-sm sm:text-base">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </section> */}

      {/* CORE SERVICES */}
      <section className="py-20 sm:py-24 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
          <div className="text-center mb-14 sm:mb-16">
            <p className="uppercase tracking-[4px] text-blue-600 font-semibold text-sm sm:text-base">
              Excellence In Motion
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-4">
              Core Logistics Services
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Freight */}
            <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm border border-slate-200 relative overflow-hidden group">
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
                  <Plane className="text-blue-600" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-6">
                  Freight Forwarding
                </h3>

                <p className="text-slate-600 mt-5 max-w-xl leading-7 sm:leading-8 text-sm sm:text-base">
                  Seamless multimodal transportation across Air, Sea, and Land
                  routes with real-time tracking and documentation management.
                </p>

                <button className="mt-8 text-blue-600 font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
                  Learn More
                  <ArrowRight size={18} />
                </button>
              </div>

              <Image
                src="/images/freight.jpg"
                alt="Freight"
                width={300}
                height={300}
                className="absolute bottom-0 right-0 opacity-10 hidden sm:block"
              />
            </div>

            {/* Customs */}
            <div className="lg:col-span-4 bg-slate-900 rounded-3xl p-6 sm:p-8 lg:p-10 text-white flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                  <ShieldCheck className="text-blue-400" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold mt-6">
                  Customs & Compliance
                </h3>

                <p className="mt-5 text-slate-300 leading-7 sm:leading-8 text-sm sm:text-base">
                  Expert navigation of global regulations ensuring your
                  shipments move smoothly without delays.
                </p>
              </div>

              <button className="mt-8 sm:mt-10 text-blue-400 font-semibold flex items-center gap-2">
                Learn More
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Warehouse */}
            <div className="lg:col-span-4 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200">
              <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center">
                <Warehouse className="text-slate-800" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-6">
                Warehousing
              </h3>

              <p className="text-slate-600 mt-5 leading-7 sm:leading-8 text-sm sm:text-base">
                Scalable storage solutions with modern inventory systems and
                fulfillment operations.
              </p>

              <button className="mt-8 text-blue-600 font-semibold flex items-center gap-2">
                Learn More
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Last Mile */}
            <div className="lg:col-span-8 bg-slate-100 rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200 flex flex-col lg:flex-row gap-8 lg:gap-10 items-center">
              <div className="flex-1">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
                  <Truck className="text-blue-600" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-6">
                  Last Mile Delivery
                </h3>

                <p className="text-slate-600 mt-5 leading-7 sm:leading-8 text-sm sm:text-base">
                  Rapid localized distribution to your customer’s doorstep with
                  unmatched reliability and visibility.
                </p>

                <button className="mt-8 text-blue-600 font-semibold flex items-center gap-2">
                  Learn More
                  <ArrowRight size={18} />
                </button>
              </div>

              <div className="w-full lg:w-[320px] h-[220px] relative rounded-2xl overflow-hidden">
                <Image
                  src="/images/delivery.jpg"
                  alt="Delivery"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE SERVICES */}
      <section className="py-20 sm:py-24 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
          <div className="flex items-start sm:items-center gap-4 mb-14 sm:mb-16">
            <div className="w-2 h-14 sm:h-16 bg-blue-600 rounded-full shrink-0" />

            <div>
              <p className="uppercase tracking-[4px] text-blue-600 font-semibold text-sm sm:text-base">
                Premium Support
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2">
                Value Added Services
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: PackageCheck,
                title: "Cargo Insurance",
                desc: "Comprehensive protection against physical loss or damage during transit.",
              },
              {
                icon: Globe,
                title: "SC Consulting",
                desc: "Strategic advisory to optimize your supply chain operations globally.",
              },
              {
                icon: MapPinned,
                title: "Project Cargo",
                desc: "Custom logistics for oversized and high-value infrastructure shipments.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="border border-slate-200 rounded-3xl p-6 sm:p-8 lg:p-10 hover:shadow-xl transition"
              >
                <item.icon className="text-blue-600" size={42} />

                <h3 className="text-2xl font-bold text-slate-900 mt-6">
                  {item.title}
                </h3>

                <p className="text-slate-600 mt-4 leading-7 sm:leading-8 text-sm sm:text-base">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL SECTION */}
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
              Operating across 150+ countries with regional hubs and trusted
              logistics networks.
            </p>

            <div className="grid grid-cols-2 gap-6 sm:gap-10 mt-10 sm:mt-12">
              <div>
                <h3 className="text-4xl sm:text-5xl font-bold text-blue-400">
                  150+
                </h3>

                <p className="mt-2 text-slate-400 text-sm sm:text-base">
                  Countries Covered
                </p>
              </div>

              <div>
                <h3 className="text-4xl sm:text-5xl font-bold text-blue-400">
                  2500+
                </h3>

                <p className="mt-2 text-slate-400 text-sm sm:text-base">
                  Logistics Experts
                </p>
              </div>
            </div>
          </div>

          <div className="relative max-w-[500px] mx-auto w-full">
            <div className="aspect-square rounded-full overflow-hidden border border-white/10">
              <Image
                src="/images/world-map.jpg"
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
            Get a Customized Solution
          </h2>

          <p className="mt-5 sm:mt-6 text-slate-600 text-base sm:text-lg leading-7 sm:leading-8">
            Every business has unique logistics challenges. Our specialists are
            ready to design a strategy tailored to your operational goals.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-5">
            <button className="w-full sm:w-auto bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-800 transition">
              Request a Quote
            </button>

            <button className="w-full sm:w-auto bg-white border border-slate-300 px-8 py-4 rounded-xl font-semibold hover:bg-slate-50 transition">
              Speak to Specialist
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
