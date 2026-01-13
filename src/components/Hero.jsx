import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden">
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

      <div className="max-w-7xl mx-auto grid md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-12 items-center">
        <div className="text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100/50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4" />
            <span>AI that thinks like your best SRE, 24×7</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent leading-tight"
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI SRE
            </span>{" "}
            for modern production systems
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl md:max-w-xl mb-4 leading-relaxed mx-auto md:mx-0"
          >
            In modern production, every incident translates directly into lost revenue and
            customer trust.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-lg md:text-xl text-gray-700 max-w-2xl md:max-w-xl mb-10 leading-relaxed mx-auto md:mx-0"
          >
            We help your team resolve incidents faster so your best engineers stay building product
            instead of firefighting prod.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center"
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
          </motion.div>
        </div>

        {/* Simple rule-of-thirds inspired diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="hidden md:flex flex-col gap-6 rounded-3xl border border-slate-100 bg-white/80 backdrop-blur-xl shadow-2xl p-8 md:p-10"
        >
          <div className="text-sm font-semibold tracking-wide text-slate-500 uppercase">
            Every incident, accounted for
          </div>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="col-span-1 rounded-2xl border border-amber-200 bg-amber-50/80 px-4 py-3 flex flex-col gap-1">
              <span className="text-xs font-semibold text-amber-800">Incidents</span>
              <span className="text-xs text-amber-900/80">
                Revenue at risk, customers frustrated, on-call paged at 3am.
              </span>
            </div>
            <div className="col-span-1 flex flex-col items-center justify-center">
              <span className="text-[11px] uppercase tracking-wide text-slate-500 mb-1">
                AI for Prod
              </span>
              <div className="rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 text-white text-sm font-semibold px-5 py-2.5 shadow-lg">
                Klyroo AI SRE
              </div>
            </div>
            <div className="col-span-1 rounded-2xl border border-emerald-200 bg-emerald-50/80 px-4 py-3 flex flex-col gap-1">
              <span className="text-xs font-semibold text-emerald-800">Resolved</span>
              <span className="text-xs text-emerald-900/80">
                MTTR slashed. Revenue protected. Customers stay confident.
              </span>
            </div>
          </div>

          <div className="border-t border-dashed border-slate-200 pt-4">
            <div className="text-xs font-medium text-slate-500 mb-2">
              Signals Klyroo uses to investigate
            </div>
            <div className="grid grid-cols-3 gap-3 text-xs">
              <div className="rounded-full bg-slate-900 text-white px-3.5 py-1.5 flex items-center justify-center">
                Telemetry
              </div>
              <div className="rounded-full bg-slate-900 text-white px-3.5 py-1.5 flex items-center justify-center">
                Code
              </div>
              <div className="rounded-full bg-slate-900 text-white px-3.5 py-1.5 flex items-center justify-center">
                Infra
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
