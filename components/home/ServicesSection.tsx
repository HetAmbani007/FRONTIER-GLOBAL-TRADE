import Image from "next/image";
import {
  Truck,
  ShieldCheck,
  Warehouse,
  Plane,
  ShipWheel,
  ArrowRight,
  FileText,
} from "lucide-react";
import Link from "next/link";

export default function ServicesSection() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-14">
          <p className="text-blue-600 font-semibold tracking-widest uppercase text-sm">
            Expertise
          </p>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            Core Logistics Services
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Large Card */}
          <div className="lg:col-span-2 relative overflow-hidden rounded-3xl min-h-[420px] group">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjFXHESV5VVxjo0BvWLt2O-BsuE9BjThAnZUgWKdihMb26jNR73oEz_v4Vkaen0d5ja6LIO7ilt-JgHpSlAg6Mfckf09RArvskgQQRJ57sk_9qmsW9rW29T-LXwYeNN_DWQdVxpFTaFqoNMl78Z7zTR_IF7egIrH887pE-jAQQVMPTId_MHO8sQO2mSv7c4fXjvVMsvBIiRG1LcMrpUDE2YxSNrWAPPvQvyJV0JEQ3JLoqn9-rmGzey8LKUiFCIWoWzKfNvy0nKbs"
              alt="Warehouse"
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent" />

            <div className="relative z-10 h-full flex flex-col justify-end p-10 text-white">
              <div className="w-14 h-14 rounded-2xl bg-blue-600/20 backdrop-blur flex items-center justify-center mb-5">
                <Warehouse className="w-7 h-7 text-blue-400" />
              </div>

              <h3 className="text-3xl font-bold">Logistics Solutions</h3>

              <p className="mt-4 text-gray-200 max-w-xl leading-7">
                Comprehensive logistics services designed to streamline
                transportation, optimize supply chains, and ensure seamless
                delivery across global markets.
              </p>

              <Link
                className="mt-8 inline-flex items-center gap-2 text-blue-400 font-semibold hover:gap-4 transition-all"
                href="/services"
              >
                Explore Service
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Freight Card */}
          <div className="bg-white rounded-3xl p-10 border-t-4 border-blue-600 shadow-sm hover:shadow-lg transition">
            <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
              <ShipWheel className="w-7 h-7 text-blue-600" />
            </div>

            <h3 className="mt-8 text-3xl font-bold text-slate-900">
              Freight Forwarding
            </h3>

            <p className="mt-5 text-gray-600 leading-7">
              Comprehensive sea, air, and land transportation solutions tailored
              for your global supply chain.
            </p>

            <div className="mt-10 border-t pt-8 space-y-4">
              <div className="flex items-center gap-3">
                <Plane className="w-5 h-5 text-blue-600" />
                <span className="font-medium">Air Cargo Services</span>
              </div>

              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-blue-600" />
                <span className="font-medium">Intermodal Transport</span>
              </div>

              <div className="flex items-center gap-3">
                <ShipWheel className="w-5 h-5 text-blue-600" />
                <span className="font-medium">Ocean Freight</span>
              </div>
            </div>
          </div>

          {/* Customs */}
          <div className="bg-slate-950 rounded-3xl p-10 text-white shadow-sm hover:shadow-lg transition">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
              <FileText className="w-7 h-7 text-blue-400" />
            </div>

            <h3 className="mt-8 text-3xl font-bold">Customs Clearance</h3>

            <p className="mt-5 text-gray-300 leading-7">
              Navigating complex international regulations with expert
              compliance and documentation services.
            </p>

            <div className="mt-10 flex items-center justify-between">
              <span className="text-gray-400">Compliance Guaranteed</span>

              <ShieldCheck className="w-6 h-6 text-blue-400" />
            </div>
          </div>

          {/* Bottom Banner */}
          <div className="lg:col-span-2 relative overflow-hidden rounded-3xl min-h-[300px] group">
            <Image
              src="/images/logistics.png"
              alt="Truck"
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 to-transparent" />

            <div className="relative z-10 h-full flex flex-col justify-end p-10 text-white">
              <h3 className="text-3xl font-bold">Last-Mile Logistics</h3>

              <p className="mt-4 text-gray-200 max-w-lg leading-7">
                Efficient local delivery solutions ensuring your cargo reaches
                its destination precisely on time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
