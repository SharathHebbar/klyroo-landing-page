import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Product from "./components/Product";
import Testimonials from "./components/Testimonials";
import Company from "./components/Company";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans bg-white min-h-screen">
      <Navbar />
      <Hero />
      <Product />
      <Testimonials />
      <Company />
      <Footer />
    </div>
  );
}
// import React, { useState } from 'react';
// import { 
//   ShieldCheck, 
//   Terminal, 
//   Zap, 
//   Search, 
//   CheckCircle2, 
//   Cpu, 
//   Globe, 
//   Code2, 
//   BarChart3,
//   ArrowRight,
//   Menu,
//   X,
//   Play
// } from 'lucide-react';
// import { motion } from 'framer-motion';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">
//           <div className="flex items-center gap-2">
//             <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
//               <Zap className="text-white fill-current" size={18} />
//             </div>
//             <span className="text-xl font-bold tracking-tight text-slate-900">Verge<span className="text-blue-600">.ai</span></span>
//           </div>

//           {/* Desktop Links */}
//           <div className="hidden md:flex items-center space-x-8">
//             <a href="#" className="text-sm font-medium text-gray-600 hover:text-blue-600">Product</a>
//             <a href="#" className="text-sm font-medium text-gray-600 hover:text-blue-600">Use Cases</a>
//             <a href="#" className="text-sm font-medium text-gray-600 hover:text-blue-600">Resources</a>
//             <a href="#" className="text-sm font-medium text-gray-600 hover:text-blue-600">Company</a>
//             <button className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
//               Sign Up
//             </button>
//           </div>

//           <div className="md:hidden flex items-center">
//             <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X /> : <Menu />}</button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// const FeatureCard = ({ icon: Icon, title, description }) => (
//   <motion.div 
//     whileHover={{ y: -5 }}
//     className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
//   >
//     <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
//       <Icon className="text-blue-600" size={24} />
//     </div>
//     <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
//     <p className="text-gray-600 leading-relaxed">{description}</p>
//   </motion.div>
// );

// const App = () => {
//   const customers = ["Coinbase", "Doordash", "Toast", "Tubi", "Zscaler", "Guidewire"];

//   return (
//     <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
//       <Navbar />

//       {/* Hero Section */}
//       <section className="pt-32 pb-20 px-4">
//         <div className="max-w-5xl mx-auto text-center">
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium mb-8"
//           >
//             <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
//             AI that thinks like your best SRE, 24×7.
//           </motion.div>
          
//           <motion.h1 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-8"
//           >
//             <span className="text-blue-600">AI SRE</span> for modern production systems. 
//           </motion.h1>
          
//           <motion.p 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed"
//           >
//             Resolve incidents faster. Spend less. Ship with confidence.
//           </motion.p>

//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//             className="flex flex-col sm:flex-row gap-4 justify-center items-center"
//           >
//             <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-slate-800 transition-all text-lg">
//               Book a demo <ArrowRight size={20} />
//             </button>
//             <button className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-all text-lg">
//               Contact Us
//             </button>
//           </motion.div>
//         </div>

//         {/* Floating Code Visual */}
//         <div className="mt-20 max-w-6xl mx-auto relative">
//           <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10" />
//           <div className="bg-slate-900 rounded-2xl p-4 shadow-2xl overflow-hidden border border-slate-700">
//             <div className="flex gap-1.5 mb-4">
//               <div className="w-3 h-3 rounded-full bg-red-500" />
//               <div className="w-3 h-3 rounded-full bg-yellow-500" />
//               <div className="w-3 h-3 rounded-full bg-green-500" />
//             </div>
//             <div className="space-y-3 font-mono text-sm">
//               <p className="text-blue-400"># Autonomous investigation initiated</p>
//               <p className="text-gray-300">Analyzing metrics from Prometheus...</p>
//               <p className="text-green-400">✓ Root cause identified: Connection timeout in service "payment-gateway"</p>
//               <p className="text-yellow-400">Drafting PR to update retry policy...</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Social Proof */}
//       <section className="py-20 bg-gray-50 border-y border-gray-100">
//         <div className="max-w-7xl mx-auto px-4">
//           <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-12">Trusted by engineers at</p>
//           <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
//             {customers.map((name) => (
//               <span key={name} className="text-2xl font-bold text-slate-800 italic">{name}</span>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Features Grid */}
//       <section className="py-24 px-4 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-4">Resolve incidents faster</h2>
//             <p className="text-gray-600 max-w-xl mx-auto">Our AI production engineer participates in your on-call rotation to investigate and resolve issues autonomously.</p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <FeatureCard 
//               icon={Search} 
//               title="Autonomous Investigation" 
//               description="Pursues multiple hypotheses in parallel and validates each against real logs and metrics."
//             />
//             <FeatureCard 
//               icon={Terminal} 
//               title="Execute Remediation" 
//               description="Generates Git PRs, kubectl commands, and code fixes that work with your unique setup."
//             />
//             <FeatureCard 
//               icon={Cpu} 
//               title="Root Cause Analysis" 
//               description="Deeply understands your system graph to find the needle in the haystack in minutes."
//             />
//           </div>
//         </div>
//       </section>

//       {/* Security Section */}
//       <section className="py-24 px-4 bg-slate-900 text-white rounded-[3rem] mx-4 mb-20 overflow-hidden relative">
//         <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-600/20 blur-[100px] rounded-full" />
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
//           <div>
//             <h2 className="text-4xl font-bold mb-8">Enterprise Security & Production Readiness</h2>
//             <div className="space-y-6">
//               {[
//                 "Never ingest raw data, only metadata is used",
//                 "No write permissions to your systems",
//                 "Full control with custom redaction",
//                 "SOC 2 Type II and HIPAA compliant"
//               ].map((text) => (
//                 <div key={text} className="flex gap-4 items-start">
//                   <div className="bg-blue-600 rounded-full p-1 mt-1">
//                     <CheckCircle2 size={16} />
//                   </div>
//                   <p className="text-gray-300 text-lg">{text}</p>
//                 </div>
//               ))}
//             </div>
//             <button className="mt-10 text-blue-400 font-semibold flex items-center gap-2 hover:text-blue-300">
//               Learn more about security <ArrowRight size={18} />
//             </button>
//           </div>
//           <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700">
//              <ShieldCheck size={120} className="text-blue-500 mb-6 mx-auto" />
//              <div className="text-center">
//                <div className="text-3xl font-bold mb-2">SOC 2 Type II</div>
//                <div className="text-slate-400">Security & Compliance Certified</div>
//              </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Footer */}
//       <footer className="py-20 px-4 border-t border-gray-100">
//         <div className="max-w-7xl mx-auto text-center">
//           <div className="flex items-center justify-center gap-2 mb-8">
//             <Zap className="text-blue-600 fill-current" />
//             <span className="text-2xl font-bold">Verge.ai</span>
//           </div>
//           <p className="text-gray-500 mb-8">© 2026 Verge AI. All rights reserved.</p>
//           <div className="flex justify-center gap-8 text-sm font-medium text-gray-400">
//             <a href="#">Privacy Policy</a>
//             <a href="#">Terms of Service</a>
//             <a href="#">LinkedIn</a>
//             <a href="#">Twitter</a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default App;