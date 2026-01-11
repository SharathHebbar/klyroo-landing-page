import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote: "Klyroo.dev has transformed how we handle production incidents. Root cause analysis that used to take hours now happens in minutes.",
    author: "Ganesha N Hotti",
    role: "Software Engineer",
    company: "Boeing"
  },
  {
    quote: "The AI-powered insights help us understand our system behavior at a level we never had before. Game changer for our SRE team.",
    author: "Sanjay NT",
    role: "Machine Learning Engineer",
    company: "Samsung"
  },
  {
    quote: "Integrating with our existing observability stack was seamless. The root cause analysis capabilities are incredibly accurate.",
    author: "Pravin Kumar",
    role: "Site Reliability Engineer",
    company: "UniCards"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            Trusted by engineering teams
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See what teams are saying about Klyroo.dev
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl p-8 border-2 border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 relative"
            >
              <div className="mb-6">
                <Quote className="text-blue-600 opacity-20" size={40} />
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-gray-100 pt-6">
                <div className="font-bold text-slate-900 text-lg">
                  {testimonial.author}
                </div>
                <div className="text-gray-500 text-sm mt-1">
                  {/* {testimonial.role}, */}
                   {testimonial.company}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

