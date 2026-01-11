import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 text-center px-6 overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100/50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8 backdrop-blur-sm"
      >
        <Sparkles className="w-4 h-4" />
        <span>AI that thinks like your best SRE, 24×7</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-8 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent leading-tight"
      >
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AI SRE</span> for modern production systems
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed"
      >
        Resolve incidents faster. Spend less. Ship with confidence.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
      >
        <motion.a
          href="https://calendly.com/sujayks007/30min"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-slate-900 to-slate-800 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 shadow-xl shadow-slate-900/25 hover:shadow-2xl hover:shadow-slate-900/40 transition-all"
        >
          Book a Demo <ArrowRight size={20} />
        </motion.a>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white/80 backdrop-blur-sm text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-full font-bold hover:bg-white hover:border-slate-300 transition-all shadow-lg"
        >
          Contact Us
        </motion.button>
      </motion.div>
    </section>
  );
}
