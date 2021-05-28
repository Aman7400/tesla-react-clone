import React from "react";
import styled from "styled-components";
import SpecsContainer from "./SpecsContainer";

import StatsContainer from "./StatsContainer";

const Container = styled.div`
  position: relative;
  width: 100vw;

  height: max-content;
`;

const BackgroundImage = styled.img`
  width: 100%;

  min-height: 100vh;

  object-fit: cover;
`;

const SectionHeader = ({ item }) => {
  return (
    <Container className="center">
      <BackgroundImage
        className="animate__animated
                animate__bounceInDown animate__slower"
        src={item.imgSrc}
        alt={item.title}
      />
      {Array.isArray(item.stats) ? (
        <SpecsContainer type={item.title} specs={item.stats} />
      ) : (
        <StatsContainer stats={item.stats} />
      )}
    </Container>
  );
};

export default SectionHeader;
