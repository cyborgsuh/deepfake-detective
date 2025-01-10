import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="container py-8 animate-fade-in">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="text-muted-foreground text-lg mb-8">
        Get in touch with our team
      </p>
      
      <Card className="max-w-2xl mx-auto hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Contact form and details coming soon.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;