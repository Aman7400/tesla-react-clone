import React from "react";
import styled from "styled-components";
import Panel from "./6.png";
import Roofs from "./5.png";
import DisplayFeatures from "./DisplayFeatures";
import S from "./ms.png";
import E from "./m3.png";
import X from "./mx.png";
import Y from "./my.png";

const features = [
  {
    mName: "spanels",
    title: "Solar Panel",
    imgSrc: Panel,
    specs: {
      wattage: "340W",
      "operating temperature": "-40F upto +185F",
      dimensions: '68.5" x 40.6" x 1.57"  (including frame) ',
      "frame type": "Black anodized aluminum",
      warranty: "25 year performance guarantee",
    },
  },
  {
    mName: "sroofs",
    title: "Solar Roofs",
    imgSrc: Roofs,
    specs: {
      wattage: "340W",
      "operating temperature": "-40F upto +185F",
      dimensions: '68.5" x 40.6" x 1.57"  (including frame) ',
      "frame type": "Black anodized aluminum",
      warranty: "25 year performance guarantee",
    },
  },
  {
    mName: "ms",
    title: "Model S",
    imgSrc: S,
    specs: {
      "Peak Power": "1,020 hp",
      "1/4 Mile": "9.23@155 mph trap speed",

      Acceleration: "1.99 s 0-60 mph*",
      Range: "390 mi (est.)",
      Drive: "Dual Motor All-Wheel Drive",
      Wheels: '19" or 21"',
      Weight: "4,416 lbs",
    },
  },
  {
    mName: "m3",
    title: "Model 3",
    imgSrc: E,
    specs: {
      Battery: "Long Range",
      Acceleration: "3.1s 0-60 mph*",
      Range: "315 miles (EPA est.)",
      Drive: "Dual Motor All-Wheel Drive",
      Wheels: '20"',
      Weight: "4,065 lbs",
    },
  },
  {
    mName: "mx",
    title: "Model X",
    imgSrc: X,
    specs: {
      "1/4 Mile": "9.9 s",
      "Peak Power": "1,020 hp",
      Acceleration: "2.5 s 0-60 mph†",
      Range: "340 mi (est.)",
      Drive: "Dual Motor All-Wheel Drive",
      Wheels: '20" or 22"',
      Weight: "5,390 lbs",
    },
  },
  {
    mName: "my",
    title: "Model Y",
    imgSrc: Y,
    specs: {
      Battery: "Long Range",
      Acceleration: "3.5s 0-60 mph*",
      Range: "303 miles (EPA est.)",
      Drive: "Dual Motor All-Wheel Drive",
      Wheels: '21"',
      Weight: "4,416 lbs",
    },
  },
];

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: fit-content;
  min-height: 100vh;
  background-color: black;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
const FeatureImageContainer = styled.div`
  flex: 50%;
  padding: clamp(0rem, 4rem, 6rem);
`;

const FeatureImage = styled.img`
  width: 100%;
  height: auto;

  flex: 1;
`;

const FeatureContent = styled.div`
  padding: 0%.5rem;
  background-color: black;
  color: white;
  flex: 50%;
  flex-direction: column;
  padding: clamp(0rem, 4rem, 6rem);
`;

const Features = ({ title }) => {
  let currSection;

  features.forEach((element) => {
    if (element.mName === title) currSection = element;
  });

  console.log(currSection);

  return (
    <Container className="center">
      <FeatureImageContainer>
        <FeatureImage src={currSection.imgSrc} alt={currSection.title} />
      </FeatureImageContainer>

      <FeatureContent className="center">
        <h1>
          <strong>{currSection.title}</strong> Specs
        </h1>
        <DisplayFeatures features={currSection.specs} />
      </FeatureContent>
    </Container>
  );
};

export default Features;
