
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ConfusionMatrixProps {
  title: string;
  data: {
    truePositive: number;
    falsePositive: number;
    falseNegative: number;
    trueNegative: number;
  };
}

export const ConfusionMatrix = ({ title, data }: ConfusionMatrixProps) => {
  const total = data.truePositive + data.falsePositive + data.falseNegative + data.trueNegative;
  
  const formatPercentage = (value: number) => {
    return `${((value / total) * 100).toFixed(1)}%`;
  };

  return (
    <Card className="backdrop-blur-sm bg-card/50 border-primary/20">
      <CardHeader>
        <CardTitle className="text-lg md:text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2">
          <div className="col-span-2 text-center text-sm text-muted-foreground mb-2">
            Predicted
          </div>
          <div className="text-right text-sm text-muted-foreground pr-2">Actual</div>
          <div className="grid grid-cols-2 col-span-1 gap-2">
            <div className="text-center text-sm text-muted-foreground">Positive</div>
            <div className="text-center text-sm text-muted-foreground">Negative</div>
          </div>
          <div className="text-right text-sm text-muted-foreground pr-2">Positive</div>
          <div className="grid grid-cols-2 gap-2">
            <div className="p-4 bg-primary/20 rounded text-center font-semibold">
              {formatPercentage(data.truePositive)}
            </div>
            <div className="p-4 bg-destructive/20 rounded text-center font-semibold">
              {formatPercentage(data.falseNegative)}
            </div>
          </div>
          <div className="text-right text-sm text-muted-foreground pr-2">Negative</div>
          <div className="grid grid-cols-2 gap-2">
            <div className="p-4 bg-destructive/20 rounded text-center font-semibold">
              {formatPercentage(data.falsePositive)}
            </div>
            <div className="p-4 bg-primary/20 rounded text-center font-semibold">
              {formatPercentage(data.trueNegative)}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
