import React, { useMemo } from "react";
import "./App.css";
import { createUseStyles } from "react-jss";
import { Card } from "./components/Card";
import { Menu } from "./components/Menu";
import Projects from "./pages/Projects";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Logo } from "./components/Logo";
import { About } from "./pages/About";

const useStyles = createUseStyles({
  background: {
    background: "var(--dark-purple)",
    position: "fixed",
    overflow: "hidden",
    width: "100%",
    height: "100%",
    top: 0,
    cursor:
      'url("https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/Ad1_-cursor.png") 39 39, auto',
  },
  content: {
    margin: "10vh 5vw",
    maxWidth: "100vw",
    height: "100%",
    position: "relative",
  },
});

function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.background}></div>
      <Menu />
      <Logo />
      <div className={classes.content}>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <Projects />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
