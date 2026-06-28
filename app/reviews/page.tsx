"use client";

import Image from "next/image";
import { Star, Quote, Verified, BarChart3 } from "lucide-react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const testimonials = [
  {
    name: "Lavkesh Brahmbhatt",
    role: "Director of Operations, EuroTrade Ltd.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA8Ds9tD0SI-qW_74_I34Y-bGMAo1w2Z9BB6B1L7xUsXc8FbIWITPH-Edk-FUV3YQKFVSAI2SCv2JAzaxBiodMcjZCS7A-Aq-tzcmmb7oyKcJVXWWAIQiKdoXTv3K2Q-CHYMYzXeb0N4mWnSbzHxhHv7wdCdlyNh44s9tdYN_Nga0dx3JVlVSHOEbtrjW1Po9O-6So7TVJ0gQevXzj54ae1xwmjf8kceM_aGqc2DijlVL9ox7sCUzWL7HLa9QI4WnkY5NQF_lKA-dk",
    review:
      "SR Global Trade transformed our supply chain transparency. Their real-time tracking and professional handling of customs cleared our bottlenecks in weeks.",
  },
  {
    name: "Li Wei",
    role: "Supply Chain Manager, Horizon Tech",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAzSrtZ22uYRrxuJ8wOHJnc6pCKv6osQVkZzi9kPUFFvfS2VHCuekGHmqvELvK4wlYsB93oAjRHe6hOlZQuqnHXnuDIqNta0dlfIjo1E6LQg09CHsbTJtbg1PXfMLNioQbRQLWDVfQVRY70docoayhPIT__PF5QBXxUkY9qaTjtL04I55SVoc3c1bItBvTk2zxQRxt4SBU6Yaxi4HXRiA0ijAjhDyriXagdT4VA8Nzkr7bHL7Exvc6pEipqcIkPagKy09hyuUuAmm0",
    review:
      "The level of detail in their reporting and the seamless integration with our ERP systems has made SR Global Trade indispensable.",
  },
  {
    name: "Sarah Jenkins",
    role: "Head of Logistics, Global Retailers Co.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCa5UvcyZAO_RhDobYzg6GvGOx6LtkmlVkl-h2AG_tV7xFs_SjiOVBb7ADWbcSxsOXbhDJLa-_oQyq6RjGiRbY6jrYl3BunqnUZlnZVYsfWqqgdyKctyAvffGUY9hrFFkQryOIyweEFvYxhKWs5DdJKuoAP6R6Vcquda6bwnClYfH_HOzMZ2bBRCQlOiwlG9GksHIaIhU5Pogfu2ELnnYIPLHydRG1WJLkTeC6W-32bC98jhnH-R-vAXc3s64seUz1R6eqU1L0JIUM",
    review:
      "Rapid response times and expert navigation of complex maritime laws. They manage risks and ensure business continuity.",
  },
  {
    name: "Loy Doe",
    role: "Head of Logistics, Global Retailers Co.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCa5UvcyZAO_RhDobYzg6GvGOx6LtkmlVkl-h2AG_tV7xFs_SjiOVBb7ADWbcSxsOXbhDJLa-_oQyq6RjGiRbY6jrYl3BunqnUZlnZVYsfWqqgdyKctyAvffGUY9hrFFkQryOIyweEFvYxhKWs5DdJKuoAP6R6Vcquda6bwnClYfH_HOzMZ2bBRCQlOiwlG9GksHIaIhU5Pogfu2ELnnYIPLHydRG1WJLkTeC6W-32bC98jhnH-R-vAXc3s64seUz1R6eqU1L0JIUM",
    review:
      "Rapid response times and expert navigation of complex maritime laws. They manage risks and ensure business continuity.",
  },
];

const stats = [
  {
    value: "99.8%",
    label: "On-Time Delivery",
  },
  {
    value: "30+",
    label: "Countries Served",
  },
  {
    value: "200+",
    label: "Trusted Partners",
  },
  {
    value: "24/7",
    label: "Global Monitoring",
  },
];

