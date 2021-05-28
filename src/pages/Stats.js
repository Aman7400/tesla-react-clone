import React from "react";
import styled from "styled-components";

const Details = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0.5rem;
  width: clamp(5rem, 7rem, 10rem);
  /* width: min(400px, calc(70% + 100px)); */
  justify-content: space-around;

  color: white;
  text-shadow: 2px 2px 5px #000000;
`;

const Stats = ({ detail, title }) => {
  return (
    <Details className="center">
      <h2 style={{ flex: "1" }}>
        <strong>{detail}</strong>
      </h2>
      <h6 style={{ flex: "1" }}>{title}</h6>
    </Details>
  );
};

export default Stats;
