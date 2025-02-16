import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import { trainingData } from "@/data/modelComparisonData";
export const TrainingProgressChart = () => {
  return <Card className="backdrop-blur-sm bg-card/50 border-primary/20 py-[43px]">
      <CardHeader>
        <CardTitle>Training Progress</CardTitle>
      </CardHeader>
      <CardContent className="relative py-[120px]">
        <div className="h-[400px] w-full relative z-20">
          <ChartContainer config={{
          pretrained: {
            color: "hsl(var(--primary))"
          },
          nonPretrained: {
            color: "hsl(var(--destructive))"
          }
        }}>
            <LineChart data={trainingData} margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5
          }}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis dataKey="epoch" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Legend verticalAlign="bottom" align="center" height={36} iconSize={10} iconType="circle" />
              <Line type="monotone" dataKey="pretrained" name="Pretrained ResNet50" stroke="hsl(var(--primary))" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="nonPretrained" name="Non-pretrained ResNet34" stroke="hsl(var(--destructive))" strokeWidth={2} dot={false} />
            </LineChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>;
};