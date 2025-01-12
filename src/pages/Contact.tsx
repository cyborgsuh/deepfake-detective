import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Neural Network Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-full h-full bg-gradient-to-br from-purple-900/50 via-blue-900/50 to-black/50" />
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.12'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-8 relative z-10 animate-fade-in">
        <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Contact Us
        </h1>
        <p className="text-muted-foreground text-lg mb-8">
          Get in touch with our team
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="hover:shadow-lg transition-shadow backdrop-blur-sm bg-black/40 border-purple-500/20">
            <CardHeader>
              <CardTitle className="text-blue-400">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <Input 
                    placeholder="Your Name" 
                    className="bg-black/30 border-purple-500/30 focus:border-blue-400"
                  />
                </div>
                <div>
                  <Input 
                    type="email" 
                    placeholder="Your Email" 
                    className="bg-black/30 border-purple-500/30 focus:border-blue-400"
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Your Message" 
                    className="min-h-[150px] bg-black/30 border-purple-500/30 focus:border-blue-400" 
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow backdrop-blur-sm bg-black/40 border-purple-500/20">
            <CardHeader>
              <CardTitle className="text-blue-400">Connect With Us</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-2 group">
                  <Mail className="h-5 w-5 text-blue-400 group-hover:text-purple-400 transition-colors" />
                  <a href="mailto:contact@deepfake-detective.ai" className="text-blue-400 hover:text-purple-400 transition-colors">
                    contact@deepfake-detective.ai
                  </a>
                </div>
                <div className="flex items-center gap-2 group">
                  <Linkedin className="h-5 w-5 text-blue-400 group-hover:text-purple-400 transition-colors" />
                  <a href="#" className="text-blue-400 hover:text-purple-400 transition-colors">
                    LinkedIn Profile
                  </a>
                </div>
                <div className="flex items-center gap-2 group">
                  <Twitter className="h-5 w-5 text-blue-400 group-hover:text-purple-400 transition-colors" />
                  <a href="#" className="text-blue-400 hover:text-purple-400 transition-colors">
                    Twitter Profile
                  </a>
                </div>
                <div className="mt-6 pt-6 border-t border-purple-500/20">
                  <p className="text-muted-foreground">
                    We typically respond within 24-48 hours during business days.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;