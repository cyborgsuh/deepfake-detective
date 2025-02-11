
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const KeyFindings = () => {
  return (
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
  );
};
