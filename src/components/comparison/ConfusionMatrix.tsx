
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, ResponsiveContainer, Legend } from 'recharts';

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
  
  const formatPercentage = (value: number) => `${((value / total) * 100).toFixed(1)}%`;

  const matrixData = [
    { x: 0, y: 0, value: data.truePositive, label: "True Positive", category: "Correct" },
    { x: 1, y: 0, value: data.falseNegative, label: "False Negative", category: "Error" },
    { x: 0, y: 1, value: data.falsePositive, label: "False Positive", category: "Error" },
    { x: 1, y: 1, value: data.trueNegative, label: "True Negative", category: "Correct" }
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="rounded-lg border border-border/50 bg-background px-3 py-2 text-sm shadow-xl">
          <p className="font-medium">{data.label}</p>
          <p className="text-muted-foreground">Count: {data.value}</p>
          <p className="text-muted-foreground">Percentage: {formatPercentage(data.value)}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="backdrop-blur-sm bg-card/50 border-primary/20">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg md:text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="py-4">
        <div className="h-[400px] w-full">
          <ChartContainer config={{
            Correct: {
              color: "hsl(var(--primary))"
            },
            Error: {
              color: "hsl(var(--destructive))"
            }
          }}>
            <ResponsiveContainer width="100%" height={400}>
              <ScatterChart
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 20
                }}
              >
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                <XAxis 
                  type="number" 
                  dataKey="x" 
                  domain={[-0.5, 1.5]}
                  tickCount={2}
                  tick={{ transform: 'translate(0, 8)' }}
                  ticks={[0, 1]}
                  tickFormatter={(value) => value === 0 ? "Predicted Positive" : "Predicted Negative"}
                />
                <YAxis 
                  type="number" 
                  dataKey="y" 
                  domain={[-0.5, 1.5]}
                  tickCount={2}
                  ticks={[0, 1]}
                  tickFormatter={(value) => value === 0 ? "Actual Positive" : "Actual Negative"}
                />
                <ZAxis type="number" dataKey="value" range={[800, 2000]} />
                <ChartTooltip content={<CustomTooltip />} />
                <Legend />
                <Scatter 
                  data={matrixData.filter(d => d.category === "Correct")}
                  name="Correct"
                  fill="hsl(var(--primary))"
                />
                <Scatter 
                  data={matrixData.filter(d => d.category === "Error")}
                  name="Error"
                  fill="hsl(var(--destructive))"
                />
              </ScatterChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
};
