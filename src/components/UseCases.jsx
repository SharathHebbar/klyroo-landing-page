import { Search, Terminal, Cpu } from "lucide-react";
import FeatureCard from "./FeatureCard";

export default function UseCases() {
  return (
    <section id="usecases" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Use Cases
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Search}
            title="Autonomous Investigation"
            description="Explores multiple hypotheses using live logs and metrics."
          />
          <FeatureCard
            icon={Terminal}
            title="Execute Remediation"
            description="Creates PRs, kubectl commands, and safe fixes."
          />
          <FeatureCard
            icon={Cpu}
            title="Root Cause Analysis"
            description="Understands system topology to pinpoint failures."
          />
        </div>
      </div>
    </section>
  );
}
