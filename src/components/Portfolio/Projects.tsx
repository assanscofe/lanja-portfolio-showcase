import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink, Github, Smartphone, Globe, FileText, Server, Image as ImageIcon } from "lucide-react";
import ReseauSociauxImg from "@/assets/ReseauSociaux.jpeg";
import CryptoImg1 from "@/assets/IMG-20250908-WA0001.jpg";
import CryptoImg2 from "@/assets/IMG-20250908-WA0002.jpg";
import CryptoImg3 from "@/assets/IMG-20250908-WA0003.jpg";
import CryptoImg4 from "@/assets/IMG-20250908-WA0004.jpg";
import CryptoImg5 from "@/assets/IMG-20250908-WA0005.jpg";
import CryptoImg6 from "@/assets/IMG-20250908-WA0006.jpg";
import CryptoImg7 from "@/assets/IMG-20250908-WA0007.jpg";
import CryptoImg8 from "@/assets/IMG-20250908-WA0008.jpg";
import CryptoImg9 from "@/assets/IMG-20250908-WA0009.jpg";
import CryptoImg10 from "@/assets/IMG-20250908-WA0010.jpg";
import CryptoImg11 from "@/assets/IMG-20250908-WA0011.jpg";
import CryptoImg12 from "@/assets/IMG-20250908-WA0012.jpg";
import CryptoImg13 from "@/assets/IMG-20250908-WA0013.jpg";
import CryptoImg14 from "@/assets/IMG-20250908-WA0014.jpg";
import CryptoImg15 from "@/assets/IMG-20250908-WA0015.jpg";
import CryptoImg16 from "@/assets/IMG-20250908-WA0016.jpg";
import CryptoImg17 from "@/assets/IMG-20250908-WA0017.jpg";
import CryptoImg18 from "@/assets/IMG-20250908-WA0018.jpg";

const projects = [
  {
    id: 1,
    title: "Anime Sparkle",
    description: "Application web moderne de découverte d'animés avec recherche avancée, système de favoris et interface utilisateur élégante.",
    technologies: ["React.js", "TypeScript", "API REST", "Tailwind CSS"],
    icon: <Globe className="w-6 h-6" />,
    category: "Web Application",
    year: "2024",
    color: "from-primary to-primary-glow",
    screenshots: [],
    liveUrl: "https://anime-sparkle.vercel.app/"
  },
  {
    id: 2,
    title: "Système de Gestion des Procédures",
    description: "Application web complète pour la gestion et le suivi des dossiers administratifs au Ministère avec interface moderne.",
    technologies: ["Spring Boot", "Java", "PostgreSQL", "Thymeleaf", "HTML/CSS"],
    icon: <FileText className="w-6 h-6" />,
    category: "Web Application",
    year: "2021",
    color: "from-secondary to-secondary-glow",
    screenshots: []
  },
  {
    id: 3,
    title: "Réseau Social Web",
    description: "Plateforme sociale moderne avec fonctionnalités de partage, interactions en temps réel et design responsive.",
    technologies: ["React.js", "Django", "REST API", "PostgreSQL", "JavaScript"],
    icon: <Globe className="w-6 h-6" />,
    category: "Full Stack",
    year: "2023",
    color: "from-accent to-accent-glow",
    screenshots: [ReseauSociauxImg]
  },
  {
    id: 4,
    title: "Application Mobile de Gestion",
    description: "Application mobile cross-platform pour la gestion de données avec interface intuitive et synchronisation.",
    technologies: ["React Native", "SQLite", "Android Studio", "JavaScript"],
    icon: <Smartphone className="w-6 h-6" />,
    category: "Mobile",
    year: "2022",
    color: "from-primary to-accent",
    screenshots: []
  },
  {
    id: 5,
    title: "Application Crypto Mobile",
    description: "Application mobile de gestion de cryptomonnaies avec suivi en temps réel, portefeuille et analyses de marché.",
    technologies: ["React Native", "API REST", "SQLite", "JavaScript"],
    icon: <Smartphone className="w-6 h-6" />,
    category: "Mobile",
    year: "2023",
    color: "from-secondary to-accent",
    screenshots: [
      CryptoImg1, CryptoImg2, CryptoImg3, CryptoImg4, CryptoImg5, CryptoImg6,
      CryptoImg7, CryptoImg8, CryptoImg9, CryptoImg10, CryptoImg11, CryptoImg12,
      CryptoImg13, CryptoImg14, CryptoImg15, CryptoImg16, CryptoImg17, CryptoImg18
    ]
  }
];

export function Projects() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex(prev => prev + 1);
  };

  const prevImage = () => {
    setCurrentImageIndex(prev => prev - 1);
  };

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
              {/* Image d'aperçu */}
              <div className="relative h-48 overflow-hidden">
                {project.screenshots.length > 0 ? (
                  <img
                    src={project.screenshots[0]}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${project.color} opacity-20`}>
                    <div className="w-full h-full flex items-center justify-center">
                      <div className={`p-8 rounded-full bg-gradient-to-r ${project.color} opacity-50`}>
                        {project.icon}
                      </div>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>

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
                  
                  {project.screenshots.length > 0 ? (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 hover:shadow-glow transition-all duration-300"
                          onClick={() => setCurrentImageIndex(0)}
                        >
                          <ImageIcon className="w-4 h-4 mr-2" />
                          Screenshots
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle>{project.title} - Screenshots</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className="relative">
                            <img
                              src={project.screenshots[currentImageIndex]}
                              alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                              className="w-full h-auto rounded-lg shadow-lg"
                            />
                            {project.screenshots.length > 1 && (
                              <div className="flex justify-between items-center mt-4">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={prevImage}
                                  disabled={currentImageIndex === 0}
                                >
                                  Précédent
                                </Button>
                                <span className="text-sm text-muted-foreground">
                                  {currentImageIndex + 1} / {project.screenshots.length}
                                </span>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={nextImage}
                                  disabled={currentImageIndex === project.screenshots.length - 1}
                                >
                                  Suivant
                                </Button>
                              </div>
                            )}
                          </div>
                          {project.screenshots.length > 1 && (
                            <div className="grid grid-cols-4 gap-2 mt-4">
                              {project.screenshots.map((screenshot, idx) => (
                                <img
                                  key={idx}
                                  src={screenshot}
                                  alt={`Thumbnail ${idx + 1}`}
                                  className={`w-full h-20 object-cover rounded cursor-pointer transition-all ${
                                    idx === currentImageIndex ? 'ring-2 ring-primary' : 'opacity-60 hover:opacity-100'
                                  }`}
                                  onClick={() => setCurrentImageIndex(idx)}
                                />
                              ))}
                            </div>
                          )}
                        </div>
                      </DialogContent>
                    </Dialog>
                  ) : project.liveUrl ? (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 hover:shadow-glow transition-all duration-300"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Voir le site
                      </a>
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 hover:shadow-glow transition-all duration-300"
                      disabled
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Démo
                    </Button>
                  )}
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