import { motion } from "framer-motion";
import { ArrowRight, Activity, Code2, Cloud, Cpu } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white via-slate-50/60 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Investor-style narrative header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-blue-600 mb-3">
            How Klyroo creates value
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-5 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            From noisy incidents to a self-improving SRE engine
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Klyroo turns every incident into structured learning data, so over time your production
            environment becomes cheaper to run, faster to fix, and safer to change.
          </p>
        </motion.div>

        {/* 3-step story: Input → Engine → Outcomes */}
        <div className="grid gap-6 md:grid-cols-[1.1fr_minmax(0,1.2fr)_1.1fr] items-stretch mb-14">
          {/* Step 1: Inputs (what goes in) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-200 bg-white shadow-sm p-6 flex flex-col gap-4"
          >
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-500">
              1. Connect your reality
            </div>
            <p className="text-sm text-slate-700">
              Klyroo plugs into the tools you already rely on — no new agents or data stores.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-xl bg-orange-100 text-orange-700">
                  <Activity size={16} />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Telemetry</div>
                  <p className="text-xs text-slate-600">
                    Metrics, traces, and logs from Grafana, Prometheus, SigNoz, Datadog, and more.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                  <Code2 size={16} />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Code & deploys</div>
                  <p className="text-xs text-slate-600">
                    Git history, services, ownership, and recent changes that might have broken
                    prod.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <Cloud size={16} />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Infra</div>
                  <p className="text-xs text-slate-600">
                    Cloud, Kubernetes, and network signals that show where capacity and risk live.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Step 2: Engine (what Klyroo actually does) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[2rem] border border-slate-900/10 bg-slate-900 text-white shadow-2xl overflow-hidden"
          >
            <div className="absolute -top-10 -left-16 w-40 h-40 bg-blue-500/30 blur-3xl rounded-full" />
            <div className="absolute -bottom-12 -right-20 w-48 h-48 bg-emerald-500/25 blur-3xl rounded-full" />

            <div className="relative p-7 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] self-start">
                <Cpu size={14} />
                <span>AI SRE engine</span>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  Every alert becomes a structured investigation
                </h3>
                <p className="text-sm text-slate-200 max-w-xl leading-relaxed">
                  For each incident, Klyroo spins up an AI SRE that pulls signals, tests
                  hypotheses, and records what works — building a private knowledge graph of your
                  production environment.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 text-xs">
                {[
                  {
                    title: "Detect",
                    desc: "Triages every alert, suppresses noise, and prioritizes real customer impact.",
                  },
                  {
                    title: "Diagnose",
                    desc: "Correlates telemetry, code, and infra to pinpoint true root cause.",
                  },
                  {
                    title: "Decide & suggest",
                    desc: "Produces ranked remediation options with blast-radius and risk explained.",
                  },
                ].map((step) => (
                  <div
                    key={step.title}
                    className="rounded-2xl border border-slate-700 bg-slate-900/60 px-3 py-3 flex flex-col gap-1.5"
                  >
                    <div className="text-[11px] font-semibold text-slate-50 tracking-[0.15em] uppercase">
                      {step.title}
                    </div>
                    <p className="text-[11px] text-slate-300 leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-1 text-[11px] text-slate-300/90">
                Every resolved incident enriches Klyroo&apos;s internal model of your system — so
                the 100th incident is dramatically faster (and cheaper) than the first.
              </div>
            </div>
          </motion.div>

          {/* Step 3: Outcomes (what investors care about) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-emerald-200 bg-emerald-50 shadow-sm p-6 flex flex-col gap-4"
          >
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-emerald-700">
              3. Business outcomes
            </div>
            <p className="text-sm text-emerald-900">
              The result is not just faster incident response — it&apos;s a compounding advantage
              in reliability, cost, and engineering focus.
            </p>
            <div className="space-y-3 text-sm">
              <div className="rounded-2xl bg-white/80 border border-emerald-100 px-3 py-2">
                <div className="text-xs font-semibold text-emerald-800">MTTR & risk</div>
                <p className="text-xs text-emerald-900">
                  Cut time-to-diagnose from hours to minutes; fewer customer-visible incidents and
                  regulatory headaches.
                </p>
              </div>
              <div className="rounded-2xl bg-white/80 border border-emerald-100 px-3 py-2">
                <div className="text-xs font-semibold text-emerald-800">Cost efficiency</div>
                <p className="text-xs text-emerald-900">
                  Identify chronic waste in infra and observability spend using the same engine that
                  debugs incidents.
                </p>
              </div>
              <div className="rounded-2xl bg-white/80 border border-emerald-100 px-3 py-2">
                <div className="text-xs font-semibold text-emerald-800">Engineer leverage</div>
                <p className="text-xs text-emerald-900">
                  Senior SRE intuition gets encoded into the system, so every engineer on the team
                  debugs like a veteran.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Simple CTA at the bottom for investors / buyers */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 flex flex-col md:flex-row items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white/80 px-5 py-4"
        >
          <p className="text-sm text-slate-700 max-w-xl">
            Klyroo is building the always-on SRE layer every modern production environment will
            need — starting with teams who can&apos;t afford downtime to mean lost revenue.
          </p>
          <motion.a
            href="https://calendly.com/sujayks007/30min"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-6 py-2.5 text-sm font-semibold shadow-md hover:shadow-lg"
          >
            Talk to the team <ArrowRight size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}


