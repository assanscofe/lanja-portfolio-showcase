import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Download } from "lucide-react";
import emailjs from '@emailjs/browser';

// Initialisation d'EmailJS
try {
  emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '');
} catch (error) {
  console.error('Erreur lors de l\'initialisation d\'EmailJS:', error);
}

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Envoi du formulaire via EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'lanjaandriatsiferana@gmail.com'
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''
      );

      toast({
        title: "Message envoyé !",
        description: "Merci pour votre message. Je vous répondrai dans les plus brefs délais.",
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message:', error);
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer plus tard.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "lanjaandriatsiferana@gmail.com",
      href: "mailto:lanjaandriatsiferana@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Téléphone",
      value: "+261 34 98 17 995",
      href: "tel:+261349817995"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Localisation",
      value: "Antananarivo, Madagascar",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/assanscofe",
      color: "hover:text-primary"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/lanja-nilaina-a344771a2/",
      color: "hover:text-accent"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Me <span className="gradient-text">Contacter</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vous avez un projet en tête ? Une question ? N'hésitez pas à me contacter. 
            Je suis toujours ouvert aux nouvelles opportunités et collaborations.
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="glass-effect shadow-medium">
              <CardHeader>
                <CardTitle className="text-2xl gradient-text">
                  Restons en contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4 group">
                    <div className="p-3 rounded-lg bg-gradient-primary shadow-glow">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}

                <div className="pt-6 border-t border-border/50">
                  <h4 className="font-semibold mb-4">Télécharger mon CV</h4>
                  <Button
                    asChild
                    variant="outline"
                    className="glass-effect hover:shadow-glow transition-all duration-300 hover:bg-primary/10 mb-4 w-full"
                  >
                    <a 
                      href="/CvTest.pdf" 
                      download="CV_Lanja_Andriatsiferana.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Télécharger mon CV
                    </a>
                  </Button>
                  
                  <h4 className="font-semibold mb-4 mt-6">Réseaux sociaux</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className={`glass-effect hover:shadow-glow transition-all duration-300 ${social.color}`}
                        asChild
                      >
                        <a href={social.href} target="_blank" rel="noopener noreferrer">
                          {social.icon}
                          <span className="ml-2">{social.label}</span>
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Response Info */}
            <Card className="glass-effect p-6">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto shadow-glow">
                  <Send className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold">Réponse rapide</h3>
                <p className="text-muted-foreground text-sm">
                  Je réponds généralement dans les 24 heures. 
                  Pour les urgences, n'hésitez pas à me contacter par téléphone.
                </p>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="glass-effect shadow-medium">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">
                Envoyez-moi un message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom complet</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom complet"
                    required
                    className="glass-effect"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre.email@exemple.com"
                    required
                    className="glass-effect"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet ou votre question..."
                    rows={6}
                    required
                    className="glass-effect resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  size="lg"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2"></div>
                      Envoi en cours...
                    </div>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Envoyer le message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}