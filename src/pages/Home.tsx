import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
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
            Deepfake Detection Using ResNet
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Advanced deep learning technology for detecting manipulated media
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <Card className="backdrop-blur-sm bg-card/50 border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-6 w-6 text-primary" />
                Advanced AI Technology
              </CardTitle>
              <CardDescription>Powered by ResNet Architecture</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our system leverages state-of-the-art ResNet models and deep learning techniques to accurately detect manipulated media content. Through extensive training and optimization, we've developed a robust solution for identifying deepfakes.
              </p>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-sm bg-card/50 border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                Real-World Impact
              </CardTitle>
              <CardDescription>Enhancing Digital Trust</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                In an era where digital manipulation becomes increasingly sophisticated, our technology helps maintain trust in digital media across various sectors including journalism, politics, and social media platforms.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 backdrop-blur-sm bg-card/50 border-primary/20 hover:border-primary/40 transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-primary" />
              Technology Stack
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>FastAPI for robust and high-performance API endpoints</li>
              <li>ResNet architecture optimized for image analysis</li>
              <li>Python-based deep learning framework</li>
              <li>Advanced data augmentation techniques</li>
            </ul>
          </CardContent>
        </Card>

        <div className="flex justify-center mt-8">
          <Link to="/demo">
            <Button size="lg" className="gap-2 bg-primary/10 hover:bg-primary/20 backdrop-blur-sm">
              Try the Demo
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" />
      </div>
    </div>
  );
};

export default Home;