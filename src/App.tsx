import React, { useEffect } from "react";
// import TagManager from "react-gtm-module";


import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ServicesPage from "./pages/ServicesPage";
import ProductsPage from "./pages/ProductsPage";
import EstimatePage from "./pages/EstimatePage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import LazyLoader from "./components/LazyLoader";
import Blog from "./pages/Blog";
import Post from "./pages/Post";

const queryClient = new QueryClient();


const App = () => {
  const [loading, setLoading] = React.useState(true);
  useEffect (() => {

    // TagManager.initialize({gtmId : "GTM-T5237WGP"});
    const timeout = setTimeout(() => {
      setLoading(false);

    }, 2500);

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return <LazyLoader />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <ScrollToTop />
          <Routes>

            <Route path="/" element={<Index />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/our_work" element={<EstimatePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<Post />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
    </TooltipProvider>
      </QueryClientProvider>
);
}

export default App;