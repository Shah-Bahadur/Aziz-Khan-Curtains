import React, { useEffect } from "react";
import TagManager from "react-gtm-module";


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

const queryClient = new QueryClient();

// const App = () => (


//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <BrowserRouter>
//       <ScrollToTop />
//         <Routes>

//           <Route path="/" element={<Index />} />
//           <Route path="/services" element={<ServicesPage />} />
//           <Route path="/products" element={<ProductsPage />} />
//           <Route path="/estimate" element={<EstimatePage />} />
//           <Route path="/about" element={<AboutPage />} />
//           {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;


const App = () => {
  useEffect (() => {

    TagManager.initialize({gtmId : "GTM-T5237WGP"});
  }, []);

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
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
    </TooltipProvider>
      </QueryClientProvider>
);
}

export default App;