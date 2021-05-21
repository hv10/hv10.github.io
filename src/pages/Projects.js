import React, { useMemo } from "react";
import { createUseStyles } from "react-jss";
import { Card } from "../components/Card";
import { Menu } from "../components/Menu";
import useMedia from "../utils/useMedia";
import useMeasure from "../utils/useMeasure";
import sonPlaygr from "../assets/images/sonification_playground.jpeg";
import zenStudiosWebPage from "../assets/images/zen_studios.png";

const useStyles = createUseStyles({
  masonry: {
    position: "relative",
    display: "grid",
    gridGap: 10,
    gridTemplateColumns: "repeat(auto-fill, minmax(300px,1fr))",
    gridTemplateRows: "masonry",
    masonryAutoFlow: "next",
    gridAutoRows: 150,
    transformStyle: "preserve-3d",
  },
});
const items = [
  {
    id: "p1",
    height: 300,
    content: (
      <div>
        <strong>Sonification Playground</strong>
      </div>
    ),
    backgroundImage: "url(" + sonPlaygr + ")",
    rowSpan: 3,
  },
  {
    id: "p2",
    rowSpan: 2,
    content: (
      <div>
        <strong>ZenStudios Website</strong>
      </div>
    ),
    backgroundImage: "url(" + zenStudiosWebPage + ")",
    linkTo: "https://www.zenstudios.de",
  },
  { id: "p3", height: 600, content: <span>Hello</span> },
  { id: "p4", rowSpan: 3, height: 600, content: <span>Hello</span> },
  { id: "p5", rowSpan: 2, height: 400, content: <span>Hello</span> },
  { id: "p6", content: <span>Hello p6</span> },
  { id: "p7", rowSpan: 2, height: 600, content: <span>Hello</span> },
  { id: "p8", rowSpan: 2, content: <span>Hello p8</span> },
];

function Projects() {
  const classes = useStyles();
  return (
    <div className={classes.masonry}>
      {items.map((item) => (
        <Card
          backgroundImage={item.backgroundImage}
          rowSpan={item.rowSpan || 0}
          content={item.content}
        />
      ))}
    </div>
  );
}

export default Projects;
