import classNames from "classnames";
import React from "react";
import { createUseStyles } from "react-jss";

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
    transform:
      "perspective(1500px) rotateX(35deg) rotateY(0deg) rotateZ(0deg) scale(0.7)",
    transition: "0.2s ease-out",
  },
  cardContent: {
    position: "relative",
    height: "100%",
    borderRadius: 5,
    padding: "0.25em",
    boxSizing: "border-box",
    border: "5px inset var(--palatinate-purple)",
  },
  baseShadow: {
    position: "absolute",
    borderRadius: "1em",
    zIndex: 1,
    top: "50%",
    left: "50%",
    bottom: "auto",
    translate: "-50% -50%",
    width: "66vw",
    height: "66vh",
    backgroundColor: "rgba(0,0,0,0.25)",
    boxShadow: "1px 1px 30px 30px rgba(0,0,0,0.25)",
    transform:
      "perspective(1500px) rotateX(35deg) rotateY(0deg) translateZ(-50px) scale(0.7)",
  },
  activeCard: {
    boxShadow: "none",
    zIndex: 100,
  },
});
export const Card = ({ active, dimensions, onClick, children, rotation }) => {
  const classes = useStyles();
  const getTransform = () => {
    return `perspective(1500px) rotateX(35deg) rotateY(0deg) rotateZ(${rotation}deg) scale(0.7)`;
  };
  const getActiveTransform = () => {
    return "perspective(1500px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1)";
  };
  return (
    <>
      {active ? null : (
        <div
          className={classes.baseShadow}
          style={{ transform: getTransform() }}
        />
      )}
      <div
        style={{
          width: dimensions.width * 0.66,
          height: dimensions.height * 0.66,
          transform: active ? getActiveTransform() : getTransform(),
        }}
        className={classNames([
          classes.card,
          active ? classes.activeCard : null,
        ])}
        onClick={onClick}
      >
        <div className={classes.cardContent}>{children}</div>
      </div>
    </>
  );
};
