import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      {/* Gateway Hero */}
      <main className="flex-1 flex items-center justify-center hero-gradient">
        <div className="container mx-auto px-6 py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-primary-foreground/90">
                A Trusted Legacy Service
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-primary-foreground leading-tight mb-6 animate-fade-in-up text-balance">
              A Legacy Service Designed for Families — Offered with Confidence by Funeral Homes
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in-delay-1">
              Lasting Moments helps families record and receive personal video messages at life's most meaningful milestones, delivered at the right time, long after today.
            </p>

            {/* Guidance line */}
            <p className="text-base font-medium text-primary-foreground/90 mb-10 animate-fade-in-delay-2">
              Choose the experience that best fits you.
            </p>

            {/* Gateway CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-delay-2">
              <Button variant="hero" size="xl" asChild className="min-w-[220px]">
                <Link to="/partners">
                  <Users className="mr-2 h-5 w-5" />
                  For Funeral Homes
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild className="min-w-[220px]">
                <Link to="/families">
                  <Heart className="mr-2 h-5 w-5" />
                  For Families
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-16 pt-8 border-t border-primary-foreground/10 animate-fade-in-delay-3">
              <div className="flex flex-wrap items-center justify-center gap-8 text-primary-foreground/40">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                  <span className="text-sm font-medium">Secure & Private</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                  <span className="text-sm font-medium">Milestone-Based Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                  <span className="text-sm font-medium">Lasting Connection</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
