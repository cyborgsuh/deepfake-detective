import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container py-8 animate-fade-in">
      <h1 className="text-4xl font-bold mb-4">Deepfake Detection Using ResNet</h1>
      <p className="text-muted-foreground text-lg mb-8">
        Advanced deep learning technology for detecting manipulated media
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-6 w-6" />
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

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-6 w-6" />
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

      <Card className="mb-8 hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-6 w-6" />
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

      <div className="flex justify-center">
        <Link to="/demo">
          <Button size="lg" className="gap-2">
            Try the Demo
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;