import { motion } from "framer-motion";
import { Users, Code, Zap } from "lucide-react";

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
            Built by engineers who've run production at scale. We understand the challenges of maintaining reliable systems.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mt-16">
            {[
              { icon: Users, text: "Team of SREs" },
              { icon: Code, text: "Open source first" },
              { icon: Zap, text: "Production ready" }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center gap-3"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Icon className="text-white" size={32} />
                  </div>
                  <span className="text-gray-700 font-medium">{item.text}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
