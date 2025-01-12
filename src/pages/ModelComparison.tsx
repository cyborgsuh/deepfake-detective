import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const ModelComparison = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent opacity-50" />
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      {/* Content */}
      <div className="container py-8 relative z-10 animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Model Comparison
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Compare performance metrics across different ResNet architectures
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <Card className="backdrop-blur-sm bg-card/50 border-primary/20 hover:border-primary/40 transition-colors">
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

          <Card className="backdrop-blur-sm bg-card/50 border-primary/20 hover:border-primary/40 transition-colors">
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

        <Card className="mt-8 backdrop-blur-sm bg-card/50 border-primary/20 hover:border-primary/40 transition-colors">
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

        {/* Floating Elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" />
      </div>
    </div>
  );
};

export default ModelComparison;