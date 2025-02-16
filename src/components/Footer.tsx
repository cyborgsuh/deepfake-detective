
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

export const Footer = () => {
  return (
    <footer className="w-full py-6 px-4 mt-auto bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-20 md:flex-row">
        <p className="text-sm leading-loose text-center text-muted-foreground md:text-left">
          Built by{" "}
          <a
            href="https://mohammed-suhaib-1.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Mohammed Suhaib
          </a>
          . The source code is available on{" "}
          <a
            href="https://github.com/cyborgsuh/deepfake-detective"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/cyborgsuh" target="_blank" rel="noreferrer">
              <Github className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://www.linkedin.com/in/mosuh64/" target="_blank" rel="noreferrer">
              <Linkedin className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:mosuh64@gmail.com">
              <Mail className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
};
