import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Hyperparameters = () => {
  return (
    <div className="container py-8 animate-fade-in">
      <h1 className="text-4xl font-bold mb-6">Hyperparameters</h1>
      <p className="text-muted-foreground text-lg mb-8">
        Model training parameters and configurations
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Training Parameters</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Parameter</TableHead>
                  <TableHead>Value</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Optimizer</TableCell>
                  <TableCell>AdamW</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Learning Rate</TableCell>
                  <TableCell>0.0001</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Batch Size</TableCell>
                  <TableCell>32</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Epochs</TableCell>
                  <TableCell>100</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Regularization</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Technique</TableHead>
                  <TableHead>Value</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Weight Decay</TableCell>
                  <TableCell>0.01</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Dropout Rate</TableCell>
                  <TableCell>0.3</TableCell>
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

      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle>Parameter Selection Process</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Hyperparameters were selected through a combination of:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Grid search for learning rate and batch size</li>
            <li>Cross-validation to prevent overfitting</li>
            <li>Manual fine-tuning based on validation performance</li>
            <li>Industry best practices for similar architectures</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Hyperparameters;