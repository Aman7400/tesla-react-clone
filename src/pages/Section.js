import React from "react";

import SectionHeader from "./SectionHeader";
import ModS from "./modelS.png";
import Mod3 from "./model3.png";
import ModX from "./modelX.png";
import ModY from "./modelY.png";
import Sroof from "./roof.png";
import Spanels from "./panel.png";
import Interiors from "./Interiors";
import Features from "./Features";
import styled from "styled-components";
import CTAS from "./cta1.png";
import CTA3 from "./cta2.png";
import CTAX from "./cta3.png";
import CTAY from "./cta4.png";

const sections = [
  {
    title: "ms",
    imgSrc: ModS,
    ctaImgSrc: CTAS,
    stats: {
      range: "390",
      time: "1.99",
      topSpeed: "200",
      peakPower: "1,020",
    },
  },
  {
    title: "m3",
    imgSrc: Mod3,
    ctaImgSrc: CTA3,
    stats: {
      range: "400",
      time: "2.99",
      topSpeed: "180",
      peakPower: "900",
    },
  },
  {
    title: "mx",
    imgSrc: ModX,
    ctaImgSrc: CTAX,
    stats: {
      range: "350",
      time: "1.55",
      topSpeed: "150",
      peakPower: "1,130",
    },
  },
  {
    title: "my",
    imgSrc: ModY,
    ctaImgSrc: CTAY,
    stats: {
      range: "410",
      time: "2.05",
      topSpeed: "190",
      peakPower: "1,040",
    },
  },
  {
    title: "sroofs",
    imgSrc: Sroof,
    stats: [
      "Beautiful Solar without compromise",
      "Stronger than standard tiles",
      "pays for itself overtime",
    ],
  },
  {
    title: "spanels",
    imgSrc: Spanels,
    stats: [
      "Convert Sunlight to energy",
      "Guaranteed low price",
      "Continuous Energy Monitoring  ",
    ],
  },
];

const CTA = styled.div`
  width: 100%;
  height: fit-content;

  background-color: black;
  button {
    margin: 0.25rem;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    height: 60vh;
  }
`;

const CtaImageContainer = styled.div`
  flex: 80%;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  @media (max-width: 900px) {
    flex: 1;
  }
`;

const CtaContent = styled.div`
  flex: 20%;
  flex-direction: column;
  @media (max-width: 900px) {
    flex: 1;
  }
`;

const Section = (props) => {
  const sName = props.match.params.section;

  let currSection;

  sections.forEach((element) => {
    if (element.title === sName) currSection = element;
  });

  return (
    <>
      <SectionHeader item={currSection} />
      {currSection.title !== "spanels" && currSection.title !== "sroofs" ? (
        <Interiors />
      ) : (
        ""
      )}
      <Features title={currSection.title} />
      {currSection.title !== "spanels" && currSection.title !== "sroofs" ? (
        <CTA className="center">
          <CtaImageContainer>
            <img src={currSection.ctaImgSrc} alt="currSection.title" />
          </CtaImageContainer>

          <CtaContent className="center">
            <button className="btn btn-outline-light btn-lg">Order Now</button>
            <button className="btn btn-outline-dark btn-lg">Compare</button>
          </CtaContent>
        </CTA>
      ) : (
        ""
      )}
    </>
  );
};

export default Section;
