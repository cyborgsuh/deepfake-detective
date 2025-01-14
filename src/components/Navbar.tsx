import { Brain, Home, GitCompare, Database, Sliders, Play, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const menuItems = [
  { title: "Home", icon: Home, path: "/" },
  { title: "Model Comparison", icon: GitCompare, path: "/model-comparison" },
  { title: "Data Augmentation", icon: Database, path: "/data-augmentation" },
  { title: "Hyperparameters", icon: Sliders, path: "/hyperparameters" },
  { title: "Demo", icon: Play, path: "/demo" },
  { title: "Contact", icon: Mail, path: "/contact" },
];

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-background/80 border-b border-border/40">
      <div className="container mx-auto">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">DeepFake Detector</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className="flex items-center gap-2 px-4 py-2 text-sm rounded-md hover:bg-accent transition-colors"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}