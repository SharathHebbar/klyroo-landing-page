import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

// Logo Components
const GrafanaLogo = ({ className }) => (
  <img 
    src="https://grafana.com/static/img/menu/grafana2.svg" 
    alt="Grafana" 
    className={`${className} object-contain`}
    style={{ width: '100%', height: '100%' }}
  />
);

const GrafanaTempoLogo = ({ className }) => (
  <img 
    src="/tempo.png"
    alt="Grafana Tempo" 
    className={`${className} object-contain`}
    style={{ width: '100%', height: '100%' }}
  />
);

const SigNozLogo = ({ className }) => (
  <img 
    src="/signoz.png"
    alt="SigNoz" 
    className="object-contain"
    style={{ width: '100%', height: '100%', maxWidth: '64px', maxHeight: '64px' }}
  />
);

const JaegerLogo = ({ className }) => (
  <img 
    src="/jaeger.png"
    alt="Jaeger" 
    className="object-contain"
    style={{ width: '100%', height: '100%', maxWidth: '64px', maxHeight: '64px' }}
  />
);

const PrometheusLogo = ({ className }) => (
  <img 
    src="/prometheus.png"
    alt="Prometheus" 
    className="object-contain"
    style={{ width: '100%', height: '100%', maxWidth: '64px', maxHeight: '64px' }}
  />
);

const OpenTelemetryLogo = ({ className }) => (
  <img 
    src="/otel.png"
    alt="OpenTelemetry" 
    className="object-contain"
    style={{ width: '100%', height: '100%', maxWidth: '64px', maxHeight: '64px' }}
  />
);

const INTEGRATIONS = [
  { 
    name: "Grafana", 
    logo: GrafanaLogo, 
    color: "from-orange-500 to-red-500" 
  },
  { 
    name: "Grafana Tempo", 
    logo: GrafanaTempoLogo, 
    color: "from-blue-500 to-cyan-500" 
  },
  { 
    name: "SigNoz", 
    logo: SigNozLogo, 
    color: "from-purple-500 to-pink-500" 
  },
  { 
    name: "Jaeger", 
    logo: JaegerLogo, 
    color: "from-blue-600 to-indigo-600" 
  },
  { 
    name: "Prometheus", 
    logo: PrometheusLogo, 
    color: "from-orange-600 to-red-600" 
  },
  { 
    name: "OpenTelemetry", 
    logo: OpenTelemetryLogo, 
    color: "from-blue-500 to-cyan-500" 
  },
];

export default function Product() {
  return (
    <section id="product" className="py-24 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white -z-10" />
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            Built for your stack
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            An autonomous AI SRE that integrates seamlessly with your observability tools. 
            Works with the tools you already use.
          </p>
        </motion.div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {INTEGRATIONS.map((integration, index) => {
            const Logo = integration.logo;
            return (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group relative"
              >
                <div className="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-blue-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer h-full flex flex-col items-center justify-center gap-3">
                  <div className="w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Logo className="w-full h-full text-gray-800" />
                  </div>
                  <span className="text-sm font-semibold text-gray-800 text-center">
                    {integration.name}
                  </span>
                  <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <CheckCircle2 className="text-green-500 bg-white rounded-full" size={20} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
