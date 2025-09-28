import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Smartphone, Globe, Coins, FileText, Music, Gamepad2 } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Application de Gestion de Cryptomonnaies",
    description: "Application mobile complète pour gérer et suivre les cryptomonnaies avec intégration blockchain.",
    technologies: ["React Native", "Web3.js", "Solana", "Rust", "Anchor", "Spring Boot"],
    icon: <Coins className="w-6 h-6" />,
    category: "Mobile & Blockchain",
    year: "2025",
    color: "from-primary to-primary-glow"
  },
  {
    id: 2,
    title: "Système de Gestion des Procédures",
    description: "Application web pour la gestion et le suivi des dossiers administratifs au Ministère.",
    technologies: ["Spring Boot", "Java", "PostgreSQL", "Thymeleaf"],
    icon: <FileText className="w-6 h-6" />,
    category: "Web Application",
    year: "2021",
    color: "from-secondary to-secondary-glow"
  },
  {
    id: 3,
    title: "Réseau Social Web",
    description: "Plateforme sociale moderne avec fonctionnalités de partage et interactions en temps réel.",
    technologies: ["React.js", "Django", "REST API", "PostgreSQL"],
    icon: <Globe className="w-6 h-6" />,
    category: "Full Stack",
    year: "2023",
    color: "from-accent to-accent-glow"
  },
  {
    id: 4,
    title: "Lecteur de Musique Mobile",
    description: "Application mobile intuitive pour l'écoute et la gestion de bibliothèques musicales.",
    technologies: ["Flutter", "Dart", "Android Studio", "SQLite"],
    icon: <Music className="w-6 h-6" />,
    category: "Mobile",
    year: "2022",
    color: "from-primary to-secondary"
  },
  {
    id: 5,
    title: "Assistante Vocale Mobile",
    description: "Application d'assistance vocale avec reconnaissance et traitement de la parole.",
    technologies: ["React Native", "Django", "Speech Recognition", "NLP"],
    icon: <Smartphone className="w-6 h-6" />,
    category: "Mobile & IA",
    year: "2021",
    color: "from-secondary to-accent"
  },
  {
    id: 6,
    title: "Jeu 2D Police/Voleur",
    description: "Jeu interactif en 2D avec mécaniques de poursuite et stratégie en temps réel.",
    technologies: ["Python", "Pygame", "Game Logic", "2D Graphics"],
    icon: <Gamepad2 className="w-6 h-6" />,
    category: "Game Development",
    year: "2020",
    color: "from-accent to-primary"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mes <span className="gradient-text">Projets</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez une sélection de mes réalisations les plus significatives, 
            des applications mobiles aux solutions blockchain.
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="glass-effect hover:shadow-strong transition-all duration-500 hover:-translate-y-2 group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color} shadow-glow`}>
                    {project.icon}
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {project.year}
                  </Badge>
                </div>
                
                <div>
                  <CardTitle className="text-xl group-hover:gradient-text transition-all duration-300">
                    {project.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">
                    {project.category}
                  </p>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">Technologies utilisées</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="text-xs hover:bg-primary/10 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 hover:shadow-glow transition-all duration-300"
                    asChild
                  >
                    <a href="https://github.com/assanscofe" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 hover:shadow-glow transition-all duration-300"
                    disabled
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Démo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="glass-effect hover:shadow-glow transition-all duration-300"
            asChild
          >
            <a href="https://github.com/assanscofe" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              Voir tous mes projets sur GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}