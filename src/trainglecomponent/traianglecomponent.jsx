import React, { useState, useEffect } from "react";
import "./traianglecomponent.scss";

const MyView = () => {
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    const rotateTimeout = setTimeout(() => {
      setAnimationPhase(1);
    }, 2000); // Adjust the duration of the rotation

    return () => clearTimeout(rotateTimeout);
  }, []);

  useEffect(() => {
    if (animationPhase === 1) {
      const scaleTimeout = setTimeout(() => {
        setAnimationPhase(2);
      }, 1000); // Adjust the duration of the scaling

      return () => clearTimeout(scaleTimeout);
    }
  }, [animationPhase]);

  useEffect(() => {
    if (animationPhase === 2) {
      const resetTimeout = setTimeout(() => {
        setAnimationPhase(0);
      }, 1000); // Adjust the duration of returning to the original size

      return () => clearTimeout(resetTimeout);
    }
  }, [animationPhase]);

  return (
    <div
      className={`my-view phase-${animationPhase}`}
      onClick={() => setAnimationPhase(0)} // Click to reset the animation
    >
      <Triangle color="#ff0000" points="200,0 200,200 100,100" />
      <Triangle color="#00ff00" points="0,0 100,100 0,200" />
      <Triangle color="#0000ff" points="0,0 200,0 100,100" />
      <Triangle color="#ffff00" points="200,200 0,200 100,100" />
    </div>
  );
};

const Triangle = ({ color, points }) => (
  <svg className="triangle" fill={color} viewBox="0 0 200 200">
    <polygon points={points} />
  </svg>
);

export default MyView;
