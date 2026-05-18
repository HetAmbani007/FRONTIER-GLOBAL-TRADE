import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export default function ContactPage() {
  return (
    <main className="bg-white overflow-hidden">
      <Navbar />
      {/* Hero Section */}
      <section className="relative w-full h-[420px] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCck8yPeic7u8B1TcYEO3CONSzBCO_fXvmIzloxoboMl7AWG3MFDbvlSLCU-g3CRBMgPUcLVT8Ok2tIDVeZuCI7rfPlnvxkx6xqDhfCzFehQWvXUuQ07c5iSrgirywyNjpXk5jHpukKpXruL3VQG4jwXsHdruHc48nk6CFH4O_tBW-JkIYw0X1Ej-cMxhQRcA7Y_vZvmnziOQ4nLXG71IwOpnHN1JZau9e1QdxIXCpiED8Co_qlcPqGTiKWhbBzPCHi5hX7NxHksQ4"
            alt="Contact Hero"
            fill
            priority
            className="object-cover opacity-40"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-white">
          <h1 className="text-5xl lg:text-7xl font-bold max-w-3xl leading-tight">
            Contact Our Experts
          </h1>

          <p className="mt-6 text-lg lg:text-xl text-gray-300 max-w-2xl leading-8">
            Whether you are scaling global operations or navigating your first
            shipment, our logistics specialists are ready to architect your
            supply chain success.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-10 shadow-lg border border-gray-200">
            <div className="mb-10">
              <h2 className="text-4xl font-bold text-slate-900">
                Request a Quote
              </h2>

              <p className="mt-4 text-gray-600 text-lg leading-7">
                Provide your shipment details and receive a customized logistics
                proposal within 24 hours.
              </p>
            </div>

            <form className="space-y-6">
              {/* Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 font-medium text-gray-700">
                    Name
                  </label>

                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-5 py-4 border border-gray-300 rounded-2xl outline-none focus:border-blue-600 transition"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium text-gray-700">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="john@company.com"
                    className="w-full px-5 py-4 border border-gray-300 rounded-2xl outline-none focus:border-blue-600 transition"
                  />
                </div>
              </div>

              {/* Goods Type */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Type of Goods
                </label>

                <select className="w-full px-5 py-4 border border-gray-300 rounded-2xl outline-none focus:border-blue-600 transition bg-white">
                  <option>General Cargo</option>
                  <option>Hazardous Materials</option>
                  <option>Perishables / Cold Chain</option>
                  <option>Oversized / Project Cargo</option>
                  <option>High-Value Electronics</option>
                </select>
              </div>

              {/* Origin + Destination */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 font-medium text-gray-700">
                    Origin City/Port
                  </label>

                  <input
                    type="text"
                    placeholder="Shanghai, CN"
                    className="w-full px-5 py-4 border border-gray-300 rounded-2xl outline-none focus:border-blue-600 transition"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium text-gray-700">
                    Destination City/Port
                  </label>

                  <input
                    type="text"
                    placeholder="Rotterdam, NL"
                    className="w-full px-5 py-4 border border-gray-300 rounded-2xl outline-none focus:border-blue-600 transition"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Message / Special Requirements
                </label>

                <textarea
                  rows={5}
                  placeholder="Tell us more about your shipment needs..."
                  className="w-full px-5 py-4 border border-gray-300 rounded-2xl outline-none focus:border-blue-600 transition resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-4 rounded-2xl text-lg font-semibold active:scale-[0.98]"
              >
                Submit Quote Request
              </button>
            </form>
          </div>

          {/* Right Side */}
          <div className="lg:col-span-5 space-y-8">
            {/* Contact Card */}
            <div className="bg-slate-50 rounded-3xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-3xl font-bold text-slate-900 mb-8">
                Direct Contact
              </h3>

              <div className="space-y-8">
                {/* Phone */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
                    <Phone className="text-blue-600" />
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-wide text-gray-500">
                      Phone Support
                    </p>

                    <h4 className="text-xl font-bold text-slate-900 mt-1">
                      +1 (800) LOGIX-GLOBAL
                    </h4>

                    <p className="text-gray-600 mt-1">
                      Mon - Fri, 24/5 Operations
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
                    <Mail className="text-blue-600" />
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-wide text-gray-500">
                      Email Inquiries
                    </p>

                    <h4 className="text-lg font-bold text-slate-900 mt-1">
                      solutions@globallogix.com
                    </h4>

                    <p className="text-gray-600 mt-1">info@globallogix.com</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
                    <MapPin className="text-blue-600" />
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-wide text-gray-500">
                      Global Headquarters
                    </p>

                    <h4 className="text-lg font-bold text-slate-900 leading-8 mt-1">
                      One Logistics Plaza,
                      <br />
                      Suite 400
                      <br />
                      Singapore, 018981
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="relative h-[320px] rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0hGgDsAeXdGcR9lJtyse4zfDGovDmFK-IJSb0ZPaum6o5RGYM3iTxWnCKa3hbjMvtLAct5kblHB2ED1wW-Zmg3Ovu6B2_FXc_xzqq9XNMcNhUFAEM-EQQaw1CLAj4EhzH50VYh8mKZwRL1f0Ny1x46WBiCb5XQM6Nb-K5NV6lIlnDtc5GwcXtDVE9Is7kiKDXTSqEoJlMVDdNHgs3VGLEqxKzla7O5KANhFcj0iE49p9TySABDP3kPGT4zB-EbmBddOClJf9cHYM"
                alt="Map"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-slate-950/10" />

              {/* Map Button */}
              <div className="absolute bottom-5 left-5 bg-white px-5 py-3 rounded-full shadow-lg flex items-center gap-3 border">
                <MapPin className="w-5 h-5 text-blue-600 fill-blue-600" />

                <span className="font-medium text-slate-900">
                  View in Google Maps
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Brands */}
      <section className="bg-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="uppercase tracking-[0.3em] text-sm text-gray-400 mb-12">
            Trusted by Industry Leaders
          </p>

          <div className="flex flex-wrap justify-center items-center gap-12 text-white/40">
            <span className="text-2xl font-bold italic">SHIPPING CO</span>

            <span className="text-2xl font-bold">MARITIME-X</span>

            <span className="text-2xl font-bold border border-white/30 px-4 py-2 rounded-lg">
              AUTO-LINK
            </span>

            <span className="text-2xl font-bold italic">TECH_FLIGHT</span>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
