import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Hyperparameters = () => {
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
            Hyperparameters
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Model training parameters and configurations optimized for deepfake detection
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <Card className="backdrop-blur-sm bg-card/50 border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader>
              <CardTitle className="text-primary">Training Parameters</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-primary">Parameter</TableHead>
                    <TableHead className="text-primary">Value</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Optimizer</TableCell>
                    <TableCell>AdamW</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Learning Rate</TableCell>
                    <TableCell>0.001</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Batch Size</TableCell>
                    <TableCell>64</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Epochs</TableCell>
                    <TableCell>10</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-sm bg-card/50 border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader>
              <CardTitle className="text-primary">Regularization</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-primary">Technique</TableHead>
                    <TableHead className="text-primary">Value</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Weight Decay</TableCell>
                    <TableCell>1e-4</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Label Smoothing</TableCell>
                    <TableCell>0.1</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Early Stopping Patience</TableCell>
                    <TableCell>10 epochs</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6 backdrop-blur-sm bg-card/50 border-primary/20 hover:border-primary/40 transition-colors">
          <CardHeader>
            <CardTitle className="text-primary">Parameter Selection Process</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
            Hyperparameters and training strategies were refined through iterative experimentation to achieve optimal model performance and generalization
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Empirical tuning based on validation performance to optimize learning rate, batch size, and weight decay</li>
              <li>Manual experimentation with different ResNet architectures (ResNet34 vs. ResNet50) to enhance model performance, especially recall</li>
              <li>Data augmentation techniques such as Random Rotation, Horizontal Flip, and ColorJitter to improve model robustness against variations</li>
              <li>Incorporation of label smoothing (0.1) to prevent overconfidence in predictions and improve generalization</li>
              <li>Weight decay (1e-4) in AdamW optimizer to mitigate overfitting</li>
              <li>Tracking validation loss and accuracy, with the best-performing model saved automatically</li>
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

export default Hyperparameters;