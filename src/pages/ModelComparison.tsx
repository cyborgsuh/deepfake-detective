
import { TrainingProgressChart } from "@/components/comparison/TrainingProgressChart";
import { MetricsComparisonChart } from "@/components/comparison/MetricsComparisonChart";
import { ModelDetailsTable } from "@/components/comparison/ModelDetailsTable";
import { KeyFindings } from "@/components/comparison/KeyFindings";

const ModelComparison = () => {
  return (
    <div className="min-h-screen w-full pb-12">
      {/* Content */}
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Model Comparison
            </h1>
            <p className="text-muted-foreground text-lg">
              Compare performance metrics across different ResNet architectures
            </p>
          </div>
        
          <TrainingProgressChart />
          <MetricsComparisonChart />

          <div className="grid md:grid-cols-2 gap-6">
            <ModelDetailsTable 
              title="Non-pretrained ResNet34"
              accuracy="92.5%"
              trainingTime="48 hours"
              f1Score="0.91"
            />
            <ModelDetailsTable 
              title="Pretrained ResNet50"
              accuracy="95.8%"
              trainingTime="24 hours"
              f1Score="0.94"
            />
          </div>

          <KeyFindings />
        </div>
      </div>

      {/* Background Elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent opacity-50" />
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
    </div>
  );
};

export default ModelComparison;
