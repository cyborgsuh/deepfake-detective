
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Hover3DCard } from "@/components/ui/hover-card-3d";

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
          <Hover3DCard title="Training Parameters">
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
          </Hover3DCard>

          <Hover3DCard title="Regularization">
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
          </Hover3DCard>
        </div>

        <Hover3DCard className="mt-6" title="Parameter Selection Process">
          <p className="text-muted-foreground mb-4">
            Hyperparameters were selected through a combination of:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Grid search for learning rate and batch size</li>
            <li>Cross-validation to prevent overfitting</li>
            <li>Manual fine-tuning based on validation performance</li>
            <li>Industry best practices for similar architectures</li>
          </ul>
        </Hover3DCard>

        {/* Floating Elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" />
      </div>
    </div>
  );
};

export default Hyperparameters;
