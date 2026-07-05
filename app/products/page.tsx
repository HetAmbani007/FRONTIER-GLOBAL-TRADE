"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  ArrowLeft,
  X,
  Leaf,
  FlaskConical,
  Sprout,
  Droplets,
  PackageCheck,
  ShieldCheck,
  Globe,
  Truck,
  CheckCircle2,
} from "lucide-react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import {
  Chemical,
  chemicalCategories,
  ChemicalCategoryId,
  chemicals,
  complianceBadges,
} from "@/constants/data";
// import {
//   chemicals,
//   chemicalCategories,
//   complianceBadges,
//   type Chemical,
//   type ChemicalCategoryId,
// } from "../contacts/data.ts";

// ---------------------------------------------------------------------------
// Accent tokens — spelled out in full (not built dynamically) so Tailwind's
// class scanner picks them up. Keyed by the `accent` field in chemicals.ts.
// ---------------------------------------------------------------------------

const ACCENTS = {
  emerald: {
    icon: "text-emerald-600",
    iconBg: "bg-emerald-100",
    chip: "bg-emerald-50 text-emerald-700 border-emerald-200",
    pillActive: "bg-emerald-600 text-white border-emerald-600",
    ring: "focus:ring-emerald-500",
  },
  blue: {
    icon: "text-blue-600",
    iconBg: "bg-blue-100",
    chip: "bg-blue-50 text-blue-700 border-blue-200",
    pillActive: "bg-blue-600 text-white border-blue-600",
    ring: "focus:ring-blue-500",
  },
  amber: {
    icon: "text-amber-600",
    iconBg: "bg-amber-100",
    chip: "bg-amber-50 text-amber-700 border-amber-200",
    pillActive: "bg-amber-600 text-white border-amber-600",
    ring: "focus:ring-amber-500",
  },
  slate: {
    icon: "text-slate-600",
    iconBg: "bg-slate-200",
    chip: "bg-slate-100 text-slate-700 border-slate-300",
    pillActive: "bg-slate-700 text-white border-slate-700",
    ring: "focus:ring-slate-500",
  },
} as const;

const CATEGORY_ICONS: Record<ChemicalCategoryId, typeof Leaf> = {
  organic: Leaf,
  "food-cosmetic": FlaskConical,
  agro: Sprout,
  cleaning: Droplets,
};

type FilterId = "all" | ChemicalCategoryId;

