import { Search, Settings, RotateCcw } from "lucide-react";

const processSteps = [
  {
    icon: Search,
    title: "Research & Analysis",
    description: "Comprehensive market research, fundamental analysis, and risk assessment to identify optimal investment opportunities.",
  },
  {
    icon: Settings,
    title: "Strategy Development",
    description: "Customized investment strategies based on your financial goals, risk tolerance, and market conditions.",
  },
  {
    icon: RotateCcw,
    title: "Monitor & Optimize",
    description: "Continuous portfolio monitoring and regular rebalancing to ensure optimal performance and risk management.",
  },
];

export default function InvestmentProcess() {
  return (
    <section className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" data-testid="text-process-title">
            Our <span className="gradient-text">Investment Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-process-description">
            A systematic approach to wealth creation through disciplined investment strategies and continuous monitoring.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="text-center group" data-testid={`process-step-${index}`}>
                <div className="bg-primary/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/30 transition-colors">
                  <IconComponent className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4" data-testid={`text-process-step-title-${index}`}>
                  {step.title}
                </h3>
                <p className="text-muted-foreground" data-testid={`text-process-step-description-${index}`}>
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
