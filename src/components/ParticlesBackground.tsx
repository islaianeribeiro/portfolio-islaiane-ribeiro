"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadFull } from "tsparticles";
import { useTheme } from "./ThemeProvider";

export const ParticlesBackground = () => {
  const [init, setInit] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      background: {
        color: isDark ? "#000000" : "#f4f4f4", // muda com o tema!
      },
      particles: {
        number: {
          value: 280,
          density: {
            enable: true,
            area: 800,
          },
        },
        color: {
          value: "#4b7c84",
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.8,
        },
        size: {
          value: 2,
        },
        move: {
          enable: true,
          speed: 0.6,
        },
        links: {
          enable: true,
          color: "#4b7c84",
          distance: 150,
          opacity: 0.6,
          width: 1,
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "attract",
          },
        },
      },
    }),
    [isDark] // 👈 agora o fundo muda conforme o tema!
  );

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
    />
  );
};
