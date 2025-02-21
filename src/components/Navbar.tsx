import { Brain, Home, GitCompare, Database, Sliders, Play, Mail, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const menuItems = [
  { title: "Home", icon: Home, path: "/" },
  { title: "Model Comparison", icon: GitCompare, path: "/model-comparison" },
  { title: "Data Augmentation", icon: Database, path: "/data-augmentation" },
  { title: "Hyperparameters", icon: Sliders, path: "/hyperparameters" },
  { title: "Demo", icon: Play, path: "/demo" },
  { title: "Contact", icon: Mail, path: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top handler
  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-background/80 backdrop-blur-sm"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            onClick={handleNavClick}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Brain className="h-7 w-7 text-primary" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              DeepFake Detector
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                onClick={handleNavClick}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 text-sm rounded-md transition-all duration-200",
                  "hover:bg-accent hover:text-accent-foreground",
                  "active:scale-95",
                  location.pathname === item.path
                    ? "bg-accent/80 text-accent-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.title}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-accent/50 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 px-2 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                onClick={handleNavClick}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-md transition-all duration-200",
                  "hover:bg-accent hover:text-accent-foreground",
                  "active:scale-95 w-full",
                  location.pathname === item.path
                    ? "bg-accent/80 text-accent-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.title}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}