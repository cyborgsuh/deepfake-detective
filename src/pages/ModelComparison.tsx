
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, BarChart, Bar } from 'recharts';

const trainingData = [
  { epoch: 1, pretrained: 0.75, nonPretrained: 0.65 },
  { epoch: 20, pretrained: 0.85, nonPretrained: 0.72 },
  { epoch: 40, pretrained: 0.92, nonPretrained: 0.78 },
  { epoch: 60, pretrained: 0.94, nonPretrained: 0.82 },
  { epoch: 80, pretrained: 0.95, nonPretrained: 0.88 },
  { epoch: 100, pretrained: 0.958, nonPretrained: 0.925 },
];

const metricsData = [
  { name: 'Accuracy', pretrained: 0.958, nonPretrained: 0.925 },
  { name: 'Precision', pretrained: 0.962, nonPretrained: 0.918 },
  { name: 'Recall', pretrained: 0.955, nonPretrained: 0.931 },
  { name: 'F1 Score', pretrained: 0.94, nonPretrained: 0.91 },
];

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
        
          {/* Training Progress Chart */}
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

          {/* Metrics Comparison Chart */}
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

          {/* Model Details Tables */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="backdrop-blur-sm bg-card/50 border-primary/20">
              <CardHeader>
                <CardTitle>Non-pretrained ResNet34</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-primary">Metric</TableHead>
                      <TableHead className="text-primary">Value</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Accuracy</TableCell>
                      <TableCell>92.5%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Training Time</TableCell>
                      <TableCell>48 hours</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>F1 Score</TableCell>
                      <TableCell>0.91</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-sm bg-card/50 border-primary/20">
              <CardHeader>
                <CardTitle>Pretrained ResNet50</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-primary">Metric</TableHead>
                      <TableHead className="text-primary">Value</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Accuracy</TableCell>
                      <TableCell>95.8%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Training Time</TableCell>
                      <TableCell>24 hours</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>F1 Score</TableCell>
                      <TableCell>0.94</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          {/* Key Findings */}
          <Card className="backdrop-blur-sm bg-card/50 border-primary/20">
            <CardHeader>
              <CardTitle>Key Findings</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Pretrained model shows superior performance with 3.3% higher accuracy</li>
                <li>Training time reduced by 50% with pretrained weights</li>
                <li>Better generalization on unseen data with pretrained model</li>
                <li>Higher F1 score indicating better precision and recall balance</li>
              </ul>
            </CardContent>
          </Card>
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
