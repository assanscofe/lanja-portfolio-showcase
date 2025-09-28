import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Profile Photo */}
          <div className="relative inline-block">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/30 shadow-glow mx-auto">
              <img
                src={profilePhoto}
                alt="Lanja Nilaina - Développeur Web & Mobile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-1 bg-gradient-primary rounded-full blur opacity-30 animate-pulse"></div>
          </div>

          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="gradient-text">Lanja</span>{" "}
              <span className="text-foreground">Nilaina</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
              Développeur Web & Mobile – Blockchain & IA
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Je conçois des applications modernes et sécurisées en React Native, Spring Boot et Blockchain
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              variant="outline"
              size="lg"
              className="glass-effect hover:shadow-glow transition-all duration-300"
              asChild
            >
              <a href="https://github.com/assanscofe" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="glass-effect hover:shadow-glow transition-all duration-300"
              asChild
            >
              <a href="https://www.linkedin.com/in/lanja-nilaina-a344771a2/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="glass-effect hover:shadow-glow transition-all duration-300"
              asChild
            >
              <a href="mailto:lanjaandriatsiferana@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Contact
              </a>
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="pt-16">
            <Button
              variant="ghost"
              size="lg"
              onClick={() => scrollToSection('about')}
              className="animate-bounce hover:text-primary transition-colors"
            >
              <ArrowDown className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}