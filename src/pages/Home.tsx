import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, Brain, Shield, Zap, Upload, 
  Cpu, CheckCircle, Gauge, Clock, Lock,
  FileUp, Search, FileCheck, Scale, Workflow
} from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleDemoClick = () => {
    window.scrollTo({top: 0, behavior: "smooth"});
    navigate("/demo");
  };

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
              Our system utilizes cutting-edge ResNet models and deep learning techniques to accurately detect manipulated media. With extensive training and optimization, we've developed a powerful solution to identify deepfakes with high accuracy and reliability.
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
              As deepfake technology becomes more advanced, detecting manipulated content is crucial for maintaining trust in digital media. Our AI-driven solution helps journalists, policymakers, and social media platforms fight misinformation by identifying fake content in real-time.
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
            <CardDescription>Built for Performance and Accuracy</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>FastAPI for high-performance and scalable API endpoints</li>
              <li>ResNet architecture optimized for image analysis</li>
              <li>Python-based deep learning framework</li>
              <li>Advanced data augmentation techniques to enhance model robustness</li>
            </ul>
          </CardContent>
        </Card>

        <div className="relative min-h-screen w-full overflow-hidden">


      <div className="container py-12 relative z-10 animate-fade-in space-y-2">
        {/* Previous hero section and features grid remain the same */}
        
        {/* New How It Works Section */}
        <section className="py-12 bg-card/30 backdrop-blur-sm rounded-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl mb-4">
              <CardTitle>Deepfake Detection in 3 Simple Steps</CardTitle>
              
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our streamlined process makes it easy to detect manipulated media
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <FileUp className="h-12 w-12" />,
                title: "Upload Media",
                description: "Select an image for analysis and let the AI do the rest",
                highlight: "Supports multiple file formats"
              },
              {
                icon: <Search className="h-12 w-12" />,
                title: "AI Analyzes Content",
                description: "Our deep learning model processes the file and detects manipulation",
                highlight: "Powered by ResNet architecture"
              },
              {
                icon: <FileCheck className="h-12 w-12" />,
                title: "Get Results",
                description: "Receive an accuracy score and a confidence scores",
                highlight: "Comprehensive analysis"
              }
            ].map((step, index) => (
              <div 
                key={index} 
                className="relative p-6 rounded-xl bg-card/40 hover:bg-card/60 transition-all group"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-xl font-bold">
                  {index + 1}
                </div>
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="text-primary transition-transform group-hover:scale-110">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                  <span className="text-sm text-primary/80">{step.highlight}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* New Why Choose Us Section */}
        <section className="py-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">
              Reliable, Fast, and Accurate Deepfake Detection
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Leading the way in AI-powered media authentication
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Scale className="h-8 w-8" />,
                title: "High Accuracy",
                description: "Powered by state-of-the-art ResNet architecture",
                stats: "93% accuracy rate"
              },
              {
                icon: <Clock className="h-8 w-8" />,
                title: "Fast Processing",
                description: "Optimized for real-time analysis",
                stats: "< 2 seconds processing time"
              },
              {
                icon: <Workflow className="h-8 w-8" />,
                title: "Secure & Scalable",
                description: "API designed for security and scalability",   
                stats: "Supports high traffic volumes"
              }
            ].map((feature, index) => (
              <Card 
                key={index}
                className="backdrop-blur-sm bg-card/50 border-primary/20 hover:border-primary/40 transition-all hover:transform hover:scale-[1.02]"
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      {feature.icon}
                    </div>
                    <div>
                      <CardTitle>{feature.title}</CardTitle>
                      <CardDescription>{feature.stats}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="flex flex-col items-center gap-6 py-2">
          <h3 className="text-2xl font-semibold text-center">
            Ready to Try Our Deepfake Detection?
          </h3>
          <Link to="/demo">
            <Button 
              onClick={handleDemoClick}
              size="lg" 
              className="gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg transform transition-all hover:scale-105"
            >
              Try the Demo
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>

      </div>
    </div>
  );
};

export default Home;