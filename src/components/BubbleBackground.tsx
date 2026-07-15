import { useMemo } from "react";
import Particles from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";

export default function BubbleBackground() {
  const options = useMemo<ISourceOptions>(
    () => ({
      preset: "bubbles",

      // Jangan memenuhi seluruh browser
      fullScreen: {
        enable: false,
      },

      background: {
        color: {
          value: "transparent",
        },
      },

      fpsLimit: 60,

      particles: {
        number: {
          value: 20,
          density: {
            enable: true,
          },
        },

        color: {
          value: ["#ffffff", "#f7d9df", "#f3e6d0"],
        },

        opacity: {
          value: {
            min: 0.1,
            max: 0.3,
          },
        },

        size: {
          value: {
            min: 8,
            max: 15,
          },
        },

        move: {
          enable: true,
          direction: "top",
          speed: {
            min: 0.3,
            max: 0.8,
          },
          outModes: {
            default: "out",
          },
        },
      },

      interactivity: {
        events: {
          onClick: {
            enable: false,
          },
          onHover: {
            enable: false,
          },
        },
      },

      detectRetina: true,
    }),
    [],
  );

  return (
    <Particles
      id="wedding-bubbles"
      options={options}
    />
  );
}