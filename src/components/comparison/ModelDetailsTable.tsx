
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface ModelDetailsTableProps {
  title: string;
  accuracy: string;
  trainingTime: string;
  f1Score: string;
}

export const ModelDetailsTable = ({ title, accuracy, trainingTime, f1Score }: ModelDetailsTableProps) => {
  return (
    <Card className="backdrop-blur-sm bg-card/50 border-primary/20">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
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
              <TableCell>{accuracy}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Training Time</TableCell>
              <TableCell>{trainingTime}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>F1 Score</TableCell>
              <TableCell>{f1Score}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
