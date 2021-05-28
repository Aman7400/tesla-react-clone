import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0.5rem;
  width: clamp(5rem, 7rem, 10rem);
  /* width: min(400px, calc(70% + 100px)); */
  justify-content: space-around;
`;

const Specs = ({ icon, text }) => {
  return (
    <Container className="center">
      <h2>{icon}</h2>
      <p style={{ fontSize: "smaller", textAlign: "center" }}>{text}</p>
    </Container>
  );
};

export default Specs;
