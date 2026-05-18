import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-[700px] flex items-center">
      <Image
        src="/images/ship.jpg"
        alt="Cargo Ship"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 to-transparent" />

      <div className="relative z-10 max-w-7xl lg:px-8">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            Your Gateway to Global Markets
          </h1>

          <p className="mt-6 text-lg text-gray-200 leading-8">
            Expert logistics solutions for complex international trade. We
            streamline your supply chain with precision and reliability.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-xl font-semibold">
              Request a Quote
            </button>

            <button className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition px-8 py-4 rounded-xl font-semibold">
              View Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
