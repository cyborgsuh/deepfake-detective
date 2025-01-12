import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Upload } from "lucide-react";

const Demo = () => {
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
            Demo
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Test our DeepFake detection model with your own images
          </p>
        </div>
        
        <Card className="max-w-2xl mx-auto mt-8 backdrop-blur-sm bg-card/50 border-primary/20 hover:border-primary/40 transition-colors">
          <CardHeader>
            <CardTitle>Upload Image</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-2 border-dashed border-muted rounded-lg p-8 text-center">
                <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                <p className="text-muted-foreground mb-2">Drag and drop your image here, or click to select</p>
                <Input type="file" className="hidden" id="image-upload" accept="image/*" />
                <Button variant="secondary" onClick={() => document.getElementById('image-upload')?.click()}>
                  Select Image
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Supported formats: JPG, PNG, WEBP (Max size: 5MB)
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="max-w-2xl mx-auto mt-8 backdrop-blur-sm bg-card/50 border-primary/20 hover:border-primary/40 transition-colors">
          <CardHeader>
            <CardTitle>How It Works</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Upload an image you want to analyze</li>
              <li>Our model processes the image using ResNet architecture</li>
              <li>Advanced AI algorithms analyze visual patterns</li>
              <li>Receive detailed results about the authenticity of the image</li>
            </ol>
          </CardContent>
        </Card>

        {/* Floating Elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" />
      </div>
    </div>
  );
};

export default Demo;