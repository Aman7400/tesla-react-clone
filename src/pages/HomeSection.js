import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: fit-content;
  flex-direction: column;
`;

const ModelImage = styled.img`
  width: 100%;

  height: 100vh;
  object-fit: cover;
`;

const Actions = styled.div`
  width: 20rem;
  position: absolute;
  top: 80%;

  @media (max-width: 780px) {
    flex-direction: column;
    padding: 0.5rem;
  }
`;

const HomeSection = (props) => {
  return (
    <Container className="center">
      <ModelImage src={props.src} />
      <Actions className="center">
        <button className="btn  btn-dark m-1">Custom Inventory</button>
        <button className="btn  btn-outline-light  m-1">
          Existing Inventory
        </button>
      </Actions>
    </Container>
  );
};

export default HomeSection;
