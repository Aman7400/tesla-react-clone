import React from "react";
import styled from "styled-components";
import { GiSolarPower } from "react-icons/gi";
import { FiClock } from "react-icons/fi";
import { BiDollar } from "react-icons/bi";
import Specs from "./Specs";

const SpecContainer = styled.div`
  display: flex;
  position: absolute;
  top: 80%;
  padding: 0 1rem;
  border-radius: 5px;

  flex-direction: row;
  background-color: rgba(50, 48, 48, 0.5);

  color: white;
  @media (max-width: 780px) {
    flex-wrap: wrap;
    width: 100%;
  }
`;

const SpecsContainer = ({ specs, type }) => {
  const icons =
    type === "sroofs"
      ? [<GiSolarPower />, "3X", <FiClock />]
      : [<GiSolarPower />, <BiDollar />, "24/7"];

  return (
    <SpecContainer>
      <Specs icon={icons[0]} text={specs[0]} />
      <Specs icon={icons[1]} text={specs[1]} />
      <Specs icon={icons[2]} text={specs[2]} />
      <div className="center">
        <button className="btn btn-outline-light btn-md">Order Now</button>
      </div>
    </SpecContainer>
  );
};

export default SpecsContainer;
