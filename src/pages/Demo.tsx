import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Upload } from "lucide-react";

const Demo = () => {
  return (
    <div className="container py-8 animate-fade-in">
      <h1 className="text-4xl font-bold mb-6">Demo</h1>
      <p className="text-muted-foreground text-lg mb-8">
        Test our DeepFake detection model with your own images
      </p>
      
      <Card className="max-w-2xl mx-auto hover:shadow-lg transition-shadow mb-8">
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

      <Card className="max-w-2xl mx-auto hover:shadow-lg transition-shadow">
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
    </div>
  );
};

export default Demo;