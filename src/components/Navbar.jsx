import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Truck, Phone, MapPin } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-white/70 shadow-md' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg">
              <Truck className="h-5 w-5" />
            </div>
            <span className="text-xl font-semibold tracking-tight text-gray-900">SwiftCargo</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#services" className="text-gray-700 transition-colors hover:text-blue-600">Services</a>
            <a href="#coverage" className="text-gray-700 transition-colors hover:text-blue-600">Coverage</a>
            <a href="#contact" className="text-gray-700 transition-colors hover:text-blue-600">Contact</a>
            <a href="#quote" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2 text-white shadow-lg transition hover:shadow-xl">
              Get Quote
              <motion.span initial={{ x: 0 }} whileHover={{ x: 4 }} className="inline-block">→</motion.span>
            </a>
          </div>

          <button onClick={() => setOpen(true)} className="md:hidden">
            <Menu className="h-6 w-6 text-gray-800" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm md:hidden" onClick={() => setOpen(false)}>
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', stiffness: 260, damping: 30 }} className="ml-auto h-full w-4/5 max-w-xs bg-white p-6 shadow-xl" onClick={(e) => e.stopPropagation()}>
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg">
                    <Truck className="h-5 w-5" />
                  </div>
                  <span className="text-lg font-semibold">SwiftCargo</span>
                </div>
                <button onClick={() => setOpen(false)} className="rounded-md p-2 hover:bg-gray-100">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="flex flex-col gap-4">
                <a href="#services" onClick={() => setOpen(false)} className="rounded-md px-2 py-2 text-gray-800 transition hover:bg-gray-100">Services</a>
                <a href="#coverage" onClick={() => setOpen(false)} className="rounded-md px-2 py-2 text-gray-800 transition hover:bg-gray-100">Coverage</a>
                <a href="#contact" onClick={() => setOpen(false)} className="rounded-md px-2 py-2 text-gray-800 transition hover:bg-gray-100">Contact</a>
                <a href="#quote" onClick={() => setOpen(false)} className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-white shadow-lg transition hover:shadow-xl">
                  <Phone className="h-4 w-4" /> Get Quote
                </a>
                <div className="mt-4 flex items-center gap-3 text-sm text-gray-600">
                  <MapPin className="h-4 w-4" /> Global Coverage
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
