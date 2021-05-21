import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  color: white;
`;
const Subtitle = styled.h2`
  color: white;
`;
const TextBody = styled.div`
  color: white;
`;
const Content = styled.div`
  width: 100%;
  max-width: min(80vw, 65ch);
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr;
`;

export const About = () => {
  return (
    <Content>
      <Title>Hello, I am Noel!</Title>
      <TextBody>
        <Subtitle>Who I am:</Subtitle>
        <p>
          I am a software developer, designer, videographer and musician and I
          go by the name hv10 as an artist.
        </p>
        <Subtitle>How I got here:</Subtitle>
        <p>
          I am always curious, I studied IT-Systems-Engineering at the
          Hasso-Plattner-Institute but I spend my free-time by learning music- ,
          video- and other physical production skills. While I studied I had the
          chance of additionally learning about design as well as
          Design-Thinking by partaking in a set of two half-year long courses at
          the Hasso-Plattner-School of Design Thinking. Afterwards, motivated by
          my newfound interest, I helped with several research projects
          concerning themselves with Design, and Design Methodology.
        </p>
        <Subtitle>How to reach me:</Subtitle>
        <p>
          Send me an e-mail:{" "}
          <a href="mailto:noeldanz@gmail.com">noeldanz@gmail.com</a>
          <br />
          Write me on GitHub:{" "}
          <a href="https://github.com/hv10">github.com/hv10</a>
        </p>
      </TextBody>
    </Content>
  );
};