export default function ChemicalsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterId>("all");
  const [selected, setSelected] = useState<Chemical | null>(null);
  const [quoteFor, setQuoteFor] = useState<Chemical | null>(null);

  const visibleChemicals = useMemo(() => {
    if (activeFilter === "all") return chemicals;
    return chemicals.filter((c) => c.category === activeFilter);
  }, [activeFilter]);

  return (
    <main className="overflow-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[520px] lg:h-[560px] flex items-center overflow-hidden">
        <Image
          src="/images/service.png"
          alt="Industrial & Specialty Chemicals"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-950/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 w-full py-20">
          <div className="max-w-3xl text-white">
            <p className="uppercase tracking-[4px] text-blue-300 font-medium mb-4 sm:mb-5 text-sm sm:text-base">
              Industrial &amp; Specialty Chemicals
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Export-Grade Chemicals, Built on Compliance
            </h1>

            <p className="mt-5 sm:mt-6 text-base sm:text-lg lg:text-xl text-slate-200 leading-7 sm:leading-8 max-w-2xl">
              15 products across organic extracts, food-grade and cosmetic
              ingredients, agro-based nutrients, and industrial cleaning
              compounds — REACH, ISO, and FDA compliant, with COA on every
              shipment.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#products"
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 transition px-6 sm:px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2"
              >
                Browse Products
                <ArrowRight size={18} />
              </a>
              <a
                href="/services"
                className="w-full sm:w-auto border border-white/30 hover:bg-white/10 transition px-6 sm:px-8 py-4 rounded-xl font-semibold text-center flex items-center justify-center gap-2"
              >
                <ArrowLeft size={16} />
                Back to Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* COMPLIANCE STRIP */}
      <section className="bg-slate-900 py-5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {complianceBadges.map((badge) => (
              <span
                key={badge}
                className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm font-medium"
              >
                <ShieldCheck size={14} className="text-blue-400 shrink-0" />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORY FILTER + PRODUCTS */}
      <section id="products" className="py-20 sm:py-24 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
          <div className="text-center mb-12 sm:mb-14">
            <p className="uppercase tracking-[4px] text-blue-600 font-semibold text-sm sm:text-base">
              Full Catalog
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-4">
              Chemical Products
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
              Filter by category to find the specification sheet you need, or
              request a quote directly from any product.
            </p>
          </div>

          {/* Filter pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 sm:mb-14">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition ${
                activeFilter === "all"
                  ? "bg-slate-900 text-white border-slate-900"
                  : "bg-white text-slate-600 border-slate-200 hover:border-slate-400"
              }`}
            >
              All Products
            </button>
            {chemicalCategories.map((cat) => {
              const isActive = activeFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition ${
                    isActive
                      ? ACCENTS[cat.accent].pillActive
                      : "bg-white text-slate-600 border-slate-200 hover:border-slate-400"
                  }`}
                >
                  {cat.shortLabel}
                </button>
              );
            })}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleChemicals.map((chem) => (
              <ChemicalCard
                key={chem.id}
                chemical={chem}
                onViewDetails={() => setSelected(chem)}
                onQuote={() => setQuoteFor(chem)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* TRADE INFO STRIP */}
      <section className="py-20 sm:py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 grid grid-cols-1 sm:grid-cols-3 gap-10">
          <div className="flex flex-col items-start gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
              <Globe className="text-blue-400" size={22} />
            </div>
            <h3 className="text-lg font-bold">Global Export Documentation</h3>
            <p className="text-slate-400 text-sm leading-6">
              Bill of Lading, Certificate of Origin, COA, and SDS provided in
              English plus destination language on every shipment.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
              <Truck className="text-blue-400" size={22} />
            </div>
            <h3 className="text-lg font-bold">Flexible Logistics</h3>
            <p className="text-slate-400 text-sm leading-6">
              Shipped FCL/LCL from Mundra &amp; Kandla via Maersk, MSC, CMA CGM,
              or air/road for time-critical orders.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
              <ShieldCheck className="text-blue-400" size={22} />
            </div>
            <h3 className="text-lg font-bold">Verified Compliance</h3>
            <p className="text-slate-400 text-sm leading-6">
              Every batch is third-party lab tested with REACH, ISO, and FDA
              compliance documentation available on request.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 lg:py-28 bg-slate-100">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
            Need a Custom Quote?
          </h2>
          <p className="mt-5 sm:mt-6 text-slate-600 text-base sm:text-lg leading-7 sm:leading-8">
            Tell us the product, quantity, and destination — we&apos;ll come
            back with pricing, lead time, and full documentation.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-5">
            <button
              onClick={() => setQuoteFor(chemicals[0])}
              className="w-full sm:w-auto bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-800 transition"
            >
              Request a Quote
            </button>
            <a
              href="/services"
              className="w-full sm:w-auto bg-white border border-slate-300 px-8 py-4 rounded-xl font-semibold hover:bg-slate-50 transition text-center"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>

      <Footer />

      {/* MODALS */}
      {selected && (
        <DetailModal
          chemical={selected}
          onClose={() => setSelected(null)}
          onRequestQuote={() => {
            setQuoteFor(selected);
            setSelected(null);
          }}
        />
      )}
      {quoteFor && (
        <QuoteModal chemical={quoteFor} onClose={() => setQuoteFor(null)} />
      )}
    </main>
  );
}

// ---------------------------------------------------------------------------
// Product card
// ---------------------------------------------------------------------------

