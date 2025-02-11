
export const trainingData = [
  { epoch: 1, pretrained: 0.75, nonPretrained: 0.65 },
  { epoch: 20, pretrained: 0.85, nonPretrained: 0.72 },
  { epoch: 40, pretrained: 0.92, nonPretrained: 0.78 },
  { epoch: 60, pretrained: 0.94, nonPretrained: 0.82 },
  { epoch: 80, pretrained: 0.95, nonPretrained: 0.88 },
  { epoch: 100, pretrained: 0.958, nonPretrained: 0.925 },
];

export const metricsData = [
  { name: 'Accuracy', pretrained: 0.958, nonPretrained: 0.925 },
  { name: 'Precision', pretrained: 0.962, nonPretrained: 0.918 },
  { name: 'Recall', pretrained: 0.955, nonPretrained: 0.931 },
  { name: 'F1 Score', pretrained: 0.94, nonPretrained: 0.91 },
];
