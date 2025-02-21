import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

export const Footer = () => {
  return (
    <footer className="w-full py-6 px-4 mt-auto bg-gradient-to-b from-background/80 to-secondary/40 backdrop-blur-md border-t border-border">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-20 md:flex-row">
        <p className="text-sm font-medium text-muted-foreground text-center md:text-left">
          Built by{" "}
          <a
            href="https://mohammed-suhaib-1.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="font-semibold underline underline-offset-4 hover:text-primary transition-colors"
          >
            Mohammed Suhaib
          </a>
          . The source code is available on{" "}
          <a
            href="https://github.com/cyborgsuh/deepfake-detective"
            target="_blank"
            rel="noreferrer"
            className="font-semibold underline underline-offset-4 hover:text-primary transition-colors"
          >
            GitHub
          </a>
          .
        </p>
        <div className="flex items-center gap-4">
          {[
            { href: "https://github.com/cyborgsuh", icon: Github },
            { href: "https://www.linkedin.com/in/mosuh64/", icon: Linkedin },
            { href: "mailto:mosuh64@gmail.com", icon: Mail },
          ].map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              size="icon"
              asChild
              className="hover:bg-primary/10 transition-transform hover:scale-110"
            >
              <a href={item.href} target="_blank" rel="noreferrer">
                <item.icon className="h-5 w-5 text-primary" />
              </a>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
};