
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Linkedin, Github, Globe } from "lucide-react";

const Contact = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden px-4 sm:px-6">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent opacity-50" />
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      {/* Content */}
      <div className="container max-w-4xl mx-auto py-8 relative z-10">
        <div className="space-y-4 text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent animate-fade-in">
            Let's Connect
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Feel free to reach out for collaborations or just to say hello!
          </p>
        </div>

        <div className="w-full max-w-xl mx-auto px-4">
          <Card className="backdrop-blur-sm bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-lg hover:shadow-primary/20">
            <CardHeader>
              <CardTitle className="text-center text-xl md:text-2xl">Connect With Me</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    href: "https://mohammed-suhaib-1.netlify.app/",
                    icon: Globe,
                    title: "Portfolio Website",
                    description: "Visit my portfolio",
                  },
                  {
                    href: "mailto:mosuh64@gmail.com",
                    icon: Mail,
                    title: "Email",
                    description: "mosuh64@gmail.com",
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
                    description: "Check out my projects",
                  },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target={item.href.startsWith('http') ? "_blank" : undefined}
                    rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-all duration-300 transform hover:translate-x-1 hover:scale-[1.02] hover:shadow-lg will-change-transform"
                  >
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors group-hover:rotate-12 duration-300">
                      <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="flex-1 transition-all duration-300">
                      <h3 className="font-medium text-base sm:text-lg text-foreground/80 group-hover:text-primary transition-all duration-300 transform group-hover:translate-x-2">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground group-hover:text-foreground/90 transition-all duration-300 transform group-hover:translate-x-2">
                        {item.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Floating Elements - Made more responsive */}
        <div className="absolute top-[10%] right-[5%] w-48 h-48 md:w-64 md:h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[10%] left-[5%] w-72 h-72 md:w-96 md:h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" />
      </div>
    </div>
  );
};

export default Contact;
