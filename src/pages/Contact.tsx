import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent opacity-50" />
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      {/* Content */}
      <div className="container py-8 relative z-10 animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Contact Us
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Get in touch for inquiries, collaborations, or feedback
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <Card className="backdrop-blur-sm bg-card/50 border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <Input placeholder="Your Name" className="bg-background/50" />
                </div>
                <div>
                  <Input type="email" placeholder="Your Email" className="bg-background/50" />
                </div>
                <div>
                  <Textarea placeholder="Your Message" className="bg-background/50" rows={4} />
                </div>
                <Button className="w-full bg-primary/10 hover:bg-primary/20">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-sm bg-card/50 border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader>
              <CardTitle>Connect With Us</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <a href="mailto:contact@example.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="h-5 w-5" />
                  contact@example.com
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                  LinkedIn Profile
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="h-5 w-5" />
                  Twitter Profile
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" />
      </div>
    </div>
  );
};

export default Contact;