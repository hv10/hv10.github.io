import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useSpring, useSprings, animated, interpolate } from "react-spring";
import { createUseStyles } from "react-jss";
import { useGesture } from "react-use-gesture";
import Measure from "react-measure";
import classNames from "classnames";
import { Card } from "./components/Card";

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
  const [active, setActive] = React.useState();
  const classes = useStyles();
  const handleCardClick = (name) => {
    if (name === active) {
      setActive(undefined);
    } else {
      setActive(name);
    }
  };
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
            active={active === "hello"}
            rotation={-15}
            dimensions={dimensions}
            onClick={() => handleCardClick("hello")}
          >
            Card Content
            <br />
            Hello World FooBar
          </Card>
          <Card
            active={active === "world"}
            rotation={10}
            dimensions={dimensions}
            onClick={() => handleCardClick("world")}
          >
            Card Content
            <br />
            Hello World FooBar
          </Card>
        </div>
      )}
    </Measure>
  );
}

export default App;
