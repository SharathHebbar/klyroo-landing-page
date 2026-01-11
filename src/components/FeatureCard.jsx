import { motion } from "framer-motion";

export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="p-8 bg-white rounded-2xl border shadow-sm hover:shadow-lg transition"
    >
      <Icon className="text-blue-600 mb-4" size={28} />
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}
