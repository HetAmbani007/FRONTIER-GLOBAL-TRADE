export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-3 gap-10 pb-16">
        <div>
          <h2 className="text-3xl font-bold">GlobalLogix</h2>

          <p className="mt-4 text-gray-400 leading-7">
            Connecting continents with integrity and innovation.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Resources</h3>

          <ul className="space-y-3 text-gray-400">
            <li>Carrier Portal</li>
            <li>Tracking API</li>
            <li>Compliances</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Company</h3>

          <ul className="space-y-3 text-gray-400">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-gray-500 text-sm">
        © 2026 GlobalLogix Solutions
      </div>
    </footer>
  );
}
