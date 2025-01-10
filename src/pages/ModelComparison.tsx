import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ModelComparison = () => {
  return (
    <div className="container py-8 animate-fade-in">
      <h1 className="text-4xl font-bold mb-6">Model Comparison</h1>
      <p className="text-muted-foreground text-lg mb-8">
        Compare performance metrics across different ResNet architectures
      </p>
      
      <div className="grid md:grid-cols-3 gap-6">
        {["ResNet-18", "ResNet-50", "ResNet-152"].map((model) => (
          <Card key={model} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{model}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Performance metrics and architecture details coming soon.
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ModelComparison;