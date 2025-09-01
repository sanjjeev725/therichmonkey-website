import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { insertContactInquirySchema } from "@shared/schema";
import type { InsertContactInquiry } from "@shared/schema";

const contactInfo = [
  {
    icon: MapPin,
    title: "Head Office",
    value: "Serving clients Pan-India",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 99878 68616",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@therichmonkey.in | therichmonkeyinvestments@gmail.com",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon-Fri: 9:00 AM - 6:00 PM IST",
  },
];

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<InsertContactInquiry>({
    resolver: zodResolver(insertContactInquirySchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      serviceInterest: "",
      investmentAmount: "",
      message: "",
    },
  });

  const onSubmit = async (data: InsertContactInquiry) => {
    setIsSubmitting(true);
    
    // Create form data for Netlify
    const formData = new FormData();
    formData.append('form-name', 'contact');
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString()
      });

      if (response.ok) {
        toast({
          title: "Consultation Requested Successfully!",
          description: "We'll get back to you within 24 hours.",
        });
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
      console.error("Contact form error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-8" data-testid="text-contact-title">
              Get Started with <span className="gradient-text">Smart Investing</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8" data-testid="text-contact-description">
              Ready to take control of your financial future? Contact our expert team for a personalized consultation.
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-center space-x-4" data-testid={`contact-info-${index}`}>
                    <div className="bg-primary/20 text-primary rounded-lg p-3">
                      <IconComponent size={24} />
                    </div>
                    <div>
                      <div className="font-semibold" data-testid={`text-contact-info-title-${index}`}>
                        {info.title}
                      </div>
                      <div className="text-muted-foreground" data-testid={`text-contact-info-value-${index}`}>
                        {info.value}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Contact Form for Netlify */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-6" data-testid="text-form-title">Request a Consultation</h3>
            
            {/* Hidden form for Netlify bot detection */}
            <form name="contact" netlify hidden>
              <input type="text" name="firstName" />
              <input type="text" name="lastName" />
              <input type="email" name="email" />
              <input type="tel" name="phone" />
              <select name="serviceInterest">
                <option value="stock-investments">Stock Investments</option>
                <option value="portfolio-management">Portfolio Management</option>
                <option value="trading-services">Trading Services</option>
                <option value="mutual-funds">Mutual Funds</option>
                <option value="ipo-pre-ipo">IPOs & Pre-IPO</option>
                <option value="personal-finance">Personal Finance</option>
                <option value="multiple-services">Multiple Services</option>
              </select>
              <select name="investmentAmount">
                <option value="1-5-lakhs">₹1 Lakh - ₹5 Lakhs</option>
                <option value="5-25-lakhs">₹5 Lakhs - ₹25 Lakhs</option>
                <option value="25-lakhs-1-crore">₹25 Lakhs - ₹1 Crore</option>
                <option value="1-crore-plus">₹1 Crore+</option>
              </select>
              <textarea name="message"></textarea>
            </form>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your first name" 
                            {...field}
                            className="bg-secondary border-border focus:border-primary"
                            data-testid="input-first-name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your last name" 
                            {...field}
                            className="bg-secondary border-border focus:border-primary"
                            data-testid="input-last-name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input 
                          type="email"
                          placeholder="your.email@example.com" 
                          {...field}
                          className="bg-secondary border-border focus:border-primary"
                          data-testid="input-email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input 
                          type="tel"
                          placeholder="+91 99878 68616" 
                          {...field}
                          className="bg-secondary border-border focus:border-primary"
                          data-testid="input-phone"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="serviceInterest"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service Interest</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger 
                            className="bg-secondary border-border focus:border-primary"
                            data-testid="select-service-interest"
                          >
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="stock-investments">Stock Investments</SelectItem>
                          <SelectItem value="portfolio-management">Portfolio Management</SelectItem>
                          <SelectItem value="trading-services">Trading Services</SelectItem>
                          <SelectItem value="mutual-funds">Mutual Funds</SelectItem>
                          <SelectItem value="ipo-pre-ipo">IPOs & Pre-IPO</SelectItem>
                          <SelectItem value="personal-finance">Personal Finance</SelectItem>
                          <SelectItem value="multiple-services">Multiple Services</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="investmentAmount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Investment Amount</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger 
                            className="bg-secondary border-border focus:border-primary"
                            data-testid="select-investment-amount"
                          >
                            <SelectValue placeholder="Select investment range" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="1-5-lakhs">₹1 Lakh - ₹5 Lakhs</SelectItem>
                          <SelectItem value="5-25-lakhs">₹5 Lakhs - ₹25 Lakhs</SelectItem>
                          <SelectItem value="25-lakhs-1-crore">₹25 Lakhs - ₹1 Crore</SelectItem>
                          <SelectItem value="1-crore-plus">₹1 Crore+</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          rows={4}
                          placeholder="Tell us about your financial goals and any specific questions..."
                          {...field}
                          className="bg-secondary border-border focus:border-primary resize-none"
                          data-testid="textarea-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary text-primary-foreground px-8 py-4 text-lg font-semibold hover:bg-accent transition-colors"
                  disabled={isSubmitting}
                  data-testid="button-submit-consultation"
                >
                  {isSubmitting ? "Submitting..." : "Schedule Consultation"}
                  <Send className="ml-2" size={20} />
                </Button>
                
                <p className="text-sm text-muted-foreground text-center" data-testid="text-form-disclaimer">
                  We'll get back to you within 24 hours. Your information is secure and confidential.
                </p>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}