import { motion } from "framer-motion";

const COMPANIES = [
  "Coinbase",
  "Doordash",
  "Toast",
  "Tubi",
  "Zscaler",
  "Guidewire",
  "Boeing",
  "Samsung",
  "UniCards"
];

export default function Users() {
  return (
    <section className="py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white border-y border-gray-100">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">
          Trusted by engineers at
        </p>
      </motion.div>

      {/* Marquee */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10" />
        
        <motion.div
          className="flex gap-20 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
        >
          {/* Duplicate list for seamless loop */}
          {[...COMPANIES, ...COMPANIES].map((company, index) => (
            <div
              key={`${company}-${index}`}
              className="flex items-center justify-center"
            >
              <span className="text-3xl font-bold text-gray-300 hover:text-gray-500 transition-colors italic whitespace-nowrap">
                {company}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
