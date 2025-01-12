import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const DataAugmentation = () => {
  return (
    <div className="container py-8 animate-fade-in">
      <h1 className="text-4xl font-bold mb-6">Data Augmentation</h1>
      <p className="text-muted-foreground text-lg mb-8">
        Explore the preprocessing techniques used to enhance model performance
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Image Preprocessing</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Technique</TableHead>
                  <TableHead>Purpose</TableHead>
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

        <Card className="hover:shadow-lg transition-shadow">
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

      <Card className="hover:shadow-lg transition-shadow">
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
    </div>
  );
};

export default DataAugmentation;