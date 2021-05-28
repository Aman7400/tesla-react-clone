import React from "react";
import InteriorCard from "./InteriorCard";
import Interior1 from "./new-interior.jpg";

import Display from "./connected.jpg";
import Game from "./game.jpg";

const Interiors = () => {
  return (
    <div>
      <InteriorCard title="New Interior Design" src={Interior1} />
      <InteriorCard title="Cinematic Display" src={Display} />
      <InteriorCard title="Game from Everywhere" src={Game} />
    </div>
  );
};

export default Interiors;
