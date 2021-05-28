import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 1080px) {
    flex-direction: column;
  }
`;

const CardImageContainer = styled.div`
  flex: 50%;
  background-color: #000000;
  padding: clamp(2rem, 4rem, 6rem);
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;

  flex: 1;
`;

const CardContent = styled.div`
  padding: 0%.5rem;
  background-color: black;
  color: white;
  flex: 50%;
  flex-direction: column;
  padding: clamp(2rem, 4rem, 6rem);
`;

const InteriorCard = ({ orient, src, title }) => {
  return (
    <Card>
      <CardImageContainer>
        <CardImage src={src} />
      </CardImageContainer>
      <CardContent className="center">
        <h1>{title}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          itaque enim, assumenda aliquam vero velit id placeat quam consectetur
          officia suscipit fugit repellendus! Ex quaerat tempore asperiores,
          dignissimos rerum unde.
        </p>
      </CardContent>
    </Card>
  );
};

export default InteriorCard;
