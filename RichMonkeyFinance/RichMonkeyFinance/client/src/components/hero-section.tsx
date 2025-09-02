import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background overlay for the image */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10"></div>
      
      {/* Professional stock market trading floor in Mumbai with modern displays showing Indian market data */}
      <div 
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="text-hero-title">
              Smart Financial <span className="gradient-text">Solutions</span> for Modern India
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed" data-testid="text-hero-description">
              Leading financial experts specializing in stock investments, portfolio management, trading strategies, and personal finance solutions tailored for the Indian market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-primary text-primary-foreground px-8 py-4 text-lg font-semibold hover:bg-accent transition-colors"
                data-testid="button-start-journey"
              >
                Start Your Journey
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection('services')}
                className="border-border text-foreground px-8 py-4 text-lg font-semibold hover:border-primary hover:text-primary transition-colors"
                data-testid="button-explore-services"
              >
                Explore Services
              </Button>
            </div>
          </div>
          
          <div className="lg:flex justify-center hidden">
            {/* Modern financial dashboard showing Indian stock market data and charts */}
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Financial dashboard with Indian market data" 
              className="rounded-2xl shadow-2xl hover-scale w-full max-w-lg"
              data-testid="img-hero-dashboard"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
