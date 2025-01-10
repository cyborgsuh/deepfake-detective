import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Hyperparameters = () => {
  return (
    <div className="container py-8 animate-fade-in">
      <h1 className="text-4xl font-bold mb-6">Hyperparameters</h1>
      <p className="text-muted-foreground text-lg mb-8">
        Model training parameters and configurations
      </p>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Training Parameters</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Training hyperparameters details coming soon.
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Model Configuration</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Model architecture configurations coming soon.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Hyperparameters;