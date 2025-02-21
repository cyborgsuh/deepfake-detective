import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Linkedin, Github, Globe, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const contactLinks = [
  {
    href: "https://mohammed-suhaib-1.netlify.app/",
    icon: Globe,
    title: "Portfolio Website",
    description: "Explore my projects and work experience",
    color: "text-green-500",
  },
  {
    href: "mailto:mosuh64@gmail.com",
    icon: Mail,
    title: "Email",
    description: "Get in touch via email",
    color: "text-green-500",
  },
  {
    href: "https://www.linkedin.com/in/mosuh64/",
    icon: Linkedin,
    title: "LinkedIn",
    description: "Connect professionally",
    color: "text-green-500",
  },
  {
    href: "https://github.com/cyborgsuh",
    icon: Github,
    title: "GitHub",
    description: "Check out my code repositories",
    color: "text-green-500 dark:text-gray-300",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b">
      <div className="w-full max-w-4xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-8"
        >
          {/* Header Section */}
          <Card className="backdrop-blur-md bg-card/90 border border-primary/20 shadow-lg">
            <CardHeader className="text-center space-y-4">
              <motion.div variants={itemVariants}>
                <CardTitle className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Let's Connect
                </CardTitle>
              </motion.div>
              <motion.p
                variants={itemVariants}
                className="text-lg text-muted-foreground max-w-2xl mx-auto"
              >
                I'm always open to new opportunities, collaborations, and interesting
                conversations.
              </motion.p>
            </CardHeader>
          </Card>

          {/* Contact Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {contactLinks.map((link, index) => (
              <motion.div key={index} variants={itemVariants}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <Card className="h-full backdrop-blur-sm bg-card/80 border border-primary/20 
                                 hover:border-primary/40 transition-all duration-300 
                                 hover:shadow-lg hover:shadow-primary/5">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4">
                          <div className={`p-3 rounded-xl bg-primary/10 ${link.color}`}>
                            <link.icon className="h-6 w-6" />
                          </div>
                          <div className="space-y-1">
                            <h3 className="font-semibold text-lg flex items-center gap-2">
                              {link.title}
                              <ArrowUpRight className="h-4 w-4 opacity-0 -translate-y-1 
                                                     group-hover:opacity-100 group-hover:translate-y-0 
                                                     transition-all duration-300" />
                            </h3>
                            <p className="text-muted-foreground text-sm">
                              {link.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </motion.div>
            ))}
          </div>

          {/* Footer Card */}
          <Card className="backdrop-blur-sm bg-card/80 border border-primary/20">
            <CardContent className="p-6 text-center">
              <motion.p
                variants={itemVariants}
                className="text-muted-foreground"
              >
                Based in Dubai, UAE • Available for remote opportunities
              </motion.p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
