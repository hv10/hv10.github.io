import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useSpring, useSprings, animated, interpolate } from "react-spring";
import { createUseStyles } from "react-jss";
import { useGesture } from "react-use-gesture";
import Measure from "react-measure";
import classNames from "classnames";
import { Card } from "./components/Card";

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
    zIndex: 0,
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
          <Card
            active={false}
            rotation={Math.random() * 40 - 20}
            dimensions={dimensions}
            onClick={() => setActive(!active)}
          >
            Card Content Hello World 1
          </Card>
          <Card
            active={active}
            rotation={Math.random() * 40 - 20}
            dimensions={dimensions}
            onClick={() => setActive(!active)}
          >
            Card Content Hello World 2
          </Card>
        </div>
      )}
    </Measure>
  );
}

export default App;
