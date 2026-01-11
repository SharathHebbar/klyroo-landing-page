import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote: "Usually, a alert at 2 AM means I'm staring at Grafana for two hours trying to correlate spans. Last week, Klyroo pointed me to a specific Redis timeout in a downstream service within five minutes. I was back in bed before my coffee even got cold.",
    author: "Aditya Munjal",
    role: "Software Engineer",
    company: "Healthify",
    image: "/aditya.jpeg"
  },
  
  {
    quote: "Usually, when something breaks, we just try guessing what happened. Klyroo actually shows us the 'why' so we don't have to waste time trying to figure it out what went wrong.",
    author: "Sanjay NT",
    role: "Machine Learning Engineer",
    company: "Samsung",
    image: "/sanjay.jpeg"
  },
  {
    quote: "We pointed our OpenTelemetry collector at Klyroo and had our first root-cause report in under 5 minutes. No custom instrumentation, no tagging nightmare. It just worked with the data we already had.",
    author: "Pravin Subramanian",
    role: "Site Reliability Engineer",
    company: "UniCards",
    image: "/pravin.jpeg"
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
              className="bg-white rounded-3xl p-8 border-2 border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 relative flex flex-col"
            >
              <div className="mb-6">
                <Quote className="text-blue-600 opacity-20" size={40} />
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-8 flex-1">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-gray-100 pt-6 mt-auto">
                <div className="flex items-center justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <div className="font-bold text-slate-900 text-lg truncate">
                      {testimonial.author}
                    </div>
                    <div className="text-gray-500 text-sm mt-1 truncate">
                      {testimonial.company}
                    </div>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

