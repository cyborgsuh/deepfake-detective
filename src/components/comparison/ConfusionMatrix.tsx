import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";
import { ResponsiveContainer } from 'recharts';
interface ConfusionMatrixProps {
  title: string;
  data: {
    truePositive: number;
    falsePositive: number;
    falseNegative: number;
    trueNegative: number;
  };
}
export const ConfusionMatrix = ({
  title,
  data
}: ConfusionMatrixProps) => {
  const total = data.truePositive + data.falsePositive + data.falseNegative + data.trueNegative;
  const formatPercentage = (value: number) => `${(value / total * 100).toFixed(1)}%`;
  const getColor = (value: number) => {
    const percentage = value / total * 100;
    return `hsl(var(--primary) / ${percentage}%)`;
  };
  return <Card className="backdrop-blur-sm bg-card/50 border-primary/20">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg md:text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="mx-[25px] my-[25px] py-[20px] px-[20px]">
        <div className="h-[400px] w-full flex items-center justify-center">
          <div className="grid grid-cols-2 gap-1 w-full max-w-md aspect-square">
            {/* Column Labels */}
            <div className="col-span-2 grid grid-cols-2 mb-1">
              <div className="text-center text-sm font-medium">Predicted Positive</div>
              <div className="text-center text-sm font-medium">Predicted Negative</div>
            </div>
            
            {/* Row Label + True Positive */}
            <div className="grid grid-cols-[auto,1fr] items-center">
              <div className="rotate-180 text-sm font-medium [writing-mode:vertical-lr] pr-2 mx-0 px-[10px]">
                Actual Positive
              </div>
              <div className="aspect-square flex items-center justify-center p-2 rounded-lg transition-colors" style={{
              backgroundColor: getColor(data.truePositive)
            }}>
                <div className="text-center">
                  <div className="font-bold">{data.truePositive}</div>
                  <div className="text-xs opacity-75">{formatPercentage(data.truePositive)}</div>
                  <div className="text-xs mt-1">True Positive</div>
                </div>
              </div>
            </div>
            
            {/* False Negative */}
            <div className="aspect-square flex items-center justify-center p-2 rounded-lg transition-colors" style={{
            backgroundColor: getColor(data.falseNegative)
          }}>
              <div className="text-center">
                <div className="font-bold">{data.falseNegative}</div>
                <div className="text-xs opacity-75">{formatPercentage(data.falseNegative)}</div>
                <div className="text-xs mt-1">False Negative</div>
              </div>
            </div>
            
            {/* Row Label + False Positive */}
            <div className="grid grid-cols-[auto,1fr] items-center">
              <div className="rotate-180 text-sm font-medium [writing-mode:vertical-lr] pr-2">
                Actual Negative
              </div>
              <div className="aspect-square flex items-center justify-center p-2 rounded-lg transition-colors" style={{
              backgroundColor: getColor(data.falsePositive)
            }}>
                <div className="text-center">
                  <div className="font-bold">{data.falsePositive}</div>
                  <div className="text-xs opacity-75">{formatPercentage(data.falsePositive)}</div>
                  <div className="text-xs mt-1">False Positive</div>
                </div>
              </div>
            </div>
            
            {/* True Negative */}
            <div className="aspect-square flex items-center justify-center p-2 rounded-lg transition-colors" style={{
            backgroundColor: getColor(data.trueNegative)
          }}>
              <div className="text-center">
                <div className="font-bold">{data.trueNegative}</div>
                <div className="text-xs opacity-75">{formatPercentage(data.trueNegative)}</div>
                <div className="text-xs mt-1">True Negative</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>;
};