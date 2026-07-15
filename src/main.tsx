import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ParticlesProvider } from "@tsparticles/react";
import { loadBubblesPreset } from "@tsparticles/preset-bubbles";
import type { Engine } from "@tsparticles/engine";

import App from "./App";
import "./index.css";

const initializeParticles = async (engine: Engine): Promise<void> => {
  await loadBubblesPreset(engine);
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ParticlesProvider init={initializeParticles}>
      <App />
    </ParticlesProvider>
  </StrictMode>,
);