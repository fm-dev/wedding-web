import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/WelcomePage";
import Hero from "./pages/HeroPage";
import GuestLinkPage from "./pages/GuestLinkPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/form" element={<GuestLinkPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;