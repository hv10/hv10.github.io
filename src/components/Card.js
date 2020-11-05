import classNames from "classnames";
import React from "react";
import { createUseStyles } from "react-jss";
import { useDrag } from "react-use-gesture";
import { useSpring, animated } from "react-spring";

const useStyles = createUseStyles({
  card: {
    backgroundColor: "var(--light-salmon)",
    zIndex: 2,
    borderRadius: "1em",
    padding: "1em",
    position: "absolute",
    top: "50%",
    left: "50%",
    bottom: "auto",
    translate: "-50% -50%",
  },
  cardContent: {
    position: "relative",
    background: "hsla(18, 100%, 95%, 1)",
    height: "100%",
    borderRadius: 5,
    padding: "0.25em",
    boxSizing: "border-box",
    //border: "5px inset var(--palatinate-purple)",
  },
  baseShadow: {
    position: "absolute",
    borderRadius: "1em",
    zIndex: 1,
    top: "50%",
    left: "50%",
    bottom: "auto",
    translate: "-50% -50%",
    width: "80vw",
    height: "80vh",
    backgroundColor: "rgba(0,0,0,0.25)",
    boxShadow: "1px 1px 30px 30px rgba(0,0,0,0.25)",
  },
  activeCard: {
    boxShadow: "none",
    zIndex: 100,
  },
});
export const Card = ({ active, dimensions, onClick, children, rotation }) => {
  const classes = useStyles();
  const getTransform = (x = 0, y = 0) => {
    return `perspective(1500px) translate(${x}px, ${y}px) rotateX(35deg) rotateY(0deg) rotateZ(${rotation}deg) scale(0.7)`;
  };
  const getActiveTransform = () => {
    return "perspective(1500px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1)";
  };
  const [{ x, y, down }, set] = useSpring(() => ({ x: 0, y: 0, down: 0 }));
  // Set the drag hook and define component movement based on gesture data
  const bind = useDrag(({ down, movement: [mx, my] }) => {
    let deadzone = mx * mx + my * my > 25;
    console.log(mx, my, deadzone);
    set({ x: down ? mx : 0, y: down ? my : 0, down: deadzone ? 1 : 0 });
  });
  return (
    <>
      {active ? null : (
        <animated.div
          {...bind}
          className={classes.baseShadow}
          style={{ transform: x.interpolate(getTransform) }}
        />
      )}
      <animated.div
        {...bind()}
        style={{
          width: dimensions.width * 0.8,
          height: dimensions.height * 0.8,
          transform: active
            ? getActiveTransform()
            : x.interpolate(getTransform),
        }}
        className={classNames([
          classes.card,
          active ? classes.activeCard : null,
        ])}
        onClick={(e) => (down === 1 ? null : onClick(e))}
      >
        <div className={classes.cardContent} style={{ userSelect: "none" }}>
          {children}
        </div>
      </animated.div>
    </>
  );
};
