import React from "react";
import { createUseStyles } from "react-jss";
import logo from "../assets/hv10_logo_font_white.svg";
import classname from "classnames";
import "../assets/animations.css";

const useStyles = createUseStyles({
  wrapper: {
    display: "grid",
    justifyItems: "center",
    maxWidth: "100%",
    willChange: "filter",
  },
  logo: {
    zIndex: 100,
    color: "var(--white)",
    position: "relative",
    height: "20vh",
    width: "100%",
    perspective: "20vh",
    transform: "rotateX(45deg) rotateZ(-15deg)",
  },
  logoPath: {
    fill: "var(--light-salmon)",
  },
});

export const Logo = () => {
  const classes = useStyles();
  return (
    <div className={classname(classes.wrapper, "pump")}>
      <svg
        width="247.76991mm"
        height="140.70352mm"
        viewBox="0 0 247.76991 135.8239"
        id="logo-svg"
        className={classes.logo}
      >
        <g id="logo-group" transform="translate(-30.444165,-3.3069773)">
          <path
            d="M 30.444165,-0.16104274 V 126.24713 H 44.458263 V 79.787152 L 83.538899,126.26366 C 82.893622,72.556737 83.12526,62.960323 66.033686,62.877579 L 44.524445,62.778305 V -0.09486074 Z M 233.19358,39.912328 c -8.27278,4.698958 -14.24573,8.272785 -20.26832,11.730825 -6.02259,3.458025 -12.06172,7.031851 -20.28487,11.714264 l 16.39666,9.447504 c 10.93662,-6.287317 13.23646,-7.660599 24.17308,-13.964461 l 24.32199,14.047205 16.26429,-9.497173 C 255.94374,53.148784 249.14351,49.062028 233.19358,39.912328 Z m -68.86266,0 -22.13797,34.381694 11.7639,7.59443 10.40716,-16.115398 v 74.769426 h 12.57464 V 39.912328 Z M 89.875853,62.877579 115.07476,126.26366 140.3233,62.877579 H 89.842762 Z m 188.338227,7.296596 -16.39666,9.447517 c 0,12.60774 0,15.3212 0,27.928928 l -24.32199,14.0472 v 18.82884 c 17.81958,-10.34098 24.71908,-14.22919 40.61938,-23.42852 0,-9.46405 0,-16.4463 0,-23.428508 0,-6.98225 0,-13.96447 0,-23.428548 z m -89.80935,0 c 0,20.599237 0,28.524567 0,46.890145 8.17351,4.78167 14.22919,8.27278 20.28486,11.71426 6.05568,3.4415 12.11136,6.9326 20.26833,11.73083 v -18.89506 c -10.90353,-6.33694 -13.23646,-7.6606 -24.20617,-13.96446 V 79.621692 Z"
            id="logo-path"
            className={classes.logoPath}
          />
        </g>
      </svg>
    </div>
  );
};