function ChemicalCard({
  chemical,
  onViewDetails,
  onQuote,
}: {
  chemical: Chemical;
  onViewDetails: () => void;
  onQuote: () => void;
}) {
  const category = chemicalCategories.find((c) => c.id === chemical.category)!;
  const Icon = CATEGORY_ICONS[chemical.category];
  const accent = ACCENTS[category.accent];

  return (
    <div className="group bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
      <div className="flex items-start justify-between">
        <div
          className={`w-14 h-14 rounded-2xl flex items-center justify-center ${accent.iconBg}`}
        >
          <Icon className={accent.icon} size={24} />
        </div>
        <span
          className={`text-[11px] font-mono px-2 py-1 rounded-md border ${accent.chip}`}
        >
          HS {chemical.hsCode}
        </span>
      </div>

      <h3 className="text-xl font-bold text-slate-900 mt-6">{chemical.name}</h3>
      <p className="text-xs text-slate-500 mt-1">{chemical.chemicalName}</p>

      <p className="text-slate-600 mt-4 leading-6 text-sm flex-1">
        {chemical.description}
      </p>

      <dl className="mt-5 grid grid-cols-3 gap-2">
        {chemical.keySpecs.map((spec) => (
          <div key={spec.label} className="rounded-xl bg-slate-50 px-2 py-2">
            <dt className="text-[10px] uppercase tracking-wide text-slate-400 font-semibold">
              {spec.label}
            </dt>
            <dd className="text-xs font-bold text-slate-800 mt-0.5">
              {spec.value}
            </dd>
          </div>
        ))}
      </dl>

      <div className="flex flex-wrap gap-2 mt-5">
        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full">
          <PackageCheck size={12} /> MOQ {chemical.moq}
        </span>
        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full">
          <ShieldCheck size={12} /> {chemical.certifications.length}{" "}
          Certifications
        </span>
      </div>

      <div className="mt-6 flex gap-3">
        <button
          onClick={onViewDetails}
          className="flex-1 text-sm font-semibold text-slate-700 border border-slate-300 rounded-xl py-2.5 hover:bg-slate-50 transition"
        >
          View Details
        </button>
        <button
          onClick={onQuote}
          className="flex-1 text-sm font-semibold text-white bg-blue-600 rounded-xl py-2.5 hover:bg-blue-700 transition"
        >
          Quote
        </button>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Detail modal
// ---------------------------------------------------------------------------

function DetailModal({
  chemical,
  onClose,
  onRequestQuote,
}: {
  chemical: Chemical;
  onClose: () => void;
  onRequestQuote: () => void;
}) {
  const category = chemicalCategories.find((c) => c.id === chemical.category)!;
  const Icon = CATEGORY_ICONS[chemical.category];
  const accent = ACCENTS[category.accent];

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/60 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[88vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-slate-100 px-6 sm:px-8 py-5 flex items-start justify-between rounded-t-3xl">
          <div className="flex items-center gap-3">
            <div
              className={`w-11 h-11 rounded-xl flex items-center justify-center ${accent.iconBg}`}
            >
              <Icon className={accent.icon} size={20} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                {chemical.name}
              </h3>
              <p className="text-xs text-slate-500">{chemical.chemicalName}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 transition text-slate-500"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        <div className="px-6 sm:px-8 py-6 space-y-7">
          <p className="text-slate-600 text-sm leading-6">
            {chemical.description}
          </p>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <InfoRow label="HS Code" value={chemical.hsCode} />
            <InfoRow label="Form" value={chemical.form} />
            <InfoRow label="Appearance" value={chemical.appearance} />
            <InfoRow label="Lead Time" value={chemical.leadTime} />
            <InfoRow label="MOQ" value={chemical.moq} />
            <InfoRow label="Packaging" value={chemical.packaging} />
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-3">
              Specifications
            </h4>
            <div className="rounded-2xl border border-slate-200 overflow-hidden">
              {chemical.fullSpecs.map((spec, i) => (
                <div
                  key={spec.label}
                  className={`flex items-center justify-between px-4 py-2.5 text-sm ${
                    i % 2 === 0 ? "bg-slate-50" : "bg-white"
                  }`}
                >
                  <span className="text-slate-500">{spec.label}</span>
                  <span className="font-semibold text-slate-800 text-right">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-3">
              Applications
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {chemical.applications.map((app) => (
                <li
                  key={app}
                  className="flex items-start gap-2 text-sm text-slate-600"
                >
                  <CheckCircle2
                    size={15}
                    className={`${accent.icon} mt-0.5 shrink-0`}
                  />
                  {app}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-2">
            {chemical.certifications.map((cert) => (
              <span
                key={cert}
                className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${accent.chip}`}
              >
                {cert}
              </span>
            ))}
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-2">
              Primary Export Markets
            </h4>
            <p className="text-sm text-slate-600">
              {chemical.exportMarkets.join(", ")}
            </p>
          </div>
        </div>

        <div className="sticky bottom-0 bg-white border-t border-slate-100 px-6 sm:px-8 py-4 rounded-b-3xl">
          <button
            onClick={onRequestQuote}
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 rounded-xl"
          >
            Request Quote for This Product
          </button>
        </div>
      </div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[11px] uppercase tracking-wide text-slate-400 font-semibold">
        {label}
      </p>
      <p className="text-slate-800 font-medium mt-0.5">{value}</p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Quote modal
// ---------------------------------------------------------------------------

function QuoteModal({
  chemical,
  onClose,
}: {
  chemical: Chemical;
  onClose: () => void;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    quantity: "",
    country: "",
    name: "",
    company: "",
    email: "",
    phone: "",
    payment: "",
    leadtime: "",
    comments: "",
  });

  const update =
    (key: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // TODO: wire this up to a real endpoint, e.g.:
    // await fetch("/api/quote-request", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ product: chemical.name, ...form }),
    // });

    await new Promise((res) => setTimeout(res, 600)); // placeholder latency
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/60 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-lg w-full max-h-[88vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-slate-100 px-6 sm:px-8 py-5 flex items-start justify-between rounded-t-3xl">
          <div>
            <p className="text-xs uppercase tracking-wide text-blue-600 font-semibold">
              Quote Request
            </p>
            <h3 className="text-lg font-bold text-slate-900 mt-1">
              {chemical.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 transition text-slate-500"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        {submitted ? (
          <div className="px-6 sm:px-8 py-12 text-center">
            <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mx-auto">
              <CheckCircle2 className="text-emerald-600" size={28} />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mt-5">
              Request Sent
            </h4>
            <p className="text-slate-600 text-sm mt-2 max-w-xs mx-auto">
              Our team will follow up with pricing and lead time for{" "}
              {chemical.name} within 1–2 business days.
            </p>
            <button
              onClick={onClose}
              className="mt-6 bg-slate-900 text-white px-6 py-2.5 rounded-xl font-semibold text-sm hover:bg-slate-800 transition"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-6 sm:px-8 py-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Field label="Quantity (kg)" required>
                <input
                  required
                  type="number"
                  min={1}
                  value={form.quantity}
                  onChange={update("quantity")}
                  className="input"
                  placeholder="500"
                />
              </Field>
              <Field label="Destination Country" required>
                <input
                  required
                  value={form.country}
                  onChange={update("country")}
                  className="input"
                  placeholder="UAE"
                />
              </Field>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Field label="Full Name" required>
                <input
                  required
                  value={form.name}
                  onChange={update("name")}
                  className="input"
                  placeholder="Jane Doe"
                />
              </Field>
              <Field label="Company" required>
                <input
                  required
                  value={form.company}
                  onChange={update("company")}
                  className="input"
                  placeholder="Company Ltd."
                />
              </Field>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Field label="Email" required>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  className="input"
                  placeholder="you@company.com"
                />
              </Field>
              <Field label="Phone" required>
                <input
                  required
                  value={form.phone}
                  onChange={update("phone")}
                  className="input"
                  placeholder="+1 555 000 0000"
                />
              </Field>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Field label="Payment Method">
                <select
                  value={form.payment}
                  onChange={update("payment")}
                  className="input"
                >
                  <option value="">Select</option>
                  <option value="LC">Letter of Credit (LC)</option>
                  <option value="TT">Telegraphic Transfer (TT)</option>
                  <option value="advance">Advance Payment</option>
                </select>
              </Field>
              <Field label="Preferred Lead Time">
                <input
                  value={form.leadtime}
                  onChange={update("leadtime")}
                  className="input"
                  placeholder="e.g. 2 weeks"
                />
              </Field>
            </div>

            <Field label="Comments">
              <textarea
                value={form.comments}
                onChange={update("comments")}
                rows={3}
                className="input resize-none"
                placeholder="Anything else we should know?"
              />
            </Field>

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 transition text-white font-semibold py-3 rounded-xl mt-2"
            >
              {submitting ? "Sending…" : "Submit Quote Request"}
            </button>

            <style jsx>{`
              .input {
                width: 100%;
                border: 1px solid rgb(226 232 240);
                border-radius: 0.75rem;
                padding: 0.6rem 0.85rem;
                font-size: 0.875rem;
                color: rgb(30 41 59);
                outline: none;
                transition: border-color 0.15s ease;
              }
              .input:focus {
                border-color: rgb(37 99 235);
              }
            `}</style>
          </form>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-xs font-semibold text-slate-600 mb-1.5 block">
        {label}
        {required && <span className="text-blue-600"> *</span>}
      </span>
      {children}
    </label>
  );
}
