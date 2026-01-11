import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-32 pb-24 text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-6xl font-extrabold mb-6"
      >
        <span className="text-blue-600">AI SRE</span> for modern production
      </motion.h1>

      <p className="text-gray-600 max-w-xl mx-auto mb-10">
        Resolve incidents faster. Reduce on-call fatigue.
        Ship with confidence.
      </p>

      <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 mx-auto hover:bg-slate-800">
        Book a Demo <ArrowRight size={18} />
      </button>
    </section>
  );
}
