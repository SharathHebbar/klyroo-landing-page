import { motion } from "framer-motion";

export default function IncidentFlow() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-slate-900 via-slate-950 to-black text-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-slate-400 mb-3">
            From incident to impact
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            AI SRE for modern production systems
          </h2>
          <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto">
            In a world where every incident risks revenue and customer trust, Klyroo provides an
            intelligent SRE layer that learns from your telemetry, code, and infrastructure to
            close the loop faster.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-[1.2fr_1.6fr] items-stretch">
          {/* Left: Incident → AI → Outcome */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-800/80 to-slate-900/90 rounded-3xl border border-slate-700/80 p-6 md:p-8 shadow-2xl"
          >
            <div className="flex items-center justify-between gap-4 mb-6 text-xs text-slate-300">
              <span className="uppercase tracking-[0.2em]">Incidents</span>
              <span className="h-px flex-1 bg-gradient-to-r from-amber-400/60 via-blue-400 to-emerald-400/60" />
              <span className="uppercase tracking-[0.2em] text-emerald-300">Impact</span>
            </div>

            <div className="space-y-4 text-sm">
              <div className="grid grid-cols-[minmax(0,1.2fr)_auto_minmax(0,1.2fr)] gap-3 items-center">
                <div className="rounded-2xl bg-amber-500/10 border border-amber-400/40 px-4 py-3">
                  <div className="text-[11px] font-semibold text-amber-200 mb-1">
                    Incidents &amp; alerts
                  </div>
                  <p className="text-xs text-amber-50/90">
                    Noisy pages, fragmented tools, customers starting to feel the impact.
                  </p>
                </div>
                <div className="text-center text-[11px] text-slate-500">
                  →
                </div>
                <div className="rounded-2xl bg-emerald-500/10 border border-emerald-400/40 px-4 py-3">
                  <div className="text-[11px] font-semibold text-emerald-200 mb-1">
                    Protected revenue
                  </div>
                  <p className="text-xs text-emerald-50/90">
                    Faster MTTR, fewer customer tickets, and calm on-call rotations.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 pt-2 text-[11px]">
                <div className="rounded-xl bg-slate-800/80 border border-slate-700 px-3 py-2">
                  <div className="text-slate-300 font-semibold mb-1">Detect</div>
                  <p className="text-slate-400">
                    Ingests alerts and signals from your existing stack.
                  </p>
                </div>
                <div className="rounded-xl bg-slate-800/80 border border-slate-700 px-3 py-2">
                  <div className="text-slate-300 font-semibold mb-1">Diagnose</div>
                  <p className="text-slate-400">
                    Correlates telemetry, code, and infra to pinpoint root cause.
                  </p>
                </div>
                <div className="rounded-xl bg-slate-800/80 border border-slate-700 px-3 py-2">
                  <div className="text-slate-300 font-semibold mb-1">Resolve</div>
                  <p className="text-slate-400">
                    Proposes or executes safe runbooks and changes.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Signals diagram without Knowledge section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-950/60 rounded-3xl border border-slate-800 p-6 md:p-7 flex flex-col justify-between gap-6"
          >
            <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2">
              <span className="uppercase tracking-[0.18em]">
                Signals into Klyroo
              </span>
              <span className="px-2 py-1 rounded-full border border-emerald-400/60 text-emerald-300 bg-emerald-500/10 font-semibold">
                Learning &amp; memories
              </span>
            </div>

            <div className="grid grid-cols-[repeat(3,minmax(0,1fr))] gap-4">
              <div className="space-y-3">
                <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500 mb-1">
                  Telemetry
                </div>
                <div className="rounded-2xl bg-slate-900/80 border border-slate-700 px-4 py-3 space-y-1 text-[11px] text-slate-300">
                  <p>Metrics (SLOs, saturation, errors)</p>
                  <p>Traces &amp; spans across services</p>
                  <p>Structured logs from critical paths</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500 mb-1">
                  Code
                </div>
                <div className="rounded-2xl bg-slate-900/80 border border-slate-700 px-4 py-3 space-y-1 text-[11px] text-slate-300">
                  <p>Git history &amp; recent deploys</p>
                  <p>Service ownership and runbooks</p>
                  <p>Critical config &amp; feature flags</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500 mb-1">
                  Infra
                </div>
                <div className="rounded-2xl bg-slate-900/80 border border-slate-700 px-4 py-3 space-y-1 text-[11px] text-slate-300">
                  <p>Kubernetes, cloud, and network</p>
                  <p>Capacity, throttling &amp; limits</p>
                  <p>Dependencies &amp; external services</p>
                </div>
              </div>
            </div>

            <div className="mt-2 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[11px] text-slate-300">
              <p className="max-w-md">
                Klyroo continuously learns from each investigation, so the next incident is{" "}
                <span className="text-emerald-300 font-semibold">faster, sharper, and cheaper</span>{" "}
                to resolve.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-400/40">
                  Lower MTTR
                </span>
                <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-200 border border-amber-400/40">
                  Less revenue at risk
                </span>
                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-200 border border-blue-400/40">
                  Happier customers
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

