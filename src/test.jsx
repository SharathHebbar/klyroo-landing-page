import React from "react";

/* =====================
   DATA (CONFIG)
===================== */
const USE_CASES = [
  {
    title: "Faster Incident Resolution",
    desc: "Automatically surface root cause using logs, metrics, and traces.",
  },
  {
    title: "Reduced MTTR",
    desc: "AI-driven context reduces mean time to recovery by up to 60%.",
  },
  {
    title: "Lower Infra Costs",
    desc: "Identify waste, anomalies, and overprovisioned resources.",
  },
];

const INTEGRATIONS = [
  "Datadog",
  "Prometheus",
  "Grafana",
  "Slack",
  "GitHub",
  "PagerDuty",
];

/* =====================
   COMPONENTS
===================== */

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
      <div className="text-xl font-bold">Vespper</div>
      <div className="hidden md:flex gap-6 text-sm text-gray-300">
        <a href="#usecases">Use cases</a>
        <a href="#integrations">Integrations</a>
        <a href="#pricing">Pricing</a>
      </div>
      <button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold">
        Request Demo
      </button>
    </nav>
  );
}

function Hero() {
  return (
    <section className="text-center py-24 px-6">
      <h1 className="text-5xl md:text-6xl font-bold leading-tight">
        AI for <span className="text-indigo-400">Production Reliability</span>
      </h1>
      <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
        Resolve incidents faster, reduce MTTR, and cut infrastructure costs using
        AI that understands your production context.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <button className="bg-indigo-500 px-6 py-3 rounded-xl font-semibold">
          Get Started
        </button>
        <button className="border border-gray-600 px-6 py-3 rounded-xl">
          Talk to Founders
        </button>
      </div>
    </section>
  );
}

function UseCases() {
  return (
    <section id="usecases" className="py-20 px-6 bg-gray-950">
      <h2 className="text-3xl font-bold text-center mb-12">Use Cases</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {USE_CASES.map((item, index) => (
          <div
            key={index}
            className="border border-gray-800 rounded-2xl p-6 hover:border-indigo-500 transition"
          >
            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
            <p className="text-gray-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Integrations() {
  return (
    <section id="integrations" className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Integrations</h2>
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {INTEGRATIONS.map((tool, index) => (
          <div
            key={index}
            className="px-5 py-3 border border-gray-700 rounded-xl text-sm"
          >
            {tool}
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gray-800 py-10 text-center text-gray-500 text-sm">
      © {new Date().getFullYear()} Vespper. All rights reserved.
    </footer>
  );
}

/* =====================
   APP
===================== */

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <UseCases />
      <Integrations />
      <Footer />
    </div>
  );
}
