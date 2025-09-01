import { TrendingUp, Briefcase, ArrowLeftRight, PiggyBank, Landmark, TrendingDown, ArrowRight } from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Stock Investments",
    description: "Strategic equity investments in Indian markets with research-backed recommendations and portfolio optimization.",
  },
  {
    icon: Briefcase,
    title: "Portfolio Management",
    description: "Professional portfolio management services tailored to your risk profile and financial goals.",
  },
  {
    icon: ArrowLeftRight,
    title: "Trading Services",
    description: "Advanced trading strategies and market insights for active traders in equity and derivative markets.",
  },
  {
    icon: Landmark,
    title: "Mutual Funds",
    description: "Diversified mutual fund investments with expert selection and portfolio construction for optimal returns.",
  },
  {
    icon: TrendingDown,
    title: "IPOs & Pre-IPO",
    description: "Access to Initial Public Offerings and Pre-IPO investment opportunities with detailed research analysis.",
  },
  {
    icon: PiggyBank,
    title: "Personal Finance",
    description: "Comprehensive financial planning including tax optimization, insurance, and retirement planning.",
  },
];

export default function ServicesSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" data-testid="text-services-title">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-services-description">
            Comprehensive financial solutions designed to help you build, grow, and protect your wealth in the Indian market.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="service-card bg-card p-8 rounded-xl hover-scale" data-testid={`card-service-${index}`}>
                <div className="text-primary text-4xl mb-6">
                  <IconComponent size={48} />
                </div>
                <h3 className="text-xl font-semibold mb-4" data-testid={`text-service-title-${index}`}>
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6" data-testid={`text-service-description-${index}`}>
                  {service.description}
                </p>
                <button 
                  onClick={scrollToContact}
                  className="text-primary hover:text-accent transition-colors font-medium flex items-center"
                  data-testid={`button-learn-more-${index}`}
                >
                  Learn More <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
