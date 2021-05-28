import React from "react";
import styled from "styled-components";
import Brand from "./brand.svg";
import * as AIicons from "react-icons/ai";
import * as BSIcons from "react-icons/bs";
import * as VSIcons from "react-icons/vsc";
import { Link } from "react-router-dom";

const topItems = [
  { title: "Model S", path: "/model/ms" },
  { title: "Model 3", path: "/model/m3" },
  { title: "Model X", path: "/model/mx" },
  { title: "Model Y", path: "/model/my" },
  { title: "Solar Panels", path: "/model/spanels" },
  { title: "Solar Roofs", path: "/model/sroofs" },
];

const others = [
  { title: "Shop", path: "/model/shop", icon: <BSIcons.BsBag /> },

  { title: "Account", path: "/model/account", icon: <VSIcons.VscAccount /> },
];

const Nav = styled.nav`
  background-color: black;
  overflow-x: hidden;
  width: 100vw;
  position: fixed;
  top: 0;
  z-index: 1;

  height: 2.5rem;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
`;

const NavBrand = styled.div`
  width: 5rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavBrandImg = styled.img`
  width: 100%;
  height: auto;
  cursor: pointer;
`;

const ToggleMenu = styled.span`
  cursor: pointer;
  color: white;
  display: none;
  @media (max-width: 780px) {
    display: flex;
  }
`;

const NavMenu = styled.ul`
  list-style: none;
  display: none;
  @media (min-width: 780px) {
    display: flex;
  }
`;

const NavMenuItem = styled.li`
  color: white;
  margin: auto 0.5rem;
  font-size: 1rem;
  cursor: pointer;

  a {
    color: white;
    text-decoration: none;
  }
`;

// Sidebar

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  width: 20rem;
  height: 100vh;
  background-color: black;
  padding: 0.5rem;
  display: none;
  z-index: 2;

  transition: 850ms ease-in-out;
  @media (max-width: 780px) {
    display: flex;
  }
`;

const SidebarMenu = styled.ul`
  flex-direction: column;
  list-style: none;
  justify-content: space-evenly;

  display: flex;
  width: 100%;
  height: 80%;
  padding: 0.25rem;
`;

const SidebarMenuItem = styled(NavMenuItem)`
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  margin: 0;
  padding: 0.25rem;
  border-radius: 5px;
  a {
    text-decoration: none;
    color: white;
    text-transform: uppercase;
  }

  &:hover {
    background-color: white;
  }
  &:hover a {
    color: black;
  }
`;

const SidebarCloseIcon = styled.span`
  cursor: pointer;
  color: white;
`;

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Nav>
        <NavBrand className="animate__animated animate__fadeInDown animate__slow ">
          <Link to="/">
            <NavBrandImg src={Brand} alt="TESLA" />
          </Link>
        </NavBrand>
        <NavMenu className="center">
          {[...topItems].map((item, index) => {
            return (
              <NavMenuItem
                className="animate__animated animate__fadeInDown  animate__delay-2s"
                key={index}
              >
                <Link to={item.path}> {item.title} </Link>
              </NavMenuItem>
            );
          })}
        </NavMenu>
        <NavMenu>
          {[...others].map((item, index) => {
            return (
              <NavMenuItem
                className="animate__animated
                animate__fadeInDown
                animate__delay-3s"
                key={index}
              >
                <Link to={item.path}> {item.icon} </Link>
              </NavMenuItem>
            );
          })}
        </NavMenu>
        <ToggleMenu
          onClick={handleClick}
          className="center 
        "
        >
          <AIicons.AiOutlineMenu />
        </ToggleMenu>
      </Nav>

      {/* Sidebar */}

      <Sidebar className={open ? "center active" : " center not-active"}>
        <SidebarMenu onClick={() => setOpen(false)}>
          <SidebarMenuItem>
            <SidebarCloseIcon onClick={() => setOpen(false)}>
              <AIicons.AiOutlineClose />
            </SidebarCloseIcon>
          </SidebarMenuItem>

          {[...topItems, ...others].map((item, index) => {
            return (
              <SidebarMenuItem key={index}>
                <Link to={item.path}> {item.title} </Link>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </Sidebar>
    </>
  );
};

export default Navbar;
