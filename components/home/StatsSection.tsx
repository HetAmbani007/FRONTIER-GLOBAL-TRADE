const stats = [
  {
    value: "30",
    label: "Countries Served",
  },
  {
    value: "100+",
    label: "Global Agents",
  },
  {
    value: "1M+",
    label: "Tons Moved",
  },
  {
    value: "99.9%",
    label: "On-time Delivery",
  },
];

export default function StatsSection() {
  return (
    <section className="-mt-20 relative z-20 px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg grid grid-cols-2 md:grid-cols-4 overflow-hidden">
        {stats.map((item) => (
          <div
            key={item.label}
            className="p-8 text-center border-r last:border-r-0 border-gray-200"
          >
            <h3 className="text-4xl font-bold text-slate-900">{item.value}</h3>

            <p className="mt-2 text-gray-500 text-sm">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
