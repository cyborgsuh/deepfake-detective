
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';
import { metricsData } from "@/data/modelComparisonData";

export const MetricsComparisonChart = () => {
  return (
    <Card className="backdrop-blur-sm bg-card/50 border-primary/20">
      <CardHeader className="pb-4">
        <CardTitle>Performance Metrics Comparison</CardTitle>
      </CardHeader>
      <CardContent className="py-4">
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
              <BarChart data={metricsData} margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 20
              }}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                <YAxis domain={[0.8, 1]} stroke="hsl(var(--muted-foreground))" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend 
                  verticalAlign="bottom" 
                  align="center" 
                  height={36}
                  iconSize={10}
                  iconType="circle"
                />
                <Bar dataKey="resnet50" name="ResNet 50" fill="hsl(var(--primary))" />
                <Bar dataKey="resnet34" name="ResNet 34" fill="hsl(var(--destructive))" />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
};
