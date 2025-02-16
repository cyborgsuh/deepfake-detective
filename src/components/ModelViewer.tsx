import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { loadModel, predictImage } from "@/utils/modelLoader";
import { useToast } from "@/components/ui/use-toast";
import { Loader2, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export const ModelViewer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [prediction, setPrediction] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleLoadModel = async () => {
    setIsLoading(true);
    setError(null);
    try {
      await loadModel();
      toast({
        title: "Model Loaded",
        description: "ResNet50 model has been loaded successfully",
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Failed to load model";
      setError(errorMessage);
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPrediction(null);
      setError(null);
    }
  };

  const handlePredict = async () => {
    if (!selectedFile) {
      toast({
        title: "No Image Selected",
        description: "Please select an image first",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setError(null);
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const result = await predictImage(formData);
      setPrediction(result.prediction);
      toast({
        title: "Prediction Complete",
        description: `Predicted class: ${result.prediction === "0" ? "Fake" : "Real"}`,
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Failed to make prediction";
      setError(errorMessage);
      toast({
        title: "Error",
        description: errorMessage,
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

          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="flex flex-col gap-4">
            <Button 
              onClick={handleLoadModel} 
              disabled={isLoading}
              className="w-full"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Loading...
                </>
              ) : (
                "Load Model"
              )}
            </Button>
            
            <Input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              disabled={isLoading}
              className="w-full"
            />

            <Button 
              onClick={handlePredict}
              disabled={isLoading || !selectedFile}
              variant="secondary"
              className="w-full"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                "Predict"
              )}
            </Button>

            {prediction && (
              <div className="mt-4 p-4 bg-secondary rounded-lg space-y-2">
                <p className="font-medium">
                  Prediction: {prediction === "0" ? "Fake" : "Real"} Image
                </p>
                <p className="text-sm text-muted-foreground">
                  Confidence: {Math.round(prediction.confidence * 100)}%
                </p>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
