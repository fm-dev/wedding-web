import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/WelcomePage";
import ThemeToggle from "./components/ThemeToggle";
const Hero = lazy(() => import("./pages/HeroPage"));
const GuestLinkPage = lazy(() => import("./pages/GuestLinkPage"));
function App() {
  return (
    <BrowserRouter>
      <ThemeToggle />
      <Suspense fallback={
        <div role="status" className="flex min-h-screen items-center justify-center text-white">
          Memuat undangan...
        </div>
      }>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/form" element={<GuestLinkPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
