import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const isPartnersPage = location.pathname === "/partners";
  const isFamiliesPage = location.pathname === "/families";
  const isHomePage = location.pathname === "/";

  // Dynamic nav links based on current page
  const getNavLinks = () => {
    if (isPartnersPage) {
      return [
        { href: "/partners", label: "For Partners", isLink: true },
        { href: "/families", label: "For Families", isLink: true },
      ];
    }
    if (isFamiliesPage) {
      return [
        { href: "/partners", label: "For Partners", isLink: true },
        { href: "/families", label: "For Families", isLink: true },
      ];
    }
    // Homepage
    return [
      { href: "/partners", label: "For Funeral Homes", isLink: true },
      { href: "/families", label: "For Families", isLink: true },
    ];
  };

  const navLinks = getNavLinks();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-serif text-lg font-bold">L</span>
            </div>
            <span className="font-serif text-xl font-semibold text-foreground">
              Lasting Moments
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.isLink ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === link.href 
                      ? 'text-foreground' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              )
            ))}
          </nav>

          {/* Desktop CTA - only show on partner page */}
          {isPartnersPage && (
            <div className="hidden md:flex items-center gap-4">
              <Button variant="cta" size="sm" asChild>
                <a href="#contact">Request Partnership Info</a>
              </Button>
            </div>
          )}
          
          {/* Homepage CTA */}
          {isHomePage && (
            <div className="hidden md:flex items-center gap-4">
              <Button variant="cta" size="sm" asChild>
                <Link to="/partners">Learn More</Link>
              </Button>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 border-t border-border mt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                link.isLink ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`text-sm font-medium transition-colors ${
                      location.pathname === link.href 
                        ? 'text-foreground' 
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                )
              ))}
              {isPartnersPage && (
                <div className="flex flex-col gap-2 pt-4 border-t border-border">
                  <Button variant="cta" size="sm" asChild>
                    <a href="#contact">Request Partnership Info</a>
                  </Button>
                </div>
              )}
              {isHomePage && (
                <div className="flex flex-col gap-2 pt-4 border-t border-border">
                  <Button variant="cta" size="sm" asChild>
                    <Link to="/partners">Learn More</Link>
                  </Button>
                </div>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
