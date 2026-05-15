import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Events from "./pages/Events";
import DailyWord from "./pages/DailyWord";
import Media from "./pages/Media";
import Prayer from "./pages/Prayer";
import Contact from "./pages/Contact";
import Give from "./pages/Give";
import WorshipMinistry from "./pages/WorshipMinistry";
import YouthMinistry from "./pages/YouthMinistry";
import CommunityOutreach from "./pages/CommunityOutreach";
import ChildrensMinistry from "./pages/ChildrensMinistry";
import Sermons from "./pages/Sermons";
import WatchLive from "./pages/WatchLive";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/daily-word" element={<DailyWord />} />
          <Route path="/media" element={<Media />} />
          <Route path="/prayer" element={<Prayer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/give" element={<Give />} />
          <Route path="/ministries/worship" element={<WorshipMinistry />} />
          <Route path="/ministries/youth" element={<YouthMinistry />} />
          <Route path="/ministries/community-outreach" element={<CommunityOutreach />} />
          <Route path="/ministries/childrens" element={<ChildrensMinistry />} />
          <Route path="/sermons" element={<Sermons />} />
          <Route path="/watch-live" element={<WatchLive />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
