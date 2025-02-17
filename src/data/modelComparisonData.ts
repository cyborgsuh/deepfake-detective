
export const trainingData = [
  { epoch: 1, resnet50: 0.75, resnet34: 0.65 },
  { epoch: 20, resnet50: 0.85, resnet34: 0.72 },
  { epoch: 40, resnet50: 0.92, resnet34: 0.78 },
  { epoch: 60, resnet50: 0.94, resnet34: 0.82 },
  { epoch: 80, resnet50: 0.95, resnet34: 0.88 },
  { epoch: 100, resnet50: 0.958, resnet34: 0.925 },
];

export const metricsData = [
  { name: 'Accuracy', resnet50: 0.958, resnet34: 0.925 },
  { name: 'Precision', resnet50: 0.962, resnet34: 0.918 },
  { name: 'Recall', resnet50: 0.955, resnet34: 0.931 },
  { name: 'F1 Score', resnet50: 0.94, resnet34: 0.91 },
];
