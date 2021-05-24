import React from "react";
import HomeSection from "./HomeSection";
import ModS from "./modelS.png";
import Mod3 from "./model3.png";
import ModX from "./modelX.png";
import ModY from "./modelY.png";

const Home = () => {
  return (
    <>
      <HomeSection src={ModS} />
      <HomeSection src={Mod3} />
      <HomeSection src={ModX} />
      <HomeSection src={ModY} />
    </>
  );
};

export default Home;
