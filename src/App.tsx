import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/WelcomePage";
import Hero from "./pages/HeroPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/hero" element={<Hero />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;