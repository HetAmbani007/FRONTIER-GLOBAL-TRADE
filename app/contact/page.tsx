"use client";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    goodsType: "General Cargo",
    origin: "",
    destination: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          goods_type: formData.goodsType,
          origin: formData.origin,
          destination: formData.destination,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      toast.success(
        "Thank you for your inquiry! Our team will contact you shortly.",
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        goodsType: "General Cargo",
        origin: "",
        destination: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Unable to submit your request. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className="bg-white overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full min-h-[380px] md:min-h-[420px] flex items-center overflow-hidden">
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
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white py-20">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold max-w-3xl leading-tight">
            Contact Our Experts
          </h1>

          <p className="mt-5 text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl leading-7 sm:leading-8">
            Whether you are scaling global operations or navigating your first
            shipment, our logistics specialists are ready to architect your
            supply chain success.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Side Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg border border-gray-200">
            <div className="mb-8 sm:mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                Request a Quote
              </h2>

              <p className="mt-4 text-gray-600 text-base sm:text-lg leading-7">
                Provide your shipment details and receive a customized logistics
                proposal within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 font-medium text-gray-700">
                    Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 border border-gray-300 rounded-2xl outline-none focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium text-gray-700">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@company.com"
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 border border-gray-300 rounded-2xl outline-none focus:border-blue-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 font-medium text-gray-700">
                    Company Name
                  </label>

                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    placeholder="ABC Exports Pvt Ltd"
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 border border-gray-300 rounded-2xl outline-none focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium text-gray-700">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 9876543210"
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 border border-gray-300 rounded-2xl outline-none focus:border-blue-600"
                  />
                </div>
              </div>

              {/* Goods Type
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Type of Goods
                </label>

                <select className="w-full px-4 sm:px-5 py-3 sm:py-4 border border-gray-300 rounded-2xl outline-none focus:border-blue-600 transition bg-white">
                  <option>General Cargo</option>
                  <option>Hazardous Materials</option>
                  <option>Perishables / Cold Chain</option>
                  <option>Oversized / Project Cargo</option>
                  <option>High-Value Electronics</option>
                </select>


              </div> */}

              {/* Origin + Destination */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 font-medium text-gray-700">
                    Origin City/Port
                  </label>

                  <input
                    type="text"
                    name="origin"
                    value={formData.origin}
                    onChange={handleChange}
                    required
                    placeholder="Shanghai, CN"
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 border border-gray-300 rounded-2xl outline-none focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium text-gray-700">
                    Destination City/Port
                  </label>

                  <input
                    type="text"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    required
                    placeholder="Rotterdam, NL"
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 border border-gray-300 rounded-2xl outline-none focus:border-blue-600"
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
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us more about your shipment needs..."
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 border border-gray-300 rounded-2xl outline-none focus:border-blue-600 resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-4 rounded-2xl text-lg font-semibold disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit Quote Request"}
              </button>
            </form>
          </div>

          {/* Right Side */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            {/* Contact Card */}
            <div className="bg-slate-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-200">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">
                Direct Contact
              </h3>

              <div className="space-y-8">
                {/* Phone */}
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="min-w-[56px] w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
                    <Phone className="text-blue-600" />
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-wide text-gray-500">
                      Phone Support
                    </p>

                    <h4 className="text-lg sm:text-xl font-bold text-slate-900 mt-1 break-words">
                      +91 9723278451
                    </h4>

                    <p className="text-gray-600 mt-1 text-sm sm:text-base">
                      Mon - Fri, 10:00 AM - 7:00 PM Operations
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="min-w-[56px] w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
                    <Mail className="text-blue-600" />
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-wide text-gray-500">
                      Email Inquiries
                    </p>

                    <h4 className="text-base sm:text-lg font-bold text-slate-900 mt-1 break-all">
                      srfrontierglobaltrade@gmail.com
                    </h4>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 sm:gap-5">
                  <a
                    href="https://share.google/ImuL2eiUKPdLiJs01"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-w-[56px] w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center hover:bg-blue-200 transition cursor-pointer"
                  >
                    <MapPin className="text-blue-600" />
                  </a>

                  <div>
                    <p className="text-sm uppercase tracking-wide text-gray-500">
                      Frontier Global Trade HQ
                    </p>

                    <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-7 sm:leading-8 mt-1">
                      12,1224 Zion Z1,
                      <br />
                      Sindhu bhavan road,nr.Maple Country Road,Bodakdev,
                      Ahmedabad-380058
                      <br />
                      Gujarat, India
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
          </div>
        </div>
      </section>

      {/* Trusted Brands */}
      <section className="bg-slate-950 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-gray-400 mb-10 sm:mb-12">
            Trusted by Industry Leaders
          </p>

          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 lg:gap-12 text-white/40">
            <span className="text-lg sm:text-2xl font-bold italic">
              SHIPPING CO
            </span>

            <span className="text-lg sm:text-2xl font-bold">MARITIME-X</span>

            <span className="text-lg sm:text-2xl font-bold border border-white/30 px-4 py-2 rounded-lg">
              AUTO-LINK
            </span>

            <span className="text-lg sm:text-2xl font-bold italic">
              TECH_FLIGHT
            </span>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
