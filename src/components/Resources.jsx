import { motion } from "framer-motion";
import { FileText, BookOpen, Briefcase, ArrowRight } from "lucide-react";

const resources = [
  {
    icon: FileText,
    title: "Documentation",
    description: "Complete guides and API reference",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: BookOpen,
    title: "Blog",
    description: "Latest insights and best practices",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Briefcase,
    title: "Case Studies",
    description: "Real-world success stories",
    color: "from-orange-500 to-red-500"
  }
];

export default function Resources() {
  return (
    <section id="resources" className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn how to get the most out of AI SRE
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-blue-200 shadow-sm hover:shadow-xl transition-all cursor-pointer group"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${resource.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {resource.description}
                </p>
                <div className="flex items-center text-blue-600 font-semibold group-hover:gap-3 gap-2 transition-all">
                  Learn more <ArrowRight size={18} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
