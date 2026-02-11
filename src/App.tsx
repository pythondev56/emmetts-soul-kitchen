import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Index from "./pages/Index";
import Menu from "./pages/Menu";
import Order from "./pages/Order";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import Catering from "./pages/Catering";
import NotFound from "./pages/NotFound";
import PageLoader from "./components/PageLoader";

const queryClient = new QueryClient();

const RootLayout = () => (
  <>
    <PageLoader />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <Index /> },
      { path: "/menu", element: <Menu /> },
      { path: "/menu/:category", element: <Menu /> },
      { path: "/order", element: <Order /> },
      { path: "/about", element: <About /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "/reviews", element: <Reviews /> },
      { path: "/contact", element: <Contact /> },
      { path: "/catering", element: <Catering /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <RouterProvider router={router} />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
