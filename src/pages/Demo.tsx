import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Demo = () => {
  return (
    <div className="container py-8 animate-fade-in">
      <h1 className="text-4xl font-bold mb-6">Demo</h1>
      <p className="text-muted-foreground text-lg mb-8">
        Test our DeepFake detection model with your own images
      </p>
      
      <Card className="max-w-2xl mx-auto hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle>Upload Image</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Image upload and testing functionality coming soon.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Demo;