import React from "react";
import { useSpring, animated } from "react-spring";

import "./Card.css";

const calc = (x, y, w, h) => [-(y - h / 2) / 40, (x - w / 2) / 40, 25];
const trans = (rx, ry, s) =>
  `perspective(600px) translate3d(0,0,${s}px) rotateX(${rx}deg) rotateY(${ry}deg)`;

export const Card = ({ backgroundImage, rowSpan = 1, content }) => {
  const [vars, set] = useSpring(() => ({
    xys: [0, 0, 0],
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  return (
    <animated.div
      className="card"
      onMouseMove={({ clientX: x, clientY: y, target: t }) => {
        var { top, left, width, height } = t.getBoundingClientRect();
        set({
          xys: calc(x - left, y - top, width, height),
        });
      }}
      onMouseLeave={() => set({ xys: [0, 0, 0] })}
      style={{
        transform: vars.xys.interpolate(trans),
        gridRowEnd: `span ${rowSpan}`,
      }}
    >
      <div
        className="backdrop"
        style={{
          backgroundImage: backgroundImage,
        }}
      />
      <div className="content">{content}</div>
    </animated.div>
  );
};
