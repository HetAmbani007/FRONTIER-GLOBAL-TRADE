import Image from "next/image";
import { Globe, Truck, Users, History, BadgeCheck } from "lucide-react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const stats = [
  {
    icon: Globe,
    value: "50+",
    label: "Countries Reached",
  },
  {
    icon: Truck,
    value: "10k+",
    label: "Shipments Monthly",
  },
  {
    icon: Users,
    value: "2.5k",
    label: "Logistics Experts",
  },
  {
    icon: History,
    value: "25",
    label: "Years of Experience",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[500px] sm:min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiNRqvtGQ_tZZ4QCmTwkMUmAn-POrzh26uSiReVhMicBnOE1AFbPy00w9-B_7arUatLGZ4mb3Mm7S7bdSAQcZTbSbcURUqlbmnsl7D6eGDuVRy3bBcWowL-ab90S1xrTWIiTLvZlg57uCnwMvgSZNSw8XLEIzHdhSPXNKlGmqK9qj5TpW2bNWAS-pxbt8QCEca1_RbKq757drkyU1OOHfgR9sbRRkmBTM_PRayx4q_7i2OrcmrCQh20ikNxzCLrBlWf06eBwv1Tps"
            alt="Global Commerce"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-slate-950/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 text-center text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
            Pioneering Global Commerce
          </h1>

          <p className="mt-5 sm:mt-6 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto text-gray-300 leading-7 sm:leading-8">
            Bridging continents and cultures through innovative logistics,
            reliable infrastructure, and an unwavering commitment to excellence.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:-mt-36 relative z-20">
            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg border-b-4 border-blue-600 hover:-translate-y-2 transition duration-300"
                >
                  <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mb-4" />

                  <h3 className="text-3xl sm:text-4xl font-bold text-slate-900">
                    {item.value}
                  </h3>

                  <p className="mt-2 text-gray-500 font-medium text-sm sm:text-base">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* Story + Mission */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
            {/* Story */}
            <div className="lg:col-span-7 bg-gray-50 border border-gray-200 rounded-3xl p-6 sm:p-8 lg:p-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-5 sm:mb-6">
                Our Story
              </h2>

              <p className="text-gray-600 leading-7 sm:leading-8 text-base sm:text-lg">
                Founded in 1999, Frontier Global Trade started as a regional
                freight forwarding firm with a single warehouse. Today, we stand
                as a global leader in supply chain management, driving trade
                through sophisticated technology and human ingenuity.
              </p>

              <p className="text-gray-600 leading-7 sm:leading-8 text-base sm:text-lg mt-5 sm:mt-6">
                Our journey has been defined by our ability to adapt to a
                changing world, embracing automation while never losing the
                personal touch that our clients value most.
              </p>
            </div>

            {/* Mission */}
            <div className="lg:col-span-5 bg-slate-950 rounded-3xl p-6 sm:p-8 lg:p-10 text-white flex flex-col justify-center">
              <BadgeCheck className="w-14 h-14 sm:w-16 sm:h-16 text-blue-400 mb-5 sm:mb-6" />

              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Our Mission
              </h2>

              <p className="text-gray-300 text-base sm:text-lg leading-7 sm:leading-8">
                To empower global businesses by providing seamless, secure, and
                sustainable logistics solutions that transcend borders.
              </p>
            </div>

            {/* Team Image */}
            <div className="lg:col-span-12 relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiNRqvtGQ_tZZ4QCmTwkMUmAn-POrzh26uSiReVhMicBnOE1AFbPy00w9-B_7arUatLGZ4mb3Mm7S7bdSAQcZTbSbcURUqlbmnsl7D6eGDuVRy3bBcWowL-ab90S1xrTWIiTLvZlg57uCnwMvgSZNSw8XLEIzHdhSPXNKlGmqK9qj5TpW2bNWAS-pxbt8QCEca1_RbKq757drkyU1OOHfgR9sbRRkmBTM_PRayx4q_7i2OrcmrCQh20ikNxzCLrBlWf06eBwv1Tps"
                alt="Team"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent flex items-end">
                <div className="p-6 sm:p-8 lg:p-10 text-white">
                  <h3 className="text-2xl sm:text-3xl font-bold">
                    The Minds Behind the Movement
                  </h3>

                  <p className="mt-3 text-gray-300 text-sm sm:text-lg">
                    Over 2,500 professionals dedicated to your success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-16 sm:py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
              Meet Our Leadership
            </h2>

            <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Driven by experience, integrity, and a commitment to global trade
              excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Founder */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-200">
              <div className="relative h-[450px]">
                <Image
                  src="/images/founder.jpg"
                  alt="Founder"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900">
                  John Anderson
                </h3>

                <p className="text-blue-600 font-medium mt-2">
                  Founder & Managing Director
                </p>

                <p className="mt-4 text-gray-600 leading-7">
                  With over 20 years of experience in international trade and
                  logistics, John has successfully built a global network that
                  connects businesses across continents.
                </p>
              </div>
            </div>

            {/* CEO */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-200">
              <div className="relative h-[450px]">
                <Image
                  src="/images/ceo.jpg"
                  alt="CEO"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900">
                  Sarah Williams
                </h3>

                <p className="text-blue-600 font-medium mt-2">
                  Chief Executive Officer
                </p>

                <p className="mt-4 text-gray-600 leading-7">
                  Sarah leads Frontier Global Trade with a vision focused on
                  innovation, sustainable logistics solutions, and
                  customer-centric global operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
