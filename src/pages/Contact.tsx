import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Linkedin, Github, Globe } from "lucide-react";

const Contact = () => {
  const contactLinks = [
    {
      href: "https://mohammed-suhaib-1.netlify.app/",
      icon: Globe,
      title: "Portfolio Website",
      description: "Check out my work and projects",
    },
    {
      href: "mailto:mosuh64@gmail.com",
      icon: Mail,
      title: "Email",
      description: "Send me a message directly",
    },
    {
      href: "https://www.linkedin.com/in/mosuh64/",
      icon: Linkedin,
      title: "LinkedIn",
      description: "Connect with me professionally",
    },
    {
      href: "https://github.com/cyborgsuh",
      icon: Github,
      title: "GitHub",
      description: "Explore my code repositories",
    },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-2xl backdrop-blur-md bg-card/70 border border-primary/20 shadow-xl hover:shadow-primary/20 transition-all duration-500">
        <CardHeader className="text-center space-y-4 pb-8">
          <CardTitle className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Let's Connect
          </CardTitle>
          <p className="text-lg text-muted-foreground">
            Reach out for collaborations or just to say hello!
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {contactLinks.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 
                         border border-primary/10 hover:border-primary/30 
                         transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 
                              transition-colors duration-300">
                    <item.icon className="h-6 w-6 text-primary group-hover:scale-110 
                                      transition-transform duration-300" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>Available for opportunities and collaborations</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;
