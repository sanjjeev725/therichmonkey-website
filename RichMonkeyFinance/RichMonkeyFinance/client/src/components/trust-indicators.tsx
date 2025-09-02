export default function TrustIndicators() {
  return (
    <section className="py-16 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="animate-fade-in">
            <div className="text-3xl font-bold text-primary mb-2" data-testid="stat-clients">500+</div>
            <div className="text-muted-foreground" data-testid="label-clients">Active Clients</div>
          </div>
          <div className="animate-fade-in">
            <div className="text-3xl font-bold text-primary mb-2" data-testid="stat-aum">₹50Cr+</div>
            <div className="text-muted-foreground" data-testid="label-aum">Assets Under Management</div>
          </div>
          <div className="animate-fade-in">
            <div className="text-3xl font-bold text-primary mb-2" data-testid="stat-experience">10+</div>
            <div className="text-muted-foreground" data-testid="label-experience">Years Experience</div>
          </div>
          <div className="animate-fade-in">
            <div className="text-3xl font-bold text-primary mb-2" data-testid="stat-nationwide">PAN</div>
            <div className="text-muted-foreground" data-testid="label-nationwide">India Service</div>
          </div>
        </div>
      </div>
    </section>
  );
}
