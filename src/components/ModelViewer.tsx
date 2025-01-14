import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { loadModel, predictImage } from "@/utils/modelLoader";
import { useToast } from "@/components/ui/use-toast";

export const ModelViewer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [prediction, setPrediction] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
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

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    setIsLoading(true);
    try {
      const result = await predictImage(formData);
      setPrediction(result.prediction);
      toast({
        title: "Prediction Complete",
        description: `Predicted class: ${result.prediction}`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to make prediction. See console for details.",
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
          <div className="flex flex-col gap-4">
            <Button 
              onClick={handleLoadModel} 
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Load Model"}
            </Button>
            <Input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              disabled={isLoading}
            />
            {prediction && (
              <div className="mt-4 p-4 bg-secondary rounded-lg">
                <p className="font-medium">Prediction: {prediction}</p>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};