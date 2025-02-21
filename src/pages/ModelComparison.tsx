import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { TrainingProgressChart } from "@/components/comparison/TrainingProgressChart";
import { MetricsComparisonChart } from "@/components/comparison/MetricsComparisonChart";

interface ModelMetrics {
  label: string;
  value: string;
}

interface ConfusionMatrixData {
  truePositive: number;
  falsePositive: number;
  falseNegative: number;
  trueNegative: number;
}

interface ModelData {
  metrics: ModelMetrics[];
  matrix: ConfusionMatrixData;
}

const ModelComparison = () => {
  // Centralized model data
  const modelData: Record<string, ModelData> = {
    resnet50: {
      metrics: [
        { label: "Accuracy", value: "95.8%" },
        { label: "Training Time", value: "24 hours" },
        { label: "F1 Score", value: "0.94" },
        { label: "Precision", value: "0.95" },
        { label: "Recall", value: "0.96" },
        { label: "Epochs", value: "100" }
      ],
      matrix: {
        truePositive: 475,
        falsePositive: 25,
        falseNegative: 20,
        trueNegative: 480,
      }
    },
    resnet34: {
      metrics: [
        { label: "Accuracy", value: "92.5%" },
        { label: "Training Time", value: "36 hours" },
        { label: "F1 Score", value: "0.91" },
        { label: "Precision", value: "0.90" },
        { label: "Recall", value: "0.93" },
        { label: "Epochs", value: "100" }
      ],
      matrix: {
        truePositive: 450,
        falsePositive: 50,
        falseNegative: 35,
        trueNegative: 465,
      }
    }
  };

  // Style helper functions
  const getMatrixCellStyle = (key: string) => 
    key.includes('true') 
      ? 'bg-primary/10 hover:bg-primary/20 border-primary/20'
      : 'bg-destructive/10 hover:bg-destructive/20 border-destructive/20';

  const getMetricCardStyle = (label: string) => {
    const styles = {
      'Accuracy': 'bg-primary/10 hover:bg-primary/20 border-primary/20',
      'Training Time': 'bg-destructive/10 hover:bg-destructive/20 border-destructive/20',
      'F1 Score': 'bg-accent/10 hover:bg-accent/20 border-accent/20',
      'Precision': 'bg-primary/10 hover:bg-primary/20 border-primary/20',
      'Recall': 'bg-primary/10 hover:bg-primary/20 border-primary/20',
      'Epochs': 'bg-accent/10 hover:bg-accent/20 border-accent/20'
    };
    return styles[label] || 'bg-secondary/10 hover:bg-secondary/20 border-secondary/20';
  };

  // Reusable component for model details
  const ModelDetailsCard = ({ modelName }: { modelName: string }) => (
    <Card className="backdrop-blur-sm bg-card/50 border-primary/20">
      <div className="p-10">
        <h3 className="text-lg font-semibold mb-4">{modelName} Details</h3>
        <div className="grid grid-cols-2 gap-4">
          {modelData[modelName].metrics.map((metric) => (
            <div
              key={metric.label}
              className={`p-4 rounded-lg border transition-colors duration-200 ${getMetricCardStyle(metric.label)}`}
            >
              <div className="text-sm text-muted-foreground">{metric.label}</div>
              <div className="text-xl font-semibold">{metric.value}</div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );

  // Reusable component for confusion matrix
  const ConfusionMatrixCard = ({ modelName }: { modelName: string }) => {
    const matrix = modelData[modelName].matrix;
    const total = Object.values(matrix).reduce((a, b) => a + b, 0);

    return (
      <Card className="backdrop-blur-sm bg-card/50 border-primary/20 h-full">
        <div className="p-10 h-full">
          <h3 className="text-lg font-semibold mb-6">Confusion Matrix</h3>
          <div className="grid grid-cols-2 gap-3 h-[calc(90%-2rem)]">
            {Object.entries(matrix).map(([key, value]) => (
              <div
                key={key}
                className={`p-4 rounded-lg border transition-colors duration-200 flex flex-col justify-between ${getMatrixCellStyle(key)}`}
              >
                <div>
                  <div className="text-2xl font-bold">{value}</div>
                  <div className="text-sm text-muted-foreground capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                </div>
                <div className="text-xs text-muted-foreground mt-2">
                  {((value / total) * 100).toFixed(1)}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    );
  };

  return (
    <div className="min-h-screen w-full pb-12">
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Header Section */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Model Comparison
          </h1>
          <p className="text-muted-foreground text-lg">
            Compare performance metrics across different ResNet architectures
          </p>
          <Separator className="mt-4" />
        </div>

        {/* Main Content */}
        <div className="grid gap-8">
          {/* Charts Section */}
          <div className="grid lg:grid-cols-2 gap-6">
            <TrainingProgressChart />
            <MetricsComparisonChart />
          </div>

          {/* Model Details Section */}
          <Tabs defaultValue="resnet50" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              {Object.keys(modelData).map((model) => (
                <TabsTrigger key={model} value={model}>
                  {model.toUpperCase()}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {Object.keys(modelData).map((model) => (
              <TabsContent key={model} value={model} className="space-y-6">
                <div className="grid lg:grid-cols-2 gap-6">
                  <ModelDetailsCard modelName={model} />
                  <ConfusionMatrixCard modelName={model} />
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ModelComparison;
