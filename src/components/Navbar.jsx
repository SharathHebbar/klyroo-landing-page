import { useState } from "react";
import { Zap, Menu, X } from "lucide-react";
import { scrollToSection } from "../utils/scrollToSection";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Product", id: "product" },
    { label: "Use Cases", id: "usecases" },
    { label: "Resources", id: "resources" },
    { label: "Company", id: "company" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        <div className="flex items-center gap-2 font-bold text-xl">
          <Zap className="text-blue-600" />
          Klyroo.dev
        </div>

        {/* Desktop */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-gray-600 hover:text-blue-600"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-4">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                scrollToSection(link.id);
                setOpen(false);
              }}
              className="block w-full text-left text-gray-700"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
