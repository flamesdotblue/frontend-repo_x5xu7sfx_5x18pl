import { motion } from 'framer-motion';
import { Truck, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative mt-20 border-t border-gray-100 bg-white/80">
      <div className="pointer-events-none absolute -top-10 left-10 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl" />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <a href="#" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg">
                <Truck className="h-5 w-5" />
              </div>
              <span className="text-lg font-semibold tracking-tight text-gray-900">SwiftCargo</span>
            </a>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-gray-600">Premium courier and logistics across the globe. We deliver certainty with speed, visibility, and care.</p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold tracking-wide text-gray-900">Contact</h4>
            <div className="flex items-center gap-3 text-gray-600"><Mail className="h-4 w-4" /> support@swiftcargo.io</div>
            <div className="flex items-center gap-3 text-gray-600"><Phone className="h-4 w-4" /> +1 (555) 123-4567</div>
            <div className="flex items-center gap-3 text-gray-600"><MapPin className="h-4 w-4" /> 100 Logistics Ave, Suite 500</div>
          </div>

          <motion.form
            id="quote"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-gray-100 bg-white p-4 shadow-md sm:p-6"
          >
            <h4 className="text-base font-semibold text-gray-900">Request a quick quote</h4>
            <p className="mt-1 text-sm text-gray-600">Tell us what you’re shipping and where it’s going. We’ll reach out fast.</p>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <input className="rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2" placeholder="Name" />
              <input className="rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2" placeholder="Email" type="email" />
              <input className="sm:col-span-2 rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2" placeholder="From (City, Country)" />
              <input className="sm:col-span-2 rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2" placeholder="To (City, Country)" />
              <textarea className="sm:col-span-2 h-24 rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2" placeholder="Describe your shipment" />
            </div>
            <button className="mt-4 w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-sm font-medium text-white shadow-md transition hover:shadow-lg">Send request</button>
          </motion.form>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-6 sm:flex-row">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} SwiftCargo. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-700">Privacy</a>
            <a href="#" className="hover:text-gray-700">Terms</a>
            <a href="#" className="hover:text-gray-700">Service Status</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
