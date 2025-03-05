
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

import Home from "./pages/Home";
import ModelComparison from "./pages/ModelComparison";
import DataAugmentation from "./pages/DataAugmentation";
import Hyperparameters from "./pages/Hyperparameters";
import Demo from "./pages/Demo";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="container mx-auto pt-20 px-4 flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/model-comparison" element={<ModelComparison />} />
              <Route path="/data-augmentation" element={<DataAugmentation />} />
              <Route path="/hyperparameters" element={<Hyperparameters />} />
              <Route path="/demo" element={<Demo />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
