import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle2, Lock, Eye } from "lucide-react";

export default function SupportMarquee() {
  const features = [
    "Never ingest raw data, only metadata is used",
    "No write permissions to your systems",
    "Full control with custom redaction",
    "SOC 2 Type II and HIPAA compliant"
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[3rem] p-12 md:p-16 relative overflow-hidden">
          {/* Background glow effects */}
          <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-blue-600/20 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 bg-purple-600/20 blur-[100px] rounded-full" />
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Enterprise Security & Production Readiness
              </h2>
              <div className="space-y-6 mb-10">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-full p-2 mt-1 flex-shrink-0">
                      <CheckCircle2 className="text-white" size={20} />
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed">{feature}</p>
                  </motion.div>
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-blue-400 font-semibold flex items-center gap-2 hover:text-blue-300 transition-colors group"
              >
                Learn more about security
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </motion.button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm p-12 rounded-3xl border border-slate-700/50 text-center"
            >
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 mb-8 mx-auto w-fit">
                <ShieldCheck className="text-white" size={80} />
              </div>
              <div className="text-4xl font-bold text-white mb-3">SOC 2 Type II</div>
              <div className="text-slate-400 text-lg">Security & Compliance Certified</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
