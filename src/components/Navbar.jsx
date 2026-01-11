import { useState } from "react";
import { Zap, Menu, X } from "lucide-react";
import { scrollToSection } from "../utils/scrollToSection";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Product", id: "product" },
    { label: "Company", id: "company" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        <motion.div 
          className="flex items-center gap-2 font-bold text-xl cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={() => scrollToSection('product')}
        >
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
            <Zap className="text-white" size={18} />
          </div>
          <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            Klyroo.dev
          </span>
        </motion.div>

        {/* Desktop */}
        <div className="hidden md:flex gap-8 text-sm font-medium items-center">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-gray-600 hover:text-blue-600 transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </div>

        {/* Mobile */}
        <button
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 px-6 py-4 space-y-4"
          >
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  scrollToSection(link.id);
                  setOpen(false);
                }}
                className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
