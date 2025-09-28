import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Accueil", href: "#hero" },
  { label: "À propos", href: "#about" },
  { label: "Projets", href: "#projects" },
  { label: "Compétences", href: "#skills" },
  { label: "Contact", href: "#contact" }
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.slice(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const sectionId = href.slice(1);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-effect shadow-medium' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Button
                variant="ghost"
                onClick={() => scrollToSection("#hero")}
                className="text-xl font-bold gradient-text hover:bg-transparent"
              >
                LN
              </Button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Button
                  key={item.href}
                  variant="ghost"
                  onClick={() => scrollToSection(item.href)}
                  className={`relative transition-all duration-300 ${
                    activeSection === item.href.slice(1)
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.label}
                  {activeSection === item.href.slice(1) && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-primary rounded-full"></div>
                  )}
                </Button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-background/95 backdrop-blur-md"></div>
          <div className="fixed top-16 left-0 right-0 glass-effect mx-4 rounded-lg shadow-strong">
            <div className="p-6 space-y-4">
              {navItems.map((item) => (
                <Button
                  key={item.href}
                  variant="ghost"
                  onClick={() => scrollToSection(item.href)}
                  className={`w-full justify-start text-lg ${
                    activeSection === item.href.slice(1)
                      ? 'text-primary bg-primary/10'
                      : 'text-foreground'
                  }`}
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}