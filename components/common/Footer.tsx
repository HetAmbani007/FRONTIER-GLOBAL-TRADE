import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold">Frontier Global Trade</h2>

            <p className="mt-4 text-slate-400 leading-7">
              Trusted import-export and logistics solutions connecting
              businesses across global markets with efficiency, compliance, and
              reliability.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Quick Links</h3>

            <ul className="space-y-3 text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/services" className="hover:text-white transition">
                  Services
                </Link>
              </li>

              <li>
                <Link href="/reviews" className="hover:text-white transition">
                  Reviews
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Services</h3>

            <ul className="space-y-3 text-slate-400">
              <li>Import Services</li>
              <li>Export Services</li>
              <li>Custom Clearance</li>
              <li>Global Logistics</li>
              <li>Supply Chain Solutions</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Contact Us</h3>

            <div className="space-y-4 text-slate-400">
              <div className="flex gap-3">
                <a
                  href="https://share.google/ImuL2eiUKPdLiJs01"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                </a>

                <p>
                  Ahmedabad, Gujarat,
                  <br />
                  India
                </p>
              </div>

              <div className="flex gap-3">
                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <p>srfrontierglobaltrade@gmail.com</p>
              </div>

              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <p>+91 9723278451</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition"
              >
                <FaXTwitter size={18} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition"
              >
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Frontier Global Trade. All Rights
            Reserved.
          </p>

          <div className="flex gap-6 text-sm text-slate-500">
            <Link href="#" className="hover:text-white transition">
              Privacy Policy
            </Link>

            <Link href="#" className="hover:text-white transition">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
