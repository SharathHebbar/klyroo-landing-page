import { motion } from "framer-motion";
import { Zap, Linkedin, Twitter, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gradient-to-b from-white to-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.div 
              className="flex items-center gap-2 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                <Zap className="text-white" size={18} />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Klyroo.dev
              </span>
            </motion.div>
            <p className="text-gray-600 max-w-md leading-relaxed">
              AI SRE for modern production systems. Resolve incidents faster, reduce costs, ship with confidence.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-slate-900 mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#product" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a></li>
              <li><a href="#usecases" className="text-gray-600 hover:text-blue-600 transition-colors">Use Cases</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-slate-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#company" className="text-gray-600 hover:text-blue-600 transition-colors">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Klyroo.dev. All rights reserved.
          </p>
          <div className="flex gap-6">
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, y: -2 }}
              className="text-gray-400 hover:text-blue-600 transition-colors"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, y: -2 }}
              className="text-gray-400 hover:text-blue-600 transition-colors"
            >
              <Twitter size={20} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, y: -2 }}
              className="text-gray-400 hover:text-blue-600 transition-colors"
            >
              <Github size={20} />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}

