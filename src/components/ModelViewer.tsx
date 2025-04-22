import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { loadModel, predictImage, getModelStatus, ModelName } from "@/utils/modelLoader";
import { useToast } from "@/components/ui/use-toast";
import { Loader2, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface PredictionResult {
  prediction: string;
  confidence: number;
  model_used?: string;
}

interface ModelViewerProps {
  onInteract?: () => boolean;
  forceLoad?: boolean;
}

export const ModelViewer = ({ onInteract, forceLoad }: ModelViewerProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [prediction, setPrediction] = useState<PredictionResult | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState<ModelName>('resnet50');
  const [modelStatus, setModelStatus] = useState<{status: string, model_name?: string} | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  // Check if a model is already loaded when component mounts
  useEffect(() => {
    const checkModelStatus = async () => {
      try {
        const status = await getModelStatus();
        setModelStatus(status);
        if (status.model_name) {
          setSelectedModel(status.model_name as ModelName);
        }
      } catch (error) {
        console.error("Could not fetch model status:", error);
      }
    };
    
    checkModelStatus();
  }, []);

  useEffect(() => {
    if (forceLoad) {
      handleLoadModel();
    }
  }, [forceLoad]);

  const handleLoadModel = async () => {
    if (onInteract && onInteract()) {
      return;
    }
    setIsLoading(true);
    setError(null);
    try {
      const result = await loadModel(selectedModel);
      setModelStatus({ status: 'loaded', model_name: selectedModel });
      toast({
        title: "Model Loaded",
        description: `${selectedModel === 'resnet34' ? 'ResNet-34' : 'ResNet-50'} model has been loaded successfully`,
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
    if (onInteract && onInteract()) {
      return;
    }
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
      setPrediction(result);
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

  const getModelDisplayName = (modelName?: string) => {
    if (!modelName) return '';
    return modelName === 'resnet34' ? 'ResNet-34' : 'ResNet-50';
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>ResNet Model Viewer</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground">
              {modelStatus?.status === 'loaded' 
                ? `Current model: ${getModelDisplayName(modelStatus.model_name)}`
                : 'No model loaded'}
            </p>
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <div className="md:col-span-2">
                <Select
                  value={selectedModel}
                  onValueChange={(value: ModelName) => setSelectedModel(value)}
                  disabled={isLoading}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select model" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="resnet34">ResNet-34</SelectItem>
                    <SelectItem value="resnet50">ResNet-50</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
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
            </div>
            
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
              disabled={isLoading || !selectedFile || modelStatus?.status !== 'loaded'}
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
                  Prediction: {prediction.prediction === "0" ? "Fake" : "Real"} Image
                </p>
                <p className="text-sm text-muted-foreground">
                  Confidence: {Math.round(prediction.confidence * 100)}%
                </p>
                {prediction.model_used && (
                  <p className="text-xs text-muted-foreground">
                    Model used: {getModelDisplayName(prediction.model_used)}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
