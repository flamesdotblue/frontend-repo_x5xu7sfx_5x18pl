import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Clock } from 'lucide-react';

export default function Hero() {
  const [tracking, setTracking] = useState('');

  const features = [
    { icon: ShieldCheck, title: 'Insured & Secure', desc: 'End-to-end package protection with real-time updates.' },
    { icon: Clock, title: 'On-Time Delivery', desc: 'Express, same-day, and scheduled options available.' },
  ];

  const onTrack = (e) => {
    e.preventDefault();
    if (!tracking.trim()) return;
    const url = `https://track.aftership.com/${encodeURIComponent(tracking.trim())}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative overflow-hidden pt-28">
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -left-32 top-40 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-blue-200">Trusted Courier & Logistics</span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Delivering speed,
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"> safety</span>
              , and reliability.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-600">
              From last-mile drops to international freight, we move your world with precision and care. Live tracking, flexible delivery windows, and customer-first support.
            </p>

            <form onSubmit={onTrack} className="mt-8 flex w-full max-w-xl items-center rounded-2xl bg-white p-2 shadow-xl ring-1 ring-gray-100">
              <input
                value={tracking}
                onChange={(e) => setTracking(e.target.value)}
                placeholder="Track your shipment (e.g. 1Z999...)"
                className="h-12 flex-1 rounded-xl px-4 text-gray-800 placeholder:text-gray-400 focus:outline-none"
              />
              <button type="submit" className="group inline-flex h-12 items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 text-white shadow-lg transition hover:shadow-xl">
                Track
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map((f, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.4, delay: i * 0.1 }} className="flex items-start gap-3 rounded-xl border border-gray-100 bg-white/70 p-4 shadow-sm backdrop-blur">
                  <div className="rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 p-2 text-white">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{f.title}</div>
                    <div className="text-sm text-gray-600">{f.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
            <div className="relative mx-auto h-[420px] w-full max-w-[520px] overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(59,130,246,0.12),transparent_40%),radial-gradient(circle_at_30%_80%,rgba(34,211,238,0.12),transparent_40%)]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }} className="grid w-full grid-cols-2 gap-3 p-6 sm:gap-4 sm:p-8">
                  {[1, 2, 3, 4].map((n) => (
                    <motion.div key={n} whileHover={{ scale: 1.03 }} className="rounded-2xl border border-gray-100 bg-white/90 p-4 shadow-md backdrop-blur">
                      <div className="h-24 w-full rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100" />
                      <div className="mt-3 h-2 w-2/3 rounded bg-gray-200" />
                      <div className="mt-2 h-2 w-1/2 rounded bg-gray-200" />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
            <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-blue-500/30 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
