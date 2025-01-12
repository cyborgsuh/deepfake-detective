import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const ModelComparison = () => {
  return (
    <div className="container py-8 animate-fade-in">
      <h1 className="text-4xl font-bold mb-6">Model Comparison</h1>
      <p className="text-muted-foreground text-lg mb-8">
        Compare performance metrics across different ResNet architectures
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Non-pretrained ResNet34</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Metric</TableHead>
                  <TableHead>Value</TableHead>
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

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Pretrained ResNet50</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Metric</TableHead>
                  <TableHead>Value</TableHead>
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

      <Card className="hover:shadow-lg transition-shadow">
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
  );
};

export default ModelComparison;