import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, ExternalLink } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            À <span className="gradient-text">propos</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <Card className="glass-effect p-8 md:p-12 shadow-medium hover:shadow-strong transition-all duration-300">
          <div className="space-y-8">
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
              <p className="text-lg md:text-xl">
                <strong className="gradient-text">Titulaire d'un Master 2 en Informatique de Gestion</strong> spécialisé en Génie Logiciel et Intelligence Artificielle, 
                je suis passionné par le développement d'applications web et mobiles performantes.
              </p>
              
              <p className="text-base md:text-lg">
                Mon expertise couvre le développement full-stack d'applications web et mobiles modernes, 
                avec une solide expérience en collaboration au sein d'équipes multidisciplinaires. 
                Je maîtrise particulièrement la création d'interfaces utilisateur intuitives et le développement 
                d'API REST robustes.
              </p>

              <p className="text-base md:text-lg">
                Polyvalent techniquement, je travaille aussi bien sur le frontend (React, React Native, JavaScript) 
                que sur le backend (PHP avec Laravel et CodeIgniter, Java avec Spring Boot), 
                avec une forte capacité d'adaptation aux différents environnements de développement.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                asChild
              >
                <a href="/CvTest.pdf" download="CV_Lanja_Andriatsiferana.pdf">
                  <Download className="w-5 h-5 mr-2" />
                  Télécharger mon CV
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="glass-effect hover:shadow-glow transition-all duration-300"
                asChild
              >
                <a href="https://www.linkedin.com/in/lanja-nilaina-a344771a2/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Profil LinkedIn
                </a>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">6+</div>
                <div className="text-sm text-muted-foreground">Projets réalisés</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">2</div>
                <div className="text-sm text-muted-foreground">Stages professionnels</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">5+</div>
                <div className="text-sm text-muted-foreground">Technologies maîtrisées</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}