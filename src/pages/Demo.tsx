import { ModelViewer } from "@/components/ModelViewer";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Demo = () => {
  const [showModal, setShowModal] = useState(false);
  const [allowOperation, setAllowOperation] = useState(false);
  const [forceLoad, setForceLoad] = useState(false);

  const handleInteract = () => {
    if (!allowOperation) {
      setShowModal(true);
      return true; // Block operation
    }
    return false; // Allow operation
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent opacity-50" />
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

      {/* Main content */}
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Header section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-4">
            DeepFake Detection
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Upload your media to analyze and detect potential deepfake manipulations with our advanced AI model
          </p>
        </div>

        {/* Model viewer section */}
        <div>
          <div className="max-w-4xl mx-auto">
            <ModelViewer onInteract={handleInteract} forceLoad={forceLoad} />
          </div>
        </div>

        {/* Disclaimer section */}
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="bg-card/20 backdrop-blur-sm rounded-lg border border-border/50 p-6">
            <h3 className="text-sm font-semibold text-primary mb-2">Disclaimer</h3>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>
                This deepfake detection tool is provided for educational and research purposes only. 
                The accuracy of results may vary depending on the quality and nature of the input media.
              </p>
              <p>
                While we strive for high accuracy, no detection system is perfect. Results should not be 
                considered as definitive proof and may require human verification for critical decisions.
              </p>
              <p>
                By using this tool, you agree that you will not use it for any malicious purposes or in 
                ways that violate applicable laws and regulations.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright footer */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} DeepFake Detective. All rights reserved.</p>
        </div>
      </div>

      <Dialog open={showModal} onOpenChange={setShowModal}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>🧪 Test the Deepfake Detector Locally</DialogTitle>
    </DialogHeader>
    <div className="space-y-4">
      <p className="text-muted-foreground">
        This demo is for testing and demonstration purposes only. The backend isn't always live because running it continuously incurs costs.
      </p>
      <p className="text-muted-foreground">
        To try it out, you can run the project locally by setting up the backend yourself:
      </p>
      <ul className="space-y-2 list-disc pl-4">
        <li>
          Visit our{" "}
          <a href="https://github.com/cyborgsuh/deepfake-detective" className="text-primary hover:underline">
             GitHub repository
          </a>{" "}
          for full setup instructions.
        </li>
        <li>
          If you’re unable to set it up,{" "}
          <Link to="/contact" className="text-primary hover:underline">
            send me a message
          </Link>{" "}
          and I can spin up the backend temporarily for you.
        </li>
      </ul>
      <div className="flex justify-end space-x-2 pt-4">
        <Button variant="ghost" onClick={() => setShowModal(false)}>
          Cancel
        </Button>
        <Button
          onClick={() => {
            setAllowOperation(true);
            setForceLoad(true);
            setShowModal(false);
          }}
        >
          Continue Anyway
        </Button>
      </div>
    </div>
  </DialogContent>
</Dialog>


    </div>
  );
};

export default Demo;
