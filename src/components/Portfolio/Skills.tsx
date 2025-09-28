import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Smartphone, 
  Server, 
  Database, 
  Coins, 
  Wrench,
  Brain,
  Globe
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Code2 className="w-6 h-6" />,
    color: "from-primary to-primary-glow",
    skills: [
      { name: "React.js", level: "Avancé" },
      { name: "React Native", level: "Avancé" },
      { name: "HTML5/CSS3", level: "Expert" },
      { name: "JavaScript/TypeScript", level: "Avancé" },
      { name: "Tailwind CSS", level: "Avancé" },
      { name: "Flutter", level: "Intermédiaire" }
    ]
  },
  {
    title: "Backend",
    icon: <Server className="w-6 h-6" />,
    color: "from-secondary to-secondary-glow",
    skills: [
      { name: "Spring Boot", level: "Avancé" },
      { name: "Django", level: "Avancé" },
      { name: "Java", level: "Avancé" },
      { name: "Python", level: "Avancé" },
      { name: "Rust", level: "Intermédiaire" },
      { name: "REST API", level: "Expert" }
    ]
  },
  {
    title: "Mobile",
    icon: <Smartphone className="w-6 h-6" />,
    color: "from-accent to-accent-glow",
    skills: [
      { name: "React Native", level: "Avancé" },
      { name: "Flutter", level: "Intermédiaire" },
      { name: "Android Studio", level: "Avancé" },
      { name: "Java Android", level: "Avancé" },
      { name: "Cross-platform", level: "Avancé" }
    ]
  },
  {
    title: "Base de données",
    icon: <Database className="w-6 h-6" />,
    color: "from-primary to-accent",
    skills: [
      { name: "PostgreSQL", level: "Avancé" },
      { name: "MySQL", level: "Avancé" },
      { name: "SQLite", level: "Avancé" },
      { name: "MongoDB", level: "Intermédiaire" },
      { name: "SQL", level: "Expert" }
    ]
  },
  {
    title: "Blockchain & Web3",
    icon: <Coins className="w-6 h-6" />,
    color: "from-secondary to-primary",
    skills: [
      { name: "Web3.js", level: "Intermédiaire" },
      { name: "Solana", level: "Intermédiaire" },
      { name: "Anchor Framework", level: "Débutant" },
      { name: "Smart Contracts", level: "Débutant" },
      { name: "DeFi", level: "Débutant" }
    ]
  },
  {
    title: "Intelligence Artificielle",
    icon: <Brain className="w-6 h-6" />,
    color: "from-accent to-secondary",
    skills: [
      { name: "Machine Learning", level: "Intermédiaire" },
      { name: "NLP", level: "Débutant" },
      { name: "Speech Recognition", level: "Intermédiaire" },
      { name: "Data Analysis", level: "Intermédiaire" },
      { name: "Python AI", level: "Intermédiaire" }
    ]
  },
  {
    title: "Outils & DevOps",
    icon: <Wrench className="w-6 h-6" />,
    color: "from-primary to-secondary",
    skills: [
      { name: "Git/GitHub", level: "Avancé" },
      { name: "Docker", level: "Intermédiaire" },
      { name: "Linux", level: "Intermédiaire" },
      { name: "VS Code", level: "Expert" },
      { name: "Figma", level: "Intermédiaire" }
    ]
  },
  {
    title: "Langues",
    icon: <Globe className="w-6 h-6" />,
    color: "from-secondary to-accent",
    skills: [
      { name: "Malagasy", level: "Natif" },
      { name: "Français", level: "Courant" },
      { name: "Anglais", level: "Intermédiaire" }
    ]
  }
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "Expert":
      return "bg-gradient-to-r from-primary to-primary-glow text-primary-foreground";
    case "Avancé":
      return "bg-gradient-to-r from-secondary to-secondary-glow text-secondary-foreground";
    case "Intermédiaire":
      return "bg-gradient-to-r from-accent to-accent-glow text-accent-foreground";
    case "Débutant":
      return "bg-muted text-muted-foreground";
    case "Natif":
      return "bg-gradient-to-r from-primary to-secondary text-primary-foreground";
    case "Courant":
      return "bg-gradient-to-r from-accent to-primary text-accent-foreground";
    default:
      return "bg-muted text-muted-foreground";
  }
};

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mes <span className="gradient-text">Compétences</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un aperçu de mes compétences techniques organisées par domaines d'expertise.
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="glass-effect hover:shadow-strong transition-all duration-500 hover:-translate-y-1 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} shadow-glow`}>
                    {category.icon}
                  </div>
                  <CardTitle className="text-lg group-hover:gradient-text transition-all duration-300">
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <Badge 
                        className={`text-xs px-2 py-1 ${getLevelColor(skill.level)} border-0`}
                      >
                        {skill.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <Card className="glass-effect max-w-2xl mx-auto p-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold gradient-text">Formation continue</h3>
              <p className="text-muted-foreground">
                Toujours en quête d'apprentissage, je me tiens à jour avec les dernières technologies 
                et participe régulièrement à des projets open source pour enrichir mes compétences.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}