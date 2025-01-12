import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const DataAugmentation = () => {
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
            Data Augmentation
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Explore the preprocessing techniques used to enhance model performance
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <Card className="backdrop-blur-sm bg-card/50 border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader>
              <CardTitle>Image Preprocessing</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-primary">Technique</TableHead>
                    <TableHead className="text-primary">Purpose</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>ColorJitter</TableCell>
                    <TableCell>Adjusts brightness, contrast, and saturation</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Random Flip</TableCell>
                    <TableCell>Horizontal image flipping</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Random Rotation</TableCell>
                    <TableCell>Slight rotation variations</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-sm bg-card/50 border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader>
              <CardTitle>Dataset Structure</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>80% training data, 20% validation split</li>
                <li>Balanced dataset with equal real/fake samples</li>
                <li>Multiple image formats supported</li>
                <li>Diverse source material for better generalization</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 backdrop-blur-sm bg-card/50 border-primary/20 hover:border-primary/40 transition-colors">
          <CardHeader>
            <CardTitle>Impact on Model Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Data augmentation techniques significantly improve model robustness and prevent overfitting by:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Increasing effective dataset size through transformations</li>
              <li>Improving model generalization to different lighting conditions</li>
              <li>Reducing sensitivity to image orientation</li>
              <li>Creating more challenging training scenarios</li>
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

export default DataAugmentation;