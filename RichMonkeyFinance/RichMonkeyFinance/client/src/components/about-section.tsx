import { MapPin, Shield, Users, TrendingUp } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Pan-India Expertise",
    description: "Deep understanding of Indian financial markets with comprehensive coverage across all major financial centers nationwide.",
  },
  {
    icon: Shield,
    title: "SEBI Registered",
    description: "Fully compliant with Indian financial regulations and registered with SEBI for your security and trust.",
  },
  {
    icon: Users,
    title: "Personalized Approach",
    description: "Tailored financial strategies that align with your unique goals, risk tolerance, and investment timeline.",
  },
  {
    icon: TrendingUp,
    title: "Proven Track Record",
    description: "Consistent performance and successful portfolio management across various market cycles and conditions.",
  },
];

export default function AboutSection() {
  return (
    <>
      {/* Why Choose Us Section */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              {/* Indian financial district in Mumbai showing modern skyscrapers and business environment */}
              <img 
                src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500" 
                alt="Mumbai financial district skyline" 
                className="rounded-2xl shadow-xl w-full"
                data-testid="img-mumbai-skyline"
              />
            </div>
            
            <div>
              <h2 className="text-4xl font-bold mb-8" data-testid="text-why-choose-title">
                Why Choose <span className="gradient-text">The Rich Monkey</span>?
              </h2>
              
              <div className="space-y-6">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4" data-testid={`feature-${index}`}>
                      <div className="bg-primary/20 text-primary rounded-lg p-3 flex-shrink-0">
                        <IconComponent size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2" data-testid={`text-feature-title-${index}`}>
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground" data-testid={`text-feature-description-${index}`}>
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8" data-testid="text-about-title">
                About <span className="gradient-text">The Rich Monkey</span>
              </h2>
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-muted-foreground" data-testid="text-about-paragraph-1">
                  The Rich Monkey is a leading financial services company dedicated to empowering investors across India with smart, data-driven financial solutions. Our team of experienced professionals combines deep market knowledge with innovative strategies.
                </p>
                <p className="text-muted-foreground" data-testid="text-about-paragraph-2">
                  We specialize in making complex financial concepts accessible and actionable for our clients, whether they're first-time investors or seasoned traders looking to optimize their portfolios.
                </p>
                <p className="text-muted-foreground" data-testid="text-about-paragraph-3">
                  Our nationwide presence and comprehensive market understanding enable us to provide locally relevant advice while maintaining global investment standards across all major Indian cities.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2" data-testid="text-sebi-registered">SEBI</div>
                  <div className="text-sm text-muted-foreground" data-testid="label-sebi">Registered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2" data-testid="text-nse-certified">NSE</div>
                  <div className="text-sm text-muted-foreground" data-testid="label-nse">Certified</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              {/* Professional Indian businessman analyzing stock market charts on computer screens */}
              <img 
                src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500" 
                alt="Professional financial analyst working with market data" 
                className="rounded-2xl shadow-xl w-full"
                data-testid="img-financial-analyst"
              />
              
              {/* Indian rupee notes and financial documents representing wealth management */}
              <img 
                src="https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
                alt="Indian currency and financial planning documents" 
                className="rounded-2xl shadow-xl w-full"
                data-testid="img-indian-currency"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
