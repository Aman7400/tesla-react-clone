import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Container = styled.div`
  width: 100vw;
  height: fit-content;
  flex-direction: column;
  background-color: white;
  padding: clamp(0.5rem, 0.7rem, 1rem);
`;

const FooterList = styled.ul`
  display: flex;
  width: 80%;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const FooterListItem = styled.li`
  list-style: none;
  margin: 0.5rem;
  text-transform: uppercase;
  a {
    font-size: small;

    color: grey;
    text-decoration: none;
  }
`;

const Footer = () => {
  return (
    <Container className="center">
      <FooterList className="center">
        {[
          "Privacy & Legal",
          "Contact",
          "Get NewsLetters",
          "Career",
          "News",
          "Forums",
          "Locations",
        ].map((item, index) => {
          return (
            <FooterListItem key={index}>
              <Link to="#">{item}</Link>
            </FooterListItem>
          );
        })}
      </FooterList>
      <h6>
        <Link style={{ textDecoration: "none", color: "black" }} to="/">
          Tesla{" "}
          <span>
            <AiOutlineCopyrightCircle />
          </span>
        </Link>{" "}
        {new Date().getFullYear()}
      </h6>
    </Container>
  );
};

export default Footer;
