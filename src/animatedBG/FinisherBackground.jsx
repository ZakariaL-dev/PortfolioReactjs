import React, { useEffect } from "react";

const FinisherBackground = () => {
  const config = {
    // ... (your existing config)
    count: 6,
    size: {
      min: 697,
      max: 1400,
      pulse: 0,
    },
    speed: {
      x: {
        min: 0.1,
        max: 0.3,
      },
      y: {
        min: 0.1,
        max: 0.7,
      },
    },
    colors: {
      background: "#577d86",
      particles: ["#569daa", "#87cbb9", "#b9eddd"],
    },
    blending: "overlay",
    opacity: {
      center: 1,
      edge: 0.1,
    },
    skew: 0,
    shapes: ["c"],
  };

  useEffect(() => {
    // 2. Increase the timeout. 100ms is often too fast for script execution.
    // We'll use 500ms as a safer delay.
    const timer = setTimeout(() => {
      if (window.FinisherHeader) {
        // The FinisherHeader needs a DOM element to attach to.
        // It looks for a class named 'finisher-header' in the DOM.
        // Your Home component has this class: <div className="header finisher-header ...">
        new window.FinisherHeader(config);
      } else {
        console.error("FinisherHeader still not found after timeout.");
      }
    }, 500); // Increased delay to 500ms

    return () => clearTimeout(timer);
  }, []);

  // The FinisherBackground component only needs to render an empty fragment
  // since the FinisherHeader library will draw a canvas over the background
  // of the parent element that has the 'finisher-header' class.
  return <></>;
};

export default FinisherBackground;
