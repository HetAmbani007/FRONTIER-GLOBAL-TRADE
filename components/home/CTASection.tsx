import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-28">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-10 h-full">
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="border-r border-white" />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
          Ready to Scale Your Global Operations?
        </h2>

        <p className="mt-8 text-xl text-gray-300 leading-8 max-w-3xl mx-auto">
          Get a customized logistics assessment and discover how SR Global Trade
          can optimize your international supply chain today.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">
          <Link
            href="/contact"
            className="border border-white/30 hover:bg-white/10 transition px-10 py-5 rounded-2xl text-white font-semibold inline-block"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
