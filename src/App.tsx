import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Coaching from "./pages/Coaching";
import Contact from "./pages/Contact";
import K9Detection from "./pages/K9Detection";
import CityPage from "./pages/CityPage";
import StatePage from "./pages/StatePage";
import Locations from "./pages/Locations";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Assessment from "./pages/Assessment";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/services" element={<Services />} />
          <Route path="/coaching" element={<Coaching />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/k9-detection" element={<K9Detection />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/locations/:stateSlug" element={<StatePage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:postSlug" element={<BlogPost />} />
          <Route path="/services/:citySlug" element={<CityPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
