import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import React from "react";

const App = () => {
  const [init, setInit] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Detect screen size using matchMedia
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsSmallScreen(mediaQuery.matches);

    const handleResize = (e) => setIsSmallScreen(e.matches);
    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "080045",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: !isSmallScreen, // Disable click interaction on small screens
            mode: "push",
          },
          onHover: {
            enable:!isSmallScreen, // Disable hover interaction on small screens
            mode: "repulse",
            
          },
        },
        modes: {
          push: {
            quantity: 2,
          },
          repulse: {
            distance: !isSmallScreen?150:80,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#31edf7",
        },
        links: {
          color: "#31edf7",
          distance: 180,
          enable: true,
          opacity: 0.7,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 200,
        },
        opacity: {
          value: 0.4,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 2, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [isSmallScreen]
  );

  if (init) {
    return (
      <div className="absolute w-screen -z-20 h-screen">
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
          className="absolute -z-20 inset-0"
        />
      </div>
    );
  }

  return <></>;
};

export default React.memo(App);
