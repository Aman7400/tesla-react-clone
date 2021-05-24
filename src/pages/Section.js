import React from "react";
import styled from "styled-components";
import SectionHeader from "./SectionHeader";
import ModS from "./modelS.png";
import Mod3 from "./model3.png";
import ModX from "./modelX.png";
import ModY from "./modelY.png";

const sections = [
  {
    title: "ms",
    imgSrc: ModS,
  },
  {
    title: "m3",
    imgSrc: ModS,
  },
  {
    title: "mx",
    imgSrc: ModS,
  },
  {
    title: "my",
    imgSrc: ModS,
  },
];

const Section = (props) => {
  const sName = props.match.params.section;

  return <>{secInfo}</>;
};

export default Section;
