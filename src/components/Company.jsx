import { motion } from "framer-motion";

export default function Company() {
  return (
    <section id="company" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            Built by engineers, for engineers
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
            Built by engineers who've run production at scale. We understand what it means when
            every incident puts revenue and customer trust on the line.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
