
import { motion } from "framer-motion";
import { Home, GitCompare, Database, Sliders, Play, Mail, Menu, X } from "lucide-react";
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

  // Animation variants
  const navVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const menuVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-primary/10 shadow-lg"
          : "bg-background/50 backdrop-blur-sm"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 group"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-md transform group-hover:scale-110 transition-transform" />
              <img 
                src="/facial-recognition-icon.png" 
                alt="Facial Recognition" 
                className="h-8 w-8 relative z-10" 
                title="Facial Recognition icon by Icons8"
              />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                DeepFake Detective
              </span>
              <span className="text-xs text-muted-foreground">
                <a 
                  target="_blank" 
                  href="https://icons8.com/icon/7338/facial-recognition" 
                  className="hover:text-primary transition-colors"
                >
                  Icon
                </a> by <a 
                  target="_blank" 
                  href="https://icons8.com" 
                  className="hover:text-primary transition-colors"
                >
                  Icons8
                </a>
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <motion.div 
            className="hidden md:flex items-center space-x-3"
            variants={menuVariants}
          >
            {menuItems.map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.path}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200",
                    "hover:bg-primary/10 active:bg-primary/20",
                    "focus:outline-none focus:ring-2 focus:ring-primary/20",
                    location.pathname === item.path
                      ? "bg-primary/15 text-primary font-medium"
                      : "text-muted-foreground hover:text-primary"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            <motion.div
              animate={isMobileMenuOpen ? "open" : "closed"}
              variants={{
                open: { rotate: 180 },
                closed: { rotate: 0 }
              }}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-primary" />
              ) : (
                <Menu className="h-6 w-6 text-primary" />
              )}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={cn(
            "md:hidden overflow-hidden",
            isMobileMenuOpen ? "block" : "hidden"
          )}
          initial="hidden"
          animate={isMobileMenuOpen ? "visible" : "hidden"}
          variants={{
            visible: { height: "auto", opacity: 1 },
            hidden: { height: 0, opacity: 0 }
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 px-2 space-y-1">
            {menuItems.map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
                    "hover:bg-primary/10 active:bg-primary/20",
                    "focus:outline-none focus:ring-2 focus:ring-primary/20",
                    location.pathname === item.path
                      ? "bg-primary/15 text-primary font-medium"
                      : "text-muted-foreground hover:text-primary"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.title}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
