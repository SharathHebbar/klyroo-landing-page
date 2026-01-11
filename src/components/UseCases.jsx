import { Cpu } from "lucide-react";
import FeatureCard from "./FeatureCard";
import { motion } from "framer-motion";

export default function UseCases() {
  return (
    <section id="usecases" className="py-24 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            Resolve incidents faster
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our AI production engineer participates in your on-call rotation to investigate and resolve issues autonomously.
          </p>
        </motion.div>

        <div className="flex justify-center">
          <div className="max-w-2xl w-full">
            <FeatureCard
              icon={Cpu}
              title="Root Cause Analysis"
              description="Deeply understands your system graph to find the needle in the haystack in minutes. Analyzes logs, metrics, and traces to pinpoint the exact cause of incidents."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
