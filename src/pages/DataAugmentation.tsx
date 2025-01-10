import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DataAugmentation = () => {
  return (
    <div className="container py-8 animate-fade-in">
      <h1 className="text-4xl font-bold mb-6">Data Augmentation</h1>
      <p className="text-muted-foreground text-lg mb-8">
        Explore the preprocessing techniques used to enhance model performance
      </p>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Image Preprocessing</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Details about image preprocessing techniques coming soon.
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Augmentation Techniques</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Information about data augmentation methods coming soon.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DataAugmentation;