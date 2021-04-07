import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";

const useStyles = createUseStyles({
  holder: {
    position: "sticky",
    top: "2vh",
    left: "2vw",
    display: "flex",
  },
  link: {
    userSelect: "none",
    textDecoration: "none",
    color: "var(--white)",
  },
  linkdiv: {
    fontSize: "2rem",
    padding: "0.2ch 1ch",
    "&:hover": {
      color: "var(--light-salmon)",
    },
  },
});

export const Menu = () => {
  const classes = useStyles();
  return (
    <div className={classes.holder}>
      <Link className={classes.link} to="/projects">
        <div className={classes.linkdiv}>projects</div>
      </Link>
      <Link className={classes.link} to="/about">
        <div className={classes.linkdiv}>about</div>
      </Link>
    </div>
  );
};
