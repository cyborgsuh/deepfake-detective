
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import { trainingData } from "@/data/modelComparisonData";

export const TrainingProgressChart = () => {
  return (
    <Card className="backdrop-blur-sm bg-card/50 border-primary/20">
      <CardHeader>
        <CardTitle>Training Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px] w-full">
          <ChartContainer
            config={{
              pretrained: { color: "hsl(var(--primary))" },
              nonPretrained: { color: "hsl(var(--destructive))" },
            }}
          >
            <LineChart data={trainingData}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis 
                dataKey="epoch" 
                stroke="hsl(var(--muted-foreground))"
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Legend />
              <Line
                type="monotone"
                dataKey="pretrained"
                name="Pretrained ResNet50"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="nonPretrained"
                name="Non-pretrained ResNet34"
                stroke="hsl(var(--destructive))"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
};
