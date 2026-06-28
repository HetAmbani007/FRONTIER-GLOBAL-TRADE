import Image from "next/image";
import { Monitor, ShieldCheck, HeadphonesIcon, BadgeCheck } from "lucide-react";
import { FaBus } from "react-icons/fa";

const features = [
  {
    icon: ShieldCheck,
    title: "Full Compliance",
    description:
      "Expertise in international regulatory standards ensures cargo never stalls.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description:
      "Personalized account management with logistics professionals.",
  },
  {
    icon: FaBus,
    title: "On-Time Delivery",
    description:
      "Reliable logistics planning ensures your shipments arrive safely and on schedule.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <h2 className="text-5xl font-bold text-slate-900 leading-tight">
              Why Industry Leaders Trust SR Global Trade
            </h2>

            <p className="mt-8 text-lg text-gray-600 leading-8">
              We don&apos;t just move cargo; we manage the lifecycle of your
              global trade with technology and transparency.
            </p>

            <div className="mt-12 space-y-8">
              {features.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex gap-5">
                    <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-slate-900">
                        {item.title}
                      </h4>

                      <p className="mt-2 text-gray-600 leading-7">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="relative rounded-[32px] overflow-hidden shadow-2xl">
              <Image
                src="/images/govt-approved.png"
                alt="Manager"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-2xl p-5 shadow-lg">
                <div className="flex items-center gap-3">
                  <BadgeCheck className="text-blue-600 w-6 h-6" />

                  <span className="font-semibold text-slate-900">
                    Government-Approved Logistics Partner
                  </span>
                </div>
              </div>
            </div>

            {/* Background Circle */}
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-blue-200 rounded-full -z-10 blur-2xl opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
}
