
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import { metricsData } from "@/data/modelComparisonData";

export const MetricsComparisonChart = () => {
  return (
    <Card className="backdrop-blur-sm bg-card/50 border-primary/20">
      <CardHeader>
        <CardTitle>Performance Metrics Comparison</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px] w-full">
          <ChartContainer
            config={{
              pretrained: { color: "hsl(var(--primary))" },
              nonPretrained: { color: "hsl(var(--destructive))" },
            }}
          >
            <BarChart data={metricsData}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis 
                dataKey="name" 
                stroke="hsl(var(--muted-foreground))"
              />
              <YAxis 
                domain={[0.8, 1]} 
                stroke="hsl(var(--muted-foreground))"
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Legend />
              <Bar
                dataKey="pretrained"
                name="Pretrained ResNet50"
                fill="hsl(var(--primary))"
              />
              <Bar
                dataKey="nonPretrained"
                name="Non-pretrained ResNet34"
                fill="hsl(var(--destructive))"
              />
            </BarChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
};
