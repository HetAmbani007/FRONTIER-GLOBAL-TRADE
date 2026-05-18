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
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
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
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            Pioneering Global Commerce
          </h1>

          <p className="mt-6 text-lg lg:text-xl max-w-3xl mx-auto text-gray-300 leading-8">
            Bridging continents and cultures through innovative logistics,
            reliable infrastructure, and an unwavering commitment to excellence.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 -mt-36 relative z-20">
            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-3xl shadow-lg border-b-4 border-blue-600 hover:-translate-y-2 transition duration-300"
                >
                  <Icon className="w-12 h-12 text-blue-600 mb-4" />

                  <h3 className="text-4xl font-bold text-slate-900">
                    {item.value}
                  </h3>

                  <p className="mt-2 text-gray-500 font-medium">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story + Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Story */}
            <div className="lg:col-span-7 bg-gray-50 border border-gray-200 rounded-3xl p-10">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Our Story
              </h2>

              <p className="text-gray-600 leading-8 text-lg">
                Founded in 1999, GlobalLogix started as a regional freight
                forwarding firm with a single warehouse. Today, we stand as a
                global leader in supply chain management, driving trade through
                sophisticated technology and human ingenuity.
              </p>

              <p className="text-gray-600 leading-8 text-lg mt-6">
                Our journey has been defined by our ability to adapt to a
                changing world, embracing automation while never losing the
                personal touch that our clients value most.
              </p>
            </div>

            {/* Mission */}
            <div className="lg:col-span-5 bg-slate-950 rounded-3xl p-10 text-white flex flex-col justify-center">
              <BadgeCheck className="w-16 h-16 text-blue-400 mb-6" />

              <h2 className="text-4xl font-bold mb-4">Our Mission</h2>

              <p className="text-gray-300 text-lg leading-8">
                To empower global businesses by providing seamless, secure, and
                sustainable logistics solutions that transcend borders.
              </p>
            </div>

            {/* Team Image */}
            <div className="lg:col-span-12 relative h-[500px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiNRqvtGQ_tZZ4QCmTwkMUmAn-POrzh26uSiReVhMicBnOE1AFbPy00w9-B_7arUatLGZ4mb3Mm7S7bdSAQcZTbSbcURUqlbmnsl7D6eGDuVRy3bBcWowL-ab90S1xrTWIiTLvZlg57uCnwMvgSZNSw8XLEIzHdhSPXNKlGmqK9qj5TpW2bNWAS-pxbt8QCEca1_RbKq757drkyU1OOHfgR9sbRRkmBTM_PRayx4q_7i2OrcmrCQh20ikNxzCLrBlWf06eBwv1Tps"
                alt="Team"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent flex items-end">
                <div className="p-10 text-white">
                  <h3 className="text-3xl font-bold">
                    The Minds Behind the Movement
                  </h3>

                  <p className="mt-3 text-gray-300 text-lg">
                    Over 2,500 professionals dedicated to your success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-900">
              Global Presence
            </h2>

            <p className="mt-5 text-lg text-gray-600">
              Strategic hubs located in every major trade corridor across the
              globe.
            </p>
          </div>

          {/* Map Container */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-lg p-5">
            <div className="relative h-[600px] overflow-hidden rounded-2xl">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSTFKuYLxkDHf9QOUhDvGyG01ZtR9m7CvkuZVxawI6ly9j8Au_pMTGEFiI-xFHIX8aqvB8VRIAqo-l0xNpnLPsrtYuqxmplTT-H8qnz6F-XKUJVnLLhIrkDPsC8D_P8H4MDLNOIHet6zDrvNpkx3VnvSLLZzdV5WYnDGRQkQ_HFldBu3raYuD6bajdr9QVkA_gV1C9y2xn9xiqNxKXVY47sPxZAWo2Wql1TKV6hOCEIZL5T0eHgwbiuUHa5Q1dp6VobadthCZzgfY"
                alt="World Map"
                fill
                className="object-cover opacity-90"
              />

              {/* Hub Card 1 */}
              <div className="absolute top-10 left-10 bg-white px-5 py-3 rounded-xl shadow-lg border flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-blue-600" />

                <p className="font-medium text-slate-900">
                  North American Hub (Chicago)
                </p>
              </div>

              {/* Hub Card 2 */}
              <div className="absolute bottom-16 right-10 bg-white px-5 py-3 rounded-xl shadow-lg border flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-blue-600" />

                <p className="font-medium text-slate-900">
                  Asia-Pacific Center (Singapore)
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
