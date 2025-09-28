import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/assanscofe",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/lanja-nilaina-a344771a2/",
      label: "LinkedIn"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:lanjaandriatsiferana@gmail.com",
      label: "Email"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <Button
              variant="ghost"
              onClick={scrollToTop}
              className="text-2xl font-bold gradient-text hover:bg-transparent p-0"
            >
              Lanja Nilaina
            </Button>
            <p className="text-sm text-muted-foreground mt-2">
              Développeur Web & Mobile
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="glass-effect hover:shadow-glow transition-all duration-300"
                asChild
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              </Button>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-end">
              © {currentYear} Fait avec{" "}
              <Heart className="w-4 h-4 mx-1 text-primary animate-pulse" />
              par Lanja Nilaina
            </p>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-xs text-muted-foreground">
            Développé avec React, TypeScript et Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}