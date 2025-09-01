import { Button } from "@/components/ui/button";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6" data-testid="text-cta-title">
            Ready to Build Your <span className="gradient-text">Financial Future</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto" data-testid="text-cta-description">
            Join hundreds of satisfied clients who trust The Rich Monkey for their investment and financial planning needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-primary text-primary-foreground px-8 py-4 text-lg font-semibold hover:bg-accent transition-colors"
              data-testid="button-start-investing"
            >
              Start Investing Today
            </Button>
            <Button 
              variant="outline"
              asChild
              className="border-border text-foreground px-8 py-4 text-lg font-semibold hover:border-primary hover:text-primary transition-colors"
              data-testid="button-call-now"
            >
              <a href="tel:+919987868616">Call Now: +91 99878 68616</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="mb-4" data-testid="text-footer-logo">
                <div className="text-2xl font-bold gradient-text">The Rich Monkey</div>
                <div className="text-xs text-white font-medium tracking-[0.15em] mt-1">INVESTMENTS</div>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md" data-testid="text-footer-description">
                Your trusted partner for financial growth in the Indian market. Professional investment services across India.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-linkedin"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-twitter"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.291C3.85 14.977 3.35 13.675 3.35 12.256c0-1.419.5-2.721 1.776-3.441.875-.801 2.026-1.291 3.323-1.291 1.297 0 2.448.49 3.323 1.291 1.276.72 1.776 2.022 1.776 3.441 0 1.419-.5 2.721-1.776 3.441-.875.801-2.026 1.291-3.323 1.291zm7.265-10.5h-2.09v2.09h2.09v-2.09z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4" data-testid="text-footer-services-title">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="hover:text-primary transition-colors text-left"
                    data-testid="link-footer-stocks"
                  >
                    Stock Investments
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="hover:text-primary transition-colors text-left"
                    data-testid="link-footer-pms"
                  >
                    Portfolio Management
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="hover:text-primary transition-colors text-left"
                    data-testid="link-footer-trading"
                  >
                    Trading Services
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="hover:text-primary transition-colors text-left"
                    data-testid="link-footer-mutual-funds"
                  >
                    Mutual Funds
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="hover:text-primary transition-colors text-left"
                    data-testid="link-footer-ipo"
                  >
                    IPOs & Pre-IPO
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="hover:text-primary transition-colors text-left"
                    data-testid="link-footer-finance"
                  >
                    Personal Finance
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4" data-testid="text-footer-company-title">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="hover:text-primary transition-colors text-left"
                    data-testid="link-footer-about"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="hover:text-primary transition-colors text-left"
                    data-testid="link-footer-contact"
                  >
                    Contact
                  </button>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="hover:text-primary transition-colors"
                    data-testid="link-footer-privacy"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="hover:text-primary transition-colors"
                    data-testid="link-footer-terms"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-12 pt-8 text-center">
            <p className="text-muted-foreground" data-testid="text-footer-copyright">
              © 2024 The Rich Monkey. All rights reserved. | SEBI Registered Investment Advisor
            </p>
            <p className="text-sm text-muted-foreground mt-2" data-testid="text-footer-disclaimer">
              Investments are subject to market risks. Please read all related documents carefully before investing.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
