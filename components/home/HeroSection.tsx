import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-[600px] sm:h-[650px] lg:h-[700px] flex items-center overflow-hidden">
      <Image
        src="/images/ship.jpg"
        alt="Cargo Ship"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/50 to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
            Your Gateway to Global Markets
          </h1>

          <p className="mt-5 sm:mt-6 text-base sm:text-lg text-gray-200 leading-7 sm:leading-8">
            Expert logistics solutions for complex international trade. We
            streamline your supply chain with precision and reliability.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4">
            <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 transition px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base">
              Request a Quote
            </button>

            <button className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base">
              View Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
