import {
  useEffect,
  useMemo,
  useState,
} from "react";
import Particles, {
  initParticlesEngine,
} from "@tsparticles/react";
import { loadAll } from "@tsparticles/all";

const ParticlesComponent = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadAll(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
 
  };

  const options = useMemo(
    () => ({
      fpsLimit: 120,

      particles: {
        color: {
          value: ["#FF0000", "#00FF00","#38bdf8","#38bdf8"],
          random: true,
        },
        
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          sync: false,
          speed: 0.4,
          straight: false,
        },
        number: {
          density: {
            enable: false,
            
          },
          value: 50,
        },
        opacity: {
          anim: {
            enable: true,
            speed: 5,
            opacity_max:1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1.5, max: 1.7 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        style={{
          zIndex: -1,
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
  
      />
    );
  }

  return <></>;
};

export default ParticlesComponent;
