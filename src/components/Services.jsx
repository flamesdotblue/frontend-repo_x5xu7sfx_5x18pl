import { motion } from 'framer-motion';
import { Truck, Package, Globe, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: Truck,
    title: 'Express Delivery',
    desc: 'Same-day and next-day options for time-critical shipments with live ETAs.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Package,
    title: 'E‑commerce Fulfillment',
    desc: 'Warehousing, pick & pack, and nationwide last-mile distribution at scale.',
    gradient: 'from-violet-500 to-fuchsia-500',
  },
  {
    icon: Globe,
    title: 'International Freight',
    desc: 'Door-to-door air, sea, and cross-border logistics with customs support.',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Handling',
    desc: 'Insured cargo, temperature-control options, and tamper-evident sealing.',
    gradient: 'from-rose-500 to-orange-500',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-blue-500/10 blur-2xl" />
        <div className="absolute right-10 bottom-10 h-56 w-56 rounded-full bg-cyan-400/10 blur-2xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Solutions built for scale</h2>
          <p className="mt-3 text-lg text-gray-600">Every shipment matters. We combine automation, visibility, and human care to keep your supply chain moving.</p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-lg"
            >
              <div className={`inline-flex items-center justify-center rounded-xl bg-gradient-to-br ${s.gradient} p-3 text-white shadow-md`}>
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
              <div className={`pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${s.gradient} opacity-10 blur-2xl transition duration-500 group-hover:opacity-20`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
