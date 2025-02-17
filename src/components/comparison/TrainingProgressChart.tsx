
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';
import { trainingData } from "@/data/modelComparisonData";

export const TrainingProgressChart = () => {
  return (
    <Card className="backdrop-blur-sm bg-card/50 border-primary/20">
      <CardHeader className="pb-2">
        <CardTitle>Training Progress</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="h-[400px] w-full">
          <ChartContainer config={{
            resnet50: {
              color: "hsl(var(--primary))"
            },
            resnet34: {
              color: "hsl(var(--destructive))"
            }
          }}>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={trainingData} margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 35
              }}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                <XAxis 
                  dataKey="epoch" 
                  stroke="hsl(var(--muted-foreground))"
                  tickLine={false}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  tickLine={false}
                  domain={[0.6, 1]}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend 
                  verticalAlign="bottom" 
                  align="center" 
                  height={36}
                  iconSize={10}
                  iconType="circle"
                />
                <Line 
                  type="monotone" 
                  dataKey="resnet50" 
                  name="ResNet 50" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={2} 
                  dot={false}
                />
                <Line 
                  type="monotone" 
                  dataKey="resnet34" 
                  name="ResNet 34" 
                  stroke="hsl(var(--destructive))" 
                  strokeWidth={2} 
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
};