export default function ReviewsPage() {
  return (
    <main className="bg-white overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[380px] sm:h-[450px] lg:h-[420px] overflow-hidden flex items-center bg-slate-950">
        <Image
          src="/images/review-image.png"
          alt="Cargo Ship"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/60" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-white w-full">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
              What Our Partners Say
            </h1>

            <p className="mt-5 text-base sm:text-lg lg:text-xl text-gray-300 leading-7 sm:leading-8">
              Building the future of global trade through reliability,
              precision, and unwavering commitment.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Testimonials */}
            <div className="space-y-8">
              {testimonials.slice(0, 2).map((item) => (
                <div
                  key={item.name}
                  className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm hover:shadow-lg transition"
                >
                  <div className="flex gap-1 text-yellow-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-500" />
                    ))}
                  </div>

                  <p className="mt-6 text-gray-600 italic leading-7 sm:leading-8 text-sm sm:text-base">
                    "{item.review}"
                  </p>

                  <div className="mt-8 pt-6 border-t flex items-center gap-4">
                    {/* <Image
                      src={item.image}
                      alt={item.name}
                      width={52}
                      height={52}
                      className="rounded-full object-cover"
                    /> */}

                    <div>
                      <h4 className="font-semibold text-slate-900 text-sm sm:text-base">
                        {item.name}
                      </h4>

                      <p className="text-xs sm:text-sm text-gray-500">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Center Featured Card */}
            <div className="bg-slate-950 rounded-[28px] sm:rounded-[32px] p-7 sm:p-10 text-white flex flex-col justify-between">
              <Quote className="w-12 h-12 sm:w-16 sm:h-16 text-blue-400" />

              <div className="mt-8">
                <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
                  "Unrivaled Authority in Trade"
                </h2>

                <p className="mt-6 sm:mt-8 text-gray-300 leading-7 sm:leading-8 text-base sm:text-lg">
                  In thirty years of international manufacturing, I have never
                  seen a logistics partner handle high-stakes cargo with such
                  mathematical precision.
                </p>
              </div>

              <div className="mt-10 sm:mt-12 flex items-center gap-4">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBr2PQU8bzSrdgVU_HXVB5y7oU_w9Kr6PXv2V30afLWlrefSfjEGkPxgAJW9HXymZCT3m1Pqd4F9bxjhns41ewk2y7GgPf0mA-bVyqx7hkiZ2un-xOs0IOQC8V5WHo965aOXLVTEYqtPRJQXHnJgo-btOjBNCdFULWYr5KCvHT536koATHBOevf8TMw21PW96I7g56gLYkilfVDFYiPYMzU2miRerXT5gf0b5XQwxFfOqd4uiTTmUb0TEpdhFzLdzwSMGoDIxCg_SI"
                  alt="Helena"
                  width={60}
                  height={60}
                  className="rounded-full border-2 border-blue-400"
                />

                <div>
                  <h4 className="font-bold text-sm sm:text-base">
                    Helena Vance
                  </h4>

                  <p className="text-[11px] sm:text-sm text-gray-400 uppercase tracking-wider">
                    CEO, Vance-Carlyle Manufacturing
                  </p>
                </div>
              </div>
            </div>

            {/* Right Testimonials */}
            <div className="space-y-8">
              {testimonials.slice(2, 4).map((item) => (
                <div
                  key={item.name}
                  className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm hover:shadow-lg transition"
                >
                  <div className="flex gap-1 text-yellow-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-500" />
                    ))}
                  </div>

                  <p className="mt-6 text-gray-600 italic leading-7 sm:leading-8 text-sm sm:text-base">
                    "{item.review}"
                  </p>

                  <div className="mt-8 pt-6 border-t flex items-center gap-4">
                    {/* <Image
                      src={item.image}
                      alt={item.name}
                      width={52}
                      height={52}
                      className="rounded-full object-cover"
                    /> */}

                    <div>
                      <h4 className="font-semibold text-slate-900 text-sm sm:text-base">
                        {item.name}
                      </h4>

                      <p className="text-xs sm:text-sm text-gray-500">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Review Form */}
      {/* <section className="py-16 sm:py-20 lg:py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
     
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
                Share Your Experience
              </h2>

              <p className="mt-6 sm:mt-8 text-base sm:text-lg text-gray-600 leading-7 sm:leading-8">
                We value the feedback of our global partners. Your insights help
                us refine our logistics excellence.
              </p>

              <div className="mt-8 sm:mt-10 space-y-5">
                <div className="flex items-center gap-4 bg-white p-4 sm:p-5 rounded-2xl border">
                  <Verified className="text-blue-600 shrink-0" />

                  <span className="font-medium text-sm sm:text-base">
                    Verified Partnership Reviews Only
                  </span>
                </div>

                <div className="flex items-center gap-4 bg-white p-4 sm:p-5 rounded-2xl border">
                  <BarChart3 className="text-blue-600 shrink-0" />

                  <span className="font-medium text-sm sm:text-base">
                    Direct Feedback to Executive Team
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 lg:p-10 shadow-xl">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block mb-2 font-medium text-sm sm:text-base">
                      Full Name
                    </label>

                    <input
                      type="text"
                      placeholder="Jane Doe"
                      className="w-full border rounded-xl px-4 py-3 outline-none focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-medium text-sm sm:text-base">
                      Company Name
                    </label>

                    <input
                      type="text"
                      placeholder="Global Trade Inc."
                      className="w-full border rounded-xl px-4 py-3 outline-none focus:border-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-3 font-medium text-sm sm:text-base">
                    Rating
                  </label>

                  <div className="flex gap-2 text-yellow-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-6 h-6 sm:w-7 sm:h-7 cursor-pointer fill-yellow-500"
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block mb-2 font-medium text-sm sm:text-base">
                    Your Testimonial
                  </label>

                  <textarea
                    rows={5}
                    placeholder="Share your experience..."
                    className="w-full border rounded-xl px-4 py-3 outline-none focus:border-blue-600 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-slate-950 hover:bg-slate-800 transition text-white py-4 rounded-2xl font-semibold"
                >
                  Submit Official Review
                </button>
              </form>
            </div>
          </div>
        </div>
      </section> */}

      {/* Stats */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            {stats.map((item) => (
              <div key={item.label}>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
                  {item.value}
                </h3>

                <p className="mt-3 sm:mt-4 text-[11px] sm:text-sm tracking-widest uppercase text-gray-500 font-semibold">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
