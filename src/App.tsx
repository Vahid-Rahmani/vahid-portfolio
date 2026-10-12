import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Costs from "./pages/Costs";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";
import Seo from "./components/Seo";

const queryClient = new QueryClient();

export const AppContent = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Seo />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/costs" element={<Costs />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
        <Route path="/en" element={<Index />} />
        <Route path="/en/costs" element={<Costs />} />
        <Route path="/en/project/:slug" element={<ProjectDetail />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

const App = () => <BrowserRouter><AppContent /></BrowserRouter>;

export default App;
