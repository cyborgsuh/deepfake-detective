import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Home = () => {
  return (
    <div className="container py-8 animate-fade-in">
      <h1 className="text-4xl font-bold mb-6">Welcome to DeepFake Detector</h1>
      <p className="text-muted-foreground text-lg mb-8">
        Advanced deep learning technology for detecting manipulated media
      </p>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>State-of-the-Art Detection</CardTitle>
            <CardDescription>Using advanced ResNet architectures</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Our models achieve industry-leading accuracy in detecting manipulated media across various types of deepfakes.
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Real-Time Analysis</CardTitle>
            <CardDescription>Fast and efficient processing</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Get instant results with our optimized inference pipeline, suitable for both batch processing and real-time applications.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;