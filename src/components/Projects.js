import React, { useMemo } from "react";
import { createUseStyles } from "react-jss";
import { Card } from "./Card";
import { Menu } from "./Menu";
import useMedia from "../utils/useMedia";
import useMeasure from "../utils/useMeasure";

const useStyles = createUseStyles({
  masonry: {
    position: "relative",
    display: "grid",
    gridGap: 10,
    gridTemplateColumns: "repeat(auto-fill, minmax(300px,1fr))",
    gridAutoRows: 150,
    transformStyle: "preserve-3d",
  },
});
const items = [
  {
    id: "p1",
    height: 300,
    content: <span>Hello</span>,
    backgroundImage:
      "url(https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
    rowSpan: 2,
  },
  { id: "p2", height: 450, content: <span>Hello</span> },
  { id: "p3", height: 600, content: <span>Hello</span> },
  { id: "p4", rowSpan: 2, height: 600, content: <span>Hello</span> },
  { id: "p5", rowSpan: 2, height: 600, content: <span>Hello</span> },
  { id: "p6", height: 600, content: <span>Hello</span> },
  { id: "p7", rowSpan: 2, height: 600, content: <span>Hello</span> },
  { id: "p8", height: 600, content: <span>Hello</span> },
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
