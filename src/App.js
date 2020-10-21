import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useSpring, useSprings, animated, interpolate } from "react-spring";
import { createUseStyles } from "react-jss";
import { useGesture } from "react-use-gesture";
import Measure from "react-measure";
import classNames from "classnames";

const cards = [
  "https://upload.wikimedia.org/wikipedia/en/f/f5/RWS_Tarot_08_Strength.jpg",
  "https://upload.wikimedia.org/wikipedia/en/5/53/RWS_Tarot_16_Tower.jpg",
  "https://upload.wikimedia.org/wikipedia/en/9/9b/RWS_Tarot_07_Chariot.jpg",
  "https://upload.wikimedia.org/wikipedia/en/d/db/RWS_Tarot_06_Lovers.jpg",
  "https://upload.wikimedia.org/wikipedia/en/thumb/8/88/RWS_Tarot_02_High_Priestess.jpg/690px-RWS_Tarot_02_High_Priestess.jpg",
  "https://upload.wikimedia.org/wikipedia/en/d/de/RWS_Tarot_01_Magician.jpg",
];

const useStyles = createUseStyles({
  background: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "var(--mint-green)",
  },
  card: {
    backgroundColor: "white",
    position: "absolute",
    top: "50%",
    left: "50%",
    bottom: "auto",
    translate: "-50% -50%",
    transform: "perspective(1500px) rotateX(35deg) rotateZ(20deg) scale(0.7)",
    transition: "0.2s ease-in-out",
  },
  baseShadow: {
    position: "absolute",
    top: "50%",
    left: "50%",
    bottom: "auto",
    translate: "-50% -50%",
    width: "66vw",
    height: "66vh",
    backgroundColor: "rgba(0,0,0,0.25)",
    boxShadow: "1px 1px 10px 10px rgba(0,0,0,0.25)",
    transform:
      "perspective(1500px) rotateX(35deg) rotateZ(20deg) translateZ(-20px) scale(0.7)",
  },
  activeCard: {
    extends: "card",
    boxShadow: "none",
    transform: "perspective(1500px) rotateX(0deg) rotateZ(0deg) scale(1)",
  },
});

function App() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  const [dimensions, setDimensions] = React.useState({ width: -1, height: -1 });
  const [active, setActive] = React.useState(false);
  const classes = useStyles();
  React.useEffect(() => {}, [dimensions]);
  return (
    <Measure
      bounds
      onResize={(contentRect) => {
        setDimensions(contentRect.bounds);
      }}
    >
      {({ measureRef }) => (
        <div className={classes.background} ref={measureRef}>
          {active ? null : <div className={classes.baseShadow} />}
          <animated.div
            style={{
              ...props,
              width: dimensions.width * 0.66,
              height: dimensions.height * 0.66,
            }}
            className={classNames([
              classes.card,
              active ? classes.activeCard : null,
            ])}
            onClick={() => setActive(!active)}
          >
            Card Content
          </animated.div>
          <animated.div
            style={{
              ...props,
              width: dimensions.width * 0.66,
              height: dimensions.height * 0.66,
            }}
            className={classNames([
              classes.card,
              active ? classes.activeCard : null,
            ])}
            onClick={() => setActive(!active)}
          >
            Card Content
          </animated.div>
        </div>
      )}
    </Measure>
  );
}

export default App;
