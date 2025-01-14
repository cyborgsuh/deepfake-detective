import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { loadModel } from "@/utils/modelLoader";
import { useToast } from "@/components/ui/use-toast";

export const ModelViewer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleLoadModel = async () => {
    setIsLoading(true);
    try {
      await loadModel();
      toast({
        title: "Model Loaded",
        description: "ResNet50 model has been loaded successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load model. See console for details.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>ResNet50 Model Viewer</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Model architecture: ResNet50 (not pre-trained)
          </p>
          <p className="text-muted-foreground">
            Model file: not-pretrained-1 ResNet 50.pth
          </p>
          <Button 
            onClick={handleLoadModel} 
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Load Model"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};