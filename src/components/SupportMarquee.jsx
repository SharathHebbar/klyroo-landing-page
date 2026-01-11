import { motion } from "framer-motion";
import { Activity, BarChart3, Timer } from "lucide-react";

const SUPPORT_TOOLS = [
  {
    name: "Jaeger",
    icon: Activity,
  },
  {
    name: "SigNoz",
    icon: BarChart3,
  },
  {
    name: "Grafana Tempo",
    icon: Timer,
  },
];

export default function SupportMarquee() {
  return (
    <section className="py-20 overflow-hidden bg-white">
      {/* Heading */}
      <h2 className="text-center text-3xl font-bold mb-12">
        Support
      </h2>

      {/* Marquee */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-16 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {/* Duplicate list for seamless loop */}
          {[...SUPPORT_TOOLS, ...SUPPORT_TOOLS, ...SUPPORT_TOOLS].map((tool, index) => {
            const Icon = tool.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 px-8 py-4 border rounded-xl bg-gray-50 shadow-sm"
              >
                <Icon className="text-blue-600" size={28} />
                <span className="text-lg font-semibold text-gray-800">
                  {tool.name}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
